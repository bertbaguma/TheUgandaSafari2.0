# Definitive Technical Blueprint: Uganda Safari (Firebase Edition)

## 1. Architecture & Stack
*   **Frontend:** React 18 (Vite) + TypeScript + Tailwind CSS.
*   **Hosting:** Firebase Hosting (CDN).
*   **Auth:** Firebase Authentication (Email/Password).
*   **Database:** Cloud Firestore (NoSQL).
*   **Backend Logic:** Firebase Cloud Functions (2nd Gen, Node.js 20).
*   **AI Engine:** Firebase Genkit (deployed on Cloud Functions).
*   **State Management:** Zustand (replacing Context API for better performance with the complex builder state).

## 2. Cloud Firestore Schema (Data Layer)

This schema maps the types.ts and constants.ts to a production NoSQL structure.

### 2.1 Core Content (Public Read / Admin Write)

**Collection: destinations**
*   `id`: string (auto-id)
*   `name`: string
*   `shortCode`: string
*   `parkFee`: number
*   `flyInAirstrip`: boolean
*   `activities`: Array<Object>
    *   `id`: string
    *   `name`: string
    *   `price`: number
    *   `unit`: 'per person' | 'per group' | 'per vehicle'
    *   `isFullDay`: boolean
    *   `includesParkEntryFee`: boolean
    *   `permitProcessingFee`: number

**Collection: lodges**
*   `id`: string (auto-id)
*   `destinationId`: string (Ref)
*   `name`: string
*   `isDefault`: boolean
*   `rooms`: Array<Object>
    *   `id`: string
    *   `name`: string (e.g., "Forest Cottage")
    *   `maxOccupancy`: number
    *   `pricingModel`: 'perPerson' | 'perNight'
    *   `lowSeasonPriceSingle`: number
    *   `lowSeasonPriceDouble`: number
    *   `highSeasonPriceSingle`: number
    *   `highSeasonPriceDouble`: number
    *   `lowSeasonPricePerNight`: number
    *   `highSeasonPricePerNight`: number

**Collection: flight_operators**
*   `id`: string
*   `name`: string

**Collection: flight_costs**
*   `id`: string
*   `fromLocationId`: string
*   `toLocationId`: string
*   `operatorId`: string
*   `costPerPerson`: number

### 2.2 Users & Actors (Secured)

**Collection: users**
*   `uid`: string (Auth Key)
*   `email`: string
*   `role`: 'admin' | 'consultant' | 'traveler'
*   `consultantProfileId`: string (Optional link if role is consultant)

**Collection: consultants**
*   `id`: string
*   `linkedUserId`: string (Ref to users)
*   `name`, `bio`, `imageUrl`: string
*   `isAvailable`: boolean
*   `specialties`: string[]
*   `commissionRate`: number (Default 0.15)
*   `adminCommissionRateOverride`: number | null
*   `canSetCommissionRate`: boolean
*   `transportRates` (Map):
    *   `road`: { cruiser: number, van: number }
*   `lodgeRates` (Sub-collection or Large Array)
    *   Note: Due to nesting depth, store as an Array on the document if < 1MB, otherwise subcollection.
    *   `lodgeId`: string
    *   `commission`: number (Override default)
    *   `sellingRateOverrides`: Array<Object> (Specific room price overrides)

### 2.3 Transactions

**Collection: itineraries**
*   `id`: string (e.g., 'TU-8X92')
*   `travelerUid`: string (Owner)
*   `consultantId`: string (Assigned Expert)
*   `status`: 'planning' | 'pending_confirmation' | 'confirmed' | 'completed' | 'cancelled'
*   `startDate`: Timestamp
*   `duration`: number
*   `totalPrice`: number
*   `commissionableSubtotal`: number
*   `nonCommissionableSubtotal`: number
*   `stops`: Array<Object> (Matches ItineraryStop in types.ts)
*   `transportSettings`: Array<Object> (Matches TransportSetting)

**Collection: reviews**
*   `id`: string
*   `itineraryId`: string
*   `consultantId`: string
*   `rating`: number
*   `comment`: string
*   `consultantReply`: string

## 3. Backend Logic (Cloud Functions)

Since the frontend calculates prices for UI speed, the backend MUST re-validate these prices to prevent tampering.

### A. Core Functions (HTTPS Callables)

**itinerary-create / itinerary-update**
*   **Input:** Full itinerary object (stops, transport, dates).
*   **Logic:**
    1.  Fetch fresh pricing data from lodges, destinations, consultants (for overrides), and flight_costs from Firestore.
    2.  Re-run the pricing algorithm (mirroring ItineraryBuilderPage.tsx) server-side.
    3.  Verify the totalPrice matches the calculated value.
    4.  Save to Firestore.
*   **Reason:** Ensures a malicious user cannot send { "totalPrice": 1 } for a luxury safari.

**booking-submit**
*   **Input:** { itineraryId, travelerDetails }
*   **Logic:**
    1.  Changes status to pending_confirmation.
    2.  Triggers Firebase Email Extension to notify the Consultant.

**consultant-updateProfile**
*   **Logic:** Allows consultants to update their bio/rates.
*   **Security:** Validates request.auth.uid matches the consultant's linkedUserId. Prevents editing adminCommissionRateOverride.

### B. AI Analytics (Firebase Genkit)

These flows replace the geminiService.ts logic.

**Flow: analytics-generateConsultantReport**
*   **Input:** { consultantId, dateRange }
*   **Logic:**
    1.  Query itineraries (status: confirmed/completed) for the consultant in range.
    2.  Query reviews for the consultant.
    3.  Calculate: Conversion rate, Total Revenue, Avg Rating.
*   **Genkit Node:** Pass metrics to gemini-1.5-flash.
*   **Prompt:** "Act as a business coach. Summarize performance based on [Metrics]. Be encouraging."
*   **Output:** { summary: string }

**Flow: analytics-generatePlatformOverview**
*   **Input:** { dateRange }
*   **Logic:** Aggregates global revenue and booking stats. Uses Genkit to generate an "Executive Summary" for the Admin Dashboard.

## 4. Frontend Architecture Refinements

### 4.1 State Management (Zustand)
*   Migrate from AppContext to Zustand stores for better performance.
*   `useBuilderStore`: Handles the complex draftItinerary object, drag-and-drop reordering actions, and real-time price estimation.
*   `useAuthStore`: Handles user session and role.
*   `useReferenceDataStore`: Caches destinations, lodges, and flightCosts to avoid repeated Firestore reads during the builder session.

### 4.2 Data Fetching (TanStack Query)
*   Replace useEffect data fetching with React Query.
*   **Why:** Automatic caching, background refetching, and handling loading/error states for `useQuery(['consultants'])`, `useQuery(['trips', user.email])`.

### 4.3 Component Strategy
*   **ItineraryBuilderPage:** Keep the client-side pricing logic for instant feedback (the "Live Quote" sidebar).
*   **Crucial:** Extract the pricing logic into a shared utility file (`/utils/pricingEngine.ts`) that can be unit tested and potentially shared with the backend (if using a monorepo) or manually synced.
*   **BookingPage:** On mount, re-fetch the latest itinerary data to ensure no stale state.

## 5. Security Rules (Firestore)

Strict Role-Based Access Control (RBAC) is non-negotiable.

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper to check role
    function hasRole(role) {
      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == role;
    }
  
    // Destinations/Lodges: Public Read, Admin Write
    match /destinations/{d} { allow read: if true; allow write: if hasRole('admin'); }
    match /lodges/{l} { allow read: if true; allow write: if hasRole('admin'); }
    
    // Itineraries
    match /itineraries/{id} {
      allow create: if request.auth != null;
      // Read: Owner, Assigned Consultant, or Admin
      allow read: if request.auth.uid == resource.data.travelerUid 
                  || request.auth.uid == resource.data.consultantId 
                  || hasRole('admin');
      // Update: Owner (Draft only), Consultant, Admin
      allow update: if (request.auth.uid == resource.data.travelerUid && resource.data.status == 'planning')
                    || (hasRole('consultant') && resource.data.consultantId == request.auth.uid)
                    || hasRole('admin');
    }
    
    // Consultant Profiles
    match /consultants/{id} {
      allow read: if true;
      // Write: Admin or the consultant themselves
      allow write: if hasRole('admin') || (request.auth.uid == resource.data.linkedUserId);
    }
  }
}
```

## 6. Implementation Plan (The "Start" Order)
1.  **Scaffold:** Vite + React + TypeScript. Install firebase, zustand, @tanstack/react-query.
2.  **Firebase Init:** Enable Auth, Firestore, Functions.
3.  **Data Seeding:** Write a script to push constants.ts (Destinations, Lodges, Flights) into Firestore. Do not build the UI until data is in DB.
4.  **Auth Layer:** Implement Login/Signup.
5.  **Builder Core:** Port ItineraryBuilderPage.tsx. Connect it to Firestore (Read-only for destinations). Implement useBuilderStore.
6.  **Pricing Engine:** Extract pricing logic. Implement the "Save" function to call the backend.
7.  **Dashboards:** Build Admin/Consultant views.
8.  **Genkit:** Deploy the Analytics flows.

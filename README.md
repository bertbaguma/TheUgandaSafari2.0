Get started by customizing your environment (defined in the .idx/dev.nix file) with the tools and IDE extensions you'll need for your project!

This is a comprehensive Uganda Safari Itinerary Builder. It is a sophisticated React application designed to bridge the gap between travelers wanting a bespoke safari experience and local Ugandan travel consultants.

Here is a detailed breakdown of the application's functions and capabilities:

1. Core Core Functionality: The Itinerary Builder
The heart of the app is a complex, interactive planning tool (ItineraryBuilderPage) that allows users to construct a multi-day trip from scratch.
Drag-and-Drop Interface: Users can reorder days and stops using a drag-and-drop interface.
Dynamic Pricing Engine: The app calculates costs in real-time based on complex logic:
Seasonality: Checks dates to apply High vs. Low season rates for lodges.
Occupancy: Calculates room costs based on single, double, or family occupancy.
Permits & Fees: Automatically adds Park Entry Fees (per 24h) and specific activity permits (e.g., Gorilla Trekking permits).
Transport Logic: Calculates costs for 4x4 Land Cruisers vs. Safari Vans based on the number of days on the road, or calculates flight costs for specific "Fly-in" legs.
Smart Constraints: It warns users if a stop is too short for selected activities (e.g., "A 2-night stay is recommended for full-day habituation experiences").
Activity Management: Users can toggle morning, afternoon, or full-day activities for every destination.
2. The Consultant Ecosystem
The app is built around a "Consultant-First" model, connecting users with vetted experts.
Experts Hub: A directory where users can browse consultant profiles (ExpertsHubPage), sort them by rating or experience, and read bio/specialties.
Consultant Dashboard: A dedicated view for consultants (ConsultantDashboardPage) that includes:
AI Business Coach: Uses Google Gemini to analyze the consultant's recent performance (revenue, conversion rate, ratings) and generates a motivational, data-driven summary.
Trip Management: Consultants can view trips assigned to them, change statuses (Planning -> Confirmed), and edit itinerary details.
Profile Management: Consultants can edit their bio, set their commission rates (within platform limits), and manage specific negotiated rates for lodges.
3. Booking & Trip Management
Booking Flow: Once an itinerary is built, the user proceeds to booking (BookingPage).
Price Comparison: It shows the "Rack Rate" (standard price) versus the "Final Price" (which may include consultant-specific discounts or fees).
Verification: It simulates email verification.
Email Simulation: It simulates sending confirmation emails to both the traveler and the consultant.
Trip Lookup: Users can retrieve their saved trips using their email address via the TripManagementPage.
Status Tracking: Trips move through lifecycle states: Planning → Pending Confirmation → Confirmed → Completed → Cancelled.
4. Admin & Back-Office
The app includes a fully functional CMS (Content Management System) for administrators (AdminHubPage).
CRUD Operations: Admins can Create, Read, Update, and Delete:
Destinations: (e.g., Bwindi, Queen Elizabeth NP) including park fees and descriptions.
Lodges & Rooms: Managing pricing models (Per Person vs. Per Night) and seasonality.
Activities: Setting prices and permit fees.
Consultants: Managing the roster of experts.
Flight Logistics: Managing flight operators (e.g., Aerolink) and route costs.
Platform Reporting (ReportsPage):
Visual Analytics: Bar charts and line graphs visualizing revenue growth, lodge popularity, and visitor numbers.
AI Analyst: Uses Google Gemini to generate executive summaries of the platform's overall health, comparing current metrics against previous periods.
5. Technical Features
AI Integration (@google/genai):
Used in dashboards to generate natural language summaries of complex data sets.
Used to generate itinerary suggestions (in the code, though currently mocked/fallback).
Mock Backend (LocalStorage): The app uses a sophisticated apiService that mimics a real backend database using the browser's localStorage. This allows the app to persist data (created trips, new consultants, edits) across page reloads without a real server.
Dark Mode: Fully supported via Tailwind CSS.
Responsive Design: Works on mobile and desktop, with mobile-specific navigation.
Summary
In short, this is a vertical SaaS marketplace for the Ugandan tourism industry. It empowers travelers to self-serve complex planning while relying on human experts for finalization and booking, all powered by a robust client-side pricing engine and AI analytics.

Learn more at https://developers.google.com/idx/guides/customize-idx-env
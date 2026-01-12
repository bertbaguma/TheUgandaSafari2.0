
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../config/firebase';

// Importing all necessary types from the central types export
import { 
  Itinerary, 
  ItineraryStatus, 
  Review, 
  Consultant, 
  FlightOperator, 
  FlightCost as FlightLegCost, // Aliasing to match demo, assuming it's the same type
  Destination,
  TransportCosts
} from '../types';

// This type was missing from the main types export, so we define it here for now.
// It's based on the data we seeded into the 'configs' collection.
export type SafariCircuitSuggestions = Record<string, string[]>;


// --- GENERIC HELPER FUNCTIONS for Firestore ---

const getCollection = async <T>(collectionName: string): Promise<T[]> => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as T));
};

const getDocument = async <T>(collectionName:string, id: string): Promise<T | null> => {
  const docSnap = await getDoc(doc(db, collectionName, id));
  return docSnap.exists() ? { ...docSnap.data(), id: docSnap.id } as T : null;
};

const addDocument = async <T extends object>(collectionName: string, data: T): Promise<T & { id: string }> => {
    const docToSave = { ...data, createdAt: Timestamp.now() };
    const docRef = await addDoc(collection(db, collectionName), docToSave);
    return { ...data, id: docRef.id, createdAt: docToSave.createdAt } as T & { id: string };
};

const updateDocument = async <T extends {id: string}>(collectionName: string, data: T): Promise<T> => {
    const { id, ...dataToUpdate } = data;
    await updateDoc(doc(db, collectionName, id), dataToUpdate);
    return data;
};

const deleteDocument = async (collectionName: string, id: string): Promise<void> => {
    await deleteDoc(doc(db, collectionName, id));
};

const queryCollection = async <T>(firestoreQuery: any): Promise<T[]> => {
    const querySnapshot = await getDocs(firestoreQuery);
    return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as T));
}

// --- API SERVICE IMPLEMENTATION ---

export const apiService = {
  // Itinerary Methods
  saveItinerary: (itinerary: Omit<Itinerary, 'id'>) => addDocument<Omit<Itinerary, 'id'>>('itineraries', { ...itinerary, status: 'pending' }),
  updateItinerary: (updatedItinerary: Itinerary) => updateDocument<Itinerary>('itineraries', updatedItinerary),
  getAllItineraries: () => getCollection<Itinerary>('itineraries'),
  getItinerariesByEmail: (email: string) => queryCollection<Itinerary>(query(collection(db, "itineraries"), where("travelerEmail", "==", email))),
  getItinerariesByConsultant: (consultantId: string) => queryCollection<Itinerary>(query(collection(db, "itineraries"), where("consultantId", "==", consultantId))),
  
  // Review Methods
  verifyItineraryForReview: async (itineraryId: string): Promise<{ canReview: boolean; consultantId: string | null; error?: string }> => {
    const itinerary = await getDocument<Itinerary>('itineraries', itineraryId);
    if (!itinerary) {
      return { canReview: false, consultantId: null, error: 'Itinerary ID not found.' };
    }

    const allowedStatuses: ItineraryStatus[] = ['confirmed', 'completed', 'cancelled'];
    if (!allowedStatuses.includes(itinerary.status)) {
      return { canReview: false, consultantId: null, error: 'Reviews can only be left for trips that are confirmed, completed, or cancelled.' };
    }

    const q = query(collection(db, "reviews"), where("itineraryId", "==", itineraryId));
    const existingReviews = await queryCollection<Review>(q);
    
    if (existingReviews.length > 0) {
      return { canReview: false, consultantId: null, error: 'A review has already been submitted for this trip.' };
    }
    
    return { canReview: true, consultantId: itinerary.consultantId };
  },

  submitReview: (review: Omit<Review, 'id'>) => addDocument<Omit<Review, 'id'>>('reviews', review),
  updateReview: (updatedReview: Review) => updateDocument<Review>('reviews', updatedReview),
  getReviewsByConsultant: (consultantId: string) => queryCollection<Review>(query(collection(db, 'reviews'), where('consultantId', '==', consultantId))),
  getAllReviews: () => getCollection<Review>('reviews'),
  deleteReview: (id: string) => deleteDocument('reviews', id),

  // Consultant Methods
  getAllConsultants: () => getCollection<Consultant>('consultants'),
  getConsultantById: (id: string) => getDocument<Consultant>('consultants', id),
  addConsultant: (consultant: Omit<Consultant, 'id'>) => addDocument<Omit<Consultant, 'id'>>('consultants', consultant),
  updateConsultant: (updatedConsultant: Consultant) => updateDocument<Consultant>('consultants', updatedConsultant),
  deleteConsultant: (id: string) => deleteDocument('consultants', id),
  
  // Flight Data Methods
  getAllFlightOperators: () => getCollection<FlightOperator>('flightOperators'),
  addFlightOperator: (operator: Omit<FlightOperator, 'id'>) => addDocument<Omit<FlightOperator, 'id'>>('flightOperators', operator),
  updateFlightOperator: (updatedOperator: FlightOperator) => updateDocument<FlightOperator>('flightOperators', updatedOperator),
  deleteFlightOperator: (id: string) => deleteDocument('flightOperators', id),

  getAllFlightCosts: () => getCollection<FlightLegCost>('flightCosts'),
  addFlightCost: (cost: Omit<FlightLegCost, 'id'>) => addDocument<Omit<FlightLegCost, 'id'>>('flightCosts', cost),
  updateFlightCost: (updatedCost: FlightLegCost) => updateDocument<FlightLegCost>('flightCosts', updatedCost),
  deleteFlightCost: (id: string) => deleteDocument('flightCosts', id),

  // Read-only data from seeded collections
  getDestinations: () => getCollection<Destination>('destinations'),
  getTransportCosts: () => getDocument<TransportCosts>('configs', 'transportCosts'),
  getSafariCircuitSuggestions: () => getDocument<SafariCircuitSuggestions>('configs', 'safariCircuitSuggestions'),

  // Simulated Email Service
  sendEmail: async (params: { to: string; subject: string; body: string }): Promise<{ success: boolean }> => {
    console.log('--- SIMULATING EMAIL DISPATCH ---');
    console.log(`To: ${params.to}`);
    console.log(`Subject: ${params.subject}`);
    console.log('Body:');
    console.log(params.body);
    console.log('-------------------------------');
    await new Promise(res => setTimeout(res, 500));
    return { success: true };
  },
};

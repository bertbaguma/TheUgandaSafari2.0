import { create } from 'zustand';
import { Itinerary, TripDay } from '../types';
import { v4 as uuidv4 } from 'uuid'; // We'll need to mock this or use a simple random string

// Helper to generate IDs if uuid isn't available
const generateId = () => Math.random().toString(36).substr(2, 9);

interface BuilderState {
  currentItinerary: Itinerary | null;
  isDirty: boolean; // Unsaved changes

  // Actions
  initializeNewTrip: (userId: string) => void;
  updateTripDetails: (details: Partial<Itinerary>) => void;
  addDay: () => void;
  removeDay: (dayId: string) => void;
  reorderDays: (startIndex: number, endIndex: number) => void;
  updateDay: (dayId: string, updates: Partial<TripDay>) => void;
  saveTrip: () => Promise<void>;
  calculateTotalCost: () => void;
}

const DEFAULT_TRIP: Partial<Itinerary> = {
  title: 'My Uganda Safari',
  numberOfAdults: 2,
  numberOfChildren: 0,
  transportType: 'land-cruiser',
  status: 'planning',
  days: [],
  totalCost: 0,
};

export const useBuilderStore = create<BuilderState>((set, get) => ({
  currentItinerary: null,
  isDirty: false,

  initializeNewTrip: (userId) => {
    set({
      currentItinerary: {
        ...DEFAULT_TRIP,
        id: generateId(),
        userId,
        startDate: new Date().toISOString().split('T')[0],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      } as Itinerary,
      isDirty: false,
    });
  },

  updateTripDetails: (details) => {
    set((state) => {
      if (!state.currentItinerary) return {};
      return {
        currentItinerary: { ...state.currentItinerary, ...details },
        isDirty: true,
      };
    });
    get().calculateTotalCost();
  },

  addDay: () => {
    set((state) => {
      if (!state.currentItinerary) return {};
      const newDay: TripDay = {
        id: generateId(),
        dayNumber: state.currentItinerary.days.length + 1,
        activities: [],
      };
      return {
        currentItinerary: {
          ...state.currentItinerary,
          days: [...state.currentItinerary.days, newDay],
        },
        isDirty: true,
      };
    });
    get().calculateTotalCost();
  },

  removeDay: (dayId) => {
    set((state) => {
      if (!state.currentItinerary) return {};
      const newDays = state.currentItinerary.days
        .filter((d) => d.id !== dayId)
        .map((d, index) => ({ ...d, dayNumber: index + 1 })); // Re-index days

      return {
        currentItinerary: {
          ...state.currentItinerary,
          days: newDays,
        },
        isDirty: true,
      };
    });
    get().calculateTotalCost();
  },

  reorderDays: (startIndex, endIndex) => {
     set((state) => {
      if (!state.currentItinerary) return {};
      const days = [...state.currentItinerary.days];
      const [movedDay] = days.splice(startIndex, 1);
      days.splice(endIndex, 0, movedDay);

      // Re-index day numbers
      const reindexedDays = days.map((d, index) => ({ ...d, dayNumber: index + 1 }));

      return {
        currentItinerary: {
          ...state.currentItinerary,
          days: reindexedDays,
        },
        isDirty: true,
      };
    });
  },

  updateDay: (dayId, updates) => {
    set((state) => {
      if (!state.currentItinerary) return {};
      const newDays = state.currentItinerary.days.map((day) =>
        day.id === dayId ? { ...day, ...updates } : day
      );
      return {
        currentItinerary: { ...state.currentItinerary, days: newDays },
        isDirty: true,
      };
    });
    get().calculateTotalCost();
  },

  saveTrip: async () => {
    // Simulate API save
    await new Promise((resolve) => setTimeout(resolve, 500));
    set({ isDirty: false });
    console.log('Trip saved:', get().currentItinerary);
  },

  calculateTotalCost: () => {
    // Placeholder for the complex pricing engine logic
    // We will implement the seasonality, occupancy, and permit logic here later
    set((state) => {
        if(!state.currentItinerary) return {};
        // ultra-simplified calc for now
        const baseCost = 1000; 
        const dayCost = state.currentItinerary.days.length * 200;
        return {
            currentItinerary: {
                ...state.currentItinerary,
                totalCost: baseCost + dayCost
            }
        }
    })
  },
}));

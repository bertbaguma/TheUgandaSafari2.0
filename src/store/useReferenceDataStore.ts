import { create } from 'zustand';
import { Destination, Lodge, Activity } from '../types';
import { DESTINATIONS, LODGES } from '../data';

interface ReferenceDataState {
  destinations: Destination[];
  lodges: Lodge[];
  activities: Activity[];
  isLoading: boolean;
  fetchData: () => Promise<void>;
}

export const useReferenceDataStore = create<ReferenceDataState>((set) => ({
  destinations: [],
  lodges: [],
  activities: [],
  isLoading: false,

  fetchData: async () => {
    set({ isLoading: true });
    // Simulate API fetch
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    set({
      destinations: DESTINATIONS,
      lodges: LODGES,
      activities: DESTINATIONS.flatMap(d => d.activities),
      isLoading: false,
    });
  },
}));

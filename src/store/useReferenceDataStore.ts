import { create } from 'zustand';
import { Destination, Lodge, Activity } from '../types';

interface ReferenceDataState {
  destinations: Destination[];
  lodges: Lodge[];
  activities: Activity[];
  isLoading: boolean;
  fetchData: () => Promise<void>;
}

// Initial Mock Data
const MOCK_DESTINATIONS: Destination[] = [
  {
    id: 'd1',
    name: 'Bwindi Impenetrable NP',
    description: 'Home to nearly half of the world\'s remaining mountain gorillas.',
    imageUrl: 'https://images.unsplash.com/photo-1576595460877-e2311749557b?q=80&w=1000&auto=format&fit=crop',
    parkFeePerDay: 40,
    coordinates: { lat: -1.048, lng: 29.695 },
    activities: [
      {
        id: 'a1',
        name: 'Gorilla Trekking',
        description: 'Once-in-a-lifetime encounter with mountain gorillas.',
        price: 0,
        permitNeeded: true,
        permitCost: 700,
        duration: 'morning',
      },
      {
        id: 'a2',
        name: 'Batwa Cultural Experience',
        description: 'Learn about the ancient traditions of the Batwa people.',
        price: 80,
        permitNeeded: false,
        duration: 'afternoon',
      }
    ],
  },
  {
    id: 'd2',
    name: 'Queen Elizabeth NP',
    description: 'Uganda\'s most popular savannah park featuring tree-climbing lions.',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop',
    parkFeePerDay: 40,
    coordinates: { lat: -0.197, lng: 30.088 },
    activities: [
      {
        id: 'a3',
        name: 'Game Drive',
        description: 'Morning or evening drive to spot lions, elephants, and buffaloes.',
        price: 40,
        permitNeeded: false,
        duration: 'morning',
      },
      {
        id: 'a4',
        name: 'Kazinga Channel Boat Cruise',
        description: 'See hippos and crocodiles up close.',
        price: 30,
        permitNeeded: false,
        duration: 'afternoon',
      }
    ],
  },
];

const MOCK_LODGES: Lodge[] = [
  {
    id: 'l1',
    destinationId: 'd1',
    name: 'Buhoma Lodge',
    description: 'Luxury lodge with stunning forest views.',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
    tier: 'luxury',
    pricing: {
      highSeason: { single: 600, double: 900, family: 1500 },
      lowSeason: { single: 450, double: 700, family: 1100 },
    },
  },
  {
    id: 'l2',
    destinationId: 'd1',
    name: 'Ride 4 A Woman',
    description: 'Community-run guesthouse supporting local women.',
    imageUrl: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1000&auto=format&fit=crop',
    tier: 'budget',
    pricing: {
      highSeason: { single: 80, double: 120, family: 200 },
      lowSeason: { single: 60, double: 90, family: 150 },
    },
  },
  {
    id: 'l3',
    destinationId: 'd2',
    name: 'Mweya Safari Lodge',
    description: 'Iconic lodge located on the peninsula within the heart of the park.',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop',
    tier: 'luxury',
    pricing: {
      highSeason: { single: 550, double: 850, family: 1400 },
      lowSeason: { single: 400, double: 650, family: 1000 },
    },
  },
];

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
      destinations: MOCK_DESTINATIONS,
      lodges: MOCK_LODGES,
      activities: MOCK_DESTINATIONS.flatMap(d => d.activities),
      isLoading: false,
    });
  },
}));

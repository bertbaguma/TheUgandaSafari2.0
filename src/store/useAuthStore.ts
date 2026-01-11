import { create } from 'zustand';
import { User, Consultant } from '../types';

interface AuthState {
  user: User | Consultant | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, role: User['role']) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

// Mock user data for simulation
const MOCK_USERS: Record<string, User | Consultant> = {
  'traveler@example.com': {
    id: 'u1',
    name: 'John Traveler',
    email: 'traveler@example.com',
    role: 'traveler',
    createdAt: new Date().toISOString(),
  },
  'consultant@example.com': {
    id: 'c1',
    name: 'Sarah Expert',
    email: 'consultant@example.com',
    role: 'consultant',
    bio: 'Expert in primate safaris and bird watching across Uganda.',
    specialties: ['Gorilla Trekking', 'Birding'],
    experienceYears: 8,
    rating: 4.8,
    reviewCount: 124,
    commissionRate: 0.12,
    activeTrips: 5,
    totalRevenue: 150000,
    createdAt: new Date().toISOString(),
  },
  'admin@example.com': {
    id: 'a1',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    createdAt: new Date().toISOString(),
  },
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (email, role) => {
    set({ isLoading: true });
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Simple mock login logic
    const mockUser = MOCK_USERS[email] || {
      id: Math.random().toString(36).substr(2, 9),
      name: email.split('@')[0],
      email,
      role,
      createdAt: new Date().toISOString(),
    };

    set({ 
      user: mockUser, 
      isAuthenticated: true, 
      isLoading: false 
    });
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  updateProfile: (data) => {
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : null,
    }));
  },
}));

// This file defines all shared TypeScript types used across the application,
// ensuring consistency and providing a single source of truth for data structures.

export interface Activity {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: 'per person' | 'per guide' | 'per vehicle' | 'per group';
  includesParkEntryFee: boolean;
  requiresVehicle?: boolean;
  isFullDay?: boolean;
  permitProcessingFee?: number;
  durationTag?: 'Morning' | 'Afternoon' | 'All-day';
}

export interface Destination {
  id: string;
  name: string;
  shortCode?: string;
  hint?: string;
  description: string;
  imageUrl: string;
  parkFee: number;
  flyInAirstrip?: boolean;
  activities: Activity[];
  keywords?: string[];
}

export interface Room {
  id:string;
  name: string;
  maxOccupancy: number;
  pricingModel: 'perPerson' | 'perNight';

  // For 'perPerson' model
  lowSeasonPriceSingle?: number;
  lowSeasonPriceDouble?: number; // per person rate
  highSeasonPriceSingle?: number;
  highSeasonPriceDouble?: number; // per person rate

  // For 'perNight' model
  lowSeasonPricePerNight?: number; // flat rate for the room
  highSeasonPricePerNight?: number;
}


export interface Lodge {
  id: string;
  name: string;
  destinationId: string;
  isDefault: boolean;
  rooms: Room[];
  imageUrl?: string;
  keywords?: string[];
  features?: string[];
}

export interface LodgeRateOverride extends Partial<Pick<Room, 
  'lowSeasonPriceSingle' | 
  'lowSeasonPriceDouble' | 
  'highSeasonPriceSingle' | 
  'highSeasonPriceDouble' | 
  'lowSeasonPricePerNight' | 
  'highSeasonPricePerNight'
>> {
  roomId: string;
}

export interface ConsultantLodgeRate {
  lodgeId: string;
  commission: number; // e.g. 0.20 for 20%
  sellingRateOverrides?: LodgeRateOverride[];
}

export interface Consultant {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  bio: string;
  imageUrl: string;
  specialties: string[];
  isAvailable: boolean;
  commissionRate?: number; // This is the consultant-set rate
  adminCommissionRateOverride?: number; // Admin-set override, takes precedence
  canSetCommissionRate?: boolean; // Admin flag to allow/disallow editing of commissionRate
  showCommissionRateOnProfile?: boolean; // Control visibility on public profile
  socials?: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
  };
  company?: {
    name: string;
    website: string;
    tier: 'Budget' | 'Mid-range' | 'High-end' | 'Mid-range to High-end';
    utbLicensed: boolean;
    autoMember: boolean;
  };
  transportRates?: {
    road?: {
      cruiser?: number;
      van?: number;
    };
  };
  lodgeRates?: ConsultantLodgeRate[];
}

export interface Review {
  id: string;
  itineraryId: string;
  consultantId: string;
  travelerName: string;
  rating: number;
  comment: string;
  consultantReply?: string;
}

export interface ItineraryStop {
  id: string;
  destinationId: string;
  lodgeId: string | null;
  roomId: string | null;
  numberOfNights: number;
  activities: string[][]; // Array of days, each day is an array of activity IDs
}

export type ItineraryStatus = 'planning' | 'pending_confirmation' | 'confirmed' | 'completed' | 'cancelled';

export interface Itinerary {
  id: string;
  title: string;
  travelerName: string;
  travelerEmail: string;
  travelerPhone?: string;
  duration: number; // Represents the total number of nights. Total days = duration + 1.
  stops: ItineraryStop[];
  consultantId: string;
  status: ItineraryStatus;
  startDate: string;
  travelerCount: number;
  startLocation: 'entebbe' | 'kigali';
  endLocation: 'entebbe' | 'kigali';
  totalPrice: number;
}

export interface TransportSetting {
    id: string;
    type: 'road' | 'fly-in';
    vehicle?: 'cruiser' | 'van';
    operatorId?: string;
}

export type User = {
  id: string;
  name: string;
  role: 'admin' | 'consultant';
  imageUrl?: string;
};

export enum View {
  Home = 'HOME',
  ItineraryBuilder = 'ITINERARY_BUILDER',
  ExpertsHub = 'EXPERTS_HUB',
  ConsultantDashboard = 'CONSULTANT_DASHBOARD',
  TripManagement = 'TRIP_MANAGEMENT',
  AdminHub = 'ADMIN_HUB',
  TripDashboard = 'TRIP_DASHBOARD',
  Booking = 'BOOKING',
  EditProfile = 'EDIT_PROFILE',
  ReviewManagement = 'REVIEW_MANAGEMENT',
  Help = 'HELP',
  Reports = 'REPORTS',
  Blog = 'BLOG',
}

export interface DraftItinerary {
  stops: ItineraryStop[];
  transportSettings: TransportSetting[];
  startDate: string;
  travelerCount: number;
  startLocation: 'entebbe' | 'kigali';
  endLocation: 'entebbe' | 'kigali';
  consultantId: string | null;
}

export interface BookingItinerary extends Omit<Itinerary, 'consultantId' | 'travelerName' | 'travelerEmail' | 'travelerPhone'> {
  commissionableSubtotal: number;
  nonCommissionableSubtotal: number;
  transportSettings: TransportSetting[];
}

export interface FlightOperator {
  id: string;
  name: string;
}

export interface FlightLegCost {
  id: string;
  from: string; // destinationId
  to: string; // destinationId
  cost: number;
  operatorId: string;
}

export interface DestinationPerformanceData {
    id: string;
    name: string;
    imageUrl: string;
    totalVisitors: number;
    totalNights: number;
    totalRevenue: number;
    avgSpendPerNight: number;
    mostPopularLodge: string;
}

export interface LodgePerformanceData {
    id: string;
    name: string;
    destinationName: string;
    totalNights: number;
    totalBookings: number;
    totalRevenue: number;
    avgSpendPerNight: number;
    mostPopularRoom: string;
}

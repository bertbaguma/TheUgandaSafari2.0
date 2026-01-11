import { TransportSetting } from './transport';

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

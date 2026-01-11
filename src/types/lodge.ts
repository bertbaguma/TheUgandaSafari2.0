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

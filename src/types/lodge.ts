
export type PricingModel = 'perPerson' | 'perNight';

export interface LodgeRoom {
  id: string;
  name: string;
  maxOccupancy: number;
  pricingModel: PricingModel;
  lowSeasonPriceSingle?: number;
  lowSeasonPriceDouble?: number;
  highSeasonPriceSingle?: number;
  highSeasonPriceDouble?: number;

  // For 'perNight' pricing model
  lowSeasonPricePerNight?: number;
  highSeasonPricePerNight?: number;
}

export interface Lodge {
  id: string;
  name: string;
  destinationId: string;
  isDefault: boolean;
  imageUrl?: string;
  keywords?: string[];
  features?: string[];
  rooms: LodgeRoom[];
}

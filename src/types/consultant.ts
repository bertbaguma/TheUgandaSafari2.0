
import { LodgeRoom } from './lodge';

// Use Pick to create a type with only the price properties from LodgeRoom
export type PriceOverrides = Partial<Pick<LodgeRoom, 
  'lowSeasonPriceSingle' | 
  'lowSeasonPriceDouble' | 
  'highSeasonPriceSingle' | 
  'highSeasonPriceDouble' | 
  'lowSeasonPricePerNight' | 
  'highSeasonPricePerNight'
>>;

export interface LodgeRateOverride extends PriceOverrides {
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
  commissionRate?: number; 
  showCommissionRateOnProfile?: boolean; 
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

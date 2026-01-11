import { Room } from './lodge';

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

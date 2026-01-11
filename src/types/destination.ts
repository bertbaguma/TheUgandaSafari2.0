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

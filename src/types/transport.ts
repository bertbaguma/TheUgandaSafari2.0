export interface TransportSetting {
    id: string;
    type: 'road' | 'fly-in';
    vehicle?: 'cruiser' | 'van';
    operatorId?: string;
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

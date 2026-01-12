import { FlightOperator, FlightLegCost } from '../types';

export const TRANSPORT_COSTS = {
  road: {
    cruiser: 300, // per day for a 4x4 Safari Cruiser
    van: 200,     // per day for a 4x4 Safari Van
  },
  flyIn: 300, // Fallback average cost per person, per leg
};

export const FLIGHT_OPERATORS: FlightOperator[] = [
    { id: 'op_aerolink', name: 'Aerolink' },
];

export const FLIGHT_COSTS: FlightLegCost[] = [
    // Entebbe Hub
    { id: 'fc_1', from: 'entebbe', to: 'murchison-falls', cost: 260, operatorId: 'op_aerolink' },
    { id: 'fc_2', from: 'entebbe', to: 'kidepo-valley', cost: 450, operatorId: 'op_aerolink' },
    { id: 'fc_3', from: 'entebbe', to: 'queen-elizabeth', cost: 250, operatorId: 'op_aerolink' },
    { id: 'fc_4', from: 'entebbe', to: 'kibale', cost: 250, operatorId: 'op_aerolink' },
    { id: 'fc_5', from: 'entebbe', to: 'bwindi', cost: 290, operatorId: 'op_aerolink' }, // Kihihi
    { id: 'fc_6', from: 'entebbe', to: 'mgahinga', cost: 290, operatorId: 'op_aerolink' }, // Kisoro
    
    // Inter-park connections (Western Circuit)
    { id: 'fc_7', from: 'bwindi', to: 'mgahinga', cost: 150, operatorId: 'op_aerolink' }, // Kihihi <> Kisoro
    { id: 'fc_8', from: 'bwindi', to: 'queen-elizabeth', cost: 160, operatorId: 'op_aerolink' }, // Kihihi <> Kasese
    { id: 'fc_9', from: 'bwindi', to: 'kibale', cost: 160, operatorId: 'op_aerolink' },
    { id: 'fc_10', from: 'bwindi', to: 'murchison-falls', cost: 280, operatorId: 'op_aerolink' },
    
    { id: 'fc_11', from: 'mgahinga', to: 'queen-elizabeth', cost: 170, operatorId: 'op_aerolink' }, // Kisoro <> Kasese
    { id: 'fc_12', from: 'mgahinga', to: 'kibale', cost: 170, operatorId: 'op_aerolink' },

    { id: 'fc_13', from: 'queen-elizabeth', to: 'murchison-falls', cost: 280, operatorId: 'op_aerolink' },
    { id: 'fc_14', from: 'kibale', to: 'murchison-falls', cost: 280, operatorId: 'op_aerolink' },
];

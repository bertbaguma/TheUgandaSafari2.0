export interface User {
  id: string;
  name: string;
  email: string;
  roles: string[]; // e.g., ['traveler', 'consultant']
}
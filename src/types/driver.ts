export type DriverStatus = 
  | "AVAILABLE"
  | "BUSY"
  | "OFFLINE";

export interface Driver {
  id: string;
  name: string;

  distanceKm: number;

  tripsToday: number;

  earningsToday: number;

  status: DriverStatus    
}
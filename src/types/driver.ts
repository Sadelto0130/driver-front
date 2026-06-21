export type DriverStatus = 
  | "AVAILABLE"
  | "BUSY"
  | "OFFLINE";

export interface Driver {
  id: string;
  name: string;
 
  phone: string;

  email: string

  vehicleName: string
  vehiclePlate: string

  distanceKm: number;

  
  tripsToday: number;
  tripsWeek: number;
  tripsMonth: number;

  earningsToday: number;
  earningsWeek: number;
  earningsMonth: number;

  serviceCancel: number;
  calificacion: number; 

  status: DriverStatus    

  documents: DriverDocument[]
}

export type DriverProfileTab =
  | "summary" 
  | "activity"
  | "documents"
  | "finance"
  | "audit";

export type DocumentStatus = 
  | "VALID"
  | "EXPIRING"
  | "EXPIRED"

export interface DriverDocument {
  id: string
  name: string
  expiresAt?: string
  status: DocumentStatus
  fileUrl: string
  uploadedAt: string
}
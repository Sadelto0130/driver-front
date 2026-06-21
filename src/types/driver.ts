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

  auditEvents: DriverAuditEvent[]

  finance: DriverFinance
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

export interface DriverAuditEvent {
  id: string
  createdAt: string
  action: string
  description: string
  performedBy: string
}

export interface DriverFinance {
  pendingSettlement: number;
  lastSettlementDate?: string;
  lastSettlementAmount?: number;
  commission: number;
  discounts: number;
  bonuses: number;
  adjustments: number;
}
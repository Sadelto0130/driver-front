export type TripStatus =
  | "PENDING"
  | "PROGRAMMED"
  | "MATCHING"
  | "ASSIGNED"
  | "ACTIVE"
  | "COMPLETED" 
  | "CANCELLED"

export interface Trip {
  id: string
  serviceNumber: string

  companyId: string
  companyName: string

  passengerName: string
  passengerPhone: string
  passengerEmail: string

  origin: string
  destination: string

  driverName?: string

  observations?: string;
  
  status: TripStatus

  requestedAt: string
}
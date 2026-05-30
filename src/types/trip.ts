export type TripStatus =
  | "PENDING"
  | "MATCHING"
  | "ASSIGNED"
  | "ACTIVE"
  | "COMPLETED"

export interface Trip {
  id: string
  serviceNumber: string

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
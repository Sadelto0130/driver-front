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

  origin: string
  destination: string

  driverName?: string
  
  status: TripStatus

  date: string
  time: string
}
export type ServiceStatus =
  | "PENDING"
  | "PROGRAMMED"
  | "MATCHING"
  | "ASSIGNED" 
  | "ACTIVE"
  | "COMPLETED"
  | "CANCELLED"

export type ServiceFilter =
  | "ALL"
  | ServiceStatus;

export type PaymentMethod =
  | "CASH"
  | "CARD"
  | "ACCOUNT"
  | "TRANSFER"
  | "OTHER"

export interface Service { 
  id: string

  serviceNumber: string

  status: ServiceStatus

  requestedAt: string

  scheduledAt?: string | null

  passengerName: string

  passengerPhone: string

  passengerEmail?: string | null

  companyName: string 

  companyId?: string | null

  phone?: string | null

  paymentMethod?: PaymentMethod | null

  observations?: string | null

  driverName?: string | null

  origin: string

  originLocation?: {
    lat: number;
    lng: number;
  };

  destination: string

  destinationLocation?: {
    lat: number;
    lng: number;
  };
}
type ServiceType = 
  | "COMPANY"
  | "PARTICULAR"

export interface CreateTripForm {
  serviceType: ServiceType
  
  companyId: string

  passengerName: string
  passengerPhone: string

  origin: string
  destination: string

  observation: string
}
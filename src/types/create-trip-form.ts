export interface CreateTripForm {  
  companyId: string
  passengerId: string

  passengerName: string
  passengerPhone: string

  origin: string
  destination: string

  observation: string

  paymentMethod: string

  isProgrammed: boolean

  date: string
  time: string  
}
import { Service } from "@/types/service";

export function useTripActions() {
  const handleContactPassenger = (trip: Service) => {
    window.open(
      `https://wa.me/${trip.passengerPhone.replace(
        /\D/g,
        "",
      )}`,
      "_blank"
    )
  }

  const handleCancelTrip = (trip: Service) => {
    console.log(
      "Cancel trip",
      trip.id
    )
  } 

  return {
    handleContactPassenger,  
    handleCancelTrip
  }
}
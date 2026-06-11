import { Trip } from "@/types/trip";

export function useTripActions() {
  const handleContactPassenger = (trip: Trip) => {
    window.open(
      `https://wa.me/${trip.passengerPhone.replace(
        /\D/g,
        "",
      )}`,
      "_blank"
    )
  }

  const handleCancelTrip = (trip: Trip) => {
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
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

  const handleCanceltrip = (trip: Trip) => {
    const confirmed = window.confirm(
      `Cancelar servicio #${trip.serviceNumber}?`
    )

    if(!confirmed) {
      return
    }

    console.log(
      "Cancel trip",
      trip.id
    )
  } 

  return {
    handleContactPassenger,  
    handleCanceltrip
  }
}
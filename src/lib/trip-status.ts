import { Trip } from "@/types/trip";

export function getStatusDescription(trip: Trip) {
  switch (trip.status) {
    case "PENDING":
      return "Esperando";

    case "MATCHING":
      return "Buscando conductor";

    case "ASSIGNED":
      return "Asignado";

    case "ACTIVE":
      return "Viaje iniciado";

    case "COMPLETED":
      return "Finalizado";

    default:
      return "";
  }
}
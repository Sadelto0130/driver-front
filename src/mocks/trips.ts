import { Trip } from "@/types/trip";

export const mockTrips: Trip[] = [
  {
    id: "1",
    serviceNumber: "2451",
    passengerName: "Juan Pérez",
    origin: "Palermo",
    destination: "Aeropuerto",

    status: "PENDING",

    date: "15/06/2026",
    time: "09:15",
  },
  {
    id: "2",
    serviceNumber: "2452",
    passengerName: "María Gómez",
    origin: "Centro",
    destination: "Recoleta",

    driverName: "Carlos Ruiz",

    status: "MATCHING",

    date: "15/06/2026",
    time: "09:18",
  },
  {
    id: "3",
    serviceNumber: "2453",
    passengerName: "Pedro Díaz",
    origin: "Belgrano",
    destination: "Aeroparque",

    driverName: "Juan López",

    status: "ACTIVE",

    date: "15/06/2026",
    time: "09:21",
  },
  {
    id: "4",
    serviceNumber: "2454",
    passengerName: "Ana Torres",
    origin: "Caballito",
    destination: "Microcentro",

    status: "PENDING",

    date: "15/06/2026",
    time: "09:24",
  },
  {
    id: "5",
    serviceNumber: "2455",
    passengerName: "Luis Gómez",
    origin: "Flores",
    destination: "Once",

    status: "PENDING",

    date: "15/06/2026",
    time: "09:26",
  },
];
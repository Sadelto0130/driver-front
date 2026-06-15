import { Service } from "@/types/service";

const STATUS_TIME_RANGES = {
  PENDING: [1, 5],
  MATCHING: [6, 12],
  ASSIGNED: [13, 25],
  ACTIVE: [26, 60],
  COMPLETED: [61, 720],
  CANCELLED: [30, 720],
  PROGRAMMED: [-1080, -60],
} as const;

const LOCATIONS = {
  Palermo: { lat: -34.5889, lng: -58.4300 },
  Recoleta: { lat: -34.5882, lng: -58.3977 },
  Belgrano: { lat: -34.5621, lng: -58.4563 },
  Retiro: { lat: -34.5917, lng: -58.3748 },
  Caballito: { lat: -34.6186, lng: -58.4424 },
  Flores: { lat: -34.6295, lng: -58.4635 },
  "San Telmo": { lat: -34.6217, lng: -58.3732 },
  "Puerto Madero": { lat: -34.6118, lng: -58.3637 },
  Boedo: { lat: -34.6330, lng: -58.4135 },
  "Villa Crespo": { lat: -34.5983, lng: -58.4428 },

  Aeropuerto: { lat: -34.8222, lng: -58.5358 },
  Aeroparque: { lat: -34.5592, lng: -58.4156 },
  Centro: { lat: -34.6037, lng: -58.3816 },
  Microcentro: { lat: -34.6031, lng: -58.3784 },
} as const;

const statuses: Service["status"][] = [
  "PENDING",
  "MATCHING",
  "ASSIGNED",
  "ACTIVE",
  "COMPLETED",
  "CANCELLED",
  "PROGRAMMED",
];

const passengers = [
  "Juan Pérez",
  "María Gómez",
  "Pedro Díaz",
  "Ana Torres",
  "Luis Gómez",
  "Sofía Martínez",
  "Diego Fernández",
  "Valentina Ruiz",
  "Javier Morales",
  "Lucía Herrera",
  "Martín Silva",
  "Camila Rojas",
  "Federico Vega",
  "Natalia Romero",
  "Andrés López",
  "Paula Medina",
  "Gabriel Acosta",
  "Julieta Navarro",
  "Tomás Cabrera",
  "Carolina Benítez",
];

const companies = [
  { id: "particulars", name: "Particulares" },
  { id: "1", name: "Tech Solutions SA" },
  { id: "2", name: "Banco Federal" },
  { id: "3", name: "Logística Express" },
  { id: "4", name: "Grupo Andino" },
  { id: "5", name: "Constructora Atlas" },
  { id: "6", name: "Seguros Horizonte" },
  { id: "7", name: "Farmacias Central" },
  { id: "8", name: "Hotel Grand Plaza" },
  { id: "9", name: "Consultora Nexus" },
  { id: "10", name: "Industrias Delta" },
  { id: "11", name: "Servicios Integrales SRL" },
  { id: "12", name: "Petro Sur" },
  { id: "13", name: "Distribuidora Norte" },
  { id: "14", name: "Universidad Metropolitana" },
];

const origins = [
  "Palermo",
  "Recoleta",
  "Belgrano",
  "Retiro",
  "Caballito",
  "Flores",
  "San Telmo",
  "Puerto Madero",
  "Boedo",
  "Villa Crespo",
];

const destinations = [
  "Aeropuerto",
  "Aeroparque",
  "Centro",
  "Microcentro",
  "Belgrano",
  "Palermo",
  "Caballito",
  "Puerto Madero",
  "Recoleta",
  "Flores",
];

const drivers = [
  "Carlos Ruiz",
  "Juan López",
  "Miguel Castro",
  "Fernando Díaz",
  "José Pérez",
  "Ricardo Gómez",
  "Sergio Torres",
  "Mario Fernández",
  "Gabriel Ruiz",
  "Diego Acosta",
];


export function createMockServices(): Service[] {
  const now = new Date();

  const createRequestedAt = (minutesAgo: number) =>
    new Date(now.getTime() - minutesAgo * 60 * 1000).toISOString();
  
 const createRequestedAtByStatus = (
    status: Service["status"]
  ) => {
    const range =
      STATUS_TIME_RANGES[status];

    if (!range) {
      return createRequestedAt(0);
    }

    const [min, max] = range;

    const minutesAgo =
      Math.floor(
        Math.random() * (max - min + 1)
      ) + min;

    return createRequestedAt(minutesAgo);
  };
  
  return Array.from({ length: 50 }, (_, index) => {
  const status =
    statuses[index % statuses.length];

  const company =
    companies[index % companies.length];

  const origin =
    origins[index % origins.length];

  const destination =
    destinations[
      (index + 3) %
        destinations.length
    ];

  const originLocation =
    LOCATIONS[
      origin as keyof typeof LOCATIONS
    ];

  const destinationLocation =
    LOCATIONS[
      destination as keyof typeof LOCATIONS
    ];

  return {
    id: String(index + 1),

    serviceNumber: String(
      2451 + index
    ),

    companyId: company.id,

    companyName: company.name,

    passengerName:
      passengers[
        index % passengers.length
      ],

    passengerPhone: `+54 11 ${
      1000 + index
    }-${5000 + index}`,

    passengerEmail: `passenger${
      index + 1
    }@email.com`,

    origin,

    destination,

    originLocation,

    destinationLocation,

    observations:
      index % 5 === 0
        ? "Cliente corporativo"
        : "",

    status,

    ...(status === "ASSIGNED" ||
    status === "ACTIVE" ||
    status === "COMPLETED"
      ? {
          driverName:
            drivers[
              index %
                drivers.length
            ],
        }
      : {}),

    requestedAt:
      createRequestedAtByStatus(
        status
      ),
  };
});
}

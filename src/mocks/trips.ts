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

    return {
      id: String(index + 1),

      serviceNumber: String(2451 + index),

      companyId: company.id,
      companyName: company.name,

      passengerName:
        passengers[index % passengers.length],

      passengerPhone: `+54 11 ${1000 + index}-${5000 + index}`,

      passengerEmail: `passenger${index + 1}@email.com`,

      origin: origins[index % origins.length],

      destination:
        destinations[
          (index + 3) %
            destinations.length
        ],

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
                index % drivers.length
              ],
          }
        : {}),

      requestedAt:
        createRequestedAtByStatus(status),
    };
  });
}

import { DriverMapItem, ServiceMapItem } from "@/types/driver-map-item";

export const drivers: DriverMapItem[] = [
  {
    id: "DRV-001",
    name: "Carlos Gómez",
    vehicle: "Toyota Etios AA123BB",
    lat: -34.6037,
    lng: -58.3816,
    status: "available",
  },
  {
    id: "DRV-002",
    name: "Juan Pérez",
    vehicle: "Chevrolet Prisma AC456CD",
    lat: -34.6092,
    lng: -58.3771,
    status: "busy",
  },
  {
    id: "DRV-003",
    name: "Luis Martínez",
    vehicle: "Fiat Cronos AD789EF",
    lat: -34.5978,
    lng: -58.3925,
    status: "busy",
  },
  {
    id: "DRV-004",
    name: "Miguel Rodríguez",
    vehicle: "Renault Logan AG321HI",
    lat: -34.6151,
    lng: -58.3858,
    status: "offline",
  },
  {
    id: "DRV-005",
    name: "Ricardo Torres",
    vehicle: "Volkswagen Voyage AJ456KL",
    lat: -34.5941,
    lng: -58.4061,
    status: "available",
  },
  {
    id: "DRV-006",
    name: "Fernando Díaz",
    vehicle: "Toyota Corolla AK987LM",
    lat: -34.6213,
    lng: -58.3994,
    status: "busy",
  },
  {
    id: "DRV-007",
    name: "José Fernández",
    vehicle: "Fiat Siena AL741MN",
    lat: -34.5898,
    lng: -58.3715,
    status: "available",
  },
  {
    id: "DRV-008",
    name: "Mario Castro",
    vehicle: "Nissan Versa AM852OP",
    lat: -34.6262,
    lng: -58.3891,
    status: "busy",
  },
  {
    id: "DRV-009",
    name: "Sergio Acosta",
    vehicle: "Chevrolet Onix AN963QR",
    lat: -34.5992,
    lng: -58.4147,
    status: "offline",
  },
  {
    id: "DRV-010",
    name: "Gabriel Ruiz",
    vehicle: "Peugeot 208 AP159ST",
    lat: -34.6114,
    lng: -58.3662,
    status: "available",
  },
];

const passengers = [
  "María González",
  "Pedro Ruiz",
  "Ana Fernández",
  "Jorge Díaz",
  "Laura Gómez",
  "Sergio Acosta",
  "Valeria Soto",
  "Ricardo Molina",
  "Natalia Vega",
  "Gabriel Torres",
  "Lucía Herrera",
  "Martín Silva",
  "Paula Medina",
  "Carolina Benítez",
  "Tomás Cabrera",
];

const origins = [
  "Palermo",
  "Recoleta",
  "Retiro",
  "Belgrano",
  "Caballito",
  "San Telmo",
  "Microcentro",
  "Puerto Madero",
  "Boedo",
  "Flores",
];

const destinations = [
  "Aeroparque",
  "Palermo",
  "Belgrano",
  "Centro",
  "Villa Crespo",
  "Caballito",
  "Puerto Madero",
  "Recoleta",
  "Almagro",
  "Flores",
];

const statuses: ServiceMapItem["status"][] = [
  "assigned",
  "pickup",
  "in_progress",
];

export const services: ServiceMapItem[] = Array.from(
  { length: 35 },
  (_, index) => {
    const driver =
      drivers.filter((d) => d.status === "busy")[
        index % drivers.filter((d) => d.status === "busy").length
      ];

    return {
      id: String(1042 + index),

      driverId: driver.id,
      driverName: driver.name,
      vehicle: driver.vehicle,

      passenger: passengers[index % passengers.length],

      lat: -34.6037 + (Math.random() - 0.5) * 0.04,
      lng: -58.3816 + (Math.random() - 0.5) * 0.04,

      status: statuses[index % statuses.length],

      origin: origins[index % origins.length],
      destination:
        destinations[(index + 3) % destinations.length],
    };
  }
);
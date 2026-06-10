import { ActivityItem } from "@/types/activity-item";

export const activities: ActivityItem[] = [
  {
    id: "1",
    message: "Servicio #1042 asignado → Carlos Gómez",
    createdAt: "Hace 2 min",
    type: "service",
  },
  {
    id: "2",
    message: "Servicio #1039 completado",
    createdAt: "Hace 5 min",
    type: "service",
  },
  {
    id: "3",
    message: "Conductor Juan Pérez conectado",
    createdAt: "Hace 8 min",
    type: "driver",
  },
  {
    id: "4",
    message: "Reserva #204 creada",
    createdAt: "Hace 12 min",
    type: "reservation",
  },
  {
    id: "5",
    message: "Servicio #1028 cancelado",
    createdAt: "Hace 16 min",
    type: "cancellation",
  },
];
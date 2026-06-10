import { AlertItem } from "@/types/alert-item";

export const alertsMock: AlertItem[] = [
  {
    id: "1",
    title: "Servicio #1042",
    description: "Servicio sin conductor",
    severity: "critical",
    createdAt: "Hace 8 min",
  },
  {
    id: "2",
    title: "Conductor desconectado",
    description: "Juan Pérez",
    severity: "warning",
    createdAt: "Hace 12 min",
  },
  {
    id: "3",
    title: "Servicio #1038",
    description: "Servicio retrasado",
    severity: "critical",
    createdAt: "Hace 28 min",
  },
];
import { Trip } from "@/types/trip";

export type TripHistoryEventType =
  | "CREATED"
  | "MATCHING"
  | "ASSIGNED"
  | "ACTIVE"
  | "COMPLETED"
  | "CANCELLED";

export interface TripHistoryItem {
  id: string;
  type: TripHistoryEventType;
  title: string;
  timestamp: string;
}

const HISTORY_STEPS = {
  CREATED: {
    type: "CREATED",
    title: "Servicio creado",
  },
  MATCHING: {
    type: "MATCHING",
    title: "Buscando conductor",
  },
  ASSIGNED: {
    type: "ASSIGNED",
    title: "Conductor asignado",
  },
  ACTIVE: {
    type: "ACTIVE",
    title: "Viaje iniciado",
  },
  COMPLETED: {
    type: "COMPLETED",
    title: "Viaje finalizado",
  },
  CANCELLED: {
  type: "CANCELLED",
  title: "Servicio cancelado",
},
} as const;

const offsets = [
  0,
  2,
  5,
  11,
  28,
];

export const buildTripHistory = (
  requestedAt: string,
  status: Trip["status"]
): TripHistoryItem[] => {
  const start = new Date(requestedAt).getTime();

  const timeline = [
    HISTORY_STEPS.CREATED,
    HISTORY_STEPS.MATCHING,
    HISTORY_STEPS.ASSIGNED,
    HISTORY_STEPS.ACTIVE,
    HISTORY_STEPS.COMPLETED,
  ];

  const statusIndex = {
    PENDING: 0,
    MATCHING: 1,
    ASSIGNED: 2,
    ACTIVE: 3,
    COMPLETED: 4,
  }[status];

  return timeline.slice(0, statusIndex + 1).map((event, index) => ({
    id: String(index + 1),
    type: event.type,
    title: event.title,
    timestamp: new Date(start + offsets[index] * 60 * 1000).toISOString(),
  }));
};
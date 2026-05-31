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

const statusOffsets = {
  PENDING: [0],
  MATCHING: [0, 3],
  ASSIGNED: [0, 4, 11],
  ACTIVE: [0, 4, 11, 20],
  COMPLETED: [0, 4, 11, 20, 32],
} as const;

export const buildTripHistory = (
  requestedAt: string,
  status: Trip["status"]
): TripHistoryItem[] => {
  const start = new Date(requestedAt).getTime();

  const now = Date.now()

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

  const events = timeline.slice(0, statusIndex + 1)
  
  const offsets = statusOffsets[status]

  return events.map((event, index) => {
    const eventTime = start + offsets[index] * 60 * 1000

    return {
      id: String(index + 1),
      type: event.type,
      title: event.title,
      timestamp: new Date(Math.min(eventTime, now)).toISOString(),
    }
  });
};
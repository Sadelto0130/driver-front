import { Service } from "@/types/service";

export type TripHistoryEventType =
  | "CREATED"
  | "MATCHING"
  | "ASSIGNED"
  | "ACTIVE"
  | "COMPLETED"
  | "CANCELLED"
  | "PROGRAMMED";

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
  PROGRAMMED: {
    type: "PROGRAMMED",
    title: "Servicio programado",
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
  PROGRAMMED: [0, 5],
  MATCHING: [0, 3],
  ASSIGNED: [0, 4, 11],
  ACTIVE: [0, 4, 11, 20],
  COMPLETED: [0, 4, 11, 20, 32],
  CANCELLED:[0, 6]
} as const;

const TIMELINE_BY_STATUS = {
  PENDING: [
    HISTORY_STEPS.CREATED,
  ],

  PROGRAMMED: [
    HISTORY_STEPS.CREATED,
    HISTORY_STEPS.PROGRAMMED,
  ],

  MATCHING: [
    HISTORY_STEPS.CREATED,
    HISTORY_STEPS.MATCHING,
  ],

  ASSIGNED: [
    HISTORY_STEPS.CREATED,
    HISTORY_STEPS.MATCHING,
    HISTORY_STEPS.ASSIGNED,
  ],

  ACTIVE: [
    HISTORY_STEPS.CREATED,
    HISTORY_STEPS.MATCHING,
    HISTORY_STEPS.ASSIGNED,
    HISTORY_STEPS.ACTIVE,
  ],

  COMPLETED: [
    HISTORY_STEPS.CREATED,
    HISTORY_STEPS.MATCHING,
    HISTORY_STEPS.ASSIGNED,
    HISTORY_STEPS.ACTIVE,
    HISTORY_STEPS.COMPLETED,
  ],

  CANCELLED: [
    HISTORY_STEPS.CREATED,
    HISTORY_STEPS.CANCELLED,
  ],
} as const;

export const buildTripHistory = (
  requestedAt: string,
  status: Service["status"]
): TripHistoryItem[] => {
  const start = new Date(requestedAt).getTime();

  const now = Date.now()

  const events = TIMELINE_BY_STATUS[status]
  
  const offsets = statusOffsets[status]

  return events.map((event, index) => {
    const eventTime = start + offsets[index] * 60 * 1000

    return {
      id: `${event.type}-${index}`,
      type: event.type,
      title: event.title,
      timestamp: new Date(Math.min(eventTime, now)).toISOString(),
    }
  });
};
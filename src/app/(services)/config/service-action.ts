import { ServiceStatus } from "@/types/service"

export type ServiceAction =
  | "EDIT"
  | "DUPLICATE"
  | "CANCEL"
  | "VIEW_HISTORY";

export const serviceActionsByStatus = {
  PENDING: [
    "EDIT",
    "DUPLICATE",
    "CANCEL",
  ],

  PROGRAMMED: [
    "EDIT",
    "DUPLICATE",
    "CANCEL",
  ],

  MATCHING: [
    "VIEW_HISTORY",
    "DUPLICATE",
    "CANCEL",
  ],

  ASSIGNED: [
    "VIEW_HISTORY",
    "DUPLICATE",
    "CANCEL",
  ],

  ACTIVE: [
    "VIEW_HISTORY",
    "DUPLICATE",
  ],

  COMPLETED: [
    "DUPLICATE",
    "VIEW_HISTORY",
  ],

  CANCELLED: [
    "DUPLICATE",
    "VIEW_HISTORY",
  ],
} as const;
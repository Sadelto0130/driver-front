import { ServiceFilter, ServiceStatus } from "./service";

export interface ServiceStats {
  total: number;
  pending: number;
  programmed: number;
  matching: number;
  assigned: number;
  active: number;
  completed: number;
  cancelled: number;
};

export type FilterColor =
  | "slate"
  | "red"
  | "amber"
  | "blue"
  | "emerald"
  | "purple"

export interface StatusToolbarFilter {
  value: ServiceFilter;
  label: string;
  count: number;
  color: FilterColor;
}

export const getServiceFilters = (stats: ServiceStats): StatusToolbarFilter[] => [
  {
    label: "Todos",
    value: "ALL",
    count: stats.total,
    color: "slate" as const,
  },
  {
    label: "Pendientes",
    value: "PENDING",
    count: stats.pending,
    color: "red" as const,
  },
  {
    label: "Programados",
    value: "PROGRAMMED",
    count: stats.programmed,
    color: "purple" as const,
  },
  {
    label: "Buscando",
    value: "MATCHING",
    count: stats.matching,
    color: "amber" as const,
  },
  {
    label: "Asignados",
    value: "ASSIGNED",
    count: stats.assigned,
    color: "blue" as const,
  },
  {
    label: "Activos",
    value: "ACTIVE",
    count: stats.active,
    color: "emerald" as const,
  },
  {
    label: "Finalizados",
    value: "COMPLETED",
    count: stats.completed,
    color: "slate" as const,
  },
  {
    label: "Cancelados",
    value: "CANCELLED",
    count: stats.cancelled,
    color: "red" as const,
  },
];
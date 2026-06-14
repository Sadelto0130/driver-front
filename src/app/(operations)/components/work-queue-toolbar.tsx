"use client";

import { 
  WorkQueueFilter, 
  WorkQueueSort 
} from "@/types/work-queue";
import { StatusToolbar } from "@/components/shared/toolbar";
import { getServiceFilters, ServiceStats, StatusToolbarFilter } from "@/types/service-filters";
import { sortOptionsValues } from "@/types/sortOptionsValues";

interface Props {
  filter: string;
  onFilterChange: (
    filter: WorkQueueFilter
  ) => void;
  sortBy: WorkQueueSort;
  onSortChange: (
    sort: WorkQueueSort
  ) => void;
  stats: ServiceStats
}

export function WorkQueueToolbar({
  filter,
  onFilterChange,
  sortBy,
  onSortChange,
  stats
}: Props) {
  const filters: StatusToolbarFilter[] = [
    {
      label: "Todos",
      value: "ALL",
      count: stats.total,
      color: "slate",
    },
    {
      label: "Pendientes",
      value: "PENDING",
      count: stats.pending,
      color: "red",
    },
    {
      label: "Buscando",
      value: "MATCHING",
      count: stats.matching,
      color: "amber",
    },
    {
      label: "Asignados",
      value: "ASSIGNED",
      count: stats.assigned,
      color: "blue",
    },
    {
      label: "Activos",
      value: "ACTIVE",
      count: stats.active,
      color: "emerald",
    },
    {
      label: "Finalizados",
      value: "COMPLETED",
      count: stats.completed,
      color: "slate",
    },
  ] as const; 

  return (
    <div
      className="
        border-b border-slate-200/70
        bg-slate-50/30
        px-4 py-1
        md:px-6 
        md:py-1
      "
    >
      <StatusToolbar
        value={filter}
        filters={getServiceFilters(stats)}
        onValueChange={(value) => onFilterChange(value as WorkQueueFilter)}
        sortValue={sortBy}
        sortOptions={sortOptionsValues}
        onSortChange={(value) => onSortChange(value as WorkQueueSort)}
      />      
    </div>
  );
}


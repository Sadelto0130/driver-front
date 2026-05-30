"use client";

import { WorkQueueFilter } from "@/types/work-queue";

type FilterColor =
  | "slate"
  | "red"
  | "amber"
  | "blue"
  | "emerald";

interface FilterItem {
  value: string
  label: string;
  count: number;
  color: FilterColor;
}

interface Props {
  filter: WorkQueueFilter;
  onFilterChange: (
    filter: WorkQueueFilter
  ) => void;
  stats: {
    total: number
    pending: number
    matching: number
    assigned: number
    active: number
    completed: number
  }
}

export function WorkQueueToolbar({
  filter,
  onFilterChange,
  stats
}: Props) {
  const filters: FilterItem[] = [
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
      label: "En proceso",
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

  const colorMap = {
    slate: {
      bg: "bg-slate-50",
      border: "border-slate-200",
      text: "text-slate-700",
      badge: "bg-slate-100 text-slate-700",
    },
    red: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-700",
      badge: "bg-red-100 text-red-700",
    },
    amber: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-700",
      badge: "bg-amber-100 text-amber-700",
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
      badge: "bg-blue-100 text-blue-700",
    },
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-700",
      badge: "bg-emerald-100 text-emerald-700",
    },
  };

  return (
    <div
      className="
        flex flex-wrap
        items-center
        justify-start
        gap-3
        overflow-x-auto
        border-b border-slate-200/70
        bg-slate-50/30
        px-6 py-4
      "
    >
      {filters.map((item) => {
        const colors = colorMap[item.color]

        return (
          <button
            onClick={() => 
              onFilterChange(item.value as WorkQueueFilter)
            }
            key={item.label}
            className={`
              flex items-center gap-2
              rounded-xl
              border
              px-4 py-2
              text-sm font-medium
              transition-all duration-200
              ${
                item.value === filter
                  ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                  : `${colors.bg} ${colors.border} ${colors.text} hover:shadow-sm`
              }
            `}
          >
            <span>{item.label}</span>

            <span
              className={`
                rounded-full px-2 py-0.5 text-xs font-semibold
                ${
                  item.value
                    ? "bg-white/20 text-white"
                    : colors.badge
                }
              `}
            >
              {item.count}
            </span>
          </button>
        )
    })}
    </div>
  );
}


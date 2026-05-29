"use client";

type FilterColor =
  | "slate"
  | "red"
  | "amber"
  | "blue"
  | "emerald";

interface FilterItem {
  label: string;
  count: number;
  color: FilterColor;
  active?: boolean;
}

const filters: FilterItem[] = [
  {
    label: "Todos",
    count: 24,
    color: "slate",
    active: true,
  },
  {
    label: "Pendientes",
    count: 3,
    color: "red",
  },
  {
    label: "Buscando",
    count: 2,
    color: "amber",
  },
  {
    label: "Asignados",
    count: 5,
    color: "blue",
  },
  {
    label: "En proceso",
    count: 8,
    color: "emerald",
  },
  {
    label: "Finalizados",
    count: 6,
    color: "slate",
  },
];

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

export function WorkQueueToolbar() {
  return (
    <div
      className="
        flex flex-wrap
        items-center
        justify-center
        gap-3
        border-b border-slate-200/70
        bg-slate-50/30
        px-6 py-4
      "
    >
      {filters.map((filter) => {
        const colors = colorMap[filter.color]

        return (
          <button
            key={filter.label}
            className={`
              flex items-center gap-2
              rounded-xl
              border
              px-4 py-2
              text-sm font-medium
              transition-all duration-200
              ${
                filter.active
                  ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                  : `${colors.bg} ${colors.border} ${colors.text} hover:shadow-sm`
              }
            `}
          >
            <span>{filter.label}</span>

            <span
              className={`
                rounded-full px-2 py-0.5 text-xs font-semibold
                ${
                  filter.active
                    ? "bg-white/20 text-white"
                    : colors.badge
                }
              `}
            >
              {filter.count}
            </span>
          </button>
        )
    })}
    </div>
  );
}


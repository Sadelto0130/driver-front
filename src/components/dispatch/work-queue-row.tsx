"use client";

import { formatServiceDate, getWaitingMinutes } from "@/lib/date";
import { cn } from "@/lib/utils";
import { getWaitingPriority, getWaitingPriorityClasses, shouldShowWaitingPriority } from "@/lib/waiting-priority";
import { Trip } from "@/types/trip";

interface Props {
  trip: Trip;
  selected: boolean;
  highlighted: boolean;
  onSelect: (trip: Trip) => void;
}

const statusMap = {
  PENDING: "Pendiente",
  MATCHING: "Buscando",
  ASSIGNED: "Asignado",
  ACTIVE: "En proceso",
  COMPLETED: "Finalizado",
};

const statusColorMap = {
  PENDING: "bg-red-100 text-red-700",
  MATCHING: "bg-amber-100 text-amber-700",
  ASSIGNED: "bg-blue-100 text-blue-700",
  ACTIVE: "bg-emerald-100 text-emerald-700",
  COMPLETED: "bg-slate-100 text-slate-700",
};

export function WorkQueueRow({ 
  trip, 
  selected,
  highlighted, 
  onSelect 
}: Props) {
  const showPriority = shouldShowWaitingPriority(trip)

  const priority = showPriority 
    ? getWaitingPriority(trip.requestedAt)
    : null

  const priorityStyles = priority
    ? getWaitingPriorityClasses(priority)
    : null

  return (
    <button
      onClick={() => onSelect(trip)}
      className={cn(
        "grid w-full grid-cols-[100px_120px_200px_160px_2fr_180px] items-center gap-4 border-b border-slate-100 px-4 py-4 text-left transition-all duration-200 hover:bg-slate-50",
        showPriority && "border-l-4",
        showPriority && priorityStyles?.border,
        highlighted && "bg-blue-100/80",
        selected && "bg-blue-50/70 shadow-sm translate-x-1",
      )}
    >
      <span className="font-semibold text-slate-900">
        #{trip.serviceNumber}
      </span>

      <span
        className={cn(
          "w-fit rounded-full px-2 py-1 text-xs font-medium",
          statusColorMap[trip.status],
        )}
      >
        {statusMap[trip.status]}
      </span>

      <span>{trip.passengerName}</span>

      <span>{trip.driverName ?? "-"}</span>

      <div>
        <p className="font-medium text-slate-900">{trip.origin}</p>

        <p className="text-sm text-slate-500">→ {trip.destination}</p>
      </div>

      <div className="flex flex-col items-end gap-1">
        <span className="whitespace-nowrap text-sm">
          {formatServiceDate(trip.requestedAt)}
        </span>

        {showPriority && (
          <span className={cn(
            "w-fit rounded-full border px-2 py-0.5 text-xs font-medium",
            priorityStyles?.badge
          )}>
            Esperando {getWaitingMinutes(trip.requestedAt)} min
          </span>
        )}
      </div>
    </button>
  );
}

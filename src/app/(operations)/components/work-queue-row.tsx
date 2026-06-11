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
        "w-full text-left transition-all duration-200",
        highlighted && "bg-blue-100/80",
        selected && "bg-blue-50/70"
      )}
    >
      {/* MOBILE */}
      <div
        className={cn(
          "block border-b border-slate-100 px-4 py-2 lg:hidden",
          showPriority && "border-l-4",
          showPriority && priorityStyles?.border
        )}
      >
        {/**Estado + demora */}
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "rounded-full px-2 py-0 text-[11px] font-medium",
              statusColorMap[trip.status]
            )}
          >
            {statusMap[trip.status]}
          </span>    

          {showPriority && (
            <span
              className={cn(
                "rounded-full border px-2 py-0 text-xs font-medium",
                priorityStyles?.badge
              )}
            >
              {getWaitingMinutes(trip.requestedAt)} min
            </span>
          )}
        </div>

        {/**Servicio + fecha */}
        <div className="mt-2 flex items-center justify-between gap-3">
          <div>
            <p className="text-lg font-semibold text-slate-900">
              #{trip.serviceNumber}
            </p>
          </div>

          <span className="whitespace-nowrap text-sm text-slate-500">
            {formatServiceDate(trip.requestedAt)}
          </span>
        </div>

        {/**Pasajero + recorrido */}
        <div className="mt-2 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="leading-none font-semibold">
              {trip.passengerName}
            </p>
            <p className="text-sm text-slate-500">
              {trip.companyName}
            </p>
          </div>

          <div className="max-w-[45%] text-right">
            <p className="truncate text-sm leading-none">{trip.origin}</p>

            <p className="mt-1 truncate text-sm leading-none text-slate-500">
              → {trip.destination}
            </p>
          </div>
        </div>

        <div className="mt-2 text-sm leading-none text-slate-500">
          {trip.driverName ?? "Sin conductor"}
        </div>
      </div>

      {/* DESKTOP */}
      <div
        className={cn(
          "hidden lg:grid lg:grid-cols-[100px_180px_180px_160px_2fr] lg:items-center lg:gap-4 lg:border-b lg:border-slate-100 lg:px-4 lg:py-2 hover:bg-slate-50",
          showPriority && "border-l-4",
          showPriority && priorityStyles?.border,
          selected && "shadow-sm translate-x-1"
        )}
      >
        <div className="flex flex-col gap-1">
          <span
            className={cn(
              "w-fit rounded-full px-2 py-1 text-xs font-medium",
              statusColorMap[trip.status]
            )}
          >
            {statusMap[trip.status]}
          </span>

          <span className="font-semibold text-slate-900">
            #{trip.serviceNumber}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="whitespace-nowrap text-sm">
            {formatServiceDate(trip.requestedAt)}
          </span>

          {showPriority && (
            <span
              className={cn(
                "w-fit rounded-full border px-2 py-0.5 text-xs font-medium",
                priorityStyles?.badge
              )}
            >
              Retraso{" "}
              {getWaitingMinutes(trip.requestedAt)} min
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <span className="whitespace-nowrap font-semibold">
            {trip.passengerName}
          </span>

          <span className="text-sm">
            {trip.companyName}
          </span>
        </div>

        <span>
          {trip.driverName ?? "-"}
        </span>

        <div>
          <p className="font-medium text-slate-900">
            {trip.origin}
          </p>

          <p className="text-sm text-slate-500">
            → {trip.destination}
          </p>
        </div>
      </div>
    </button>
)
}
 
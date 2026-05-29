"use client";

import { cn } from "@/lib/utils";
import { Trip } from "@/types/trip";

interface Props {
  trip: Trip;
  selected: boolean;
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

export function WorkQueueRow({ trip, selected, onSelect }: Props) {
  return (
    <button
      onClick={() => onSelect(trip)}
      className={cn(
        "grid w-full grid-cols-[100px_120px_200px_160px_2fr_180px] items-center gap-4 border-b border-slate-100 px-4 py-4 text-left transition-all duration-200 hover:bg-slate-50",
        selected && "border-l-4 border-l-blue-600 bg-blue-50/70 shadow-sm translate-x-1",
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

      <span className="whitespace-nowrap text-sm">
        {trip.date} {trip.time}
      </span>
    </button>
  );
}

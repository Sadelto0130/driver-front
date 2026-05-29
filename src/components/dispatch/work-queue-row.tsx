"use client"

import { cn } from "@/lib/utils"
import { Trip } from "@/types/trip"

interface Props {
  trip: Trip
  selected: boolean
  onSelect: (trip: Trip) => void
}

const statusMap = {
  PENDING: "Pendiente",
  MATCHING: "Buscando",
  ASSIGNED: "Asignado",
  ACTIVE: "En proceso",
  COMPLETED: "Finalizado"
}

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
  onSelect
}: Props) {
  return (
    <button
      onClick={() => onSelect(trip)}
      className={cn(
  "grid w-full grid-cols-[90px_120px_180px_180px_2fr_140px] items-center gap-4 border-b border-slate-100 px-4 py-3 text-left transition-all duration-150 hover:bg-slate-50",
  selected &&
    "border-l-4 border-l-blue-600 bg-blue-100"
)}
    >
      <span className="font-medium">
        #{trip.serviceNumber}
      </span>

      <span className={cn(
        "w-fit rounded-full px-2 py-1 text-xs font-medium",
        statusColorMap[trip.status]
      )}>
        {statusMap[trip.status]}
      </span>

      <span>{trip.passengerName}</span>

      <span>{trip.driverName ?? "-"}</span>

      <span>
        {trip.origin} → {trip.destination}
      </span>

      <span>{trip.date} {trip.time}</span>
    </button>
  )
}
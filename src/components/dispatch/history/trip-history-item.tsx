"use client"

import { formatServiceTime } from "@/lib/date"
import {
  TripHistoryEventType,
  TripHistoryItem as HistoryItem
} from "@/mocks/trip-history"

interface Props {
  event: HistoryItem
  last: boolean
  isCurrent: boolean
}

const eventColors: Record<
  TripHistoryEventType,
  string
> = {
  CREATED: "bg-slate-400",
  MATCHING: "bg-amber-500",
  ASSIGNED: "bg-blue-500",
  ACTIVE: "bg-emerald-500",
  COMPLETED: "bg-green-700",
  CANCELLED: "bg-red-500",
};

const eventDescriptions = {
  CREATED: "Solicitud registrada",
  MATCHING: "Buscando conductor disponible",
  ASSIGNED: "Conductor asignado",
  ACTIVE: "Servicio en curso",
  COMPLETED: "Servicio completado",
  CANCELLED: "Servicio cancelado",
};

export function TripHistoryItem({
  event,  
  last,
  isCurrent
}: Props) {
  return (
    <div className="relative flex gap-4 pb-6">
      <div className="relative flex w-10 justify-center">
        <div className={`
          z-10 mt-2 h-4 w-4 rounded-full 
          ${eventColors[event.type]}
        `}/>

        <div className="
          absolute 
          left-5 
          top-6 
          bottom-6
          w-px 
          bg-slate-300
        "/>

        {!last && (
          <div className="
            absolute
            left-5
            top-5
            bottom-0
            w-px 
            bg-slate-300"
          />
        )}
      </div>

      <div className={`
        flex-1 
        rounded-3xl
        border
        bg-white
        px-5
        py-4
        shadow-sm
        ${
          isCurrent
            ? "border-emerald-200 bg-emerald-50 shadow-sm"
            : "border-slate-200 bg-white"
        }
      `}>
        {isCurrent && (
          <span className="
            inline-flex
            rounded-full
            bg-emerald-100
            px-2 py-0.5
            text-[11px]
            font-medium
            text-emerald-700
          ">
            Actual
          </span>
        )}
        <p className="text-base font-semibold text-slate-900">
          {event.title}
        </p>

        <p className="mt-2 text-sm font-medium text-slate-500">
          {formatServiceTime(event.timestamp)}
        </p>

        <p className="mt-1 text-sm text-slate-400">
          {eventDescriptions[event.type]}
        </p>
      </div>
    </div>
  )
}
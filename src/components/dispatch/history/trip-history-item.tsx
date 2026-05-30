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
    <div className="relative flex gap-2 pb-8">
      <div className="relative flex w-10 justify-center">
        {/*Punto timeline*/}
        <div className={`
          z-10 
          mt-2 
          h-5 
          w-5 
          rounded-full
          ring-4
          ring-white 
          ${eventColors[event.type]}
          `}/>

        {/*Linea vertical timeline*/}
        {!last && (
          <div className="
          absolute
          left-5
          top-5
          bottom-8
            w-px 
            bg-slate-300"
            />
          )}
      </div>
      
      {/*Card */}
      <div className={`
        flex-1 
        rounded-3xl
        border
        bg-white
        px-6
        py-5
        shadow-[0_2px_12px_rgba(15, 23, 42, 0.05)]
        ${
          isCurrent
            ? "border-emerald-200 bg-emerald-50 shadow-[0_4px_20px_rgba(16,185,129,0.10)]"
            : "border-slate-200 bg-white"
        }
      `}>
        {/*Badge */}
        {isCurrent && (
          <div className="mb-0 flex justify-end">
            <span className="
              inline-flex
              rounded-full
              border-emerald-300
              bg-emerald-50
              px-2 py-1
              text-xs
              font-medium
              text-emerald-700
            ">
              Actual
            </span>
          </div>
        )}
        <p className="text-lg font-semibold text-slate-900">
          {event.title}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {eventDescriptions[event.type]}
        </p>

        <p className="mt-2 text-sm text-slate-500">
          {formatServiceTime(event.timestamp)}
        </p>

      </div>
    </div>
  )
}
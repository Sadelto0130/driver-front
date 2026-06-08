"use client"

import { Driver } from "@/types/driver"

interface Props {
  driver: Driver
  assigning?: boolean
  isAssigning?: boolean
  onAssign?: (driver: Driver) => void
}

const statusMap = {
  AVAILABLE: "Disponible",
  BUSY: "En viaje",
  OFFLINE: "Desconectado"
}

const statusStyles = {
  AVAILABLE: "bg-emerald-50 text-emerald-700",
  BUSY: "bg-amber-50 text-amber-700",
  OFFLINE: "bg-slate-100 text-slate-600"
}

export function DriverCard({
  driver,
  assigning = false,
  isAssigning,
  onAssign
}: Props) {
  const canAssign = driver.status === "AVAILABLE"

  return (
    <div className={`
      rounded-3xl
      border 
      px-2 py-1
      shadow-sm
      hover:shadow-md
      transition-shadow
      ${assigning 
          ? "border-blue-500 bg-blue-50" 
          : "border-slate-200 bg-white" 
        }      
    `}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">
          {driver.name}
        </h3>

        <span className={`
          rounded-full
          px-3 py-0.5
          text-[11px] font-medium
          ${statusStyles[driver.status]} 
        `}>
          {statusMap[driver.status]}
        </span>
      </div>

      <div className="mt-0">
        <p className="
          text-lg
          font-bold
          tracking-tight
          text-slate-900
        ">
          {driver.distanceKm} km{" "}
          <span className="text-sm text-slate-500">del origen</span>
        </p>
      </div>

      <div className="mt-0 flex items-center justify-between">
        <p className="text-sm text-slate-600">
          {driver.tripsToday} viajes hoy · ${driver.earningsToday.toLocaleString("es-AR")}
        </p>
        
        {canAssign ? (
          <button
            onClick={() => onAssign?.(driver)}
            disabled={isAssigning}
            className={`
              h-8
              rounded-xl
              px-3
              text-xs font-medium
              transition-colors
              ${
                assigning
                  ? "bg-blue-600 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }    
            `}
          >
            {assigning ? "Asignando..." : "Asignar"}
          </button>
        ) : (
          <span className="text-xs font-medium text-slate-400">
            No disponible
          </span>
        )}
      </div>
    </div>
  )
}
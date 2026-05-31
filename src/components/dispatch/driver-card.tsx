"use client"

import { Driver } from "@/types/driver"

interface Props {
  driver: Driver
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
  onAssign
}: Props) {
  const canAssign = driver.status === "AVAILABLE"

  return (
    <div className="
      rounded-3xl
      border border-slate-200
      bg-white
      p-5
      shadow-sm
      hover:shadow-md
      transition-shadow
    ">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-slate-900">
          {driver.name}
        </h3>

        <span className={`
          rounded-full
          px-3 py-1
          text-xs font-medium
          ${statusStyles[driver.status]} 
        `}>
          {statusMap[driver.status]}
        </span>
      </div>

      <div className="py-5">
        <p className="
          text-4xl
          font-bold
          tracking-tight
          text-slate-900
        ">
          {driver.distanceKm} km
        </p>

        <p className="
          mt-1
          text-xs
          uppercase
          tracking-[0.15em]
          text-slate-400
        ">
          del origen
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-xl font-blue">
            {driver.tripsToday}
          </p>

          <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
            Viajes
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-xl font-bold">
            ${driver.earningsToday.toLocaleString("es-AR")}
          </p>

          <p className="mt-1 text-xs uppercase tracking-wide text-slate 500">
            Generado
          </p>
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        {canAssign ? (
          <button
            onClick={() => onAssign?.(driver)}
            className="
              h-11
              rounded-2xl
              bg-blue-600
              px-4 py-2
              text-sm font-medium
              text-white
              transition-colors
              hover:bg-blue-700
            "
          >
            Asignar
          </button>
        ) : (
          <span className="text-sm font-medium text-slate-400">
            No disponible
          </span>
        )}
      </div>
    </div>
  )
}
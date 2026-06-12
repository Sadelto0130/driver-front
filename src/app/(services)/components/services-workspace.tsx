"use client"

import { StatusToolbar } from "@/components/shared/toolbar"
import { useState } from "react"

const filters = [
  {
    value: "ALL",
    label: "Todos",
    count: 132,
    color: "slate" as const,
  },
  {
    value: "PENDING",
    label: "Pendientes",
    count: 18,
    color: "red" as const,
  },
  {
    value: "PROGRAMMED",
    label: "Programados",
    count: 24,
    color: "purple" as const,
  },
  {
    value: "MATCHING",
    label: "Buscando",
    count: 8,
    color: "amber" as const,
  },
  {
    value: "ASSIGNED",
    label: "Asignados",
    count: 15,
    color: "blue" as const,
  },
  {
    value: "ACTIVE",
    label: "Activos",
    count: 12,
    color: "emerald" as const,
  },
  {
    value: "COMPLETED",
    label: "Finalizados",
    count: 42,
    color: "slate" as const,
  },
  {
    value: "CANCELLED",
    label: "Cancelados",
    count: 13,
    color: "red" as const,
  },
]

export function ServicesWorkspace() {
  const [filter, setFilter] = useState("ALL")

  return (
    <div className="flex h-full min-h-0 flex-1">
      <div className="flex min-w-0 flex-1 flex-col border-r border-slate-200/70 dark:border-slate-800">
        <StatusToolbar 
          value={filter}
          filters={filters}
          onValueChange={setFilter}
        />

        <div className="flex-1 p-4">
          Lista Servicios
        </div>
      </div>


      <aside className="hidden xl:flex w-[360px] shrink-0">
        Detalle de Servicio
      </aside>
    </div>
  )
}
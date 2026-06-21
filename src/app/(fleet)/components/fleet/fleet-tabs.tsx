"use client"

import { FleetModule } from "@/types/fleet-module-type"
import { fleetModules } from "./fleet-modules"
import { cn } from "@/lib/utils"

type Props = {
  value: FleetModule,
  onValueChange: (value: FleetModule) => void
}

export function FleetModuleTabs({
  value,
  onValueChange
}: Props) {
  return (
    <div className="flex items-end overflow-x-auto">
      {fleetModules.map((module) => {
        const Icon = module.icon

        const active = value === module.id

        return (
          <button
            key={module.id}
            onClick={() => onValueChange(module.id)}
            className={cn(
              "flex items-center gap-2 rounded-t-xl border border-b-0 px-5 py-3 text-sm font-medium transition-all",
              active 
                ? "border-slate-200 bg-white text-slate-900"
                : "border-transparent bg-slate-100 text-slate-500 hover:bg-slate-200"
            )}
          >
            <Icon className="h-4 w-4" />
            {module.label}
          </button>
        )
      })}
    </div>
  )
}
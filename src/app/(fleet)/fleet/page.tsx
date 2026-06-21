"use client"

import { FleetModule } from "@/types/fleet-module-type"
import { useState } from "react"
import { FleetModuleTabs } from "../components/fleet/fleet-tabs"
import { DriversModule } from "../components/drivers/drivers-module"

export default function FleethPage() {
  const [activeModule, setActiveModule] = useState<FleetModule>("drivers") 

  return (
    <div className='flex h-full min-h-0 flex-1 flex-col'>
      <FleetModuleTabs
        value={activeModule}
        onValueChange={setActiveModule}
      />
      
      <div className="min-h-0 flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {activeModule === "drivers" && (
          <DriversModule />
        )}
      </div>
    </div>
  ) 
}
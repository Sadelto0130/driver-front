"use client"

import { MasterDetailWorkspace } from "@/components/shared/entity-list-row/master-detail-workspace"
import { createMockDrivers } from "@/mocks/drivers-assigned"
import { Driver } from "@/types/driver"
import { useEffect, useState } from "react"
import { DriverList } from "./driver-list"
import { DriverDetailPanel } from "./driver-detail-panel"

export function DriversModule() {
  const [detailOpen, setDetailOpen] = useState(false)
  const [drivers, setDrivers] = useState<Driver[]>([])
  const [selectedDriverId, setSelecetdDriverId] = useState<string | null>(null)

  const selectedDriver = drivers.find(
    (driver) => driver.id === selectedDriverId
  ) ?? null

  useEffect(() => {
    const data = createMockDrivers(50)

    setDrivers(data)

    if(data.length > 0) {
      setSelecetdDriverId(data[0].id)
    }
  }, [])

  return (
    <MasterDetailWorkspace 
      desktopLayout="35% 65%"
      detailOpen={detailOpen}
      onDetailOpenChange={setDetailOpen}
      detailTitle="Perfil del conductor"
      list={
        <DriverList
          drivers={drivers}
          selectedDriverId={selectedDriverId}
          onSelectedDriver={(driver) => {
            setSelecetdDriverId(driver.id)

            if(window.innerWidth < 1280) {
              setDetailOpen(true)
            }
          }}
        />
      }
      detail={
        <DriverDetailPanel driver={selectedDriver}/>
      }
    />
  )
}
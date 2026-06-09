"use client"

import { Button } from "@/components/ui/button";
import { DashboardHeaderProps } from "@/types/dashboard-headers";
import { RefreshCcw } from "lucide-react";

export function DashboardHeader({
  servicesToday,
  driversOnline,  
  revenueToday,

  showDrivers = true,
  showRevenue = false,

  lastUpdated = "Hace unos segundos"
}: DashboardHeaderProps) {
  return(
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            Panel principal
          </h1>

          <Button 
            slot="icon"
            variant="outline"
            className="rounded-full lg:hidden"
          >
            <RefreshCcw className="h-4 w-4"/>
        </Button>
        </div>

        <p className="text-muted-foreground mt-1">
          Visión general de la operación en el tiempo real
        </p>

        <p className="text-muted-foreground mt-3 text-xs md:text-sm">
          Última actualizacion: {lastUpdated}
        </p>
      </div>

      <div className="flex flex-nowrap items-center gap-6 overflow-x-auto scrollbar-hide lg:gap-10">
        <div>
          <p className="text-2xl md:text-3xl font-bold">
            {servicesToday}
          </p>

          <p className="text-muted-foreground text-xs md:text-sm">
            Servicios hoy
          </p>
        </div>

        {showRevenue && (
          <div>
            <p className="text-2xl md:text-3xl font-bold">
              {driversOnline}
            </p>

            <p className="text-muted-foreground text-xs md:text-sm">
              Conductores online
            </p>
          </div>
        )}

        {showRevenue && (
          <div>
            <p className="text-2xl md:text-3xl font-bold">
              $ {new Intl.NumberFormat("es-Ar").format(revenueToday ?? 0)}
            </p>

            <p className="text-muted-foreground text-xs md:text-sm">
              Ganancia hoy
            </p>

          </div>
        )}

        <Button 
          slot="icon"
          variant="outline"
          className="rounded-full hidden md:flex"
        >
          <RefreshCcw className="h-4 w-4"/>
        </Button>
      </div>      
    </div>
  )
}
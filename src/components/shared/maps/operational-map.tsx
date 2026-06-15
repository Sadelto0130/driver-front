"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import {
  drivers,
  services,
} from "@/mocks/maps";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

const OperationalMapClient = dynamic(
  () => import("./operational-map-client"),
  { ssr: false }
)

export function OperationalMap() {
  const [filters, setFilters] = useState({
    available: true,
    busy: true,
    offline: true,
    services: true,
    assigned: true,
    in_progress: true,
    pickup: true
  });

  const filteredDrivers = drivers.filter(
    (driver) => {
      if (
        driver.status === "available" &&
        !filters.available
      ) {
        return false;
      }

      if (
        driver.status === "busy" &&
        !filters.busy
      ) {
        return false;
      }

      if (
        driver.status === "offline" &&
        !filters.offline
      ) {
        return false;
      }

      return true;
    }
  );

  const filteredServices = services.filter((service) => {
  if (!filters.services) {
    return false;
  }

  if (
    service.status === "assigned" &&
    !filters.assigned
  ) {
    return false;
  }

  if (
    service.status === "pickup" &&
    !filters.pickup
  ) {
    return false;
  }

  if (
    service.status === "in_progress" &&
    !filters.in_progress
  ) {
    return false;
  }

  return true;
});

  const countTotal = {
    availableDrives: drivers.filter(
      (driver) => driver.status === "available"
    ).length,

    busyDrives: drivers.filter(
      (driver) => driver.status === "busy"
    ).length,

    offlineDrives: drivers.filter(
      (driver) => driver.status === "offline"
    ).length,

    assignedCount: services.filter(
      (service) => service.status === "assigned"
    ).length,
  
    pickupCount: services.filter(
      (service) => service.status === "pickup"
    ).length,
    
    inProgressCount: services.filter(
      (service) => service.status === "in_progress"
    ).length,

    totalServices: services.length
  }

  const hasActiveFilters =
  !filters.available ||
  !filters.busy ||
  !filters.offline ||
  !filters.services ||
  !filters.assigned ||
  !filters.pickup ||
  !filters.in_progress;

  return (
    <div className="
        rounded-2xl
        border
        border-slate-500/30
        bg-card
        p-5
        shadow-[0_4px_20px_rgba(0,0,0,0.05)]
      ">
      <div className="
        mb-4 
        flex 
        flex-col 
        gap-3 
        lg:flex-row
        lg:items-center 
        lg:justify-between
      ">
        <div>
          <h3 className="text-lg font-semibold">
            Mapa operacional
          </h3>
          <p className="text-sm text-muted-foreground">
            {filteredDrivers.length} conductores · {filteredServices.length} servicios visibles
          </p>
        </div>

        <div className="
          grid
          grid-cols-3 
          gap-2 

          lg:flex
          lg:flex-wrap
          lg:items-center
        ">
          <Badge
            variant={filters.available ? "default" : "outline"}
            className="shrink-0 cursor-pointer gap-2"
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                available: !prev.available,
              }))
            }
          >
            <div className="h-3 w-3 rounded-full bg-green-500" />
            {countTotal.availableDrives} disponibles
          </Badge>


          <Badge
            variant={filters.busy ? "default" : "outline"}
            className="shrink-0 cursor-pointer gap-2"
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                busy: !prev.busy,
              }))
            }
          >
            <div className="h-3 w-3 rounded-full bg-amber-500" />
            {countTotal.busyDrives} ocupados
          </Badge>

          <Badge
            variant={filters.offline ? "default" : "outline"}
            className="shrink-0 cursor-pointer gap-2"
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                offline: !prev.offline,
              }))
            }
          >
            <div className="h-3 w-3 rounded-full bg-red-500" />
            {countTotal.offlineDrives} desconecta..
          </Badge>

          <Badge
            variant={filters.assigned ? "default" : "outline"}
            className="shrink-0 cursor-pointer gap-2"
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                assigned: !prev.assigned,
              }))
            }
          >
            📋 {" "} {countTotal.assignedCount} {" "} Asignados
          </Badge>

          <Badge
            variant={filters.pickup ? "default" : "outline"}
            className="shrink-0 cursor-pointer gap-2"
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                pickup: !prev.pickup,
              }))
            }
          >
            🚗 {" "} {countTotal.pickupCount} {" "} En camino
          </Badge>

          <Badge
            variant={filters.in_progress ? "default" : "outline"}
            className=" shrink-0 cursor-pointer gap-2"
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                in_progress: !prev.in_progress,
              }))
            }
          >
            🛣️ {" "} {countTotal.inProgressCount} {" "} En viaje
          </Badge>

          {hasActiveFilters && (
            <Button
              size="sm"
              variant="outline"
              className="
                shrink-0
                h-8
                w-8
                cursor-pointer
                border-slate-300
                bg-slate-50
                text-slate-600
                transition-all
                hover:border-slate-400
                hover:bg-slate-100
                hover:text-slate-900
              "
              onClick={() =>
                setFilters({
                  available: true,
                  busy: true,
                  offline: true,
                  services: true,
                  assigned: true,
                  in_progress: true,
                  pickup: true
                })
              }
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>
      </div>
      <OperationalMapClient
        drivers={filteredDrivers}
        services={filteredServices}
      />
    </div>
  )
}
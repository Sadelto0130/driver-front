"use client"

import { EntityListRow } from "@/components/shared/entity-list-row/entity-list-row"
import { formatServiceDate } from "@/lib/date"
import { cn } from "@/lib/utils"
import { Service, ServiceStatus } from "@/types/service"
import { statusColorMap } from "@/types/status-color-map"
import { statusMap } from "@/types/status-map"

interface Props {
  service: Service

  selected?: boolean
  highlighted?: boolean

  onSelect: (service: Service) => void
}

export function ServiceRow({
  service,
  selected,
  highlighted,
  onSelect
} : Props) {
  return (
    <EntityListRow
      selected={selected}
      highlighted={highlighted}
      onClick={() => onSelect(service)}
      mobileContent={
        <div className="px-4 py-2">
          {/* Estado + fecha */}
          <div className="flex items-center justify-between">
            <span
              className={cn(
                "rounded-full px-2 py-0 text-[11px] font-medium",
                statusColorMap[service.status].badge
              )}
            >
              {statusMap[service.status]}
            </span>

            <span className="whitespace-nowrap text-sm text-slate-500">
              {formatServiceDate(
                service.requestedAt
              )}
            </span>
          </div>

          {/* Servicio */}
          <div className="mt-2">
            <p className="text-lg font-semibold text-slate-900">
              #{service.serviceNumber}
            </p>
          </div>

          {/* Pasajero */}
          <div className="mt-2">
            <p className="font-semibold leading-none">
              {service.passengerName}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {service.companyName || "-"}
            </p>
          </div>

          {/* Recorrido */}
          <div className="mt-3">
            <p className="truncate text-sm">
              {service.origin}
            </p>

            <p className="mt-1 truncate text-sm text-slate-500">
              → {service.destination}
            </p>
          </div>

          {/* Datos secundarios */}
          <div className="mt-3 flex items-center justify-between gap-4 text-sm text-slate-500">
            <span className="truncate">
              {service.phone || "-"}
            </span>

            <span className="shrink-0">
              {service.paymentMethod || "-"}
            </span>
          </div>
        </div>
      }
      desktopContent={
        <div
          className="
            grid
            grid-cols-[90px_140px_180px_120px_100px_minmax(120px,1fr)]
            items-center
            gap-4
            px-4
            py-2
          "
        >
          {/* Estado + Servicio */}
          <div className="flex flex-col gap-1">
            <span
              className={cn(
                "w-fit rounded-full px-2 py-1 text-xs font-medium",
                statusColorMap[service.status].badge
              )}
            >
              {statusMap[service.status]}
            </span>

            <span className="font-semibold text-slate-900">
              #{service.serviceNumber}
            </span>
          </div>

          {/* Fecha */}
          <div>
            <span className="whitespace-nowrap text-sm">
              {formatServiceDate(
                service.requestedAt
              )}
            </span>
          </div>

          {/* Pasajero / Empresa */}
          <div className="flex flex-col gap-1">
            <span className="font-semibold">
              {service.passengerName}
            </span>

            <span className="truncate text-sm text-slate-500">
              {service.companyName || "-"}
            </span>
          </div>

          {/* Teléfono */}
          <div>
            <span className="text-sm">
              {service.phone || "-"}
            </span>
          </div>

          {/* Pago */}
          <div>
            <span className="text-sm">
              {service.paymentMethod || "-"}
            </span>
          </div>

          {/* Recorrido */}
          <div>
            <p className="truncate font-medium text-slate-900">
              {service.origin}
            </p>

            <p className="truncate text-sm text-slate-500">
              → {service.destination}
            </p>
          </div>
        </div>
      }
    />
  )
}
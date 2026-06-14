"use client";

import { EntityListRow } from "@/components/shared/entity-list-row/entity-list-row";
import { formatServiceDate, getWaitingMinutes } from "@/lib/date";
import { cn } from "@/lib/utils";
import { getWaitingPriority, getWaitingPriorityClasses, shouldShowWaitingPriority } from "@/lib/waiting-priority";
import { Service } from "@/types/service";
import { statusColorMap } from "@/types/status-color-map";
import { statusMap } from "@/types/status-map";

interface Props {
  trip: Service;
  selected: boolean;
  highlighted: boolean;
  onSelect: (trip: Service) => void;
}

export function WorkQueueRow({
  trip,
  selected,
  highlighted,
  onSelect
}: Props) {
  const showPriority = shouldShowWaitingPriority(trip)
  const statusMaps = statusMap

  const priority = showPriority
    ? getWaitingPriority(trip.requestedAt)
    : null

  const priorityStyles = priority
    ? getWaitingPriorityClasses(priority)
    : null

  return (
    <EntityListRow
      selected={selected}
      highlighted={highlighted}
      onClick={() => onSelect(trip)}
      priorityBorderClass={priorityStyles?.border}
      mobileContent={
        <div className="px-4 py-2">
          {/**Estado + demora */}
          <div className="flex items-center justify-between">
            <span
              className={cn(
                "rounded-full px-2 py-0 text-[11px] font-medium",
                statusColorMap[trip.status].badge
              )}
            >
              {statusMaps[trip.status]}
            </span>    

            {showPriority && (
              <span
                className={cn(
                  "rounded-full border px-2 py-0 text-xs font-medium",
                  priorityStyles?.badge
                )}
              >
                {getWaitingMinutes(trip.requestedAt)} min
              </span>
            )}
          </div>

          {/**Servicio + fecha */}
          <div className="mt-2 flex items-center justify-between gap-3">
            <div>
              <p className="text-lg font-semibold text-slate-900">
                #{trip.serviceNumber}
              </p>
            </div>

            <span className="whitespace-nowrap text-sm text-slate-500">
              {formatServiceDate(trip.requestedAt)}
            </span>
          </div>

          {/**Pasajero + recorrido */}
          <div className="mt-2 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="leading-none font-semibold">
                {trip.passengerName}
              </p>
              <p className="text-sm text-slate-500">
                {trip.companyName}
              </p>
            </div>

            <div className="max-w-[45%] text-right">
              <p className="truncate text-sm leading-none">{trip.origin}</p>

              <p className="mt-1 truncate text-sm leading-none text-slate-500">
                → {trip.destination}
              </p>
            </div>
          </div>

          <div className="mt-2 text-sm leading-none text-slate-500">
            {trip.driverName ?? "Sin conductor"}
          </div>
        </div>
      }
      desktopContent={
        <div className="
          grid grid-cols-[100px_180px_180px_160px_2fr]
          items-center
          gap-4
          px-2
          py-2
        ">
          <div className="flex flex-col gap-1">
            <span
              className={cn(
                "w-fit rounded-full px-2 py-1 text-xs font-medium",
                statusColorMap[trip.status].badge
              )}
            >
              {statusMaps[trip.status]}
            </span>

            <span className="font-semibold text-slate-900">
              #{trip.serviceNumber}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="whitespace-nowrap text-sm">
              {formatServiceDate(trip.requestedAt)}
            </span>

            {showPriority && (
              <span
                className={cn(
                  "w-fit rounded-full border px-2 py-0.5 text-xs font-medium",
                  priorityStyles?.badge
                )}
              >
                Retraso{" "}   {getWaitingMinutes(trip.requestedAt)} min
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <span className="whitespace-nowrap font-semibold">
              {trip.passengerName}
            </span>

            <span className="text-sm">
              {trip.companyName}
            </span>
          </div>

          <span>
            {trip.driverName ?? "-"}
          </span>

          <div>
            <p className="font-medium text-slate-900">
              {trip.origin}
            </p>

            <p className="text-sm text-slate-500">
              → {trip.destination}
            </p>
          </div>
        </div>
      }
    />
  )
}
 
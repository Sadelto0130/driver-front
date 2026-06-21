import { Driver } from "@/types/driver"
import { StatusBadge } from "./status-badge"

interface Props {
  driver: Driver
}

export function DriverListItemContent({driver}: Props) {
  return (
    <div className="p-4">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-slate-900">
            {driver.name}
          </p>
        </div>

        <StatusBadge statusDriver={driver.status}/>
      </div>

      <div className="mt-3 flex items-center gap-4 text-sm text-slate-500">
        <span>
          {driver.tripsToday} viajes - ${driver.earningsToday.toLocaleString()}
        </span>
      </div>
    </div>
  )
}
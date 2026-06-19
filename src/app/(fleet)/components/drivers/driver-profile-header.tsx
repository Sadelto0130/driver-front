import { Driver } from "@/types/driver";
import { DriverStatusBadge } from "./driver-status-badge";

interface Props {
  driver: Driver;
}

export function DriverProfileHeader({
  driver,
}: Props) {
  return (
    <div className="border-b border-slate-200 p-4">

      <div className="flex gap-4 items-start justify-between">
        <div className="min-w-0">
          <h2 className="text-lg font-semibold">
            {driver.name}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Conductor
          </p>        
        </div>

        <DriverStatusBadge
          status={driver.status}
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-slate-500">
            Viajes hoy
          </p>

          <p className="font-medium">
            {driver.tripsToday}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-500">
            Ganancias
          </p>

          <p className="font-medium">
            $
            {driver.earningsToday.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
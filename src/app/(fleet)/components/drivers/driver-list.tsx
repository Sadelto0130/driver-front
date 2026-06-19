import { Driver } from "@/types/driver";
import { DriverListItem } from "./driver-list-item";

interface Props {
  drivers: Driver[]
  selectedDriverId: string | null
  onSelectedDriver: (driver: Driver) => void
}

export function DriverList({
  drivers,
  selectedDriverId,
  onSelectedDriver
}: Props) {
  return (
    <div className="h-full overflow-y-auto rounded-xl border border-slate-200 bg-white">
      {drivers.map((driver) => (
        <DriverListItem
          key={driver.id}
          driver={driver}
          selected={selectedDriverId === driver.id}
          onClick={() => onSelectedDriver(driver)}
        />
      ))}
    </div>
  )
}
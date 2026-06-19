import { Driver } from "@/types/driver";
import { DriverPersonalInfoCard } from "./driver-personal-info-card";
import { DriverVehicleInfoCard } from "./driver-vehicle-card";

interface Props {
  driver: Driver
}

export function DriverSummaryTab({driver} : Props) {
  return (
    <div className="p-4">
      <DriverPersonalInfoCard driver={driver} />

      <DriverVehicleInfoCard driver={driver} />

    </div>
  )
}
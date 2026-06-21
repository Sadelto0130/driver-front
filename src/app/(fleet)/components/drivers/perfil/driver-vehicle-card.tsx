import { InfoRow } from "@/components/shared/info-row";
import { Driver } from "@/types/driver";

interface Props {
  driver: Driver
}

export function DriverVehicleInfoCard({driver}: Props) {
  return (
    <section className="mt-8">
      <h3 className="text-sm font-semibold text-slate-900">
        Datos del vehiculo
      </h3>

      <div className="mt-4 space-y-3">
        <InfoRow
          label="Vehiculo"
          value={driver.vehicleName}
        />

        <InfoRow
          label="Patente"
          value={driver.vehiclePlate}
        />
      </div>
    </section>
  )
}
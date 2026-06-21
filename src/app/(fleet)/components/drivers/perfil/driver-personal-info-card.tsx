import { InfoRow } from "@/components/shared/info-row";
import { Driver } from "@/types/driver";

interface Props {
  driver: Driver
}

export function DriverPersonalInfoCard({driver}: Props) {
  return (
    <section>
      <h3 className="text-sm font-semibold text-slate-900">
        Informacion personal
      </h3>

      <div className="mt-4 space-y-3">
        <InfoRow 
          label="Nombre"
          value={driver.name}
        />

        <InfoRow 
          label="Telefono"
          value={driver.phone}
        />

        <InfoRow 
          label="Email"
          value={driver.email}
        />
      </div>
    </section>
  )
}
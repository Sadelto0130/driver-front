import { InfoRow } from "@/components/shared/info-row"
import { Driver } from "@/types/driver"

interface Props {
  driver: Driver
}

export function DriverActivityTab({
  driver
}: Props) {
  return(
    <div className="p-4">
      <div className="grid gap-6 md:grid-cols-3">

        <section className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-semibold text-slate-900">
            Viajes
          </h3>

          <div className="mt-2 space-y-3">
            <InfoRow 
              label="Hoy"
              value={driver.tripsToday}
            />

            <InfoRow 
              label="Semana"
              value={driver.tripsWeek}
            />

            <InfoRow 
              label="Mes"
              value={driver.tripsMonth}
            />
          </div>
        </section>

        <section className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-semibold text-slate-900">
            Rendimiento económico
          </h3>

          <div className="mt-2 space-y-3">
            <InfoRow 
              label="Hoy"
              value={`$${driver.earningsToday.toLocaleString()}`}
            />

            <InfoRow 
              label="Semana"
              value={`$${driver.earningsWeek.toLocaleString()}`}
            />

            <InfoRow 
              label="Mes"
              value={`$${driver.earningsMonth.toLocaleString()}`}
            />
          </div>
        </section>

        <section className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-semibold text-slate-900">
          Indicadores
          </h3>

          <div className="mt-2 space-y-3">
            <InfoRow 
              label="Calificacion"
              value={driver.calificacion}
            />

            <InfoRow 
              label="Servicios cancelados"
              value= {driver.serviceCancel}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
import { InfoRow } from "@/components/shared/info-row";
import { Driver } from "@/types/driver";

interface Props {
  driver: Driver | null;
}

export function DriverFinancialSummarySection({driver}: Props) {
  return (
    <section>
      <h3 className="text-sm font-semibold text-slate-900">
        Resumen financiero
      </h3>

      <div className="mt-4 space-y-3">
        <InfoRow
          label="Ingresos semana"
          value={`$${driver?.earningsToday.toLocaleString()}`}
        />   

        <InfoRow
          label="Ingresos hoy"
          value={`$${driver?.earningsWeek.toLocaleString()}`}
        />  

        <InfoRow
          label="Ingresos mes"
          value={`$${driver?.earningsMonth.toLocaleString()}`}
        />       
      </div>
    </section>
  )
}
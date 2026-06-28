import { Driver } from "@/types/driver";

interface Props {
  driver: Driver | null;
}

function DriverFinancialSummarySection({driver}: Props) {
  return (
    <section>
      <h3 className="text-sm font-semibold text-slate-900">
        Resumen financiero
      </h3>

      <div className="mt-4 space-y-3">
        
      </div>
    </section>
  )
}
import { InfoRow } from "@/components/shared/info-row";
import { Driver } from "@/types/driver";

interface Props {
  driver: Driver | null;
}

function DriverSettlementsSection({driver}: Props) {
  <section>
    <h3 className="text-sm font-semibold text-slate-900">
      Liquidaciones
    </h3>

    <div className="mt-4 space-y-3">
      <InfoRow
        label="Pendiente de liquidacón"
        value={`$${driver?.finance.pendingSettlement.toLocaleString()}`}
      />

      <InfoRow
        label="Última liquidacón"
        value={`$${(driver?.finance.lastSettlementAmount ?? 0).toLocaleString()}`}
      />

      <InfoRow
        label="Monoto liquidado"
        value={`$${(driver?.finance.lastSettlementAmount ?? 0).toLocaleString()}`}
      />
    </div>
  </section>  
}
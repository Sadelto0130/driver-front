import { InfoRow } from "@/components/shared/info-row";
import { Button } from "@/components/ui/button";
import { Driver } from "@/types/driver";
import { useState } from "react";

interface Props {
  driver: Driver | null;
}

function DriverFinancialDetailSection({driver}: Props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <section>
      <Button
        variant="ghost"
        onClick={() => setExpanded(!expanded)}
      >
        ver detalle
      </Button>

      {expanded && (
        <div className="mt-4 space-y-3">
          <InfoRow
            label="Comisiones"
            value={`-$${driver?.finance.commission.toLocaleString()}`}
          />

          <InfoRow
            label="Descuentos"
            value={`-$${driver?.finance.discounts.toLocaleString()}`}
          />

          <InfoRow
            label="Bonificaciones"
            value={`+$${driver?.finance.bonuses.toLocaleString()}`}
          />

          <InfoRow
            label="Ajustes"
            value={`$${driver?.finance.adjustments.toLocaleString}`}
          />
        </div>
      )}
    </section>
  )
  
}
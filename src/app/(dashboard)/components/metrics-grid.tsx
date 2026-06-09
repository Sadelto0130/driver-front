import { Car, DollarSign, Shield, Users } from "lucide-react"
import { MetricCard } from "./metric-card"

type MetricsGridProps = {
  canViewFinance?: boolean
}

export function MetricsGrid({
  canViewFinance = true
}: MetricsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {canViewFinance && (
        <MetricCard
          title="Finanzas"
          icon={<DollarSign className="h-5 w-5" />}
          iconStyle="bg-emerald-500/10 text-emerald-600"
          bgStile="bg-emerald-500"
          primaryMetric={{
            label: "Facturación Hoy",
            value: "$1.250.000",
          }}
          secondarMetrics={[{
            label: "Ganancia Hoy",
            value: "$887.500",
          }]}
        />)}

      <MetricCard
        title="Servicios"
        icon={<Car className="h-5 w-5" />}
        iconStyle="bg-blue-500/10 text-blue-600"
        bgStile="bg-blue-500"
        primaryMetric={{
          label: "Servicios Hoy",
          value: 124,
        }}
        secondarMetrics={[
          {
            label: "Viajes Activos",
            value: 18,
          },
          {
            label: "Pendientes",
            value: 9,
          },
        ]}
      />

      <MetricCard
        title="Flota"
        icon={<Users className="h-5 w-5" />}
        iconStyle="bg-violet-500/10 text-violet-600"
        bgStile="bg-violet-500"
        primaryMetric={{
          label: "Conductores Online",
          value: 45,
        }}
        secondarMetrics={[
          {
            label: "Disponibles",
            value: 32,
          },
          {
            label: "Ocupados",
            value: 13,
          },
        ]}
      />

      <MetricCard
        title="Auditoría"
        icon={<Shield className="h-5 w-5" />}
        iconStyle="bg-orange-500/10 text-orange-600"
        bgStile="bg-orange-500"
        primaryMetric={{
          label: "Cumplimiento",
          value: "95%",
        }}
        secondarMetrics={[
          {
            label: "Cancelaciones",
            value: 6,
          },
        ]}
      />
    </div>
  )
}
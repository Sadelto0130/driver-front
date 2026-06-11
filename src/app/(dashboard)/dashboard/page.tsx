import { DashboardHeader } from "../components/dashboard-header";
import { OperationalMap } from "../components/maps/operational-map";
import { MetricsGrid } from "../components/metrics-grid";
import { OperationsSection } from "../components/operations-overview";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <DashboardHeader
        servicesToday={124}
        driversOnline={45}
        revenueToday={887500}
        showDrivers
        showRevenue
      />

      <div className="order-2 md:order-1">
        <MetricsGrid />
      </div>

      <div className="order-1 md:order-2">
        <OperationsSection />
      </div>

      <div className="order-3">
        <OperationalMap />
      </div>
    </div>
  )
}
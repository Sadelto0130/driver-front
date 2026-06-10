import { DashboardHeader } from "../components/dashboard-header";
import { OperationalMap } from "../components/maps/operational-map";
import { MetricsGrid } from "../components/metrics-grid";
import { OperationsSection } from "../components/operations-overview";

export default function DashboardPage() {
  return (
    <div className='space-y-6'>
      <DashboardHeader
        servicesToday={124}
        driversOnline={45}
        revenueToday={887500}
        showDrivers
        showRevenue
      />

      <MetricsGrid />

      <OperationsSection />

      <OperationalMap />
    </div>
  )
}
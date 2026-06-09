import { DashboardHeader } from "../components/dashboard-header";
import { MetricsGrid } from "../components/metrics-grid";
import { OperationsSection } from "../components/operations-overview";

export default function DashboardPage() {
  return (
    <div className='space-y-6'>
      <DashboardHeader
        servicesToday={124}
        driversOnline={45}
        revenueToday={187500}
        showDrivers
        showRevenue
      />

      <MetricsGrid />

      <OperationsSection />
    </div>
  )
}
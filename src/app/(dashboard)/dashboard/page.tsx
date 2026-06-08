import { DashboardHeader } from "../components/dashboard-header";

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
    </div>
  )
}
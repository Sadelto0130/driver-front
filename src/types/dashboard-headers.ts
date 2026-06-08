export type DashboardHeaderProps = {
  servicesToday: number
  driversOnline?: number
  revenueToday?: number

  showDrivers?: boolean
  showRevenue?: boolean
  
  lastUpdated?: string
}
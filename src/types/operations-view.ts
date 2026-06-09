export type CriticalService = {
  id: string,
  waitMinutes: number
  severity: "warning" | "critical"
}

export type OperationsMetrics = {
  activeMatching: number
  withoutDriver: number
  delayedServices: number
  disconnectedDrivers: number
}
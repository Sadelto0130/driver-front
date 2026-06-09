export type AlertItem = {
  id: string
  title: string
  description: string
  severity: "warning" | "critical"
  createdAt: string
}
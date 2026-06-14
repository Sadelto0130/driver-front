import { Service } from "@/types/service"

export type WaitingPriority =
  | "NORMAL"
  | "WARNING"
  | "CRITICAL"

export function getWaitingPriority(
  requestedAt: string
): WaitingPriority {
  const waitingMinutes = 
    (Date.now() - new Date(requestedAt).getTime()) / 1000 / 60

  if(waitingMinutes >= 20) {
    return "CRITICAL"
  }

  if(waitingMinutes >= 10) {
    return "WARNING"
  }

  return "NORMAL"
}

export function shouldShowWaitingPriority(
  trip: Service
) {
  const hasAssignedDriver = Boolean(trip.driverName)

  return (
    !hasAssignedDriver && 
    (
      trip.status === "PENDING" ||
      trip.status === "MATCHING"
    )
  )
}

export function getWaitingPriorityClasses(
  priority: WaitingPriority
) {
  switch(priority) {
    case "CRITICAL":
      return {
        badge: "bg-red-100 text-red-700 border-red-200",
        border: "border-l-red-500"
      }

    case "WARNING":
      return {
        badge: "bg-yellow-100 text-yellow-700 border-yellow-200",
        border: "border-l-yellow-500"
      }

    default: 
      return {
        badge: "bg-muted text-muted-foreground",
        border: "border-l-transparent"
      }
  }
}
import {
  Car,
  UserRound,
  Calendar,
  CircleX
} from "lucide-react"

export type ActivityItem = {
  id: string
  message: string
  createdAt: string
  type:
    | "service"
    | "driver"
    | "reservation"
    | "cancellation"         
}

export const activityIcons = {
  service: Car,
  driver: UserRound,
  reservation: Calendar,
  cancellation: CircleX
}

export const activityStyles = {
  service: {
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  driver: {
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  reservation: {
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
  },
  cancellation: {
    iconBg: "bg-red-500/10",
    iconColor: "text-red-600",
  },
}
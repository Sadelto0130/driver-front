"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { activities } from "@/mocks/actvities"
import { activityIcons, activityStyles } from "@/types/activity-item"
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"

export function RecentActivity() {
  const router = useRouter()

  return (
    <div className="
      h-[295px] 
      min-w-0
      flex 
      flex-col
      rounded-2xl
      border
      border-slate-500/30
      bg-card
      p-5
      shadow-[0_4px_20px_rgba(0,0,0,0.05)]
    ">

      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          Actividad reciente
        </h3>
      </div>

      <div className="
        mt-4 
        flex-1
        overflow-y-auto 
        space-y-2
      ">
        {activities.map((activity) => {
          const Icon = activityIcons[activity.type]
          const style = activityStyles[activity.type];

          return (
            <div
              key={activity.id}
              className="rounded-lg px-2 pb-2 transition-colores hover:bg-muted/30"
            >
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                    style.iconBg,
                    style.iconColor,
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm leading-tight">
                      {activity.message}
                    </p>

                    <Badge
                      variant="secondary"
                      className="shrink-0 text-[10px]"
                    >
                      {activity.createdAt}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-4">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => router.push("/audit")}
        >
          Ver actividad
        </Button>
      </div>
    </div>
  )
}

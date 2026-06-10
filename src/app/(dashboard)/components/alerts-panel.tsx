"use client"

import { Button } from "@/components/ui/button"
import { alertsMock } from "@/mocks/alert-item"
import { AlertTriangle, Clock3 } from "lucide-react"
import { useRouter } from "next/navigation"

export function AlertsPanel() {
  const router = useRouter()

  return (
    <div className="rounded-2xl border border-slate-500/30 bg-card p-5 shadow-[0_4px_20px_rgba(0,0,0,0.o5)]">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          Alertas
        </h3>

        <div className="flex h-7 min-w-7 items-center justify-center rounded-full bg-red-500/10 px-2 text-xs font-medium text-red-600">
          3
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {alertsMock.map((alert) => (
          <div
            key={alert.id}
            className={
              alert.severity === "critical"
                ? "rounded-xl border border-red-400/80 px-3 py-2"
                : "rounded-xl border border-yellow-400/80 px-3 py-2"
            }
          >
            <div className="flex items-center gap-2">
              <AlertTriangle
                className={
                  alert.severity === "critical"
                    ? "h-4 text-red-500"
                    : "h-4 w-4 text-yellow-500"
                }
              />

              <div className="flex flex-1 items-center justify-between gap-2">
                <p className="truncate text-sm">
                  <span className="font-medium">
                    {alert.title}
                  </span>

                  <span className="text-muted-foreground">
                    {" . "}
                    {alert.description}
                  </span>
                </p>

                <div className="mt-2 gap-1 text-xs text-muted-foreground">
                  {alert.createdAt}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-4">
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-blue-400 hover:bg-blue-300 border border-blue-500 font-semibold"
            onClick={() => router.push("/dispatch")}
          >
            Ver alertas
          </Button>
        </div>
      </div>
    </div>
  )
} 
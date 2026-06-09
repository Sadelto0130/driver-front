"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock3, Search, UserX, WifiOff } from "lucide-react";
import { CriticalService } from "@/types/operations-view";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const criticalServices: CriticalService[] = [
  {
    id: "1042",
    waitMinutes: 28,
    severity: "critical",
  },
  {
    id: "1041",
    waitMinutes: 24,
    severity: "critical",
  },
  {
    id: "1038",
    waitMinutes: 19,
    severity: "warning",
  },
];

const indicators = [
  {
    icon: Search,
    value: 4,
    label: "Buscando conductor",
    color: "text-blue-600",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30"
  },
  {
    icon: UserX,
    value: 3,
    label: "Sin conductor",
    color: "text-orange-600",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30"
  },
  {
    icon: Clock3,
    value: 2,
    label: "Con retraso",
    color: "text-red-600",
    bg: "bg-red-500/10",
    border: "border-red-500/30"
  },
  {
    icon: WifiOff,
    value: 1,
    label: "Conductores Desconectados",
    color: "text-violet-600",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30"
  },
];

export function OperationsOverview() {
  const router = useRouter();

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-500/30
        bg-card
        p-5
        shadow-[0_4px_20px_rgba(0,0,0,0.05)]
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg">
            Estado Operacional
          </h3>

          <p className="text-sm text-muted-foreground">
            Estado global de reservas y asignaciones.
          </p>
        </div>

        <Badge className="
          bordder-emerald-500/30 
          bg-emerald-500/10
          text-emerald-700">
          Operación saludable
        </Badge>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {indicators.map((indicator) => {
          const Icon = indicator.icon

          return (
            <div
              key={indicator.label}
              className={cn(
                "flex items-center gap-3 rounded-xl border p-3",
                indicator.border
              )}
            >
              <div className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg",
                indicator.bg,
                indicator.color
              )}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-bold">
                  {indicator.value}
                </p>

                <p className="text-xs text-muted-foreground">
                  {indicator.label}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6">
        <h4 className="font-medium">
          Servicios críticos
        </h4>

        <div className="space-y-2">
          {criticalServices.map((service) => (
            <div
              key={service.id}
              className="
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-red-600/55
                p-3
              "
            >
              <div>
                <p className="font-medium">
                  Servicio #{service.id}
                </p>

                <p className="text-xs text-muted-foreground">
                  Esperando asignación
                </p>
              </div>

              <Badge variant={
                service.severity === "critical"
                  ? "destructive"
                  : "secondary" 
              }>
                {service.waitMinutes} min
              </Badge>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 justify-end">
        <Button
          className="border border-blue-400 bg-blue-500/30 hover:bg-blue-200/70"
          onClick={() => router.push("/dispatch")}
        >
          Abrir operaciones
        </Button>
      </div>
    </div>
  );
}
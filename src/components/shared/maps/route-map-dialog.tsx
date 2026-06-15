import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Service } from "@/types/service";
import dynamic from "next/dynamic";

interface Props {
  service: Service
  trigger: React.ReactNode
}

const ServiceRoouteMap = dynamic(
  () => import("./service-route-map").then(
    (mod) => mod.ServiceRouteMap
  ),
  {
    ssr: false
  }
)

export function RouteMapDialog({
  service,
  trigger
}: Props) {
  if(!service.originLocation || !service.destinationLocation) {
    return (
      <div className="flex h-[600px] items-center justify-center">
        No hay coordenadas disponibles
      </div>
    )
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>

      <DialogContent className="
        !w-[95vw]
        !max-w-[1200px]
        h-[90vh]
        p-0 
        overflow-hidden 
        bg-white"
      >
        <div className="flex h-full flex-col">
          <div className="shrink-0 border-b border-slate-200 p-5">
            <h2 className="text-xl font-semibold">
              Recorrido del servicio #{service.serviceNumber}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {service.origin} → {service.destination}
            </p>
          </div>

          <div className="min-h-0 flex-1">
            <ServiceRoouteMap
              origin={service.originLocation}
              destination={service.destinationLocation}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
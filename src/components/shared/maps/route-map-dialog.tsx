import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { calculateDistanceKm } from "@/lib/calculate-distance";
import { Service } from "@/types/service";
import { Flag, MapPin } from "lucide-react";
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

  const distanceKm = calculateDistanceKm(
    service.originLocation.lat,
    service.originLocation.lng,
    service.destinationLocation.lat,
    service.destinationLocation.lng
  )

  const formattedDistance = distanceKm < 1
    ? `${Math.round(distanceKm * 1000)} m`
    : `${distanceKm.toFixed(1)} km`

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
        bg-white
        flex
        flex-col
        gap-0 
      ">
        <DialogHeader className="shrink border-b border-slate-200 p-5">
          <DialogTitle className="text-xl font-semibold">
            Recorrido del servicio #{service.serviceNumber}
          </DialogTitle>

          <p className="mt-1 text-sm text-slate-500">
            {service.origin} → {service.destination}
          </p>
        </DialogHeader>

        <div className="border-b border-slate-100 bg-slate-50 px-5 py-4">
          <div className="flex items-center justify-center gap-6">
            
            <div className="flex items-center gap-2">
              <div className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-emerald-100
              ">
                <MapPin className="h-4 w-4 text-emerald-600" />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Origen
                </p>

                <p className="font-medium">
                  {service.origin}
                </p>
              </div>
            </div>

            <div className="
              rounded-full
              bg-blue-100
              px-3
              py-1
              text-xs
              font-semibold
              text-blue-700
              whitespace-nowrap
            ">
              {formattedDistance}
            </div>

            <div className="flex items-center gap-2">
              <div className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-red-100
              ">
                <Flag className="h-4 w-4 text-red-600" />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Destino
                </p>

                <p className="font-medium">
                  {service.destination}
                </p>
              </div>
            </div>

          </div>
        </div>
        
        <div className="min-h-0 flex-1">
          <ServiceRoouteMap
            origin={service.originLocation}
            destination={service.destinationLocation}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
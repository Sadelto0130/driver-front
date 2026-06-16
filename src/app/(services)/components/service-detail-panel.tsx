"use client"

import { cn } from "@/lib/utils"
import { Service } from "@/types/service"
import { statusColorMap } from "@/types/status-color-map"
import { Car, Eye, Flag, MapPin, MapPinned } from "lucide-react"
import { ServiceDetailActions } from "./service-detail-actions"
import { statusMap } from "@/types/status-map"
import { RouteMapDialog } from "@/components/shared/maps/route-map-dialog"

interface Props{
  service: Service | null
}

export function ServiceDetailPanel({service}: Props) {
  if(!service) {
    return (
      <div className="flex h-full items-center justify-center p-6">
        <div className="max-w-xs text-center">
          
          <div className="
              mx-auto mb-6
              flex h-24 w-24
              items-center justify-center
              rounded-3xl
              border border-slate-200
              bg-gradient-to-br
              from-blue-50
              to-slate-50
            "
          >
          <div className="relative">
            <MapPinned className="h-10 w-10 text-slate-400" />

            <Car className="
                absolute
                -right-1
                -top-1
                h-5 w-5
                rounded-full
                bg-white
                p-0.5
                text-blue-500
                shadow-sm
              "
            />
          </div>
        </div>

          <h3 className="text-base font-semibold text-slate-900">
            Ningún servicio seleccionado
          </h3> 

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Seleccione un servicio de la lista para visualizar pasajeros, recorrido, observaciones y detalles operativos
          </p>

          <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 px-4 py-3">
            <p className="text-xs text-slate-500">
              Los detalles aparecerán al seleccionar un servicio
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full min-h-0 flex-col bg-white">
      <div className="shrink-0 border-b border-slate-200 px-5 py-4">

        <div className="flex items-start justify-between mt-8 lg:mt-0">
          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            #{service.serviceNumber}
          </h2>

          
          <span className={cn(
            "rounded-full border px-3 py-1 text-xs font-medium",
            statusColorMap[service.status].badge
          )}
          >
            {statusMap[service.status]}
          </span>
        </div>
        <ServiceDetailActions service={service} />
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="space-y-6 p-5">
            <PassengerCard service={service} />
            <RouteCard service={service} />
            <OperationCard service={service} /> 
            {service.observations && (
              <ObservationsCard observations={service.observations}/>
            )}

          </div>
      </div>
    </div>
  )
}

function PassengerCard({
  service,
}: {
  service: Service
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div>
        <p className="text-lg font-semibold text-slate-900">
          {service.passengerName}
        </p>

        <p className="mt-0 text-sm text-slate-500">
          {service.companyName}
        </p>
      </div>

      <div className="mt-2 space-y-3">
        {service.passengerPhone && (
          <div className="flex items-center gap-2 text-sm">
            <span>📞</span>
            <span>{service.passengerPhone}</span>
          </div>
        )}

        {service.passengerEmail && (
          <div className="flex items-center gap-2 text-sm">
            <span>✉️</span>
            <span>{service.passengerEmail}</span>
          </div>
        )}
      </div>
    </div>
  )
}

function RouteCard({
  service,
}: {
  service: Service
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mt-1 grid grid-cols-[1fr_120px] gap-4 iems-center">
        
        <div>
          <div className="flex gap-3">
            <MapPin className="mt-o.5 h-4 w-4 text-emerald-600" />
        
            <div>
              <p className="text-sm text-slate-500">
                Origen
              </p>

              <p className="font-medium">
                {service.origin}
              </p>
            </div>
          </div>

          <div className="ml-2 my-3 h-8 border-l border-slate-300" />

          <div className="flex gap-3">
            <Flag className="mt-o.5 h-4 w-4 text-red-500" />

            <div>
              <p className="text-sm text-slate-500">
                Destino
              </p>

              <p className="font-medium">
                {service.destination}
              </p>
            </div>
          </div>
        </div>

        <RouteMapDialog 
          service={service}
          trigger={
            <button className="group relative h-36 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition-all hover:border-blue-300 hover:shadow-md active:scale-[0.98] lg:cursor-pointer"
            onClick={() => console.log("MAP CLICK")}
            >
              <div className="flex h-full items-center justify-center text-xs font-medium text-slate-400">
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-slate-900/30 py-2 lg:opacity-0 lg:transition-opacity lg:group-hover:opacity-100">
                  <Eye className="h-3.5 w-3.5" />
                  <span className="text-xs font-medium">
                    Ver mapa
                  </span>
              </div>
            </button>
          }
        />
      </div>
    </div>
  )
}

function OperationCard({
  service,
}: {
  service: Service
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900">
        Operación
      </h3>

      <div className="mt-2 space-y-3">
        <div className="flex items-center gap-3">
          <span>💳</span>

          <span>
            {service.paymentMethod || "No definido"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span>🚖</span>

          <span>
            {service.driverName || "Sin asignar"}
          </span>
        </div>
      </div>
    </div>
  )
}

function ObservationsCard({
  observations,
}: {
  observations: string 
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900">
        Observaciones
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-700">
        {observations}
      </p>
    </div>
  )
}

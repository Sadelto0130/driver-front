"use client";

import { 
  X,
  Phone,
  Mail,
  Clock3, 
  History,
  Ban
} from "lucide-react";

import { formatServiceTime, getWaitingTime } from "@/lib/date";
import { getStatusDescription } from "@/lib/trip-status";
import { TripHistorySheet } from "./history/trip-history-sheet";
import { AssignDriverSheet } from "./assign-driver-sheet";
import { Button } from "../../../components/ui/button";
import { useTripActions } from "@/hooks/use-trip-actions";
import { CancelTripDialog } from "@/components/shared/cancel-trip-dialog";
import { Service } from "@/types/service";

interface Props {
  trip: Service;
  onClose: () => void;
  showCloseButton?: boolean
}

const statusMap = {
  PENDING: "Pendiente",
  MATCHING: "Buscando",
  ASSIGNED: "Asignado",
  ACTIVE: "En proceso",
  COMPLETED: "Finalizado",
  PROGRAMMED: "Programado",
  CANCELLED: "Cancelado"
  
};

export function TripDetailPanel({ 
  trip, 
  onClose,
  showCloseButton = true
}: Props) {

  const{
    handleContactPassenger,
    handleCancelTrip,    
  } = useTripActions()

  const canContact = Boolean(trip.passengerPhone)

  const canAssignDriver =  
    trip.status === "PENDING" ||
    trip.status === "ASSIGNED" ||
    trip.status === "MATCHING"

  const canCancel = 
    trip.status === "PENDING" ||
    trip.status === "ASSIGNED" ||
    trip.status === "MATCHING"

  return (
    <div
      className="
        flex 
        h-full
        flex-col
        xl:rounded-3xl
        xl:border xl:border-slate-200/70
        bg-white
        xl:shadow-sm
      "
    >
      <div className="border-b border-slate-100 p-4 md:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight">
              Servicio #{trip.serviceNumber}
            </h2>

            <span className={`
              whitespace-nowrap
              rounded-full
              px-3 py-1.5
              text-sm font-medium  
              ${statusStyles[trip.status]}            
            `} 
            >
              {statusMap[trip.status]}
            </span>
          </div>

          {showCloseButton &&(
            <button
              onClick={onClose}
              aria-label="Cerrar detalle"
              className="
                hidden xl:block
                rounded-xl
                p-2
                hover:bg-slate-100
              "
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-4 md:p-6">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">Recorrido</p>

          <div className="mt-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Origen
              </p>
              
              <p className="text-lg font-semibold">
                {trip.origin}
              </p>
            </div>

            <div className="my-3 text-slate-400">
              ↓
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Destino
              </p>

              <p className="mt-1 text-xl font-semibold">
                {trip.destination}
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex items-start gap-2">
            <Clock3 className="mt-0.5 h-4 w-4 text-amber-600"/>

            <div>
              <p className="text-sm font-medium text-amber-600">
                {getStatusDescription(trip)} hace{" "} {getWaitingTime(trip.requestedAt)}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Ingresó {formatServiceTime(trip.requestedAt)}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 border-t border-slate-100 pt-6">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Pasajero
          </p>

          <p className="mt-2 text-lg font-semibold text-slate-900">
            {trip.passengerName}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
            <Phone className="h-4 w-4" />
            <span className="break-all">{trip.passengerPhone}</span>
          </div>

          <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
            <Mail className="h-4 w-4" />
            <span className="break-all">{trip.passengerEmail}</span>
          </div>
        </div>

        <div className="mt-8 grid gap-6">
          <Info 
            label="Chofer" 
            value={trip.driverName ?? "Sin asignar"} 
          />
          
        </div>

        <div className="mt-4 border-t border-slate-100 pt-6">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Observaciones
          </p>

          <p className="mt-2 text-sm leading-relaxed text-slate-700 bg-slate-50 rounded-xl p-4">
            {trip.observations?.trim()
              ? trip.observations
              : "Sin observaciones"
            }
          </p>
        </div>        
      </div>

      <div className="border-slate-100 p-4 md:p-6">

        <div className="space-y-3">
          {canAssignDriver && (
            <AssignDriverSheet trip={trip} />
          )}

          <div className="flex items-centner justify-center gap-2">
            <TripHistorySheet 
              trip={trip} 
              trigger={
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-xl"
                >
                  <History className="h-4 w-4" />
                </Button>
              }
            />      

            {/* Contactar*/}
            <Button
              size="icon"
              variant="outline"              
              className="rounded-xl"
              onClick={() => handleContactPassenger(trip)}
              disabled={!canContact}
            >
              <Phone className="h-4 w-4" />
            </Button>             

            {/* Cancelar */}
            <CancelTripDialog 
              trip={trip}
              disabled={!canCancel}
              onConfirm={handleCancelTrip}
            /> 
          </div>
        </div> 

      </div>

    </div>
  );
} 

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>

      <p className="mt-1 text-base font-semibold text-slate-900">{value}</p>
    </div>
  );
}

const statusStyles = {
  PENDING:
    "bg-red-50 text-red-700",

  MATCHING:
    "bg-amber-50 text-amber-700",

  ASSIGNED:
    "bg-blue-50 text-blue-700",

  ACTIVE:
    "bg-emerald-50 text-emerald-700",

  COMPLETED:
    "bg-slate-100 text-slate-700",

  ALL: "",

  PROGRAMMED: "",

  CANCELLED: ""
};

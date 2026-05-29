"use client";

import { X } from "lucide-react";

import { Trip } from "@/types/trip";

interface Props {
  trip: Trip;
  onClose: () => void;
}

const statusMap = {
  PENDING: "Pendiente",
  MATCHING: "Buscando",
  ASSIGNED: "Asignado",
  ACTIVE: "En proceso",
  COMPLETED: "Finalizado",
};

export function TripDetailPanel({ trip, onClose }: Props) {
  return (
    <div
      className="
        sticky top-0
        h-full
        overflow-y-auto
        rounded-3xl
        border border-slate-200/70
        bg-white
        p-6
        shadow-sm
      "
    >
      <div className="flex items-start justify-between gap-4">

        <div>
          <div className="flex items-center gap-3">

            <h2 className="text-3xl font-bold tracking-tight">
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
        </div>

        <button
          onClick={onClose}
          aria-label="Cerrar detalle"
          className="
            rounded-xl
            p-2
            hover:bg-slate-100
          "
        >
          <X className="h-5 w-5" />
        </button>
      </div>


      <div className="mt-8">
        <p className="text-sm text-slate-500">Recorrido</p>

        <div className="mt-2">
          <p className="text-lg font-semibold">{trip.origin}</p>

          <p className="my-1 text-slate-400">↓</p>

          <p className="text-lg font-semibold">{trip.destination}</p>
        </div>
        
        <div className="mt-6">
          <p className="text-sm font-medium text-amber-600">
            ⏱ Esperando hace 14 min
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Ingresó {trip.time}
          </p>
        </div>
      </div>
      
      <div className="mt-8 border-t border-slate-200 pt-6">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          Pasajero
        </p>

        <p className="mt-2 text-base font-semibold text-slate-900">
          {trip.passengerName}
        </p>

        <p className="mt-3 text-sm text-slate-600">
          📞 {trip.passengerPhone}
        </p>

        <p className="mt-1 text-sm text-slate-600">
          ✉ {trip.passengerEmail}
        </p>
      </div>

      <div className="mt-8 grid gap-6">
        <Info 
          label="Chofer" 
          value={trip.driverName ?? "Sin asignar"} 
        />
        
      </div>

      <div className="mt-8 border-t border-slate-200 pt-6">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          Observaciones
        </p>

        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          {trip.observations?.trim()
            ? trip.observations
            : "Sin observaciones"
          }
        </p>

        <div className="mt-8">
          <button className="w-full rounded-2xl bg-blue-600 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700">
            Asignar conductor
          </button>
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
};

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

export function TripDetailPanel({
  trip,
  onClose,
}: Props) {
  return (
    <div
      className="
        sticky top-24
        h-fit
        rounded-3xl
        border
        bg-white
        p-6
        shadow-sm
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">
            Servicio
          </p>

          <h2 className="text-2xl font-bold">
            #{trip.serviceNumber}
          </h2>
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

      <div className="mt-6 space-y-5">
        <Info
          label="Estado"
          value={statusMap[trip.status]}
        />

        <Info
          label="Fecha"
          value={trip.date}
        />

        <Info
          label="Hora"
          value={trip.time}
        />

        <Info
          label="Pasajero"
          value={trip.passengerName}
        />

        <Info
          label="Chofer"
          value={trip.driverName ?? "Sin asignar"}
        />

        <Info
          label="Origen"
          value={trip.origin}
        />

        <Info
          label="Destino"
          value={trip.destination}
        />
      </div>
    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p className="font-medium">
        {value}
      </p>
    </div>
  );
}
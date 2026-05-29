"use client";

import { useState } from "react";

import { mockTrips } from "@/mocks/trips";
import { Trip } from "@/types/trip";

import { EmptySelection } from "./empty-selection";
import { WorkQueueRow } from "./work-queue-row";
import { TripDetailPanel } from "./trip-detail-panel";
import { WorkQueueToolbar } from "./work-queue-toolbar";
 
export function WorkQueue() {
  const [selectedTrip, setSelectedTrip] =
    useState<Trip | null>(null);

  return (
    <div
      className="
        grid 
        min-h-0
        h-full
        gap-6
        xl:grid-cols-[1fr_420px]
      "
    >
      <div
        className="
          flex h-full flex-col
          overflow-hidden
          rounded-3xl
          border border-slate-200/70
          bg-white
          shadow-sm
        "
      >
        <div className="px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                Centro de despacho
              </h2>
            </div>

            <div className="rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
              3 pendientes de asignacion
            </div>
          </div>
        </div>

        <WorkQueueToolbar />

        <div className="
          grid
          grid-cols-[100px_120px_200px_180px_2fr_180px]
          gap-4
          border-b border-slate-200
          bg-slate-50/50
          px-4 py-3
          text-xs
          font-semibold
          uppercase
          tracking-wide
          text-slate-500
        ">
          <span>Servicio</span>
          <span>Estado</span>
          <span>Pasajero</span>
          <span>Chofer</span>
          <span>Recorrido</span>
          <span className="whitespace-nowrap">Fecha/hora</span>
        </div>

        <div className="flex-1 overflow-y-auto">
          {mockTrips.map((trip) => (
            <WorkQueueRow
              key={trip.id}
              trip={trip}
              selected={
                selectedTrip?.id === trip.id
              }
              onSelect={setSelectedTrip}
            />
          ))}
        </div>
      </div>

      <div>
        {selectedTrip ? (
          <TripDetailPanel
            trip={selectedTrip}
            onClose={() =>
              setSelectedTrip(null)
            }
          />
        ) : (
          <EmptySelection />
        )}
      </div>
    </div>
  );
}
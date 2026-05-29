"use client";

import { useState } from "react";

import { mockTrips } from "@/mocks/trips";
import { Trip } from "@/types/trip";

import { EmptySelection } from "./empty-selection";
import { WorkQueueRow } from "./work-queue-row";
import { TripDetailPanel } from "./trip-detail-panel";

export function WorkQueue() {
  const [selectedTrip, setSelectedTrip] =
    useState<Trip | null>(null);

  return (
    <div
      className="
        grid gap-6
        xl:grid-cols-[1fr_360px]
      "
    >
      <div
        className="
          overflow-hidden
          rounded-3xl
          border border-slate-200/70
          bg-white
          shadow-sm
        "
      >
        <div className="border-b border-slate-200/70 px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                Bandeja de trabajo
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                3 pendientes de asignación
              </p>
            </div>

            <div className="rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
              3 pendientes
            </div>
          </div>
        </div>

        <div>
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
"use client";

import { useEffect, useState } from "react";

import { createMockTrips } from "@/mocks/trips";
import { Trip } from "@/types/trip";

import { EmptySelection } from "./empty-selection";
import { WorkQueueRow } from "./work-queue-row";
import { TripDetailPanel } from "./trip-detail-panel";
import { WorkQueueToolbar } from "./work-queue-toolbar";
import { WorkQueueFilter, WorkQueueSort } from "@/types/work-queue";
import { EmptyWorkQueue } from "./empty-work-queue";
import { useTrips } from "@/hooks/use-trips";
import { CreateTripSheet } from "./create-trip-sheet";
import { useDispatchContext } from "@/context/dispatch-context";
import { normalizeSearch } from "@/lib/normalize-search";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function WorkQueue() {
  const { search, searchScope } = useDispatchContext();

  const [selectedTripId, setSelectedTripId] = useState<string | null>(null);

  const [highlightedTripIds, setHighlightedTripIds] = useState<string[]>([]);

  const [filter, setFilter] = useState<WorkQueueFilter>("ALL");

  const [sortBy, setSortBy] = useState<WorkQueueSort>("REQUESTED_AT_DESC");

  const [trips, setTrips] = useState<Trip[]>([]);

  const { data, isLoading, error } = useTrips();

  const [detailOpen, setDetailOpen] = useState(false);

  let emptyState = null;

  const stats = {
    total: trips.length,

    pending: trips.filter((trip) => trip.status === "PENDING").length,

    matching: trips.filter((trip) => trip.status === "MATCHING").length,

    assigned: trips.filter((trip) => trip.status === "ASSIGNED").length,

    active: trips.filter((trip) => trip.status === "ACTIVE").length,

    completed: trips.filter((trip) => trip.status === "COMPLETED").length,
  };

  const highlightTrips = (tripId: string) => {
    setHighlightedTripIds((prev) => [...prev, tripId]);

    setTimeout(() => {
      setHighlightedTripIds((prev) => prev.filter((id) => id !== tripId));
    }, 3000);
  };

  const sortTrips = [...trips].sort(
    (a, b) =>
      new Date(b.requestedAt).getTime() - new Date(a.requestedAt).getTime(),
  );

  const filteredTrips =
    filter === "ALL"
      ? sortTrips
      : sortTrips.filter((trip) => trip.status === filter);

  const searchTerm = normalizeSearch(search);

  const searchedTrips = !searchTerm
    ? filteredTrips
    : filteredTrips.filter((trip) => {
        if (!trip.driverName) {
          trip.driverName = "";
        }
        switch (searchScope) {
          case "SERVICES":
            return normalizeSearch(trip.serviceNumber).includes(searchTerm);

          case "PASSENGERS":
            return (
              normalizeSearch(trip.passengerName).includes(searchTerm) ||
              normalizeSearch(trip.passengerPhone).includes(searchTerm)
            );

          case "DRIVERS":
            return (
              normalizeSearch(trip.driverName).includes(searchTerm) ?? false
            );

          case "COMPANIES":
            return normalizeSearch(trip.companyName).includes(searchTerm);

          default:
            return (
              normalizeSearch(trip.serviceNumber).includes(searchTerm) ||
              normalizeSearch(trip.companyName).includes(searchTerm) ||
              normalizeSearch(trip.passengerName).includes(searchTerm) ||
              normalizeSearch(trip.passengerPhone).includes(searchTerm) ||
              normalizeSearch(trip.driverName)?.includes(searchTerm) ||
              normalizeSearch(trip.origin).includes(searchTerm) ||
              normalizeSearch(trip.destination).includes(searchTerm)
            );
        }
      });

  const sortedTrips = [...searchedTrips].sort((a, b) => {
    switch (sortBy) {
      case "REQUESTED_AT_DESC":
        return (
          new Date(b.requestedAt).getTime() - new Date(a.requestedAt).getTime()
        );

      case "REQUESTED_AT_ASC":
        return (
          new Date(a.requestedAt).getTime() - new Date(b.requestedAt).getTime()
        );

      case "SERVICE_NUMBER_ASC":
        return Number(a.serviceNumber) - Number(b.serviceNumber);

      case "SERVICE_NUMBER_DESC":
        return Number(b.serviceNumber) - Number(a.serviceNumber);

      default:
        return 0;
    }
  });

  const selectedTrip =
    sortedTrips.find((trip) => trip.id === selectedTripId) ?? null;

  if (trips.length === 0) {
    emptyState = {
      title: "No hay servicios",
      description: "Todavia no existen servicios para mostrar",
    };
  } else if (filter !== "ALL" && filteredTrips.length === 0) {
    emptyState = {
      title: "Sin coincidencias",
      description: "Prueba cambiando los filtros",
    };
  }

  useEffect(() => {
    setTrips(createMockTrips());
  }, []);

  return (
    <>
      <div
        className="
          grid
          h-full
          min-h-0
          overflow-hidden
          gap-6
          xl:grid-cols-[1fr_300px]
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

          <div className="px-4 py-4 md:px-6 md:py-5">
            <div
              className="
                flex flex-col gap-3
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              <h2 className="text-lg font-semibold">Centro de despacho</h2>

              <div
                className="
                  flex flex-col gap-2
                  sm:flex-row
                  sm:items-center
                "
              >
                <CreateTripSheet />
              </div>
            </div>
          </div>

          <WorkQueueToolbar
            filter={filter}
            onFilterChange={setFilter}
            sortBy={sortBy}
            onSortChange={setSortBy}
            stats={stats}
          />

          <div
            className="
              hidden
              lg:grid
              lg:grid-cols-[100px_180px_180px_160px_2fr]
              gap-4
              border-b border-slate-200
              bg-slate-50/50
              px-4 py-3
              text-xs
              font-semibold
              uppercase
              tracking-wide
              text-slate-500
            "
          >
            <span>Servicio</span>
            <span className="whitespace-nowrap">Fecha/hora</span>
            <span className="whitespace-nowrap">Pasajero / Cuenta</span>
            <span>Chofer</span>
            <span>Recorrido</span>
          </div>

          <div className="flex-1 overflow-y-auto">
            {emptyState ? (
              <EmptyWorkQueue
                title={emptyState.title}
                description={emptyState.description}
              />
            ) : (
              sortedTrips.map((trip) => (
                <WorkQueueRow
                  key={trip.id}
                  trip={trip}
                  selected={selectedTrip?.id === trip.id}
                  highlighted={highlightedTripIds.includes(trip.id)}
                  onSelect={(trip) => {
                    setSelectedTripId(trip.id);

                    if (window.innerWidth < 1280) {
                      setDetailOpen(true);
                    }
                  }}
                />
              ))
            )}
          </div>
        </div>

        <div
          className="
            hidden
            xl:flex
            h-full
            min-h-0
            flex-col
            overflow-hidden
            rounded-3xl
            border border-slate-200/70
            bg-white
            shadow-sm
          "
        >
          {selectedTrip ? (
            <TripDetailPanel
              trip={selectedTrip}
              onClose={() => setSelectedTripId(null)}
              showCloseButton
            />
          ) : (
            <EmptySelection stats={stats} />
          )}
        </div>
      </div>

      <Sheet open={detailOpen} onOpenChange={setDetailOpen}>
        <SheetContent
          showCloseButton
          side="right"
          className="w-screen max-w-none p-0 xl:hidden"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Detalle del servicio</SheetTitle>
          </SheetHeader>

          {selectedTrip && (
            <TripDetailPanel
              trip={selectedTrip}
              onClose={() => {
                setDetailOpen(false);
                setSelectedTripId(null);
              }}
              showCloseButton={false}
            />
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}

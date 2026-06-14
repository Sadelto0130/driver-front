"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buildTripHistory } from "@/mocks/trip-history";
import { TripHistoryTimeLine } from "./trip-history-timeline";
import { getWaitingTime } from "@/lib/date";
import { X } from "lucide-react";
import { Service } from "@/types/service";

interface Props {
  trip: Service;
  trigger?: React.ReactNode;
}

export function TripHistorySheet({ trip, trigger }: Props) {
  const history = buildTripHistory(trip.requestedAt, trip.status);

  const lastEvent = history[history.length - 1];

  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger ?? (
          <Button
            variant="outline"
            className="
              h-12
              w-full
              rounded-2xl
              border-slate-200
              bg-white-
              font-medium
              text-slate-700
              shadow-sm
              hover:bg-slate-300
            "
          >
            Historial del servicio
          </Button>
        )}
      </SheetTrigger>

      <SheetContent
        side="right"
        className="
          w-screen
          max-w-none
          overflow-hidden
          border
          border-slate-200
          bg-slate-200
          p-0 

          md:w-[640px]
          md:max-w-[640px]
        "
      >
        <div className="flex h-full flex-col">
          <SheetHeader className="border-b border-slate-100 bg-white px-4 py-4 md:px-8 md:py-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Actividad
                </p>

                <SheetTitle className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
                  #{trip.serviceNumber}
                </SheetTitle>

                <p className="mt-1 text-sm text-slate-500">
                  {history.length} eventos registrados
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Última actualización hace {getWaitingTime(lastEvent.timestamp)}
                </p>
              </div>

              <SheetClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="
                    shrink-0
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                    hover:bg-slate-100
                  "
                >
                  <X className="h-4 w-4" />
                </Button>
              </SheetClose>
            </div>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-4 py-4 md:px-8 md:py-8">
            <TripHistoryTimeLine events={history} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

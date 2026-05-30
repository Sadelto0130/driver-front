"use client"

import { Button } from "@/components/ui/button"
import { 
  Sheet,
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet"
import { buildTripHistory } from "@/mocks/trip-history"
import { Trip } from "@/types/trip"
import { TripHistoryTimeLine } from "./trip-history-timeline"

interface Props {
  trip: Trip
}

export function TripHistorySheet({
  trip
}: Props) {
  const history = buildTripHistory(
    trip.requestedAt,
    trip.status
  )

  return (
    <Sheet>
      <SheetTrigger asChild>
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
      </SheetTrigger>

      <SheetContent 
        side="right"
        className="
          w-[560px]
          border-1
          border-slate-200
          bg-slate-200
          p-0 
          sm:max-w-[560px]
        "
      >
        <div className="flex h-full flex-col">
          <SheetHeader className="border-b border-slate-100 bg-slate-50/50 px-8 p-6">          
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                Actividad
              </p>

              <SheetTitle className="mt-2 text-2xl font-bold tracking-tight">
                Servicio #{trip.serviceNumber}
              </SheetTitle>
              
              <p className="mt-1 text-sm text-slate-500">
                {history.length} eventos registrados
              </p>
            </div>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-8 py-8">
            <TripHistoryTimeLine
              events={history}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
"use client"
import { TripHistoryItem } from "./trip-history-item";
import { TripHistoryItem as HistoryItem } from "@/mocks/trip-history";

interface Props {
  events: HistoryItem[]
}

export function TripHistoryTimeLine({
  events
}: Props) {
  return (
    <div className="space-y-0">
      {events.map((event, index) =>(
        <TripHistoryItem
          key={event.id}
          event={event}
          last={index === events.length - 1}
          isCurrent={index === events.length - 1}
        />
      ))}
    </div>
  )
}
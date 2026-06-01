const highlightedTrips = new Set<string>()

export function highlightTrip(
  tripId: string
) {
  highlightedTrips.add(tripId)

  setTimeout(() => {
    highlightedTrips.delete(tripId)
  }, 3000)
}

export function insTripHighlighted(
  tripId: string
) {
  return highlightedTrips.has(tripId)
}
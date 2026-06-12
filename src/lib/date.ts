export function formatServiceDate( value: string) {
  return new Date(value).toLocaleString(
    "es-AR",
    {
      timeZone: "America/Argentina/Buenos_Aires",
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }
  )
} 

export function formatServiceTime(value: string) {
  return new Date(value).toLocaleTimeString(
    "es-AR",
    {
      hour: "2-digit",
      minute: "2-digit"
    }
  )
}

export function getWaitingTime( requestedAt: string ) {
  const now = new Date()
  const requested = new Date(requestedAt)

  const diffMs = now.getTime() - requested.getTime()

  const diffMinutes = Math.floor(
    diffMs / 1000 / 60
  )

  if(diffMinutes < 60) {
    return `${diffMinutes} min`
  }

  const hours = Math.floor(
    diffMinutes / 60
  )

  const minutes = diffMinutes % 60

  return `${hours} h ${minutes} min`
}

export function getWaitingMinutes(requestedAt: string) {
  return Math.floor(
    (Date.now() -
      new Date(requestedAt).getTime()) /
      1000 /
      60,
  );
}
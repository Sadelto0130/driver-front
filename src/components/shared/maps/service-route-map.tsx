"use client"

import { 
  MapContainer,
  Marker,
  Polyline,
  TileLayer
} from "react-leaflet"
import "@/lib/leaflet"
import { defaultIcon } from "@/lib/leaflet-icon"
import { useMap } from "react-leaflet"
import { useEffect } from "react"
import { destinationIcon, originIcon } from "@/lib/map-icons"

interface Props {
  origin: {
    lat: number
    lng: number
  }

  destination: {
    lat: number
    lng: number
  }
}

export function ServiceRouteMap({
  origin,
  destination
}: Props) {
  const positions: [number, number][] = [
    [origin.lat, origin.lng],
    [destination.lat, destination.lng]
  ]

  return (
    <MapContainer
      center={[
        origin.lat,
        origin.lng
      ]}
      zoom={13}
      style={{
        height: "100%",
        width: "100%"
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FitBounds positions={positions} />

      <Marker
        position={[
          origin.lat,
          origin.lng
        ]}
        icon={originIcon}
      />

      <Marker
        position={[
          destination.lat,
          destination.lng
        ]}
        icon={destinationIcon}
      />

      <Polyline
        positions={positions}
        pathOptions={{ 
          color: "#2536eb",
          weight: 5,
          opacity: 0.85
        }}
      />
    </MapContainer>
  )
}

function FitBounds({
  positions
}: {
  positions: [number, number] []
}) {
  const map = useMap()

  useEffect(() => {
    map.fitBounds(positions, {
      padding: [40, 40]
    })
  }, [map, positions])

  return null
}
"use client"

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

import {
  availableDriverIcon,
  busyDriverIcon,
  offlineDriverIcon,
  serviceIcon,
} from "@/lib/map-icons";

import "leaflet/dist/leaflet.css"
import { DriverMapItem, ServiceMapItem } from "@/types/driver-map-item";
import { Badge } from "@/components/ui/badge";

type Props = {
  drivers: DriverMapItem[]
  services: ServiceMapItem[]
}

export default function OperationalMapClient({
  drivers, 
  services,
}:Props) {
  function getDriverIcon(
    status: DriverMapItem["status"],
  ) {
    switch (status) {
      case "available":
        return availableDriverIcon;
  
      case "busy":
        return busyDriverIcon;
  
      case "offline":
        return offlineDriverIcon;
  
      default:
        return availableDriverIcon;
    }
  }

  return (
    <div>
      <div className="overflow-hidden rounded-xl border">
        <MapContainer
          center={[-34.6037, -58.3816]}
          zoom={13}
          style={{
            height: "500px",
            width: "100%",
          }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {drivers.map((driver) => (
            <Marker
              key={driver.id}
              position={[driver.lat, driver.lng]}
              icon={getDriverIcon(driver.status)}
            >
              <Popup>
                <div className="min-w-[220px] space-y-0.5">
                  <div>
                    <p className="font-semibold">
                      {driver.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {driver.vehicle}
                    </p>
                    <p>
                      Esado: {" "}
                      {
                        driver.status === "available"
                          ? "Disponible"
                          : driver.status === "busy"
                            ? "ocupado"
                            : "Desconectado"
                      }
                    </p>                    
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}

          {services.map((service) => (
            <Marker
              key={service.id}
              position={[service.lat, service.lng]}
              icon={serviceIcon}
            >
              <Popup>
                <div className="min-w-[260px]   aspace-y-0.5">
                  <p className="font-semibold">
                    Servicio #{service.id}
                  </p>
                  <p>
                    Estado: {" "} 
                    {
                      service.status === "assigned" 
                        ? "Asignado"
                          : service.status === "pickup"
                            ? "En camino"
                            : "En progreso"
                    }
                  </p>

                  <p>Pasajero: {" "} {service.passenger}</p>

                  <p>Conductor: {" "} {service.driverName}</p>
                  <p>Vehículo: {" "} {service.vehicle}</p>

                  <p>Origen: {" "} {service.origin}</p>
                  <p>Destino: {" "} {service.destination}</p>

                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
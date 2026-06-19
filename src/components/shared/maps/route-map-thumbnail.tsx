import { MapPin, Navigation } from "lucide-react";

interface Props {
  origin: string;
  destination: string;
}

export function RouteMapThumbnail({
  origin,
  destination,
}: Props) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/** Fondo mapa */}
      <div
        className="
          absolute inset-0
          bg-[url('/images/map-thumbnail.png')]
          bg-cover
          bg-center
        "
      />

      {/** Overlay suave */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/10
          via-transparent
          to-slate-900/10
        "
      />

      {/** Ruta fake */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M15 65 L40 35 L70 55 L85 25"
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 2"
        />
      </svg>

      {/** Origen */}
      <div className="absolute left-[12%] top-[60%]">
        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green-500 shadow">
          <MapPin className="h-3 w-3 text-white" />
        </div>
      </div>

      {/** Destino */}
      <div className="absolute right-[12%] top-[20%]">
        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 shadow">
          <Navigation className="h-3 w-3 text-white" />
        </div>
      </div>
    </div>
  );
}
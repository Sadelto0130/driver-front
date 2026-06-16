import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server"
import { Car, WifiOff, MapPin } from "lucide-react";

function createIcon(
  icon: string,
  backgroundColor: string,
) {
  return L.divIcon({
    className: "",
    html: `
      <div
        style="
          width:32px;
          height:32px;
          border-radius:9999px;
          background:${backgroundColor};
          border:2px solid white;
          display:flex;
          align-items:center;
          justify-content:center;
          box-shadow:0 4px 12px rgba(0,0,0,.2);
        "
      >
        ${icon}
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });
}

const carSvg = renderToStaticMarkup(
  <Car
    size={16}
    color="white"
    strokeWidth={2}
  />,
);

const offlineSvg = renderToStaticMarkup(
  <WifiOff
    size={16}
    color="white"
    strokeWidth={2}
  />,
);

const pinSvg = renderToStaticMarkup(
  <MapPin
    size={16}
    color="white"
    strokeWidth={2}
  />,
);

export const availableDriverIcon = createIcon(
  carSvg,
  "#22c55e",
);

export const busyDriverIcon = createIcon(
  carSvg,
  "#f59e0b",
);

export const offlineDriverIcon = createIcon(
  offlineSvg,
  "#ef4444",
);

export const serviceIcon = createIcon(
  pinSvg,
  "#3b82f6",
);

export const originIcon = createIcon(
  pinSvg,
  "#10b981"
)

export const destinationIcon = createIcon(
  pinSvg,
  "#ef4444"
)

export function getDriverIcon(
  status: "available" | "busy" | "offline",
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


export type DriverMapItem = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  status: "available" | "busy" | "offline";
  vehicle: string;
};

export type ServiceMapItem = {
  id: string;

  driverId: string;

  driverName: string;

  vehicle: string;

  passenger: string;

  lat: number;
  lng: number;

  status:
    | "assigned"
    | "pickup"
    | "in_progress";

  origin: string;

  destination: string;
};
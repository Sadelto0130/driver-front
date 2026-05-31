import { DriverCard } from "@/components/dispatch/driver-card";
import { mockDrivers } from "@/mocks/driver";

export default function DriversPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Drivers
        <DriverCard driver={mockDrivers[0]}/>
      </h1>
    </div>
  );
}
import { Car, MapPinned, Shield, UserCog, Users } from "lucide-react";

export const fleetModules = [
  {
		id: "drivers",
		label: "Conductores",
		icon: Users
	},
	{
		id: "vehicles",
		label: "Vehículos",
		icon: Car
	},
	{
		id: "personnel",
		label: "Personal",
		icon: UserCog
	},
	{
		id: "roles",
		label: "Roles",
		icon: Shield
	},
	{
		id: "status",
		label: "Estado",
		icon: MapPinned
	}
] as const
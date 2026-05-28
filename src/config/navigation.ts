import {
  LayoutDashboard,
  Users,
  CarFront,
  ClipboardList,
  Settings,
  BarChart3,
} from "lucide-react";

export const navigationItems = [
  {
    label: "Panel",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Conductores",
    href: "/drivers",
    icon: Users,
  },
  {
    label: "Viajes",
    href: "/trips",
    icon: CarFront,
  },
  {
    label: "Asignaciones",
    href: "/assignments",
    icon: ClipboardList,
  },
  {
    label: "Estadisticas",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    label: "Configuracion",
    href: "/settings",
    icon: Settings,
  },
];
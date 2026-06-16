import {
  LayoutDashboard,
  Users,
  CarFront,
  ClipboardList,
  Settings,
  BarChart3,
  IdCard,
} from "lucide-react";

export const navigationItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Operaciones",
    href: "/dispatch",
    icon: ClipboardList,
  },
  {
    label: "Servicios",
    href: "/services",
    icon: CarFront,
  },
  /*
  {
    label: "Flota",
    href: "/fleet",
    icon: IdCard,
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
  */
];
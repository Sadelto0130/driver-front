import { DriverStatus } from "@/types/driver";

export const statusDriverConfig: Record<
  DriverStatus,
  {
    label: string;
    badgeClassName: string;
    dotClassName: string;
  }
> = {
  AVAILABLE: {
    label: "Disponible",
    badgeClassName:
      "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-50",
    dotClassName: "bg-emerald-500",
  },

  BUSY: {
    label: "Ocupado",
    badgeClassName:
      "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-50",
    dotClassName: "bg-amber-500",
  },

  OFFLINE: {
    label: "Desconectado",
    badgeClassName:
      "border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-100",
    dotClassName: "bg-slate-500",
  },
};
import { cn } from "@/lib/utils";
import { DriverProfileTab } from "@/types/driver";
import {
  Activity,
  BadgeDollarSign,
  FileText,
  ShieldCheck,
  User,
} from "lucide-react";

interface Props {
  value: DriverProfileTab

  onValueChange: (value: DriverProfileTab) => void
}

export function DriverProfileTabs({
  value,
  onValueChange
}: Props) {
const tabs = [
    {
      value: "summary",
      label: "Resumen",
      icon: User,
    },
    {
      value: "activity",
      label: "Actividad",
      icon: Activity,
    },
    {
      value: "documents",
      label: "Documentación",
      icon: FileText,
    },
    {
      value: "finance",
      label: "Finanzas",
      icon: BadgeDollarSign,
    },
    {
      value: "audit",
      label: "Auditoría",
      icon: ShieldCheck,
    },
  ] as const;

  return (
    <div
      className="
        flex
        gap-1
        overflow-x-auto
        border-b
        border-slate-200
        py-2
      "
    >
      {tabs.map((tab) => {
        const Icon = tab.icon

        return (
        <button
          key={tab.value}
          onClick={() => onValueChange(tab.value)}
          className={cn(`
            flex
            items-center
            gap-2
            rounded-lg
            px-3
            py-2
            text-sm
            font-medium
            whitespace-nowrap
            transitions-colors
          `,
          value === tab.value
            ? "bg-slate-100 text-slate-900"
            : "text-slate-500 hover:bg-slate-50"
        )}
        >
          <Icon className="size-4" />
          {tab.label}
        </button>
      )})}
    </div>
  );
}
import { Copy, History, LucideIcon, Pencil, Play, Square, Trash2, UserRound } from "lucide-react";
import { ServiceAction } from "./service-action";

interface ServiceActionConfig {
  label: string
  icon: LucideIcon
  danger?: boolean
}

export const serviceActionConfig: Record<
  ServiceAction,
  ServiceActionConfig
> = {
  EDIT: {
    label: "Editar",
    icon: Pencil
  },

  DUPLICATE: {
    label: "Duplicar",
    icon: Copy
  },

  CANCEL: {
    label: "Cancelar",
    icon: Trash2,
    danger: true
  },

  VIEW_HISTORY: {
    label: "Historia",
    icon: History
  }
}
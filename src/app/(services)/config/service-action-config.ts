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
  ASSIGN_DRIVER: {
    label: "Asignar",
    icon: UserRound
  },

  CHANGE_DRIVER: {
    label: "Cambiar",
    icon: UserRound
  },

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

  START_SERVICE: {
    label: "Iniciar",
    icon: Play
  },

  FINISH_SERVICE: {
    label: "Finalizar",
    icon: Square
  },

  VIEW_HISTORY: {
    label: "Historia",
    icon: History
  }
}
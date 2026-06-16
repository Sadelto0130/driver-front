import { toast } from "sonner";

export const serviceToast = {
  created: () => toast.success("Servicio creado correctamente"),

  updated: () => toast.success("Servicio actualizado correctamente"),

  duplicated: () => toast.success("Servicio duplicado correctamente"),

  cancelled: () => toast.success("Servicio cancelado correctamente"),

  createError: () => toast.error("No fue posible crear el servicio"),

  updateError: () => toast.error("No fue posible actualizar el servicio"),

  cancelErro: () => toast.error("No fue posible cancelar el servicio")
}

export const loadingMessages = {
  creatingService:
    "Creando servicio...",

  updatingService:
    "Actualizando servicio...",

  cancellingService:
    "Cancelando servicio...",
};
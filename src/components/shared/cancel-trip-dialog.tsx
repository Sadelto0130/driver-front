"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Ban } from "lucide-react";
import { Service } from "@/types/service";

interface Props {
  trip: Service;
  onConfirm: (trip: Service) => void;
  disabled?: boolean;
}

export function CancelTripDialog({
  trip,
  onConfirm,
  disabled,
}: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          disabled={disabled}
          className="
            rounded-xl
            border-red-200
            text-red-600
            hover:bg-red-50
            hover:text-red-700
          "
        >
          <Ban className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-md bg-white" style={{zIndex: 999999}}>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Cancelar servicio
          </AlertDialogTitle>

          <AlertDialogDescription>
            ¿Deseas cancelar el servicio
            <span className="font-semibold">
              {" "}#{trip.serviceNumber}
            </span>
            ?
            <br />
            <br />
            Esta acción no se puede deshacer.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            Volver
          </AlertDialogCancel>

          <AlertDialogAction
            className="
              bg-red-600
              text-white
              hover:bg-red-700
            "
            onClick={() => onConfirm(trip)}
          >
            Cancelar servicio
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
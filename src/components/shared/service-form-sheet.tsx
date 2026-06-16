"use client";

import { CreateTripForm } from "@/types/create-trip-form";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { mockPassengers } from "@/mocks/passengers";
import { CreateServiceForm } from "@/components/shared/create-service-form";
import { Plus } from "lucide-react";

interface Props {
  trigger?: React.ReactNode
  initialValues?: Partial<CreateTripForm>
  mode?: "create" | "edit"
  serviceId?: string
}

export function ServiceFormSheet({
  trigger,
  initialValues,
  mode,
  serviceId
}: Props) {

  const today = new Date()

  const defaultForm: CreateTripForm ={
    companyId: "",
    passengerId: "",

    passengerName: "",
    passengerPhone: "",

    origin: "",
    destination: "",

    observation: "",

    paymentMethod: "",

    isProgrammed: false,

    date: today.toISOString().split("T")[0],
    time: "",
  };

  const [form, setForm] = useState<CreateTripForm>({
    ...defaultForm,
    ...initialValues
  })

  const handleChange = <K extends keyof CreateTripForm>(
    field: K,
    value: CreateTripForm[K]
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCreateTrip = () => {
      if (!isValidDate(form.date)) {
      return;
    }

    if (!isValidTime(form.time)) {
      return;
    }

    if(mode=== "edit") {
      console.log("UPDATE", serviceId, form)
    }
    console.log("CREATE", form);
  };

  const selectedPassenger = mockPassengers.find(
    (passenger) => passenger.id === form.passengerId,
  );

  useEffect(() => {
    if (!selectedPassenger) {
      return;
    }

    setForm((prev) => ({
      ...prev,
      passengerName: selectedPassenger.name,
      passengerPhone: selectedPassenger.phone,
    }));
  }, [selectedPassenger]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger ?? (
          <Button
            size="sm"
            className="
              h-11
              rounded-xl
              bg-blue-600
              px-5
              font-medium
              text-slate-200
              shadow-sm
              transition-all
              hover:scale-[1.02]
              hover:bg-blue-700
            "
          >
            <Plus className="mr-2 h-4 w-4" />
            Nuevo servicio
          </Button>
        )}
      </SheetTrigger>

      <SheetContent 
        side="right" 
        className="
          w-screen 
          max-w-none 
          overflow-hidden 
          p-0 
          md:w-[640px] 
          md:max-w-[640px]
      ">
        <div className="flex h-full flex-col bg-white">
          <SheetHeader className="border-b border-slate-200 px-6 py-3">
            <SheetTitle className="text-xl font-bold text-slate-900">
              {mode==="edit"
                ? "Editar servicio" 
                :"Nuevo servicio"}
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto p-6">
            <CreateServiceForm 
              form={form}
              onChange={handleChange}
            />
          </div>

          <div className="
            flex flex-col-reverse gap-2
            border-t border-slate-200
            bg-white 
            py-4
            
            sm:flex-row 
            sm:justify-end 
          ">
            <SheetClose asChild>
              <Button
                type="button"
                variant="outline"
                className="h-11 w-full sm:w-auto rounded-xl px-5 bg-red-600 text-white shadow-sm hover:bg-red-700"
              >
                Cancelar
              </Button>
            </SheetClose>

            <Button
              type="button"
              onClick={handleCreateTrip}
              className="h-11 w-full sm:w-auto rounded-xl bg-blue-600 px-5 font-medium text-white shadow-sm hover:bg-blue-700"
            >
              {mode === "edit"
                ? "Guardar cambios" 
                : "Crear servicio"}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function isValidTime(
  value: string
) {
  const regex =
    /^([01]\d|2[0-3]):([0-5]\d)$/;

  return regex.test(value);
}

function isValidDate(
  value: string
) {
  const regex =
    /^\d{2}\/\d{2}\/\d{4}$/;

  if (!regex.test(value))
    return false;

  const [day, month, year] =
    value.split("/").map(Number);

  const date = new Date(
    year,
    month - 1,
    day
  );

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

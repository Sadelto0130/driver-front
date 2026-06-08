"use client"

import { CreateTripForm } from "@/types/create-trip-form"
import { useEffect, useState } from "react"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../../../components/ui/sheet"
import { Button } from "../../../components/ui/button"
import { mockCompanies } from "@/mocks/companies"
import { Input } from "../../../components/ui/input"
import { Textarea } from "../../../components/ui/textarea"
import { mockPassengers } from "@/mocks/passengers"
import { SearchSelect } from "../../../components/shared/search-select"


export function CreateTripSheet() {
  const [form, setForm] = useState<CreateTripForm>({
    companyId: "",
    passengerId: "",    

    passengerName: "",
    passengerPhone: "",

    origin: "",
    destination: "",

    observation: ""
  })

  const companyOptions= mockCompanies.map(
    (company) => ({
      value: company.id,
      label: company.name
    })
  )

  const passengerOptions = mockPassengers
    .filter((passenger) => passenger.companyId === form.companyId)
    .map((passenger) => ({
      value: passenger.id,
      label: passenger.name
    }))

  const handleChange = (
    field: keyof CreateTripForm,
    value: string,
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCreateTrip = () => {
    console.log(form)
  }

  const selectedPassenger = mockPassengers.find(
    passenger => passenger.id === form.passengerId
  )

  const selectedCompany = mockCompanies.find(
    company => company.id === form.companyId
  )
  
  useEffect(() => {
    if(!selectedPassenger) {
      return
    }

    setForm(prev => ({
      ...prev,
      passengerName: selectedPassenger.name,
      passengerPhone: selectedPassenger.phone
    }))
  }, [selectedPassenger])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="sm"
          className="rounded-xl bg-blue-300 text-slate-500"
        >
          + Nuevo servicio
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[640px] p-0 sm:max-w-[640px]"
      >
        <div className="flex h-full flex-col bg-white/70">
          <SheetHeader
            className="border-b border-slate-200 px-6 py-3"
          >
            <SheetTitle
              className="text-xl font-bold text-slate-900"
            >
              Nuevo servicio
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-4">

              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Cliente
                </p>

                {/**EMPRESA */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Empresa
                  </label>

                  <SearchSelect
                    value={form.companyId}
                    placeholder="Seleccionar empresa"
                    searchPlaceholder="Buscar empresa..."
                    emptyMessage="No se encontro la empresa"
                    options={companyOptions}
                    onChange={(value) => setForm((prev) => ({
                        ...prev,
                        companyId: value,
                        passengerId: "",
                        passengerName: "",
                        passengerPhone: ""
                      }))
                    }
                  />
                </div>

                {/**PASAJERO */}
                <div>
                  <SearchSelect
                    value={form.passengerId}
                    placeholder={form.companyId
                      ? "Seleccionar pasajero"
                      : "Seleccione empresa primero"
                    }
                    searchPlaceholder="Buscar pasajero..."
                    emptyMessage="No se encontraron pasajeros"
                    disabled={!form.companyId}
                    options={passengerOptions}
                    onChange={(value) => handleChange(
                          "passengerId",
                          value
                        )}                  
                  />
                </div>

                {/**TELEFONO */}
                <div>
                  <label 
                    htmlFor="telefono"
                    className="mb-2 blco text-sm font-medium text-slate-700"
                  >
                    Teléfono
                  </label>
                  <Input
                    value={form.passengerPhone}
                    onChange={(e) => handleChange("passengerPhone", e.target.value)}
                    placeholder="Ej: 1133447788"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Recorrido
                </p>

                {/**ORIGEN */}
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Origen
                  </label>
                  
                  <Input
                    value={form.origin}
                    onChange={(e) => handleChange("origin", e.target.value)}
                    placeholder="Dirección de origen "
                  />
                </div>

                {/**DESTINO */}
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Destino
                  </label>
                  
                  <Input
                    value={form.destination}
                    onChange={(e) => handleChange("destination", e.target.value)}
                    placeholder="Dirección de destino "
                  />
                </div>
              </div>

              {/**OBSERVACIONES */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Observaciones
                </label>
                <Textarea
                  value={form.observation}
                  onChange={(e) => handleChange("observation", e.target.value)}
                  placeholder="Observaciones para el conductor"
                  rows={4}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-slate-200 bg-white px-6 py-4">
            <SheetClose asChild>
              <Button 
                type="button"
                variant="outline"
                className="h-11 rounded-xl px-5 bg-red-600 text-white shadow-sm hover:bg-red-700"
              >
                Cancelar
              </Button>
            </SheetClose>

            <Button
              type="button"
              onClick={handleCreateTrip}
              className="h-11 rounded-xl bg-blue-600 px-5 font-medium text-white shadow-sm hover:bg-blue-700"
            >
              Crear servicio
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
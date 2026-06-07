"use client"

import { CreateTripForm } from "@/types/create-trip-form"
import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { mockCompanies } from "@/mocks/companies"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"


export function CreateTripSheet() {
  const [form, setForm] = useState<CreateTripForm>({
    serviceType: "COMPANY",

    companyId: "",

    passengerName: "",
    passengerPhone: "",

    origin: "",
    destination: "",

    observation: ""
  })

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
            className="border-b border-slate-200 px-6 py-5"
          >
            <SheetTitle
              className="text-xl font-bold text-slate-900"
            >
              Nuevo servicio
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              
              {/**TIPO DE SERVICIO */}
              <div>
                <label 
                  className="mb-3 block text-sm font-medium text-slate-700"
                >
                  Tipo de servicio
                </label>

                <div className="grid grid-cols-2 gap-2">
                  <Button
                    type="button"
                    variant={
                      form.serviceType === "COMPANY"
                        ? "default"
                        : "outline"
                    }
                    onClick={() => 
                      setForm((prev) => ({
                        ...prev,
                        serviceType: "COMPANY"
                      }))
                    }
                  >
                    Empresa
                  </Button>

                  <Button
                    type="button"
                    variant={
                      form.serviceType === "PARTICULAR"
                        ? "default"
                        : "outline"
                    }
                    onClick={() => 
                      setForm((prev) => ({
                        ...prev,
                        serviceType: "PARTICULAR"
                      }))
                    }
                  >
                    Particular
                  </Button>
                </div>
              </div>

              {/**EMPRESA */}
              {form.serviceType ===
                "COMPANY" && (
                  <div>
                    <label 
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Empresa
                    </label>

                    <select
                      id="company"
                      value={form.companyId}
                      onChange={(e) =>
                        handleChange("companyId", e.target.value)
                      }
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3"
                    >
                      <option value="">
                        Seleccionar empresa
                      </option>

                      {mockCompanies.map(
                        (company) => (
                          <option
                            key={company.id}
                            value={company.id}
                          >
                            {company.name}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                )
              }

              {/**PASAJERO */}
              <div>
                <label 
                  htmlFor="pasajero"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Pasajero
                </label>
                <Input
                  value={form.passengerName}
                  onChange={(e) => 
                    handleChange("passengerName", e.target.value)}
                  placeholder="Nombre del pasajero"
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

              {/**OBSERVACIONES */}
              <div>
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
            <Button variant="outline">
              Cancelar
            </Button>

            <Button
              onClick={handleCreateTrip}
            >
              Crear servicio
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
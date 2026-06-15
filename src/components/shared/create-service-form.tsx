import { mockCompanies } from "@/mocks/companies";
import { mockPassengers } from "@/mocks/passengers";
import { CreateTripForm } from "@/types/create-trip-form";
import { SearchSelect } from "./search-select";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";

interface Props {
  form: CreateTripForm

  onChange:<K extends keyof CreateTripForm>(
    field: K,
    value: CreateTripForm[K]
  ) => void
}

export function CreateServiceForm({
  form,
  onChange
}: Props) {
  const companyOptions = mockCompanies.map(
    (company) => ({
      value: company.id,
      label: company.name
    })
  )

  const passengerOptions = mockPassengers
    .filter(
      (passenger) => passenger.companyId === form.companyId
    )
    .map((passenger) => ({
      value: passenger.id,
      label: passenger.name
    }))

    return (
    <div className="space-y-4">
      {/* CLIENTE */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4">
        <p
          className="
            mb-4
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-slate-500
          "
        >
          Cliente
        </p>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Empresa
            </label>

            <SearchSelect
              value={form.companyId}
              placeholder="Seleccionar empresa"
              searchPlaceholder="Buscar empresa..."
              emptyMessage="No se encontró la empresa"
              options={companyOptions}
              onChange={(value) =>
                onChange("companyId", value)
              }
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Pasajero
            </label>

            <SearchSelect
              value={form.passengerId}
              placeholder={
                form.companyId
                  ? "Seleccionar pasajero"
                  : "Seleccione empresa primero"
              }
              searchPlaceholder="Buscar pasajero..."
              emptyMessage="No se encontraron pasajeros"
              disabled={!form.companyId}
              options={passengerOptions}
              onChange={(value) =>
                onChange("passengerId", value)
              }
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Teléfono
            </label>

            <Input
              value={form.passengerPhone}
              onChange={(e) =>
                onChange(
                  "passengerPhone",
                  e.target.value
                )
              }
              placeholder="Ej: 1133447788"
            />
          </div>
        </div>
      </div>

      {/* RECORRIDO */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4">
        <p
          className="
            mb-4
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-slate-500
          "
        >
          Recorrido
        </p>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Origen
            </label>

            <Input
              value={form.origin}
              onChange={(e) =>
                onChange(
                  "origin",
                  e.target.value
                )
              }
              placeholder="Dirección de origen"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Destino
            </label>

            <Input
              value={form.destination}
              onChange={(e) =>
                onChange(
                  "destination",
                  e.target.value
                )
              }
              placeholder="Dirección de destino"
            />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-slate-900">
              Programar servicio
            </p>

            <p className="text-sm text-slate-500">
              Definir fecha y hora para una reserva futura
            </p>
          </div>

          <Switch
            checked={form.isProgrammed}
            onCheckedChange={(checked) =>
              onChange("isProgrammed", checked)
            }
          />
        </div>
      </div>
      
      {/* PROGRAMACIÓN */}
      {form.isProgrammed && (
        <div className="rounded-2xl border border-purple-400 bg-purple-200/50 p-4">
          <p className="
            mb-4
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-purple-600
          ">
            Programación
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Fecha
              </label>

              <Input
                type="date"
                value={form.date ?? ""}
                onChange={(e) =>
                  onChange(
                    "date",
                    e.target.value
                  )
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Hora
              </label>

              <Input
                type="time"
                value={form.time ?? ""}
                onChange={(e) =>
                  onChange(
                    "time",
                    e.target.value
                  )
                }
              />
            </div>
          </div>
        </div>
      )}

      {/* PAGO */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4">
        <p
          className="
            mb-4
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-slate-500
          "
        >
          Pago
        </p>

        <Input
          value={form.paymentMethod ?? ""}
          onChange={(e) =>
            onChange(
              "paymentMethod",
              e.target.value
            )
          }
          placeholder="Efectivo, transferencia, cuenta corriente..."
        />
      </div>

      {/* OBSERVACIONES */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4">
        <p
          className="
            mb-4
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-slate-500
          "
        >
          Observaciones
        </p>

        <Textarea
          value={form.observation}
          onChange={(e) =>
            onChange(
              "observation",
              e.target.value
            )
          }
          rows={4}
          placeholder="Información adicional para el servicio"
        />
      </div>
    </div>
  );
}
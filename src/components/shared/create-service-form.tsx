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

  const handleTimeChange = ( value: string) => {
    const numbers = value.replace(/\D/g, "")

    let formatted = numbers

    if(numbers.length >= 3) {
      formatted = numbers.slice(0, 2) + ":" + numbers.slice(2, 4)
    }

    onChange("time", formatted)
  }

  const handleDateChange = (value: string) => {
    const numbers = value.replace(/\D/g, "")

    let formatted = numbers

    if(numbers.length> 2) {
      formatted = numbers.slice(0, 2) + "/" + numbers.slice(2)
    }

    if(numbers.length > 4) {
      formatted = 
        numbers.slice(0, 2) + 
        "/" + 
        numbers.slice(2, 4) + 
        "/" +
        numbers.slice(4, 8)
    }

    onChange("date", formatted)
  }

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

      {/* PROGRAMACIÓN */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-slate-500">
              Programar servicio
            </p>

            <p className="text-sm text-slate-500">
              El servicio se creará para la fecha y hora seleccionada
            </p>
          </div>

          <Switch
            checked={form.isProgrammed}
            onCheckedChange={(checked) =>
              onChange("isProgrammed", checked)
            }
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Fecha
            </label>

            <Input
              value={form.date}
              placeholder="DD/MM/AAAA"
              onChange={(e) =>
                handleDateChange(e.target.value)
              }
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Hora
            </label>

            <Input
              value={form.time}
              placeholder="HH:mm"
              onChange={(e) => 
                handleTimeChange(e.target.value)
              }
            />
          </div>
        </div>
      </div>

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

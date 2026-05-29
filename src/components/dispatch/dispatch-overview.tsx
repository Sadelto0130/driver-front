export function DispatchOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Metric 
        label="Conductores online"
        value="24"
      />

      <Metric 
        label="Servicios activos"
        value="12"
      />

      <Metric
        label="Pendientes"
        value="12"
      />

      <Metric
        label="Tiempo promedio"
        value="4 min"
      />
    </div>
  )
}

function Metric({
  label,
  value
}: {
  label: string,
  value: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm">
      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold">
        {value}
      </p>
    </div>
  )
}
interface Props {
  stats?: {
    pending: number
    assigned: number
    active: number
    completed: number
  }
}

export function EmptySelection({
  stats
}: Props) {
  return (
    <div className="flex h-full flex-col p-6">
      <div>
        <h3 className="text-lg font-semibold">
          Centro de despacho
        </h3>

        <p className="mt-2 text-sm text-slate-500">         
          Selecciona un servicio para ver su detalle.
        </p>
      </div>

      <div className="mt-8 grid gap-4">
        <div className="rounded-xl border p-4">
          <p className="text-sm text-slate-500">
            Pendientes
          </p>

          <p className="mt-1 text-2xl font-bold">
            {stats?.pending ?? 0}
          </p>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-slate-500">
            Asignados
          </p>

          <p className="mt-1 text-2xl font-bold">
            {stats?.assigned ?? 0}
          </p>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-slate-500">
            En proceso
          </p>

          <p className="mt-1 text-2xl font-bold">
            {stats?.active ?? 0}
          </p>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-slate-500">
            Finalizados
          </p>

          <p className="mt-1 text-2xl font-bold">
            {stats?.completed ?? 0}
          </p>
        </div>
      </div>
    </div>
  )
}
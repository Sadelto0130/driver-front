export function EmptySelection() {
  return (
    <div className="
      flex h-full items-center
      justify-center
      rounded-3xl border
      border-dashed bg-white
      p-8 text-center
    ">
      <div>
        <h3 className="text-lg font-semibold">
          Seleccione un servicio
        </h3>

        <p className="mt-2 text-sm text-slate-500">         
          El detalle del servicio aparecerá aquí.
        </p>
      </div>
    </div>
  )
}
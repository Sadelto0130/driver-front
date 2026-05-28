export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Panel
        </h1>

        <p className="text-muted-foreground">
          Resmen operativo de la flota
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border bg-background p-6">
          <p className="text-sm text-muted-foreground">
            Conductores Activos
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            24
          </h3>
        </div>

        <div className="rounded-2xl border bg-background p-6">
          <p className="text-sm text-muted-foreground">
            Viajes Activos
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            12
          </h3>
        </div>

        <div className="rounded-2xl border bg-background p-6">
          <p className="text-sm text-muted-foreground">
            Asignaciones Pendientes
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            4
          </h3>
        </div>

        <div className="rounded-2xl border bg-background p-6">
          <p className="text-sm text-muted-foreground">
            Viajes Completados
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            128
          </h3>
        </div>
      </div>
    </div>
  );
}
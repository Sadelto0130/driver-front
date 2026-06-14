import { getServiceFilters, ServiceStats } from "@/types/service-filters";
import { Service } from "@/types/service";
import { StatusToolbar } from "@/components/shared/toolbar";
import { sortOptionsValues } from "@/types/sortOptionsValues";
import { EntityListHeader } from "@/components/shared/entity-list-header";
import { ServiceRow } from "./service-row";

interface Props {
  services: Service[]
  selectedServiceId?: string | null
  
  filter: string
  onFilterChange: (value: string) => void

  sortBy: string
  onSortChange: (value: string) => void

  stats: ServiceStats

  onSelectService: (service: Service) => void
}

export function ServiceList({
  services,
  selectedServiceId,
  filter,
  onFilterChange,
  sortBy,
  onSortChange,
  stats,
  onSelectService
}: Props) {
  return (
    <div className="
      flex
      h-full
      min-h-0
      flex-col
      overflow-hidden
      rounded-3xl
      border border-slate-200/70
      bg-white
      shadow-sm
    ">
      <StatusToolbar
        value={filter}
        filters={getServiceFilters(stats)}
        onValueChange={onFilterChange}
        sortValue={sortBy}
        sortOptions={sortOptionsValues}
        onSortChange={onSortChange}
      />

      <EntityListHeader 
        gridClassName="lg:grid-cols-[90px_140px_180px_120px_100px_minmax(180px,1fr)]"
      columns={
        <>
          <span>Servicio</span>
          <span>Fecha/Hora</span>
          <span>Pasajero / Cuenta</span>
          <span>Teléfono</span>
          <span>Pago</span>
          <span>Recorrido</span>
        </>
      }
    />
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      
      {services.map((service) => (
        <ServiceRow
          key={service.id}
          service={service}
          selected={selectedServiceId === service.id}
          onSelect={onSelectService}
        />
      ))}
    </div>
  </div>
  )  
}
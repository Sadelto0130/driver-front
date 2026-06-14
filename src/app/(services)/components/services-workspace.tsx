"use client"

import { EntityListHeader } from "@/components/shared/entity-list-header"
import { MasterDetailWorkspace } from "@/components/shared/entity-list-row/master-detail-workspace"
import { StatusToolbar } from "@/components/shared/toolbar"
import { useDispatchContext } from "@/context/dispatch-context"
import { normalizeSearch } from "@/lib/normalize-search"
import { createMockServices } from "@/mocks/trips"
import { Service, ServiceFilter, ServiceStatus } from "@/types/service"
import { getServiceFilters, ServiceStats } from "@/types/service-filters"
import { useEffect, useState } from "react"
import { ServiceList } from "./service-list"
import { ServiceDetailPanel } from "./service-detail-panel"

export function ServicesWorkspace() {
  const [selectedServiceId, setSelectedServicedId] = useState<string | null>(null)

  const [detailOpen, setDetailOpen] = useState(false)

  const { search, searchScope } = useDispatchContext();
  
  const [filter, setFilter] = useState<ServiceFilter>("ALL")
  
  const [services, setServices] = useState<Service[]>([]);

  const [sortBy, setSortBy] = useState("REQUESTED_AT_DESC")

  const stats: ServiceStats = {
    total: services.length,
    pending: services.filter(t => t.status === "PENDING").length,
    programmed: services.filter(t => t.status === "PROGRAMMED").length,
    matching: services.filter(t => t.status === "MATCHING").length,
    assigned: services.filter(t => t.status === "ASSIGNED").length,
    active: services.filter(t => t.status === "ACTIVE").length,
    completed: services.filter(t => t.status === "COMPLETED").length,
    cancelled: services.filter(t => t.status === "CANCELLED").length,
  }

  const filters = getServiceFilters(stats)
  
  const searchTerm = normalizeSearch(search);

  const sortTrips = [...services].sort(
    (a, b) =>
      new Date(b.requestedAt).getTime() - new Date(a.requestedAt).getTime(),
  );

  const filteredTrips =
    filter === "ALL"
      ? sortTrips
      : sortTrips.filter((service) => service.status === filter);
  
  const searchedTrips = !searchTerm
    ? filteredTrips
    : filteredTrips.filter((service) => {
        if (!service.driverName) {
          service.driverName = "";
        }
        switch (searchScope) {
          case "SERVICES":
            return normalizeSearch(service.serviceNumber).includes(searchTerm);

          case "PASSENGERS":
            return (
              normalizeSearch(service.passengerName).includes(searchTerm) ||
              normalizeSearch(service.passengerPhone).includes(searchTerm)
            );

          case "DRIVERS":
            return (
              normalizeSearch(service.driverName).includes(searchTerm) ?? false
            );

          case "COMPANIES":
            return normalizeSearch(service.companyName).includes(searchTerm);

          default:
            return (
              normalizeSearch(service.serviceNumber).includes(searchTerm) ||
              normalizeSearch(service.companyName).includes(searchTerm) ||
              normalizeSearch(service.passengerName).includes(searchTerm) ||
              normalizeSearch(service.passengerPhone).includes(searchTerm) ||
              normalizeSearch(service.driverName)?.includes(searchTerm) ||
              normalizeSearch(service.origin).includes(searchTerm) ||
              normalizeSearch(service.destination).includes(searchTerm)
            );
        }
      });
  
  const sortedTrips = [...searchedTrips].sort((a, b) => {
    switch (sortBy) {
      case "REQUESTED_AT_DESC":
        return (
          new Date(b.requestedAt).getTime() - new Date(a.requestedAt).getTime()
        );

      case "REQUESTED_AT_ASC":
        return (
          new Date(a.requestedAt).getTime() - new Date(b.requestedAt).getTime()
        );

      case "SERVICE_NUMBER_ASC":
        return Number(a.serviceNumber) - Number(b.serviceNumber);

      case "SERVICE_NUMBER_DESC":
        return Number(b.serviceNumber) - Number(a.serviceNumber);

      default:
        return 0;
    }
  });
  
  const selectedService =
    sortedTrips.find((trip) => trip.id === selectedServiceId) ?? null;

  useEffect(() => {
      setServices(createMockServices());
    }, []);

  return (
    <MasterDetailWorkspace
      detailOpen={detailOpen}
      onDetailOpenChange={setDetailOpen}
      detailTitle="Detalle del servicio"
      detail={
        <ServiceDetailPanel service={selectedService} />
      }
      list={
        <ServiceList
          services={sortedTrips}
          selectedServiceId={selectedServiceId}
          filter={filter}
          onFilterChange={(value) =>
            setFilter(value as ServiceStatus)
          }
          sortBy={sortBy}
          onSortChange={setSortBy}
          stats={stats}
          onSelectService={(service) => {
            setSelectedServicedId(service.id)

            if (window.innerWidth < 1280) {
              setDetailOpen(true)
            }
          }}
        />
      }
    />
  )
}
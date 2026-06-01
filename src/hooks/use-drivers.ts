import { dispatchApi } from "@/services/api/dispatch-api";
import { useQuery } from "@tanstack/react-query";

export function useDrivers() {
  return useQuery({
    queryKey: ["drivers"],
    queryFn: () => dispatchApi.getDrivers()
  })
}
import { dispatchApi } from "@/services/api/dispatch-api";
import { useQuery } from "@tanstack/react-query";

export function useTrips() {
  return useQuery({
    queryKey: ["trips"],
    queryFn: () => dispatchApi.getTrips()
  })
}
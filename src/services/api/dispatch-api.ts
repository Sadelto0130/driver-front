import { Trip } from "@/types/trip"
import { fleetClient } from "./http-client"
import { Driver } from "@/types/driver"

export const dispatchApi = {
  async getTrips() {
    const response = await fleetClient.get<Trip[]>("/trips")

    return response.data
  },

  async getTrip( tripId: string) {
    const response = await fleetClient.get<Trip>(`/trips/${tripId}`)

    return response.data
  },

  async getMatching(tripId: string) {
    const response = await fleetClient.get(`/trips/${tripId}/matching`)

    return response.data
  },

  async assignDriver(
    tripId: string,
    driverId: string
  ) {
    const response = await fleetClient.post(
      `/trips/${tripId}/assign`,
      {
        driverId
      }
    )

    return response.data
  },

  async retry(tripId: string) {
    const response = await fleetClient.post(`/trips/${tripId}/retry`)

    return response.data
  },

  async cancel(tripId: string) {
    const response = await fleetClient.post(`/trips/${tripId}/cancel`)

    return response.data
  },

  async getDrivers() {
    const response = await fleetClient.get<Driver[]>("/drivers")

    return response.data
  }
}
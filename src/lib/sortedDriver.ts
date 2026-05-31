import { mockDrivers } from "@/mocks/driver";

export const sortedDrivers = [...mockDrivers]
  .sort((a, b) => {
    const order = {
      AVAILABLE: 0,
      BUSY: 1,
      OFFLINE: 2
    }

    if(order[a.status] !== order[b.status]) {
      return order[a.status] - order[b.status]
    }

    return a.distanceKm - b.distanceKm
  })
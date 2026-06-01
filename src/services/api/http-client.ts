import axios from "axios"
import { setupInterceptor } from "./setup-interceptors"

export const authClient = 
  setupInterceptor(
    axios.create({
      baseURL: process.env.NEXT_PUBLIC_AUTH_API_URL,
      timeout: 10000
    })
  )

export const driverClient =
  setupInterceptor(
    axios.create({
      baseURL: process.env.NEXT_PUBLIC_DRIVER_API_URL,
      timeout: 10000
    })
  )

export const fleetClient = 
  setupInterceptor(
    axios.create({
      baseURL: process.env.NEXT_PUBLIC_FLEET_API_URL,
      timeout: 10000
    })
  )

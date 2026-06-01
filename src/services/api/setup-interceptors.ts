import { AxiosInstance } from "axios";

export function setupInterceptor(
  client: AxiosInstance
) {
  client.interceptors.request.use(
    (config) => {
      if(typeof window !== "undefined") {
        const token = localStorage.getItem("access-token")

        if(token) {
          config.headers.Authorization = `Bearer ${token}`
        }

        const deviceId = localStorage.getItem("device-id")

        if(deviceId) {
          config.headers["x-device-id"] = deviceId
        }
      }

      return config
    }
  )

  return client
}
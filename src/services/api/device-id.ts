const STORAGE_KEY = "device-id"

export function getDeviceId() {
  if(typeof window === "undefined") {
    return "server"
  }

  let deviceId = localStorage.getItem(STORAGE_KEY)

  if(!deviceId) {
    deviceId = crypto.randomUUID()

    localStorage.setItem(
      STORAGE_KEY,
      deviceId
    )
  }

  return deviceId
}
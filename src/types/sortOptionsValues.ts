export interface SortOption {
  value: string
  label: string
}

export const sortOptionsValues: SortOption[] = [
  {
    value: "REQUESTED_AT_DESC",
    label: "Más recientes",
  },
  {
    value: "REQUESTED_AT_ASC",
    label: "Más antiguos",
  },
  {
    value: "SERVICE_NUMBER_ASC",
    label: "Servicio ↑",
  },
  {
    value: "SERVICE_NUMBER_DESC",
    label: "Servicio ↓",
  },
]
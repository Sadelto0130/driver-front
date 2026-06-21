export const statusDocumentsConfig = {
  VALID: {
    label: "Vigente",
    badgeClassName:
      "border-emerald-200 bg-emerald-50 text-emerald-700",
    dotClassName: "bg-emerald-500",
  },

  EXPIRING: {
    label: "Próximo a vencer",
    badgeClassName:
      "border-amber-200 bg-amber-50 text-amber-700",
    dotClassName: "bg-amber-500",
  },

  EXPIRED: {
    label: "Vencido",
    badgeClassName:
      "border-red-200 bg-red-50 text-red-700",
    dotClassName: "bg-red-500",
  },
} as const
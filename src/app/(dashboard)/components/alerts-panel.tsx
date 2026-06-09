"use client"

import { useRouter } from "next/navigation"

export function AlertsPanel() {
  const router = useRouter()

  return (
    <div className="rounded-2xl border border-slate-500/30 bg-card p-5 shadow-[0_4px_20px_rgba(0,0,0,0.o5)]">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          Alertas
        </h3>
      </div>
    </div>
  )
} 
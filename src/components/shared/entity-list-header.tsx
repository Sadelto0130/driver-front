"use client"

import { cn } from "@/lib/utils"

interface Props {
  columns: React.ReactNode
  gridClassName: string
}

export function EntityListHeader({
  columns,
  gridClassName
}: Props) {
  return (
    <div className={cn(`
        hidden
        lg:grid
        gap-4
        border-b border-slate-200
        bg-slate-50/50
        px-4 py-3
        mt-8
        text-xs
        font-semibold
        uppercase
        tracking-wide
        text-slate-500
      `,
      gridClassName
    )}>
      {columns}
    </div>      
  )
}
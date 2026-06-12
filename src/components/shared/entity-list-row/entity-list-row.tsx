"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface Props {
  selected?: boolean
  highlighted?: boolean

  onClick?: () => void

  priorityBorderClass?: string

  mobileContent: ReactNode
  desktopContent: ReactNode
}

export function EntityListRow({
  selected,
  highlighted,
  onClick,
  priorityBorderClass,
  mobileContent,
  desktopContent
}: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left transition-all duration-200",
        highlighted && "bg-blue-100/80",
        selected && "bg-blue-50/70"
      )}
    >
      {/**MOBILE */}
      <div className={cn(
        "block border-b border-slate-100 lg:hidden",
        priorityBorderClass && "border-l-4",
        priorityBorderClass
      )}>
        {mobileContent}
      </div>

      {/**DESKTOP */}
      <div className={cn(
        "hidden border-b border-slate-100 hover:bg-slate-50 lg:block",
        priorityBorderClass && "border-l-4",
        priorityBorderClass,
        selected && "translate-x-1 shadow-sm"
      )}>
        {desktopContent}
      </div>
    </button>
  )
}
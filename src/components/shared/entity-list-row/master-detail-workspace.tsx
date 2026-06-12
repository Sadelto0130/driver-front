"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ReactNode } from "react"

interface Props {
  list: ReactNode
  detail: ReactNode

  detailOpen: boolean
  onDetailOpenChange: (open: boolean) => void

  detailTitle?: string

  detailWidth?: string
}

export function MasterDetailWorkspace({
  list,
  detail,
  detailOpen,
  onDetailOpenChange,
  detailTitle = "Detalle",
  detailWidth = "480px"
}: Props) {
  return (
    <>
      <div className="flex h-full min-h-0 overflow-hidden">
        <div className="min-w-0 flex-1">
          {list}
        </div>

        <aside 
          className="hidden xl:flex shrink-0 border-l border-slate-200/70 bg-white"
          style={{width: detailWidth}}
        >
          {detail}
        </aside>
      </div>

      <Sheet
        open={detailOpen}
        onOpenChange={onDetailOpenChange}
      >
        <SheetContent
          side="right"
          showCloseButton
          className="w-screen max-w-none p-0 xl:hidden"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>
              {detailTitle}
            </SheetTitle>
          </SheetHeader>

          {detail}
        </SheetContent>
      </Sheet>
    </>
  )
}
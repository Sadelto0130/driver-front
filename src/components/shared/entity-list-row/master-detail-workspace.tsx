"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ReactNode } from "react"

interface Props {
  header?: React.ReactNode

  list: ReactNode
  detail: ReactNode

  detailOpen: boolean

  onDetailOpenChange: (open: boolean) => void

  detailTitle?: string

  desktopLayout?: string
}

export function MasterDetailWorkspace({
  header,
  list,
  detail,
  detailOpen,
  onDetailOpenChange,
  detailTitle = "Detalle",
  desktopLayout = "1fr 360px"
}: Props) {
  return (
    <>
      <div className="flex h-full min-h-0 flex-col overflow-hidden">
        {header}
        
        <div 
          className="hidden min-h-0 flex-1 gap-3 xl:grid"
          style={{gridTemplateColumns: desktopLayout}}
        >
          
          <div className="min-h-0 overflow-hidden">
            {list}
          </div>

          <aside 
            className="
              min-h-0 
              overflow-hidden 
              rounded-xl
              border 
              border-slate-200
              bg-white 
              shadow-sm
            "
          >
            {detail}
          </aside>
        </div>
        
        <div className="min-h-0 flex-1 xl:hidden">
          {list}
        </div>

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
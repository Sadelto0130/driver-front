"use client"

import { useRef } from "react";
import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { StatusToolbarFilter } from "@/types/service-filters";
import { statusColorMap } from "@/types/status-color-map";
import { SortOption } from "@/types/sortOptionsValues";

interface Props {
  value: string
  filters: StatusToolbarFilter[]
  onValueChange:(value: string) => void
  sortValue?: string
  sortOptions?: SortOption[]
  onSortChange?: (value: string) => void
}

export function StatusToolbar ({
  value,
  filters,
  onValueChange,
  sortValue,
  sortOptions,
  onSortChange
}: Props) {
  
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -250,
      behavior: "smooth",
    })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 250,
      behavior: "smooth",
    })
  }

  return (
  <div className="border-b border-slate-200/70 bg-slate-50/30 px-3 py-2 md:px-4">
    <div className="flex items-center gap-2">

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="
              shrink-0
              flex h-10 w-8
              items-center justify-center
              rounded-xl 
              border border-slate-400
              bg-white
              text-slate-600
              transition-colores
              hover:bg-slate-300
            "
            aria-label="Ordenar"
          >
            <ArrowUpDown className="h-4 w-4" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="w-56 rounded-2xl">
          <div className="px-2 py-1.5">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Ordenar
            </p>
          </div>

          <DropdownMenuSeparator />

          {sortOptions?.map((option) => (
            <DropdownMenuItem
              onClick={() => onSortChange?.(option.value)}
              className="cursor-pointer"
            >
              {option.label}
            </DropdownMenuItem> 
          ))}

        </DropdownMenuContent>
      </DropdownMenu>

      <button
        type="button"
        onClick={scrollLeft}
        className="
          shrink-0
          flex h-8 w-8 items-center justify-center
          rounded-lg
          border border-slate-200
          bg-white
          text-slate-600
          transition-colors
          hover:bg-slate-100
        "
        aria-label="Mover filtros a la izquierda"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <div className="relative min-w-0 flex-1">

        <div
          className="
            pointer-events-none
            absolute inset-y-0 left-0 z-10
            w-8
            bg-gradient-to-r
            from-slate-50
            to-transparent
          "
        />

        <div
          ref={scrollRef}
          className="
            overflow-x-auto
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          <div className="flex w-max min-w-full gap-2">
            {filters.map((item) => {
              const colors = statusColorMap[item.value]

              return (
                <button
                  key={item.value}
                  onClick={() => onValueChange(item.value)}
                  className={`
                    shrink-0
                    flex items-center gap-2
                    rounded-lg
                    border
                    px-3 py-1.5
                    text-sm font-medium
                    transition-all duration-200

                    ${
                      item.value === value
                        ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                        : `${colors.bg} ${colors.border} ${colors.text}`
                    }
                  `}
                >
                  <span>{item.label}</span>

                  <span
                    className={`
                      rounded-full px-2 py-0.5 text-xs font-semibold
                      ${
                        item.value === value
                          ? "bg-white/20 text-white"
                          : colors.badge
                      }
                    `}
                  >
                    {item.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div
          className="
            pointer-events-none
            absolute inset-y-0 right-0 z-10
            w-8
            bg-gradient-to-l
            from-slate-50
            to-transparent
          "
        />
      </div>

      <button
        type="button"
        onClick={scrollRight}
        className="
          shrink-0
          flex h-8 w-8 items-center justify-center
          rounded-lg
          border border-slate-200
          bg-white
          text-slate-600
          transition-colors
          hover:bg-slate-100
        "
        aria-label="Mover filtros a la derecha"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

    </div>
  </div>
)
}
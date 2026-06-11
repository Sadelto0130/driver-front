"use client"

import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Button } from "../ui/button"
import { ChevronsUpDown, Check } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "../ui/command"
import { cn } from "@/lib/utils"

interface SearchSelectOption {
  value: string
  label: string
}

interface Props {
  value?: string
  placeholder: string
  searchPlaceholder?: string
  emptyMessage?: string
  disabled?: boolean
  options: SearchSelectOption[]
  onChange: (value: string) => void
}

export function SearchSelect({
  value,
  placeholder,
  searchPlaceholder,
  emptyMessage,
  disabled,
  options,
  onChange
}: Props) {
  const [open, setOpen] = useState(false)

  const selectedOption = options.find((option) => option.value === value)

  return (
    <Popover
      open={open}
      onOpenChange={(value) => {
        setOpen(value)
      }}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="h-11 w-full justify-between rounded-xl border-slate-200 font-normal"
          disabled={disabled}
        >
          {selectedOption?.label ?? placeholder}

          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50"/>
        </Button>
      </PopoverTrigger>

      <PopoverContent 

        className="
          z-[10000]
          w-[var(--radix-popover-trigger-width)]
          border
          border-slate-200
          bg-white
          p-0
          shadow-xl
        "
      >
        <Command className="bg-white">
          <CommandInput placeholder={searchPlaceholder ?? "Buscar..."}/>

          <CommandEmpty>
            {emptyMessage ?? "Sin resultados"}
          </CommandEmpty>

          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.label}
                onSelect={() => {
                  onChange(option.value)
                  setOpen(false)
                }}
              >
                <Check 
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === option.value
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
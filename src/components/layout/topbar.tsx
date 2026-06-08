"use client"
import { Bell, Check, Search, SlidersHorizontal } from "lucide-react";

import { TenantSwitcher } from "./tenant-switcher";
import { MobileSidebar } from "./mobile-sidebar";
import { useState } from "react";
import { SearchScope } from "@/types/search-scope";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Command, CommandGroup, CommandItem } from "../ui/command";
import { useDispatchContext } from "@/context/dispatch-context";

export function Topbar() {
  const {
    search,
    setSearch,
    searchScope, 
    setSearchScope
  } = useDispatchContext()
   
  const [searchScopeOpen, setSearchScopeOpen] = useState(false)

  const searchPlaceholder = {
    ALL: "Buscar servicios, pasajeros o conductores...",
    SERVICES: "Buscar por número de servicio...",
    PASSENGERS: "Buscar pasajero o teléfono...",
    DRIVERS: "Buscar conductor...",
    COMPANIES: "Buscar empresa...",
  };

  const optionSearchScopes = [
    {
      value: "ALL",
      label: "Todo",
    },
    {
      value: "SERVICES",
      label: "Servicios",
    },
    {
      value: "PASSENGERS",
      label: "Pasajeros",
    },
    {
      value: "DRIVERS",
      label: "Conductores",
    },
    {
      value: "COMPANIES",
      label: "Empresas",
    },
  ];

  return (
    <header className="
      sticky top-0 z-40
      flex h-20 items-center justify-between 
      border-b border-slate-200/80 
      bg-white/80 
      px-4 backdrop-blur-xl 
      md:px-6
    ">
      <div className="flex items-center gap-4">
        <MobileSidebar />   

        <Popover
          open={searchScopeOpen}
          onOpenChange={setSearchScopeOpen}
        >
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg hover:bg-slate-100"
            >
              <SlidersHorizontal
                className={cn(
                  "h-4 w-4",
                  searchScope === "ALL"
                    ? "text-slate-500"
                    : "text-blue-600"
                )}
              />
            </Button>
          </PopoverTrigger>
 
          <PopoverContent
            align="end"
            className="w-52 border border-slate-200 bg-white p-1 shadow-xl"
          >
            <Command>
              <CommandGroup>
                {optionSearchScopes.map(
                  (scope) => (
                    <CommandItem
                      key={scope.value}
                      onSelect={() => {
                        setSearchScope(scope.value as SearchScope)
                        
                        setSearchScopeOpen(false)
                      }}
                      className="cursor-pointer"
                    >
                      <Check 
                        className={cn(
                          "mr-2 h4 w-4",
                          searchScope === 
                            scope.value
                              ? "opacity-100"
                              : "opacity-0"
                        )}
                      />
                      {scope.label}
                    </CommandItem>
                  )
                )}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        <div className="
          hidden lg:flex
          items-center gap-3
          rounded-2xl
          border border-slate-200
          bg-slate-50
          px-4 py-3
        ">
          <Search className="h-5 w-5 text-slate-400"/>
          
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={searchPlaceholder[searchScope]}
            className="
              w-72
              bg-transparent
              text-sm
              outline-none
              placeholder:text-slate-400
            "
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="
          hidden xl:flex
          items-center gap-3
          rounded-2xl
          border border-emerald-100
          bg-emerald-50
          px-4 py-2
        ">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"/>

          <div>
            <p className="text-xs font-medium text-emerald-700">
              Operación activa
            </p>

            <p className="text-xs text-emerald-600">
              Sistema funcionando correctamente
            </p>
          </div>
        </div>
        <TenantSwitcher />

        <button
          aria-label="Notificaciones"
          title="Notificaciones"
          className="
            flex h-11 w-11 items-center
            justify-center rounded-2xl 
            border border-slate-200
            bg-white
            transition-colors 
            hover:bg-slate-50
          "
        >
          <Bell className="h-5 w-5 text-slate-700"/>
        </button>

        <div className="
          flex h-11 w-11 items-center
          justify-center rounded-full 
          bg-gradient-to-br
          from-blue-600
          to-indigo-600
          font-semibold text-white
        ">
          JP
        </div>
      </div>
    </header>
  );
}
"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navigationItems } from "@/config/navigation";
import { tenantTheme } from "@/config/theme";
import { NavItem } from "./nav-item";
import { Button } from "../ui/button";

export function MobileSidebar() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Abrir menú"
          className="
            flex h-10 w-10 items-center
            justify-center rounded-xl border
            transition-colors hover:bg-muted
            lg:hidden
          ">
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="
          w-[90vw]
          max-w-[380px]
          p-0
          overflow-hidden
          border-r border-white/10 
        bg-[#0b1220]
        text-white
        ">
        <SheetHeader className="sr-only">
          <SheetTitle>Menú principal</SheetTitle>
        </SheetHeader>

        {/**HEADER */}
        <div className="
          flex items-center
          justify-between
          border-b
          border-slate-200
          border-b border-white/10
          px-5
          py-5
        ">
          <div className="flex items-center gap-3">
            <div className="
              relative
              flex h-12 w-12
              items-center justify-center
              rounded-2xl
              bg-gradient-to-br
              from-blue-600
              to-indigo-600
              text-white
              shadow-lg
            ">
               {tenantTheme.logo ? (
                  <Image
                    src={tenantTheme.logo}
                    alt={tenantTheme.companyName}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold">
                    R
                  </span>
                )}
            </div>

           <div>
            <h1 className="text-xl font-semibold tracking-tight">
              {tenantTheme.companyName}
            </h1>
            <p className="text-sm text-slate-400">
              {tenantTheme.branchName}
            </p>
          </div>
          </div>

          <SheetClose asChild>
            <Button size="icon" variant="ghost" className="rounded-xl">
              <X className="h-5 w-5" />
            </Button>
          </SheetClose>
        </div>

        {/**zona scrollable */}
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <nav className="flex-1 overflow-y-auto p-4">
            {navigationItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={pathname === item.href}
              />
            ))}
          </nav>
        </div>

        {/**FOOTER */}
        <div className="border-t border-white/10 p-4">
        <div className="
          rounded-2xl
          border border-white/10
          bg-white/[0.03]
          p-4 py-3
        ">
          <p className="
            text-sm font-medium
            uppercase trackin-[0.2em]
            text-slate-500
          ">
            Ockta Movilidad
          </p>

          <p className="mt-1 text-xs text-slate-400">
            by 78 Tech Group
          </p>
        </div>
      </div>
      </SheetContent>
    </Sheet>
  );
}

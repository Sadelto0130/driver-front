"use client";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navigationItems } from "@/config/navigation";
import { tenantTheme } from "@/config/theme";
import { NavItem } from "./nav-item";

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
          "
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>

      <SheetContent
  side="left"
  className="
    w-72
    border-r
    border-slate-200
    bg-white
    p-0
  "
>
  <SheetHeader className="sr-only">
    <SheetTitle>
      Menú principal
    </SheetTitle>
  </SheetHeader>

  <div
    className="
      border-b
      bg-gradient-to-r
      from-blue-50
      to-indigo-50
      px-6
      py-5
    "
  >
    <div className="flex items-center gap-3">
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-blue-600
          to-indigo-600
          text-white
          shadow-lg
        "
      >
        R
      </div>

      <div>
        <p className="text-xs text-slate-500">
          Plataforma Mobility
        </p>

        <h1 className="font-semibold text-slate-900">
          {tenantTheme.companyName}
        </h1>
      </div>
    </div>
  </div>

  <nav className="space-y-2 p-4">
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
</SheetContent>
    </Sheet>
  );
}
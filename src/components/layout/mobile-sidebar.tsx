"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
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
            md:hidden
          "
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-72 p-0"
      >
        <div className="flex items-center gap-3 border-b px-6 py-5">
          <div className="h-10 w-10 rounded-xl bg-blue-600" />

          <div>
            <p className="text-sm text-muted-foreground">
              Plataforma Mobility
            </p>

            <h1 className="text-lg font-semibold">
              {tenantTheme.companyName}
            </h1>
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
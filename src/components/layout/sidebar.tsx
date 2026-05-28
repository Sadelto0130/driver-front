"use client";

import { usePathname } from "next/navigation";
import { navigationItems } from "@/config/navigation";
import { tenantTheme } from "@/config/theme";
import { NavItem } from "./nav-item";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex h-screen w-72 flex-col border-r bg-background">
      <div className="flex items-center gap-3 border-b px-6 py-5">
        <div className="h-10 w-10 rounded-xl bg-blue-600" />

        <div>
          <p className="text-sm text-muted-foreground">
            Mobility Platform
          </p>

          <h1 className="text-lg font-semibold">
            {tenantTheme.companyName}
          </h1>
        </div>
      </div>

      <nav className="flex-1 space-y-2 p-4">
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
    </aside>
  );
}
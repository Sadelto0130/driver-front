"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/config/navigation";
import { tenantTheme } from "@/config/theme";
import { NavItem } from "./nav-item";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="
      hidden md:flex 
      h-screen w-72 
      flex-col 
      border-r border-white/10 
      bg-[#0b1220]
      text-white
    ">
      
      <div className="border-b border-white/10 px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="
            relative flex h-14 w-14 
            items-center justify-center
            overflow-hidden rounded-2xl
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
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navigationItems.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            active={pathname === item.href}
            dark
          />
        ))}
      </nav>

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
            Platform Mobility
          </p>

          <p className="mt-1 text-xs text-slate-400">
            by 78 Tech Group
          </p>
        </div>
      </div>
    </aside>
  );
}
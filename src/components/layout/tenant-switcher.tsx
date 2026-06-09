"use client";

import { ChevronDown, Building2 } from "lucide-react";

export function TenantSwitcher() {
  return (
    <button className="
      flex items-center gap-2
      rounded-xl border bg-background
      px-3 py-2
      transition-colors
      hover:bg-muted
    ">
      <Building2 className="h-5 w-5 text-primary" />

      <span className="
        hidden md:inline
        text-sm font-medium
      ">
        Casa central
      </span>

      <ChevronDown className="
        hidden md:block
        h-4 w-4 text-muted-foreground
      "/>
    </button>
  );
}

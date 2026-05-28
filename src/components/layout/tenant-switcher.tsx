"use client";

import {
  ChevronDown,
  Building2,
} from "lucide-react";

export function TenantSwitcher() {
  return (
    <button
      className="
        flex items-center gap-3
        rounded-xl border bg-background
        px-4 py-2
        transition-colors
        hover:bg-muted
      "
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
        <Building2 className="h-5 w-5 text-primary" />
      </div>

      <div className="text-left">
        <p className="text-sm font-medium">
          Fleet Platform
        </p>

        <p className="text-xs text-muted-foreground">
          Main Tenant
        </p>
      </div>

      <ChevronDown className="h-4 w-4 text-muted-foreground" />
    </button>
  );
}
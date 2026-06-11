"use client";

import { ChevronDown, Building2 } from "lucide-react";

export function TenantSwitcher() {
  return (
    <button
      className="
      flex items-center
      justify-center
      h-11 w-11
      rounded-2xl
      border
      bg-background
      md:w-auto
      md:px-3
    "
    >
      <Building2 className="h-5 w-5" />

      <span
        className="
        hidden
        md:inline
        ml-2
        text-sm
        font-medium
      "
      >
        Casa central
      </span>

      <ChevronDown
        className="
        hidden
        md:block
        ml-1
        h-4
        w-4
      "
      />
    </button>
  );
}

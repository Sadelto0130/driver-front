"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
}

export function NavItem({
  href,
  label,
  icon: Icon,
  active,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-xl px-4 py-3 transition-colors",
        active
          ? "bg-primary text-primary-foreground"
          : "hover:bg-muted"
      )}
    >
      <Icon className="h-5 w-5 shrink-0" />

      <span className="font-medium">
        {label}
      </span>
    </Link>
  );
}
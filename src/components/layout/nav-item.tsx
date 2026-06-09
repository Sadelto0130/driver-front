"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
  dark?: boolean;
}

export function NavItem({
  href,
  label,
  icon: Icon,
  active,
  dark,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-3 rounded-xl px-4 py-3 transition-all",
        dark 
          ? active
            ? `
              bg-gradient-to-r 
              from-blue-600
              to-indigo-600
              text-white
              shadow-lg shadow-blue-500/20
              `
            : `
              text-slate-300
              hover:bg-white/5
              hover:text-white
            `
          : active
            ? "bg-primary text-primary-foreground"
            : "hover:bg-muted"
      )}
    >
      <Icon className="
        h-5 w-5 shrink-0
        transition-transform
        group-hover:scale-110
      " />

      <span className="font-medium">
        {label}
      </span>
    </Link>
  );
}
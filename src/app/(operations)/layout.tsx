import { ReactNode } from "react";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { DispatchProvider } from "@/context/dispatch-context";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
      <DashboardShell>
        {children}
      </DashboardShell>
  );
}
import { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

interface DashboardShellProps {
  children: ReactNode;
}

export function DashboardShell({
  children,
}: DashboardShellProps) {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
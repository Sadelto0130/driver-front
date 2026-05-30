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
    <div className="h-screen overflow-hidden bg-slate-50">
      <div className="flex h-full">
        <Sidebar />

        <div className="flex h-full flex-1 flex-col overflow-hidden">
          <Topbar />

          <main className="
            min-h-0
            flex-1 
            overflow-hidden 
            p-4 
            md:p-6 
            xl:p-8
          ">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
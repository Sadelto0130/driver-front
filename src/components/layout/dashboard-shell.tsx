import { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";
import { DispatchProvider } from "@/context/dispatch-context";

interface DashboardShellProps {
  children: ReactNode;
}

export function DashboardShell({
  children,
}: DashboardShellProps) {
  return (
    <DispatchProvider>
      <div className="h-screen overflow-hidden bg-slate-50">
        <div className="flex h-full min-w-0">
          <Sidebar />

          <div className="
            flex 
            h-full 
            min-w-0 
            flex-1 
            flex-col 
            overflow-hidden
          ">
            <Topbar />
  
            <main className="
              min-w-0
              min-h-0
              flex-1 
              overflow-y-auto
              overflow-x-hidden 
              p-4 
              md:p-6 
              xl:p-8
            ">
              {children}
            </main>
          </div>
        </div>
      </div>
    </DispatchProvider>
  );
}
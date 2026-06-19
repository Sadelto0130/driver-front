 import { ReactNode } from "react";
 import { DashboardShell } from "@/components/layout/dashboard-shell";
 
 interface DashboardLayoutProps {
   children: ReactNode;
 }
 
 export default function FleetLayout({
   children,
 }: DashboardLayoutProps) {
   return (
       <DashboardShell>
         {children}
       </DashboardShell>
   );
 }
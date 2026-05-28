import { Bell } from "lucide-react";

import { TenantSwitcher } from "./tenant-switcher";
import { MobileSidebar } from "./mobile-sidebar";

export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-4">
        <MobileSidebar />

        <TenantSwitcher />
      </div>

      <div className="flex items-center gap-3">
        <button
          aria-label="Notificaciones"
          title="Notificaciones"
          className="
            flex h-10 w-10 items-center
            justify-center rounded-xl border
            transition-colors hover:bg-muted
          "
        >
          <Bell className="h-5 w-5" />
        </button>

        <div className="h-10 w-10 rounded-full bg-muted" />
      </div>
    </header>
  );
}
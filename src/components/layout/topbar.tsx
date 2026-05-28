import { Bell, Search } from "lucide-react";

import { TenantSwitcher } from "./tenant-switcher";
import { MobileSidebar } from "./mobile-sidebar";

export function Topbar() {
  return (
    <header className="
      sticky top-0 z-40
      flex h-20 items-center justify-between 
      border-b border-slate-200/80 
      bg-white/80 
      px-4 backdrop-blur-xl 
      md:px-6
    ">
      <div className="flex items-center gap-4">
        <MobileSidebar />

        <div className="
          hidden lg:flex
          items-center gap-3
          rounded-2xl
          border border-slate-200
          bg-slate-50
          px-4 py-3
        ">
          <Search className="h-5 w-5 text-slate-400"/>
          
          <input
            placeholder="Buscar conductores, viajes..."
            className="
              w-72
              bg-transparent
              text-sm
              outline-none
              placeholder:text-slate-400
            "
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="
          hidden xl:flex
          items-center gap-3
          rounded-2xl
          border border-emerald-100
          bg-emerald-50
          px-4 py-2
        ">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500"/>

          <div>
            <p className="text-xs font-medium text-emerald-700">
              Operación activa
            </p>

            <p className="text-xs text-emerald-600">
              Sistema funcionando correctamente
            </p>
          </div>
        </div>
        <TenantSwitcher />

        <button
          aria-label="Notificaciones"
          title="Notificaciones"
          className="
            flex h-11 w-11 items-center
            justify-center rounded-2xl 
            border border-slate-200
            bg-white
            transition-colors 
            hover:bg-slate-50
          "
        >
          <Bell className="h-5 w-5 text-slate-700"/>
        </button>

        <div className="
          flex h-11 w-11 items-center
          justify-center rounded-full 
          bg-gradient-to-br
          from-blue-600
          to-indigo-600
          font-semibold text-white
        ">
          JP
        </div>
      </div>
    </header>
  );
}
import { formatServiceDate } from "@/lib/date";
import { DriverAuditEvent } from "@/types/driver";

interface Props {
  event: DriverAuditEvent
}

export function DriverAuditTimelineItem({event}: Props) {
  return (
    <div className="relative flex gap-4 pb-6">
      <div className="flex flex-col items-center">
        <div className="h-3 w-3 rounded-full bg-blue-500"/>
        <div className="mt-1 flex-1 w-px bg-slate-200" />    
      </div>

      <div className="min-w-0 flex-1 pb-2">
        <p className="text-xs flex-1 pb-2">
          {formatServiceDate(event.createdAt)}
        </p>

        <p className="mt-1 font-medium text-slate-900">
          {event.action}
        </p>

        <p className="mt-1 text-sm text-slate-600">
          {event.description}
        </p>

        <p className="mt-2 text-xs text-slate-500">
          Operador: {event.performedBy}
        </p>
      </div>
    </div>
  )
}
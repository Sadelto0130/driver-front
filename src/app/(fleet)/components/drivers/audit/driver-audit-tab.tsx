import { Driver } from "@/types/driver";
import { DriverAuditTimelineItem } from "./driver-audit-timeline-item";

interface Props {
  driver: Driver
}

export function DriverAuditTab({driver}: Props) {
  return (
    <div className="p-4">
      <div className="space-y-0">
        {driver.auditEvents.map((event) => (
          <DriverAuditTimelineItem
            key={event.id}
            event={event}
          />
        ))}
      </div>
    </div>
  )
}
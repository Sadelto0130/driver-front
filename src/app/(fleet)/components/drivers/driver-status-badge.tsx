import { Badge } from "@/components/ui/badge";
import { DriverStatus } from "@/types/driver";
import { statusConfig } from "../../config/status-driver-config";
import { cn } from "@/lib/utils";

export function DriverStatusBadge({
  status
}: {
  status: DriverStatus
}) {
  const config = statusConfig[status]

  return (
    <Badge className={cn(
      "gap-1.5 shrink-0 whitespace-nowrap",
      config.badgeClassName
    )}>
      <span className={cn(
        "h-1.5 w-1.5 rounded-full",
        config.dotClassName
      )}/>

        {config.label}

    </Badge>
  )
}
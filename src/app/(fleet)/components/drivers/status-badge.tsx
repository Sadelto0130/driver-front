import { Badge } from "@/components/ui/badge";
import { DocumentStatus, DriverStatus } from "@/types/driver";
import { statusDriverConfig } from "../../config/status-driver-config";
import { cn } from "@/lib/utils";
import { statusDocumentsConfig } from "../../config/status-document-config";

export function StatusBadge({
  statusDriver,
  statusDocument,
}: {
  statusDriver?: DriverStatus,
  statusDocument?: DocumentStatus
}) {
  let config: any

  if(statusDriver) {
    config = statusDriverConfig[statusDriver]
  } 
  
  if(statusDocument) {
    config = statusDocumentsConfig[statusDocument]
  }

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
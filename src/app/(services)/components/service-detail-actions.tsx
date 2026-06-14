"use client"

import { ActionButton } from "@/components/shared/action-button";
import { Service } from "@/types/service";
import { ServiceAction, serviceActionsByStatus } from "../config/service-action";
import { serviceActionConfig } from "../config/service-action-config";
import { TripHistorySheet } from "@/components/shared/history/trip-history-sheet";

interface Props { service: Service }

export function ServiceDetailActions({
  service,
}: Props) {
  const actions =
    serviceActionsByStatus[
      service.status
    ];

  const renderAction = (
    action: ServiceAction
  ) => {
    const config =
      serviceActionConfig[action];

    const Icon =
      config.icon;

    switch (action) {
      case "VIEW_HISTORY":
        return (
          <TripHistorySheet
            key={action}
            trip={service}
            trigger={
              <ActionButton
                icon={
                  <Icon className="h-4 w-4" />
                }
                onClick={()=>console.log(action)}
              />
            }
          />
        );

      default:
        return (
          <ActionButton
            key={action}
            icon={
              <Icon className="h-4 w-4" />
            }
            danger={config.danger}
            onClick={() =>
              console.log(action)
            }
          />
        );
    }
  };

  return (
    <div
      className="
        mt-1
        mb-0
        grid
        grid-flow-col
        auto-cols-fr
        gap-2
      "
    >
      {actions.map(renderAction)}
    </div>
  );
}
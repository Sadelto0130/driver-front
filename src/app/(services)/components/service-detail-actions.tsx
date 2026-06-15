"use client"

import { ActionButton } from "@/components/shared/action-button";
import { Service } from "@/types/service";
import { ServiceAction, serviceActionsByStatus } from "../config/service-action";
import { serviceActionConfig } from "../config/service-action-config";
import { TripHistorySheet } from "@/components/shared/history/trip-history-sheet";
import { CancelTripDialog } from "@/components/shared/cancel-trip-dialog";
import { Copy, Pencil, Trash2 } from "lucide-react";
import { ServiceFormSheet } from "@/components/shared/service-form-sheet";

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
                icon={<Icon className="h-4 w-4" />}
                onClick={()=>console.log(action)}
              />
            }
          />
        );
      
      case "CANCEL":
        return (
          <CancelTripDialog
            key={action}
            trip={service}
            trigger={
              <ActionButton
                icon={<Trash2 className="h-4 w-4"/>}
                danger
              />
            }
            onConfirm={() => {console.log("cancel")}}
          />          
        );

      case "DUPLICATE":
        return (
          <ServiceFormSheet
            key={action}
            initialValues={{
              companyId: service.companyId ?? "",
              passengerName: service.passengerName,
              passengerPhone: service.passengerPhone ?? "",
              origin: service.origin,
              destination: service.destination,
              observation: service.observations ?? "",
              paymentMethod: service.paymentMethod ?? ""
            }}
            trigger={
              <ActionButton
                icon={<Copy className="h-4 w-4"/>}
              />
            }
          />
        );

      case "EDIT":
        return (
          <ServiceFormSheet
            key={action}
            mode="edit"
            serviceId={service.id}
            initialValues={{
              companyId: service.companyId ?? "",
              passengerName: service.passengerName,
              passengerPhone: service.passengerPhone ?? "",
              origin: service.origin,
              destination: service.destination,
              observation: service.observations ?? "",
              paymentMethod: service.paymentMethod ?? ""
            }}
            trigger={
              <ActionButton 
                icon={<Pencil className="h-4 w-4"/>}
              />
            }
          />
        )

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
        flex
        items-center
        justify-center
        gap-2
      "
    >
      {actions.map(renderAction)}
    </div>
  );
}
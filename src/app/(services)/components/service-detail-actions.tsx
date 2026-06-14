"use client"

import { ActionButton } from "@/components/shared/action-button";
import { Button } from "@/components/ui/button";
import { Service } from "@/types/service";
import { Copy, Pencil, Trash2, UserRound } from "lucide-react";

interface Props { service: Service }

export function ServiceDetailActions({ service }: Props) {
  return (
    <div className="mt-1 mb-0 grid grid-cols-4 gap-2">
      <ActionButton
        icon={<UserRound className="h-4 w-4" />}
        onClick={() => console.log("assign")}
      />

      <ActionButton
        icon={<Pencil className="h-4 w-4" />}
        onClick={() => console.log("edit")}
      />

      <ActionButton
        icon={<Copy className="h-4 w-4" />}
        onClick={() => console.log("duplicate")}
      />

      <ActionButton
        danger
        icon={<Trash2 className="h-4 w-4" />}
        onClick={() => console.log("cancel")}
      />
    </div>
  )
}
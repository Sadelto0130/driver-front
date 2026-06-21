import { DriverDocument } from "@/types/driver";
import { Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatServiceDate } from "@/lib/date";
import { StatusBadge } from "../status-badge";

interface Props {
  document: DriverDocument
}

export function DriverDocumentRow({document}: Props) {

  return (
    <div className="border-b border-slate-100 py-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-medium text-slate-900">
            {document.name}
          </p>

          {document.expiresAt && (
            <p className="mt-1 text-sm text-slate-500">
              Vence: {formatServiceDate(document.expiresAt)}
            </p>
          )}
        </div>

        <StatusBadge statusDocument={document.status}/>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
        >
          <Eye className="mr-2 h-4 w-4" />
          Ver
        </Button>

        <Button
          variant="outline"
          size="sm"
        >
          <Download className="mr-2 h-2 w-4" />
          Descargar
        </Button>
      </div>
    </div>
  )
}
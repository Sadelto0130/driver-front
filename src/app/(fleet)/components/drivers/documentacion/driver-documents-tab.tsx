import { Driver } from "@/types/driver";
import { DriverDocumentRow } from "./driver-document-row";

interface Props {
  driver: Driver
}

export function DriverDocumentsTab({driver}: Props) {
  const personalDocuments = driver.documents.filter((document) => 
    [
      "Licencia",
      "Antecedentes",
      "Libreta sanitaria"
    ].includes(document.name)
  )

  const vehicleDocuments = driver.documents.filter((document) => 
    [
      "Título",
      "Cedula Verde",
      "VTV",
      "Seguro Remis",
      "Tarjeta de Gas",
      "Patentes",
      "Habilitacion",
      "Tarjeta Unica"
    ].includes(document.name)
  )

  return (
    <div className="space-y-8 p-4">
      <section>
        <h3 className="text-sm font-semibold text-slate-900">
          Documentación personal
        </h3>

        <div className="mt-4">
          {personalDocuments.map((document) => (
            <DriverDocumentRow
              key={document.id}
              document={document}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-900">
          Documentacion de vehículo
        </h3>

        <div className="mt-4">
          {vehicleDocuments.map((document) => (
            <DriverDocumentRow
              key={document.id}
              document={document}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
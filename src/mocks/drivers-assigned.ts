import { statusDriverConfig } from "@/app/(fleet)/config/status-driver-config";
import { formatServiceDate } from "@/lib/date";
import { DocumentStatus, Driver, DriverAuditEvent, DriverDocument, DriverFinance, DriverStatus } from "@/types/driver";

const firstNames = [
  "Juan",
  "Carlos",
  "Miguel",
  "Fernando",
  "José",
  "Ricardo",
  "Sergio",
  "Mario",
  "Gabriel",
  "Diego",
  "Martín",
  "Javier",
  "Andrés",
  "Tomás",
  "Federico",
];

const lastNames = [
  "López",
  "Ruiz",
  "Castro",
  "Díaz",
  "Pérez",
  "Gómez",
  "Torres",
  "Fernández",
  "Acosta",
  "Silva",
  "Morales",
  "Romero",
  "Vega",
  "Navarro",
  "Cabrera",
];

const vehicles = [
  "Toyota Etios",
  "Chevrolet Prisma",
  "Fiat Cronos",
  "Renault Logan",
  "Volkswagen Voyage",
  "Toyota Corolla",
  "Fiat Siena",
  "Nissan Versa",
  "Chevrolet Onix",
  "Peugeot 208",
];

const statuses: DriverStatus[] = [
  "AVAILABLE",
  "BUSY",
  "OFFLINE",
];

const randomPlate = (index: number) =>
  `AA${String(100 + index)}${String.fromCharCode(
    65 + (index % 26),
    65 + ((index + 5) % 26)
  )}`;
  
const DRIVER_DOCUMENTS = [
  "Licencia",
  "Antecedentes",
  "Libreta sanitaria",
] as const;

const VEHICLE_DOCUMENTS = [
  "Título",
  "Cédula Verde",
  "VTV",
  "Seguro Remis",
  "Tarjeta de Gas",
  "Patentes",
  "Habilitación",
  "Tarjeta Única",
] as const;

const ALL_DOCUMENTS = [
  ...DRIVER_DOCUMENTS,
  ...VEHICLE_DOCUMENTS,
];

const BASE_EVENTS = [
  "Conductor creado",
  "Vehículo asignado",
] as const;

const EXTRA_EVENTS = [
  "Estado actualizado",
  "Documento actualizado",
  "Disponibilidad modificada",
  "Datos actualizados",
] as const;

const AUDIT_USERS = [
  "Administrador",
  "Sistema",
  "Juan Pérez",
  "María Gómez",
  "Carlos Ruiz",
  "Fernando Díaz",
];

function addDays( 
  date: Date,
  days: number
) {
  const result = new Date(date);

  result.setDate(
    result.getDate() + days
  );

  return result;
}

function createMockDocuments(
  driverId: string
): DriverDocument[] {
  const now = new Date();

  return ALL_DOCUMENTS.map(
    (documentName, index) => {
      const random =
        Math.random();

      let status: DocumentStatus;

      if (random < 0.7) {
        status = "VALID";
      } else if (random < 0.9) {
        status = "EXPIRING";
      } else {
        status = "EXPIRED";
      }

      let expiresAt: string;

      switch (status) {
        case "VALID":
          expiresAt = addDays(
            now,
            Math.floor(
              Math.random() * 365
            ) + 60
          ).toISOString();
          break;

        case "EXPIRING":
          expiresAt = addDays(
            now,
            Math.floor(
              Math.random() * 30
            ) + 1
          ).toISOString();
          break;

        case "EXPIRED":
          expiresAt = addDays(
            now,
            -(
              Math.floor(
                Math.random() * 120
              ) + 1
            )
          ).toISOString();
          break;
      }

      return {
        id: `${driverId}-${index}`,

        name: documentName,

        status,

        expiresAt,

        uploadedAt: addDays(
          now,
          -(
            Math.floor(
              Math.random() * 365
            ) + 30
          )
        ).toISOString(),

        fileUrl: `/documents/${driverId}/${documentName
          .toLowerCase()
          .replaceAll(" ", "-")}.pdf`,
      };
    }
  );
}

function randomPastDate(
  maxDays = 180
): string {
  const now = new Date();

  const daysAgo =
    Math.floor(
      Math.random() * maxDays
    ) + 1;

  const hoursAgo =
    Math.floor(
      Math.random() * 24
    );

  const minutesAgo =
    Math.floor(
      Math.random() * 60
    );

  const date = new Date(
    now.getTime() -
      (
        daysAgo * 24 * 60 +
        hoursAgo * 60 +
        minutesAgo
      ) *
        60 *
        1000
  );

  return date.toISOString();
}

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(
    () => Math.random() - 0.5
  );
}

function createMockAuditEvents(
  driverId: string,
  vehicleName: string,
  status: DriverStatus
): DriverAuditEvent[] {  
  const eventNames = [
    ...BASE_EVENTS,
    ...shuffleArray([
      ...EXTRA_EVENTS,
    ]).slice(
      0,
      Math.floor(
        Math.random() *
          EXTRA_EVENTS.length
      ) + 1
    ),
  ];

  const totalEvents = eventNames.length;
  
  const events: DriverAuditEvent[] = eventNames.map(
    (eventName, index) => {
      let action = "";
      let description = "";

      const daysAgo = (totalEvents - index) * 2;

      switch (eventName) {
        case "Conductor creado":
          action = eventName;
          description =
            "Registro inicial del conductor";
          break;

        case "Vehículo asignado":
          action = eventName;
          description = `Se asignó ${vehicleName}`;
          break;

        case "Estado actualizado":
          action = eventName;
          description = `El conductor pasó a estado ${statusDriverConfig[status].label}`;
          break;

        case "Documento actualizado":
          action = eventName;
          description =
            "Se actualizó la Licencia de conducir";
          break;

        case "Disponibilidad modificada":
          action = eventName;
          description =
            "Se modificó la disponibilidad operativa";
          break;

        case "Datos actualizados":
          action = eventName;
          description =
            "Se actualizaron los datos del conductor";
          break;
      }

      const createdAt = new Date()

      createdAt.setDate(createdAt.getDate() - daysAgo)

      return {
        id: `${driverId}-${index}`,

        createdAt: createdAt.toISOString(),

        action,

        description,

        performedBy:
          AUDIT_USERS[
            Math.floor(
              Math.random() *
                AUDIT_USERS.length
            )
          ],
      };
    }
  );

  return events.sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  );
}

function createMockFinance(
  earningsMonth: number
): DriverFinance {
  const commission = Math.floor(
    earningsMonth *
      (0.08 + Math.random() * 0.07)
  );

  const discounts =
    Math.random() > 0.7
      ? Math.floor(
          Math.random() * 25000
        )
      : 0;

  const bonuses =
    Math.random() > 0.8
      ? Math.floor(
          Math.random() * 15000
        )
      : 0;

  const adjustments =
    Math.random() > 0.85
      ? Math.floor(
          (Math.random() - 0.5) *
            10000
        )
      : 0;

  const pendingSettlement =
    commission -
    discounts +
    bonuses +
    adjustments;

  const hasSettlement =
    Math.random() > 0.3;

  return {
    pendingSettlement,

    commission,

    discounts,

    bonuses,

    adjustments,

    ...(hasSettlement
      ? {
          lastSettlementAmount:
            Math.floor(
              commission *
                (0.8 +
                  Math.random() *
                    0.2)
            ),

          lastSettlementDate:
            randomPastDate(30),
        }
      : {}),
  };
}
  
export function createMockDrivers(
    count = 10
  ): Driver[] {
    return Array.from(
      { length: count },
      (_, index) => {

    const averageFare = 7000 + Math.random() * 5000;

    const firstName = firstNames[index % firstNames.length];

    const lastName = lastNames[index % lastNames.length];

    const status = statuses[index % statuses.length];

    const tripsToday = Math.floor(Math.random() * 15) + 1;

    const tripsWeek = tripsToday + Math.floor(Math.random() * 40) + 5;

    const tripsMonth = tripsWeek + Math.floor(Math.random() * 120) + 20;

    const earningsToday = Math.floor(tripsToday * averageFare);

    const earningsWeek = Math.floor(tripsWeek * averageFare);

    const earningsMonth = Math.floor(tripsMonth * averageFare);

    const vehicleName = vehicles[index % vehicles.length]

    return {
      id: String(index + 1),

      name: `${firstName} ${lastName}`,

      phone: `+54 11 ${
        5000 + index
      }-${1000 + index}`,

      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@email.com`,

      vehicleName:
        vehicles[
          index % vehicles.length
        ],

      vehiclePlate:
        randomPlate(index),

      distanceKm:
        Number(
          (
            Math.random() * 10
          ).toFixed(1)
        ),

      tripsToday,
      tripsWeek,
      tripsMonth,

      earningsToday,
      earningsWeek,
      earningsMonth,

      serviceCancel:
          Math.floor(
            Math.random() * 8
          ),

      calificacion: Number(
        (
          4 +
          Math.random()
        ).toFixed(1)
      ),

      status,

      documents: createMockDocuments(String(index + 1)),

      auditEvents: createMockAuditEvents(
        String(index + 1),
        vehicleName,
        status
      ),

      finance: createMockFinance(earningsMonth)
    };
  }
);
}

export const mockDrivers = createMockDrivers();
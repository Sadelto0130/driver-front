import { DocumentStatus, Driver, DriverDocument, DriverStatus } from "@/types/driver";

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
  
export function createMockDrivers(
    count = 10
  ): Driver[] {
    return Array.from(
      { length: count },
      (_, index) => {
    const averageFare = 7000 + Math.random() * 5000;

    const firstName =
      firstNames[
        index % firstNames.length
      ];

    const lastName =
      lastNames[
        index % lastNames.length
      ];

    const status =
      statuses[
        index % statuses.length
      ];

    const tripsToday =
      Math.floor(Math.random() * 15) + 1;

    const tripsWeek =
      tripsToday +
      Math.floor(Math.random() * 40) + 5;

    const tripsMonth =
      tripsWeek +
      Math.floor(Math.random() * 120) + 20;

    const earningsToday = Math.floor(
        tripsToday * averageFare
      );

    const earningsWeek = Math.floor(
        tripsWeek * averageFare
      );

    const earningsMonth = Math.floor(
        tripsMonth * averageFare
      );

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

      documents: createMockDocuments(String(index + 1))
    };
  }
);
}

export const mockDrivers = createMockDrivers();

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
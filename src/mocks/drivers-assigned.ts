import { Driver, DriverStatus } from "@/types/driver";

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
    };
  }
);
}

export const mockDrivers = createMockDrivers();
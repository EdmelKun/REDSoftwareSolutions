import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const services = [
  { id: 1, name: "Website Development", description: "We build websites" },
  {
    id: 2,
    name: "Landing Pages",
    description: "We build landing pages",
  },
  {
    id: 3,
    name: "Software Solutions",
    description: "We do software solutions",
  },
  { id: 4, name: "Consultation", description: "We do software consultations" },
];

const main = async () => {
  for (let service of services) {
    await prisma.service.create({
      data: service,
    });
  }
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

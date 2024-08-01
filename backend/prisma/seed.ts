import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const services = [
  {
    id: 1,
    name: "Website Development",
    description: "We build websites",
    imageLink:
      "https://res.cloudinary.com/dow2macod/image/upload/v1722518835/portfolio/04e0a38e-9b1c-40aa-9e54-6fae00add309.png",
  },
  {
    id: 2,
    name: "Landing Pages",
    description: "We build landing pages",
    imageLink:
      "https://res.cloudinary.com/dow2macod/image/upload/v1722518896/portfolio/25242d50-0444-4564-84a9-dc4ec9e9cf36.png",
  },
  {
    id: 3,
    name: "Software Solutions",
    description: "We do software solutions",
    imageLink:
      "https://res.cloudinary.com/dow2macod/image/upload/v1722518985/portfolio/f3f3c05e-eb10-4c05-9a56-f2fb1fd3bec0.png",
  },
  {
    id: 4,
    name: "Consultation",
    description: "We do software consultations",
    imageLink:
      "https://res.cloudinary.com/dow2macod/image/upload/v1722519012/portfolio/facb458d-4dfe-4cb9-a6aa-f9069d7681fa.png",
  },
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

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.update({
    where: { id: 1 },
    data: {
      name: "Sachin",
    },
  });
}

main()
  .then(async () => {
    console.log("Update Done !!");
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
  });

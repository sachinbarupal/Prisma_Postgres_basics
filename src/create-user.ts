import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// To get the logs
// const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
  await prisma.user.create({
    data: {
      email: "ashok@gmail.com",
      name: "ashok",
    },
  });
}

main()
  .then(async () => {
    console.log("Insert Done !!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.update({
    where: { id: 1 },
    data: {
      posts: {
        deleteMany: {
          published: false,
        },
      },
    },
  });
}

main()
  .then(async () => {
    console.log("Delete Done !!");
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
  });

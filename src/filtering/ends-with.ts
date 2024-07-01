import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
  const users = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "gmail.com",
      },
      posts: {
        some: {
          published: true,
        },
      },
    },

    include: {
      posts: {
        where: {
          published: true,
        },
      },
    },
  });

  console.log(users);
}

main()
  .then(async () => {
    console.log("Filter Done !!");
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
  });

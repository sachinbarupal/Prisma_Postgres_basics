import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title: "Title of Post",
      content: "Content of Post",
      // published: true,

      // Both are fine
      // authorId: 1,
      author: {
        connect: {
          id: 2,
        },
      },
    },
  });
}

main()
  .then(async () => {
    console.log("Insert Done !!");
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
  });

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const posts = await prisma.post.findMany({
    take: 2,
    skip: 2,
  });
  console.log(posts);
}

main()
  .then(async () => {
    console.log("Fetch Done !!");
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
  });

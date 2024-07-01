import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

async function main() {
  const posts = await prisma.post.findMany({
    take: 2,
    skip: 2,
  });
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

prisma.$on("query", async (e) => {
  console.log(`${e.query} ${e.params}`);
});

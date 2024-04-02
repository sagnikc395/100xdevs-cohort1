//filter by users who are gmail.com
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["info", "query"],
});
async function main() {
  const res = await prisma.post.findMany({
    take: 2, //limit
    skip: 0, //offset
  });

  console.log(res);
}

main()
  .then(async () => {
    console.log(`Done with the query!`);
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

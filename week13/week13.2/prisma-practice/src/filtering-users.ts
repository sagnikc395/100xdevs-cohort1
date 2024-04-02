//filter by users who are gmail.com
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["info", "query"],
});

//delete all unpublished posts for the users
async function main() {
  const res = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "gmail.com",
      },
      posts: {
        //and has at least one post mentuioned
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

//create a new user

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["info", "query"],
});

async function main() {
  // get all the data
  const users = await prisma.user.findMany();
  console.log(users);

  //find single user
  const users2 = await prisma.user.findMany({
    where: {
      email: "sagnik321@gmail.com",
    },
  });
  console.log(users2);

  //finding the unique user.
  const uniqueUser = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: true,
    },
  });
  console.log(uniqueUser);
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

import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: { login: "user", passwordHash: "faagsafaefaf", rating: 1000 },
  });

  const user2 = await prisma.user.create({
    data: { login: "user 2", passwordHash: "faagsafsfsaefaf", rating: 700 },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

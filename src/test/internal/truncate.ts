import { prisma } from "@INFRA/DB";

export const truncate = () =>
  prisma.$transaction([
    prisma.$executeRaw`TRUNCATE TABLE re_agents cascade`,
    prisma.$executeRaw`TRUNCATE TABLE business_users cascade`,
    prisma.$executeRaw`TRUNCATE TABLE customers cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE users cascade;`
  ]);

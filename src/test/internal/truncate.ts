import { prisma } from "@INFRA/DB";

export const truncate = () =>
  prisma.$transaction([
    prisma.$executeRaw`TRUNCATE TABLE real_estate_agents cascade`,
    prisma.$executeRaw`TRUNCATE TABLE customers cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE users cascade;`
  ]);

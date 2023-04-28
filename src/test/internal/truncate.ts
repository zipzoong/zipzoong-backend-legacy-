import { prisma } from "@INFRA/DB";

export const truncate = () =>
  prisma.$transaction([
    prisma.$executeRaw`TRUNCATE TABLE super_expertises cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE sub_expertises cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE expert_super_categories cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE expert_sub_categories cascade;`,

    prisma.$executeRaw`TRUNCATE TABLE business_certifications cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE hs_introduction_images cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE hs_providers cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE re_agents cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE business_users cascade;`,

    prisma.$executeRaw`TRUNCATE TABLE customers cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE oauth_accessors cascade;`,

    prisma.$executeRaw`TRUNCATE TABLE agreement_acceptances cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE agreements cascade;`,

    prisma.$executeRaw`TRUNCATE TABLE users cascade;`
  ]);

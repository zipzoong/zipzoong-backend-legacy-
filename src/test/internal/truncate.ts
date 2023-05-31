import { prisma } from "@INFRA/DB";

export const truncate = () =>
  prisma.$transaction([
    prisma.$executeRaw`TRUNCATE TABLE phone_verifications cascade;`,

    prisma.$executeRaw`TRUNCATE TABLE zipzoong_care_consultation_time_checks cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE zipzoong_care_service_checks cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE zipzoong_care_requests cascade;`,

    prisma.$executeRaw`TRUNCATE TABLE sub_expertises cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE service_super_categories cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE service_sub_categories cascade;`,

    prisma.$executeRaw`TRUNCATE TABLE business_certification_images cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE hs_example_images cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE hs_providers cascade;`,

    prisma.$executeRaw`TRUNCATE TABLE re_properties cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE re_property_categories cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE re_property_sub_categories cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE re_property_middle_categories cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE re_property_super_categories cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE re_agents cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE business_users cascade;`,

    prisma.$executeRaw`TRUNCATE TABLE customers cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE oauth_accounts cascade;`,

    prisma.$executeRaw`TRUNCATE TABLE agreement_acceptances cascade;`,
    prisma.$executeRaw`TRUNCATE TABLE agreements cascade;`,

    prisma.$executeRaw`TRUNCATE TABLE users cascade;`
  ]);

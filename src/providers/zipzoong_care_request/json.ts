import { Prisma } from "@PRISMA";

export namespace Json {
  export const findInclude = () =>
    ({
      requester: { include: { base: true } },
      service_checks: { include: { service_super_category: true } },
      consultation_time_checks: true
    } satisfies Prisma.ZipzoongCareRequestModelInclude);
}

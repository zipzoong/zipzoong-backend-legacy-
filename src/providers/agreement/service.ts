import { IAgreement } from "@DTO/agreement";
import { pipe, toArray, filter, map } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { getISOString, isActive } from "@UTIL";

export namespace Service {
  export const getList = async ({
    target_type
  }: IAgreement.ISearch): Promise<IAgreement[]> =>
    pipe(
      target_type,

      async (ins) =>
        prisma.agreementModel.findMany({
          where: { target_type: { in: ins } }
        }),

      filter(isActive),

      map((agreement) => ({
        id: agreement.id,
        title: agreement.title,
        content: agreement.content,
        target_type: agreement.target_type,
        is_required: agreement.is_required,
        created_at: getISOString(agreement.created_at),
        updated_at: getISOString(agreement.updated_at)
      })),

      toArray
    );
}

import { IAgreement } from "@DTO/agreement";
import { pipe, toArray, filter, map } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { getISOString, isActive } from "@UTIL";

export namespace Service {
  export const getList = async (
    input: IAgreement.ISearch
  ): Promise<IAgreement[]> =>
    pipe(
      input.filter,

      async (ins) =>
        prisma.agreementModel.findMany({
          where: { user_type: { in: ins } }
        }),

      filter(isActive),

      map((agreement) => ({
        id: agreement.id,
        title: agreement.title,
        content: agreement.content,
        user_type: agreement.user_type,
        is_required: agreement.is_required,
        created_at: getISOString(agreement.created_at),
        updated_at: getISOString(agreement.updated_at)
      })),

      toArray
    );
}

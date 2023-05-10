import { IAgreement } from "@DTO/agreement";
import { prisma } from "@INFRA/DB";
import { getISOString } from "@UTIL";

export namespace Service {
  export const getList = async (
    input: IAgreement.ISearch
  ): Promise<IAgreement.IResponse[]> => {
    const model_list = await prisma.agreementModel.findMany({
      where: { user_type: { in: input.filter } }
    });

    return model_list.map(
      ({ id, title, content, user_type, created_at, updated_at }) => ({
        id,
        title,
        content,
        user_type,
        created_at: getISOString(created_at),
        updated_at: getISOString(updated_at)
      })
    );
  };
}

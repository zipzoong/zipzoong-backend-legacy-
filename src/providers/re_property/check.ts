import { IREAgent } from "@DTO/user/re_agent";
import { prisma } from "@INFRA/DB";
import { isActive } from "@UTIL";
import { Exception } from "./exception";

export namespace Check {
  /** @throw BadRequest */
  export const subCategoryValid = async (sub_category_ids: string[]) => {
    const sub_category_set = new Set(sub_category_ids);

    const list = (
      await prisma.rEPropertySubCategoryModel.findMany({
        where: { id: { in: [...sub_category_set] } }
      })
    ).filter(isActive);

    if (list.length !== sub_category_set.size) throw Exception.InvalidCategory;
  };

  export const verify = (agent: IREAgent.IPrivate) => {
    if (!agent.is_verified) throw Exception.UnverifiedAgent;
    return;
  };
}

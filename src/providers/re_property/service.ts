import { IPaginatedResponse } from "@DTO/common";
import { IREProperty } from "@DTO/re_property";
import { prisma } from "@INFRA/DB";
import REAgent from "@PROVIDER/user/re_agent";
import { Check } from "./check";
import { Json } from "./json";
import { Map } from "./map";

export namespace Service {
  export const getList = async (
    input: IREProperty.ISearch
  ): Promise<IPaginatedResponse<IREProperty>> => {
    const take = 30;
    const page = input.page ?? 1;
    const result = await prisma.rEProertyModel.findMany({
      where: {
        is_deleted: false,
        agent: {
          id: input.agent_id,
          base: { is_verified: true, base: { is_deleted: false } }
        },
        categories: {
          some: {
            is_deleted: false,
            sub_category: {
              name: input.sub_category_name,
              middle_category: {
                name: input.middle_category_name,
                super_category: { name: input.super_category_name }
              }
            }
          }
        }
      },
      take,
      skip: (page - 1) * take,
      include: Json.findInclude()
    });

    return { data: result.map(Map.rEProperty), page };
  };

  export const createMany = async ({
    data,
    user_id
  }: {
    data: IREProperty.ICreateManyRequest["data"];
    user_id: string;
  }): Promise<void> => {
    const me = await REAgent.Service.Me.get(user_id); // authorize

    Check.verify(me);

    await Check.subCategoryValid(
      data.flatMap(({ sub_category_ids }) => sub_category_ids)
    );

    const createData = data.map((input) =>
      Json.createData({ ...input, agent_id: user_id })
    );
    const createManyData = Json.createManyData(createData);

    await prisma.$transaction([
      prisma.rEProertyModel.createMany({
        data: createManyData.property_create_many_input
      }),
      prisma.rEPropertyCategoryModel.createMany({
        data: createManyData.property_category_create_many_input
      })
    ]);
    return;
  };
}

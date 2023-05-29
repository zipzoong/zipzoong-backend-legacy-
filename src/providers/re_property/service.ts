import { Result } from "@UTIL";
import { IREProperty } from "@DTO/re_property";
import { filter, map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import Authentication from "@PROVIDER/authentication";
import REAgent from "@PROVIDER/user/re_agent";
import { Check } from "./check";
import { Json } from "./json";
import { Map } from "./map";

export namespace Service {
  export const getList = ({
    page = 1,
    sub_category_id,
    middle_category_id,
    super_category_id
  }: IREProperty.ISearch): Promise<IREProperty.IPaginatedResponse> =>
    pipe(
      30,

      async (take) =>
        prisma.rEPropertyModel.findMany({
          where: {
            is_deleted: false,
            is_visible: true,
            re_agent: {
              base: { is_verified: true, base: { is_deleted: false } }
            },
            categories: {
              some: {
                is_deleted: false,
                sub_category_id,
                sub_category: {
                  middle_category_id,
                  middle_category: { super_category_id }
                }
              }
            }
          },
          select: Json.findPublicSelect(),
          take,
          skip: (page - 1) * take
        }),

      map(Map.entityPublic),

      filter(Result.Ok.is),

      map(Result.Ok.flatten),

      toArray,

      (data) => ({ data, page })
    );

  export const createMany = async ({
    input,
    user_id
  }: {
    input: IREProperty.ICreateManyRequest["data"];
    user_id: string;
  }): Promise<void> => {
    const tx = prisma;
    const me = await REAgent.Service.Me.get({ user_id, tx }); // authorize
    Authentication.Check.verifyUser(me);

    await Check.subCategoryValid({
      sub_category_ids: input.flatMap(
        ({ sub_category_ids }) => sub_category_ids
      ),
      tx
    });

    const createData = input.map((data) =>
      Json.createData({ ...data, re_agent_id: user_id })
    );
    const createManyData = Json.createManyData(createData);

    await tx.rEPropertyModel.createMany({
      data: createManyData.property_create_many_input
    });
    await tx.rEPropertyCategoryModel.createMany({
      data: createManyData.property_category_create_many_input
    });
  };
}

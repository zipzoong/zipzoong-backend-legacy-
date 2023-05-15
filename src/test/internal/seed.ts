import { IHSProvider } from "@DTO/user/hs_provider";
import { IREAgent } from "@DTO/user/re_agent";
import { prisma } from "@INFRA/DB";
import { ArrayUtil, RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { AgreementUserType, ExpertBusinessType, Prisma } from "@PRISMA";
import HSProvider from "@PROVIDER/user/hs_provider";
import REAgent from "@PROVIDER/user/re_agent";
import { agreements, expert_super_categories } from "@SDK";
import { randomUUID } from "crypto";
import typia from "typia";

interface IAgreement<T extends AgreementUserType> {
  /** @format uuid */
  id: string;
  title: string;
  user_type: T;
  content: string;
  is_deleted: false;
  created_at: "2023-05-02T07:27:30.128Z";
  updated_at: "2023-05-02T07:27:30.128Z";
  deleted_at: null;
}

interface ISuperExpertCategory<T extends ExpertBusinessType> {
  /** @format uuid */
  id: string;
  created_at: "2023-05-02T07:27:30.128Z";
  updated_at: "2023-05-02T07:27:30.128Z";
  is_deleted: false;
  deleted_at: null;
  name: string;
  business_type: T;
}

export const seed = async (connection: IConnection) => {
  const createArray = (len: number): number[] => new Array(len).fill(1);
  const createAllType = typia.createRandom<IAgreement<"all">>();
  const createHSSuperExpertCategory =
    typia.createRandom<ISuperExpertCategory<"HS">>();
  const createRESuperExpertCategory =
    typia.createRandom<ISuperExpertCategory<"RE">>();

  const super_list = [
    ...createArray(5).map(createRESuperExpertCategory),
    ...createArray(5).map(createHSSuperExpertCategory)
  ];

  const property_super_category_ids = createArray(5).map(() => randomUUID());
  const property_mid_category_ids = property_super_category_ids.map(() =>
    createArray(3).map(() => randomUUID())
  );

  await prisma.$transaction([
    prisma.agreementModel.createMany({
      data: createArray(5).map(createAllType)
    }),

    prisma.expertSuperCategoryModel.createMany({
      data: super_list
    }),

    prisma.expertSubCategoryModel.createMany({
      data: super_list.flatMap(({ id: super_category_id }) => {
        return createArray(5).map(() => ({
          id: randomUUID(),
          super_category_id,
          name: randomUUID(),
          created_at: "2023-05-02T07:27:30.128Z",
          updated_at: "2023-05-02T07:27:30.128Z",
          is_deleted: false,
          deleted_at: null
        }));
      })
    }),

    prisma.rEPropertySuperCategoryModel.createMany({
      data: property_super_category_ids.map((id) => ({
        id,
        name: RandomGenerator.name(2),
        created_at: "2023-05-02T07:27:30.128Z",
        updated_at: "2023-05-02T07:27:30.128Z",
        is_deleted: false,
        deleted_at: null
      }))
    }),

    prisma.rEPropertyMiddleCategoryModel.createMany({
      data: property_mid_category_ids
        .map((ids, idx) =>
          ids.map((id) => ({
            id,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            super_category_id: property_super_category_ids[idx]!,
            name: RandomGenerator.name(2),
            created_at: "2023-05-02T07:27:30.128Z",
            updated_at: "2023-05-02T07:27:30.128Z",
            is_deleted: false,
            deleted_at: null
          }))
        )
        .flat()
    }),

    prisma.rEPropertySubCategoryModel.createMany({
      data: property_mid_category_ids.flat().map((middle_category_id) => ({
        id: randomUUID(),
        name: RandomGenerator.name(2),
        middle_category_id,
        created_at: "2023-05-02T07:27:30.128Z",
        updated_at: "2023-05-02T07:27:30.128Z",
        is_deleted: false,
        deleted_at: null
      }))
    }),

    prisma.businessRateCategoryModel.createMany({
      data: await ArrayUtil.asyncRepeat(5)(async () =>
        typia.random<{
          /** @format uuid */
          id: string;
          name: string;
          business_type: "all";
          created_at: "2023-05-02T07:27:30.128Z";
          updated_at: "2023-05-02T07:27:30.128Z";
          is_deleted: false;
          deleted_at: null;
        }>()
      )
    }),

    prisma.businessRateCategoryModel.createMany({
      data: await ArrayUtil.asyncRepeat(5)(async () =>
        typia.random<{
          /** @format uuid */
          id: string;
          name: string;
          business_type: "RE";
          created_at: "2023-05-02T07:27:30.128Z";
          updated_at: "2023-05-02T07:27:30.128Z";
          is_deleted: false;
          deleted_at: null;
        }>()
      )
    }),

    prisma.businessRateCategoryModel.createMany({
      data: await ArrayUtil.asyncRepeat(5)(async () =>
        typia.random<{
          /** @format uuid */
          id: string;
          name: string;
          business_type: "HS";
          created_at: "2023-05-02T07:27:30.128Z";
          updated_at: "2023-05-02T07:27:30.128Z";
          is_deleted: false;
          deleted_at: null;
        }>()
      )
    })
  ]);

  await seedHSProviders(connection);
  await seedREAgents(connection);

  await prisma.businessUserModel.updateMany({ data: { is_verified: true } });
};

export const seedHSProviders = async (connection: IConnection) => {
  const agreement_list = (
    await agreements.getList(connection, {
      filter: ["all", "business", "HS"]
    })
  ).map(({ id }) => id);
  const super_categories = await expert_super_categories.getList(connection, {
    filter: ["HS"]
  });
  const createProviderData = typia.createRandom<IHSProvider.ICreate>();

  const queries: Prisma.PrismaPromise<unknown>[] = [];

  ArrayUtil.asyncRepeat(10)(() =>
    ArrayUtil.asyncForEach(super_categories)(async (category) => {
      const input = createProviderData();
      input.acceptant_agreement_ids = agreement_list;
      input.sub_expertise_ids = category.sub_categories
        .slice(0, 2)
        .map(({ id }) => id);

      const data = HSProvider.Json.createData(input);

      queries.push(prisma.hSProviderModel.create({ data }));
    })
  );

  await prisma.$transaction(queries);
};

export const seedREAgents = async (connection: IConnection) => {
  const agreement_list = (
    await agreements.getList(connection, {
      filter: ["all", "business", "RE"]
    })
  ).map(({ id }) => id);
  const super_categories = await expert_super_categories.getList(connection, {
    filter: ["RE"]
  });

  const createAgentData = typia.createRandom<IREAgent.ICreate>();

  const queries: Prisma.PrismaPromise<unknown>[] = [];

  await ArrayUtil.asyncRepeat(10)(() =>
    ArrayUtil.asyncForEach(super_categories)(async (category) => {
      const input = createAgentData();

      input.acceptant_agreement_ids = agreement_list;
      input.sub_expertise_ids = category.sub_categories
        .slice(0, 2)
        .map(({ id }) => id);

      const data = REAgent.Json.createData(input);

      queries.push(prisma.rEAgentModel.create({ data }));

      const agent_id = data.base.create.base.create.id;

      const properties = new Array(10).fill(1).map(() => ({
        id: randomUUID(),
        name: RandomGenerator.name(3),
        main_image_url: "",
        agent_id,
        created_at: "2023-05-02T07:27:30.128Z",
        updated_at: "2023-05-02T07:27:30.128Z",
        is_deleted: false,
        deleted_at: null
      }));

      const sub_categories = await prisma.rEPropertySubCategoryModel.findMany();

      queries.push(
        prisma.rEProertyModel.createMany({
          data: properties
        })
      );

      queries.push(
        prisma.rEPropertyCategoryModel.createMany({
          data: properties.map(({ id: re_property_id }) => ({
            id: randomUUID(),
            re_property_id,
            sub_category_id: RandomGenerator.pick(sub_categories).id,
            created_at: "2023-05-02T07:27:30.128Z",
            updated_at: "2023-05-02T07:27:30.128Z",
            is_deleted: false,
            deleted_at: null
          }))
        })
      );
    })
  );

  await prisma.$transaction(queries);
};

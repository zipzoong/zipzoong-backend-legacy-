import { IHSProvider } from "@DTO/user/hs_provider";
import { IREAgent } from "@DTO/user/re_agent";
import { prisma } from "@INFRA/DB";
import { ArrayUtil } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { AgreementUserType, ExpertBusinessType, Prisma } from "@PRISMA";
import { HSProvider } from "@PROVIDER/cores/user/hs_provider";
import { REAgent } from "@PROVIDER/cores/user/re_agent";
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

      const data = HSProvider.json.createData(input);

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

      const data = REAgent.json.createData(input);

      queries.push(prisma.rEAgentModel.create({ data }));
    })
  );

  await prisma.$transaction(queries);
};

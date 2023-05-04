import { IHSProvider, IREAgent } from "@DTO/user";
import { prisma } from "@INFRA/DB";
import { ArrayUtil } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { AgreementUserType, ExpertBusinessType, Prisma } from "@PRISMA";
import { createUserQuery } from "@PROVIDER/services/authentication/create-user.query";
import { agreements, expert_categories } from "@SDK";
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
      data: super_list.flatMap(({ id: super_id }) => {
        return createArray(5).map(() => ({
          id: randomUUID(),
          super_id,
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
  const create = typia.createRandom<
    IHSProvider.ICreateRequest & {
      /** @format email */
      email?: string;
      phone: string;
    }
  >();

  const agreement_list = (
    await agreements.getList(connection, {
      filter: ["all", "business", "HS"]
    })
  ).map(({ id }) => id);
  const super_categories = await expert_categories.getSuperCategoryList(
    connection,
    { filter: ["HS"] }
  );

  const queries: Prisma.PrismaPromise<unknown>[] = [];

  await ArrayUtil.asyncRepeat(10, () =>
    ArrayUtil.asyncForEach(super_categories, async (category) => {
      const input = create();
      input.email_access_code = undefined;
      input.phone_access_code = undefined;
      input.agreement_acceptances = agreement_list;
      input.super_expertise_id = category.id;
      input.sub_expertise_ids = category.sub_categories
        .slice(0, 2)
        .map(({ id }) => id);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, ...list] = createUserQuery(input);
      queries.push(...list);
    })
  );

  await prisma.$transaction(queries);
};

export const seedREAgents = async (connection: IConnection) => {
  const create = typia.createRandom<
    IREAgent.ICreateRequest & {
      /** @format email */
      email?: string;
      phone: string;
    }
  >();

  const agreement_list = (
    await agreements.getList(connection, {
      filter: ["all", "business", "RE"]
    })
  ).map(({ id }) => id);
  const super_categories = await expert_categories.getSuperCategoryList(
    connection,
    { filter: ["RE"] }
  );

  const queries: Prisma.PrismaPromise<unknown>[] = [];

  await ArrayUtil.asyncRepeat(10, () =>
    ArrayUtil.asyncForEach(super_categories, async (category) => {
      const input = create();
      input.email_access_code = undefined;
      input.phone_access_code = undefined;
      input.agreement_acceptances = agreement_list;
      input.super_expertise_id = category.id;
      input.sub_expertise_ids = category.sub_categories
        .slice(0, 2)
        .map(({ id }) => id);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, ...list] = createUserQuery(input);
      queries.push(...list);
    })
  );

  await prisma.$transaction(queries);
};

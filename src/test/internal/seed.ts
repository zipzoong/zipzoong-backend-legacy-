import { prisma } from "@INFRA/DB";
import { AgreementUserType, ExpertBusinessType } from "@PRISMA";
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

export const seed = async () => {
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
};

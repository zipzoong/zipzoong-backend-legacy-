import { IBusinessUser } from "@DTO/user/business_user";
import { IHSProvider } from "@DTO/user/hs_provider";
import { identity, map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { Prisma } from "@PRISMA";
import Authentication from "@PROVIDER/authentication";
import { toThrow } from "@UTIL";
import User from "../user";
import { Json } from "./json";
import { Map } from "./map";

export namespace Service {
  export const getList = async ({
    page = 1,
    super_category_id,
    sub_category_id
  }: IBusinessUser.ISearch): Promise<IHSProvider.IPaginatedResponse> =>
    pipe(
      30,

      async (take) =>
        prisma.hSProviderModel.findMany({
          where: {
            base: {
              base: { is_deleted: false },
              is_verified: true,
              sub_expertises: {
                some: { sub_category_id, sub_category: { super_category_id } }
              }
            }
          },
          select: Json.findSummarySelect(),
          take,
          skip: (page - 1) * take
        }),

      map(Map.summaryEntity),

      toArray,

      (data) => ({ data, page })
    );

  export const getOne = ({
    user_id,
    tx = prisma
  }: {
    user_id: string;
    tx?: Prisma.TransactionClient;
  }): Promise<IHSProvider> =>
    User.Service.getOne({
      user_id,

      findFirst: async (id) =>
        tx.hSProviderModel.findFirst({
          where: { id },
          select: Json.findSelect()
        }),

      exception_for_notfound: User.Exception.NotFound,

      validator: (provider) =>
        !provider.base.is_verified || provider.base.base.is_deleted
          ? toThrow(User.Exception.NotFound)
          : provider,

      mapper: Map.entity
    });

  export namespace Me {
    export const get = ({
      user_id,
      tx = prisma
    }: {
      user_id: string;
      tx?: Prisma.TransactionClient;
    }): Promise<IHSProvider.IPrivate> =>
      User.Service.getOne({
        user_id,

        findFirst: async (id) =>
          tx.hSProviderModel.findFirst({
            where: { id },
            select: Json.findPrivateSelect()
          }),

        exception_for_notfound: Authentication.Exception.MeNotFound,

        validator: identity,

        mapper: Map.privateEntity
      });
  }
}

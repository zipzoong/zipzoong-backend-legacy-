import { IPaginatedResponse } from "@DTO/common";
import { IBusinessUser } from "@DTO/user/business_user";
import { IHSProvider } from "@DTO/user/hs_provider";
import { identity, map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { toThrow } from "@UTIL";
import User from "../user";
import { Json } from "./json";
import { Map } from "./map";

export namespace Service {
  export const getList = async ({
    page = 1,
    super_category_name,
    sub_category_name
  }: IBusinessUser.ISearch): Promise<IPaginatedResponse<IHSProvider>> =>
    pipe(
      30,

      async (take) =>
        prisma.hSProviderModel.findMany({
          where: {
            base: {
              base: { is_deleted: false },
              is_verified: true,
              sub_expertises: {
                some: {
                  sub_category: {
                    name: sub_category_name,
                    super_category: { name: super_category_name }
                  }
                }
              }
            }
          },
          include: Json.findInclude(),
          take,
          skip: (page - 1) * take
        }),

      map(Map.hSProvider),

      toArray,

      (data) => ({ page, data })
    );

  export const getOne = (user_id: string): Promise<IHSProvider> =>
    User.Service.getOne({
      user_id,

      findFirst: async (id) =>
        prisma.hSProviderModel.findFirst({
          where: { id },
          include: Json.findInclude()
        }),

      exception_for_notfound: User.Exception.UserNotFound,

      validator: (provider) =>
        !provider.base.is_verified || provider.base.base.is_deleted
          ? toThrow(User.Exception.UserNotFound)
          : provider,

      mapper: Map.hSProvider
    });

  export namespace Me {
    export const get = (user_id: string): Promise<IHSProvider.IPrivate> =>
      User.Service.getOne({
        user_id,

        findFirst: async (id) =>
          prisma.hSProviderModel.findFirst({
            where: { id },
            include: Json.findPrivateInclude()
          }),

        exception_for_notfound: User.Exception.MeNotFound,

        validator: identity,

        mapper: Map.privateHSProvider
      });
  }
}

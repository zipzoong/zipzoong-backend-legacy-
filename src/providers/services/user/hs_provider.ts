import { IPaginatedResponse } from "@DTO/common";
import { IBusinessUser } from "@DTO/user/business_user";
import { IHSProvider } from "@DTO/user/hs_provider";
import { identity, map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { HSProvider } from "@PROVIDER/cores/user/hs_provider";
import { toThrow } from "@UTIL";
import { UserCommonService } from "./common";
import { UserCommonException } from "./exception";

export namespace HSProviderService {
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
          include: HSProvider.json.findInclude(),
          take,
          skip: (page - 1) * take
        }),

      map(HSProvider.map),

      toArray,

      (data) => ({ page, data })
    );

  export const getOne = (user_id: string): Promise<IHSProvider> =>
    UserCommonService.getOne({
      user_id,

      findFirst: async (id) =>
        prisma.hSProviderModel.findFirst({
          where: { id },
          include: HSProvider.json.findInclude()
        }),

      exception_for_notfound: UserCommonException.UserNotFound,

      validator: (provider) =>
        !provider.base.is_verified || provider.base.base.is_deleted
          ? toThrow(UserCommonException.UserNotFound)
          : provider,

      mapper: HSProvider.map
    });

  export namespace Me {
    export const get = (user_id: string): Promise<IHSProvider.IPrivate> =>
      UserCommonService.getOne({
        user_id,

        findFirst: async (id) =>
          prisma.hSProviderModel.findFirst({
            where: { id },
            include: HSProvider.json.findPrivateInclude()
          }),

        exception_for_notfound: UserCommonException.MeNotFound,

        validator: identity,

        mapper: HSProvider.mapPrivate
      });
  }
}

import { IPaginatedResponse } from "@DTO/common";
import { IBusinessUser } from "@DTO/user/business_user";
import { IREAgent } from "@DTO/user/re_agent";
import { identity, isUndefined, map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { REAgent } from "@PROVIDER/cores/user/re_agent";
import { toThrow } from "@UTIL";
import { UserCommonService } from "./common";
import { UserCommonException } from "./exception";

export namespace REAgentService {
  export const getList = async ({
    page = 1,
    super_category_name,
    sub_category_name
  }: IBusinessUser.ISearch): Promise<IPaginatedResponse<IREAgent>> =>
    pipe(
      30,

      async (take) =>
        prisma.rEAgentModel.findMany({
          where: {
            base: {
              base: { is_deleted: false },
              is_verified: true,
              ...(isUndefined(super_category_name)
                ? {}
                : { super_expertise: { name: super_category_name } }),
              ...(isUndefined(sub_category_name)
                ? {}
                : {
                    sub_expertises: {
                      some: { category: { name: sub_category_name } }
                    }
                  })
            }
          },
          include: REAgent.json.findInclude(),
          take,
          skip: (page - 1) * take
        }),

      map(REAgent.map),

      toArray,

      (data) => ({ page, data })
    );

  export const getOne = (user_id: string): Promise<IREAgent> =>
    UserCommonService.getOne({
      user_id,

      findFirst: async (id) =>
        prisma.rEAgentModel.findFirst({
          where: { id },
          include: REAgent.json.findInclude()
        }),

      exception_for_notfound: UserCommonException.UserNotFound,

      validator: (provider) =>
        !provider.base.is_verified || provider.base.base.is_deleted
          ? toThrow(UserCommonException.UserNotFound)
          : provider,

      mapper: REAgent.map
    });

  export const getMe = (user_id: string): Promise<IREAgent.IPrivate> =>
    UserCommonService.getOne({
      user_id,

      findFirst: async (id) =>
        prisma.rEAgentModel.findFirst({
          where: { id },
          include: REAgent.json.findPrivateInclude()
        }),

      exception_for_notfound: UserCommonException.MeNotFound,

      validator: identity,

      mapper: REAgent.mapPrivate
    });
}

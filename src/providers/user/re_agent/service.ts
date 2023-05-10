import { IPaginatedResponse } from "@DTO/common";
import { IBusinessUser } from "@DTO/user/business_user";
import { IREAgent } from "@DTO/user/re_agent";
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
  }: IBusinessUser.ISearch): Promise<IPaginatedResponse<IREAgent>> =>
    pipe(
      30,

      async (take) =>
        prisma.rEAgentModel.findMany({
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

      map(Map.rEAgent),

      toArray,

      (data) => ({ page, data })
    );

  export const getOne = (user_id: string): Promise<IREAgent> =>
    User.Service.getOne({
      user_id,

      findFirst: async (id) =>
        prisma.rEAgentModel.findFirst({
          where: { id },
          include: Json.findInclude()
        }),

      exception_for_notfound: User.Exception.UserNotFound,

      validator: (provider) =>
        !provider.base.is_verified || provider.base.base.is_deleted
          ? toThrow(User.Exception.UserNotFound)
          : provider,

      mapper: Map.rEAgent
    });

  export namespace Me {
    /** @throw Forbidden */
    export const get = (user_id: string): Promise<IREAgent.IPrivate> =>
      User.Service.getOne({
        user_id,

        findFirst: async (id) =>
          prisma.rEAgentModel.findFirst({
            where: { id },
            include: Json.findPrivateInclude()
          }),

        exception_for_notfound: User.Exception.MeNotFound,

        validator: identity,

        mapper: Map.privateREAgent
      });

    export namespace Property {
      export const getList = ({
        user_id,
        page = 1
      }: {
        user_id: string;
        page?: number;
      }): Promise<IPaginatedResponse<IREAgent.IProperty>> =>
        pipe(
          get(user_id),

          async (agent) =>
            prisma.rEProertyModel.findMany({
              where: { agent_id: agent.id, is_deleted: false },
              include: Json.findPropertyInclude(),
              take: 30,
              skip: 30 * (page - 1)
            }),

          // filter(isActive),

          map(Map.property),

          toArray,

          (data) => ({ page, data })
        );
    }
  }

  export namespace Property {
    export const getList = ({
      user_id,
      page = 1
    }: {
      user_id: string;
      page?: number;
    }): Promise<IPaginatedResponse<IREAgent.IProperty>> =>
      pipe(
        getOne(user_id),

        async (agent) =>
          prisma.rEProertyModel.findMany({
            where: { agent_id: agent.id, is_deleted: false },
            include: Json.findPropertyInclude(),
            take: 30,
            skip: 30 * (page - 1)
          }),

        // filter(isActive),

        map(Map.property),

        toArray,

        (data) => ({ page, data })
      );
  }
}

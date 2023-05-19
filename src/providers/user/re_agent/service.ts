import { IPaginatedResponse } from "@DTO/common";
import { IBusinessUser } from "@DTO/user/business_user";
import { IREAgent } from "@DTO/user/re_agent";
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
  }: IBusinessUser.ISearch): Promise<IPaginatedResponse<IREAgent.ISummary>> =>
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
                  sub_category_id,
                  sub_category: { super_category_id }
                }
              }
            }
          },
          select: Json.findSummarySelect(),
          take,
          skip: (page - 1) * take
        }),

      map(Map.summaryEntity),

      toArray,

      (data) => ({ page, data })
    );

  export const getOne = ({
    user_id,
    tx = prisma
  }: {
    user_id: string;
    tx?: Prisma.TransactionClient;
  }): Promise<IREAgent> =>
    User.Service.getOne({
      user_id,

      findFirst: async (id) =>
        tx.rEAgentModel.findFirst({
          where: { id },
          select: Json.findSelect()
        }),

      exception_for_notfound: User.Exception.NotFound,

      validator: (agent) =>
        !agent.base.is_verified || agent.base.base.is_deleted
          ? toThrow(User.Exception.NotFound)
          : agent,

      mapper: Map.entity
    });

  export namespace Me {
    /** @throw Forbidden */
    export const get = ({
      user_id,
      tx = prisma
    }: {
      user_id: string;
      tx?: Prisma.TransactionClient;
    }): Promise<IREAgent.IPrivate> =>
      User.Service.getOne({
        user_id,

        findFirst: async (id) =>
          tx.rEAgentModel.findFirst({
            where: { id },
            select: Json.findPrivateSelect()
          }),

        exception_for_notfound: Authentication.Exception.MeNotFound,

        validator: identity,

        mapper: Map.privateEntity
      });

    export namespace Property {
      export const getList = ({
        user_id,
        search: {
          page = 1,
          sub_category_id,
          middle_category_id,
          super_category_id
        }
      }: {
        user_id: string;
        search: IREAgent.IProperty.ISearch;
      }): Promise<IPaginatedResponse<IREAgent.IProperty>> =>
        pipe(
          get({ user_id }),

          Authentication.Check.verifyUser,

          async (agent) =>
            prisma.rEPropertyModel.findMany({
              where: {
                re_agent_id: agent.id,
                is_deleted: false,
                categories: {
                  some: {
                    id: sub_category_id,
                    sub_category: {
                      middle_category_id,
                      middle_category: { super_category_id }
                    }
                  }
                }
              },
              select: Json.findPropertySelect(),
              take: 30,
              skip: 30 * (page - 1)
            }),

          map(Map.property),

          toArray,

          (data) => ({ page, data })
        );
    }
  }

  export namespace Property {
    export const getList = ({
      user_id,
      search: {
        page = 1,
        sub_category_id,
        middle_category_id,
        super_category_id
      }
    }: {
      user_id: string;
      search: IREAgent.IProperty.ISearch;
    }): Promise<IPaginatedResponse<IREAgent.IProperty>> =>
      pipe(
        getOne({ user_id }),

        async (agent) =>
          prisma.rEPropertyModel.findMany({
            where: {
              re_agent_id: agent.id,
              is_deleted: false,
              categories: {
                some: {
                  id: sub_category_id,
                  sub_category: {
                    middle_category_id,
                    middle_category: { super_category_id }
                  }
                }
              }
            },
            select: Json.findPropertySelect(),
            take: 30,
            skip: 30 * (page - 1)
          }),

        map(Map.property),

        toArray,

        (data) => ({ page, data })
      );
  }
}

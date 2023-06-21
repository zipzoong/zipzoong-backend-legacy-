import { Mutable } from "@TYPE";
import { IBusinessUser } from "@DTO/user/business_user";
import { IREAgent } from "@DTO/user/re_agent";
import { filter, identity, map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { Prisma } from "@PRISMA";
import Authentication from "@PROVIDER/authentication";
import REProperty from "@PROVIDER/re_property";
import { isInActive, Result, toThrow } from "@UTIL";
import User from "../user";
import { Json } from "./json";
import { Map } from "./map";
import BusinessUser from "../business_user";

export namespace Service {
  export const getList = async ({
    page = 1,
    super_category_id,
    sub_category_id
  }: IBusinessUser.ISearch): Promise<IREAgent.IPaginatedResponse> =>
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

      map(Map.entitySummary),

      filter(Result.Ok.is),

      map(Result.Ok.flatten),

      toArray,

      (data) => ({ page, data })
    );

  export const getOne = ({
    user_id,
    tx = prisma
  }: {
    user_id: string;
    tx?: Prisma.TransactionClient;
  }): Promise<IREAgent.IPublic> =>
    User.Service.getOne({
      user_id,

      findFirst: async (id) =>
        tx.rEAgentModel.findFirst({
          where: { id },
          select: Json.findPublicSelect()
        }),

      exception_for_notfound: User.Exception.NotFound,

      validator: (agent) =>
        !agent.base.is_verified || isInActive(agent.base.base)
          ? toThrow(User.Exception.NotFound)
          : agent,

      mapper: Map.entityPublic
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
    }): Promise<IREAgent.IProperty.IPaginatedPublicResponse> =>
      pipe(
        getOne({ user_id }),

        async (agent) =>
          prisma.rEPropertyModel.findMany({
            where: {
              re_agent_id: agent.id,
              is_deleted: false,
              is_visible: true,
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
            select: REProperty.Json.findSummarySelect(),
            take: 30,
            skip: 30 * (page - 1)
          }),

        map(Map.propertyPublic),

        toArray,

        (data) => ({ page, data })
      );
  }

  export namespace Me {
    /** @throw Forbidden */
    export const get = async ({
      user_id,
      tx = prisma
    }: {
      user_id: string;
      tx?: Prisma.TransactionClient;
    }): Promise<IREAgent.IPrivate> => {
      const me: Mutable<IREAgent.IPrivate> = await User.Service.getOne({
        user_id,

        findFirst: async (id) =>
          tx.rEAgentModel.findFirst({
            where: { id },
            select: Json.findPrivateSelect()
          }),

        exception_for_notfound: Authentication.Exception.MeNotFound,

        validator: identity,

        mapper: Map.entityPrivate
      });
      me.business_certification_images = await Promise.all(
        me.business_certification_images.map(BusinessUser.Service.signUrl)
      );
      return me;
    };

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
      }): Promise<IREAgent.IProperty.IPaginatedPrivateResponse> =>
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
              select: REProperty.Json.findSummarySelect(),
              take: 30,
              skip: 30 * (page - 1)
            }),

          map(Map.propertyPrivate),

          toArray,

          (data) => ({ page, data })
        );
    }
  }
}

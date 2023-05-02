/* eslint-disable @typescript-eslint/no-unused-vars */
import { IREAgent } from "@DTO/user";
import { pipe, tap } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { REAgent } from "@PROVIDER/cores/user/re_agent";
import { isNull } from "@UTIL";
import { UserCommonService } from "./common";
import { UserCommonException } from "./exception";

export namespace REAgentService {
  export const getOne = async (user_id: string): Promise<IREAgent.IResponse> =>
    pipe(
      Promise.all([
        prisma.userModel.findFirst({ where: { id: user_id } }),
        prisma.businessUserModel.findFirst({ where: { id: user_id } }),
        prisma.rEAgentModel.findFirst({ where: { id: user_id } }),
        prisma.superExpertiseModel.findFirst({
          where: { business_user_id: user_id }
        }),
        prisma.subExpertiseModel.findMany({
          where: { business_user_id: user_id }
        })
      ]),

      ([
        userModel,
        businessModel,
        agentModel,
        superExpertiseModel,
        subExpertiseModels
      ]) => ({
        userModel,
        businessModel,
        agentModel,
        superExpertiseModel,
        subExpertiseModels
      }),

      ({
        userModel,
        businessModel,
        agentModel,
        superExpertiseModel,
        subExpertiseModels
      }) => {
        if (isNull(userModel) || isNull(businessModel) || isNull(agentModel))
          throw UserCommonException.UserNotFound;
        if (isNull(superExpertiseModel))
          throw Error(`REAgent super expertise missing, agent id: ${user_id}`);

        return {
          userModel,
          businessModel,
          agentModel,
          superExpertiseModel,
          subExpertiseModels
        };
      },

      REAgent.map,

      async ({
        super_expertise_id,
        sub_expertise_ids,
        is_deleted,
        deleted_at,
        ...response
      }): Promise<IREAgent.IResponse> => {
        const super_expertise = await prisma.expertSuperCategoryModel.findFirst(
          {
            where: { id: super_expertise_id }
          }
        );
        if (isNull(super_expertise))
          throw Error(
            `REAgent super expertise missing, category id: ${super_expertise_id}`
          );

        const sub_expertises = await prisma.expertSubCategoryModel.findMany({
          where: { id: { in: sub_expertise_ids } }
        });

        return {
          ...response,
          super_expertise: {
            id: super_expertise.id,
            name: super_expertise.name
          },
          sub_expertises: sub_expertises.map((item) => ({
            id: item.id,
            name: item.name
          }))
        };
      }
    );

  export const getMe = async (
    user_id: string
  ): Promise<IREAgent.IPrivateResponse> =>
    pipe(
      Promise.all([
        prisma.userModel.findFirst({ where: { id: user_id } }),
        prisma.businessUserModel.findFirst({ where: { id: user_id } }),
        prisma.rEAgentModel.findFirst({ where: { id: user_id } }),
        prisma.superExpertiseModel.findFirst({
          where: { business_user_id: user_id }
        }),
        prisma.subExpertiseModel.findMany({
          where: { business_user_id: user_id }
        })
      ]),

      ([
        userModel,
        businessModel,
        agentModel,
        superExpertiseModel,
        subExpertiseModels
      ]) => ({
        userModel,
        businessModel,
        agentModel,
        superExpertiseModel,
        subExpertiseModels
      }),

      ({
        userModel,
        businessModel,
        agentModel,
        superExpertiseModel,
        subExpertiseModels
      }) => {
        if (isNull(userModel) || isNull(businessModel) || isNull(agentModel))
          throw UserCommonException.MeNotFound;
        if (isNull(superExpertiseModel))
          throw Error(`REAgent super expertise missing, agent id: ${user_id}`);

        return {
          userModel,
          businessModel,
          agentModel,
          superExpertiseModel,
          subExpertiseModels
        };
      },

      REAgent.map,

      async ({
        is_deleted,
        deleted_at,
        super_expertise_id,
        sub_expertise_ids,
        ...response
      }): Promise<IREAgent.IPrivateResponse> => {
        const super_expertise = await prisma.expertSuperCategoryModel.findFirst(
          {
            where: { id: super_expertise_id }
          }
        );

        if (isNull(super_expertise))
          throw Error(
            `REAgent super expertise missing, category id: ${super_expertise_id}`
          );

        const sub_expertises = await prisma.expertSubCategoryModel.findMany({
          where: { id: { in: sub_expertise_ids } }
        });

        const agreement_acceptances =
          await UserCommonService.getAcceptantAgreementList(user_id);

        return {
          ...response,
          agreement_acceptances,
          super_expertise: {
            id: super_expertise.id,
            name: super_expertise.name
          },
          sub_expertises: sub_expertises.map((item) => ({
            id: item.id,
            name: item.name
          }))
        };
      }
    );
}

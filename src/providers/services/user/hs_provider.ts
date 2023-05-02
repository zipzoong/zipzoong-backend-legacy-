/* eslint-disable @typescript-eslint/no-unused-vars */
import { IDateTime, IPaginatedResponse, ISoftDeletable } from "@DTO/common";
import { IHSProvider } from "@DTO/user";
import { filter, map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import {
  BusinessUserModel,
  ExpertSuperCategoryModel,
  HSIntroductionImageModel,
  HSProviderModel,
  SubExpertiseModel,
  SuperExpertiseModel,
  UserModel
} from "@PRISMA";
import { BusinessUser } from "@PROVIDER/cores/user/business";
import { HSProvider } from "@PROVIDER/cores/user/hs_provider";
import { isNull, isUndefined, throwIf } from "@UTIL";
import { UserCommonService } from "./common";
import { UserCommonException } from "./exception";

export namespace HSProviderService {
  export const getList = async (
    input: IHSProvider.ISearch
  ): Promise<IPaginatedResponse<IHSProvider.IResponse>> => {
    const super_ids = (
      await prisma.expertSuperCategoryModel.findMany({
        where: { name: { in: input.super_expert_name } }
      })
    ).map(({ id }) => id);
    const sub_ids = (
      await prisma.expertSubCategoryModel.findMany({
        where: { name: { in: input.sub_expert_name } }
      })
    ).map(({ id }) => id);

    const page = input.page ?? 1;
    const take = 30;
    const start = take * (page - 1);
    const end = start + take;

    const provider_ids = [
      ...(
        await prisma.superExpertiseModel.findMany({
          where: { super_category_id: { in: super_ids } }
        })
      ).map(({ business_user_id }) => business_user_id),
      ...(
        await prisma.subExpertiseModel.findMany({
          where: { sub_category_id: { in: sub_ids } }
        })
      ).map(({ business_user_id }) => business_user_id)
    ].slice(start, end);

    const data: IHSProvider.IResponse[] = await pipe(
      Promise.all([
        prisma.hSProviderModel.findMany({
          where: { id: { in: provider_ids } },
          include: { base: { include: { base: true } } }
        }),
        prisma.superExpertiseModel.findMany({
          where: { business_user_id: { in: provider_ids } }
        }),
        prisma.subExpertiseModel.findMany({
          where: { business_user_id: { in: provider_ids } }
        }),
        prisma.hSIntroductionImageModel.findMany({
          where: { hs_provider_id: { in: provider_ids } }
        })
      ]),

      async ([
        providerModels,
        superExpertiseModels,
        subExpertiseModels,
        introductionImageModels
      ]) => {
        return {
          providerModels,
          superExpertiseModels,
          subExpertiseModels,
          introductionImageModels,
          superExpertiseCategories:
            await prisma.expertSuperCategoryModel.findMany({
              where: {
                id: {
                  in: superExpertiseModels.map(
                    ({ super_category_id }) => super_category_id
                  )
                }
              }
            }),
          subExpertiseCategories: await prisma.expertSubCategoryModel.findMany({
            where: {
              id: {
                in: subExpertiseModels.map(
                  ({ sub_category_id }) => sub_category_id
                )
              }
            }
          })
        };
      },

      ({
        providerModels,
        superExpertiseModels,
        subExpertiseModels,
        introductionImageModels,
        superExpertiseCategories,
        subExpertiseCategories
      }) => ({
        user_list: providerModels
          .map((providerModel) => ({
            providerModel: providerModel,
            businessModel: providerModel.base,
            userModel: providerModel.base.base,
            superExpertiseModel: superExpertiseModels.find(
              ({ business_user_id }) => business_user_id === providerModel.id
            ),
            subExpertiseModels: subExpertiseModels.filter(
              (models) => models.business_user_id === providerModel.id
            ),
            introductionImageModels: introductionImageModels.filter(
              (models) => models.hs_provider_id === providerModel.id
            )
          }))
          .filter(
            ({ superExpertiseModel }) => !isUndefined(superExpertiseModel)
          ) as {
          providerModel: HSProviderModel;
          businessModel: BusinessUserModel;
          userModel: UserModel;
          superExpertiseModel: SuperExpertiseModel;
          subExpertiseModels: SubExpertiseModel[];
          introductionImageModels: HSIntroductionImageModel[];
        }[],
        superExpertiseCategories,
        subExpertiseCategories
      }),

      ({ user_list, superExpertiseCategories, subExpertiseCategories }) => ({
        user_list: user_list
          .map(HSProvider.map)
          .filter((model) => !model.is_deleted)
          .filter(BusinessUser.isVerified),
        superExpertiseCategories,
        subExpertiseCategories
      }),

      ({ user_list, superExpertiseCategories, subExpertiseCategories }) =>
        user_list.map(
          ({
            is_deleted,
            deleted_at,
            super_expertise_id,
            sub_expertise_ids,
            ...provider
          }) => ({
            ...provider,
            super_expertise: superExpertiseCategories.find(
              (category) => category.id === super_expertise_id
            ),
            sub_expertises: subExpertiseCategories.filter((category) =>
              sub_expertise_ids.includes(category.id)
            )
          })
        ),

      filter((user) => !isUndefined(user.super_expertise)),

      map(({ sub_expertises, super_expertise, ...rest }) => {
        const expertise = super_expertise as ExpertSuperCategoryModel;

        return {
          ...rest,
          sub_expertises: sub_expertises.map((expert) => ({
            id: expert.id,
            name: expert.name
          })),
          super_expertise: {
            id: expertise.id,
            name: expertise.name
          }
        };
      }),

      toArray
    );

    return { page, data };
  };

  export const getOne = async (
    user_id: string
  ): Promise<IHSProvider.IResponse> =>
    pipe(
      Promise.all([
        prisma.userModel.findFirst({ where: { id: user_id } }),
        prisma.businessUserModel.findFirst({ where: { id: user_id } }),
        prisma.hSProviderModel.findFirst({ where: { id: user_id } }),
        prisma.superExpertiseModel.findFirst({
          where: { business_user_id: user_id }
        }),
        prisma.subExpertiseModel.findMany({
          where: { business_user_id: user_id }
        }),
        prisma.hSIntroductionImageModel.findMany({
          where: { hs_provider_id: user_id }
        })
      ]),

      ([
        userModel,
        businessModel,
        providerModel,
        superExpertiseModel,
        subExpertiseModels,
        introductionImageModels
      ]) => ({
        userModel,
        businessModel,
        providerModel,
        superExpertiseModel,
        subExpertiseModels,
        introductionImageModels
      }),

      ({
        userModel,
        businessModel,
        providerModel,
        superExpertiseModel,
        subExpertiseModels,
        introductionImageModels
      }) => {
        if (isNull(userModel) || isNull(businessModel) || isNull(providerModel))
          throw UserCommonException.UserNotFound;
        if (isNull(superExpertiseModel))
          throw Error(`REAgent super expertise missing, agent id: ${user_id}`);

        return {
          userModel,
          businessModel,
          providerModel,
          superExpertiseModel,
          subExpertiseModels,
          introductionImageModels
        };
      },

      HSProvider.map,

      throwIf<IHSProvider & IDateTime & ISoftDeletable>(
        BusinessUser.isUnVerified,
        UserCommonException.UserNotFound
      ),

      async ({
        super_expertise_id,
        sub_expertise_ids,
        is_deleted,
        deleted_at,
        ...response
      }): Promise<IHSProvider.IResponse> => {
        const super_expertise = await prisma.expertSuperCategoryModel.findFirst(
          {
            where: { id: super_expertise_id }
          }
        );
        if (isNull(super_expertise))
          throw Error(
            `HSProvider super expertise missing, category id: ${super_expertise_id}`
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
  ): Promise<IHSProvider.IPrivateResponse> =>
    pipe(
      Promise.all([
        prisma.userModel.findFirst({ where: { id: user_id } }),
        prisma.businessUserModel.findFirst({ where: { id: user_id } }),
        prisma.hSProviderModel.findFirst({ where: { id: user_id } }),
        prisma.superExpertiseModel.findFirst({
          where: { business_user_id: user_id }
        }),
        prisma.subExpertiseModel.findMany({
          where: { business_user_id: user_id }
        }),
        prisma.hSIntroductionImageModel.findMany({
          where: { hs_provider_id: user_id }
        })
      ]),

      ([
        userModel,
        businessModel,
        providerModel,
        superExpertiseModel,
        subExpertiseModels,
        introductionImageModels
      ]) => ({
        userModel,
        businessModel,
        providerModel,
        superExpertiseModel,
        subExpertiseModels,
        introductionImageModels
      }),

      ({
        userModel,
        businessModel,
        providerModel,
        superExpertiseModel,
        subExpertiseModels,
        introductionImageModels
      }) => {
        if (isNull(userModel) || isNull(businessModel) || isNull(providerModel))
          throw UserCommonException.MeNotFound;
        if (isNull(superExpertiseModel))
          throw Error(`REAgent super expertise missing, agent id: ${user_id}`);

        return {
          userModel,
          businessModel,
          providerModel,
          superExpertiseModel,
          subExpertiseModels,
          introductionImageModels
        };
      },

      HSProvider.map,

      async ({
        is_deleted,
        deleted_at,
        super_expertise_id,
        sub_expertise_ids,
        ...response
      }): Promise<IHSProvider.IPrivateResponse> => {
        const super_expertise = await prisma.expertSuperCategoryModel.findFirst(
          {
            where: { id: super_expertise_id }
          }
        );

        if (isNull(super_expertise))
          throw Error(
            `HSProvider super expertise missing, category id: ${super_expertise_id}`
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

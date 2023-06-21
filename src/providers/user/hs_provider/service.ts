import { Mutable } from "@TYPE";
import { IBusinessUser } from "@DTO/user/business_user";
import { IHSProvider } from "@DTO/user/hs_provider";
import { filter, identity, map, pipe, toArray } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { Prisma } from "@PRISMA";
import Authentication from "@PROVIDER/authentication";
import { isInActive, Result, toThrow } from "@UTIL";
import User from "../user";
import { Json } from "./json";
import { Map } from "./map";
import { AwsS3 } from "@EXTERNAL/storage";

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

      map(Map.entitySummary),

      filter(Result.Ok.is),

      map(Result.Ok.flatten),

      toArray,

      (data) => ({ data, page })
    );

  export const getOne = ({
    user_id,
    tx = prisma
  }: {
    user_id: string;
    tx?: Prisma.TransactionClient;
  }): Promise<IHSProvider.IPublic> =>
    User.Service.getOne({
      user_id,

      findFirst: async (id) =>
        tx.hSProviderModel.findFirst({
          where: { id },
          select: Json.findPublicSelect()
        }),

      exception_for_notfound: User.Exception.NotFound,

      validator: (provider) =>
        !provider.base.is_verified || isInActive(provider.base.base)
          ? toThrow(User.Exception.NotFound)
          : provider,

      mapper: Map.entityPublic
    });

  export namespace Me {
    export const get = async ({
      user_id,
      tx = prisma
    }: {
      user_id: string;
      tx?: Prisma.TransactionClient;
    }): Promise<IHSProvider.IPrivate> => {
      const me = await User.Service.getOne({
        user_id,

        findFirst: async (id) =>
          tx.hSProviderModel.findFirst({
            where: { id },
            select: Json.findPrivateSelect()
          }),

        exception_for_notfound: Authentication.Exception.MeNotFound,

        validator: identity,

        mapper: Map.entityPrivate
      });
      await Promise.all(
        map(async (image: Mutable<IBusinessUser.ICertificationImage>) => {
          const presigned_url = await AwsS3.Read.getUrl(image.url);
          image.url = Result.Ok.is(presigned_url)
            ? Result.Ok.flatten(presigned_url)
            : image.url;
        }, me.business_certification_images)
      );
      return me;
    };
  }
}

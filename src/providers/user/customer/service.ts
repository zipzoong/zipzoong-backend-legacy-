import { ICustomer } from "@DTO/user/customer";
import { identity, isNull } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { Prisma } from "@PRISMA";
import Authentication from "@PROVIDER/authentication";
import { toThrow } from "@UTIL";
import User from "../user";
import { Json } from "./json";
import { Map } from "./map";

export namespace Service {
  export const getOne = ({
    user_id,
    tx = prisma
  }: {
    user_id: string;
    tx?: Prisma.TransactionClient;
  }): Promise<ICustomer.IPublic> =>
    User.Service.getOne({
      user_id,

      findFirst: async (id) =>
        tx.customerModel.findFirst({
          where: { id },
          select: Json.findPublicSelect()
        }),

      exception_for_notfound: User.Exception.NotFound,

      validator: (user) =>
        isNull(user.phone) || user.base.is_deleted
          ? toThrow(User.Exception.NotFound)
          : user,

      mapper: Map.entityPublic
    });

  export namespace Me {
    export const get = ({
      user_id,
      tx = prisma
    }: {
      user_id: string;
      tx?: Prisma.TransactionClient;
    }): Promise<ICustomer.IPrivate> =>
      User.Service.getOne({
        user_id,

        findFirst: async (id) =>
          tx.customerModel.findFirst({
            where: { id },
            select: Json.findPrivateSelect()
          }),

        exception_for_notfound: Authentication.Exception.MeNotFound,

        validator: identity,

        mapper: Map.entityPrivate
      });
  }
}

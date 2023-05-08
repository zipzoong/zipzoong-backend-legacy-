import { ICustomer } from "@DTO/user/customer";
import { identity } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { Customer } from "@PROVIDER/cores/user/customer";
import { isNull, toThrow } from "@UTIL";
import { UserCommonService } from "./common";
import { UserCommonException } from "./exception";

export namespace CustomerService {
  export const getOne = (user_id: string): Promise<ICustomer> =>
    UserCommonService.getOne({
      user_id,

      findFirst: async (id) =>
        prisma.customerModel.findFirst({
          where: { id },
          include: Customer.json.findInclude()
        }),

      exception_for_notfound: UserCommonException.UserNotFound,

      validator: (user) =>
        isNull(user.phone) || user.base.is_deleted
          ? toThrow(UserCommonException.UserNotFound)
          : user,

      mapper: Customer.map
    });

  export namespace Me {
    export const get = (user_id: string): Promise<ICustomer.IPrivate> =>
      UserCommonService.getOne({
        user_id,

        findFirst: async (id) =>
          prisma.customerModel.findFirst({
            where: { id },
            include: Customer.json.findPrivateInclude()
          }),

        exception_for_notfound: UserCommonException.MeNotFound,

        validator: identity,

        mapper: Customer.mapPrivate
      });
  }
}

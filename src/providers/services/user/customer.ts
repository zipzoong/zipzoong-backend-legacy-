import { ICustomer } from "@DTO/user";
import { prisma } from "@INFRA/DB";
import { ForbiddenException, NotFoundException } from "@nestjs/common";
import { Customer } from "@PROVIDER/cores/user/customer";
import { isNull } from "@UTIL";
import { UserCommonService } from "./common";

export namespace CustomerService {
  const UserNotFound = new NotFoundException("User Not Found");
  const MeNotFound = new ForbiddenException("User Not Found");

  export const getOne = async (
    user_id: string
  ): Promise<ICustomer.IResponse> => {
    const [userModel, customerModel] = await Promise.all([
      prisma.userModel.findFirst({ where: { id: user_id } }),
      prisma.customerModel.findFirst({ where: { id: user_id } })
    ] as const);

    if (isNull(userModel) || isNull(customerModel)) throw UserNotFound;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { is_deleted, deleted_at, ...response } = Customer.map({
      userModel,
      customerModel
    });
    return response;
  };

  export const getMe = async (
    user_id: string
  ): Promise<ICustomer.IPrivateResponse> => {
    const [userModel, customerModel] = await Promise.all([
      prisma.userModel.findFirst({ where: { id: user_id } }),
      prisma.customerModel.findFirst({ where: { id: user_id } })
    ] as const);

    if (isNull(userModel) || isNull(customerModel)) throw MeNotFound;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { is_deleted, deleted_at, ...response } = Customer.map({
      userModel,
      customerModel
    });
    const agreement_acceptances =
      await UserCommonService.getAcceptantAgreementList(user_id);
    return { ...response, agreement_acceptances };
  };
}

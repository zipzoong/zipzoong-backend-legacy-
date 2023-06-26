import { ISoftDeletable } from "@DTO/common";
import { ICustomer } from "@DTO/user/customer";
import { IHSProvider } from "@DTO/user/hs_provider";
import { IREAgent } from "@DTO/user/re_agent";
import { IUser } from "@DTO/user/user";
import { pipe, tap, isNull } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { AgreementTargetType, OauthAccountModel, Prisma } from "@PRISMA";
import Agreement from "@PROVIDER/agreement";
import { isActive, isInActive, toThrow } from "@UTIL";
import { Exception } from "./exception";

export namespace Check {
  export const exist =
    <E>(exception: E) =>
    <T>(model: T | null): T =>
      isNull(model) ? toThrow(exception) : model;

  export const active =
    <E>(exception: E) =>
    <T extends Pick<ISoftDeletable, "is_deleted">>(model: T) =>
      isInActive(model) ? toThrow(exception) : model;

  /** @throw Unauthorized */
  export const existAccount = exist(
    Exception.AuthenticationFail
  )<OauthAccountModel>;

  /** @throw Forbidden */
  export const activeAccount = active(
    Exception.AccountInactive
  )<OauthAccountModel>;

  /** @throw NotFound */
  export const existUserId =
    (user_type: IUser.Type) =>
    (model: OauthAccountModel): string => {
      switch (user_type) {
        case "customer":
          return isNull(model.customer_id)
            ? toThrow(Exception.MeNotFound)
            : model.customer_id;

        case "home service provider":
          return isNull(model.business_user_id)
            ? toThrow(Exception.MeNotFound)
            : model.business_user_id;

        case "real estate agent":
          return isNull(model.business_user_id)
            ? toThrow(Exception.MeNotFound)
            : model.business_user_id;

        default:
          throw Error("[Check.existUserId] unreachable case");
      }
    };

  /** @throw Forbidden */
  const userNotExist =
    (user_type: IUser.Type) => (model: OauthAccountModel) => {
      switch (user_type) {
        case "customer":
          return !isNull(model.customer_id)
            ? toThrow(Exception.AlreadyCreated)
            : model;

        case "home service provider":
        case "real estate agent":
          return !isNull(model.business_user_id)
            ? toThrow(Exception.AlreadyCreated)
            : model;

        default:
          throw Error("[Check.userNotExist] unreachable case");
      }
    };

  /**
   * @throw Unauthorized
   * @throw Forbidden
   */
  export const canCreateUser =
    (user_type: IUser.Type) =>
    ({
      account_id,
      tx = prisma
    }: {
      account_id: string;
      tx?: Prisma.TransactionClient;
    }) =>
      pipe(
        account_id,
        async (id) => tx.oauthAccountModel.findFirst({ where: { id } }),

        existAccount,

        activeAccount,

        tap(userNotExist(user_type))
      );

  /** @throw Forbidden */
  export const acceptanceValid = async ({
    type,
    acceptant_agreement_ids,
    tx = prisma
  }: {
    type: IUser.Type;
    acceptant_agreement_ids: string[];
    tx?: Prisma.TransactionClient;
  }) => {
    const targets: AgreementTargetType[] = ["all"];
    if (type === "customer") targets.push("customer");
    else if (type === "real estate agent") targets.push("business", "RE");
    else if (type === "home service provider") targets.push("business", "HS");

    const acceptances = await tx.agreementModel.findMany({
      where: { id: { in: acceptant_agreement_ids } }
    });

    if (acceptances.length !== acceptant_agreement_ids.length)
      throw Agreement.Exception.Invalid;

    const requireds = (
      await tx.agreementModel.findMany({
        select: { id: true, is_required: true, is_deleted: true },
        where: { target_type: { in: targets } }
      })
    )
      .filter(isActive)
      .filter(({ is_required }) => is_required)
      .map(({ id }) => id);

    // 필수 항목이 모두 있는가?
    const isInSufficient = !requireds.every((agreement_id) =>
      acceptant_agreement_ids.includes(agreement_id)
    );

    if (isInSufficient) throw Exception.AcceptanceInSufficient;
  };

  /** @throw Forbidden */
  export const verifyUser = <
    T extends ICustomer.IPrivate | IREAgent.IPrivate | IHSProvider.IPrivate
  >(
    user: T
  ): T => {
    if (user.type === "customer" && isNull(user.phone))
      throw Exception.UserUnverified;
    if (user.type === "home service provider" && !user.is_verified)
      throw Exception.UserUnverified;
    if (user.type === "real estate agent" && !user.is_verified)
      throw Exception.UserUnverified;
    return user;
  };
}

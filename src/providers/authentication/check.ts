import { ISoftDeletable } from "@DTO/common";
import { ICustomer } from "@DTO/user/customer";
import { IHSProvider } from "@DTO/user/hs_provider";
import { IREAgent } from "@DTO/user/re_agent";
import { IUser } from "@DTO/user/user";
import { pipe, tap } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { AgreementUserType, OauthAccessorModel } from "@PRISMA";
import Agreement from "@PROVIDER/agreement";
import { isActive, isInActive, isNull, toThrow } from "@UTIL";
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
  export const existAccessor = exist(
    Exception.AuthenticationFail
  )<OauthAccessorModel>;

  /** @throw Forbidden */
  export const activeAccessor = active(
    Exception.AccessorInactive
  )<OauthAccessorModel>;

  /** @throw NotFound */
  export const existUserId =
    (user_type: IUser.Type) =>
    (model: OauthAccessorModel): string => {
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
    (user_type: IUser.Type) => (model: OauthAccessorModel) => {
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
    (user_type: IUser.Type) => (accessor_id: string) =>
      pipe(
        accessor_id,
        async (id) => prisma.oauthAccessorModel.findFirst({ where: { id } }),

        existAccessor,

        activeAccessor,

        tap(userNotExist(user_type))
      );

  /** @throw Forbidden */
  export const acceptanceValid = async ({
    type,
    acceptant_agreement_ids
  }: {
    type: IUser.Type;
    acceptant_agreement_ids: string[];
  }) => {
    const or: AgreementUserType[] = ["all"];
    if (type === "customer") or.push("customer");
    else if (type === "real estate agent") or.push("business", "RE");
    else if (type === "home service provider") or.push("business", "HS");

    const acceptances = await prisma.agreementModel.findMany({
      where: { id: { in: acceptant_agreement_ids } }
    });

    if (acceptances.length !== acceptant_agreement_ids.length)
      throw Agreement.Exception.Invalid;

    const agreements = await prisma.agreementModel.findMany({
      select: { id: true, is_deleted: true },
      where: { user_type: { in: or } }
    });

    const setA = new Set(acceptances.filter(isActive).map(({ id }) => id));
    const setB = new Set(agreements.filter(isActive).map(({ id }) => id));
    const rest = Array.from(new Set([...setB].filter((x) => !setA.has(x))));

    if (rest.length > 0) throw Exception.AcceptanceInSufficient;
  };

  /** @throw Forbidden */
  export const verifyUser = <
    T extends ICustomer.IPrivate | IREAgent.IPrivate | IHSProvider.IPrivate
  >(
    user: T
  ): T =>
    pipe(
      user,

      tap((u) => {
        if (u.type === "customer" && isNull(u.phone))
          throw Exception.UserUnverified;
      }),

      tap((u) => {
        if (u.type === "home service provider" && !u.is_verified)
          throw Exception.UserUnverified;
      }),

      tap((u) => {
        if (u.type === "real estate agent" && !u.is_verified)
          throw Exception.UserUnverified;
      })
    );
}

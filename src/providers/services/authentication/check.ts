import { ISoftDeletable } from "@DTO/common";
import { IUser } from "@DTO/user";
import { pipe, tap } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import {
  BadRequestException,
  ForbiddenException,
  UnauthorizedException
} from "@nestjs/common";
import { AgreementUserType, OauthAccessorModel } from "@PRISMA";
import { isNull, toThrow } from "@UTIL";

export namespace Check {
  const AuthenticationFail = new UnauthorizedException("Authentication Fail");
  const AccessorInactive = new ForbiddenException("Inactive Accessor");
  const UserNotFound = new ForbiddenException("User Not Found");
  const InvalidAgreement = new BadRequestException("Invalid Agreement");
  const AcceptanceInSufficient = new ForbiddenException(
    "Agreement Acceptance InSufficient"
  );
  const InvalidExpertise = new BadRequestException("Invalid Expertise");
  const AlreadyCreated = new ForbiddenException("Already Created");

  export const Exist =
    <E>(exception: E) =>
    <T>(model: T | null): T =>
      isNull(model) ? toThrow(exception) : model;

  export const Active =
    <E>(exception: E) =>
    <T extends Pick<ISoftDeletable, "is_deleted">>(model: T) =>
      model.is_deleted ? toThrow(exception) : model;

  /**
   * @throw Unauthorized
   */
  export const ExistAccessor = Exist(AuthenticationFail)<OauthAccessorModel>;

  /**
   * @throw Forbidden
   */
  export const ActiveAccessor = Active(AccessorInactive)<OauthAccessorModel>;

  /**
   *
   * @throw NotFound
   */
  export const ExistUserId =
    (user_type: IUser.Type) =>
    (model: OauthAccessorModel): string => {
      if (user_type === "customer")
        return isNull(model.customer_id)
          ? toThrow(UserNotFound)
          : model.customer_id;

      if (user_type === "home service provider")
        return isNull(model.business_user_id)
          ? toThrow(UserNotFound)
          : model.business_user_id;

      if (user_type === "real estate agent")
        return isNull(model.business_user_id)
          ? toThrow(UserNotFound)
          : model.business_user_id;

      throw Error("[Check.ExistUserId] unreachable case");
    };

  /**
   * @throw Forbidden
   */
  const throwIfUserExist =
    (user_type: IUser.Type) => (model: OauthAccessorModel) => {
      if (user_type === "customer" && !isNull(model.customer_id))
        throw AlreadyCreated;

      if (
        user_type === "home service provider" &&
        !isNull(model.business_user_id)
      )
        throw AlreadyCreated;

      if (user_type === "real estate agent" && !isNull(model.business_user_id))
        throw AlreadyCreated;
    };

  /**
   * @throw Unauthorized
   * @throw Forbidden
   */
  export const CanCreateUser =
    (user_type: IUser.Type) => (accessor_id: string) =>
      pipe(
        accessor_id,
        async (id) => prisma.oauthAccessorModel.findFirst({ where: { id } }),

        ExistAccessor,

        ActiveAccessor,

        tap(throwIfUserExist(user_type))
      );

  /** @throw Forbidden */
  export const Agreement = async ({
    type,
    agreement_acceptances
  }: {
    type: IUser.Type;
    agreement_acceptances: string[];
  }) => {
    const or: AgreementUserType[] = ["all"];
    if (type === "customer") or.push("customer");
    else if (type === "real estate agent") or.push("business", "RE");
    else if (type === "home service provider") or.push("business", "HS");

    const acceptances = await prisma.agreementModel.findMany({
      where: { id: { in: agreement_acceptances } }
    });

    if (acceptances.length !== agreement_acceptances.length)
      throw InvalidAgreement;

    const agreements = await prisma.agreementModel.findMany({
      select: { id: true, is_deleted: true },
      where: { user_type: { in: or } }
    });

    const setA = new Set(
      acceptances.filter(({ is_deleted }) => !is_deleted).map(({ id }) => id)
    );
    const setB = new Set(
      agreements.filter(({ is_deleted }) => !is_deleted).map(({ id }) => id)
    );
    const rest = Array.from(new Set([...setB].filter((x) => !setA.has(x))));

    if (rest.length > 0) throw AcceptanceInSufficient;
  };

  /** @throw BadRequest */
  export const SuperExpertise = async ({
    type,
    super_expertise_id
  }: {
    type: Exclude<IUser.Type, "customer_id">;
    super_expertise_id: string;
  }) => {
    const category = await prisma.expertSuperCategoryModel.findFirst({
      where: { id: super_expertise_id }
    });

    if (isNull(category)) throw InvalidExpertise;

    if (category.is_deleted) throw InvalidExpertise;
    if (category.business_type === "HS" && type !== "home service provider")
      throw InvalidExpertise;

    if (category.business_type === "RE" && type !== "real estate agent")
      throw InvalidExpertise;
  };

  /** @throw BadRequest */
  export const SubExpertises = async ({
    super_expertise_id,
    sub_expertise_ids
  }: {
    super_expertise_id: string;
    sub_expertise_ids: string[];
  }) => {
    const categories = (
      await prisma.expertSubCategoryModel.findMany({
        where: { id: { in: sub_expertise_ids } }
      })
    )
      .filter(({ is_deleted }) => !is_deleted)
      .filter(({ super_id }) => super_id === super_expertise_id);

    if (sub_expertise_ids.length !== categories.length) throw InvalidExpertise;
  };
}

import { IResult } from "@TYPE";
import { ICustomer } from "@DTO/user/customer";
import { prisma } from "@INFRA/DB";
import { getISOString, Result } from "@UTIL";
import typia from "typia";
import { Json } from "./json";
import User from "../user";
import { isNull } from "@fxts/core";

export namespace Map {
  export const entitySummary = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.customerModel.findFirst<{
            select: ReturnType<typeof Json.findSummarySelect>;
          }>
        >
      >
    >
  ): IResult<ICustomer.ISummary, null> => {
    const customer: ICustomer.ISummary = {
      type: "customer",
      mode: "summary",
      id: input.id,
      name: input.base.name,
      profile_image_url: input.profile_image_url,
      created_at: getISOString(input.base.created_at),
      updated_at: getISOString(input.base.updated_at)
    };
    return typia.equals<ICustomer.ISummary>(customer)
      ? Result.Ok.map(customer)
      : Result.Error.map(null);
  };
  export const entityPublic = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.customerModel.findFirst<{
            select: ReturnType<typeof Json.findPublicSelect>;
          }>
        >
      >
    >
  ): IResult<ICustomer.IPublic, null> => {
    const customer: ICustomer.IPublic = {
      type: "customer",
      mode: "public",
      id: input.id,
      name: input.base.name,
      profile_image_url: input.profile_image_url,
      created_at: getISOString(input.base.created_at),
      updated_at: getISOString(input.base.updated_at),
      phone: input.phone as string,
      email: input.base.email,
      address: isNull(input.address_first)
        ? null
        : { first: input.address_first, second: input.address_second }
    };
    return typia.equals<ICustomer.IPublic>(customer)
      ? Result.Ok.map(customer)
      : Result.Error.map(null);
  };
  export const entityPrivate = (
    input: NonNullable<
      Awaited<
        ReturnType<
          typeof prisma.customerModel.findFirst<{
            select: ReturnType<typeof Json.findPrivateSelect>;
          }>
        >
      >
    >
  ): IResult<ICustomer.IPrivate, null> => {
    const customer: ICustomer.IPrivate = {
      type: "customer",
      mode: "private",
      id: input.id,
      name: input.base.name,
      profile_image_url: input.profile_image_url,
      created_at: getISOString(input.base.created_at),
      updated_at: getISOString(input.base.updated_at),
      phone: input.phone as string,
      email: input.base.email,
      address: isNull(input.address_first)
        ? null
        : { first: input.address_first, second: input.address_second },
      birth: input.birth,
      gender: input.gender,
      acceptant_agreements: User.Map.accepatantAgreements(
        input.base.agreement_acceptances
      )
    };
    return typia.equals<ICustomer.IPrivate>(customer)
      ? Result.Ok.map(customer)
      : Result.Error.map(null);
  };
}

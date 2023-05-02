import { ITokens } from "@DTO/auth";
import { IUser } from "@DTO/user";
import { pipe } from "@fxts/core";
import {
  createParamDecorator,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException
} from "@nestjs/common";
import { Crypto } from "@PROVIDER/services/authentication";
import { isNull, isUndefined, throwIf } from "@UTIL";
import { Request } from "express";

const extract_authorization_header = (context: ExecutionContext) =>
  context.switchToHttp().getRequest<Request>().headers["authorization"];

const AuthorizationRequired = new UnauthorizedException(
  "Authorization header is required."
);

const RequestUnauthorized = new UnauthorizedException(
  "The format of the Authorization header is invalid"
);

const UserTypeMisMatch = new ForbiddenException("User Type Mismatch");

const extract_token = (input: RegExpMatchArray) => input[0].split(/\s+/)[1];

const matchUserType =
  (user_type: IUser.Type) =>
  (payload: ITokens.IUserPayload): boolean => {
    return payload.user_type !== user_type;
  };

export const CustomerToken = () =>
  createParamDecorator((_: undefined, ctx: ExecutionContext) =>
    pipe(
      ctx,

      extract_authorization_header,

      throwIf<string, undefined>(isUndefined, AuthorizationRequired),

      (token) => token.match(new RegExp(`^bearer\\s+\\S+`, "i")),

      throwIf(isNull, RequestUnauthorized),

      extract_token,

      throwIf(isUndefined, RequestUnauthorized),

      Crypto.getUserTokenPayload,

      throwIf(matchUserType("customer"), UserTypeMisMatch)
    )
  )();

export const REAgentToken = () =>
  createParamDecorator((_: undefined, ctx: ExecutionContext) =>
    pipe(
      ctx,

      extract_authorization_header,

      throwIf<string, undefined>(isUndefined, AuthorizationRequired),

      (token) => token.match(new RegExp(`^bearer\\s+\\S+`, "i")),

      throwIf(isNull, RequestUnauthorized),

      extract_token,

      throwIf(isUndefined, RequestUnauthorized),

      Crypto.getUserTokenPayload,

      throwIf(matchUserType("real estate agent"), UserTypeMisMatch)
    )
  )();

export const HSProviderToken = () =>
  createParamDecorator((_: undefined, ctx: ExecutionContext) =>
    pipe(
      ctx,

      extract_authorization_header,

      throwIf<string, undefined>(isUndefined, AuthorizationRequired),

      (token) => token.match(new RegExp(`^bearer\\s+\\S+`, "i")),

      throwIf(isNull, RequestUnauthorized),

      extract_token,

      throwIf(isUndefined, RequestUnauthorized),

      Crypto.getUserTokenPayload,

      throwIf(matchUserType("home service provider"), UserTypeMisMatch)
    )
  )();

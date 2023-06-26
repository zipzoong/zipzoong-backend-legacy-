import { IUser } from "@DTO/user/user";
import { throwIfNot } from "@UTIL";
import { isNull, isUndefined, pipe, throwIf } from "@fxts/core";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import Authentication from "@PROVIDER/authentication";
import { IToken } from "@PROVIDER/authentication/interface";
import {
  AuthorizationRequired,
  RequestUnauthorized,
  UserTypeMisMatch
} from "./exception";
import {
  extract_authorization_header,
  extract_token,
  matchUserType,
  throwIfError,
  validate_token_type
} from "./internal";

export namespace Token {
  const validate_list = (token_type: IToken.Type) =>
    [
      extract_authorization_header,

      throwIf(isUndefined, () => AuthorizationRequired),

      validate_token_type(token_type),

      throwIf(isNull, () => RequestUnauthorized),

      extract_token,

      throwIf(isUndefined, () => RequestUnauthorized)
    ] as const;

  export const UserId = (user_type: IUser.Type) =>
    createParamDecorator((type: IUser.Type, ctx: ExecutionContext) =>
      pipe(
        ctx,

        ...validate_list("access"),

        Authentication.Token.Access.verify,

        throwIfError,

        throwIfNot(matchUserType(type), () => UserTypeMisMatch),

        (payload) => payload.user_id
      )
    )(user_type);

  export const AccountId = () =>
    createParamDecorator((_: undefined, ctx: ExecutionContext) =>
      pipe(
        ctx,

        ...validate_list("account"),

        Authentication.Token.Account.verify,

        throwIfError,

        (payload) => payload.account_id
      )
    )();

  export const Refresh = () =>
    createParamDecorator((_: undefined, ctx: ExecutionContext) =>
      pipe(
        ctx,

        ...validate_list("refresh")
      )
    )();
}

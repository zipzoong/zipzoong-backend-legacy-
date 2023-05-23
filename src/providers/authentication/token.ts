import { IResult } from "@TYPE";
import { IAuthentication } from "@DTO/authentication";
import { Crypto, getISOString, Result } from "@UTIL";
import { IToken } from "./interface";
import typia from "typia";
import { IUser } from "@DTO/user/user";
import { pipe } from "@fxts/core";
import { Configuration } from "@INFRA/config";

export namespace Token {
  const hour = 1000 * 60 * 60 * 1;
  const day = hour * 24;

  const _verify = <T extends IToken.IPayloadBase<IToken.Type>>({
    token,
    key,
    parser
  }: {
    token: string;
    key: string | Buffer;
    parser: (input: string) => T;
  }): IResult<T, "Token Expired" | "Token Invalid"> => {
    try {
      const now = new Date();
      const plain = Crypto.decrypt({ token, key });
      const payload = parser(plain);
      const expired_at = new Date(payload.expired_at);
      if (now > expired_at) return Result.Error.map("Token Expired" as const);
      return Result.Ok.map(payload);
    } catch {
      return Result.Error.map("Token Invalid" as const);
    }
  };

  export namespace Account {
    const duration = hour;
    const key = Configuration.ACCOUNT_TOKEN_KEY;

    export const generate = ({
      account_id
    }: Pick<
      IToken.IAccountPayload,
      "account_id"
    >): IAuthentication.IAccountToken => {
      const expired_at = getISOString(new Date(Date.now() + duration));
      const plain = typia.stringify<IToken.IAccountPayload>({
        type: "account",
        account_id,
        expired_at
      });
      return {
        account_token: Crypto.encrypt({ plain, key })
      };
    };

    export const verify = (
      account_token: string
    ): IResult<IToken.IAccountPayload, "Token Invalid" | "Token Expired"> =>
      _verify({
        token: account_token,
        parser: typia.createAssertParse<IToken.IAccountPayload>(),
        key
      });
  }

  export namespace Access {
    const duration = hour * 8;
    const key = Configuration.ACCESS_TOKEN_KEY;

    export const generate = ({
      user_id,
      user_type
    }: Pick<
      IToken.IAccessPayload<IUser.Type>,
      "user_id" | "user_type"
    >): IAuthentication.IAccessToken => {
      const expired_at = getISOString(new Date(Date.now() + duration));
      const plain = typia.stringify<IToken.IAccessPayload<IUser.Type>>({
        type: "access",
        user_id,
        user_type,
        expired_at
      });
      return {
        access_token: Crypto.encrypt({ plain, key }),
        access_token_expired_at: expired_at
      };
    };

    export const verify = (
      access_token: string
    ): IResult<
      IToken.IAccessPayload<IUser.Type>,
      "Token Invalid" | "Token Expired"
    > =>
      _verify({
        token: access_token,
        parser: typia.createAssertParse<IToken.IAccessPayload<IUser.Type>>(),
        key
      });
  }

  export namespace Refresh {
    const duration = day * 30;
    const key = Configuration.REFRESH_TOKEN_KEY;

    export const generate = ({
      user_id,
      user_type
    }: Pick<
      IToken.IRefreshPayload,
      "user_id" | "user_type"
    >): IAuthentication.IRefreshToken => {
      const expired_at = getISOString(new Date(Date.now() + duration));
      const plain = typia.stringify<IToken.IRefreshPayload>({
        type: "refresh",
        user_id,
        user_type,
        expired_at
      });
      return {
        refresh_token: Crypto.encrypt({ plain, key }),
        refresh_token_expired_at: expired_at
      };
    };

    export const verify = (
      refresh_token: string
    ): IResult<IToken.IRefreshPayload, "Token Invalid" | "Token Expired"> =>
      _verify({
        token: refresh_token,
        parser: typia.createAssertParse<IToken.IRefreshPayload>(),
        key
      });

    export const refresh = (
      refresh_token: string
    ): IResult<
      IAuthentication.IAccessToken,
      "Token Invalid" | "Token Expired"
    > =>
      pipe(
        refresh_token,

        verify,

        (input) =>
          Result.Ok.is(input)
            ? pipe(
                input,

                Result.Ok.flatten,

                Access.generate,

                Result.Ok.map
              )
            : input
      );
  }
}

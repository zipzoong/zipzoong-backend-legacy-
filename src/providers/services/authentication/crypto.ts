import { ITokens } from "@DTO/auth";
import { Configuration } from "@INFRA/config";
import { UnauthorizedException } from "@nestjs/common";
import jwt from "jsonwebtoken";
import typia from "typia";

export namespace Crypto {
  const AuthenticationFail = new UnauthorizedException("Authentication Fail");
  const encrypt =
    <T extends object>(
      secret: string,
      algorithm: jwt.Algorithm,
      expiresIn: string | number
    ) =>
    (payload: T) =>
      jwt.sign(payload, secret, { algorithm, expiresIn });

  export const getAccessorToken = encrypt<ITokens.IOauthPayload>(
    Configuration.ACCESSOR_TOKEN_PRIVATE_KEY,
    "RS256",
    "1h"
  );

  export const getAccessorTokenPayload = (
    token: string
  ): ITokens.IOauthPayload => {
    const payload = jwt.verify(token, Configuration.ACCESSOR_TOKEN_PUBLIC_KEY);
    if (!typia.is<ITokens.IOauthPayload>(payload)) {
      throw AuthenticationFail;
    }
    return payload;
  };

  export const getUserToken = encrypt<ITokens.IUserPayload>(
    Configuration.USER_TOKEN_PRIVATE_KEY,
    "RS256",
    "8h"
  );

  export const getUserTokenPayload = (token: string): ITokens.IUserPayload => {
    const payload = jwt.verify(token, Configuration.USER_TOKEN_PUBLIC_KEY);
    if (!typia.is<ITokens.IUserPayload>(payload)) {
      throw AuthenticationFail;
    }
    return payload;
  };
}

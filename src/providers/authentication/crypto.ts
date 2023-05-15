import { ITokens } from "@DTO/auth";
import { Configuration } from "@INFRA/config";
import jwt from "jsonwebtoken";
import typia from "typia";
import { Exception } from "./exception";

export namespace Crypto {
  const encrypt =
    <T extends object>(
      secret: string,
      algorithm: jwt.Algorithm,
      expiresIn: string | number
    ) =>
    (payload: T) =>
      jwt.sign(payload, secret, { algorithm, expiresIn });

  /** @throw unauthorized */
  const decrypt = (token: string, secret: string) => {
    try {
      return jwt.verify(token, secret);
    } catch (error) {
      throw Exception.AuthenticationFail;
    }
  };

  export const getAccountToken = encrypt<ITokens.IAccountPayload>(
    Configuration.ACCESSOR_TOKEN_PRIVATE_KEY,
    "RS256",
    "1h"
  );

  /** @throw unauthorized */
  export const getAccountTokenPayload = (
    token: string
  ): ITokens.IAccountPayload => {
    const payload = decrypt(token, Configuration.ACCESSOR_TOKEN_PUBLIC_KEY);
    if (!typia.is<ITokens.IAccountPayload>(payload)) {
      throw Exception.AuthenticationFail;
    }
    return payload;
  };

  export const getUserToken = encrypt<ITokens.IUserPayload>(
    Configuration.USER_TOKEN_PRIVATE_KEY,
    "RS256",
    "8h"
  );

  /** @throw unauthorized */
  export const getUserTokenPayload = (token: string): ITokens.IUserPayload => {
    const payload = decrypt(token, Configuration.USER_TOKEN_PUBLIC_KEY);
    if (!typia.is<ITokens.IUserPayload>(payload)) {
      throw Exception.AuthenticationFail;
    }
    return payload;
  };
}

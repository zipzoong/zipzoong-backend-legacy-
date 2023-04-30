import { ITokens } from "@DTO/auth";
import { Configuration } from "@INFRA/config";
import jwt from "jsonwebtoken";

export namespace Crypto {
  export const encrypt =
    <T extends object>(
      secret: string,
      algorithm: jwt.Algorithm,
      expiresIn: string | number
    ) =>
    (payload: T) =>
      jwt.sign(payload, secret, { algorithm, expiresIn });

  export const getAccessorToken = encrypt<ITokens.IOauthPayload>(
    Configuration.ACCESS_TOKEN_PRIVATE_KEY,
    "RS256",
    "1h"
  );
  export const getUserToken = encrypt<ITokens.IUserPayload>(
    Configuration.ACCESS_TOKEN_PRIVATE_KEY,
    "RS256",
    "8h"
  );
}

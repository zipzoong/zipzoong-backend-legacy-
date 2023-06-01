import { Crypto, getISOString } from "@UTIL";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import Authentication from "@PROVIDER/authentication";
import { auth } from "@SDK";
import { internal } from "@TEST/internal";
import typia from "typia";
import { IToken } from "@PROVIDER/authentication/interface";
import { randomUUID } from "crypto";
import { Configuration } from "@INFRA/config";

console.log("\n- auth.token.refresh.execute");

export const test_success = async (connection: IConnection) => {
  const token = Authentication.Token.Refresh.generate({
    user_id: "test_user",
    user_type: "real estate agent"
  });

  const received = await auth.token.refresh.execute(
    internal.addAuthorizationHeader(connection)("refresh", token.refresh_token)
  );

  typia.assertEquals(received);
};

export const test_token_invalid = internal.test_error(
  (connection: IConnection) =>
    auth.token.refresh.execute(
      internal.addAuthorizationHeader(connection)(
        "refresh",
        Authentication.Token.Access.generate({
          user_id: "invalid",
          user_type: "customer"
        }).access_token
      )
    )
)(HttpStatus.UNAUTHORIZED, "Token Invalid");

export const test_token_expired = internal.test_error(
  (connection: IConnection) =>
    auth.token.refresh.execute(
      internal.addAuthorizationHeader(connection)(
        "refresh",
        Crypto.encrypt({
          plain: typia.stringify<IToken.IRefreshPayload>({
            type: "refresh",
            user_id: randomUUID(),
            user_type: "customer",
            expired_at: getISOString(new Date(Date.now() - 1000))
          }),
          key: Configuration.REFRESH_TOKEN_KEY
        })
      )
    )
)(HttpStatus.FORBIDDEN, "Token Expired");

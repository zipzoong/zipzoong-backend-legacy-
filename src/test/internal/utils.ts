import { ITokens } from "@DTO/auth";
import { IConnection } from "@nestia/fetcher";

export const addHeader =
  (connection: IConnection) =>
  (HeaderName: string, value: string): IConnection => ({
    ...connection,
    headers: {
      ...connection.headers,
      [HeaderName]: value
    }
  });

export const addAuthorizationHeader =
  (connection: IConnection) =>
  (token_type: ITokens.AuthorizationHeaderTokenType, token: string) =>
    addHeader(connection)("Authorization", `${token_type} ${token}`);

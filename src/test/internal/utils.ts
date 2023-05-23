import { IConnection } from "@nestia/fetcher";
import { IToken } from "@PROVIDER/authentication/interface";

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
  (connection: IConnection) => (token_type: IToken.Type, token: string) =>
    addHeader(connection)("Authorization", `${token_type} ${token}`);

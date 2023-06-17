import { IUser } from "@DTO/user/user";
import { ExecutionContext } from "@nestjs/common";
import { IToken } from "@PROVIDER/authentication/interface";
import { Request } from "express";
import { IResult } from "@TYPE";
import { Result, toThrow } from "@UTIL";
import Authentication from "@PROVIDER/authentication";

export const extract_authorization_header = (context: ExecutionContext) =>
  context.switchToHttp().getRequest<Request>().headers["authorization"];

export const validate_token_type = (type: IToken.Type) => (input: string) =>
  input.match(new RegExp(`^${type}\\s+\\S+`, "i"));

export const extract_token = (input: RegExpMatchArray) =>
  input[0].split(/\s+/)[1];

export const matchUserType =
  <T extends IUser.Type>(user_type: T) =>
  (
    payload: IToken.IAccessPayload<IUser.Type>
  ): payload is IToken.IAccessPayload<T> =>
    payload.user_type === user_type;

export const throwIfError = <T>(
  input: IResult<T, "Token Expired" | "Token Invalid">
) =>
  Result.Error.is(input)
    ? toThrow(
        Result.Error.flatten(input) === "Token Expired"
          ? Authentication.Exception.TokenExpired
          : Authentication.Exception.TokenInvalid
      )
    : Result.Ok.flatten(input);

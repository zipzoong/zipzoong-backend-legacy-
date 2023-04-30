import { ITokens } from "@DTO/auth";
import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException
} from "@nestjs/common";
import { isNull, isUndefined, throwIf } from "@UTIL";
import { Request } from "express";
import { pipe } from "rxjs";

const extract_authorization_header = (context: ExecutionContext) =>
  context.switchToHttp().getRequest<Request>().headers["authorization"];

const validate_token_type =
  (type: ITokens.AuthorizationHeaderTokenType) => (input: string) =>
    input.match(new RegExp(`^${type}\\s+\\S+`, "i"));

const extract_token = (input: RegExpMatchArray) => input[0].split(/\s+/)[1];

const AuthorizationRequired = new UnauthorizedException(
  "Authorization header is required."
);

const RequestUnauthorized = new UnauthorizedException(
  "The format of the Authorization header is invalid"
);

export const Authorization = (
  token_type: ITokens.AuthorizationHeaderTokenType = "bearer"
) =>
  createParamDecorator(
    (type: ITokens.AuthorizationHeaderTokenType, ctx: ExecutionContext) =>
      pipe(
        extract_authorization_header,

        throwIf(isUndefined, AuthorizationRequired),

        validate_token_type(type),

        throwIf(isNull, RequestUnauthorized),

        extract_token
      )(ctx)
  )(token_type);

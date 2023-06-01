import { ForbiddenException, UnauthorizedException } from "@nestjs/common";

export const AuthorizationRequired = new UnauthorizedException(
  "Authorization header is required."
);

export const RequestUnauthorized = new UnauthorizedException(
  "The format of the Authorization header is invalid"
);

export const UserTypeMisMatch = new ForbiddenException("User Type Mismatch");

import {
  BadRequestException,
  ForbiddenException,
  UnauthorizedException
} from "@nestjs/common";

export namespace Exception {
  export const AuthenticationFail = new UnauthorizedException(
    "Authentication Fail"
  );
  export const AccountInactive = new ForbiddenException("Account Inactive");
  export const AcceptanceInSufficient = new ForbiddenException(
    "Agreement Acceptance InSufficient"
  );

  export const MeNotFound = new ForbiddenException("User Not Found");
  export const AlreadyCreated = new ForbiddenException("User Already Created");
  export const PhoneRequired = new BadRequestException("Phone Required");

  export const UserUnverified = new ForbiddenException("User Unverified");
}

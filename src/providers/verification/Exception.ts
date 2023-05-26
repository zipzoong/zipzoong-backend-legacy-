import { ForbiddenException, UnauthorizedException } from "@nestjs/common";

export namespace Exception {
  export const PhoneVerificationFail = new UnauthorizedException(
    "Phone Verification Fail"
  );

  export const PhoneVerificationNotFound = new UnauthorizedException(
    "Phone Verification Not Found"
  );

  export const PhoneVerificationExpired = new ForbiddenException(
    "Phone Verification Expired"
  );

  export const PhoneUnverified = new ForbiddenException("Phone Unverified");
}

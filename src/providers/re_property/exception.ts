import { BadRequestException, ForbiddenException } from "@nestjs/common";

export namespace Exception {
  export const InvalidCategory = new BadRequestException(
    "Invalid Sub Category"
  );
  export const UnverifiedAgent = new ForbiddenException("Unverified RE Agent");
}

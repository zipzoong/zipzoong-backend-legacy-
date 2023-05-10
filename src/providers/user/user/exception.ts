import { ForbiddenException, NotFoundException } from "@nestjs/common";

export namespace Exception {
  export const UserNotFound = new NotFoundException("User Not Found");
  export const MeNotFound = new ForbiddenException("User Not Found");
}

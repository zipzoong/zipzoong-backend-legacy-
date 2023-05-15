import { NotFoundException } from "@nestjs/common";

export namespace Exception {
  export const UserNotFound = new NotFoundException("User Not Found");
}

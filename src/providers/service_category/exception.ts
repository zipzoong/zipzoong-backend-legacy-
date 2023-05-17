import { BadRequestException, NotFoundException } from "@nestjs/common";

export namespace Exception {
  export const Invalid = new BadRequestException("Service Category Invalid");
  export const NotFound = new NotFoundException("Service Category Not Found");
}

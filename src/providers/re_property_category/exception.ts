import { BadRequestException, NotFoundException } from "@nestjs/common";

export namespace Exception {
  export const Invalid = new BadRequestException("Invalid Category");
  export const NotFound = new NotFoundException(
    "RE-Property Category Not Found"
  );
}

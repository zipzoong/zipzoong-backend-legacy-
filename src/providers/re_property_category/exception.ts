import { BadRequestException, NotFoundException } from "@nestjs/common";

export namespace Exception {
  export const Invalid = new BadRequestException(
    "RE-Property Category Invalid"
  );
  export const NotFound = new NotFoundException(
    "RE-Property Category Not Found"
  );
}

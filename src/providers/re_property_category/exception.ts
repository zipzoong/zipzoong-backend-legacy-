import { NotFoundException } from "@nestjs/common";

export namespace Exception {
  export const CategoryNotFound = new NotFoundException(
    "RE-Property Category Not Found"
  );
}

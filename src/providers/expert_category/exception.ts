import { NotFoundException } from "@nestjs/common";

export namespace Exception {
  export const CategoryNotFound = new NotFoundException(
    "Expert Category Not Found"
  );
}

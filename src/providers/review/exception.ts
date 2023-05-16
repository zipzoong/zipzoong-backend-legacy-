import { BadRequestException } from "@nestjs/common";

export namespace Exception {
  export const Duplicated = new BadRequestException("Rate Category Duplicated");
  export const Invalid = new BadRequestException("Rate Category Invalid");
}

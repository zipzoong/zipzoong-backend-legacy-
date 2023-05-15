import { BadRequestException } from "@nestjs/common";

export namespace Exception {
  export const Invalid = new BadRequestException("Invalid Agreement");
}

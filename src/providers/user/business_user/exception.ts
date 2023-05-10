import { BadRequestException } from "@nestjs/common";

export namespace Exception {
  export const InvalidExpertise = new BadRequestException("Invalid Expertise");
}

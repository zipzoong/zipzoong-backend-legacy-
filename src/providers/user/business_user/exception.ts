import { BadRequestException } from "@nestjs/common";

export namespace Exception {
  export const ExpertiseInvalid = new BadRequestException("Expertise Invalid");
}

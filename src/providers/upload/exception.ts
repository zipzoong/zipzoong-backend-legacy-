import { InternalServerErrorException } from "@nestjs/common";

export namespace Exception {
  export const RequestFail = new InternalServerErrorException("Request Fail");
}

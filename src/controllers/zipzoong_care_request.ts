import { ITokens } from "@DTO/auth";
import { IZipzoongCareRequest } from "@DTO/zipzoong_care";
import { TypedBody, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import ZipzoongCareRequest from "@PROVIDER/zipzoong_care_request";
import { CustomerToken } from "./decorators";

@Controller("zipzoong-care/request")
export class IZipzoongCareRequestController {
  /**
   * @summary 집중 케어 신청
   * @tag focus-cares
   * @param body 집중 케어 신청 정보
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   */
  @TypedRoute.Post()
  execute(
    @TypedBody() body: IZipzoongCareRequest.ICreateRequest,
    @CustomerToken() { user_id }: ITokens.IUserPayload<"customer">
  ): Promise<void> {
    return ZipzoongCareRequest.Service.request({ input: body, user_id });
  }
}

import { IPhoneVerification } from "@DTO/verification/phone";
import { TypedBody, TypedRoute } from "@nestia/core";
import { Controller, HttpCode, HttpStatus } from "@nestjs/common";
import Verification from "@PROVIDER/verification";

const path = "verification/phones";

@Controller(path)
export class VerificationPhonesController {
  /**
   * 해당 API를 호출시, 전달된 휴대폰 번호로 문자를 전송합니다.
   *
   * @summary phone verification create
   * @tag verification
   * @param body phone verification create input
   * @return verification expired date-time
   * @throw 401 Unauthorized
   */
  @TypedRoute.Post()
  create(
    @TypedBody() body: IPhoneVerification.ICreateRequest
  ): Promise<IPhoneVerification.ICreateResponse> {
    return Verification.Phone.create(body);
  }
}

@Controller(path + "/verify")
export class VerificationPhonesVerifyController {
  /**
   * `POST /verification/phones`를 통해 생성된 인증 정보를 인증하는 API
   *
   * 인증 정보 생성 5분 이내에 실행되어야 한다.
   *
   * @summary phone verification verify
   * @tag verification
   * @param body phone verification verify input
   * @return phone_verification_id
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   */
  @HttpCode(HttpStatus.OK)
  @TypedRoute.Post()
  execute(
    @TypedBody() body: IPhoneVerification.IVerifyRequest
  ): Promise<IPhoneVerification.IVerifyResponse> {
    return Verification.Phone.verify(body);
  }
}

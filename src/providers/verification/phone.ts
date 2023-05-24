import { getISOString, isActive, isInActive, isNull, Result } from "@UTIL";
import { NaverSENS } from "@EXTERNAL/sms";
import { randomInt, randomUUID } from "node:crypto";
import { isUndefined } from "@fxts/core";
import { prisma } from "@INFRA/DB";
import { IPhoneVerification } from "@DTO/verification/phone";
import { Exception } from "./Exception";

export namespace Phone {
  const duration = 1000 * 60 * 5; // 5min

  /**
   * @throw 401 {@link Exception.PhoneVerificationFail}
   */
  export const create = async ({
    phone
  }: IPhoneVerification.ICreateRequest): Promise<IPhoneVerification.ICreateResponse> => {
    const code = randomInt(1_00_000, 9_00_000).toString();

    const sendMessage = await NaverSENS.sendMessage({
      contentType: "COMM",
      content: "",
      messages: [
        {
          to: phone,
          content: `[집중 서비스] 인증번호 [${code}]를 입력해주세요.`
        }
      ]
    });

    if (Result.Error.is(sendMessage)) throw Exception.PhoneVerificationFail;

    const request_id = Result.Ok.flatten(sendMessage).send_request_id;

    const request = await NaverSENS.getSendMessageRequest(request_id);

    if (Result.Error.is(request)) throw Exception.PhoneVerificationFail;

    const message = Result.Ok.flatten(request)[0];

    if (isUndefined(message)) throw Exception.PhoneVerificationFail;

    const _now = Date.now();
    const now = getISOString(new Date(_now));
    await prisma.phoneVerificationModel.create({
      data: {
        id: randomUUID(),
        phone,
        code,
        message_id: message.messageId,
        is_verified: false,
        created_at: now,
        updated_at: now,
        is_deleted: false,
        deleted_at: null
      }
    });
    return { expired_at: getISOString(new Date(_now + duration)) };
  };

  /**
   * @throw 401 {@link Exception.PhoneVerificationNotFound}
   * @throw 403 {@link Exception.PhoneVerificationExpired}
   */
  export const verify = async ({
    phone,
    code
  }: IPhoneVerification.IVerifyRequest): Promise<IPhoneVerification.IVerifyResponse> => {
    const now = new Date(Date.now() - duration); // 5분동안 유효함
    const verifications = (
      await prisma.phoneVerificationModel.findMany({
        where: { code, phone }
      })
    )
      .filter(isActive)
      .filter((verification) => !verification.is_verified); // it is unverified data

    const verification = verifications[0];

    if (isUndefined(verification)) throw Exception.PhoneVerificationNotFound;

    // 생성된지 5분지남
    if (now > verification.created_at) {
      await prisma.phoneVerificationModel.updateMany({
        where: { id: verification.id },
        data: { is_deleted: true, deleted_at: getISOString() }
      });

      throw Exception.PhoneVerificationExpired;
    } else {
      // 인증
      await prisma.phoneVerificationModel.updateMany({
        where: { id: verification.id },
        data: { is_verified: true, updated_at: getISOString() }
      });
    }

    return { phone_verification_id: verification.id };
  };

  /**
   * @throw 401 {@link Exception.PhoneVerificationNotFound}
   * @throw 403 {@link Exception.PhoneVerificationExpired}
   * @throw 403 {@link Exception.PhoneUnverified}
   */
  export const getOne = async (verification_id: string): Promise<string> => {
    const threshold = new Date(Date.now() - duration * 60); // 5h
    const verification = await prisma.phoneVerificationModel.findFirst({
      where: { id: verification_id }
    });
    if (isNull(verification)) throw Exception.PhoneVerificationNotFound;
    if (isInActive(verification)) throw Exception.PhoneVerificationNotFound;
    if (verification.is_verified) {
      if (threshold > verification.updated_at)
        throw Exception.PhoneVerificationExpired;
      return verification.phone; // not expired and verified
    }
    throw Exception.PhoneUnverified;
  };
}

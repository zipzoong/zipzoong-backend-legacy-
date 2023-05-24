import { getISOString, isActive, isInActive, isNull, Result } from "@UTIL";
import { NaverSENS } from "@EXTERNAL/sms";
import { IPhoneAuthentication } from "@DTO/phone_authentication";
import { randomInt, randomUUID } from "node:crypto";
import { Exception } from "./exception";
import { isUndefined } from "@fxts/core";
import { prisma } from "@INFRA/DB";

export namespace Phone {
  const duration = 1000 * 60 * 5; // 5min
  export const request = async ({
    phone
  }: IPhoneAuthentication.IRequest.Input): Promise<IPhoneAuthentication.IRequest.Output> => {
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

    if (Result.Error.is(sendMessage)) throw Exception.PhoneAuthenticationFail;

    const request_id = Result.Ok.flatten(sendMessage).send_request_id;

    const request = await NaverSENS.getSendMessageRequest(request_id);

    if (Result.Error.is(request)) throw Exception.PhoneAuthenticationFail;

    const message = Result.Ok.flatten(request)[0];

    if (isUndefined(message)) throw Exception.PhoneAuthenticationFail;

    const _now = Date.now();
    const now = getISOString(new Date(_now));
    await prisma.phoneAuthenticationModel.create({
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

  export const verify = async ({
    phone,
    code
  }: IPhoneAuthentication.IVerify.Input): Promise<IPhoneAuthentication.IVerify.Output> => {
    const now = new Date(Date.now() - duration); // 5분동안 유효함
    const auths = (
      await prisma.phoneAuthenticationModel.findMany({
        where: { code, phone }
      })
    ).filter(isActive);
    const auth = auths[0];

    if (isUndefined(auth)) throw Exception.PhoneAuthenticationNotFound;

    // 생성된지 5분지남
    if (now > auth.created_at) {
      await prisma.phoneAuthenticationModel.updateMany({
        where: { id: auth.id },
        data: { is_deleted: true, deleted_at: getISOString() }
      });
      throw Exception.PhoneAuthenticationExpired;
    } else {
      // 인증
      await prisma.phoneAuthenticationModel.updateMany({
        where: { id: auth.id },
        data: { is_verified: true, updated_at: getISOString() }
      });
    }

    return { phone_authentication_id: auth.id };
  };

  /**
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   */
  export const getOne = async (auth_id: string): Promise<string> => {
    const threshold = new Date(Date.now() - duration * 60); // 5h
    const auth = await prisma.phoneAuthenticationModel.findFirst({
      where: { id: auth_id }
    });
    if (isNull(auth)) throw Exception.PhoneAuthenticationNotFound;
    if (isInActive(auth)) throw Exception.PhoneAuthenticationNotFound;
    if (auth.is_verified) {
      if (threshold > auth.updated_at)
        throw Exception.PhoneAuthenticationExpired;
      return auth.phone; // not expired and verified
    }
    throw Exception.PhoneUnverified;
  };
}

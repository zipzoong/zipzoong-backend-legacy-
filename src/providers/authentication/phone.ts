import { getISOString, isActive, Result } from "@UTIL";
import { NaverSENS } from "@EXTERNAL/sms";
import { IPhoneAuthentication } from "@DTO/phone_authentication";
import { randomInt, randomUUID } from "node:crypto";
import { Exception } from "./exception";
import { isUndefined } from "@fxts/core";
import { prisma } from "@INFRA/DB";

export namespace Phone {
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

    const now = getISOString();
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
    return { code };
  };

  export const verify = async ({
    phone,
    code
  }: IPhoneAuthentication.IVerify.Input): Promise<IPhoneAuthentication.IVerify.Output> => {
    const now = new Date(Date.now() - 1000 * 60 * 5); // 5분동안 유효함
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
}

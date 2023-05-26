import { Result } from "@UTIL";
import { IResult, Omit } from "@TYPE";
import { Fetcher, IConnection } from "@nestia/fetcher";
import typia from "typia";
import { INaver } from "./naver.interface";
import { Configuration } from "@INFRA/config";
import { createHmac } from "crypto";

export namespace NaverSENS {
  const service_id = Configuration.NAVER_SENS_SERVICE_ID;
  const access_key = Configuration.NAVER_SENS_ACCESS_KEY;
  const secret_key = Configuration.NAVER_SENS_SECRET_KEY;
  const caller = Configuration.NAVER_SENS_CALLER;
  const host = Configuration.NAVER_SENS_HOST;

  interface ISignatureInput {
    method: "GET" | "POST";
    path: string;
    timestamp: number;
  }

  const getSignature = ({ method, path, timestamp }: ISignatureInput) => {
    const hmac = createHmac("sha256", secret_key);
    hmac.update(method);
    hmac.update(" ");
    hmac.update(path);
    hmac.update("\n");
    hmac.update(timestamp.toString());
    hmac.update("\n");
    hmac.update(access_key);

    return hmac.digest("base64");
  };

  const getConnection = ({
    method,
    path,
    timestamp
  }: ISignatureInput): IConnection => ({
    host,
    headers: {
      ...(method === "POST"
        ? { "Content-Type": "application/json; charset=utf-8" }
        : {}),
      "x-ncp-apigw-timestamp": timestamp.toString(),
      "x-ncp-iam-access-key": access_key,
      "x-ncp-apigw-signature-v2": getSignature({ method, path, timestamp })
    }
  });

  /**
   * 메시지 전송 함수
   * naver sens 서비스와 연동
   *
   * @param input 메시지 전송 정보
   * @return 성공시 request_id, 실패시 실패 메시지를 반환
   */
  export const sendMessage = async (
    input: Omit<INaver.ISendMessageInput, "type" | "countryCode" | "from">
  ): Promise<
    IResult<
      { send_request_id: string },
      "SendMessageOutput Invalid" | "SendMessage Fail"
    >
  > => {
    try {
      const method = "POST";
      const path = `/sms/v2/services/${service_id}/messages`;
      const timestamp = Date.now();
      const response = await Fetcher.fetch<
        INaver.ISendMessageInput,
        INaver.ISendMessageOutput
      >(
        getConnection({ method, path, timestamp }),
        {
          response: false,
          status: 202
        },
        method,
        path,
        { ...input, type: "SMS", countryCode: "82", from: caller },
        typia.createAssertStringify<INaver.ISendMessageInput>()
      );

      if (!typia.is<INaver.ISendMessageOutput>(response))
        return Result.Error.map("SendMessageOutput Invalid" as const);

      return Result.Ok.map({ send_request_id: response.requestId });
    } catch {
      return Result.Error.map("SendMessage Fail" as const);
    }
  };

  /**
   * 메시지 전송 기록을 확인할 수 있다.
   *
   * {@link sendMessage}의 응답 결과를 사용하여 요청할 수 있다.
   *
   * 결과에 포함된 messageId를 사용하여 메시지 정보를 불러올 수 있다.
   *
   * @param input 발송 요청 필터링 기준
   * @return 메시지 전송 요청 정보
   */
  export const getSendMessageRequest = async (
    request_id: string
  ): Promise<
    IResult<
      INaver.IMessageRequest[],
      "GetSendMessageRequestOutput Invalid" | "GetSendMessageRequest Fail"
    >
  > => {
    try {
      const method = "GET";
      const path = `/sms/v2/services/${service_id}/messages?requestId=${request_id}`;
      const timestamp = Date.now();
      const response = await Fetcher.fetch<INaver.IGetSendMessageRequestOutput>(
        getConnection({ method, path, timestamp }),
        {
          response: false,
          status: 200
        },
        method,
        path
      );

      if (!typia.is<INaver.IGetSendMessageRequestOutput>(response))
        return Result.Error.map("GetSendMessageRequestOutput Invalid" as const);

      return Result.Ok.map(response.messages);
    } catch {
      return Result.Error.map("GetSendMessageRequest Fail" as const);
    }
  };

  export const getMessage = async (
    message_id: string
  ): Promise<
    IResult<INaver.IMessage[], "GetMessageOutput Invalid" | "GetMessage Fail">
  > => {
    try {
      const method = "GET";
      const path = `/sms/v2/services/${service_id}/messages/${message_id}`;
      const timestamp = Date.now();
      const response = await Fetcher.fetch<INaver.IGetMessageOutput>(
        getConnection({ method, path, timestamp }),
        {
          response: false,
          status: 200
        },
        method,
        path
      );

      if (!typia.is<INaver.IGetMessageOutput>(response))
        return Result.Error.map("GetMessageOutput Invalid" as const);

      return Result.Ok.map(response.messages);
    } catch (err) {
      console.log(err);
      return Result.Error.map("GetMessage Fail" as const);
    }
  };
}

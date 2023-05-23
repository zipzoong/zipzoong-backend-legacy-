import { Result } from "@UTIL";
import { IResult, Omit } from "@TYPE";
import { Fetcher, IConnection } from "@nestia/fetcher";
import typia from "typia";
import { INaver } from "./naver.interface";
import { Configuration } from "@INFRA/config";

export namespace NaverSENS {
  const service_id = Configuration.NAVER_SENS_SERVICE_ID;
  const access_key = Configuration.NAVER_SENS_ACCESS_KEY;
  const secret_key = Configuration.NAVER_SENS_SECRET_KEY;
  const caller = Configuration.NAVER_SENS_CALLER;

  const connection = (method: "GET" | "POST"): IConnection => ({
    host: "https://sens.apigw.ntruss.com/sms/v2",
    headers: {
      ...(method === "POST"
        ? { "Content-Type": "application/json; charset=utf-8" }
        : {}),
      "x-ncp-apigw-timestamp": Date.now() + "",
      "x-ncp-iam-access-key": access_key,
      "x-ncp-apigw-signature-v2": secret_key
    }
  });

  /**
   * 메시지 전송 함수
   * naver sens 서비스와 연동
   *
   * @param input 메시지 전송 정보
   * @return 성공시 message_id, 실패시 실패 메시지를 반환
   */
  export const send = async (
    input: Omit<INaver.ISendInput, "from">
  ): Promise<IResult<string, string>> => {
    try {
      const response = await Fetcher.fetch<
        INaver.ISendInput,
        INaver.ISendOutput
      >(
        connection("POST"),
        {
          response: false
        },
        "POST",
        `/services/${service_id}/messages`,
        { ...input, from: caller },
        typia.createAssertStringify<INaver.ISendInput>()
      );

      if (!typia.is<INaver.ISendOutput>(response)) {
        console.log("message send response dto invalid");
        return Result.Error.map("Message Send Fail");
      }

      if (response.statusName === "fail")
        return Result.Error.map("Message Send Fail");

      return Result.Ok.map(response.requestId);
    } catch {
      return Result.Error.map("Message Send Fail");
    }
  };
}

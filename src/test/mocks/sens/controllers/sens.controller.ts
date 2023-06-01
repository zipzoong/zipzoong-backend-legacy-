import { Mutable } from "@TYPE";
import { INaver } from "@EXTERNAL/sms";
import { TypedBody, TypedParam, TypedQuery, TypedRoute } from "@nestia/core";
import { Controller, HttpCode, HttpStatus } from "@nestjs/common";
import typia from "typia";
import { RandomGenerator } from "@nestia/e2e";

@Controller()
export class NaverSensController {
  @HttpCode(HttpStatus.ACCEPTED)
  @TypedRoute.Post("/sms/v2/services/:serviceId/messages")
  async sendMessage(
    @TypedParam("serviceId") serviceId: string,
    @TypedBody() body: INaver.ISendMessageInput
  ): Promise<INaver.ISendMessageOutput> {
    return typia.random<INaver.ISendMessageOutput>();
  }

  @TypedRoute.Get("/sms/v2/services/:serviceId/messages")
  async getSendMessageRequest(
    @TypedParam("serviceId") serviceId: string,
    @TypedQuery() query: { requestId: string }
  ): Promise<INaver.IGetSendMessageRequestOutput> {
    const output = typia.random<Mutable<INaver.IGetSendMessageRequestOutput>>();
    const message = typia.random<Mutable<INaver.IMessageRequest>>();
    message.requestId = query.requestId;
    message.to = RandomGenerator.mobile();
    message.from = RandomGenerator.mobile();
    output.messages = [message];
    return output;
  }
}

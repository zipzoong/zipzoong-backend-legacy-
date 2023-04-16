import { RealEstateAgentService } from "@APP/user";
import {
  IRealEstateAgent,
  IUnVerifiedRealEstateAgent
} from "@DTO/user/business";
import { TypedBody, TypedParam } from "@nestia/core";
import { Controller, Get, Post } from "@nestjs/common";

@Controller("real-estate")
export class RealEstateController {
  /**
   * @summary 공인중개사 생성 API
   * @tag real_estates
   * @param body 공인중개사 생성 정보
   * @return 공인중개사 정보
   */
  @Post()
  create(
    @TypedBody() body: IRealEstateAgent.ICreate
  ): Promise<IUnVerifiedRealEstateAgent> {
    return RealEstateAgentService.create(body);
  }

  /**
   * @summary 공인중개사 조회 API
   * @tag real_estates
   * @param real_estate_id 공인중개사 ID
   * @return 공인중개사 정보
   * @throw 400 Real Estate Agent Not Found
   * @throw 412 Unprocessable Entity
   */
  @Get(":real_estate_id")
  find(
    @TypedParam("real_estate_id") real_estate_id: string
  ): Promise<IUnVerifiedRealEstateAgent | IRealEstateAgent> {
    return RealEstateAgentService.find(real_estate_id);
  }
}

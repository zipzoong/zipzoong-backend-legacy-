import { IREAgent } from "@DTO/user";
import { IPage, IPaginatedResponse } from "@DTO/common";
import { Controller, Get } from "@nestjs/common";
import { TypedParam, TypedQuery } from "@nestia/core";

@Controller("users/re-agents")
export class REAgentsController {
  /**
   * @summary 공인중개사 목록 조회 API
   * @tag re-agents
   * @tag users
   * @param query 필터링 기준
   * @return 공인중개사 목록
   */
  @Get()
  getList(
    @TypedQuery() query: IPage
  ): Promise<IPaginatedResponse<IREAgent.IResponse>> {
    throw Error();
  }

  /**
   * @summary 공인중개사 내 정보 조회 API
   * @tag re-agents
   * @tag users
   * @return 공인중개사 내 정보
   * @throw 401 Unauthorized
   * @throw 404 Not Found
   */
  @Get("me")
  getMe(): Promise<IREAgent.IPrivateResponse> {
    throw Error();
  }

  /**
   * @summary 공인중개사 조회 API
   * @tag re-agents
   * @tag users
   * @param agent_id 공인중개사 id
   * @return 공인중개사 정보
   * @throw 404 Not Found
   */
  @Get(":agent_id")
  getOne(
    @TypedParam("agent_id") agent_id: string
  ): Promise<IREAgent.IResponse> {
    throw Error();
  }
}

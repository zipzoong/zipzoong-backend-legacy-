import { IREAgent } from "@DTO/user";
import { IPaginatedResponse } from "@DTO/common";
import { Controller, Get } from "@nestjs/common";
import { TypedParam, TypedQuery } from "@nestia/core";
import { REAgentService } from "@PROVIDER/services/user/re-agent";
import { REAgentToken } from "../decorators";
import { ITokens } from "@DTO/auth";

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
    @TypedQuery() query: IREAgent.ISearch
  ): Promise<IPaginatedResponse<IREAgent.IResponse>> {
    return REAgentService.getList(query);
  }

  /**
   * @summary 공인중개사 내 정보 조회 API
   * @tag re-agents
   * @tag users
   * @return 공인중개사 내 정보
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   */
  @Get("me")
  getMe(
    @REAgentToken() payload: ITokens.IUserPayload<"real estate agent">
  ): Promise<IREAgent.IPrivateResponse> {
    return REAgentService.getMe(payload.user_id);
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
    return REAgentService.getOne(agent_id);
  }
}

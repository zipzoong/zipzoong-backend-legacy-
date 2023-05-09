import { IBusinessUser } from "@DTO/user/business_user";
import { IREAgent } from "@DTO/user/re_agent";
import { IPaginatedResponse } from "@DTO/common";
import { Controller, Get } from "@nestjs/common";
import { TypedParam, TypedQuery } from "@nestia/core";
import { REAgentToken } from "../decorators";
import { ITokens } from "@DTO/auth";
import { REAgentService } from "@PROVIDER/services/user/re_agent";

@Controller("users/re-agents")
export class REAgentsController {
  /**
   * @summary 공인중개사 목록 검색
   * @tag re-agents
   * @tag users
   * @param query 필터링 기준
   * @return 공인중개사 목록
   */
  @Get()
  getList(
    @TypedQuery() query: IBusinessUser.ISearch
  ): Promise<IPaginatedResponse<IREAgent>> {
    return REAgentService.getList(query);
  }

  /**
   * @summary 공인중개사 내 정보 조회
   * @tag re-agents
   * @tag users
   * @return 공인중개사 내 정보
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   */
  @Get("me")
  get(
    @REAgentToken() { user_id }: ITokens.IUserPayload<"real estate agent">
  ): Promise<IREAgent.IPrivate> {
    return REAgentService.Me.get(user_id);
  }

  /**
   * @summary 공인중개사 조회
   * @tag re-agents
   * @tag users
   * @param agent_id 공인중개사 id
   * @return 공인중개사 정보
   * @throw 404 Not Found
   */
  @Get(":agent_id")
  getOne(@TypedParam("agent_id") agent_id: string): Promise<IREAgent> {
    return REAgentService.getOne(agent_id);
  }
}

@Controller("users/re-agents/me/properties")
export class REAgentsMyPropertiesController {
  /**
   * 공인중개사 프로필에서 매물 목록을 추가로 불러올 때 사용한다.
   *
   * @summary 내 매물 목록 조회
   * @tag re-agents
   * @tag users
   * @param query 페이지 정보
   * @return 부동산 매물 목록
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   */
  @Get()
  getList(
    @TypedQuery() query: IREAgent.IProperty.ISearch,
    @REAgentToken() { user_id }: ITokens.IUserPayload<"real estate agent">
  ): Promise<IPaginatedResponse<IREAgent.IProperty>> {
    return REAgentService.Me.Property.getList({ user_id, page: query.page });
  }
}

@Controller("users/re-agents/:agent_id/properties")
export class REAgentsPropertiesController {
  /**
   * 공인중개사 프로필에서 매물 목록을 추가로 불러올 때 사용한다.
   *
   * @summary 매물 목록 조회
   * @tag re-agents
   * @tag re-properties
   * @param agent_id 공인중개사 id
   * @param query 페이지 정보
   * @return 부동산 매물 목록
   * @throw 404 Not Found
   */
  @Get()
  getList(
    @TypedParam("agent_id") agent_id: string,
    @TypedQuery() query: IREAgent.IProperty.ISearch
  ): Promise<IPaginatedResponse<IREAgent.IProperty>> {
    return REAgentService.Property.getList({
      user_id: agent_id,
      page: query.page
    });
  }
}

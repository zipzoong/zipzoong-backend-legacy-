import { REAgentService } from "src/providers/user";
import { IREAgent } from "@DTO/user";
import { TypedBody, TypedParam } from "@nestia/core";
import { Controller, Get, Post } from "@nestjs/common";

@Controller("re-agents")
export class REAgentController {
  /**
   * @summary 공인중개사 생성 API
   * @tag re_agents
   * @param body 공인중개사 생성 정보
   * @return 공인중개사 정보
   */
  @Post()
  create(@TypedBody() body: IREAgent.ICreate): Promise<IREAgent> {
    return REAgentService.create(body);
  }

  /**
   * @summary 공인중개사 조회 API
   * @tag re_agents
   * @param re_agent_id 공인중개사 ID
   * @return 공인중개사 정보
   * @throw 400 Real Estate Agent Not Found
   * @throw 422 Unprocessable Entity
   */
  @Get(":re_agent_id")
  find(@TypedParam("re_agent_id") re_agent_id: string): Promise<IREAgent> {
    return REAgentService.find(re_agent_id);
  }
}

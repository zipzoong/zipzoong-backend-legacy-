import { IREAgent } from "@DTO/user";
import { pipe, tap } from "@fxts/core";
import { REAgent } from "./re_agent.core";
import { prisma } from "@INFRA/DB";
import { Mutation, Query } from "../query";
import { isNull, toThrow } from "@UTIL";
import { NotFoundException } from "@nestjs/common";

export namespace REAgentService {
  export const create = (input: IREAgent.ICreate): Promise<IREAgent> =>
    pipe(
      input,

      REAgent.create,

      tap(async (agent) => {
        await prisma.$transaction([...Mutation.createREAgent(agent)]);
      })
    );

  export const find = (agent_id: string): Promise<IREAgent> =>
    pipe(
      agent_id,

      (id) => prisma.$transaction([...Query.findREAgent(id)]),

      ([user, business, agent]) =>
        isNull(agent) || isNull(business) || isNull(user)
          ? toThrow(new NotFoundException("Real Estate Agent Not Found"))
          : ([user, business, agent] as const),

      REAgent.map
    );
}

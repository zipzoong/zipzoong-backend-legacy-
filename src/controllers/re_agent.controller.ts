import { IREAgent } from "@DTO/user";
import { IPage, PaginatedResponse } from "@DTO/common";
import { Controller, Get } from "@nestjs/common";
import { TypedQuery } from "@nestia/core";

@Controller("re-agents")
export class REAgentsController {
  @Get()
  findMany(@TypedQuery() query: IPage): Promise<PaginatedResponse<IREAgent>> {
    throw Error();
  }
}

import { IREAgent } from "@DTO/user";
import { IPage, IPaginatedResponse } from "@DTO/common";
import { Controller, Get } from "@nestjs/common";
import { TypedQuery } from "@nestia/core";

@Controller("re-agents")
export class REAgentsController {
  @Get()
  findMany(
    @TypedQuery() query: IPage
  ): Promise<IPaginatedResponse<IREAgent.IResponse>> {
    throw Error();
  }
}

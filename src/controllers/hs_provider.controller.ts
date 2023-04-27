import { IPage, IPaginatedResponse } from "@DTO/common";
import { IHSProvider } from "@DTO/user";
import { TypedQuery } from "@nestia/core";
import { Controller, Get } from "@nestjs/common";

@Controller("hs-providers")
export class HSProvidersController {
  @Get()
  findMany(
    @TypedQuery() query: IPage
  ): Promise<IPaginatedResponse<IHSProvider.IResponse>> {
    throw Error();
  }
}

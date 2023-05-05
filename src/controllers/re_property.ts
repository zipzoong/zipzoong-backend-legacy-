import { IPaginatedResponse } from "@DTO/common";
import { IREProperty } from "@DTO/real_estate/re_property";
import { TypedQuery } from "@nestia/core";
import { Controller, Get } from "@nestjs/common";

@Controller("re-properties")
export class REPropertiesController {
  @Get()
  getList(
    @TypedQuery() query: IREProperty.ISearch
  ): Promise<IPaginatedResponse<IREProperty>> {
    throw Error();
  }

  /**
  @Get("")
  getOne() {}
  */
}

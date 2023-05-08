import { IPage, IPaginatedResponse } from "@DTO/common";
import { IREPropertyCategory } from "@DTO/real_estate/re_property_category";
import { TypedParam, TypedQuery } from "@nestia/core";
import { Controller, Get } from "@nestjs/common";

@Controller("re-property-super-categories")
export class REPropertySuperCategoriesController {
  @Get()
  getList(
    @TypedQuery() query: IPage
  ): Promise<IPaginatedResponse<IREPropertyCategory.ISuper>> {
    throw Error();
  }

  @Get(":super_category_id")
  getOne(
    @TypedParam("super_category_id") super_category_id: string
  ): Promise<IREPropertyCategory.ISuper> {
    throw Error();
  }
}

@Controller("re-property-middle-categories")
export class REPropertyMiddleCategoriesController {
  @Get()
  getList(
    @TypedQuery() query: IREPropertyCategory.IMiddle.ISearch
  ): Promise<IPaginatedResponse<IREPropertyCategory.IMiddle>> {
    throw Error();
  }

  @Get(":middle_category_id")
  getOne(
    @TypedParam("middle_category_id") middle_category_id: string
  ): Promise<IREPropertyCategory.IMiddle> {
    throw Error();
  }
}

@Controller("re-property-sub-categories")
export class REPropertysubCategoriesController {
  @Get()
  getList(
    @TypedQuery() query: IREPropertyCategory.ISub.ISearch
  ): Promise<IPaginatedResponse<IREPropertyCategory.ISub>> {
    throw Error();
  }

  @Get(":sub_category_id")
  getOne(
    @TypedParam("sub_category_id") sub_category_id: string
  ): Promise<IREPropertyCategory.ISub> {
    throw Error();
  }
}

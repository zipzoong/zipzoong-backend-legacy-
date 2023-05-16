import { IRateCategory } from "@DTO/rate_category";
import { TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { RateCategory } from "@PROVIDER/rate_category";

@Controller("rate-categories")
export class RateCategoriesController {
  @TypedRoute.Get()
  getList(
    @TypedQuery() query: IRateCategory.ISearch
  ): Promise<IRateCategory[]> {
    return RateCategory.Service.getList(query);
  }
}

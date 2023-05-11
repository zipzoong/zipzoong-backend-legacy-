import { IBusinessRateCategory } from "@DTO/business_rate_category";
import { TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";

@Controller("business-rate-categories")
export class BusinessRateCategoriesController {
  @TypedRoute.Get()
  getList(
    @TypedQuery() query: IBusinessRateCategory.ISearch
  ): Promise<IBusinessRateCategory[]> {
    throw Error();
  }
}

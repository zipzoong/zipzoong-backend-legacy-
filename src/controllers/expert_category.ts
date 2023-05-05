import { IExpertCategory } from "@DTO/expert_category";
import { TypedParam, TypedQuery } from "@nestia/core";
import { Controller, Get } from "@nestjs/common";
import { ExpertCategory } from "@PROVIDER/services/expert_category";

@Controller("expert-super-categories")
export class ExpertSuperCategoriesController {
  /**
   * @summary 상위 전문 분야 목록 조회 API
   * @tag expert-categories
   * @param query 상위 전문 분야 필터링 조건
   * @return 상위 전문 분야 목록
   */
  @Get()
  getList(
    @TypedQuery() query: IExpertCategory.ISuperSearch
  ): Promise<IExpertCategory.Super[]> {
    return ExpertCategory.getSuperCategoryList(query);
  }

  /**
   * @summary 상위 전문 분야 조회 API
   * @tag expert-categories
   * @param super_id 상위 전문 분야 id
   * @return 상위 전문 분야 정보
   * @throw 404 NotFound
   */
  @Get(":super_id")
  getOne(
    @TypedParam("super_id") super_id: string
  ): Promise<IExpertCategory.Super> {
    return ExpertCategory.getSuperCategory(super_id);
  }
}

@Controller("expert-super-categories/:super_id/expert-sub-categories")
export class ExpertSubCategoriesController {
  /**
   * @summary 하위 전문 분야 목록 조회 API
   * @tag expert-categories
   * @param super_id 상위 전문 분야 id
   * @return 하위 전문 분야 목록
   * @throw 404 NotFound
   */
  @Get()
  getList(
    @TypedParam("super_id") super_id: string
  ): Promise<IExpertCategory.Sub[]> {
    return ExpertCategory.getSubCategoryList(super_id);
  }
}

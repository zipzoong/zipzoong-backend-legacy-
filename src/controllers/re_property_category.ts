import { IREPropertyCategory } from "@DTO/category/re_property";
import { TypedParam, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import REPropertyCategory from "@PROVIDER/re_property_category";

@Controller("re-property-categories/super")
export class REPropertySuperCategoriesController {
  /**
   * @summary 부동산 매물 상위 카테고리 목록 조회
   * @tag re-property-categories
   * @return 부동산 매물 상위 카테고리 목록
   */
  @TypedRoute.Get()
  getList(): Promise<IREPropertyCategory.ISuper[]> {
    return REPropertyCategory.Service.Super.getList();
  }

  /**
   * @summary 부동산 매물 상위 카테고리 조회
   * @tag re-property-categories
   * @param super_category_id 부동산 매물 상위 카테고리 id
   * @return 부동산 매물 상위 카테고리
   * @throw 404 Not Found
   */
  @TypedRoute.Get(":super_category_id")
  getOne(
    @TypedParam("super_category_id") super_category_id: string
  ): Promise<IREPropertyCategory.ISuper> {
    return REPropertyCategory.Service.Super.getOne(super_category_id);
  }
}

@Controller("re-property-categories/middle")
export class REPropertyMiddleCategoriesController {
  /**
   * @summary 부동산 매물 중위 카테고리 조회
   * @tag re-property-categories
   * @param middle_category_id 부동산 매물 중위 카테고리 id
   * @return 부동산 매물 중위 카테고리
   * @throw 404 Not Found
   */
  @TypedRoute.Get(":middle_category_id")
  getOne(
    @TypedParam("middle_category_id") middle_category_id: string
  ): Promise<IREPropertyCategory.IMiddle> {
    return REPropertyCategory.Service.Middle.getOne(middle_category_id);
  }
}

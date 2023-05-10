import { IPaginatedResponse } from "@DTO/common";
import { IREPropertyCategory } from "@DTO/re_property_category";
import { TypedParam, TypedQuery } from "@nestia/core";
import { Controller, Get } from "@nestjs/common";
import REPropertyCategory from "@PROVIDER/re_property_category";

@Controller("re-property-super-categories")
export class REPropertySuperCategoriesController {
  /**
   * @summary 부동산 매물 상위 카테고리 목록 조회
   * @tag re-property-categories
   * @param query 부동산 매물 상위 카테고리 필터링 조건
   * @return 부동산 매물 상위 카테고리 목록
   */
  @Get()
  getList(
    @TypedQuery() query: IREPropertyCategory.ISuper.ISearch
  ): Promise<IPaginatedResponse<IREPropertyCategory.ISuper>> {
    return REPropertyCategory.Service.Super.getList(query);
  }
  /**
   * @summary 부동산 매물 상위 카테고리 조회
   * @tag re-property-categories
   * @param super_category_id 부동산 매물 상위 카테고리 id
   * @return 부동산 매물 상위 카테고리
   * @throw 404 Not Found
   */
  @Get(":super_category_id")
  getOne(
    @TypedParam("super_category_id") super_category_id: string
  ): Promise<IREPropertyCategory.ISuper> {
    return REPropertyCategory.Service.Super.getOne(super_category_id);
  }
}

@Controller("re-property-middle-categories")
export class REPropertyMiddleCategoriesController {
  /**
   * @summary 부동산 매물 중간 카테고리 목록 조회
   * @tag re-property-categories
   * @param query 부동산 매물 중간 카테고리 필터링 조건
   * @return 부동산 매물 중간 카테고리 목록
   */
  @Get()
  getList(
    @TypedQuery() query: IREPropertyCategory.IMiddle.ISearch
  ): Promise<IPaginatedResponse<IREPropertyCategory.IMiddle>> {
    return REPropertyCategory.Service.Middle.getList(query);
  }

  /**
   * @summary 부동산 매물 중간 카테고리 조회
   * @tag re-property-categories
   * @param middle_category_id 부동산 매물 중간 카테고리 id
   * @return 부동산 매물 중간 카테고리
   * @throw 404 Not Found
   */
  @Get(":middle_category_id")
  getOne(
    @TypedParam("middle_category_id") middle_category_id: string
  ): Promise<IREPropertyCategory.IMiddle> {
    return REPropertyCategory.Service.Middle.getOne(middle_category_id);
  }
}

@Controller("re-property-sub-categories")
export class REPropertysubCategoriesController {
  /**
   * @summary 부동산 매물 하위 카테고리 목록 조회
   * @tag re-property-categories
   * @param query 부동산 매물 하위 카테고리 필터링 조건
   * @return 부동산 매물 하위 카테고리 목록
   */
  @Get()
  getList(
    @TypedQuery() query: IREPropertyCategory.ISub.ISearch
  ): Promise<IPaginatedResponse<IREPropertyCategory.ISub>> {
    return REPropertyCategory.Service.Sub.getList(query);
  }

  /**
   * @summary 부동산 매물 하위 카테고리 조회
   * @tag re-property-categories
   * @param sub_category_id 부동산 매물 하위 카테고리 id
   * @return 부동산 매물 하위 카테고리
   * @throw 404 Not Found
   */
  @Get(":sub_category_id")
  getOne(
    @TypedParam("sub_category_id") sub_category_id: string
  ): Promise<IREPropertyCategory.ISub> {
    return REPropertyCategory.Service.Sub.getOne(sub_category_id);
  }
}

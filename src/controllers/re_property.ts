import { IREProperty } from "@DTO/re_property";
import { TypedBody, TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import REProperty from "@PROVIDER/re_property";
import { Token } from "./decorators";

@Controller("re-properties")
export class REPropertiesController {
  /**
   * @summary 부동산 매물 목록 검색
   * @tag re-properties
   * @param query 부동산 매물 필터링 조건
   * @return 부동산 매물 목록
   */
  @TypedRoute.Get()
  getList(
    @TypedQuery() query: IREProperty.ISearch
  ): Promise<IREProperty.IPaginatedResponse> {
    return REProperty.Service.getList(query);
  }

  /**
   * @summary 부동산 매물 복수 등록
   * @tag re-properties
   * @param query 부동산 매물 필터링 조건
   * @return 부동산 매물 목록
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   */
  @TypedRoute.Post()
  createMany(
    @TypedBody() body: IREProperty.ICreateManyRequest,
    @Token.UserId("real estate agent") user_id: string
  ): Promise<void> {
    return REProperty.Service.createMany({ input: body.data, user_id });
  }
}

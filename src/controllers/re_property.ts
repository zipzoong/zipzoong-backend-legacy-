import { ITokens } from "@DTO/auth";
import { IPaginatedResponse } from "@DTO/common";
import { IREProperty } from "@DTO/re_property";
import { TypedBody, TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import REProperty from "@PROVIDER/re_property";
import { REAgentToken } from "./decorators";

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
  ): Promise<IPaginatedResponse<IREProperty>> {
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
    @REAgentToken() { user_id }: ITokens.IUserPayload<"real estate agent">
  ): Promise<void> {
    return REProperty.Service.createMany({ input: body.data, user_id });
  }
}

import { IAgreement } from "@DTO/agreement";
import { TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import Agreement from "@PROVIDER/agreement";

@Controller("agreements")
export class AgreementsController {
  /**
   * @summary 약관 조회
   * @tag agreements
   * @param query 약관 검색 조건
   * @return 약관 목록
   */
  @TypedRoute.Get()
  getList(
    @TypedQuery() query: IAgreement.ISearch
  ): Promise<IAgreement.IResponse[]> {
    return Agreement.Service.getList(query);
  }
}

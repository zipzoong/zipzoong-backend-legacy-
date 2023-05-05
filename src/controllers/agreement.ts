import { IAgreement } from "@DTO/agreement";
import { TypedQuery } from "@nestia/core";
import { Controller, Get } from "@nestjs/common";
import { AgreementService } from "@PROVIDER/services/agreement";

@Controller("agreements")
export class AgreementsController {
  /**
   * @summary 약관 조회 API
   * @tag agreements
   * @param query 약관 검색 조건
   * @return 약관 목록
   */
  @Get()
  getList(
    @TypedQuery() query: IAgreement.ISearch
  ): Promise<IAgreement.IResponse[]> {
    return AgreementService.getList(query);
  }
}

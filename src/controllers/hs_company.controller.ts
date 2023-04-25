import { HSCompanyService } from "src/providers/user";
import { IHSCompany } from "@DTO/user";
import { TypedBody, TypedParam } from "@nestia/core";
import { Controller, Get, Post } from "@nestjs/common";

@Controller("hs-companies")
export class HSCompanyController {
  /**
   * @summary 생활서비스 회사 생성 API
   * @tag hs_companies
   * @param body 생활서비스 회사 생성 정보
   * @return 생활서비스 회사 정보
   */
  @Post()
  create(@TypedBody() body: IHSCompany.ICreate): Promise<IHSCompany> {
    return HSCompanyService.create(body);
  }

  /**
   * @summary 생활서비스 회사 조회 API
   * @tag hs_companies
   * @param hs_company_id 생활서비스 회사 ID
   * @return 생활서비스 회사 정보
   * @throw 400 Home Service Company Not Found
   * @throw 422 Unprocessable Entity
   */
  @Get(":hs_company_id")
  find(
    @TypedParam("hs_company_id") hs_company_id: string
  ): Promise<IHSCompany> {
    return HSCompanyService.find(hs_company_id);
  }
}

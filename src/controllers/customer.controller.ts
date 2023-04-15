import { ICustomer } from "@DTO/user/customer";
import { TypedBody, TypedParam } from "@nestia/core";
import { Controller, Get, Post } from "@nestjs/common";

@Controller("customers")
export class CustomerController {
  /**
   * @summary 일반 고객 생성 API
   * @tag customers
   * @param body 일반 고객 생성 정보
   * @return 일반 고객 정보
   */
  @Post()
  create(@TypedBody() body: ICustomer.ICreate): Promise<ICustomer> {
    throw Error("Function is not Implemented.");
  }

  /**
   * @summary 일반 고객 조회 API
   * @tag customers
   * @param customer_id 일반 고객 ID
   * @return 일반 고객 정보
   */
  @Get(":customer_id")
  find(@TypedParam("customer_id") customer_id: string): Promise<ICustomer> {
    throw Error("Function is not Implemented.");
  }
}

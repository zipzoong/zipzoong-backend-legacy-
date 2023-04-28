import { ICustomer } from "@DTO/user";
import { TypedParam } from "@nestia/core";
import { Controller, Get } from "@nestjs/common";

@Controller("users/customers")
export class CustomersController {
  /**
   * @summary 일반 고객 내 정보 조회 API
   * @tag customers
   * @tag users
   * @return 일반 고객 내 정보
   * @throw 401 Unauthorized
   * @throw 404 Not Found
   */
  @Get("me")
  getMe(): Promise<ICustomer.IPrivateResponse> {
    throw Error();
  }

  /**
   * @summary 일반 고객 조회 API
   * @tag customers
   * @tag users
   * @param customer_id 일반 고객 id
   * @return 일반 고객 정보
   * @throw 404 Not Found
   */
  @Get(":customer_id")
  getOne(
    @TypedParam("customer_id") customer_id: string
  ): Promise<ICustomer.IResponse> {
    throw Error();
  }
}

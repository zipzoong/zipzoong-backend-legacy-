import { ITokens } from "@DTO/auth";
import { ICustomer } from "@DTO/user/customer";
import { TypedParam } from "@nestia/core";
import { Controller, Get } from "@nestjs/common";
import { CustomerService } from "@PROVIDER/services/user/customer";
import { CustomerToken } from "../decorators";

@Controller("users/customers")
export class CustomersController {
  /**
   * @tag users
   * @return 일반 고객 내 정보
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   */
  @Get("me")
  getMe(
    @CustomerToken() payload: ITokens.IUserPayload<"customer">
  ): Promise<ICustomer.IPrivate> {
    return CustomerService.getMe(payload.user_id);
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
  getOne(@TypedParam("customer_id") customer_id: string): Promise<ICustomer> {
    return CustomerService.getOne(customer_id);
  }
}

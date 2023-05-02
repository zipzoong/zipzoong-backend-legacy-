import { ICustomer } from "@DTO/user";
import { TypedParam } from "@nestia/core";
import { Controller, ForbiddenException, Get } from "@nestjs/common";
import { Crypto } from "@PROVIDER/services/authentication";
import { CustomerService } from "@PROVIDER/services/user/customer";
import { Authorization } from "../decorators";

const InvalidUserType = new ForbiddenException("Invalid User Type");

@Controller("users/customers")
export class CustomersController {
  /**
   * @summary 일반 고객 내 정보 조회 API
   * @tag customers
   * @tag users
   * @return 일반 고객 내 정보
   * @throw 401 Unauthorized
   * @throw 404 Not Found
   * @throw 403 Forbidden
   */
  @Get("me")
  getMe(
    @Authorization("bearer") token: string
  ): Promise<ICustomer.IPrivateResponse> {
    const { user_id, user_type } = Crypto.getUserTokenPayload(token);
    if (user_type !== "customer") throw InvalidUserType;
    return CustomerService.getMe(user_id);
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

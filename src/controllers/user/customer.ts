import { ITokens } from "@DTO/auth";
import { IPaginatedResponse } from "@DTO/common";
import { ICustomer } from "@DTO/user/customer";
import { IZipzoongCareRequest } from "@DTO/zipzoong_care";
import { TypedParam, TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import Customer from "@PROVIDER/user/customer";
import ZipzoongCareRequest from "@PROVIDER/zipzoong_care_request";
import { CustomerToken } from "../decorators";

@Controller("users/customers")
export class CustomersController {
  /**
   * @summary 내 정보 조회
   * @tag customers
   * @tag users
   * @return 일반 고객 내 정보
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   */
  @TypedRoute.Get("me")
  get(
    @CustomerToken() payload: ITokens.IUserPayload<"customer">
  ): Promise<ICustomer.IPrivate> {
    return Customer.Service.Me.get({ user_id: payload.user_id });
  }

  @TypedRoute.Get("me/zipzoong-care/requests")
  getList(
    @CustomerToken() { user_id }: ITokens.IUserPayload<"customer">,
    @TypedQuery() query: IZipzoongCareRequest.ISearch
  ): Promise<IPaginatedResponse<IZipzoongCareRequest>> {
    return ZipzoongCareRequest.Service.getList({ user_id, search: query });
  }

  /**
   * @summary 일반 고객 조회
   * @tag customers
   * @tag users
   * @param customer_id 일반 고객 id
   * @return 일반 고객 정보
   * @throw 404 Not Found
   */
  @TypedRoute.Get(":customer_id")
  getOne(@TypedParam("customer_id") customer_id: string): Promise<ICustomer> {
    return Customer.Service.getOne({ user_id: customer_id });
  }
}

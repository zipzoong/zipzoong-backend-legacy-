import { ICustomer } from "@DTO/user/customer";
import { IZipzoongCareRequest } from "@DTO/zipzoong_care_request";
import { TypedBody, TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import Customer from "@PROVIDER/user/customer";
import ZipzoongCareRequest from "@PROVIDER/user/customer/zipzoong_care_request";
import { Token } from "../decorators";

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
  get(@Token.UserId("customer") user_id: string): Promise<ICustomer.IPrivate> {
    return Customer.Service.Me.get({ user_id });
  }

  /**
   * @summary 집중 케어 신청 목록 검색
   * @tag customers
   * @tag zipzoong-care
   * @param query 목록 검색 조건
   * @return 집중 케어 신청 목록
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   */
  @TypedRoute.Get("me/zipzoong-care/requests")
  getList(
    @Token.UserId("customer") user_id: string,
    @TypedQuery() query: IZipzoongCareRequest.ISearch
  ): Promise<IZipzoongCareRequest.IPaginatedResponse> {
    return ZipzoongCareRequest.Service.getList({ user_id, search: query });
  }

  /**
   * @summary 집중 케어 신청
   * @tag customers
   * @tag zipzoong-care
   * @param body 집중 케어 신청 정보
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   */
  @TypedRoute.Post("me/zipzoong-care/requests")
  create(
    @Token.UserId("customer") user_id: string,
    @TypedBody() body: IZipzoongCareRequest.ICreateRequest
  ): Promise<void> {
    return ZipzoongCareRequest.Service.create({ input: body, user_id });
  }

  /**
   * @summary 일반 고객 조회
   * @tag customers
   * @tag users
   * @param customer_id 일반 고객 id
   * @return 일반 고객 정보
   * @throw 404 Not Found
  @TypedRoute.Get(":customer_id")
  getOne(@TypedParam("customer_id") customer_id: string): Promise<ICustomer> {
    return Customer.Service.getOne({ user_id: customer_id });
  }
  */
}

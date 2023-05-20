import { IReview } from "@DTO/review";
import { TypedBody, TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { CustomerToken } from "./decorators";
import { ITokens } from "@DTO/auth";
import { Review } from "@PROVIDER/review";

@Controller("reviews")
export class ReviewsController {
  /**
   * 사업자를 기준으로 리뷰를 검색하거나 리뷰어를 기준으로 검색할 수 있습니다.
   *
   * @summary 리뷰 목록 검색
   * @tag reviews
   * @param query 리뷰어 혹은 리뷰 대상자를 조건으로 지정 가능
   * @returns 리뷰 목록
   */
  @TypedRoute.Get()
  getList(
    @TypedQuery() query: IReview.ISearch
  ): Promise<IReview.IPaginatedResponse> {
    return Review.Service.getList(query);
  }

  /**
   * @summary 리뷰 등록
   * @tag reviews
   * @param body 리뷰 내용과 평점 리스트를 포함
   * @throw 401 Unauthorized
   * @throw 403 Forbidden
   * @throw 404 Not Found
   */
  @TypedRoute.Post()
  create(
    @CustomerToken() { user_id }: ITokens.IUserPayload<"customer">,
    @TypedBody() body: IReview.ICreateRequest
  ): Promise<void> {
    return Review.Service.create({
      input: body,
      user_id
    });
  }
}

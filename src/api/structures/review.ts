import { IDateTime, IPage } from "@DTO/common";
import { Mutable, Omit } from "@TYPE";

export interface IReview extends IDateTime {
  readonly id: string;
  readonly reviewer: IReview.IReviewer;
  readonly reviewee: IReview.IReviewee;
  /** @maxLength 500 */
  readonly content: string;
  /**
   * @type int
   * @minimum 0
   * @maximum 10
   */
  readonly rating: number;
}

export namespace IReview {
  export interface ISearch extends IPage {
    reviewer_id?: string;
    reviewee_id?: string;
  }
  export interface IReviewer {
    readonly id: string;
    readonly name: string;
  }

  export interface IReviewee {
    readonly id: string;
    readonly name: string;
  }

  export interface ICreate
    extends Pick<Mutable<IReview>, "rating" | "content"> {
    reviewer_id: string;
    reviewee_id: string;
  }

  export type ICreateRequest = Omit<ICreate, "reviewer_id">;
}

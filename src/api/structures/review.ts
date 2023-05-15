import { IRateCategory } from "@DTO/rate_category";
import { IDateTime, IPage } from "@DTO/common";
import { Omit } from "@TYPE";

export interface IReview extends IDateTime {
  readonly id: string;
  readonly reviewer: IReview.IReviewer;
  readonly reviewee: IReview.IReviewee;
  readonly content: string;
  readonly rates: IReview.IRate[];
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

  export interface IRate {
    /**
     * @type uint
     * @maximum 10
     */
    readonly score: number;
    readonly category: IRateCategory;
  }

  export interface ICreateRate {
    score: number;
    category_id: string;
  }

  export interface ICreate {
    reviewer_id: string;
    reviewee_id: string;
    content: string;
    rates: ICreateRate[];
  }

  export type ICreateRequest = Omit<ICreate, "reviewer_id">;
}

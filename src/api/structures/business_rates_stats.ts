import { IBusinessRateCategory } from "./business_rate_category";
import { IPage } from "./common";
import { IBusinessUser } from "./user/business_user";

export interface IBusinessRatesStats {
  readonly id: string;
  readonly ratee: IBusinessRatesStats.IRate.IRatee;
  readonly rate_category: IBusinessRateCategory;
  readonly avg: number;
}

export namespace IBusinessRatesStats {
  export interface ISearch extends IPage {
    ratee_id: string[];
    rate_category_type: IBusinessRateCategory.Type[];
    rate_category_name: string[];
  }

  export namespace IRate {
    export interface IRatee {
      readonly id: string;
      readonly name: string;
      readonly business_type: IBusinessUser.Type;
    }
    export interface ICreate {
      ratee_id: string;
      rate_category_id: string;
      /**
       * @type uint
       * @maximum 10
       */
      score: number;
    }
  }
}

import { IDateTime } from "@DTO/common";

export interface IAgreement {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly user_type: IAgreement.UserType;
}

export namespace IAgreement {
  export type UserType = "all" | "customer" | "business" | "HS" | "RE";

  export interface ISearch {
    /**
     * 약관 조회 필터링 기준(최소 1개 필요)
     * - all 전체 약관
     * - customer 일반 고객 대상 약관
     * - business 사업자 대상 약관
     * - RE 공인중개사 대상 약관
     * - HS 생활서비스 대상 약관
     *
     * @minItems 1
     */
    filter: UserType[];
  }

  export type IResponse = IAgreement & IDateTime;
}

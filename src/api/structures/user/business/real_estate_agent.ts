import { Omit } from "@TYPE";
import { IBusinessUser } from "./business_user";

export type IRealEstateAgent =
  | IRealEstateAgent.IUnVerified
  | IRealEstateAgent.IVerified;

export namespace IRealEstateAgent {
  export interface MetaData {
    /**
     * 공인중개사 분류를 의미한다.
     * - true 개업 공인중개사
     * - false 소속 공인중개사
     */
    readonly is_licensed: boolean;
    /**
     * 부동산개설등록번호
     */
    readonly real_estate_num: string;
    /**
     * 부동산 상호명
     */
    readonly real_estate_name: string;
    /**
     * 부동산 대표번호
     */
    readonly real_estate_phone: string;
    /**
     * 부동산 대표자명
     */
    readonly licensed_agent_name: string;
    /**
     * 전문 분야
     */
    readonly specialized_field: ISpecializedField;
  }
  export type IUnVerified = IBusinessUser.IUnVerified<"real estate"> &
    Partial<MetaData>;

  export type IVerified = IBusinessUser.IVerified<"real estate"> & MetaData;

  export interface ISpecializedField {
    readonly id: string;
    readonly name: string;
  }

  export interface ICreate
    extends IBusinessUser.ICreate<"real estate">,
      Partial<Omit<MetaData, "specialized_field">> {
    specialized_field_id?: string;
  }
}

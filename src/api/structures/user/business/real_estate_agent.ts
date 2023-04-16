import { IBusinessUser } from "./business_user";

export type IRealEstateAgent =
  | IRealEstateAgent.IUnVerified
  | IRealEstateAgent.IVerified;

export namespace IRealEstateAgent {
  export interface IUnVerified
    extends IBusinessUser.IUnVerifiedBase<"real estate"> {
    readonly is_verified: false;
    readonly is_licensed: boolean | null;
    readonly real_estate_num: string | null;
    readonly real_estate_name: string | null;
    readonly real_estate_phone: string | null;
    readonly licensed_agent_name: string | null;
    readonly specialized_field_id: string | null;
  }

  export interface IVerified extends IBusinessUser.IBase {
    readonly is_verified: true;
    readonly email: string;
    readonly phone: string;
    readonly address_first: string;
    readonly is_licensed: boolean;
    readonly real_estate_num: string;
    readonly real_estate_name: string;
    readonly real_estate_phone: string;
    readonly licensed_agent_name: string;
    readonly specialized_field_id: string;
  }

  export interface ISpecializedField {
    readonly id: string;
    readonly name: string;
  }

  export interface ICreate extends IBusinessUser.ICreate<"real estate"> {
    is_licensed?: boolean;
    real_estate_num?: string;
    real_estate_name?: string;
    real_estate_phone?: string;
    licensed_agent_name?: string;
    specialized_field_id?: string;
  }
}

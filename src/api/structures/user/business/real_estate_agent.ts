import { IBusinessUser } from "./business_user";

export interface IRealEstateAgent extends IBusinessUser.IBase<"real estate"> {
  readonly is_licensed: boolean;
  readonly real_estate_num: string;
  readonly real_estate_name: string;
  readonly real_estate_phone: string;
  readonly licensed_agent_name: string;
  readonly specialized_field_id: string;
}

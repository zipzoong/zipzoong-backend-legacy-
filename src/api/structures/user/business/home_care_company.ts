import { IBusinessUser } from "./business_user";

export interface IHomeCareCompany extends IBusinessUser.IBase<"home care"> {
  readonly business_registration_num: string;
  readonly specialized_field_id: string;
}

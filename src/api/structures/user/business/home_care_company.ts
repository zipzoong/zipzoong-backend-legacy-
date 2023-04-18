import { IBusinessUser } from "./business_user";

export interface IHomeCareCompany extends IBusinessUser.IVerified<"home care"> {
  readonly business_registration_num: string;
  readonly specialized_field: IHomeCareCompany.ISpecializedField | null;
}

export namespace IHomeCareCompany {
  export interface ISpecializedField {
    readonly id: string;
    readonly name: string;
  }
}

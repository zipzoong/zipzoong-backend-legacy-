import { IUser } from "../user";

export namespace IBusinessUser {
  export type Type = "real estate" | "home care";
  export interface IBase<T extends Type = Type>
    extends IUser.IBase<"business"> {
    readonly email: string;
    readonly phone: string;
    readonly address_first: string;
    readonly business_type: T;
    readonly is_verified: boolean;
    readonly introduction_title: string;
    readonly introduction_content: string;
    readonly certifications: ICertification[];
  }

  export interface ICertification {
    readonly id: string;
    readonly image_url: string;
  }
}

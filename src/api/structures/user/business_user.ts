import { IHSProvider } from "./hs_provider";
import { IREAgent } from "./re_agent";
import { IUser } from "./user";

export type IBusinessUser = IREAgent | IHSProvider;

export namespace IBusinessUser {
  export type Type = Exclude<IUser.Type, "customer">;

  export interface IBase<T extends Type> extends IUser.IBase<T> {
    readonly phone: string;
    readonly profile_image_url: string;
    readonly is_verified: boolean;
    readonly introduction: IBusinessUser.IIntroduction;
    readonly expertises: IExpertise[];
  }

  export interface IExpertise {
    readonly id: string;
    readonly name: string;
  }

  export interface IIntroduction {
    readonly title: string;
    readonly content: string;
  }
}

import { IHSProvider } from "./hs_provider";
import { IREAgent } from "./re_agent";
import { IUser } from "./user";

export type IBusiness = IREAgent | IHSProvider;

export namespace IBusiness {
  export type Type = Exclude<IUser.Type, "customer">;

  export interface IBase<T extends Type> extends IUser.IBase<T> {
    readonly phone: string;
    readonly profile_image_url: string;
    readonly is_verified: boolean;
    readonly introduction: IBusiness.IIntroduction;
  }

  export interface IIntroduction {
    readonly title: string;
    readonly content: string;
  }
}

import { IHSProvider } from "./hs_provider.interface";
import { IREAgent } from "./re_agent.interface";
import { IUser } from "./user.interface";

export type IBusinessUser = IREAgent | IHSProvider;

export namespace IBusinessUser {
  export type Type = Exclude<IUser.Type, "customer">;

  export interface IBase<T extends Type> extends IUser.IBase<T> {
    readonly phone: string;
    readonly profile_image_url: string;
    readonly is_verified: boolean;
    readonly introduction: IBusinessUser.IIntroduction;
    readonly expertise_ids: string[];
  }

  export interface IExpertise {
    readonly id: string;
    readonly name: string;
  }

  export interface IIntroduction {
    readonly title: string;
    readonly content: string;
  }

  export type IResponse = IREAgent.IResponse | IHSProvider.IResponse;
}

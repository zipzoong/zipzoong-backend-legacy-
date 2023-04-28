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
    readonly super_expertise_id: string;
    readonly sub_expertise_ids: string[];
  }

  export interface IExpertise {
    readonly id: string;
    readonly name: string;
  }

  export interface ICertification {
    readonly id: string;
    readonly image_url: string;
  }

  export interface IIntroduction {
    readonly title: string;
    readonly content: string;
  }

  export interface IPrivateData extends IUser.IPrivateData {
    /**
     * 사업자 증명 서류 사진 목록
     */
    readonly business_certifications: ICertification[];
  }

  export interface IExpertiseData {
    readonly super_expertise: IExpertise;
    readonly sub_expertises: IExpertise[];
  }
}

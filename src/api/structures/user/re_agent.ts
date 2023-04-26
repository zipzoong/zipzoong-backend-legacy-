import { Omit } from "@TYPE";
import { IBusiness } from "./business";
import { IUser } from "./user";

export interface IREAgent extends IBusiness.IBase<"real estate agent"> {
  readonly is_licensed: boolean;
  readonly real_estate: IREAgent.IRealEstate;
}

export namespace IREAgent {
  export interface IRealEstate {
    readonly num: string;
    readonly name: string;
    readonly phone: string;
    readonly licensed_agent_name: string;
    readonly address: IUser.IAddress;
  }

  export interface ICreate extends IUser.ICreate<"real estate agent"> {
    phone: string;
    profile_image_url: string;
    introduction: IBusiness.IIntroduction;
    is_licensed: boolean;
    real_estate: IREAgent.IRealEstate;
  }

  export interface ICreateRequest
    extends Partial<Omit<ICreate, "email" | "phone">> {
    /**
     * 이메일 인증 코드
     */
    email_access_code?: string;
    /**
     * 휴대폰 인증 코드
     */
    phone_access_code?: string;
  }
}

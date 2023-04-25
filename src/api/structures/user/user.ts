export type IUser = ICustomer | IREAgent | IHSProvider;

export namespace IUser {
  export type Type = "customer" | "real estate agent" | "home service provider";

  export type GenderType = "female" | "male" | "other";

  export interface IAddress {
    readonly first: string;
    readonly second: string | null;
  }

  export interface IBase<T extends Type> {
    readonly type: T;
    readonly id: string;
    readonly name: string;
    /**
     * @format email
     */
    readonly email: string | null;
    readonly phone: string | null;
    readonly profile_image_url: string | null;
  }
}

export interface ICustomer extends IUser.IBase<"customer"> {
  readonly phone: string;
  /**
   * YYYY-MM-DD
   * @format date
   */
  readonly birth: string | null;
  readonly gender: IUser.GenderType | null;
  readonly address: IUser.IAddress | null;
}

export namespace IBusiness {
  export interface IIntroduction {
    readonly title: string;
    readonly content: string;
  }
}

export interface IREAgent extends IUser.IBase<"real estate agent"> {
  readonly phone: string;
  readonly is_verified: boolean;
  readonly is_licensed: boolean;
  readonly introduction: IBusiness.IIntroduction;
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
}

export interface IHSProvider extends IUser.IBase<"home service provider"> {
  readonly phone: string;
  readonly is_verified: boolean;
  readonly introduction: IHSProvider.IIntroduction;
  readonly address: IUser.IAddress;
  readonly business_registration_num: string;
}

export namespace IHSProvider {
  export interface IntroductionImage {
    readonly id: string;
    readonly image_url: string;
  }
  export interface IIntroduction extends IBusiness.IIntroduction {
    readonly images: IntroductionImage[];
  }
}

// 약관 동의, accessor, 전문 분야...

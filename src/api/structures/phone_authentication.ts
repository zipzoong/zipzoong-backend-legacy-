import { Mutable } from "@TYPE";
export interface IPhoneAuthentication {
  /**
   * @format ^[0-9]+$
   */
  readonly phone: string;
  /**
   * @format ^[0-9]{6}$
   */
  readonly code: string;
}

export namespace IPhoneAuthentication {
  export namespace IRequest {
    export type Input = Pick<Mutable<IPhoneAuthentication>, "phone">;
    export type Output = Pick<IPhoneAuthentication, "code">;
  }
  export namespace IVerify {
    export type Input = Mutable<IPhoneAuthentication>;
    export interface Output {
      /**
       * 휴대폰 인증 정보 식별자
       *
       * 회원가입/회원정보 수정시 해당 정보를 전달하면 인증 정보에 저장된 휴대폰 번호가 사용자 정보에 적용됩니다.
       */
      readonly phone_authentication_id: string;
    }
  }
}

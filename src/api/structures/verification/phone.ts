import { Mutable } from "@TYPE";

export interface IPhoneVerification {
  /** @format ^[0-9]+$ */
  readonly phone: string;
  /** @format ^[0-9]{6}$ */
  readonly code: string;
}

export namespace IPhoneVerification {
  export type ICreateRequest = Pick<Mutable<IPhoneVerification>, "phone">;
  export interface ICreateResponse {
    /**
     * 인증 요청 만료 일시
     *
     * @format date-time
     */
    readonly expired_at: string;
  }

  export type IVerifyRequest = Mutable<IPhoneVerification>;
  export interface IVerifyResponse {
    /**
     * 휴대폰 인증 정보 식별자
     *
     * 회원가입/회원정보 수정시 해당 정보를 전달하면 인증 정보에 저장된 휴대폰 번호가 사용자 정보에게 적용됩니다.
     *
     */
    readonly phone_verification_id: string;
  }
}

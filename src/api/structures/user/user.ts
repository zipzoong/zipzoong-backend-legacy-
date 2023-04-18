import { Mutable, Omit } from "@TYPE";

export interface IUser<T extends IUser.Type = IUser.Type> {
  /**
   * 사용자 분류
   *
   * - customer 일반 고객
   * - business 사업자
   */
  readonly user_type: T;
  /**
   * 사용자 고유 id
   */
  readonly id: string;
  /**
   * 사용자명
   */
  readonly name: string;
  /**
   * 이메일 정보
   */
  readonly email?: IUser.IEmail;
  /**
   * 전화 번호
   */
  readonly phone: string;
  /**
   * 계정 생성일
   *
   * @format date-time
   */
  readonly created_at: string;
}

export namespace IUser {
  export type Type = "customer" | "business";
  export type GenderType = "female" | "male" | "other";

  export interface IEmail {
    /**
     * 이메일
     *
     * @format email
     */
    readonly email: string;
    /**
     * 이메일 인증 상태
     */
    readonly is_verified: boolean;
  }

  export interface IAddress {
    /**
     * 1차 주소
     */
    readonly first: string;
    /**
     * 2차 주소(상세 주소)
     */
    readonly second?: string;
  }

  export type ICreate<T extends Type = Type> = Mutable<
    Omit<IUser<T>, "id" | "created_at">
  >;
}

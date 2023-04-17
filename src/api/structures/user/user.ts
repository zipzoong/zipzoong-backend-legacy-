import { Mutable, Omit } from "@TYPE";
import { ICustomer } from "./customer";
import { IHomeCareCompany, IRealEstateAgent } from "./business";

export type IUser = ICustomer | IRealEstateAgent | IHomeCareCompany;

export namespace IUser {
  export type Type = "customer" | "business";

  export interface IBase<T extends Type = Type> {
    /**
     * 사용자 타입
     *
     * - customer 일반 사용자
     * - business 사업자
     */
    readonly user_type: T;
    /**
     * 사용자 id
     * @format uuid
     */
    readonly id: string;
    /**
     * 이름
     */
    readonly name: string;
    /**
     * 이메일
     *
     * @format email
     */
    readonly email?: string;
    /**
     * 이메일 인증 여부
     *
     * 비즈니스 사용자는 이메일 인증 완료 후 서비스를 이용할 수 있다.
     */
    readonly email_verified: boolean;
    /**
     * 전화번호
     */
    readonly phone?: string;
    /**
     * 전화번호 인증 여부
     *
     * 비즈니스 사용자는 전화번호 인증 완료 후 서비스를 이용할 수 있다.
     */
    readonly phone_verified: boolean;
    /**
     * 1차 주소
     *
     * 모든 사용자는 1차 주소를 입력해야 서비스를 이용할 수 있다.
     *
     * 공인중개사의 경우, 부동산개설등록정보와 일치하는 부동산 주소가 입력된다.
     */
    readonly address_first?: string;
    /**
     * 2차 주소(상세 주소)
     */
    readonly address_second?: string;
    /**
     * 프로필 이미지 주소
     */
    readonly profile_image_url?: string;
  }

  export interface ICreate<T extends Type = Type>
    extends Mutable<Partial<Omit<IBase, "id">>> {
    user_type: T;
  }
}

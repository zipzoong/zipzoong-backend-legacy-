import { Mutable, Omit } from "@TYPE";
import { IBusinessUser } from "./business";
import { IUser } from "./user";

export interface IREAgent extends IBusinessUser<"real estate"> {
  /**
   * 공인중개사 유형
   * - true 개업 공인중개사
   * - false 소속 공인중개사
   */
  readonly is_licensed: boolean;
  /**
   * 부동산 정보
   *
   * 해당 정보는 공공기관에서 부동산개설등록번호로 기록된 내용과 일치해야 한다.
   */
  readonly real_estate: IREAgent.IRealEstate;
}

export namespace IREAgent {
  /**
   * 부동산 관련 정보
   *
   * 해당 정보는 공공기관에서 부동산개설등록번호로 기록된 내용과 일치해야 한다.
   */
  export interface IRealEstate {
    /**
     * 개설등록번호
     */
    readonly num: string;
    /**
     * 상호명
     */
    readonly name: string;
    /**
     * 전화번호
     */
    readonly phone: string;
    /**
     * 주소
     */
    readonly address: IUser.IAddress;
    /**
     * 대표자명
     */
    readonly licensed_agent_name: string;
  }

  export interface ICreate
    extends Mutable<Omit<IREAgent, "id" | "created_at">> {}
}

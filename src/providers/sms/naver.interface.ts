export namespace INaver {
  /**
   * - COMM: 일반 메시지
   * - AD: 광고 메시지
   */
  export type MessageType = "COMM" | "AD";
  export type MessageSendType = "READY" | "PROCESSING" | "COMPLETED";
  /**
   * 주의
   * - 최대 지원 가능한 사이즈를 초과하면 일부 내용이 잘림 처리되어 발송됩니다.
   * - 메시지(subject, content) 인코딩은 EUC-KR 기준으로 발송되며 지원하지 않는 이모지 문자를 포함하면 발송에 실패합니다.
   *
   * 참고
   * - messages 내에 subject, content를 정의하지 않으면 기본 subject, content로 지정된 값으로 발송됩니다.
   * - messages 내에 subject, content가 기본 subject, content 보다 우선 순위가 높습니다.
   * - MMS type이지만 첨부하려는 파일이 없으면 LMS로 발송됩니다.
   * - reserveTime, scheduleCode를 모두 요청하는 경우 예약 발송으로 처리됩니다. (예약 발송이 우선순위가 높습니다.)
   */
  export interface ISendInput {
    type: "SMS";
    /**
     * 메시지 Type
     *
     * - COMM: 일반메시지
     * - AD: 광고메시지
     * @default COMM
     */
    contentType: MessageType;
    /**
     * 국가 번호
     *
     * - SENS에서 제공하는 국가로의 발송만 가능
     * - 국제 SMS 발송 국가 목록
     * - {@link https://guide.ncloud-docs.com/docs/sens-smspolicy}
     *
     * @default 82
     */
    countryCode: "82";
    /**
     * 발신번호
     *
     * 사전 등록된 발신번호만 사용 가능
     */
    from: string;
    /**
     * 기본 메시지 내용
     *
     * 최대 80byte
     */
    content: string;
    /**
     * 메시지 정보
     * @maxItems 100
     */
    messages: [
      {
        /**
         * 수신번호
         *
         * 붙임표 ( - )를 제외한 숫자만 입력 가능
         */
        to: string;
        /**
         * 개별 메시지 내용
         *
         * 최대 80byte
         */
        content?: string;
      }
    ];
  }

  export interface ISendOutput {
    /**
     * 요청 아이디
     */
    requestId: string;
    /**
     * 요청 시간
     * @format date-time
     */
    requestTime: string;
    /**
     * 요청 상태 코드
     *
     * - 202: 성공
     * - 그 외: 실패
     * - HTTP Status 규격을 따름
     */
    statusCode: string;
    /**
     * 요청 상태명
     */
    statusName: "success" | "fail";
  }
}

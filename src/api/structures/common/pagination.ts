export interface IPaginatedResponse<T> {
  data: T[];
  /**
   * @type uint
   * @minimum 1
   */
  page: number;
}

export interface IPage {
  /**
   * 기본값 1
   *
   * @type uint
   * @minimum 1
   */
  page?: number;
}

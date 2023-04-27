export interface IEntity {
  readonly id: string;
}

export interface IAggregate extends IEntity {
  /**
   * @format date-time
   */
  readonly created_at: string;
  /**
   * @format date-time
   */
  readonly updated_at: string;
  /**
   * 삭제 여부
   */
  readonly is_deleted: boolean;
  /**
   * @format date-time
   */
  readonly deleted_at: string | null;
}

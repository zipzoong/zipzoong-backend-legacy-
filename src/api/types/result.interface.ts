export type IResult<T, E> = IOk<T> | IError<E>;

export interface IOk<T> {
  type: "ok";
  result: T;
}
export interface IError<E> {
  type: "error";
  result: E;
}

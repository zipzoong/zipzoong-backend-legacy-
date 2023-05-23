import { IError, IOk } from "@TYPE";

export namespace Result {
  export namespace Ok {
    export const is = <T, E>(input: IOk<T> | IError<E>): input is IOk<T> =>
      input.type === "ok";

    export const map = <T>(input: T): IOk<T> => ({ type: "ok", result: input });

    export const flatten = <T>(input: IOk<T>): T => input.result;
  }

  export namespace Error {
    export const is = <T, E>(input: IOk<T> | IError<E>): input is IError<E> =>
      input.type === "error";

    export const map = <E>(input: E): IError<E> => ({
      type: "error",
      result: input
    });

    export const flatten = <E>(input: IError<E>): E => input.result;
  }
}

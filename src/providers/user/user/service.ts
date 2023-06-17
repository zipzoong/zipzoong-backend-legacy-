import { IResult } from "@TYPE";
import { pipe, throwIf } from "@fxts/core";
import { Result, throwIfNull } from "@UTIL";

export namespace Service {
  export const getOne = <T, R>(input: {
    user_id: string;
    findFirst: (id: string) => Promise<T | null>;
    exception_for_notfound: unknown;
    validator: (input: T) => T;
    mapper: (arg: T) => IResult<R, null>;
  }): Promise<R> =>
    pipe(
      input.user_id,

      input.findFirst,

      throwIfNull(input.exception_for_notfound),

      input.validator,

      input.mapper,

      throwIf(Result.Error.is, () => input.exception_for_notfound),

      Result.Ok.flatten
    );
}

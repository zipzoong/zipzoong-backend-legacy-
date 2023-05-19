import { pipe } from "@fxts/core";
import { throwIfNull } from "@UTIL";

export namespace Service {
  export const getOne = <T, R>(input: {
    user_id: string;
    findFirst: (id: string) => Promise<T | null>;
    exception_for_notfound: unknown;
    validator: (input: T) => T;
    mapper: (arg: T) => R;
  }) =>
    pipe(
      input.user_id,

      input.findFirst,

      throwIfNull(input.exception_for_notfound),

      input.validator,

      input.mapper
    );
}

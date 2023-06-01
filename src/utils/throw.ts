import { isNull } from "./is";

export const toThrow = (exception: unknown): never => {
  throw exception;
};

interface throwIf {
  <T, N extends T>(predicate: (input: T) => input is N, exception: unknown): (
    input: T
  ) => Exclude<T, N>;
  /**
  <T>(predicate: (input: T) => boolean, exception: unknown): (input: T) => T;
  */
}

export const throwIf: throwIf =
  <T, N extends T>(predicate: (input: T) => input is N, exception: unknown) =>
  (input: T) =>
    predicate(input) ? toThrow(exception) : (input as Exclude<T, N>);

export const throwIfNull =
  <T>(exception: unknown) =>
  (input: T | null) =>
    isNull(input) ? toThrow(exception) : input;

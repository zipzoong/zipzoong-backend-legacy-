import { isNull } from "./is";

export const toThrow = (exception: unknown): never => {
  throw exception;
};

interface throwIf {
  <T, N>(predicate: (input: T | N) => input is N, exception: unknown): (
    input: T | N
  ) => T;
  <T>(predicate: (input: T) => boolean, exception: unknown): (input: T) => T;
}

export const throwIf: throwIf =
  (predicate: (input: unknown) => boolean, exception: unknown) =>
  (input: unknown) =>
    predicate(input) ? toThrow(exception) : input;

export const throwIfNull =
  <T>(exception: unknown) =>
  (input: T | null) =>
    isNull(input) ? toThrow(exception) : input;

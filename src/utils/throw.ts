import { isNull } from "@fxts/core";

export const toThrow = (exception: unknown): never => {
  throw exception;
};

export const throwIfNull =
  <T>(exception: unknown) =>
  (input: T | null) =>
    isNull(input) ? toThrow(exception) : input;

export interface throwIfNot {
  <T, N extends T>(
    predicate: (input: T) => input is N,
    err: (input: T) => unknown
  ): (input: T) => N;

  <T>(predicate: (input: T) => boolean, err: (input: T) => unknown): (
    input: T
  ) => T;
}

export const throwIfNot: throwIfNot =
  <T>(predicate: (input: T) => boolean, err: (input: T) => unknown) =>
  (input: T) =>
    predicate(input) ? input : toThrow(err(input));

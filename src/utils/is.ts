import { isNumber, isString } from "@fxts/core";

export const isUndefined = <T>(input: T | undefined): input is undefined =>
  input === undefined;

export const isNull = <T>(input: T | null): input is null => input === null;

export const isNotNull = <T>(input: T | null): input is NonNullable<T> =>
  !isNull(input);

export const isArray = (input: unknown): input is unknown[] =>
  Array.isArray(input);

export const isStringArray = (input: unknown): input is string[] =>
  isArray(input) && input.every(isString);

export const isNumberArray = (input: unknown): input is number[] =>
  isArray(input) && isNumber(input);

export const isActive = <T extends { is_deleted: boolean }>(
  agg: T
): agg is T & { is_deleted: false } => !agg.is_deleted;

export const isInActive = <T extends { is_deleted: boolean }>(
  agg: T
): agg is T & { is_deleted: true } => !isActive(agg);

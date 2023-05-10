import { isNumber, isString } from "@fxts/core";

export const isNull = (input: unknown): input is null => input === null;

export const isArray = (input: unknown): input is unknown[] =>
  Array.isArray(input);

export const isStringArray = (input: unknown): input is string[] =>
  isArray(input) && input.every(isString);

export const isNumberArray = (input: unknown): input is number[] =>
  isArray(input) && isNumber(input);

export const isActive = <T extends { is_deleted: boolean }>(agg: T): boolean =>
  !agg.is_deleted;
export const isInActive = <T extends { is_deleted: boolean }>(
  agg: T
): boolean => agg.is_deleted;

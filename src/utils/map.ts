import { isNull } from "./is";

export const nullToUndefined = <T>(input: T | null): T | undefined =>
  isNull(input) ? undefined : input;

import { ISoftDeletable } from "@DTO/common";
import { Mutable } from "@TYPE";
import { getISOString } from "@UTIL";

export namespace Aggregate {
  export const activate = <A extends ISoftDeletable>(agg: Mutable<A>): A => {
    agg.is_deleted = false;
    agg.deleted_at = null;
    return agg;
  };

  export const inActivate = <A extends ISoftDeletable>(agg: Mutable<A>): A => {
    if (agg.is_deleted) return agg;
    agg.is_deleted = true;
    agg.deleted_at = getISOString();
    return agg;
  };
}

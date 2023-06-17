export const isActive = <T extends { is_deleted: boolean }>(
  agg: T
): agg is T & { is_deleted: false } => !agg.is_deleted;

export const isInActive = <T extends { is_deleted: boolean }>(
  agg: T
): agg is T & { is_deleted: true } => !isActive(agg);

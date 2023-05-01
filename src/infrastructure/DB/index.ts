import { Configuration } from "@INFRA/config";
import { Prisma, PrismaClient } from "@PRISMA";

export const prisma = new PrismaClient({
  log:
    Configuration.NODE_ENV === "development"
      ? ["query", "info", "warn", "error"]
      : []
});

export const Transaction = ({
  tx = prisma
}: {
  a: string;
  b?: string;
  c?: string;
  tx?: Prisma.TransactionClient;
}) => {
  return;
};

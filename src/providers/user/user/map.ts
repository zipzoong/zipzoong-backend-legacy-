import { IUser } from "@DTO/user/user";
import { prisma } from "@INFRA/DB";
import { isActive } from "@UTIL";

export namespace Map {
  export const accepatantAgreements = (
    input: Awaited<
      ReturnType<
        typeof prisma.agreementAcceptanceModel.findMany<{
          select: {
            created_at: true;
            updated_at: true;
            is_deleted: true;
            deleted_at: true;
            agreement: true;
          };
        }>
      >
    >
  ): IUser.IAcceptantAgreement[] =>
    input
      .filter(isActive)
      .filter(({ agreement }) => isActive(agreement))
      .map(
        ({ agreement: { id, title, content, target_type, is_required } }) => ({
          id,
          title,
          content,
          target_type,
          is_required
        })
      );
}

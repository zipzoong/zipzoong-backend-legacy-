import { IAgreement } from "@DTO/agreement";
import { prisma } from "@INFRA/DB";

export namespace UserCommonService {
  export const getAcceptantAgreementList = async (
    user_id: string
  ): Promise<IAgreement[]> => {
    const acceptances = await prisma.agreementAcceptanceModel.findMany({
      where: { user_id }
    });
    const list = await prisma.agreementModel.findMany({
      where: {
        id: {
          in: acceptances
            .filter((agreement) => !agreement.is_deleted)
            .map(({ agreement_id }) => agreement_id)
        }
      }
    });
    return list
      .filter(({ is_deleted }) => !is_deleted)
      .map((agreement) => ({
        id: agreement.id,
        title: agreement.title,
        content: agreement.content,
        user_type: agreement.user_type
      }));
  };
}

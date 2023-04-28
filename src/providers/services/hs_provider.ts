import { IPaginatedResponse } from "@DTO/common";
import { IHSProvider } from "@DTO/user";
import { prisma } from "@INFRA/DB";
import { HSProvider } from "@PROVIDER/cores";

export namespace HSProviderService {
  export const create = async (
    accessor_id: string,
    input: IHSProvider.ICreateRequest
  ): Promise<IPaginatedResponse<IHSProvider.IResponse>> => {
    // 계정에 기존 사업자 정보 유무 확인

    const phone = "";
    const email = "";

    const provider = HSProvider.create({
      ...input,
      phone,
      email
    });

    // provider 영속화 코드 추가 필요

    await prisma.agreementAcceptanceModel.createMany({
      data: input.agreement_acceptances.map((agreement_id) => ({
        user_id: provider.id,
        agreement_id,
        created_at: provider.created_at,
        updated_at: provider.created_at,
        deleted_at: null,
        is_deleted: false
      }))
    });

    // 계정 연동 작업
    await prisma.oauthAccessorModel.update({
      where: { id: accessor_id },
      data: { business_user_id: provider.id }
    });

    throw Error();
  };
}

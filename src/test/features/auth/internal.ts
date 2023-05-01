import { prisma } from "@INFRA/DB";
import { Crypto } from "@PROVIDER/services/authentication";

export const deleteAccessor = async (accessor_token: string) => {
  const { accessor_id } = Crypto.getAccessorTokenPayload(accessor_token);

  await prisma.oauthAccessorModel.delete({ where: { id: accessor_id } });
};

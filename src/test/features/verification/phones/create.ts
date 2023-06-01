import { isNull } from "@UTIL";
import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { verification } from "@SDK";
import typia from "typia";

console.log("\n- verification.phones.create");

export const test_success = async (connection: IConnection) => {
  const phone = RandomGenerator.mobile();
  const received = await verification.phones.create(connection, { phone });

  typia.assertEquals(received);

  const _verification = await prisma.phoneVerificationModel.findFirst({
    where: { phone }
  });
  if (isNull(_verification)) throw Error("Phone Verification Data not created");
  await prisma.phoneVerificationModel.deleteMany({
    where: { id: _verification.id }
  });
};

/**
 * verification.phones.create 함수는 naver sens의 응답에 따라 실패할 수 있다.
 * 실패시 401 상태를 응답한다.
 */

import { getISOString } from "@UTIL";
import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { verification } from "@SDK";
import typia from "typia";
import { internal } from "@TEST/internal";
import { HttpStatus } from "@nestjs/common";
import { randomInt, randomUUID } from "crypto";

console.log("\n- verification.phones.verify.execute");

export const test_success = async (connection: IConnection) => {
  const now = getISOString();
  const phone_verification = await prisma.phoneVerificationModel.create({
    data: {
      id: randomUUID(),
      phone: RandomGenerator.mobile(),
      code: randomInt(1_00_000, 9_00_000).toString(),
      is_verified: false,
      request_id: "test requset",
      created_at: now,
      updated_at: now,
      is_deleted: false,
      deleted_at: null
    }
  });

  const received = await verification.phones.verify.execute(connection, {
    phone: phone_verification.phone,
    code: phone_verification.code
  });

  typia.assertEquals(received);

  await prisma.phoneVerificationModel.deleteMany({
    where: { id: phone_verification.id }
  });
};

export const test_info_mismatch = async (connection: IConnection) => {
  const now = getISOString();
  const phone_verification = await prisma.phoneVerificationModel.create({
    data: {
      id: randomUUID(),
      phone: RandomGenerator.mobile(),
      code: randomInt(1_00_000, 9_00_000).toString(),
      is_verified: false,
      request_id: "test requset",
      created_at: now,
      updated_at: now,
      is_deleted: false,
      deleted_at: null
    }
  });

  await internal.test_error(() =>
    verification.phones.verify.execute(connection, {
      phone: RandomGenerator.mobile("011"),
      code: phone_verification.code
    })
  )(HttpStatus.UNAUTHORIZED, "Phone Verification Not Found")();

  await internal.test_error(() =>
    verification.phones.verify.execute(connection, {
      phone: phone_verification.phone,
      code: "010101"
    })
  )(HttpStatus.UNAUTHORIZED, "Phone Verification Not Found")();

  await prisma.phoneVerificationModel.deleteMany({
    where: { id: phone_verification.id }
  });
};

export const test_expired = async (connection: IConnection) => {
  const now = getISOString(new Date(Date.now() - 1000 * 60 * 6));
  const phone_verification = await prisma.phoneVerificationModel.create({
    data: {
      id: randomUUID(),
      phone: RandomGenerator.mobile(),
      code: randomInt(1_00_000, 9_00_000).toString(),
      is_verified: false,
      request_id: "test requset",
      created_at: now,
      updated_at: now,
      is_deleted: false,
      deleted_at: null
    }
  });
  await internal.test_error(() =>
    verification.phones.verify.execute(connection, {
      phone: phone_verification.phone,
      code: phone_verification.code
    })
  )(HttpStatus.FORBIDDEN, "Phone Verification Expired")();

  await prisma.phoneVerificationModel.deleteMany({
    where: { id: phone_verification.id }
  });
};

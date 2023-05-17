import { IZipzoongCareRequest } from "@DTO/zipzoong_care";
import { prisma } from "@INFRA/DB";
import { ArrayUtil, RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import Authentication from "@PROVIDER/authentication";
import { service_categories, users } from "@SDK";
import { internal } from "@TEST/internal";
import { pick } from "@UTIL";
import assert from "assert";
import typia from "typia";

const sample_times: IZipzoongCareRequest.ICreateCheckedConsultationTime[] = [
  { start_time: "09:00", end_time: "10:00" },
  { start_time: "10:00", end_time: "11:00" },
  { start_time: "11:00", end_time: "12:00" },
  { start_time: "12:00", end_time: "13:00" },
  { start_time: "13:00", end_time: "14:00" },
  { start_time: "14:00", end_time: "15:00" },
  { start_time: "15:00", end_time: "16:00" },
  { start_time: "16:00", end_time: "17:00" },
  { start_time: "17:00", end_time: "18:00" },
  { start_time: "18:00", end_time: "19:00" },
  { start_time: "19:00", end_time: "20:00" }
];

export const test_success = async (connection: IConnection) => {
  const customers = await prisma.customerModel.findMany({
    where: { base: { is_deleted: false }, phone: { not: null } }
  });

  const token = Authentication.Crypto.getUserToken({
    type: "user",
    user_id: RandomGenerator.pick(customers).id,
    user_type: "customer"
  });

  const cnt = internal.addAuthorizationHeader(connection)("bearer", token);

  const createBody = typia.createRandom<IZipzoongCareRequest.ICreateRequest>();
  const categories = (
    await service_categories.super.getList(connection, {
      type: ["HS"]
    })
  ).map(pick("id"));

  await ArrayUtil.asyncRepeat(10)(async () => {
    const body = createBody();
    body.consultation_times = RandomGenerator.sample(sample_times)(3);
    body.service_ids = RandomGenerator.sample(categories)(3);

    return users.customers.me.zipzoong_care.requests.create(cnt, body);
  });

  const received = await users.customers.me.zipzoong_care.requests.getList(
    cnt,
    {
      status: ["pending"]
    }
  );

  typia.assertEquals(received);
  assert.notStrictEqual(received.data.length, 0);
};

export const test_authorization_fail = internal.test_authorization_fail(
  (connection) =>
    users.customers.me.zipzoong_care.requests.getList(connection, {
      status: ["pending"]
    })
)("customer");

export const test_user_unverified = internal.test_user_unverified((cnt) =>
  users.customers.me.zipzoong_care.requests.getList(cnt, {
    status: ["pending"]
  })
)("customer");

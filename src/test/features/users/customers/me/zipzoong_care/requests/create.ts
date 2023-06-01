import { IZipzoongCareRequest } from "@DTO/zipzoong_care_request";
import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import Authentication from "@PROVIDER/authentication";
import { service_categories, users } from "@SDK";
import { internal } from "@TEST/internal";
import { pick } from "@UTIL";
import { randomUUID } from "crypto";
import typia from "typia";

console.log("\n- users.customers.me.zipzoong_care.requests.create");

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
  const body = typia.random<IZipzoongCareRequest.ICreateRequest>();
  body.consultation_times = RandomGenerator.sample(sample_times)(3);
  const received = await service_categories.super.getList(connection, {
    type: ["HS"]
  });
  body.service_ids = RandomGenerator.sample(received)(3).map(pick("id"));

  const customers = (
    await prisma.customerModel.findMany({
      where: { base: { is_deleted: false }, phone: { not: null } },
      include: { _count: { select: { zipzoong_care_requests: true } } }
    })
  ).filter((customer) => customer._count.zipzoong_care_requests === 0);

  const user_id = RandomGenerator.pick(customers).id;

  const { access_token } = Authentication.Token.Access.generate({
    user_id: user_id,
    user_type: "customer"
  });

  await users.customers.me.zipzoong_care.requests.create(
    internal.addAuthorizationHeader(connection)("access", access_token),
    body
  );

  await prisma.$transaction([
    prisma.zipzoongCareConsultationTimeCheckModel.deleteMany({
      where: { request: { requester_id: user_id } }
    }),
    prisma.zipzoongCareServiceCheckModel.deleteMany({
      where: { request: { requester_id: user_id } }
    }),
    prisma.zipzoongCareRequestModel.deleteMany({
      where: { requester_id: user_id }
    })
  ]);
};

export const test_authorization_fail = internal.test_authorization_fail(
  (connection) =>
    users.customers.me.zipzoong_care.requests.create(
      connection,
      typia.random<IZipzoongCareRequest.ICreateRequest>()
    )
)("customer");

export const test_service_category_invalid = async (
  connection: IConnection
) => {
  const body = typia.random<IZipzoongCareRequest.ICreateRequest>();
  body.consultation_times = RandomGenerator.sample(sample_times)(3);
  const received = await service_categories.super.getList(connection, {
    type: ["HS"]
  });
  body.service_ids = RandomGenerator.sample(received)(3).map(pick("id"));

  body.service_ids.push(randomUUID());

  const customers = await prisma.customerModel.findMany({
    where: { base: { is_deleted: false }, phone: { not: null } }
  });

  const { access_token } = Authentication.Token.Access.generate({
    user_id: RandomGenerator.pick(customers).id,
    user_type: "customer"
  });

  await internal.test_error(() =>
    users.customers.me.zipzoong_care.requests.create(
      internal.addAuthorizationHeader(connection)("access", access_token),
      body
    )
  )(HttpStatus.BAD_REQUEST, "Service Category Invalid")();
};

export const test_user_unverified = internal.test_user_unverified((cnt) =>
  users.customers.me.zipzoong_care.requests.create(cnt, {
    care_start_date: "2023-05-18",
    care_end_date: "2023-05-20",
    detail: "test detail",
    consultation_times: [{ start_time: "10:00", end_time: "11:00" }],
    service_ids: [randomUUID()]
  })
)("customer");

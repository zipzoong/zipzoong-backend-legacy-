import { ICustomer } from "@DTO/user/customer";
import { IHSProvider } from "@DTO/user/hs_provider";
import { IREAgent } from "@DTO/user/re_agent";
import { IZipzoongCareRequest } from "@DTO/zipzoong_care_request";
import { prisma } from "@INFRA/DB";
import { ArrayUtil, RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import { Prisma } from "@PRISMA";
import Authentication from "@PROVIDER/authentication";
import Customer from "@PROVIDER/user/customer";
import HSProvider from "@PROVIDER/user/hs_provider";
import REAgent from "@PROVIDER/user/re_agent";
import { agreements, service_categories, users } from "@SDK";
import { getISOString, pick } from "@UTIL";
import { randomInt, randomUUID } from "crypto";
import typia from "typia";
import { addAuthorizationHeader } from "./utils";

const now = getISOString();
const createEntity = () => ({
  id: randomUUID(),
  created_at: now,
  updated_at: now,
  is_deleted: false,
  deleted_at: null
});

export const seed = async (connection: IConnection) => {
  await seedCategories();

  await seedCustomers(connection);
  await seedHSProviders(connection);
  await seedREAgents(connection);

  await seedReviews();

  await seedZipzoongCareRequests(connection);

  const now = getISOString();
  await prisma.phoneVerificationModel.create({
    data: {
      id: "test_verification_id",
      phone: RandomGenerator.mobile(),
      code: randomInt(1_00_000, 9_00_000).toString(),
      is_verified: true,
      request_id: "test request id",
      created_at: now,
      updated_at: now,
      is_deleted: false,
      deleted_at: null
    }
  });

  await prisma.$queryRaw`
    WITH updated_rows AS (
      INSERT INTO review_stats (reviewee_id, rating_sum, review_cnt)
      SELECT
        reviewee_id,
        SUM(rating) AS rating_sum,
        COUNT(*) AS review_cnt
      FROM
        reviews
      WHERE reviewee_id IN (SELECT
                              id
                            FROM business_users INNER JOIN users
                            USING (id)
                            WHERE is_verified = true AND is_deleted = false)
      GROUP BY
        reviewee_id
      ON CONFLICT (reviewee_id) DO UPDATE
      SET
        rating_sum = EXCLUDED.rating_sum,
        review_cnt = EXCLUDED.review_cnt,
        updated_at = NOW()
      RETURNING reviewee_id
    )
    DELETE FROM review_stats
    WHERE reviewee_id NOT IN (SELECT reviewee_id FROM updated_rows);
  `;
};

export const seedCategories = () =>
  prisma.$transaction(async (tx) => {
    await tx.agreementModel.createMany({
      data: [
        {
          ...createEntity(),
          title: "개인정보 수집 및 이용 동의",
          content: "",
          is_required: true,
          target_type: "all"
        },
        {
          ...createEntity(),
          title: "사용자 이용약관",
          content: "",
          is_required: true,
          target_type: "all"
        },
        {
          ...createEntity(),
          title: "위치정보 서비스 이용약관",
          content: "",
          is_required: true,
          target_type: "all"
        },
        {
          ...createEntity(),
          title: "제3자 정보제공 동의",
          content: "",
          is_required: true,
          target_type: "all"
        }
      ]
    });

    await tx.serviceSuperCategoryModel.create({
      data: {
        ...createEntity(),
        name: "공인중개사",
        type: "RE",
        sub_categories: {
          createMany: {
            data: [
              { ...createEntity(), name: "아파트" },
              { ...createEntity(), name: "빌라" },
              { ...createEntity(), name: "상가" },
              { ...createEntity(), name: "경매" }
            ]
          }
        }
      }
    });
    await tx.serviceSuperCategoryModel.create({
      data: {
        ...createEntity(),
        name: "이사 전문가",
        type: "HS",
        sub_categories: {
          createMany: {
            data: [
              { ...createEntity(), name: "가정 이사" },
              { ...createEntity(), name: "원룸 이사" },
              { ...createEntity(), name: "기업 이사" },
              { ...createEntity(), name: "사무실 이사" },
              { ...createEntity(), name: "아파트 이사" },
              { ...createEntity(), name: "장거리 이사" },
              { ...createEntity(), name: "포장 이사" }
            ]
          }
        }
      }
    });
    await tx.serviceSuperCategoryModel.create({
      data: {
        ...createEntity(),
        name: "청소 전문가",
        type: "HS",
        sub_categories: {
          createMany: {
            data: [
              { ...createEntity(), name: "입주 청소" },
              { ...createEntity(), name: "사무실 청소" },
              { ...createEntity(), name: "가정집 청소" },
              { ...createEntity(), name: "기업 청소" },
              { ...createEntity(), name: "건물 관리" },
              { ...createEntity(), name: "특수 청소" },
              { ...createEntity(), name: "가전제품 청소" }
            ]
          }
        }
      }
    });
    await tx.serviceSuperCategoryModel.create({
      data: {
        ...createEntity(),
        name: "인테리어 전문가",
        type: "HS",
        sub_categories: {
          createMany: {
            data: [
              { ...createEntity(), name: "종합리모델링" },
              { ...createEntity(), name: "아파트 인테리어" },
              { ...createEntity(), name: "소형 인테리어" },
              { ...createEntity(), name: "기업/사무실 인테리어" },
              { ...createEntity(), name: "주거공간 인테리어" },
              { ...createEntity(), name: "부분시공" },
              { ...createEntity(), name: "리모델링" },
              { ...createEntity(), name: "반셀프" },
              { ...createEntity(), name: "도면설계" }
            ]
          }
        }
      }
    });
    await tx.serviceSuperCategoryModel.create({
      data: {
        ...createEntity(),
        name: "세무사",
        type: "HS",
        sub_categories: {
          createMany: {
            data: [
              { ...createEntity(), name: "양도" },
              { ...createEntity(), name: "상속" },
              { ...createEntity(), name: "증여" },
              { ...createEntity(), name: "취득세" },
              { ...createEntity(), name: "재산세" },
              { ...createEntity(), name: "종부세" }
            ]
          }
        }
      }
    });
    await tx.serviceSuperCategoryModel.create({
      data: {
        ...createEntity(),
        name: "법무사",
        type: "HS",
        sub_categories: {
          createMany: {
            data: [
              { ...createEntity(), name: "등기" },
              { ...createEntity(), name: "민사소송" },
              { ...createEntity(), name: "형사소송" },
              { ...createEntity(), name: "민사집행" },
              { ...createEntity(), name: "가압류" },
              { ...createEntity(), name: "가처분" }
            ]
          }
        }
      }
    });

    const first = await tx.rEPropertySuperCategoryModel.create({
      data: {
        ...createEntity(),
        name: "주거",
        middle_categories: {
          createMany: {
            data: [
              {
                ...createEntity(),
                name: "아파트"
              },
              {
                ...createEntity(),
                name: "빌라/연립"
              },
              {
                ...createEntity(),
                name: "원룸/투룸"
              },
              {
                ...createEntity(),
                name: "주택"
              },
              {
                ...createEntity(),
                name: "오피스텔"
              }
            ]
          }
        }
      }
    });
    const second = await tx.rEPropertySuperCategoryModel.create({
      data: {
        ...createEntity(),
        name: "상업",
        middle_categories: {
          createMany: {
            data: [
              {
                ...createEntity(),
                name: "상가점포"
              },
              {
                ...createEntity(),
                name: "사무실"
              },
              {
                ...createEntity(),
                name: "공장/창고"
              },
              {
                ...createEntity(),
                name: "지식산업센터"
              },
              {
                ...createEntity(),
                name: "빌딩"
              }
            ]
          }
        }
      }
    });
    const third = await tx.rEPropertySuperCategoryModel.create({
      data: {
        ...createEntity(),
        name: "특수",
        middle_categories: {
          createMany: {
            data: [
              {
                ...createEntity(),
                name: "토지"
              },
              {
                ...createEntity(),
                name: "병원/요양원"
              },
              {
                ...createEntity(),
                name: "경매"
              },
              {
                ...createEntity(),
                name: "분양"
              },
              {
                ...createEntity(),
                name: "종교시설"
              },
              {
                ...createEntity(),
                name: "숙박"
              },
              {
                ...createEntity(),
                name: "재개발"
              }
            ]
          }
        }
      }
    });

    const mid_1 = await tx.rEPropertyMiddleCategoryModel.findFirstOrThrow({
      where: { super_category_id: first.id, name: "주택" }
    });
    const mid_2 = await tx.rEPropertyMiddleCategoryModel.findFirstOrThrow({
      where: { super_category_id: first.id, name: "빌라/연립" }
    });
    const mid_3 = await tx.rEPropertyMiddleCategoryModel.findFirstOrThrow({
      where: { super_category_id: first.id, name: "원룸/투룸" }
    });
    // first

    const mid_4 = await tx.rEPropertyMiddleCategoryModel.findFirstOrThrow({
      where: { super_category_id: second.id, name: "상가점포" }
    });
    const mid_5 = await tx.rEPropertyMiddleCategoryModel.findFirstOrThrow({
      where: { super_category_id: second.id, name: "사무실" }
    });
    // second

    const mid_6 = await tx.rEPropertyMiddleCategoryModel.findFirstOrThrow({
      where: { super_category_id: third.id, name: "숙박" }
    });
    const mid_7 = await tx.rEPropertyMiddleCategoryModel.findFirstOrThrow({
      where: { super_category_id: third.id, name: "분양" }
    });
    const mid_8 = await tx.rEPropertyMiddleCategoryModel.findFirstOrThrow({
      where: { super_category_id: third.id, name: "종교시설" }
    });
    const mid_9 = await tx.rEPropertyMiddleCategoryModel.findFirstOrThrow({
      where: { super_category_id: third.id, name: "경매" }
    });

    await tx.rEPropertySubCategoryModel.createMany({
      data: [
        {
          ...createEntity(),
          name: "단독",
          middle_category_id: mid_1.id
        },
        {
          ...createEntity(),
          name: "다가구",
          middle_category_id: mid_1.id
        },
        {
          ...createEntity(),
          name: "상가주택",
          middle_category_id: mid_1.id
        },
        {
          ...createEntity(),
          name: "전원주택",
          middle_category_id: mid_1.id
        },
        {
          ...createEntity(),
          name: "한옥주택",
          middle_category_id: mid_1.id
        }
      ]
    });
    await tx.rEPropertySubCategoryModel.createMany({
      data: [
        {
          ...createEntity(),
          name: "연립",
          middle_category_id: mid_2.id
        },
        {
          ...createEntity(),
          name: "다세대",
          middle_category_id: mid_2.id
        },
        {
          ...createEntity(),
          name: "빌라",
          middle_category_id: mid_2.id
        },
        {
          ...createEntity(),
          name: "고급빌라",
          middle_category_id: mid_2.id
        }
      ]
    });
    await tx.rEPropertySubCategoryModel.createMany({
      data: [
        {
          ...createEntity(),
          name: "원룸",
          middle_category_id: mid_3.id
        },
        {
          ...createEntity(),
          name: "투룸",
          middle_category_id: mid_3.id
        }
      ]
    });
    await tx.rEPropertySubCategoryModel.createMany({
      data: [
        {
          ...createEntity(),
          name: "일반상가",
          middle_category_id: mid_4.id
        },
        {
          ...createEntity(),
          name: "음식점",
          middle_category_id: mid_4.id
        },
        {
          ...createEntity(),
          name: "서비스",
          middle_category_id: mid_4.id
        },
        {
          ...createEntity(),
          name: "기타",
          middle_category_id: mid_4.id
        }
      ]
    });
    await tx.rEPropertySubCategoryModel.createMany({
      data: [
        {
          ...createEntity(),
          name: "소형",
          middle_category_id: mid_5.id
        },
        {
          ...createEntity(),
          name: "중형",
          middle_category_id: mid_5.id
        },
        {
          ...createEntity(),
          name: "대형",
          middle_category_id: mid_5.id
        }
      ]
    });
    await tx.rEPropertySubCategoryModel.createMany({
      data: [
        {
          ...createEntity(),
          name: "모텔",
          middle_category_id: mid_6.id
        },
        {
          ...createEntity(),
          name: "호텔",
          middle_category_id: mid_6.id
        },
        {
          ...createEntity(),
          name: "펜션",
          middle_category_id: mid_6.id
        },
        {
          ...createEntity(),
          name: "기타",
          middle_category_id: mid_6.id
        }
      ]
    });
    await tx.rEPropertySubCategoryModel.createMany({
      data: [
        {
          ...createEntity(),
          name: "아파트",
          middle_category_id: mid_7.id
        },
        {
          ...createEntity(),
          name: "오피스텔",
          middle_category_id: mid_7.id
        },
        {
          ...createEntity(),
          name: "빌라",
          middle_category_id: mid_7.id
        },
        {
          ...createEntity(),
          name: "상가",
          middle_category_id: mid_7.id
        }
      ]
    });
    await tx.rEPropertySubCategoryModel.createMany({
      data: [
        {
          ...createEntity(),
          name: "교회",
          middle_category_id: mid_8.id
        },
        {
          ...createEntity(),
          name: "사찰",
          middle_category_id: mid_8.id
        }
      ]
    });
    await tx.rEPropertySubCategoryModel.createMany({
      data: [
        {
          ...createEntity(),
          name: "아파트",
          middle_category_id: mid_9.id
        },
        {
          ...createEntity(),
          name: "빌라",
          middle_category_id: mid_9.id
        },
        {
          ...createEntity(),
          name: "상가건물",
          middle_category_id: mid_9.id
        },
        {
          ...createEntity(),
          name: "빌딩",
          middle_category_id: mid_9.id
        }
      ]
    });
  });

const seedCustomers = async (connection: IConnection) => {
  const agreement_list = (
    await agreements.getList(connection, { target_type: ["all", "customer"] })
  ).map(pick("id"));

  const createCustomerData = typia.createRandom<ICustomer.ICreate>();

  const queries: Prisma.PrismaPromise<unknown>[] = [];

  await ArrayUtil.asyncRepeat(5)(async () => {
    const input = createCustomerData();
    input.acceptant_agreement_ids = agreement_list;
    input.phone = null;

    const data = Customer.Json.createData(input);

    queries.push(prisma.customerModel.create({ data }));
  });

  await ArrayUtil.asyncRepeat(10)(async () => {
    const input = createCustomerData();
    input.acceptant_agreement_ids = agreement_list;
    input.phone = "test phone";

    const data = Customer.Json.createData(input);

    queries.push(prisma.customerModel.create({ data }));
  });
  await prisma.$transaction(queries);
};

const seedHSProviders = async (connection: IConnection) => {
  const agreement_list = (
    await agreements.getList(connection, {
      target_type: ["all", "business", "HS"]
    })
  ).map(pick("id"));
  const super_categories = await service_categories.super.getList(connection, {
    type: ["HS"]
  });

  const createProviderData = typia.createRandom<IHSProvider.ICreate>();

  const queries: Prisma.PrismaPromise<unknown>[] = [];

  await ArrayUtil.asyncRepeat(5)(() =>
    ArrayUtil.asyncForEach(super_categories)(async (category) => {
      const input = createProviderData();
      input.acceptant_agreement_ids = agreement_list;
      input.sub_expertise_ids = RandomGenerator.sample(category.sub_categories)(
        3
      ).map(pick("id"));

      const data = HSProvider.Json.createData(input);
      data.base.create.is_verified = true;

      queries.push(prisma.hSProviderModel.create({ data }));
    })
  );

  await ArrayUtil.asyncRepeat(5)(() =>
    ArrayUtil.asyncForEach(super_categories)(async (category) => {
      const input = createProviderData();
      input.acceptant_agreement_ids = agreement_list;
      input.sub_expertise_ids = RandomGenerator.sample(category.sub_categories)(
        3
      ).map(pick("id"));

      const data = HSProvider.Json.createData(input);
      data.base.create.is_verified = false;

      queries.push(prisma.hSProviderModel.create({ data }));
    })
  );

  await prisma.$transaction(queries);
};

const seedREAgents = async (connection: IConnection) => {
  const agreement_list = (
    await agreements.getList(connection, {
      target_type: ["all", "business", "RE"]
    })
  ).map(pick("id"));
  const super_categories = await service_categories.super.getList(connection, {
    type: ["RE"]
  });

  const createAgentData = typia.createRandom<IREAgent.ICreate>();

  const queries: Prisma.PrismaPromise<unknown>[] = [];

  // property exist
  await ArrayUtil.asyncRepeat(5)(() =>
    ArrayUtil.asyncForEach(super_categories)(async (category) => {
      const input = createAgentData();

      input.acceptant_agreement_ids = agreement_list;

      input.sub_expertise_ids = RandomGenerator.sample(category.sub_categories)(
        1
      ).map(pick("id"));

      const data = REAgent.Json.createData(input);

      data.base.create.is_verified = true;

      queries.push(prisma.rEAgentModel.create({ data }));

      const re_agent_id = data.base.create.base.create.id;

      const properties = new Array(10).fill(1).map(() => ({
        ...createEntity(),
        name: RandomGenerator.name(3),
        main_image_url: "",
        re_agent_id,
        is_visible: true
      }));

      const sub_categories = await prisma.rEPropertySubCategoryModel.findMany();

      queries.push(
        prisma.rEPropertyModel.createMany({
          data: properties
        })
      );

      queries.push(
        prisma.rEPropertyCategoryModel.createMany({
          data: properties.map(({ id: re_property_id }) => ({
            id: randomUUID(),
            re_property_id,
            sub_category_id: RandomGenerator.pick(sub_categories).id,
            created_at: "2023-05-02T07:27:30.128Z",
            updated_at: "2023-05-02T07:27:30.128Z",
            is_deleted: false,
            deleted_at: null
          }))
        })
      );
    })
  );

  // property not exist
  await ArrayUtil.asyncRepeat(5)(() =>
    ArrayUtil.asyncForEach(super_categories)(async (category) => {
      const input = createAgentData();

      input.acceptant_agreement_ids = agreement_list;

      input.sub_expertise_ids = RandomGenerator.sample(category.sub_categories)(
        1
      ).map(pick("id"));

      const data = REAgent.Json.createData(input);
      data.base.create.is_verified = true;

      queries.push(prisma.rEAgentModel.create({ data }));
    })
  );

  await ArrayUtil.asyncRepeat(5)(() =>
    ArrayUtil.asyncForEach(super_categories)(async (category) => {
      const input = createAgentData();

      input.acceptant_agreement_ids = agreement_list;

      input.sub_expertise_ids = RandomGenerator.sample(category.sub_categories)(
        1
      ).map(pick("id"));

      const data = REAgent.Json.createData(input);

      data.base.create.is_verified = false;

      queries.push(prisma.rEAgentModel.create({ data }));
    })
  );
  await prisma.$transaction(queries);
};

const seedReviews = async () => {
  const customers = await prisma.customerModel.findMany({
    where: { phone: { not: null }, base: { is_deleted: false } }
  });

  const reviewer_id = RandomGenerator.pick(customers).id;

  const business_users = await prisma.businessUserModel.findMany({
    where: { is_verified: true, base: { is_deleted: false } }
  });

  const now = getISOString();

  const bs_user_ids = business_users.map(pick("id"));

  const data = () =>
    bs_user_ids.map((reviewee_id) => ({
      id: randomUUID(),
      created_at: now,
      updated_at: now,
      is_deleted: false,
      deleted_at: null,
      reviewer_id,
      reviewee_id,
      content: "test review",
      rating: randomInt(0, 10)
    }));

  await prisma.reviewModel.createMany({
    data: [
      ...data(),
      ...data(),
      ...data(),
      ...data(),
      ...data(),

      ...data(),
      ...data(),
      ...data(),
      ...data(),
      ...data(),

      ...data(),
      ...data(),
      ...data(),
      ...data(),
      ...data(),

      ...data(),
      ...data(),
      ...data(),
      ...data(),
      ...data(),

      ...data(),
      ...data(),
      ...data(),
      ...data(),
      ...data()
    ]
  });
};

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

const seedZipzoongCareRequests = async (connection: IConnection) => {
  const createBody = typia.createRandom<IZipzoongCareRequest.ICreateRequest>();
  const customer_ids = (
    await prisma.customerModel.findMany({
      where: { base: { is_deleted: false }, phone: { not: null } }
    })
  ).map(pick("id"));
  const categories = await service_categories.super.getList(connection, {
    type: ["HS", "RE"]
  });

  await ArrayUtil.asyncForEach(RandomGenerator.sample(customer_ids)(5))(
    async (user_id) => {
      const body = createBody();
      body.consultation_times = RandomGenerator.sample(sample_times)(
        randomInt(1, sample_times.length)
      );
      body.service_ids = RandomGenerator.sample(categories)(
        randomInt(1, categories.length)
      ).map(pick("id"));

      const { access_token } = Authentication.Token.Access.generate({
        user_id,
        user_type: "customer"
      });

      return users.customers.me.zipzoong_care.requests.create(
        addAuthorizationHeader(connection)("access", access_token),
        body
      );
    }
  );
};

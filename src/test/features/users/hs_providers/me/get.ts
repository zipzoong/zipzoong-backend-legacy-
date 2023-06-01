import { prisma } from "@INFRA/DB";
import { RandomGenerator } from "@nestia/e2e";
import { IConnection } from "@nestia/fetcher";
import Authentication from "@PROVIDER/authentication";
import { users } from "@SDK";
import { internal } from "@TEST/internal";
import assert from "assert";
import typia from "typia";

console.log("\n- users.hs_providers.me.get");

export const test_success = async (connection: IConnection) => {
  const providers = await prisma.hSProviderModel.findMany({
    where: { base: { is_verified: true, base: { is_deleted: false } } }
  });

  const user_id = RandomGenerator.pick(providers).id;

  const { access_token } = Authentication.Token.Access.generate({
    user_id,
    user_type: "home service provider"
  });

  const received = await users.hs_providers.me.get(
    internal.addAuthorizationHeader(connection)("access", access_token)
  );

  typia.assertEquals(received);

  await prisma.hSExampleImageModel.updateMany({
    where: { hs_provider_id: user_id },
    data: { is_visible: false }
  });

  const received2 = await users.hs_providers.me.get(
    internal.addAuthorizationHeader(connection)("access", access_token)
  );

  assert.strictEqual(
    received.example_images.length,
    received2.example_images.length
  );

  await prisma.hSExampleImageModel.updateMany({
    where: { hs_provider_id: user_id },
    data: { is_visible: true }
  });
};

export const test_authorization_fail = internal.test_authorization_fail(
  users.hs_providers.me.get
)("home service provider");

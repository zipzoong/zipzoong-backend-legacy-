/**
 * @packageDocumentation
 * @module api.functional.users.hs_providers.me
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import type { IHSProvider } from "./../../../../structures/user/hs_provider";

/**
 * @summary 내 정보 조회
 * @tag hs-providers
 * @tag users
 * @return 생활서비스 전문가 내 정보
 * @throw 401 Unauthorized
 * @throw 403 Forbidden
 * 
 * @controller HSProvidersController.get()
 * @path GET /users/hs-providers/me
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
    connection: IConnection,
): Promise<get.Output> {
    return !!(connection.simulate ?? (connection as any).random)
        ? get.simulate(
              connection,
          )
        : Fetcher.fetch(
              connection,
              get.ENCRYPTED,
              get.METHOD,
              get.path(),
          );
}
export namespace get {
    export type Output = IHSProvider.IPrivate;

    export const METHOD = "GET" as const;
    export const PATH: string = "/users/hs-providers/me";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/users/hs-providers/me`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection,
    ): Promise<Output> => {
        return random(
            typeof (connection.simulate ?? (connection as any).random) === 'object'
            && (connection.simulate ?? (connection as any).random) !== null
                ? (connection.simulate ?? (connection as any).random)
                : undefined
        );
    }
}
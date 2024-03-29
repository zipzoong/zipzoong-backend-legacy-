/**
 * @packageDocumentation
 * @module api.functional.users.customers.me
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import type { ICustomer } from "./../../../../structures/user/customer";

export * as zipzoong_care from "./zipzoong_care";

/**
 * @summary 내 정보 조회
 * @tag customers
 * @tag users
 * @return 일반 고객 내 정보
 * @throw 401 Unauthorized
 * @throw 403 Forbidden
 * 
 * @controller CustomersController.get()
 * @path GET /users/customers/me
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
    connection: IConnection,
): Promise<get.Output> {
    return !!connection.simulate
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
    export type Output = ICustomer.IPrivate;

    export const METHOD = "GET" as const;
    export const PATH: string = "/users/customers/me";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/users/customers/me`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection,
    ): Promise<Output> => {
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}
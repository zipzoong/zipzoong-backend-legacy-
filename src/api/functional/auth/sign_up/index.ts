/**
 * @packageDocumentation
 * @module api.functional.auth.sign_up
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import { NestiaSimulator } from "./../../../utils/NestiaSimulator";
import type { IAuthentication } from "./../../../structures/authentication";

/**
 * 회원을 생성하거나 oauth-profile 요청을 위한 인증 토큰을 발급한다.
 * 
 * accessor에 포함된 정보는 회원 정보에 기본값으로 사용할 수 있다.
 * 
 * @summary 회원가입
 * @tag authentication
 * @param body oauth code, oauth type
 * @return account_token
 * @throw 403 Forbidden
 * 
 * @controller SignUpController.execute()
 * @path POST /auth/sign-up
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function execute(
    connection: IConnection,
    body: IAuthentication.ISignUp,
): Promise<execute.Output> {
    return !!connection.simulate
        ? execute.simulate(
              connection,
              body,
          )
        : Fetcher.fetch(
              connection,
              execute.ENCRYPTED,
              execute.METHOD,
              execute.path(),
              body,
              execute.stringify,
          );
}
export namespace execute {
    export type Input = IAuthentication.ISignUp;
    export type Output = IAuthentication.IAccountToken;

    export const METHOD = "POST" as const;
    export const PATH: string = "/auth/sign-up";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/auth/sign-up`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection,
        body: execute.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METHOD,
            host: connection.host,
            path: path()
        });
        assert.body(() => typia.assert(body));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
    export const stringify = (input: Input) => typia.assertStringify(input);
}
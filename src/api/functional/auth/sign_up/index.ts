/**
 * @packageDocumentation
 * @module api.functional.auth.sign_up
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import type { Authentication } from "./../../../structures/auth/authentication";
import type { ITokens } from "./../../../structures/auth/token";

/**
 * 회원을 생성하거나 oauth-profile 요청을 위한 인증 토큰을 발급한다.
 * 
 * accessor에 포함된 정보는 회원 정보에 기본값으로 사용할 수 있다.
 * 
 * @summary 회원가입 API
 * @tag authentication
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param body oauth code, oauth type
 * @return tokens
 * @throw 403 Forbidden
 * 
 * @controller AuthenticationController.signUp()
 * @path POST /auth/sign-up
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function signUp
    (
        connection: IConnection,
        body: Authentication.ISignUp
    ): Promise<signUp.Output>
{
    return Fetcher.fetch
    (
        connection,
        signUp.ENCRYPTED,
        signUp.METHOD,
        signUp.path(),
        body,
        signUp.stringify
    );
}
export namespace signUp
{
    export type Input = Authentication.ISignUp;
    export type Output = ITokens;

    export const METHOD = "POST" as const;
    export const PATH: string = "/auth/sign-up";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string
    {
        return `/auth/sign-up`;
    }
    export const stringify = (input: Input) => typia.assertStringify(input);
}
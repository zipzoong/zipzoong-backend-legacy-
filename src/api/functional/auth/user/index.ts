/**
 * @packageDocumentation
 * @module api.functional.auth.user
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import type { Authentication } from "./../../../structures/auth/authentication";

/**
 * type 속성을 통해 사용자 분류를 구분한다.
 * 
 * 사용자 분류에 따라 포함하는 속성이 달라진다.
 * 
 * 다른 속성값은 null, "" 등의 속성 기본값이 사용되지만 email, phone은 OauthProfile 정보가 기본값으로 사용된다.
 * 
 * 사업자의 경우, phone 정보가 필수다.
 * 
 * OauthProfile phone 정보가 없고, 인증코드도 요청에 포함하지 않았다면 요청은 실패한다.
 * 
 * @summary 사용자 생성 API
 * @tag authentication
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param body 사용자 생성 정보
 * @return void
 * @throw 400 BadRequest
 * @throw 401 Unauthorized
 * @throw 403 Forbidden
 * 
 * @controller UserCreateController.create()
 * @path POST /auth/user
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function create
    (
        connection: IConnection,
        body: Authentication.ICreateRequest
    ): Promise<void>
{
    return Fetcher.fetch
    (
        connection,
        create.ENCRYPTED,
        create.METHOD,
        create.path(),
        body,
        create.stringify
    );
}
export namespace create
{
    export type Input = Authentication.ICreateRequest;

    export const METHOD = "POST" as const;
    export const PATH: string = "/auth/user";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string
    {
        return `/auth/user`;
    }
    export const stringify = (input: Input) => typia.assertStringify(input);
}
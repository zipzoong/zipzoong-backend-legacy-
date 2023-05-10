/**
 * @packageDocumentation
 * @module api.functional.auth.profile
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

import type { IAuthentication } from "./../../../structures/auth/authentication";

/**
 * 새로운 회원 정보를 생성할 때, 입력창 기본값을 채우기 위해 사용한다.
 * 
 * @summary 소셜 계정 프로필 정보 조회
 * @tag authentication
 * @return OauthProfile
 * @throw 401 Unauthorized
 * @throw 403 Forbidden
 * 
 * @controller ProfileController.get()
 * @path GET /auth/profile
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function get
    (
        connection: IConnection
    ): Promise<get.Output>
{
    return Fetcher.fetch
    (
        connection,
        get.ENCRYPTED,
        get.METHOD,
        get.path()
    );
}
export namespace get
{
    export type Output = IAuthentication.IProfile;

    export const METHOD = "GET" as const;
    export const PATH: string = "/auth/profile";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string
    {
        return `/auth/profile`;
    }
}
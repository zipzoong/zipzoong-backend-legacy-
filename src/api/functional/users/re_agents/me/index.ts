/**
 * @packageDocumentation
 * @module api.functional.users.re_agents.me
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

import type { IREAgent } from "./../../../../structures/user/re_agent";

/**
 * @summary 공인중개사 내 정보 조회 API
 * @tag re-agents
 * @tag users
 * @return 공인중개사 내 정보
 * @throw 401 Unauthorized
 * @throw 404 Not Found
 * 
 * @controller REAgentsController.getMe()
 * @path GET /users/re-agents/me
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function getMe
    (
        connection: IConnection
    ): Promise<getMe.Output>
{
    return Fetcher.fetch
    (
        connection,
        getMe.ENCRYPTED,
        getMe.METHOD,
        getMe.path()
    );
}
export namespace getMe
{
    export type Output = IREAgent.IPrivateResponse;

    export const METHOD = "GET" as const;
    export const PATH: string = "/users/re-agents/me";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string
    {
        return `/users/re-agents/me`;
    }
}
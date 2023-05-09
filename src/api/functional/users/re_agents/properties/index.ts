/**
 * @packageDocumentation
 * @module api.functional.users.re_agents.properties
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

import type { IREAgent } from "./../../../../structures/user/re_agent";
import type { IPaginatedResponse } from "./../../../../structures/common/pagination";

/**
 * 공인중개사 프로필에서 매물 목록을 추가로 불러올 때 사용한다.
 * 
 * @summary 매물 목록 조회
 * @tag re-agents
 * @tag re-properties
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param agent_id 공인중개사 id
 * @param query 페이지 정보
 * @return 부동산 매물 목록
 * @throw 404 Not Found
 * 
 * @controller REAgentsPropertiesController.getList()
 * @path GET /users/re-agents/:agent_id/properties
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function getList
    (
        connection: IConnection,
        agent_id: string,
        query: IREAgent.IProperty.ISearch
    ): Promise<getList.Output>
{
    return Fetcher.fetch
    (
        connection,
        getList.ENCRYPTED,
        getList.METHOD,
        getList.path(agent_id, query)
    );
}
export namespace getList
{
    export type Query = IREAgent.IProperty.ISearch;
    export type Output = IPaginatedResponse<IREAgent.IProperty>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/users/re-agents/:agent_id/properties";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(agent_id: string, query: IREAgent.IProperty.ISearch): string
    {
        const variables: Record<any, any> = query as any;
        const search: URLSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined) continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded: string = search.toString();
        return `/users/re-agents/${encodeURIComponent(agent_id ?? "null")}/properties${encoded.length ? `?${encoded}` : ""}`;;
    }
}
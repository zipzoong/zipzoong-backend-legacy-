/**
 * @packageDocumentation
 * @module api.functional.users.re_agents
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import { NestiaSimulator } from "./../../../utils/NestiaSimulator";
import type { IBusinessUser } from "./../../../structures/user/business_user";
import type { IREAgent } from "./../../../structures/user/re_agent";

export * as me from "./me";
export * as properties from "./properties";

/**
 * @summary 공인중개사 목록 검색
 * @tag re-agents
 * @tag users
 * @param query 필터링 기준
 * @return 공인중개사 목록
 * 
 * @controller REAgentsController.getList()
 * @path GET /users/re-agents
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getList(
    connection: IConnection,
    query: IBusinessUser.ISearch,
): Promise<getList.Output> {
    return !!(connection.simulate ?? (connection as any).random)
        ? getList.simulate(
              connection,
              query,
          )
        : Fetcher.fetch(
              connection,
              getList.ENCRYPTED,
              getList.METHOD,
              getList.path(query),
          );
}
export namespace getList {
    export type Query = IBusinessUser.ISearch;
    export type Output = IREAgent.IPaginatedResponse;

    export const METHOD = "GET" as const;
    export const PATH: string = "/users/re-agents";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (query: getList.Query): string => {
        const variables: Record<any, any> = query as any;
        const search: URLSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined) continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded: string = search.toString();
        return `/users/re-agents${encoded.length ? `?${encoded}` : ""}`;;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection,
        query: getList.Query,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METHOD,
            host: connection.host,
            path: path(query)
        });
        assert.query(() => typia.assert(query));
        return random(
            typeof (connection.simulate ?? (connection as any).random) === 'object'
            && (connection.simulate ?? (connection as any).random) !== null
                ? (connection.simulate ?? (connection as any).random)
                : undefined
        );
    }
}

/**
 * @summary 공인중개사 조회
 * @tag re-agents
 * @tag users
 * @param agent_id 공인중개사 id
 * @return 공인중개사 정보
 * @throw 404 Not Found
 * 
 * @controller REAgentsController.getOne()
 * @path GET /users/re-agents/:agent_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getOne(
    connection: IConnection,
    agent_id: string,
): Promise<getOne.Output> {
    return !!(connection.simulate ?? (connection as any).random)
        ? getOne.simulate(
              connection,
              agent_id,
          )
        : Fetcher.fetch(
              connection,
              getOne.ENCRYPTED,
              getOne.METHOD,
              getOne.path(agent_id),
          );
}
export namespace getOne {
    export type Output = IREAgent.IPublic;

    export const METHOD = "GET" as const;
    export const PATH: string = "/users/re-agents/:agent_id";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (agent_id: string): string => {
        return `/users/re-agents/${encodeURIComponent(agent_id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection,
        agent_id: string,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METHOD,
            host: connection.host,
            path: path(agent_id)
        });
        assert.param("agent_id")("string")(() => typia.assert(agent_id));
        return random(
            typeof (connection.simulate ?? (connection as any).random) === 'object'
            && (connection.simulate ?? (connection as any).random) !== null
                ? (connection.simulate ?? (connection as any).random)
                : undefined
        );
    }
}
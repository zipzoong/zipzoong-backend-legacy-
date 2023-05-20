/**
 * @packageDocumentation
 * @module api.functional.users.customers.me.zipzoong_care.requests
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import type { IZipzoongCareRequest } from "./../../../../../../structures/zipzoong_care_request";

/**
 * @summary 집중 케어 신청 목록 검색
 * @tag customers
 * @tag zipzoong-care
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param query 목록 검색 조건
 * @return 집중 케어 신청 목록
 * @throw 401 Unauthorized
 * @throw 403 Forbidden
 * 
 * @controller CustomersController.getList()
 * @path GET /users/customers/me/zipzoong-care/requests
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function getList
    (
        connection: IConnection,
        query: IZipzoongCareRequest.ISearch
    ): Promise<getList.Output>
{
    return Fetcher.fetch
    (
        connection,
        getList.ENCRYPTED,
        getList.METHOD,
        getList.path(query)
    );
}
export namespace getList
{
    export type Query = IZipzoongCareRequest.ISearch;
    export type Output = IZipzoongCareRequest.IPaginatedResponse;

    export const METHOD = "GET" as const;
    export const PATH: string = "/users/customers/me/zipzoong-care/requests";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(query: IZipzoongCareRequest.ISearch): string
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
        return `/users/customers/me/zipzoong-care/requests${encoded.length ? `?${encoded}` : ""}`;;
    }
}

/**
 * @summary 집중 케어 신청
 * @tag customers
 * @tag zipzoong-care
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param body 집중 케어 신청 정보
 * @throw 401 Unauthorized
 * @throw 403 Forbidden
 * 
 * @controller CustomersController.create()
 * @path POST /users/customers/me/zipzoong-care/requests
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function create
    (
        connection: IConnection,
        body: IZipzoongCareRequest.ICreateRequest
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
    export type Input = IZipzoongCareRequest.ICreateRequest;

    export const METHOD = "POST" as const;
    export const PATH: string = "/users/customers/me/zipzoong-care/requests";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string
    {
        return `/users/customers/me/zipzoong-care/requests`;
    }
    export const stringify = (input: Input) => typia.assertStringify(input);
}
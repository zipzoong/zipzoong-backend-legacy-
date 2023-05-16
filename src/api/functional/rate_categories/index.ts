/**
 * @packageDocumentation
 * @module api.functional.rate_categories
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

import type { IRateCategory } from "./../../structures/rate_category";

/**
 * @controller RateCategoriesController.getList()
 * @path GET /rate-categories
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function getList
    (
        connection: IConnection,
        query: IRateCategory.ISearch
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
    export type Query = IRateCategory.ISearch;
    export type Output = Array<IRateCategory>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/rate-categories";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(query: IRateCategory.ISearch): string
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
        return `/rate-categories${encoded.length ? `?${encoded}` : ""}`;;
    }
}
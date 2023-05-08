/**
 * @packageDocumentation
 * @module api.functional.re_property_super_categories
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

import type { IPage, IPaginatedResponse } from "./../../structures/common/pagination";
import type { IREPropertyCategory } from "./../../structures/real_estate/re_property_category";

/**
 * @controller REPropertySuperCategoriesController.getList()
 * @path GET /re-property-super-categories
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function getList
    (
        connection: IConnection,
        query: IPage
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
    export type Query = IPage;
    export type Output = IPaginatedResponse<IREPropertyCategory.ISuper>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/re-property-super-categories";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(query: IPage): string
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
        return `/re-property-super-categories${encoded.length ? `?${encoded}` : ""}`;;
    }
}

/**
 * @controller REPropertySuperCategoriesController.getOne()
 * @path GET /re-property-super-categories/:super_category_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function getOne
    (
        connection: IConnection,
        super_category_id: string
    ): Promise<getOne.Output>
{
    return Fetcher.fetch
    (
        connection,
        getOne.ENCRYPTED,
        getOne.METHOD,
        getOne.path(super_category_id)
    );
}
export namespace getOne
{
    export type Output = IREPropertyCategory.ISuper;

    export const METHOD = "GET" as const;
    export const PATH: string = "/re-property-super-categories/:super_category_id";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(super_category_id: string): string
    {
        return `/re-property-super-categories/${encodeURIComponent(super_category_id ?? "null")}`;
    }
}
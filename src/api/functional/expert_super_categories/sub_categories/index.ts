/**
 * @packageDocumentation
 * @module api.functional.expert_super_categories.sub_categories
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

import type { IExpertCategory } from "./../../../structures/expert_category";

/**
 * @summary 하위 전문 분야 목록 조회 API
 * @tag expert-categories
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param super_id 상위 전문 분야 id
 * @return 하위 전문 분야 목록
 * @throw 404 NotFound
 * 
 * @controller ExpertSubCategoriesController.getList()
 * @path GET /expert-super-categories/:super_id/sub-categories
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function getList
    (
        connection: IConnection,
        super_id: string
    ): Promise<getList.Output>
{
    return Fetcher.fetch
    (
        connection,
        getList.ENCRYPTED,
        getList.METHOD,
        getList.path(super_id)
    );
}
export namespace getList
{
    export type Output = Array<IExpertCategory.Sub>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/expert-super-categories/:super_id/sub-categories";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(super_id: string): string
    {
        return `/expert-super-categories/${encodeURIComponent(super_id ?? "null")}/sub-categories`;
    }
}
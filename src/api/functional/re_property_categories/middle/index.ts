/**
 * @packageDocumentation
 * @module api.functional.re_property_categories.middle
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";
import typia from "typia";

import { NestiaSimulator } from "./../../../utils/NestiaSimulator";
import type { IREPropertyCategory } from "./../../../structures/category/re_property";

/**
 * @summary 부동산 매물 중위 카테고리 조회
 * @tag re-properties
 * @tag categories
 * @param middle_category_id 부동산 매물 중위 카테고리 id
 * @return 부동산 매물 중위 카테고리
 * @throw 404 Not Found
 * 
 * @controller REPropertyMiddleCategoriesController.getOne()
 * @path GET /re-property-categories/middle/:middle_category_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getOne(
    connection: IConnection,
    middle_category_id: string,
): Promise<getOne.Output> {
    return !!connection.simulate
        ? getOne.simulate(
              connection,
              middle_category_id,
          )
        : Fetcher.fetch(
              connection,
              getOne.ENCRYPTED,
              getOne.METHOD,
              getOne.path(middle_category_id),
          );
}
export namespace getOne {
    export type Output = IREPropertyCategory.IMiddle;

    export const METHOD = "GET" as const;
    export const PATH: string = "/re-property-categories/middle/:middle_category_id";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (middle_category_id: string): string => {
        return `/re-property-categories/middle/${encodeURIComponent(middle_category_id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection,
        middle_category_id: string,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METHOD,
            host: connection.host,
            path: path(middle_category_id)
        });
        assert.param("middle_category_id")("string")(() => typia.assert(middle_category_id));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}
import { IHSCompany } from "@DTO/user";
import { pipe, tap } from "@fxts/core";
import { HSCompany } from "./hs_company.core";
import { prisma } from "@INFRA/DB";
import { Mutation, Query } from "../query";
import { isNull, throwIfNull, toThrow } from "@UTIL";
import {
  NotFoundException,
  UnprocessableEntityException
} from "@nestjs/common";

export namespace HSCompanyService {
  export const create = (input: IHSCompany.ICreate): Promise<IHSCompany> =>
    pipe(
      input,

      HSCompany.create,

      tap(async (company) => {
        await prisma.$transaction([...Mutation.createHSCompany(company)]);
      })
    );

  export const find = (company_id: string): Promise<IHSCompany> =>
    pipe(
      company_id,

      (id) => prisma.$transaction([...Query.findHSCompany(id)]),

      ([user, business, company, images]) =>
        isNull(company) || isNull(business) || isNull(user)
          ? toThrow(new NotFoundException("Home Service Company Not Found"))
          : ([user, business, company, images] as const),

      HSCompany.map,

      throwIfNull(new UnprocessableEntityException("Unprocessable Entity"))
    );
}

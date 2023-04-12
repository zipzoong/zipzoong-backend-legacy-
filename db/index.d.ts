
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Board
 * 
 */
export type Board = {
  id: string
  name: string
}

/**
 * Model BoardArticle
 * 
 */
export type BoardArticle = {
  id: string
  board_id: string
  writer_id: string
  title: string
  content: string
}

/**
 * Model BoardComment
 * 
 */
export type BoardComment = {
  id: string
  writer_id: string
  article_id: string
  content: string
}

/**
 * Model BusinessItem
 * 
 */
export type BusinessItem = {
  id: string
  manager_id: string
  name: string
  main_image: string
}

/**
 * Model BusinessRateCategory
 * 
 */
export type BusinessRateCategory = {
  id: string
  name: string
}

/**
 * Model BusinessRate
 * 
 */
export type BusinessRate = {
  id: string
  category_id: string
  business_id: string
  rater_id: string
  rate: number
}

/**
 * Model BusinessReview
 * 
 */
export type BusinessReview = {
  id: string
  business_id: string
  reviewer_id: string
  content: string
}

/**
 * Model HomeCareSpecializedField
 * 
 */
export type HomeCareSpecializedField = {
  id: string
  sub_category_id: string
  company_id: string
}

/**
 * Model HomeCareSuperCategory
 * 
 */
export type HomeCareSuperCategory = {
  id: string
  name: string
}

/**
 * Model HomeCareSubCategory
 * 
 */
export type HomeCareSubCategory = {
  id: string
  super_id: string
  name: string
}

/**
 * Model RealEstateSpecializedField
 * 
 */
export type RealEstateSpecializedField = {
  id: string
  sub_category_id: string
  agent_id: string
}

/**
 * Model RealEstateSuperCategory
 * 
 */
export type RealEstateSuperCategory = {
  id: string
  name: string
}

/**
 * Model RealEstateSubCategory
 * 
 */
export type RealEstateSubCategory = {
  id: string
  super_id: string
  name: string
}

/**
 * Model UserAuthentication
 * 
 */
export type UserAuthentication = {
  id: string
  oauth_sub: string
  oauth_type: string
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  auth_id: string
  name: string
  email: string
  email_verified: boolean
  phone: string
  address_first: string
  address_second: string | null
}

/**
 * Model Customer
 * 
 */
export type Customer = {
  id: string
  birth: string | null
  gender: string | null
}

/**
 * Model BusinessUser
 * 
 */
export type BusinessUser = {
  id: string
  is_verified: boolean
  introduction_title: string | null
  introduction_content: string | null
}

/**
 * Model RealEstateAgent
 * 
 */
export type RealEstateAgent = {
  id: string
  is_licensed: boolean
  real_estate_num: string
  real_estate_name: string
  licensed_agent_name: string
  real_estate_phone: string
}

/**
 * Model HomeCareCompany
 * 
 */
export type HomeCareCompany = {
  id: string
  business_registration_num: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Boards
 * const boards = await prisma.board.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Boards
   * const boards = await prisma.board.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.BoardDelegate<GlobalReject>;

  /**
   * `prisma.boardArticle`: Exposes CRUD operations for the **BoardArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardArticles
    * const boardArticles = await prisma.boardArticle.findMany()
    * ```
    */
  get boardArticle(): Prisma.BoardArticleDelegate<GlobalReject>;

  /**
   * `prisma.boardComment`: Exposes CRUD operations for the **BoardComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardComments
    * const boardComments = await prisma.boardComment.findMany()
    * ```
    */
  get boardComment(): Prisma.BoardCommentDelegate<GlobalReject>;

  /**
   * `prisma.businessItem`: Exposes CRUD operations for the **BusinessItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessItems
    * const businessItems = await prisma.businessItem.findMany()
    * ```
    */
  get businessItem(): Prisma.BusinessItemDelegate<GlobalReject>;

  /**
   * `prisma.businessRateCategory`: Exposes CRUD operations for the **BusinessRateCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessRateCategories
    * const businessRateCategories = await prisma.businessRateCategory.findMany()
    * ```
    */
  get businessRateCategory(): Prisma.BusinessRateCategoryDelegate<GlobalReject>;

  /**
   * `prisma.businessRate`: Exposes CRUD operations for the **BusinessRate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessRates
    * const businessRates = await prisma.businessRate.findMany()
    * ```
    */
  get businessRate(): Prisma.BusinessRateDelegate<GlobalReject>;

  /**
   * `prisma.businessReview`: Exposes CRUD operations for the **BusinessReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessReviews
    * const businessReviews = await prisma.businessReview.findMany()
    * ```
    */
  get businessReview(): Prisma.BusinessReviewDelegate<GlobalReject>;

  /**
   * `prisma.homeCareSpecializedField`: Exposes CRUD operations for the **HomeCareSpecializedField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomeCareSpecializedFields
    * const homeCareSpecializedFields = await prisma.homeCareSpecializedField.findMany()
    * ```
    */
  get homeCareSpecializedField(): Prisma.HomeCareSpecializedFieldDelegate<GlobalReject>;

  /**
   * `prisma.homeCareSuperCategory`: Exposes CRUD operations for the **HomeCareSuperCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomeCareSuperCategories
    * const homeCareSuperCategories = await prisma.homeCareSuperCategory.findMany()
    * ```
    */
  get homeCareSuperCategory(): Prisma.HomeCareSuperCategoryDelegate<GlobalReject>;

  /**
   * `prisma.homeCareSubCategory`: Exposes CRUD operations for the **HomeCareSubCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomeCareSubCategories
    * const homeCareSubCategories = await prisma.homeCareSubCategory.findMany()
    * ```
    */
  get homeCareSubCategory(): Prisma.HomeCareSubCategoryDelegate<GlobalReject>;

  /**
   * `prisma.realEstateSpecializedField`: Exposes CRUD operations for the **RealEstateSpecializedField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RealEstateSpecializedFields
    * const realEstateSpecializedFields = await prisma.realEstateSpecializedField.findMany()
    * ```
    */
  get realEstateSpecializedField(): Prisma.RealEstateSpecializedFieldDelegate<GlobalReject>;

  /**
   * `prisma.realEstateSuperCategory`: Exposes CRUD operations for the **RealEstateSuperCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RealEstateSuperCategories
    * const realEstateSuperCategories = await prisma.realEstateSuperCategory.findMany()
    * ```
    */
  get realEstateSuperCategory(): Prisma.RealEstateSuperCategoryDelegate<GlobalReject>;

  /**
   * `prisma.realEstateSubCategory`: Exposes CRUD operations for the **RealEstateSubCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RealEstateSubCategories
    * const realEstateSubCategories = await prisma.realEstateSubCategory.findMany()
    * ```
    */
  get realEstateSubCategory(): Prisma.RealEstateSubCategoryDelegate<GlobalReject>;

  /**
   * `prisma.userAuthentication`: Exposes CRUD operations for the **UserAuthentication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAuthentications
    * const userAuthentications = await prisma.userAuthentication.findMany()
    * ```
    */
  get userAuthentication(): Prisma.UserAuthenticationDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<GlobalReject>;

  /**
   * `prisma.businessUser`: Exposes CRUD operations for the **BusinessUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessUsers
    * const businessUsers = await prisma.businessUser.findMany()
    * ```
    */
  get businessUser(): Prisma.BusinessUserDelegate<GlobalReject>;

  /**
   * `prisma.realEstateAgent`: Exposes CRUD operations for the **RealEstateAgent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RealEstateAgents
    * const realEstateAgents = await prisma.realEstateAgent.findMany()
    * ```
    */
  get realEstateAgent(): Prisma.RealEstateAgentDelegate<GlobalReject>;

  /**
   * `prisma.homeCareCompany`: Exposes CRUD operations for the **HomeCareCompany** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomeCareCompanies
    * const homeCareCompanies = await prisma.homeCareCompany.findMany()
    * ```
    */
  get homeCareCompany(): Prisma.HomeCareCompanyDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Board: 'Board',
    BoardArticle: 'BoardArticle',
    BoardComment: 'BoardComment',
    BusinessItem: 'BusinessItem',
    BusinessRateCategory: 'BusinessRateCategory',
    BusinessRate: 'BusinessRate',
    BusinessReview: 'BusinessReview',
    HomeCareSpecializedField: 'HomeCareSpecializedField',
    HomeCareSuperCategory: 'HomeCareSuperCategory',
    HomeCareSubCategory: 'HomeCareSubCategory',
    RealEstateSpecializedField: 'RealEstateSpecializedField',
    RealEstateSuperCategory: 'RealEstateSuperCategory',
    RealEstateSubCategory: 'RealEstateSubCategory',
    UserAuthentication: 'UserAuthentication',
    User: 'User',
    Customer: 'Customer',
    BusinessUser: 'BusinessUser',
    RealEstateAgent: 'RealEstateAgent',
    HomeCareCompany: 'HomeCareCompany'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BoardCountOutputType
   */


  export type BoardCountOutputType = {
    articles: number
  }

  export type BoardCountOutputTypeSelect = {
    articles?: boolean
  }

  export type BoardCountOutputTypeGetPayload<S extends boolean | null | undefined | BoardCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BoardCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BoardCountOutputTypeArgs)
    ? BoardCountOutputType 
    : S extends { select: any } & (BoardCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BoardCountOutputType ? BoardCountOutputType[P] : never
  } 
      : BoardCountOutputType




  // Custom InputTypes

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     */
    select?: BoardCountOutputTypeSelect | null
  }



  /**
   * Count Type BoardArticleCountOutputType
   */


  export type BoardArticleCountOutputType = {
    comments: number
  }

  export type BoardArticleCountOutputTypeSelect = {
    comments?: boolean
  }

  export type BoardArticleCountOutputTypeGetPayload<S extends boolean | null | undefined | BoardArticleCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BoardArticleCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BoardArticleCountOutputTypeArgs)
    ? BoardArticleCountOutputType 
    : S extends { select: any } & (BoardArticleCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BoardArticleCountOutputType ? BoardArticleCountOutputType[P] : never
  } 
      : BoardArticleCountOutputType




  // Custom InputTypes

  /**
   * BoardArticleCountOutputType without action
   */
  export type BoardArticleCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BoardArticleCountOutputType
     */
    select?: BoardArticleCountOutputTypeSelect | null
  }



  /**
   * Count Type BusinessRateCategoryCountOutputType
   */


  export type BusinessRateCategoryCountOutputType = {
    rates: number
  }

  export type BusinessRateCategoryCountOutputTypeSelect = {
    rates?: boolean
  }

  export type BusinessRateCategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | BusinessRateCategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BusinessRateCategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BusinessRateCategoryCountOutputTypeArgs)
    ? BusinessRateCategoryCountOutputType 
    : S extends { select: any } & (BusinessRateCategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BusinessRateCategoryCountOutputType ? BusinessRateCategoryCountOutputType[P] : never
  } 
      : BusinessRateCategoryCountOutputType




  // Custom InputTypes

  /**
   * BusinessRateCategoryCountOutputType without action
   */
  export type BusinessRateCategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BusinessRateCategoryCountOutputType
     */
    select?: BusinessRateCategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type HomeCareSuperCategoryCountOutputType
   */


  export type HomeCareSuperCategoryCountOutputType = {
    home_care_sub_categories: number
  }

  export type HomeCareSuperCategoryCountOutputTypeSelect = {
    home_care_sub_categories?: boolean
  }

  export type HomeCareSuperCategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | HomeCareSuperCategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HomeCareSuperCategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (HomeCareSuperCategoryCountOutputTypeArgs)
    ? HomeCareSuperCategoryCountOutputType 
    : S extends { select: any } & (HomeCareSuperCategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof HomeCareSuperCategoryCountOutputType ? HomeCareSuperCategoryCountOutputType[P] : never
  } 
      : HomeCareSuperCategoryCountOutputType




  // Custom InputTypes

  /**
   * HomeCareSuperCategoryCountOutputType without action
   */
  export type HomeCareSuperCategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSuperCategoryCountOutputType
     */
    select?: HomeCareSuperCategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type HomeCareSubCategoryCountOutputType
   */


  export type HomeCareSubCategoryCountOutputType = {
    specialized_fields: number
  }

  export type HomeCareSubCategoryCountOutputTypeSelect = {
    specialized_fields?: boolean
  }

  export type HomeCareSubCategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | HomeCareSubCategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HomeCareSubCategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (HomeCareSubCategoryCountOutputTypeArgs)
    ? HomeCareSubCategoryCountOutputType 
    : S extends { select: any } & (HomeCareSubCategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof HomeCareSubCategoryCountOutputType ? HomeCareSubCategoryCountOutputType[P] : never
  } 
      : HomeCareSubCategoryCountOutputType




  // Custom InputTypes

  /**
   * HomeCareSubCategoryCountOutputType without action
   */
  export type HomeCareSubCategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSubCategoryCountOutputType
     */
    select?: HomeCareSubCategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type RealEstateSuperCategoryCountOutputType
   */


  export type RealEstateSuperCategoryCountOutputType = {
    real_estate_sub_categories: number
  }

  export type RealEstateSuperCategoryCountOutputTypeSelect = {
    real_estate_sub_categories?: boolean
  }

  export type RealEstateSuperCategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | RealEstateSuperCategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RealEstateSuperCategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RealEstateSuperCategoryCountOutputTypeArgs)
    ? RealEstateSuperCategoryCountOutputType 
    : S extends { select: any } & (RealEstateSuperCategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RealEstateSuperCategoryCountOutputType ? RealEstateSuperCategoryCountOutputType[P] : never
  } 
      : RealEstateSuperCategoryCountOutputType




  // Custom InputTypes

  /**
   * RealEstateSuperCategoryCountOutputType without action
   */
  export type RealEstateSuperCategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSuperCategoryCountOutputType
     */
    select?: RealEstateSuperCategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type RealEstateSubCategoryCountOutputType
   */


  export type RealEstateSubCategoryCountOutputType = {
    real_estate_specialized_fields: number
  }

  export type RealEstateSubCategoryCountOutputTypeSelect = {
    real_estate_specialized_fields?: boolean
  }

  export type RealEstateSubCategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | RealEstateSubCategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RealEstateSubCategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RealEstateSubCategoryCountOutputTypeArgs)
    ? RealEstateSubCategoryCountOutputType 
    : S extends { select: any } & (RealEstateSubCategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RealEstateSubCategoryCountOutputType ? RealEstateSubCategoryCountOutputType[P] : never
  } 
      : RealEstateSubCategoryCountOutputType




  // Custom InputTypes

  /**
   * RealEstateSubCategoryCountOutputType without action
   */
  export type RealEstateSubCategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSubCategoryCountOutputType
     */
    select?: RealEstateSubCategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type UserAuthenticationCountOutputType
   */


  export type UserAuthenticationCountOutputType = {
    users: number
  }

  export type UserAuthenticationCountOutputTypeSelect = {
    users?: boolean
  }

  export type UserAuthenticationCountOutputTypeGetPayload<S extends boolean | null | undefined | UserAuthenticationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserAuthenticationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserAuthenticationCountOutputTypeArgs)
    ? UserAuthenticationCountOutputType 
    : S extends { select: any } & (UserAuthenticationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserAuthenticationCountOutputType ? UserAuthenticationCountOutputType[P] : never
  } 
      : UserAuthenticationCountOutputType




  // Custom InputTypes

  /**
   * UserAuthenticationCountOutputType without action
   */
  export type UserAuthenticationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserAuthenticationCountOutputType
     */
    select?: UserAuthenticationCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    board_articles: number
    board_comments: number
  }

  export type UserCountOutputTypeSelect = {
    board_articles?: boolean
    board_comments?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type CustomerCountOutputType
   */


  export type CustomerCountOutputType = {
    business_rates: number
    business_reviews: number
  }

  export type CustomerCountOutputTypeSelect = {
    business_rates?: boolean
    business_reviews?: boolean
  }

  export type CustomerCountOutputTypeGetPayload<S extends boolean | null | undefined | CustomerCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CustomerCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CustomerCountOutputTypeArgs)
    ? CustomerCountOutputType 
    : S extends { select: any } & (CustomerCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CustomerCountOutputType ? CustomerCountOutputType[P] : never
  } 
      : CustomerCountOutputType




  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect | null
  }



  /**
   * Count Type BusinessUserCountOutputType
   */


  export type BusinessUserCountOutputType = {
    business_items: number
    business_rates: number
    business_reviews: number
  }

  export type BusinessUserCountOutputTypeSelect = {
    business_items?: boolean
    business_rates?: boolean
    business_reviews?: boolean
  }

  export type BusinessUserCountOutputTypeGetPayload<S extends boolean | null | undefined | BusinessUserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BusinessUserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BusinessUserCountOutputTypeArgs)
    ? BusinessUserCountOutputType 
    : S extends { select: any } & (BusinessUserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BusinessUserCountOutputType ? BusinessUserCountOutputType[P] : never
  } 
      : BusinessUserCountOutputType




  // Custom InputTypes

  /**
   * BusinessUserCountOutputType without action
   */
  export type BusinessUserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BusinessUserCountOutputType
     */
    select?: BusinessUserCountOutputTypeSelect | null
  }



  /**
   * Count Type RealEstateAgentCountOutputType
   */


  export type RealEstateAgentCountOutputType = {
    specialized_fields: number
  }

  export type RealEstateAgentCountOutputTypeSelect = {
    specialized_fields?: boolean
  }

  export type RealEstateAgentCountOutputTypeGetPayload<S extends boolean | null | undefined | RealEstateAgentCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RealEstateAgentCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RealEstateAgentCountOutputTypeArgs)
    ? RealEstateAgentCountOutputType 
    : S extends { select: any } & (RealEstateAgentCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RealEstateAgentCountOutputType ? RealEstateAgentCountOutputType[P] : never
  } 
      : RealEstateAgentCountOutputType




  // Custom InputTypes

  /**
   * RealEstateAgentCountOutputType without action
   */
  export type RealEstateAgentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RealEstateAgentCountOutputType
     */
    select?: RealEstateAgentCountOutputTypeSelect | null
  }



  /**
   * Count Type HomeCareCompanyCountOutputType
   */


  export type HomeCareCompanyCountOutputType = {
    specialized_fields: number
  }

  export type HomeCareCompanyCountOutputTypeSelect = {
    specialized_fields?: boolean
  }

  export type HomeCareCompanyCountOutputTypeGetPayload<S extends boolean | null | undefined | HomeCareCompanyCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HomeCareCompanyCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (HomeCareCompanyCountOutputTypeArgs)
    ? HomeCareCompanyCountOutputType 
    : S extends { select: any } & (HomeCareCompanyCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof HomeCareCompanyCountOutputType ? HomeCareCompanyCountOutputType[P] : never
  } 
      : HomeCareCompanyCountOutputType




  // Custom InputTypes

  /**
   * HomeCareCompanyCountOutputType without action
   */
  export type HomeCareCompanyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HomeCareCompanyCountOutputType
     */
    select?: HomeCareCompanyCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Board
   */


  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BoardMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BoardCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type BoardMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type BoardMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type BoardCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type BoardAggregateArgs = {
    /**
     * Filter which Board to aggregate.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type BoardGroupByArgs = {
    where?: BoardWhereInput
    orderBy?: Enumerable<BoardOrderByWithAggregationInput>
    by: BoardScalarFieldEnum[]
    having?: BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }


  export type BoardGroupByOutputType = {
    id: string
    name: string
    _count: BoardCountAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type BoardSelect = {
    id?: boolean
    name?: boolean
    articles?: boolean | Board$articlesArgs
    _count?: boolean | BoardCountOutputTypeArgs
  }


  export type BoardInclude = {
    articles?: boolean | Board$articlesArgs
    _count?: boolean | BoardCountOutputTypeArgs
  }

  export type BoardGetPayload<S extends boolean | null | undefined | BoardArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Board :
    S extends undefined ? never :
    S extends { include: any } & (BoardArgs | BoardFindManyArgs)
    ? Board  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'articles' ? Array < BoardArticleGetPayload<S['include'][P]>>  :
        P extends '_count' ? BoardCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BoardArgs | BoardFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'articles' ? Array < BoardArticleGetPayload<S['select'][P]>>  :
        P extends '_count' ? BoardCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Board ? Board[P] : never
  } 
      : Board


  type BoardCountArgs = 
    Omit<BoardFindManyArgs, 'select' | 'include'> & {
      select?: BoardCountAggregateInputType | true
    }

  export interface BoardDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BoardFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Board'> extends True ? Prisma__BoardClient<BoardGetPayload<T>> : Prisma__BoardClient<BoardGetPayload<T> | null, null>

    /**
     * Find one Board that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BoardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BoardFindUniqueOrThrowArgs>
    ): Prisma__BoardClient<BoardGetPayload<T>>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BoardFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Board'> extends True ? Prisma__BoardClient<BoardGetPayload<T>> : Prisma__BoardClient<BoardGetPayload<T> | null, null>

    /**
     * Find the first Board that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BoardFindFirstOrThrowArgs>
    ): Prisma__BoardClient<BoardGetPayload<T>>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardFindManyArgs>(
      args?: SelectSubset<T, BoardFindManyArgs>
    ): Prisma.PrismaPromise<Array<BoardGetPayload<T>>>

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
    **/
    create<T extends BoardCreateArgs>(
      args: SelectSubset<T, BoardCreateArgs>
    ): Prisma__BoardClient<BoardGetPayload<T>>

    /**
     * Create many Boards.
     *     @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     *     @example
     *     // Create many Boards
     *     const board = await prisma.board.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoardCreateManyArgs>(
      args?: SelectSubset<T, BoardCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
    **/
    delete<T extends BoardDeleteArgs>(
      args: SelectSubset<T, BoardDeleteArgs>
    ): Prisma__BoardClient<BoardGetPayload<T>>

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardUpdateArgs>(
      args: SelectSubset<T, BoardUpdateArgs>
    ): Prisma__BoardClient<BoardGetPayload<T>>

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardDeleteManyArgs>(
      args?: SelectSubset<T, BoardDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardUpdateManyArgs>(
      args: SelectSubset<T, BoardUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
    **/
    upsert<T extends BoardUpsertArgs>(
      args: SelectSubset<T, BoardUpsertArgs>
    ): Prisma__BoardClient<BoardGetPayload<T>>

    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): Prisma.PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BoardClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    articles<T extends Board$articlesArgs= {}>(args?: Subset<T, Board$articlesArgs>): Prisma.PrismaPromise<Array<BoardArticleGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Board base type for findUnique actions
   */
  export type BoardFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findUnique
   */
  export interface BoardFindUniqueArgs extends BoardFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Board findUniqueOrThrow
   */
  export type BoardFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }


  /**
   * Board base type for findFirst actions
   */
  export type BoardFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: Enumerable<BoardScalarFieldEnum>
  }

  /**
   * Board findFirst
   */
  export interface BoardFindFirstArgs extends BoardFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Board findFirstOrThrow
   */
  export type BoardFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: Enumerable<BoardScalarFieldEnum>
  }


  /**
   * Board findMany
   */
  export type BoardFindManyArgs = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude | null
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    distinct?: Enumerable<BoardScalarFieldEnum>
  }


  /**
   * Board create
   */
  export type BoardCreateArgs = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude | null
    /**
     * The data needed to create a Board.
     */
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>
  }


  /**
   * Board createMany
   */
  export type BoardCreateManyArgs = {
    /**
     * The data used to create many Boards.
     */
    data: Enumerable<BoardCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Board update
   */
  export type BoardUpdateArgs = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude | null
    /**
     * The data needed to update a Board.
     */
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
    /**
     * Choose, which Board to update.
     */
    where: BoardWhereUniqueInput
  }


  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs = {
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
  }


  /**
   * Board upsert
   */
  export type BoardUpsertArgs = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude | null
    /**
     * The filter to search for the Board to update in case it exists.
     */
    where: BoardWhereUniqueInput
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     */
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
  }


  /**
   * Board delete
   */
  export type BoardDeleteArgs = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude | null
    /**
     * Filter which Board to delete.
     */
    where: BoardWhereUniqueInput
  }


  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs = {
    /**
     * Filter which Boards to delete
     */
    where?: BoardWhereInput
  }


  /**
   * Board.articles
   */
  export type Board$articlesArgs = {
    /**
     * Select specific fields to fetch from the BoardArticle
     */
    select?: BoardArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleInclude | null
    where?: BoardArticleWhereInput
    orderBy?: Enumerable<BoardArticleOrderByWithRelationInput>
    cursor?: BoardArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BoardArticleScalarFieldEnum>
  }


  /**
   * Board without action
   */
  export type BoardArgs = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude | null
  }



  /**
   * Model BoardArticle
   */


  export type AggregateBoardArticle = {
    _count: BoardArticleCountAggregateOutputType | null
    _min: BoardArticleMinAggregateOutputType | null
    _max: BoardArticleMaxAggregateOutputType | null
  }

  export type BoardArticleMinAggregateOutputType = {
    id: string | null
    board_id: string | null
    writer_id: string | null
    title: string | null
    content: string | null
  }

  export type BoardArticleMaxAggregateOutputType = {
    id: string | null
    board_id: string | null
    writer_id: string | null
    title: string | null
    content: string | null
  }

  export type BoardArticleCountAggregateOutputType = {
    id: number
    board_id: number
    writer_id: number
    title: number
    content: number
    _all: number
  }


  export type BoardArticleMinAggregateInputType = {
    id?: true
    board_id?: true
    writer_id?: true
    title?: true
    content?: true
  }

  export type BoardArticleMaxAggregateInputType = {
    id?: true
    board_id?: true
    writer_id?: true
    title?: true
    content?: true
  }

  export type BoardArticleCountAggregateInputType = {
    id?: true
    board_id?: true
    writer_id?: true
    title?: true
    content?: true
    _all?: true
  }

  export type BoardArticleAggregateArgs = {
    /**
     * Filter which BoardArticle to aggregate.
     */
    where?: BoardArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardArticles to fetch.
     */
    orderBy?: Enumerable<BoardArticleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoardArticles
    **/
    _count?: true | BoardArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardArticleMaxAggregateInputType
  }

  export type GetBoardArticleAggregateType<T extends BoardArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateBoardArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardArticle[P]>
      : GetScalarType<T[P], AggregateBoardArticle[P]>
  }




  export type BoardArticleGroupByArgs = {
    where?: BoardArticleWhereInput
    orderBy?: Enumerable<BoardArticleOrderByWithAggregationInput>
    by: BoardArticleScalarFieldEnum[]
    having?: BoardArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardArticleCountAggregateInputType | true
    _min?: BoardArticleMinAggregateInputType
    _max?: BoardArticleMaxAggregateInputType
  }


  export type BoardArticleGroupByOutputType = {
    id: string
    board_id: string
    writer_id: string
    title: string
    content: string
    _count: BoardArticleCountAggregateOutputType | null
    _min: BoardArticleMinAggregateOutputType | null
    _max: BoardArticleMaxAggregateOutputType | null
  }

  type GetBoardArticleGroupByPayload<T extends BoardArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BoardArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardArticleGroupByOutputType[P]>
            : GetScalarType<T[P], BoardArticleGroupByOutputType[P]>
        }
      >
    >


  export type BoardArticleSelect = {
    id?: boolean
    board_id?: boolean
    writer_id?: boolean
    title?: boolean
    content?: boolean
    board?: boolean | BoardArgs
    writer?: boolean | UserArgs
    comments?: boolean | BoardArticle$commentsArgs
    _count?: boolean | BoardArticleCountOutputTypeArgs
  }


  export type BoardArticleInclude = {
    board?: boolean | BoardArgs
    writer?: boolean | UserArgs
    comments?: boolean | BoardArticle$commentsArgs
    _count?: boolean | BoardArticleCountOutputTypeArgs
  }

  export type BoardArticleGetPayload<S extends boolean | null | undefined | BoardArticleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BoardArticle :
    S extends undefined ? never :
    S extends { include: any } & (BoardArticleArgs | BoardArticleFindManyArgs)
    ? BoardArticle  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'board' ? BoardGetPayload<S['include'][P]> :
        P extends 'writer' ? UserGetPayload<S['include'][P]> :
        P extends 'comments' ? Array < BoardCommentGetPayload<S['include'][P]>>  :
        P extends '_count' ? BoardArticleCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BoardArticleArgs | BoardArticleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'board' ? BoardGetPayload<S['select'][P]> :
        P extends 'writer' ? UserGetPayload<S['select'][P]> :
        P extends 'comments' ? Array < BoardCommentGetPayload<S['select'][P]>>  :
        P extends '_count' ? BoardArticleCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof BoardArticle ? BoardArticle[P] : never
  } 
      : BoardArticle


  type BoardArticleCountArgs = 
    Omit<BoardArticleFindManyArgs, 'select' | 'include'> & {
      select?: BoardArticleCountAggregateInputType | true
    }

  export interface BoardArticleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BoardArticle that matches the filter.
     * @param {BoardArticleFindUniqueArgs} args - Arguments to find a BoardArticle
     * @example
     * // Get one BoardArticle
     * const boardArticle = await prisma.boardArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardArticleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BoardArticleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BoardArticle'> extends True ? Prisma__BoardArticleClient<BoardArticleGetPayload<T>> : Prisma__BoardArticleClient<BoardArticleGetPayload<T> | null, null>

    /**
     * Find one BoardArticle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BoardArticleFindUniqueOrThrowArgs} args - Arguments to find a BoardArticle
     * @example
     * // Get one BoardArticle
     * const boardArticle = await prisma.boardArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BoardArticleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BoardArticleFindUniqueOrThrowArgs>
    ): Prisma__BoardArticleClient<BoardArticleGetPayload<T>>

    /**
     * Find the first BoardArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardArticleFindFirstArgs} args - Arguments to find a BoardArticle
     * @example
     * // Get one BoardArticle
     * const boardArticle = await prisma.boardArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardArticleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BoardArticleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BoardArticle'> extends True ? Prisma__BoardArticleClient<BoardArticleGetPayload<T>> : Prisma__BoardArticleClient<BoardArticleGetPayload<T> | null, null>

    /**
     * Find the first BoardArticle that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardArticleFindFirstOrThrowArgs} args - Arguments to find a BoardArticle
     * @example
     * // Get one BoardArticle
     * const boardArticle = await prisma.boardArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BoardArticleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BoardArticleFindFirstOrThrowArgs>
    ): Prisma__BoardArticleClient<BoardArticleGetPayload<T>>

    /**
     * Find zero or more BoardArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardArticleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardArticles
     * const boardArticles = await prisma.boardArticle.findMany()
     * 
     * // Get first 10 BoardArticles
     * const boardArticles = await prisma.boardArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardArticleWithIdOnly = await prisma.boardArticle.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardArticleFindManyArgs>(
      args?: SelectSubset<T, BoardArticleFindManyArgs>
    ): Prisma.PrismaPromise<Array<BoardArticleGetPayload<T>>>

    /**
     * Create a BoardArticle.
     * @param {BoardArticleCreateArgs} args - Arguments to create a BoardArticle.
     * @example
     * // Create one BoardArticle
     * const BoardArticle = await prisma.boardArticle.create({
     *   data: {
     *     // ... data to create a BoardArticle
     *   }
     * })
     * 
    **/
    create<T extends BoardArticleCreateArgs>(
      args: SelectSubset<T, BoardArticleCreateArgs>
    ): Prisma__BoardArticleClient<BoardArticleGetPayload<T>>

    /**
     * Create many BoardArticles.
     *     @param {BoardArticleCreateManyArgs} args - Arguments to create many BoardArticles.
     *     @example
     *     // Create many BoardArticles
     *     const boardArticle = await prisma.boardArticle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoardArticleCreateManyArgs>(
      args?: SelectSubset<T, BoardArticleCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BoardArticle.
     * @param {BoardArticleDeleteArgs} args - Arguments to delete one BoardArticle.
     * @example
     * // Delete one BoardArticle
     * const BoardArticle = await prisma.boardArticle.delete({
     *   where: {
     *     // ... filter to delete one BoardArticle
     *   }
     * })
     * 
    **/
    delete<T extends BoardArticleDeleteArgs>(
      args: SelectSubset<T, BoardArticleDeleteArgs>
    ): Prisma__BoardArticleClient<BoardArticleGetPayload<T>>

    /**
     * Update one BoardArticle.
     * @param {BoardArticleUpdateArgs} args - Arguments to update one BoardArticle.
     * @example
     * // Update one BoardArticle
     * const boardArticle = await prisma.boardArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardArticleUpdateArgs>(
      args: SelectSubset<T, BoardArticleUpdateArgs>
    ): Prisma__BoardArticleClient<BoardArticleGetPayload<T>>

    /**
     * Delete zero or more BoardArticles.
     * @param {BoardArticleDeleteManyArgs} args - Arguments to filter BoardArticles to delete.
     * @example
     * // Delete a few BoardArticles
     * const { count } = await prisma.boardArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardArticleDeleteManyArgs>(
      args?: SelectSubset<T, BoardArticleDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoardArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardArticles
     * const boardArticle = await prisma.boardArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardArticleUpdateManyArgs>(
      args: SelectSubset<T, BoardArticleUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BoardArticle.
     * @param {BoardArticleUpsertArgs} args - Arguments to update or create a BoardArticle.
     * @example
     * // Update or create a BoardArticle
     * const boardArticle = await prisma.boardArticle.upsert({
     *   create: {
     *     // ... data to create a BoardArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardArticle we want to update
     *   }
     * })
    **/
    upsert<T extends BoardArticleUpsertArgs>(
      args: SelectSubset<T, BoardArticleUpsertArgs>
    ): Prisma__BoardArticleClient<BoardArticleGetPayload<T>>

    /**
     * Count the number of BoardArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardArticleCountArgs} args - Arguments to filter BoardArticles to count.
     * @example
     * // Count the number of BoardArticles
     * const count = await prisma.boardArticle.count({
     *   where: {
     *     // ... the filter for the BoardArticles we want to count
     *   }
     * })
    **/
    count<T extends BoardArticleCountArgs>(
      args?: Subset<T, BoardArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoardArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoardArticleAggregateArgs>(args: Subset<T, BoardArticleAggregateArgs>): Prisma.PrismaPromise<GetBoardArticleAggregateType<T>>

    /**
     * Group by BoardArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoardArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardArticleGroupByArgs['orderBy'] }
        : { orderBy?: BoardArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoardArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BoardArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BoardArticleClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    board<T extends BoardArgs= {}>(args?: Subset<T, BoardArgs>): Prisma__BoardClient<BoardGetPayload<T> | Null>;

    writer<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    comments<T extends BoardArticle$commentsArgs= {}>(args?: Subset<T, BoardArticle$commentsArgs>): Prisma.PrismaPromise<Array<BoardCommentGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BoardArticle base type for findUnique actions
   */
  export type BoardArticleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BoardArticle
     */
    select?: BoardArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleInclude | null
    /**
     * Filter, which BoardArticle to fetch.
     */
    where: BoardArticleWhereUniqueInput
  }

  /**
   * BoardArticle findUnique
   */
  export interface BoardArticleFindUniqueArgs extends BoardArticleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BoardArticle findUniqueOrThrow
   */
  export type BoardArticleFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BoardArticle
     */
    select?: BoardArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleInclude | null
    /**
     * Filter, which BoardArticle to fetch.
     */
    where: BoardArticleWhereUniqueInput
  }


  /**
   * BoardArticle base type for findFirst actions
   */
  export type BoardArticleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BoardArticle
     */
    select?: BoardArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleInclude | null
    /**
     * Filter, which BoardArticle to fetch.
     */
    where?: BoardArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardArticles to fetch.
     */
    orderBy?: Enumerable<BoardArticleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardArticles.
     */
    cursor?: BoardArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardArticles.
     */
    distinct?: Enumerable<BoardArticleScalarFieldEnum>
  }

  /**
   * BoardArticle findFirst
   */
  export interface BoardArticleFindFirstArgs extends BoardArticleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BoardArticle findFirstOrThrow
   */
  export type BoardArticleFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BoardArticle
     */
    select?: BoardArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleInclude | null
    /**
     * Filter, which BoardArticle to fetch.
     */
    where?: BoardArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardArticles to fetch.
     */
    orderBy?: Enumerable<BoardArticleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardArticles.
     */
    cursor?: BoardArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardArticles.
     */
    distinct?: Enumerable<BoardArticleScalarFieldEnum>
  }


  /**
   * BoardArticle findMany
   */
  export type BoardArticleFindManyArgs = {
    /**
     * Select specific fields to fetch from the BoardArticle
     */
    select?: BoardArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleInclude | null
    /**
     * Filter, which BoardArticles to fetch.
     */
    where?: BoardArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardArticles to fetch.
     */
    orderBy?: Enumerable<BoardArticleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoardArticles.
     */
    cursor?: BoardArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardArticles.
     */
    skip?: number
    distinct?: Enumerable<BoardArticleScalarFieldEnum>
  }


  /**
   * BoardArticle create
   */
  export type BoardArticleCreateArgs = {
    /**
     * Select specific fields to fetch from the BoardArticle
     */
    select?: BoardArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleInclude | null
    /**
     * The data needed to create a BoardArticle.
     */
    data: XOR<BoardArticleCreateInput, BoardArticleUncheckedCreateInput>
  }


  /**
   * BoardArticle createMany
   */
  export type BoardArticleCreateManyArgs = {
    /**
     * The data used to create many BoardArticles.
     */
    data: Enumerable<BoardArticleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BoardArticle update
   */
  export type BoardArticleUpdateArgs = {
    /**
     * Select specific fields to fetch from the BoardArticle
     */
    select?: BoardArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleInclude | null
    /**
     * The data needed to update a BoardArticle.
     */
    data: XOR<BoardArticleUpdateInput, BoardArticleUncheckedUpdateInput>
    /**
     * Choose, which BoardArticle to update.
     */
    where: BoardArticleWhereUniqueInput
  }


  /**
   * BoardArticle updateMany
   */
  export type BoardArticleUpdateManyArgs = {
    /**
     * The data used to update BoardArticles.
     */
    data: XOR<BoardArticleUpdateManyMutationInput, BoardArticleUncheckedUpdateManyInput>
    /**
     * Filter which BoardArticles to update
     */
    where?: BoardArticleWhereInput
  }


  /**
   * BoardArticle upsert
   */
  export type BoardArticleUpsertArgs = {
    /**
     * Select specific fields to fetch from the BoardArticle
     */
    select?: BoardArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleInclude | null
    /**
     * The filter to search for the BoardArticle to update in case it exists.
     */
    where: BoardArticleWhereUniqueInput
    /**
     * In case the BoardArticle found by the `where` argument doesn't exist, create a new BoardArticle with this data.
     */
    create: XOR<BoardArticleCreateInput, BoardArticleUncheckedCreateInput>
    /**
     * In case the BoardArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardArticleUpdateInput, BoardArticleUncheckedUpdateInput>
  }


  /**
   * BoardArticle delete
   */
  export type BoardArticleDeleteArgs = {
    /**
     * Select specific fields to fetch from the BoardArticle
     */
    select?: BoardArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleInclude | null
    /**
     * Filter which BoardArticle to delete.
     */
    where: BoardArticleWhereUniqueInput
  }


  /**
   * BoardArticle deleteMany
   */
  export type BoardArticleDeleteManyArgs = {
    /**
     * Filter which BoardArticles to delete
     */
    where?: BoardArticleWhereInput
  }


  /**
   * BoardArticle.comments
   */
  export type BoardArticle$commentsArgs = {
    /**
     * Select specific fields to fetch from the BoardComment
     */
    select?: BoardCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentInclude | null
    where?: BoardCommentWhereInput
    orderBy?: Enumerable<BoardCommentOrderByWithRelationInput>
    cursor?: BoardCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BoardCommentScalarFieldEnum>
  }


  /**
   * BoardArticle without action
   */
  export type BoardArticleArgs = {
    /**
     * Select specific fields to fetch from the BoardArticle
     */
    select?: BoardArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleInclude | null
  }



  /**
   * Model BoardComment
   */


  export type AggregateBoardComment = {
    _count: BoardCommentCountAggregateOutputType | null
    _min: BoardCommentMinAggregateOutputType | null
    _max: BoardCommentMaxAggregateOutputType | null
  }

  export type BoardCommentMinAggregateOutputType = {
    id: string | null
    writer_id: string | null
    article_id: string | null
    content: string | null
  }

  export type BoardCommentMaxAggregateOutputType = {
    id: string | null
    writer_id: string | null
    article_id: string | null
    content: string | null
  }

  export type BoardCommentCountAggregateOutputType = {
    id: number
    writer_id: number
    article_id: number
    content: number
    _all: number
  }


  export type BoardCommentMinAggregateInputType = {
    id?: true
    writer_id?: true
    article_id?: true
    content?: true
  }

  export type BoardCommentMaxAggregateInputType = {
    id?: true
    writer_id?: true
    article_id?: true
    content?: true
  }

  export type BoardCommentCountAggregateInputType = {
    id?: true
    writer_id?: true
    article_id?: true
    content?: true
    _all?: true
  }

  export type BoardCommentAggregateArgs = {
    /**
     * Filter which BoardComment to aggregate.
     */
    where?: BoardCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardComments to fetch.
     */
    orderBy?: Enumerable<BoardCommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoardComments
    **/
    _count?: true | BoardCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardCommentMaxAggregateInputType
  }

  export type GetBoardCommentAggregateType<T extends BoardCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateBoardComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardComment[P]>
      : GetScalarType<T[P], AggregateBoardComment[P]>
  }




  export type BoardCommentGroupByArgs = {
    where?: BoardCommentWhereInput
    orderBy?: Enumerable<BoardCommentOrderByWithAggregationInput>
    by: BoardCommentScalarFieldEnum[]
    having?: BoardCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCommentCountAggregateInputType | true
    _min?: BoardCommentMinAggregateInputType
    _max?: BoardCommentMaxAggregateInputType
  }


  export type BoardCommentGroupByOutputType = {
    id: string
    writer_id: string
    article_id: string
    content: string
    _count: BoardCommentCountAggregateOutputType | null
    _min: BoardCommentMinAggregateOutputType | null
    _max: BoardCommentMaxAggregateOutputType | null
  }

  type GetBoardCommentGroupByPayload<T extends BoardCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BoardCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardCommentGroupByOutputType[P]>
            : GetScalarType<T[P], BoardCommentGroupByOutputType[P]>
        }
      >
    >


  export type BoardCommentSelect = {
    id?: boolean
    writer_id?: boolean
    article_id?: boolean
    content?: boolean
    article?: boolean | BoardArticleArgs
    writer?: boolean | UserArgs
  }


  export type BoardCommentInclude = {
    article?: boolean | BoardArticleArgs
    writer?: boolean | UserArgs
  }

  export type BoardCommentGetPayload<S extends boolean | null | undefined | BoardCommentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BoardComment :
    S extends undefined ? never :
    S extends { include: any } & (BoardCommentArgs | BoardCommentFindManyArgs)
    ? BoardComment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'article' ? BoardArticleGetPayload<S['include'][P]> :
        P extends 'writer' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BoardCommentArgs | BoardCommentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'article' ? BoardArticleGetPayload<S['select'][P]> :
        P extends 'writer' ? UserGetPayload<S['select'][P]> :  P extends keyof BoardComment ? BoardComment[P] : never
  } 
      : BoardComment


  type BoardCommentCountArgs = 
    Omit<BoardCommentFindManyArgs, 'select' | 'include'> & {
      select?: BoardCommentCountAggregateInputType | true
    }

  export interface BoardCommentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BoardComment that matches the filter.
     * @param {BoardCommentFindUniqueArgs} args - Arguments to find a BoardComment
     * @example
     * // Get one BoardComment
     * const boardComment = await prisma.boardComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardCommentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BoardCommentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BoardComment'> extends True ? Prisma__BoardCommentClient<BoardCommentGetPayload<T>> : Prisma__BoardCommentClient<BoardCommentGetPayload<T> | null, null>

    /**
     * Find one BoardComment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BoardCommentFindUniqueOrThrowArgs} args - Arguments to find a BoardComment
     * @example
     * // Get one BoardComment
     * const boardComment = await prisma.boardComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BoardCommentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BoardCommentFindUniqueOrThrowArgs>
    ): Prisma__BoardCommentClient<BoardCommentGetPayload<T>>

    /**
     * Find the first BoardComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCommentFindFirstArgs} args - Arguments to find a BoardComment
     * @example
     * // Get one BoardComment
     * const boardComment = await prisma.boardComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardCommentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BoardCommentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BoardComment'> extends True ? Prisma__BoardCommentClient<BoardCommentGetPayload<T>> : Prisma__BoardCommentClient<BoardCommentGetPayload<T> | null, null>

    /**
     * Find the first BoardComment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCommentFindFirstOrThrowArgs} args - Arguments to find a BoardComment
     * @example
     * // Get one BoardComment
     * const boardComment = await prisma.boardComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BoardCommentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BoardCommentFindFirstOrThrowArgs>
    ): Prisma__BoardCommentClient<BoardCommentGetPayload<T>>

    /**
     * Find zero or more BoardComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardComments
     * const boardComments = await prisma.boardComment.findMany()
     * 
     * // Get first 10 BoardComments
     * const boardComments = await prisma.boardComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardCommentWithIdOnly = await prisma.boardComment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardCommentFindManyArgs>(
      args?: SelectSubset<T, BoardCommentFindManyArgs>
    ): Prisma.PrismaPromise<Array<BoardCommentGetPayload<T>>>

    /**
     * Create a BoardComment.
     * @param {BoardCommentCreateArgs} args - Arguments to create a BoardComment.
     * @example
     * // Create one BoardComment
     * const BoardComment = await prisma.boardComment.create({
     *   data: {
     *     // ... data to create a BoardComment
     *   }
     * })
     * 
    **/
    create<T extends BoardCommentCreateArgs>(
      args: SelectSubset<T, BoardCommentCreateArgs>
    ): Prisma__BoardCommentClient<BoardCommentGetPayload<T>>

    /**
     * Create many BoardComments.
     *     @param {BoardCommentCreateManyArgs} args - Arguments to create many BoardComments.
     *     @example
     *     // Create many BoardComments
     *     const boardComment = await prisma.boardComment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoardCommentCreateManyArgs>(
      args?: SelectSubset<T, BoardCommentCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BoardComment.
     * @param {BoardCommentDeleteArgs} args - Arguments to delete one BoardComment.
     * @example
     * // Delete one BoardComment
     * const BoardComment = await prisma.boardComment.delete({
     *   where: {
     *     // ... filter to delete one BoardComment
     *   }
     * })
     * 
    **/
    delete<T extends BoardCommentDeleteArgs>(
      args: SelectSubset<T, BoardCommentDeleteArgs>
    ): Prisma__BoardCommentClient<BoardCommentGetPayload<T>>

    /**
     * Update one BoardComment.
     * @param {BoardCommentUpdateArgs} args - Arguments to update one BoardComment.
     * @example
     * // Update one BoardComment
     * const boardComment = await prisma.boardComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardCommentUpdateArgs>(
      args: SelectSubset<T, BoardCommentUpdateArgs>
    ): Prisma__BoardCommentClient<BoardCommentGetPayload<T>>

    /**
     * Delete zero or more BoardComments.
     * @param {BoardCommentDeleteManyArgs} args - Arguments to filter BoardComments to delete.
     * @example
     * // Delete a few BoardComments
     * const { count } = await prisma.boardComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardCommentDeleteManyArgs>(
      args?: SelectSubset<T, BoardCommentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoardComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardComments
     * const boardComment = await prisma.boardComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardCommentUpdateManyArgs>(
      args: SelectSubset<T, BoardCommentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BoardComment.
     * @param {BoardCommentUpsertArgs} args - Arguments to update or create a BoardComment.
     * @example
     * // Update or create a BoardComment
     * const boardComment = await prisma.boardComment.upsert({
     *   create: {
     *     // ... data to create a BoardComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardComment we want to update
     *   }
     * })
    **/
    upsert<T extends BoardCommentUpsertArgs>(
      args: SelectSubset<T, BoardCommentUpsertArgs>
    ): Prisma__BoardCommentClient<BoardCommentGetPayload<T>>

    /**
     * Count the number of BoardComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCommentCountArgs} args - Arguments to filter BoardComments to count.
     * @example
     * // Count the number of BoardComments
     * const count = await prisma.boardComment.count({
     *   where: {
     *     // ... the filter for the BoardComments we want to count
     *   }
     * })
    **/
    count<T extends BoardCommentCountArgs>(
      args?: Subset<T, BoardCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoardComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoardCommentAggregateArgs>(args: Subset<T, BoardCommentAggregateArgs>): Prisma.PrismaPromise<GetBoardCommentAggregateType<T>>

    /**
     * Group by BoardComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoardCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardCommentGroupByArgs['orderBy'] }
        : { orderBy?: BoardCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoardCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BoardComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BoardCommentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    article<T extends BoardArticleArgs= {}>(args?: Subset<T, BoardArticleArgs>): Prisma__BoardArticleClient<BoardArticleGetPayload<T> | Null>;

    writer<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BoardComment base type for findUnique actions
   */
  export type BoardCommentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BoardComment
     */
    select?: BoardCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentInclude | null
    /**
     * Filter, which BoardComment to fetch.
     */
    where: BoardCommentWhereUniqueInput
  }

  /**
   * BoardComment findUnique
   */
  export interface BoardCommentFindUniqueArgs extends BoardCommentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BoardComment findUniqueOrThrow
   */
  export type BoardCommentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BoardComment
     */
    select?: BoardCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentInclude | null
    /**
     * Filter, which BoardComment to fetch.
     */
    where: BoardCommentWhereUniqueInput
  }


  /**
   * BoardComment base type for findFirst actions
   */
  export type BoardCommentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BoardComment
     */
    select?: BoardCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentInclude | null
    /**
     * Filter, which BoardComment to fetch.
     */
    where?: BoardCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardComments to fetch.
     */
    orderBy?: Enumerable<BoardCommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardComments.
     */
    cursor?: BoardCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardComments.
     */
    distinct?: Enumerable<BoardCommentScalarFieldEnum>
  }

  /**
   * BoardComment findFirst
   */
  export interface BoardCommentFindFirstArgs extends BoardCommentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BoardComment findFirstOrThrow
   */
  export type BoardCommentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BoardComment
     */
    select?: BoardCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentInclude | null
    /**
     * Filter, which BoardComment to fetch.
     */
    where?: BoardCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardComments to fetch.
     */
    orderBy?: Enumerable<BoardCommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardComments.
     */
    cursor?: BoardCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardComments.
     */
    distinct?: Enumerable<BoardCommentScalarFieldEnum>
  }


  /**
   * BoardComment findMany
   */
  export type BoardCommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the BoardComment
     */
    select?: BoardCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentInclude | null
    /**
     * Filter, which BoardComments to fetch.
     */
    where?: BoardCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardComments to fetch.
     */
    orderBy?: Enumerable<BoardCommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoardComments.
     */
    cursor?: BoardCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardComments.
     */
    skip?: number
    distinct?: Enumerable<BoardCommentScalarFieldEnum>
  }


  /**
   * BoardComment create
   */
  export type BoardCommentCreateArgs = {
    /**
     * Select specific fields to fetch from the BoardComment
     */
    select?: BoardCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentInclude | null
    /**
     * The data needed to create a BoardComment.
     */
    data: XOR<BoardCommentCreateInput, BoardCommentUncheckedCreateInput>
  }


  /**
   * BoardComment createMany
   */
  export type BoardCommentCreateManyArgs = {
    /**
     * The data used to create many BoardComments.
     */
    data: Enumerable<BoardCommentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BoardComment update
   */
  export type BoardCommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the BoardComment
     */
    select?: BoardCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentInclude | null
    /**
     * The data needed to update a BoardComment.
     */
    data: XOR<BoardCommentUpdateInput, BoardCommentUncheckedUpdateInput>
    /**
     * Choose, which BoardComment to update.
     */
    where: BoardCommentWhereUniqueInput
  }


  /**
   * BoardComment updateMany
   */
  export type BoardCommentUpdateManyArgs = {
    /**
     * The data used to update BoardComments.
     */
    data: XOR<BoardCommentUpdateManyMutationInput, BoardCommentUncheckedUpdateManyInput>
    /**
     * Filter which BoardComments to update
     */
    where?: BoardCommentWhereInput
  }


  /**
   * BoardComment upsert
   */
  export type BoardCommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the BoardComment
     */
    select?: BoardCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentInclude | null
    /**
     * The filter to search for the BoardComment to update in case it exists.
     */
    where: BoardCommentWhereUniqueInput
    /**
     * In case the BoardComment found by the `where` argument doesn't exist, create a new BoardComment with this data.
     */
    create: XOR<BoardCommentCreateInput, BoardCommentUncheckedCreateInput>
    /**
     * In case the BoardComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardCommentUpdateInput, BoardCommentUncheckedUpdateInput>
  }


  /**
   * BoardComment delete
   */
  export type BoardCommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the BoardComment
     */
    select?: BoardCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentInclude | null
    /**
     * Filter which BoardComment to delete.
     */
    where: BoardCommentWhereUniqueInput
  }


  /**
   * BoardComment deleteMany
   */
  export type BoardCommentDeleteManyArgs = {
    /**
     * Filter which BoardComments to delete
     */
    where?: BoardCommentWhereInput
  }


  /**
   * BoardComment without action
   */
  export type BoardCommentArgs = {
    /**
     * Select specific fields to fetch from the BoardComment
     */
    select?: BoardCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentInclude | null
  }



  /**
   * Model BusinessItem
   */


  export type AggregateBusinessItem = {
    _count: BusinessItemCountAggregateOutputType | null
    _min: BusinessItemMinAggregateOutputType | null
    _max: BusinessItemMaxAggregateOutputType | null
  }

  export type BusinessItemMinAggregateOutputType = {
    id: string | null
    manager_id: string | null
    name: string | null
    main_image: string | null
  }

  export type BusinessItemMaxAggregateOutputType = {
    id: string | null
    manager_id: string | null
    name: string | null
    main_image: string | null
  }

  export type BusinessItemCountAggregateOutputType = {
    id: number
    manager_id: number
    name: number
    main_image: number
    _all: number
  }


  export type BusinessItemMinAggregateInputType = {
    id?: true
    manager_id?: true
    name?: true
    main_image?: true
  }

  export type BusinessItemMaxAggregateInputType = {
    id?: true
    manager_id?: true
    name?: true
    main_image?: true
  }

  export type BusinessItemCountAggregateInputType = {
    id?: true
    manager_id?: true
    name?: true
    main_image?: true
    _all?: true
  }

  export type BusinessItemAggregateArgs = {
    /**
     * Filter which BusinessItem to aggregate.
     */
    where?: BusinessItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessItems to fetch.
     */
    orderBy?: Enumerable<BusinessItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessItems
    **/
    _count?: true | BusinessItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessItemMaxAggregateInputType
  }

  export type GetBusinessItemAggregateType<T extends BusinessItemAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessItem[P]>
      : GetScalarType<T[P], AggregateBusinessItem[P]>
  }




  export type BusinessItemGroupByArgs = {
    where?: BusinessItemWhereInput
    orderBy?: Enumerable<BusinessItemOrderByWithAggregationInput>
    by: BusinessItemScalarFieldEnum[]
    having?: BusinessItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessItemCountAggregateInputType | true
    _min?: BusinessItemMinAggregateInputType
    _max?: BusinessItemMaxAggregateInputType
  }


  export type BusinessItemGroupByOutputType = {
    id: string
    manager_id: string
    name: string
    main_image: string
    _count: BusinessItemCountAggregateOutputType | null
    _min: BusinessItemMinAggregateOutputType | null
    _max: BusinessItemMaxAggregateOutputType | null
  }

  type GetBusinessItemGroupByPayload<T extends BusinessItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BusinessItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessItemGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessItemGroupByOutputType[P]>
        }
      >
    >


  export type BusinessItemSelect = {
    id?: boolean
    manager_id?: boolean
    name?: boolean
    main_image?: boolean
    manager?: boolean | BusinessUserArgs
  }


  export type BusinessItemInclude = {
    manager?: boolean | BusinessUserArgs
  }

  export type BusinessItemGetPayload<S extends boolean | null | undefined | BusinessItemArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BusinessItem :
    S extends undefined ? never :
    S extends { include: any } & (BusinessItemArgs | BusinessItemFindManyArgs)
    ? BusinessItem  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'manager' ? BusinessUserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BusinessItemArgs | BusinessItemFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'manager' ? BusinessUserGetPayload<S['select'][P]> :  P extends keyof BusinessItem ? BusinessItem[P] : never
  } 
      : BusinessItem


  type BusinessItemCountArgs = 
    Omit<BusinessItemFindManyArgs, 'select' | 'include'> & {
      select?: BusinessItemCountAggregateInputType | true
    }

  export interface BusinessItemDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BusinessItem that matches the filter.
     * @param {BusinessItemFindUniqueArgs} args - Arguments to find a BusinessItem
     * @example
     * // Get one BusinessItem
     * const businessItem = await prisma.businessItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BusinessItemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BusinessItemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BusinessItem'> extends True ? Prisma__BusinessItemClient<BusinessItemGetPayload<T>> : Prisma__BusinessItemClient<BusinessItemGetPayload<T> | null, null>

    /**
     * Find one BusinessItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BusinessItemFindUniqueOrThrowArgs} args - Arguments to find a BusinessItem
     * @example
     * // Get one BusinessItem
     * const businessItem = await prisma.businessItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BusinessItemFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BusinessItemFindUniqueOrThrowArgs>
    ): Prisma__BusinessItemClient<BusinessItemGetPayload<T>>

    /**
     * Find the first BusinessItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessItemFindFirstArgs} args - Arguments to find a BusinessItem
     * @example
     * // Get one BusinessItem
     * const businessItem = await prisma.businessItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BusinessItemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BusinessItemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BusinessItem'> extends True ? Prisma__BusinessItemClient<BusinessItemGetPayload<T>> : Prisma__BusinessItemClient<BusinessItemGetPayload<T> | null, null>

    /**
     * Find the first BusinessItem that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessItemFindFirstOrThrowArgs} args - Arguments to find a BusinessItem
     * @example
     * // Get one BusinessItem
     * const businessItem = await prisma.businessItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BusinessItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BusinessItemFindFirstOrThrowArgs>
    ): Prisma__BusinessItemClient<BusinessItemGetPayload<T>>

    /**
     * Find zero or more BusinessItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessItems
     * const businessItems = await prisma.businessItem.findMany()
     * 
     * // Get first 10 BusinessItems
     * const businessItems = await prisma.businessItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessItemWithIdOnly = await prisma.businessItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BusinessItemFindManyArgs>(
      args?: SelectSubset<T, BusinessItemFindManyArgs>
    ): Prisma.PrismaPromise<Array<BusinessItemGetPayload<T>>>

    /**
     * Create a BusinessItem.
     * @param {BusinessItemCreateArgs} args - Arguments to create a BusinessItem.
     * @example
     * // Create one BusinessItem
     * const BusinessItem = await prisma.businessItem.create({
     *   data: {
     *     // ... data to create a BusinessItem
     *   }
     * })
     * 
    **/
    create<T extends BusinessItemCreateArgs>(
      args: SelectSubset<T, BusinessItemCreateArgs>
    ): Prisma__BusinessItemClient<BusinessItemGetPayload<T>>

    /**
     * Create many BusinessItems.
     *     @param {BusinessItemCreateManyArgs} args - Arguments to create many BusinessItems.
     *     @example
     *     // Create many BusinessItems
     *     const businessItem = await prisma.businessItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BusinessItemCreateManyArgs>(
      args?: SelectSubset<T, BusinessItemCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BusinessItem.
     * @param {BusinessItemDeleteArgs} args - Arguments to delete one BusinessItem.
     * @example
     * // Delete one BusinessItem
     * const BusinessItem = await prisma.businessItem.delete({
     *   where: {
     *     // ... filter to delete one BusinessItem
     *   }
     * })
     * 
    **/
    delete<T extends BusinessItemDeleteArgs>(
      args: SelectSubset<T, BusinessItemDeleteArgs>
    ): Prisma__BusinessItemClient<BusinessItemGetPayload<T>>

    /**
     * Update one BusinessItem.
     * @param {BusinessItemUpdateArgs} args - Arguments to update one BusinessItem.
     * @example
     * // Update one BusinessItem
     * const businessItem = await prisma.businessItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BusinessItemUpdateArgs>(
      args: SelectSubset<T, BusinessItemUpdateArgs>
    ): Prisma__BusinessItemClient<BusinessItemGetPayload<T>>

    /**
     * Delete zero or more BusinessItems.
     * @param {BusinessItemDeleteManyArgs} args - Arguments to filter BusinessItems to delete.
     * @example
     * // Delete a few BusinessItems
     * const { count } = await prisma.businessItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BusinessItemDeleteManyArgs>(
      args?: SelectSubset<T, BusinessItemDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessItems
     * const businessItem = await prisma.businessItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BusinessItemUpdateManyArgs>(
      args: SelectSubset<T, BusinessItemUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessItem.
     * @param {BusinessItemUpsertArgs} args - Arguments to update or create a BusinessItem.
     * @example
     * // Update or create a BusinessItem
     * const businessItem = await prisma.businessItem.upsert({
     *   create: {
     *     // ... data to create a BusinessItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessItem we want to update
     *   }
     * })
    **/
    upsert<T extends BusinessItemUpsertArgs>(
      args: SelectSubset<T, BusinessItemUpsertArgs>
    ): Prisma__BusinessItemClient<BusinessItemGetPayload<T>>

    /**
     * Count the number of BusinessItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessItemCountArgs} args - Arguments to filter BusinessItems to count.
     * @example
     * // Count the number of BusinessItems
     * const count = await prisma.businessItem.count({
     *   where: {
     *     // ... the filter for the BusinessItems we want to count
     *   }
     * })
    **/
    count<T extends BusinessItemCountArgs>(
      args?: Subset<T, BusinessItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessItemAggregateArgs>(args: Subset<T, BusinessItemAggregateArgs>): Prisma.PrismaPromise<GetBusinessItemAggregateType<T>>

    /**
     * Group by BusinessItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessItemGroupByArgs['orderBy'] }
        : { orderBy?: BusinessItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BusinessItemClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    manager<T extends BusinessUserArgs= {}>(args?: Subset<T, BusinessUserArgs>): Prisma__BusinessUserClient<BusinessUserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BusinessItem base type for findUnique actions
   */
  export type BusinessItemFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BusinessItem
     */
    select?: BusinessItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessItemInclude | null
    /**
     * Filter, which BusinessItem to fetch.
     */
    where: BusinessItemWhereUniqueInput
  }

  /**
   * BusinessItem findUnique
   */
  export interface BusinessItemFindUniqueArgs extends BusinessItemFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BusinessItem findUniqueOrThrow
   */
  export type BusinessItemFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BusinessItem
     */
    select?: BusinessItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessItemInclude | null
    /**
     * Filter, which BusinessItem to fetch.
     */
    where: BusinessItemWhereUniqueInput
  }


  /**
   * BusinessItem base type for findFirst actions
   */
  export type BusinessItemFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BusinessItem
     */
    select?: BusinessItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessItemInclude | null
    /**
     * Filter, which BusinessItem to fetch.
     */
    where?: BusinessItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessItems to fetch.
     */
    orderBy?: Enumerable<BusinessItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessItems.
     */
    cursor?: BusinessItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessItems.
     */
    distinct?: Enumerable<BusinessItemScalarFieldEnum>
  }

  /**
   * BusinessItem findFirst
   */
  export interface BusinessItemFindFirstArgs extends BusinessItemFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BusinessItem findFirstOrThrow
   */
  export type BusinessItemFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BusinessItem
     */
    select?: BusinessItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessItemInclude | null
    /**
     * Filter, which BusinessItem to fetch.
     */
    where?: BusinessItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessItems to fetch.
     */
    orderBy?: Enumerable<BusinessItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessItems.
     */
    cursor?: BusinessItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessItems.
     */
    distinct?: Enumerable<BusinessItemScalarFieldEnum>
  }


  /**
   * BusinessItem findMany
   */
  export type BusinessItemFindManyArgs = {
    /**
     * Select specific fields to fetch from the BusinessItem
     */
    select?: BusinessItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessItemInclude | null
    /**
     * Filter, which BusinessItems to fetch.
     */
    where?: BusinessItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessItems to fetch.
     */
    orderBy?: Enumerable<BusinessItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessItems.
     */
    cursor?: BusinessItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessItems.
     */
    skip?: number
    distinct?: Enumerable<BusinessItemScalarFieldEnum>
  }


  /**
   * BusinessItem create
   */
  export type BusinessItemCreateArgs = {
    /**
     * Select specific fields to fetch from the BusinessItem
     */
    select?: BusinessItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessItemInclude | null
    /**
     * The data needed to create a BusinessItem.
     */
    data: XOR<BusinessItemCreateInput, BusinessItemUncheckedCreateInput>
  }


  /**
   * BusinessItem createMany
   */
  export type BusinessItemCreateManyArgs = {
    /**
     * The data used to create many BusinessItems.
     */
    data: Enumerable<BusinessItemCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BusinessItem update
   */
  export type BusinessItemUpdateArgs = {
    /**
     * Select specific fields to fetch from the BusinessItem
     */
    select?: BusinessItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessItemInclude | null
    /**
     * The data needed to update a BusinessItem.
     */
    data: XOR<BusinessItemUpdateInput, BusinessItemUncheckedUpdateInput>
    /**
     * Choose, which BusinessItem to update.
     */
    where: BusinessItemWhereUniqueInput
  }


  /**
   * BusinessItem updateMany
   */
  export type BusinessItemUpdateManyArgs = {
    /**
     * The data used to update BusinessItems.
     */
    data: XOR<BusinessItemUpdateManyMutationInput, BusinessItemUncheckedUpdateManyInput>
    /**
     * Filter which BusinessItems to update
     */
    where?: BusinessItemWhereInput
  }


  /**
   * BusinessItem upsert
   */
  export type BusinessItemUpsertArgs = {
    /**
     * Select specific fields to fetch from the BusinessItem
     */
    select?: BusinessItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessItemInclude | null
    /**
     * The filter to search for the BusinessItem to update in case it exists.
     */
    where: BusinessItemWhereUniqueInput
    /**
     * In case the BusinessItem found by the `where` argument doesn't exist, create a new BusinessItem with this data.
     */
    create: XOR<BusinessItemCreateInput, BusinessItemUncheckedCreateInput>
    /**
     * In case the BusinessItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessItemUpdateInput, BusinessItemUncheckedUpdateInput>
  }


  /**
   * BusinessItem delete
   */
  export type BusinessItemDeleteArgs = {
    /**
     * Select specific fields to fetch from the BusinessItem
     */
    select?: BusinessItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessItemInclude | null
    /**
     * Filter which BusinessItem to delete.
     */
    where: BusinessItemWhereUniqueInput
  }


  /**
   * BusinessItem deleteMany
   */
  export type BusinessItemDeleteManyArgs = {
    /**
     * Filter which BusinessItems to delete
     */
    where?: BusinessItemWhereInput
  }


  /**
   * BusinessItem without action
   */
  export type BusinessItemArgs = {
    /**
     * Select specific fields to fetch from the BusinessItem
     */
    select?: BusinessItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessItemInclude | null
  }



  /**
   * Model BusinessRateCategory
   */


  export type AggregateBusinessRateCategory = {
    _count: BusinessRateCategoryCountAggregateOutputType | null
    _min: BusinessRateCategoryMinAggregateOutputType | null
    _max: BusinessRateCategoryMaxAggregateOutputType | null
  }

  export type BusinessRateCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BusinessRateCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BusinessRateCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type BusinessRateCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type BusinessRateCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type BusinessRateCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type BusinessRateCategoryAggregateArgs = {
    /**
     * Filter which BusinessRateCategory to aggregate.
     */
    where?: BusinessRateCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessRateCategories to fetch.
     */
    orderBy?: Enumerable<BusinessRateCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessRateCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessRateCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessRateCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessRateCategories
    **/
    _count?: true | BusinessRateCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessRateCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessRateCategoryMaxAggregateInputType
  }

  export type GetBusinessRateCategoryAggregateType<T extends BusinessRateCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessRateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessRateCategory[P]>
      : GetScalarType<T[P], AggregateBusinessRateCategory[P]>
  }




  export type BusinessRateCategoryGroupByArgs = {
    where?: BusinessRateCategoryWhereInput
    orderBy?: Enumerable<BusinessRateCategoryOrderByWithAggregationInput>
    by: BusinessRateCategoryScalarFieldEnum[]
    having?: BusinessRateCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessRateCategoryCountAggregateInputType | true
    _min?: BusinessRateCategoryMinAggregateInputType
    _max?: BusinessRateCategoryMaxAggregateInputType
  }


  export type BusinessRateCategoryGroupByOutputType = {
    id: string
    name: string
    _count: BusinessRateCategoryCountAggregateOutputType | null
    _min: BusinessRateCategoryMinAggregateOutputType | null
    _max: BusinessRateCategoryMaxAggregateOutputType | null
  }

  type GetBusinessRateCategoryGroupByPayload<T extends BusinessRateCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BusinessRateCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessRateCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessRateCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessRateCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BusinessRateCategorySelect = {
    id?: boolean
    name?: boolean
    rates?: boolean | BusinessRateCategory$ratesArgs
    _count?: boolean | BusinessRateCategoryCountOutputTypeArgs
  }


  export type BusinessRateCategoryInclude = {
    rates?: boolean | BusinessRateCategory$ratesArgs
    _count?: boolean | BusinessRateCategoryCountOutputTypeArgs
  }

  export type BusinessRateCategoryGetPayload<S extends boolean | null | undefined | BusinessRateCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BusinessRateCategory :
    S extends undefined ? never :
    S extends { include: any } & (BusinessRateCategoryArgs | BusinessRateCategoryFindManyArgs)
    ? BusinessRateCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'rates' ? Array < BusinessRateGetPayload<S['include'][P]>>  :
        P extends '_count' ? BusinessRateCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BusinessRateCategoryArgs | BusinessRateCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'rates' ? Array < BusinessRateGetPayload<S['select'][P]>>  :
        P extends '_count' ? BusinessRateCategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof BusinessRateCategory ? BusinessRateCategory[P] : never
  } 
      : BusinessRateCategory


  type BusinessRateCategoryCountArgs = 
    Omit<BusinessRateCategoryFindManyArgs, 'select' | 'include'> & {
      select?: BusinessRateCategoryCountAggregateInputType | true
    }

  export interface BusinessRateCategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BusinessRateCategory that matches the filter.
     * @param {BusinessRateCategoryFindUniqueArgs} args - Arguments to find a BusinessRateCategory
     * @example
     * // Get one BusinessRateCategory
     * const businessRateCategory = await prisma.businessRateCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BusinessRateCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BusinessRateCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BusinessRateCategory'> extends True ? Prisma__BusinessRateCategoryClient<BusinessRateCategoryGetPayload<T>> : Prisma__BusinessRateCategoryClient<BusinessRateCategoryGetPayload<T> | null, null>

    /**
     * Find one BusinessRateCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BusinessRateCategoryFindUniqueOrThrowArgs} args - Arguments to find a BusinessRateCategory
     * @example
     * // Get one BusinessRateCategory
     * const businessRateCategory = await prisma.businessRateCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BusinessRateCategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BusinessRateCategoryFindUniqueOrThrowArgs>
    ): Prisma__BusinessRateCategoryClient<BusinessRateCategoryGetPayload<T>>

    /**
     * Find the first BusinessRateCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessRateCategoryFindFirstArgs} args - Arguments to find a BusinessRateCategory
     * @example
     * // Get one BusinessRateCategory
     * const businessRateCategory = await prisma.businessRateCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BusinessRateCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BusinessRateCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BusinessRateCategory'> extends True ? Prisma__BusinessRateCategoryClient<BusinessRateCategoryGetPayload<T>> : Prisma__BusinessRateCategoryClient<BusinessRateCategoryGetPayload<T> | null, null>

    /**
     * Find the first BusinessRateCategory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessRateCategoryFindFirstOrThrowArgs} args - Arguments to find a BusinessRateCategory
     * @example
     * // Get one BusinessRateCategory
     * const businessRateCategory = await prisma.businessRateCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BusinessRateCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BusinessRateCategoryFindFirstOrThrowArgs>
    ): Prisma__BusinessRateCategoryClient<BusinessRateCategoryGetPayload<T>>

    /**
     * Find zero or more BusinessRateCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessRateCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessRateCategories
     * const businessRateCategories = await prisma.businessRateCategory.findMany()
     * 
     * // Get first 10 BusinessRateCategories
     * const businessRateCategories = await prisma.businessRateCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessRateCategoryWithIdOnly = await prisma.businessRateCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BusinessRateCategoryFindManyArgs>(
      args?: SelectSubset<T, BusinessRateCategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<BusinessRateCategoryGetPayload<T>>>

    /**
     * Create a BusinessRateCategory.
     * @param {BusinessRateCategoryCreateArgs} args - Arguments to create a BusinessRateCategory.
     * @example
     * // Create one BusinessRateCategory
     * const BusinessRateCategory = await prisma.businessRateCategory.create({
     *   data: {
     *     // ... data to create a BusinessRateCategory
     *   }
     * })
     * 
    **/
    create<T extends BusinessRateCategoryCreateArgs>(
      args: SelectSubset<T, BusinessRateCategoryCreateArgs>
    ): Prisma__BusinessRateCategoryClient<BusinessRateCategoryGetPayload<T>>

    /**
     * Create many BusinessRateCategories.
     *     @param {BusinessRateCategoryCreateManyArgs} args - Arguments to create many BusinessRateCategories.
     *     @example
     *     // Create many BusinessRateCategories
     *     const businessRateCategory = await prisma.businessRateCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BusinessRateCategoryCreateManyArgs>(
      args?: SelectSubset<T, BusinessRateCategoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BusinessRateCategory.
     * @param {BusinessRateCategoryDeleteArgs} args - Arguments to delete one BusinessRateCategory.
     * @example
     * // Delete one BusinessRateCategory
     * const BusinessRateCategory = await prisma.businessRateCategory.delete({
     *   where: {
     *     // ... filter to delete one BusinessRateCategory
     *   }
     * })
     * 
    **/
    delete<T extends BusinessRateCategoryDeleteArgs>(
      args: SelectSubset<T, BusinessRateCategoryDeleteArgs>
    ): Prisma__BusinessRateCategoryClient<BusinessRateCategoryGetPayload<T>>

    /**
     * Update one BusinessRateCategory.
     * @param {BusinessRateCategoryUpdateArgs} args - Arguments to update one BusinessRateCategory.
     * @example
     * // Update one BusinessRateCategory
     * const businessRateCategory = await prisma.businessRateCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BusinessRateCategoryUpdateArgs>(
      args: SelectSubset<T, BusinessRateCategoryUpdateArgs>
    ): Prisma__BusinessRateCategoryClient<BusinessRateCategoryGetPayload<T>>

    /**
     * Delete zero or more BusinessRateCategories.
     * @param {BusinessRateCategoryDeleteManyArgs} args - Arguments to filter BusinessRateCategories to delete.
     * @example
     * // Delete a few BusinessRateCategories
     * const { count } = await prisma.businessRateCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BusinessRateCategoryDeleteManyArgs>(
      args?: SelectSubset<T, BusinessRateCategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessRateCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessRateCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessRateCategories
     * const businessRateCategory = await prisma.businessRateCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BusinessRateCategoryUpdateManyArgs>(
      args: SelectSubset<T, BusinessRateCategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessRateCategory.
     * @param {BusinessRateCategoryUpsertArgs} args - Arguments to update or create a BusinessRateCategory.
     * @example
     * // Update or create a BusinessRateCategory
     * const businessRateCategory = await prisma.businessRateCategory.upsert({
     *   create: {
     *     // ... data to create a BusinessRateCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessRateCategory we want to update
     *   }
     * })
    **/
    upsert<T extends BusinessRateCategoryUpsertArgs>(
      args: SelectSubset<T, BusinessRateCategoryUpsertArgs>
    ): Prisma__BusinessRateCategoryClient<BusinessRateCategoryGetPayload<T>>

    /**
     * Count the number of BusinessRateCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessRateCategoryCountArgs} args - Arguments to filter BusinessRateCategories to count.
     * @example
     * // Count the number of BusinessRateCategories
     * const count = await prisma.businessRateCategory.count({
     *   where: {
     *     // ... the filter for the BusinessRateCategories we want to count
     *   }
     * })
    **/
    count<T extends BusinessRateCategoryCountArgs>(
      args?: Subset<T, BusinessRateCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessRateCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessRateCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessRateCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessRateCategoryAggregateArgs>(args: Subset<T, BusinessRateCategoryAggregateArgs>): Prisma.PrismaPromise<GetBusinessRateCategoryAggregateType<T>>

    /**
     * Group by BusinessRateCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessRateCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessRateCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessRateCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BusinessRateCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessRateCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessRateCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessRateCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BusinessRateCategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    rates<T extends BusinessRateCategory$ratesArgs= {}>(args?: Subset<T, BusinessRateCategory$ratesArgs>): Prisma.PrismaPromise<Array<BusinessRateGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BusinessRateCategory base type for findUnique actions
   */
  export type BusinessRateCategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BusinessRateCategory
     */
    select?: BusinessRateCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateCategoryInclude | null
    /**
     * Filter, which BusinessRateCategory to fetch.
     */
    where: BusinessRateCategoryWhereUniqueInput
  }

  /**
   * BusinessRateCategory findUnique
   */
  export interface BusinessRateCategoryFindUniqueArgs extends BusinessRateCategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BusinessRateCategory findUniqueOrThrow
   */
  export type BusinessRateCategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BusinessRateCategory
     */
    select?: BusinessRateCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateCategoryInclude | null
    /**
     * Filter, which BusinessRateCategory to fetch.
     */
    where: BusinessRateCategoryWhereUniqueInput
  }


  /**
   * BusinessRateCategory base type for findFirst actions
   */
  export type BusinessRateCategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BusinessRateCategory
     */
    select?: BusinessRateCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateCategoryInclude | null
    /**
     * Filter, which BusinessRateCategory to fetch.
     */
    where?: BusinessRateCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessRateCategories to fetch.
     */
    orderBy?: Enumerable<BusinessRateCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessRateCategories.
     */
    cursor?: BusinessRateCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessRateCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessRateCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessRateCategories.
     */
    distinct?: Enumerable<BusinessRateCategoryScalarFieldEnum>
  }

  /**
   * BusinessRateCategory findFirst
   */
  export interface BusinessRateCategoryFindFirstArgs extends BusinessRateCategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BusinessRateCategory findFirstOrThrow
   */
  export type BusinessRateCategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BusinessRateCategory
     */
    select?: BusinessRateCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateCategoryInclude | null
    /**
     * Filter, which BusinessRateCategory to fetch.
     */
    where?: BusinessRateCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessRateCategories to fetch.
     */
    orderBy?: Enumerable<BusinessRateCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessRateCategories.
     */
    cursor?: BusinessRateCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessRateCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessRateCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessRateCategories.
     */
    distinct?: Enumerable<BusinessRateCategoryScalarFieldEnum>
  }


  /**
   * BusinessRateCategory findMany
   */
  export type BusinessRateCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the BusinessRateCategory
     */
    select?: BusinessRateCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateCategoryInclude | null
    /**
     * Filter, which BusinessRateCategories to fetch.
     */
    where?: BusinessRateCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessRateCategories to fetch.
     */
    orderBy?: Enumerable<BusinessRateCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessRateCategories.
     */
    cursor?: BusinessRateCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessRateCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessRateCategories.
     */
    skip?: number
    distinct?: Enumerable<BusinessRateCategoryScalarFieldEnum>
  }


  /**
   * BusinessRateCategory create
   */
  export type BusinessRateCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the BusinessRateCategory
     */
    select?: BusinessRateCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateCategoryInclude | null
    /**
     * The data needed to create a BusinessRateCategory.
     */
    data: XOR<BusinessRateCategoryCreateInput, BusinessRateCategoryUncheckedCreateInput>
  }


  /**
   * BusinessRateCategory createMany
   */
  export type BusinessRateCategoryCreateManyArgs = {
    /**
     * The data used to create many BusinessRateCategories.
     */
    data: Enumerable<BusinessRateCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BusinessRateCategory update
   */
  export type BusinessRateCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the BusinessRateCategory
     */
    select?: BusinessRateCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateCategoryInclude | null
    /**
     * The data needed to update a BusinessRateCategory.
     */
    data: XOR<BusinessRateCategoryUpdateInput, BusinessRateCategoryUncheckedUpdateInput>
    /**
     * Choose, which BusinessRateCategory to update.
     */
    where: BusinessRateCategoryWhereUniqueInput
  }


  /**
   * BusinessRateCategory updateMany
   */
  export type BusinessRateCategoryUpdateManyArgs = {
    /**
     * The data used to update BusinessRateCategories.
     */
    data: XOR<BusinessRateCategoryUpdateManyMutationInput, BusinessRateCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BusinessRateCategories to update
     */
    where?: BusinessRateCategoryWhereInput
  }


  /**
   * BusinessRateCategory upsert
   */
  export type BusinessRateCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the BusinessRateCategory
     */
    select?: BusinessRateCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateCategoryInclude | null
    /**
     * The filter to search for the BusinessRateCategory to update in case it exists.
     */
    where: BusinessRateCategoryWhereUniqueInput
    /**
     * In case the BusinessRateCategory found by the `where` argument doesn't exist, create a new BusinessRateCategory with this data.
     */
    create: XOR<BusinessRateCategoryCreateInput, BusinessRateCategoryUncheckedCreateInput>
    /**
     * In case the BusinessRateCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessRateCategoryUpdateInput, BusinessRateCategoryUncheckedUpdateInput>
  }


  /**
   * BusinessRateCategory delete
   */
  export type BusinessRateCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the BusinessRateCategory
     */
    select?: BusinessRateCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateCategoryInclude | null
    /**
     * Filter which BusinessRateCategory to delete.
     */
    where: BusinessRateCategoryWhereUniqueInput
  }


  /**
   * BusinessRateCategory deleteMany
   */
  export type BusinessRateCategoryDeleteManyArgs = {
    /**
     * Filter which BusinessRateCategories to delete
     */
    where?: BusinessRateCategoryWhereInput
  }


  /**
   * BusinessRateCategory.rates
   */
  export type BusinessRateCategory$ratesArgs = {
    /**
     * Select specific fields to fetch from the BusinessRate
     */
    select?: BusinessRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateInclude | null
    where?: BusinessRateWhereInput
    orderBy?: Enumerable<BusinessRateOrderByWithRelationInput>
    cursor?: BusinessRateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BusinessRateScalarFieldEnum>
  }


  /**
   * BusinessRateCategory without action
   */
  export type BusinessRateCategoryArgs = {
    /**
     * Select specific fields to fetch from the BusinessRateCategory
     */
    select?: BusinessRateCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateCategoryInclude | null
  }



  /**
   * Model BusinessRate
   */


  export type AggregateBusinessRate = {
    _count: BusinessRateCountAggregateOutputType | null
    _avg: BusinessRateAvgAggregateOutputType | null
    _sum: BusinessRateSumAggregateOutputType | null
    _min: BusinessRateMinAggregateOutputType | null
    _max: BusinessRateMaxAggregateOutputType | null
  }

  export type BusinessRateAvgAggregateOutputType = {
    rate: number | null
  }

  export type BusinessRateSumAggregateOutputType = {
    rate: number | null
  }

  export type BusinessRateMinAggregateOutputType = {
    id: string | null
    category_id: string | null
    business_id: string | null
    rater_id: string | null
    rate: number | null
  }

  export type BusinessRateMaxAggregateOutputType = {
    id: string | null
    category_id: string | null
    business_id: string | null
    rater_id: string | null
    rate: number | null
  }

  export type BusinessRateCountAggregateOutputType = {
    id: number
    category_id: number
    business_id: number
    rater_id: number
    rate: number
    _all: number
  }


  export type BusinessRateAvgAggregateInputType = {
    rate?: true
  }

  export type BusinessRateSumAggregateInputType = {
    rate?: true
  }

  export type BusinessRateMinAggregateInputType = {
    id?: true
    category_id?: true
    business_id?: true
    rater_id?: true
    rate?: true
  }

  export type BusinessRateMaxAggregateInputType = {
    id?: true
    category_id?: true
    business_id?: true
    rater_id?: true
    rate?: true
  }

  export type BusinessRateCountAggregateInputType = {
    id?: true
    category_id?: true
    business_id?: true
    rater_id?: true
    rate?: true
    _all?: true
  }

  export type BusinessRateAggregateArgs = {
    /**
     * Filter which BusinessRate to aggregate.
     */
    where?: BusinessRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessRates to fetch.
     */
    orderBy?: Enumerable<BusinessRateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessRates
    **/
    _count?: true | BusinessRateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessRateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessRateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessRateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessRateMaxAggregateInputType
  }

  export type GetBusinessRateAggregateType<T extends BusinessRateAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessRate[P]>
      : GetScalarType<T[P], AggregateBusinessRate[P]>
  }




  export type BusinessRateGroupByArgs = {
    where?: BusinessRateWhereInput
    orderBy?: Enumerable<BusinessRateOrderByWithAggregationInput>
    by: BusinessRateScalarFieldEnum[]
    having?: BusinessRateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessRateCountAggregateInputType | true
    _avg?: BusinessRateAvgAggregateInputType
    _sum?: BusinessRateSumAggregateInputType
    _min?: BusinessRateMinAggregateInputType
    _max?: BusinessRateMaxAggregateInputType
  }


  export type BusinessRateGroupByOutputType = {
    id: string
    category_id: string
    business_id: string
    rater_id: string
    rate: number
    _count: BusinessRateCountAggregateOutputType | null
    _avg: BusinessRateAvgAggregateOutputType | null
    _sum: BusinessRateSumAggregateOutputType | null
    _min: BusinessRateMinAggregateOutputType | null
    _max: BusinessRateMaxAggregateOutputType | null
  }

  type GetBusinessRateGroupByPayload<T extends BusinessRateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BusinessRateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessRateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessRateGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessRateGroupByOutputType[P]>
        }
      >
    >


  export type BusinessRateSelect = {
    id?: boolean
    category_id?: boolean
    business_id?: boolean
    rater_id?: boolean
    rate?: boolean
    business?: boolean | BusinessUserArgs
    category?: boolean | BusinessRateCategoryArgs
    rater?: boolean | CustomerArgs
  }


  export type BusinessRateInclude = {
    business?: boolean | BusinessUserArgs
    category?: boolean | BusinessRateCategoryArgs
    rater?: boolean | CustomerArgs
  }

  export type BusinessRateGetPayload<S extends boolean | null | undefined | BusinessRateArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BusinessRate :
    S extends undefined ? never :
    S extends { include: any } & (BusinessRateArgs | BusinessRateFindManyArgs)
    ? BusinessRate  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'business' ? BusinessUserGetPayload<S['include'][P]> :
        P extends 'category' ? BusinessRateCategoryGetPayload<S['include'][P]> :
        P extends 'rater' ? CustomerGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BusinessRateArgs | BusinessRateFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'business' ? BusinessUserGetPayload<S['select'][P]> :
        P extends 'category' ? BusinessRateCategoryGetPayload<S['select'][P]> :
        P extends 'rater' ? CustomerGetPayload<S['select'][P]> :  P extends keyof BusinessRate ? BusinessRate[P] : never
  } 
      : BusinessRate


  type BusinessRateCountArgs = 
    Omit<BusinessRateFindManyArgs, 'select' | 'include'> & {
      select?: BusinessRateCountAggregateInputType | true
    }

  export interface BusinessRateDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BusinessRate that matches the filter.
     * @param {BusinessRateFindUniqueArgs} args - Arguments to find a BusinessRate
     * @example
     * // Get one BusinessRate
     * const businessRate = await prisma.businessRate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BusinessRateFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BusinessRateFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BusinessRate'> extends True ? Prisma__BusinessRateClient<BusinessRateGetPayload<T>> : Prisma__BusinessRateClient<BusinessRateGetPayload<T> | null, null>

    /**
     * Find one BusinessRate that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BusinessRateFindUniqueOrThrowArgs} args - Arguments to find a BusinessRate
     * @example
     * // Get one BusinessRate
     * const businessRate = await prisma.businessRate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BusinessRateFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BusinessRateFindUniqueOrThrowArgs>
    ): Prisma__BusinessRateClient<BusinessRateGetPayload<T>>

    /**
     * Find the first BusinessRate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessRateFindFirstArgs} args - Arguments to find a BusinessRate
     * @example
     * // Get one BusinessRate
     * const businessRate = await prisma.businessRate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BusinessRateFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BusinessRateFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BusinessRate'> extends True ? Prisma__BusinessRateClient<BusinessRateGetPayload<T>> : Prisma__BusinessRateClient<BusinessRateGetPayload<T> | null, null>

    /**
     * Find the first BusinessRate that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessRateFindFirstOrThrowArgs} args - Arguments to find a BusinessRate
     * @example
     * // Get one BusinessRate
     * const businessRate = await prisma.businessRate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BusinessRateFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BusinessRateFindFirstOrThrowArgs>
    ): Prisma__BusinessRateClient<BusinessRateGetPayload<T>>

    /**
     * Find zero or more BusinessRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessRateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessRates
     * const businessRates = await prisma.businessRate.findMany()
     * 
     * // Get first 10 BusinessRates
     * const businessRates = await prisma.businessRate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessRateWithIdOnly = await prisma.businessRate.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BusinessRateFindManyArgs>(
      args?: SelectSubset<T, BusinessRateFindManyArgs>
    ): Prisma.PrismaPromise<Array<BusinessRateGetPayload<T>>>

    /**
     * Create a BusinessRate.
     * @param {BusinessRateCreateArgs} args - Arguments to create a BusinessRate.
     * @example
     * // Create one BusinessRate
     * const BusinessRate = await prisma.businessRate.create({
     *   data: {
     *     // ... data to create a BusinessRate
     *   }
     * })
     * 
    **/
    create<T extends BusinessRateCreateArgs>(
      args: SelectSubset<T, BusinessRateCreateArgs>
    ): Prisma__BusinessRateClient<BusinessRateGetPayload<T>>

    /**
     * Create many BusinessRates.
     *     @param {BusinessRateCreateManyArgs} args - Arguments to create many BusinessRates.
     *     @example
     *     // Create many BusinessRates
     *     const businessRate = await prisma.businessRate.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BusinessRateCreateManyArgs>(
      args?: SelectSubset<T, BusinessRateCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BusinessRate.
     * @param {BusinessRateDeleteArgs} args - Arguments to delete one BusinessRate.
     * @example
     * // Delete one BusinessRate
     * const BusinessRate = await prisma.businessRate.delete({
     *   where: {
     *     // ... filter to delete one BusinessRate
     *   }
     * })
     * 
    **/
    delete<T extends BusinessRateDeleteArgs>(
      args: SelectSubset<T, BusinessRateDeleteArgs>
    ): Prisma__BusinessRateClient<BusinessRateGetPayload<T>>

    /**
     * Update one BusinessRate.
     * @param {BusinessRateUpdateArgs} args - Arguments to update one BusinessRate.
     * @example
     * // Update one BusinessRate
     * const businessRate = await prisma.businessRate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BusinessRateUpdateArgs>(
      args: SelectSubset<T, BusinessRateUpdateArgs>
    ): Prisma__BusinessRateClient<BusinessRateGetPayload<T>>

    /**
     * Delete zero or more BusinessRates.
     * @param {BusinessRateDeleteManyArgs} args - Arguments to filter BusinessRates to delete.
     * @example
     * // Delete a few BusinessRates
     * const { count } = await prisma.businessRate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BusinessRateDeleteManyArgs>(
      args?: SelectSubset<T, BusinessRateDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessRateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessRates
     * const businessRate = await prisma.businessRate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BusinessRateUpdateManyArgs>(
      args: SelectSubset<T, BusinessRateUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessRate.
     * @param {BusinessRateUpsertArgs} args - Arguments to update or create a BusinessRate.
     * @example
     * // Update or create a BusinessRate
     * const businessRate = await prisma.businessRate.upsert({
     *   create: {
     *     // ... data to create a BusinessRate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessRate we want to update
     *   }
     * })
    **/
    upsert<T extends BusinessRateUpsertArgs>(
      args: SelectSubset<T, BusinessRateUpsertArgs>
    ): Prisma__BusinessRateClient<BusinessRateGetPayload<T>>

    /**
     * Count the number of BusinessRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessRateCountArgs} args - Arguments to filter BusinessRates to count.
     * @example
     * // Count the number of BusinessRates
     * const count = await prisma.businessRate.count({
     *   where: {
     *     // ... the filter for the BusinessRates we want to count
     *   }
     * })
    **/
    count<T extends BusinessRateCountArgs>(
      args?: Subset<T, BusinessRateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessRateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessRateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessRateAggregateArgs>(args: Subset<T, BusinessRateAggregateArgs>): Prisma.PrismaPromise<GetBusinessRateAggregateType<T>>

    /**
     * Group by BusinessRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessRateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessRateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessRateGroupByArgs['orderBy'] }
        : { orderBy?: BusinessRateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessRate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BusinessRateClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    business<T extends BusinessUserArgs= {}>(args?: Subset<T, BusinessUserArgs>): Prisma__BusinessUserClient<BusinessUserGetPayload<T> | Null>;

    category<T extends BusinessRateCategoryArgs= {}>(args?: Subset<T, BusinessRateCategoryArgs>): Prisma__BusinessRateCategoryClient<BusinessRateCategoryGetPayload<T> | Null>;

    rater<T extends CustomerArgs= {}>(args?: Subset<T, CustomerArgs>): Prisma__CustomerClient<CustomerGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BusinessRate base type for findUnique actions
   */
  export type BusinessRateFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BusinessRate
     */
    select?: BusinessRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateInclude | null
    /**
     * Filter, which BusinessRate to fetch.
     */
    where: BusinessRateWhereUniqueInput
  }

  /**
   * BusinessRate findUnique
   */
  export interface BusinessRateFindUniqueArgs extends BusinessRateFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BusinessRate findUniqueOrThrow
   */
  export type BusinessRateFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BusinessRate
     */
    select?: BusinessRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateInclude | null
    /**
     * Filter, which BusinessRate to fetch.
     */
    where: BusinessRateWhereUniqueInput
  }


  /**
   * BusinessRate base type for findFirst actions
   */
  export type BusinessRateFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BusinessRate
     */
    select?: BusinessRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateInclude | null
    /**
     * Filter, which BusinessRate to fetch.
     */
    where?: BusinessRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessRates to fetch.
     */
    orderBy?: Enumerable<BusinessRateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessRates.
     */
    cursor?: BusinessRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessRates.
     */
    distinct?: Enumerable<BusinessRateScalarFieldEnum>
  }

  /**
   * BusinessRate findFirst
   */
  export interface BusinessRateFindFirstArgs extends BusinessRateFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BusinessRate findFirstOrThrow
   */
  export type BusinessRateFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BusinessRate
     */
    select?: BusinessRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateInclude | null
    /**
     * Filter, which BusinessRate to fetch.
     */
    where?: BusinessRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessRates to fetch.
     */
    orderBy?: Enumerable<BusinessRateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessRates.
     */
    cursor?: BusinessRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessRates.
     */
    distinct?: Enumerable<BusinessRateScalarFieldEnum>
  }


  /**
   * BusinessRate findMany
   */
  export type BusinessRateFindManyArgs = {
    /**
     * Select specific fields to fetch from the BusinessRate
     */
    select?: BusinessRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateInclude | null
    /**
     * Filter, which BusinessRates to fetch.
     */
    where?: BusinessRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessRates to fetch.
     */
    orderBy?: Enumerable<BusinessRateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessRates.
     */
    cursor?: BusinessRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessRates.
     */
    skip?: number
    distinct?: Enumerable<BusinessRateScalarFieldEnum>
  }


  /**
   * BusinessRate create
   */
  export type BusinessRateCreateArgs = {
    /**
     * Select specific fields to fetch from the BusinessRate
     */
    select?: BusinessRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateInclude | null
    /**
     * The data needed to create a BusinessRate.
     */
    data: XOR<BusinessRateCreateInput, BusinessRateUncheckedCreateInput>
  }


  /**
   * BusinessRate createMany
   */
  export type BusinessRateCreateManyArgs = {
    /**
     * The data used to create many BusinessRates.
     */
    data: Enumerable<BusinessRateCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BusinessRate update
   */
  export type BusinessRateUpdateArgs = {
    /**
     * Select specific fields to fetch from the BusinessRate
     */
    select?: BusinessRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateInclude | null
    /**
     * The data needed to update a BusinessRate.
     */
    data: XOR<BusinessRateUpdateInput, BusinessRateUncheckedUpdateInput>
    /**
     * Choose, which BusinessRate to update.
     */
    where: BusinessRateWhereUniqueInput
  }


  /**
   * BusinessRate updateMany
   */
  export type BusinessRateUpdateManyArgs = {
    /**
     * The data used to update BusinessRates.
     */
    data: XOR<BusinessRateUpdateManyMutationInput, BusinessRateUncheckedUpdateManyInput>
    /**
     * Filter which BusinessRates to update
     */
    where?: BusinessRateWhereInput
  }


  /**
   * BusinessRate upsert
   */
  export type BusinessRateUpsertArgs = {
    /**
     * Select specific fields to fetch from the BusinessRate
     */
    select?: BusinessRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateInclude | null
    /**
     * The filter to search for the BusinessRate to update in case it exists.
     */
    where: BusinessRateWhereUniqueInput
    /**
     * In case the BusinessRate found by the `where` argument doesn't exist, create a new BusinessRate with this data.
     */
    create: XOR<BusinessRateCreateInput, BusinessRateUncheckedCreateInput>
    /**
     * In case the BusinessRate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessRateUpdateInput, BusinessRateUncheckedUpdateInput>
  }


  /**
   * BusinessRate delete
   */
  export type BusinessRateDeleteArgs = {
    /**
     * Select specific fields to fetch from the BusinessRate
     */
    select?: BusinessRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateInclude | null
    /**
     * Filter which BusinessRate to delete.
     */
    where: BusinessRateWhereUniqueInput
  }


  /**
   * BusinessRate deleteMany
   */
  export type BusinessRateDeleteManyArgs = {
    /**
     * Filter which BusinessRates to delete
     */
    where?: BusinessRateWhereInput
  }


  /**
   * BusinessRate without action
   */
  export type BusinessRateArgs = {
    /**
     * Select specific fields to fetch from the BusinessRate
     */
    select?: BusinessRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateInclude | null
  }



  /**
   * Model BusinessReview
   */


  export type AggregateBusinessReview = {
    _count: BusinessReviewCountAggregateOutputType | null
    _min: BusinessReviewMinAggregateOutputType | null
    _max: BusinessReviewMaxAggregateOutputType | null
  }

  export type BusinessReviewMinAggregateOutputType = {
    id: string | null
    business_id: string | null
    reviewer_id: string | null
    content: string | null
  }

  export type BusinessReviewMaxAggregateOutputType = {
    id: string | null
    business_id: string | null
    reviewer_id: string | null
    content: string | null
  }

  export type BusinessReviewCountAggregateOutputType = {
    id: number
    business_id: number
    reviewer_id: number
    content: number
    _all: number
  }


  export type BusinessReviewMinAggregateInputType = {
    id?: true
    business_id?: true
    reviewer_id?: true
    content?: true
  }

  export type BusinessReviewMaxAggregateInputType = {
    id?: true
    business_id?: true
    reviewer_id?: true
    content?: true
  }

  export type BusinessReviewCountAggregateInputType = {
    id?: true
    business_id?: true
    reviewer_id?: true
    content?: true
    _all?: true
  }

  export type BusinessReviewAggregateArgs = {
    /**
     * Filter which BusinessReview to aggregate.
     */
    where?: BusinessReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessReviews to fetch.
     */
    orderBy?: Enumerable<BusinessReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessReviews
    **/
    _count?: true | BusinessReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessReviewMaxAggregateInputType
  }

  export type GetBusinessReviewAggregateType<T extends BusinessReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessReview[P]>
      : GetScalarType<T[P], AggregateBusinessReview[P]>
  }




  export type BusinessReviewGroupByArgs = {
    where?: BusinessReviewWhereInput
    orderBy?: Enumerable<BusinessReviewOrderByWithAggregationInput>
    by: BusinessReviewScalarFieldEnum[]
    having?: BusinessReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessReviewCountAggregateInputType | true
    _min?: BusinessReviewMinAggregateInputType
    _max?: BusinessReviewMaxAggregateInputType
  }


  export type BusinessReviewGroupByOutputType = {
    id: string
    business_id: string
    reviewer_id: string
    content: string
    _count: BusinessReviewCountAggregateOutputType | null
    _min: BusinessReviewMinAggregateOutputType | null
    _max: BusinessReviewMaxAggregateOutputType | null
  }

  type GetBusinessReviewGroupByPayload<T extends BusinessReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BusinessReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessReviewGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessReviewGroupByOutputType[P]>
        }
      >
    >


  export type BusinessReviewSelect = {
    id?: boolean
    business_id?: boolean
    reviewer_id?: boolean
    content?: boolean
    business?: boolean | BusinessUserArgs
    reviewer?: boolean | CustomerArgs
  }


  export type BusinessReviewInclude = {
    business?: boolean | BusinessUserArgs
    reviewer?: boolean | CustomerArgs
  }

  export type BusinessReviewGetPayload<S extends boolean | null | undefined | BusinessReviewArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BusinessReview :
    S extends undefined ? never :
    S extends { include: any } & (BusinessReviewArgs | BusinessReviewFindManyArgs)
    ? BusinessReview  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'business' ? BusinessUserGetPayload<S['include'][P]> :
        P extends 'reviewer' ? CustomerGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BusinessReviewArgs | BusinessReviewFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'business' ? BusinessUserGetPayload<S['select'][P]> :
        P extends 'reviewer' ? CustomerGetPayload<S['select'][P]> :  P extends keyof BusinessReview ? BusinessReview[P] : never
  } 
      : BusinessReview


  type BusinessReviewCountArgs = 
    Omit<BusinessReviewFindManyArgs, 'select' | 'include'> & {
      select?: BusinessReviewCountAggregateInputType | true
    }

  export interface BusinessReviewDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BusinessReview that matches the filter.
     * @param {BusinessReviewFindUniqueArgs} args - Arguments to find a BusinessReview
     * @example
     * // Get one BusinessReview
     * const businessReview = await prisma.businessReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BusinessReviewFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BusinessReviewFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BusinessReview'> extends True ? Prisma__BusinessReviewClient<BusinessReviewGetPayload<T>> : Prisma__BusinessReviewClient<BusinessReviewGetPayload<T> | null, null>

    /**
     * Find one BusinessReview that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BusinessReviewFindUniqueOrThrowArgs} args - Arguments to find a BusinessReview
     * @example
     * // Get one BusinessReview
     * const businessReview = await prisma.businessReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BusinessReviewFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BusinessReviewFindUniqueOrThrowArgs>
    ): Prisma__BusinessReviewClient<BusinessReviewGetPayload<T>>

    /**
     * Find the first BusinessReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessReviewFindFirstArgs} args - Arguments to find a BusinessReview
     * @example
     * // Get one BusinessReview
     * const businessReview = await prisma.businessReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BusinessReviewFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BusinessReviewFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BusinessReview'> extends True ? Prisma__BusinessReviewClient<BusinessReviewGetPayload<T>> : Prisma__BusinessReviewClient<BusinessReviewGetPayload<T> | null, null>

    /**
     * Find the first BusinessReview that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessReviewFindFirstOrThrowArgs} args - Arguments to find a BusinessReview
     * @example
     * // Get one BusinessReview
     * const businessReview = await prisma.businessReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BusinessReviewFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BusinessReviewFindFirstOrThrowArgs>
    ): Prisma__BusinessReviewClient<BusinessReviewGetPayload<T>>

    /**
     * Find zero or more BusinessReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessReviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessReviews
     * const businessReviews = await prisma.businessReview.findMany()
     * 
     * // Get first 10 BusinessReviews
     * const businessReviews = await prisma.businessReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessReviewWithIdOnly = await prisma.businessReview.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BusinessReviewFindManyArgs>(
      args?: SelectSubset<T, BusinessReviewFindManyArgs>
    ): Prisma.PrismaPromise<Array<BusinessReviewGetPayload<T>>>

    /**
     * Create a BusinessReview.
     * @param {BusinessReviewCreateArgs} args - Arguments to create a BusinessReview.
     * @example
     * // Create one BusinessReview
     * const BusinessReview = await prisma.businessReview.create({
     *   data: {
     *     // ... data to create a BusinessReview
     *   }
     * })
     * 
    **/
    create<T extends BusinessReviewCreateArgs>(
      args: SelectSubset<T, BusinessReviewCreateArgs>
    ): Prisma__BusinessReviewClient<BusinessReviewGetPayload<T>>

    /**
     * Create many BusinessReviews.
     *     @param {BusinessReviewCreateManyArgs} args - Arguments to create many BusinessReviews.
     *     @example
     *     // Create many BusinessReviews
     *     const businessReview = await prisma.businessReview.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BusinessReviewCreateManyArgs>(
      args?: SelectSubset<T, BusinessReviewCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BusinessReview.
     * @param {BusinessReviewDeleteArgs} args - Arguments to delete one BusinessReview.
     * @example
     * // Delete one BusinessReview
     * const BusinessReview = await prisma.businessReview.delete({
     *   where: {
     *     // ... filter to delete one BusinessReview
     *   }
     * })
     * 
    **/
    delete<T extends BusinessReviewDeleteArgs>(
      args: SelectSubset<T, BusinessReviewDeleteArgs>
    ): Prisma__BusinessReviewClient<BusinessReviewGetPayload<T>>

    /**
     * Update one BusinessReview.
     * @param {BusinessReviewUpdateArgs} args - Arguments to update one BusinessReview.
     * @example
     * // Update one BusinessReview
     * const businessReview = await prisma.businessReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BusinessReviewUpdateArgs>(
      args: SelectSubset<T, BusinessReviewUpdateArgs>
    ): Prisma__BusinessReviewClient<BusinessReviewGetPayload<T>>

    /**
     * Delete zero or more BusinessReviews.
     * @param {BusinessReviewDeleteManyArgs} args - Arguments to filter BusinessReviews to delete.
     * @example
     * // Delete a few BusinessReviews
     * const { count } = await prisma.businessReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BusinessReviewDeleteManyArgs>(
      args?: SelectSubset<T, BusinessReviewDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessReviews
     * const businessReview = await prisma.businessReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BusinessReviewUpdateManyArgs>(
      args: SelectSubset<T, BusinessReviewUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessReview.
     * @param {BusinessReviewUpsertArgs} args - Arguments to update or create a BusinessReview.
     * @example
     * // Update or create a BusinessReview
     * const businessReview = await prisma.businessReview.upsert({
     *   create: {
     *     // ... data to create a BusinessReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessReview we want to update
     *   }
     * })
    **/
    upsert<T extends BusinessReviewUpsertArgs>(
      args: SelectSubset<T, BusinessReviewUpsertArgs>
    ): Prisma__BusinessReviewClient<BusinessReviewGetPayload<T>>

    /**
     * Count the number of BusinessReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessReviewCountArgs} args - Arguments to filter BusinessReviews to count.
     * @example
     * // Count the number of BusinessReviews
     * const count = await prisma.businessReview.count({
     *   where: {
     *     // ... the filter for the BusinessReviews we want to count
     *   }
     * })
    **/
    count<T extends BusinessReviewCountArgs>(
      args?: Subset<T, BusinessReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessReviewAggregateArgs>(args: Subset<T, BusinessReviewAggregateArgs>): Prisma.PrismaPromise<GetBusinessReviewAggregateType<T>>

    /**
     * Group by BusinessReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessReviewGroupByArgs['orderBy'] }
        : { orderBy?: BusinessReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BusinessReviewClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    business<T extends BusinessUserArgs= {}>(args?: Subset<T, BusinessUserArgs>): Prisma__BusinessUserClient<BusinessUserGetPayload<T> | Null>;

    reviewer<T extends CustomerArgs= {}>(args?: Subset<T, CustomerArgs>): Prisma__CustomerClient<CustomerGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BusinessReview base type for findUnique actions
   */
  export type BusinessReviewFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BusinessReview
     */
    select?: BusinessReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessReviewInclude | null
    /**
     * Filter, which BusinessReview to fetch.
     */
    where: BusinessReviewWhereUniqueInput
  }

  /**
   * BusinessReview findUnique
   */
  export interface BusinessReviewFindUniqueArgs extends BusinessReviewFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BusinessReview findUniqueOrThrow
   */
  export type BusinessReviewFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BusinessReview
     */
    select?: BusinessReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessReviewInclude | null
    /**
     * Filter, which BusinessReview to fetch.
     */
    where: BusinessReviewWhereUniqueInput
  }


  /**
   * BusinessReview base type for findFirst actions
   */
  export type BusinessReviewFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BusinessReview
     */
    select?: BusinessReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessReviewInclude | null
    /**
     * Filter, which BusinessReview to fetch.
     */
    where?: BusinessReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessReviews to fetch.
     */
    orderBy?: Enumerable<BusinessReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessReviews.
     */
    cursor?: BusinessReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessReviews.
     */
    distinct?: Enumerable<BusinessReviewScalarFieldEnum>
  }

  /**
   * BusinessReview findFirst
   */
  export interface BusinessReviewFindFirstArgs extends BusinessReviewFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BusinessReview findFirstOrThrow
   */
  export type BusinessReviewFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BusinessReview
     */
    select?: BusinessReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessReviewInclude | null
    /**
     * Filter, which BusinessReview to fetch.
     */
    where?: BusinessReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessReviews to fetch.
     */
    orderBy?: Enumerable<BusinessReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessReviews.
     */
    cursor?: BusinessReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessReviews.
     */
    distinct?: Enumerable<BusinessReviewScalarFieldEnum>
  }


  /**
   * BusinessReview findMany
   */
  export type BusinessReviewFindManyArgs = {
    /**
     * Select specific fields to fetch from the BusinessReview
     */
    select?: BusinessReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessReviewInclude | null
    /**
     * Filter, which BusinessReviews to fetch.
     */
    where?: BusinessReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessReviews to fetch.
     */
    orderBy?: Enumerable<BusinessReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessReviews.
     */
    cursor?: BusinessReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessReviews.
     */
    skip?: number
    distinct?: Enumerable<BusinessReviewScalarFieldEnum>
  }


  /**
   * BusinessReview create
   */
  export type BusinessReviewCreateArgs = {
    /**
     * Select specific fields to fetch from the BusinessReview
     */
    select?: BusinessReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessReviewInclude | null
    /**
     * The data needed to create a BusinessReview.
     */
    data: XOR<BusinessReviewCreateInput, BusinessReviewUncheckedCreateInput>
  }


  /**
   * BusinessReview createMany
   */
  export type BusinessReviewCreateManyArgs = {
    /**
     * The data used to create many BusinessReviews.
     */
    data: Enumerable<BusinessReviewCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BusinessReview update
   */
  export type BusinessReviewUpdateArgs = {
    /**
     * Select specific fields to fetch from the BusinessReview
     */
    select?: BusinessReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessReviewInclude | null
    /**
     * The data needed to update a BusinessReview.
     */
    data: XOR<BusinessReviewUpdateInput, BusinessReviewUncheckedUpdateInput>
    /**
     * Choose, which BusinessReview to update.
     */
    where: BusinessReviewWhereUniqueInput
  }


  /**
   * BusinessReview updateMany
   */
  export type BusinessReviewUpdateManyArgs = {
    /**
     * The data used to update BusinessReviews.
     */
    data: XOR<BusinessReviewUpdateManyMutationInput, BusinessReviewUncheckedUpdateManyInput>
    /**
     * Filter which BusinessReviews to update
     */
    where?: BusinessReviewWhereInput
  }


  /**
   * BusinessReview upsert
   */
  export type BusinessReviewUpsertArgs = {
    /**
     * Select specific fields to fetch from the BusinessReview
     */
    select?: BusinessReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessReviewInclude | null
    /**
     * The filter to search for the BusinessReview to update in case it exists.
     */
    where: BusinessReviewWhereUniqueInput
    /**
     * In case the BusinessReview found by the `where` argument doesn't exist, create a new BusinessReview with this data.
     */
    create: XOR<BusinessReviewCreateInput, BusinessReviewUncheckedCreateInput>
    /**
     * In case the BusinessReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessReviewUpdateInput, BusinessReviewUncheckedUpdateInput>
  }


  /**
   * BusinessReview delete
   */
  export type BusinessReviewDeleteArgs = {
    /**
     * Select specific fields to fetch from the BusinessReview
     */
    select?: BusinessReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessReviewInclude | null
    /**
     * Filter which BusinessReview to delete.
     */
    where: BusinessReviewWhereUniqueInput
  }


  /**
   * BusinessReview deleteMany
   */
  export type BusinessReviewDeleteManyArgs = {
    /**
     * Filter which BusinessReviews to delete
     */
    where?: BusinessReviewWhereInput
  }


  /**
   * BusinessReview without action
   */
  export type BusinessReviewArgs = {
    /**
     * Select specific fields to fetch from the BusinessReview
     */
    select?: BusinessReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessReviewInclude | null
  }



  /**
   * Model HomeCareSpecializedField
   */


  export type AggregateHomeCareSpecializedField = {
    _count: HomeCareSpecializedFieldCountAggregateOutputType | null
    _min: HomeCareSpecializedFieldMinAggregateOutputType | null
    _max: HomeCareSpecializedFieldMaxAggregateOutputType | null
  }

  export type HomeCareSpecializedFieldMinAggregateOutputType = {
    id: string | null
    sub_category_id: string | null
    company_id: string | null
  }

  export type HomeCareSpecializedFieldMaxAggregateOutputType = {
    id: string | null
    sub_category_id: string | null
    company_id: string | null
  }

  export type HomeCareSpecializedFieldCountAggregateOutputType = {
    id: number
    sub_category_id: number
    company_id: number
    _all: number
  }


  export type HomeCareSpecializedFieldMinAggregateInputType = {
    id?: true
    sub_category_id?: true
    company_id?: true
  }

  export type HomeCareSpecializedFieldMaxAggregateInputType = {
    id?: true
    sub_category_id?: true
    company_id?: true
  }

  export type HomeCareSpecializedFieldCountAggregateInputType = {
    id?: true
    sub_category_id?: true
    company_id?: true
    _all?: true
  }

  export type HomeCareSpecializedFieldAggregateArgs = {
    /**
     * Filter which HomeCareSpecializedField to aggregate.
     */
    where?: HomeCareSpecializedFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSpecializedFields to fetch.
     */
    orderBy?: Enumerable<HomeCareSpecializedFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeCareSpecializedFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSpecializedFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSpecializedFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomeCareSpecializedFields
    **/
    _count?: true | HomeCareSpecializedFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeCareSpecializedFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeCareSpecializedFieldMaxAggregateInputType
  }

  export type GetHomeCareSpecializedFieldAggregateType<T extends HomeCareSpecializedFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateHomeCareSpecializedField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomeCareSpecializedField[P]>
      : GetScalarType<T[P], AggregateHomeCareSpecializedField[P]>
  }




  export type HomeCareSpecializedFieldGroupByArgs = {
    where?: HomeCareSpecializedFieldWhereInput
    orderBy?: Enumerable<HomeCareSpecializedFieldOrderByWithAggregationInput>
    by: HomeCareSpecializedFieldScalarFieldEnum[]
    having?: HomeCareSpecializedFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeCareSpecializedFieldCountAggregateInputType | true
    _min?: HomeCareSpecializedFieldMinAggregateInputType
    _max?: HomeCareSpecializedFieldMaxAggregateInputType
  }


  export type HomeCareSpecializedFieldGroupByOutputType = {
    id: string
    sub_category_id: string
    company_id: string
    _count: HomeCareSpecializedFieldCountAggregateOutputType | null
    _min: HomeCareSpecializedFieldMinAggregateOutputType | null
    _max: HomeCareSpecializedFieldMaxAggregateOutputType | null
  }

  type GetHomeCareSpecializedFieldGroupByPayload<T extends HomeCareSpecializedFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HomeCareSpecializedFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeCareSpecializedFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeCareSpecializedFieldGroupByOutputType[P]>
            : GetScalarType<T[P], HomeCareSpecializedFieldGroupByOutputType[P]>
        }
      >
    >


  export type HomeCareSpecializedFieldSelect = {
    id?: boolean
    sub_category_id?: boolean
    company_id?: boolean
    sub_category?: boolean | HomeCareSubCategoryArgs
    company?: boolean | HomeCareCompanyArgs
  }


  export type HomeCareSpecializedFieldInclude = {
    sub_category?: boolean | HomeCareSubCategoryArgs
    company?: boolean | HomeCareCompanyArgs
  }

  export type HomeCareSpecializedFieldGetPayload<S extends boolean | null | undefined | HomeCareSpecializedFieldArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HomeCareSpecializedField :
    S extends undefined ? never :
    S extends { include: any } & (HomeCareSpecializedFieldArgs | HomeCareSpecializedFieldFindManyArgs)
    ? HomeCareSpecializedField  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'sub_category' ? HomeCareSubCategoryGetPayload<S['include'][P]> :
        P extends 'company' ? HomeCareCompanyGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HomeCareSpecializedFieldArgs | HomeCareSpecializedFieldFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'sub_category' ? HomeCareSubCategoryGetPayload<S['select'][P]> :
        P extends 'company' ? HomeCareCompanyGetPayload<S['select'][P]> :  P extends keyof HomeCareSpecializedField ? HomeCareSpecializedField[P] : never
  } 
      : HomeCareSpecializedField


  type HomeCareSpecializedFieldCountArgs = 
    Omit<HomeCareSpecializedFieldFindManyArgs, 'select' | 'include'> & {
      select?: HomeCareSpecializedFieldCountAggregateInputType | true
    }

  export interface HomeCareSpecializedFieldDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one HomeCareSpecializedField that matches the filter.
     * @param {HomeCareSpecializedFieldFindUniqueArgs} args - Arguments to find a HomeCareSpecializedField
     * @example
     * // Get one HomeCareSpecializedField
     * const homeCareSpecializedField = await prisma.homeCareSpecializedField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HomeCareSpecializedFieldFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HomeCareSpecializedFieldFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HomeCareSpecializedField'> extends True ? Prisma__HomeCareSpecializedFieldClient<HomeCareSpecializedFieldGetPayload<T>> : Prisma__HomeCareSpecializedFieldClient<HomeCareSpecializedFieldGetPayload<T> | null, null>

    /**
     * Find one HomeCareSpecializedField that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HomeCareSpecializedFieldFindUniqueOrThrowArgs} args - Arguments to find a HomeCareSpecializedField
     * @example
     * // Get one HomeCareSpecializedField
     * const homeCareSpecializedField = await prisma.homeCareSpecializedField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HomeCareSpecializedFieldFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HomeCareSpecializedFieldFindUniqueOrThrowArgs>
    ): Prisma__HomeCareSpecializedFieldClient<HomeCareSpecializedFieldGetPayload<T>>

    /**
     * Find the first HomeCareSpecializedField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedFieldFindFirstArgs} args - Arguments to find a HomeCareSpecializedField
     * @example
     * // Get one HomeCareSpecializedField
     * const homeCareSpecializedField = await prisma.homeCareSpecializedField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HomeCareSpecializedFieldFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HomeCareSpecializedFieldFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HomeCareSpecializedField'> extends True ? Prisma__HomeCareSpecializedFieldClient<HomeCareSpecializedFieldGetPayload<T>> : Prisma__HomeCareSpecializedFieldClient<HomeCareSpecializedFieldGetPayload<T> | null, null>

    /**
     * Find the first HomeCareSpecializedField that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedFieldFindFirstOrThrowArgs} args - Arguments to find a HomeCareSpecializedField
     * @example
     * // Get one HomeCareSpecializedField
     * const homeCareSpecializedField = await prisma.homeCareSpecializedField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HomeCareSpecializedFieldFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HomeCareSpecializedFieldFindFirstOrThrowArgs>
    ): Prisma__HomeCareSpecializedFieldClient<HomeCareSpecializedFieldGetPayload<T>>

    /**
     * Find zero or more HomeCareSpecializedFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedFieldFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomeCareSpecializedFields
     * const homeCareSpecializedFields = await prisma.homeCareSpecializedField.findMany()
     * 
     * // Get first 10 HomeCareSpecializedFields
     * const homeCareSpecializedFields = await prisma.homeCareSpecializedField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeCareSpecializedFieldWithIdOnly = await prisma.homeCareSpecializedField.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HomeCareSpecializedFieldFindManyArgs>(
      args?: SelectSubset<T, HomeCareSpecializedFieldFindManyArgs>
    ): Prisma.PrismaPromise<Array<HomeCareSpecializedFieldGetPayload<T>>>

    /**
     * Create a HomeCareSpecializedField.
     * @param {HomeCareSpecializedFieldCreateArgs} args - Arguments to create a HomeCareSpecializedField.
     * @example
     * // Create one HomeCareSpecializedField
     * const HomeCareSpecializedField = await prisma.homeCareSpecializedField.create({
     *   data: {
     *     // ... data to create a HomeCareSpecializedField
     *   }
     * })
     * 
    **/
    create<T extends HomeCareSpecializedFieldCreateArgs>(
      args: SelectSubset<T, HomeCareSpecializedFieldCreateArgs>
    ): Prisma__HomeCareSpecializedFieldClient<HomeCareSpecializedFieldGetPayload<T>>

    /**
     * Create many HomeCareSpecializedFields.
     *     @param {HomeCareSpecializedFieldCreateManyArgs} args - Arguments to create many HomeCareSpecializedFields.
     *     @example
     *     // Create many HomeCareSpecializedFields
     *     const homeCareSpecializedField = await prisma.homeCareSpecializedField.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HomeCareSpecializedFieldCreateManyArgs>(
      args?: SelectSubset<T, HomeCareSpecializedFieldCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HomeCareSpecializedField.
     * @param {HomeCareSpecializedFieldDeleteArgs} args - Arguments to delete one HomeCareSpecializedField.
     * @example
     * // Delete one HomeCareSpecializedField
     * const HomeCareSpecializedField = await prisma.homeCareSpecializedField.delete({
     *   where: {
     *     // ... filter to delete one HomeCareSpecializedField
     *   }
     * })
     * 
    **/
    delete<T extends HomeCareSpecializedFieldDeleteArgs>(
      args: SelectSubset<T, HomeCareSpecializedFieldDeleteArgs>
    ): Prisma__HomeCareSpecializedFieldClient<HomeCareSpecializedFieldGetPayload<T>>

    /**
     * Update one HomeCareSpecializedField.
     * @param {HomeCareSpecializedFieldUpdateArgs} args - Arguments to update one HomeCareSpecializedField.
     * @example
     * // Update one HomeCareSpecializedField
     * const homeCareSpecializedField = await prisma.homeCareSpecializedField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HomeCareSpecializedFieldUpdateArgs>(
      args: SelectSubset<T, HomeCareSpecializedFieldUpdateArgs>
    ): Prisma__HomeCareSpecializedFieldClient<HomeCareSpecializedFieldGetPayload<T>>

    /**
     * Delete zero or more HomeCareSpecializedFields.
     * @param {HomeCareSpecializedFieldDeleteManyArgs} args - Arguments to filter HomeCareSpecializedFields to delete.
     * @example
     * // Delete a few HomeCareSpecializedFields
     * const { count } = await prisma.homeCareSpecializedField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HomeCareSpecializedFieldDeleteManyArgs>(
      args?: SelectSubset<T, HomeCareSpecializedFieldDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeCareSpecializedFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomeCareSpecializedFields
     * const homeCareSpecializedField = await prisma.homeCareSpecializedField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HomeCareSpecializedFieldUpdateManyArgs>(
      args: SelectSubset<T, HomeCareSpecializedFieldUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HomeCareSpecializedField.
     * @param {HomeCareSpecializedFieldUpsertArgs} args - Arguments to update or create a HomeCareSpecializedField.
     * @example
     * // Update or create a HomeCareSpecializedField
     * const homeCareSpecializedField = await prisma.homeCareSpecializedField.upsert({
     *   create: {
     *     // ... data to create a HomeCareSpecializedField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomeCareSpecializedField we want to update
     *   }
     * })
    **/
    upsert<T extends HomeCareSpecializedFieldUpsertArgs>(
      args: SelectSubset<T, HomeCareSpecializedFieldUpsertArgs>
    ): Prisma__HomeCareSpecializedFieldClient<HomeCareSpecializedFieldGetPayload<T>>

    /**
     * Count the number of HomeCareSpecializedFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedFieldCountArgs} args - Arguments to filter HomeCareSpecializedFields to count.
     * @example
     * // Count the number of HomeCareSpecializedFields
     * const count = await prisma.homeCareSpecializedField.count({
     *   where: {
     *     // ... the filter for the HomeCareSpecializedFields we want to count
     *   }
     * })
    **/
    count<T extends HomeCareSpecializedFieldCountArgs>(
      args?: Subset<T, HomeCareSpecializedFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeCareSpecializedFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomeCareSpecializedField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HomeCareSpecializedFieldAggregateArgs>(args: Subset<T, HomeCareSpecializedFieldAggregateArgs>): Prisma.PrismaPromise<GetHomeCareSpecializedFieldAggregateType<T>>

    /**
     * Group by HomeCareSpecializedField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedFieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HomeCareSpecializedFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeCareSpecializedFieldGroupByArgs['orderBy'] }
        : { orderBy?: HomeCareSpecializedFieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HomeCareSpecializedFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeCareSpecializedFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HomeCareSpecializedField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HomeCareSpecializedFieldClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    sub_category<T extends HomeCareSubCategoryArgs= {}>(args?: Subset<T, HomeCareSubCategoryArgs>): Prisma__HomeCareSubCategoryClient<HomeCareSubCategoryGetPayload<T> | Null>;

    company<T extends HomeCareCompanyArgs= {}>(args?: Subset<T, HomeCareCompanyArgs>): Prisma__HomeCareCompanyClient<HomeCareCompanyGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * HomeCareSpecializedField base type for findUnique actions
   */
  export type HomeCareSpecializedFieldFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedField
     */
    select?: HomeCareSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedFieldInclude | null
    /**
     * Filter, which HomeCareSpecializedField to fetch.
     */
    where: HomeCareSpecializedFieldWhereUniqueInput
  }

  /**
   * HomeCareSpecializedField findUnique
   */
  export interface HomeCareSpecializedFieldFindUniqueArgs extends HomeCareSpecializedFieldFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HomeCareSpecializedField findUniqueOrThrow
   */
  export type HomeCareSpecializedFieldFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedField
     */
    select?: HomeCareSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedFieldInclude | null
    /**
     * Filter, which HomeCareSpecializedField to fetch.
     */
    where: HomeCareSpecializedFieldWhereUniqueInput
  }


  /**
   * HomeCareSpecializedField base type for findFirst actions
   */
  export type HomeCareSpecializedFieldFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedField
     */
    select?: HomeCareSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedFieldInclude | null
    /**
     * Filter, which HomeCareSpecializedField to fetch.
     */
    where?: HomeCareSpecializedFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSpecializedFields to fetch.
     */
    orderBy?: Enumerable<HomeCareSpecializedFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeCareSpecializedFields.
     */
    cursor?: HomeCareSpecializedFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSpecializedFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSpecializedFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeCareSpecializedFields.
     */
    distinct?: Enumerable<HomeCareSpecializedFieldScalarFieldEnum>
  }

  /**
   * HomeCareSpecializedField findFirst
   */
  export interface HomeCareSpecializedFieldFindFirstArgs extends HomeCareSpecializedFieldFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HomeCareSpecializedField findFirstOrThrow
   */
  export type HomeCareSpecializedFieldFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedField
     */
    select?: HomeCareSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedFieldInclude | null
    /**
     * Filter, which HomeCareSpecializedField to fetch.
     */
    where?: HomeCareSpecializedFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSpecializedFields to fetch.
     */
    orderBy?: Enumerable<HomeCareSpecializedFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeCareSpecializedFields.
     */
    cursor?: HomeCareSpecializedFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSpecializedFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSpecializedFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeCareSpecializedFields.
     */
    distinct?: Enumerable<HomeCareSpecializedFieldScalarFieldEnum>
  }


  /**
   * HomeCareSpecializedField findMany
   */
  export type HomeCareSpecializedFieldFindManyArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedField
     */
    select?: HomeCareSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedFieldInclude | null
    /**
     * Filter, which HomeCareSpecializedFields to fetch.
     */
    where?: HomeCareSpecializedFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSpecializedFields to fetch.
     */
    orderBy?: Enumerable<HomeCareSpecializedFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomeCareSpecializedFields.
     */
    cursor?: HomeCareSpecializedFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSpecializedFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSpecializedFields.
     */
    skip?: number
    distinct?: Enumerable<HomeCareSpecializedFieldScalarFieldEnum>
  }


  /**
   * HomeCareSpecializedField create
   */
  export type HomeCareSpecializedFieldCreateArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedField
     */
    select?: HomeCareSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedFieldInclude | null
    /**
     * The data needed to create a HomeCareSpecializedField.
     */
    data: XOR<HomeCareSpecializedFieldCreateInput, HomeCareSpecializedFieldUncheckedCreateInput>
  }


  /**
   * HomeCareSpecializedField createMany
   */
  export type HomeCareSpecializedFieldCreateManyArgs = {
    /**
     * The data used to create many HomeCareSpecializedFields.
     */
    data: Enumerable<HomeCareSpecializedFieldCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HomeCareSpecializedField update
   */
  export type HomeCareSpecializedFieldUpdateArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedField
     */
    select?: HomeCareSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedFieldInclude | null
    /**
     * The data needed to update a HomeCareSpecializedField.
     */
    data: XOR<HomeCareSpecializedFieldUpdateInput, HomeCareSpecializedFieldUncheckedUpdateInput>
    /**
     * Choose, which HomeCareSpecializedField to update.
     */
    where: HomeCareSpecializedFieldWhereUniqueInput
  }


  /**
   * HomeCareSpecializedField updateMany
   */
  export type HomeCareSpecializedFieldUpdateManyArgs = {
    /**
     * The data used to update HomeCareSpecializedFields.
     */
    data: XOR<HomeCareSpecializedFieldUpdateManyMutationInput, HomeCareSpecializedFieldUncheckedUpdateManyInput>
    /**
     * Filter which HomeCareSpecializedFields to update
     */
    where?: HomeCareSpecializedFieldWhereInput
  }


  /**
   * HomeCareSpecializedField upsert
   */
  export type HomeCareSpecializedFieldUpsertArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedField
     */
    select?: HomeCareSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedFieldInclude | null
    /**
     * The filter to search for the HomeCareSpecializedField to update in case it exists.
     */
    where: HomeCareSpecializedFieldWhereUniqueInput
    /**
     * In case the HomeCareSpecializedField found by the `where` argument doesn't exist, create a new HomeCareSpecializedField with this data.
     */
    create: XOR<HomeCareSpecializedFieldCreateInput, HomeCareSpecializedFieldUncheckedCreateInput>
    /**
     * In case the HomeCareSpecializedField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeCareSpecializedFieldUpdateInput, HomeCareSpecializedFieldUncheckedUpdateInput>
  }


  /**
   * HomeCareSpecializedField delete
   */
  export type HomeCareSpecializedFieldDeleteArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedField
     */
    select?: HomeCareSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedFieldInclude | null
    /**
     * Filter which HomeCareSpecializedField to delete.
     */
    where: HomeCareSpecializedFieldWhereUniqueInput
  }


  /**
   * HomeCareSpecializedField deleteMany
   */
  export type HomeCareSpecializedFieldDeleteManyArgs = {
    /**
     * Filter which HomeCareSpecializedFields to delete
     */
    where?: HomeCareSpecializedFieldWhereInput
  }


  /**
   * HomeCareSpecializedField without action
   */
  export type HomeCareSpecializedFieldArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedField
     */
    select?: HomeCareSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedFieldInclude | null
  }



  /**
   * Model HomeCareSuperCategory
   */


  export type AggregateHomeCareSuperCategory = {
    _count: HomeCareSuperCategoryCountAggregateOutputType | null
    _min: HomeCareSuperCategoryMinAggregateOutputType | null
    _max: HomeCareSuperCategoryMaxAggregateOutputType | null
  }

  export type HomeCareSuperCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type HomeCareSuperCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type HomeCareSuperCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type HomeCareSuperCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type HomeCareSuperCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type HomeCareSuperCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type HomeCareSuperCategoryAggregateArgs = {
    /**
     * Filter which HomeCareSuperCategory to aggregate.
     */
    where?: HomeCareSuperCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSuperCategories to fetch.
     */
    orderBy?: Enumerable<HomeCareSuperCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeCareSuperCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSuperCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSuperCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomeCareSuperCategories
    **/
    _count?: true | HomeCareSuperCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeCareSuperCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeCareSuperCategoryMaxAggregateInputType
  }

  export type GetHomeCareSuperCategoryAggregateType<T extends HomeCareSuperCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHomeCareSuperCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomeCareSuperCategory[P]>
      : GetScalarType<T[P], AggregateHomeCareSuperCategory[P]>
  }




  export type HomeCareSuperCategoryGroupByArgs = {
    where?: HomeCareSuperCategoryWhereInput
    orderBy?: Enumerable<HomeCareSuperCategoryOrderByWithAggregationInput>
    by: HomeCareSuperCategoryScalarFieldEnum[]
    having?: HomeCareSuperCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeCareSuperCategoryCountAggregateInputType | true
    _min?: HomeCareSuperCategoryMinAggregateInputType
    _max?: HomeCareSuperCategoryMaxAggregateInputType
  }


  export type HomeCareSuperCategoryGroupByOutputType = {
    id: string
    name: string
    _count: HomeCareSuperCategoryCountAggregateOutputType | null
    _min: HomeCareSuperCategoryMinAggregateOutputType | null
    _max: HomeCareSuperCategoryMaxAggregateOutputType | null
  }

  type GetHomeCareSuperCategoryGroupByPayload<T extends HomeCareSuperCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HomeCareSuperCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeCareSuperCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeCareSuperCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], HomeCareSuperCategoryGroupByOutputType[P]>
        }
      >
    >


  export type HomeCareSuperCategorySelect = {
    id?: boolean
    name?: boolean
    home_care_sub_categories?: boolean | HomeCareSuperCategory$home_care_sub_categoriesArgs
    _count?: boolean | HomeCareSuperCategoryCountOutputTypeArgs
  }


  export type HomeCareSuperCategoryInclude = {
    home_care_sub_categories?: boolean | HomeCareSuperCategory$home_care_sub_categoriesArgs
    _count?: boolean | HomeCareSuperCategoryCountOutputTypeArgs
  }

  export type HomeCareSuperCategoryGetPayload<S extends boolean | null | undefined | HomeCareSuperCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HomeCareSuperCategory :
    S extends undefined ? never :
    S extends { include: any } & (HomeCareSuperCategoryArgs | HomeCareSuperCategoryFindManyArgs)
    ? HomeCareSuperCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'home_care_sub_categories' ? Array < HomeCareSubCategoryGetPayload<S['include'][P]>>  :
        P extends '_count' ? HomeCareSuperCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HomeCareSuperCategoryArgs | HomeCareSuperCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'home_care_sub_categories' ? Array < HomeCareSubCategoryGetPayload<S['select'][P]>>  :
        P extends '_count' ? HomeCareSuperCategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof HomeCareSuperCategory ? HomeCareSuperCategory[P] : never
  } 
      : HomeCareSuperCategory


  type HomeCareSuperCategoryCountArgs = 
    Omit<HomeCareSuperCategoryFindManyArgs, 'select' | 'include'> & {
      select?: HomeCareSuperCategoryCountAggregateInputType | true
    }

  export interface HomeCareSuperCategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one HomeCareSuperCategory that matches the filter.
     * @param {HomeCareSuperCategoryFindUniqueArgs} args - Arguments to find a HomeCareSuperCategory
     * @example
     * // Get one HomeCareSuperCategory
     * const homeCareSuperCategory = await prisma.homeCareSuperCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HomeCareSuperCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HomeCareSuperCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HomeCareSuperCategory'> extends True ? Prisma__HomeCareSuperCategoryClient<HomeCareSuperCategoryGetPayload<T>> : Prisma__HomeCareSuperCategoryClient<HomeCareSuperCategoryGetPayload<T> | null, null>

    /**
     * Find one HomeCareSuperCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HomeCareSuperCategoryFindUniqueOrThrowArgs} args - Arguments to find a HomeCareSuperCategory
     * @example
     * // Get one HomeCareSuperCategory
     * const homeCareSuperCategory = await prisma.homeCareSuperCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HomeCareSuperCategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HomeCareSuperCategoryFindUniqueOrThrowArgs>
    ): Prisma__HomeCareSuperCategoryClient<HomeCareSuperCategoryGetPayload<T>>

    /**
     * Find the first HomeCareSuperCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSuperCategoryFindFirstArgs} args - Arguments to find a HomeCareSuperCategory
     * @example
     * // Get one HomeCareSuperCategory
     * const homeCareSuperCategory = await prisma.homeCareSuperCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HomeCareSuperCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HomeCareSuperCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HomeCareSuperCategory'> extends True ? Prisma__HomeCareSuperCategoryClient<HomeCareSuperCategoryGetPayload<T>> : Prisma__HomeCareSuperCategoryClient<HomeCareSuperCategoryGetPayload<T> | null, null>

    /**
     * Find the first HomeCareSuperCategory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSuperCategoryFindFirstOrThrowArgs} args - Arguments to find a HomeCareSuperCategory
     * @example
     * // Get one HomeCareSuperCategory
     * const homeCareSuperCategory = await prisma.homeCareSuperCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HomeCareSuperCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HomeCareSuperCategoryFindFirstOrThrowArgs>
    ): Prisma__HomeCareSuperCategoryClient<HomeCareSuperCategoryGetPayload<T>>

    /**
     * Find zero or more HomeCareSuperCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSuperCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomeCareSuperCategories
     * const homeCareSuperCategories = await prisma.homeCareSuperCategory.findMany()
     * 
     * // Get first 10 HomeCareSuperCategories
     * const homeCareSuperCategories = await prisma.homeCareSuperCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeCareSuperCategoryWithIdOnly = await prisma.homeCareSuperCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HomeCareSuperCategoryFindManyArgs>(
      args?: SelectSubset<T, HomeCareSuperCategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<HomeCareSuperCategoryGetPayload<T>>>

    /**
     * Create a HomeCareSuperCategory.
     * @param {HomeCareSuperCategoryCreateArgs} args - Arguments to create a HomeCareSuperCategory.
     * @example
     * // Create one HomeCareSuperCategory
     * const HomeCareSuperCategory = await prisma.homeCareSuperCategory.create({
     *   data: {
     *     // ... data to create a HomeCareSuperCategory
     *   }
     * })
     * 
    **/
    create<T extends HomeCareSuperCategoryCreateArgs>(
      args: SelectSubset<T, HomeCareSuperCategoryCreateArgs>
    ): Prisma__HomeCareSuperCategoryClient<HomeCareSuperCategoryGetPayload<T>>

    /**
     * Create many HomeCareSuperCategories.
     *     @param {HomeCareSuperCategoryCreateManyArgs} args - Arguments to create many HomeCareSuperCategories.
     *     @example
     *     // Create many HomeCareSuperCategories
     *     const homeCareSuperCategory = await prisma.homeCareSuperCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HomeCareSuperCategoryCreateManyArgs>(
      args?: SelectSubset<T, HomeCareSuperCategoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HomeCareSuperCategory.
     * @param {HomeCareSuperCategoryDeleteArgs} args - Arguments to delete one HomeCareSuperCategory.
     * @example
     * // Delete one HomeCareSuperCategory
     * const HomeCareSuperCategory = await prisma.homeCareSuperCategory.delete({
     *   where: {
     *     // ... filter to delete one HomeCareSuperCategory
     *   }
     * })
     * 
    **/
    delete<T extends HomeCareSuperCategoryDeleteArgs>(
      args: SelectSubset<T, HomeCareSuperCategoryDeleteArgs>
    ): Prisma__HomeCareSuperCategoryClient<HomeCareSuperCategoryGetPayload<T>>

    /**
     * Update one HomeCareSuperCategory.
     * @param {HomeCareSuperCategoryUpdateArgs} args - Arguments to update one HomeCareSuperCategory.
     * @example
     * // Update one HomeCareSuperCategory
     * const homeCareSuperCategory = await prisma.homeCareSuperCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HomeCareSuperCategoryUpdateArgs>(
      args: SelectSubset<T, HomeCareSuperCategoryUpdateArgs>
    ): Prisma__HomeCareSuperCategoryClient<HomeCareSuperCategoryGetPayload<T>>

    /**
     * Delete zero or more HomeCareSuperCategories.
     * @param {HomeCareSuperCategoryDeleteManyArgs} args - Arguments to filter HomeCareSuperCategories to delete.
     * @example
     * // Delete a few HomeCareSuperCategories
     * const { count } = await prisma.homeCareSuperCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HomeCareSuperCategoryDeleteManyArgs>(
      args?: SelectSubset<T, HomeCareSuperCategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeCareSuperCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSuperCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomeCareSuperCategories
     * const homeCareSuperCategory = await prisma.homeCareSuperCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HomeCareSuperCategoryUpdateManyArgs>(
      args: SelectSubset<T, HomeCareSuperCategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HomeCareSuperCategory.
     * @param {HomeCareSuperCategoryUpsertArgs} args - Arguments to update or create a HomeCareSuperCategory.
     * @example
     * // Update or create a HomeCareSuperCategory
     * const homeCareSuperCategory = await prisma.homeCareSuperCategory.upsert({
     *   create: {
     *     // ... data to create a HomeCareSuperCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomeCareSuperCategory we want to update
     *   }
     * })
    **/
    upsert<T extends HomeCareSuperCategoryUpsertArgs>(
      args: SelectSubset<T, HomeCareSuperCategoryUpsertArgs>
    ): Prisma__HomeCareSuperCategoryClient<HomeCareSuperCategoryGetPayload<T>>

    /**
     * Count the number of HomeCareSuperCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSuperCategoryCountArgs} args - Arguments to filter HomeCareSuperCategories to count.
     * @example
     * // Count the number of HomeCareSuperCategories
     * const count = await prisma.homeCareSuperCategory.count({
     *   where: {
     *     // ... the filter for the HomeCareSuperCategories we want to count
     *   }
     * })
    **/
    count<T extends HomeCareSuperCategoryCountArgs>(
      args?: Subset<T, HomeCareSuperCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeCareSuperCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomeCareSuperCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSuperCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HomeCareSuperCategoryAggregateArgs>(args: Subset<T, HomeCareSuperCategoryAggregateArgs>): Prisma.PrismaPromise<GetHomeCareSuperCategoryAggregateType<T>>

    /**
     * Group by HomeCareSuperCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSuperCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HomeCareSuperCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeCareSuperCategoryGroupByArgs['orderBy'] }
        : { orderBy?: HomeCareSuperCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HomeCareSuperCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeCareSuperCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HomeCareSuperCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HomeCareSuperCategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    home_care_sub_categories<T extends HomeCareSuperCategory$home_care_sub_categoriesArgs= {}>(args?: Subset<T, HomeCareSuperCategory$home_care_sub_categoriesArgs>): Prisma.PrismaPromise<Array<HomeCareSubCategoryGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * HomeCareSuperCategory base type for findUnique actions
   */
  export type HomeCareSuperCategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HomeCareSuperCategory
     */
    select?: HomeCareSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSuperCategoryInclude | null
    /**
     * Filter, which HomeCareSuperCategory to fetch.
     */
    where: HomeCareSuperCategoryWhereUniqueInput
  }

  /**
   * HomeCareSuperCategory findUnique
   */
  export interface HomeCareSuperCategoryFindUniqueArgs extends HomeCareSuperCategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HomeCareSuperCategory findUniqueOrThrow
   */
  export type HomeCareSuperCategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSuperCategory
     */
    select?: HomeCareSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSuperCategoryInclude | null
    /**
     * Filter, which HomeCareSuperCategory to fetch.
     */
    where: HomeCareSuperCategoryWhereUniqueInput
  }


  /**
   * HomeCareSuperCategory base type for findFirst actions
   */
  export type HomeCareSuperCategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HomeCareSuperCategory
     */
    select?: HomeCareSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSuperCategoryInclude | null
    /**
     * Filter, which HomeCareSuperCategory to fetch.
     */
    where?: HomeCareSuperCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSuperCategories to fetch.
     */
    orderBy?: Enumerable<HomeCareSuperCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeCareSuperCategories.
     */
    cursor?: HomeCareSuperCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSuperCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSuperCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeCareSuperCategories.
     */
    distinct?: Enumerable<HomeCareSuperCategoryScalarFieldEnum>
  }

  /**
   * HomeCareSuperCategory findFirst
   */
  export interface HomeCareSuperCategoryFindFirstArgs extends HomeCareSuperCategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HomeCareSuperCategory findFirstOrThrow
   */
  export type HomeCareSuperCategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSuperCategory
     */
    select?: HomeCareSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSuperCategoryInclude | null
    /**
     * Filter, which HomeCareSuperCategory to fetch.
     */
    where?: HomeCareSuperCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSuperCategories to fetch.
     */
    orderBy?: Enumerable<HomeCareSuperCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeCareSuperCategories.
     */
    cursor?: HomeCareSuperCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSuperCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSuperCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeCareSuperCategories.
     */
    distinct?: Enumerable<HomeCareSuperCategoryScalarFieldEnum>
  }


  /**
   * HomeCareSuperCategory findMany
   */
  export type HomeCareSuperCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSuperCategory
     */
    select?: HomeCareSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSuperCategoryInclude | null
    /**
     * Filter, which HomeCareSuperCategories to fetch.
     */
    where?: HomeCareSuperCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSuperCategories to fetch.
     */
    orderBy?: Enumerable<HomeCareSuperCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomeCareSuperCategories.
     */
    cursor?: HomeCareSuperCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSuperCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSuperCategories.
     */
    skip?: number
    distinct?: Enumerable<HomeCareSuperCategoryScalarFieldEnum>
  }


  /**
   * HomeCareSuperCategory create
   */
  export type HomeCareSuperCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSuperCategory
     */
    select?: HomeCareSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSuperCategoryInclude | null
    /**
     * The data needed to create a HomeCareSuperCategory.
     */
    data: XOR<HomeCareSuperCategoryCreateInput, HomeCareSuperCategoryUncheckedCreateInput>
  }


  /**
   * HomeCareSuperCategory createMany
   */
  export type HomeCareSuperCategoryCreateManyArgs = {
    /**
     * The data used to create many HomeCareSuperCategories.
     */
    data: Enumerable<HomeCareSuperCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HomeCareSuperCategory update
   */
  export type HomeCareSuperCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSuperCategory
     */
    select?: HomeCareSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSuperCategoryInclude | null
    /**
     * The data needed to update a HomeCareSuperCategory.
     */
    data: XOR<HomeCareSuperCategoryUpdateInput, HomeCareSuperCategoryUncheckedUpdateInput>
    /**
     * Choose, which HomeCareSuperCategory to update.
     */
    where: HomeCareSuperCategoryWhereUniqueInput
  }


  /**
   * HomeCareSuperCategory updateMany
   */
  export type HomeCareSuperCategoryUpdateManyArgs = {
    /**
     * The data used to update HomeCareSuperCategories.
     */
    data: XOR<HomeCareSuperCategoryUpdateManyMutationInput, HomeCareSuperCategoryUncheckedUpdateManyInput>
    /**
     * Filter which HomeCareSuperCategories to update
     */
    where?: HomeCareSuperCategoryWhereInput
  }


  /**
   * HomeCareSuperCategory upsert
   */
  export type HomeCareSuperCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSuperCategory
     */
    select?: HomeCareSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSuperCategoryInclude | null
    /**
     * The filter to search for the HomeCareSuperCategory to update in case it exists.
     */
    where: HomeCareSuperCategoryWhereUniqueInput
    /**
     * In case the HomeCareSuperCategory found by the `where` argument doesn't exist, create a new HomeCareSuperCategory with this data.
     */
    create: XOR<HomeCareSuperCategoryCreateInput, HomeCareSuperCategoryUncheckedCreateInput>
    /**
     * In case the HomeCareSuperCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeCareSuperCategoryUpdateInput, HomeCareSuperCategoryUncheckedUpdateInput>
  }


  /**
   * HomeCareSuperCategory delete
   */
  export type HomeCareSuperCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSuperCategory
     */
    select?: HomeCareSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSuperCategoryInclude | null
    /**
     * Filter which HomeCareSuperCategory to delete.
     */
    where: HomeCareSuperCategoryWhereUniqueInput
  }


  /**
   * HomeCareSuperCategory deleteMany
   */
  export type HomeCareSuperCategoryDeleteManyArgs = {
    /**
     * Filter which HomeCareSuperCategories to delete
     */
    where?: HomeCareSuperCategoryWhereInput
  }


  /**
   * HomeCareSuperCategory.home_care_sub_categories
   */
  export type HomeCareSuperCategory$home_care_sub_categoriesArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSubCategory
     */
    select?: HomeCareSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSubCategoryInclude | null
    where?: HomeCareSubCategoryWhereInput
    orderBy?: Enumerable<HomeCareSubCategoryOrderByWithRelationInput>
    cursor?: HomeCareSubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HomeCareSubCategoryScalarFieldEnum>
  }


  /**
   * HomeCareSuperCategory without action
   */
  export type HomeCareSuperCategoryArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSuperCategory
     */
    select?: HomeCareSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSuperCategoryInclude | null
  }



  /**
   * Model HomeCareSubCategory
   */


  export type AggregateHomeCareSubCategory = {
    _count: HomeCareSubCategoryCountAggregateOutputType | null
    _min: HomeCareSubCategoryMinAggregateOutputType | null
    _max: HomeCareSubCategoryMaxAggregateOutputType | null
  }

  export type HomeCareSubCategoryMinAggregateOutputType = {
    id: string | null
    super_id: string | null
    name: string | null
  }

  export type HomeCareSubCategoryMaxAggregateOutputType = {
    id: string | null
    super_id: string | null
    name: string | null
  }

  export type HomeCareSubCategoryCountAggregateOutputType = {
    id: number
    super_id: number
    name: number
    _all: number
  }


  export type HomeCareSubCategoryMinAggregateInputType = {
    id?: true
    super_id?: true
    name?: true
  }

  export type HomeCareSubCategoryMaxAggregateInputType = {
    id?: true
    super_id?: true
    name?: true
  }

  export type HomeCareSubCategoryCountAggregateInputType = {
    id?: true
    super_id?: true
    name?: true
    _all?: true
  }

  export type HomeCareSubCategoryAggregateArgs = {
    /**
     * Filter which HomeCareSubCategory to aggregate.
     */
    where?: HomeCareSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSubCategories to fetch.
     */
    orderBy?: Enumerable<HomeCareSubCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeCareSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomeCareSubCategories
    **/
    _count?: true | HomeCareSubCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeCareSubCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeCareSubCategoryMaxAggregateInputType
  }

  export type GetHomeCareSubCategoryAggregateType<T extends HomeCareSubCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHomeCareSubCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomeCareSubCategory[P]>
      : GetScalarType<T[P], AggregateHomeCareSubCategory[P]>
  }




  export type HomeCareSubCategoryGroupByArgs = {
    where?: HomeCareSubCategoryWhereInput
    orderBy?: Enumerable<HomeCareSubCategoryOrderByWithAggregationInput>
    by: HomeCareSubCategoryScalarFieldEnum[]
    having?: HomeCareSubCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeCareSubCategoryCountAggregateInputType | true
    _min?: HomeCareSubCategoryMinAggregateInputType
    _max?: HomeCareSubCategoryMaxAggregateInputType
  }


  export type HomeCareSubCategoryGroupByOutputType = {
    id: string
    super_id: string
    name: string
    _count: HomeCareSubCategoryCountAggregateOutputType | null
    _min: HomeCareSubCategoryMinAggregateOutputType | null
    _max: HomeCareSubCategoryMaxAggregateOutputType | null
  }

  type GetHomeCareSubCategoryGroupByPayload<T extends HomeCareSubCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HomeCareSubCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeCareSubCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeCareSubCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], HomeCareSubCategoryGroupByOutputType[P]>
        }
      >
    >


  export type HomeCareSubCategorySelect = {
    id?: boolean
    super_id?: boolean
    name?: boolean
    specialized_fields?: boolean | HomeCareSubCategory$specialized_fieldsArgs
    super?: boolean | HomeCareSuperCategoryArgs
    _count?: boolean | HomeCareSubCategoryCountOutputTypeArgs
  }


  export type HomeCareSubCategoryInclude = {
    specialized_fields?: boolean | HomeCareSubCategory$specialized_fieldsArgs
    super?: boolean | HomeCareSuperCategoryArgs
    _count?: boolean | HomeCareSubCategoryCountOutputTypeArgs
  }

  export type HomeCareSubCategoryGetPayload<S extends boolean | null | undefined | HomeCareSubCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HomeCareSubCategory :
    S extends undefined ? never :
    S extends { include: any } & (HomeCareSubCategoryArgs | HomeCareSubCategoryFindManyArgs)
    ? HomeCareSubCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'specialized_fields' ? Array < HomeCareSpecializedFieldGetPayload<S['include'][P]>>  :
        P extends 'super' ? HomeCareSuperCategoryGetPayload<S['include'][P]> :
        P extends '_count' ? HomeCareSubCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HomeCareSubCategoryArgs | HomeCareSubCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'specialized_fields' ? Array < HomeCareSpecializedFieldGetPayload<S['select'][P]>>  :
        P extends 'super' ? HomeCareSuperCategoryGetPayload<S['select'][P]> :
        P extends '_count' ? HomeCareSubCategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof HomeCareSubCategory ? HomeCareSubCategory[P] : never
  } 
      : HomeCareSubCategory


  type HomeCareSubCategoryCountArgs = 
    Omit<HomeCareSubCategoryFindManyArgs, 'select' | 'include'> & {
      select?: HomeCareSubCategoryCountAggregateInputType | true
    }

  export interface HomeCareSubCategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one HomeCareSubCategory that matches the filter.
     * @param {HomeCareSubCategoryFindUniqueArgs} args - Arguments to find a HomeCareSubCategory
     * @example
     * // Get one HomeCareSubCategory
     * const homeCareSubCategory = await prisma.homeCareSubCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HomeCareSubCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HomeCareSubCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HomeCareSubCategory'> extends True ? Prisma__HomeCareSubCategoryClient<HomeCareSubCategoryGetPayload<T>> : Prisma__HomeCareSubCategoryClient<HomeCareSubCategoryGetPayload<T> | null, null>

    /**
     * Find one HomeCareSubCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HomeCareSubCategoryFindUniqueOrThrowArgs} args - Arguments to find a HomeCareSubCategory
     * @example
     * // Get one HomeCareSubCategory
     * const homeCareSubCategory = await prisma.homeCareSubCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HomeCareSubCategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HomeCareSubCategoryFindUniqueOrThrowArgs>
    ): Prisma__HomeCareSubCategoryClient<HomeCareSubCategoryGetPayload<T>>

    /**
     * Find the first HomeCareSubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSubCategoryFindFirstArgs} args - Arguments to find a HomeCareSubCategory
     * @example
     * // Get one HomeCareSubCategory
     * const homeCareSubCategory = await prisma.homeCareSubCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HomeCareSubCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HomeCareSubCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HomeCareSubCategory'> extends True ? Prisma__HomeCareSubCategoryClient<HomeCareSubCategoryGetPayload<T>> : Prisma__HomeCareSubCategoryClient<HomeCareSubCategoryGetPayload<T> | null, null>

    /**
     * Find the first HomeCareSubCategory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSubCategoryFindFirstOrThrowArgs} args - Arguments to find a HomeCareSubCategory
     * @example
     * // Get one HomeCareSubCategory
     * const homeCareSubCategory = await prisma.homeCareSubCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HomeCareSubCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HomeCareSubCategoryFindFirstOrThrowArgs>
    ): Prisma__HomeCareSubCategoryClient<HomeCareSubCategoryGetPayload<T>>

    /**
     * Find zero or more HomeCareSubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSubCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomeCareSubCategories
     * const homeCareSubCategories = await prisma.homeCareSubCategory.findMany()
     * 
     * // Get first 10 HomeCareSubCategories
     * const homeCareSubCategories = await prisma.homeCareSubCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeCareSubCategoryWithIdOnly = await prisma.homeCareSubCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HomeCareSubCategoryFindManyArgs>(
      args?: SelectSubset<T, HomeCareSubCategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<HomeCareSubCategoryGetPayload<T>>>

    /**
     * Create a HomeCareSubCategory.
     * @param {HomeCareSubCategoryCreateArgs} args - Arguments to create a HomeCareSubCategory.
     * @example
     * // Create one HomeCareSubCategory
     * const HomeCareSubCategory = await prisma.homeCareSubCategory.create({
     *   data: {
     *     // ... data to create a HomeCareSubCategory
     *   }
     * })
     * 
    **/
    create<T extends HomeCareSubCategoryCreateArgs>(
      args: SelectSubset<T, HomeCareSubCategoryCreateArgs>
    ): Prisma__HomeCareSubCategoryClient<HomeCareSubCategoryGetPayload<T>>

    /**
     * Create many HomeCareSubCategories.
     *     @param {HomeCareSubCategoryCreateManyArgs} args - Arguments to create many HomeCareSubCategories.
     *     @example
     *     // Create many HomeCareSubCategories
     *     const homeCareSubCategory = await prisma.homeCareSubCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HomeCareSubCategoryCreateManyArgs>(
      args?: SelectSubset<T, HomeCareSubCategoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HomeCareSubCategory.
     * @param {HomeCareSubCategoryDeleteArgs} args - Arguments to delete one HomeCareSubCategory.
     * @example
     * // Delete one HomeCareSubCategory
     * const HomeCareSubCategory = await prisma.homeCareSubCategory.delete({
     *   where: {
     *     // ... filter to delete one HomeCareSubCategory
     *   }
     * })
     * 
    **/
    delete<T extends HomeCareSubCategoryDeleteArgs>(
      args: SelectSubset<T, HomeCareSubCategoryDeleteArgs>
    ): Prisma__HomeCareSubCategoryClient<HomeCareSubCategoryGetPayload<T>>

    /**
     * Update one HomeCareSubCategory.
     * @param {HomeCareSubCategoryUpdateArgs} args - Arguments to update one HomeCareSubCategory.
     * @example
     * // Update one HomeCareSubCategory
     * const homeCareSubCategory = await prisma.homeCareSubCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HomeCareSubCategoryUpdateArgs>(
      args: SelectSubset<T, HomeCareSubCategoryUpdateArgs>
    ): Prisma__HomeCareSubCategoryClient<HomeCareSubCategoryGetPayload<T>>

    /**
     * Delete zero or more HomeCareSubCategories.
     * @param {HomeCareSubCategoryDeleteManyArgs} args - Arguments to filter HomeCareSubCategories to delete.
     * @example
     * // Delete a few HomeCareSubCategories
     * const { count } = await prisma.homeCareSubCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HomeCareSubCategoryDeleteManyArgs>(
      args?: SelectSubset<T, HomeCareSubCategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeCareSubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSubCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomeCareSubCategories
     * const homeCareSubCategory = await prisma.homeCareSubCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HomeCareSubCategoryUpdateManyArgs>(
      args: SelectSubset<T, HomeCareSubCategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HomeCareSubCategory.
     * @param {HomeCareSubCategoryUpsertArgs} args - Arguments to update or create a HomeCareSubCategory.
     * @example
     * // Update or create a HomeCareSubCategory
     * const homeCareSubCategory = await prisma.homeCareSubCategory.upsert({
     *   create: {
     *     // ... data to create a HomeCareSubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomeCareSubCategory we want to update
     *   }
     * })
    **/
    upsert<T extends HomeCareSubCategoryUpsertArgs>(
      args: SelectSubset<T, HomeCareSubCategoryUpsertArgs>
    ): Prisma__HomeCareSubCategoryClient<HomeCareSubCategoryGetPayload<T>>

    /**
     * Count the number of HomeCareSubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSubCategoryCountArgs} args - Arguments to filter HomeCareSubCategories to count.
     * @example
     * // Count the number of HomeCareSubCategories
     * const count = await prisma.homeCareSubCategory.count({
     *   where: {
     *     // ... the filter for the HomeCareSubCategories we want to count
     *   }
     * })
    **/
    count<T extends HomeCareSubCategoryCountArgs>(
      args?: Subset<T, HomeCareSubCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeCareSubCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomeCareSubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HomeCareSubCategoryAggregateArgs>(args: Subset<T, HomeCareSubCategoryAggregateArgs>): Prisma.PrismaPromise<GetHomeCareSubCategoryAggregateType<T>>

    /**
     * Group by HomeCareSubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSubCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HomeCareSubCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeCareSubCategoryGroupByArgs['orderBy'] }
        : { orderBy?: HomeCareSubCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HomeCareSubCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeCareSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HomeCareSubCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HomeCareSubCategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    specialized_fields<T extends HomeCareSubCategory$specialized_fieldsArgs= {}>(args?: Subset<T, HomeCareSubCategory$specialized_fieldsArgs>): Prisma.PrismaPromise<Array<HomeCareSpecializedFieldGetPayload<T>>| Null>;

    super<T extends HomeCareSuperCategoryArgs= {}>(args?: Subset<T, HomeCareSuperCategoryArgs>): Prisma__HomeCareSuperCategoryClient<HomeCareSuperCategoryGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * HomeCareSubCategory base type for findUnique actions
   */
  export type HomeCareSubCategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HomeCareSubCategory
     */
    select?: HomeCareSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSubCategoryInclude | null
    /**
     * Filter, which HomeCareSubCategory to fetch.
     */
    where: HomeCareSubCategoryWhereUniqueInput
  }

  /**
   * HomeCareSubCategory findUnique
   */
  export interface HomeCareSubCategoryFindUniqueArgs extends HomeCareSubCategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HomeCareSubCategory findUniqueOrThrow
   */
  export type HomeCareSubCategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSubCategory
     */
    select?: HomeCareSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSubCategoryInclude | null
    /**
     * Filter, which HomeCareSubCategory to fetch.
     */
    where: HomeCareSubCategoryWhereUniqueInput
  }


  /**
   * HomeCareSubCategory base type for findFirst actions
   */
  export type HomeCareSubCategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HomeCareSubCategory
     */
    select?: HomeCareSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSubCategoryInclude | null
    /**
     * Filter, which HomeCareSubCategory to fetch.
     */
    where?: HomeCareSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSubCategories to fetch.
     */
    orderBy?: Enumerable<HomeCareSubCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeCareSubCategories.
     */
    cursor?: HomeCareSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeCareSubCategories.
     */
    distinct?: Enumerable<HomeCareSubCategoryScalarFieldEnum>
  }

  /**
   * HomeCareSubCategory findFirst
   */
  export interface HomeCareSubCategoryFindFirstArgs extends HomeCareSubCategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HomeCareSubCategory findFirstOrThrow
   */
  export type HomeCareSubCategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSubCategory
     */
    select?: HomeCareSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSubCategoryInclude | null
    /**
     * Filter, which HomeCareSubCategory to fetch.
     */
    where?: HomeCareSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSubCategories to fetch.
     */
    orderBy?: Enumerable<HomeCareSubCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeCareSubCategories.
     */
    cursor?: HomeCareSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeCareSubCategories.
     */
    distinct?: Enumerable<HomeCareSubCategoryScalarFieldEnum>
  }


  /**
   * HomeCareSubCategory findMany
   */
  export type HomeCareSubCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSubCategory
     */
    select?: HomeCareSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSubCategoryInclude | null
    /**
     * Filter, which HomeCareSubCategories to fetch.
     */
    where?: HomeCareSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSubCategories to fetch.
     */
    orderBy?: Enumerable<HomeCareSubCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomeCareSubCategories.
     */
    cursor?: HomeCareSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSubCategories.
     */
    skip?: number
    distinct?: Enumerable<HomeCareSubCategoryScalarFieldEnum>
  }


  /**
   * HomeCareSubCategory create
   */
  export type HomeCareSubCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSubCategory
     */
    select?: HomeCareSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSubCategoryInclude | null
    /**
     * The data needed to create a HomeCareSubCategory.
     */
    data: XOR<HomeCareSubCategoryCreateInput, HomeCareSubCategoryUncheckedCreateInput>
  }


  /**
   * HomeCareSubCategory createMany
   */
  export type HomeCareSubCategoryCreateManyArgs = {
    /**
     * The data used to create many HomeCareSubCategories.
     */
    data: Enumerable<HomeCareSubCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HomeCareSubCategory update
   */
  export type HomeCareSubCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSubCategory
     */
    select?: HomeCareSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSubCategoryInclude | null
    /**
     * The data needed to update a HomeCareSubCategory.
     */
    data: XOR<HomeCareSubCategoryUpdateInput, HomeCareSubCategoryUncheckedUpdateInput>
    /**
     * Choose, which HomeCareSubCategory to update.
     */
    where: HomeCareSubCategoryWhereUniqueInput
  }


  /**
   * HomeCareSubCategory updateMany
   */
  export type HomeCareSubCategoryUpdateManyArgs = {
    /**
     * The data used to update HomeCareSubCategories.
     */
    data: XOR<HomeCareSubCategoryUpdateManyMutationInput, HomeCareSubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which HomeCareSubCategories to update
     */
    where?: HomeCareSubCategoryWhereInput
  }


  /**
   * HomeCareSubCategory upsert
   */
  export type HomeCareSubCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSubCategory
     */
    select?: HomeCareSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSubCategoryInclude | null
    /**
     * The filter to search for the HomeCareSubCategory to update in case it exists.
     */
    where: HomeCareSubCategoryWhereUniqueInput
    /**
     * In case the HomeCareSubCategory found by the `where` argument doesn't exist, create a new HomeCareSubCategory with this data.
     */
    create: XOR<HomeCareSubCategoryCreateInput, HomeCareSubCategoryUncheckedCreateInput>
    /**
     * In case the HomeCareSubCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeCareSubCategoryUpdateInput, HomeCareSubCategoryUncheckedUpdateInput>
  }


  /**
   * HomeCareSubCategory delete
   */
  export type HomeCareSubCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSubCategory
     */
    select?: HomeCareSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSubCategoryInclude | null
    /**
     * Filter which HomeCareSubCategory to delete.
     */
    where: HomeCareSubCategoryWhereUniqueInput
  }


  /**
   * HomeCareSubCategory deleteMany
   */
  export type HomeCareSubCategoryDeleteManyArgs = {
    /**
     * Filter which HomeCareSubCategories to delete
     */
    where?: HomeCareSubCategoryWhereInput
  }


  /**
   * HomeCareSubCategory.specialized_fields
   */
  export type HomeCareSubCategory$specialized_fieldsArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedField
     */
    select?: HomeCareSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedFieldInclude | null
    where?: HomeCareSpecializedFieldWhereInput
    orderBy?: Enumerable<HomeCareSpecializedFieldOrderByWithRelationInput>
    cursor?: HomeCareSpecializedFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HomeCareSpecializedFieldScalarFieldEnum>
  }


  /**
   * HomeCareSubCategory without action
   */
  export type HomeCareSubCategoryArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSubCategory
     */
    select?: HomeCareSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSubCategoryInclude | null
  }



  /**
   * Model RealEstateSpecializedField
   */


  export type AggregateRealEstateSpecializedField = {
    _count: RealEstateSpecializedFieldCountAggregateOutputType | null
    _min: RealEstateSpecializedFieldMinAggregateOutputType | null
    _max: RealEstateSpecializedFieldMaxAggregateOutputType | null
  }

  export type RealEstateSpecializedFieldMinAggregateOutputType = {
    id: string | null
    sub_category_id: string | null
    agent_id: string | null
  }

  export type RealEstateSpecializedFieldMaxAggregateOutputType = {
    id: string | null
    sub_category_id: string | null
    agent_id: string | null
  }

  export type RealEstateSpecializedFieldCountAggregateOutputType = {
    id: number
    sub_category_id: number
    agent_id: number
    _all: number
  }


  export type RealEstateSpecializedFieldMinAggregateInputType = {
    id?: true
    sub_category_id?: true
    agent_id?: true
  }

  export type RealEstateSpecializedFieldMaxAggregateInputType = {
    id?: true
    sub_category_id?: true
    agent_id?: true
  }

  export type RealEstateSpecializedFieldCountAggregateInputType = {
    id?: true
    sub_category_id?: true
    agent_id?: true
    _all?: true
  }

  export type RealEstateSpecializedFieldAggregateArgs = {
    /**
     * Filter which RealEstateSpecializedField to aggregate.
     */
    where?: RealEstateSpecializedFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSpecializedFields to fetch.
     */
    orderBy?: Enumerable<RealEstateSpecializedFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RealEstateSpecializedFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSpecializedFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSpecializedFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RealEstateSpecializedFields
    **/
    _count?: true | RealEstateSpecializedFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealEstateSpecializedFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealEstateSpecializedFieldMaxAggregateInputType
  }

  export type GetRealEstateSpecializedFieldAggregateType<T extends RealEstateSpecializedFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateRealEstateSpecializedField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealEstateSpecializedField[P]>
      : GetScalarType<T[P], AggregateRealEstateSpecializedField[P]>
  }




  export type RealEstateSpecializedFieldGroupByArgs = {
    where?: RealEstateSpecializedFieldWhereInput
    orderBy?: Enumerable<RealEstateSpecializedFieldOrderByWithAggregationInput>
    by: RealEstateSpecializedFieldScalarFieldEnum[]
    having?: RealEstateSpecializedFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealEstateSpecializedFieldCountAggregateInputType | true
    _min?: RealEstateSpecializedFieldMinAggregateInputType
    _max?: RealEstateSpecializedFieldMaxAggregateInputType
  }


  export type RealEstateSpecializedFieldGroupByOutputType = {
    id: string
    sub_category_id: string
    agent_id: string
    _count: RealEstateSpecializedFieldCountAggregateOutputType | null
    _min: RealEstateSpecializedFieldMinAggregateOutputType | null
    _max: RealEstateSpecializedFieldMaxAggregateOutputType | null
  }

  type GetRealEstateSpecializedFieldGroupByPayload<T extends RealEstateSpecializedFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RealEstateSpecializedFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealEstateSpecializedFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealEstateSpecializedFieldGroupByOutputType[P]>
            : GetScalarType<T[P], RealEstateSpecializedFieldGroupByOutputType[P]>
        }
      >
    >


  export type RealEstateSpecializedFieldSelect = {
    id?: boolean
    sub_category_id?: boolean
    agent_id?: boolean
    agent?: boolean | RealEstateAgentArgs
    real_estate_sub_category?: boolean | RealEstateSubCategoryArgs
  }


  export type RealEstateSpecializedFieldInclude = {
    agent?: boolean | RealEstateAgentArgs
    real_estate_sub_category?: boolean | RealEstateSubCategoryArgs
  }

  export type RealEstateSpecializedFieldGetPayload<S extends boolean | null | undefined | RealEstateSpecializedFieldArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RealEstateSpecializedField :
    S extends undefined ? never :
    S extends { include: any } & (RealEstateSpecializedFieldArgs | RealEstateSpecializedFieldFindManyArgs)
    ? RealEstateSpecializedField  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'agent' ? RealEstateAgentGetPayload<S['include'][P]> :
        P extends 'real_estate_sub_category' ? RealEstateSubCategoryGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RealEstateSpecializedFieldArgs | RealEstateSpecializedFieldFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'agent' ? RealEstateAgentGetPayload<S['select'][P]> :
        P extends 'real_estate_sub_category' ? RealEstateSubCategoryGetPayload<S['select'][P]> :  P extends keyof RealEstateSpecializedField ? RealEstateSpecializedField[P] : never
  } 
      : RealEstateSpecializedField


  type RealEstateSpecializedFieldCountArgs = 
    Omit<RealEstateSpecializedFieldFindManyArgs, 'select' | 'include'> & {
      select?: RealEstateSpecializedFieldCountAggregateInputType | true
    }

  export interface RealEstateSpecializedFieldDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RealEstateSpecializedField that matches the filter.
     * @param {RealEstateSpecializedFieldFindUniqueArgs} args - Arguments to find a RealEstateSpecializedField
     * @example
     * // Get one RealEstateSpecializedField
     * const realEstateSpecializedField = await prisma.realEstateSpecializedField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RealEstateSpecializedFieldFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RealEstateSpecializedFieldFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RealEstateSpecializedField'> extends True ? Prisma__RealEstateSpecializedFieldClient<RealEstateSpecializedFieldGetPayload<T>> : Prisma__RealEstateSpecializedFieldClient<RealEstateSpecializedFieldGetPayload<T> | null, null>

    /**
     * Find one RealEstateSpecializedField that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RealEstateSpecializedFieldFindUniqueOrThrowArgs} args - Arguments to find a RealEstateSpecializedField
     * @example
     * // Get one RealEstateSpecializedField
     * const realEstateSpecializedField = await prisma.realEstateSpecializedField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RealEstateSpecializedFieldFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RealEstateSpecializedFieldFindUniqueOrThrowArgs>
    ): Prisma__RealEstateSpecializedFieldClient<RealEstateSpecializedFieldGetPayload<T>>

    /**
     * Find the first RealEstateSpecializedField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedFieldFindFirstArgs} args - Arguments to find a RealEstateSpecializedField
     * @example
     * // Get one RealEstateSpecializedField
     * const realEstateSpecializedField = await prisma.realEstateSpecializedField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RealEstateSpecializedFieldFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RealEstateSpecializedFieldFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RealEstateSpecializedField'> extends True ? Prisma__RealEstateSpecializedFieldClient<RealEstateSpecializedFieldGetPayload<T>> : Prisma__RealEstateSpecializedFieldClient<RealEstateSpecializedFieldGetPayload<T> | null, null>

    /**
     * Find the first RealEstateSpecializedField that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedFieldFindFirstOrThrowArgs} args - Arguments to find a RealEstateSpecializedField
     * @example
     * // Get one RealEstateSpecializedField
     * const realEstateSpecializedField = await prisma.realEstateSpecializedField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RealEstateSpecializedFieldFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RealEstateSpecializedFieldFindFirstOrThrowArgs>
    ): Prisma__RealEstateSpecializedFieldClient<RealEstateSpecializedFieldGetPayload<T>>

    /**
     * Find zero or more RealEstateSpecializedFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedFieldFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RealEstateSpecializedFields
     * const realEstateSpecializedFields = await prisma.realEstateSpecializedField.findMany()
     * 
     * // Get first 10 RealEstateSpecializedFields
     * const realEstateSpecializedFields = await prisma.realEstateSpecializedField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const realEstateSpecializedFieldWithIdOnly = await prisma.realEstateSpecializedField.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RealEstateSpecializedFieldFindManyArgs>(
      args?: SelectSubset<T, RealEstateSpecializedFieldFindManyArgs>
    ): Prisma.PrismaPromise<Array<RealEstateSpecializedFieldGetPayload<T>>>

    /**
     * Create a RealEstateSpecializedField.
     * @param {RealEstateSpecializedFieldCreateArgs} args - Arguments to create a RealEstateSpecializedField.
     * @example
     * // Create one RealEstateSpecializedField
     * const RealEstateSpecializedField = await prisma.realEstateSpecializedField.create({
     *   data: {
     *     // ... data to create a RealEstateSpecializedField
     *   }
     * })
     * 
    **/
    create<T extends RealEstateSpecializedFieldCreateArgs>(
      args: SelectSubset<T, RealEstateSpecializedFieldCreateArgs>
    ): Prisma__RealEstateSpecializedFieldClient<RealEstateSpecializedFieldGetPayload<T>>

    /**
     * Create many RealEstateSpecializedFields.
     *     @param {RealEstateSpecializedFieldCreateManyArgs} args - Arguments to create many RealEstateSpecializedFields.
     *     @example
     *     // Create many RealEstateSpecializedFields
     *     const realEstateSpecializedField = await prisma.realEstateSpecializedField.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RealEstateSpecializedFieldCreateManyArgs>(
      args?: SelectSubset<T, RealEstateSpecializedFieldCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RealEstateSpecializedField.
     * @param {RealEstateSpecializedFieldDeleteArgs} args - Arguments to delete one RealEstateSpecializedField.
     * @example
     * // Delete one RealEstateSpecializedField
     * const RealEstateSpecializedField = await prisma.realEstateSpecializedField.delete({
     *   where: {
     *     // ... filter to delete one RealEstateSpecializedField
     *   }
     * })
     * 
    **/
    delete<T extends RealEstateSpecializedFieldDeleteArgs>(
      args: SelectSubset<T, RealEstateSpecializedFieldDeleteArgs>
    ): Prisma__RealEstateSpecializedFieldClient<RealEstateSpecializedFieldGetPayload<T>>

    /**
     * Update one RealEstateSpecializedField.
     * @param {RealEstateSpecializedFieldUpdateArgs} args - Arguments to update one RealEstateSpecializedField.
     * @example
     * // Update one RealEstateSpecializedField
     * const realEstateSpecializedField = await prisma.realEstateSpecializedField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RealEstateSpecializedFieldUpdateArgs>(
      args: SelectSubset<T, RealEstateSpecializedFieldUpdateArgs>
    ): Prisma__RealEstateSpecializedFieldClient<RealEstateSpecializedFieldGetPayload<T>>

    /**
     * Delete zero or more RealEstateSpecializedFields.
     * @param {RealEstateSpecializedFieldDeleteManyArgs} args - Arguments to filter RealEstateSpecializedFields to delete.
     * @example
     * // Delete a few RealEstateSpecializedFields
     * const { count } = await prisma.realEstateSpecializedField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RealEstateSpecializedFieldDeleteManyArgs>(
      args?: SelectSubset<T, RealEstateSpecializedFieldDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RealEstateSpecializedFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RealEstateSpecializedFields
     * const realEstateSpecializedField = await prisma.realEstateSpecializedField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RealEstateSpecializedFieldUpdateManyArgs>(
      args: SelectSubset<T, RealEstateSpecializedFieldUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RealEstateSpecializedField.
     * @param {RealEstateSpecializedFieldUpsertArgs} args - Arguments to update or create a RealEstateSpecializedField.
     * @example
     * // Update or create a RealEstateSpecializedField
     * const realEstateSpecializedField = await prisma.realEstateSpecializedField.upsert({
     *   create: {
     *     // ... data to create a RealEstateSpecializedField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RealEstateSpecializedField we want to update
     *   }
     * })
    **/
    upsert<T extends RealEstateSpecializedFieldUpsertArgs>(
      args: SelectSubset<T, RealEstateSpecializedFieldUpsertArgs>
    ): Prisma__RealEstateSpecializedFieldClient<RealEstateSpecializedFieldGetPayload<T>>

    /**
     * Count the number of RealEstateSpecializedFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedFieldCountArgs} args - Arguments to filter RealEstateSpecializedFields to count.
     * @example
     * // Count the number of RealEstateSpecializedFields
     * const count = await prisma.realEstateSpecializedField.count({
     *   where: {
     *     // ... the filter for the RealEstateSpecializedFields we want to count
     *   }
     * })
    **/
    count<T extends RealEstateSpecializedFieldCountArgs>(
      args?: Subset<T, RealEstateSpecializedFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealEstateSpecializedFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RealEstateSpecializedField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RealEstateSpecializedFieldAggregateArgs>(args: Subset<T, RealEstateSpecializedFieldAggregateArgs>): Prisma.PrismaPromise<GetRealEstateSpecializedFieldAggregateType<T>>

    /**
     * Group by RealEstateSpecializedField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedFieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RealEstateSpecializedFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealEstateSpecializedFieldGroupByArgs['orderBy'] }
        : { orderBy?: RealEstateSpecializedFieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RealEstateSpecializedFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealEstateSpecializedFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RealEstateSpecializedField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RealEstateSpecializedFieldClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    agent<T extends RealEstateAgentArgs= {}>(args?: Subset<T, RealEstateAgentArgs>): Prisma__RealEstateAgentClient<RealEstateAgentGetPayload<T> | Null>;

    real_estate_sub_category<T extends RealEstateSubCategoryArgs= {}>(args?: Subset<T, RealEstateSubCategoryArgs>): Prisma__RealEstateSubCategoryClient<RealEstateSubCategoryGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RealEstateSpecializedField base type for findUnique actions
   */
  export type RealEstateSpecializedFieldFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedField
     */
    select?: RealEstateSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedFieldInclude | null
    /**
     * Filter, which RealEstateSpecializedField to fetch.
     */
    where: RealEstateSpecializedFieldWhereUniqueInput
  }

  /**
   * RealEstateSpecializedField findUnique
   */
  export interface RealEstateSpecializedFieldFindUniqueArgs extends RealEstateSpecializedFieldFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealEstateSpecializedField findUniqueOrThrow
   */
  export type RealEstateSpecializedFieldFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedField
     */
    select?: RealEstateSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedFieldInclude | null
    /**
     * Filter, which RealEstateSpecializedField to fetch.
     */
    where: RealEstateSpecializedFieldWhereUniqueInput
  }


  /**
   * RealEstateSpecializedField base type for findFirst actions
   */
  export type RealEstateSpecializedFieldFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedField
     */
    select?: RealEstateSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedFieldInclude | null
    /**
     * Filter, which RealEstateSpecializedField to fetch.
     */
    where?: RealEstateSpecializedFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSpecializedFields to fetch.
     */
    orderBy?: Enumerable<RealEstateSpecializedFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstateSpecializedFields.
     */
    cursor?: RealEstateSpecializedFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSpecializedFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSpecializedFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstateSpecializedFields.
     */
    distinct?: Enumerable<RealEstateSpecializedFieldScalarFieldEnum>
  }

  /**
   * RealEstateSpecializedField findFirst
   */
  export interface RealEstateSpecializedFieldFindFirstArgs extends RealEstateSpecializedFieldFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealEstateSpecializedField findFirstOrThrow
   */
  export type RealEstateSpecializedFieldFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedField
     */
    select?: RealEstateSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedFieldInclude | null
    /**
     * Filter, which RealEstateSpecializedField to fetch.
     */
    where?: RealEstateSpecializedFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSpecializedFields to fetch.
     */
    orderBy?: Enumerable<RealEstateSpecializedFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstateSpecializedFields.
     */
    cursor?: RealEstateSpecializedFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSpecializedFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSpecializedFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstateSpecializedFields.
     */
    distinct?: Enumerable<RealEstateSpecializedFieldScalarFieldEnum>
  }


  /**
   * RealEstateSpecializedField findMany
   */
  export type RealEstateSpecializedFieldFindManyArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedField
     */
    select?: RealEstateSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedFieldInclude | null
    /**
     * Filter, which RealEstateSpecializedFields to fetch.
     */
    where?: RealEstateSpecializedFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSpecializedFields to fetch.
     */
    orderBy?: Enumerable<RealEstateSpecializedFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RealEstateSpecializedFields.
     */
    cursor?: RealEstateSpecializedFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSpecializedFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSpecializedFields.
     */
    skip?: number
    distinct?: Enumerable<RealEstateSpecializedFieldScalarFieldEnum>
  }


  /**
   * RealEstateSpecializedField create
   */
  export type RealEstateSpecializedFieldCreateArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedField
     */
    select?: RealEstateSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedFieldInclude | null
    /**
     * The data needed to create a RealEstateSpecializedField.
     */
    data: XOR<RealEstateSpecializedFieldCreateInput, RealEstateSpecializedFieldUncheckedCreateInput>
  }


  /**
   * RealEstateSpecializedField createMany
   */
  export type RealEstateSpecializedFieldCreateManyArgs = {
    /**
     * The data used to create many RealEstateSpecializedFields.
     */
    data: Enumerable<RealEstateSpecializedFieldCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RealEstateSpecializedField update
   */
  export type RealEstateSpecializedFieldUpdateArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedField
     */
    select?: RealEstateSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedFieldInclude | null
    /**
     * The data needed to update a RealEstateSpecializedField.
     */
    data: XOR<RealEstateSpecializedFieldUpdateInput, RealEstateSpecializedFieldUncheckedUpdateInput>
    /**
     * Choose, which RealEstateSpecializedField to update.
     */
    where: RealEstateSpecializedFieldWhereUniqueInput
  }


  /**
   * RealEstateSpecializedField updateMany
   */
  export type RealEstateSpecializedFieldUpdateManyArgs = {
    /**
     * The data used to update RealEstateSpecializedFields.
     */
    data: XOR<RealEstateSpecializedFieldUpdateManyMutationInput, RealEstateSpecializedFieldUncheckedUpdateManyInput>
    /**
     * Filter which RealEstateSpecializedFields to update
     */
    where?: RealEstateSpecializedFieldWhereInput
  }


  /**
   * RealEstateSpecializedField upsert
   */
  export type RealEstateSpecializedFieldUpsertArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedField
     */
    select?: RealEstateSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedFieldInclude | null
    /**
     * The filter to search for the RealEstateSpecializedField to update in case it exists.
     */
    where: RealEstateSpecializedFieldWhereUniqueInput
    /**
     * In case the RealEstateSpecializedField found by the `where` argument doesn't exist, create a new RealEstateSpecializedField with this data.
     */
    create: XOR<RealEstateSpecializedFieldCreateInput, RealEstateSpecializedFieldUncheckedCreateInput>
    /**
     * In case the RealEstateSpecializedField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RealEstateSpecializedFieldUpdateInput, RealEstateSpecializedFieldUncheckedUpdateInput>
  }


  /**
   * RealEstateSpecializedField delete
   */
  export type RealEstateSpecializedFieldDeleteArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedField
     */
    select?: RealEstateSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedFieldInclude | null
    /**
     * Filter which RealEstateSpecializedField to delete.
     */
    where: RealEstateSpecializedFieldWhereUniqueInput
  }


  /**
   * RealEstateSpecializedField deleteMany
   */
  export type RealEstateSpecializedFieldDeleteManyArgs = {
    /**
     * Filter which RealEstateSpecializedFields to delete
     */
    where?: RealEstateSpecializedFieldWhereInput
  }


  /**
   * RealEstateSpecializedField without action
   */
  export type RealEstateSpecializedFieldArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedField
     */
    select?: RealEstateSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedFieldInclude | null
  }



  /**
   * Model RealEstateSuperCategory
   */


  export type AggregateRealEstateSuperCategory = {
    _count: RealEstateSuperCategoryCountAggregateOutputType | null
    _min: RealEstateSuperCategoryMinAggregateOutputType | null
    _max: RealEstateSuperCategoryMaxAggregateOutputType | null
  }

  export type RealEstateSuperCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RealEstateSuperCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RealEstateSuperCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RealEstateSuperCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RealEstateSuperCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RealEstateSuperCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RealEstateSuperCategoryAggregateArgs = {
    /**
     * Filter which RealEstateSuperCategory to aggregate.
     */
    where?: RealEstateSuperCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSuperCategories to fetch.
     */
    orderBy?: Enumerable<RealEstateSuperCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RealEstateSuperCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSuperCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSuperCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RealEstateSuperCategories
    **/
    _count?: true | RealEstateSuperCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealEstateSuperCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealEstateSuperCategoryMaxAggregateInputType
  }

  export type GetRealEstateSuperCategoryAggregateType<T extends RealEstateSuperCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRealEstateSuperCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealEstateSuperCategory[P]>
      : GetScalarType<T[P], AggregateRealEstateSuperCategory[P]>
  }




  export type RealEstateSuperCategoryGroupByArgs = {
    where?: RealEstateSuperCategoryWhereInput
    orderBy?: Enumerable<RealEstateSuperCategoryOrderByWithAggregationInput>
    by: RealEstateSuperCategoryScalarFieldEnum[]
    having?: RealEstateSuperCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealEstateSuperCategoryCountAggregateInputType | true
    _min?: RealEstateSuperCategoryMinAggregateInputType
    _max?: RealEstateSuperCategoryMaxAggregateInputType
  }


  export type RealEstateSuperCategoryGroupByOutputType = {
    id: string
    name: string
    _count: RealEstateSuperCategoryCountAggregateOutputType | null
    _min: RealEstateSuperCategoryMinAggregateOutputType | null
    _max: RealEstateSuperCategoryMaxAggregateOutputType | null
  }

  type GetRealEstateSuperCategoryGroupByPayload<T extends RealEstateSuperCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RealEstateSuperCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealEstateSuperCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealEstateSuperCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], RealEstateSuperCategoryGroupByOutputType[P]>
        }
      >
    >


  export type RealEstateSuperCategorySelect = {
    id?: boolean
    name?: boolean
    real_estate_sub_categories?: boolean | RealEstateSuperCategory$real_estate_sub_categoriesArgs
    _count?: boolean | RealEstateSuperCategoryCountOutputTypeArgs
  }


  export type RealEstateSuperCategoryInclude = {
    real_estate_sub_categories?: boolean | RealEstateSuperCategory$real_estate_sub_categoriesArgs
    _count?: boolean | RealEstateSuperCategoryCountOutputTypeArgs
  }

  export type RealEstateSuperCategoryGetPayload<S extends boolean | null | undefined | RealEstateSuperCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RealEstateSuperCategory :
    S extends undefined ? never :
    S extends { include: any } & (RealEstateSuperCategoryArgs | RealEstateSuperCategoryFindManyArgs)
    ? RealEstateSuperCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'real_estate_sub_categories' ? Array < RealEstateSubCategoryGetPayload<S['include'][P]>>  :
        P extends '_count' ? RealEstateSuperCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RealEstateSuperCategoryArgs | RealEstateSuperCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'real_estate_sub_categories' ? Array < RealEstateSubCategoryGetPayload<S['select'][P]>>  :
        P extends '_count' ? RealEstateSuperCategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof RealEstateSuperCategory ? RealEstateSuperCategory[P] : never
  } 
      : RealEstateSuperCategory


  type RealEstateSuperCategoryCountArgs = 
    Omit<RealEstateSuperCategoryFindManyArgs, 'select' | 'include'> & {
      select?: RealEstateSuperCategoryCountAggregateInputType | true
    }

  export interface RealEstateSuperCategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RealEstateSuperCategory that matches the filter.
     * @param {RealEstateSuperCategoryFindUniqueArgs} args - Arguments to find a RealEstateSuperCategory
     * @example
     * // Get one RealEstateSuperCategory
     * const realEstateSuperCategory = await prisma.realEstateSuperCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RealEstateSuperCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RealEstateSuperCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RealEstateSuperCategory'> extends True ? Prisma__RealEstateSuperCategoryClient<RealEstateSuperCategoryGetPayload<T>> : Prisma__RealEstateSuperCategoryClient<RealEstateSuperCategoryGetPayload<T> | null, null>

    /**
     * Find one RealEstateSuperCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RealEstateSuperCategoryFindUniqueOrThrowArgs} args - Arguments to find a RealEstateSuperCategory
     * @example
     * // Get one RealEstateSuperCategory
     * const realEstateSuperCategory = await prisma.realEstateSuperCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RealEstateSuperCategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RealEstateSuperCategoryFindUniqueOrThrowArgs>
    ): Prisma__RealEstateSuperCategoryClient<RealEstateSuperCategoryGetPayload<T>>

    /**
     * Find the first RealEstateSuperCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSuperCategoryFindFirstArgs} args - Arguments to find a RealEstateSuperCategory
     * @example
     * // Get one RealEstateSuperCategory
     * const realEstateSuperCategory = await prisma.realEstateSuperCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RealEstateSuperCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RealEstateSuperCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RealEstateSuperCategory'> extends True ? Prisma__RealEstateSuperCategoryClient<RealEstateSuperCategoryGetPayload<T>> : Prisma__RealEstateSuperCategoryClient<RealEstateSuperCategoryGetPayload<T> | null, null>

    /**
     * Find the first RealEstateSuperCategory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSuperCategoryFindFirstOrThrowArgs} args - Arguments to find a RealEstateSuperCategory
     * @example
     * // Get one RealEstateSuperCategory
     * const realEstateSuperCategory = await prisma.realEstateSuperCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RealEstateSuperCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RealEstateSuperCategoryFindFirstOrThrowArgs>
    ): Prisma__RealEstateSuperCategoryClient<RealEstateSuperCategoryGetPayload<T>>

    /**
     * Find zero or more RealEstateSuperCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSuperCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RealEstateSuperCategories
     * const realEstateSuperCategories = await prisma.realEstateSuperCategory.findMany()
     * 
     * // Get first 10 RealEstateSuperCategories
     * const realEstateSuperCategories = await prisma.realEstateSuperCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const realEstateSuperCategoryWithIdOnly = await prisma.realEstateSuperCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RealEstateSuperCategoryFindManyArgs>(
      args?: SelectSubset<T, RealEstateSuperCategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<RealEstateSuperCategoryGetPayload<T>>>

    /**
     * Create a RealEstateSuperCategory.
     * @param {RealEstateSuperCategoryCreateArgs} args - Arguments to create a RealEstateSuperCategory.
     * @example
     * // Create one RealEstateSuperCategory
     * const RealEstateSuperCategory = await prisma.realEstateSuperCategory.create({
     *   data: {
     *     // ... data to create a RealEstateSuperCategory
     *   }
     * })
     * 
    **/
    create<T extends RealEstateSuperCategoryCreateArgs>(
      args: SelectSubset<T, RealEstateSuperCategoryCreateArgs>
    ): Prisma__RealEstateSuperCategoryClient<RealEstateSuperCategoryGetPayload<T>>

    /**
     * Create many RealEstateSuperCategories.
     *     @param {RealEstateSuperCategoryCreateManyArgs} args - Arguments to create many RealEstateSuperCategories.
     *     @example
     *     // Create many RealEstateSuperCategories
     *     const realEstateSuperCategory = await prisma.realEstateSuperCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RealEstateSuperCategoryCreateManyArgs>(
      args?: SelectSubset<T, RealEstateSuperCategoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RealEstateSuperCategory.
     * @param {RealEstateSuperCategoryDeleteArgs} args - Arguments to delete one RealEstateSuperCategory.
     * @example
     * // Delete one RealEstateSuperCategory
     * const RealEstateSuperCategory = await prisma.realEstateSuperCategory.delete({
     *   where: {
     *     // ... filter to delete one RealEstateSuperCategory
     *   }
     * })
     * 
    **/
    delete<T extends RealEstateSuperCategoryDeleteArgs>(
      args: SelectSubset<T, RealEstateSuperCategoryDeleteArgs>
    ): Prisma__RealEstateSuperCategoryClient<RealEstateSuperCategoryGetPayload<T>>

    /**
     * Update one RealEstateSuperCategory.
     * @param {RealEstateSuperCategoryUpdateArgs} args - Arguments to update one RealEstateSuperCategory.
     * @example
     * // Update one RealEstateSuperCategory
     * const realEstateSuperCategory = await prisma.realEstateSuperCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RealEstateSuperCategoryUpdateArgs>(
      args: SelectSubset<T, RealEstateSuperCategoryUpdateArgs>
    ): Prisma__RealEstateSuperCategoryClient<RealEstateSuperCategoryGetPayload<T>>

    /**
     * Delete zero or more RealEstateSuperCategories.
     * @param {RealEstateSuperCategoryDeleteManyArgs} args - Arguments to filter RealEstateSuperCategories to delete.
     * @example
     * // Delete a few RealEstateSuperCategories
     * const { count } = await prisma.realEstateSuperCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RealEstateSuperCategoryDeleteManyArgs>(
      args?: SelectSubset<T, RealEstateSuperCategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RealEstateSuperCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSuperCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RealEstateSuperCategories
     * const realEstateSuperCategory = await prisma.realEstateSuperCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RealEstateSuperCategoryUpdateManyArgs>(
      args: SelectSubset<T, RealEstateSuperCategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RealEstateSuperCategory.
     * @param {RealEstateSuperCategoryUpsertArgs} args - Arguments to update or create a RealEstateSuperCategory.
     * @example
     * // Update or create a RealEstateSuperCategory
     * const realEstateSuperCategory = await prisma.realEstateSuperCategory.upsert({
     *   create: {
     *     // ... data to create a RealEstateSuperCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RealEstateSuperCategory we want to update
     *   }
     * })
    **/
    upsert<T extends RealEstateSuperCategoryUpsertArgs>(
      args: SelectSubset<T, RealEstateSuperCategoryUpsertArgs>
    ): Prisma__RealEstateSuperCategoryClient<RealEstateSuperCategoryGetPayload<T>>

    /**
     * Count the number of RealEstateSuperCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSuperCategoryCountArgs} args - Arguments to filter RealEstateSuperCategories to count.
     * @example
     * // Count the number of RealEstateSuperCategories
     * const count = await prisma.realEstateSuperCategory.count({
     *   where: {
     *     // ... the filter for the RealEstateSuperCategories we want to count
     *   }
     * })
    **/
    count<T extends RealEstateSuperCategoryCountArgs>(
      args?: Subset<T, RealEstateSuperCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealEstateSuperCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RealEstateSuperCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSuperCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RealEstateSuperCategoryAggregateArgs>(args: Subset<T, RealEstateSuperCategoryAggregateArgs>): Prisma.PrismaPromise<GetRealEstateSuperCategoryAggregateType<T>>

    /**
     * Group by RealEstateSuperCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSuperCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RealEstateSuperCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealEstateSuperCategoryGroupByArgs['orderBy'] }
        : { orderBy?: RealEstateSuperCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RealEstateSuperCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealEstateSuperCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RealEstateSuperCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RealEstateSuperCategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    real_estate_sub_categories<T extends RealEstateSuperCategory$real_estate_sub_categoriesArgs= {}>(args?: Subset<T, RealEstateSuperCategory$real_estate_sub_categoriesArgs>): Prisma.PrismaPromise<Array<RealEstateSubCategoryGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RealEstateSuperCategory base type for findUnique actions
   */
  export type RealEstateSuperCategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RealEstateSuperCategory
     */
    select?: RealEstateSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSuperCategoryInclude | null
    /**
     * Filter, which RealEstateSuperCategory to fetch.
     */
    where: RealEstateSuperCategoryWhereUniqueInput
  }

  /**
   * RealEstateSuperCategory findUnique
   */
  export interface RealEstateSuperCategoryFindUniqueArgs extends RealEstateSuperCategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealEstateSuperCategory findUniqueOrThrow
   */
  export type RealEstateSuperCategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSuperCategory
     */
    select?: RealEstateSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSuperCategoryInclude | null
    /**
     * Filter, which RealEstateSuperCategory to fetch.
     */
    where: RealEstateSuperCategoryWhereUniqueInput
  }


  /**
   * RealEstateSuperCategory base type for findFirst actions
   */
  export type RealEstateSuperCategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RealEstateSuperCategory
     */
    select?: RealEstateSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSuperCategoryInclude | null
    /**
     * Filter, which RealEstateSuperCategory to fetch.
     */
    where?: RealEstateSuperCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSuperCategories to fetch.
     */
    orderBy?: Enumerable<RealEstateSuperCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstateSuperCategories.
     */
    cursor?: RealEstateSuperCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSuperCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSuperCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstateSuperCategories.
     */
    distinct?: Enumerable<RealEstateSuperCategoryScalarFieldEnum>
  }

  /**
   * RealEstateSuperCategory findFirst
   */
  export interface RealEstateSuperCategoryFindFirstArgs extends RealEstateSuperCategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealEstateSuperCategory findFirstOrThrow
   */
  export type RealEstateSuperCategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSuperCategory
     */
    select?: RealEstateSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSuperCategoryInclude | null
    /**
     * Filter, which RealEstateSuperCategory to fetch.
     */
    where?: RealEstateSuperCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSuperCategories to fetch.
     */
    orderBy?: Enumerable<RealEstateSuperCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstateSuperCategories.
     */
    cursor?: RealEstateSuperCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSuperCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSuperCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstateSuperCategories.
     */
    distinct?: Enumerable<RealEstateSuperCategoryScalarFieldEnum>
  }


  /**
   * RealEstateSuperCategory findMany
   */
  export type RealEstateSuperCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSuperCategory
     */
    select?: RealEstateSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSuperCategoryInclude | null
    /**
     * Filter, which RealEstateSuperCategories to fetch.
     */
    where?: RealEstateSuperCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSuperCategories to fetch.
     */
    orderBy?: Enumerable<RealEstateSuperCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RealEstateSuperCategories.
     */
    cursor?: RealEstateSuperCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSuperCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSuperCategories.
     */
    skip?: number
    distinct?: Enumerable<RealEstateSuperCategoryScalarFieldEnum>
  }


  /**
   * RealEstateSuperCategory create
   */
  export type RealEstateSuperCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSuperCategory
     */
    select?: RealEstateSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSuperCategoryInclude | null
    /**
     * The data needed to create a RealEstateSuperCategory.
     */
    data: XOR<RealEstateSuperCategoryCreateInput, RealEstateSuperCategoryUncheckedCreateInput>
  }


  /**
   * RealEstateSuperCategory createMany
   */
  export type RealEstateSuperCategoryCreateManyArgs = {
    /**
     * The data used to create many RealEstateSuperCategories.
     */
    data: Enumerable<RealEstateSuperCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RealEstateSuperCategory update
   */
  export type RealEstateSuperCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSuperCategory
     */
    select?: RealEstateSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSuperCategoryInclude | null
    /**
     * The data needed to update a RealEstateSuperCategory.
     */
    data: XOR<RealEstateSuperCategoryUpdateInput, RealEstateSuperCategoryUncheckedUpdateInput>
    /**
     * Choose, which RealEstateSuperCategory to update.
     */
    where: RealEstateSuperCategoryWhereUniqueInput
  }


  /**
   * RealEstateSuperCategory updateMany
   */
  export type RealEstateSuperCategoryUpdateManyArgs = {
    /**
     * The data used to update RealEstateSuperCategories.
     */
    data: XOR<RealEstateSuperCategoryUpdateManyMutationInput, RealEstateSuperCategoryUncheckedUpdateManyInput>
    /**
     * Filter which RealEstateSuperCategories to update
     */
    where?: RealEstateSuperCategoryWhereInput
  }


  /**
   * RealEstateSuperCategory upsert
   */
  export type RealEstateSuperCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSuperCategory
     */
    select?: RealEstateSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSuperCategoryInclude | null
    /**
     * The filter to search for the RealEstateSuperCategory to update in case it exists.
     */
    where: RealEstateSuperCategoryWhereUniqueInput
    /**
     * In case the RealEstateSuperCategory found by the `where` argument doesn't exist, create a new RealEstateSuperCategory with this data.
     */
    create: XOR<RealEstateSuperCategoryCreateInput, RealEstateSuperCategoryUncheckedCreateInput>
    /**
     * In case the RealEstateSuperCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RealEstateSuperCategoryUpdateInput, RealEstateSuperCategoryUncheckedUpdateInput>
  }


  /**
   * RealEstateSuperCategory delete
   */
  export type RealEstateSuperCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSuperCategory
     */
    select?: RealEstateSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSuperCategoryInclude | null
    /**
     * Filter which RealEstateSuperCategory to delete.
     */
    where: RealEstateSuperCategoryWhereUniqueInput
  }


  /**
   * RealEstateSuperCategory deleteMany
   */
  export type RealEstateSuperCategoryDeleteManyArgs = {
    /**
     * Filter which RealEstateSuperCategories to delete
     */
    where?: RealEstateSuperCategoryWhereInput
  }


  /**
   * RealEstateSuperCategory.real_estate_sub_categories
   */
  export type RealEstateSuperCategory$real_estate_sub_categoriesArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSubCategory
     */
    select?: RealEstateSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSubCategoryInclude | null
    where?: RealEstateSubCategoryWhereInput
    orderBy?: Enumerable<RealEstateSubCategoryOrderByWithRelationInput>
    cursor?: RealEstateSubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RealEstateSubCategoryScalarFieldEnum>
  }


  /**
   * RealEstateSuperCategory without action
   */
  export type RealEstateSuperCategoryArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSuperCategory
     */
    select?: RealEstateSuperCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSuperCategoryInclude | null
  }



  /**
   * Model RealEstateSubCategory
   */


  export type AggregateRealEstateSubCategory = {
    _count: RealEstateSubCategoryCountAggregateOutputType | null
    _min: RealEstateSubCategoryMinAggregateOutputType | null
    _max: RealEstateSubCategoryMaxAggregateOutputType | null
  }

  export type RealEstateSubCategoryMinAggregateOutputType = {
    id: string | null
    super_id: string | null
    name: string | null
  }

  export type RealEstateSubCategoryMaxAggregateOutputType = {
    id: string | null
    super_id: string | null
    name: string | null
  }

  export type RealEstateSubCategoryCountAggregateOutputType = {
    id: number
    super_id: number
    name: number
    _all: number
  }


  export type RealEstateSubCategoryMinAggregateInputType = {
    id?: true
    super_id?: true
    name?: true
  }

  export type RealEstateSubCategoryMaxAggregateInputType = {
    id?: true
    super_id?: true
    name?: true
  }

  export type RealEstateSubCategoryCountAggregateInputType = {
    id?: true
    super_id?: true
    name?: true
    _all?: true
  }

  export type RealEstateSubCategoryAggregateArgs = {
    /**
     * Filter which RealEstateSubCategory to aggregate.
     */
    where?: RealEstateSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSubCategories to fetch.
     */
    orderBy?: Enumerable<RealEstateSubCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RealEstateSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RealEstateSubCategories
    **/
    _count?: true | RealEstateSubCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealEstateSubCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealEstateSubCategoryMaxAggregateInputType
  }

  export type GetRealEstateSubCategoryAggregateType<T extends RealEstateSubCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRealEstateSubCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealEstateSubCategory[P]>
      : GetScalarType<T[P], AggregateRealEstateSubCategory[P]>
  }




  export type RealEstateSubCategoryGroupByArgs = {
    where?: RealEstateSubCategoryWhereInput
    orderBy?: Enumerable<RealEstateSubCategoryOrderByWithAggregationInput>
    by: RealEstateSubCategoryScalarFieldEnum[]
    having?: RealEstateSubCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealEstateSubCategoryCountAggregateInputType | true
    _min?: RealEstateSubCategoryMinAggregateInputType
    _max?: RealEstateSubCategoryMaxAggregateInputType
  }


  export type RealEstateSubCategoryGroupByOutputType = {
    id: string
    super_id: string
    name: string
    _count: RealEstateSubCategoryCountAggregateOutputType | null
    _min: RealEstateSubCategoryMinAggregateOutputType | null
    _max: RealEstateSubCategoryMaxAggregateOutputType | null
  }

  type GetRealEstateSubCategoryGroupByPayload<T extends RealEstateSubCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RealEstateSubCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealEstateSubCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealEstateSubCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], RealEstateSubCategoryGroupByOutputType[P]>
        }
      >
    >


  export type RealEstateSubCategorySelect = {
    id?: boolean
    super_id?: boolean
    name?: boolean
    real_estate_specialized_fields?: boolean | RealEstateSubCategory$real_estate_specialized_fieldsArgs
    super?: boolean | RealEstateSuperCategoryArgs
    _count?: boolean | RealEstateSubCategoryCountOutputTypeArgs
  }


  export type RealEstateSubCategoryInclude = {
    real_estate_specialized_fields?: boolean | RealEstateSubCategory$real_estate_specialized_fieldsArgs
    super?: boolean | RealEstateSuperCategoryArgs
    _count?: boolean | RealEstateSubCategoryCountOutputTypeArgs
  }

  export type RealEstateSubCategoryGetPayload<S extends boolean | null | undefined | RealEstateSubCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RealEstateSubCategory :
    S extends undefined ? never :
    S extends { include: any } & (RealEstateSubCategoryArgs | RealEstateSubCategoryFindManyArgs)
    ? RealEstateSubCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'real_estate_specialized_fields' ? Array < RealEstateSpecializedFieldGetPayload<S['include'][P]>>  :
        P extends 'super' ? RealEstateSuperCategoryGetPayload<S['include'][P]> :
        P extends '_count' ? RealEstateSubCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RealEstateSubCategoryArgs | RealEstateSubCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'real_estate_specialized_fields' ? Array < RealEstateSpecializedFieldGetPayload<S['select'][P]>>  :
        P extends 'super' ? RealEstateSuperCategoryGetPayload<S['select'][P]> :
        P extends '_count' ? RealEstateSubCategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof RealEstateSubCategory ? RealEstateSubCategory[P] : never
  } 
      : RealEstateSubCategory


  type RealEstateSubCategoryCountArgs = 
    Omit<RealEstateSubCategoryFindManyArgs, 'select' | 'include'> & {
      select?: RealEstateSubCategoryCountAggregateInputType | true
    }

  export interface RealEstateSubCategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RealEstateSubCategory that matches the filter.
     * @param {RealEstateSubCategoryFindUniqueArgs} args - Arguments to find a RealEstateSubCategory
     * @example
     * // Get one RealEstateSubCategory
     * const realEstateSubCategory = await prisma.realEstateSubCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RealEstateSubCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RealEstateSubCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RealEstateSubCategory'> extends True ? Prisma__RealEstateSubCategoryClient<RealEstateSubCategoryGetPayload<T>> : Prisma__RealEstateSubCategoryClient<RealEstateSubCategoryGetPayload<T> | null, null>

    /**
     * Find one RealEstateSubCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RealEstateSubCategoryFindUniqueOrThrowArgs} args - Arguments to find a RealEstateSubCategory
     * @example
     * // Get one RealEstateSubCategory
     * const realEstateSubCategory = await prisma.realEstateSubCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RealEstateSubCategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RealEstateSubCategoryFindUniqueOrThrowArgs>
    ): Prisma__RealEstateSubCategoryClient<RealEstateSubCategoryGetPayload<T>>

    /**
     * Find the first RealEstateSubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSubCategoryFindFirstArgs} args - Arguments to find a RealEstateSubCategory
     * @example
     * // Get one RealEstateSubCategory
     * const realEstateSubCategory = await prisma.realEstateSubCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RealEstateSubCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RealEstateSubCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RealEstateSubCategory'> extends True ? Prisma__RealEstateSubCategoryClient<RealEstateSubCategoryGetPayload<T>> : Prisma__RealEstateSubCategoryClient<RealEstateSubCategoryGetPayload<T> | null, null>

    /**
     * Find the first RealEstateSubCategory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSubCategoryFindFirstOrThrowArgs} args - Arguments to find a RealEstateSubCategory
     * @example
     * // Get one RealEstateSubCategory
     * const realEstateSubCategory = await prisma.realEstateSubCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RealEstateSubCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RealEstateSubCategoryFindFirstOrThrowArgs>
    ): Prisma__RealEstateSubCategoryClient<RealEstateSubCategoryGetPayload<T>>

    /**
     * Find zero or more RealEstateSubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSubCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RealEstateSubCategories
     * const realEstateSubCategories = await prisma.realEstateSubCategory.findMany()
     * 
     * // Get first 10 RealEstateSubCategories
     * const realEstateSubCategories = await prisma.realEstateSubCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const realEstateSubCategoryWithIdOnly = await prisma.realEstateSubCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RealEstateSubCategoryFindManyArgs>(
      args?: SelectSubset<T, RealEstateSubCategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<RealEstateSubCategoryGetPayload<T>>>

    /**
     * Create a RealEstateSubCategory.
     * @param {RealEstateSubCategoryCreateArgs} args - Arguments to create a RealEstateSubCategory.
     * @example
     * // Create one RealEstateSubCategory
     * const RealEstateSubCategory = await prisma.realEstateSubCategory.create({
     *   data: {
     *     // ... data to create a RealEstateSubCategory
     *   }
     * })
     * 
    **/
    create<T extends RealEstateSubCategoryCreateArgs>(
      args: SelectSubset<T, RealEstateSubCategoryCreateArgs>
    ): Prisma__RealEstateSubCategoryClient<RealEstateSubCategoryGetPayload<T>>

    /**
     * Create many RealEstateSubCategories.
     *     @param {RealEstateSubCategoryCreateManyArgs} args - Arguments to create many RealEstateSubCategories.
     *     @example
     *     // Create many RealEstateSubCategories
     *     const realEstateSubCategory = await prisma.realEstateSubCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RealEstateSubCategoryCreateManyArgs>(
      args?: SelectSubset<T, RealEstateSubCategoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RealEstateSubCategory.
     * @param {RealEstateSubCategoryDeleteArgs} args - Arguments to delete one RealEstateSubCategory.
     * @example
     * // Delete one RealEstateSubCategory
     * const RealEstateSubCategory = await prisma.realEstateSubCategory.delete({
     *   where: {
     *     // ... filter to delete one RealEstateSubCategory
     *   }
     * })
     * 
    **/
    delete<T extends RealEstateSubCategoryDeleteArgs>(
      args: SelectSubset<T, RealEstateSubCategoryDeleteArgs>
    ): Prisma__RealEstateSubCategoryClient<RealEstateSubCategoryGetPayload<T>>

    /**
     * Update one RealEstateSubCategory.
     * @param {RealEstateSubCategoryUpdateArgs} args - Arguments to update one RealEstateSubCategory.
     * @example
     * // Update one RealEstateSubCategory
     * const realEstateSubCategory = await prisma.realEstateSubCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RealEstateSubCategoryUpdateArgs>(
      args: SelectSubset<T, RealEstateSubCategoryUpdateArgs>
    ): Prisma__RealEstateSubCategoryClient<RealEstateSubCategoryGetPayload<T>>

    /**
     * Delete zero or more RealEstateSubCategories.
     * @param {RealEstateSubCategoryDeleteManyArgs} args - Arguments to filter RealEstateSubCategories to delete.
     * @example
     * // Delete a few RealEstateSubCategories
     * const { count } = await prisma.realEstateSubCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RealEstateSubCategoryDeleteManyArgs>(
      args?: SelectSubset<T, RealEstateSubCategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RealEstateSubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSubCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RealEstateSubCategories
     * const realEstateSubCategory = await prisma.realEstateSubCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RealEstateSubCategoryUpdateManyArgs>(
      args: SelectSubset<T, RealEstateSubCategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RealEstateSubCategory.
     * @param {RealEstateSubCategoryUpsertArgs} args - Arguments to update or create a RealEstateSubCategory.
     * @example
     * // Update or create a RealEstateSubCategory
     * const realEstateSubCategory = await prisma.realEstateSubCategory.upsert({
     *   create: {
     *     // ... data to create a RealEstateSubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RealEstateSubCategory we want to update
     *   }
     * })
    **/
    upsert<T extends RealEstateSubCategoryUpsertArgs>(
      args: SelectSubset<T, RealEstateSubCategoryUpsertArgs>
    ): Prisma__RealEstateSubCategoryClient<RealEstateSubCategoryGetPayload<T>>

    /**
     * Count the number of RealEstateSubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSubCategoryCountArgs} args - Arguments to filter RealEstateSubCategories to count.
     * @example
     * // Count the number of RealEstateSubCategories
     * const count = await prisma.realEstateSubCategory.count({
     *   where: {
     *     // ... the filter for the RealEstateSubCategories we want to count
     *   }
     * })
    **/
    count<T extends RealEstateSubCategoryCountArgs>(
      args?: Subset<T, RealEstateSubCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealEstateSubCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RealEstateSubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RealEstateSubCategoryAggregateArgs>(args: Subset<T, RealEstateSubCategoryAggregateArgs>): Prisma.PrismaPromise<GetRealEstateSubCategoryAggregateType<T>>

    /**
     * Group by RealEstateSubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSubCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RealEstateSubCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealEstateSubCategoryGroupByArgs['orderBy'] }
        : { orderBy?: RealEstateSubCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RealEstateSubCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealEstateSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RealEstateSubCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RealEstateSubCategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    real_estate_specialized_fields<T extends RealEstateSubCategory$real_estate_specialized_fieldsArgs= {}>(args?: Subset<T, RealEstateSubCategory$real_estate_specialized_fieldsArgs>): Prisma.PrismaPromise<Array<RealEstateSpecializedFieldGetPayload<T>>| Null>;

    super<T extends RealEstateSuperCategoryArgs= {}>(args?: Subset<T, RealEstateSuperCategoryArgs>): Prisma__RealEstateSuperCategoryClient<RealEstateSuperCategoryGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RealEstateSubCategory base type for findUnique actions
   */
  export type RealEstateSubCategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RealEstateSubCategory
     */
    select?: RealEstateSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSubCategoryInclude | null
    /**
     * Filter, which RealEstateSubCategory to fetch.
     */
    where: RealEstateSubCategoryWhereUniqueInput
  }

  /**
   * RealEstateSubCategory findUnique
   */
  export interface RealEstateSubCategoryFindUniqueArgs extends RealEstateSubCategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealEstateSubCategory findUniqueOrThrow
   */
  export type RealEstateSubCategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSubCategory
     */
    select?: RealEstateSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSubCategoryInclude | null
    /**
     * Filter, which RealEstateSubCategory to fetch.
     */
    where: RealEstateSubCategoryWhereUniqueInput
  }


  /**
   * RealEstateSubCategory base type for findFirst actions
   */
  export type RealEstateSubCategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RealEstateSubCategory
     */
    select?: RealEstateSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSubCategoryInclude | null
    /**
     * Filter, which RealEstateSubCategory to fetch.
     */
    where?: RealEstateSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSubCategories to fetch.
     */
    orderBy?: Enumerable<RealEstateSubCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstateSubCategories.
     */
    cursor?: RealEstateSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstateSubCategories.
     */
    distinct?: Enumerable<RealEstateSubCategoryScalarFieldEnum>
  }

  /**
   * RealEstateSubCategory findFirst
   */
  export interface RealEstateSubCategoryFindFirstArgs extends RealEstateSubCategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealEstateSubCategory findFirstOrThrow
   */
  export type RealEstateSubCategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSubCategory
     */
    select?: RealEstateSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSubCategoryInclude | null
    /**
     * Filter, which RealEstateSubCategory to fetch.
     */
    where?: RealEstateSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSubCategories to fetch.
     */
    orderBy?: Enumerable<RealEstateSubCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstateSubCategories.
     */
    cursor?: RealEstateSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstateSubCategories.
     */
    distinct?: Enumerable<RealEstateSubCategoryScalarFieldEnum>
  }


  /**
   * RealEstateSubCategory findMany
   */
  export type RealEstateSubCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSubCategory
     */
    select?: RealEstateSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSubCategoryInclude | null
    /**
     * Filter, which RealEstateSubCategories to fetch.
     */
    where?: RealEstateSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSubCategories to fetch.
     */
    orderBy?: Enumerable<RealEstateSubCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RealEstateSubCategories.
     */
    cursor?: RealEstateSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSubCategories.
     */
    skip?: number
    distinct?: Enumerable<RealEstateSubCategoryScalarFieldEnum>
  }


  /**
   * RealEstateSubCategory create
   */
  export type RealEstateSubCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSubCategory
     */
    select?: RealEstateSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSubCategoryInclude | null
    /**
     * The data needed to create a RealEstateSubCategory.
     */
    data: XOR<RealEstateSubCategoryCreateInput, RealEstateSubCategoryUncheckedCreateInput>
  }


  /**
   * RealEstateSubCategory createMany
   */
  export type RealEstateSubCategoryCreateManyArgs = {
    /**
     * The data used to create many RealEstateSubCategories.
     */
    data: Enumerable<RealEstateSubCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RealEstateSubCategory update
   */
  export type RealEstateSubCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSubCategory
     */
    select?: RealEstateSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSubCategoryInclude | null
    /**
     * The data needed to update a RealEstateSubCategory.
     */
    data: XOR<RealEstateSubCategoryUpdateInput, RealEstateSubCategoryUncheckedUpdateInput>
    /**
     * Choose, which RealEstateSubCategory to update.
     */
    where: RealEstateSubCategoryWhereUniqueInput
  }


  /**
   * RealEstateSubCategory updateMany
   */
  export type RealEstateSubCategoryUpdateManyArgs = {
    /**
     * The data used to update RealEstateSubCategories.
     */
    data: XOR<RealEstateSubCategoryUpdateManyMutationInput, RealEstateSubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which RealEstateSubCategories to update
     */
    where?: RealEstateSubCategoryWhereInput
  }


  /**
   * RealEstateSubCategory upsert
   */
  export type RealEstateSubCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSubCategory
     */
    select?: RealEstateSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSubCategoryInclude | null
    /**
     * The filter to search for the RealEstateSubCategory to update in case it exists.
     */
    where: RealEstateSubCategoryWhereUniqueInput
    /**
     * In case the RealEstateSubCategory found by the `where` argument doesn't exist, create a new RealEstateSubCategory with this data.
     */
    create: XOR<RealEstateSubCategoryCreateInput, RealEstateSubCategoryUncheckedCreateInput>
    /**
     * In case the RealEstateSubCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RealEstateSubCategoryUpdateInput, RealEstateSubCategoryUncheckedUpdateInput>
  }


  /**
   * RealEstateSubCategory delete
   */
  export type RealEstateSubCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSubCategory
     */
    select?: RealEstateSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSubCategoryInclude | null
    /**
     * Filter which RealEstateSubCategory to delete.
     */
    where: RealEstateSubCategoryWhereUniqueInput
  }


  /**
   * RealEstateSubCategory deleteMany
   */
  export type RealEstateSubCategoryDeleteManyArgs = {
    /**
     * Filter which RealEstateSubCategories to delete
     */
    where?: RealEstateSubCategoryWhereInput
  }


  /**
   * RealEstateSubCategory.real_estate_specialized_fields
   */
  export type RealEstateSubCategory$real_estate_specialized_fieldsArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedField
     */
    select?: RealEstateSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedFieldInclude | null
    where?: RealEstateSpecializedFieldWhereInput
    orderBy?: Enumerable<RealEstateSpecializedFieldOrderByWithRelationInput>
    cursor?: RealEstateSpecializedFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RealEstateSpecializedFieldScalarFieldEnum>
  }


  /**
   * RealEstateSubCategory without action
   */
  export type RealEstateSubCategoryArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSubCategory
     */
    select?: RealEstateSubCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSubCategoryInclude | null
  }



  /**
   * Model UserAuthentication
   */


  export type AggregateUserAuthentication = {
    _count: UserAuthenticationCountAggregateOutputType | null
    _min: UserAuthenticationMinAggregateOutputType | null
    _max: UserAuthenticationMaxAggregateOutputType | null
  }

  export type UserAuthenticationMinAggregateOutputType = {
    id: string | null
    oauth_sub: string | null
    oauth_type: string | null
  }

  export type UserAuthenticationMaxAggregateOutputType = {
    id: string | null
    oauth_sub: string | null
    oauth_type: string | null
  }

  export type UserAuthenticationCountAggregateOutputType = {
    id: number
    oauth_sub: number
    oauth_type: number
    _all: number
  }


  export type UserAuthenticationMinAggregateInputType = {
    id?: true
    oauth_sub?: true
    oauth_type?: true
  }

  export type UserAuthenticationMaxAggregateInputType = {
    id?: true
    oauth_sub?: true
    oauth_type?: true
  }

  export type UserAuthenticationCountAggregateInputType = {
    id?: true
    oauth_sub?: true
    oauth_type?: true
    _all?: true
  }

  export type UserAuthenticationAggregateArgs = {
    /**
     * Filter which UserAuthentication to aggregate.
     */
    where?: UserAuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuthentications to fetch.
     */
    orderBy?: Enumerable<UserAuthenticationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuthentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuthentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAuthentications
    **/
    _count?: true | UserAuthenticationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAuthenticationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAuthenticationMaxAggregateInputType
  }

  export type GetUserAuthenticationAggregateType<T extends UserAuthenticationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAuthentication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAuthentication[P]>
      : GetScalarType<T[P], AggregateUserAuthentication[P]>
  }




  export type UserAuthenticationGroupByArgs = {
    where?: UserAuthenticationWhereInput
    orderBy?: Enumerable<UserAuthenticationOrderByWithAggregationInput>
    by: UserAuthenticationScalarFieldEnum[]
    having?: UserAuthenticationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAuthenticationCountAggregateInputType | true
    _min?: UserAuthenticationMinAggregateInputType
    _max?: UserAuthenticationMaxAggregateInputType
  }


  export type UserAuthenticationGroupByOutputType = {
    id: string
    oauth_sub: string
    oauth_type: string
    _count: UserAuthenticationCountAggregateOutputType | null
    _min: UserAuthenticationMinAggregateOutputType | null
    _max: UserAuthenticationMaxAggregateOutputType | null
  }

  type GetUserAuthenticationGroupByPayload<T extends UserAuthenticationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserAuthenticationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAuthenticationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAuthenticationGroupByOutputType[P]>
            : GetScalarType<T[P], UserAuthenticationGroupByOutputType[P]>
        }
      >
    >


  export type UserAuthenticationSelect = {
    id?: boolean
    oauth_sub?: boolean
    oauth_type?: boolean
    users?: boolean | UserAuthentication$usersArgs
    _count?: boolean | UserAuthenticationCountOutputTypeArgs
  }


  export type UserAuthenticationInclude = {
    users?: boolean | UserAuthentication$usersArgs
    _count?: boolean | UserAuthenticationCountOutputTypeArgs
  }

  export type UserAuthenticationGetPayload<S extends boolean | null | undefined | UserAuthenticationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserAuthentication :
    S extends undefined ? never :
    S extends { include: any } & (UserAuthenticationArgs | UserAuthenticationFindManyArgs)
    ? UserAuthentication  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserAuthenticationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserAuthenticationArgs | UserAuthenticationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserAuthenticationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof UserAuthentication ? UserAuthentication[P] : never
  } 
      : UserAuthentication


  type UserAuthenticationCountArgs = 
    Omit<UserAuthenticationFindManyArgs, 'select' | 'include'> & {
      select?: UserAuthenticationCountAggregateInputType | true
    }

  export interface UserAuthenticationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserAuthentication that matches the filter.
     * @param {UserAuthenticationFindUniqueArgs} args - Arguments to find a UserAuthentication
     * @example
     * // Get one UserAuthentication
     * const userAuthentication = await prisma.userAuthentication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserAuthenticationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserAuthenticationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserAuthentication'> extends True ? Prisma__UserAuthenticationClient<UserAuthenticationGetPayload<T>> : Prisma__UserAuthenticationClient<UserAuthenticationGetPayload<T> | null, null>

    /**
     * Find one UserAuthentication that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserAuthenticationFindUniqueOrThrowArgs} args - Arguments to find a UserAuthentication
     * @example
     * // Get one UserAuthentication
     * const userAuthentication = await prisma.userAuthentication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserAuthenticationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserAuthenticationFindUniqueOrThrowArgs>
    ): Prisma__UserAuthenticationClient<UserAuthenticationGetPayload<T>>

    /**
     * Find the first UserAuthentication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthenticationFindFirstArgs} args - Arguments to find a UserAuthentication
     * @example
     * // Get one UserAuthentication
     * const userAuthentication = await prisma.userAuthentication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserAuthenticationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserAuthenticationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserAuthentication'> extends True ? Prisma__UserAuthenticationClient<UserAuthenticationGetPayload<T>> : Prisma__UserAuthenticationClient<UserAuthenticationGetPayload<T> | null, null>

    /**
     * Find the first UserAuthentication that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthenticationFindFirstOrThrowArgs} args - Arguments to find a UserAuthentication
     * @example
     * // Get one UserAuthentication
     * const userAuthentication = await prisma.userAuthentication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserAuthenticationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserAuthenticationFindFirstOrThrowArgs>
    ): Prisma__UserAuthenticationClient<UserAuthenticationGetPayload<T>>

    /**
     * Find zero or more UserAuthentications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthenticationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAuthentications
     * const userAuthentications = await prisma.userAuthentication.findMany()
     * 
     * // Get first 10 UserAuthentications
     * const userAuthentications = await prisma.userAuthentication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAuthenticationWithIdOnly = await prisma.userAuthentication.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserAuthenticationFindManyArgs>(
      args?: SelectSubset<T, UserAuthenticationFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserAuthenticationGetPayload<T>>>

    /**
     * Create a UserAuthentication.
     * @param {UserAuthenticationCreateArgs} args - Arguments to create a UserAuthentication.
     * @example
     * // Create one UserAuthentication
     * const UserAuthentication = await prisma.userAuthentication.create({
     *   data: {
     *     // ... data to create a UserAuthentication
     *   }
     * })
     * 
    **/
    create<T extends UserAuthenticationCreateArgs>(
      args: SelectSubset<T, UserAuthenticationCreateArgs>
    ): Prisma__UserAuthenticationClient<UserAuthenticationGetPayload<T>>

    /**
     * Create many UserAuthentications.
     *     @param {UserAuthenticationCreateManyArgs} args - Arguments to create many UserAuthentications.
     *     @example
     *     // Create many UserAuthentications
     *     const userAuthentication = await prisma.userAuthentication.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserAuthenticationCreateManyArgs>(
      args?: SelectSubset<T, UserAuthenticationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAuthentication.
     * @param {UserAuthenticationDeleteArgs} args - Arguments to delete one UserAuthentication.
     * @example
     * // Delete one UserAuthentication
     * const UserAuthentication = await prisma.userAuthentication.delete({
     *   where: {
     *     // ... filter to delete one UserAuthentication
     *   }
     * })
     * 
    **/
    delete<T extends UserAuthenticationDeleteArgs>(
      args: SelectSubset<T, UserAuthenticationDeleteArgs>
    ): Prisma__UserAuthenticationClient<UserAuthenticationGetPayload<T>>

    /**
     * Update one UserAuthentication.
     * @param {UserAuthenticationUpdateArgs} args - Arguments to update one UserAuthentication.
     * @example
     * // Update one UserAuthentication
     * const userAuthentication = await prisma.userAuthentication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserAuthenticationUpdateArgs>(
      args: SelectSubset<T, UserAuthenticationUpdateArgs>
    ): Prisma__UserAuthenticationClient<UserAuthenticationGetPayload<T>>

    /**
     * Delete zero or more UserAuthentications.
     * @param {UserAuthenticationDeleteManyArgs} args - Arguments to filter UserAuthentications to delete.
     * @example
     * // Delete a few UserAuthentications
     * const { count } = await prisma.userAuthentication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserAuthenticationDeleteManyArgs>(
      args?: SelectSubset<T, UserAuthenticationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAuthentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthenticationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAuthentications
     * const userAuthentication = await prisma.userAuthentication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserAuthenticationUpdateManyArgs>(
      args: SelectSubset<T, UserAuthenticationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAuthentication.
     * @param {UserAuthenticationUpsertArgs} args - Arguments to update or create a UserAuthentication.
     * @example
     * // Update or create a UserAuthentication
     * const userAuthentication = await prisma.userAuthentication.upsert({
     *   create: {
     *     // ... data to create a UserAuthentication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAuthentication we want to update
     *   }
     * })
    **/
    upsert<T extends UserAuthenticationUpsertArgs>(
      args: SelectSubset<T, UserAuthenticationUpsertArgs>
    ): Prisma__UserAuthenticationClient<UserAuthenticationGetPayload<T>>

    /**
     * Count the number of UserAuthentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthenticationCountArgs} args - Arguments to filter UserAuthentications to count.
     * @example
     * // Count the number of UserAuthentications
     * const count = await prisma.userAuthentication.count({
     *   where: {
     *     // ... the filter for the UserAuthentications we want to count
     *   }
     * })
    **/
    count<T extends UserAuthenticationCountArgs>(
      args?: Subset<T, UserAuthenticationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAuthenticationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAuthentication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthenticationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAuthenticationAggregateArgs>(args: Subset<T, UserAuthenticationAggregateArgs>): Prisma.PrismaPromise<GetUserAuthenticationAggregateType<T>>

    /**
     * Group by UserAuthentication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthenticationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAuthenticationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAuthenticationGroupByArgs['orderBy'] }
        : { orderBy?: UserAuthenticationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAuthenticationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAuthenticationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAuthentication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserAuthenticationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    users<T extends UserAuthentication$usersArgs= {}>(args?: Subset<T, UserAuthentication$usersArgs>): Prisma.PrismaPromise<Array<UserGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserAuthentication base type for findUnique actions
   */
  export type UserAuthenticationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserAuthentication
     */
    select?: UserAuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthenticationInclude | null
    /**
     * Filter, which UserAuthentication to fetch.
     */
    where: UserAuthenticationWhereUniqueInput
  }

  /**
   * UserAuthentication findUnique
   */
  export interface UserAuthenticationFindUniqueArgs extends UserAuthenticationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserAuthentication findUniqueOrThrow
   */
  export type UserAuthenticationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserAuthentication
     */
    select?: UserAuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthenticationInclude | null
    /**
     * Filter, which UserAuthentication to fetch.
     */
    where: UserAuthenticationWhereUniqueInput
  }


  /**
   * UserAuthentication base type for findFirst actions
   */
  export type UserAuthenticationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserAuthentication
     */
    select?: UserAuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthenticationInclude | null
    /**
     * Filter, which UserAuthentication to fetch.
     */
    where?: UserAuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuthentications to fetch.
     */
    orderBy?: Enumerable<UserAuthenticationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAuthentications.
     */
    cursor?: UserAuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuthentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuthentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAuthentications.
     */
    distinct?: Enumerable<UserAuthenticationScalarFieldEnum>
  }

  /**
   * UserAuthentication findFirst
   */
  export interface UserAuthenticationFindFirstArgs extends UserAuthenticationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserAuthentication findFirstOrThrow
   */
  export type UserAuthenticationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserAuthentication
     */
    select?: UserAuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthenticationInclude | null
    /**
     * Filter, which UserAuthentication to fetch.
     */
    where?: UserAuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuthentications to fetch.
     */
    orderBy?: Enumerable<UserAuthenticationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAuthentications.
     */
    cursor?: UserAuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuthentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuthentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAuthentications.
     */
    distinct?: Enumerable<UserAuthenticationScalarFieldEnum>
  }


  /**
   * UserAuthentication findMany
   */
  export type UserAuthenticationFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserAuthentication
     */
    select?: UserAuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthenticationInclude | null
    /**
     * Filter, which UserAuthentications to fetch.
     */
    where?: UserAuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuthentications to fetch.
     */
    orderBy?: Enumerable<UserAuthenticationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAuthentications.
     */
    cursor?: UserAuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuthentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuthentications.
     */
    skip?: number
    distinct?: Enumerable<UserAuthenticationScalarFieldEnum>
  }


  /**
   * UserAuthentication create
   */
  export type UserAuthenticationCreateArgs = {
    /**
     * Select specific fields to fetch from the UserAuthentication
     */
    select?: UserAuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthenticationInclude | null
    /**
     * The data needed to create a UserAuthentication.
     */
    data: XOR<UserAuthenticationCreateInput, UserAuthenticationUncheckedCreateInput>
  }


  /**
   * UserAuthentication createMany
   */
  export type UserAuthenticationCreateManyArgs = {
    /**
     * The data used to create many UserAuthentications.
     */
    data: Enumerable<UserAuthenticationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserAuthentication update
   */
  export type UserAuthenticationUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserAuthentication
     */
    select?: UserAuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthenticationInclude | null
    /**
     * The data needed to update a UserAuthentication.
     */
    data: XOR<UserAuthenticationUpdateInput, UserAuthenticationUncheckedUpdateInput>
    /**
     * Choose, which UserAuthentication to update.
     */
    where: UserAuthenticationWhereUniqueInput
  }


  /**
   * UserAuthentication updateMany
   */
  export type UserAuthenticationUpdateManyArgs = {
    /**
     * The data used to update UserAuthentications.
     */
    data: XOR<UserAuthenticationUpdateManyMutationInput, UserAuthenticationUncheckedUpdateManyInput>
    /**
     * Filter which UserAuthentications to update
     */
    where?: UserAuthenticationWhereInput
  }


  /**
   * UserAuthentication upsert
   */
  export type UserAuthenticationUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserAuthentication
     */
    select?: UserAuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthenticationInclude | null
    /**
     * The filter to search for the UserAuthentication to update in case it exists.
     */
    where: UserAuthenticationWhereUniqueInput
    /**
     * In case the UserAuthentication found by the `where` argument doesn't exist, create a new UserAuthentication with this data.
     */
    create: XOR<UserAuthenticationCreateInput, UserAuthenticationUncheckedCreateInput>
    /**
     * In case the UserAuthentication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAuthenticationUpdateInput, UserAuthenticationUncheckedUpdateInput>
  }


  /**
   * UserAuthentication delete
   */
  export type UserAuthenticationDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserAuthentication
     */
    select?: UserAuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthenticationInclude | null
    /**
     * Filter which UserAuthentication to delete.
     */
    where: UserAuthenticationWhereUniqueInput
  }


  /**
   * UserAuthentication deleteMany
   */
  export type UserAuthenticationDeleteManyArgs = {
    /**
     * Filter which UserAuthentications to delete
     */
    where?: UserAuthenticationWhereInput
  }


  /**
   * UserAuthentication.users
   */
  export type UserAuthentication$usersArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * UserAuthentication without action
   */
  export type UserAuthenticationArgs = {
    /**
     * Select specific fields to fetch from the UserAuthentication
     */
    select?: UserAuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthenticationInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    auth_id: string | null
    name: string | null
    email: string | null
    email_verified: boolean | null
    phone: string | null
    address_first: string | null
    address_second: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    auth_id: string | null
    name: string | null
    email: string | null
    email_verified: boolean | null
    phone: string | null
    address_first: string | null
    address_second: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    auth_id: number
    name: number
    email: number
    email_verified: number
    phone: number
    address_first: number
    address_second: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    auth_id?: true
    name?: true
    email?: true
    email_verified?: true
    phone?: true
    address_first?: true
    address_second?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    auth_id?: true
    name?: true
    email?: true
    email_verified?: true
    phone?: true
    address_first?: true
    address_second?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    auth_id?: true
    name?: true
    email?: true
    email_verified?: true
    phone?: true
    address_first?: true
    address_second?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    auth_id: string
    name: string
    email: string
    email_verified: boolean
    phone: string
    address_first: string
    address_second: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    auth_id?: boolean
    name?: boolean
    email?: boolean
    email_verified?: boolean
    phone?: boolean
    address_first?: boolean
    address_second?: boolean
    board_articles?: boolean | User$board_articlesArgs
    board_comments?: boolean | User$board_commentsArgs
    business_user?: boolean | BusinessUserArgs
    customer?: boolean | CustomerArgs
    auth?: boolean | UserAuthenticationArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    board_articles?: boolean | User$board_articlesArgs
    board_comments?: boolean | User$board_commentsArgs
    business_user?: boolean | BusinessUserArgs
    customer?: boolean | CustomerArgs
    auth?: boolean | UserAuthenticationArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'board_articles' ? Array < BoardArticleGetPayload<S['include'][P]>>  :
        P extends 'board_comments' ? Array < BoardCommentGetPayload<S['include'][P]>>  :
        P extends 'business_user' ? BusinessUserGetPayload<S['include'][P]> | null :
        P extends 'customer' ? CustomerGetPayload<S['include'][P]> | null :
        P extends 'auth' ? UserAuthenticationGetPayload<S['include'][P]> :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'board_articles' ? Array < BoardArticleGetPayload<S['select'][P]>>  :
        P extends 'board_comments' ? Array < BoardCommentGetPayload<S['select'][P]>>  :
        P extends 'business_user' ? BusinessUserGetPayload<S['select'][P]> | null :
        P extends 'customer' ? CustomerGetPayload<S['select'][P]> | null :
        P extends 'auth' ? UserAuthenticationGetPayload<S['select'][P]> :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    board_articles<T extends User$board_articlesArgs= {}>(args?: Subset<T, User$board_articlesArgs>): Prisma.PrismaPromise<Array<BoardArticleGetPayload<T>>| Null>;

    board_comments<T extends User$board_commentsArgs= {}>(args?: Subset<T, User$board_commentsArgs>): Prisma.PrismaPromise<Array<BoardCommentGetPayload<T>>| Null>;

    business_user<T extends BusinessUserArgs= {}>(args?: Subset<T, BusinessUserArgs>): Prisma__BusinessUserClient<BusinessUserGetPayload<T> | Null>;

    customer<T extends CustomerArgs= {}>(args?: Subset<T, CustomerArgs>): Prisma__CustomerClient<CustomerGetPayload<T> | Null>;

    auth<T extends UserAuthenticationArgs= {}>(args?: Subset<T, UserAuthenticationArgs>): Prisma__UserAuthenticationClient<UserAuthenticationGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.board_articles
   */
  export type User$board_articlesArgs = {
    /**
     * Select specific fields to fetch from the BoardArticle
     */
    select?: BoardArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleInclude | null
    where?: BoardArticleWhereInput
    orderBy?: Enumerable<BoardArticleOrderByWithRelationInput>
    cursor?: BoardArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BoardArticleScalarFieldEnum>
  }


  /**
   * User.board_comments
   */
  export type User$board_commentsArgs = {
    /**
     * Select specific fields to fetch from the BoardComment
     */
    select?: BoardCommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentInclude | null
    where?: BoardCommentWhereInput
    orderBy?: Enumerable<BoardCommentOrderByWithRelationInput>
    cursor?: BoardCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BoardCommentScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Customer
   */


  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    birth: string | null
    gender: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    birth: string | null
    gender: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    birth: number
    gender: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    birth?: true
    gender?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    birth?: true
    gender?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    birth?: true
    gender?: true
    _all?: true
  }

  export type CustomerAggregateArgs = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs = {
    where?: CustomerWhereInput
    orderBy?: Enumerable<CustomerOrderByWithAggregationInput>
    by: CustomerScalarFieldEnum[]
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }


  export type CustomerGroupByOutputType = {
    id: string
    birth: string | null
    gender: string | null
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect = {
    id?: boolean
    birth?: boolean
    gender?: boolean
    business_rates?: boolean | Customer$business_ratesArgs
    business_reviews?: boolean | Customer$business_reviewsArgs
    user?: boolean | UserArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }


  export type CustomerInclude = {
    business_rates?: boolean | Customer$business_ratesArgs
    business_reviews?: boolean | Customer$business_reviewsArgs
    user?: boolean | UserArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }

  export type CustomerGetPayload<S extends boolean | null | undefined | CustomerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Customer :
    S extends undefined ? never :
    S extends { include: any } & (CustomerArgs | CustomerFindManyArgs)
    ? Customer  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'business_rates' ? Array < BusinessRateGetPayload<S['include'][P]>>  :
        P extends 'business_reviews' ? Array < BusinessReviewGetPayload<S['include'][P]>>  :
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CustomerArgs | CustomerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'business_rates' ? Array < BusinessRateGetPayload<S['select'][P]>>  :
        P extends 'business_reviews' ? Array < BusinessReviewGetPayload<S['select'][P]>>  :
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Customer ? Customer[P] : never
  } 
      : Customer


  type CustomerCountArgs = 
    Omit<CustomerFindManyArgs, 'select' | 'include'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CustomerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Customer'> extends True ? Prisma__CustomerClient<CustomerGetPayload<T>> : Prisma__CustomerClient<CustomerGetPayload<T> | null, null>

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CustomerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Customer'> extends True ? Prisma__CustomerClient<CustomerGetPayload<T>> : Prisma__CustomerClient<CustomerGetPayload<T> | null, null>

    /**
     * Find the first Customer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs>(
      args?: SelectSubset<T, CustomerFindManyArgs>
    ): Prisma.PrismaPromise<Array<CustomerGetPayload<T>>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs>(
      args: SelectSubset<T, CustomerCreateArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs>(
      args?: SelectSubset<T, CustomerCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs>(
      args: SelectSubset<T, CustomerDeleteArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs>(
      args: SelectSubset<T, CustomerUpdateArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs>(
      args?: SelectSubset<T, CustomerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs>(
      args: SelectSubset<T, CustomerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs>(
      args: SelectSubset<T, CustomerUpsertArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CustomerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    business_rates<T extends Customer$business_ratesArgs= {}>(args?: Subset<T, Customer$business_ratesArgs>): Prisma.PrismaPromise<Array<BusinessRateGetPayload<T>>| Null>;

    business_reviews<T extends Customer$business_reviewsArgs= {}>(args?: Subset<T, Customer$business_reviewsArgs>): Prisma.PrismaPromise<Array<BusinessReviewGetPayload<T>>| Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Customer base type for findUnique actions
   */
  export type CustomerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUnique
   */
  export interface CustomerFindUniqueArgs extends CustomerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer base type for findFirst actions
   */
  export type CustomerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }

  /**
   * Customer findFirst
   */
  export interface CustomerFindFirstArgs extends CustomerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs = {
    /**
     * The data used to create many Customers.
     */
    data: Enumerable<CustomerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer.business_rates
   */
  export type Customer$business_ratesArgs = {
    /**
     * Select specific fields to fetch from the BusinessRate
     */
    select?: BusinessRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateInclude | null
    where?: BusinessRateWhereInput
    orderBy?: Enumerable<BusinessRateOrderByWithRelationInput>
    cursor?: BusinessRateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BusinessRateScalarFieldEnum>
  }


  /**
   * Customer.business_reviews
   */
  export type Customer$business_reviewsArgs = {
    /**
     * Select specific fields to fetch from the BusinessReview
     */
    select?: BusinessReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessReviewInclude | null
    where?: BusinessReviewWhereInput
    orderBy?: Enumerable<BusinessReviewOrderByWithRelationInput>
    cursor?: BusinessReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BusinessReviewScalarFieldEnum>
  }


  /**
   * Customer without action
   */
  export type CustomerArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
  }



  /**
   * Model BusinessUser
   */


  export type AggregateBusinessUser = {
    _count: BusinessUserCountAggregateOutputType | null
    _min: BusinessUserMinAggregateOutputType | null
    _max: BusinessUserMaxAggregateOutputType | null
  }

  export type BusinessUserMinAggregateOutputType = {
    id: string | null
    is_verified: boolean | null
    introduction_title: string | null
    introduction_content: string | null
  }

  export type BusinessUserMaxAggregateOutputType = {
    id: string | null
    is_verified: boolean | null
    introduction_title: string | null
    introduction_content: string | null
  }

  export type BusinessUserCountAggregateOutputType = {
    id: number
    is_verified: number
    introduction_title: number
    introduction_content: number
    _all: number
  }


  export type BusinessUserMinAggregateInputType = {
    id?: true
    is_verified?: true
    introduction_title?: true
    introduction_content?: true
  }

  export type BusinessUserMaxAggregateInputType = {
    id?: true
    is_verified?: true
    introduction_title?: true
    introduction_content?: true
  }

  export type BusinessUserCountAggregateInputType = {
    id?: true
    is_verified?: true
    introduction_title?: true
    introduction_content?: true
    _all?: true
  }

  export type BusinessUserAggregateArgs = {
    /**
     * Filter which BusinessUser to aggregate.
     */
    where?: BusinessUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessUsers to fetch.
     */
    orderBy?: Enumerable<BusinessUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessUsers
    **/
    _count?: true | BusinessUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessUserMaxAggregateInputType
  }

  export type GetBusinessUserAggregateType<T extends BusinessUserAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessUser[P]>
      : GetScalarType<T[P], AggregateBusinessUser[P]>
  }




  export type BusinessUserGroupByArgs = {
    where?: BusinessUserWhereInput
    orderBy?: Enumerable<BusinessUserOrderByWithAggregationInput>
    by: BusinessUserScalarFieldEnum[]
    having?: BusinessUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessUserCountAggregateInputType | true
    _min?: BusinessUserMinAggregateInputType
    _max?: BusinessUserMaxAggregateInputType
  }


  export type BusinessUserGroupByOutputType = {
    id: string
    is_verified: boolean
    introduction_title: string | null
    introduction_content: string | null
    _count: BusinessUserCountAggregateOutputType | null
    _min: BusinessUserMinAggregateOutputType | null
    _max: BusinessUserMaxAggregateOutputType | null
  }

  type GetBusinessUserGroupByPayload<T extends BusinessUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BusinessUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessUserGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessUserGroupByOutputType[P]>
        }
      >
    >


  export type BusinessUserSelect = {
    id?: boolean
    is_verified?: boolean
    introduction_title?: boolean
    introduction_content?: boolean
    business_items?: boolean | BusinessUser$business_itemsArgs
    business_rates?: boolean | BusinessUser$business_ratesArgs
    business_reviews?: boolean | BusinessUser$business_reviewsArgs
    user?: boolean | UserArgs
    home_care_company?: boolean | HomeCareCompanyArgs
    real_estate_agent?: boolean | RealEstateAgentArgs
    _count?: boolean | BusinessUserCountOutputTypeArgs
  }


  export type BusinessUserInclude = {
    business_items?: boolean | BusinessUser$business_itemsArgs
    business_rates?: boolean | BusinessUser$business_ratesArgs
    business_reviews?: boolean | BusinessUser$business_reviewsArgs
    user?: boolean | UserArgs
    home_care_company?: boolean | HomeCareCompanyArgs
    real_estate_agent?: boolean | RealEstateAgentArgs
    _count?: boolean | BusinessUserCountOutputTypeArgs
  }

  export type BusinessUserGetPayload<S extends boolean | null | undefined | BusinessUserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BusinessUser :
    S extends undefined ? never :
    S extends { include: any } & (BusinessUserArgs | BusinessUserFindManyArgs)
    ? BusinessUser  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'business_items' ? Array < BusinessItemGetPayload<S['include'][P]>>  :
        P extends 'business_rates' ? Array < BusinessRateGetPayload<S['include'][P]>>  :
        P extends 'business_reviews' ? Array < BusinessReviewGetPayload<S['include'][P]>>  :
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'home_care_company' ? HomeCareCompanyGetPayload<S['include'][P]> | null :
        P extends 'real_estate_agent' ? RealEstateAgentGetPayload<S['include'][P]> | null :
        P extends '_count' ? BusinessUserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BusinessUserArgs | BusinessUserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'business_items' ? Array < BusinessItemGetPayload<S['select'][P]>>  :
        P extends 'business_rates' ? Array < BusinessRateGetPayload<S['select'][P]>>  :
        P extends 'business_reviews' ? Array < BusinessReviewGetPayload<S['select'][P]>>  :
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'home_care_company' ? HomeCareCompanyGetPayload<S['select'][P]> | null :
        P extends 'real_estate_agent' ? RealEstateAgentGetPayload<S['select'][P]> | null :
        P extends '_count' ? BusinessUserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof BusinessUser ? BusinessUser[P] : never
  } 
      : BusinessUser


  type BusinessUserCountArgs = 
    Omit<BusinessUserFindManyArgs, 'select' | 'include'> & {
      select?: BusinessUserCountAggregateInputType | true
    }

  export interface BusinessUserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BusinessUser that matches the filter.
     * @param {BusinessUserFindUniqueArgs} args - Arguments to find a BusinessUser
     * @example
     * // Get one BusinessUser
     * const businessUser = await prisma.businessUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BusinessUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BusinessUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BusinessUser'> extends True ? Prisma__BusinessUserClient<BusinessUserGetPayload<T>> : Prisma__BusinessUserClient<BusinessUserGetPayload<T> | null, null>

    /**
     * Find one BusinessUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BusinessUserFindUniqueOrThrowArgs} args - Arguments to find a BusinessUser
     * @example
     * // Get one BusinessUser
     * const businessUser = await prisma.businessUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BusinessUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BusinessUserFindUniqueOrThrowArgs>
    ): Prisma__BusinessUserClient<BusinessUserGetPayload<T>>

    /**
     * Find the first BusinessUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUserFindFirstArgs} args - Arguments to find a BusinessUser
     * @example
     * // Get one BusinessUser
     * const businessUser = await prisma.businessUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BusinessUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BusinessUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BusinessUser'> extends True ? Prisma__BusinessUserClient<BusinessUserGetPayload<T>> : Prisma__BusinessUserClient<BusinessUserGetPayload<T> | null, null>

    /**
     * Find the first BusinessUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUserFindFirstOrThrowArgs} args - Arguments to find a BusinessUser
     * @example
     * // Get one BusinessUser
     * const businessUser = await prisma.businessUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BusinessUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BusinessUserFindFirstOrThrowArgs>
    ): Prisma__BusinessUserClient<BusinessUserGetPayload<T>>

    /**
     * Find zero or more BusinessUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessUsers
     * const businessUsers = await prisma.businessUser.findMany()
     * 
     * // Get first 10 BusinessUsers
     * const businessUsers = await prisma.businessUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessUserWithIdOnly = await prisma.businessUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BusinessUserFindManyArgs>(
      args?: SelectSubset<T, BusinessUserFindManyArgs>
    ): Prisma.PrismaPromise<Array<BusinessUserGetPayload<T>>>

    /**
     * Create a BusinessUser.
     * @param {BusinessUserCreateArgs} args - Arguments to create a BusinessUser.
     * @example
     * // Create one BusinessUser
     * const BusinessUser = await prisma.businessUser.create({
     *   data: {
     *     // ... data to create a BusinessUser
     *   }
     * })
     * 
    **/
    create<T extends BusinessUserCreateArgs>(
      args: SelectSubset<T, BusinessUserCreateArgs>
    ): Prisma__BusinessUserClient<BusinessUserGetPayload<T>>

    /**
     * Create many BusinessUsers.
     *     @param {BusinessUserCreateManyArgs} args - Arguments to create many BusinessUsers.
     *     @example
     *     // Create many BusinessUsers
     *     const businessUser = await prisma.businessUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BusinessUserCreateManyArgs>(
      args?: SelectSubset<T, BusinessUserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BusinessUser.
     * @param {BusinessUserDeleteArgs} args - Arguments to delete one BusinessUser.
     * @example
     * // Delete one BusinessUser
     * const BusinessUser = await prisma.businessUser.delete({
     *   where: {
     *     // ... filter to delete one BusinessUser
     *   }
     * })
     * 
    **/
    delete<T extends BusinessUserDeleteArgs>(
      args: SelectSubset<T, BusinessUserDeleteArgs>
    ): Prisma__BusinessUserClient<BusinessUserGetPayload<T>>

    /**
     * Update one BusinessUser.
     * @param {BusinessUserUpdateArgs} args - Arguments to update one BusinessUser.
     * @example
     * // Update one BusinessUser
     * const businessUser = await prisma.businessUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BusinessUserUpdateArgs>(
      args: SelectSubset<T, BusinessUserUpdateArgs>
    ): Prisma__BusinessUserClient<BusinessUserGetPayload<T>>

    /**
     * Delete zero or more BusinessUsers.
     * @param {BusinessUserDeleteManyArgs} args - Arguments to filter BusinessUsers to delete.
     * @example
     * // Delete a few BusinessUsers
     * const { count } = await prisma.businessUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BusinessUserDeleteManyArgs>(
      args?: SelectSubset<T, BusinessUserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessUsers
     * const businessUser = await prisma.businessUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BusinessUserUpdateManyArgs>(
      args: SelectSubset<T, BusinessUserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessUser.
     * @param {BusinessUserUpsertArgs} args - Arguments to update or create a BusinessUser.
     * @example
     * // Update or create a BusinessUser
     * const businessUser = await prisma.businessUser.upsert({
     *   create: {
     *     // ... data to create a BusinessUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessUser we want to update
     *   }
     * })
    **/
    upsert<T extends BusinessUserUpsertArgs>(
      args: SelectSubset<T, BusinessUserUpsertArgs>
    ): Prisma__BusinessUserClient<BusinessUserGetPayload<T>>

    /**
     * Count the number of BusinessUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUserCountArgs} args - Arguments to filter BusinessUsers to count.
     * @example
     * // Count the number of BusinessUsers
     * const count = await prisma.businessUser.count({
     *   where: {
     *     // ... the filter for the BusinessUsers we want to count
     *   }
     * })
    **/
    count<T extends BusinessUserCountArgs>(
      args?: Subset<T, BusinessUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessUserAggregateArgs>(args: Subset<T, BusinessUserAggregateArgs>): Prisma.PrismaPromise<GetBusinessUserAggregateType<T>>

    /**
     * Group by BusinessUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessUserGroupByArgs['orderBy'] }
        : { orderBy?: BusinessUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BusinessUserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    business_items<T extends BusinessUser$business_itemsArgs= {}>(args?: Subset<T, BusinessUser$business_itemsArgs>): Prisma.PrismaPromise<Array<BusinessItemGetPayload<T>>| Null>;

    business_rates<T extends BusinessUser$business_ratesArgs= {}>(args?: Subset<T, BusinessUser$business_ratesArgs>): Prisma.PrismaPromise<Array<BusinessRateGetPayload<T>>| Null>;

    business_reviews<T extends BusinessUser$business_reviewsArgs= {}>(args?: Subset<T, BusinessUser$business_reviewsArgs>): Prisma.PrismaPromise<Array<BusinessReviewGetPayload<T>>| Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    home_care_company<T extends HomeCareCompanyArgs= {}>(args?: Subset<T, HomeCareCompanyArgs>): Prisma__HomeCareCompanyClient<HomeCareCompanyGetPayload<T> | Null>;

    real_estate_agent<T extends RealEstateAgentArgs= {}>(args?: Subset<T, RealEstateAgentArgs>): Prisma__RealEstateAgentClient<RealEstateAgentGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BusinessUser base type for findUnique actions
   */
  export type BusinessUserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BusinessUser
     */
    select?: BusinessUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserInclude | null
    /**
     * Filter, which BusinessUser to fetch.
     */
    where: BusinessUserWhereUniqueInput
  }

  /**
   * BusinessUser findUnique
   */
  export interface BusinessUserFindUniqueArgs extends BusinessUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BusinessUser findUniqueOrThrow
   */
  export type BusinessUserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BusinessUser
     */
    select?: BusinessUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserInclude | null
    /**
     * Filter, which BusinessUser to fetch.
     */
    where: BusinessUserWhereUniqueInput
  }


  /**
   * BusinessUser base type for findFirst actions
   */
  export type BusinessUserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BusinessUser
     */
    select?: BusinessUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserInclude | null
    /**
     * Filter, which BusinessUser to fetch.
     */
    where?: BusinessUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessUsers to fetch.
     */
    orderBy?: Enumerable<BusinessUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessUsers.
     */
    cursor?: BusinessUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessUsers.
     */
    distinct?: Enumerable<BusinessUserScalarFieldEnum>
  }

  /**
   * BusinessUser findFirst
   */
  export interface BusinessUserFindFirstArgs extends BusinessUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BusinessUser findFirstOrThrow
   */
  export type BusinessUserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BusinessUser
     */
    select?: BusinessUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserInclude | null
    /**
     * Filter, which BusinessUser to fetch.
     */
    where?: BusinessUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessUsers to fetch.
     */
    orderBy?: Enumerable<BusinessUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessUsers.
     */
    cursor?: BusinessUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessUsers.
     */
    distinct?: Enumerable<BusinessUserScalarFieldEnum>
  }


  /**
   * BusinessUser findMany
   */
  export type BusinessUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the BusinessUser
     */
    select?: BusinessUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserInclude | null
    /**
     * Filter, which BusinessUsers to fetch.
     */
    where?: BusinessUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessUsers to fetch.
     */
    orderBy?: Enumerable<BusinessUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessUsers.
     */
    cursor?: BusinessUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessUsers.
     */
    skip?: number
    distinct?: Enumerable<BusinessUserScalarFieldEnum>
  }


  /**
   * BusinessUser create
   */
  export type BusinessUserCreateArgs = {
    /**
     * Select specific fields to fetch from the BusinessUser
     */
    select?: BusinessUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserInclude | null
    /**
     * The data needed to create a BusinessUser.
     */
    data: XOR<BusinessUserCreateInput, BusinessUserUncheckedCreateInput>
  }


  /**
   * BusinessUser createMany
   */
  export type BusinessUserCreateManyArgs = {
    /**
     * The data used to create many BusinessUsers.
     */
    data: Enumerable<BusinessUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BusinessUser update
   */
  export type BusinessUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the BusinessUser
     */
    select?: BusinessUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserInclude | null
    /**
     * The data needed to update a BusinessUser.
     */
    data: XOR<BusinessUserUpdateInput, BusinessUserUncheckedUpdateInput>
    /**
     * Choose, which BusinessUser to update.
     */
    where: BusinessUserWhereUniqueInput
  }


  /**
   * BusinessUser updateMany
   */
  export type BusinessUserUpdateManyArgs = {
    /**
     * The data used to update BusinessUsers.
     */
    data: XOR<BusinessUserUpdateManyMutationInput, BusinessUserUncheckedUpdateManyInput>
    /**
     * Filter which BusinessUsers to update
     */
    where?: BusinessUserWhereInput
  }


  /**
   * BusinessUser upsert
   */
  export type BusinessUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the BusinessUser
     */
    select?: BusinessUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserInclude | null
    /**
     * The filter to search for the BusinessUser to update in case it exists.
     */
    where: BusinessUserWhereUniqueInput
    /**
     * In case the BusinessUser found by the `where` argument doesn't exist, create a new BusinessUser with this data.
     */
    create: XOR<BusinessUserCreateInput, BusinessUserUncheckedCreateInput>
    /**
     * In case the BusinessUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUserUpdateInput, BusinessUserUncheckedUpdateInput>
  }


  /**
   * BusinessUser delete
   */
  export type BusinessUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the BusinessUser
     */
    select?: BusinessUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserInclude | null
    /**
     * Filter which BusinessUser to delete.
     */
    where: BusinessUserWhereUniqueInput
  }


  /**
   * BusinessUser deleteMany
   */
  export type BusinessUserDeleteManyArgs = {
    /**
     * Filter which BusinessUsers to delete
     */
    where?: BusinessUserWhereInput
  }


  /**
   * BusinessUser.business_items
   */
  export type BusinessUser$business_itemsArgs = {
    /**
     * Select specific fields to fetch from the BusinessItem
     */
    select?: BusinessItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessItemInclude | null
    where?: BusinessItemWhereInput
    orderBy?: Enumerable<BusinessItemOrderByWithRelationInput>
    cursor?: BusinessItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BusinessItemScalarFieldEnum>
  }


  /**
   * BusinessUser.business_rates
   */
  export type BusinessUser$business_ratesArgs = {
    /**
     * Select specific fields to fetch from the BusinessRate
     */
    select?: BusinessRateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessRateInclude | null
    where?: BusinessRateWhereInput
    orderBy?: Enumerable<BusinessRateOrderByWithRelationInput>
    cursor?: BusinessRateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BusinessRateScalarFieldEnum>
  }


  /**
   * BusinessUser.business_reviews
   */
  export type BusinessUser$business_reviewsArgs = {
    /**
     * Select specific fields to fetch from the BusinessReview
     */
    select?: BusinessReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessReviewInclude | null
    where?: BusinessReviewWhereInput
    orderBy?: Enumerable<BusinessReviewOrderByWithRelationInput>
    cursor?: BusinessReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BusinessReviewScalarFieldEnum>
  }


  /**
   * BusinessUser without action
   */
  export type BusinessUserArgs = {
    /**
     * Select specific fields to fetch from the BusinessUser
     */
    select?: BusinessUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserInclude | null
  }



  /**
   * Model RealEstateAgent
   */


  export type AggregateRealEstateAgent = {
    _count: RealEstateAgentCountAggregateOutputType | null
    _min: RealEstateAgentMinAggregateOutputType | null
    _max: RealEstateAgentMaxAggregateOutputType | null
  }

  export type RealEstateAgentMinAggregateOutputType = {
    id: string | null
    is_licensed: boolean | null
    real_estate_num: string | null
    real_estate_name: string | null
    licensed_agent_name: string | null
    real_estate_phone: string | null
  }

  export type RealEstateAgentMaxAggregateOutputType = {
    id: string | null
    is_licensed: boolean | null
    real_estate_num: string | null
    real_estate_name: string | null
    licensed_agent_name: string | null
    real_estate_phone: string | null
  }

  export type RealEstateAgentCountAggregateOutputType = {
    id: number
    is_licensed: number
    real_estate_num: number
    real_estate_name: number
    licensed_agent_name: number
    real_estate_phone: number
    _all: number
  }


  export type RealEstateAgentMinAggregateInputType = {
    id?: true
    is_licensed?: true
    real_estate_num?: true
    real_estate_name?: true
    licensed_agent_name?: true
    real_estate_phone?: true
  }

  export type RealEstateAgentMaxAggregateInputType = {
    id?: true
    is_licensed?: true
    real_estate_num?: true
    real_estate_name?: true
    licensed_agent_name?: true
    real_estate_phone?: true
  }

  export type RealEstateAgentCountAggregateInputType = {
    id?: true
    is_licensed?: true
    real_estate_num?: true
    real_estate_name?: true
    licensed_agent_name?: true
    real_estate_phone?: true
    _all?: true
  }

  export type RealEstateAgentAggregateArgs = {
    /**
     * Filter which RealEstateAgent to aggregate.
     */
    where?: RealEstateAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateAgents to fetch.
     */
    orderBy?: Enumerable<RealEstateAgentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RealEstateAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RealEstateAgents
    **/
    _count?: true | RealEstateAgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealEstateAgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealEstateAgentMaxAggregateInputType
  }

  export type GetRealEstateAgentAggregateType<T extends RealEstateAgentAggregateArgs> = {
        [P in keyof T & keyof AggregateRealEstateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealEstateAgent[P]>
      : GetScalarType<T[P], AggregateRealEstateAgent[P]>
  }




  export type RealEstateAgentGroupByArgs = {
    where?: RealEstateAgentWhereInput
    orderBy?: Enumerable<RealEstateAgentOrderByWithAggregationInput>
    by: RealEstateAgentScalarFieldEnum[]
    having?: RealEstateAgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealEstateAgentCountAggregateInputType | true
    _min?: RealEstateAgentMinAggregateInputType
    _max?: RealEstateAgentMaxAggregateInputType
  }


  export type RealEstateAgentGroupByOutputType = {
    id: string
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    licensed_agent_name: string
    real_estate_phone: string
    _count: RealEstateAgentCountAggregateOutputType | null
    _min: RealEstateAgentMinAggregateOutputType | null
    _max: RealEstateAgentMaxAggregateOutputType | null
  }

  type GetRealEstateAgentGroupByPayload<T extends RealEstateAgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RealEstateAgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealEstateAgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealEstateAgentGroupByOutputType[P]>
            : GetScalarType<T[P], RealEstateAgentGroupByOutputType[P]>
        }
      >
    >


  export type RealEstateAgentSelect = {
    id?: boolean
    is_licensed?: boolean
    real_estate_num?: boolean
    real_estate_name?: boolean
    licensed_agent_name?: boolean
    real_estate_phone?: boolean
    business_user?: boolean | BusinessUserArgs
    specialized_fields?: boolean | RealEstateAgent$specialized_fieldsArgs
    _count?: boolean | RealEstateAgentCountOutputTypeArgs
  }


  export type RealEstateAgentInclude = {
    business_user?: boolean | BusinessUserArgs
    specialized_fields?: boolean | RealEstateAgent$specialized_fieldsArgs
    _count?: boolean | RealEstateAgentCountOutputTypeArgs
  }

  export type RealEstateAgentGetPayload<S extends boolean | null | undefined | RealEstateAgentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RealEstateAgent :
    S extends undefined ? never :
    S extends { include: any } & (RealEstateAgentArgs | RealEstateAgentFindManyArgs)
    ? RealEstateAgent  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'business_user' ? BusinessUserGetPayload<S['include'][P]> :
        P extends 'specialized_fields' ? Array < RealEstateSpecializedFieldGetPayload<S['include'][P]>>  :
        P extends '_count' ? RealEstateAgentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RealEstateAgentArgs | RealEstateAgentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'business_user' ? BusinessUserGetPayload<S['select'][P]> :
        P extends 'specialized_fields' ? Array < RealEstateSpecializedFieldGetPayload<S['select'][P]>>  :
        P extends '_count' ? RealEstateAgentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof RealEstateAgent ? RealEstateAgent[P] : never
  } 
      : RealEstateAgent


  type RealEstateAgentCountArgs = 
    Omit<RealEstateAgentFindManyArgs, 'select' | 'include'> & {
      select?: RealEstateAgentCountAggregateInputType | true
    }

  export interface RealEstateAgentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RealEstateAgent that matches the filter.
     * @param {RealEstateAgentFindUniqueArgs} args - Arguments to find a RealEstateAgent
     * @example
     * // Get one RealEstateAgent
     * const realEstateAgent = await prisma.realEstateAgent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RealEstateAgentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RealEstateAgentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RealEstateAgent'> extends True ? Prisma__RealEstateAgentClient<RealEstateAgentGetPayload<T>> : Prisma__RealEstateAgentClient<RealEstateAgentGetPayload<T> | null, null>

    /**
     * Find one RealEstateAgent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RealEstateAgentFindUniqueOrThrowArgs} args - Arguments to find a RealEstateAgent
     * @example
     * // Get one RealEstateAgent
     * const realEstateAgent = await prisma.realEstateAgent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RealEstateAgentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RealEstateAgentFindUniqueOrThrowArgs>
    ): Prisma__RealEstateAgentClient<RealEstateAgentGetPayload<T>>

    /**
     * Find the first RealEstateAgent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateAgentFindFirstArgs} args - Arguments to find a RealEstateAgent
     * @example
     * // Get one RealEstateAgent
     * const realEstateAgent = await prisma.realEstateAgent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RealEstateAgentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RealEstateAgentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RealEstateAgent'> extends True ? Prisma__RealEstateAgentClient<RealEstateAgentGetPayload<T>> : Prisma__RealEstateAgentClient<RealEstateAgentGetPayload<T> | null, null>

    /**
     * Find the first RealEstateAgent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateAgentFindFirstOrThrowArgs} args - Arguments to find a RealEstateAgent
     * @example
     * // Get one RealEstateAgent
     * const realEstateAgent = await prisma.realEstateAgent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RealEstateAgentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RealEstateAgentFindFirstOrThrowArgs>
    ): Prisma__RealEstateAgentClient<RealEstateAgentGetPayload<T>>

    /**
     * Find zero or more RealEstateAgents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateAgentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RealEstateAgents
     * const realEstateAgents = await prisma.realEstateAgent.findMany()
     * 
     * // Get first 10 RealEstateAgents
     * const realEstateAgents = await prisma.realEstateAgent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const realEstateAgentWithIdOnly = await prisma.realEstateAgent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RealEstateAgentFindManyArgs>(
      args?: SelectSubset<T, RealEstateAgentFindManyArgs>
    ): Prisma.PrismaPromise<Array<RealEstateAgentGetPayload<T>>>

    /**
     * Create a RealEstateAgent.
     * @param {RealEstateAgentCreateArgs} args - Arguments to create a RealEstateAgent.
     * @example
     * // Create one RealEstateAgent
     * const RealEstateAgent = await prisma.realEstateAgent.create({
     *   data: {
     *     // ... data to create a RealEstateAgent
     *   }
     * })
     * 
    **/
    create<T extends RealEstateAgentCreateArgs>(
      args: SelectSubset<T, RealEstateAgentCreateArgs>
    ): Prisma__RealEstateAgentClient<RealEstateAgentGetPayload<T>>

    /**
     * Create many RealEstateAgents.
     *     @param {RealEstateAgentCreateManyArgs} args - Arguments to create many RealEstateAgents.
     *     @example
     *     // Create many RealEstateAgents
     *     const realEstateAgent = await prisma.realEstateAgent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RealEstateAgentCreateManyArgs>(
      args?: SelectSubset<T, RealEstateAgentCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RealEstateAgent.
     * @param {RealEstateAgentDeleteArgs} args - Arguments to delete one RealEstateAgent.
     * @example
     * // Delete one RealEstateAgent
     * const RealEstateAgent = await prisma.realEstateAgent.delete({
     *   where: {
     *     // ... filter to delete one RealEstateAgent
     *   }
     * })
     * 
    **/
    delete<T extends RealEstateAgentDeleteArgs>(
      args: SelectSubset<T, RealEstateAgentDeleteArgs>
    ): Prisma__RealEstateAgentClient<RealEstateAgentGetPayload<T>>

    /**
     * Update one RealEstateAgent.
     * @param {RealEstateAgentUpdateArgs} args - Arguments to update one RealEstateAgent.
     * @example
     * // Update one RealEstateAgent
     * const realEstateAgent = await prisma.realEstateAgent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RealEstateAgentUpdateArgs>(
      args: SelectSubset<T, RealEstateAgentUpdateArgs>
    ): Prisma__RealEstateAgentClient<RealEstateAgentGetPayload<T>>

    /**
     * Delete zero or more RealEstateAgents.
     * @param {RealEstateAgentDeleteManyArgs} args - Arguments to filter RealEstateAgents to delete.
     * @example
     * // Delete a few RealEstateAgents
     * const { count } = await prisma.realEstateAgent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RealEstateAgentDeleteManyArgs>(
      args?: SelectSubset<T, RealEstateAgentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RealEstateAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateAgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RealEstateAgents
     * const realEstateAgent = await prisma.realEstateAgent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RealEstateAgentUpdateManyArgs>(
      args: SelectSubset<T, RealEstateAgentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RealEstateAgent.
     * @param {RealEstateAgentUpsertArgs} args - Arguments to update or create a RealEstateAgent.
     * @example
     * // Update or create a RealEstateAgent
     * const realEstateAgent = await prisma.realEstateAgent.upsert({
     *   create: {
     *     // ... data to create a RealEstateAgent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RealEstateAgent we want to update
     *   }
     * })
    **/
    upsert<T extends RealEstateAgentUpsertArgs>(
      args: SelectSubset<T, RealEstateAgentUpsertArgs>
    ): Prisma__RealEstateAgentClient<RealEstateAgentGetPayload<T>>

    /**
     * Count the number of RealEstateAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateAgentCountArgs} args - Arguments to filter RealEstateAgents to count.
     * @example
     * // Count the number of RealEstateAgents
     * const count = await prisma.realEstateAgent.count({
     *   where: {
     *     // ... the filter for the RealEstateAgents we want to count
     *   }
     * })
    **/
    count<T extends RealEstateAgentCountArgs>(
      args?: Subset<T, RealEstateAgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealEstateAgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RealEstateAgent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateAgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RealEstateAgentAggregateArgs>(args: Subset<T, RealEstateAgentAggregateArgs>): Prisma.PrismaPromise<GetRealEstateAgentAggregateType<T>>

    /**
     * Group by RealEstateAgent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateAgentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RealEstateAgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealEstateAgentGroupByArgs['orderBy'] }
        : { orderBy?: RealEstateAgentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RealEstateAgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealEstateAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RealEstateAgent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RealEstateAgentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    business_user<T extends BusinessUserArgs= {}>(args?: Subset<T, BusinessUserArgs>): Prisma__BusinessUserClient<BusinessUserGetPayload<T> | Null>;

    specialized_fields<T extends RealEstateAgent$specialized_fieldsArgs= {}>(args?: Subset<T, RealEstateAgent$specialized_fieldsArgs>): Prisma.PrismaPromise<Array<RealEstateSpecializedFieldGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RealEstateAgent base type for findUnique actions
   */
  export type RealEstateAgentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RealEstateAgent
     */
    select?: RealEstateAgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateAgentInclude | null
    /**
     * Filter, which RealEstateAgent to fetch.
     */
    where: RealEstateAgentWhereUniqueInput
  }

  /**
   * RealEstateAgent findUnique
   */
  export interface RealEstateAgentFindUniqueArgs extends RealEstateAgentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealEstateAgent findUniqueOrThrow
   */
  export type RealEstateAgentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealEstateAgent
     */
    select?: RealEstateAgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateAgentInclude | null
    /**
     * Filter, which RealEstateAgent to fetch.
     */
    where: RealEstateAgentWhereUniqueInput
  }


  /**
   * RealEstateAgent base type for findFirst actions
   */
  export type RealEstateAgentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RealEstateAgent
     */
    select?: RealEstateAgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateAgentInclude | null
    /**
     * Filter, which RealEstateAgent to fetch.
     */
    where?: RealEstateAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateAgents to fetch.
     */
    orderBy?: Enumerable<RealEstateAgentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstateAgents.
     */
    cursor?: RealEstateAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstateAgents.
     */
    distinct?: Enumerable<RealEstateAgentScalarFieldEnum>
  }

  /**
   * RealEstateAgent findFirst
   */
  export interface RealEstateAgentFindFirstArgs extends RealEstateAgentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealEstateAgent findFirstOrThrow
   */
  export type RealEstateAgentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealEstateAgent
     */
    select?: RealEstateAgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateAgentInclude | null
    /**
     * Filter, which RealEstateAgent to fetch.
     */
    where?: RealEstateAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateAgents to fetch.
     */
    orderBy?: Enumerable<RealEstateAgentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstateAgents.
     */
    cursor?: RealEstateAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstateAgents.
     */
    distinct?: Enumerable<RealEstateAgentScalarFieldEnum>
  }


  /**
   * RealEstateAgent findMany
   */
  export type RealEstateAgentFindManyArgs = {
    /**
     * Select specific fields to fetch from the RealEstateAgent
     */
    select?: RealEstateAgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateAgentInclude | null
    /**
     * Filter, which RealEstateAgents to fetch.
     */
    where?: RealEstateAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateAgents to fetch.
     */
    orderBy?: Enumerable<RealEstateAgentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RealEstateAgents.
     */
    cursor?: RealEstateAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateAgents.
     */
    skip?: number
    distinct?: Enumerable<RealEstateAgentScalarFieldEnum>
  }


  /**
   * RealEstateAgent create
   */
  export type RealEstateAgentCreateArgs = {
    /**
     * Select specific fields to fetch from the RealEstateAgent
     */
    select?: RealEstateAgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateAgentInclude | null
    /**
     * The data needed to create a RealEstateAgent.
     */
    data: XOR<RealEstateAgentCreateInput, RealEstateAgentUncheckedCreateInput>
  }


  /**
   * RealEstateAgent createMany
   */
  export type RealEstateAgentCreateManyArgs = {
    /**
     * The data used to create many RealEstateAgents.
     */
    data: Enumerable<RealEstateAgentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RealEstateAgent update
   */
  export type RealEstateAgentUpdateArgs = {
    /**
     * Select specific fields to fetch from the RealEstateAgent
     */
    select?: RealEstateAgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateAgentInclude | null
    /**
     * The data needed to update a RealEstateAgent.
     */
    data: XOR<RealEstateAgentUpdateInput, RealEstateAgentUncheckedUpdateInput>
    /**
     * Choose, which RealEstateAgent to update.
     */
    where: RealEstateAgentWhereUniqueInput
  }


  /**
   * RealEstateAgent updateMany
   */
  export type RealEstateAgentUpdateManyArgs = {
    /**
     * The data used to update RealEstateAgents.
     */
    data: XOR<RealEstateAgentUpdateManyMutationInput, RealEstateAgentUncheckedUpdateManyInput>
    /**
     * Filter which RealEstateAgents to update
     */
    where?: RealEstateAgentWhereInput
  }


  /**
   * RealEstateAgent upsert
   */
  export type RealEstateAgentUpsertArgs = {
    /**
     * Select specific fields to fetch from the RealEstateAgent
     */
    select?: RealEstateAgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateAgentInclude | null
    /**
     * The filter to search for the RealEstateAgent to update in case it exists.
     */
    where: RealEstateAgentWhereUniqueInput
    /**
     * In case the RealEstateAgent found by the `where` argument doesn't exist, create a new RealEstateAgent with this data.
     */
    create: XOR<RealEstateAgentCreateInput, RealEstateAgentUncheckedCreateInput>
    /**
     * In case the RealEstateAgent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RealEstateAgentUpdateInput, RealEstateAgentUncheckedUpdateInput>
  }


  /**
   * RealEstateAgent delete
   */
  export type RealEstateAgentDeleteArgs = {
    /**
     * Select specific fields to fetch from the RealEstateAgent
     */
    select?: RealEstateAgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateAgentInclude | null
    /**
     * Filter which RealEstateAgent to delete.
     */
    where: RealEstateAgentWhereUniqueInput
  }


  /**
   * RealEstateAgent deleteMany
   */
  export type RealEstateAgentDeleteManyArgs = {
    /**
     * Filter which RealEstateAgents to delete
     */
    where?: RealEstateAgentWhereInput
  }


  /**
   * RealEstateAgent.specialized_fields
   */
  export type RealEstateAgent$specialized_fieldsArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedField
     */
    select?: RealEstateSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedFieldInclude | null
    where?: RealEstateSpecializedFieldWhereInput
    orderBy?: Enumerable<RealEstateSpecializedFieldOrderByWithRelationInput>
    cursor?: RealEstateSpecializedFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RealEstateSpecializedFieldScalarFieldEnum>
  }


  /**
   * RealEstateAgent without action
   */
  export type RealEstateAgentArgs = {
    /**
     * Select specific fields to fetch from the RealEstateAgent
     */
    select?: RealEstateAgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateAgentInclude | null
  }



  /**
   * Model HomeCareCompany
   */


  export type AggregateHomeCareCompany = {
    _count: HomeCareCompanyCountAggregateOutputType | null
    _min: HomeCareCompanyMinAggregateOutputType | null
    _max: HomeCareCompanyMaxAggregateOutputType | null
  }

  export type HomeCareCompanyMinAggregateOutputType = {
    id: string | null
    business_registration_num: string | null
  }

  export type HomeCareCompanyMaxAggregateOutputType = {
    id: string | null
    business_registration_num: string | null
  }

  export type HomeCareCompanyCountAggregateOutputType = {
    id: number
    business_registration_num: number
    _all: number
  }


  export type HomeCareCompanyMinAggregateInputType = {
    id?: true
    business_registration_num?: true
  }

  export type HomeCareCompanyMaxAggregateInputType = {
    id?: true
    business_registration_num?: true
  }

  export type HomeCareCompanyCountAggregateInputType = {
    id?: true
    business_registration_num?: true
    _all?: true
  }

  export type HomeCareCompanyAggregateArgs = {
    /**
     * Filter which HomeCareCompany to aggregate.
     */
    where?: HomeCareCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareCompanies to fetch.
     */
    orderBy?: Enumerable<HomeCareCompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeCareCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomeCareCompanies
    **/
    _count?: true | HomeCareCompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeCareCompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeCareCompanyMaxAggregateInputType
  }

  export type GetHomeCareCompanyAggregateType<T extends HomeCareCompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateHomeCareCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomeCareCompany[P]>
      : GetScalarType<T[P], AggregateHomeCareCompany[P]>
  }




  export type HomeCareCompanyGroupByArgs = {
    where?: HomeCareCompanyWhereInput
    orderBy?: Enumerable<HomeCareCompanyOrderByWithAggregationInput>
    by: HomeCareCompanyScalarFieldEnum[]
    having?: HomeCareCompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeCareCompanyCountAggregateInputType | true
    _min?: HomeCareCompanyMinAggregateInputType
    _max?: HomeCareCompanyMaxAggregateInputType
  }


  export type HomeCareCompanyGroupByOutputType = {
    id: string
    business_registration_num: string
    _count: HomeCareCompanyCountAggregateOutputType | null
    _min: HomeCareCompanyMinAggregateOutputType | null
    _max: HomeCareCompanyMaxAggregateOutputType | null
  }

  type GetHomeCareCompanyGroupByPayload<T extends HomeCareCompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HomeCareCompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeCareCompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeCareCompanyGroupByOutputType[P]>
            : GetScalarType<T[P], HomeCareCompanyGroupByOutputType[P]>
        }
      >
    >


  export type HomeCareCompanySelect = {
    id?: boolean
    business_registration_num?: boolean
    business_user?: boolean | BusinessUserArgs
    specialized_fields?: boolean | HomeCareCompany$specialized_fieldsArgs
    _count?: boolean | HomeCareCompanyCountOutputTypeArgs
  }


  export type HomeCareCompanyInclude = {
    business_user?: boolean | BusinessUserArgs
    specialized_fields?: boolean | HomeCareCompany$specialized_fieldsArgs
    _count?: boolean | HomeCareCompanyCountOutputTypeArgs
  }

  export type HomeCareCompanyGetPayload<S extends boolean | null | undefined | HomeCareCompanyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HomeCareCompany :
    S extends undefined ? never :
    S extends { include: any } & (HomeCareCompanyArgs | HomeCareCompanyFindManyArgs)
    ? HomeCareCompany  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'business_user' ? BusinessUserGetPayload<S['include'][P]> :
        P extends 'specialized_fields' ? Array < HomeCareSpecializedFieldGetPayload<S['include'][P]>>  :
        P extends '_count' ? HomeCareCompanyCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HomeCareCompanyArgs | HomeCareCompanyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'business_user' ? BusinessUserGetPayload<S['select'][P]> :
        P extends 'specialized_fields' ? Array < HomeCareSpecializedFieldGetPayload<S['select'][P]>>  :
        P extends '_count' ? HomeCareCompanyCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof HomeCareCompany ? HomeCareCompany[P] : never
  } 
      : HomeCareCompany


  type HomeCareCompanyCountArgs = 
    Omit<HomeCareCompanyFindManyArgs, 'select' | 'include'> & {
      select?: HomeCareCompanyCountAggregateInputType | true
    }

  export interface HomeCareCompanyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one HomeCareCompany that matches the filter.
     * @param {HomeCareCompanyFindUniqueArgs} args - Arguments to find a HomeCareCompany
     * @example
     * // Get one HomeCareCompany
     * const homeCareCompany = await prisma.homeCareCompany.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HomeCareCompanyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HomeCareCompanyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HomeCareCompany'> extends True ? Prisma__HomeCareCompanyClient<HomeCareCompanyGetPayload<T>> : Prisma__HomeCareCompanyClient<HomeCareCompanyGetPayload<T> | null, null>

    /**
     * Find one HomeCareCompany that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HomeCareCompanyFindUniqueOrThrowArgs} args - Arguments to find a HomeCareCompany
     * @example
     * // Get one HomeCareCompany
     * const homeCareCompany = await prisma.homeCareCompany.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HomeCareCompanyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HomeCareCompanyFindUniqueOrThrowArgs>
    ): Prisma__HomeCareCompanyClient<HomeCareCompanyGetPayload<T>>

    /**
     * Find the first HomeCareCompany that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareCompanyFindFirstArgs} args - Arguments to find a HomeCareCompany
     * @example
     * // Get one HomeCareCompany
     * const homeCareCompany = await prisma.homeCareCompany.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HomeCareCompanyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HomeCareCompanyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HomeCareCompany'> extends True ? Prisma__HomeCareCompanyClient<HomeCareCompanyGetPayload<T>> : Prisma__HomeCareCompanyClient<HomeCareCompanyGetPayload<T> | null, null>

    /**
     * Find the first HomeCareCompany that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareCompanyFindFirstOrThrowArgs} args - Arguments to find a HomeCareCompany
     * @example
     * // Get one HomeCareCompany
     * const homeCareCompany = await prisma.homeCareCompany.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HomeCareCompanyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HomeCareCompanyFindFirstOrThrowArgs>
    ): Prisma__HomeCareCompanyClient<HomeCareCompanyGetPayload<T>>

    /**
     * Find zero or more HomeCareCompanies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareCompanyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomeCareCompanies
     * const homeCareCompanies = await prisma.homeCareCompany.findMany()
     * 
     * // Get first 10 HomeCareCompanies
     * const homeCareCompanies = await prisma.homeCareCompany.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeCareCompanyWithIdOnly = await prisma.homeCareCompany.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HomeCareCompanyFindManyArgs>(
      args?: SelectSubset<T, HomeCareCompanyFindManyArgs>
    ): Prisma.PrismaPromise<Array<HomeCareCompanyGetPayload<T>>>

    /**
     * Create a HomeCareCompany.
     * @param {HomeCareCompanyCreateArgs} args - Arguments to create a HomeCareCompany.
     * @example
     * // Create one HomeCareCompany
     * const HomeCareCompany = await prisma.homeCareCompany.create({
     *   data: {
     *     // ... data to create a HomeCareCompany
     *   }
     * })
     * 
    **/
    create<T extends HomeCareCompanyCreateArgs>(
      args: SelectSubset<T, HomeCareCompanyCreateArgs>
    ): Prisma__HomeCareCompanyClient<HomeCareCompanyGetPayload<T>>

    /**
     * Create many HomeCareCompanies.
     *     @param {HomeCareCompanyCreateManyArgs} args - Arguments to create many HomeCareCompanies.
     *     @example
     *     // Create many HomeCareCompanies
     *     const homeCareCompany = await prisma.homeCareCompany.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HomeCareCompanyCreateManyArgs>(
      args?: SelectSubset<T, HomeCareCompanyCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HomeCareCompany.
     * @param {HomeCareCompanyDeleteArgs} args - Arguments to delete one HomeCareCompany.
     * @example
     * // Delete one HomeCareCompany
     * const HomeCareCompany = await prisma.homeCareCompany.delete({
     *   where: {
     *     // ... filter to delete one HomeCareCompany
     *   }
     * })
     * 
    **/
    delete<T extends HomeCareCompanyDeleteArgs>(
      args: SelectSubset<T, HomeCareCompanyDeleteArgs>
    ): Prisma__HomeCareCompanyClient<HomeCareCompanyGetPayload<T>>

    /**
     * Update one HomeCareCompany.
     * @param {HomeCareCompanyUpdateArgs} args - Arguments to update one HomeCareCompany.
     * @example
     * // Update one HomeCareCompany
     * const homeCareCompany = await prisma.homeCareCompany.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HomeCareCompanyUpdateArgs>(
      args: SelectSubset<T, HomeCareCompanyUpdateArgs>
    ): Prisma__HomeCareCompanyClient<HomeCareCompanyGetPayload<T>>

    /**
     * Delete zero or more HomeCareCompanies.
     * @param {HomeCareCompanyDeleteManyArgs} args - Arguments to filter HomeCareCompanies to delete.
     * @example
     * // Delete a few HomeCareCompanies
     * const { count } = await prisma.homeCareCompany.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HomeCareCompanyDeleteManyArgs>(
      args?: SelectSubset<T, HomeCareCompanyDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeCareCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareCompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomeCareCompanies
     * const homeCareCompany = await prisma.homeCareCompany.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HomeCareCompanyUpdateManyArgs>(
      args: SelectSubset<T, HomeCareCompanyUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HomeCareCompany.
     * @param {HomeCareCompanyUpsertArgs} args - Arguments to update or create a HomeCareCompany.
     * @example
     * // Update or create a HomeCareCompany
     * const homeCareCompany = await prisma.homeCareCompany.upsert({
     *   create: {
     *     // ... data to create a HomeCareCompany
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomeCareCompany we want to update
     *   }
     * })
    **/
    upsert<T extends HomeCareCompanyUpsertArgs>(
      args: SelectSubset<T, HomeCareCompanyUpsertArgs>
    ): Prisma__HomeCareCompanyClient<HomeCareCompanyGetPayload<T>>

    /**
     * Count the number of HomeCareCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareCompanyCountArgs} args - Arguments to filter HomeCareCompanies to count.
     * @example
     * // Count the number of HomeCareCompanies
     * const count = await prisma.homeCareCompany.count({
     *   where: {
     *     // ... the filter for the HomeCareCompanies we want to count
     *   }
     * })
    **/
    count<T extends HomeCareCompanyCountArgs>(
      args?: Subset<T, HomeCareCompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeCareCompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomeCareCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareCompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HomeCareCompanyAggregateArgs>(args: Subset<T, HomeCareCompanyAggregateArgs>): Prisma.PrismaPromise<GetHomeCareCompanyAggregateType<T>>

    /**
     * Group by HomeCareCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareCompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HomeCareCompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeCareCompanyGroupByArgs['orderBy'] }
        : { orderBy?: HomeCareCompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HomeCareCompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeCareCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HomeCareCompany.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HomeCareCompanyClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    business_user<T extends BusinessUserArgs= {}>(args?: Subset<T, BusinessUserArgs>): Prisma__BusinessUserClient<BusinessUserGetPayload<T> | Null>;

    specialized_fields<T extends HomeCareCompany$specialized_fieldsArgs= {}>(args?: Subset<T, HomeCareCompany$specialized_fieldsArgs>): Prisma.PrismaPromise<Array<HomeCareSpecializedFieldGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * HomeCareCompany base type for findUnique actions
   */
  export type HomeCareCompanyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HomeCareCompany
     */
    select?: HomeCareCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareCompanyInclude | null
    /**
     * Filter, which HomeCareCompany to fetch.
     */
    where: HomeCareCompanyWhereUniqueInput
  }

  /**
   * HomeCareCompany findUnique
   */
  export interface HomeCareCompanyFindUniqueArgs extends HomeCareCompanyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HomeCareCompany findUniqueOrThrow
   */
  export type HomeCareCompanyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HomeCareCompany
     */
    select?: HomeCareCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareCompanyInclude | null
    /**
     * Filter, which HomeCareCompany to fetch.
     */
    where: HomeCareCompanyWhereUniqueInput
  }


  /**
   * HomeCareCompany base type for findFirst actions
   */
  export type HomeCareCompanyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HomeCareCompany
     */
    select?: HomeCareCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareCompanyInclude | null
    /**
     * Filter, which HomeCareCompany to fetch.
     */
    where?: HomeCareCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareCompanies to fetch.
     */
    orderBy?: Enumerable<HomeCareCompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeCareCompanies.
     */
    cursor?: HomeCareCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeCareCompanies.
     */
    distinct?: Enumerable<HomeCareCompanyScalarFieldEnum>
  }

  /**
   * HomeCareCompany findFirst
   */
  export interface HomeCareCompanyFindFirstArgs extends HomeCareCompanyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HomeCareCompany findFirstOrThrow
   */
  export type HomeCareCompanyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HomeCareCompany
     */
    select?: HomeCareCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareCompanyInclude | null
    /**
     * Filter, which HomeCareCompany to fetch.
     */
    where?: HomeCareCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareCompanies to fetch.
     */
    orderBy?: Enumerable<HomeCareCompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeCareCompanies.
     */
    cursor?: HomeCareCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeCareCompanies.
     */
    distinct?: Enumerable<HomeCareCompanyScalarFieldEnum>
  }


  /**
   * HomeCareCompany findMany
   */
  export type HomeCareCompanyFindManyArgs = {
    /**
     * Select specific fields to fetch from the HomeCareCompany
     */
    select?: HomeCareCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareCompanyInclude | null
    /**
     * Filter, which HomeCareCompanies to fetch.
     */
    where?: HomeCareCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareCompanies to fetch.
     */
    orderBy?: Enumerable<HomeCareCompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomeCareCompanies.
     */
    cursor?: HomeCareCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareCompanies.
     */
    skip?: number
    distinct?: Enumerable<HomeCareCompanyScalarFieldEnum>
  }


  /**
   * HomeCareCompany create
   */
  export type HomeCareCompanyCreateArgs = {
    /**
     * Select specific fields to fetch from the HomeCareCompany
     */
    select?: HomeCareCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareCompanyInclude | null
    /**
     * The data needed to create a HomeCareCompany.
     */
    data: XOR<HomeCareCompanyCreateInput, HomeCareCompanyUncheckedCreateInput>
  }


  /**
   * HomeCareCompany createMany
   */
  export type HomeCareCompanyCreateManyArgs = {
    /**
     * The data used to create many HomeCareCompanies.
     */
    data: Enumerable<HomeCareCompanyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HomeCareCompany update
   */
  export type HomeCareCompanyUpdateArgs = {
    /**
     * Select specific fields to fetch from the HomeCareCompany
     */
    select?: HomeCareCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareCompanyInclude | null
    /**
     * The data needed to update a HomeCareCompany.
     */
    data: XOR<HomeCareCompanyUpdateInput, HomeCareCompanyUncheckedUpdateInput>
    /**
     * Choose, which HomeCareCompany to update.
     */
    where: HomeCareCompanyWhereUniqueInput
  }


  /**
   * HomeCareCompany updateMany
   */
  export type HomeCareCompanyUpdateManyArgs = {
    /**
     * The data used to update HomeCareCompanies.
     */
    data: XOR<HomeCareCompanyUpdateManyMutationInput, HomeCareCompanyUncheckedUpdateManyInput>
    /**
     * Filter which HomeCareCompanies to update
     */
    where?: HomeCareCompanyWhereInput
  }


  /**
   * HomeCareCompany upsert
   */
  export type HomeCareCompanyUpsertArgs = {
    /**
     * Select specific fields to fetch from the HomeCareCompany
     */
    select?: HomeCareCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareCompanyInclude | null
    /**
     * The filter to search for the HomeCareCompany to update in case it exists.
     */
    where: HomeCareCompanyWhereUniqueInput
    /**
     * In case the HomeCareCompany found by the `where` argument doesn't exist, create a new HomeCareCompany with this data.
     */
    create: XOR<HomeCareCompanyCreateInput, HomeCareCompanyUncheckedCreateInput>
    /**
     * In case the HomeCareCompany was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeCareCompanyUpdateInput, HomeCareCompanyUncheckedUpdateInput>
  }


  /**
   * HomeCareCompany delete
   */
  export type HomeCareCompanyDeleteArgs = {
    /**
     * Select specific fields to fetch from the HomeCareCompany
     */
    select?: HomeCareCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareCompanyInclude | null
    /**
     * Filter which HomeCareCompany to delete.
     */
    where: HomeCareCompanyWhereUniqueInput
  }


  /**
   * HomeCareCompany deleteMany
   */
  export type HomeCareCompanyDeleteManyArgs = {
    /**
     * Filter which HomeCareCompanies to delete
     */
    where?: HomeCareCompanyWhereInput
  }


  /**
   * HomeCareCompany.specialized_fields
   */
  export type HomeCareCompany$specialized_fieldsArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedField
     */
    select?: HomeCareSpecializedFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedFieldInclude | null
    where?: HomeCareSpecializedFieldWhereInput
    orderBy?: Enumerable<HomeCareSpecializedFieldOrderByWithRelationInput>
    cursor?: HomeCareSpecializedFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HomeCareSpecializedFieldScalarFieldEnum>
  }


  /**
   * HomeCareCompany without action
   */
  export type HomeCareCompanyArgs = {
    /**
     * Select specific fields to fetch from the HomeCareCompany
     */
    select?: HomeCareCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareCompanyInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BoardArticleScalarFieldEnum: {
    id: 'id',
    board_id: 'board_id',
    writer_id: 'writer_id',
    title: 'title',
    content: 'content'
  };

  export type BoardArticleScalarFieldEnum = (typeof BoardArticleScalarFieldEnum)[keyof typeof BoardArticleScalarFieldEnum]


  export const BoardCommentScalarFieldEnum: {
    id: 'id',
    writer_id: 'writer_id',
    article_id: 'article_id',
    content: 'content'
  };

  export type BoardCommentScalarFieldEnum = (typeof BoardCommentScalarFieldEnum)[keyof typeof BoardCommentScalarFieldEnum]


  export const BoardScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const BusinessItemScalarFieldEnum: {
    id: 'id',
    manager_id: 'manager_id',
    name: 'name',
    main_image: 'main_image'
  };

  export type BusinessItemScalarFieldEnum = (typeof BusinessItemScalarFieldEnum)[keyof typeof BusinessItemScalarFieldEnum]


  export const BusinessRateCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BusinessRateCategoryScalarFieldEnum = (typeof BusinessRateCategoryScalarFieldEnum)[keyof typeof BusinessRateCategoryScalarFieldEnum]


  export const BusinessRateScalarFieldEnum: {
    id: 'id',
    category_id: 'category_id',
    business_id: 'business_id',
    rater_id: 'rater_id',
    rate: 'rate'
  };

  export type BusinessRateScalarFieldEnum = (typeof BusinessRateScalarFieldEnum)[keyof typeof BusinessRateScalarFieldEnum]


  export const BusinessReviewScalarFieldEnum: {
    id: 'id',
    business_id: 'business_id',
    reviewer_id: 'reviewer_id',
    content: 'content'
  };

  export type BusinessReviewScalarFieldEnum = (typeof BusinessReviewScalarFieldEnum)[keyof typeof BusinessReviewScalarFieldEnum]


  export const BusinessUserScalarFieldEnum: {
    id: 'id',
    is_verified: 'is_verified',
    introduction_title: 'introduction_title',
    introduction_content: 'introduction_content'
  };

  export type BusinessUserScalarFieldEnum = (typeof BusinessUserScalarFieldEnum)[keyof typeof BusinessUserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    birth: 'birth',
    gender: 'gender'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const HomeCareCompanyScalarFieldEnum: {
    id: 'id',
    business_registration_num: 'business_registration_num'
  };

  export type HomeCareCompanyScalarFieldEnum = (typeof HomeCareCompanyScalarFieldEnum)[keyof typeof HomeCareCompanyScalarFieldEnum]


  export const HomeCareSpecializedFieldScalarFieldEnum: {
    id: 'id',
    sub_category_id: 'sub_category_id',
    company_id: 'company_id'
  };

  export type HomeCareSpecializedFieldScalarFieldEnum = (typeof HomeCareSpecializedFieldScalarFieldEnum)[keyof typeof HomeCareSpecializedFieldScalarFieldEnum]


  export const HomeCareSubCategoryScalarFieldEnum: {
    id: 'id',
    super_id: 'super_id',
    name: 'name'
  };

  export type HomeCareSubCategoryScalarFieldEnum = (typeof HomeCareSubCategoryScalarFieldEnum)[keyof typeof HomeCareSubCategoryScalarFieldEnum]


  export const HomeCareSuperCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type HomeCareSuperCategoryScalarFieldEnum = (typeof HomeCareSuperCategoryScalarFieldEnum)[keyof typeof HomeCareSuperCategoryScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RealEstateAgentScalarFieldEnum: {
    id: 'id',
    is_licensed: 'is_licensed',
    real_estate_num: 'real_estate_num',
    real_estate_name: 'real_estate_name',
    licensed_agent_name: 'licensed_agent_name',
    real_estate_phone: 'real_estate_phone'
  };

  export type RealEstateAgentScalarFieldEnum = (typeof RealEstateAgentScalarFieldEnum)[keyof typeof RealEstateAgentScalarFieldEnum]


  export const RealEstateSpecializedFieldScalarFieldEnum: {
    id: 'id',
    sub_category_id: 'sub_category_id',
    agent_id: 'agent_id'
  };

  export type RealEstateSpecializedFieldScalarFieldEnum = (typeof RealEstateSpecializedFieldScalarFieldEnum)[keyof typeof RealEstateSpecializedFieldScalarFieldEnum]


  export const RealEstateSubCategoryScalarFieldEnum: {
    id: 'id',
    super_id: 'super_id',
    name: 'name'
  };

  export type RealEstateSubCategoryScalarFieldEnum = (typeof RealEstateSubCategoryScalarFieldEnum)[keyof typeof RealEstateSubCategoryScalarFieldEnum]


  export const RealEstateSuperCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RealEstateSuperCategoryScalarFieldEnum = (typeof RealEstateSuperCategoryScalarFieldEnum)[keyof typeof RealEstateSuperCategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserAuthenticationScalarFieldEnum: {
    id: 'id',
    oauth_sub: 'oauth_sub',
    oauth_type: 'oauth_type'
  };

  export type UserAuthenticationScalarFieldEnum = (typeof UserAuthenticationScalarFieldEnum)[keyof typeof UserAuthenticationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    auth_id: 'auth_id',
    name: 'name',
    email: 'email',
    email_verified: 'email_verified',
    phone: 'phone',
    address_first: 'address_first',
    address_second: 'address_second'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type BoardWhereInput = {
    AND?: Enumerable<BoardWhereInput>
    OR?: Enumerable<BoardWhereInput>
    NOT?: Enumerable<BoardWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    articles?: BoardArticleListRelationFilter
  }

  export type BoardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    articles?: BoardArticleOrderByRelationAggregateInput
  }

  export type BoardWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type BoardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: BoardCountOrderByAggregateInput
    _max?: BoardMaxOrderByAggregateInput
    _min?: BoardMinOrderByAggregateInput
  }

  export type BoardScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoardScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoardScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoardScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type BoardArticleWhereInput = {
    AND?: Enumerable<BoardArticleWhereInput>
    OR?: Enumerable<BoardArticleWhereInput>
    NOT?: Enumerable<BoardArticleWhereInput>
    id?: StringFilter | string
    board_id?: StringFilter | string
    writer_id?: StringFilter | string
    title?: StringFilter | string
    content?: StringFilter | string
    board?: XOR<BoardRelationFilter, BoardWhereInput>
    writer?: XOR<UserRelationFilter, UserWhereInput>
    comments?: BoardCommentListRelationFilter
  }

  export type BoardArticleOrderByWithRelationInput = {
    id?: SortOrder
    board_id?: SortOrder
    writer_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    board?: BoardOrderByWithRelationInput
    writer?: UserOrderByWithRelationInput
    comments?: BoardCommentOrderByRelationAggregateInput
  }

  export type BoardArticleWhereUniqueInput = {
    id?: string
  }

  export type BoardArticleOrderByWithAggregationInput = {
    id?: SortOrder
    board_id?: SortOrder
    writer_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    _count?: BoardArticleCountOrderByAggregateInput
    _max?: BoardArticleMaxOrderByAggregateInput
    _min?: BoardArticleMinOrderByAggregateInput
  }

  export type BoardArticleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoardArticleScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoardArticleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoardArticleScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    board_id?: StringWithAggregatesFilter | string
    writer_id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
  }

  export type BoardCommentWhereInput = {
    AND?: Enumerable<BoardCommentWhereInput>
    OR?: Enumerable<BoardCommentWhereInput>
    NOT?: Enumerable<BoardCommentWhereInput>
    id?: StringFilter | string
    writer_id?: StringFilter | string
    article_id?: StringFilter | string
    content?: StringFilter | string
    article?: XOR<BoardArticleRelationFilter, BoardArticleWhereInput>
    writer?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BoardCommentOrderByWithRelationInput = {
    id?: SortOrder
    writer_id?: SortOrder
    article_id?: SortOrder
    content?: SortOrder
    article?: BoardArticleOrderByWithRelationInput
    writer?: UserOrderByWithRelationInput
  }

  export type BoardCommentWhereUniqueInput = {
    id?: string
  }

  export type BoardCommentOrderByWithAggregationInput = {
    id?: SortOrder
    writer_id?: SortOrder
    article_id?: SortOrder
    content?: SortOrder
    _count?: BoardCommentCountOrderByAggregateInput
    _max?: BoardCommentMaxOrderByAggregateInput
    _min?: BoardCommentMinOrderByAggregateInput
  }

  export type BoardCommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoardCommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoardCommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoardCommentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    writer_id?: StringWithAggregatesFilter | string
    article_id?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
  }

  export type BusinessItemWhereInput = {
    AND?: Enumerable<BusinessItemWhereInput>
    OR?: Enumerable<BusinessItemWhereInput>
    NOT?: Enumerable<BusinessItemWhereInput>
    id?: StringFilter | string
    manager_id?: StringFilter | string
    name?: StringFilter | string
    main_image?: StringFilter | string
    manager?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput>
  }

  export type BusinessItemOrderByWithRelationInput = {
    id?: SortOrder
    manager_id?: SortOrder
    name?: SortOrder
    main_image?: SortOrder
    manager?: BusinessUserOrderByWithRelationInput
  }

  export type BusinessItemWhereUniqueInput = {
    id?: string
  }

  export type BusinessItemOrderByWithAggregationInput = {
    id?: SortOrder
    manager_id?: SortOrder
    name?: SortOrder
    main_image?: SortOrder
    _count?: BusinessItemCountOrderByAggregateInput
    _max?: BusinessItemMaxOrderByAggregateInput
    _min?: BusinessItemMinOrderByAggregateInput
  }

  export type BusinessItemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BusinessItemScalarWhereWithAggregatesInput>
    OR?: Enumerable<BusinessItemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BusinessItemScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    manager_id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    main_image?: StringWithAggregatesFilter | string
  }

  export type BusinessRateCategoryWhereInput = {
    AND?: Enumerable<BusinessRateCategoryWhereInput>
    OR?: Enumerable<BusinessRateCategoryWhereInput>
    NOT?: Enumerable<BusinessRateCategoryWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    rates?: BusinessRateListRelationFilter
  }

  export type BusinessRateCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rates?: BusinessRateOrderByRelationAggregateInput
  }

  export type BusinessRateCategoryWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type BusinessRateCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: BusinessRateCategoryCountOrderByAggregateInput
    _max?: BusinessRateCategoryMaxOrderByAggregateInput
    _min?: BusinessRateCategoryMinOrderByAggregateInput
  }

  export type BusinessRateCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BusinessRateCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<BusinessRateCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BusinessRateCategoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type BusinessRateWhereInput = {
    AND?: Enumerable<BusinessRateWhereInput>
    OR?: Enumerable<BusinessRateWhereInput>
    NOT?: Enumerable<BusinessRateWhereInput>
    id?: StringFilter | string
    category_id?: StringFilter | string
    business_id?: StringFilter | string
    rater_id?: StringFilter | string
    rate?: IntFilter | number
    business?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput>
    category?: XOR<BusinessRateCategoryRelationFilter, BusinessRateCategoryWhereInput>
    rater?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }

  export type BusinessRateOrderByWithRelationInput = {
    id?: SortOrder
    category_id?: SortOrder
    business_id?: SortOrder
    rater_id?: SortOrder
    rate?: SortOrder
    business?: BusinessUserOrderByWithRelationInput
    category?: BusinessRateCategoryOrderByWithRelationInput
    rater?: CustomerOrderByWithRelationInput
  }

  export type BusinessRateWhereUniqueInput = {
    id?: string
  }

  export type BusinessRateOrderByWithAggregationInput = {
    id?: SortOrder
    category_id?: SortOrder
    business_id?: SortOrder
    rater_id?: SortOrder
    rate?: SortOrder
    _count?: BusinessRateCountOrderByAggregateInput
    _avg?: BusinessRateAvgOrderByAggregateInput
    _max?: BusinessRateMaxOrderByAggregateInput
    _min?: BusinessRateMinOrderByAggregateInput
    _sum?: BusinessRateSumOrderByAggregateInput
  }

  export type BusinessRateScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BusinessRateScalarWhereWithAggregatesInput>
    OR?: Enumerable<BusinessRateScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BusinessRateScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    category_id?: StringWithAggregatesFilter | string
    business_id?: StringWithAggregatesFilter | string
    rater_id?: StringWithAggregatesFilter | string
    rate?: IntWithAggregatesFilter | number
  }

  export type BusinessReviewWhereInput = {
    AND?: Enumerable<BusinessReviewWhereInput>
    OR?: Enumerable<BusinessReviewWhereInput>
    NOT?: Enumerable<BusinessReviewWhereInput>
    id?: StringFilter | string
    business_id?: StringFilter | string
    reviewer_id?: StringFilter | string
    content?: StringFilter | string
    business?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput>
    reviewer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }

  export type BusinessReviewOrderByWithRelationInput = {
    id?: SortOrder
    business_id?: SortOrder
    reviewer_id?: SortOrder
    content?: SortOrder
    business?: BusinessUserOrderByWithRelationInput
    reviewer?: CustomerOrderByWithRelationInput
  }

  export type BusinessReviewWhereUniqueInput = {
    id?: string
  }

  export type BusinessReviewOrderByWithAggregationInput = {
    id?: SortOrder
    business_id?: SortOrder
    reviewer_id?: SortOrder
    content?: SortOrder
    _count?: BusinessReviewCountOrderByAggregateInput
    _max?: BusinessReviewMaxOrderByAggregateInput
    _min?: BusinessReviewMinOrderByAggregateInput
  }

  export type BusinessReviewScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BusinessReviewScalarWhereWithAggregatesInput>
    OR?: Enumerable<BusinessReviewScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BusinessReviewScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    business_id?: StringWithAggregatesFilter | string
    reviewer_id?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
  }

  export type HomeCareSpecializedFieldWhereInput = {
    AND?: Enumerable<HomeCareSpecializedFieldWhereInput>
    OR?: Enumerable<HomeCareSpecializedFieldWhereInput>
    NOT?: Enumerable<HomeCareSpecializedFieldWhereInput>
    id?: StringFilter | string
    sub_category_id?: StringFilter | string
    company_id?: StringFilter | string
    sub_category?: XOR<HomeCareSubCategoryRelationFilter, HomeCareSubCategoryWhereInput>
    company?: XOR<HomeCareCompanyRelationFilter, HomeCareCompanyWhereInput>
  }

  export type HomeCareSpecializedFieldOrderByWithRelationInput = {
    id?: SortOrder
    sub_category_id?: SortOrder
    company_id?: SortOrder
    sub_category?: HomeCareSubCategoryOrderByWithRelationInput
    company?: HomeCareCompanyOrderByWithRelationInput
  }

  export type HomeCareSpecializedFieldWhereUniqueInput = {
    id?: string
    sub_category_id_company_id?: HomeCareSpecializedFieldSub_category_idCompany_idCompoundUniqueInput
  }

  export type HomeCareSpecializedFieldOrderByWithAggregationInput = {
    id?: SortOrder
    sub_category_id?: SortOrder
    company_id?: SortOrder
    _count?: HomeCareSpecializedFieldCountOrderByAggregateInput
    _max?: HomeCareSpecializedFieldMaxOrderByAggregateInput
    _min?: HomeCareSpecializedFieldMinOrderByAggregateInput
  }

  export type HomeCareSpecializedFieldScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HomeCareSpecializedFieldScalarWhereWithAggregatesInput>
    OR?: Enumerable<HomeCareSpecializedFieldScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HomeCareSpecializedFieldScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sub_category_id?: StringWithAggregatesFilter | string
    company_id?: StringWithAggregatesFilter | string
  }

  export type HomeCareSuperCategoryWhereInput = {
    AND?: Enumerable<HomeCareSuperCategoryWhereInput>
    OR?: Enumerable<HomeCareSuperCategoryWhereInput>
    NOT?: Enumerable<HomeCareSuperCategoryWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    home_care_sub_categories?: HomeCareSubCategoryListRelationFilter
  }

  export type HomeCareSuperCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    home_care_sub_categories?: HomeCareSubCategoryOrderByRelationAggregateInput
  }

  export type HomeCareSuperCategoryWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type HomeCareSuperCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: HomeCareSuperCategoryCountOrderByAggregateInput
    _max?: HomeCareSuperCategoryMaxOrderByAggregateInput
    _min?: HomeCareSuperCategoryMinOrderByAggregateInput
  }

  export type HomeCareSuperCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HomeCareSuperCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<HomeCareSuperCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HomeCareSuperCategoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type HomeCareSubCategoryWhereInput = {
    AND?: Enumerable<HomeCareSubCategoryWhereInput>
    OR?: Enumerable<HomeCareSubCategoryWhereInput>
    NOT?: Enumerable<HomeCareSubCategoryWhereInput>
    id?: StringFilter | string
    super_id?: StringFilter | string
    name?: StringFilter | string
    specialized_fields?: HomeCareSpecializedFieldListRelationFilter
    super?: XOR<HomeCareSuperCategoryRelationFilter, HomeCareSuperCategoryWhereInput>
  }

  export type HomeCareSubCategoryOrderByWithRelationInput = {
    id?: SortOrder
    super_id?: SortOrder
    name?: SortOrder
    specialized_fields?: HomeCareSpecializedFieldOrderByRelationAggregateInput
    super?: HomeCareSuperCategoryOrderByWithRelationInput
  }

  export type HomeCareSubCategoryWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type HomeCareSubCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    super_id?: SortOrder
    name?: SortOrder
    _count?: HomeCareSubCategoryCountOrderByAggregateInput
    _max?: HomeCareSubCategoryMaxOrderByAggregateInput
    _min?: HomeCareSubCategoryMinOrderByAggregateInput
  }

  export type HomeCareSubCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HomeCareSubCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<HomeCareSubCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HomeCareSubCategoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    super_id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type RealEstateSpecializedFieldWhereInput = {
    AND?: Enumerable<RealEstateSpecializedFieldWhereInput>
    OR?: Enumerable<RealEstateSpecializedFieldWhereInput>
    NOT?: Enumerable<RealEstateSpecializedFieldWhereInput>
    id?: StringFilter | string
    sub_category_id?: StringFilter | string
    agent_id?: StringFilter | string
    agent?: XOR<RealEstateAgentRelationFilter, RealEstateAgentWhereInput>
    real_estate_sub_category?: XOR<RealEstateSubCategoryRelationFilter, RealEstateSubCategoryWhereInput>
  }

  export type RealEstateSpecializedFieldOrderByWithRelationInput = {
    id?: SortOrder
    sub_category_id?: SortOrder
    agent_id?: SortOrder
    agent?: RealEstateAgentOrderByWithRelationInput
    real_estate_sub_category?: RealEstateSubCategoryOrderByWithRelationInput
  }

  export type RealEstateSpecializedFieldWhereUniqueInput = {
    id?: string
    sub_category_id_agent_id?: RealEstateSpecializedFieldSub_category_idAgent_idCompoundUniqueInput
  }

  export type RealEstateSpecializedFieldOrderByWithAggregationInput = {
    id?: SortOrder
    sub_category_id?: SortOrder
    agent_id?: SortOrder
    _count?: RealEstateSpecializedFieldCountOrderByAggregateInput
    _max?: RealEstateSpecializedFieldMaxOrderByAggregateInput
    _min?: RealEstateSpecializedFieldMinOrderByAggregateInput
  }

  export type RealEstateSpecializedFieldScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RealEstateSpecializedFieldScalarWhereWithAggregatesInput>
    OR?: Enumerable<RealEstateSpecializedFieldScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RealEstateSpecializedFieldScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sub_category_id?: StringWithAggregatesFilter | string
    agent_id?: StringWithAggregatesFilter | string
  }

  export type RealEstateSuperCategoryWhereInput = {
    AND?: Enumerable<RealEstateSuperCategoryWhereInput>
    OR?: Enumerable<RealEstateSuperCategoryWhereInput>
    NOT?: Enumerable<RealEstateSuperCategoryWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    real_estate_sub_categories?: RealEstateSubCategoryListRelationFilter
  }

  export type RealEstateSuperCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    real_estate_sub_categories?: RealEstateSubCategoryOrderByRelationAggregateInput
  }

  export type RealEstateSuperCategoryWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type RealEstateSuperCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RealEstateSuperCategoryCountOrderByAggregateInput
    _max?: RealEstateSuperCategoryMaxOrderByAggregateInput
    _min?: RealEstateSuperCategoryMinOrderByAggregateInput
  }

  export type RealEstateSuperCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RealEstateSuperCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<RealEstateSuperCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RealEstateSuperCategoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type RealEstateSubCategoryWhereInput = {
    AND?: Enumerable<RealEstateSubCategoryWhereInput>
    OR?: Enumerable<RealEstateSubCategoryWhereInput>
    NOT?: Enumerable<RealEstateSubCategoryWhereInput>
    id?: StringFilter | string
    super_id?: StringFilter | string
    name?: StringFilter | string
    real_estate_specialized_fields?: RealEstateSpecializedFieldListRelationFilter
    super?: XOR<RealEstateSuperCategoryRelationFilter, RealEstateSuperCategoryWhereInput>
  }

  export type RealEstateSubCategoryOrderByWithRelationInput = {
    id?: SortOrder
    super_id?: SortOrder
    name?: SortOrder
    real_estate_specialized_fields?: RealEstateSpecializedFieldOrderByRelationAggregateInput
    super?: RealEstateSuperCategoryOrderByWithRelationInput
  }

  export type RealEstateSubCategoryWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type RealEstateSubCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    super_id?: SortOrder
    name?: SortOrder
    _count?: RealEstateSubCategoryCountOrderByAggregateInput
    _max?: RealEstateSubCategoryMaxOrderByAggregateInput
    _min?: RealEstateSubCategoryMinOrderByAggregateInput
  }

  export type RealEstateSubCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RealEstateSubCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<RealEstateSubCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RealEstateSubCategoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    super_id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type UserAuthenticationWhereInput = {
    AND?: Enumerable<UserAuthenticationWhereInput>
    OR?: Enumerable<UserAuthenticationWhereInput>
    NOT?: Enumerable<UserAuthenticationWhereInput>
    id?: StringFilter | string
    oauth_sub?: StringFilter | string
    oauth_type?: StringFilter | string
    users?: UserListRelationFilter
  }

  export type UserAuthenticationOrderByWithRelationInput = {
    id?: SortOrder
    oauth_sub?: SortOrder
    oauth_type?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type UserAuthenticationWhereUniqueInput = {
    id?: string
  }

  export type UserAuthenticationOrderByWithAggregationInput = {
    id?: SortOrder
    oauth_sub?: SortOrder
    oauth_type?: SortOrder
    _count?: UserAuthenticationCountOrderByAggregateInput
    _max?: UserAuthenticationMaxOrderByAggregateInput
    _min?: UserAuthenticationMinOrderByAggregateInput
  }

  export type UserAuthenticationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserAuthenticationScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserAuthenticationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserAuthenticationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    oauth_sub?: StringWithAggregatesFilter | string
    oauth_type?: StringWithAggregatesFilter | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    auth_id?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    email_verified?: BoolFilter | boolean
    phone?: StringFilter | string
    address_first?: StringFilter | string
    address_second?: StringNullableFilter | string | null
    board_articles?: BoardArticleListRelationFilter
    board_comments?: BoardCommentListRelationFilter
    business_user?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput> | null
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput> | null
    auth?: XOR<UserAuthenticationRelationFilter, UserAuthenticationWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    auth_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    board_articles?: BoardArticleOrderByRelationAggregateInput
    board_comments?: BoardCommentOrderByRelationAggregateInput
    business_user?: BusinessUserOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    auth?: UserAuthenticationOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = {
    id?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    auth_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    auth_id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    email_verified?: BoolWithAggregatesFilter | boolean
    phone?: StringWithAggregatesFilter | string
    address_first?: StringWithAggregatesFilter | string
    address_second?: StringNullableWithAggregatesFilter | string | null
  }

  export type CustomerWhereInput = {
    AND?: Enumerable<CustomerWhereInput>
    OR?: Enumerable<CustomerWhereInput>
    NOT?: Enumerable<CustomerWhereInput>
    id?: StringFilter | string
    birth?: StringNullableFilter | string | null
    gender?: StringNullableFilter | string | null
    business_rates?: BusinessRateListRelationFilter
    business_reviews?: BusinessReviewListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    business_rates?: BusinessRateOrderByRelationAggregateInput
    business_reviews?: BusinessReviewOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type CustomerWhereUniqueInput = {
    id?: string
  }

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    birth?: StringNullableWithAggregatesFilter | string | null
    gender?: StringNullableWithAggregatesFilter | string | null
  }

  export type BusinessUserWhereInput = {
    AND?: Enumerable<BusinessUserWhereInput>
    OR?: Enumerable<BusinessUserWhereInput>
    NOT?: Enumerable<BusinessUserWhereInput>
    id?: StringFilter | string
    is_verified?: BoolFilter | boolean
    introduction_title?: StringNullableFilter | string | null
    introduction_content?: StringNullableFilter | string | null
    business_items?: BusinessItemListRelationFilter
    business_rates?: BusinessRateListRelationFilter
    business_reviews?: BusinessReviewListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    home_care_company?: XOR<HomeCareCompanyRelationFilter, HomeCareCompanyWhereInput> | null
    real_estate_agent?: XOR<RealEstateAgentRelationFilter, RealEstateAgentWhereInput> | null
  }

  export type BusinessUserOrderByWithRelationInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    business_items?: BusinessItemOrderByRelationAggregateInput
    business_rates?: BusinessRateOrderByRelationAggregateInput
    business_reviews?: BusinessReviewOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    home_care_company?: HomeCareCompanyOrderByWithRelationInput
    real_estate_agent?: RealEstateAgentOrderByWithRelationInput
  }

  export type BusinessUserWhereUniqueInput = {
    id?: string
  }

  export type BusinessUserOrderByWithAggregationInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    _count?: BusinessUserCountOrderByAggregateInput
    _max?: BusinessUserMaxOrderByAggregateInput
    _min?: BusinessUserMinOrderByAggregateInput
  }

  export type BusinessUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BusinessUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<BusinessUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BusinessUserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    is_verified?: BoolWithAggregatesFilter | boolean
    introduction_title?: StringNullableWithAggregatesFilter | string | null
    introduction_content?: StringNullableWithAggregatesFilter | string | null
  }

  export type RealEstateAgentWhereInput = {
    AND?: Enumerable<RealEstateAgentWhereInput>
    OR?: Enumerable<RealEstateAgentWhereInput>
    NOT?: Enumerable<RealEstateAgentWhereInput>
    id?: StringFilter | string
    is_licensed?: BoolFilter | boolean
    real_estate_num?: StringFilter | string
    real_estate_name?: StringFilter | string
    licensed_agent_name?: StringFilter | string
    real_estate_phone?: StringFilter | string
    business_user?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput>
    specialized_fields?: RealEstateSpecializedFieldListRelationFilter
  }

  export type RealEstateAgentOrderByWithRelationInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    real_estate_num?: SortOrder
    real_estate_name?: SortOrder
    licensed_agent_name?: SortOrder
    real_estate_phone?: SortOrder
    business_user?: BusinessUserOrderByWithRelationInput
    specialized_fields?: RealEstateSpecializedFieldOrderByRelationAggregateInput
  }

  export type RealEstateAgentWhereUniqueInput = {
    id?: string
  }

  export type RealEstateAgentOrderByWithAggregationInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    real_estate_num?: SortOrder
    real_estate_name?: SortOrder
    licensed_agent_name?: SortOrder
    real_estate_phone?: SortOrder
    _count?: RealEstateAgentCountOrderByAggregateInput
    _max?: RealEstateAgentMaxOrderByAggregateInput
    _min?: RealEstateAgentMinOrderByAggregateInput
  }

  export type RealEstateAgentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RealEstateAgentScalarWhereWithAggregatesInput>
    OR?: Enumerable<RealEstateAgentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RealEstateAgentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    is_licensed?: BoolWithAggregatesFilter | boolean
    real_estate_num?: StringWithAggregatesFilter | string
    real_estate_name?: StringWithAggregatesFilter | string
    licensed_agent_name?: StringWithAggregatesFilter | string
    real_estate_phone?: StringWithAggregatesFilter | string
  }

  export type HomeCareCompanyWhereInput = {
    AND?: Enumerable<HomeCareCompanyWhereInput>
    OR?: Enumerable<HomeCareCompanyWhereInput>
    NOT?: Enumerable<HomeCareCompanyWhereInput>
    id?: StringFilter | string
    business_registration_num?: StringFilter | string
    business_user?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput>
    specialized_fields?: HomeCareSpecializedFieldListRelationFilter
  }

  export type HomeCareCompanyOrderByWithRelationInput = {
    id?: SortOrder
    business_registration_num?: SortOrder
    business_user?: BusinessUserOrderByWithRelationInput
    specialized_fields?: HomeCareSpecializedFieldOrderByRelationAggregateInput
  }

  export type HomeCareCompanyWhereUniqueInput = {
    id?: string
  }

  export type HomeCareCompanyOrderByWithAggregationInput = {
    id?: SortOrder
    business_registration_num?: SortOrder
    _count?: HomeCareCompanyCountOrderByAggregateInput
    _max?: HomeCareCompanyMaxOrderByAggregateInput
    _min?: HomeCareCompanyMinOrderByAggregateInput
  }

  export type HomeCareCompanyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HomeCareCompanyScalarWhereWithAggregatesInput>
    OR?: Enumerable<HomeCareCompanyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HomeCareCompanyScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    business_registration_num?: StringWithAggregatesFilter | string
  }

  export type BoardCreateInput = {
    id: string
    name: string
    articles?: BoardArticleCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateInput = {
    id: string
    name: string
    articles?: BoardArticleUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    articles?: BoardArticleUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    articles?: BoardArticleUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardCreateManyInput = {
    id: string
    name: string
  }

  export type BoardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BoardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BoardArticleCreateInput = {
    id: string
    title: string
    content: string
    board: BoardCreateNestedOneWithoutArticlesInput
    writer: UserCreateNestedOneWithoutBoard_articlesInput
    comments?: BoardCommentCreateNestedManyWithoutArticleInput
  }

  export type BoardArticleUncheckedCreateInput = {
    id: string
    board_id: string
    writer_id: string
    title: string
    content: string
    comments?: BoardCommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type BoardArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    board?: BoardUpdateOneRequiredWithoutArticlesNestedInput
    writer?: UserUpdateOneRequiredWithoutBoard_articlesNestedInput
    comments?: BoardCommentUpdateManyWithoutArticleNestedInput
  }

  export type BoardArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    board_id?: StringFieldUpdateOperationsInput | string
    writer_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    comments?: BoardCommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type BoardArticleCreateManyInput = {
    id: string
    board_id: string
    writer_id: string
    title: string
    content: string
  }

  export type BoardArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type BoardArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    board_id?: StringFieldUpdateOperationsInput | string
    writer_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCommentCreateInput = {
    id: string
    content: string
    article: BoardArticleCreateNestedOneWithoutCommentsInput
    writer: UserCreateNestedOneWithoutBoard_commentsInput
  }

  export type BoardCommentUncheckedCreateInput = {
    id: string
    writer_id: string
    article_id: string
    content: string
  }

  export type BoardCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    article?: BoardArticleUpdateOneRequiredWithoutCommentsNestedInput
    writer?: UserUpdateOneRequiredWithoutBoard_commentsNestedInput
  }

  export type BoardCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    writer_id?: StringFieldUpdateOperationsInput | string
    article_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCommentCreateManyInput = {
    id: string
    writer_id: string
    article_id: string
    content: string
  }

  export type BoardCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    writer_id?: StringFieldUpdateOperationsInput | string
    article_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessItemCreateInput = {
    id: string
    name: string
    main_image: string
    manager: BusinessUserCreateNestedOneWithoutBusiness_itemsInput
  }

  export type BusinessItemUncheckedCreateInput = {
    id: string
    manager_id: string
    name: string
    main_image: string
  }

  export type BusinessItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    main_image?: StringFieldUpdateOperationsInput | string
    manager?: BusinessUserUpdateOneRequiredWithoutBusiness_itemsNestedInput
  }

  export type BusinessItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    manager_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    main_image?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessItemCreateManyInput = {
    id: string
    manager_id: string
    name: string
    main_image: string
  }

  export type BusinessItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    main_image?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    manager_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    main_image?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessRateCategoryCreateInput = {
    id: string
    name: string
    rates?: BusinessRateCreateNestedManyWithoutCategoryInput
  }

  export type BusinessRateCategoryUncheckedCreateInput = {
    id: string
    name: string
    rates?: BusinessRateUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BusinessRateCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rates?: BusinessRateUpdateManyWithoutCategoryNestedInput
  }

  export type BusinessRateCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rates?: BusinessRateUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BusinessRateCategoryCreateManyInput = {
    id: string
    name: string
  }

  export type BusinessRateCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessRateCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessRateCreateInput = {
    id: string
    rate: number
    business: BusinessUserCreateNestedOneWithoutBusiness_ratesInput
    category: BusinessRateCategoryCreateNestedOneWithoutRatesInput
    rater: CustomerCreateNestedOneWithoutBusiness_ratesInput
  }

  export type BusinessRateUncheckedCreateInput = {
    id: string
    category_id: string
    business_id: string
    rater_id: string
    rate: number
  }

  export type BusinessRateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    business?: BusinessUserUpdateOneRequiredWithoutBusiness_ratesNestedInput
    category?: BusinessRateCategoryUpdateOneRequiredWithoutRatesNestedInput
    rater?: CustomerUpdateOneRequiredWithoutBusiness_ratesNestedInput
  }

  export type BusinessRateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    business_id?: StringFieldUpdateOperationsInput | string
    rater_id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessRateCreateManyInput = {
    id: string
    category_id: string
    business_id: string
    rater_id: string
    rate: number
  }

  export type BusinessRateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessRateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    business_id?: StringFieldUpdateOperationsInput | string
    rater_id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessReviewCreateInput = {
    id: string
    content: string
    business: BusinessUserCreateNestedOneWithoutBusiness_reviewsInput
    reviewer: CustomerCreateNestedOneWithoutBusiness_reviewsInput
  }

  export type BusinessReviewUncheckedCreateInput = {
    id: string
    business_id: string
    reviewer_id: string
    content: string
  }

  export type BusinessReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    business?: BusinessUserUpdateOneRequiredWithoutBusiness_reviewsNestedInput
    reviewer?: CustomerUpdateOneRequiredWithoutBusiness_reviewsNestedInput
  }

  export type BusinessReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_id?: StringFieldUpdateOperationsInput | string
    reviewer_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessReviewCreateManyInput = {
    id: string
    business_id: string
    reviewer_id: string
    content: string
  }

  export type BusinessReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_id?: StringFieldUpdateOperationsInput | string
    reviewer_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSpecializedFieldCreateInput = {
    id: string
    sub_category: HomeCareSubCategoryCreateNestedOneWithoutSpecialized_fieldsInput
    company: HomeCareCompanyCreateNestedOneWithoutSpecialized_fieldsInput
  }

  export type HomeCareSpecializedFieldUncheckedCreateInput = {
    id: string
    sub_category_id: string
    company_id: string
  }

  export type HomeCareSpecializedFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub_category?: HomeCareSubCategoryUpdateOneRequiredWithoutSpecialized_fieldsNestedInput
    company?: HomeCareCompanyUpdateOneRequiredWithoutSpecialized_fieldsNestedInput
  }

  export type HomeCareSpecializedFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub_category_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSpecializedFieldCreateManyInput = {
    id: string
    sub_category_id: string
    company_id: string
  }

  export type HomeCareSpecializedFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSpecializedFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub_category_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSuperCategoryCreateInput = {
    id: string
    name: string
    home_care_sub_categories?: HomeCareSubCategoryCreateNestedManyWithoutSuperInput
  }

  export type HomeCareSuperCategoryUncheckedCreateInput = {
    id: string
    name: string
    home_care_sub_categories?: HomeCareSubCategoryUncheckedCreateNestedManyWithoutSuperInput
  }

  export type HomeCareSuperCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    home_care_sub_categories?: HomeCareSubCategoryUpdateManyWithoutSuperNestedInput
  }

  export type HomeCareSuperCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    home_care_sub_categories?: HomeCareSubCategoryUncheckedUpdateManyWithoutSuperNestedInput
  }

  export type HomeCareSuperCategoryCreateManyInput = {
    id: string
    name: string
  }

  export type HomeCareSuperCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSuperCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSubCategoryCreateInput = {
    id: string
    name: string
    specialized_fields?: HomeCareSpecializedFieldCreateNestedManyWithoutSub_categoryInput
    super: HomeCareSuperCategoryCreateNestedOneWithoutHome_care_sub_categoriesInput
  }

  export type HomeCareSubCategoryUncheckedCreateInput = {
    id: string
    super_id: string
    name: string
    specialized_fields?: HomeCareSpecializedFieldUncheckedCreateNestedManyWithoutSub_categoryInput
  }

  export type HomeCareSubCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    specialized_fields?: HomeCareSpecializedFieldUpdateManyWithoutSub_categoryNestedInput
    super?: HomeCareSuperCategoryUpdateOneRequiredWithoutHome_care_sub_categoriesNestedInput
  }

  export type HomeCareSubCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    specialized_fields?: HomeCareSpecializedFieldUncheckedUpdateManyWithoutSub_categoryNestedInput
  }

  export type HomeCareSubCategoryCreateManyInput = {
    id: string
    super_id: string
    name: string
  }

  export type HomeCareSubCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSubCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSpecializedFieldCreateInput = {
    id: string
    agent: RealEstateAgentCreateNestedOneWithoutSpecialized_fieldsInput
    real_estate_sub_category: RealEstateSubCategoryCreateNestedOneWithoutReal_estate_specialized_fieldsInput
  }

  export type RealEstateSpecializedFieldUncheckedCreateInput = {
    id: string
    sub_category_id: string
    agent_id: string
  }

  export type RealEstateSpecializedFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agent?: RealEstateAgentUpdateOneRequiredWithoutSpecialized_fieldsNestedInput
    real_estate_sub_category?: RealEstateSubCategoryUpdateOneRequiredWithoutReal_estate_specialized_fieldsNestedInput
  }

  export type RealEstateSpecializedFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub_category_id?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSpecializedFieldCreateManyInput = {
    id: string
    sub_category_id: string
    agent_id: string
  }

  export type RealEstateSpecializedFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSpecializedFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub_category_id?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSuperCategoryCreateInput = {
    id: string
    name: string
    real_estate_sub_categories?: RealEstateSubCategoryCreateNestedManyWithoutSuperInput
  }

  export type RealEstateSuperCategoryUncheckedCreateInput = {
    id: string
    name: string
    real_estate_sub_categories?: RealEstateSubCategoryUncheckedCreateNestedManyWithoutSuperInput
  }

  export type RealEstateSuperCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    real_estate_sub_categories?: RealEstateSubCategoryUpdateManyWithoutSuperNestedInput
  }

  export type RealEstateSuperCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    real_estate_sub_categories?: RealEstateSubCategoryUncheckedUpdateManyWithoutSuperNestedInput
  }

  export type RealEstateSuperCategoryCreateManyInput = {
    id: string
    name: string
  }

  export type RealEstateSuperCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSuperCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSubCategoryCreateInput = {
    id: string
    name: string
    real_estate_specialized_fields?: RealEstateSpecializedFieldCreateNestedManyWithoutReal_estate_sub_categoryInput
    super: RealEstateSuperCategoryCreateNestedOneWithoutReal_estate_sub_categoriesInput
  }

  export type RealEstateSubCategoryUncheckedCreateInput = {
    id: string
    super_id: string
    name: string
    real_estate_specialized_fields?: RealEstateSpecializedFieldUncheckedCreateNestedManyWithoutReal_estate_sub_categoryInput
  }

  export type RealEstateSubCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    real_estate_specialized_fields?: RealEstateSpecializedFieldUpdateManyWithoutReal_estate_sub_categoryNestedInput
    super?: RealEstateSuperCategoryUpdateOneRequiredWithoutReal_estate_sub_categoriesNestedInput
  }

  export type RealEstateSubCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    real_estate_specialized_fields?: RealEstateSpecializedFieldUncheckedUpdateManyWithoutReal_estate_sub_categoryNestedInput
  }

  export type RealEstateSubCategoryCreateManyInput = {
    id: string
    super_id: string
    name: string
  }

  export type RealEstateSubCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSubCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserAuthenticationCreateInput = {
    id: string
    oauth_sub: string
    oauth_type: string
    users?: UserCreateNestedManyWithoutAuthInput
  }

  export type UserAuthenticationUncheckedCreateInput = {
    id: string
    oauth_sub: string
    oauth_type: string
    users?: UserUncheckedCreateNestedManyWithoutAuthInput
  }

  export type UserAuthenticationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutAuthNestedInput
  }

  export type UserAuthenticationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutAuthNestedInput
  }

  export type UserAuthenticationCreateManyInput = {
    id: string
    oauth_sub: string
    oauth_type: string
  }

  export type UserAuthenticationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: StringFieldUpdateOperationsInput | string
  }

  export type UserAuthenticationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    email_verified: boolean
    phone: string
    address_first: string
    address_second?: string | null
    board_articles?: BoardArticleCreateNestedManyWithoutWriterInput
    board_comments?: BoardCommentCreateNestedManyWithoutWriterInput
    business_user?: BusinessUserCreateNestedOneWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
    auth: UserAuthenticationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    auth_id: string
    name: string
    email: string
    email_verified: boolean
    phone: string
    address_first: string
    address_second?: string | null
    board_articles?: BoardArticleUncheckedCreateNestedManyWithoutWriterInput
    board_comments?: BoardCommentUncheckedCreateNestedManyWithoutWriterInput
    business_user?: BusinessUserUncheckedCreateNestedOneWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    board_articles?: BoardArticleUpdateManyWithoutWriterNestedInput
    board_comments?: BoardCommentUpdateManyWithoutWriterNestedInput
    business_user?: BusinessUserUpdateOneWithoutUserNestedInput
    customer?: CustomerUpdateOneWithoutUserNestedInput
    auth?: UserAuthenticationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    board_articles?: BoardArticleUncheckedUpdateManyWithoutWriterNestedInput
    board_comments?: BoardCommentUncheckedUpdateManyWithoutWriterNestedInput
    business_user?: BusinessUserUncheckedUpdateOneWithoutUserNestedInput
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    auth_id: string
    name: string
    email: string
    email_verified: boolean
    phone: string
    address_first: string
    address_second?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerCreateInput = {
    birth?: string | null
    gender?: string | null
    business_rates?: BusinessRateCreateNestedManyWithoutRaterInput
    business_reviews?: BusinessReviewCreateNestedManyWithoutReviewerInput
    user: UserCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id: string
    birth?: string | null
    gender?: string | null
    business_rates?: BusinessRateUncheckedCreateNestedManyWithoutRaterInput
    business_reviews?: BusinessReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type CustomerUpdateInput = {
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    business_rates?: BusinessRateUpdateManyWithoutRaterNestedInput
    business_reviews?: BusinessReviewUpdateManyWithoutReviewerNestedInput
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    business_rates?: BusinessRateUncheckedUpdateManyWithoutRaterNestedInput
    business_reviews?: BusinessReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type CustomerCreateManyInput = {
    id: string
    birth?: string | null
    gender?: string | null
  }

  export type CustomerUpdateManyMutationInput = {
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessUserCreateInput = {
    is_verified: boolean
    introduction_title?: string | null
    introduction_content?: string | null
    business_items?: BusinessItemCreateNestedManyWithoutManagerInput
    business_rates?: BusinessRateCreateNestedManyWithoutBusinessInput
    business_reviews?: BusinessReviewCreateNestedManyWithoutBusinessInput
    user: UserCreateNestedOneWithoutBusiness_userInput
    home_care_company?: HomeCareCompanyCreateNestedOneWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentCreateNestedOneWithoutBusiness_userInput
  }

  export type BusinessUserUncheckedCreateInput = {
    id: string
    is_verified: boolean
    introduction_title?: string | null
    introduction_content?: string | null
    business_items?: BusinessItemUncheckedCreateNestedManyWithoutManagerInput
    business_rates?: BusinessRateUncheckedCreateNestedManyWithoutBusinessInput
    business_reviews?: BusinessReviewUncheckedCreateNestedManyWithoutBusinessInput
    home_care_company?: HomeCareCompanyUncheckedCreateNestedOneWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentUncheckedCreateNestedOneWithoutBusiness_userInput
  }

  export type BusinessUserUpdateInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_items?: BusinessItemUpdateManyWithoutManagerNestedInput
    business_rates?: BusinessRateUpdateManyWithoutBusinessNestedInput
    business_reviews?: BusinessReviewUpdateManyWithoutBusinessNestedInput
    user?: UserUpdateOneRequiredWithoutBusiness_userNestedInput
    home_care_company?: HomeCareCompanyUpdateOneWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUpdateOneWithoutBusiness_userNestedInput
  }

  export type BusinessUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_items?: BusinessItemUncheckedUpdateManyWithoutManagerNestedInput
    business_rates?: BusinessRateUncheckedUpdateManyWithoutBusinessNestedInput
    business_reviews?: BusinessReviewUncheckedUpdateManyWithoutBusinessNestedInput
    home_care_company?: HomeCareCompanyUncheckedUpdateOneWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUncheckedUpdateOneWithoutBusiness_userNestedInput
  }

  export type BusinessUserCreateManyInput = {
    id: string
    is_verified: boolean
    introduction_title?: string | null
    introduction_content?: string | null
  }

  export type BusinessUserUpdateManyMutationInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RealEstateAgentCreateInput = {
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    licensed_agent_name: string
    real_estate_phone: string
    business_user: BusinessUserCreateNestedOneWithoutReal_estate_agentInput
    specialized_fields?: RealEstateSpecializedFieldCreateNestedManyWithoutAgentInput
  }

  export type RealEstateAgentUncheckedCreateInput = {
    id: string
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    licensed_agent_name: string
    real_estate_phone: string
    specialized_fields?: RealEstateSpecializedFieldUncheckedCreateNestedManyWithoutAgentInput
  }

  export type RealEstateAgentUpdateInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
    business_user?: BusinessUserUpdateOneRequiredWithoutReal_estate_agentNestedInput
    specialized_fields?: RealEstateSpecializedFieldUpdateManyWithoutAgentNestedInput
  }

  export type RealEstateAgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
    specialized_fields?: RealEstateSpecializedFieldUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type RealEstateAgentCreateManyInput = {
    id: string
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    licensed_agent_name: string
    real_estate_phone: string
  }

  export type RealEstateAgentUpdateManyMutationInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateAgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareCompanyCreateInput = {
    business_registration_num: string
    business_user: BusinessUserCreateNestedOneWithoutHome_care_companyInput
    specialized_fields?: HomeCareSpecializedFieldCreateNestedManyWithoutCompanyInput
  }

  export type HomeCareCompanyUncheckedCreateInput = {
    id: string
    business_registration_num: string
    specialized_fields?: HomeCareSpecializedFieldUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type HomeCareCompanyUpdateInput = {
    business_registration_num?: StringFieldUpdateOperationsInput | string
    business_user?: BusinessUserUpdateOneRequiredWithoutHome_care_companyNestedInput
    specialized_fields?: HomeCareSpecializedFieldUpdateManyWithoutCompanyNestedInput
  }

  export type HomeCareCompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_registration_num?: StringFieldUpdateOperationsInput | string
    specialized_fields?: HomeCareSpecializedFieldUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type HomeCareCompanyCreateManyInput = {
    id: string
    business_registration_num: string
  }

  export type HomeCareCompanyUpdateManyMutationInput = {
    business_registration_num?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareCompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_registration_num?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type BoardArticleListRelationFilter = {
    every?: BoardArticleWhereInput
    some?: BoardArticleWhereInput
    none?: BoardArticleWhereInput
  }

  export type BoardArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BoardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BoardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoardRelationFilter = {
    is?: BoardWhereInput
    isNot?: BoardWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BoardCommentListRelationFilter = {
    every?: BoardCommentWhereInput
    some?: BoardCommentWhereInput
    none?: BoardCommentWhereInput
  }

  export type BoardCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardArticleCountOrderByAggregateInput = {
    id?: SortOrder
    board_id?: SortOrder
    writer_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type BoardArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    board_id?: SortOrder
    writer_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type BoardArticleMinOrderByAggregateInput = {
    id?: SortOrder
    board_id?: SortOrder
    writer_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type BoardArticleRelationFilter = {
    is?: BoardArticleWhereInput
    isNot?: BoardArticleWhereInput
  }

  export type BoardCommentCountOrderByAggregateInput = {
    id?: SortOrder
    writer_id?: SortOrder
    article_id?: SortOrder
    content?: SortOrder
  }

  export type BoardCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    writer_id?: SortOrder
    article_id?: SortOrder
    content?: SortOrder
  }

  export type BoardCommentMinOrderByAggregateInput = {
    id?: SortOrder
    writer_id?: SortOrder
    article_id?: SortOrder
    content?: SortOrder
  }

  export type BusinessUserRelationFilter = {
    is?: BusinessUserWhereInput
    isNot?: BusinessUserWhereInput
  }

  export type BusinessItemCountOrderByAggregateInput = {
    id?: SortOrder
    manager_id?: SortOrder
    name?: SortOrder
    main_image?: SortOrder
  }

  export type BusinessItemMaxOrderByAggregateInput = {
    id?: SortOrder
    manager_id?: SortOrder
    name?: SortOrder
    main_image?: SortOrder
  }

  export type BusinessItemMinOrderByAggregateInput = {
    id?: SortOrder
    manager_id?: SortOrder
    name?: SortOrder
    main_image?: SortOrder
  }

  export type BusinessRateListRelationFilter = {
    every?: BusinessRateWhereInput
    some?: BusinessRateWhereInput
    none?: BusinessRateWhereInput
  }

  export type BusinessRateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessRateCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BusinessRateCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BusinessRateCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type BusinessRateCategoryRelationFilter = {
    is?: BusinessRateCategoryWhereInput
    isNot?: BusinessRateCategoryWhereInput
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type BusinessRateCountOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    business_id?: SortOrder
    rater_id?: SortOrder
    rate?: SortOrder
  }

  export type BusinessRateAvgOrderByAggregateInput = {
    rate?: SortOrder
  }

  export type BusinessRateMaxOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    business_id?: SortOrder
    rater_id?: SortOrder
    rate?: SortOrder
  }

  export type BusinessRateMinOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    business_id?: SortOrder
    rater_id?: SortOrder
    rate?: SortOrder
  }

  export type BusinessRateSumOrderByAggregateInput = {
    rate?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type BusinessReviewCountOrderByAggregateInput = {
    id?: SortOrder
    business_id?: SortOrder
    reviewer_id?: SortOrder
    content?: SortOrder
  }

  export type BusinessReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    business_id?: SortOrder
    reviewer_id?: SortOrder
    content?: SortOrder
  }

  export type BusinessReviewMinOrderByAggregateInput = {
    id?: SortOrder
    business_id?: SortOrder
    reviewer_id?: SortOrder
    content?: SortOrder
  }

  export type HomeCareSubCategoryRelationFilter = {
    is?: HomeCareSubCategoryWhereInput
    isNot?: HomeCareSubCategoryWhereInput
  }

  export type HomeCareCompanyRelationFilter = {
    is?: HomeCareCompanyWhereInput
    isNot?: HomeCareCompanyWhereInput
  }

  export type HomeCareSpecializedFieldSub_category_idCompany_idCompoundUniqueInput = {
    sub_category_id: string
    company_id: string
  }

  export type HomeCareSpecializedFieldCountOrderByAggregateInput = {
    id?: SortOrder
    sub_category_id?: SortOrder
    company_id?: SortOrder
  }

  export type HomeCareSpecializedFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    sub_category_id?: SortOrder
    company_id?: SortOrder
  }

  export type HomeCareSpecializedFieldMinOrderByAggregateInput = {
    id?: SortOrder
    sub_category_id?: SortOrder
    company_id?: SortOrder
  }

  export type HomeCareSubCategoryListRelationFilter = {
    every?: HomeCareSubCategoryWhereInput
    some?: HomeCareSubCategoryWhereInput
    none?: HomeCareSubCategoryWhereInput
  }

  export type HomeCareSubCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HomeCareSuperCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HomeCareSuperCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HomeCareSuperCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HomeCareSpecializedFieldListRelationFilter = {
    every?: HomeCareSpecializedFieldWhereInput
    some?: HomeCareSpecializedFieldWhereInput
    none?: HomeCareSpecializedFieldWhereInput
  }

  export type HomeCareSuperCategoryRelationFilter = {
    is?: HomeCareSuperCategoryWhereInput
    isNot?: HomeCareSuperCategoryWhereInput
  }

  export type HomeCareSpecializedFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HomeCareSubCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    super_id?: SortOrder
    name?: SortOrder
  }

  export type HomeCareSubCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    super_id?: SortOrder
    name?: SortOrder
  }

  export type HomeCareSubCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    super_id?: SortOrder
    name?: SortOrder
  }

  export type RealEstateAgentRelationFilter = {
    is?: RealEstateAgentWhereInput
    isNot?: RealEstateAgentWhereInput
  }

  export type RealEstateSubCategoryRelationFilter = {
    is?: RealEstateSubCategoryWhereInput
    isNot?: RealEstateSubCategoryWhereInput
  }

  export type RealEstateSpecializedFieldSub_category_idAgent_idCompoundUniqueInput = {
    sub_category_id: string
    agent_id: string
  }

  export type RealEstateSpecializedFieldCountOrderByAggregateInput = {
    id?: SortOrder
    sub_category_id?: SortOrder
    agent_id?: SortOrder
  }

  export type RealEstateSpecializedFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    sub_category_id?: SortOrder
    agent_id?: SortOrder
  }

  export type RealEstateSpecializedFieldMinOrderByAggregateInput = {
    id?: SortOrder
    sub_category_id?: SortOrder
    agent_id?: SortOrder
  }

  export type RealEstateSubCategoryListRelationFilter = {
    every?: RealEstateSubCategoryWhereInput
    some?: RealEstateSubCategoryWhereInput
    none?: RealEstateSubCategoryWhereInput
  }

  export type RealEstateSubCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RealEstateSuperCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RealEstateSuperCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RealEstateSuperCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RealEstateSpecializedFieldListRelationFilter = {
    every?: RealEstateSpecializedFieldWhereInput
    some?: RealEstateSpecializedFieldWhereInput
    none?: RealEstateSpecializedFieldWhereInput
  }

  export type RealEstateSuperCategoryRelationFilter = {
    is?: RealEstateSuperCategoryWhereInput
    isNot?: RealEstateSuperCategoryWhereInput
  }

  export type RealEstateSpecializedFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RealEstateSubCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    super_id?: SortOrder
    name?: SortOrder
  }

  export type RealEstateSubCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    super_id?: SortOrder
    name?: SortOrder
  }

  export type RealEstateSubCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    super_id?: SortOrder
    name?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAuthenticationCountOrderByAggregateInput = {
    id?: SortOrder
    oauth_sub?: SortOrder
    oauth_type?: SortOrder
  }

  export type UserAuthenticationMaxOrderByAggregateInput = {
    id?: SortOrder
    oauth_sub?: SortOrder
    oauth_type?: SortOrder
  }

  export type UserAuthenticationMinOrderByAggregateInput = {
    id?: SortOrder
    oauth_sub?: SortOrder
    oauth_type?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type UserAuthenticationRelationFilter = {
    is?: UserAuthenticationWhereInput
    isNot?: UserAuthenticationWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    auth_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    auth_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    auth_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BusinessReviewListRelationFilter = {
    every?: BusinessReviewWhereInput
    some?: BusinessReviewWhereInput
    none?: BusinessReviewWhereInput
  }

  export type BusinessReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
  }

  export type BusinessItemListRelationFilter = {
    every?: BusinessItemWhereInput
    some?: BusinessItemWhereInput
    none?: BusinessItemWhereInput
  }

  export type BusinessItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessUserCountOrderByAggregateInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
  }

  export type BusinessUserMaxOrderByAggregateInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
  }

  export type BusinessUserMinOrderByAggregateInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
  }

  export type RealEstateAgentCountOrderByAggregateInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    real_estate_num?: SortOrder
    real_estate_name?: SortOrder
    licensed_agent_name?: SortOrder
    real_estate_phone?: SortOrder
  }

  export type RealEstateAgentMaxOrderByAggregateInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    real_estate_num?: SortOrder
    real_estate_name?: SortOrder
    licensed_agent_name?: SortOrder
    real_estate_phone?: SortOrder
  }

  export type RealEstateAgentMinOrderByAggregateInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    real_estate_num?: SortOrder
    real_estate_name?: SortOrder
    licensed_agent_name?: SortOrder
    real_estate_phone?: SortOrder
  }

  export type HomeCareCompanyCountOrderByAggregateInput = {
    id?: SortOrder
    business_registration_num?: SortOrder
  }

  export type HomeCareCompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    business_registration_num?: SortOrder
  }

  export type HomeCareCompanyMinOrderByAggregateInput = {
    id?: SortOrder
    business_registration_num?: SortOrder
  }

  export type BoardArticleCreateNestedManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardArticleCreateWithoutBoardInput>, Enumerable<BoardArticleUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardArticleCreateOrConnectWithoutBoardInput>
    createMany?: BoardArticleCreateManyBoardInputEnvelope
    connect?: Enumerable<BoardArticleWhereUniqueInput>
  }

  export type BoardArticleUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardArticleCreateWithoutBoardInput>, Enumerable<BoardArticleUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardArticleCreateOrConnectWithoutBoardInput>
    createMany?: BoardArticleCreateManyBoardInputEnvelope
    connect?: Enumerable<BoardArticleWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoardArticleUpdateManyWithoutBoardNestedInput = {
    create?: XOR<Enumerable<BoardArticleCreateWithoutBoardInput>, Enumerable<BoardArticleUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardArticleCreateOrConnectWithoutBoardInput>
    upsert?: Enumerable<BoardArticleUpsertWithWhereUniqueWithoutBoardInput>
    createMany?: BoardArticleCreateManyBoardInputEnvelope
    set?: Enumerable<BoardArticleWhereUniqueInput>
    disconnect?: Enumerable<BoardArticleWhereUniqueInput>
    delete?: Enumerable<BoardArticleWhereUniqueInput>
    connect?: Enumerable<BoardArticleWhereUniqueInput>
    update?: Enumerable<BoardArticleUpdateWithWhereUniqueWithoutBoardInput>
    updateMany?: Enumerable<BoardArticleUpdateManyWithWhereWithoutBoardInput>
    deleteMany?: Enumerable<BoardArticleScalarWhereInput>
  }

  export type BoardArticleUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<Enumerable<BoardArticleCreateWithoutBoardInput>, Enumerable<BoardArticleUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardArticleCreateOrConnectWithoutBoardInput>
    upsert?: Enumerable<BoardArticleUpsertWithWhereUniqueWithoutBoardInput>
    createMany?: BoardArticleCreateManyBoardInputEnvelope
    set?: Enumerable<BoardArticleWhereUniqueInput>
    disconnect?: Enumerable<BoardArticleWhereUniqueInput>
    delete?: Enumerable<BoardArticleWhereUniqueInput>
    connect?: Enumerable<BoardArticleWhereUniqueInput>
    update?: Enumerable<BoardArticleUpdateWithWhereUniqueWithoutBoardInput>
    updateMany?: Enumerable<BoardArticleUpdateManyWithWhereWithoutBoardInput>
    deleteMany?: Enumerable<BoardArticleScalarWhereInput>
  }

  export type BoardCreateNestedOneWithoutArticlesInput = {
    create?: XOR<BoardCreateWithoutArticlesInput, BoardUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: BoardCreateOrConnectWithoutArticlesInput
    connect?: BoardWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBoard_articlesInput = {
    create?: XOR<UserCreateWithoutBoard_articlesInput, UserUncheckedCreateWithoutBoard_articlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoard_articlesInput
    connect?: UserWhereUniqueInput
  }

  export type BoardCommentCreateNestedManyWithoutArticleInput = {
    create?: XOR<Enumerable<BoardCommentCreateWithoutArticleInput>, Enumerable<BoardCommentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<BoardCommentCreateOrConnectWithoutArticleInput>
    createMany?: BoardCommentCreateManyArticleInputEnvelope
    connect?: Enumerable<BoardCommentWhereUniqueInput>
  }

  export type BoardCommentUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<Enumerable<BoardCommentCreateWithoutArticleInput>, Enumerable<BoardCommentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<BoardCommentCreateOrConnectWithoutArticleInput>
    createMany?: BoardCommentCreateManyArticleInputEnvelope
    connect?: Enumerable<BoardCommentWhereUniqueInput>
  }

  export type BoardUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<BoardCreateWithoutArticlesInput, BoardUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: BoardCreateOrConnectWithoutArticlesInput
    upsert?: BoardUpsertWithoutArticlesInput
    connect?: BoardWhereUniqueInput
    update?: XOR<BoardUpdateWithoutArticlesInput, BoardUncheckedUpdateWithoutArticlesInput>
  }

  export type UserUpdateOneRequiredWithoutBoard_articlesNestedInput = {
    create?: XOR<UserCreateWithoutBoard_articlesInput, UserUncheckedCreateWithoutBoard_articlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoard_articlesInput
    upsert?: UserUpsertWithoutBoard_articlesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBoard_articlesInput, UserUncheckedUpdateWithoutBoard_articlesInput>
  }

  export type BoardCommentUpdateManyWithoutArticleNestedInput = {
    create?: XOR<Enumerable<BoardCommentCreateWithoutArticleInput>, Enumerable<BoardCommentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<BoardCommentCreateOrConnectWithoutArticleInput>
    upsert?: Enumerable<BoardCommentUpsertWithWhereUniqueWithoutArticleInput>
    createMany?: BoardCommentCreateManyArticleInputEnvelope
    set?: Enumerable<BoardCommentWhereUniqueInput>
    disconnect?: Enumerable<BoardCommentWhereUniqueInput>
    delete?: Enumerable<BoardCommentWhereUniqueInput>
    connect?: Enumerable<BoardCommentWhereUniqueInput>
    update?: Enumerable<BoardCommentUpdateWithWhereUniqueWithoutArticleInput>
    updateMany?: Enumerable<BoardCommentUpdateManyWithWhereWithoutArticleInput>
    deleteMany?: Enumerable<BoardCommentScalarWhereInput>
  }

  export type BoardCommentUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<Enumerable<BoardCommentCreateWithoutArticleInput>, Enumerable<BoardCommentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<BoardCommentCreateOrConnectWithoutArticleInput>
    upsert?: Enumerable<BoardCommentUpsertWithWhereUniqueWithoutArticleInput>
    createMany?: BoardCommentCreateManyArticleInputEnvelope
    set?: Enumerable<BoardCommentWhereUniqueInput>
    disconnect?: Enumerable<BoardCommentWhereUniqueInput>
    delete?: Enumerable<BoardCommentWhereUniqueInput>
    connect?: Enumerable<BoardCommentWhereUniqueInput>
    update?: Enumerable<BoardCommentUpdateWithWhereUniqueWithoutArticleInput>
    updateMany?: Enumerable<BoardCommentUpdateManyWithWhereWithoutArticleInput>
    deleteMany?: Enumerable<BoardCommentScalarWhereInput>
  }

  export type BoardArticleCreateNestedOneWithoutCommentsInput = {
    create?: XOR<BoardArticleCreateWithoutCommentsInput, BoardArticleUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BoardArticleCreateOrConnectWithoutCommentsInput
    connect?: BoardArticleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBoard_commentsInput = {
    create?: XOR<UserCreateWithoutBoard_commentsInput, UserUncheckedCreateWithoutBoard_commentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoard_commentsInput
    connect?: UserWhereUniqueInput
  }

  export type BoardArticleUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<BoardArticleCreateWithoutCommentsInput, BoardArticleUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BoardArticleCreateOrConnectWithoutCommentsInput
    upsert?: BoardArticleUpsertWithoutCommentsInput
    connect?: BoardArticleWhereUniqueInput
    update?: XOR<BoardArticleUpdateWithoutCommentsInput, BoardArticleUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutBoard_commentsNestedInput = {
    create?: XOR<UserCreateWithoutBoard_commentsInput, UserUncheckedCreateWithoutBoard_commentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoard_commentsInput
    upsert?: UserUpsertWithoutBoard_commentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBoard_commentsInput, UserUncheckedUpdateWithoutBoard_commentsInput>
  }

  export type BusinessUserCreateNestedOneWithoutBusiness_itemsInput = {
    create?: XOR<BusinessUserCreateWithoutBusiness_itemsInput, BusinessUserUncheckedCreateWithoutBusiness_itemsInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutBusiness_itemsInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type BusinessUserUpdateOneRequiredWithoutBusiness_itemsNestedInput = {
    create?: XOR<BusinessUserCreateWithoutBusiness_itemsInput, BusinessUserUncheckedCreateWithoutBusiness_itemsInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutBusiness_itemsInput
    upsert?: BusinessUserUpsertWithoutBusiness_itemsInput
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutBusiness_itemsInput, BusinessUserUncheckedUpdateWithoutBusiness_itemsInput>
  }

  export type BusinessRateCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<BusinessRateCreateWithoutCategoryInput>, Enumerable<BusinessRateUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<BusinessRateCreateOrConnectWithoutCategoryInput>
    createMany?: BusinessRateCreateManyCategoryInputEnvelope
    connect?: Enumerable<BusinessRateWhereUniqueInput>
  }

  export type BusinessRateUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<BusinessRateCreateWithoutCategoryInput>, Enumerable<BusinessRateUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<BusinessRateCreateOrConnectWithoutCategoryInput>
    createMany?: BusinessRateCreateManyCategoryInputEnvelope
    connect?: Enumerable<BusinessRateWhereUniqueInput>
  }

  export type BusinessRateUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<BusinessRateCreateWithoutCategoryInput>, Enumerable<BusinessRateUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<BusinessRateCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<BusinessRateUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: BusinessRateCreateManyCategoryInputEnvelope
    set?: Enumerable<BusinessRateWhereUniqueInput>
    disconnect?: Enumerable<BusinessRateWhereUniqueInput>
    delete?: Enumerable<BusinessRateWhereUniqueInput>
    connect?: Enumerable<BusinessRateWhereUniqueInput>
    update?: Enumerable<BusinessRateUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<BusinessRateUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<BusinessRateScalarWhereInput>
  }

  export type BusinessRateUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<BusinessRateCreateWithoutCategoryInput>, Enumerable<BusinessRateUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<BusinessRateCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<BusinessRateUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: BusinessRateCreateManyCategoryInputEnvelope
    set?: Enumerable<BusinessRateWhereUniqueInput>
    disconnect?: Enumerable<BusinessRateWhereUniqueInput>
    delete?: Enumerable<BusinessRateWhereUniqueInput>
    connect?: Enumerable<BusinessRateWhereUniqueInput>
    update?: Enumerable<BusinessRateUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<BusinessRateUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<BusinessRateScalarWhereInput>
  }

  export type BusinessUserCreateNestedOneWithoutBusiness_ratesInput = {
    create?: XOR<BusinessUserCreateWithoutBusiness_ratesInput, BusinessUserUncheckedCreateWithoutBusiness_ratesInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutBusiness_ratesInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type BusinessRateCategoryCreateNestedOneWithoutRatesInput = {
    create?: XOR<BusinessRateCategoryCreateWithoutRatesInput, BusinessRateCategoryUncheckedCreateWithoutRatesInput>
    connectOrCreate?: BusinessRateCategoryCreateOrConnectWithoutRatesInput
    connect?: BusinessRateCategoryWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutBusiness_ratesInput = {
    create?: XOR<CustomerCreateWithoutBusiness_ratesInput, CustomerUncheckedCreateWithoutBusiness_ratesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBusiness_ratesInput
    connect?: CustomerWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusinessUserUpdateOneRequiredWithoutBusiness_ratesNestedInput = {
    create?: XOR<BusinessUserCreateWithoutBusiness_ratesInput, BusinessUserUncheckedCreateWithoutBusiness_ratesInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutBusiness_ratesInput
    upsert?: BusinessUserUpsertWithoutBusiness_ratesInput
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutBusiness_ratesInput, BusinessUserUncheckedUpdateWithoutBusiness_ratesInput>
  }

  export type BusinessRateCategoryUpdateOneRequiredWithoutRatesNestedInput = {
    create?: XOR<BusinessRateCategoryCreateWithoutRatesInput, BusinessRateCategoryUncheckedCreateWithoutRatesInput>
    connectOrCreate?: BusinessRateCategoryCreateOrConnectWithoutRatesInput
    upsert?: BusinessRateCategoryUpsertWithoutRatesInput
    connect?: BusinessRateCategoryWhereUniqueInput
    update?: XOR<BusinessRateCategoryUpdateWithoutRatesInput, BusinessRateCategoryUncheckedUpdateWithoutRatesInput>
  }

  export type CustomerUpdateOneRequiredWithoutBusiness_ratesNestedInput = {
    create?: XOR<CustomerCreateWithoutBusiness_ratesInput, CustomerUncheckedCreateWithoutBusiness_ratesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBusiness_ratesInput
    upsert?: CustomerUpsertWithoutBusiness_ratesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutBusiness_ratesInput, CustomerUncheckedUpdateWithoutBusiness_ratesInput>
  }

  export type BusinessUserCreateNestedOneWithoutBusiness_reviewsInput = {
    create?: XOR<BusinessUserCreateWithoutBusiness_reviewsInput, BusinessUserUncheckedCreateWithoutBusiness_reviewsInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutBusiness_reviewsInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutBusiness_reviewsInput = {
    create?: XOR<CustomerCreateWithoutBusiness_reviewsInput, CustomerUncheckedCreateWithoutBusiness_reviewsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBusiness_reviewsInput
    connect?: CustomerWhereUniqueInput
  }

  export type BusinessUserUpdateOneRequiredWithoutBusiness_reviewsNestedInput = {
    create?: XOR<BusinessUserCreateWithoutBusiness_reviewsInput, BusinessUserUncheckedCreateWithoutBusiness_reviewsInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutBusiness_reviewsInput
    upsert?: BusinessUserUpsertWithoutBusiness_reviewsInput
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutBusiness_reviewsInput, BusinessUserUncheckedUpdateWithoutBusiness_reviewsInput>
  }

  export type CustomerUpdateOneRequiredWithoutBusiness_reviewsNestedInput = {
    create?: XOR<CustomerCreateWithoutBusiness_reviewsInput, CustomerUncheckedCreateWithoutBusiness_reviewsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBusiness_reviewsInput
    upsert?: CustomerUpsertWithoutBusiness_reviewsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutBusiness_reviewsInput, CustomerUncheckedUpdateWithoutBusiness_reviewsInput>
  }

  export type HomeCareSubCategoryCreateNestedOneWithoutSpecialized_fieldsInput = {
    create?: XOR<HomeCareSubCategoryCreateWithoutSpecialized_fieldsInput, HomeCareSubCategoryUncheckedCreateWithoutSpecialized_fieldsInput>
    connectOrCreate?: HomeCareSubCategoryCreateOrConnectWithoutSpecialized_fieldsInput
    connect?: HomeCareSubCategoryWhereUniqueInput
  }

  export type HomeCareCompanyCreateNestedOneWithoutSpecialized_fieldsInput = {
    create?: XOR<HomeCareCompanyCreateWithoutSpecialized_fieldsInput, HomeCareCompanyUncheckedCreateWithoutSpecialized_fieldsInput>
    connectOrCreate?: HomeCareCompanyCreateOrConnectWithoutSpecialized_fieldsInput
    connect?: HomeCareCompanyWhereUniqueInput
  }

  export type HomeCareSubCategoryUpdateOneRequiredWithoutSpecialized_fieldsNestedInput = {
    create?: XOR<HomeCareSubCategoryCreateWithoutSpecialized_fieldsInput, HomeCareSubCategoryUncheckedCreateWithoutSpecialized_fieldsInput>
    connectOrCreate?: HomeCareSubCategoryCreateOrConnectWithoutSpecialized_fieldsInput
    upsert?: HomeCareSubCategoryUpsertWithoutSpecialized_fieldsInput
    connect?: HomeCareSubCategoryWhereUniqueInput
    update?: XOR<HomeCareSubCategoryUpdateWithoutSpecialized_fieldsInput, HomeCareSubCategoryUncheckedUpdateWithoutSpecialized_fieldsInput>
  }

  export type HomeCareCompanyUpdateOneRequiredWithoutSpecialized_fieldsNestedInput = {
    create?: XOR<HomeCareCompanyCreateWithoutSpecialized_fieldsInput, HomeCareCompanyUncheckedCreateWithoutSpecialized_fieldsInput>
    connectOrCreate?: HomeCareCompanyCreateOrConnectWithoutSpecialized_fieldsInput
    upsert?: HomeCareCompanyUpsertWithoutSpecialized_fieldsInput
    connect?: HomeCareCompanyWhereUniqueInput
    update?: XOR<HomeCareCompanyUpdateWithoutSpecialized_fieldsInput, HomeCareCompanyUncheckedUpdateWithoutSpecialized_fieldsInput>
  }

  export type HomeCareSubCategoryCreateNestedManyWithoutSuperInput = {
    create?: XOR<Enumerable<HomeCareSubCategoryCreateWithoutSuperInput>, Enumerable<HomeCareSubCategoryUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<HomeCareSubCategoryCreateOrConnectWithoutSuperInput>
    createMany?: HomeCareSubCategoryCreateManySuperInputEnvelope
    connect?: Enumerable<HomeCareSubCategoryWhereUniqueInput>
  }

  export type HomeCareSubCategoryUncheckedCreateNestedManyWithoutSuperInput = {
    create?: XOR<Enumerable<HomeCareSubCategoryCreateWithoutSuperInput>, Enumerable<HomeCareSubCategoryUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<HomeCareSubCategoryCreateOrConnectWithoutSuperInput>
    createMany?: HomeCareSubCategoryCreateManySuperInputEnvelope
    connect?: Enumerable<HomeCareSubCategoryWhereUniqueInput>
  }

  export type HomeCareSubCategoryUpdateManyWithoutSuperNestedInput = {
    create?: XOR<Enumerable<HomeCareSubCategoryCreateWithoutSuperInput>, Enumerable<HomeCareSubCategoryUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<HomeCareSubCategoryCreateOrConnectWithoutSuperInput>
    upsert?: Enumerable<HomeCareSubCategoryUpsertWithWhereUniqueWithoutSuperInput>
    createMany?: HomeCareSubCategoryCreateManySuperInputEnvelope
    set?: Enumerable<HomeCareSubCategoryWhereUniqueInput>
    disconnect?: Enumerable<HomeCareSubCategoryWhereUniqueInput>
    delete?: Enumerable<HomeCareSubCategoryWhereUniqueInput>
    connect?: Enumerable<HomeCareSubCategoryWhereUniqueInput>
    update?: Enumerable<HomeCareSubCategoryUpdateWithWhereUniqueWithoutSuperInput>
    updateMany?: Enumerable<HomeCareSubCategoryUpdateManyWithWhereWithoutSuperInput>
    deleteMany?: Enumerable<HomeCareSubCategoryScalarWhereInput>
  }

  export type HomeCareSubCategoryUncheckedUpdateManyWithoutSuperNestedInput = {
    create?: XOR<Enumerable<HomeCareSubCategoryCreateWithoutSuperInput>, Enumerable<HomeCareSubCategoryUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<HomeCareSubCategoryCreateOrConnectWithoutSuperInput>
    upsert?: Enumerable<HomeCareSubCategoryUpsertWithWhereUniqueWithoutSuperInput>
    createMany?: HomeCareSubCategoryCreateManySuperInputEnvelope
    set?: Enumerable<HomeCareSubCategoryWhereUniqueInput>
    disconnect?: Enumerable<HomeCareSubCategoryWhereUniqueInput>
    delete?: Enumerable<HomeCareSubCategoryWhereUniqueInput>
    connect?: Enumerable<HomeCareSubCategoryWhereUniqueInput>
    update?: Enumerable<HomeCareSubCategoryUpdateWithWhereUniqueWithoutSuperInput>
    updateMany?: Enumerable<HomeCareSubCategoryUpdateManyWithWhereWithoutSuperInput>
    deleteMany?: Enumerable<HomeCareSubCategoryScalarWhereInput>
  }

  export type HomeCareSpecializedFieldCreateNestedManyWithoutSub_categoryInput = {
    create?: XOR<Enumerable<HomeCareSpecializedFieldCreateWithoutSub_categoryInput>, Enumerable<HomeCareSpecializedFieldUncheckedCreateWithoutSub_categoryInput>>
    connectOrCreate?: Enumerable<HomeCareSpecializedFieldCreateOrConnectWithoutSub_categoryInput>
    createMany?: HomeCareSpecializedFieldCreateManySub_categoryInputEnvelope
    connect?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
  }

  export type HomeCareSuperCategoryCreateNestedOneWithoutHome_care_sub_categoriesInput = {
    create?: XOR<HomeCareSuperCategoryCreateWithoutHome_care_sub_categoriesInput, HomeCareSuperCategoryUncheckedCreateWithoutHome_care_sub_categoriesInput>
    connectOrCreate?: HomeCareSuperCategoryCreateOrConnectWithoutHome_care_sub_categoriesInput
    connect?: HomeCareSuperCategoryWhereUniqueInput
  }

  export type HomeCareSpecializedFieldUncheckedCreateNestedManyWithoutSub_categoryInput = {
    create?: XOR<Enumerable<HomeCareSpecializedFieldCreateWithoutSub_categoryInput>, Enumerable<HomeCareSpecializedFieldUncheckedCreateWithoutSub_categoryInput>>
    connectOrCreate?: Enumerable<HomeCareSpecializedFieldCreateOrConnectWithoutSub_categoryInput>
    createMany?: HomeCareSpecializedFieldCreateManySub_categoryInputEnvelope
    connect?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
  }

  export type HomeCareSpecializedFieldUpdateManyWithoutSub_categoryNestedInput = {
    create?: XOR<Enumerable<HomeCareSpecializedFieldCreateWithoutSub_categoryInput>, Enumerable<HomeCareSpecializedFieldUncheckedCreateWithoutSub_categoryInput>>
    connectOrCreate?: Enumerable<HomeCareSpecializedFieldCreateOrConnectWithoutSub_categoryInput>
    upsert?: Enumerable<HomeCareSpecializedFieldUpsertWithWhereUniqueWithoutSub_categoryInput>
    createMany?: HomeCareSpecializedFieldCreateManySub_categoryInputEnvelope
    set?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
    disconnect?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
    delete?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
    connect?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
    update?: Enumerable<HomeCareSpecializedFieldUpdateWithWhereUniqueWithoutSub_categoryInput>
    updateMany?: Enumerable<HomeCareSpecializedFieldUpdateManyWithWhereWithoutSub_categoryInput>
    deleteMany?: Enumerable<HomeCareSpecializedFieldScalarWhereInput>
  }

  export type HomeCareSuperCategoryUpdateOneRequiredWithoutHome_care_sub_categoriesNestedInput = {
    create?: XOR<HomeCareSuperCategoryCreateWithoutHome_care_sub_categoriesInput, HomeCareSuperCategoryUncheckedCreateWithoutHome_care_sub_categoriesInput>
    connectOrCreate?: HomeCareSuperCategoryCreateOrConnectWithoutHome_care_sub_categoriesInput
    upsert?: HomeCareSuperCategoryUpsertWithoutHome_care_sub_categoriesInput
    connect?: HomeCareSuperCategoryWhereUniqueInput
    update?: XOR<HomeCareSuperCategoryUpdateWithoutHome_care_sub_categoriesInput, HomeCareSuperCategoryUncheckedUpdateWithoutHome_care_sub_categoriesInput>
  }

  export type HomeCareSpecializedFieldUncheckedUpdateManyWithoutSub_categoryNestedInput = {
    create?: XOR<Enumerable<HomeCareSpecializedFieldCreateWithoutSub_categoryInput>, Enumerable<HomeCareSpecializedFieldUncheckedCreateWithoutSub_categoryInput>>
    connectOrCreate?: Enumerable<HomeCareSpecializedFieldCreateOrConnectWithoutSub_categoryInput>
    upsert?: Enumerable<HomeCareSpecializedFieldUpsertWithWhereUniqueWithoutSub_categoryInput>
    createMany?: HomeCareSpecializedFieldCreateManySub_categoryInputEnvelope
    set?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
    disconnect?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
    delete?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
    connect?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
    update?: Enumerable<HomeCareSpecializedFieldUpdateWithWhereUniqueWithoutSub_categoryInput>
    updateMany?: Enumerable<HomeCareSpecializedFieldUpdateManyWithWhereWithoutSub_categoryInput>
    deleteMany?: Enumerable<HomeCareSpecializedFieldScalarWhereInput>
  }

  export type RealEstateAgentCreateNestedOneWithoutSpecialized_fieldsInput = {
    create?: XOR<RealEstateAgentCreateWithoutSpecialized_fieldsInput, RealEstateAgentUncheckedCreateWithoutSpecialized_fieldsInput>
    connectOrCreate?: RealEstateAgentCreateOrConnectWithoutSpecialized_fieldsInput
    connect?: RealEstateAgentWhereUniqueInput
  }

  export type RealEstateSubCategoryCreateNestedOneWithoutReal_estate_specialized_fieldsInput = {
    create?: XOR<RealEstateSubCategoryCreateWithoutReal_estate_specialized_fieldsInput, RealEstateSubCategoryUncheckedCreateWithoutReal_estate_specialized_fieldsInput>
    connectOrCreate?: RealEstateSubCategoryCreateOrConnectWithoutReal_estate_specialized_fieldsInput
    connect?: RealEstateSubCategoryWhereUniqueInput
  }

  export type RealEstateAgentUpdateOneRequiredWithoutSpecialized_fieldsNestedInput = {
    create?: XOR<RealEstateAgentCreateWithoutSpecialized_fieldsInput, RealEstateAgentUncheckedCreateWithoutSpecialized_fieldsInput>
    connectOrCreate?: RealEstateAgentCreateOrConnectWithoutSpecialized_fieldsInput
    upsert?: RealEstateAgentUpsertWithoutSpecialized_fieldsInput
    connect?: RealEstateAgentWhereUniqueInput
    update?: XOR<RealEstateAgentUpdateWithoutSpecialized_fieldsInput, RealEstateAgentUncheckedUpdateWithoutSpecialized_fieldsInput>
  }

  export type RealEstateSubCategoryUpdateOneRequiredWithoutReal_estate_specialized_fieldsNestedInput = {
    create?: XOR<RealEstateSubCategoryCreateWithoutReal_estate_specialized_fieldsInput, RealEstateSubCategoryUncheckedCreateWithoutReal_estate_specialized_fieldsInput>
    connectOrCreate?: RealEstateSubCategoryCreateOrConnectWithoutReal_estate_specialized_fieldsInput
    upsert?: RealEstateSubCategoryUpsertWithoutReal_estate_specialized_fieldsInput
    connect?: RealEstateSubCategoryWhereUniqueInput
    update?: XOR<RealEstateSubCategoryUpdateWithoutReal_estate_specialized_fieldsInput, RealEstateSubCategoryUncheckedUpdateWithoutReal_estate_specialized_fieldsInput>
  }

  export type RealEstateSubCategoryCreateNestedManyWithoutSuperInput = {
    create?: XOR<Enumerable<RealEstateSubCategoryCreateWithoutSuperInput>, Enumerable<RealEstateSubCategoryUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<RealEstateSubCategoryCreateOrConnectWithoutSuperInput>
    createMany?: RealEstateSubCategoryCreateManySuperInputEnvelope
    connect?: Enumerable<RealEstateSubCategoryWhereUniqueInput>
  }

  export type RealEstateSubCategoryUncheckedCreateNestedManyWithoutSuperInput = {
    create?: XOR<Enumerable<RealEstateSubCategoryCreateWithoutSuperInput>, Enumerable<RealEstateSubCategoryUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<RealEstateSubCategoryCreateOrConnectWithoutSuperInput>
    createMany?: RealEstateSubCategoryCreateManySuperInputEnvelope
    connect?: Enumerable<RealEstateSubCategoryWhereUniqueInput>
  }

  export type RealEstateSubCategoryUpdateManyWithoutSuperNestedInput = {
    create?: XOR<Enumerable<RealEstateSubCategoryCreateWithoutSuperInput>, Enumerable<RealEstateSubCategoryUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<RealEstateSubCategoryCreateOrConnectWithoutSuperInput>
    upsert?: Enumerable<RealEstateSubCategoryUpsertWithWhereUniqueWithoutSuperInput>
    createMany?: RealEstateSubCategoryCreateManySuperInputEnvelope
    set?: Enumerable<RealEstateSubCategoryWhereUniqueInput>
    disconnect?: Enumerable<RealEstateSubCategoryWhereUniqueInput>
    delete?: Enumerable<RealEstateSubCategoryWhereUniqueInput>
    connect?: Enumerable<RealEstateSubCategoryWhereUniqueInput>
    update?: Enumerable<RealEstateSubCategoryUpdateWithWhereUniqueWithoutSuperInput>
    updateMany?: Enumerable<RealEstateSubCategoryUpdateManyWithWhereWithoutSuperInput>
    deleteMany?: Enumerable<RealEstateSubCategoryScalarWhereInput>
  }

  export type RealEstateSubCategoryUncheckedUpdateManyWithoutSuperNestedInput = {
    create?: XOR<Enumerable<RealEstateSubCategoryCreateWithoutSuperInput>, Enumerable<RealEstateSubCategoryUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<RealEstateSubCategoryCreateOrConnectWithoutSuperInput>
    upsert?: Enumerable<RealEstateSubCategoryUpsertWithWhereUniqueWithoutSuperInput>
    createMany?: RealEstateSubCategoryCreateManySuperInputEnvelope
    set?: Enumerable<RealEstateSubCategoryWhereUniqueInput>
    disconnect?: Enumerable<RealEstateSubCategoryWhereUniqueInput>
    delete?: Enumerable<RealEstateSubCategoryWhereUniqueInput>
    connect?: Enumerable<RealEstateSubCategoryWhereUniqueInput>
    update?: Enumerable<RealEstateSubCategoryUpdateWithWhereUniqueWithoutSuperInput>
    updateMany?: Enumerable<RealEstateSubCategoryUpdateManyWithWhereWithoutSuperInput>
    deleteMany?: Enumerable<RealEstateSubCategoryScalarWhereInput>
  }

  export type RealEstateSpecializedFieldCreateNestedManyWithoutReal_estate_sub_categoryInput = {
    create?: XOR<Enumerable<RealEstateSpecializedFieldCreateWithoutReal_estate_sub_categoryInput>, Enumerable<RealEstateSpecializedFieldUncheckedCreateWithoutReal_estate_sub_categoryInput>>
    connectOrCreate?: Enumerable<RealEstateSpecializedFieldCreateOrConnectWithoutReal_estate_sub_categoryInput>
    createMany?: RealEstateSpecializedFieldCreateManyReal_estate_sub_categoryInputEnvelope
    connect?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
  }

  export type RealEstateSuperCategoryCreateNestedOneWithoutReal_estate_sub_categoriesInput = {
    create?: XOR<RealEstateSuperCategoryCreateWithoutReal_estate_sub_categoriesInput, RealEstateSuperCategoryUncheckedCreateWithoutReal_estate_sub_categoriesInput>
    connectOrCreate?: RealEstateSuperCategoryCreateOrConnectWithoutReal_estate_sub_categoriesInput
    connect?: RealEstateSuperCategoryWhereUniqueInput
  }

  export type RealEstateSpecializedFieldUncheckedCreateNestedManyWithoutReal_estate_sub_categoryInput = {
    create?: XOR<Enumerable<RealEstateSpecializedFieldCreateWithoutReal_estate_sub_categoryInput>, Enumerable<RealEstateSpecializedFieldUncheckedCreateWithoutReal_estate_sub_categoryInput>>
    connectOrCreate?: Enumerable<RealEstateSpecializedFieldCreateOrConnectWithoutReal_estate_sub_categoryInput>
    createMany?: RealEstateSpecializedFieldCreateManyReal_estate_sub_categoryInputEnvelope
    connect?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
  }

  export type RealEstateSpecializedFieldUpdateManyWithoutReal_estate_sub_categoryNestedInput = {
    create?: XOR<Enumerable<RealEstateSpecializedFieldCreateWithoutReal_estate_sub_categoryInput>, Enumerable<RealEstateSpecializedFieldUncheckedCreateWithoutReal_estate_sub_categoryInput>>
    connectOrCreate?: Enumerable<RealEstateSpecializedFieldCreateOrConnectWithoutReal_estate_sub_categoryInput>
    upsert?: Enumerable<RealEstateSpecializedFieldUpsertWithWhereUniqueWithoutReal_estate_sub_categoryInput>
    createMany?: RealEstateSpecializedFieldCreateManyReal_estate_sub_categoryInputEnvelope
    set?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
    disconnect?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
    delete?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
    connect?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
    update?: Enumerable<RealEstateSpecializedFieldUpdateWithWhereUniqueWithoutReal_estate_sub_categoryInput>
    updateMany?: Enumerable<RealEstateSpecializedFieldUpdateManyWithWhereWithoutReal_estate_sub_categoryInput>
    deleteMany?: Enumerable<RealEstateSpecializedFieldScalarWhereInput>
  }

  export type RealEstateSuperCategoryUpdateOneRequiredWithoutReal_estate_sub_categoriesNestedInput = {
    create?: XOR<RealEstateSuperCategoryCreateWithoutReal_estate_sub_categoriesInput, RealEstateSuperCategoryUncheckedCreateWithoutReal_estate_sub_categoriesInput>
    connectOrCreate?: RealEstateSuperCategoryCreateOrConnectWithoutReal_estate_sub_categoriesInput
    upsert?: RealEstateSuperCategoryUpsertWithoutReal_estate_sub_categoriesInput
    connect?: RealEstateSuperCategoryWhereUniqueInput
    update?: XOR<RealEstateSuperCategoryUpdateWithoutReal_estate_sub_categoriesInput, RealEstateSuperCategoryUncheckedUpdateWithoutReal_estate_sub_categoriesInput>
  }

  export type RealEstateSpecializedFieldUncheckedUpdateManyWithoutReal_estate_sub_categoryNestedInput = {
    create?: XOR<Enumerable<RealEstateSpecializedFieldCreateWithoutReal_estate_sub_categoryInput>, Enumerable<RealEstateSpecializedFieldUncheckedCreateWithoutReal_estate_sub_categoryInput>>
    connectOrCreate?: Enumerable<RealEstateSpecializedFieldCreateOrConnectWithoutReal_estate_sub_categoryInput>
    upsert?: Enumerable<RealEstateSpecializedFieldUpsertWithWhereUniqueWithoutReal_estate_sub_categoryInput>
    createMany?: RealEstateSpecializedFieldCreateManyReal_estate_sub_categoryInputEnvelope
    set?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
    disconnect?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
    delete?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
    connect?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
    update?: Enumerable<RealEstateSpecializedFieldUpdateWithWhereUniqueWithoutReal_estate_sub_categoryInput>
    updateMany?: Enumerable<RealEstateSpecializedFieldUpdateManyWithWhereWithoutReal_estate_sub_categoryInput>
    deleteMany?: Enumerable<RealEstateSpecializedFieldScalarWhereInput>
  }

  export type UserCreateNestedManyWithoutAuthInput = {
    create?: XOR<Enumerable<UserCreateWithoutAuthInput>, Enumerable<UserUncheckedCreateWithoutAuthInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAuthInput>
    createMany?: UserCreateManyAuthInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutAuthInput = {
    create?: XOR<Enumerable<UserCreateWithoutAuthInput>, Enumerable<UserUncheckedCreateWithoutAuthInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAuthInput>
    createMany?: UserCreateManyAuthInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUpdateManyWithoutAuthNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutAuthInput>, Enumerable<UserUncheckedCreateWithoutAuthInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAuthInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutAuthInput>
    createMany?: UserCreateManyAuthInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutAuthInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutAuthInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutAuthNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutAuthInput>, Enumerable<UserUncheckedCreateWithoutAuthInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAuthInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutAuthInput>
    createMany?: UserCreateManyAuthInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutAuthInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutAuthInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type BoardArticleCreateNestedManyWithoutWriterInput = {
    create?: XOR<Enumerable<BoardArticleCreateWithoutWriterInput>, Enumerable<BoardArticleUncheckedCreateWithoutWriterInput>>
    connectOrCreate?: Enumerable<BoardArticleCreateOrConnectWithoutWriterInput>
    createMany?: BoardArticleCreateManyWriterInputEnvelope
    connect?: Enumerable<BoardArticleWhereUniqueInput>
  }

  export type BoardCommentCreateNestedManyWithoutWriterInput = {
    create?: XOR<Enumerable<BoardCommentCreateWithoutWriterInput>, Enumerable<BoardCommentUncheckedCreateWithoutWriterInput>>
    connectOrCreate?: Enumerable<BoardCommentCreateOrConnectWithoutWriterInput>
    createMany?: BoardCommentCreateManyWriterInputEnvelope
    connect?: Enumerable<BoardCommentWhereUniqueInput>
  }

  export type BusinessUserCreateNestedOneWithoutUserInput = {
    create?: XOR<BusinessUserCreateWithoutUserInput, BusinessUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutUserInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserAuthenticationCreateNestedOneWithoutUsersInput = {
    create?: XOR<UserAuthenticationCreateWithoutUsersInput, UserAuthenticationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserAuthenticationCreateOrConnectWithoutUsersInput
    connect?: UserAuthenticationWhereUniqueInput
  }

  export type BoardArticleUncheckedCreateNestedManyWithoutWriterInput = {
    create?: XOR<Enumerable<BoardArticleCreateWithoutWriterInput>, Enumerable<BoardArticleUncheckedCreateWithoutWriterInput>>
    connectOrCreate?: Enumerable<BoardArticleCreateOrConnectWithoutWriterInput>
    createMany?: BoardArticleCreateManyWriterInputEnvelope
    connect?: Enumerable<BoardArticleWhereUniqueInput>
  }

  export type BoardCommentUncheckedCreateNestedManyWithoutWriterInput = {
    create?: XOR<Enumerable<BoardCommentCreateWithoutWriterInput>, Enumerable<BoardCommentUncheckedCreateWithoutWriterInput>>
    connectOrCreate?: Enumerable<BoardCommentCreateOrConnectWithoutWriterInput>
    createMany?: BoardCommentCreateManyWriterInputEnvelope
    connect?: Enumerable<BoardCommentWhereUniqueInput>
  }

  export type BusinessUserUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BusinessUserCreateWithoutUserInput, BusinessUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutUserInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type CustomerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    connect?: CustomerWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoardArticleUpdateManyWithoutWriterNestedInput = {
    create?: XOR<Enumerable<BoardArticleCreateWithoutWriterInput>, Enumerable<BoardArticleUncheckedCreateWithoutWriterInput>>
    connectOrCreate?: Enumerable<BoardArticleCreateOrConnectWithoutWriterInput>
    upsert?: Enumerable<BoardArticleUpsertWithWhereUniqueWithoutWriterInput>
    createMany?: BoardArticleCreateManyWriterInputEnvelope
    set?: Enumerable<BoardArticleWhereUniqueInput>
    disconnect?: Enumerable<BoardArticleWhereUniqueInput>
    delete?: Enumerable<BoardArticleWhereUniqueInput>
    connect?: Enumerable<BoardArticleWhereUniqueInput>
    update?: Enumerable<BoardArticleUpdateWithWhereUniqueWithoutWriterInput>
    updateMany?: Enumerable<BoardArticleUpdateManyWithWhereWithoutWriterInput>
    deleteMany?: Enumerable<BoardArticleScalarWhereInput>
  }

  export type BoardCommentUpdateManyWithoutWriterNestedInput = {
    create?: XOR<Enumerable<BoardCommentCreateWithoutWriterInput>, Enumerable<BoardCommentUncheckedCreateWithoutWriterInput>>
    connectOrCreate?: Enumerable<BoardCommentCreateOrConnectWithoutWriterInput>
    upsert?: Enumerable<BoardCommentUpsertWithWhereUniqueWithoutWriterInput>
    createMany?: BoardCommentCreateManyWriterInputEnvelope
    set?: Enumerable<BoardCommentWhereUniqueInput>
    disconnect?: Enumerable<BoardCommentWhereUniqueInput>
    delete?: Enumerable<BoardCommentWhereUniqueInput>
    connect?: Enumerable<BoardCommentWhereUniqueInput>
    update?: Enumerable<BoardCommentUpdateWithWhereUniqueWithoutWriterInput>
    updateMany?: Enumerable<BoardCommentUpdateManyWithWhereWithoutWriterInput>
    deleteMany?: Enumerable<BoardCommentScalarWhereInput>
  }

  export type BusinessUserUpdateOneWithoutUserNestedInput = {
    create?: XOR<BusinessUserCreateWithoutUserInput, BusinessUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutUserInput
    upsert?: BusinessUserUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutUserInput, BusinessUserUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUpdateOneWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    upsert?: CustomerUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type UserAuthenticationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<UserAuthenticationCreateWithoutUsersInput, UserAuthenticationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserAuthenticationCreateOrConnectWithoutUsersInput
    upsert?: UserAuthenticationUpsertWithoutUsersInput
    connect?: UserAuthenticationWhereUniqueInput
    update?: XOR<UserAuthenticationUpdateWithoutUsersInput, UserAuthenticationUncheckedUpdateWithoutUsersInput>
  }

  export type BoardArticleUncheckedUpdateManyWithoutWriterNestedInput = {
    create?: XOR<Enumerable<BoardArticleCreateWithoutWriterInput>, Enumerable<BoardArticleUncheckedCreateWithoutWriterInput>>
    connectOrCreate?: Enumerable<BoardArticleCreateOrConnectWithoutWriterInput>
    upsert?: Enumerable<BoardArticleUpsertWithWhereUniqueWithoutWriterInput>
    createMany?: BoardArticleCreateManyWriterInputEnvelope
    set?: Enumerable<BoardArticleWhereUniqueInput>
    disconnect?: Enumerable<BoardArticleWhereUniqueInput>
    delete?: Enumerable<BoardArticleWhereUniqueInput>
    connect?: Enumerable<BoardArticleWhereUniqueInput>
    update?: Enumerable<BoardArticleUpdateWithWhereUniqueWithoutWriterInput>
    updateMany?: Enumerable<BoardArticleUpdateManyWithWhereWithoutWriterInput>
    deleteMany?: Enumerable<BoardArticleScalarWhereInput>
  }

  export type BoardCommentUncheckedUpdateManyWithoutWriterNestedInput = {
    create?: XOR<Enumerable<BoardCommentCreateWithoutWriterInput>, Enumerable<BoardCommentUncheckedCreateWithoutWriterInput>>
    connectOrCreate?: Enumerable<BoardCommentCreateOrConnectWithoutWriterInput>
    upsert?: Enumerable<BoardCommentUpsertWithWhereUniqueWithoutWriterInput>
    createMany?: BoardCommentCreateManyWriterInputEnvelope
    set?: Enumerable<BoardCommentWhereUniqueInput>
    disconnect?: Enumerable<BoardCommentWhereUniqueInput>
    delete?: Enumerable<BoardCommentWhereUniqueInput>
    connect?: Enumerable<BoardCommentWhereUniqueInput>
    update?: Enumerable<BoardCommentUpdateWithWhereUniqueWithoutWriterInput>
    updateMany?: Enumerable<BoardCommentUpdateManyWithWhereWithoutWriterInput>
    deleteMany?: Enumerable<BoardCommentScalarWhereInput>
  }

  export type BusinessUserUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BusinessUserCreateWithoutUserInput, BusinessUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutUserInput
    upsert?: BusinessUserUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutUserInput, BusinessUserUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    upsert?: CustomerUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type BusinessRateCreateNestedManyWithoutRaterInput = {
    create?: XOR<Enumerable<BusinessRateCreateWithoutRaterInput>, Enumerable<BusinessRateUncheckedCreateWithoutRaterInput>>
    connectOrCreate?: Enumerable<BusinessRateCreateOrConnectWithoutRaterInput>
    createMany?: BusinessRateCreateManyRaterInputEnvelope
    connect?: Enumerable<BusinessRateWhereUniqueInput>
  }

  export type BusinessReviewCreateNestedManyWithoutReviewerInput = {
    create?: XOR<Enumerable<BusinessReviewCreateWithoutReviewerInput>, Enumerable<BusinessReviewUncheckedCreateWithoutReviewerInput>>
    connectOrCreate?: Enumerable<BusinessReviewCreateOrConnectWithoutReviewerInput>
    createMany?: BusinessReviewCreateManyReviewerInputEnvelope
    connect?: Enumerable<BusinessReviewWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutCustomerInput = {
    create?: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    connect?: UserWhereUniqueInput
  }

  export type BusinessRateUncheckedCreateNestedManyWithoutRaterInput = {
    create?: XOR<Enumerable<BusinessRateCreateWithoutRaterInput>, Enumerable<BusinessRateUncheckedCreateWithoutRaterInput>>
    connectOrCreate?: Enumerable<BusinessRateCreateOrConnectWithoutRaterInput>
    createMany?: BusinessRateCreateManyRaterInputEnvelope
    connect?: Enumerable<BusinessRateWhereUniqueInput>
  }

  export type BusinessReviewUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<Enumerable<BusinessReviewCreateWithoutReviewerInput>, Enumerable<BusinessReviewUncheckedCreateWithoutReviewerInput>>
    connectOrCreate?: Enumerable<BusinessReviewCreateOrConnectWithoutReviewerInput>
    createMany?: BusinessReviewCreateManyReviewerInputEnvelope
    connect?: Enumerable<BusinessReviewWhereUniqueInput>
  }

  export type BusinessRateUpdateManyWithoutRaterNestedInput = {
    create?: XOR<Enumerable<BusinessRateCreateWithoutRaterInput>, Enumerable<BusinessRateUncheckedCreateWithoutRaterInput>>
    connectOrCreate?: Enumerable<BusinessRateCreateOrConnectWithoutRaterInput>
    upsert?: Enumerable<BusinessRateUpsertWithWhereUniqueWithoutRaterInput>
    createMany?: BusinessRateCreateManyRaterInputEnvelope
    set?: Enumerable<BusinessRateWhereUniqueInput>
    disconnect?: Enumerable<BusinessRateWhereUniqueInput>
    delete?: Enumerable<BusinessRateWhereUniqueInput>
    connect?: Enumerable<BusinessRateWhereUniqueInput>
    update?: Enumerable<BusinessRateUpdateWithWhereUniqueWithoutRaterInput>
    updateMany?: Enumerable<BusinessRateUpdateManyWithWhereWithoutRaterInput>
    deleteMany?: Enumerable<BusinessRateScalarWhereInput>
  }

  export type BusinessReviewUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<Enumerable<BusinessReviewCreateWithoutReviewerInput>, Enumerable<BusinessReviewUncheckedCreateWithoutReviewerInput>>
    connectOrCreate?: Enumerable<BusinessReviewCreateOrConnectWithoutReviewerInput>
    upsert?: Enumerable<BusinessReviewUpsertWithWhereUniqueWithoutReviewerInput>
    createMany?: BusinessReviewCreateManyReviewerInputEnvelope
    set?: Enumerable<BusinessReviewWhereUniqueInput>
    disconnect?: Enumerable<BusinessReviewWhereUniqueInput>
    delete?: Enumerable<BusinessReviewWhereUniqueInput>
    connect?: Enumerable<BusinessReviewWhereUniqueInput>
    update?: Enumerable<BusinessReviewUpdateWithWhereUniqueWithoutReviewerInput>
    updateMany?: Enumerable<BusinessReviewUpdateManyWithWhereWithoutReviewerInput>
    deleteMany?: Enumerable<BusinessReviewScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    upsert?: UserUpsertWithoutCustomerInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCustomerInput, UserUncheckedUpdateWithoutCustomerInput>
  }

  export type BusinessRateUncheckedUpdateManyWithoutRaterNestedInput = {
    create?: XOR<Enumerable<BusinessRateCreateWithoutRaterInput>, Enumerable<BusinessRateUncheckedCreateWithoutRaterInput>>
    connectOrCreate?: Enumerable<BusinessRateCreateOrConnectWithoutRaterInput>
    upsert?: Enumerable<BusinessRateUpsertWithWhereUniqueWithoutRaterInput>
    createMany?: BusinessRateCreateManyRaterInputEnvelope
    set?: Enumerable<BusinessRateWhereUniqueInput>
    disconnect?: Enumerable<BusinessRateWhereUniqueInput>
    delete?: Enumerable<BusinessRateWhereUniqueInput>
    connect?: Enumerable<BusinessRateWhereUniqueInput>
    update?: Enumerable<BusinessRateUpdateWithWhereUniqueWithoutRaterInput>
    updateMany?: Enumerable<BusinessRateUpdateManyWithWhereWithoutRaterInput>
    deleteMany?: Enumerable<BusinessRateScalarWhereInput>
  }

  export type BusinessReviewUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<Enumerable<BusinessReviewCreateWithoutReviewerInput>, Enumerable<BusinessReviewUncheckedCreateWithoutReviewerInput>>
    connectOrCreate?: Enumerable<BusinessReviewCreateOrConnectWithoutReviewerInput>
    upsert?: Enumerable<BusinessReviewUpsertWithWhereUniqueWithoutReviewerInput>
    createMany?: BusinessReviewCreateManyReviewerInputEnvelope
    set?: Enumerable<BusinessReviewWhereUniqueInput>
    disconnect?: Enumerable<BusinessReviewWhereUniqueInput>
    delete?: Enumerable<BusinessReviewWhereUniqueInput>
    connect?: Enumerable<BusinessReviewWhereUniqueInput>
    update?: Enumerable<BusinessReviewUpdateWithWhereUniqueWithoutReviewerInput>
    updateMany?: Enumerable<BusinessReviewUpdateManyWithWhereWithoutReviewerInput>
    deleteMany?: Enumerable<BusinessReviewScalarWhereInput>
  }

  export type BusinessItemCreateNestedManyWithoutManagerInput = {
    create?: XOR<Enumerable<BusinessItemCreateWithoutManagerInput>, Enumerable<BusinessItemUncheckedCreateWithoutManagerInput>>
    connectOrCreate?: Enumerable<BusinessItemCreateOrConnectWithoutManagerInput>
    createMany?: BusinessItemCreateManyManagerInputEnvelope
    connect?: Enumerable<BusinessItemWhereUniqueInput>
  }

  export type BusinessRateCreateNestedManyWithoutBusinessInput = {
    create?: XOR<Enumerable<BusinessRateCreateWithoutBusinessInput>, Enumerable<BusinessRateUncheckedCreateWithoutBusinessInput>>
    connectOrCreate?: Enumerable<BusinessRateCreateOrConnectWithoutBusinessInput>
    createMany?: BusinessRateCreateManyBusinessInputEnvelope
    connect?: Enumerable<BusinessRateWhereUniqueInput>
  }

  export type BusinessReviewCreateNestedManyWithoutBusinessInput = {
    create?: XOR<Enumerable<BusinessReviewCreateWithoutBusinessInput>, Enumerable<BusinessReviewUncheckedCreateWithoutBusinessInput>>
    connectOrCreate?: Enumerable<BusinessReviewCreateOrConnectWithoutBusinessInput>
    createMany?: BusinessReviewCreateManyBusinessInputEnvelope
    connect?: Enumerable<BusinessReviewWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutBusiness_userInput = {
    create?: XOR<UserCreateWithoutBusiness_userInput, UserUncheckedCreateWithoutBusiness_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusiness_userInput
    connect?: UserWhereUniqueInput
  }

  export type HomeCareCompanyCreateNestedOneWithoutBusiness_userInput = {
    create?: XOR<HomeCareCompanyCreateWithoutBusiness_userInput, HomeCareCompanyUncheckedCreateWithoutBusiness_userInput>
    connectOrCreate?: HomeCareCompanyCreateOrConnectWithoutBusiness_userInput
    connect?: HomeCareCompanyWhereUniqueInput
  }

  export type RealEstateAgentCreateNestedOneWithoutBusiness_userInput = {
    create?: XOR<RealEstateAgentCreateWithoutBusiness_userInput, RealEstateAgentUncheckedCreateWithoutBusiness_userInput>
    connectOrCreate?: RealEstateAgentCreateOrConnectWithoutBusiness_userInput
    connect?: RealEstateAgentWhereUniqueInput
  }

  export type BusinessItemUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<Enumerable<BusinessItemCreateWithoutManagerInput>, Enumerable<BusinessItemUncheckedCreateWithoutManagerInput>>
    connectOrCreate?: Enumerable<BusinessItemCreateOrConnectWithoutManagerInput>
    createMany?: BusinessItemCreateManyManagerInputEnvelope
    connect?: Enumerable<BusinessItemWhereUniqueInput>
  }

  export type BusinessRateUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<Enumerable<BusinessRateCreateWithoutBusinessInput>, Enumerable<BusinessRateUncheckedCreateWithoutBusinessInput>>
    connectOrCreate?: Enumerable<BusinessRateCreateOrConnectWithoutBusinessInput>
    createMany?: BusinessRateCreateManyBusinessInputEnvelope
    connect?: Enumerable<BusinessRateWhereUniqueInput>
  }

  export type BusinessReviewUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<Enumerable<BusinessReviewCreateWithoutBusinessInput>, Enumerable<BusinessReviewUncheckedCreateWithoutBusinessInput>>
    connectOrCreate?: Enumerable<BusinessReviewCreateOrConnectWithoutBusinessInput>
    createMany?: BusinessReviewCreateManyBusinessInputEnvelope
    connect?: Enumerable<BusinessReviewWhereUniqueInput>
  }

  export type HomeCareCompanyUncheckedCreateNestedOneWithoutBusiness_userInput = {
    create?: XOR<HomeCareCompanyCreateWithoutBusiness_userInput, HomeCareCompanyUncheckedCreateWithoutBusiness_userInput>
    connectOrCreate?: HomeCareCompanyCreateOrConnectWithoutBusiness_userInput
    connect?: HomeCareCompanyWhereUniqueInput
  }

  export type RealEstateAgentUncheckedCreateNestedOneWithoutBusiness_userInput = {
    create?: XOR<RealEstateAgentCreateWithoutBusiness_userInput, RealEstateAgentUncheckedCreateWithoutBusiness_userInput>
    connectOrCreate?: RealEstateAgentCreateOrConnectWithoutBusiness_userInput
    connect?: RealEstateAgentWhereUniqueInput
  }

  export type BusinessItemUpdateManyWithoutManagerNestedInput = {
    create?: XOR<Enumerable<BusinessItemCreateWithoutManagerInput>, Enumerable<BusinessItemUncheckedCreateWithoutManagerInput>>
    connectOrCreate?: Enumerable<BusinessItemCreateOrConnectWithoutManagerInput>
    upsert?: Enumerable<BusinessItemUpsertWithWhereUniqueWithoutManagerInput>
    createMany?: BusinessItemCreateManyManagerInputEnvelope
    set?: Enumerable<BusinessItemWhereUniqueInput>
    disconnect?: Enumerable<BusinessItemWhereUniqueInput>
    delete?: Enumerable<BusinessItemWhereUniqueInput>
    connect?: Enumerable<BusinessItemWhereUniqueInput>
    update?: Enumerable<BusinessItemUpdateWithWhereUniqueWithoutManagerInput>
    updateMany?: Enumerable<BusinessItemUpdateManyWithWhereWithoutManagerInput>
    deleteMany?: Enumerable<BusinessItemScalarWhereInput>
  }

  export type BusinessRateUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<Enumerable<BusinessRateCreateWithoutBusinessInput>, Enumerable<BusinessRateUncheckedCreateWithoutBusinessInput>>
    connectOrCreate?: Enumerable<BusinessRateCreateOrConnectWithoutBusinessInput>
    upsert?: Enumerable<BusinessRateUpsertWithWhereUniqueWithoutBusinessInput>
    createMany?: BusinessRateCreateManyBusinessInputEnvelope
    set?: Enumerable<BusinessRateWhereUniqueInput>
    disconnect?: Enumerable<BusinessRateWhereUniqueInput>
    delete?: Enumerable<BusinessRateWhereUniqueInput>
    connect?: Enumerable<BusinessRateWhereUniqueInput>
    update?: Enumerable<BusinessRateUpdateWithWhereUniqueWithoutBusinessInput>
    updateMany?: Enumerable<BusinessRateUpdateManyWithWhereWithoutBusinessInput>
    deleteMany?: Enumerable<BusinessRateScalarWhereInput>
  }

  export type BusinessReviewUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<Enumerable<BusinessReviewCreateWithoutBusinessInput>, Enumerable<BusinessReviewUncheckedCreateWithoutBusinessInput>>
    connectOrCreate?: Enumerable<BusinessReviewCreateOrConnectWithoutBusinessInput>
    upsert?: Enumerable<BusinessReviewUpsertWithWhereUniqueWithoutBusinessInput>
    createMany?: BusinessReviewCreateManyBusinessInputEnvelope
    set?: Enumerable<BusinessReviewWhereUniqueInput>
    disconnect?: Enumerable<BusinessReviewWhereUniqueInput>
    delete?: Enumerable<BusinessReviewWhereUniqueInput>
    connect?: Enumerable<BusinessReviewWhereUniqueInput>
    update?: Enumerable<BusinessReviewUpdateWithWhereUniqueWithoutBusinessInput>
    updateMany?: Enumerable<BusinessReviewUpdateManyWithWhereWithoutBusinessInput>
    deleteMany?: Enumerable<BusinessReviewScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutBusiness_userNestedInput = {
    create?: XOR<UserCreateWithoutBusiness_userInput, UserUncheckedCreateWithoutBusiness_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusiness_userInput
    upsert?: UserUpsertWithoutBusiness_userInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBusiness_userInput, UserUncheckedUpdateWithoutBusiness_userInput>
  }

  export type HomeCareCompanyUpdateOneWithoutBusiness_userNestedInput = {
    create?: XOR<HomeCareCompanyCreateWithoutBusiness_userInput, HomeCareCompanyUncheckedCreateWithoutBusiness_userInput>
    connectOrCreate?: HomeCareCompanyCreateOrConnectWithoutBusiness_userInput
    upsert?: HomeCareCompanyUpsertWithoutBusiness_userInput
    disconnect?: boolean
    delete?: boolean
    connect?: HomeCareCompanyWhereUniqueInput
    update?: XOR<HomeCareCompanyUpdateWithoutBusiness_userInput, HomeCareCompanyUncheckedUpdateWithoutBusiness_userInput>
  }

  export type RealEstateAgentUpdateOneWithoutBusiness_userNestedInput = {
    create?: XOR<RealEstateAgentCreateWithoutBusiness_userInput, RealEstateAgentUncheckedCreateWithoutBusiness_userInput>
    connectOrCreate?: RealEstateAgentCreateOrConnectWithoutBusiness_userInput
    upsert?: RealEstateAgentUpsertWithoutBusiness_userInput
    disconnect?: boolean
    delete?: boolean
    connect?: RealEstateAgentWhereUniqueInput
    update?: XOR<RealEstateAgentUpdateWithoutBusiness_userInput, RealEstateAgentUncheckedUpdateWithoutBusiness_userInput>
  }

  export type BusinessItemUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<Enumerable<BusinessItemCreateWithoutManagerInput>, Enumerable<BusinessItemUncheckedCreateWithoutManagerInput>>
    connectOrCreate?: Enumerable<BusinessItemCreateOrConnectWithoutManagerInput>
    upsert?: Enumerable<BusinessItemUpsertWithWhereUniqueWithoutManagerInput>
    createMany?: BusinessItemCreateManyManagerInputEnvelope
    set?: Enumerable<BusinessItemWhereUniqueInput>
    disconnect?: Enumerable<BusinessItemWhereUniqueInput>
    delete?: Enumerable<BusinessItemWhereUniqueInput>
    connect?: Enumerable<BusinessItemWhereUniqueInput>
    update?: Enumerable<BusinessItemUpdateWithWhereUniqueWithoutManagerInput>
    updateMany?: Enumerable<BusinessItemUpdateManyWithWhereWithoutManagerInput>
    deleteMany?: Enumerable<BusinessItemScalarWhereInput>
  }

  export type BusinessRateUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<Enumerable<BusinessRateCreateWithoutBusinessInput>, Enumerable<BusinessRateUncheckedCreateWithoutBusinessInput>>
    connectOrCreate?: Enumerable<BusinessRateCreateOrConnectWithoutBusinessInput>
    upsert?: Enumerable<BusinessRateUpsertWithWhereUniqueWithoutBusinessInput>
    createMany?: BusinessRateCreateManyBusinessInputEnvelope
    set?: Enumerable<BusinessRateWhereUniqueInput>
    disconnect?: Enumerable<BusinessRateWhereUniqueInput>
    delete?: Enumerable<BusinessRateWhereUniqueInput>
    connect?: Enumerable<BusinessRateWhereUniqueInput>
    update?: Enumerable<BusinessRateUpdateWithWhereUniqueWithoutBusinessInput>
    updateMany?: Enumerable<BusinessRateUpdateManyWithWhereWithoutBusinessInput>
    deleteMany?: Enumerable<BusinessRateScalarWhereInput>
  }

  export type BusinessReviewUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<Enumerable<BusinessReviewCreateWithoutBusinessInput>, Enumerable<BusinessReviewUncheckedCreateWithoutBusinessInput>>
    connectOrCreate?: Enumerable<BusinessReviewCreateOrConnectWithoutBusinessInput>
    upsert?: Enumerable<BusinessReviewUpsertWithWhereUniqueWithoutBusinessInput>
    createMany?: BusinessReviewCreateManyBusinessInputEnvelope
    set?: Enumerable<BusinessReviewWhereUniqueInput>
    disconnect?: Enumerable<BusinessReviewWhereUniqueInput>
    delete?: Enumerable<BusinessReviewWhereUniqueInput>
    connect?: Enumerable<BusinessReviewWhereUniqueInput>
    update?: Enumerable<BusinessReviewUpdateWithWhereUniqueWithoutBusinessInput>
    updateMany?: Enumerable<BusinessReviewUpdateManyWithWhereWithoutBusinessInput>
    deleteMany?: Enumerable<BusinessReviewScalarWhereInput>
  }

  export type HomeCareCompanyUncheckedUpdateOneWithoutBusiness_userNestedInput = {
    create?: XOR<HomeCareCompanyCreateWithoutBusiness_userInput, HomeCareCompanyUncheckedCreateWithoutBusiness_userInput>
    connectOrCreate?: HomeCareCompanyCreateOrConnectWithoutBusiness_userInput
    upsert?: HomeCareCompanyUpsertWithoutBusiness_userInput
    disconnect?: boolean
    delete?: boolean
    connect?: HomeCareCompanyWhereUniqueInput
    update?: XOR<HomeCareCompanyUpdateWithoutBusiness_userInput, HomeCareCompanyUncheckedUpdateWithoutBusiness_userInput>
  }

  export type RealEstateAgentUncheckedUpdateOneWithoutBusiness_userNestedInput = {
    create?: XOR<RealEstateAgentCreateWithoutBusiness_userInput, RealEstateAgentUncheckedCreateWithoutBusiness_userInput>
    connectOrCreate?: RealEstateAgentCreateOrConnectWithoutBusiness_userInput
    upsert?: RealEstateAgentUpsertWithoutBusiness_userInput
    disconnect?: boolean
    delete?: boolean
    connect?: RealEstateAgentWhereUniqueInput
    update?: XOR<RealEstateAgentUpdateWithoutBusiness_userInput, RealEstateAgentUncheckedUpdateWithoutBusiness_userInput>
  }

  export type BusinessUserCreateNestedOneWithoutReal_estate_agentInput = {
    create?: XOR<BusinessUserCreateWithoutReal_estate_agentInput, BusinessUserUncheckedCreateWithoutReal_estate_agentInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutReal_estate_agentInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type RealEstateSpecializedFieldCreateNestedManyWithoutAgentInput = {
    create?: XOR<Enumerable<RealEstateSpecializedFieldCreateWithoutAgentInput>, Enumerable<RealEstateSpecializedFieldUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<RealEstateSpecializedFieldCreateOrConnectWithoutAgentInput>
    createMany?: RealEstateSpecializedFieldCreateManyAgentInputEnvelope
    connect?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
  }

  export type RealEstateSpecializedFieldUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<Enumerable<RealEstateSpecializedFieldCreateWithoutAgentInput>, Enumerable<RealEstateSpecializedFieldUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<RealEstateSpecializedFieldCreateOrConnectWithoutAgentInput>
    createMany?: RealEstateSpecializedFieldCreateManyAgentInputEnvelope
    connect?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
  }

  export type BusinessUserUpdateOneRequiredWithoutReal_estate_agentNestedInput = {
    create?: XOR<BusinessUserCreateWithoutReal_estate_agentInput, BusinessUserUncheckedCreateWithoutReal_estate_agentInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutReal_estate_agentInput
    upsert?: BusinessUserUpsertWithoutReal_estate_agentInput
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutReal_estate_agentInput, BusinessUserUncheckedUpdateWithoutReal_estate_agentInput>
  }

  export type RealEstateSpecializedFieldUpdateManyWithoutAgentNestedInput = {
    create?: XOR<Enumerable<RealEstateSpecializedFieldCreateWithoutAgentInput>, Enumerable<RealEstateSpecializedFieldUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<RealEstateSpecializedFieldCreateOrConnectWithoutAgentInput>
    upsert?: Enumerable<RealEstateSpecializedFieldUpsertWithWhereUniqueWithoutAgentInput>
    createMany?: RealEstateSpecializedFieldCreateManyAgentInputEnvelope
    set?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
    disconnect?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
    delete?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
    connect?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
    update?: Enumerable<RealEstateSpecializedFieldUpdateWithWhereUniqueWithoutAgentInput>
    updateMany?: Enumerable<RealEstateSpecializedFieldUpdateManyWithWhereWithoutAgentInput>
    deleteMany?: Enumerable<RealEstateSpecializedFieldScalarWhereInput>
  }

  export type RealEstateSpecializedFieldUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<Enumerable<RealEstateSpecializedFieldCreateWithoutAgentInput>, Enumerable<RealEstateSpecializedFieldUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<RealEstateSpecializedFieldCreateOrConnectWithoutAgentInput>
    upsert?: Enumerable<RealEstateSpecializedFieldUpsertWithWhereUniqueWithoutAgentInput>
    createMany?: RealEstateSpecializedFieldCreateManyAgentInputEnvelope
    set?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
    disconnect?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
    delete?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
    connect?: Enumerable<RealEstateSpecializedFieldWhereUniqueInput>
    update?: Enumerable<RealEstateSpecializedFieldUpdateWithWhereUniqueWithoutAgentInput>
    updateMany?: Enumerable<RealEstateSpecializedFieldUpdateManyWithWhereWithoutAgentInput>
    deleteMany?: Enumerable<RealEstateSpecializedFieldScalarWhereInput>
  }

  export type BusinessUserCreateNestedOneWithoutHome_care_companyInput = {
    create?: XOR<BusinessUserCreateWithoutHome_care_companyInput, BusinessUserUncheckedCreateWithoutHome_care_companyInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutHome_care_companyInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type HomeCareSpecializedFieldCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<HomeCareSpecializedFieldCreateWithoutCompanyInput>, Enumerable<HomeCareSpecializedFieldUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<HomeCareSpecializedFieldCreateOrConnectWithoutCompanyInput>
    createMany?: HomeCareSpecializedFieldCreateManyCompanyInputEnvelope
    connect?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
  }

  export type HomeCareSpecializedFieldUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<HomeCareSpecializedFieldCreateWithoutCompanyInput>, Enumerable<HomeCareSpecializedFieldUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<HomeCareSpecializedFieldCreateOrConnectWithoutCompanyInput>
    createMany?: HomeCareSpecializedFieldCreateManyCompanyInputEnvelope
    connect?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
  }

  export type BusinessUserUpdateOneRequiredWithoutHome_care_companyNestedInput = {
    create?: XOR<BusinessUserCreateWithoutHome_care_companyInput, BusinessUserUncheckedCreateWithoutHome_care_companyInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutHome_care_companyInput
    upsert?: BusinessUserUpsertWithoutHome_care_companyInput
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutHome_care_companyInput, BusinessUserUncheckedUpdateWithoutHome_care_companyInput>
  }

  export type HomeCareSpecializedFieldUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<HomeCareSpecializedFieldCreateWithoutCompanyInput>, Enumerable<HomeCareSpecializedFieldUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<HomeCareSpecializedFieldCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<HomeCareSpecializedFieldUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: HomeCareSpecializedFieldCreateManyCompanyInputEnvelope
    set?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
    disconnect?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
    delete?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
    connect?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
    update?: Enumerable<HomeCareSpecializedFieldUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<HomeCareSpecializedFieldUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<HomeCareSpecializedFieldScalarWhereInput>
  }

  export type HomeCareSpecializedFieldUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<HomeCareSpecializedFieldCreateWithoutCompanyInput>, Enumerable<HomeCareSpecializedFieldUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<HomeCareSpecializedFieldCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<HomeCareSpecializedFieldUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: HomeCareSpecializedFieldCreateManyCompanyInputEnvelope
    set?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
    disconnect?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
    delete?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
    connect?: Enumerable<HomeCareSpecializedFieldWhereUniqueInput>
    update?: Enumerable<HomeCareSpecializedFieldUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<HomeCareSpecializedFieldUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<HomeCareSpecializedFieldScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type BoardArticleCreateWithoutBoardInput = {
    id: string
    title: string
    content: string
    writer: UserCreateNestedOneWithoutBoard_articlesInput
    comments?: BoardCommentCreateNestedManyWithoutArticleInput
  }

  export type BoardArticleUncheckedCreateWithoutBoardInput = {
    id: string
    writer_id: string
    title: string
    content: string
    comments?: BoardCommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type BoardArticleCreateOrConnectWithoutBoardInput = {
    where: BoardArticleWhereUniqueInput
    create: XOR<BoardArticleCreateWithoutBoardInput, BoardArticleUncheckedCreateWithoutBoardInput>
  }

  export type BoardArticleCreateManyBoardInputEnvelope = {
    data: Enumerable<BoardArticleCreateManyBoardInput>
    skipDuplicates?: boolean
  }

  export type BoardArticleUpsertWithWhereUniqueWithoutBoardInput = {
    where: BoardArticleWhereUniqueInput
    update: XOR<BoardArticleUpdateWithoutBoardInput, BoardArticleUncheckedUpdateWithoutBoardInput>
    create: XOR<BoardArticleCreateWithoutBoardInput, BoardArticleUncheckedCreateWithoutBoardInput>
  }

  export type BoardArticleUpdateWithWhereUniqueWithoutBoardInput = {
    where: BoardArticleWhereUniqueInput
    data: XOR<BoardArticleUpdateWithoutBoardInput, BoardArticleUncheckedUpdateWithoutBoardInput>
  }

  export type BoardArticleUpdateManyWithWhereWithoutBoardInput = {
    where: BoardArticleScalarWhereInput
    data: XOR<BoardArticleUpdateManyMutationInput, BoardArticleUncheckedUpdateManyWithoutArticlesInput>
  }

  export type BoardArticleScalarWhereInput = {
    AND?: Enumerable<BoardArticleScalarWhereInput>
    OR?: Enumerable<BoardArticleScalarWhereInput>
    NOT?: Enumerable<BoardArticleScalarWhereInput>
    id?: StringFilter | string
    board_id?: StringFilter | string
    writer_id?: StringFilter | string
    title?: StringFilter | string
    content?: StringFilter | string
  }

  export type BoardCreateWithoutArticlesInput = {
    id: string
    name: string
  }

  export type BoardUncheckedCreateWithoutArticlesInput = {
    id: string
    name: string
  }

  export type BoardCreateOrConnectWithoutArticlesInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutArticlesInput, BoardUncheckedCreateWithoutArticlesInput>
  }

  export type UserCreateWithoutBoard_articlesInput = {
    id: string
    name: string
    email: string
    email_verified: boolean
    phone: string
    address_first: string
    address_second?: string | null
    board_comments?: BoardCommentCreateNestedManyWithoutWriterInput
    business_user?: BusinessUserCreateNestedOneWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
    auth: UserAuthenticationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutBoard_articlesInput = {
    id: string
    auth_id: string
    name: string
    email: string
    email_verified: boolean
    phone: string
    address_first: string
    address_second?: string | null
    board_comments?: BoardCommentUncheckedCreateNestedManyWithoutWriterInput
    business_user?: BusinessUserUncheckedCreateNestedOneWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBoard_articlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoard_articlesInput, UserUncheckedCreateWithoutBoard_articlesInput>
  }

  export type BoardCommentCreateWithoutArticleInput = {
    id: string
    content: string
    writer: UserCreateNestedOneWithoutBoard_commentsInput
  }

  export type BoardCommentUncheckedCreateWithoutArticleInput = {
    id: string
    writer_id: string
    content: string
  }

  export type BoardCommentCreateOrConnectWithoutArticleInput = {
    where: BoardCommentWhereUniqueInput
    create: XOR<BoardCommentCreateWithoutArticleInput, BoardCommentUncheckedCreateWithoutArticleInput>
  }

  export type BoardCommentCreateManyArticleInputEnvelope = {
    data: Enumerable<BoardCommentCreateManyArticleInput>
    skipDuplicates?: boolean
  }

  export type BoardUpsertWithoutArticlesInput = {
    update: XOR<BoardUpdateWithoutArticlesInput, BoardUncheckedUpdateWithoutArticlesInput>
    create: XOR<BoardCreateWithoutArticlesInput, BoardUncheckedCreateWithoutArticlesInput>
  }

  export type BoardUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BoardUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutBoard_articlesInput = {
    update: XOR<UserUpdateWithoutBoard_articlesInput, UserUncheckedUpdateWithoutBoard_articlesInput>
    create: XOR<UserCreateWithoutBoard_articlesInput, UserUncheckedCreateWithoutBoard_articlesInput>
  }

  export type UserUpdateWithoutBoard_articlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    board_comments?: BoardCommentUpdateManyWithoutWriterNestedInput
    business_user?: BusinessUserUpdateOneWithoutUserNestedInput
    customer?: CustomerUpdateOneWithoutUserNestedInput
    auth?: UserAuthenticationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutBoard_articlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    board_comments?: BoardCommentUncheckedUpdateManyWithoutWriterNestedInput
    business_user?: BusinessUserUncheckedUpdateOneWithoutUserNestedInput
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type BoardCommentUpsertWithWhereUniqueWithoutArticleInput = {
    where: BoardCommentWhereUniqueInput
    update: XOR<BoardCommentUpdateWithoutArticleInput, BoardCommentUncheckedUpdateWithoutArticleInput>
    create: XOR<BoardCommentCreateWithoutArticleInput, BoardCommentUncheckedCreateWithoutArticleInput>
  }

  export type BoardCommentUpdateWithWhereUniqueWithoutArticleInput = {
    where: BoardCommentWhereUniqueInput
    data: XOR<BoardCommentUpdateWithoutArticleInput, BoardCommentUncheckedUpdateWithoutArticleInput>
  }

  export type BoardCommentUpdateManyWithWhereWithoutArticleInput = {
    where: BoardCommentScalarWhereInput
    data: XOR<BoardCommentUpdateManyMutationInput, BoardCommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type BoardCommentScalarWhereInput = {
    AND?: Enumerable<BoardCommentScalarWhereInput>
    OR?: Enumerable<BoardCommentScalarWhereInput>
    NOT?: Enumerable<BoardCommentScalarWhereInput>
    id?: StringFilter | string
    writer_id?: StringFilter | string
    article_id?: StringFilter | string
    content?: StringFilter | string
  }

  export type BoardArticleCreateWithoutCommentsInput = {
    id: string
    title: string
    content: string
    board: BoardCreateNestedOneWithoutArticlesInput
    writer: UserCreateNestedOneWithoutBoard_articlesInput
  }

  export type BoardArticleUncheckedCreateWithoutCommentsInput = {
    id: string
    board_id: string
    writer_id: string
    title: string
    content: string
  }

  export type BoardArticleCreateOrConnectWithoutCommentsInput = {
    where: BoardArticleWhereUniqueInput
    create: XOR<BoardArticleCreateWithoutCommentsInput, BoardArticleUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutBoard_commentsInput = {
    id: string
    name: string
    email: string
    email_verified: boolean
    phone: string
    address_first: string
    address_second?: string | null
    board_articles?: BoardArticleCreateNestedManyWithoutWriterInput
    business_user?: BusinessUserCreateNestedOneWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
    auth: UserAuthenticationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutBoard_commentsInput = {
    id: string
    auth_id: string
    name: string
    email: string
    email_verified: boolean
    phone: string
    address_first: string
    address_second?: string | null
    board_articles?: BoardArticleUncheckedCreateNestedManyWithoutWriterInput
    business_user?: BusinessUserUncheckedCreateNestedOneWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBoard_commentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoard_commentsInput, UserUncheckedCreateWithoutBoard_commentsInput>
  }

  export type BoardArticleUpsertWithoutCommentsInput = {
    update: XOR<BoardArticleUpdateWithoutCommentsInput, BoardArticleUncheckedUpdateWithoutCommentsInput>
    create: XOR<BoardArticleCreateWithoutCommentsInput, BoardArticleUncheckedCreateWithoutCommentsInput>
  }

  export type BoardArticleUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    board?: BoardUpdateOneRequiredWithoutArticlesNestedInput
    writer?: UserUpdateOneRequiredWithoutBoard_articlesNestedInput
  }

  export type BoardArticleUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    board_id?: StringFieldUpdateOperationsInput | string
    writer_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutBoard_commentsInput = {
    update: XOR<UserUpdateWithoutBoard_commentsInput, UserUncheckedUpdateWithoutBoard_commentsInput>
    create: XOR<UserCreateWithoutBoard_commentsInput, UserUncheckedCreateWithoutBoard_commentsInput>
  }

  export type UserUpdateWithoutBoard_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    board_articles?: BoardArticleUpdateManyWithoutWriterNestedInput
    business_user?: BusinessUserUpdateOneWithoutUserNestedInput
    customer?: CustomerUpdateOneWithoutUserNestedInput
    auth?: UserAuthenticationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutBoard_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    board_articles?: BoardArticleUncheckedUpdateManyWithoutWriterNestedInput
    business_user?: BusinessUserUncheckedUpdateOneWithoutUserNestedInput
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type BusinessUserCreateWithoutBusiness_itemsInput = {
    is_verified: boolean
    introduction_title?: string | null
    introduction_content?: string | null
    business_rates?: BusinessRateCreateNestedManyWithoutBusinessInput
    business_reviews?: BusinessReviewCreateNestedManyWithoutBusinessInput
    user: UserCreateNestedOneWithoutBusiness_userInput
    home_care_company?: HomeCareCompanyCreateNestedOneWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentCreateNestedOneWithoutBusiness_userInput
  }

  export type BusinessUserUncheckedCreateWithoutBusiness_itemsInput = {
    id: string
    is_verified: boolean
    introduction_title?: string | null
    introduction_content?: string | null
    business_rates?: BusinessRateUncheckedCreateNestedManyWithoutBusinessInput
    business_reviews?: BusinessReviewUncheckedCreateNestedManyWithoutBusinessInput
    home_care_company?: HomeCareCompanyUncheckedCreateNestedOneWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentUncheckedCreateNestedOneWithoutBusiness_userInput
  }

  export type BusinessUserCreateOrConnectWithoutBusiness_itemsInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutBusiness_itemsInput, BusinessUserUncheckedCreateWithoutBusiness_itemsInput>
  }

  export type BusinessUserUpsertWithoutBusiness_itemsInput = {
    update: XOR<BusinessUserUpdateWithoutBusiness_itemsInput, BusinessUserUncheckedUpdateWithoutBusiness_itemsInput>
    create: XOR<BusinessUserCreateWithoutBusiness_itemsInput, BusinessUserUncheckedCreateWithoutBusiness_itemsInput>
  }

  export type BusinessUserUpdateWithoutBusiness_itemsInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_rates?: BusinessRateUpdateManyWithoutBusinessNestedInput
    business_reviews?: BusinessReviewUpdateManyWithoutBusinessNestedInput
    user?: UserUpdateOneRequiredWithoutBusiness_userNestedInput
    home_care_company?: HomeCareCompanyUpdateOneWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUpdateOneWithoutBusiness_userNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutBusiness_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_rates?: BusinessRateUncheckedUpdateManyWithoutBusinessNestedInput
    business_reviews?: BusinessReviewUncheckedUpdateManyWithoutBusinessNestedInput
    home_care_company?: HomeCareCompanyUncheckedUpdateOneWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUncheckedUpdateOneWithoutBusiness_userNestedInput
  }

  export type BusinessRateCreateWithoutCategoryInput = {
    id: string
    rate: number
    business: BusinessUserCreateNestedOneWithoutBusiness_ratesInput
    rater: CustomerCreateNestedOneWithoutBusiness_ratesInput
  }

  export type BusinessRateUncheckedCreateWithoutCategoryInput = {
    id: string
    business_id: string
    rater_id: string
    rate: number
  }

  export type BusinessRateCreateOrConnectWithoutCategoryInput = {
    where: BusinessRateWhereUniqueInput
    create: XOR<BusinessRateCreateWithoutCategoryInput, BusinessRateUncheckedCreateWithoutCategoryInput>
  }

  export type BusinessRateCreateManyCategoryInputEnvelope = {
    data: Enumerable<BusinessRateCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type BusinessRateUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BusinessRateWhereUniqueInput
    update: XOR<BusinessRateUpdateWithoutCategoryInput, BusinessRateUncheckedUpdateWithoutCategoryInput>
    create: XOR<BusinessRateCreateWithoutCategoryInput, BusinessRateUncheckedCreateWithoutCategoryInput>
  }

  export type BusinessRateUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BusinessRateWhereUniqueInput
    data: XOR<BusinessRateUpdateWithoutCategoryInput, BusinessRateUncheckedUpdateWithoutCategoryInput>
  }

  export type BusinessRateUpdateManyWithWhereWithoutCategoryInput = {
    where: BusinessRateScalarWhereInput
    data: XOR<BusinessRateUpdateManyMutationInput, BusinessRateUncheckedUpdateManyWithoutRatesInput>
  }

  export type BusinessRateScalarWhereInput = {
    AND?: Enumerable<BusinessRateScalarWhereInput>
    OR?: Enumerable<BusinessRateScalarWhereInput>
    NOT?: Enumerable<BusinessRateScalarWhereInput>
    id?: StringFilter | string
    category_id?: StringFilter | string
    business_id?: StringFilter | string
    rater_id?: StringFilter | string
    rate?: IntFilter | number
  }

  export type BusinessUserCreateWithoutBusiness_ratesInput = {
    is_verified: boolean
    introduction_title?: string | null
    introduction_content?: string | null
    business_items?: BusinessItemCreateNestedManyWithoutManagerInput
    business_reviews?: BusinessReviewCreateNestedManyWithoutBusinessInput
    user: UserCreateNestedOneWithoutBusiness_userInput
    home_care_company?: HomeCareCompanyCreateNestedOneWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentCreateNestedOneWithoutBusiness_userInput
  }

  export type BusinessUserUncheckedCreateWithoutBusiness_ratesInput = {
    id: string
    is_verified: boolean
    introduction_title?: string | null
    introduction_content?: string | null
    business_items?: BusinessItemUncheckedCreateNestedManyWithoutManagerInput
    business_reviews?: BusinessReviewUncheckedCreateNestedManyWithoutBusinessInput
    home_care_company?: HomeCareCompanyUncheckedCreateNestedOneWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentUncheckedCreateNestedOneWithoutBusiness_userInput
  }

  export type BusinessUserCreateOrConnectWithoutBusiness_ratesInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutBusiness_ratesInput, BusinessUserUncheckedCreateWithoutBusiness_ratesInput>
  }

  export type BusinessRateCategoryCreateWithoutRatesInput = {
    id: string
    name: string
  }

  export type BusinessRateCategoryUncheckedCreateWithoutRatesInput = {
    id: string
    name: string
  }

  export type BusinessRateCategoryCreateOrConnectWithoutRatesInput = {
    where: BusinessRateCategoryWhereUniqueInput
    create: XOR<BusinessRateCategoryCreateWithoutRatesInput, BusinessRateCategoryUncheckedCreateWithoutRatesInput>
  }

  export type CustomerCreateWithoutBusiness_ratesInput = {
    birth?: string | null
    gender?: string | null
    business_reviews?: BusinessReviewCreateNestedManyWithoutReviewerInput
    user: UserCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutBusiness_ratesInput = {
    id: string
    birth?: string | null
    gender?: string | null
    business_reviews?: BusinessReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type CustomerCreateOrConnectWithoutBusiness_ratesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutBusiness_ratesInput, CustomerUncheckedCreateWithoutBusiness_ratesInput>
  }

  export type BusinessUserUpsertWithoutBusiness_ratesInput = {
    update: XOR<BusinessUserUpdateWithoutBusiness_ratesInput, BusinessUserUncheckedUpdateWithoutBusiness_ratesInput>
    create: XOR<BusinessUserCreateWithoutBusiness_ratesInput, BusinessUserUncheckedCreateWithoutBusiness_ratesInput>
  }

  export type BusinessUserUpdateWithoutBusiness_ratesInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_items?: BusinessItemUpdateManyWithoutManagerNestedInput
    business_reviews?: BusinessReviewUpdateManyWithoutBusinessNestedInput
    user?: UserUpdateOneRequiredWithoutBusiness_userNestedInput
    home_care_company?: HomeCareCompanyUpdateOneWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUpdateOneWithoutBusiness_userNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutBusiness_ratesInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_items?: BusinessItemUncheckedUpdateManyWithoutManagerNestedInput
    business_reviews?: BusinessReviewUncheckedUpdateManyWithoutBusinessNestedInput
    home_care_company?: HomeCareCompanyUncheckedUpdateOneWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUncheckedUpdateOneWithoutBusiness_userNestedInput
  }

  export type BusinessRateCategoryUpsertWithoutRatesInput = {
    update: XOR<BusinessRateCategoryUpdateWithoutRatesInput, BusinessRateCategoryUncheckedUpdateWithoutRatesInput>
    create: XOR<BusinessRateCategoryCreateWithoutRatesInput, BusinessRateCategoryUncheckedCreateWithoutRatesInput>
  }

  export type BusinessRateCategoryUpdateWithoutRatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessRateCategoryUncheckedUpdateWithoutRatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUpsertWithoutBusiness_ratesInput = {
    update: XOR<CustomerUpdateWithoutBusiness_ratesInput, CustomerUncheckedUpdateWithoutBusiness_ratesInput>
    create: XOR<CustomerCreateWithoutBusiness_ratesInput, CustomerUncheckedCreateWithoutBusiness_ratesInput>
  }

  export type CustomerUpdateWithoutBusiness_ratesInput = {
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    business_reviews?: BusinessReviewUpdateManyWithoutReviewerNestedInput
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutBusiness_ratesInput = {
    id?: StringFieldUpdateOperationsInput | string
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    business_reviews?: BusinessReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type BusinessUserCreateWithoutBusiness_reviewsInput = {
    is_verified: boolean
    introduction_title?: string | null
    introduction_content?: string | null
    business_items?: BusinessItemCreateNestedManyWithoutManagerInput
    business_rates?: BusinessRateCreateNestedManyWithoutBusinessInput
    user: UserCreateNestedOneWithoutBusiness_userInput
    home_care_company?: HomeCareCompanyCreateNestedOneWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentCreateNestedOneWithoutBusiness_userInput
  }

  export type BusinessUserUncheckedCreateWithoutBusiness_reviewsInput = {
    id: string
    is_verified: boolean
    introduction_title?: string | null
    introduction_content?: string | null
    business_items?: BusinessItemUncheckedCreateNestedManyWithoutManagerInput
    business_rates?: BusinessRateUncheckedCreateNestedManyWithoutBusinessInput
    home_care_company?: HomeCareCompanyUncheckedCreateNestedOneWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentUncheckedCreateNestedOneWithoutBusiness_userInput
  }

  export type BusinessUserCreateOrConnectWithoutBusiness_reviewsInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutBusiness_reviewsInput, BusinessUserUncheckedCreateWithoutBusiness_reviewsInput>
  }

  export type CustomerCreateWithoutBusiness_reviewsInput = {
    birth?: string | null
    gender?: string | null
    business_rates?: BusinessRateCreateNestedManyWithoutRaterInput
    user: UserCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutBusiness_reviewsInput = {
    id: string
    birth?: string | null
    gender?: string | null
    business_rates?: BusinessRateUncheckedCreateNestedManyWithoutRaterInput
  }

  export type CustomerCreateOrConnectWithoutBusiness_reviewsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutBusiness_reviewsInput, CustomerUncheckedCreateWithoutBusiness_reviewsInput>
  }

  export type BusinessUserUpsertWithoutBusiness_reviewsInput = {
    update: XOR<BusinessUserUpdateWithoutBusiness_reviewsInput, BusinessUserUncheckedUpdateWithoutBusiness_reviewsInput>
    create: XOR<BusinessUserCreateWithoutBusiness_reviewsInput, BusinessUserUncheckedCreateWithoutBusiness_reviewsInput>
  }

  export type BusinessUserUpdateWithoutBusiness_reviewsInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_items?: BusinessItemUpdateManyWithoutManagerNestedInput
    business_rates?: BusinessRateUpdateManyWithoutBusinessNestedInput
    user?: UserUpdateOneRequiredWithoutBusiness_userNestedInput
    home_care_company?: HomeCareCompanyUpdateOneWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUpdateOneWithoutBusiness_userNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutBusiness_reviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_items?: BusinessItemUncheckedUpdateManyWithoutManagerNestedInput
    business_rates?: BusinessRateUncheckedUpdateManyWithoutBusinessNestedInput
    home_care_company?: HomeCareCompanyUncheckedUpdateOneWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUncheckedUpdateOneWithoutBusiness_userNestedInput
  }

  export type CustomerUpsertWithoutBusiness_reviewsInput = {
    update: XOR<CustomerUpdateWithoutBusiness_reviewsInput, CustomerUncheckedUpdateWithoutBusiness_reviewsInput>
    create: XOR<CustomerCreateWithoutBusiness_reviewsInput, CustomerUncheckedCreateWithoutBusiness_reviewsInput>
  }

  export type CustomerUpdateWithoutBusiness_reviewsInput = {
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    business_rates?: BusinessRateUpdateManyWithoutRaterNestedInput
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutBusiness_reviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    business_rates?: BusinessRateUncheckedUpdateManyWithoutRaterNestedInput
  }

  export type HomeCareSubCategoryCreateWithoutSpecialized_fieldsInput = {
    id: string
    name: string
    super: HomeCareSuperCategoryCreateNestedOneWithoutHome_care_sub_categoriesInput
  }

  export type HomeCareSubCategoryUncheckedCreateWithoutSpecialized_fieldsInput = {
    id: string
    super_id: string
    name: string
  }

  export type HomeCareSubCategoryCreateOrConnectWithoutSpecialized_fieldsInput = {
    where: HomeCareSubCategoryWhereUniqueInput
    create: XOR<HomeCareSubCategoryCreateWithoutSpecialized_fieldsInput, HomeCareSubCategoryUncheckedCreateWithoutSpecialized_fieldsInput>
  }

  export type HomeCareCompanyCreateWithoutSpecialized_fieldsInput = {
    business_registration_num: string
    business_user: BusinessUserCreateNestedOneWithoutHome_care_companyInput
  }

  export type HomeCareCompanyUncheckedCreateWithoutSpecialized_fieldsInput = {
    id: string
    business_registration_num: string
  }

  export type HomeCareCompanyCreateOrConnectWithoutSpecialized_fieldsInput = {
    where: HomeCareCompanyWhereUniqueInput
    create: XOR<HomeCareCompanyCreateWithoutSpecialized_fieldsInput, HomeCareCompanyUncheckedCreateWithoutSpecialized_fieldsInput>
  }

  export type HomeCareSubCategoryUpsertWithoutSpecialized_fieldsInput = {
    update: XOR<HomeCareSubCategoryUpdateWithoutSpecialized_fieldsInput, HomeCareSubCategoryUncheckedUpdateWithoutSpecialized_fieldsInput>
    create: XOR<HomeCareSubCategoryCreateWithoutSpecialized_fieldsInput, HomeCareSubCategoryUncheckedCreateWithoutSpecialized_fieldsInput>
  }

  export type HomeCareSubCategoryUpdateWithoutSpecialized_fieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    super?: HomeCareSuperCategoryUpdateOneRequiredWithoutHome_care_sub_categoriesNestedInput
  }

  export type HomeCareSubCategoryUncheckedUpdateWithoutSpecialized_fieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareCompanyUpsertWithoutSpecialized_fieldsInput = {
    update: XOR<HomeCareCompanyUpdateWithoutSpecialized_fieldsInput, HomeCareCompanyUncheckedUpdateWithoutSpecialized_fieldsInput>
    create: XOR<HomeCareCompanyCreateWithoutSpecialized_fieldsInput, HomeCareCompanyUncheckedCreateWithoutSpecialized_fieldsInput>
  }

  export type HomeCareCompanyUpdateWithoutSpecialized_fieldsInput = {
    business_registration_num?: StringFieldUpdateOperationsInput | string
    business_user?: BusinessUserUpdateOneRequiredWithoutHome_care_companyNestedInput
  }

  export type HomeCareCompanyUncheckedUpdateWithoutSpecialized_fieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_registration_num?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSubCategoryCreateWithoutSuperInput = {
    id: string
    name: string
    specialized_fields?: HomeCareSpecializedFieldCreateNestedManyWithoutSub_categoryInput
  }

  export type HomeCareSubCategoryUncheckedCreateWithoutSuperInput = {
    id: string
    name: string
    specialized_fields?: HomeCareSpecializedFieldUncheckedCreateNestedManyWithoutSub_categoryInput
  }

  export type HomeCareSubCategoryCreateOrConnectWithoutSuperInput = {
    where: HomeCareSubCategoryWhereUniqueInput
    create: XOR<HomeCareSubCategoryCreateWithoutSuperInput, HomeCareSubCategoryUncheckedCreateWithoutSuperInput>
  }

  export type HomeCareSubCategoryCreateManySuperInputEnvelope = {
    data: Enumerable<HomeCareSubCategoryCreateManySuperInput>
    skipDuplicates?: boolean
  }

  export type HomeCareSubCategoryUpsertWithWhereUniqueWithoutSuperInput = {
    where: HomeCareSubCategoryWhereUniqueInput
    update: XOR<HomeCareSubCategoryUpdateWithoutSuperInput, HomeCareSubCategoryUncheckedUpdateWithoutSuperInput>
    create: XOR<HomeCareSubCategoryCreateWithoutSuperInput, HomeCareSubCategoryUncheckedCreateWithoutSuperInput>
  }

  export type HomeCareSubCategoryUpdateWithWhereUniqueWithoutSuperInput = {
    where: HomeCareSubCategoryWhereUniqueInput
    data: XOR<HomeCareSubCategoryUpdateWithoutSuperInput, HomeCareSubCategoryUncheckedUpdateWithoutSuperInput>
  }

  export type HomeCareSubCategoryUpdateManyWithWhereWithoutSuperInput = {
    where: HomeCareSubCategoryScalarWhereInput
    data: XOR<HomeCareSubCategoryUpdateManyMutationInput, HomeCareSubCategoryUncheckedUpdateManyWithoutHome_care_sub_categoriesInput>
  }

  export type HomeCareSubCategoryScalarWhereInput = {
    AND?: Enumerable<HomeCareSubCategoryScalarWhereInput>
    OR?: Enumerable<HomeCareSubCategoryScalarWhereInput>
    NOT?: Enumerable<HomeCareSubCategoryScalarWhereInput>
    id?: StringFilter | string
    super_id?: StringFilter | string
    name?: StringFilter | string
  }

  export type HomeCareSpecializedFieldCreateWithoutSub_categoryInput = {
    id: string
    company: HomeCareCompanyCreateNestedOneWithoutSpecialized_fieldsInput
  }

  export type HomeCareSpecializedFieldUncheckedCreateWithoutSub_categoryInput = {
    id: string
    company_id: string
  }

  export type HomeCareSpecializedFieldCreateOrConnectWithoutSub_categoryInput = {
    where: HomeCareSpecializedFieldWhereUniqueInput
    create: XOR<HomeCareSpecializedFieldCreateWithoutSub_categoryInput, HomeCareSpecializedFieldUncheckedCreateWithoutSub_categoryInput>
  }

  export type HomeCareSpecializedFieldCreateManySub_categoryInputEnvelope = {
    data: Enumerable<HomeCareSpecializedFieldCreateManySub_categoryInput>
    skipDuplicates?: boolean
  }

  export type HomeCareSuperCategoryCreateWithoutHome_care_sub_categoriesInput = {
    id: string
    name: string
  }

  export type HomeCareSuperCategoryUncheckedCreateWithoutHome_care_sub_categoriesInput = {
    id: string
    name: string
  }

  export type HomeCareSuperCategoryCreateOrConnectWithoutHome_care_sub_categoriesInput = {
    where: HomeCareSuperCategoryWhereUniqueInput
    create: XOR<HomeCareSuperCategoryCreateWithoutHome_care_sub_categoriesInput, HomeCareSuperCategoryUncheckedCreateWithoutHome_care_sub_categoriesInput>
  }

  export type HomeCareSpecializedFieldUpsertWithWhereUniqueWithoutSub_categoryInput = {
    where: HomeCareSpecializedFieldWhereUniqueInput
    update: XOR<HomeCareSpecializedFieldUpdateWithoutSub_categoryInput, HomeCareSpecializedFieldUncheckedUpdateWithoutSub_categoryInput>
    create: XOR<HomeCareSpecializedFieldCreateWithoutSub_categoryInput, HomeCareSpecializedFieldUncheckedCreateWithoutSub_categoryInput>
  }

  export type HomeCareSpecializedFieldUpdateWithWhereUniqueWithoutSub_categoryInput = {
    where: HomeCareSpecializedFieldWhereUniqueInput
    data: XOR<HomeCareSpecializedFieldUpdateWithoutSub_categoryInput, HomeCareSpecializedFieldUncheckedUpdateWithoutSub_categoryInput>
  }

  export type HomeCareSpecializedFieldUpdateManyWithWhereWithoutSub_categoryInput = {
    where: HomeCareSpecializedFieldScalarWhereInput
    data: XOR<HomeCareSpecializedFieldUpdateManyMutationInput, HomeCareSpecializedFieldUncheckedUpdateManyWithoutSpecialized_fieldsInput>
  }

  export type HomeCareSpecializedFieldScalarWhereInput = {
    AND?: Enumerable<HomeCareSpecializedFieldScalarWhereInput>
    OR?: Enumerable<HomeCareSpecializedFieldScalarWhereInput>
    NOT?: Enumerable<HomeCareSpecializedFieldScalarWhereInput>
    id?: StringFilter | string
    sub_category_id?: StringFilter | string
    company_id?: StringFilter | string
  }

  export type HomeCareSuperCategoryUpsertWithoutHome_care_sub_categoriesInput = {
    update: XOR<HomeCareSuperCategoryUpdateWithoutHome_care_sub_categoriesInput, HomeCareSuperCategoryUncheckedUpdateWithoutHome_care_sub_categoriesInput>
    create: XOR<HomeCareSuperCategoryCreateWithoutHome_care_sub_categoriesInput, HomeCareSuperCategoryUncheckedCreateWithoutHome_care_sub_categoriesInput>
  }

  export type HomeCareSuperCategoryUpdateWithoutHome_care_sub_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSuperCategoryUncheckedUpdateWithoutHome_care_sub_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateAgentCreateWithoutSpecialized_fieldsInput = {
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    licensed_agent_name: string
    real_estate_phone: string
    business_user: BusinessUserCreateNestedOneWithoutReal_estate_agentInput
  }

  export type RealEstateAgentUncheckedCreateWithoutSpecialized_fieldsInput = {
    id: string
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    licensed_agent_name: string
    real_estate_phone: string
  }

  export type RealEstateAgentCreateOrConnectWithoutSpecialized_fieldsInput = {
    where: RealEstateAgentWhereUniqueInput
    create: XOR<RealEstateAgentCreateWithoutSpecialized_fieldsInput, RealEstateAgentUncheckedCreateWithoutSpecialized_fieldsInput>
  }

  export type RealEstateSubCategoryCreateWithoutReal_estate_specialized_fieldsInput = {
    id: string
    name: string
    super: RealEstateSuperCategoryCreateNestedOneWithoutReal_estate_sub_categoriesInput
  }

  export type RealEstateSubCategoryUncheckedCreateWithoutReal_estate_specialized_fieldsInput = {
    id: string
    super_id: string
    name: string
  }

  export type RealEstateSubCategoryCreateOrConnectWithoutReal_estate_specialized_fieldsInput = {
    where: RealEstateSubCategoryWhereUniqueInput
    create: XOR<RealEstateSubCategoryCreateWithoutReal_estate_specialized_fieldsInput, RealEstateSubCategoryUncheckedCreateWithoutReal_estate_specialized_fieldsInput>
  }

  export type RealEstateAgentUpsertWithoutSpecialized_fieldsInput = {
    update: XOR<RealEstateAgentUpdateWithoutSpecialized_fieldsInput, RealEstateAgentUncheckedUpdateWithoutSpecialized_fieldsInput>
    create: XOR<RealEstateAgentCreateWithoutSpecialized_fieldsInput, RealEstateAgentUncheckedCreateWithoutSpecialized_fieldsInput>
  }

  export type RealEstateAgentUpdateWithoutSpecialized_fieldsInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
    business_user?: BusinessUserUpdateOneRequiredWithoutReal_estate_agentNestedInput
  }

  export type RealEstateAgentUncheckedUpdateWithoutSpecialized_fieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSubCategoryUpsertWithoutReal_estate_specialized_fieldsInput = {
    update: XOR<RealEstateSubCategoryUpdateWithoutReal_estate_specialized_fieldsInput, RealEstateSubCategoryUncheckedUpdateWithoutReal_estate_specialized_fieldsInput>
    create: XOR<RealEstateSubCategoryCreateWithoutReal_estate_specialized_fieldsInput, RealEstateSubCategoryUncheckedCreateWithoutReal_estate_specialized_fieldsInput>
  }

  export type RealEstateSubCategoryUpdateWithoutReal_estate_specialized_fieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    super?: RealEstateSuperCategoryUpdateOneRequiredWithoutReal_estate_sub_categoriesNestedInput
  }

  export type RealEstateSubCategoryUncheckedUpdateWithoutReal_estate_specialized_fieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSubCategoryCreateWithoutSuperInput = {
    id: string
    name: string
    real_estate_specialized_fields?: RealEstateSpecializedFieldCreateNestedManyWithoutReal_estate_sub_categoryInput
  }

  export type RealEstateSubCategoryUncheckedCreateWithoutSuperInput = {
    id: string
    name: string
    real_estate_specialized_fields?: RealEstateSpecializedFieldUncheckedCreateNestedManyWithoutReal_estate_sub_categoryInput
  }

  export type RealEstateSubCategoryCreateOrConnectWithoutSuperInput = {
    where: RealEstateSubCategoryWhereUniqueInput
    create: XOR<RealEstateSubCategoryCreateWithoutSuperInput, RealEstateSubCategoryUncheckedCreateWithoutSuperInput>
  }

  export type RealEstateSubCategoryCreateManySuperInputEnvelope = {
    data: Enumerable<RealEstateSubCategoryCreateManySuperInput>
    skipDuplicates?: boolean
  }

  export type RealEstateSubCategoryUpsertWithWhereUniqueWithoutSuperInput = {
    where: RealEstateSubCategoryWhereUniqueInput
    update: XOR<RealEstateSubCategoryUpdateWithoutSuperInput, RealEstateSubCategoryUncheckedUpdateWithoutSuperInput>
    create: XOR<RealEstateSubCategoryCreateWithoutSuperInput, RealEstateSubCategoryUncheckedCreateWithoutSuperInput>
  }

  export type RealEstateSubCategoryUpdateWithWhereUniqueWithoutSuperInput = {
    where: RealEstateSubCategoryWhereUniqueInput
    data: XOR<RealEstateSubCategoryUpdateWithoutSuperInput, RealEstateSubCategoryUncheckedUpdateWithoutSuperInput>
  }

  export type RealEstateSubCategoryUpdateManyWithWhereWithoutSuperInput = {
    where: RealEstateSubCategoryScalarWhereInput
    data: XOR<RealEstateSubCategoryUpdateManyMutationInput, RealEstateSubCategoryUncheckedUpdateManyWithoutReal_estate_sub_categoriesInput>
  }

  export type RealEstateSubCategoryScalarWhereInput = {
    AND?: Enumerable<RealEstateSubCategoryScalarWhereInput>
    OR?: Enumerable<RealEstateSubCategoryScalarWhereInput>
    NOT?: Enumerable<RealEstateSubCategoryScalarWhereInput>
    id?: StringFilter | string
    super_id?: StringFilter | string
    name?: StringFilter | string
  }

  export type RealEstateSpecializedFieldCreateWithoutReal_estate_sub_categoryInput = {
    id: string
    agent: RealEstateAgentCreateNestedOneWithoutSpecialized_fieldsInput
  }

  export type RealEstateSpecializedFieldUncheckedCreateWithoutReal_estate_sub_categoryInput = {
    id: string
    agent_id: string
  }

  export type RealEstateSpecializedFieldCreateOrConnectWithoutReal_estate_sub_categoryInput = {
    where: RealEstateSpecializedFieldWhereUniqueInput
    create: XOR<RealEstateSpecializedFieldCreateWithoutReal_estate_sub_categoryInput, RealEstateSpecializedFieldUncheckedCreateWithoutReal_estate_sub_categoryInput>
  }

  export type RealEstateSpecializedFieldCreateManyReal_estate_sub_categoryInputEnvelope = {
    data: Enumerable<RealEstateSpecializedFieldCreateManyReal_estate_sub_categoryInput>
    skipDuplicates?: boolean
  }

  export type RealEstateSuperCategoryCreateWithoutReal_estate_sub_categoriesInput = {
    id: string
    name: string
  }

  export type RealEstateSuperCategoryUncheckedCreateWithoutReal_estate_sub_categoriesInput = {
    id: string
    name: string
  }

  export type RealEstateSuperCategoryCreateOrConnectWithoutReal_estate_sub_categoriesInput = {
    where: RealEstateSuperCategoryWhereUniqueInput
    create: XOR<RealEstateSuperCategoryCreateWithoutReal_estate_sub_categoriesInput, RealEstateSuperCategoryUncheckedCreateWithoutReal_estate_sub_categoriesInput>
  }

  export type RealEstateSpecializedFieldUpsertWithWhereUniqueWithoutReal_estate_sub_categoryInput = {
    where: RealEstateSpecializedFieldWhereUniqueInput
    update: XOR<RealEstateSpecializedFieldUpdateWithoutReal_estate_sub_categoryInput, RealEstateSpecializedFieldUncheckedUpdateWithoutReal_estate_sub_categoryInput>
    create: XOR<RealEstateSpecializedFieldCreateWithoutReal_estate_sub_categoryInput, RealEstateSpecializedFieldUncheckedCreateWithoutReal_estate_sub_categoryInput>
  }

  export type RealEstateSpecializedFieldUpdateWithWhereUniqueWithoutReal_estate_sub_categoryInput = {
    where: RealEstateSpecializedFieldWhereUniqueInput
    data: XOR<RealEstateSpecializedFieldUpdateWithoutReal_estate_sub_categoryInput, RealEstateSpecializedFieldUncheckedUpdateWithoutReal_estate_sub_categoryInput>
  }

  export type RealEstateSpecializedFieldUpdateManyWithWhereWithoutReal_estate_sub_categoryInput = {
    where: RealEstateSpecializedFieldScalarWhereInput
    data: XOR<RealEstateSpecializedFieldUpdateManyMutationInput, RealEstateSpecializedFieldUncheckedUpdateManyWithoutReal_estate_specialized_fieldsInput>
  }

  export type RealEstateSpecializedFieldScalarWhereInput = {
    AND?: Enumerable<RealEstateSpecializedFieldScalarWhereInput>
    OR?: Enumerable<RealEstateSpecializedFieldScalarWhereInput>
    NOT?: Enumerable<RealEstateSpecializedFieldScalarWhereInput>
    id?: StringFilter | string
    sub_category_id?: StringFilter | string
    agent_id?: StringFilter | string
  }

  export type RealEstateSuperCategoryUpsertWithoutReal_estate_sub_categoriesInput = {
    update: XOR<RealEstateSuperCategoryUpdateWithoutReal_estate_sub_categoriesInput, RealEstateSuperCategoryUncheckedUpdateWithoutReal_estate_sub_categoriesInput>
    create: XOR<RealEstateSuperCategoryCreateWithoutReal_estate_sub_categoriesInput, RealEstateSuperCategoryUncheckedCreateWithoutReal_estate_sub_categoriesInput>
  }

  export type RealEstateSuperCategoryUpdateWithoutReal_estate_sub_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSuperCategoryUncheckedUpdateWithoutReal_estate_sub_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutAuthInput = {
    id: string
    name: string
    email: string
    email_verified: boolean
    phone: string
    address_first: string
    address_second?: string | null
    board_articles?: BoardArticleCreateNestedManyWithoutWriterInput
    board_comments?: BoardCommentCreateNestedManyWithoutWriterInput
    business_user?: BusinessUserCreateNestedOneWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthInput = {
    id: string
    name: string
    email: string
    email_verified: boolean
    phone: string
    address_first: string
    address_second?: string | null
    board_articles?: BoardArticleUncheckedCreateNestedManyWithoutWriterInput
    board_comments?: BoardCommentUncheckedCreateNestedManyWithoutWriterInput
    business_user?: BusinessUserUncheckedCreateNestedOneWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthInput, UserUncheckedCreateWithoutAuthInput>
  }

  export type UserCreateManyAuthInputEnvelope = {
    data: Enumerable<UserCreateManyAuthInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutAuthInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAuthInput, UserUncheckedUpdateWithoutAuthInput>
    create: XOR<UserCreateWithoutAuthInput, UserUncheckedCreateWithoutAuthInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAuthInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAuthInput, UserUncheckedUpdateWithoutAuthInput>
  }

  export type UserUpdateManyWithWhereWithoutAuthInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    auth_id?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    email_verified?: BoolFilter | boolean
    phone?: StringFilter | string
    address_first?: StringFilter | string
    address_second?: StringNullableFilter | string | null
  }

  export type BoardArticleCreateWithoutWriterInput = {
    id: string
    title: string
    content: string
    board: BoardCreateNestedOneWithoutArticlesInput
    comments?: BoardCommentCreateNestedManyWithoutArticleInput
  }

  export type BoardArticleUncheckedCreateWithoutWriterInput = {
    id: string
    board_id: string
    title: string
    content: string
    comments?: BoardCommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type BoardArticleCreateOrConnectWithoutWriterInput = {
    where: BoardArticleWhereUniqueInput
    create: XOR<BoardArticleCreateWithoutWriterInput, BoardArticleUncheckedCreateWithoutWriterInput>
  }

  export type BoardArticleCreateManyWriterInputEnvelope = {
    data: Enumerable<BoardArticleCreateManyWriterInput>
    skipDuplicates?: boolean
  }

  export type BoardCommentCreateWithoutWriterInput = {
    id: string
    content: string
    article: BoardArticleCreateNestedOneWithoutCommentsInput
  }

  export type BoardCommentUncheckedCreateWithoutWriterInput = {
    id: string
    article_id: string
    content: string
  }

  export type BoardCommentCreateOrConnectWithoutWriterInput = {
    where: BoardCommentWhereUniqueInput
    create: XOR<BoardCommentCreateWithoutWriterInput, BoardCommentUncheckedCreateWithoutWriterInput>
  }

  export type BoardCommentCreateManyWriterInputEnvelope = {
    data: Enumerable<BoardCommentCreateManyWriterInput>
    skipDuplicates?: boolean
  }

  export type BusinessUserCreateWithoutUserInput = {
    is_verified: boolean
    introduction_title?: string | null
    introduction_content?: string | null
    business_items?: BusinessItemCreateNestedManyWithoutManagerInput
    business_rates?: BusinessRateCreateNestedManyWithoutBusinessInput
    business_reviews?: BusinessReviewCreateNestedManyWithoutBusinessInput
    home_care_company?: HomeCareCompanyCreateNestedOneWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentCreateNestedOneWithoutBusiness_userInput
  }

  export type BusinessUserUncheckedCreateWithoutUserInput = {
    is_verified: boolean
    introduction_title?: string | null
    introduction_content?: string | null
    business_items?: BusinessItemUncheckedCreateNestedManyWithoutManagerInput
    business_rates?: BusinessRateUncheckedCreateNestedManyWithoutBusinessInput
    business_reviews?: BusinessReviewUncheckedCreateNestedManyWithoutBusinessInput
    home_care_company?: HomeCareCompanyUncheckedCreateNestedOneWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentUncheckedCreateNestedOneWithoutBusiness_userInput
  }

  export type BusinessUserCreateOrConnectWithoutUserInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutUserInput, BusinessUserUncheckedCreateWithoutUserInput>
  }

  export type CustomerCreateWithoutUserInput = {
    birth?: string | null
    gender?: string | null
    business_rates?: BusinessRateCreateNestedManyWithoutRaterInput
    business_reviews?: BusinessReviewCreateNestedManyWithoutReviewerInput
  }

  export type CustomerUncheckedCreateWithoutUserInput = {
    birth?: string | null
    gender?: string | null
    business_rates?: BusinessRateUncheckedCreateNestedManyWithoutRaterInput
    business_reviews?: BusinessReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type CustomerCreateOrConnectWithoutUserInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type UserAuthenticationCreateWithoutUsersInput = {
    id: string
    oauth_sub: string
    oauth_type: string
  }

  export type UserAuthenticationUncheckedCreateWithoutUsersInput = {
    id: string
    oauth_sub: string
    oauth_type: string
  }

  export type UserAuthenticationCreateOrConnectWithoutUsersInput = {
    where: UserAuthenticationWhereUniqueInput
    create: XOR<UserAuthenticationCreateWithoutUsersInput, UserAuthenticationUncheckedCreateWithoutUsersInput>
  }

  export type BoardArticleUpsertWithWhereUniqueWithoutWriterInput = {
    where: BoardArticleWhereUniqueInput
    update: XOR<BoardArticleUpdateWithoutWriterInput, BoardArticleUncheckedUpdateWithoutWriterInput>
    create: XOR<BoardArticleCreateWithoutWriterInput, BoardArticleUncheckedCreateWithoutWriterInput>
  }

  export type BoardArticleUpdateWithWhereUniqueWithoutWriterInput = {
    where: BoardArticleWhereUniqueInput
    data: XOR<BoardArticleUpdateWithoutWriterInput, BoardArticleUncheckedUpdateWithoutWriterInput>
  }

  export type BoardArticleUpdateManyWithWhereWithoutWriterInput = {
    where: BoardArticleScalarWhereInput
    data: XOR<BoardArticleUpdateManyMutationInput, BoardArticleUncheckedUpdateManyWithoutBoard_articlesInput>
  }

  export type BoardCommentUpsertWithWhereUniqueWithoutWriterInput = {
    where: BoardCommentWhereUniqueInput
    update: XOR<BoardCommentUpdateWithoutWriterInput, BoardCommentUncheckedUpdateWithoutWriterInput>
    create: XOR<BoardCommentCreateWithoutWriterInput, BoardCommentUncheckedCreateWithoutWriterInput>
  }

  export type BoardCommentUpdateWithWhereUniqueWithoutWriterInput = {
    where: BoardCommentWhereUniqueInput
    data: XOR<BoardCommentUpdateWithoutWriterInput, BoardCommentUncheckedUpdateWithoutWriterInput>
  }

  export type BoardCommentUpdateManyWithWhereWithoutWriterInput = {
    where: BoardCommentScalarWhereInput
    data: XOR<BoardCommentUpdateManyMutationInput, BoardCommentUncheckedUpdateManyWithoutBoard_commentsInput>
  }

  export type BusinessUserUpsertWithoutUserInput = {
    update: XOR<BusinessUserUpdateWithoutUserInput, BusinessUserUncheckedUpdateWithoutUserInput>
    create: XOR<BusinessUserCreateWithoutUserInput, BusinessUserUncheckedCreateWithoutUserInput>
  }

  export type BusinessUserUpdateWithoutUserInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_items?: BusinessItemUpdateManyWithoutManagerNestedInput
    business_rates?: BusinessRateUpdateManyWithoutBusinessNestedInput
    business_reviews?: BusinessReviewUpdateManyWithoutBusinessNestedInput
    home_care_company?: HomeCareCompanyUpdateOneWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUpdateOneWithoutBusiness_userNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutUserInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_items?: BusinessItemUncheckedUpdateManyWithoutManagerNestedInput
    business_rates?: BusinessRateUncheckedUpdateManyWithoutBusinessNestedInput
    business_reviews?: BusinessReviewUncheckedUpdateManyWithoutBusinessNestedInput
    home_care_company?: HomeCareCompanyUncheckedUpdateOneWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUncheckedUpdateOneWithoutBusiness_userNestedInput
  }

  export type CustomerUpsertWithoutUserInput = {
    update: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CustomerUpdateWithoutUserInput = {
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    business_rates?: BusinessRateUpdateManyWithoutRaterNestedInput
    business_reviews?: BusinessReviewUpdateManyWithoutReviewerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutUserInput = {
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    business_rates?: BusinessRateUncheckedUpdateManyWithoutRaterNestedInput
    business_reviews?: BusinessReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UserAuthenticationUpsertWithoutUsersInput = {
    update: XOR<UserAuthenticationUpdateWithoutUsersInput, UserAuthenticationUncheckedUpdateWithoutUsersInput>
    create: XOR<UserAuthenticationCreateWithoutUsersInput, UserAuthenticationUncheckedCreateWithoutUsersInput>
  }

  export type UserAuthenticationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: StringFieldUpdateOperationsInput | string
  }

  export type UserAuthenticationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessRateCreateWithoutRaterInput = {
    id: string
    rate: number
    business: BusinessUserCreateNestedOneWithoutBusiness_ratesInput
    category: BusinessRateCategoryCreateNestedOneWithoutRatesInput
  }

  export type BusinessRateUncheckedCreateWithoutRaterInput = {
    id: string
    category_id: string
    business_id: string
    rate: number
  }

  export type BusinessRateCreateOrConnectWithoutRaterInput = {
    where: BusinessRateWhereUniqueInput
    create: XOR<BusinessRateCreateWithoutRaterInput, BusinessRateUncheckedCreateWithoutRaterInput>
  }

  export type BusinessRateCreateManyRaterInputEnvelope = {
    data: Enumerable<BusinessRateCreateManyRaterInput>
    skipDuplicates?: boolean
  }

  export type BusinessReviewCreateWithoutReviewerInput = {
    id: string
    content: string
    business: BusinessUserCreateNestedOneWithoutBusiness_reviewsInput
  }

  export type BusinessReviewUncheckedCreateWithoutReviewerInput = {
    id: string
    business_id: string
    content: string
  }

  export type BusinessReviewCreateOrConnectWithoutReviewerInput = {
    where: BusinessReviewWhereUniqueInput
    create: XOR<BusinessReviewCreateWithoutReviewerInput, BusinessReviewUncheckedCreateWithoutReviewerInput>
  }

  export type BusinessReviewCreateManyReviewerInputEnvelope = {
    data: Enumerable<BusinessReviewCreateManyReviewerInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCustomerInput = {
    id: string
    name: string
    email: string
    email_verified: boolean
    phone: string
    address_first: string
    address_second?: string | null
    board_articles?: BoardArticleCreateNestedManyWithoutWriterInput
    board_comments?: BoardCommentCreateNestedManyWithoutWriterInput
    business_user?: BusinessUserCreateNestedOneWithoutUserInput
    auth: UserAuthenticationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCustomerInput = {
    id: string
    auth_id: string
    name: string
    email: string
    email_verified: boolean
    phone: string
    address_first: string
    address_second?: string | null
    board_articles?: BoardArticleUncheckedCreateNestedManyWithoutWriterInput
    board_comments?: BoardCommentUncheckedCreateNestedManyWithoutWriterInput
    business_user?: BusinessUserUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
  }

  export type BusinessRateUpsertWithWhereUniqueWithoutRaterInput = {
    where: BusinessRateWhereUniqueInput
    update: XOR<BusinessRateUpdateWithoutRaterInput, BusinessRateUncheckedUpdateWithoutRaterInput>
    create: XOR<BusinessRateCreateWithoutRaterInput, BusinessRateUncheckedCreateWithoutRaterInput>
  }

  export type BusinessRateUpdateWithWhereUniqueWithoutRaterInput = {
    where: BusinessRateWhereUniqueInput
    data: XOR<BusinessRateUpdateWithoutRaterInput, BusinessRateUncheckedUpdateWithoutRaterInput>
  }

  export type BusinessRateUpdateManyWithWhereWithoutRaterInput = {
    where: BusinessRateScalarWhereInput
    data: XOR<BusinessRateUpdateManyMutationInput, BusinessRateUncheckedUpdateManyWithoutBusiness_ratesInput>
  }

  export type BusinessReviewUpsertWithWhereUniqueWithoutReviewerInput = {
    where: BusinessReviewWhereUniqueInput
    update: XOR<BusinessReviewUpdateWithoutReviewerInput, BusinessReviewUncheckedUpdateWithoutReviewerInput>
    create: XOR<BusinessReviewCreateWithoutReviewerInput, BusinessReviewUncheckedCreateWithoutReviewerInput>
  }

  export type BusinessReviewUpdateWithWhereUniqueWithoutReviewerInput = {
    where: BusinessReviewWhereUniqueInput
    data: XOR<BusinessReviewUpdateWithoutReviewerInput, BusinessReviewUncheckedUpdateWithoutReviewerInput>
  }

  export type BusinessReviewUpdateManyWithWhereWithoutReviewerInput = {
    where: BusinessReviewScalarWhereInput
    data: XOR<BusinessReviewUpdateManyMutationInput, BusinessReviewUncheckedUpdateManyWithoutBusiness_reviewsInput>
  }

  export type BusinessReviewScalarWhereInput = {
    AND?: Enumerable<BusinessReviewScalarWhereInput>
    OR?: Enumerable<BusinessReviewScalarWhereInput>
    NOT?: Enumerable<BusinessReviewScalarWhereInput>
    id?: StringFilter | string
    business_id?: StringFilter | string
    reviewer_id?: StringFilter | string
    content?: StringFilter | string
  }

  export type UserUpsertWithoutCustomerInput = {
    update: XOR<UserUpdateWithoutCustomerInput, UserUncheckedUpdateWithoutCustomerInput>
    create: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
  }

  export type UserUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    board_articles?: BoardArticleUpdateManyWithoutWriterNestedInput
    board_comments?: BoardCommentUpdateManyWithoutWriterNestedInput
    business_user?: BusinessUserUpdateOneWithoutUserNestedInput
    auth?: UserAuthenticationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    board_articles?: BoardArticleUncheckedUpdateManyWithoutWriterNestedInput
    board_comments?: BoardCommentUncheckedUpdateManyWithoutWriterNestedInput
    business_user?: BusinessUserUncheckedUpdateOneWithoutUserNestedInput
  }

  export type BusinessItemCreateWithoutManagerInput = {
    id: string
    name: string
    main_image: string
  }

  export type BusinessItemUncheckedCreateWithoutManagerInput = {
    id: string
    name: string
    main_image: string
  }

  export type BusinessItemCreateOrConnectWithoutManagerInput = {
    where: BusinessItemWhereUniqueInput
    create: XOR<BusinessItemCreateWithoutManagerInput, BusinessItemUncheckedCreateWithoutManagerInput>
  }

  export type BusinessItemCreateManyManagerInputEnvelope = {
    data: Enumerable<BusinessItemCreateManyManagerInput>
    skipDuplicates?: boolean
  }

  export type BusinessRateCreateWithoutBusinessInput = {
    id: string
    rate: number
    category: BusinessRateCategoryCreateNestedOneWithoutRatesInput
    rater: CustomerCreateNestedOneWithoutBusiness_ratesInput
  }

  export type BusinessRateUncheckedCreateWithoutBusinessInput = {
    id: string
    category_id: string
    rater_id: string
    rate: number
  }

  export type BusinessRateCreateOrConnectWithoutBusinessInput = {
    where: BusinessRateWhereUniqueInput
    create: XOR<BusinessRateCreateWithoutBusinessInput, BusinessRateUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessRateCreateManyBusinessInputEnvelope = {
    data: Enumerable<BusinessRateCreateManyBusinessInput>
    skipDuplicates?: boolean
  }

  export type BusinessReviewCreateWithoutBusinessInput = {
    id: string
    content: string
    reviewer: CustomerCreateNestedOneWithoutBusiness_reviewsInput
  }

  export type BusinessReviewUncheckedCreateWithoutBusinessInput = {
    id: string
    reviewer_id: string
    content: string
  }

  export type BusinessReviewCreateOrConnectWithoutBusinessInput = {
    where: BusinessReviewWhereUniqueInput
    create: XOR<BusinessReviewCreateWithoutBusinessInput, BusinessReviewUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessReviewCreateManyBusinessInputEnvelope = {
    data: Enumerable<BusinessReviewCreateManyBusinessInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutBusiness_userInput = {
    id: string
    name: string
    email: string
    email_verified: boolean
    phone: string
    address_first: string
    address_second?: string | null
    board_articles?: BoardArticleCreateNestedManyWithoutWriterInput
    board_comments?: BoardCommentCreateNestedManyWithoutWriterInput
    customer?: CustomerCreateNestedOneWithoutUserInput
    auth: UserAuthenticationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutBusiness_userInput = {
    id: string
    auth_id: string
    name: string
    email: string
    email_verified: boolean
    phone: string
    address_first: string
    address_second?: string | null
    board_articles?: BoardArticleUncheckedCreateNestedManyWithoutWriterInput
    board_comments?: BoardCommentUncheckedCreateNestedManyWithoutWriterInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBusiness_userInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusiness_userInput, UserUncheckedCreateWithoutBusiness_userInput>
  }

  export type HomeCareCompanyCreateWithoutBusiness_userInput = {
    business_registration_num: string
    specialized_fields?: HomeCareSpecializedFieldCreateNestedManyWithoutCompanyInput
  }

  export type HomeCareCompanyUncheckedCreateWithoutBusiness_userInput = {
    business_registration_num: string
    specialized_fields?: HomeCareSpecializedFieldUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type HomeCareCompanyCreateOrConnectWithoutBusiness_userInput = {
    where: HomeCareCompanyWhereUniqueInput
    create: XOR<HomeCareCompanyCreateWithoutBusiness_userInput, HomeCareCompanyUncheckedCreateWithoutBusiness_userInput>
  }

  export type RealEstateAgentCreateWithoutBusiness_userInput = {
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    licensed_agent_name: string
    real_estate_phone: string
    specialized_fields?: RealEstateSpecializedFieldCreateNestedManyWithoutAgentInput
  }

  export type RealEstateAgentUncheckedCreateWithoutBusiness_userInput = {
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    licensed_agent_name: string
    real_estate_phone: string
    specialized_fields?: RealEstateSpecializedFieldUncheckedCreateNestedManyWithoutAgentInput
  }

  export type RealEstateAgentCreateOrConnectWithoutBusiness_userInput = {
    where: RealEstateAgentWhereUniqueInput
    create: XOR<RealEstateAgentCreateWithoutBusiness_userInput, RealEstateAgentUncheckedCreateWithoutBusiness_userInput>
  }

  export type BusinessItemUpsertWithWhereUniqueWithoutManagerInput = {
    where: BusinessItemWhereUniqueInput
    update: XOR<BusinessItemUpdateWithoutManagerInput, BusinessItemUncheckedUpdateWithoutManagerInput>
    create: XOR<BusinessItemCreateWithoutManagerInput, BusinessItemUncheckedCreateWithoutManagerInput>
  }

  export type BusinessItemUpdateWithWhereUniqueWithoutManagerInput = {
    where: BusinessItemWhereUniqueInput
    data: XOR<BusinessItemUpdateWithoutManagerInput, BusinessItemUncheckedUpdateWithoutManagerInput>
  }

  export type BusinessItemUpdateManyWithWhereWithoutManagerInput = {
    where: BusinessItemScalarWhereInput
    data: XOR<BusinessItemUpdateManyMutationInput, BusinessItemUncheckedUpdateManyWithoutBusiness_itemsInput>
  }

  export type BusinessItemScalarWhereInput = {
    AND?: Enumerable<BusinessItemScalarWhereInput>
    OR?: Enumerable<BusinessItemScalarWhereInput>
    NOT?: Enumerable<BusinessItemScalarWhereInput>
    id?: StringFilter | string
    manager_id?: StringFilter | string
    name?: StringFilter | string
    main_image?: StringFilter | string
  }

  export type BusinessRateUpsertWithWhereUniqueWithoutBusinessInput = {
    where: BusinessRateWhereUniqueInput
    update: XOR<BusinessRateUpdateWithoutBusinessInput, BusinessRateUncheckedUpdateWithoutBusinessInput>
    create: XOR<BusinessRateCreateWithoutBusinessInput, BusinessRateUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessRateUpdateWithWhereUniqueWithoutBusinessInput = {
    where: BusinessRateWhereUniqueInput
    data: XOR<BusinessRateUpdateWithoutBusinessInput, BusinessRateUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessRateUpdateManyWithWhereWithoutBusinessInput = {
    where: BusinessRateScalarWhereInput
    data: XOR<BusinessRateUpdateManyMutationInput, BusinessRateUncheckedUpdateManyWithoutBusiness_ratesInput>
  }

  export type BusinessReviewUpsertWithWhereUniqueWithoutBusinessInput = {
    where: BusinessReviewWhereUniqueInput
    update: XOR<BusinessReviewUpdateWithoutBusinessInput, BusinessReviewUncheckedUpdateWithoutBusinessInput>
    create: XOR<BusinessReviewCreateWithoutBusinessInput, BusinessReviewUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessReviewUpdateWithWhereUniqueWithoutBusinessInput = {
    where: BusinessReviewWhereUniqueInput
    data: XOR<BusinessReviewUpdateWithoutBusinessInput, BusinessReviewUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessReviewUpdateManyWithWhereWithoutBusinessInput = {
    where: BusinessReviewScalarWhereInput
    data: XOR<BusinessReviewUpdateManyMutationInput, BusinessReviewUncheckedUpdateManyWithoutBusiness_reviewsInput>
  }

  export type UserUpsertWithoutBusiness_userInput = {
    update: XOR<UserUpdateWithoutBusiness_userInput, UserUncheckedUpdateWithoutBusiness_userInput>
    create: XOR<UserCreateWithoutBusiness_userInput, UserUncheckedCreateWithoutBusiness_userInput>
  }

  export type UserUpdateWithoutBusiness_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    board_articles?: BoardArticleUpdateManyWithoutWriterNestedInput
    board_comments?: BoardCommentUpdateManyWithoutWriterNestedInput
    customer?: CustomerUpdateOneWithoutUserNestedInput
    auth?: UserAuthenticationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutBusiness_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    board_articles?: BoardArticleUncheckedUpdateManyWithoutWriterNestedInput
    board_comments?: BoardCommentUncheckedUpdateManyWithoutWriterNestedInput
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type HomeCareCompanyUpsertWithoutBusiness_userInput = {
    update: XOR<HomeCareCompanyUpdateWithoutBusiness_userInput, HomeCareCompanyUncheckedUpdateWithoutBusiness_userInput>
    create: XOR<HomeCareCompanyCreateWithoutBusiness_userInput, HomeCareCompanyUncheckedCreateWithoutBusiness_userInput>
  }

  export type HomeCareCompanyUpdateWithoutBusiness_userInput = {
    business_registration_num?: StringFieldUpdateOperationsInput | string
    specialized_fields?: HomeCareSpecializedFieldUpdateManyWithoutCompanyNestedInput
  }

  export type HomeCareCompanyUncheckedUpdateWithoutBusiness_userInput = {
    business_registration_num?: StringFieldUpdateOperationsInput | string
    specialized_fields?: HomeCareSpecializedFieldUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type RealEstateAgentUpsertWithoutBusiness_userInput = {
    update: XOR<RealEstateAgentUpdateWithoutBusiness_userInput, RealEstateAgentUncheckedUpdateWithoutBusiness_userInput>
    create: XOR<RealEstateAgentCreateWithoutBusiness_userInput, RealEstateAgentUncheckedCreateWithoutBusiness_userInput>
  }

  export type RealEstateAgentUpdateWithoutBusiness_userInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
    specialized_fields?: RealEstateSpecializedFieldUpdateManyWithoutAgentNestedInput
  }

  export type RealEstateAgentUncheckedUpdateWithoutBusiness_userInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
    specialized_fields?: RealEstateSpecializedFieldUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type BusinessUserCreateWithoutReal_estate_agentInput = {
    is_verified: boolean
    introduction_title?: string | null
    introduction_content?: string | null
    business_items?: BusinessItemCreateNestedManyWithoutManagerInput
    business_rates?: BusinessRateCreateNestedManyWithoutBusinessInput
    business_reviews?: BusinessReviewCreateNestedManyWithoutBusinessInput
    user: UserCreateNestedOneWithoutBusiness_userInput
    home_care_company?: HomeCareCompanyCreateNestedOneWithoutBusiness_userInput
  }

  export type BusinessUserUncheckedCreateWithoutReal_estate_agentInput = {
    id: string
    is_verified: boolean
    introduction_title?: string | null
    introduction_content?: string | null
    business_items?: BusinessItemUncheckedCreateNestedManyWithoutManagerInput
    business_rates?: BusinessRateUncheckedCreateNestedManyWithoutBusinessInput
    business_reviews?: BusinessReviewUncheckedCreateNestedManyWithoutBusinessInput
    home_care_company?: HomeCareCompanyUncheckedCreateNestedOneWithoutBusiness_userInput
  }

  export type BusinessUserCreateOrConnectWithoutReal_estate_agentInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutReal_estate_agentInput, BusinessUserUncheckedCreateWithoutReal_estate_agentInput>
  }

  export type RealEstateSpecializedFieldCreateWithoutAgentInput = {
    id: string
    real_estate_sub_category: RealEstateSubCategoryCreateNestedOneWithoutReal_estate_specialized_fieldsInput
  }

  export type RealEstateSpecializedFieldUncheckedCreateWithoutAgentInput = {
    id: string
    sub_category_id: string
  }

  export type RealEstateSpecializedFieldCreateOrConnectWithoutAgentInput = {
    where: RealEstateSpecializedFieldWhereUniqueInput
    create: XOR<RealEstateSpecializedFieldCreateWithoutAgentInput, RealEstateSpecializedFieldUncheckedCreateWithoutAgentInput>
  }

  export type RealEstateSpecializedFieldCreateManyAgentInputEnvelope = {
    data: Enumerable<RealEstateSpecializedFieldCreateManyAgentInput>
    skipDuplicates?: boolean
  }

  export type BusinessUserUpsertWithoutReal_estate_agentInput = {
    update: XOR<BusinessUserUpdateWithoutReal_estate_agentInput, BusinessUserUncheckedUpdateWithoutReal_estate_agentInput>
    create: XOR<BusinessUserCreateWithoutReal_estate_agentInput, BusinessUserUncheckedCreateWithoutReal_estate_agentInput>
  }

  export type BusinessUserUpdateWithoutReal_estate_agentInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_items?: BusinessItemUpdateManyWithoutManagerNestedInput
    business_rates?: BusinessRateUpdateManyWithoutBusinessNestedInput
    business_reviews?: BusinessReviewUpdateManyWithoutBusinessNestedInput
    user?: UserUpdateOneRequiredWithoutBusiness_userNestedInput
    home_care_company?: HomeCareCompanyUpdateOneWithoutBusiness_userNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutReal_estate_agentInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_items?: BusinessItemUncheckedUpdateManyWithoutManagerNestedInput
    business_rates?: BusinessRateUncheckedUpdateManyWithoutBusinessNestedInput
    business_reviews?: BusinessReviewUncheckedUpdateManyWithoutBusinessNestedInput
    home_care_company?: HomeCareCompanyUncheckedUpdateOneWithoutBusiness_userNestedInput
  }

  export type RealEstateSpecializedFieldUpsertWithWhereUniqueWithoutAgentInput = {
    where: RealEstateSpecializedFieldWhereUniqueInput
    update: XOR<RealEstateSpecializedFieldUpdateWithoutAgentInput, RealEstateSpecializedFieldUncheckedUpdateWithoutAgentInput>
    create: XOR<RealEstateSpecializedFieldCreateWithoutAgentInput, RealEstateSpecializedFieldUncheckedCreateWithoutAgentInput>
  }

  export type RealEstateSpecializedFieldUpdateWithWhereUniqueWithoutAgentInput = {
    where: RealEstateSpecializedFieldWhereUniqueInput
    data: XOR<RealEstateSpecializedFieldUpdateWithoutAgentInput, RealEstateSpecializedFieldUncheckedUpdateWithoutAgentInput>
  }

  export type RealEstateSpecializedFieldUpdateManyWithWhereWithoutAgentInput = {
    where: RealEstateSpecializedFieldScalarWhereInput
    data: XOR<RealEstateSpecializedFieldUpdateManyMutationInput, RealEstateSpecializedFieldUncheckedUpdateManyWithoutSpecialized_fieldsInput>
  }

  export type BusinessUserCreateWithoutHome_care_companyInput = {
    is_verified: boolean
    introduction_title?: string | null
    introduction_content?: string | null
    business_items?: BusinessItemCreateNestedManyWithoutManagerInput
    business_rates?: BusinessRateCreateNestedManyWithoutBusinessInput
    business_reviews?: BusinessReviewCreateNestedManyWithoutBusinessInput
    user: UserCreateNestedOneWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentCreateNestedOneWithoutBusiness_userInput
  }

  export type BusinessUserUncheckedCreateWithoutHome_care_companyInput = {
    id: string
    is_verified: boolean
    introduction_title?: string | null
    introduction_content?: string | null
    business_items?: BusinessItemUncheckedCreateNestedManyWithoutManagerInput
    business_rates?: BusinessRateUncheckedCreateNestedManyWithoutBusinessInput
    business_reviews?: BusinessReviewUncheckedCreateNestedManyWithoutBusinessInput
    real_estate_agent?: RealEstateAgentUncheckedCreateNestedOneWithoutBusiness_userInput
  }

  export type BusinessUserCreateOrConnectWithoutHome_care_companyInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutHome_care_companyInput, BusinessUserUncheckedCreateWithoutHome_care_companyInput>
  }

  export type HomeCareSpecializedFieldCreateWithoutCompanyInput = {
    id: string
    sub_category: HomeCareSubCategoryCreateNestedOneWithoutSpecialized_fieldsInput
  }

  export type HomeCareSpecializedFieldUncheckedCreateWithoutCompanyInput = {
    id: string
    sub_category_id: string
  }

  export type HomeCareSpecializedFieldCreateOrConnectWithoutCompanyInput = {
    where: HomeCareSpecializedFieldWhereUniqueInput
    create: XOR<HomeCareSpecializedFieldCreateWithoutCompanyInput, HomeCareSpecializedFieldUncheckedCreateWithoutCompanyInput>
  }

  export type HomeCareSpecializedFieldCreateManyCompanyInputEnvelope = {
    data: Enumerable<HomeCareSpecializedFieldCreateManyCompanyInput>
    skipDuplicates?: boolean
  }

  export type BusinessUserUpsertWithoutHome_care_companyInput = {
    update: XOR<BusinessUserUpdateWithoutHome_care_companyInput, BusinessUserUncheckedUpdateWithoutHome_care_companyInput>
    create: XOR<BusinessUserCreateWithoutHome_care_companyInput, BusinessUserUncheckedCreateWithoutHome_care_companyInput>
  }

  export type BusinessUserUpdateWithoutHome_care_companyInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_items?: BusinessItemUpdateManyWithoutManagerNestedInput
    business_rates?: BusinessRateUpdateManyWithoutBusinessNestedInput
    business_reviews?: BusinessReviewUpdateManyWithoutBusinessNestedInput
    user?: UserUpdateOneRequiredWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUpdateOneWithoutBusiness_userNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutHome_care_companyInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_items?: BusinessItemUncheckedUpdateManyWithoutManagerNestedInput
    business_rates?: BusinessRateUncheckedUpdateManyWithoutBusinessNestedInput
    business_reviews?: BusinessReviewUncheckedUpdateManyWithoutBusinessNestedInput
    real_estate_agent?: RealEstateAgentUncheckedUpdateOneWithoutBusiness_userNestedInput
  }

  export type HomeCareSpecializedFieldUpsertWithWhereUniqueWithoutCompanyInput = {
    where: HomeCareSpecializedFieldWhereUniqueInput
    update: XOR<HomeCareSpecializedFieldUpdateWithoutCompanyInput, HomeCareSpecializedFieldUncheckedUpdateWithoutCompanyInput>
    create: XOR<HomeCareSpecializedFieldCreateWithoutCompanyInput, HomeCareSpecializedFieldUncheckedCreateWithoutCompanyInput>
  }

  export type HomeCareSpecializedFieldUpdateWithWhereUniqueWithoutCompanyInput = {
    where: HomeCareSpecializedFieldWhereUniqueInput
    data: XOR<HomeCareSpecializedFieldUpdateWithoutCompanyInput, HomeCareSpecializedFieldUncheckedUpdateWithoutCompanyInput>
  }

  export type HomeCareSpecializedFieldUpdateManyWithWhereWithoutCompanyInput = {
    where: HomeCareSpecializedFieldScalarWhereInput
    data: XOR<HomeCareSpecializedFieldUpdateManyMutationInput, HomeCareSpecializedFieldUncheckedUpdateManyWithoutSpecialized_fieldsInput>
  }

  export type BoardArticleCreateManyBoardInput = {
    id: string
    writer_id: string
    title: string
    content: string
  }

  export type BoardArticleUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    writer?: UserUpdateOneRequiredWithoutBoard_articlesNestedInput
    comments?: BoardCommentUpdateManyWithoutArticleNestedInput
  }

  export type BoardArticleUncheckedUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    writer_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    comments?: BoardCommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type BoardArticleUncheckedUpdateManyWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    writer_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCommentCreateManyArticleInput = {
    id: string
    writer_id: string
    content: string
  }

  export type BoardCommentUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    writer?: UserUpdateOneRequiredWithoutBoard_commentsNestedInput
  }

  export type BoardCommentUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    writer_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCommentUncheckedUpdateManyWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    writer_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessRateCreateManyCategoryInput = {
    id: string
    business_id: string
    rater_id: string
    rate: number
  }

  export type BusinessRateUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    business?: BusinessUserUpdateOneRequiredWithoutBusiness_ratesNestedInput
    rater?: CustomerUpdateOneRequiredWithoutBusiness_ratesNestedInput
  }

  export type BusinessRateUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_id?: StringFieldUpdateOperationsInput | string
    rater_id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessRateUncheckedUpdateManyWithoutRatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_id?: StringFieldUpdateOperationsInput | string
    rater_id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type HomeCareSubCategoryCreateManySuperInput = {
    id: string
    name: string
  }

  export type HomeCareSubCategoryUpdateWithoutSuperInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    specialized_fields?: HomeCareSpecializedFieldUpdateManyWithoutSub_categoryNestedInput
  }

  export type HomeCareSubCategoryUncheckedUpdateWithoutSuperInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    specialized_fields?: HomeCareSpecializedFieldUncheckedUpdateManyWithoutSub_categoryNestedInput
  }

  export type HomeCareSubCategoryUncheckedUpdateManyWithoutHome_care_sub_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSpecializedFieldCreateManySub_categoryInput = {
    id: string
    company_id: string
  }

  export type HomeCareSpecializedFieldUpdateWithoutSub_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: HomeCareCompanyUpdateOneRequiredWithoutSpecialized_fieldsNestedInput
  }

  export type HomeCareSpecializedFieldUncheckedUpdateWithoutSub_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSpecializedFieldUncheckedUpdateManyWithoutSpecialized_fieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSubCategoryCreateManySuperInput = {
    id: string
    name: string
  }

  export type RealEstateSubCategoryUpdateWithoutSuperInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    real_estate_specialized_fields?: RealEstateSpecializedFieldUpdateManyWithoutReal_estate_sub_categoryNestedInput
  }

  export type RealEstateSubCategoryUncheckedUpdateWithoutSuperInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    real_estate_specialized_fields?: RealEstateSpecializedFieldUncheckedUpdateManyWithoutReal_estate_sub_categoryNestedInput
  }

  export type RealEstateSubCategoryUncheckedUpdateManyWithoutReal_estate_sub_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSpecializedFieldCreateManyReal_estate_sub_categoryInput = {
    id: string
    agent_id: string
  }

  export type RealEstateSpecializedFieldUpdateWithoutReal_estate_sub_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    agent?: RealEstateAgentUpdateOneRequiredWithoutSpecialized_fieldsNestedInput
  }

  export type RealEstateSpecializedFieldUncheckedUpdateWithoutReal_estate_sub_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSpecializedFieldUncheckedUpdateManyWithoutReal_estate_specialized_fieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyAuthInput = {
    id: string
    name: string
    email: string
    email_verified: boolean
    phone: string
    address_first: string
    address_second?: string | null
  }

  export type UserUpdateWithoutAuthInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    board_articles?: BoardArticleUpdateManyWithoutWriterNestedInput
    board_comments?: BoardCommentUpdateManyWithoutWriterNestedInput
    business_user?: BusinessUserUpdateOneWithoutUserNestedInput
    customer?: CustomerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    board_articles?: BoardArticleUncheckedUpdateManyWithoutWriterNestedInput
    board_comments?: BoardCommentUncheckedUpdateManyWithoutWriterNestedInput
    business_user?: BusinessUserUncheckedUpdateOneWithoutUserNestedInput
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BoardArticleCreateManyWriterInput = {
    id: string
    board_id: string
    title: string
    content: string
  }

  export type BoardCommentCreateManyWriterInput = {
    id: string
    article_id: string
    content: string
  }

  export type BoardArticleUpdateWithoutWriterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    board?: BoardUpdateOneRequiredWithoutArticlesNestedInput
    comments?: BoardCommentUpdateManyWithoutArticleNestedInput
  }

  export type BoardArticleUncheckedUpdateWithoutWriterInput = {
    id?: StringFieldUpdateOperationsInput | string
    board_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    comments?: BoardCommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type BoardArticleUncheckedUpdateManyWithoutBoard_articlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    board_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCommentUpdateWithoutWriterInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    article?: BoardArticleUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type BoardCommentUncheckedUpdateWithoutWriterInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCommentUncheckedUpdateManyWithoutBoard_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessRateCreateManyRaterInput = {
    id: string
    category_id: string
    business_id: string
    rate: number
  }

  export type BusinessReviewCreateManyReviewerInput = {
    id: string
    business_id: string
    content: string
  }

  export type BusinessRateUpdateWithoutRaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    business?: BusinessUserUpdateOneRequiredWithoutBusiness_ratesNestedInput
    category?: BusinessRateCategoryUpdateOneRequiredWithoutRatesNestedInput
  }

  export type BusinessRateUncheckedUpdateWithoutRaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    business_id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessRateUncheckedUpdateManyWithoutBusiness_ratesInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    business_id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessReviewUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    business?: BusinessUserUpdateOneRequiredWithoutBusiness_reviewsNestedInput
  }

  export type BusinessReviewUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessReviewUncheckedUpdateManyWithoutBusiness_reviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessItemCreateManyManagerInput = {
    id: string
    name: string
    main_image: string
  }

  export type BusinessRateCreateManyBusinessInput = {
    id: string
    category_id: string
    rater_id: string
    rate: number
  }

  export type BusinessReviewCreateManyBusinessInput = {
    id: string
    reviewer_id: string
    content: string
  }

  export type BusinessItemUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    main_image?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessItemUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    main_image?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessItemUncheckedUpdateManyWithoutBusiness_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    main_image?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessRateUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    category?: BusinessRateCategoryUpdateOneRequiredWithoutRatesNestedInput
    rater?: CustomerUpdateOneRequiredWithoutBusiness_ratesNestedInput
  }

  export type BusinessRateUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    rater_id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessReviewUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reviewer?: CustomerUpdateOneRequiredWithoutBusiness_reviewsNestedInput
  }

  export type BusinessReviewUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewer_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSpecializedFieldCreateManyAgentInput = {
    id: string
    sub_category_id: string
  }

  export type RealEstateSpecializedFieldUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    real_estate_sub_category?: RealEstateSubCategoryUpdateOneRequiredWithoutReal_estate_specialized_fieldsNestedInput
  }

  export type RealEstateSpecializedFieldUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub_category_id?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSpecializedFieldUncheckedUpdateManyWithoutSpecialized_fieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub_category_id?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSpecializedFieldCreateManyCompanyInput = {
    id: string
    sub_category_id: string
  }

  export type HomeCareSpecializedFieldUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub_category?: HomeCareSubCategoryUpdateOneRequiredWithoutSpecialized_fieldsNestedInput
  }

  export type HomeCareSpecializedFieldUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub_category_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
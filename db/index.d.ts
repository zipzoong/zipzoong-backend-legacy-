
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
 * Model Authentication
 * 
 */
export type Authentication = {
  id: string
  oauth_sub: string
  oauth_type: string
  business_user_id: string | null
  customer_id: string | null
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  name: string
  email: string | null
  email_verified: boolean
  phone: string | null
  phone_verified: boolean
  address_first: string | null
  address_second: string | null
  profile_image: string | null
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
  introduction_title: string
  introduction_content: string
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
  real_estate_phone: string
  licensed_agent_name: string
  specialized_field_id: string
}

/**
 * Model HomeCareCompany
 * 
 */
export type HomeCareCompany = {
  id: string
  business_registration_num: string
  specialized_field_id: string
}

/**
 * Model HomeCareIntroductionImage
 * 
 */
export type HomeCareIntroductionImage = {
  id: string
  image_url: string
  company_id: string
}

/**
 * Model RealEstateProperty
 * 
 */
export type RealEstateProperty = {
  id: string
  name: string
  main_image_url: string
  agent_id: string
}

/**
 * Model HomeCareSpecializedSuperField
 * 
 */
export type HomeCareSpecializedSuperField = {
  id: string
  name: string
}

/**
 * Model HomeCareSpecializedSubField
 * 
 */
export type HomeCareSpecializedSubField = {
  id: string
  name: string
  super_id: string
}

/**
 * Model RealEstateSpecializedSuperField
 * 
 */
export type RealEstateSpecializedSuperField = {
  id: string
  name: string
}

/**
 * Model RealEstateSpecializedSubField
 * 
 */
export type RealEstateSpecializedSubField = {
  id: string
  name: string
  super_id: string
}

/**
 * Model BusinessRate
 * 
 */
export type BusinessRate = {
  id: string
  category_id: string
  ratee_id: string
  rater_id: string
  rate: number
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
 * Model BusinessReview
 * 
 */
export type BusinessReview = {
  id: string
  reviewee_id: string
  reviewer_id: string
  review: string
}

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
  title: string
  author_id: string
  board_id: string
}

/**
 * Model BoardArticleContent
 * 
 */
export type BoardArticleContent = {
  id: string
  text: string
  created_at: Date
  article_id: string
}

/**
 * Model BoardComment
 * 
 */
export type BoardComment = {
  id: string
  author_id: string
  article_id: string
}

/**
 * Model BoardCommentContent
 * 
 */
export type BoardCommentContent = {
  id: string
  text: string
  created_at: Date
  comment_id: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authentications
 * const authentications = await prisma.authentication.findMany()
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
   * // Fetch zero or more Authentications
   * const authentications = await prisma.authentication.findMany()
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
   * `prisma.authentication`: Exposes CRUD operations for the **Authentication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authentications
    * const authentications = await prisma.authentication.findMany()
    * ```
    */
  get authentication(): Prisma.AuthenticationDelegate<GlobalReject>;

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

  /**
   * `prisma.homeCareIntroductionImage`: Exposes CRUD operations for the **HomeCareIntroductionImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomeCareIntroductionImages
    * const homeCareIntroductionImages = await prisma.homeCareIntroductionImage.findMany()
    * ```
    */
  get homeCareIntroductionImage(): Prisma.HomeCareIntroductionImageDelegate<GlobalReject>;

  /**
   * `prisma.realEstateProperty`: Exposes CRUD operations for the **RealEstateProperty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RealEstateProperties
    * const realEstateProperties = await prisma.realEstateProperty.findMany()
    * ```
    */
  get realEstateProperty(): Prisma.RealEstatePropertyDelegate<GlobalReject>;

  /**
   * `prisma.homeCareSpecializedSuperField`: Exposes CRUD operations for the **HomeCareSpecializedSuperField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomeCareSpecializedSuperFields
    * const homeCareSpecializedSuperFields = await prisma.homeCareSpecializedSuperField.findMany()
    * ```
    */
  get homeCareSpecializedSuperField(): Prisma.HomeCareSpecializedSuperFieldDelegate<GlobalReject>;

  /**
   * `prisma.homeCareSpecializedSubField`: Exposes CRUD operations for the **HomeCareSpecializedSubField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomeCareSpecializedSubFields
    * const homeCareSpecializedSubFields = await prisma.homeCareSpecializedSubField.findMany()
    * ```
    */
  get homeCareSpecializedSubField(): Prisma.HomeCareSpecializedSubFieldDelegate<GlobalReject>;

  /**
   * `prisma.realEstateSpecializedSuperField`: Exposes CRUD operations for the **RealEstateSpecializedSuperField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RealEstateSpecializedSuperFields
    * const realEstateSpecializedSuperFields = await prisma.realEstateSpecializedSuperField.findMany()
    * ```
    */
  get realEstateSpecializedSuperField(): Prisma.RealEstateSpecializedSuperFieldDelegate<GlobalReject>;

  /**
   * `prisma.realEstateSpecializedSubField`: Exposes CRUD operations for the **RealEstateSpecializedSubField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RealEstateSpecializedSubFields
    * const realEstateSpecializedSubFields = await prisma.realEstateSpecializedSubField.findMany()
    * ```
    */
  get realEstateSpecializedSubField(): Prisma.RealEstateSpecializedSubFieldDelegate<GlobalReject>;

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
   * `prisma.businessRateCategory`: Exposes CRUD operations for the **BusinessRateCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessRateCategories
    * const businessRateCategories = await prisma.businessRateCategory.findMany()
    * ```
    */
  get businessRateCategory(): Prisma.BusinessRateCategoryDelegate<GlobalReject>;

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
   * `prisma.boardArticleContent`: Exposes CRUD operations for the **BoardArticleContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardArticleContents
    * const boardArticleContents = await prisma.boardArticleContent.findMany()
    * ```
    */
  get boardArticleContent(): Prisma.BoardArticleContentDelegate<GlobalReject>;

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
   * `prisma.boardCommentContent`: Exposes CRUD operations for the **BoardCommentContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardCommentContents
    * const boardCommentContents = await prisma.boardCommentContent.findMany()
    * ```
    */
  get boardCommentContent(): Prisma.BoardCommentContentDelegate<GlobalReject>;
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
    Authentication: 'Authentication',
    User: 'User',
    Customer: 'Customer',
    BusinessUser: 'BusinessUser',
    RealEstateAgent: 'RealEstateAgent',
    HomeCareCompany: 'HomeCareCompany',
    HomeCareIntroductionImage: 'HomeCareIntroductionImage',
    RealEstateProperty: 'RealEstateProperty',
    HomeCareSpecializedSuperField: 'HomeCareSpecializedSuperField',
    HomeCareSpecializedSubField: 'HomeCareSpecializedSubField',
    RealEstateSpecializedSuperField: 'RealEstateSpecializedSuperField',
    RealEstateSpecializedSubField: 'RealEstateSpecializedSubField',
    BusinessRate: 'BusinessRate',
    BusinessRateCategory: 'BusinessRateCategory',
    BusinessReview: 'BusinessReview',
    Board: 'Board',
    BoardArticle: 'BoardArticle',
    BoardArticleContent: 'BoardArticleContent',
    BoardComment: 'BoardComment',
    BoardCommentContent: 'BoardCommentContent'
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
    authentications: number
    rates: number
    reviews: number
  }

  export type CustomerCountOutputTypeSelect = {
    authentications?: boolean
    rates?: boolean
    reviews?: boolean
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
    authentications: number
    rates: number
    reviews: number
  }

  export type BusinessUserCountOutputTypeSelect = {
    authentications?: boolean
    rates?: boolean
    reviews?: boolean
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
    properties: number
  }

  export type RealEstateAgentCountOutputTypeSelect = {
    properties?: boolean
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
    introduction_images: number
  }

  export type HomeCareCompanyCountOutputTypeSelect = {
    introduction_images?: boolean
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
   * Count Type HomeCareSpecializedSuperFieldCountOutputType
   */


  export type HomeCareSpecializedSuperFieldCountOutputType = {
    sub: number
  }

  export type HomeCareSpecializedSuperFieldCountOutputTypeSelect = {
    sub?: boolean
  }

  export type HomeCareSpecializedSuperFieldCountOutputTypeGetPayload<S extends boolean | null | undefined | HomeCareSpecializedSuperFieldCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HomeCareSpecializedSuperFieldCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (HomeCareSpecializedSuperFieldCountOutputTypeArgs)
    ? HomeCareSpecializedSuperFieldCountOutputType 
    : S extends { select: any } & (HomeCareSpecializedSuperFieldCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof HomeCareSpecializedSuperFieldCountOutputType ? HomeCareSpecializedSuperFieldCountOutputType[P] : never
  } 
      : HomeCareSpecializedSuperFieldCountOutputType




  // Custom InputTypes

  /**
   * HomeCareSpecializedSuperFieldCountOutputType without action
   */
  export type HomeCareSpecializedSuperFieldCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSuperFieldCountOutputType
     */
    select?: HomeCareSpecializedSuperFieldCountOutputTypeSelect | null
  }



  /**
   * Count Type HomeCareSpecializedSubFieldCountOutputType
   */


  export type HomeCareSpecializedSubFieldCountOutputType = {
    home_care_companies: number
  }

  export type HomeCareSpecializedSubFieldCountOutputTypeSelect = {
    home_care_companies?: boolean
  }

  export type HomeCareSpecializedSubFieldCountOutputTypeGetPayload<S extends boolean | null | undefined | HomeCareSpecializedSubFieldCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HomeCareSpecializedSubFieldCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (HomeCareSpecializedSubFieldCountOutputTypeArgs)
    ? HomeCareSpecializedSubFieldCountOutputType 
    : S extends { select: any } & (HomeCareSpecializedSubFieldCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof HomeCareSpecializedSubFieldCountOutputType ? HomeCareSpecializedSubFieldCountOutputType[P] : never
  } 
      : HomeCareSpecializedSubFieldCountOutputType




  // Custom InputTypes

  /**
   * HomeCareSpecializedSubFieldCountOutputType without action
   */
  export type HomeCareSpecializedSubFieldCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSubFieldCountOutputType
     */
    select?: HomeCareSpecializedSubFieldCountOutputTypeSelect | null
  }



  /**
   * Count Type RealEstateSpecializedSuperFieldCountOutputType
   */


  export type RealEstateSpecializedSuperFieldCountOutputType = {
    sub: number
  }

  export type RealEstateSpecializedSuperFieldCountOutputTypeSelect = {
    sub?: boolean
  }

  export type RealEstateSpecializedSuperFieldCountOutputTypeGetPayload<S extends boolean | null | undefined | RealEstateSpecializedSuperFieldCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RealEstateSpecializedSuperFieldCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RealEstateSpecializedSuperFieldCountOutputTypeArgs)
    ? RealEstateSpecializedSuperFieldCountOutputType 
    : S extends { select: any } & (RealEstateSpecializedSuperFieldCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RealEstateSpecializedSuperFieldCountOutputType ? RealEstateSpecializedSuperFieldCountOutputType[P] : never
  } 
      : RealEstateSpecializedSuperFieldCountOutputType




  // Custom InputTypes

  /**
   * RealEstateSpecializedSuperFieldCountOutputType without action
   */
  export type RealEstateSpecializedSuperFieldCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSuperFieldCountOutputType
     */
    select?: RealEstateSpecializedSuperFieldCountOutputTypeSelect | null
  }



  /**
   * Count Type RealEstateSpecializedSubFieldCountOutputType
   */


  export type RealEstateSpecializedSubFieldCountOutputType = {
    real_estate_agents: number
  }

  export type RealEstateSpecializedSubFieldCountOutputTypeSelect = {
    real_estate_agents?: boolean
  }

  export type RealEstateSpecializedSubFieldCountOutputTypeGetPayload<S extends boolean | null | undefined | RealEstateSpecializedSubFieldCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RealEstateSpecializedSubFieldCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RealEstateSpecializedSubFieldCountOutputTypeArgs)
    ? RealEstateSpecializedSubFieldCountOutputType 
    : S extends { select: any } & (RealEstateSpecializedSubFieldCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RealEstateSpecializedSubFieldCountOutputType ? RealEstateSpecializedSubFieldCountOutputType[P] : never
  } 
      : RealEstateSpecializedSubFieldCountOutputType




  // Custom InputTypes

  /**
   * RealEstateSpecializedSubFieldCountOutputType without action
   */
  export type RealEstateSpecializedSubFieldCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSubFieldCountOutputType
     */
    select?: RealEstateSpecializedSubFieldCountOutputTypeSelect | null
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
    contents: number
    comments: number
  }

  export type BoardArticleCountOutputTypeSelect = {
    contents?: boolean
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
   * Count Type BoardCommentCountOutputType
   */


  export type BoardCommentCountOutputType = {
    contents: number
  }

  export type BoardCommentCountOutputTypeSelect = {
    contents?: boolean
  }

  export type BoardCommentCountOutputTypeGetPayload<S extends boolean | null | undefined | BoardCommentCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BoardCommentCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BoardCommentCountOutputTypeArgs)
    ? BoardCommentCountOutputType 
    : S extends { select: any } & (BoardCommentCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BoardCommentCountOutputType ? BoardCommentCountOutputType[P] : never
  } 
      : BoardCommentCountOutputType




  // Custom InputTypes

  /**
   * BoardCommentCountOutputType without action
   */
  export type BoardCommentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BoardCommentCountOutputType
     */
    select?: BoardCommentCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Authentication
   */


  export type AggregateAuthentication = {
    _count: AuthenticationCountAggregateOutputType | null
    _min: AuthenticationMinAggregateOutputType | null
    _max: AuthenticationMaxAggregateOutputType | null
  }

  export type AuthenticationMinAggregateOutputType = {
    id: string | null
    oauth_sub: string | null
    oauth_type: string | null
    business_user_id: string | null
    customer_id: string | null
  }

  export type AuthenticationMaxAggregateOutputType = {
    id: string | null
    oauth_sub: string | null
    oauth_type: string | null
    business_user_id: string | null
    customer_id: string | null
  }

  export type AuthenticationCountAggregateOutputType = {
    id: number
    oauth_sub: number
    oauth_type: number
    business_user_id: number
    customer_id: number
    _all: number
  }


  export type AuthenticationMinAggregateInputType = {
    id?: true
    oauth_sub?: true
    oauth_type?: true
    business_user_id?: true
    customer_id?: true
  }

  export type AuthenticationMaxAggregateInputType = {
    id?: true
    oauth_sub?: true
    oauth_type?: true
    business_user_id?: true
    customer_id?: true
  }

  export type AuthenticationCountAggregateInputType = {
    id?: true
    oauth_sub?: true
    oauth_type?: true
    business_user_id?: true
    customer_id?: true
    _all?: true
  }

  export type AuthenticationAggregateArgs = {
    /**
     * Filter which Authentication to aggregate.
     */
    where?: AuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authentications to fetch.
     */
    orderBy?: Enumerable<AuthenticationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authentications
    **/
    _count?: true | AuthenticationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthenticationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthenticationMaxAggregateInputType
  }

  export type GetAuthenticationAggregateType<T extends AuthenticationAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthentication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthentication[P]>
      : GetScalarType<T[P], AggregateAuthentication[P]>
  }




  export type AuthenticationGroupByArgs = {
    where?: AuthenticationWhereInput
    orderBy?: Enumerable<AuthenticationOrderByWithAggregationInput>
    by: AuthenticationScalarFieldEnum[]
    having?: AuthenticationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthenticationCountAggregateInputType | true
    _min?: AuthenticationMinAggregateInputType
    _max?: AuthenticationMaxAggregateInputType
  }


  export type AuthenticationGroupByOutputType = {
    id: string
    oauth_sub: string
    oauth_type: string
    business_user_id: string | null
    customer_id: string | null
    _count: AuthenticationCountAggregateOutputType | null
    _min: AuthenticationMinAggregateOutputType | null
    _max: AuthenticationMaxAggregateOutputType | null
  }

  type GetAuthenticationGroupByPayload<T extends AuthenticationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AuthenticationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthenticationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthenticationGroupByOutputType[P]>
            : GetScalarType<T[P], AuthenticationGroupByOutputType[P]>
        }
      >
    >


  export type AuthenticationSelect = {
    id?: boolean
    oauth_sub?: boolean
    oauth_type?: boolean
    business_user_id?: boolean
    customer_id?: boolean
    business_user?: boolean | BusinessUserArgs
    customer?: boolean | CustomerArgs
  }


  export type AuthenticationInclude = {
    business_user?: boolean | BusinessUserArgs
    customer?: boolean | CustomerArgs
  }

  export type AuthenticationGetPayload<S extends boolean | null | undefined | AuthenticationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Authentication :
    S extends undefined ? never :
    S extends { include: any } & (AuthenticationArgs | AuthenticationFindManyArgs)
    ? Authentication  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'business_user' ? BusinessUserGetPayload<S['include'][P]> | null :
        P extends 'customer' ? CustomerGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (AuthenticationArgs | AuthenticationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'business_user' ? BusinessUserGetPayload<S['select'][P]> | null :
        P extends 'customer' ? CustomerGetPayload<S['select'][P]> | null :  P extends keyof Authentication ? Authentication[P] : never
  } 
      : Authentication


  type AuthenticationCountArgs = 
    Omit<AuthenticationFindManyArgs, 'select' | 'include'> & {
      select?: AuthenticationCountAggregateInputType | true
    }

  export interface AuthenticationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Authentication that matches the filter.
     * @param {AuthenticationFindUniqueArgs} args - Arguments to find a Authentication
     * @example
     * // Get one Authentication
     * const authentication = await prisma.authentication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuthenticationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AuthenticationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Authentication'> extends True ? Prisma__AuthenticationClient<AuthenticationGetPayload<T>> : Prisma__AuthenticationClient<AuthenticationGetPayload<T> | null, null>

    /**
     * Find one Authentication that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AuthenticationFindUniqueOrThrowArgs} args - Arguments to find a Authentication
     * @example
     * // Get one Authentication
     * const authentication = await prisma.authentication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuthenticationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AuthenticationFindUniqueOrThrowArgs>
    ): Prisma__AuthenticationClient<AuthenticationGetPayload<T>>

    /**
     * Find the first Authentication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationFindFirstArgs} args - Arguments to find a Authentication
     * @example
     * // Get one Authentication
     * const authentication = await prisma.authentication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuthenticationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AuthenticationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Authentication'> extends True ? Prisma__AuthenticationClient<AuthenticationGetPayload<T>> : Prisma__AuthenticationClient<AuthenticationGetPayload<T> | null, null>

    /**
     * Find the first Authentication that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationFindFirstOrThrowArgs} args - Arguments to find a Authentication
     * @example
     * // Get one Authentication
     * const authentication = await prisma.authentication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuthenticationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AuthenticationFindFirstOrThrowArgs>
    ): Prisma__AuthenticationClient<AuthenticationGetPayload<T>>

    /**
     * Find zero or more Authentications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authentications
     * const authentications = await prisma.authentication.findMany()
     * 
     * // Get first 10 Authentications
     * const authentications = await prisma.authentication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authenticationWithIdOnly = await prisma.authentication.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuthenticationFindManyArgs>(
      args?: SelectSubset<T, AuthenticationFindManyArgs>
    ): Prisma.PrismaPromise<Array<AuthenticationGetPayload<T>>>

    /**
     * Create a Authentication.
     * @param {AuthenticationCreateArgs} args - Arguments to create a Authentication.
     * @example
     * // Create one Authentication
     * const Authentication = await prisma.authentication.create({
     *   data: {
     *     // ... data to create a Authentication
     *   }
     * })
     * 
    **/
    create<T extends AuthenticationCreateArgs>(
      args: SelectSubset<T, AuthenticationCreateArgs>
    ): Prisma__AuthenticationClient<AuthenticationGetPayload<T>>

    /**
     * Create many Authentications.
     *     @param {AuthenticationCreateManyArgs} args - Arguments to create many Authentications.
     *     @example
     *     // Create many Authentications
     *     const authentication = await prisma.authentication.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuthenticationCreateManyArgs>(
      args?: SelectSubset<T, AuthenticationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Authentication.
     * @param {AuthenticationDeleteArgs} args - Arguments to delete one Authentication.
     * @example
     * // Delete one Authentication
     * const Authentication = await prisma.authentication.delete({
     *   where: {
     *     // ... filter to delete one Authentication
     *   }
     * })
     * 
    **/
    delete<T extends AuthenticationDeleteArgs>(
      args: SelectSubset<T, AuthenticationDeleteArgs>
    ): Prisma__AuthenticationClient<AuthenticationGetPayload<T>>

    /**
     * Update one Authentication.
     * @param {AuthenticationUpdateArgs} args - Arguments to update one Authentication.
     * @example
     * // Update one Authentication
     * const authentication = await prisma.authentication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuthenticationUpdateArgs>(
      args: SelectSubset<T, AuthenticationUpdateArgs>
    ): Prisma__AuthenticationClient<AuthenticationGetPayload<T>>

    /**
     * Delete zero or more Authentications.
     * @param {AuthenticationDeleteManyArgs} args - Arguments to filter Authentications to delete.
     * @example
     * // Delete a few Authentications
     * const { count } = await prisma.authentication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuthenticationDeleteManyArgs>(
      args?: SelectSubset<T, AuthenticationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authentications
     * const authentication = await prisma.authentication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuthenticationUpdateManyArgs>(
      args: SelectSubset<T, AuthenticationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Authentication.
     * @param {AuthenticationUpsertArgs} args - Arguments to update or create a Authentication.
     * @example
     * // Update or create a Authentication
     * const authentication = await prisma.authentication.upsert({
     *   create: {
     *     // ... data to create a Authentication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authentication we want to update
     *   }
     * })
    **/
    upsert<T extends AuthenticationUpsertArgs>(
      args: SelectSubset<T, AuthenticationUpsertArgs>
    ): Prisma__AuthenticationClient<AuthenticationGetPayload<T>>

    /**
     * Count the number of Authentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationCountArgs} args - Arguments to filter Authentications to count.
     * @example
     * // Count the number of Authentications
     * const count = await prisma.authentication.count({
     *   where: {
     *     // ... the filter for the Authentications we want to count
     *   }
     * })
    **/
    count<T extends AuthenticationCountArgs>(
      args?: Subset<T, AuthenticationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthenticationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authentication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthenticationAggregateArgs>(args: Subset<T, AuthenticationAggregateArgs>): Prisma.PrismaPromise<GetAuthenticationAggregateType<T>>

    /**
     * Group by Authentication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationGroupByArgs} args - Group by arguments.
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
      T extends AuthenticationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthenticationGroupByArgs['orderBy'] }
        : { orderBy?: AuthenticationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthenticationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthenticationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Authentication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AuthenticationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    customer<T extends CustomerArgs= {}>(args?: Subset<T, CustomerArgs>): Prisma__CustomerClient<CustomerGetPayload<T> | Null>;

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
   * Authentication base type for findUnique actions
   */
  export type AuthenticationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude | null
    /**
     * Filter, which Authentication to fetch.
     */
    where: AuthenticationWhereUniqueInput
  }

  /**
   * Authentication findUnique
   */
  export interface AuthenticationFindUniqueArgs extends AuthenticationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Authentication findUniqueOrThrow
   */
  export type AuthenticationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude | null
    /**
     * Filter, which Authentication to fetch.
     */
    where: AuthenticationWhereUniqueInput
  }


  /**
   * Authentication base type for findFirst actions
   */
  export type AuthenticationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude | null
    /**
     * Filter, which Authentication to fetch.
     */
    where?: AuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authentications to fetch.
     */
    orderBy?: Enumerable<AuthenticationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authentications.
     */
    cursor?: AuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authentications.
     */
    distinct?: Enumerable<AuthenticationScalarFieldEnum>
  }

  /**
   * Authentication findFirst
   */
  export interface AuthenticationFindFirstArgs extends AuthenticationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Authentication findFirstOrThrow
   */
  export type AuthenticationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude | null
    /**
     * Filter, which Authentication to fetch.
     */
    where?: AuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authentications to fetch.
     */
    orderBy?: Enumerable<AuthenticationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authentications.
     */
    cursor?: AuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authentications.
     */
    distinct?: Enumerable<AuthenticationScalarFieldEnum>
  }


  /**
   * Authentication findMany
   */
  export type AuthenticationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude | null
    /**
     * Filter, which Authentications to fetch.
     */
    where?: AuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authentications to fetch.
     */
    orderBy?: Enumerable<AuthenticationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authentications.
     */
    cursor?: AuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authentications.
     */
    skip?: number
    distinct?: Enumerable<AuthenticationScalarFieldEnum>
  }


  /**
   * Authentication create
   */
  export type AuthenticationCreateArgs = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude | null
    /**
     * The data needed to create a Authentication.
     */
    data: XOR<AuthenticationCreateInput, AuthenticationUncheckedCreateInput>
  }


  /**
   * Authentication createMany
   */
  export type AuthenticationCreateManyArgs = {
    /**
     * The data used to create many Authentications.
     */
    data: Enumerable<AuthenticationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Authentication update
   */
  export type AuthenticationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude | null
    /**
     * The data needed to update a Authentication.
     */
    data: XOR<AuthenticationUpdateInput, AuthenticationUncheckedUpdateInput>
    /**
     * Choose, which Authentication to update.
     */
    where: AuthenticationWhereUniqueInput
  }


  /**
   * Authentication updateMany
   */
  export type AuthenticationUpdateManyArgs = {
    /**
     * The data used to update Authentications.
     */
    data: XOR<AuthenticationUpdateManyMutationInput, AuthenticationUncheckedUpdateManyInput>
    /**
     * Filter which Authentications to update
     */
    where?: AuthenticationWhereInput
  }


  /**
   * Authentication upsert
   */
  export type AuthenticationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude | null
    /**
     * The filter to search for the Authentication to update in case it exists.
     */
    where: AuthenticationWhereUniqueInput
    /**
     * In case the Authentication found by the `where` argument doesn't exist, create a new Authentication with this data.
     */
    create: XOR<AuthenticationCreateInput, AuthenticationUncheckedCreateInput>
    /**
     * In case the Authentication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthenticationUpdateInput, AuthenticationUncheckedUpdateInput>
  }


  /**
   * Authentication delete
   */
  export type AuthenticationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude | null
    /**
     * Filter which Authentication to delete.
     */
    where: AuthenticationWhereUniqueInput
  }


  /**
   * Authentication deleteMany
   */
  export type AuthenticationDeleteManyArgs = {
    /**
     * Filter which Authentications to delete
     */
    where?: AuthenticationWhereInput
  }


  /**
   * Authentication without action
   */
  export type AuthenticationArgs = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude | null
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
    name: string | null
    email: string | null
    email_verified: boolean | null
    phone: string | null
    phone_verified: boolean | null
    address_first: string | null
    address_second: string | null
    profile_image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    email_verified: boolean | null
    phone: string | null
    phone_verified: boolean | null
    address_first: string | null
    address_second: string | null
    profile_image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    email_verified: number
    phone: number
    phone_verified: number
    address_first: number
    address_second: number
    profile_image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    phone?: true
    phone_verified?: true
    address_first?: true
    address_second?: true
    profile_image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    phone?: true
    phone_verified?: true
    address_first?: true
    address_second?: true
    profile_image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    phone?: true
    phone_verified?: true
    address_first?: true
    address_second?: true
    profile_image?: true
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
    name: string
    email: string | null
    email_verified: boolean
    phone: string | null
    phone_verified: boolean
    address_first: string | null
    address_second: string | null
    profile_image: string | null
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
    name?: boolean
    email?: boolean
    email_verified?: boolean
    phone?: boolean
    phone_verified?: boolean
    address_first?: boolean
    address_second?: boolean
    profile_image?: boolean
    customer?: boolean | CustomerArgs
    business_user?: boolean | BusinessUserArgs
    board_articles?: boolean | User$board_articlesArgs
    board_comments?: boolean | User$board_commentsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    customer?: boolean | CustomerArgs
    business_user?: boolean | BusinessUserArgs
    board_articles?: boolean | User$board_articlesArgs
    board_comments?: boolean | User$board_commentsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'customer' ? CustomerGetPayload<S['include'][P]> | null :
        P extends 'business_user' ? BusinessUserGetPayload<S['include'][P]> | null :
        P extends 'board_articles' ? Array < BoardArticleGetPayload<S['include'][P]>>  :
        P extends 'board_comments' ? Array < BoardCommentGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'customer' ? CustomerGetPayload<S['select'][P]> | null :
        P extends 'business_user' ? BusinessUserGetPayload<S['select'][P]> | null :
        P extends 'board_articles' ? Array < BoardArticleGetPayload<S['select'][P]>>  :
        P extends 'board_comments' ? Array < BoardCommentGetPayload<S['select'][P]>>  :
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

    customer<T extends CustomerArgs= {}>(args?: Subset<T, CustomerArgs>): Prisma__CustomerClient<CustomerGetPayload<T> | Null>;

    business_user<T extends BusinessUserArgs= {}>(args?: Subset<T, BusinessUserArgs>): Prisma__BusinessUserClient<BusinessUserGetPayload<T> | Null>;

    board_articles<T extends User$board_articlesArgs= {}>(args?: Subset<T, User$board_articlesArgs>): Prisma.PrismaPromise<Array<BoardArticleGetPayload<T>>| Null>;

    board_comments<T extends User$board_commentsArgs= {}>(args?: Subset<T, User$board_commentsArgs>): Prisma.PrismaPromise<Array<BoardCommentGetPayload<T>>| Null>;

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
    user?: boolean | UserArgs
    authentications?: boolean | Customer$authenticationsArgs
    rates?: boolean | Customer$ratesArgs
    reviews?: boolean | Customer$reviewsArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }


  export type CustomerInclude = {
    user?: boolean | UserArgs
    authentications?: boolean | Customer$authenticationsArgs
    rates?: boolean | Customer$ratesArgs
    reviews?: boolean | Customer$reviewsArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }

  export type CustomerGetPayload<S extends boolean | null | undefined | CustomerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Customer :
    S extends undefined ? never :
    S extends { include: any } & (CustomerArgs | CustomerFindManyArgs)
    ? Customer  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'authentications' ? Array < AuthenticationGetPayload<S['include'][P]>>  :
        P extends 'rates' ? Array < BusinessRateGetPayload<S['include'][P]>>  :
        P extends 'reviews' ? Array < BusinessReviewGetPayload<S['include'][P]>>  :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CustomerArgs | CustomerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'authentications' ? Array < AuthenticationGetPayload<S['select'][P]>>  :
        P extends 'rates' ? Array < BusinessRateGetPayload<S['select'][P]>>  :
        P extends 'reviews' ? Array < BusinessReviewGetPayload<S['select'][P]>>  :
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

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    authentications<T extends Customer$authenticationsArgs= {}>(args?: Subset<T, Customer$authenticationsArgs>): Prisma.PrismaPromise<Array<AuthenticationGetPayload<T>>| Null>;

    rates<T extends Customer$ratesArgs= {}>(args?: Subset<T, Customer$ratesArgs>): Prisma.PrismaPromise<Array<BusinessRateGetPayload<T>>| Null>;

    reviews<T extends Customer$reviewsArgs= {}>(args?: Subset<T, Customer$reviewsArgs>): Prisma.PrismaPromise<Array<BusinessReviewGetPayload<T>>| Null>;

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
   * Customer.authentications
   */
  export type Customer$authenticationsArgs = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude | null
    where?: AuthenticationWhereInput
    orderBy?: Enumerable<AuthenticationOrderByWithRelationInput>
    cursor?: AuthenticationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AuthenticationScalarFieldEnum>
  }


  /**
   * Customer.rates
   */
  export type Customer$ratesArgs = {
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
   * Customer.reviews
   */
  export type Customer$reviewsArgs = {
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
    introduction_title: string
    introduction_content: string
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
    user?: boolean | UserArgs
    authentications?: boolean | BusinessUser$authenticationsArgs
    real_estate_agent?: boolean | RealEstateAgentArgs
    home_care_company?: boolean | HomeCareCompanyArgs
    rates?: boolean | BusinessUser$ratesArgs
    reviews?: boolean | BusinessUser$reviewsArgs
    _count?: boolean | BusinessUserCountOutputTypeArgs
  }


  export type BusinessUserInclude = {
    user?: boolean | UserArgs
    authentications?: boolean | BusinessUser$authenticationsArgs
    real_estate_agent?: boolean | RealEstateAgentArgs
    home_care_company?: boolean | HomeCareCompanyArgs
    rates?: boolean | BusinessUser$ratesArgs
    reviews?: boolean | BusinessUser$reviewsArgs
    _count?: boolean | BusinessUserCountOutputTypeArgs
  }

  export type BusinessUserGetPayload<S extends boolean | null | undefined | BusinessUserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BusinessUser :
    S extends undefined ? never :
    S extends { include: any } & (BusinessUserArgs | BusinessUserFindManyArgs)
    ? BusinessUser  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'authentications' ? Array < AuthenticationGetPayload<S['include'][P]>>  :
        P extends 'real_estate_agent' ? RealEstateAgentGetPayload<S['include'][P]> | null :
        P extends 'home_care_company' ? HomeCareCompanyGetPayload<S['include'][P]> | null :
        P extends 'rates' ? Array < BusinessRateGetPayload<S['include'][P]>>  :
        P extends 'reviews' ? Array < BusinessReviewGetPayload<S['include'][P]>>  :
        P extends '_count' ? BusinessUserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BusinessUserArgs | BusinessUserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'authentications' ? Array < AuthenticationGetPayload<S['select'][P]>>  :
        P extends 'real_estate_agent' ? RealEstateAgentGetPayload<S['select'][P]> | null :
        P extends 'home_care_company' ? HomeCareCompanyGetPayload<S['select'][P]> | null :
        P extends 'rates' ? Array < BusinessRateGetPayload<S['select'][P]>>  :
        P extends 'reviews' ? Array < BusinessReviewGetPayload<S['select'][P]>>  :
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

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    authentications<T extends BusinessUser$authenticationsArgs= {}>(args?: Subset<T, BusinessUser$authenticationsArgs>): Prisma.PrismaPromise<Array<AuthenticationGetPayload<T>>| Null>;

    real_estate_agent<T extends RealEstateAgentArgs= {}>(args?: Subset<T, RealEstateAgentArgs>): Prisma__RealEstateAgentClient<RealEstateAgentGetPayload<T> | Null>;

    home_care_company<T extends HomeCareCompanyArgs= {}>(args?: Subset<T, HomeCareCompanyArgs>): Prisma__HomeCareCompanyClient<HomeCareCompanyGetPayload<T> | Null>;

    rates<T extends BusinessUser$ratesArgs= {}>(args?: Subset<T, BusinessUser$ratesArgs>): Prisma.PrismaPromise<Array<BusinessRateGetPayload<T>>| Null>;

    reviews<T extends BusinessUser$reviewsArgs= {}>(args?: Subset<T, BusinessUser$reviewsArgs>): Prisma.PrismaPromise<Array<BusinessReviewGetPayload<T>>| Null>;

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
   * BusinessUser.authentications
   */
  export type BusinessUser$authenticationsArgs = {
    /**
     * Select specific fields to fetch from the Authentication
     */
    select?: AuthenticationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticationInclude | null
    where?: AuthenticationWhereInput
    orderBy?: Enumerable<AuthenticationOrderByWithRelationInput>
    cursor?: AuthenticationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AuthenticationScalarFieldEnum>
  }


  /**
   * BusinessUser.rates
   */
  export type BusinessUser$ratesArgs = {
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
   * BusinessUser.reviews
   */
  export type BusinessUser$reviewsArgs = {
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
    real_estate_phone: string | null
    licensed_agent_name: string | null
    specialized_field_id: string | null
  }

  export type RealEstateAgentMaxAggregateOutputType = {
    id: string | null
    is_licensed: boolean | null
    real_estate_num: string | null
    real_estate_name: string | null
    real_estate_phone: string | null
    licensed_agent_name: string | null
    specialized_field_id: string | null
  }

  export type RealEstateAgentCountAggregateOutputType = {
    id: number
    is_licensed: number
    real_estate_num: number
    real_estate_name: number
    real_estate_phone: number
    licensed_agent_name: number
    specialized_field_id: number
    _all: number
  }


  export type RealEstateAgentMinAggregateInputType = {
    id?: true
    is_licensed?: true
    real_estate_num?: true
    real_estate_name?: true
    real_estate_phone?: true
    licensed_agent_name?: true
    specialized_field_id?: true
  }

  export type RealEstateAgentMaxAggregateInputType = {
    id?: true
    is_licensed?: true
    real_estate_num?: true
    real_estate_name?: true
    real_estate_phone?: true
    licensed_agent_name?: true
    specialized_field_id?: true
  }

  export type RealEstateAgentCountAggregateInputType = {
    id?: true
    is_licensed?: true
    real_estate_num?: true
    real_estate_name?: true
    real_estate_phone?: true
    licensed_agent_name?: true
    specialized_field_id?: true
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
    real_estate_phone: string
    licensed_agent_name: string
    specialized_field_id: string
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
    real_estate_phone?: boolean
    licensed_agent_name?: boolean
    specialized_field_id?: boolean
    business?: boolean | BusinessUserArgs
    specialized_field?: boolean | RealEstateSpecializedSubFieldArgs
    properties?: boolean | RealEstateAgent$propertiesArgs
    _count?: boolean | RealEstateAgentCountOutputTypeArgs
  }


  export type RealEstateAgentInclude = {
    business?: boolean | BusinessUserArgs
    specialized_field?: boolean | RealEstateSpecializedSubFieldArgs
    properties?: boolean | RealEstateAgent$propertiesArgs
    _count?: boolean | RealEstateAgentCountOutputTypeArgs
  }

  export type RealEstateAgentGetPayload<S extends boolean | null | undefined | RealEstateAgentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RealEstateAgent :
    S extends undefined ? never :
    S extends { include: any } & (RealEstateAgentArgs | RealEstateAgentFindManyArgs)
    ? RealEstateAgent  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'business' ? BusinessUserGetPayload<S['include'][P]> :
        P extends 'specialized_field' ? RealEstateSpecializedSubFieldGetPayload<S['include'][P]> :
        P extends 'properties' ? Array < RealEstatePropertyGetPayload<S['include'][P]>>  :
        P extends '_count' ? RealEstateAgentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RealEstateAgentArgs | RealEstateAgentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'business' ? BusinessUserGetPayload<S['select'][P]> :
        P extends 'specialized_field' ? RealEstateSpecializedSubFieldGetPayload<S['select'][P]> :
        P extends 'properties' ? Array < RealEstatePropertyGetPayload<S['select'][P]>>  :
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

    business<T extends BusinessUserArgs= {}>(args?: Subset<T, BusinessUserArgs>): Prisma__BusinessUserClient<BusinessUserGetPayload<T> | Null>;

    specialized_field<T extends RealEstateSpecializedSubFieldArgs= {}>(args?: Subset<T, RealEstateSpecializedSubFieldArgs>): Prisma__RealEstateSpecializedSubFieldClient<RealEstateSpecializedSubFieldGetPayload<T> | Null>;

    properties<T extends RealEstateAgent$propertiesArgs= {}>(args?: Subset<T, RealEstateAgent$propertiesArgs>): Prisma.PrismaPromise<Array<RealEstatePropertyGetPayload<T>>| Null>;

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
   * RealEstateAgent.properties
   */
  export type RealEstateAgent$propertiesArgs = {
    /**
     * Select specific fields to fetch from the RealEstateProperty
     */
    select?: RealEstatePropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstatePropertyInclude | null
    where?: RealEstatePropertyWhereInput
    orderBy?: Enumerable<RealEstatePropertyOrderByWithRelationInput>
    cursor?: RealEstatePropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RealEstatePropertyScalarFieldEnum>
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
    specialized_field_id: string | null
  }

  export type HomeCareCompanyMaxAggregateOutputType = {
    id: string | null
    business_registration_num: string | null
    specialized_field_id: string | null
  }

  export type HomeCareCompanyCountAggregateOutputType = {
    id: number
    business_registration_num: number
    specialized_field_id: number
    _all: number
  }


  export type HomeCareCompanyMinAggregateInputType = {
    id?: true
    business_registration_num?: true
    specialized_field_id?: true
  }

  export type HomeCareCompanyMaxAggregateInputType = {
    id?: true
    business_registration_num?: true
    specialized_field_id?: true
  }

  export type HomeCareCompanyCountAggregateInputType = {
    id?: true
    business_registration_num?: true
    specialized_field_id?: true
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
    specialized_field_id: string
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
    specialized_field_id?: boolean
    business?: boolean | BusinessUserArgs
    specialized_field?: boolean | HomeCareSpecializedSubFieldArgs
    introduction_images?: boolean | HomeCareCompany$introduction_imagesArgs
    _count?: boolean | HomeCareCompanyCountOutputTypeArgs
  }


  export type HomeCareCompanyInclude = {
    business?: boolean | BusinessUserArgs
    specialized_field?: boolean | HomeCareSpecializedSubFieldArgs
    introduction_images?: boolean | HomeCareCompany$introduction_imagesArgs
    _count?: boolean | HomeCareCompanyCountOutputTypeArgs
  }

  export type HomeCareCompanyGetPayload<S extends boolean | null | undefined | HomeCareCompanyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HomeCareCompany :
    S extends undefined ? never :
    S extends { include: any } & (HomeCareCompanyArgs | HomeCareCompanyFindManyArgs)
    ? HomeCareCompany  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'business' ? BusinessUserGetPayload<S['include'][P]> :
        P extends 'specialized_field' ? HomeCareSpecializedSubFieldGetPayload<S['include'][P]> :
        P extends 'introduction_images' ? Array < HomeCareIntroductionImageGetPayload<S['include'][P]>>  :
        P extends '_count' ? HomeCareCompanyCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HomeCareCompanyArgs | HomeCareCompanyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'business' ? BusinessUserGetPayload<S['select'][P]> :
        P extends 'specialized_field' ? HomeCareSpecializedSubFieldGetPayload<S['select'][P]> :
        P extends 'introduction_images' ? Array < HomeCareIntroductionImageGetPayload<S['select'][P]>>  :
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

    business<T extends BusinessUserArgs= {}>(args?: Subset<T, BusinessUserArgs>): Prisma__BusinessUserClient<BusinessUserGetPayload<T> | Null>;

    specialized_field<T extends HomeCareSpecializedSubFieldArgs= {}>(args?: Subset<T, HomeCareSpecializedSubFieldArgs>): Prisma__HomeCareSpecializedSubFieldClient<HomeCareSpecializedSubFieldGetPayload<T> | Null>;

    introduction_images<T extends HomeCareCompany$introduction_imagesArgs= {}>(args?: Subset<T, HomeCareCompany$introduction_imagesArgs>): Prisma.PrismaPromise<Array<HomeCareIntroductionImageGetPayload<T>>| Null>;

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
   * HomeCareCompany.introduction_images
   */
  export type HomeCareCompany$introduction_imagesArgs = {
    /**
     * Select specific fields to fetch from the HomeCareIntroductionImage
     */
    select?: HomeCareIntroductionImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareIntroductionImageInclude | null
    where?: HomeCareIntroductionImageWhereInput
    orderBy?: Enumerable<HomeCareIntroductionImageOrderByWithRelationInput>
    cursor?: HomeCareIntroductionImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HomeCareIntroductionImageScalarFieldEnum>
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
   * Model HomeCareIntroductionImage
   */


  export type AggregateHomeCareIntroductionImage = {
    _count: HomeCareIntroductionImageCountAggregateOutputType | null
    _min: HomeCareIntroductionImageMinAggregateOutputType | null
    _max: HomeCareIntroductionImageMaxAggregateOutputType | null
  }

  export type HomeCareIntroductionImageMinAggregateOutputType = {
    id: string | null
    image_url: string | null
    company_id: string | null
  }

  export type HomeCareIntroductionImageMaxAggregateOutputType = {
    id: string | null
    image_url: string | null
    company_id: string | null
  }

  export type HomeCareIntroductionImageCountAggregateOutputType = {
    id: number
    image_url: number
    company_id: number
    _all: number
  }


  export type HomeCareIntroductionImageMinAggregateInputType = {
    id?: true
    image_url?: true
    company_id?: true
  }

  export type HomeCareIntroductionImageMaxAggregateInputType = {
    id?: true
    image_url?: true
    company_id?: true
  }

  export type HomeCareIntroductionImageCountAggregateInputType = {
    id?: true
    image_url?: true
    company_id?: true
    _all?: true
  }

  export type HomeCareIntroductionImageAggregateArgs = {
    /**
     * Filter which HomeCareIntroductionImage to aggregate.
     */
    where?: HomeCareIntroductionImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareIntroductionImages to fetch.
     */
    orderBy?: Enumerable<HomeCareIntroductionImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeCareIntroductionImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareIntroductionImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareIntroductionImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomeCareIntroductionImages
    **/
    _count?: true | HomeCareIntroductionImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeCareIntroductionImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeCareIntroductionImageMaxAggregateInputType
  }

  export type GetHomeCareIntroductionImageAggregateType<T extends HomeCareIntroductionImageAggregateArgs> = {
        [P in keyof T & keyof AggregateHomeCareIntroductionImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomeCareIntroductionImage[P]>
      : GetScalarType<T[P], AggregateHomeCareIntroductionImage[P]>
  }




  export type HomeCareIntroductionImageGroupByArgs = {
    where?: HomeCareIntroductionImageWhereInput
    orderBy?: Enumerable<HomeCareIntroductionImageOrderByWithAggregationInput>
    by: HomeCareIntroductionImageScalarFieldEnum[]
    having?: HomeCareIntroductionImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeCareIntroductionImageCountAggregateInputType | true
    _min?: HomeCareIntroductionImageMinAggregateInputType
    _max?: HomeCareIntroductionImageMaxAggregateInputType
  }


  export type HomeCareIntroductionImageGroupByOutputType = {
    id: string
    image_url: string
    company_id: string
    _count: HomeCareIntroductionImageCountAggregateOutputType | null
    _min: HomeCareIntroductionImageMinAggregateOutputType | null
    _max: HomeCareIntroductionImageMaxAggregateOutputType | null
  }

  type GetHomeCareIntroductionImageGroupByPayload<T extends HomeCareIntroductionImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HomeCareIntroductionImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeCareIntroductionImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeCareIntroductionImageGroupByOutputType[P]>
            : GetScalarType<T[P], HomeCareIntroductionImageGroupByOutputType[P]>
        }
      >
    >


  export type HomeCareIntroductionImageSelect = {
    id?: boolean
    image_url?: boolean
    company_id?: boolean
    company?: boolean | HomeCareCompanyArgs
  }


  export type HomeCareIntroductionImageInclude = {
    company?: boolean | HomeCareCompanyArgs
  }

  export type HomeCareIntroductionImageGetPayload<S extends boolean | null | undefined | HomeCareIntroductionImageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HomeCareIntroductionImage :
    S extends undefined ? never :
    S extends { include: any } & (HomeCareIntroductionImageArgs | HomeCareIntroductionImageFindManyArgs)
    ? HomeCareIntroductionImage  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'company' ? HomeCareCompanyGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HomeCareIntroductionImageArgs | HomeCareIntroductionImageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'company' ? HomeCareCompanyGetPayload<S['select'][P]> :  P extends keyof HomeCareIntroductionImage ? HomeCareIntroductionImage[P] : never
  } 
      : HomeCareIntroductionImage


  type HomeCareIntroductionImageCountArgs = 
    Omit<HomeCareIntroductionImageFindManyArgs, 'select' | 'include'> & {
      select?: HomeCareIntroductionImageCountAggregateInputType | true
    }

  export interface HomeCareIntroductionImageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one HomeCareIntroductionImage that matches the filter.
     * @param {HomeCareIntroductionImageFindUniqueArgs} args - Arguments to find a HomeCareIntroductionImage
     * @example
     * // Get one HomeCareIntroductionImage
     * const homeCareIntroductionImage = await prisma.homeCareIntroductionImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HomeCareIntroductionImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HomeCareIntroductionImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HomeCareIntroductionImage'> extends True ? Prisma__HomeCareIntroductionImageClient<HomeCareIntroductionImageGetPayload<T>> : Prisma__HomeCareIntroductionImageClient<HomeCareIntroductionImageGetPayload<T> | null, null>

    /**
     * Find one HomeCareIntroductionImage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HomeCareIntroductionImageFindUniqueOrThrowArgs} args - Arguments to find a HomeCareIntroductionImage
     * @example
     * // Get one HomeCareIntroductionImage
     * const homeCareIntroductionImage = await prisma.homeCareIntroductionImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HomeCareIntroductionImageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HomeCareIntroductionImageFindUniqueOrThrowArgs>
    ): Prisma__HomeCareIntroductionImageClient<HomeCareIntroductionImageGetPayload<T>>

    /**
     * Find the first HomeCareIntroductionImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareIntroductionImageFindFirstArgs} args - Arguments to find a HomeCareIntroductionImage
     * @example
     * // Get one HomeCareIntroductionImage
     * const homeCareIntroductionImage = await prisma.homeCareIntroductionImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HomeCareIntroductionImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HomeCareIntroductionImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HomeCareIntroductionImage'> extends True ? Prisma__HomeCareIntroductionImageClient<HomeCareIntroductionImageGetPayload<T>> : Prisma__HomeCareIntroductionImageClient<HomeCareIntroductionImageGetPayload<T> | null, null>

    /**
     * Find the first HomeCareIntroductionImage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareIntroductionImageFindFirstOrThrowArgs} args - Arguments to find a HomeCareIntroductionImage
     * @example
     * // Get one HomeCareIntroductionImage
     * const homeCareIntroductionImage = await prisma.homeCareIntroductionImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HomeCareIntroductionImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HomeCareIntroductionImageFindFirstOrThrowArgs>
    ): Prisma__HomeCareIntroductionImageClient<HomeCareIntroductionImageGetPayload<T>>

    /**
     * Find zero or more HomeCareIntroductionImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareIntroductionImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomeCareIntroductionImages
     * const homeCareIntroductionImages = await prisma.homeCareIntroductionImage.findMany()
     * 
     * // Get first 10 HomeCareIntroductionImages
     * const homeCareIntroductionImages = await prisma.homeCareIntroductionImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeCareIntroductionImageWithIdOnly = await prisma.homeCareIntroductionImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HomeCareIntroductionImageFindManyArgs>(
      args?: SelectSubset<T, HomeCareIntroductionImageFindManyArgs>
    ): Prisma.PrismaPromise<Array<HomeCareIntroductionImageGetPayload<T>>>

    /**
     * Create a HomeCareIntroductionImage.
     * @param {HomeCareIntroductionImageCreateArgs} args - Arguments to create a HomeCareIntroductionImage.
     * @example
     * // Create one HomeCareIntroductionImage
     * const HomeCareIntroductionImage = await prisma.homeCareIntroductionImage.create({
     *   data: {
     *     // ... data to create a HomeCareIntroductionImage
     *   }
     * })
     * 
    **/
    create<T extends HomeCareIntroductionImageCreateArgs>(
      args: SelectSubset<T, HomeCareIntroductionImageCreateArgs>
    ): Prisma__HomeCareIntroductionImageClient<HomeCareIntroductionImageGetPayload<T>>

    /**
     * Create many HomeCareIntroductionImages.
     *     @param {HomeCareIntroductionImageCreateManyArgs} args - Arguments to create many HomeCareIntroductionImages.
     *     @example
     *     // Create many HomeCareIntroductionImages
     *     const homeCareIntroductionImage = await prisma.homeCareIntroductionImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HomeCareIntroductionImageCreateManyArgs>(
      args?: SelectSubset<T, HomeCareIntroductionImageCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HomeCareIntroductionImage.
     * @param {HomeCareIntroductionImageDeleteArgs} args - Arguments to delete one HomeCareIntroductionImage.
     * @example
     * // Delete one HomeCareIntroductionImage
     * const HomeCareIntroductionImage = await prisma.homeCareIntroductionImage.delete({
     *   where: {
     *     // ... filter to delete one HomeCareIntroductionImage
     *   }
     * })
     * 
    **/
    delete<T extends HomeCareIntroductionImageDeleteArgs>(
      args: SelectSubset<T, HomeCareIntroductionImageDeleteArgs>
    ): Prisma__HomeCareIntroductionImageClient<HomeCareIntroductionImageGetPayload<T>>

    /**
     * Update one HomeCareIntroductionImage.
     * @param {HomeCareIntroductionImageUpdateArgs} args - Arguments to update one HomeCareIntroductionImage.
     * @example
     * // Update one HomeCareIntroductionImage
     * const homeCareIntroductionImage = await prisma.homeCareIntroductionImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HomeCareIntroductionImageUpdateArgs>(
      args: SelectSubset<T, HomeCareIntroductionImageUpdateArgs>
    ): Prisma__HomeCareIntroductionImageClient<HomeCareIntroductionImageGetPayload<T>>

    /**
     * Delete zero or more HomeCareIntroductionImages.
     * @param {HomeCareIntroductionImageDeleteManyArgs} args - Arguments to filter HomeCareIntroductionImages to delete.
     * @example
     * // Delete a few HomeCareIntroductionImages
     * const { count } = await prisma.homeCareIntroductionImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HomeCareIntroductionImageDeleteManyArgs>(
      args?: SelectSubset<T, HomeCareIntroductionImageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeCareIntroductionImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareIntroductionImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomeCareIntroductionImages
     * const homeCareIntroductionImage = await prisma.homeCareIntroductionImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HomeCareIntroductionImageUpdateManyArgs>(
      args: SelectSubset<T, HomeCareIntroductionImageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HomeCareIntroductionImage.
     * @param {HomeCareIntroductionImageUpsertArgs} args - Arguments to update or create a HomeCareIntroductionImage.
     * @example
     * // Update or create a HomeCareIntroductionImage
     * const homeCareIntroductionImage = await prisma.homeCareIntroductionImage.upsert({
     *   create: {
     *     // ... data to create a HomeCareIntroductionImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomeCareIntroductionImage we want to update
     *   }
     * })
    **/
    upsert<T extends HomeCareIntroductionImageUpsertArgs>(
      args: SelectSubset<T, HomeCareIntroductionImageUpsertArgs>
    ): Prisma__HomeCareIntroductionImageClient<HomeCareIntroductionImageGetPayload<T>>

    /**
     * Count the number of HomeCareIntroductionImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareIntroductionImageCountArgs} args - Arguments to filter HomeCareIntroductionImages to count.
     * @example
     * // Count the number of HomeCareIntroductionImages
     * const count = await prisma.homeCareIntroductionImage.count({
     *   where: {
     *     // ... the filter for the HomeCareIntroductionImages we want to count
     *   }
     * })
    **/
    count<T extends HomeCareIntroductionImageCountArgs>(
      args?: Subset<T, HomeCareIntroductionImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeCareIntroductionImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomeCareIntroductionImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareIntroductionImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HomeCareIntroductionImageAggregateArgs>(args: Subset<T, HomeCareIntroductionImageAggregateArgs>): Prisma.PrismaPromise<GetHomeCareIntroductionImageAggregateType<T>>

    /**
     * Group by HomeCareIntroductionImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareIntroductionImageGroupByArgs} args - Group by arguments.
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
      T extends HomeCareIntroductionImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeCareIntroductionImageGroupByArgs['orderBy'] }
        : { orderBy?: HomeCareIntroductionImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HomeCareIntroductionImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeCareIntroductionImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HomeCareIntroductionImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HomeCareIntroductionImageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * HomeCareIntroductionImage base type for findUnique actions
   */
  export type HomeCareIntroductionImageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HomeCareIntroductionImage
     */
    select?: HomeCareIntroductionImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareIntroductionImageInclude | null
    /**
     * Filter, which HomeCareIntroductionImage to fetch.
     */
    where: HomeCareIntroductionImageWhereUniqueInput
  }

  /**
   * HomeCareIntroductionImage findUnique
   */
  export interface HomeCareIntroductionImageFindUniqueArgs extends HomeCareIntroductionImageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HomeCareIntroductionImage findUniqueOrThrow
   */
  export type HomeCareIntroductionImageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HomeCareIntroductionImage
     */
    select?: HomeCareIntroductionImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareIntroductionImageInclude | null
    /**
     * Filter, which HomeCareIntroductionImage to fetch.
     */
    where: HomeCareIntroductionImageWhereUniqueInput
  }


  /**
   * HomeCareIntroductionImage base type for findFirst actions
   */
  export type HomeCareIntroductionImageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HomeCareIntroductionImage
     */
    select?: HomeCareIntroductionImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareIntroductionImageInclude | null
    /**
     * Filter, which HomeCareIntroductionImage to fetch.
     */
    where?: HomeCareIntroductionImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareIntroductionImages to fetch.
     */
    orderBy?: Enumerable<HomeCareIntroductionImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeCareIntroductionImages.
     */
    cursor?: HomeCareIntroductionImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareIntroductionImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareIntroductionImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeCareIntroductionImages.
     */
    distinct?: Enumerable<HomeCareIntroductionImageScalarFieldEnum>
  }

  /**
   * HomeCareIntroductionImage findFirst
   */
  export interface HomeCareIntroductionImageFindFirstArgs extends HomeCareIntroductionImageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HomeCareIntroductionImage findFirstOrThrow
   */
  export type HomeCareIntroductionImageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HomeCareIntroductionImage
     */
    select?: HomeCareIntroductionImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareIntroductionImageInclude | null
    /**
     * Filter, which HomeCareIntroductionImage to fetch.
     */
    where?: HomeCareIntroductionImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareIntroductionImages to fetch.
     */
    orderBy?: Enumerable<HomeCareIntroductionImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeCareIntroductionImages.
     */
    cursor?: HomeCareIntroductionImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareIntroductionImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareIntroductionImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeCareIntroductionImages.
     */
    distinct?: Enumerable<HomeCareIntroductionImageScalarFieldEnum>
  }


  /**
   * HomeCareIntroductionImage findMany
   */
  export type HomeCareIntroductionImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the HomeCareIntroductionImage
     */
    select?: HomeCareIntroductionImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareIntroductionImageInclude | null
    /**
     * Filter, which HomeCareIntroductionImages to fetch.
     */
    where?: HomeCareIntroductionImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareIntroductionImages to fetch.
     */
    orderBy?: Enumerable<HomeCareIntroductionImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomeCareIntroductionImages.
     */
    cursor?: HomeCareIntroductionImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareIntroductionImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareIntroductionImages.
     */
    skip?: number
    distinct?: Enumerable<HomeCareIntroductionImageScalarFieldEnum>
  }


  /**
   * HomeCareIntroductionImage create
   */
  export type HomeCareIntroductionImageCreateArgs = {
    /**
     * Select specific fields to fetch from the HomeCareIntroductionImage
     */
    select?: HomeCareIntroductionImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareIntroductionImageInclude | null
    /**
     * The data needed to create a HomeCareIntroductionImage.
     */
    data: XOR<HomeCareIntroductionImageCreateInput, HomeCareIntroductionImageUncheckedCreateInput>
  }


  /**
   * HomeCareIntroductionImage createMany
   */
  export type HomeCareIntroductionImageCreateManyArgs = {
    /**
     * The data used to create many HomeCareIntroductionImages.
     */
    data: Enumerable<HomeCareIntroductionImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HomeCareIntroductionImage update
   */
  export type HomeCareIntroductionImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the HomeCareIntroductionImage
     */
    select?: HomeCareIntroductionImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareIntroductionImageInclude | null
    /**
     * The data needed to update a HomeCareIntroductionImage.
     */
    data: XOR<HomeCareIntroductionImageUpdateInput, HomeCareIntroductionImageUncheckedUpdateInput>
    /**
     * Choose, which HomeCareIntroductionImage to update.
     */
    where: HomeCareIntroductionImageWhereUniqueInput
  }


  /**
   * HomeCareIntroductionImage updateMany
   */
  export type HomeCareIntroductionImageUpdateManyArgs = {
    /**
     * The data used to update HomeCareIntroductionImages.
     */
    data: XOR<HomeCareIntroductionImageUpdateManyMutationInput, HomeCareIntroductionImageUncheckedUpdateManyInput>
    /**
     * Filter which HomeCareIntroductionImages to update
     */
    where?: HomeCareIntroductionImageWhereInput
  }


  /**
   * HomeCareIntroductionImage upsert
   */
  export type HomeCareIntroductionImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the HomeCareIntroductionImage
     */
    select?: HomeCareIntroductionImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareIntroductionImageInclude | null
    /**
     * The filter to search for the HomeCareIntroductionImage to update in case it exists.
     */
    where: HomeCareIntroductionImageWhereUniqueInput
    /**
     * In case the HomeCareIntroductionImage found by the `where` argument doesn't exist, create a new HomeCareIntroductionImage with this data.
     */
    create: XOR<HomeCareIntroductionImageCreateInput, HomeCareIntroductionImageUncheckedCreateInput>
    /**
     * In case the HomeCareIntroductionImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeCareIntroductionImageUpdateInput, HomeCareIntroductionImageUncheckedUpdateInput>
  }


  /**
   * HomeCareIntroductionImage delete
   */
  export type HomeCareIntroductionImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the HomeCareIntroductionImage
     */
    select?: HomeCareIntroductionImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareIntroductionImageInclude | null
    /**
     * Filter which HomeCareIntroductionImage to delete.
     */
    where: HomeCareIntroductionImageWhereUniqueInput
  }


  /**
   * HomeCareIntroductionImage deleteMany
   */
  export type HomeCareIntroductionImageDeleteManyArgs = {
    /**
     * Filter which HomeCareIntroductionImages to delete
     */
    where?: HomeCareIntroductionImageWhereInput
  }


  /**
   * HomeCareIntroductionImage without action
   */
  export type HomeCareIntroductionImageArgs = {
    /**
     * Select specific fields to fetch from the HomeCareIntroductionImage
     */
    select?: HomeCareIntroductionImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareIntroductionImageInclude | null
  }



  /**
   * Model RealEstateProperty
   */


  export type AggregateRealEstateProperty = {
    _count: RealEstatePropertyCountAggregateOutputType | null
    _min: RealEstatePropertyMinAggregateOutputType | null
    _max: RealEstatePropertyMaxAggregateOutputType | null
  }

  export type RealEstatePropertyMinAggregateOutputType = {
    id: string | null
    name: string | null
    main_image_url: string | null
    agent_id: string | null
  }

  export type RealEstatePropertyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    main_image_url: string | null
    agent_id: string | null
  }

  export type RealEstatePropertyCountAggregateOutputType = {
    id: number
    name: number
    main_image_url: number
    agent_id: number
    _all: number
  }


  export type RealEstatePropertyMinAggregateInputType = {
    id?: true
    name?: true
    main_image_url?: true
    agent_id?: true
  }

  export type RealEstatePropertyMaxAggregateInputType = {
    id?: true
    name?: true
    main_image_url?: true
    agent_id?: true
  }

  export type RealEstatePropertyCountAggregateInputType = {
    id?: true
    name?: true
    main_image_url?: true
    agent_id?: true
    _all?: true
  }

  export type RealEstatePropertyAggregateArgs = {
    /**
     * Filter which RealEstateProperty to aggregate.
     */
    where?: RealEstatePropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateProperties to fetch.
     */
    orderBy?: Enumerable<RealEstatePropertyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RealEstatePropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RealEstateProperties
    **/
    _count?: true | RealEstatePropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealEstatePropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealEstatePropertyMaxAggregateInputType
  }

  export type GetRealEstatePropertyAggregateType<T extends RealEstatePropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateRealEstateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealEstateProperty[P]>
      : GetScalarType<T[P], AggregateRealEstateProperty[P]>
  }




  export type RealEstatePropertyGroupByArgs = {
    where?: RealEstatePropertyWhereInput
    orderBy?: Enumerable<RealEstatePropertyOrderByWithAggregationInput>
    by: RealEstatePropertyScalarFieldEnum[]
    having?: RealEstatePropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealEstatePropertyCountAggregateInputType | true
    _min?: RealEstatePropertyMinAggregateInputType
    _max?: RealEstatePropertyMaxAggregateInputType
  }


  export type RealEstatePropertyGroupByOutputType = {
    id: string
    name: string
    main_image_url: string
    agent_id: string
    _count: RealEstatePropertyCountAggregateOutputType | null
    _min: RealEstatePropertyMinAggregateOutputType | null
    _max: RealEstatePropertyMaxAggregateOutputType | null
  }

  type GetRealEstatePropertyGroupByPayload<T extends RealEstatePropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RealEstatePropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealEstatePropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealEstatePropertyGroupByOutputType[P]>
            : GetScalarType<T[P], RealEstatePropertyGroupByOutputType[P]>
        }
      >
    >


  export type RealEstatePropertySelect = {
    id?: boolean
    name?: boolean
    main_image_url?: boolean
    agent_id?: boolean
    agent?: boolean | RealEstateAgentArgs
  }


  export type RealEstatePropertyInclude = {
    agent?: boolean | RealEstateAgentArgs
  }

  export type RealEstatePropertyGetPayload<S extends boolean | null | undefined | RealEstatePropertyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RealEstateProperty :
    S extends undefined ? never :
    S extends { include: any } & (RealEstatePropertyArgs | RealEstatePropertyFindManyArgs)
    ? RealEstateProperty  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'agent' ? RealEstateAgentGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RealEstatePropertyArgs | RealEstatePropertyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'agent' ? RealEstateAgentGetPayload<S['select'][P]> :  P extends keyof RealEstateProperty ? RealEstateProperty[P] : never
  } 
      : RealEstateProperty


  type RealEstatePropertyCountArgs = 
    Omit<RealEstatePropertyFindManyArgs, 'select' | 'include'> & {
      select?: RealEstatePropertyCountAggregateInputType | true
    }

  export interface RealEstatePropertyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RealEstateProperty that matches the filter.
     * @param {RealEstatePropertyFindUniqueArgs} args - Arguments to find a RealEstateProperty
     * @example
     * // Get one RealEstateProperty
     * const realEstateProperty = await prisma.realEstateProperty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RealEstatePropertyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RealEstatePropertyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RealEstateProperty'> extends True ? Prisma__RealEstatePropertyClient<RealEstatePropertyGetPayload<T>> : Prisma__RealEstatePropertyClient<RealEstatePropertyGetPayload<T> | null, null>

    /**
     * Find one RealEstateProperty that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RealEstatePropertyFindUniqueOrThrowArgs} args - Arguments to find a RealEstateProperty
     * @example
     * // Get one RealEstateProperty
     * const realEstateProperty = await prisma.realEstateProperty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RealEstatePropertyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RealEstatePropertyFindUniqueOrThrowArgs>
    ): Prisma__RealEstatePropertyClient<RealEstatePropertyGetPayload<T>>

    /**
     * Find the first RealEstateProperty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstatePropertyFindFirstArgs} args - Arguments to find a RealEstateProperty
     * @example
     * // Get one RealEstateProperty
     * const realEstateProperty = await prisma.realEstateProperty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RealEstatePropertyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RealEstatePropertyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RealEstateProperty'> extends True ? Prisma__RealEstatePropertyClient<RealEstatePropertyGetPayload<T>> : Prisma__RealEstatePropertyClient<RealEstatePropertyGetPayload<T> | null, null>

    /**
     * Find the first RealEstateProperty that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstatePropertyFindFirstOrThrowArgs} args - Arguments to find a RealEstateProperty
     * @example
     * // Get one RealEstateProperty
     * const realEstateProperty = await prisma.realEstateProperty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RealEstatePropertyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RealEstatePropertyFindFirstOrThrowArgs>
    ): Prisma__RealEstatePropertyClient<RealEstatePropertyGetPayload<T>>

    /**
     * Find zero or more RealEstateProperties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstatePropertyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RealEstateProperties
     * const realEstateProperties = await prisma.realEstateProperty.findMany()
     * 
     * // Get first 10 RealEstateProperties
     * const realEstateProperties = await prisma.realEstateProperty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const realEstatePropertyWithIdOnly = await prisma.realEstateProperty.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RealEstatePropertyFindManyArgs>(
      args?: SelectSubset<T, RealEstatePropertyFindManyArgs>
    ): Prisma.PrismaPromise<Array<RealEstatePropertyGetPayload<T>>>

    /**
     * Create a RealEstateProperty.
     * @param {RealEstatePropertyCreateArgs} args - Arguments to create a RealEstateProperty.
     * @example
     * // Create one RealEstateProperty
     * const RealEstateProperty = await prisma.realEstateProperty.create({
     *   data: {
     *     // ... data to create a RealEstateProperty
     *   }
     * })
     * 
    **/
    create<T extends RealEstatePropertyCreateArgs>(
      args: SelectSubset<T, RealEstatePropertyCreateArgs>
    ): Prisma__RealEstatePropertyClient<RealEstatePropertyGetPayload<T>>

    /**
     * Create many RealEstateProperties.
     *     @param {RealEstatePropertyCreateManyArgs} args - Arguments to create many RealEstateProperties.
     *     @example
     *     // Create many RealEstateProperties
     *     const realEstateProperty = await prisma.realEstateProperty.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RealEstatePropertyCreateManyArgs>(
      args?: SelectSubset<T, RealEstatePropertyCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RealEstateProperty.
     * @param {RealEstatePropertyDeleteArgs} args - Arguments to delete one RealEstateProperty.
     * @example
     * // Delete one RealEstateProperty
     * const RealEstateProperty = await prisma.realEstateProperty.delete({
     *   where: {
     *     // ... filter to delete one RealEstateProperty
     *   }
     * })
     * 
    **/
    delete<T extends RealEstatePropertyDeleteArgs>(
      args: SelectSubset<T, RealEstatePropertyDeleteArgs>
    ): Prisma__RealEstatePropertyClient<RealEstatePropertyGetPayload<T>>

    /**
     * Update one RealEstateProperty.
     * @param {RealEstatePropertyUpdateArgs} args - Arguments to update one RealEstateProperty.
     * @example
     * // Update one RealEstateProperty
     * const realEstateProperty = await prisma.realEstateProperty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RealEstatePropertyUpdateArgs>(
      args: SelectSubset<T, RealEstatePropertyUpdateArgs>
    ): Prisma__RealEstatePropertyClient<RealEstatePropertyGetPayload<T>>

    /**
     * Delete zero or more RealEstateProperties.
     * @param {RealEstatePropertyDeleteManyArgs} args - Arguments to filter RealEstateProperties to delete.
     * @example
     * // Delete a few RealEstateProperties
     * const { count } = await prisma.realEstateProperty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RealEstatePropertyDeleteManyArgs>(
      args?: SelectSubset<T, RealEstatePropertyDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RealEstateProperties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstatePropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RealEstateProperties
     * const realEstateProperty = await prisma.realEstateProperty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RealEstatePropertyUpdateManyArgs>(
      args: SelectSubset<T, RealEstatePropertyUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RealEstateProperty.
     * @param {RealEstatePropertyUpsertArgs} args - Arguments to update or create a RealEstateProperty.
     * @example
     * // Update or create a RealEstateProperty
     * const realEstateProperty = await prisma.realEstateProperty.upsert({
     *   create: {
     *     // ... data to create a RealEstateProperty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RealEstateProperty we want to update
     *   }
     * })
    **/
    upsert<T extends RealEstatePropertyUpsertArgs>(
      args: SelectSubset<T, RealEstatePropertyUpsertArgs>
    ): Prisma__RealEstatePropertyClient<RealEstatePropertyGetPayload<T>>

    /**
     * Count the number of RealEstateProperties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstatePropertyCountArgs} args - Arguments to filter RealEstateProperties to count.
     * @example
     * // Count the number of RealEstateProperties
     * const count = await prisma.realEstateProperty.count({
     *   where: {
     *     // ... the filter for the RealEstateProperties we want to count
     *   }
     * })
    **/
    count<T extends RealEstatePropertyCountArgs>(
      args?: Subset<T, RealEstatePropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealEstatePropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RealEstateProperty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstatePropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RealEstatePropertyAggregateArgs>(args: Subset<T, RealEstatePropertyAggregateArgs>): Prisma.PrismaPromise<GetRealEstatePropertyAggregateType<T>>

    /**
     * Group by RealEstateProperty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstatePropertyGroupByArgs} args - Group by arguments.
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
      T extends RealEstatePropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealEstatePropertyGroupByArgs['orderBy'] }
        : { orderBy?: RealEstatePropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RealEstatePropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealEstatePropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RealEstateProperty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RealEstatePropertyClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * RealEstateProperty base type for findUnique actions
   */
  export type RealEstatePropertyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RealEstateProperty
     */
    select?: RealEstatePropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstatePropertyInclude | null
    /**
     * Filter, which RealEstateProperty to fetch.
     */
    where: RealEstatePropertyWhereUniqueInput
  }

  /**
   * RealEstateProperty findUnique
   */
  export interface RealEstatePropertyFindUniqueArgs extends RealEstatePropertyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealEstateProperty findUniqueOrThrow
   */
  export type RealEstatePropertyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealEstateProperty
     */
    select?: RealEstatePropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstatePropertyInclude | null
    /**
     * Filter, which RealEstateProperty to fetch.
     */
    where: RealEstatePropertyWhereUniqueInput
  }


  /**
   * RealEstateProperty base type for findFirst actions
   */
  export type RealEstatePropertyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RealEstateProperty
     */
    select?: RealEstatePropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstatePropertyInclude | null
    /**
     * Filter, which RealEstateProperty to fetch.
     */
    where?: RealEstatePropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateProperties to fetch.
     */
    orderBy?: Enumerable<RealEstatePropertyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstateProperties.
     */
    cursor?: RealEstatePropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstateProperties.
     */
    distinct?: Enumerable<RealEstatePropertyScalarFieldEnum>
  }

  /**
   * RealEstateProperty findFirst
   */
  export interface RealEstatePropertyFindFirstArgs extends RealEstatePropertyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealEstateProperty findFirstOrThrow
   */
  export type RealEstatePropertyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealEstateProperty
     */
    select?: RealEstatePropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstatePropertyInclude | null
    /**
     * Filter, which RealEstateProperty to fetch.
     */
    where?: RealEstatePropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateProperties to fetch.
     */
    orderBy?: Enumerable<RealEstatePropertyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstateProperties.
     */
    cursor?: RealEstatePropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstateProperties.
     */
    distinct?: Enumerable<RealEstatePropertyScalarFieldEnum>
  }


  /**
   * RealEstateProperty findMany
   */
  export type RealEstatePropertyFindManyArgs = {
    /**
     * Select specific fields to fetch from the RealEstateProperty
     */
    select?: RealEstatePropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstatePropertyInclude | null
    /**
     * Filter, which RealEstateProperties to fetch.
     */
    where?: RealEstatePropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateProperties to fetch.
     */
    orderBy?: Enumerable<RealEstatePropertyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RealEstateProperties.
     */
    cursor?: RealEstatePropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateProperties.
     */
    skip?: number
    distinct?: Enumerable<RealEstatePropertyScalarFieldEnum>
  }


  /**
   * RealEstateProperty create
   */
  export type RealEstatePropertyCreateArgs = {
    /**
     * Select specific fields to fetch from the RealEstateProperty
     */
    select?: RealEstatePropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstatePropertyInclude | null
    /**
     * The data needed to create a RealEstateProperty.
     */
    data: XOR<RealEstatePropertyCreateInput, RealEstatePropertyUncheckedCreateInput>
  }


  /**
   * RealEstateProperty createMany
   */
  export type RealEstatePropertyCreateManyArgs = {
    /**
     * The data used to create many RealEstateProperties.
     */
    data: Enumerable<RealEstatePropertyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RealEstateProperty update
   */
  export type RealEstatePropertyUpdateArgs = {
    /**
     * Select specific fields to fetch from the RealEstateProperty
     */
    select?: RealEstatePropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstatePropertyInclude | null
    /**
     * The data needed to update a RealEstateProperty.
     */
    data: XOR<RealEstatePropertyUpdateInput, RealEstatePropertyUncheckedUpdateInput>
    /**
     * Choose, which RealEstateProperty to update.
     */
    where: RealEstatePropertyWhereUniqueInput
  }


  /**
   * RealEstateProperty updateMany
   */
  export type RealEstatePropertyUpdateManyArgs = {
    /**
     * The data used to update RealEstateProperties.
     */
    data: XOR<RealEstatePropertyUpdateManyMutationInput, RealEstatePropertyUncheckedUpdateManyInput>
    /**
     * Filter which RealEstateProperties to update
     */
    where?: RealEstatePropertyWhereInput
  }


  /**
   * RealEstateProperty upsert
   */
  export type RealEstatePropertyUpsertArgs = {
    /**
     * Select specific fields to fetch from the RealEstateProperty
     */
    select?: RealEstatePropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstatePropertyInclude | null
    /**
     * The filter to search for the RealEstateProperty to update in case it exists.
     */
    where: RealEstatePropertyWhereUniqueInput
    /**
     * In case the RealEstateProperty found by the `where` argument doesn't exist, create a new RealEstateProperty with this data.
     */
    create: XOR<RealEstatePropertyCreateInput, RealEstatePropertyUncheckedCreateInput>
    /**
     * In case the RealEstateProperty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RealEstatePropertyUpdateInput, RealEstatePropertyUncheckedUpdateInput>
  }


  /**
   * RealEstateProperty delete
   */
  export type RealEstatePropertyDeleteArgs = {
    /**
     * Select specific fields to fetch from the RealEstateProperty
     */
    select?: RealEstatePropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstatePropertyInclude | null
    /**
     * Filter which RealEstateProperty to delete.
     */
    where: RealEstatePropertyWhereUniqueInput
  }


  /**
   * RealEstateProperty deleteMany
   */
  export type RealEstatePropertyDeleteManyArgs = {
    /**
     * Filter which RealEstateProperties to delete
     */
    where?: RealEstatePropertyWhereInput
  }


  /**
   * RealEstateProperty without action
   */
  export type RealEstatePropertyArgs = {
    /**
     * Select specific fields to fetch from the RealEstateProperty
     */
    select?: RealEstatePropertySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstatePropertyInclude | null
  }



  /**
   * Model HomeCareSpecializedSuperField
   */


  export type AggregateHomeCareSpecializedSuperField = {
    _count: HomeCareSpecializedSuperFieldCountAggregateOutputType | null
    _min: HomeCareSpecializedSuperFieldMinAggregateOutputType | null
    _max: HomeCareSpecializedSuperFieldMaxAggregateOutputType | null
  }

  export type HomeCareSpecializedSuperFieldMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type HomeCareSpecializedSuperFieldMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type HomeCareSpecializedSuperFieldCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type HomeCareSpecializedSuperFieldMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type HomeCareSpecializedSuperFieldMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type HomeCareSpecializedSuperFieldCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type HomeCareSpecializedSuperFieldAggregateArgs = {
    /**
     * Filter which HomeCareSpecializedSuperField to aggregate.
     */
    where?: HomeCareSpecializedSuperFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSpecializedSuperFields to fetch.
     */
    orderBy?: Enumerable<HomeCareSpecializedSuperFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeCareSpecializedSuperFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSpecializedSuperFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSpecializedSuperFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomeCareSpecializedSuperFields
    **/
    _count?: true | HomeCareSpecializedSuperFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeCareSpecializedSuperFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeCareSpecializedSuperFieldMaxAggregateInputType
  }

  export type GetHomeCareSpecializedSuperFieldAggregateType<T extends HomeCareSpecializedSuperFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateHomeCareSpecializedSuperField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomeCareSpecializedSuperField[P]>
      : GetScalarType<T[P], AggregateHomeCareSpecializedSuperField[P]>
  }




  export type HomeCareSpecializedSuperFieldGroupByArgs = {
    where?: HomeCareSpecializedSuperFieldWhereInput
    orderBy?: Enumerable<HomeCareSpecializedSuperFieldOrderByWithAggregationInput>
    by: HomeCareSpecializedSuperFieldScalarFieldEnum[]
    having?: HomeCareSpecializedSuperFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeCareSpecializedSuperFieldCountAggregateInputType | true
    _min?: HomeCareSpecializedSuperFieldMinAggregateInputType
    _max?: HomeCareSpecializedSuperFieldMaxAggregateInputType
  }


  export type HomeCareSpecializedSuperFieldGroupByOutputType = {
    id: string
    name: string
    _count: HomeCareSpecializedSuperFieldCountAggregateOutputType | null
    _min: HomeCareSpecializedSuperFieldMinAggregateOutputType | null
    _max: HomeCareSpecializedSuperFieldMaxAggregateOutputType | null
  }

  type GetHomeCareSpecializedSuperFieldGroupByPayload<T extends HomeCareSpecializedSuperFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HomeCareSpecializedSuperFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeCareSpecializedSuperFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeCareSpecializedSuperFieldGroupByOutputType[P]>
            : GetScalarType<T[P], HomeCareSpecializedSuperFieldGroupByOutputType[P]>
        }
      >
    >


  export type HomeCareSpecializedSuperFieldSelect = {
    id?: boolean
    name?: boolean
    sub?: boolean | HomeCareSpecializedSuperField$subArgs
    _count?: boolean | HomeCareSpecializedSuperFieldCountOutputTypeArgs
  }


  export type HomeCareSpecializedSuperFieldInclude = {
    sub?: boolean | HomeCareSpecializedSuperField$subArgs
    _count?: boolean | HomeCareSpecializedSuperFieldCountOutputTypeArgs
  }

  export type HomeCareSpecializedSuperFieldGetPayload<S extends boolean | null | undefined | HomeCareSpecializedSuperFieldArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HomeCareSpecializedSuperField :
    S extends undefined ? never :
    S extends { include: any } & (HomeCareSpecializedSuperFieldArgs | HomeCareSpecializedSuperFieldFindManyArgs)
    ? HomeCareSpecializedSuperField  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'sub' ? Array < HomeCareSpecializedSubFieldGetPayload<S['include'][P]>>  :
        P extends '_count' ? HomeCareSpecializedSuperFieldCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HomeCareSpecializedSuperFieldArgs | HomeCareSpecializedSuperFieldFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'sub' ? Array < HomeCareSpecializedSubFieldGetPayload<S['select'][P]>>  :
        P extends '_count' ? HomeCareSpecializedSuperFieldCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof HomeCareSpecializedSuperField ? HomeCareSpecializedSuperField[P] : never
  } 
      : HomeCareSpecializedSuperField


  type HomeCareSpecializedSuperFieldCountArgs = 
    Omit<HomeCareSpecializedSuperFieldFindManyArgs, 'select' | 'include'> & {
      select?: HomeCareSpecializedSuperFieldCountAggregateInputType | true
    }

  export interface HomeCareSpecializedSuperFieldDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one HomeCareSpecializedSuperField that matches the filter.
     * @param {HomeCareSpecializedSuperFieldFindUniqueArgs} args - Arguments to find a HomeCareSpecializedSuperField
     * @example
     * // Get one HomeCareSpecializedSuperField
     * const homeCareSpecializedSuperField = await prisma.homeCareSpecializedSuperField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HomeCareSpecializedSuperFieldFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HomeCareSpecializedSuperFieldFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HomeCareSpecializedSuperField'> extends True ? Prisma__HomeCareSpecializedSuperFieldClient<HomeCareSpecializedSuperFieldGetPayload<T>> : Prisma__HomeCareSpecializedSuperFieldClient<HomeCareSpecializedSuperFieldGetPayload<T> | null, null>

    /**
     * Find one HomeCareSpecializedSuperField that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HomeCareSpecializedSuperFieldFindUniqueOrThrowArgs} args - Arguments to find a HomeCareSpecializedSuperField
     * @example
     * // Get one HomeCareSpecializedSuperField
     * const homeCareSpecializedSuperField = await prisma.homeCareSpecializedSuperField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HomeCareSpecializedSuperFieldFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HomeCareSpecializedSuperFieldFindUniqueOrThrowArgs>
    ): Prisma__HomeCareSpecializedSuperFieldClient<HomeCareSpecializedSuperFieldGetPayload<T>>

    /**
     * Find the first HomeCareSpecializedSuperField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedSuperFieldFindFirstArgs} args - Arguments to find a HomeCareSpecializedSuperField
     * @example
     * // Get one HomeCareSpecializedSuperField
     * const homeCareSpecializedSuperField = await prisma.homeCareSpecializedSuperField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HomeCareSpecializedSuperFieldFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HomeCareSpecializedSuperFieldFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HomeCareSpecializedSuperField'> extends True ? Prisma__HomeCareSpecializedSuperFieldClient<HomeCareSpecializedSuperFieldGetPayload<T>> : Prisma__HomeCareSpecializedSuperFieldClient<HomeCareSpecializedSuperFieldGetPayload<T> | null, null>

    /**
     * Find the first HomeCareSpecializedSuperField that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedSuperFieldFindFirstOrThrowArgs} args - Arguments to find a HomeCareSpecializedSuperField
     * @example
     * // Get one HomeCareSpecializedSuperField
     * const homeCareSpecializedSuperField = await prisma.homeCareSpecializedSuperField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HomeCareSpecializedSuperFieldFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HomeCareSpecializedSuperFieldFindFirstOrThrowArgs>
    ): Prisma__HomeCareSpecializedSuperFieldClient<HomeCareSpecializedSuperFieldGetPayload<T>>

    /**
     * Find zero or more HomeCareSpecializedSuperFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedSuperFieldFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomeCareSpecializedSuperFields
     * const homeCareSpecializedSuperFields = await prisma.homeCareSpecializedSuperField.findMany()
     * 
     * // Get first 10 HomeCareSpecializedSuperFields
     * const homeCareSpecializedSuperFields = await prisma.homeCareSpecializedSuperField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeCareSpecializedSuperFieldWithIdOnly = await prisma.homeCareSpecializedSuperField.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HomeCareSpecializedSuperFieldFindManyArgs>(
      args?: SelectSubset<T, HomeCareSpecializedSuperFieldFindManyArgs>
    ): Prisma.PrismaPromise<Array<HomeCareSpecializedSuperFieldGetPayload<T>>>

    /**
     * Create a HomeCareSpecializedSuperField.
     * @param {HomeCareSpecializedSuperFieldCreateArgs} args - Arguments to create a HomeCareSpecializedSuperField.
     * @example
     * // Create one HomeCareSpecializedSuperField
     * const HomeCareSpecializedSuperField = await prisma.homeCareSpecializedSuperField.create({
     *   data: {
     *     // ... data to create a HomeCareSpecializedSuperField
     *   }
     * })
     * 
    **/
    create<T extends HomeCareSpecializedSuperFieldCreateArgs>(
      args: SelectSubset<T, HomeCareSpecializedSuperFieldCreateArgs>
    ): Prisma__HomeCareSpecializedSuperFieldClient<HomeCareSpecializedSuperFieldGetPayload<T>>

    /**
     * Create many HomeCareSpecializedSuperFields.
     *     @param {HomeCareSpecializedSuperFieldCreateManyArgs} args - Arguments to create many HomeCareSpecializedSuperFields.
     *     @example
     *     // Create many HomeCareSpecializedSuperFields
     *     const homeCareSpecializedSuperField = await prisma.homeCareSpecializedSuperField.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HomeCareSpecializedSuperFieldCreateManyArgs>(
      args?: SelectSubset<T, HomeCareSpecializedSuperFieldCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HomeCareSpecializedSuperField.
     * @param {HomeCareSpecializedSuperFieldDeleteArgs} args - Arguments to delete one HomeCareSpecializedSuperField.
     * @example
     * // Delete one HomeCareSpecializedSuperField
     * const HomeCareSpecializedSuperField = await prisma.homeCareSpecializedSuperField.delete({
     *   where: {
     *     // ... filter to delete one HomeCareSpecializedSuperField
     *   }
     * })
     * 
    **/
    delete<T extends HomeCareSpecializedSuperFieldDeleteArgs>(
      args: SelectSubset<T, HomeCareSpecializedSuperFieldDeleteArgs>
    ): Prisma__HomeCareSpecializedSuperFieldClient<HomeCareSpecializedSuperFieldGetPayload<T>>

    /**
     * Update one HomeCareSpecializedSuperField.
     * @param {HomeCareSpecializedSuperFieldUpdateArgs} args - Arguments to update one HomeCareSpecializedSuperField.
     * @example
     * // Update one HomeCareSpecializedSuperField
     * const homeCareSpecializedSuperField = await prisma.homeCareSpecializedSuperField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HomeCareSpecializedSuperFieldUpdateArgs>(
      args: SelectSubset<T, HomeCareSpecializedSuperFieldUpdateArgs>
    ): Prisma__HomeCareSpecializedSuperFieldClient<HomeCareSpecializedSuperFieldGetPayload<T>>

    /**
     * Delete zero or more HomeCareSpecializedSuperFields.
     * @param {HomeCareSpecializedSuperFieldDeleteManyArgs} args - Arguments to filter HomeCareSpecializedSuperFields to delete.
     * @example
     * // Delete a few HomeCareSpecializedSuperFields
     * const { count } = await prisma.homeCareSpecializedSuperField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HomeCareSpecializedSuperFieldDeleteManyArgs>(
      args?: SelectSubset<T, HomeCareSpecializedSuperFieldDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeCareSpecializedSuperFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedSuperFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomeCareSpecializedSuperFields
     * const homeCareSpecializedSuperField = await prisma.homeCareSpecializedSuperField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HomeCareSpecializedSuperFieldUpdateManyArgs>(
      args: SelectSubset<T, HomeCareSpecializedSuperFieldUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HomeCareSpecializedSuperField.
     * @param {HomeCareSpecializedSuperFieldUpsertArgs} args - Arguments to update or create a HomeCareSpecializedSuperField.
     * @example
     * // Update or create a HomeCareSpecializedSuperField
     * const homeCareSpecializedSuperField = await prisma.homeCareSpecializedSuperField.upsert({
     *   create: {
     *     // ... data to create a HomeCareSpecializedSuperField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomeCareSpecializedSuperField we want to update
     *   }
     * })
    **/
    upsert<T extends HomeCareSpecializedSuperFieldUpsertArgs>(
      args: SelectSubset<T, HomeCareSpecializedSuperFieldUpsertArgs>
    ): Prisma__HomeCareSpecializedSuperFieldClient<HomeCareSpecializedSuperFieldGetPayload<T>>

    /**
     * Count the number of HomeCareSpecializedSuperFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedSuperFieldCountArgs} args - Arguments to filter HomeCareSpecializedSuperFields to count.
     * @example
     * // Count the number of HomeCareSpecializedSuperFields
     * const count = await prisma.homeCareSpecializedSuperField.count({
     *   where: {
     *     // ... the filter for the HomeCareSpecializedSuperFields we want to count
     *   }
     * })
    **/
    count<T extends HomeCareSpecializedSuperFieldCountArgs>(
      args?: Subset<T, HomeCareSpecializedSuperFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeCareSpecializedSuperFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomeCareSpecializedSuperField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedSuperFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HomeCareSpecializedSuperFieldAggregateArgs>(args: Subset<T, HomeCareSpecializedSuperFieldAggregateArgs>): Prisma.PrismaPromise<GetHomeCareSpecializedSuperFieldAggregateType<T>>

    /**
     * Group by HomeCareSpecializedSuperField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedSuperFieldGroupByArgs} args - Group by arguments.
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
      T extends HomeCareSpecializedSuperFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeCareSpecializedSuperFieldGroupByArgs['orderBy'] }
        : { orderBy?: HomeCareSpecializedSuperFieldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HomeCareSpecializedSuperFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeCareSpecializedSuperFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HomeCareSpecializedSuperField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HomeCareSpecializedSuperFieldClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    sub<T extends HomeCareSpecializedSuperField$subArgs= {}>(args?: Subset<T, HomeCareSpecializedSuperField$subArgs>): Prisma.PrismaPromise<Array<HomeCareSpecializedSubFieldGetPayload<T>>| Null>;

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
   * HomeCareSpecializedSuperField base type for findUnique actions
   */
  export type HomeCareSpecializedSuperFieldFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSuperField
     */
    select?: HomeCareSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSuperFieldInclude | null
    /**
     * Filter, which HomeCareSpecializedSuperField to fetch.
     */
    where: HomeCareSpecializedSuperFieldWhereUniqueInput
  }

  /**
   * HomeCareSpecializedSuperField findUnique
   */
  export interface HomeCareSpecializedSuperFieldFindUniqueArgs extends HomeCareSpecializedSuperFieldFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HomeCareSpecializedSuperField findUniqueOrThrow
   */
  export type HomeCareSpecializedSuperFieldFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSuperField
     */
    select?: HomeCareSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSuperFieldInclude | null
    /**
     * Filter, which HomeCareSpecializedSuperField to fetch.
     */
    where: HomeCareSpecializedSuperFieldWhereUniqueInput
  }


  /**
   * HomeCareSpecializedSuperField base type for findFirst actions
   */
  export type HomeCareSpecializedSuperFieldFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSuperField
     */
    select?: HomeCareSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSuperFieldInclude | null
    /**
     * Filter, which HomeCareSpecializedSuperField to fetch.
     */
    where?: HomeCareSpecializedSuperFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSpecializedSuperFields to fetch.
     */
    orderBy?: Enumerable<HomeCareSpecializedSuperFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeCareSpecializedSuperFields.
     */
    cursor?: HomeCareSpecializedSuperFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSpecializedSuperFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSpecializedSuperFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeCareSpecializedSuperFields.
     */
    distinct?: Enumerable<HomeCareSpecializedSuperFieldScalarFieldEnum>
  }

  /**
   * HomeCareSpecializedSuperField findFirst
   */
  export interface HomeCareSpecializedSuperFieldFindFirstArgs extends HomeCareSpecializedSuperFieldFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HomeCareSpecializedSuperField findFirstOrThrow
   */
  export type HomeCareSpecializedSuperFieldFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSuperField
     */
    select?: HomeCareSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSuperFieldInclude | null
    /**
     * Filter, which HomeCareSpecializedSuperField to fetch.
     */
    where?: HomeCareSpecializedSuperFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSpecializedSuperFields to fetch.
     */
    orderBy?: Enumerable<HomeCareSpecializedSuperFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeCareSpecializedSuperFields.
     */
    cursor?: HomeCareSpecializedSuperFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSpecializedSuperFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSpecializedSuperFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeCareSpecializedSuperFields.
     */
    distinct?: Enumerable<HomeCareSpecializedSuperFieldScalarFieldEnum>
  }


  /**
   * HomeCareSpecializedSuperField findMany
   */
  export type HomeCareSpecializedSuperFieldFindManyArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSuperField
     */
    select?: HomeCareSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSuperFieldInclude | null
    /**
     * Filter, which HomeCareSpecializedSuperFields to fetch.
     */
    where?: HomeCareSpecializedSuperFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSpecializedSuperFields to fetch.
     */
    orderBy?: Enumerable<HomeCareSpecializedSuperFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomeCareSpecializedSuperFields.
     */
    cursor?: HomeCareSpecializedSuperFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSpecializedSuperFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSpecializedSuperFields.
     */
    skip?: number
    distinct?: Enumerable<HomeCareSpecializedSuperFieldScalarFieldEnum>
  }


  /**
   * HomeCareSpecializedSuperField create
   */
  export type HomeCareSpecializedSuperFieldCreateArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSuperField
     */
    select?: HomeCareSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSuperFieldInclude | null
    /**
     * The data needed to create a HomeCareSpecializedSuperField.
     */
    data: XOR<HomeCareSpecializedSuperFieldCreateInput, HomeCareSpecializedSuperFieldUncheckedCreateInput>
  }


  /**
   * HomeCareSpecializedSuperField createMany
   */
  export type HomeCareSpecializedSuperFieldCreateManyArgs = {
    /**
     * The data used to create many HomeCareSpecializedSuperFields.
     */
    data: Enumerable<HomeCareSpecializedSuperFieldCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HomeCareSpecializedSuperField update
   */
  export type HomeCareSpecializedSuperFieldUpdateArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSuperField
     */
    select?: HomeCareSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSuperFieldInclude | null
    /**
     * The data needed to update a HomeCareSpecializedSuperField.
     */
    data: XOR<HomeCareSpecializedSuperFieldUpdateInput, HomeCareSpecializedSuperFieldUncheckedUpdateInput>
    /**
     * Choose, which HomeCareSpecializedSuperField to update.
     */
    where: HomeCareSpecializedSuperFieldWhereUniqueInput
  }


  /**
   * HomeCareSpecializedSuperField updateMany
   */
  export type HomeCareSpecializedSuperFieldUpdateManyArgs = {
    /**
     * The data used to update HomeCareSpecializedSuperFields.
     */
    data: XOR<HomeCareSpecializedSuperFieldUpdateManyMutationInput, HomeCareSpecializedSuperFieldUncheckedUpdateManyInput>
    /**
     * Filter which HomeCareSpecializedSuperFields to update
     */
    where?: HomeCareSpecializedSuperFieldWhereInput
  }


  /**
   * HomeCareSpecializedSuperField upsert
   */
  export type HomeCareSpecializedSuperFieldUpsertArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSuperField
     */
    select?: HomeCareSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSuperFieldInclude | null
    /**
     * The filter to search for the HomeCareSpecializedSuperField to update in case it exists.
     */
    where: HomeCareSpecializedSuperFieldWhereUniqueInput
    /**
     * In case the HomeCareSpecializedSuperField found by the `where` argument doesn't exist, create a new HomeCareSpecializedSuperField with this data.
     */
    create: XOR<HomeCareSpecializedSuperFieldCreateInput, HomeCareSpecializedSuperFieldUncheckedCreateInput>
    /**
     * In case the HomeCareSpecializedSuperField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeCareSpecializedSuperFieldUpdateInput, HomeCareSpecializedSuperFieldUncheckedUpdateInput>
  }


  /**
   * HomeCareSpecializedSuperField delete
   */
  export type HomeCareSpecializedSuperFieldDeleteArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSuperField
     */
    select?: HomeCareSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSuperFieldInclude | null
    /**
     * Filter which HomeCareSpecializedSuperField to delete.
     */
    where: HomeCareSpecializedSuperFieldWhereUniqueInput
  }


  /**
   * HomeCareSpecializedSuperField deleteMany
   */
  export type HomeCareSpecializedSuperFieldDeleteManyArgs = {
    /**
     * Filter which HomeCareSpecializedSuperFields to delete
     */
    where?: HomeCareSpecializedSuperFieldWhereInput
  }


  /**
   * HomeCareSpecializedSuperField.sub
   */
  export type HomeCareSpecializedSuperField$subArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSubField
     */
    select?: HomeCareSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSubFieldInclude | null
    where?: HomeCareSpecializedSubFieldWhereInput
    orderBy?: Enumerable<HomeCareSpecializedSubFieldOrderByWithRelationInput>
    cursor?: HomeCareSpecializedSubFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HomeCareSpecializedSubFieldScalarFieldEnum>
  }


  /**
   * HomeCareSpecializedSuperField without action
   */
  export type HomeCareSpecializedSuperFieldArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSuperField
     */
    select?: HomeCareSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSuperFieldInclude | null
  }



  /**
   * Model HomeCareSpecializedSubField
   */


  export type AggregateHomeCareSpecializedSubField = {
    _count: HomeCareSpecializedSubFieldCountAggregateOutputType | null
    _min: HomeCareSpecializedSubFieldMinAggregateOutputType | null
    _max: HomeCareSpecializedSubFieldMaxAggregateOutputType | null
  }

  export type HomeCareSpecializedSubFieldMinAggregateOutputType = {
    id: string | null
    name: string | null
    super_id: string | null
  }

  export type HomeCareSpecializedSubFieldMaxAggregateOutputType = {
    id: string | null
    name: string | null
    super_id: string | null
  }

  export type HomeCareSpecializedSubFieldCountAggregateOutputType = {
    id: number
    name: number
    super_id: number
    _all: number
  }


  export type HomeCareSpecializedSubFieldMinAggregateInputType = {
    id?: true
    name?: true
    super_id?: true
  }

  export type HomeCareSpecializedSubFieldMaxAggregateInputType = {
    id?: true
    name?: true
    super_id?: true
  }

  export type HomeCareSpecializedSubFieldCountAggregateInputType = {
    id?: true
    name?: true
    super_id?: true
    _all?: true
  }

  export type HomeCareSpecializedSubFieldAggregateArgs = {
    /**
     * Filter which HomeCareSpecializedSubField to aggregate.
     */
    where?: HomeCareSpecializedSubFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSpecializedSubFields to fetch.
     */
    orderBy?: Enumerable<HomeCareSpecializedSubFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeCareSpecializedSubFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSpecializedSubFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSpecializedSubFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomeCareSpecializedSubFields
    **/
    _count?: true | HomeCareSpecializedSubFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeCareSpecializedSubFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeCareSpecializedSubFieldMaxAggregateInputType
  }

  export type GetHomeCareSpecializedSubFieldAggregateType<T extends HomeCareSpecializedSubFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateHomeCareSpecializedSubField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomeCareSpecializedSubField[P]>
      : GetScalarType<T[P], AggregateHomeCareSpecializedSubField[P]>
  }




  export type HomeCareSpecializedSubFieldGroupByArgs = {
    where?: HomeCareSpecializedSubFieldWhereInput
    orderBy?: Enumerable<HomeCareSpecializedSubFieldOrderByWithAggregationInput>
    by: HomeCareSpecializedSubFieldScalarFieldEnum[]
    having?: HomeCareSpecializedSubFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeCareSpecializedSubFieldCountAggregateInputType | true
    _min?: HomeCareSpecializedSubFieldMinAggregateInputType
    _max?: HomeCareSpecializedSubFieldMaxAggregateInputType
  }


  export type HomeCareSpecializedSubFieldGroupByOutputType = {
    id: string
    name: string
    super_id: string
    _count: HomeCareSpecializedSubFieldCountAggregateOutputType | null
    _min: HomeCareSpecializedSubFieldMinAggregateOutputType | null
    _max: HomeCareSpecializedSubFieldMaxAggregateOutputType | null
  }

  type GetHomeCareSpecializedSubFieldGroupByPayload<T extends HomeCareSpecializedSubFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HomeCareSpecializedSubFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeCareSpecializedSubFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeCareSpecializedSubFieldGroupByOutputType[P]>
            : GetScalarType<T[P], HomeCareSpecializedSubFieldGroupByOutputType[P]>
        }
      >
    >


  export type HomeCareSpecializedSubFieldSelect = {
    id?: boolean
    name?: boolean
    super_id?: boolean
    super?: boolean | HomeCareSpecializedSuperFieldArgs
    home_care_companies?: boolean | HomeCareSpecializedSubField$home_care_companiesArgs
    _count?: boolean | HomeCareSpecializedSubFieldCountOutputTypeArgs
  }


  export type HomeCareSpecializedSubFieldInclude = {
    super?: boolean | HomeCareSpecializedSuperFieldArgs
    home_care_companies?: boolean | HomeCareSpecializedSubField$home_care_companiesArgs
    _count?: boolean | HomeCareSpecializedSubFieldCountOutputTypeArgs
  }

  export type HomeCareSpecializedSubFieldGetPayload<S extends boolean | null | undefined | HomeCareSpecializedSubFieldArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HomeCareSpecializedSubField :
    S extends undefined ? never :
    S extends { include: any } & (HomeCareSpecializedSubFieldArgs | HomeCareSpecializedSubFieldFindManyArgs)
    ? HomeCareSpecializedSubField  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'super' ? HomeCareSpecializedSuperFieldGetPayload<S['include'][P]> :
        P extends 'home_care_companies' ? Array < HomeCareCompanyGetPayload<S['include'][P]>>  :
        P extends '_count' ? HomeCareSpecializedSubFieldCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HomeCareSpecializedSubFieldArgs | HomeCareSpecializedSubFieldFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'super' ? HomeCareSpecializedSuperFieldGetPayload<S['select'][P]> :
        P extends 'home_care_companies' ? Array < HomeCareCompanyGetPayload<S['select'][P]>>  :
        P extends '_count' ? HomeCareSpecializedSubFieldCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof HomeCareSpecializedSubField ? HomeCareSpecializedSubField[P] : never
  } 
      : HomeCareSpecializedSubField


  type HomeCareSpecializedSubFieldCountArgs = 
    Omit<HomeCareSpecializedSubFieldFindManyArgs, 'select' | 'include'> & {
      select?: HomeCareSpecializedSubFieldCountAggregateInputType | true
    }

  export interface HomeCareSpecializedSubFieldDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one HomeCareSpecializedSubField that matches the filter.
     * @param {HomeCareSpecializedSubFieldFindUniqueArgs} args - Arguments to find a HomeCareSpecializedSubField
     * @example
     * // Get one HomeCareSpecializedSubField
     * const homeCareSpecializedSubField = await prisma.homeCareSpecializedSubField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HomeCareSpecializedSubFieldFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HomeCareSpecializedSubFieldFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HomeCareSpecializedSubField'> extends True ? Prisma__HomeCareSpecializedSubFieldClient<HomeCareSpecializedSubFieldGetPayload<T>> : Prisma__HomeCareSpecializedSubFieldClient<HomeCareSpecializedSubFieldGetPayload<T> | null, null>

    /**
     * Find one HomeCareSpecializedSubField that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HomeCareSpecializedSubFieldFindUniqueOrThrowArgs} args - Arguments to find a HomeCareSpecializedSubField
     * @example
     * // Get one HomeCareSpecializedSubField
     * const homeCareSpecializedSubField = await prisma.homeCareSpecializedSubField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HomeCareSpecializedSubFieldFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HomeCareSpecializedSubFieldFindUniqueOrThrowArgs>
    ): Prisma__HomeCareSpecializedSubFieldClient<HomeCareSpecializedSubFieldGetPayload<T>>

    /**
     * Find the first HomeCareSpecializedSubField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedSubFieldFindFirstArgs} args - Arguments to find a HomeCareSpecializedSubField
     * @example
     * // Get one HomeCareSpecializedSubField
     * const homeCareSpecializedSubField = await prisma.homeCareSpecializedSubField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HomeCareSpecializedSubFieldFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HomeCareSpecializedSubFieldFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HomeCareSpecializedSubField'> extends True ? Prisma__HomeCareSpecializedSubFieldClient<HomeCareSpecializedSubFieldGetPayload<T>> : Prisma__HomeCareSpecializedSubFieldClient<HomeCareSpecializedSubFieldGetPayload<T> | null, null>

    /**
     * Find the first HomeCareSpecializedSubField that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedSubFieldFindFirstOrThrowArgs} args - Arguments to find a HomeCareSpecializedSubField
     * @example
     * // Get one HomeCareSpecializedSubField
     * const homeCareSpecializedSubField = await prisma.homeCareSpecializedSubField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HomeCareSpecializedSubFieldFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HomeCareSpecializedSubFieldFindFirstOrThrowArgs>
    ): Prisma__HomeCareSpecializedSubFieldClient<HomeCareSpecializedSubFieldGetPayload<T>>

    /**
     * Find zero or more HomeCareSpecializedSubFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedSubFieldFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomeCareSpecializedSubFields
     * const homeCareSpecializedSubFields = await prisma.homeCareSpecializedSubField.findMany()
     * 
     * // Get first 10 HomeCareSpecializedSubFields
     * const homeCareSpecializedSubFields = await prisma.homeCareSpecializedSubField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeCareSpecializedSubFieldWithIdOnly = await prisma.homeCareSpecializedSubField.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HomeCareSpecializedSubFieldFindManyArgs>(
      args?: SelectSubset<T, HomeCareSpecializedSubFieldFindManyArgs>
    ): Prisma.PrismaPromise<Array<HomeCareSpecializedSubFieldGetPayload<T>>>

    /**
     * Create a HomeCareSpecializedSubField.
     * @param {HomeCareSpecializedSubFieldCreateArgs} args - Arguments to create a HomeCareSpecializedSubField.
     * @example
     * // Create one HomeCareSpecializedSubField
     * const HomeCareSpecializedSubField = await prisma.homeCareSpecializedSubField.create({
     *   data: {
     *     // ... data to create a HomeCareSpecializedSubField
     *   }
     * })
     * 
    **/
    create<T extends HomeCareSpecializedSubFieldCreateArgs>(
      args: SelectSubset<T, HomeCareSpecializedSubFieldCreateArgs>
    ): Prisma__HomeCareSpecializedSubFieldClient<HomeCareSpecializedSubFieldGetPayload<T>>

    /**
     * Create many HomeCareSpecializedSubFields.
     *     @param {HomeCareSpecializedSubFieldCreateManyArgs} args - Arguments to create many HomeCareSpecializedSubFields.
     *     @example
     *     // Create many HomeCareSpecializedSubFields
     *     const homeCareSpecializedSubField = await prisma.homeCareSpecializedSubField.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HomeCareSpecializedSubFieldCreateManyArgs>(
      args?: SelectSubset<T, HomeCareSpecializedSubFieldCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HomeCareSpecializedSubField.
     * @param {HomeCareSpecializedSubFieldDeleteArgs} args - Arguments to delete one HomeCareSpecializedSubField.
     * @example
     * // Delete one HomeCareSpecializedSubField
     * const HomeCareSpecializedSubField = await prisma.homeCareSpecializedSubField.delete({
     *   where: {
     *     // ... filter to delete one HomeCareSpecializedSubField
     *   }
     * })
     * 
    **/
    delete<T extends HomeCareSpecializedSubFieldDeleteArgs>(
      args: SelectSubset<T, HomeCareSpecializedSubFieldDeleteArgs>
    ): Prisma__HomeCareSpecializedSubFieldClient<HomeCareSpecializedSubFieldGetPayload<T>>

    /**
     * Update one HomeCareSpecializedSubField.
     * @param {HomeCareSpecializedSubFieldUpdateArgs} args - Arguments to update one HomeCareSpecializedSubField.
     * @example
     * // Update one HomeCareSpecializedSubField
     * const homeCareSpecializedSubField = await prisma.homeCareSpecializedSubField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HomeCareSpecializedSubFieldUpdateArgs>(
      args: SelectSubset<T, HomeCareSpecializedSubFieldUpdateArgs>
    ): Prisma__HomeCareSpecializedSubFieldClient<HomeCareSpecializedSubFieldGetPayload<T>>

    /**
     * Delete zero or more HomeCareSpecializedSubFields.
     * @param {HomeCareSpecializedSubFieldDeleteManyArgs} args - Arguments to filter HomeCareSpecializedSubFields to delete.
     * @example
     * // Delete a few HomeCareSpecializedSubFields
     * const { count } = await prisma.homeCareSpecializedSubField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HomeCareSpecializedSubFieldDeleteManyArgs>(
      args?: SelectSubset<T, HomeCareSpecializedSubFieldDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeCareSpecializedSubFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedSubFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomeCareSpecializedSubFields
     * const homeCareSpecializedSubField = await prisma.homeCareSpecializedSubField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HomeCareSpecializedSubFieldUpdateManyArgs>(
      args: SelectSubset<T, HomeCareSpecializedSubFieldUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HomeCareSpecializedSubField.
     * @param {HomeCareSpecializedSubFieldUpsertArgs} args - Arguments to update or create a HomeCareSpecializedSubField.
     * @example
     * // Update or create a HomeCareSpecializedSubField
     * const homeCareSpecializedSubField = await prisma.homeCareSpecializedSubField.upsert({
     *   create: {
     *     // ... data to create a HomeCareSpecializedSubField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomeCareSpecializedSubField we want to update
     *   }
     * })
    **/
    upsert<T extends HomeCareSpecializedSubFieldUpsertArgs>(
      args: SelectSubset<T, HomeCareSpecializedSubFieldUpsertArgs>
    ): Prisma__HomeCareSpecializedSubFieldClient<HomeCareSpecializedSubFieldGetPayload<T>>

    /**
     * Count the number of HomeCareSpecializedSubFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedSubFieldCountArgs} args - Arguments to filter HomeCareSpecializedSubFields to count.
     * @example
     * // Count the number of HomeCareSpecializedSubFields
     * const count = await prisma.homeCareSpecializedSubField.count({
     *   where: {
     *     // ... the filter for the HomeCareSpecializedSubFields we want to count
     *   }
     * })
    **/
    count<T extends HomeCareSpecializedSubFieldCountArgs>(
      args?: Subset<T, HomeCareSpecializedSubFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeCareSpecializedSubFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomeCareSpecializedSubField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedSubFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HomeCareSpecializedSubFieldAggregateArgs>(args: Subset<T, HomeCareSpecializedSubFieldAggregateArgs>): Prisma.PrismaPromise<GetHomeCareSpecializedSubFieldAggregateType<T>>

    /**
     * Group by HomeCareSpecializedSubField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeCareSpecializedSubFieldGroupByArgs} args - Group by arguments.
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
      T extends HomeCareSpecializedSubFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeCareSpecializedSubFieldGroupByArgs['orderBy'] }
        : { orderBy?: HomeCareSpecializedSubFieldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HomeCareSpecializedSubFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeCareSpecializedSubFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HomeCareSpecializedSubField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HomeCareSpecializedSubFieldClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    super<T extends HomeCareSpecializedSuperFieldArgs= {}>(args?: Subset<T, HomeCareSpecializedSuperFieldArgs>): Prisma__HomeCareSpecializedSuperFieldClient<HomeCareSpecializedSuperFieldGetPayload<T> | Null>;

    home_care_companies<T extends HomeCareSpecializedSubField$home_care_companiesArgs= {}>(args?: Subset<T, HomeCareSpecializedSubField$home_care_companiesArgs>): Prisma.PrismaPromise<Array<HomeCareCompanyGetPayload<T>>| Null>;

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
   * HomeCareSpecializedSubField base type for findUnique actions
   */
  export type HomeCareSpecializedSubFieldFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSubField
     */
    select?: HomeCareSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSubFieldInclude | null
    /**
     * Filter, which HomeCareSpecializedSubField to fetch.
     */
    where: HomeCareSpecializedSubFieldWhereUniqueInput
  }

  /**
   * HomeCareSpecializedSubField findUnique
   */
  export interface HomeCareSpecializedSubFieldFindUniqueArgs extends HomeCareSpecializedSubFieldFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HomeCareSpecializedSubField findUniqueOrThrow
   */
  export type HomeCareSpecializedSubFieldFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSubField
     */
    select?: HomeCareSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSubFieldInclude | null
    /**
     * Filter, which HomeCareSpecializedSubField to fetch.
     */
    where: HomeCareSpecializedSubFieldWhereUniqueInput
  }


  /**
   * HomeCareSpecializedSubField base type for findFirst actions
   */
  export type HomeCareSpecializedSubFieldFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSubField
     */
    select?: HomeCareSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSubFieldInclude | null
    /**
     * Filter, which HomeCareSpecializedSubField to fetch.
     */
    where?: HomeCareSpecializedSubFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSpecializedSubFields to fetch.
     */
    orderBy?: Enumerable<HomeCareSpecializedSubFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeCareSpecializedSubFields.
     */
    cursor?: HomeCareSpecializedSubFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSpecializedSubFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSpecializedSubFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeCareSpecializedSubFields.
     */
    distinct?: Enumerable<HomeCareSpecializedSubFieldScalarFieldEnum>
  }

  /**
   * HomeCareSpecializedSubField findFirst
   */
  export interface HomeCareSpecializedSubFieldFindFirstArgs extends HomeCareSpecializedSubFieldFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HomeCareSpecializedSubField findFirstOrThrow
   */
  export type HomeCareSpecializedSubFieldFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSubField
     */
    select?: HomeCareSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSubFieldInclude | null
    /**
     * Filter, which HomeCareSpecializedSubField to fetch.
     */
    where?: HomeCareSpecializedSubFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSpecializedSubFields to fetch.
     */
    orderBy?: Enumerable<HomeCareSpecializedSubFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeCareSpecializedSubFields.
     */
    cursor?: HomeCareSpecializedSubFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSpecializedSubFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSpecializedSubFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeCareSpecializedSubFields.
     */
    distinct?: Enumerable<HomeCareSpecializedSubFieldScalarFieldEnum>
  }


  /**
   * HomeCareSpecializedSubField findMany
   */
  export type HomeCareSpecializedSubFieldFindManyArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSubField
     */
    select?: HomeCareSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSubFieldInclude | null
    /**
     * Filter, which HomeCareSpecializedSubFields to fetch.
     */
    where?: HomeCareSpecializedSubFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeCareSpecializedSubFields to fetch.
     */
    orderBy?: Enumerable<HomeCareSpecializedSubFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomeCareSpecializedSubFields.
     */
    cursor?: HomeCareSpecializedSubFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeCareSpecializedSubFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeCareSpecializedSubFields.
     */
    skip?: number
    distinct?: Enumerable<HomeCareSpecializedSubFieldScalarFieldEnum>
  }


  /**
   * HomeCareSpecializedSubField create
   */
  export type HomeCareSpecializedSubFieldCreateArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSubField
     */
    select?: HomeCareSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSubFieldInclude | null
    /**
     * The data needed to create a HomeCareSpecializedSubField.
     */
    data: XOR<HomeCareSpecializedSubFieldCreateInput, HomeCareSpecializedSubFieldUncheckedCreateInput>
  }


  /**
   * HomeCareSpecializedSubField createMany
   */
  export type HomeCareSpecializedSubFieldCreateManyArgs = {
    /**
     * The data used to create many HomeCareSpecializedSubFields.
     */
    data: Enumerable<HomeCareSpecializedSubFieldCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HomeCareSpecializedSubField update
   */
  export type HomeCareSpecializedSubFieldUpdateArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSubField
     */
    select?: HomeCareSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSubFieldInclude | null
    /**
     * The data needed to update a HomeCareSpecializedSubField.
     */
    data: XOR<HomeCareSpecializedSubFieldUpdateInput, HomeCareSpecializedSubFieldUncheckedUpdateInput>
    /**
     * Choose, which HomeCareSpecializedSubField to update.
     */
    where: HomeCareSpecializedSubFieldWhereUniqueInput
  }


  /**
   * HomeCareSpecializedSubField updateMany
   */
  export type HomeCareSpecializedSubFieldUpdateManyArgs = {
    /**
     * The data used to update HomeCareSpecializedSubFields.
     */
    data: XOR<HomeCareSpecializedSubFieldUpdateManyMutationInput, HomeCareSpecializedSubFieldUncheckedUpdateManyInput>
    /**
     * Filter which HomeCareSpecializedSubFields to update
     */
    where?: HomeCareSpecializedSubFieldWhereInput
  }


  /**
   * HomeCareSpecializedSubField upsert
   */
  export type HomeCareSpecializedSubFieldUpsertArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSubField
     */
    select?: HomeCareSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSubFieldInclude | null
    /**
     * The filter to search for the HomeCareSpecializedSubField to update in case it exists.
     */
    where: HomeCareSpecializedSubFieldWhereUniqueInput
    /**
     * In case the HomeCareSpecializedSubField found by the `where` argument doesn't exist, create a new HomeCareSpecializedSubField with this data.
     */
    create: XOR<HomeCareSpecializedSubFieldCreateInput, HomeCareSpecializedSubFieldUncheckedCreateInput>
    /**
     * In case the HomeCareSpecializedSubField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeCareSpecializedSubFieldUpdateInput, HomeCareSpecializedSubFieldUncheckedUpdateInput>
  }


  /**
   * HomeCareSpecializedSubField delete
   */
  export type HomeCareSpecializedSubFieldDeleteArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSubField
     */
    select?: HomeCareSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSubFieldInclude | null
    /**
     * Filter which HomeCareSpecializedSubField to delete.
     */
    where: HomeCareSpecializedSubFieldWhereUniqueInput
  }


  /**
   * HomeCareSpecializedSubField deleteMany
   */
  export type HomeCareSpecializedSubFieldDeleteManyArgs = {
    /**
     * Filter which HomeCareSpecializedSubFields to delete
     */
    where?: HomeCareSpecializedSubFieldWhereInput
  }


  /**
   * HomeCareSpecializedSubField.home_care_companies
   */
  export type HomeCareSpecializedSubField$home_care_companiesArgs = {
    /**
     * Select specific fields to fetch from the HomeCareCompany
     */
    select?: HomeCareCompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareCompanyInclude | null
    where?: HomeCareCompanyWhereInput
    orderBy?: Enumerable<HomeCareCompanyOrderByWithRelationInput>
    cursor?: HomeCareCompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HomeCareCompanyScalarFieldEnum>
  }


  /**
   * HomeCareSpecializedSubField without action
   */
  export type HomeCareSpecializedSubFieldArgs = {
    /**
     * Select specific fields to fetch from the HomeCareSpecializedSubField
     */
    select?: HomeCareSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HomeCareSpecializedSubFieldInclude | null
  }



  /**
   * Model RealEstateSpecializedSuperField
   */


  export type AggregateRealEstateSpecializedSuperField = {
    _count: RealEstateSpecializedSuperFieldCountAggregateOutputType | null
    _min: RealEstateSpecializedSuperFieldMinAggregateOutputType | null
    _max: RealEstateSpecializedSuperFieldMaxAggregateOutputType | null
  }

  export type RealEstateSpecializedSuperFieldMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RealEstateSpecializedSuperFieldMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RealEstateSpecializedSuperFieldCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RealEstateSpecializedSuperFieldMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RealEstateSpecializedSuperFieldMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RealEstateSpecializedSuperFieldCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RealEstateSpecializedSuperFieldAggregateArgs = {
    /**
     * Filter which RealEstateSpecializedSuperField to aggregate.
     */
    where?: RealEstateSpecializedSuperFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSpecializedSuperFields to fetch.
     */
    orderBy?: Enumerable<RealEstateSpecializedSuperFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RealEstateSpecializedSuperFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSpecializedSuperFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSpecializedSuperFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RealEstateSpecializedSuperFields
    **/
    _count?: true | RealEstateSpecializedSuperFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealEstateSpecializedSuperFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealEstateSpecializedSuperFieldMaxAggregateInputType
  }

  export type GetRealEstateSpecializedSuperFieldAggregateType<T extends RealEstateSpecializedSuperFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateRealEstateSpecializedSuperField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealEstateSpecializedSuperField[P]>
      : GetScalarType<T[P], AggregateRealEstateSpecializedSuperField[P]>
  }




  export type RealEstateSpecializedSuperFieldGroupByArgs = {
    where?: RealEstateSpecializedSuperFieldWhereInput
    orderBy?: Enumerable<RealEstateSpecializedSuperFieldOrderByWithAggregationInput>
    by: RealEstateSpecializedSuperFieldScalarFieldEnum[]
    having?: RealEstateSpecializedSuperFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealEstateSpecializedSuperFieldCountAggregateInputType | true
    _min?: RealEstateSpecializedSuperFieldMinAggregateInputType
    _max?: RealEstateSpecializedSuperFieldMaxAggregateInputType
  }


  export type RealEstateSpecializedSuperFieldGroupByOutputType = {
    id: string
    name: string
    _count: RealEstateSpecializedSuperFieldCountAggregateOutputType | null
    _min: RealEstateSpecializedSuperFieldMinAggregateOutputType | null
    _max: RealEstateSpecializedSuperFieldMaxAggregateOutputType | null
  }

  type GetRealEstateSpecializedSuperFieldGroupByPayload<T extends RealEstateSpecializedSuperFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RealEstateSpecializedSuperFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealEstateSpecializedSuperFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealEstateSpecializedSuperFieldGroupByOutputType[P]>
            : GetScalarType<T[P], RealEstateSpecializedSuperFieldGroupByOutputType[P]>
        }
      >
    >


  export type RealEstateSpecializedSuperFieldSelect = {
    id?: boolean
    name?: boolean
    sub?: boolean | RealEstateSpecializedSuperField$subArgs
    _count?: boolean | RealEstateSpecializedSuperFieldCountOutputTypeArgs
  }


  export type RealEstateSpecializedSuperFieldInclude = {
    sub?: boolean | RealEstateSpecializedSuperField$subArgs
    _count?: boolean | RealEstateSpecializedSuperFieldCountOutputTypeArgs
  }

  export type RealEstateSpecializedSuperFieldGetPayload<S extends boolean | null | undefined | RealEstateSpecializedSuperFieldArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RealEstateSpecializedSuperField :
    S extends undefined ? never :
    S extends { include: any } & (RealEstateSpecializedSuperFieldArgs | RealEstateSpecializedSuperFieldFindManyArgs)
    ? RealEstateSpecializedSuperField  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'sub' ? Array < RealEstateSpecializedSubFieldGetPayload<S['include'][P]>>  :
        P extends '_count' ? RealEstateSpecializedSuperFieldCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RealEstateSpecializedSuperFieldArgs | RealEstateSpecializedSuperFieldFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'sub' ? Array < RealEstateSpecializedSubFieldGetPayload<S['select'][P]>>  :
        P extends '_count' ? RealEstateSpecializedSuperFieldCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof RealEstateSpecializedSuperField ? RealEstateSpecializedSuperField[P] : never
  } 
      : RealEstateSpecializedSuperField


  type RealEstateSpecializedSuperFieldCountArgs = 
    Omit<RealEstateSpecializedSuperFieldFindManyArgs, 'select' | 'include'> & {
      select?: RealEstateSpecializedSuperFieldCountAggregateInputType | true
    }

  export interface RealEstateSpecializedSuperFieldDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RealEstateSpecializedSuperField that matches the filter.
     * @param {RealEstateSpecializedSuperFieldFindUniqueArgs} args - Arguments to find a RealEstateSpecializedSuperField
     * @example
     * // Get one RealEstateSpecializedSuperField
     * const realEstateSpecializedSuperField = await prisma.realEstateSpecializedSuperField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RealEstateSpecializedSuperFieldFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RealEstateSpecializedSuperFieldFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RealEstateSpecializedSuperField'> extends True ? Prisma__RealEstateSpecializedSuperFieldClient<RealEstateSpecializedSuperFieldGetPayload<T>> : Prisma__RealEstateSpecializedSuperFieldClient<RealEstateSpecializedSuperFieldGetPayload<T> | null, null>

    /**
     * Find one RealEstateSpecializedSuperField that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RealEstateSpecializedSuperFieldFindUniqueOrThrowArgs} args - Arguments to find a RealEstateSpecializedSuperField
     * @example
     * // Get one RealEstateSpecializedSuperField
     * const realEstateSpecializedSuperField = await prisma.realEstateSpecializedSuperField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RealEstateSpecializedSuperFieldFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RealEstateSpecializedSuperFieldFindUniqueOrThrowArgs>
    ): Prisma__RealEstateSpecializedSuperFieldClient<RealEstateSpecializedSuperFieldGetPayload<T>>

    /**
     * Find the first RealEstateSpecializedSuperField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedSuperFieldFindFirstArgs} args - Arguments to find a RealEstateSpecializedSuperField
     * @example
     * // Get one RealEstateSpecializedSuperField
     * const realEstateSpecializedSuperField = await prisma.realEstateSpecializedSuperField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RealEstateSpecializedSuperFieldFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RealEstateSpecializedSuperFieldFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RealEstateSpecializedSuperField'> extends True ? Prisma__RealEstateSpecializedSuperFieldClient<RealEstateSpecializedSuperFieldGetPayload<T>> : Prisma__RealEstateSpecializedSuperFieldClient<RealEstateSpecializedSuperFieldGetPayload<T> | null, null>

    /**
     * Find the first RealEstateSpecializedSuperField that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedSuperFieldFindFirstOrThrowArgs} args - Arguments to find a RealEstateSpecializedSuperField
     * @example
     * // Get one RealEstateSpecializedSuperField
     * const realEstateSpecializedSuperField = await prisma.realEstateSpecializedSuperField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RealEstateSpecializedSuperFieldFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RealEstateSpecializedSuperFieldFindFirstOrThrowArgs>
    ): Prisma__RealEstateSpecializedSuperFieldClient<RealEstateSpecializedSuperFieldGetPayload<T>>

    /**
     * Find zero or more RealEstateSpecializedSuperFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedSuperFieldFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RealEstateSpecializedSuperFields
     * const realEstateSpecializedSuperFields = await prisma.realEstateSpecializedSuperField.findMany()
     * 
     * // Get first 10 RealEstateSpecializedSuperFields
     * const realEstateSpecializedSuperFields = await prisma.realEstateSpecializedSuperField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const realEstateSpecializedSuperFieldWithIdOnly = await prisma.realEstateSpecializedSuperField.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RealEstateSpecializedSuperFieldFindManyArgs>(
      args?: SelectSubset<T, RealEstateSpecializedSuperFieldFindManyArgs>
    ): Prisma.PrismaPromise<Array<RealEstateSpecializedSuperFieldGetPayload<T>>>

    /**
     * Create a RealEstateSpecializedSuperField.
     * @param {RealEstateSpecializedSuperFieldCreateArgs} args - Arguments to create a RealEstateSpecializedSuperField.
     * @example
     * // Create one RealEstateSpecializedSuperField
     * const RealEstateSpecializedSuperField = await prisma.realEstateSpecializedSuperField.create({
     *   data: {
     *     // ... data to create a RealEstateSpecializedSuperField
     *   }
     * })
     * 
    **/
    create<T extends RealEstateSpecializedSuperFieldCreateArgs>(
      args: SelectSubset<T, RealEstateSpecializedSuperFieldCreateArgs>
    ): Prisma__RealEstateSpecializedSuperFieldClient<RealEstateSpecializedSuperFieldGetPayload<T>>

    /**
     * Create many RealEstateSpecializedSuperFields.
     *     @param {RealEstateSpecializedSuperFieldCreateManyArgs} args - Arguments to create many RealEstateSpecializedSuperFields.
     *     @example
     *     // Create many RealEstateSpecializedSuperFields
     *     const realEstateSpecializedSuperField = await prisma.realEstateSpecializedSuperField.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RealEstateSpecializedSuperFieldCreateManyArgs>(
      args?: SelectSubset<T, RealEstateSpecializedSuperFieldCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RealEstateSpecializedSuperField.
     * @param {RealEstateSpecializedSuperFieldDeleteArgs} args - Arguments to delete one RealEstateSpecializedSuperField.
     * @example
     * // Delete one RealEstateSpecializedSuperField
     * const RealEstateSpecializedSuperField = await prisma.realEstateSpecializedSuperField.delete({
     *   where: {
     *     // ... filter to delete one RealEstateSpecializedSuperField
     *   }
     * })
     * 
    **/
    delete<T extends RealEstateSpecializedSuperFieldDeleteArgs>(
      args: SelectSubset<T, RealEstateSpecializedSuperFieldDeleteArgs>
    ): Prisma__RealEstateSpecializedSuperFieldClient<RealEstateSpecializedSuperFieldGetPayload<T>>

    /**
     * Update one RealEstateSpecializedSuperField.
     * @param {RealEstateSpecializedSuperFieldUpdateArgs} args - Arguments to update one RealEstateSpecializedSuperField.
     * @example
     * // Update one RealEstateSpecializedSuperField
     * const realEstateSpecializedSuperField = await prisma.realEstateSpecializedSuperField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RealEstateSpecializedSuperFieldUpdateArgs>(
      args: SelectSubset<T, RealEstateSpecializedSuperFieldUpdateArgs>
    ): Prisma__RealEstateSpecializedSuperFieldClient<RealEstateSpecializedSuperFieldGetPayload<T>>

    /**
     * Delete zero or more RealEstateSpecializedSuperFields.
     * @param {RealEstateSpecializedSuperFieldDeleteManyArgs} args - Arguments to filter RealEstateSpecializedSuperFields to delete.
     * @example
     * // Delete a few RealEstateSpecializedSuperFields
     * const { count } = await prisma.realEstateSpecializedSuperField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RealEstateSpecializedSuperFieldDeleteManyArgs>(
      args?: SelectSubset<T, RealEstateSpecializedSuperFieldDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RealEstateSpecializedSuperFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedSuperFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RealEstateSpecializedSuperFields
     * const realEstateSpecializedSuperField = await prisma.realEstateSpecializedSuperField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RealEstateSpecializedSuperFieldUpdateManyArgs>(
      args: SelectSubset<T, RealEstateSpecializedSuperFieldUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RealEstateSpecializedSuperField.
     * @param {RealEstateSpecializedSuperFieldUpsertArgs} args - Arguments to update or create a RealEstateSpecializedSuperField.
     * @example
     * // Update or create a RealEstateSpecializedSuperField
     * const realEstateSpecializedSuperField = await prisma.realEstateSpecializedSuperField.upsert({
     *   create: {
     *     // ... data to create a RealEstateSpecializedSuperField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RealEstateSpecializedSuperField we want to update
     *   }
     * })
    **/
    upsert<T extends RealEstateSpecializedSuperFieldUpsertArgs>(
      args: SelectSubset<T, RealEstateSpecializedSuperFieldUpsertArgs>
    ): Prisma__RealEstateSpecializedSuperFieldClient<RealEstateSpecializedSuperFieldGetPayload<T>>

    /**
     * Count the number of RealEstateSpecializedSuperFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedSuperFieldCountArgs} args - Arguments to filter RealEstateSpecializedSuperFields to count.
     * @example
     * // Count the number of RealEstateSpecializedSuperFields
     * const count = await prisma.realEstateSpecializedSuperField.count({
     *   where: {
     *     // ... the filter for the RealEstateSpecializedSuperFields we want to count
     *   }
     * })
    **/
    count<T extends RealEstateSpecializedSuperFieldCountArgs>(
      args?: Subset<T, RealEstateSpecializedSuperFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealEstateSpecializedSuperFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RealEstateSpecializedSuperField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedSuperFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RealEstateSpecializedSuperFieldAggregateArgs>(args: Subset<T, RealEstateSpecializedSuperFieldAggregateArgs>): Prisma.PrismaPromise<GetRealEstateSpecializedSuperFieldAggregateType<T>>

    /**
     * Group by RealEstateSpecializedSuperField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedSuperFieldGroupByArgs} args - Group by arguments.
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
      T extends RealEstateSpecializedSuperFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealEstateSpecializedSuperFieldGroupByArgs['orderBy'] }
        : { orderBy?: RealEstateSpecializedSuperFieldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RealEstateSpecializedSuperFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealEstateSpecializedSuperFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RealEstateSpecializedSuperField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RealEstateSpecializedSuperFieldClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    sub<T extends RealEstateSpecializedSuperField$subArgs= {}>(args?: Subset<T, RealEstateSpecializedSuperField$subArgs>): Prisma.PrismaPromise<Array<RealEstateSpecializedSubFieldGetPayload<T>>| Null>;

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
   * RealEstateSpecializedSuperField base type for findUnique actions
   */
  export type RealEstateSpecializedSuperFieldFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSuperField
     */
    select?: RealEstateSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSuperFieldInclude | null
    /**
     * Filter, which RealEstateSpecializedSuperField to fetch.
     */
    where: RealEstateSpecializedSuperFieldWhereUniqueInput
  }

  /**
   * RealEstateSpecializedSuperField findUnique
   */
  export interface RealEstateSpecializedSuperFieldFindUniqueArgs extends RealEstateSpecializedSuperFieldFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealEstateSpecializedSuperField findUniqueOrThrow
   */
  export type RealEstateSpecializedSuperFieldFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSuperField
     */
    select?: RealEstateSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSuperFieldInclude | null
    /**
     * Filter, which RealEstateSpecializedSuperField to fetch.
     */
    where: RealEstateSpecializedSuperFieldWhereUniqueInput
  }


  /**
   * RealEstateSpecializedSuperField base type for findFirst actions
   */
  export type RealEstateSpecializedSuperFieldFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSuperField
     */
    select?: RealEstateSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSuperFieldInclude | null
    /**
     * Filter, which RealEstateSpecializedSuperField to fetch.
     */
    where?: RealEstateSpecializedSuperFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSpecializedSuperFields to fetch.
     */
    orderBy?: Enumerable<RealEstateSpecializedSuperFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstateSpecializedSuperFields.
     */
    cursor?: RealEstateSpecializedSuperFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSpecializedSuperFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSpecializedSuperFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstateSpecializedSuperFields.
     */
    distinct?: Enumerable<RealEstateSpecializedSuperFieldScalarFieldEnum>
  }

  /**
   * RealEstateSpecializedSuperField findFirst
   */
  export interface RealEstateSpecializedSuperFieldFindFirstArgs extends RealEstateSpecializedSuperFieldFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealEstateSpecializedSuperField findFirstOrThrow
   */
  export type RealEstateSpecializedSuperFieldFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSuperField
     */
    select?: RealEstateSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSuperFieldInclude | null
    /**
     * Filter, which RealEstateSpecializedSuperField to fetch.
     */
    where?: RealEstateSpecializedSuperFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSpecializedSuperFields to fetch.
     */
    orderBy?: Enumerable<RealEstateSpecializedSuperFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstateSpecializedSuperFields.
     */
    cursor?: RealEstateSpecializedSuperFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSpecializedSuperFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSpecializedSuperFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstateSpecializedSuperFields.
     */
    distinct?: Enumerable<RealEstateSpecializedSuperFieldScalarFieldEnum>
  }


  /**
   * RealEstateSpecializedSuperField findMany
   */
  export type RealEstateSpecializedSuperFieldFindManyArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSuperField
     */
    select?: RealEstateSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSuperFieldInclude | null
    /**
     * Filter, which RealEstateSpecializedSuperFields to fetch.
     */
    where?: RealEstateSpecializedSuperFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSpecializedSuperFields to fetch.
     */
    orderBy?: Enumerable<RealEstateSpecializedSuperFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RealEstateSpecializedSuperFields.
     */
    cursor?: RealEstateSpecializedSuperFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSpecializedSuperFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSpecializedSuperFields.
     */
    skip?: number
    distinct?: Enumerable<RealEstateSpecializedSuperFieldScalarFieldEnum>
  }


  /**
   * RealEstateSpecializedSuperField create
   */
  export type RealEstateSpecializedSuperFieldCreateArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSuperField
     */
    select?: RealEstateSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSuperFieldInclude | null
    /**
     * The data needed to create a RealEstateSpecializedSuperField.
     */
    data: XOR<RealEstateSpecializedSuperFieldCreateInput, RealEstateSpecializedSuperFieldUncheckedCreateInput>
  }


  /**
   * RealEstateSpecializedSuperField createMany
   */
  export type RealEstateSpecializedSuperFieldCreateManyArgs = {
    /**
     * The data used to create many RealEstateSpecializedSuperFields.
     */
    data: Enumerable<RealEstateSpecializedSuperFieldCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RealEstateSpecializedSuperField update
   */
  export type RealEstateSpecializedSuperFieldUpdateArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSuperField
     */
    select?: RealEstateSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSuperFieldInclude | null
    /**
     * The data needed to update a RealEstateSpecializedSuperField.
     */
    data: XOR<RealEstateSpecializedSuperFieldUpdateInput, RealEstateSpecializedSuperFieldUncheckedUpdateInput>
    /**
     * Choose, which RealEstateSpecializedSuperField to update.
     */
    where: RealEstateSpecializedSuperFieldWhereUniqueInput
  }


  /**
   * RealEstateSpecializedSuperField updateMany
   */
  export type RealEstateSpecializedSuperFieldUpdateManyArgs = {
    /**
     * The data used to update RealEstateSpecializedSuperFields.
     */
    data: XOR<RealEstateSpecializedSuperFieldUpdateManyMutationInput, RealEstateSpecializedSuperFieldUncheckedUpdateManyInput>
    /**
     * Filter which RealEstateSpecializedSuperFields to update
     */
    where?: RealEstateSpecializedSuperFieldWhereInput
  }


  /**
   * RealEstateSpecializedSuperField upsert
   */
  export type RealEstateSpecializedSuperFieldUpsertArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSuperField
     */
    select?: RealEstateSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSuperFieldInclude | null
    /**
     * The filter to search for the RealEstateSpecializedSuperField to update in case it exists.
     */
    where: RealEstateSpecializedSuperFieldWhereUniqueInput
    /**
     * In case the RealEstateSpecializedSuperField found by the `where` argument doesn't exist, create a new RealEstateSpecializedSuperField with this data.
     */
    create: XOR<RealEstateSpecializedSuperFieldCreateInput, RealEstateSpecializedSuperFieldUncheckedCreateInput>
    /**
     * In case the RealEstateSpecializedSuperField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RealEstateSpecializedSuperFieldUpdateInput, RealEstateSpecializedSuperFieldUncheckedUpdateInput>
  }


  /**
   * RealEstateSpecializedSuperField delete
   */
  export type RealEstateSpecializedSuperFieldDeleteArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSuperField
     */
    select?: RealEstateSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSuperFieldInclude | null
    /**
     * Filter which RealEstateSpecializedSuperField to delete.
     */
    where: RealEstateSpecializedSuperFieldWhereUniqueInput
  }


  /**
   * RealEstateSpecializedSuperField deleteMany
   */
  export type RealEstateSpecializedSuperFieldDeleteManyArgs = {
    /**
     * Filter which RealEstateSpecializedSuperFields to delete
     */
    where?: RealEstateSpecializedSuperFieldWhereInput
  }


  /**
   * RealEstateSpecializedSuperField.sub
   */
  export type RealEstateSpecializedSuperField$subArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSubField
     */
    select?: RealEstateSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSubFieldInclude | null
    where?: RealEstateSpecializedSubFieldWhereInput
    orderBy?: Enumerable<RealEstateSpecializedSubFieldOrderByWithRelationInput>
    cursor?: RealEstateSpecializedSubFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RealEstateSpecializedSubFieldScalarFieldEnum>
  }


  /**
   * RealEstateSpecializedSuperField without action
   */
  export type RealEstateSpecializedSuperFieldArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSuperField
     */
    select?: RealEstateSpecializedSuperFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSuperFieldInclude | null
  }



  /**
   * Model RealEstateSpecializedSubField
   */


  export type AggregateRealEstateSpecializedSubField = {
    _count: RealEstateSpecializedSubFieldCountAggregateOutputType | null
    _min: RealEstateSpecializedSubFieldMinAggregateOutputType | null
    _max: RealEstateSpecializedSubFieldMaxAggregateOutputType | null
  }

  export type RealEstateSpecializedSubFieldMinAggregateOutputType = {
    id: string | null
    name: string | null
    super_id: string | null
  }

  export type RealEstateSpecializedSubFieldMaxAggregateOutputType = {
    id: string | null
    name: string | null
    super_id: string | null
  }

  export type RealEstateSpecializedSubFieldCountAggregateOutputType = {
    id: number
    name: number
    super_id: number
    _all: number
  }


  export type RealEstateSpecializedSubFieldMinAggregateInputType = {
    id?: true
    name?: true
    super_id?: true
  }

  export type RealEstateSpecializedSubFieldMaxAggregateInputType = {
    id?: true
    name?: true
    super_id?: true
  }

  export type RealEstateSpecializedSubFieldCountAggregateInputType = {
    id?: true
    name?: true
    super_id?: true
    _all?: true
  }

  export type RealEstateSpecializedSubFieldAggregateArgs = {
    /**
     * Filter which RealEstateSpecializedSubField to aggregate.
     */
    where?: RealEstateSpecializedSubFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSpecializedSubFields to fetch.
     */
    orderBy?: Enumerable<RealEstateSpecializedSubFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RealEstateSpecializedSubFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSpecializedSubFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSpecializedSubFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RealEstateSpecializedSubFields
    **/
    _count?: true | RealEstateSpecializedSubFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealEstateSpecializedSubFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealEstateSpecializedSubFieldMaxAggregateInputType
  }

  export type GetRealEstateSpecializedSubFieldAggregateType<T extends RealEstateSpecializedSubFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateRealEstateSpecializedSubField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealEstateSpecializedSubField[P]>
      : GetScalarType<T[P], AggregateRealEstateSpecializedSubField[P]>
  }




  export type RealEstateSpecializedSubFieldGroupByArgs = {
    where?: RealEstateSpecializedSubFieldWhereInput
    orderBy?: Enumerable<RealEstateSpecializedSubFieldOrderByWithAggregationInput>
    by: RealEstateSpecializedSubFieldScalarFieldEnum[]
    having?: RealEstateSpecializedSubFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealEstateSpecializedSubFieldCountAggregateInputType | true
    _min?: RealEstateSpecializedSubFieldMinAggregateInputType
    _max?: RealEstateSpecializedSubFieldMaxAggregateInputType
  }


  export type RealEstateSpecializedSubFieldGroupByOutputType = {
    id: string
    name: string
    super_id: string
    _count: RealEstateSpecializedSubFieldCountAggregateOutputType | null
    _min: RealEstateSpecializedSubFieldMinAggregateOutputType | null
    _max: RealEstateSpecializedSubFieldMaxAggregateOutputType | null
  }

  type GetRealEstateSpecializedSubFieldGroupByPayload<T extends RealEstateSpecializedSubFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RealEstateSpecializedSubFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealEstateSpecializedSubFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealEstateSpecializedSubFieldGroupByOutputType[P]>
            : GetScalarType<T[P], RealEstateSpecializedSubFieldGroupByOutputType[P]>
        }
      >
    >


  export type RealEstateSpecializedSubFieldSelect = {
    id?: boolean
    name?: boolean
    super_id?: boolean
    super?: boolean | RealEstateSpecializedSuperFieldArgs
    real_estate_agents?: boolean | RealEstateSpecializedSubField$real_estate_agentsArgs
    _count?: boolean | RealEstateSpecializedSubFieldCountOutputTypeArgs
  }


  export type RealEstateSpecializedSubFieldInclude = {
    super?: boolean | RealEstateSpecializedSuperFieldArgs
    real_estate_agents?: boolean | RealEstateSpecializedSubField$real_estate_agentsArgs
    _count?: boolean | RealEstateSpecializedSubFieldCountOutputTypeArgs
  }

  export type RealEstateSpecializedSubFieldGetPayload<S extends boolean | null | undefined | RealEstateSpecializedSubFieldArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RealEstateSpecializedSubField :
    S extends undefined ? never :
    S extends { include: any } & (RealEstateSpecializedSubFieldArgs | RealEstateSpecializedSubFieldFindManyArgs)
    ? RealEstateSpecializedSubField  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'super' ? RealEstateSpecializedSuperFieldGetPayload<S['include'][P]> :
        P extends 'real_estate_agents' ? Array < RealEstateAgentGetPayload<S['include'][P]>>  :
        P extends '_count' ? RealEstateSpecializedSubFieldCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RealEstateSpecializedSubFieldArgs | RealEstateSpecializedSubFieldFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'super' ? RealEstateSpecializedSuperFieldGetPayload<S['select'][P]> :
        P extends 'real_estate_agents' ? Array < RealEstateAgentGetPayload<S['select'][P]>>  :
        P extends '_count' ? RealEstateSpecializedSubFieldCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof RealEstateSpecializedSubField ? RealEstateSpecializedSubField[P] : never
  } 
      : RealEstateSpecializedSubField


  type RealEstateSpecializedSubFieldCountArgs = 
    Omit<RealEstateSpecializedSubFieldFindManyArgs, 'select' | 'include'> & {
      select?: RealEstateSpecializedSubFieldCountAggregateInputType | true
    }

  export interface RealEstateSpecializedSubFieldDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RealEstateSpecializedSubField that matches the filter.
     * @param {RealEstateSpecializedSubFieldFindUniqueArgs} args - Arguments to find a RealEstateSpecializedSubField
     * @example
     * // Get one RealEstateSpecializedSubField
     * const realEstateSpecializedSubField = await prisma.realEstateSpecializedSubField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RealEstateSpecializedSubFieldFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RealEstateSpecializedSubFieldFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RealEstateSpecializedSubField'> extends True ? Prisma__RealEstateSpecializedSubFieldClient<RealEstateSpecializedSubFieldGetPayload<T>> : Prisma__RealEstateSpecializedSubFieldClient<RealEstateSpecializedSubFieldGetPayload<T> | null, null>

    /**
     * Find one RealEstateSpecializedSubField that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RealEstateSpecializedSubFieldFindUniqueOrThrowArgs} args - Arguments to find a RealEstateSpecializedSubField
     * @example
     * // Get one RealEstateSpecializedSubField
     * const realEstateSpecializedSubField = await prisma.realEstateSpecializedSubField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RealEstateSpecializedSubFieldFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RealEstateSpecializedSubFieldFindUniqueOrThrowArgs>
    ): Prisma__RealEstateSpecializedSubFieldClient<RealEstateSpecializedSubFieldGetPayload<T>>

    /**
     * Find the first RealEstateSpecializedSubField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedSubFieldFindFirstArgs} args - Arguments to find a RealEstateSpecializedSubField
     * @example
     * // Get one RealEstateSpecializedSubField
     * const realEstateSpecializedSubField = await prisma.realEstateSpecializedSubField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RealEstateSpecializedSubFieldFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RealEstateSpecializedSubFieldFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RealEstateSpecializedSubField'> extends True ? Prisma__RealEstateSpecializedSubFieldClient<RealEstateSpecializedSubFieldGetPayload<T>> : Prisma__RealEstateSpecializedSubFieldClient<RealEstateSpecializedSubFieldGetPayload<T> | null, null>

    /**
     * Find the first RealEstateSpecializedSubField that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedSubFieldFindFirstOrThrowArgs} args - Arguments to find a RealEstateSpecializedSubField
     * @example
     * // Get one RealEstateSpecializedSubField
     * const realEstateSpecializedSubField = await prisma.realEstateSpecializedSubField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RealEstateSpecializedSubFieldFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RealEstateSpecializedSubFieldFindFirstOrThrowArgs>
    ): Prisma__RealEstateSpecializedSubFieldClient<RealEstateSpecializedSubFieldGetPayload<T>>

    /**
     * Find zero or more RealEstateSpecializedSubFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedSubFieldFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RealEstateSpecializedSubFields
     * const realEstateSpecializedSubFields = await prisma.realEstateSpecializedSubField.findMany()
     * 
     * // Get first 10 RealEstateSpecializedSubFields
     * const realEstateSpecializedSubFields = await prisma.realEstateSpecializedSubField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const realEstateSpecializedSubFieldWithIdOnly = await prisma.realEstateSpecializedSubField.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RealEstateSpecializedSubFieldFindManyArgs>(
      args?: SelectSubset<T, RealEstateSpecializedSubFieldFindManyArgs>
    ): Prisma.PrismaPromise<Array<RealEstateSpecializedSubFieldGetPayload<T>>>

    /**
     * Create a RealEstateSpecializedSubField.
     * @param {RealEstateSpecializedSubFieldCreateArgs} args - Arguments to create a RealEstateSpecializedSubField.
     * @example
     * // Create one RealEstateSpecializedSubField
     * const RealEstateSpecializedSubField = await prisma.realEstateSpecializedSubField.create({
     *   data: {
     *     // ... data to create a RealEstateSpecializedSubField
     *   }
     * })
     * 
    **/
    create<T extends RealEstateSpecializedSubFieldCreateArgs>(
      args: SelectSubset<T, RealEstateSpecializedSubFieldCreateArgs>
    ): Prisma__RealEstateSpecializedSubFieldClient<RealEstateSpecializedSubFieldGetPayload<T>>

    /**
     * Create many RealEstateSpecializedSubFields.
     *     @param {RealEstateSpecializedSubFieldCreateManyArgs} args - Arguments to create many RealEstateSpecializedSubFields.
     *     @example
     *     // Create many RealEstateSpecializedSubFields
     *     const realEstateSpecializedSubField = await prisma.realEstateSpecializedSubField.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RealEstateSpecializedSubFieldCreateManyArgs>(
      args?: SelectSubset<T, RealEstateSpecializedSubFieldCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RealEstateSpecializedSubField.
     * @param {RealEstateSpecializedSubFieldDeleteArgs} args - Arguments to delete one RealEstateSpecializedSubField.
     * @example
     * // Delete one RealEstateSpecializedSubField
     * const RealEstateSpecializedSubField = await prisma.realEstateSpecializedSubField.delete({
     *   where: {
     *     // ... filter to delete one RealEstateSpecializedSubField
     *   }
     * })
     * 
    **/
    delete<T extends RealEstateSpecializedSubFieldDeleteArgs>(
      args: SelectSubset<T, RealEstateSpecializedSubFieldDeleteArgs>
    ): Prisma__RealEstateSpecializedSubFieldClient<RealEstateSpecializedSubFieldGetPayload<T>>

    /**
     * Update one RealEstateSpecializedSubField.
     * @param {RealEstateSpecializedSubFieldUpdateArgs} args - Arguments to update one RealEstateSpecializedSubField.
     * @example
     * // Update one RealEstateSpecializedSubField
     * const realEstateSpecializedSubField = await prisma.realEstateSpecializedSubField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RealEstateSpecializedSubFieldUpdateArgs>(
      args: SelectSubset<T, RealEstateSpecializedSubFieldUpdateArgs>
    ): Prisma__RealEstateSpecializedSubFieldClient<RealEstateSpecializedSubFieldGetPayload<T>>

    /**
     * Delete zero or more RealEstateSpecializedSubFields.
     * @param {RealEstateSpecializedSubFieldDeleteManyArgs} args - Arguments to filter RealEstateSpecializedSubFields to delete.
     * @example
     * // Delete a few RealEstateSpecializedSubFields
     * const { count } = await prisma.realEstateSpecializedSubField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RealEstateSpecializedSubFieldDeleteManyArgs>(
      args?: SelectSubset<T, RealEstateSpecializedSubFieldDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RealEstateSpecializedSubFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedSubFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RealEstateSpecializedSubFields
     * const realEstateSpecializedSubField = await prisma.realEstateSpecializedSubField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RealEstateSpecializedSubFieldUpdateManyArgs>(
      args: SelectSubset<T, RealEstateSpecializedSubFieldUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RealEstateSpecializedSubField.
     * @param {RealEstateSpecializedSubFieldUpsertArgs} args - Arguments to update or create a RealEstateSpecializedSubField.
     * @example
     * // Update or create a RealEstateSpecializedSubField
     * const realEstateSpecializedSubField = await prisma.realEstateSpecializedSubField.upsert({
     *   create: {
     *     // ... data to create a RealEstateSpecializedSubField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RealEstateSpecializedSubField we want to update
     *   }
     * })
    **/
    upsert<T extends RealEstateSpecializedSubFieldUpsertArgs>(
      args: SelectSubset<T, RealEstateSpecializedSubFieldUpsertArgs>
    ): Prisma__RealEstateSpecializedSubFieldClient<RealEstateSpecializedSubFieldGetPayload<T>>

    /**
     * Count the number of RealEstateSpecializedSubFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedSubFieldCountArgs} args - Arguments to filter RealEstateSpecializedSubFields to count.
     * @example
     * // Count the number of RealEstateSpecializedSubFields
     * const count = await prisma.realEstateSpecializedSubField.count({
     *   where: {
     *     // ... the filter for the RealEstateSpecializedSubFields we want to count
     *   }
     * })
    **/
    count<T extends RealEstateSpecializedSubFieldCountArgs>(
      args?: Subset<T, RealEstateSpecializedSubFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealEstateSpecializedSubFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RealEstateSpecializedSubField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedSubFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RealEstateSpecializedSubFieldAggregateArgs>(args: Subset<T, RealEstateSpecializedSubFieldAggregateArgs>): Prisma.PrismaPromise<GetRealEstateSpecializedSubFieldAggregateType<T>>

    /**
     * Group by RealEstateSpecializedSubField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealEstateSpecializedSubFieldGroupByArgs} args - Group by arguments.
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
      T extends RealEstateSpecializedSubFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealEstateSpecializedSubFieldGroupByArgs['orderBy'] }
        : { orderBy?: RealEstateSpecializedSubFieldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RealEstateSpecializedSubFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealEstateSpecializedSubFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RealEstateSpecializedSubField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RealEstateSpecializedSubFieldClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    super<T extends RealEstateSpecializedSuperFieldArgs= {}>(args?: Subset<T, RealEstateSpecializedSuperFieldArgs>): Prisma__RealEstateSpecializedSuperFieldClient<RealEstateSpecializedSuperFieldGetPayload<T> | Null>;

    real_estate_agents<T extends RealEstateSpecializedSubField$real_estate_agentsArgs= {}>(args?: Subset<T, RealEstateSpecializedSubField$real_estate_agentsArgs>): Prisma.PrismaPromise<Array<RealEstateAgentGetPayload<T>>| Null>;

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
   * RealEstateSpecializedSubField base type for findUnique actions
   */
  export type RealEstateSpecializedSubFieldFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSubField
     */
    select?: RealEstateSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSubFieldInclude | null
    /**
     * Filter, which RealEstateSpecializedSubField to fetch.
     */
    where: RealEstateSpecializedSubFieldWhereUniqueInput
  }

  /**
   * RealEstateSpecializedSubField findUnique
   */
  export interface RealEstateSpecializedSubFieldFindUniqueArgs extends RealEstateSpecializedSubFieldFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealEstateSpecializedSubField findUniqueOrThrow
   */
  export type RealEstateSpecializedSubFieldFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSubField
     */
    select?: RealEstateSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSubFieldInclude | null
    /**
     * Filter, which RealEstateSpecializedSubField to fetch.
     */
    where: RealEstateSpecializedSubFieldWhereUniqueInput
  }


  /**
   * RealEstateSpecializedSubField base type for findFirst actions
   */
  export type RealEstateSpecializedSubFieldFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSubField
     */
    select?: RealEstateSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSubFieldInclude | null
    /**
     * Filter, which RealEstateSpecializedSubField to fetch.
     */
    where?: RealEstateSpecializedSubFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSpecializedSubFields to fetch.
     */
    orderBy?: Enumerable<RealEstateSpecializedSubFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstateSpecializedSubFields.
     */
    cursor?: RealEstateSpecializedSubFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSpecializedSubFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSpecializedSubFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstateSpecializedSubFields.
     */
    distinct?: Enumerable<RealEstateSpecializedSubFieldScalarFieldEnum>
  }

  /**
   * RealEstateSpecializedSubField findFirst
   */
  export interface RealEstateSpecializedSubFieldFindFirstArgs extends RealEstateSpecializedSubFieldFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealEstateSpecializedSubField findFirstOrThrow
   */
  export type RealEstateSpecializedSubFieldFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSubField
     */
    select?: RealEstateSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSubFieldInclude | null
    /**
     * Filter, which RealEstateSpecializedSubField to fetch.
     */
    where?: RealEstateSpecializedSubFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSpecializedSubFields to fetch.
     */
    orderBy?: Enumerable<RealEstateSpecializedSubFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealEstateSpecializedSubFields.
     */
    cursor?: RealEstateSpecializedSubFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSpecializedSubFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSpecializedSubFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealEstateSpecializedSubFields.
     */
    distinct?: Enumerable<RealEstateSpecializedSubFieldScalarFieldEnum>
  }


  /**
   * RealEstateSpecializedSubField findMany
   */
  export type RealEstateSpecializedSubFieldFindManyArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSubField
     */
    select?: RealEstateSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSubFieldInclude | null
    /**
     * Filter, which RealEstateSpecializedSubFields to fetch.
     */
    where?: RealEstateSpecializedSubFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealEstateSpecializedSubFields to fetch.
     */
    orderBy?: Enumerable<RealEstateSpecializedSubFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RealEstateSpecializedSubFields.
     */
    cursor?: RealEstateSpecializedSubFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealEstateSpecializedSubFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealEstateSpecializedSubFields.
     */
    skip?: number
    distinct?: Enumerable<RealEstateSpecializedSubFieldScalarFieldEnum>
  }


  /**
   * RealEstateSpecializedSubField create
   */
  export type RealEstateSpecializedSubFieldCreateArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSubField
     */
    select?: RealEstateSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSubFieldInclude | null
    /**
     * The data needed to create a RealEstateSpecializedSubField.
     */
    data: XOR<RealEstateSpecializedSubFieldCreateInput, RealEstateSpecializedSubFieldUncheckedCreateInput>
  }


  /**
   * RealEstateSpecializedSubField createMany
   */
  export type RealEstateSpecializedSubFieldCreateManyArgs = {
    /**
     * The data used to create many RealEstateSpecializedSubFields.
     */
    data: Enumerable<RealEstateSpecializedSubFieldCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RealEstateSpecializedSubField update
   */
  export type RealEstateSpecializedSubFieldUpdateArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSubField
     */
    select?: RealEstateSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSubFieldInclude | null
    /**
     * The data needed to update a RealEstateSpecializedSubField.
     */
    data: XOR<RealEstateSpecializedSubFieldUpdateInput, RealEstateSpecializedSubFieldUncheckedUpdateInput>
    /**
     * Choose, which RealEstateSpecializedSubField to update.
     */
    where: RealEstateSpecializedSubFieldWhereUniqueInput
  }


  /**
   * RealEstateSpecializedSubField updateMany
   */
  export type RealEstateSpecializedSubFieldUpdateManyArgs = {
    /**
     * The data used to update RealEstateSpecializedSubFields.
     */
    data: XOR<RealEstateSpecializedSubFieldUpdateManyMutationInput, RealEstateSpecializedSubFieldUncheckedUpdateManyInput>
    /**
     * Filter which RealEstateSpecializedSubFields to update
     */
    where?: RealEstateSpecializedSubFieldWhereInput
  }


  /**
   * RealEstateSpecializedSubField upsert
   */
  export type RealEstateSpecializedSubFieldUpsertArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSubField
     */
    select?: RealEstateSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSubFieldInclude | null
    /**
     * The filter to search for the RealEstateSpecializedSubField to update in case it exists.
     */
    where: RealEstateSpecializedSubFieldWhereUniqueInput
    /**
     * In case the RealEstateSpecializedSubField found by the `where` argument doesn't exist, create a new RealEstateSpecializedSubField with this data.
     */
    create: XOR<RealEstateSpecializedSubFieldCreateInput, RealEstateSpecializedSubFieldUncheckedCreateInput>
    /**
     * In case the RealEstateSpecializedSubField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RealEstateSpecializedSubFieldUpdateInput, RealEstateSpecializedSubFieldUncheckedUpdateInput>
  }


  /**
   * RealEstateSpecializedSubField delete
   */
  export type RealEstateSpecializedSubFieldDeleteArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSubField
     */
    select?: RealEstateSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSubFieldInclude | null
    /**
     * Filter which RealEstateSpecializedSubField to delete.
     */
    where: RealEstateSpecializedSubFieldWhereUniqueInput
  }


  /**
   * RealEstateSpecializedSubField deleteMany
   */
  export type RealEstateSpecializedSubFieldDeleteManyArgs = {
    /**
     * Filter which RealEstateSpecializedSubFields to delete
     */
    where?: RealEstateSpecializedSubFieldWhereInput
  }


  /**
   * RealEstateSpecializedSubField.real_estate_agents
   */
  export type RealEstateSpecializedSubField$real_estate_agentsArgs = {
    /**
     * Select specific fields to fetch from the RealEstateAgent
     */
    select?: RealEstateAgentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateAgentInclude | null
    where?: RealEstateAgentWhereInput
    orderBy?: Enumerable<RealEstateAgentOrderByWithRelationInput>
    cursor?: RealEstateAgentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RealEstateAgentScalarFieldEnum>
  }


  /**
   * RealEstateSpecializedSubField without action
   */
  export type RealEstateSpecializedSubFieldArgs = {
    /**
     * Select specific fields to fetch from the RealEstateSpecializedSubField
     */
    select?: RealEstateSpecializedSubFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RealEstateSpecializedSubFieldInclude | null
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
    ratee_id: string | null
    rater_id: string | null
    rate: number | null
  }

  export type BusinessRateMaxAggregateOutputType = {
    id: string | null
    category_id: string | null
    ratee_id: string | null
    rater_id: string | null
    rate: number | null
  }

  export type BusinessRateCountAggregateOutputType = {
    id: number
    category_id: number
    ratee_id: number
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
    ratee_id?: true
    rater_id?: true
    rate?: true
  }

  export type BusinessRateMaxAggregateInputType = {
    id?: true
    category_id?: true
    ratee_id?: true
    rater_id?: true
    rate?: true
  }

  export type BusinessRateCountAggregateInputType = {
    id?: true
    category_id?: true
    ratee_id?: true
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
    ratee_id: string
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
    ratee_id?: boolean
    rater_id?: boolean
    rate?: boolean
    ratee?: boolean | BusinessUserArgs
    rater?: boolean | CustomerArgs
    category?: boolean | BusinessRateCategoryArgs
  }


  export type BusinessRateInclude = {
    ratee?: boolean | BusinessUserArgs
    rater?: boolean | CustomerArgs
    category?: boolean | BusinessRateCategoryArgs
  }

  export type BusinessRateGetPayload<S extends boolean | null | undefined | BusinessRateArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BusinessRate :
    S extends undefined ? never :
    S extends { include: any } & (BusinessRateArgs | BusinessRateFindManyArgs)
    ? BusinessRate  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ratee' ? BusinessUserGetPayload<S['include'][P]> :
        P extends 'rater' ? CustomerGetPayload<S['include'][P]> :
        P extends 'category' ? BusinessRateCategoryGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BusinessRateArgs | BusinessRateFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ratee' ? BusinessUserGetPayload<S['select'][P]> :
        P extends 'rater' ? CustomerGetPayload<S['select'][P]> :
        P extends 'category' ? BusinessRateCategoryGetPayload<S['select'][P]> :  P extends keyof BusinessRate ? BusinessRate[P] : never
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

    ratee<T extends BusinessUserArgs= {}>(args?: Subset<T, BusinessUserArgs>): Prisma__BusinessUserClient<BusinessUserGetPayload<T> | Null>;

    rater<T extends CustomerArgs= {}>(args?: Subset<T, CustomerArgs>): Prisma__CustomerClient<CustomerGetPayload<T> | Null>;

    category<T extends BusinessRateCategoryArgs= {}>(args?: Subset<T, BusinessRateCategoryArgs>): Prisma__BusinessRateCategoryClient<BusinessRateCategoryGetPayload<T> | Null>;

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
   * Model BusinessReview
   */


  export type AggregateBusinessReview = {
    _count: BusinessReviewCountAggregateOutputType | null
    _min: BusinessReviewMinAggregateOutputType | null
    _max: BusinessReviewMaxAggregateOutputType | null
  }

  export type BusinessReviewMinAggregateOutputType = {
    id: string | null
    reviewee_id: string | null
    reviewer_id: string | null
    review: string | null
  }

  export type BusinessReviewMaxAggregateOutputType = {
    id: string | null
    reviewee_id: string | null
    reviewer_id: string | null
    review: string | null
  }

  export type BusinessReviewCountAggregateOutputType = {
    id: number
    reviewee_id: number
    reviewer_id: number
    review: number
    _all: number
  }


  export type BusinessReviewMinAggregateInputType = {
    id?: true
    reviewee_id?: true
    reviewer_id?: true
    review?: true
  }

  export type BusinessReviewMaxAggregateInputType = {
    id?: true
    reviewee_id?: true
    reviewer_id?: true
    review?: true
  }

  export type BusinessReviewCountAggregateInputType = {
    id?: true
    reviewee_id?: true
    reviewer_id?: true
    review?: true
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
    reviewee_id: string
    reviewer_id: string
    review: string
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
    reviewee_id?: boolean
    reviewer_id?: boolean
    review?: boolean
    reviewee?: boolean | BusinessUserArgs
    reviewer?: boolean | CustomerArgs
  }


  export type BusinessReviewInclude = {
    reviewee?: boolean | BusinessUserArgs
    reviewer?: boolean | CustomerArgs
  }

  export type BusinessReviewGetPayload<S extends boolean | null | undefined | BusinessReviewArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BusinessReview :
    S extends undefined ? never :
    S extends { include: any } & (BusinessReviewArgs | BusinessReviewFindManyArgs)
    ? BusinessReview  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'reviewee' ? BusinessUserGetPayload<S['include'][P]> :
        P extends 'reviewer' ? CustomerGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BusinessReviewArgs | BusinessReviewFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'reviewee' ? BusinessUserGetPayload<S['select'][P]> :
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

    reviewee<T extends BusinessUserArgs= {}>(args?: Subset<T, BusinessUserArgs>): Prisma__BusinessUserClient<BusinessUserGetPayload<T> | Null>;

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
    title: string | null
    author_id: string | null
    board_id: string | null
  }

  export type BoardArticleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    author_id: string | null
    board_id: string | null
  }

  export type BoardArticleCountAggregateOutputType = {
    id: number
    title: number
    author_id: number
    board_id: number
    _all: number
  }


  export type BoardArticleMinAggregateInputType = {
    id?: true
    title?: true
    author_id?: true
    board_id?: true
  }

  export type BoardArticleMaxAggregateInputType = {
    id?: true
    title?: true
    author_id?: true
    board_id?: true
  }

  export type BoardArticleCountAggregateInputType = {
    id?: true
    title?: true
    author_id?: true
    board_id?: true
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
    title: string
    author_id: string
    board_id: string
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
    title?: boolean
    author_id?: boolean
    board_id?: boolean
    author?: boolean | UserArgs
    board?: boolean | BoardArgs
    contents?: boolean | BoardArticle$contentsArgs
    comments?: boolean | BoardArticle$commentsArgs
    _count?: boolean | BoardArticleCountOutputTypeArgs
  }


  export type BoardArticleInclude = {
    author?: boolean | UserArgs
    board?: boolean | BoardArgs
    contents?: boolean | BoardArticle$contentsArgs
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
        P extends 'author' ? UserGetPayload<S['include'][P]> :
        P extends 'board' ? BoardGetPayload<S['include'][P]> :
        P extends 'contents' ? Array < BoardArticleContentGetPayload<S['include'][P]>>  :
        P extends 'comments' ? Array < BoardCommentGetPayload<S['include'][P]>>  :
        P extends '_count' ? BoardArticleCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BoardArticleArgs | BoardArticleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? UserGetPayload<S['select'][P]> :
        P extends 'board' ? BoardGetPayload<S['select'][P]> :
        P extends 'contents' ? Array < BoardArticleContentGetPayload<S['select'][P]>>  :
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

    author<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    board<T extends BoardArgs= {}>(args?: Subset<T, BoardArgs>): Prisma__BoardClient<BoardGetPayload<T> | Null>;

    contents<T extends BoardArticle$contentsArgs= {}>(args?: Subset<T, BoardArticle$contentsArgs>): Prisma.PrismaPromise<Array<BoardArticleContentGetPayload<T>>| Null>;

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
   * BoardArticle.contents
   */
  export type BoardArticle$contentsArgs = {
    /**
     * Select specific fields to fetch from the BoardArticleContent
     */
    select?: BoardArticleContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleContentInclude | null
    where?: BoardArticleContentWhereInput
    orderBy?: Enumerable<BoardArticleContentOrderByWithRelationInput>
    cursor?: BoardArticleContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BoardArticleContentScalarFieldEnum>
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
   * Model BoardArticleContent
   */


  export type AggregateBoardArticleContent = {
    _count: BoardArticleContentCountAggregateOutputType | null
    _min: BoardArticleContentMinAggregateOutputType | null
    _max: BoardArticleContentMaxAggregateOutputType | null
  }

  export type BoardArticleContentMinAggregateOutputType = {
    id: string | null
    text: string | null
    created_at: Date | null
    article_id: string | null
  }

  export type BoardArticleContentMaxAggregateOutputType = {
    id: string | null
    text: string | null
    created_at: Date | null
    article_id: string | null
  }

  export type BoardArticleContentCountAggregateOutputType = {
    id: number
    text: number
    created_at: number
    article_id: number
    _all: number
  }


  export type BoardArticleContentMinAggregateInputType = {
    id?: true
    text?: true
    created_at?: true
    article_id?: true
  }

  export type BoardArticleContentMaxAggregateInputType = {
    id?: true
    text?: true
    created_at?: true
    article_id?: true
  }

  export type BoardArticleContentCountAggregateInputType = {
    id?: true
    text?: true
    created_at?: true
    article_id?: true
    _all?: true
  }

  export type BoardArticleContentAggregateArgs = {
    /**
     * Filter which BoardArticleContent to aggregate.
     */
    where?: BoardArticleContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardArticleContents to fetch.
     */
    orderBy?: Enumerable<BoardArticleContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardArticleContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardArticleContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardArticleContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoardArticleContents
    **/
    _count?: true | BoardArticleContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardArticleContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardArticleContentMaxAggregateInputType
  }

  export type GetBoardArticleContentAggregateType<T extends BoardArticleContentAggregateArgs> = {
        [P in keyof T & keyof AggregateBoardArticleContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardArticleContent[P]>
      : GetScalarType<T[P], AggregateBoardArticleContent[P]>
  }




  export type BoardArticleContentGroupByArgs = {
    where?: BoardArticleContentWhereInput
    orderBy?: Enumerable<BoardArticleContentOrderByWithAggregationInput>
    by: BoardArticleContentScalarFieldEnum[]
    having?: BoardArticleContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardArticleContentCountAggregateInputType | true
    _min?: BoardArticleContentMinAggregateInputType
    _max?: BoardArticleContentMaxAggregateInputType
  }


  export type BoardArticleContentGroupByOutputType = {
    id: string
    text: string
    created_at: Date
    article_id: string
    _count: BoardArticleContentCountAggregateOutputType | null
    _min: BoardArticleContentMinAggregateOutputType | null
    _max: BoardArticleContentMaxAggregateOutputType | null
  }

  type GetBoardArticleContentGroupByPayload<T extends BoardArticleContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BoardArticleContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardArticleContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardArticleContentGroupByOutputType[P]>
            : GetScalarType<T[P], BoardArticleContentGroupByOutputType[P]>
        }
      >
    >


  export type BoardArticleContentSelect = {
    id?: boolean
    text?: boolean
    created_at?: boolean
    article_id?: boolean
    article?: boolean | BoardArticleArgs
  }


  export type BoardArticleContentInclude = {
    article?: boolean | BoardArticleArgs
  }

  export type BoardArticleContentGetPayload<S extends boolean | null | undefined | BoardArticleContentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BoardArticleContent :
    S extends undefined ? never :
    S extends { include: any } & (BoardArticleContentArgs | BoardArticleContentFindManyArgs)
    ? BoardArticleContent  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'article' ? BoardArticleGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BoardArticleContentArgs | BoardArticleContentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'article' ? BoardArticleGetPayload<S['select'][P]> :  P extends keyof BoardArticleContent ? BoardArticleContent[P] : never
  } 
      : BoardArticleContent


  type BoardArticleContentCountArgs = 
    Omit<BoardArticleContentFindManyArgs, 'select' | 'include'> & {
      select?: BoardArticleContentCountAggregateInputType | true
    }

  export interface BoardArticleContentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BoardArticleContent that matches the filter.
     * @param {BoardArticleContentFindUniqueArgs} args - Arguments to find a BoardArticleContent
     * @example
     * // Get one BoardArticleContent
     * const boardArticleContent = await prisma.boardArticleContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardArticleContentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BoardArticleContentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BoardArticleContent'> extends True ? Prisma__BoardArticleContentClient<BoardArticleContentGetPayload<T>> : Prisma__BoardArticleContentClient<BoardArticleContentGetPayload<T> | null, null>

    /**
     * Find one BoardArticleContent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BoardArticleContentFindUniqueOrThrowArgs} args - Arguments to find a BoardArticleContent
     * @example
     * // Get one BoardArticleContent
     * const boardArticleContent = await prisma.boardArticleContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BoardArticleContentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BoardArticleContentFindUniqueOrThrowArgs>
    ): Prisma__BoardArticleContentClient<BoardArticleContentGetPayload<T>>

    /**
     * Find the first BoardArticleContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardArticleContentFindFirstArgs} args - Arguments to find a BoardArticleContent
     * @example
     * // Get one BoardArticleContent
     * const boardArticleContent = await prisma.boardArticleContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardArticleContentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BoardArticleContentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BoardArticleContent'> extends True ? Prisma__BoardArticleContentClient<BoardArticleContentGetPayload<T>> : Prisma__BoardArticleContentClient<BoardArticleContentGetPayload<T> | null, null>

    /**
     * Find the first BoardArticleContent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardArticleContentFindFirstOrThrowArgs} args - Arguments to find a BoardArticleContent
     * @example
     * // Get one BoardArticleContent
     * const boardArticleContent = await prisma.boardArticleContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BoardArticleContentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BoardArticleContentFindFirstOrThrowArgs>
    ): Prisma__BoardArticleContentClient<BoardArticleContentGetPayload<T>>

    /**
     * Find zero or more BoardArticleContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardArticleContentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardArticleContents
     * const boardArticleContents = await prisma.boardArticleContent.findMany()
     * 
     * // Get first 10 BoardArticleContents
     * const boardArticleContents = await prisma.boardArticleContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardArticleContentWithIdOnly = await prisma.boardArticleContent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardArticleContentFindManyArgs>(
      args?: SelectSubset<T, BoardArticleContentFindManyArgs>
    ): Prisma.PrismaPromise<Array<BoardArticleContentGetPayload<T>>>

    /**
     * Create a BoardArticleContent.
     * @param {BoardArticleContentCreateArgs} args - Arguments to create a BoardArticleContent.
     * @example
     * // Create one BoardArticleContent
     * const BoardArticleContent = await prisma.boardArticleContent.create({
     *   data: {
     *     // ... data to create a BoardArticleContent
     *   }
     * })
     * 
    **/
    create<T extends BoardArticleContentCreateArgs>(
      args: SelectSubset<T, BoardArticleContentCreateArgs>
    ): Prisma__BoardArticleContentClient<BoardArticleContentGetPayload<T>>

    /**
     * Create many BoardArticleContents.
     *     @param {BoardArticleContentCreateManyArgs} args - Arguments to create many BoardArticleContents.
     *     @example
     *     // Create many BoardArticleContents
     *     const boardArticleContent = await prisma.boardArticleContent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoardArticleContentCreateManyArgs>(
      args?: SelectSubset<T, BoardArticleContentCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BoardArticleContent.
     * @param {BoardArticleContentDeleteArgs} args - Arguments to delete one BoardArticleContent.
     * @example
     * // Delete one BoardArticleContent
     * const BoardArticleContent = await prisma.boardArticleContent.delete({
     *   where: {
     *     // ... filter to delete one BoardArticleContent
     *   }
     * })
     * 
    **/
    delete<T extends BoardArticleContentDeleteArgs>(
      args: SelectSubset<T, BoardArticleContentDeleteArgs>
    ): Prisma__BoardArticleContentClient<BoardArticleContentGetPayload<T>>

    /**
     * Update one BoardArticleContent.
     * @param {BoardArticleContentUpdateArgs} args - Arguments to update one BoardArticleContent.
     * @example
     * // Update one BoardArticleContent
     * const boardArticleContent = await prisma.boardArticleContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardArticleContentUpdateArgs>(
      args: SelectSubset<T, BoardArticleContentUpdateArgs>
    ): Prisma__BoardArticleContentClient<BoardArticleContentGetPayload<T>>

    /**
     * Delete zero or more BoardArticleContents.
     * @param {BoardArticleContentDeleteManyArgs} args - Arguments to filter BoardArticleContents to delete.
     * @example
     * // Delete a few BoardArticleContents
     * const { count } = await prisma.boardArticleContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardArticleContentDeleteManyArgs>(
      args?: SelectSubset<T, BoardArticleContentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoardArticleContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardArticleContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardArticleContents
     * const boardArticleContent = await prisma.boardArticleContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardArticleContentUpdateManyArgs>(
      args: SelectSubset<T, BoardArticleContentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BoardArticleContent.
     * @param {BoardArticleContentUpsertArgs} args - Arguments to update or create a BoardArticleContent.
     * @example
     * // Update or create a BoardArticleContent
     * const boardArticleContent = await prisma.boardArticleContent.upsert({
     *   create: {
     *     // ... data to create a BoardArticleContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardArticleContent we want to update
     *   }
     * })
    **/
    upsert<T extends BoardArticleContentUpsertArgs>(
      args: SelectSubset<T, BoardArticleContentUpsertArgs>
    ): Prisma__BoardArticleContentClient<BoardArticleContentGetPayload<T>>

    /**
     * Count the number of BoardArticleContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardArticleContentCountArgs} args - Arguments to filter BoardArticleContents to count.
     * @example
     * // Count the number of BoardArticleContents
     * const count = await prisma.boardArticleContent.count({
     *   where: {
     *     // ... the filter for the BoardArticleContents we want to count
     *   }
     * })
    **/
    count<T extends BoardArticleContentCountArgs>(
      args?: Subset<T, BoardArticleContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardArticleContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoardArticleContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardArticleContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardArticleContentAggregateArgs>(args: Subset<T, BoardArticleContentAggregateArgs>): Prisma.PrismaPromise<GetBoardArticleContentAggregateType<T>>

    /**
     * Group by BoardArticleContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardArticleContentGroupByArgs} args - Group by arguments.
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
      T extends BoardArticleContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardArticleContentGroupByArgs['orderBy'] }
        : { orderBy?: BoardArticleContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoardArticleContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardArticleContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BoardArticleContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BoardArticleContentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * BoardArticleContent base type for findUnique actions
   */
  export type BoardArticleContentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BoardArticleContent
     */
    select?: BoardArticleContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleContentInclude | null
    /**
     * Filter, which BoardArticleContent to fetch.
     */
    where: BoardArticleContentWhereUniqueInput
  }

  /**
   * BoardArticleContent findUnique
   */
  export interface BoardArticleContentFindUniqueArgs extends BoardArticleContentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BoardArticleContent findUniqueOrThrow
   */
  export type BoardArticleContentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BoardArticleContent
     */
    select?: BoardArticleContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleContentInclude | null
    /**
     * Filter, which BoardArticleContent to fetch.
     */
    where: BoardArticleContentWhereUniqueInput
  }


  /**
   * BoardArticleContent base type for findFirst actions
   */
  export type BoardArticleContentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BoardArticleContent
     */
    select?: BoardArticleContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleContentInclude | null
    /**
     * Filter, which BoardArticleContent to fetch.
     */
    where?: BoardArticleContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardArticleContents to fetch.
     */
    orderBy?: Enumerable<BoardArticleContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardArticleContents.
     */
    cursor?: BoardArticleContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardArticleContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardArticleContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardArticleContents.
     */
    distinct?: Enumerable<BoardArticleContentScalarFieldEnum>
  }

  /**
   * BoardArticleContent findFirst
   */
  export interface BoardArticleContentFindFirstArgs extends BoardArticleContentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BoardArticleContent findFirstOrThrow
   */
  export type BoardArticleContentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BoardArticleContent
     */
    select?: BoardArticleContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleContentInclude | null
    /**
     * Filter, which BoardArticleContent to fetch.
     */
    where?: BoardArticleContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardArticleContents to fetch.
     */
    orderBy?: Enumerable<BoardArticleContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardArticleContents.
     */
    cursor?: BoardArticleContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardArticleContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardArticleContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardArticleContents.
     */
    distinct?: Enumerable<BoardArticleContentScalarFieldEnum>
  }


  /**
   * BoardArticleContent findMany
   */
  export type BoardArticleContentFindManyArgs = {
    /**
     * Select specific fields to fetch from the BoardArticleContent
     */
    select?: BoardArticleContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleContentInclude | null
    /**
     * Filter, which BoardArticleContents to fetch.
     */
    where?: BoardArticleContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardArticleContents to fetch.
     */
    orderBy?: Enumerable<BoardArticleContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoardArticleContents.
     */
    cursor?: BoardArticleContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardArticleContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardArticleContents.
     */
    skip?: number
    distinct?: Enumerable<BoardArticleContentScalarFieldEnum>
  }


  /**
   * BoardArticleContent create
   */
  export type BoardArticleContentCreateArgs = {
    /**
     * Select specific fields to fetch from the BoardArticleContent
     */
    select?: BoardArticleContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleContentInclude | null
    /**
     * The data needed to create a BoardArticleContent.
     */
    data: XOR<BoardArticleContentCreateInput, BoardArticleContentUncheckedCreateInput>
  }


  /**
   * BoardArticleContent createMany
   */
  export type BoardArticleContentCreateManyArgs = {
    /**
     * The data used to create many BoardArticleContents.
     */
    data: Enumerable<BoardArticleContentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BoardArticleContent update
   */
  export type BoardArticleContentUpdateArgs = {
    /**
     * Select specific fields to fetch from the BoardArticleContent
     */
    select?: BoardArticleContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleContentInclude | null
    /**
     * The data needed to update a BoardArticleContent.
     */
    data: XOR<BoardArticleContentUpdateInput, BoardArticleContentUncheckedUpdateInput>
    /**
     * Choose, which BoardArticleContent to update.
     */
    where: BoardArticleContentWhereUniqueInput
  }


  /**
   * BoardArticleContent updateMany
   */
  export type BoardArticleContentUpdateManyArgs = {
    /**
     * The data used to update BoardArticleContents.
     */
    data: XOR<BoardArticleContentUpdateManyMutationInput, BoardArticleContentUncheckedUpdateManyInput>
    /**
     * Filter which BoardArticleContents to update
     */
    where?: BoardArticleContentWhereInput
  }


  /**
   * BoardArticleContent upsert
   */
  export type BoardArticleContentUpsertArgs = {
    /**
     * Select specific fields to fetch from the BoardArticleContent
     */
    select?: BoardArticleContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleContentInclude | null
    /**
     * The filter to search for the BoardArticleContent to update in case it exists.
     */
    where: BoardArticleContentWhereUniqueInput
    /**
     * In case the BoardArticleContent found by the `where` argument doesn't exist, create a new BoardArticleContent with this data.
     */
    create: XOR<BoardArticleContentCreateInput, BoardArticleContentUncheckedCreateInput>
    /**
     * In case the BoardArticleContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardArticleContentUpdateInput, BoardArticleContentUncheckedUpdateInput>
  }


  /**
   * BoardArticleContent delete
   */
  export type BoardArticleContentDeleteArgs = {
    /**
     * Select specific fields to fetch from the BoardArticleContent
     */
    select?: BoardArticleContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleContentInclude | null
    /**
     * Filter which BoardArticleContent to delete.
     */
    where: BoardArticleContentWhereUniqueInput
  }


  /**
   * BoardArticleContent deleteMany
   */
  export type BoardArticleContentDeleteManyArgs = {
    /**
     * Filter which BoardArticleContents to delete
     */
    where?: BoardArticleContentWhereInput
  }


  /**
   * BoardArticleContent without action
   */
  export type BoardArticleContentArgs = {
    /**
     * Select specific fields to fetch from the BoardArticleContent
     */
    select?: BoardArticleContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardArticleContentInclude | null
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
    author_id: string | null
    article_id: string | null
  }

  export type BoardCommentMaxAggregateOutputType = {
    id: string | null
    author_id: string | null
    article_id: string | null
  }

  export type BoardCommentCountAggregateOutputType = {
    id: number
    author_id: number
    article_id: number
    _all: number
  }


  export type BoardCommentMinAggregateInputType = {
    id?: true
    author_id?: true
    article_id?: true
  }

  export type BoardCommentMaxAggregateInputType = {
    id?: true
    author_id?: true
    article_id?: true
  }

  export type BoardCommentCountAggregateInputType = {
    id?: true
    author_id?: true
    article_id?: true
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
    author_id: string
    article_id: string
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
    author_id?: boolean
    article_id?: boolean
    author?: boolean | UserArgs
    article?: boolean | BoardArticleArgs
    contents?: boolean | BoardComment$contentsArgs
    _count?: boolean | BoardCommentCountOutputTypeArgs
  }


  export type BoardCommentInclude = {
    author?: boolean | UserArgs
    article?: boolean | BoardArticleArgs
    contents?: boolean | BoardComment$contentsArgs
    _count?: boolean | BoardCommentCountOutputTypeArgs
  }

  export type BoardCommentGetPayload<S extends boolean | null | undefined | BoardCommentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BoardComment :
    S extends undefined ? never :
    S extends { include: any } & (BoardCommentArgs | BoardCommentFindManyArgs)
    ? BoardComment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'author' ? UserGetPayload<S['include'][P]> :
        P extends 'article' ? BoardArticleGetPayload<S['include'][P]> :
        P extends 'contents' ? Array < BoardCommentContentGetPayload<S['include'][P]>>  :
        P extends '_count' ? BoardCommentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BoardCommentArgs | BoardCommentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? UserGetPayload<S['select'][P]> :
        P extends 'article' ? BoardArticleGetPayload<S['select'][P]> :
        P extends 'contents' ? Array < BoardCommentContentGetPayload<S['select'][P]>>  :
        P extends '_count' ? BoardCommentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof BoardComment ? BoardComment[P] : never
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

    author<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    article<T extends BoardArticleArgs= {}>(args?: Subset<T, BoardArticleArgs>): Prisma__BoardArticleClient<BoardArticleGetPayload<T> | Null>;

    contents<T extends BoardComment$contentsArgs= {}>(args?: Subset<T, BoardComment$contentsArgs>): Prisma.PrismaPromise<Array<BoardCommentContentGetPayload<T>>| Null>;

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
   * BoardComment.contents
   */
  export type BoardComment$contentsArgs = {
    /**
     * Select specific fields to fetch from the BoardCommentContent
     */
    select?: BoardCommentContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentContentInclude | null
    where?: BoardCommentContentWhereInput
    orderBy?: Enumerable<BoardCommentContentOrderByWithRelationInput>
    cursor?: BoardCommentContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BoardCommentContentScalarFieldEnum>
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
   * Model BoardCommentContent
   */


  export type AggregateBoardCommentContent = {
    _count: BoardCommentContentCountAggregateOutputType | null
    _min: BoardCommentContentMinAggregateOutputType | null
    _max: BoardCommentContentMaxAggregateOutputType | null
  }

  export type BoardCommentContentMinAggregateOutputType = {
    id: string | null
    text: string | null
    created_at: Date | null
    comment_id: string | null
  }

  export type BoardCommentContentMaxAggregateOutputType = {
    id: string | null
    text: string | null
    created_at: Date | null
    comment_id: string | null
  }

  export type BoardCommentContentCountAggregateOutputType = {
    id: number
    text: number
    created_at: number
    comment_id: number
    _all: number
  }


  export type BoardCommentContentMinAggregateInputType = {
    id?: true
    text?: true
    created_at?: true
    comment_id?: true
  }

  export type BoardCommentContentMaxAggregateInputType = {
    id?: true
    text?: true
    created_at?: true
    comment_id?: true
  }

  export type BoardCommentContentCountAggregateInputType = {
    id?: true
    text?: true
    created_at?: true
    comment_id?: true
    _all?: true
  }

  export type BoardCommentContentAggregateArgs = {
    /**
     * Filter which BoardCommentContent to aggregate.
     */
    where?: BoardCommentContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardCommentContents to fetch.
     */
    orderBy?: Enumerable<BoardCommentContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardCommentContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardCommentContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardCommentContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoardCommentContents
    **/
    _count?: true | BoardCommentContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardCommentContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardCommentContentMaxAggregateInputType
  }

  export type GetBoardCommentContentAggregateType<T extends BoardCommentContentAggregateArgs> = {
        [P in keyof T & keyof AggregateBoardCommentContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardCommentContent[P]>
      : GetScalarType<T[P], AggregateBoardCommentContent[P]>
  }




  export type BoardCommentContentGroupByArgs = {
    where?: BoardCommentContentWhereInput
    orderBy?: Enumerable<BoardCommentContentOrderByWithAggregationInput>
    by: BoardCommentContentScalarFieldEnum[]
    having?: BoardCommentContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCommentContentCountAggregateInputType | true
    _min?: BoardCommentContentMinAggregateInputType
    _max?: BoardCommentContentMaxAggregateInputType
  }


  export type BoardCommentContentGroupByOutputType = {
    id: string
    text: string
    created_at: Date
    comment_id: string
    _count: BoardCommentContentCountAggregateOutputType | null
    _min: BoardCommentContentMinAggregateOutputType | null
    _max: BoardCommentContentMaxAggregateOutputType | null
  }

  type GetBoardCommentContentGroupByPayload<T extends BoardCommentContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BoardCommentContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardCommentContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardCommentContentGroupByOutputType[P]>
            : GetScalarType<T[P], BoardCommentContentGroupByOutputType[P]>
        }
      >
    >


  export type BoardCommentContentSelect = {
    id?: boolean
    text?: boolean
    created_at?: boolean
    comment_id?: boolean
    comment?: boolean | BoardCommentArgs
  }


  export type BoardCommentContentInclude = {
    comment?: boolean | BoardCommentArgs
  }

  export type BoardCommentContentGetPayload<S extends boolean | null | undefined | BoardCommentContentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BoardCommentContent :
    S extends undefined ? never :
    S extends { include: any } & (BoardCommentContentArgs | BoardCommentContentFindManyArgs)
    ? BoardCommentContent  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'comment' ? BoardCommentGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BoardCommentContentArgs | BoardCommentContentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'comment' ? BoardCommentGetPayload<S['select'][P]> :  P extends keyof BoardCommentContent ? BoardCommentContent[P] : never
  } 
      : BoardCommentContent


  type BoardCommentContentCountArgs = 
    Omit<BoardCommentContentFindManyArgs, 'select' | 'include'> & {
      select?: BoardCommentContentCountAggregateInputType | true
    }

  export interface BoardCommentContentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BoardCommentContent that matches the filter.
     * @param {BoardCommentContentFindUniqueArgs} args - Arguments to find a BoardCommentContent
     * @example
     * // Get one BoardCommentContent
     * const boardCommentContent = await prisma.boardCommentContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardCommentContentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BoardCommentContentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BoardCommentContent'> extends True ? Prisma__BoardCommentContentClient<BoardCommentContentGetPayload<T>> : Prisma__BoardCommentContentClient<BoardCommentContentGetPayload<T> | null, null>

    /**
     * Find one BoardCommentContent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BoardCommentContentFindUniqueOrThrowArgs} args - Arguments to find a BoardCommentContent
     * @example
     * // Get one BoardCommentContent
     * const boardCommentContent = await prisma.boardCommentContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BoardCommentContentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BoardCommentContentFindUniqueOrThrowArgs>
    ): Prisma__BoardCommentContentClient<BoardCommentContentGetPayload<T>>

    /**
     * Find the first BoardCommentContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCommentContentFindFirstArgs} args - Arguments to find a BoardCommentContent
     * @example
     * // Get one BoardCommentContent
     * const boardCommentContent = await prisma.boardCommentContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardCommentContentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BoardCommentContentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BoardCommentContent'> extends True ? Prisma__BoardCommentContentClient<BoardCommentContentGetPayload<T>> : Prisma__BoardCommentContentClient<BoardCommentContentGetPayload<T> | null, null>

    /**
     * Find the first BoardCommentContent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCommentContentFindFirstOrThrowArgs} args - Arguments to find a BoardCommentContent
     * @example
     * // Get one BoardCommentContent
     * const boardCommentContent = await prisma.boardCommentContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BoardCommentContentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BoardCommentContentFindFirstOrThrowArgs>
    ): Prisma__BoardCommentContentClient<BoardCommentContentGetPayload<T>>

    /**
     * Find zero or more BoardCommentContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCommentContentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardCommentContents
     * const boardCommentContents = await prisma.boardCommentContent.findMany()
     * 
     * // Get first 10 BoardCommentContents
     * const boardCommentContents = await prisma.boardCommentContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardCommentContentWithIdOnly = await prisma.boardCommentContent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardCommentContentFindManyArgs>(
      args?: SelectSubset<T, BoardCommentContentFindManyArgs>
    ): Prisma.PrismaPromise<Array<BoardCommentContentGetPayload<T>>>

    /**
     * Create a BoardCommentContent.
     * @param {BoardCommentContentCreateArgs} args - Arguments to create a BoardCommentContent.
     * @example
     * // Create one BoardCommentContent
     * const BoardCommentContent = await prisma.boardCommentContent.create({
     *   data: {
     *     // ... data to create a BoardCommentContent
     *   }
     * })
     * 
    **/
    create<T extends BoardCommentContentCreateArgs>(
      args: SelectSubset<T, BoardCommentContentCreateArgs>
    ): Prisma__BoardCommentContentClient<BoardCommentContentGetPayload<T>>

    /**
     * Create many BoardCommentContents.
     *     @param {BoardCommentContentCreateManyArgs} args - Arguments to create many BoardCommentContents.
     *     @example
     *     // Create many BoardCommentContents
     *     const boardCommentContent = await prisma.boardCommentContent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoardCommentContentCreateManyArgs>(
      args?: SelectSubset<T, BoardCommentContentCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BoardCommentContent.
     * @param {BoardCommentContentDeleteArgs} args - Arguments to delete one BoardCommentContent.
     * @example
     * // Delete one BoardCommentContent
     * const BoardCommentContent = await prisma.boardCommentContent.delete({
     *   where: {
     *     // ... filter to delete one BoardCommentContent
     *   }
     * })
     * 
    **/
    delete<T extends BoardCommentContentDeleteArgs>(
      args: SelectSubset<T, BoardCommentContentDeleteArgs>
    ): Prisma__BoardCommentContentClient<BoardCommentContentGetPayload<T>>

    /**
     * Update one BoardCommentContent.
     * @param {BoardCommentContentUpdateArgs} args - Arguments to update one BoardCommentContent.
     * @example
     * // Update one BoardCommentContent
     * const boardCommentContent = await prisma.boardCommentContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardCommentContentUpdateArgs>(
      args: SelectSubset<T, BoardCommentContentUpdateArgs>
    ): Prisma__BoardCommentContentClient<BoardCommentContentGetPayload<T>>

    /**
     * Delete zero or more BoardCommentContents.
     * @param {BoardCommentContentDeleteManyArgs} args - Arguments to filter BoardCommentContents to delete.
     * @example
     * // Delete a few BoardCommentContents
     * const { count } = await prisma.boardCommentContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardCommentContentDeleteManyArgs>(
      args?: SelectSubset<T, BoardCommentContentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoardCommentContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCommentContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardCommentContents
     * const boardCommentContent = await prisma.boardCommentContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardCommentContentUpdateManyArgs>(
      args: SelectSubset<T, BoardCommentContentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BoardCommentContent.
     * @param {BoardCommentContentUpsertArgs} args - Arguments to update or create a BoardCommentContent.
     * @example
     * // Update or create a BoardCommentContent
     * const boardCommentContent = await prisma.boardCommentContent.upsert({
     *   create: {
     *     // ... data to create a BoardCommentContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardCommentContent we want to update
     *   }
     * })
    **/
    upsert<T extends BoardCommentContentUpsertArgs>(
      args: SelectSubset<T, BoardCommentContentUpsertArgs>
    ): Prisma__BoardCommentContentClient<BoardCommentContentGetPayload<T>>

    /**
     * Count the number of BoardCommentContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCommentContentCountArgs} args - Arguments to filter BoardCommentContents to count.
     * @example
     * // Count the number of BoardCommentContents
     * const count = await prisma.boardCommentContent.count({
     *   where: {
     *     // ... the filter for the BoardCommentContents we want to count
     *   }
     * })
    **/
    count<T extends BoardCommentContentCountArgs>(
      args?: Subset<T, BoardCommentContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCommentContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoardCommentContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCommentContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardCommentContentAggregateArgs>(args: Subset<T, BoardCommentContentAggregateArgs>): Prisma.PrismaPromise<GetBoardCommentContentAggregateType<T>>

    /**
     * Group by BoardCommentContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCommentContentGroupByArgs} args - Group by arguments.
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
      T extends BoardCommentContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardCommentContentGroupByArgs['orderBy'] }
        : { orderBy?: BoardCommentContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoardCommentContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardCommentContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BoardCommentContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BoardCommentContentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    comment<T extends BoardCommentArgs= {}>(args?: Subset<T, BoardCommentArgs>): Prisma__BoardCommentClient<BoardCommentGetPayload<T> | Null>;

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
   * BoardCommentContent base type for findUnique actions
   */
  export type BoardCommentContentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BoardCommentContent
     */
    select?: BoardCommentContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentContentInclude | null
    /**
     * Filter, which BoardCommentContent to fetch.
     */
    where: BoardCommentContentWhereUniqueInput
  }

  /**
   * BoardCommentContent findUnique
   */
  export interface BoardCommentContentFindUniqueArgs extends BoardCommentContentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BoardCommentContent findUniqueOrThrow
   */
  export type BoardCommentContentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BoardCommentContent
     */
    select?: BoardCommentContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentContentInclude | null
    /**
     * Filter, which BoardCommentContent to fetch.
     */
    where: BoardCommentContentWhereUniqueInput
  }


  /**
   * BoardCommentContent base type for findFirst actions
   */
  export type BoardCommentContentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BoardCommentContent
     */
    select?: BoardCommentContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentContentInclude | null
    /**
     * Filter, which BoardCommentContent to fetch.
     */
    where?: BoardCommentContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardCommentContents to fetch.
     */
    orderBy?: Enumerable<BoardCommentContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardCommentContents.
     */
    cursor?: BoardCommentContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardCommentContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardCommentContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardCommentContents.
     */
    distinct?: Enumerable<BoardCommentContentScalarFieldEnum>
  }

  /**
   * BoardCommentContent findFirst
   */
  export interface BoardCommentContentFindFirstArgs extends BoardCommentContentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BoardCommentContent findFirstOrThrow
   */
  export type BoardCommentContentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BoardCommentContent
     */
    select?: BoardCommentContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentContentInclude | null
    /**
     * Filter, which BoardCommentContent to fetch.
     */
    where?: BoardCommentContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardCommentContents to fetch.
     */
    orderBy?: Enumerable<BoardCommentContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardCommentContents.
     */
    cursor?: BoardCommentContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardCommentContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardCommentContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardCommentContents.
     */
    distinct?: Enumerable<BoardCommentContentScalarFieldEnum>
  }


  /**
   * BoardCommentContent findMany
   */
  export type BoardCommentContentFindManyArgs = {
    /**
     * Select specific fields to fetch from the BoardCommentContent
     */
    select?: BoardCommentContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentContentInclude | null
    /**
     * Filter, which BoardCommentContents to fetch.
     */
    where?: BoardCommentContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardCommentContents to fetch.
     */
    orderBy?: Enumerable<BoardCommentContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoardCommentContents.
     */
    cursor?: BoardCommentContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardCommentContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardCommentContents.
     */
    skip?: number
    distinct?: Enumerable<BoardCommentContentScalarFieldEnum>
  }


  /**
   * BoardCommentContent create
   */
  export type BoardCommentContentCreateArgs = {
    /**
     * Select specific fields to fetch from the BoardCommentContent
     */
    select?: BoardCommentContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentContentInclude | null
    /**
     * The data needed to create a BoardCommentContent.
     */
    data: XOR<BoardCommentContentCreateInput, BoardCommentContentUncheckedCreateInput>
  }


  /**
   * BoardCommentContent createMany
   */
  export type BoardCommentContentCreateManyArgs = {
    /**
     * The data used to create many BoardCommentContents.
     */
    data: Enumerable<BoardCommentContentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BoardCommentContent update
   */
  export type BoardCommentContentUpdateArgs = {
    /**
     * Select specific fields to fetch from the BoardCommentContent
     */
    select?: BoardCommentContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentContentInclude | null
    /**
     * The data needed to update a BoardCommentContent.
     */
    data: XOR<BoardCommentContentUpdateInput, BoardCommentContentUncheckedUpdateInput>
    /**
     * Choose, which BoardCommentContent to update.
     */
    where: BoardCommentContentWhereUniqueInput
  }


  /**
   * BoardCommentContent updateMany
   */
  export type BoardCommentContentUpdateManyArgs = {
    /**
     * The data used to update BoardCommentContents.
     */
    data: XOR<BoardCommentContentUpdateManyMutationInput, BoardCommentContentUncheckedUpdateManyInput>
    /**
     * Filter which BoardCommentContents to update
     */
    where?: BoardCommentContentWhereInput
  }


  /**
   * BoardCommentContent upsert
   */
  export type BoardCommentContentUpsertArgs = {
    /**
     * Select specific fields to fetch from the BoardCommentContent
     */
    select?: BoardCommentContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentContentInclude | null
    /**
     * The filter to search for the BoardCommentContent to update in case it exists.
     */
    where: BoardCommentContentWhereUniqueInput
    /**
     * In case the BoardCommentContent found by the `where` argument doesn't exist, create a new BoardCommentContent with this data.
     */
    create: XOR<BoardCommentContentCreateInput, BoardCommentContentUncheckedCreateInput>
    /**
     * In case the BoardCommentContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardCommentContentUpdateInput, BoardCommentContentUncheckedUpdateInput>
  }


  /**
   * BoardCommentContent delete
   */
  export type BoardCommentContentDeleteArgs = {
    /**
     * Select specific fields to fetch from the BoardCommentContent
     */
    select?: BoardCommentContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentContentInclude | null
    /**
     * Filter which BoardCommentContent to delete.
     */
    where: BoardCommentContentWhereUniqueInput
  }


  /**
   * BoardCommentContent deleteMany
   */
  export type BoardCommentContentDeleteManyArgs = {
    /**
     * Filter which BoardCommentContents to delete
     */
    where?: BoardCommentContentWhereInput
  }


  /**
   * BoardCommentContent without action
   */
  export type BoardCommentContentArgs = {
    /**
     * Select specific fields to fetch from the BoardCommentContent
     */
    select?: BoardCommentContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardCommentContentInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AuthenticationScalarFieldEnum: {
    id: 'id',
    oauth_sub: 'oauth_sub',
    oauth_type: 'oauth_type',
    business_user_id: 'business_user_id',
    customer_id: 'customer_id'
  };

  export type AuthenticationScalarFieldEnum = (typeof AuthenticationScalarFieldEnum)[keyof typeof AuthenticationScalarFieldEnum]


  export const BoardArticleContentScalarFieldEnum: {
    id: 'id',
    text: 'text',
    created_at: 'created_at',
    article_id: 'article_id'
  };

  export type BoardArticleContentScalarFieldEnum = (typeof BoardArticleContentScalarFieldEnum)[keyof typeof BoardArticleContentScalarFieldEnum]


  export const BoardArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author_id: 'author_id',
    board_id: 'board_id'
  };

  export type BoardArticleScalarFieldEnum = (typeof BoardArticleScalarFieldEnum)[keyof typeof BoardArticleScalarFieldEnum]


  export const BoardCommentContentScalarFieldEnum: {
    id: 'id',
    text: 'text',
    created_at: 'created_at',
    comment_id: 'comment_id'
  };

  export type BoardCommentContentScalarFieldEnum = (typeof BoardCommentContentScalarFieldEnum)[keyof typeof BoardCommentContentScalarFieldEnum]


  export const BoardCommentScalarFieldEnum: {
    id: 'id',
    author_id: 'author_id',
    article_id: 'article_id'
  };

  export type BoardCommentScalarFieldEnum = (typeof BoardCommentScalarFieldEnum)[keyof typeof BoardCommentScalarFieldEnum]


  export const BoardScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const BusinessRateCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BusinessRateCategoryScalarFieldEnum = (typeof BusinessRateCategoryScalarFieldEnum)[keyof typeof BusinessRateCategoryScalarFieldEnum]


  export const BusinessRateScalarFieldEnum: {
    id: 'id',
    category_id: 'category_id',
    ratee_id: 'ratee_id',
    rater_id: 'rater_id',
    rate: 'rate'
  };

  export type BusinessRateScalarFieldEnum = (typeof BusinessRateScalarFieldEnum)[keyof typeof BusinessRateScalarFieldEnum]


  export const BusinessReviewScalarFieldEnum: {
    id: 'id',
    reviewee_id: 'reviewee_id',
    reviewer_id: 'reviewer_id',
    review: 'review'
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
    business_registration_num: 'business_registration_num',
    specialized_field_id: 'specialized_field_id'
  };

  export type HomeCareCompanyScalarFieldEnum = (typeof HomeCareCompanyScalarFieldEnum)[keyof typeof HomeCareCompanyScalarFieldEnum]


  export const HomeCareIntroductionImageScalarFieldEnum: {
    id: 'id',
    image_url: 'image_url',
    company_id: 'company_id'
  };

  export type HomeCareIntroductionImageScalarFieldEnum = (typeof HomeCareIntroductionImageScalarFieldEnum)[keyof typeof HomeCareIntroductionImageScalarFieldEnum]


  export const HomeCareSpecializedSubFieldScalarFieldEnum: {
    id: 'id',
    name: 'name',
    super_id: 'super_id'
  };

  export type HomeCareSpecializedSubFieldScalarFieldEnum = (typeof HomeCareSpecializedSubFieldScalarFieldEnum)[keyof typeof HomeCareSpecializedSubFieldScalarFieldEnum]


  export const HomeCareSpecializedSuperFieldScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type HomeCareSpecializedSuperFieldScalarFieldEnum = (typeof HomeCareSpecializedSuperFieldScalarFieldEnum)[keyof typeof HomeCareSpecializedSuperFieldScalarFieldEnum]


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
    real_estate_phone: 'real_estate_phone',
    licensed_agent_name: 'licensed_agent_name',
    specialized_field_id: 'specialized_field_id'
  };

  export type RealEstateAgentScalarFieldEnum = (typeof RealEstateAgentScalarFieldEnum)[keyof typeof RealEstateAgentScalarFieldEnum]


  export const RealEstatePropertyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    main_image_url: 'main_image_url',
    agent_id: 'agent_id'
  };

  export type RealEstatePropertyScalarFieldEnum = (typeof RealEstatePropertyScalarFieldEnum)[keyof typeof RealEstatePropertyScalarFieldEnum]


  export const RealEstateSpecializedSubFieldScalarFieldEnum: {
    id: 'id',
    name: 'name',
    super_id: 'super_id'
  };

  export type RealEstateSpecializedSubFieldScalarFieldEnum = (typeof RealEstateSpecializedSubFieldScalarFieldEnum)[keyof typeof RealEstateSpecializedSubFieldScalarFieldEnum]


  export const RealEstateSpecializedSuperFieldScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RealEstateSpecializedSuperFieldScalarFieldEnum = (typeof RealEstateSpecializedSuperFieldScalarFieldEnum)[keyof typeof RealEstateSpecializedSuperFieldScalarFieldEnum]


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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    email_verified: 'email_verified',
    phone: 'phone',
    phone_verified: 'phone_verified',
    address_first: 'address_first',
    address_second: 'address_second',
    profile_image: 'profile_image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type AuthenticationWhereInput = {
    AND?: Enumerable<AuthenticationWhereInput>
    OR?: Enumerable<AuthenticationWhereInput>
    NOT?: Enumerable<AuthenticationWhereInput>
    id?: StringFilter | string
    oauth_sub?: StringFilter | string
    oauth_type?: StringFilter | string
    business_user_id?: StringNullableFilter | string | null
    customer_id?: StringNullableFilter | string | null
    business_user?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput> | null
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput> | null
  }

  export type AuthenticationOrderByWithRelationInput = {
    id?: SortOrder
    oauth_sub?: SortOrder
    oauth_type?: SortOrder
    business_user_id?: SortOrder
    customer_id?: SortOrder
    business_user?: BusinessUserOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type AuthenticationWhereUniqueInput = {
    id?: string
    oauth_sub_oauth_type?: AuthenticationOauth_subOauth_typeCompoundUniqueInput
  }

  export type AuthenticationOrderByWithAggregationInput = {
    id?: SortOrder
    oauth_sub?: SortOrder
    oauth_type?: SortOrder
    business_user_id?: SortOrder
    customer_id?: SortOrder
    _count?: AuthenticationCountOrderByAggregateInput
    _max?: AuthenticationMaxOrderByAggregateInput
    _min?: AuthenticationMinOrderByAggregateInput
  }

  export type AuthenticationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AuthenticationScalarWhereWithAggregatesInput>
    OR?: Enumerable<AuthenticationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AuthenticationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    oauth_sub?: StringWithAggregatesFilter | string
    oauth_type?: StringWithAggregatesFilter | string
    business_user_id?: StringNullableWithAggregatesFilter | string | null
    customer_id?: StringNullableWithAggregatesFilter | string | null
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    email?: StringNullableFilter | string | null
    email_verified?: BoolFilter | boolean
    phone?: StringNullableFilter | string | null
    phone_verified?: BoolFilter | boolean
    address_first?: StringNullableFilter | string | null
    address_second?: StringNullableFilter | string | null
    profile_image?: StringNullableFilter | string | null
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput> | null
    business_user?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput> | null
    board_articles?: BoardArticleListRelationFilter
    board_comments?: BoardCommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    phone_verified?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    business_user?: BusinessUserOrderByWithRelationInput
    board_articles?: BoardArticleOrderByRelationAggregateInput
    board_comments?: BoardCommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    phone_verified?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringNullableWithAggregatesFilter | string | null
    email_verified?: BoolWithAggregatesFilter | boolean
    phone?: StringNullableWithAggregatesFilter | string | null
    phone_verified?: BoolWithAggregatesFilter | boolean
    address_first?: StringNullableWithAggregatesFilter | string | null
    address_second?: StringNullableWithAggregatesFilter | string | null
    profile_image?: StringNullableWithAggregatesFilter | string | null
  }

  export type CustomerWhereInput = {
    AND?: Enumerable<CustomerWhereInput>
    OR?: Enumerable<CustomerWhereInput>
    NOT?: Enumerable<CustomerWhereInput>
    id?: StringFilter | string
    birth?: StringNullableFilter | string | null
    gender?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    authentications?: AuthenticationListRelationFilter
    rates?: BusinessRateListRelationFilter
    reviews?: BusinessReviewListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    user?: UserOrderByWithRelationInput
    authentications?: AuthenticationOrderByRelationAggregateInput
    rates?: BusinessRateOrderByRelationAggregateInput
    reviews?: BusinessReviewOrderByRelationAggregateInput
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
    introduction_title?: StringFilter | string
    introduction_content?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    authentications?: AuthenticationListRelationFilter
    real_estate_agent?: XOR<RealEstateAgentRelationFilter, RealEstateAgentWhereInput> | null
    home_care_company?: XOR<HomeCareCompanyRelationFilter, HomeCareCompanyWhereInput> | null
    rates?: BusinessRateListRelationFilter
    reviews?: BusinessReviewListRelationFilter
  }

  export type BusinessUserOrderByWithRelationInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    user?: UserOrderByWithRelationInput
    authentications?: AuthenticationOrderByRelationAggregateInput
    real_estate_agent?: RealEstateAgentOrderByWithRelationInput
    home_care_company?: HomeCareCompanyOrderByWithRelationInput
    rates?: BusinessRateOrderByRelationAggregateInput
    reviews?: BusinessReviewOrderByRelationAggregateInput
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
    introduction_title?: StringWithAggregatesFilter | string
    introduction_content?: StringWithAggregatesFilter | string
  }

  export type RealEstateAgentWhereInput = {
    AND?: Enumerable<RealEstateAgentWhereInput>
    OR?: Enumerable<RealEstateAgentWhereInput>
    NOT?: Enumerable<RealEstateAgentWhereInput>
    id?: StringFilter | string
    is_licensed?: BoolFilter | boolean
    real_estate_num?: StringFilter | string
    real_estate_name?: StringFilter | string
    real_estate_phone?: StringFilter | string
    licensed_agent_name?: StringFilter | string
    specialized_field_id?: StringFilter | string
    business?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput>
    specialized_field?: XOR<RealEstateSpecializedSubFieldRelationFilter, RealEstateSpecializedSubFieldWhereInput>
    properties?: RealEstatePropertyListRelationFilter
  }

  export type RealEstateAgentOrderByWithRelationInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    real_estate_num?: SortOrder
    real_estate_name?: SortOrder
    real_estate_phone?: SortOrder
    licensed_agent_name?: SortOrder
    specialized_field_id?: SortOrder
    business?: BusinessUserOrderByWithRelationInput
    specialized_field?: RealEstateSpecializedSubFieldOrderByWithRelationInput
    properties?: RealEstatePropertyOrderByRelationAggregateInput
  }

  export type RealEstateAgentWhereUniqueInput = {
    id?: string
  }

  export type RealEstateAgentOrderByWithAggregationInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    real_estate_num?: SortOrder
    real_estate_name?: SortOrder
    real_estate_phone?: SortOrder
    licensed_agent_name?: SortOrder
    specialized_field_id?: SortOrder
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
    real_estate_phone?: StringWithAggregatesFilter | string
    licensed_agent_name?: StringWithAggregatesFilter | string
    specialized_field_id?: StringWithAggregatesFilter | string
  }

  export type HomeCareCompanyWhereInput = {
    AND?: Enumerable<HomeCareCompanyWhereInput>
    OR?: Enumerable<HomeCareCompanyWhereInput>
    NOT?: Enumerable<HomeCareCompanyWhereInput>
    id?: StringFilter | string
    business_registration_num?: StringFilter | string
    specialized_field_id?: StringFilter | string
    business?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput>
    specialized_field?: XOR<HomeCareSpecializedSubFieldRelationFilter, HomeCareSpecializedSubFieldWhereInput>
    introduction_images?: HomeCareIntroductionImageListRelationFilter
  }

  export type HomeCareCompanyOrderByWithRelationInput = {
    id?: SortOrder
    business_registration_num?: SortOrder
    specialized_field_id?: SortOrder
    business?: BusinessUserOrderByWithRelationInput
    specialized_field?: HomeCareSpecializedSubFieldOrderByWithRelationInput
    introduction_images?: HomeCareIntroductionImageOrderByRelationAggregateInput
  }

  export type HomeCareCompanyWhereUniqueInput = {
    id?: string
  }

  export type HomeCareCompanyOrderByWithAggregationInput = {
    id?: SortOrder
    business_registration_num?: SortOrder
    specialized_field_id?: SortOrder
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
    specialized_field_id?: StringWithAggregatesFilter | string
  }

  export type HomeCareIntroductionImageWhereInput = {
    AND?: Enumerable<HomeCareIntroductionImageWhereInput>
    OR?: Enumerable<HomeCareIntroductionImageWhereInput>
    NOT?: Enumerable<HomeCareIntroductionImageWhereInput>
    id?: StringFilter | string
    image_url?: StringFilter | string
    company_id?: StringFilter | string
    company?: XOR<HomeCareCompanyRelationFilter, HomeCareCompanyWhereInput>
  }

  export type HomeCareIntroductionImageOrderByWithRelationInput = {
    id?: SortOrder
    image_url?: SortOrder
    company_id?: SortOrder
    company?: HomeCareCompanyOrderByWithRelationInput
  }

  export type HomeCareIntroductionImageWhereUniqueInput = {
    id?: string
  }

  export type HomeCareIntroductionImageOrderByWithAggregationInput = {
    id?: SortOrder
    image_url?: SortOrder
    company_id?: SortOrder
    _count?: HomeCareIntroductionImageCountOrderByAggregateInput
    _max?: HomeCareIntroductionImageMaxOrderByAggregateInput
    _min?: HomeCareIntroductionImageMinOrderByAggregateInput
  }

  export type HomeCareIntroductionImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HomeCareIntroductionImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<HomeCareIntroductionImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HomeCareIntroductionImageScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    image_url?: StringWithAggregatesFilter | string
    company_id?: StringWithAggregatesFilter | string
  }

  export type RealEstatePropertyWhereInput = {
    AND?: Enumerable<RealEstatePropertyWhereInput>
    OR?: Enumerable<RealEstatePropertyWhereInput>
    NOT?: Enumerable<RealEstatePropertyWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    main_image_url?: StringFilter | string
    agent_id?: StringFilter | string
    agent?: XOR<RealEstateAgentRelationFilter, RealEstateAgentWhereInput>
  }

  export type RealEstatePropertyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    main_image_url?: SortOrder
    agent_id?: SortOrder
    agent?: RealEstateAgentOrderByWithRelationInput
  }

  export type RealEstatePropertyWhereUniqueInput = {
    id?: string
  }

  export type RealEstatePropertyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    main_image_url?: SortOrder
    agent_id?: SortOrder
    _count?: RealEstatePropertyCountOrderByAggregateInput
    _max?: RealEstatePropertyMaxOrderByAggregateInput
    _min?: RealEstatePropertyMinOrderByAggregateInput
  }

  export type RealEstatePropertyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RealEstatePropertyScalarWhereWithAggregatesInput>
    OR?: Enumerable<RealEstatePropertyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RealEstatePropertyScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    main_image_url?: StringWithAggregatesFilter | string
    agent_id?: StringWithAggregatesFilter | string
  }

  export type HomeCareSpecializedSuperFieldWhereInput = {
    AND?: Enumerable<HomeCareSpecializedSuperFieldWhereInput>
    OR?: Enumerable<HomeCareSpecializedSuperFieldWhereInput>
    NOT?: Enumerable<HomeCareSpecializedSuperFieldWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    sub?: HomeCareSpecializedSubFieldListRelationFilter
  }

  export type HomeCareSpecializedSuperFieldOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sub?: HomeCareSpecializedSubFieldOrderByRelationAggregateInput
  }

  export type HomeCareSpecializedSuperFieldWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type HomeCareSpecializedSuperFieldOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: HomeCareSpecializedSuperFieldCountOrderByAggregateInput
    _max?: HomeCareSpecializedSuperFieldMaxOrderByAggregateInput
    _min?: HomeCareSpecializedSuperFieldMinOrderByAggregateInput
  }

  export type HomeCareSpecializedSuperFieldScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HomeCareSpecializedSuperFieldScalarWhereWithAggregatesInput>
    OR?: Enumerable<HomeCareSpecializedSuperFieldScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HomeCareSpecializedSuperFieldScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type HomeCareSpecializedSubFieldWhereInput = {
    AND?: Enumerable<HomeCareSpecializedSubFieldWhereInput>
    OR?: Enumerable<HomeCareSpecializedSubFieldWhereInput>
    NOT?: Enumerable<HomeCareSpecializedSubFieldWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    super_id?: StringFilter | string
    super?: XOR<HomeCareSpecializedSuperFieldRelationFilter, HomeCareSpecializedSuperFieldWhereInput>
    home_care_companies?: HomeCareCompanyListRelationFilter
  }

  export type HomeCareSpecializedSubFieldOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
    super?: HomeCareSpecializedSuperFieldOrderByWithRelationInput
    home_care_companies?: HomeCareCompanyOrderByRelationAggregateInput
  }

  export type HomeCareSpecializedSubFieldWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type HomeCareSpecializedSubFieldOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
    _count?: HomeCareSpecializedSubFieldCountOrderByAggregateInput
    _max?: HomeCareSpecializedSubFieldMaxOrderByAggregateInput
    _min?: HomeCareSpecializedSubFieldMinOrderByAggregateInput
  }

  export type HomeCareSpecializedSubFieldScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HomeCareSpecializedSubFieldScalarWhereWithAggregatesInput>
    OR?: Enumerable<HomeCareSpecializedSubFieldScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HomeCareSpecializedSubFieldScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    super_id?: StringWithAggregatesFilter | string
  }

  export type RealEstateSpecializedSuperFieldWhereInput = {
    AND?: Enumerable<RealEstateSpecializedSuperFieldWhereInput>
    OR?: Enumerable<RealEstateSpecializedSuperFieldWhereInput>
    NOT?: Enumerable<RealEstateSpecializedSuperFieldWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    sub?: RealEstateSpecializedSubFieldListRelationFilter
  }

  export type RealEstateSpecializedSuperFieldOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sub?: RealEstateSpecializedSubFieldOrderByRelationAggregateInput
  }

  export type RealEstateSpecializedSuperFieldWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type RealEstateSpecializedSuperFieldOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RealEstateSpecializedSuperFieldCountOrderByAggregateInput
    _max?: RealEstateSpecializedSuperFieldMaxOrderByAggregateInput
    _min?: RealEstateSpecializedSuperFieldMinOrderByAggregateInput
  }

  export type RealEstateSpecializedSuperFieldScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RealEstateSpecializedSuperFieldScalarWhereWithAggregatesInput>
    OR?: Enumerable<RealEstateSpecializedSuperFieldScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RealEstateSpecializedSuperFieldScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type RealEstateSpecializedSubFieldWhereInput = {
    AND?: Enumerable<RealEstateSpecializedSubFieldWhereInput>
    OR?: Enumerable<RealEstateSpecializedSubFieldWhereInput>
    NOT?: Enumerable<RealEstateSpecializedSubFieldWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    super_id?: StringFilter | string
    super?: XOR<RealEstateSpecializedSuperFieldRelationFilter, RealEstateSpecializedSuperFieldWhereInput>
    real_estate_agents?: RealEstateAgentListRelationFilter
  }

  export type RealEstateSpecializedSubFieldOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
    super?: RealEstateSpecializedSuperFieldOrderByWithRelationInput
    real_estate_agents?: RealEstateAgentOrderByRelationAggregateInput
  }

  export type RealEstateSpecializedSubFieldWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type RealEstateSpecializedSubFieldOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
    _count?: RealEstateSpecializedSubFieldCountOrderByAggregateInput
    _max?: RealEstateSpecializedSubFieldMaxOrderByAggregateInput
    _min?: RealEstateSpecializedSubFieldMinOrderByAggregateInput
  }

  export type RealEstateSpecializedSubFieldScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RealEstateSpecializedSubFieldScalarWhereWithAggregatesInput>
    OR?: Enumerable<RealEstateSpecializedSubFieldScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RealEstateSpecializedSubFieldScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    super_id?: StringWithAggregatesFilter | string
  }

  export type BusinessRateWhereInput = {
    AND?: Enumerable<BusinessRateWhereInput>
    OR?: Enumerable<BusinessRateWhereInput>
    NOT?: Enumerable<BusinessRateWhereInput>
    id?: StringFilter | string
    category_id?: StringFilter | string
    ratee_id?: StringFilter | string
    rater_id?: StringFilter | string
    rate?: IntFilter | number
    ratee?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput>
    rater?: XOR<CustomerRelationFilter, CustomerWhereInput>
    category?: XOR<BusinessRateCategoryRelationFilter, BusinessRateCategoryWhereInput>
  }

  export type BusinessRateOrderByWithRelationInput = {
    id?: SortOrder
    category_id?: SortOrder
    ratee_id?: SortOrder
    rater_id?: SortOrder
    rate?: SortOrder
    ratee?: BusinessUserOrderByWithRelationInput
    rater?: CustomerOrderByWithRelationInput
    category?: BusinessRateCategoryOrderByWithRelationInput
  }

  export type BusinessRateWhereUniqueInput = {
    id?: string
  }

  export type BusinessRateOrderByWithAggregationInput = {
    id?: SortOrder
    category_id?: SortOrder
    ratee_id?: SortOrder
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
    ratee_id?: StringWithAggregatesFilter | string
    rater_id?: StringWithAggregatesFilter | string
    rate?: IntWithAggregatesFilter | number
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

  export type BusinessReviewWhereInput = {
    AND?: Enumerable<BusinessReviewWhereInput>
    OR?: Enumerable<BusinessReviewWhereInput>
    NOT?: Enumerable<BusinessReviewWhereInput>
    id?: StringFilter | string
    reviewee_id?: StringFilter | string
    reviewer_id?: StringFilter | string
    review?: StringFilter | string
    reviewee?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput>
    reviewer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }

  export type BusinessReviewOrderByWithRelationInput = {
    id?: SortOrder
    reviewee_id?: SortOrder
    reviewer_id?: SortOrder
    review?: SortOrder
    reviewee?: BusinessUserOrderByWithRelationInput
    reviewer?: CustomerOrderByWithRelationInput
  }

  export type BusinessReviewWhereUniqueInput = {
    id?: string
  }

  export type BusinessReviewOrderByWithAggregationInput = {
    id?: SortOrder
    reviewee_id?: SortOrder
    reviewer_id?: SortOrder
    review?: SortOrder
    _count?: BusinessReviewCountOrderByAggregateInput
    _max?: BusinessReviewMaxOrderByAggregateInput
    _min?: BusinessReviewMinOrderByAggregateInput
  }

  export type BusinessReviewScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BusinessReviewScalarWhereWithAggregatesInput>
    OR?: Enumerable<BusinessReviewScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BusinessReviewScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    reviewee_id?: StringWithAggregatesFilter | string
    reviewer_id?: StringWithAggregatesFilter | string
    review?: StringWithAggregatesFilter | string
  }

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
    title?: StringFilter | string
    author_id?: StringFilter | string
    board_id?: StringFilter | string
    author?: XOR<UserRelationFilter, UserWhereInput>
    board?: XOR<BoardRelationFilter, BoardWhereInput>
    contents?: BoardArticleContentListRelationFilter
    comments?: BoardCommentListRelationFilter
  }

  export type BoardArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author_id?: SortOrder
    board_id?: SortOrder
    author?: UserOrderByWithRelationInput
    board?: BoardOrderByWithRelationInput
    contents?: BoardArticleContentOrderByRelationAggregateInput
    comments?: BoardCommentOrderByRelationAggregateInput
  }

  export type BoardArticleWhereUniqueInput = {
    id?: string
  }

  export type BoardArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author_id?: SortOrder
    board_id?: SortOrder
    _count?: BoardArticleCountOrderByAggregateInput
    _max?: BoardArticleMaxOrderByAggregateInput
    _min?: BoardArticleMinOrderByAggregateInput
  }

  export type BoardArticleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoardArticleScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoardArticleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoardArticleScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    author_id?: StringWithAggregatesFilter | string
    board_id?: StringWithAggregatesFilter | string
  }

  export type BoardArticleContentWhereInput = {
    AND?: Enumerable<BoardArticleContentWhereInput>
    OR?: Enumerable<BoardArticleContentWhereInput>
    NOT?: Enumerable<BoardArticleContentWhereInput>
    id?: StringFilter | string
    text?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    article_id?: StringFilter | string
    article?: XOR<BoardArticleRelationFilter, BoardArticleWhereInput>
  }

  export type BoardArticleContentOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    article_id?: SortOrder
    article?: BoardArticleOrderByWithRelationInput
  }

  export type BoardArticleContentWhereUniqueInput = {
    id?: string
  }

  export type BoardArticleContentOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    article_id?: SortOrder
    _count?: BoardArticleContentCountOrderByAggregateInput
    _max?: BoardArticleContentMaxOrderByAggregateInput
    _min?: BoardArticleContentMinOrderByAggregateInput
  }

  export type BoardArticleContentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoardArticleContentScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoardArticleContentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoardArticleContentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    text?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    article_id?: StringWithAggregatesFilter | string
  }

  export type BoardCommentWhereInput = {
    AND?: Enumerable<BoardCommentWhereInput>
    OR?: Enumerable<BoardCommentWhereInput>
    NOT?: Enumerable<BoardCommentWhereInput>
    id?: StringFilter | string
    author_id?: StringFilter | string
    article_id?: StringFilter | string
    author?: XOR<UserRelationFilter, UserWhereInput>
    article?: XOR<BoardArticleRelationFilter, BoardArticleWhereInput>
    contents?: BoardCommentContentListRelationFilter
  }

  export type BoardCommentOrderByWithRelationInput = {
    id?: SortOrder
    author_id?: SortOrder
    article_id?: SortOrder
    author?: UserOrderByWithRelationInput
    article?: BoardArticleOrderByWithRelationInput
    contents?: BoardCommentContentOrderByRelationAggregateInput
  }

  export type BoardCommentWhereUniqueInput = {
    id?: string
  }

  export type BoardCommentOrderByWithAggregationInput = {
    id?: SortOrder
    author_id?: SortOrder
    article_id?: SortOrder
    _count?: BoardCommentCountOrderByAggregateInput
    _max?: BoardCommentMaxOrderByAggregateInput
    _min?: BoardCommentMinOrderByAggregateInput
  }

  export type BoardCommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoardCommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoardCommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoardCommentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    author_id?: StringWithAggregatesFilter | string
    article_id?: StringWithAggregatesFilter | string
  }

  export type BoardCommentContentWhereInput = {
    AND?: Enumerable<BoardCommentContentWhereInput>
    OR?: Enumerable<BoardCommentContentWhereInput>
    NOT?: Enumerable<BoardCommentContentWhereInput>
    id?: StringFilter | string
    text?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    comment_id?: StringFilter | string
    comment?: XOR<BoardCommentRelationFilter, BoardCommentWhereInput>
  }

  export type BoardCommentContentOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    comment_id?: SortOrder
    comment?: BoardCommentOrderByWithRelationInput
  }

  export type BoardCommentContentWhereUniqueInput = {
    id?: string
  }

  export type BoardCommentContentOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    comment_id?: SortOrder
    _count?: BoardCommentContentCountOrderByAggregateInput
    _max?: BoardCommentContentMaxOrderByAggregateInput
    _min?: BoardCommentContentMinOrderByAggregateInput
  }

  export type BoardCommentContentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoardCommentContentScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoardCommentContentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoardCommentContentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    text?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    comment_id?: StringWithAggregatesFilter | string
  }

  export type AuthenticationCreateInput = {
    id: string
    oauth_sub: string
    oauth_type: string
    business_user?: BusinessUserCreateNestedOneWithoutAuthenticationsInput
    customer?: CustomerCreateNestedOneWithoutAuthenticationsInput
  }

  export type AuthenticationUncheckedCreateInput = {
    id: string
    oauth_sub: string
    oauth_type: string
    business_user_id?: string | null
    customer_id?: string | null
  }

  export type AuthenticationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: StringFieldUpdateOperationsInput | string
    business_user?: BusinessUserUpdateOneWithoutAuthenticationsNestedInput
    customer?: CustomerUpdateOneWithoutAuthenticationsNestedInput
  }

  export type AuthenticationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: StringFieldUpdateOperationsInput | string
    business_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticationCreateManyInput = {
    id: string
    oauth_sub: string
    oauth_type: string
    business_user_id?: string | null
    customer_id?: string | null
  }

  export type AuthenticationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: StringFieldUpdateOperationsInput | string
  }

  export type AuthenticationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: StringFieldUpdateOperationsInput | string
    business_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id: string
    name: string
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    address_first?: string | null
    address_second?: string | null
    profile_image?: string | null
    customer?: CustomerCreateNestedOneWithoutUserInput
    business_user?: BusinessUserCreateNestedOneWithoutUserInput
    board_articles?: BoardArticleCreateNestedManyWithoutAuthorInput
    board_comments?: BoardCommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    address_first?: string | null
    address_second?: string | null
    profile_image?: string | null
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
    business_user?: BusinessUserUncheckedCreateNestedOneWithoutUserInput
    board_articles?: BoardArticleUncheckedCreateNestedManyWithoutAuthorInput
    board_comments?: BoardCommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerUpdateOneWithoutUserNestedInput
    business_user?: BusinessUserUpdateOneWithoutUserNestedInput
    board_articles?: BoardArticleUpdateManyWithoutAuthorNestedInput
    board_comments?: BoardCommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
    business_user?: BusinessUserUncheckedUpdateOneWithoutUserNestedInput
    board_articles?: BoardArticleUncheckedUpdateManyWithoutAuthorNestedInput
    board_comments?: BoardCommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    address_first?: string | null
    address_second?: string | null
    profile_image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerCreateInput = {
    birth?: string | null
    gender?: string | null
    user: UserCreateNestedOneWithoutCustomerInput
    authentications?: AuthenticationCreateNestedManyWithoutCustomerInput
    rates?: BusinessRateCreateNestedManyWithoutRaterInput
    reviews?: BusinessReviewCreateNestedManyWithoutReviewerInput
  }

  export type CustomerUncheckedCreateInput = {
    id: string
    birth?: string | null
    gender?: string | null
    authentications?: AuthenticationUncheckedCreateNestedManyWithoutCustomerInput
    rates?: BusinessRateUncheckedCreateNestedManyWithoutRaterInput
    reviews?: BusinessReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type CustomerUpdateInput = {
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    authentications?: AuthenticationUpdateManyWithoutCustomerNestedInput
    rates?: BusinessRateUpdateManyWithoutRaterNestedInput
    reviews?: BusinessReviewUpdateManyWithoutReviewerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    authentications?: AuthenticationUncheckedUpdateManyWithoutCustomerNestedInput
    rates?: BusinessRateUncheckedUpdateManyWithoutRaterNestedInput
    reviews?: BusinessReviewUncheckedUpdateManyWithoutReviewerNestedInput
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
    introduction_title: string
    introduction_content: string
    user: UserCreateNestedOneWithoutBusiness_userInput
    authentications?: AuthenticationCreateNestedManyWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentCreateNestedOneWithoutBusinessInput
    home_care_company?: HomeCareCompanyCreateNestedOneWithoutBusinessInput
    rates?: BusinessRateCreateNestedManyWithoutRateeInput
    reviews?: BusinessReviewCreateNestedManyWithoutRevieweeInput
  }

  export type BusinessUserUncheckedCreateInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    authentications?: AuthenticationUncheckedCreateNestedManyWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentUncheckedCreateNestedOneWithoutBusinessInput
    home_care_company?: HomeCareCompanyUncheckedCreateNestedOneWithoutBusinessInput
    rates?: BusinessRateUncheckedCreateNestedManyWithoutRateeInput
    reviews?: BusinessReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type BusinessUserUpdateInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBusiness_userNestedInput
    authentications?: AuthenticationUpdateManyWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUpdateOneWithoutBusinessNestedInput
    home_care_company?: HomeCareCompanyUpdateOneWithoutBusinessNestedInput
    rates?: BusinessRateUpdateManyWithoutRateeNestedInput
    reviews?: BusinessReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type BusinessUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    authentications?: AuthenticationUncheckedUpdateManyWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUncheckedUpdateOneWithoutBusinessNestedInput
    home_care_company?: HomeCareCompanyUncheckedUpdateOneWithoutBusinessNestedInput
    rates?: BusinessRateUncheckedUpdateManyWithoutRateeNestedInput
    reviews?: BusinessReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type BusinessUserCreateManyInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
  }

  export type BusinessUserUpdateManyMutationInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateAgentCreateInput = {
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    real_estate_phone: string
    licensed_agent_name: string
    business: BusinessUserCreateNestedOneWithoutReal_estate_agentInput
    specialized_field: RealEstateSpecializedSubFieldCreateNestedOneWithoutReal_estate_agentsInput
    properties?: RealEstatePropertyCreateNestedManyWithoutAgentInput
  }

  export type RealEstateAgentUncheckedCreateInput = {
    id: string
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    real_estate_phone: string
    licensed_agent_name: string
    specialized_field_id: string
    properties?: RealEstatePropertyUncheckedCreateNestedManyWithoutAgentInput
  }

  export type RealEstateAgentUpdateInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
    business?: BusinessUserUpdateOneRequiredWithoutReal_estate_agentNestedInput
    specialized_field?: RealEstateSpecializedSubFieldUpdateOneRequiredWithoutReal_estate_agentsNestedInput
    properties?: RealEstatePropertyUpdateManyWithoutAgentNestedInput
  }

  export type RealEstateAgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
    specialized_field_id?: StringFieldUpdateOperationsInput | string
    properties?: RealEstatePropertyUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type RealEstateAgentCreateManyInput = {
    id: string
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    real_estate_phone: string
    licensed_agent_name: string
    specialized_field_id: string
  }

  export type RealEstateAgentUpdateManyMutationInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateAgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
    specialized_field_id?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareCompanyCreateInput = {
    business_registration_num: string
    business: BusinessUserCreateNestedOneWithoutHome_care_companyInput
    specialized_field: HomeCareSpecializedSubFieldCreateNestedOneWithoutHome_care_companiesInput
    introduction_images?: HomeCareIntroductionImageCreateNestedManyWithoutCompanyInput
  }

  export type HomeCareCompanyUncheckedCreateInput = {
    id: string
    business_registration_num: string
    specialized_field_id: string
    introduction_images?: HomeCareIntroductionImageUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type HomeCareCompanyUpdateInput = {
    business_registration_num?: StringFieldUpdateOperationsInput | string
    business?: BusinessUserUpdateOneRequiredWithoutHome_care_companyNestedInput
    specialized_field?: HomeCareSpecializedSubFieldUpdateOneRequiredWithoutHome_care_companiesNestedInput
    introduction_images?: HomeCareIntroductionImageUpdateManyWithoutCompanyNestedInput
  }

  export type HomeCareCompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_registration_num?: StringFieldUpdateOperationsInput | string
    specialized_field_id?: StringFieldUpdateOperationsInput | string
    introduction_images?: HomeCareIntroductionImageUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type HomeCareCompanyCreateManyInput = {
    id: string
    business_registration_num: string
    specialized_field_id: string
  }

  export type HomeCareCompanyUpdateManyMutationInput = {
    business_registration_num?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareCompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_registration_num?: StringFieldUpdateOperationsInput | string
    specialized_field_id?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareIntroductionImageCreateInput = {
    id: string
    image_url: string
    company: HomeCareCompanyCreateNestedOneWithoutIntroduction_imagesInput
  }

  export type HomeCareIntroductionImageUncheckedCreateInput = {
    id: string
    image_url: string
    company_id: string
  }

  export type HomeCareIntroductionImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    company?: HomeCareCompanyUpdateOneRequiredWithoutIntroduction_imagesNestedInput
  }

  export type HomeCareIntroductionImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareIntroductionImageCreateManyInput = {
    id: string
    image_url: string
    company_id: string
  }

  export type HomeCareIntroductionImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareIntroductionImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstatePropertyCreateInput = {
    id: string
    name: string
    main_image_url: string
    agent: RealEstateAgentCreateNestedOneWithoutPropertiesInput
  }

  export type RealEstatePropertyUncheckedCreateInput = {
    id: string
    name: string
    main_image_url: string
    agent_id: string
  }

  export type RealEstatePropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    main_image_url?: StringFieldUpdateOperationsInput | string
    agent?: RealEstateAgentUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type RealEstatePropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    main_image_url?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstatePropertyCreateManyInput = {
    id: string
    name: string
    main_image_url: string
    agent_id: string
  }

  export type RealEstatePropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    main_image_url?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstatePropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    main_image_url?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSpecializedSuperFieldCreateInput = {
    id: string
    name: string
    sub?: HomeCareSpecializedSubFieldCreateNestedManyWithoutSuperInput
  }

  export type HomeCareSpecializedSuperFieldUncheckedCreateInput = {
    id: string
    name: string
    sub?: HomeCareSpecializedSubFieldUncheckedCreateNestedManyWithoutSuperInput
  }

  export type HomeCareSpecializedSuperFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sub?: HomeCareSpecializedSubFieldUpdateManyWithoutSuperNestedInput
  }

  export type HomeCareSpecializedSuperFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sub?: HomeCareSpecializedSubFieldUncheckedUpdateManyWithoutSuperNestedInput
  }

  export type HomeCareSpecializedSuperFieldCreateManyInput = {
    id: string
    name: string
  }

  export type HomeCareSpecializedSuperFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSpecializedSuperFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSpecializedSubFieldCreateInput = {
    id: string
    name: string
    super: HomeCareSpecializedSuperFieldCreateNestedOneWithoutSubInput
    home_care_companies?: HomeCareCompanyCreateNestedManyWithoutSpecialized_fieldInput
  }

  export type HomeCareSpecializedSubFieldUncheckedCreateInput = {
    id: string
    name: string
    super_id: string
    home_care_companies?: HomeCareCompanyUncheckedCreateNestedManyWithoutSpecialized_fieldInput
  }

  export type HomeCareSpecializedSubFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    super?: HomeCareSpecializedSuperFieldUpdateOneRequiredWithoutSubNestedInput
    home_care_companies?: HomeCareCompanyUpdateManyWithoutSpecialized_fieldNestedInput
  }

  export type HomeCareSpecializedSubFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
    home_care_companies?: HomeCareCompanyUncheckedUpdateManyWithoutSpecialized_fieldNestedInput
  }

  export type HomeCareSpecializedSubFieldCreateManyInput = {
    id: string
    name: string
    super_id: string
  }

  export type HomeCareSpecializedSubFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSpecializedSubFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSpecializedSuperFieldCreateInput = {
    id: string
    name: string
    sub?: RealEstateSpecializedSubFieldCreateNestedManyWithoutSuperInput
  }

  export type RealEstateSpecializedSuperFieldUncheckedCreateInput = {
    id: string
    name: string
    sub?: RealEstateSpecializedSubFieldUncheckedCreateNestedManyWithoutSuperInput
  }

  export type RealEstateSpecializedSuperFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sub?: RealEstateSpecializedSubFieldUpdateManyWithoutSuperNestedInput
  }

  export type RealEstateSpecializedSuperFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sub?: RealEstateSpecializedSubFieldUncheckedUpdateManyWithoutSuperNestedInput
  }

  export type RealEstateSpecializedSuperFieldCreateManyInput = {
    id: string
    name: string
  }

  export type RealEstateSpecializedSuperFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSpecializedSuperFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSpecializedSubFieldCreateInput = {
    id: string
    name: string
    super: RealEstateSpecializedSuperFieldCreateNestedOneWithoutSubInput
    real_estate_agents?: RealEstateAgentCreateNestedManyWithoutSpecialized_fieldInput
  }

  export type RealEstateSpecializedSubFieldUncheckedCreateInput = {
    id: string
    name: string
    super_id: string
    real_estate_agents?: RealEstateAgentUncheckedCreateNestedManyWithoutSpecialized_fieldInput
  }

  export type RealEstateSpecializedSubFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    super?: RealEstateSpecializedSuperFieldUpdateOneRequiredWithoutSubNestedInput
    real_estate_agents?: RealEstateAgentUpdateManyWithoutSpecialized_fieldNestedInput
  }

  export type RealEstateSpecializedSubFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
    real_estate_agents?: RealEstateAgentUncheckedUpdateManyWithoutSpecialized_fieldNestedInput
  }

  export type RealEstateSpecializedSubFieldCreateManyInput = {
    id: string
    name: string
    super_id: string
  }

  export type RealEstateSpecializedSubFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSpecializedSubFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessRateCreateInput = {
    id: string
    rate: number
    ratee: BusinessUserCreateNestedOneWithoutRatesInput
    rater: CustomerCreateNestedOneWithoutRatesInput
    category: BusinessRateCategoryCreateNestedOneWithoutRatesInput
  }

  export type BusinessRateUncheckedCreateInput = {
    id: string
    category_id: string
    ratee_id: string
    rater_id: string
    rate: number
  }

  export type BusinessRateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    ratee?: BusinessUserUpdateOneRequiredWithoutRatesNestedInput
    rater?: CustomerUpdateOneRequiredWithoutRatesNestedInput
    category?: BusinessRateCategoryUpdateOneRequiredWithoutRatesNestedInput
  }

  export type BusinessRateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    ratee_id?: StringFieldUpdateOperationsInput | string
    rater_id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessRateCreateManyInput = {
    id: string
    category_id: string
    ratee_id: string
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
    ratee_id?: StringFieldUpdateOperationsInput | string
    rater_id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
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

  export type BusinessReviewCreateInput = {
    id: string
    review: string
    reviewee: BusinessUserCreateNestedOneWithoutReviewsInput
    reviewer: CustomerCreateNestedOneWithoutReviewsInput
  }

  export type BusinessReviewUncheckedCreateInput = {
    id: string
    reviewee_id: string
    reviewer_id: string
    review: string
  }

  export type BusinessReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    reviewee?: BusinessUserUpdateOneRequiredWithoutReviewsNestedInput
    reviewer?: CustomerUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type BusinessReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewee_id?: StringFieldUpdateOperationsInput | string
    reviewer_id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessReviewCreateManyInput = {
    id: string
    reviewee_id: string
    reviewer_id: string
    review: string
  }

  export type BusinessReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewee_id?: StringFieldUpdateOperationsInput | string
    reviewer_id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
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
    author: UserCreateNestedOneWithoutBoard_articlesInput
    board: BoardCreateNestedOneWithoutArticlesInput
    contents?: BoardArticleContentCreateNestedManyWithoutArticleInput
    comments?: BoardCommentCreateNestedManyWithoutArticleInput
  }

  export type BoardArticleUncheckedCreateInput = {
    id: string
    title: string
    author_id: string
    board_id: string
    contents?: BoardArticleContentUncheckedCreateNestedManyWithoutArticleInput
    comments?: BoardCommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type BoardArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutBoard_articlesNestedInput
    board?: BoardUpdateOneRequiredWithoutArticlesNestedInput
    contents?: BoardArticleContentUpdateManyWithoutArticleNestedInput
    comments?: BoardCommentUpdateManyWithoutArticleNestedInput
  }

  export type BoardArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    board_id?: StringFieldUpdateOperationsInput | string
    contents?: BoardArticleContentUncheckedUpdateManyWithoutArticleNestedInput
    comments?: BoardCommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type BoardArticleCreateManyInput = {
    id: string
    title: string
    author_id: string
    board_id: string
  }

  export type BoardArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type BoardArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    board_id?: StringFieldUpdateOperationsInput | string
  }

  export type BoardArticleContentCreateInput = {
    id: string
    text: string
    created_at: Date | string
    article: BoardArticleCreateNestedOneWithoutContentsInput
  }

  export type BoardArticleContentUncheckedCreateInput = {
    id: string
    text: string
    created_at: Date | string
    article_id: string
  }

  export type BoardArticleContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: BoardArticleUpdateOneRequiredWithoutContentsNestedInput
  }

  export type BoardArticleContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    article_id?: StringFieldUpdateOperationsInput | string
  }

  export type BoardArticleContentCreateManyInput = {
    id: string
    text: string
    created_at: Date | string
    article_id: string
  }

  export type BoardArticleContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardArticleContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    article_id?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCommentCreateInput = {
    id: string
    author: UserCreateNestedOneWithoutBoard_commentsInput
    article: BoardArticleCreateNestedOneWithoutCommentsInput
    contents?: BoardCommentContentCreateNestedManyWithoutCommentInput
  }

  export type BoardCommentUncheckedCreateInput = {
    id: string
    author_id: string
    article_id: string
    contents?: BoardCommentContentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type BoardCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutBoard_commentsNestedInput
    article?: BoardArticleUpdateOneRequiredWithoutCommentsNestedInput
    contents?: BoardCommentContentUpdateManyWithoutCommentNestedInput
  }

  export type BoardCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    article_id?: StringFieldUpdateOperationsInput | string
    contents?: BoardCommentContentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type BoardCommentCreateManyInput = {
    id: string
    author_id: string
    article_id: string
  }

  export type BoardCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    article_id?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCommentContentCreateInput = {
    id: string
    text: string
    created_at: Date | string
    comment: BoardCommentCreateNestedOneWithoutContentsInput
  }

  export type BoardCommentContentUncheckedCreateInput = {
    id: string
    text: string
    created_at: Date | string
    comment_id: string
  }

  export type BoardCommentContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: BoardCommentUpdateOneRequiredWithoutContentsNestedInput
  }

  export type BoardCommentContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comment_id?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCommentContentCreateManyInput = {
    id: string
    text: string
    created_at: Date | string
    comment_id: string
  }

  export type BoardCommentContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardCommentContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comment_id?: StringFieldUpdateOperationsInput | string
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

  export type BusinessUserRelationFilter = {
    is?: BusinessUserWhereInput
    isNot?: BusinessUserWhereInput
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type AuthenticationOauth_subOauth_typeCompoundUniqueInput = {
    oauth_sub: string
    oauth_type: string
  }

  export type AuthenticationCountOrderByAggregateInput = {
    id?: SortOrder
    oauth_sub?: SortOrder
    oauth_type?: SortOrder
    business_user_id?: SortOrder
    customer_id?: SortOrder
  }

  export type AuthenticationMaxOrderByAggregateInput = {
    id?: SortOrder
    oauth_sub?: SortOrder
    oauth_type?: SortOrder
    business_user_id?: SortOrder
    customer_id?: SortOrder
  }

  export type AuthenticationMinOrderByAggregateInput = {
    id?: SortOrder
    oauth_sub?: SortOrder
    oauth_type?: SortOrder
    business_user_id?: SortOrder
    customer_id?: SortOrder
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

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type BoardArticleListRelationFilter = {
    every?: BoardArticleWhereInput
    some?: BoardArticleWhereInput
    none?: BoardArticleWhereInput
  }

  export type BoardCommentListRelationFilter = {
    every?: BoardCommentWhereInput
    some?: BoardCommentWhereInput
    none?: BoardCommentWhereInput
  }

  export type BoardArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    phone_verified?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    phone_verified?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    phone_verified?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AuthenticationListRelationFilter = {
    every?: AuthenticationWhereInput
    some?: AuthenticationWhereInput
    none?: AuthenticationWhereInput
  }

  export type BusinessRateListRelationFilter = {
    every?: BusinessRateWhereInput
    some?: BusinessRateWhereInput
    none?: BusinessRateWhereInput
  }

  export type BusinessReviewListRelationFilter = {
    every?: BusinessReviewWhereInput
    some?: BusinessReviewWhereInput
    none?: BusinessReviewWhereInput
  }

  export type AuthenticationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessRateOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type RealEstateAgentRelationFilter = {
    is?: RealEstateAgentWhereInput
    isNot?: RealEstateAgentWhereInput
  }

  export type HomeCareCompanyRelationFilter = {
    is?: HomeCareCompanyWhereInput
    isNot?: HomeCareCompanyWhereInput
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

  export type RealEstateSpecializedSubFieldRelationFilter = {
    is?: RealEstateSpecializedSubFieldWhereInput
    isNot?: RealEstateSpecializedSubFieldWhereInput
  }

  export type RealEstatePropertyListRelationFilter = {
    every?: RealEstatePropertyWhereInput
    some?: RealEstatePropertyWhereInput
    none?: RealEstatePropertyWhereInput
  }

  export type RealEstatePropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RealEstateAgentCountOrderByAggregateInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    real_estate_num?: SortOrder
    real_estate_name?: SortOrder
    real_estate_phone?: SortOrder
    licensed_agent_name?: SortOrder
    specialized_field_id?: SortOrder
  }

  export type RealEstateAgentMaxOrderByAggregateInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    real_estate_num?: SortOrder
    real_estate_name?: SortOrder
    real_estate_phone?: SortOrder
    licensed_agent_name?: SortOrder
    specialized_field_id?: SortOrder
  }

  export type RealEstateAgentMinOrderByAggregateInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    real_estate_num?: SortOrder
    real_estate_name?: SortOrder
    real_estate_phone?: SortOrder
    licensed_agent_name?: SortOrder
    specialized_field_id?: SortOrder
  }

  export type HomeCareSpecializedSubFieldRelationFilter = {
    is?: HomeCareSpecializedSubFieldWhereInput
    isNot?: HomeCareSpecializedSubFieldWhereInput
  }

  export type HomeCareIntroductionImageListRelationFilter = {
    every?: HomeCareIntroductionImageWhereInput
    some?: HomeCareIntroductionImageWhereInput
    none?: HomeCareIntroductionImageWhereInput
  }

  export type HomeCareIntroductionImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HomeCareCompanyCountOrderByAggregateInput = {
    id?: SortOrder
    business_registration_num?: SortOrder
    specialized_field_id?: SortOrder
  }

  export type HomeCareCompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    business_registration_num?: SortOrder
    specialized_field_id?: SortOrder
  }

  export type HomeCareCompanyMinOrderByAggregateInput = {
    id?: SortOrder
    business_registration_num?: SortOrder
    specialized_field_id?: SortOrder
  }

  export type HomeCareIntroductionImageCountOrderByAggregateInput = {
    id?: SortOrder
    image_url?: SortOrder
    company_id?: SortOrder
  }

  export type HomeCareIntroductionImageMaxOrderByAggregateInput = {
    id?: SortOrder
    image_url?: SortOrder
    company_id?: SortOrder
  }

  export type HomeCareIntroductionImageMinOrderByAggregateInput = {
    id?: SortOrder
    image_url?: SortOrder
    company_id?: SortOrder
  }

  export type RealEstatePropertyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    main_image_url?: SortOrder
    agent_id?: SortOrder
  }

  export type RealEstatePropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    main_image_url?: SortOrder
    agent_id?: SortOrder
  }

  export type RealEstatePropertyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    main_image_url?: SortOrder
    agent_id?: SortOrder
  }

  export type HomeCareSpecializedSubFieldListRelationFilter = {
    every?: HomeCareSpecializedSubFieldWhereInput
    some?: HomeCareSpecializedSubFieldWhereInput
    none?: HomeCareSpecializedSubFieldWhereInput
  }

  export type HomeCareSpecializedSubFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HomeCareSpecializedSuperFieldCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HomeCareSpecializedSuperFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HomeCareSpecializedSuperFieldMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HomeCareSpecializedSuperFieldRelationFilter = {
    is?: HomeCareSpecializedSuperFieldWhereInput
    isNot?: HomeCareSpecializedSuperFieldWhereInput
  }

  export type HomeCareCompanyListRelationFilter = {
    every?: HomeCareCompanyWhereInput
    some?: HomeCareCompanyWhereInput
    none?: HomeCareCompanyWhereInput
  }

  export type HomeCareCompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HomeCareSpecializedSubFieldCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
  }

  export type HomeCareSpecializedSubFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
  }

  export type HomeCareSpecializedSubFieldMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
  }

  export type RealEstateSpecializedSubFieldListRelationFilter = {
    every?: RealEstateSpecializedSubFieldWhereInput
    some?: RealEstateSpecializedSubFieldWhereInput
    none?: RealEstateSpecializedSubFieldWhereInput
  }

  export type RealEstateSpecializedSubFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RealEstateSpecializedSuperFieldCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RealEstateSpecializedSuperFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RealEstateSpecializedSuperFieldMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RealEstateSpecializedSuperFieldRelationFilter = {
    is?: RealEstateSpecializedSuperFieldWhereInput
    isNot?: RealEstateSpecializedSuperFieldWhereInput
  }

  export type RealEstateAgentListRelationFilter = {
    every?: RealEstateAgentWhereInput
    some?: RealEstateAgentWhereInput
    none?: RealEstateAgentWhereInput
  }

  export type RealEstateAgentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RealEstateSpecializedSubFieldCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
  }

  export type RealEstateSpecializedSubFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
  }

  export type RealEstateSpecializedSubFieldMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
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

  export type BusinessRateCountOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    ratee_id?: SortOrder
    rater_id?: SortOrder
    rate?: SortOrder
  }

  export type BusinessRateAvgOrderByAggregateInput = {
    rate?: SortOrder
  }

  export type BusinessRateMaxOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    ratee_id?: SortOrder
    rater_id?: SortOrder
    rate?: SortOrder
  }

  export type BusinessRateMinOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    ratee_id?: SortOrder
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

  export type BusinessReviewCountOrderByAggregateInput = {
    id?: SortOrder
    reviewee_id?: SortOrder
    reviewer_id?: SortOrder
    review?: SortOrder
  }

  export type BusinessReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewee_id?: SortOrder
    reviewer_id?: SortOrder
    review?: SortOrder
  }

  export type BusinessReviewMinOrderByAggregateInput = {
    id?: SortOrder
    reviewee_id?: SortOrder
    reviewer_id?: SortOrder
    review?: SortOrder
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

  export type BoardRelationFilter = {
    is?: BoardWhereInput
    isNot?: BoardWhereInput
  }

  export type BoardArticleContentListRelationFilter = {
    every?: BoardArticleContentWhereInput
    some?: BoardArticleContentWhereInput
    none?: BoardArticleContentWhereInput
  }

  export type BoardArticleContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author_id?: SortOrder
    board_id?: SortOrder
  }

  export type BoardArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author_id?: SortOrder
    board_id?: SortOrder
  }

  export type BoardArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author_id?: SortOrder
    board_id?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BoardArticleRelationFilter = {
    is?: BoardArticleWhereInput
    isNot?: BoardArticleWhereInput
  }

  export type BoardArticleContentCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    article_id?: SortOrder
  }

  export type BoardArticleContentMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    article_id?: SortOrder
  }

  export type BoardArticleContentMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    article_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BoardCommentContentListRelationFilter = {
    every?: BoardCommentContentWhereInput
    some?: BoardCommentContentWhereInput
    none?: BoardCommentContentWhereInput
  }

  export type BoardCommentContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardCommentCountOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    article_id?: SortOrder
  }

  export type BoardCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    article_id?: SortOrder
  }

  export type BoardCommentMinOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    article_id?: SortOrder
  }

  export type BoardCommentRelationFilter = {
    is?: BoardCommentWhereInput
    isNot?: BoardCommentWhereInput
  }

  export type BoardCommentContentCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    comment_id?: SortOrder
  }

  export type BoardCommentContentMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    comment_id?: SortOrder
  }

  export type BoardCommentContentMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    comment_id?: SortOrder
  }

  export type BusinessUserCreateNestedOneWithoutAuthenticationsInput = {
    create?: XOR<BusinessUserCreateWithoutAuthenticationsInput, BusinessUserUncheckedCreateWithoutAuthenticationsInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutAuthenticationsInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutAuthenticationsInput = {
    create?: XOR<CustomerCreateWithoutAuthenticationsInput, CustomerUncheckedCreateWithoutAuthenticationsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAuthenticationsInput
    connect?: CustomerWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BusinessUserUpdateOneWithoutAuthenticationsNestedInput = {
    create?: XOR<BusinessUserCreateWithoutAuthenticationsInput, BusinessUserUncheckedCreateWithoutAuthenticationsInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutAuthenticationsInput
    upsert?: BusinessUserUpsertWithoutAuthenticationsInput
    disconnect?: boolean
    delete?: boolean
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutAuthenticationsInput, BusinessUserUncheckedUpdateWithoutAuthenticationsInput>
  }

  export type CustomerUpdateOneWithoutAuthenticationsNestedInput = {
    create?: XOR<CustomerCreateWithoutAuthenticationsInput, CustomerUncheckedCreateWithoutAuthenticationsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAuthenticationsInput
    upsert?: CustomerUpsertWithoutAuthenticationsInput
    disconnect?: boolean
    delete?: boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutAuthenticationsInput, CustomerUncheckedUpdateWithoutAuthenticationsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CustomerCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    connect?: CustomerWhereUniqueInput
  }

  export type BusinessUserCreateNestedOneWithoutUserInput = {
    create?: XOR<BusinessUserCreateWithoutUserInput, BusinessUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutUserInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type BoardArticleCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BoardArticleCreateWithoutAuthorInput>, Enumerable<BoardArticleUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BoardArticleCreateOrConnectWithoutAuthorInput>
    createMany?: BoardArticleCreateManyAuthorInputEnvelope
    connect?: Enumerable<BoardArticleWhereUniqueInput>
  }

  export type BoardCommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BoardCommentCreateWithoutAuthorInput>, Enumerable<BoardCommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BoardCommentCreateOrConnectWithoutAuthorInput>
    createMany?: BoardCommentCreateManyAuthorInputEnvelope
    connect?: Enumerable<BoardCommentWhereUniqueInput>
  }

  export type CustomerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    connect?: CustomerWhereUniqueInput
  }

  export type BusinessUserUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BusinessUserCreateWithoutUserInput, BusinessUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutUserInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type BoardArticleUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BoardArticleCreateWithoutAuthorInput>, Enumerable<BoardArticleUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BoardArticleCreateOrConnectWithoutAuthorInput>
    createMany?: BoardArticleCreateManyAuthorInputEnvelope
    connect?: Enumerable<BoardArticleWhereUniqueInput>
  }

  export type BoardCommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BoardCommentCreateWithoutAuthorInput>, Enumerable<BoardCommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BoardCommentCreateOrConnectWithoutAuthorInput>
    createMany?: BoardCommentCreateManyAuthorInputEnvelope
    connect?: Enumerable<BoardCommentWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type BusinessUserUpdateOneWithoutUserNestedInput = {
    create?: XOR<BusinessUserCreateWithoutUserInput, BusinessUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutUserInput
    upsert?: BusinessUserUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutUserInput, BusinessUserUncheckedUpdateWithoutUserInput>
  }

  export type BoardArticleUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<BoardArticleCreateWithoutAuthorInput>, Enumerable<BoardArticleUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BoardArticleCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<BoardArticleUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: BoardArticleCreateManyAuthorInputEnvelope
    set?: Enumerable<BoardArticleWhereUniqueInput>
    disconnect?: Enumerable<BoardArticleWhereUniqueInput>
    delete?: Enumerable<BoardArticleWhereUniqueInput>
    connect?: Enumerable<BoardArticleWhereUniqueInput>
    update?: Enumerable<BoardArticleUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<BoardArticleUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<BoardArticleScalarWhereInput>
  }

  export type BoardCommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<BoardCommentCreateWithoutAuthorInput>, Enumerable<BoardCommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BoardCommentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<BoardCommentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: BoardCommentCreateManyAuthorInputEnvelope
    set?: Enumerable<BoardCommentWhereUniqueInput>
    disconnect?: Enumerable<BoardCommentWhereUniqueInput>
    delete?: Enumerable<BoardCommentWhereUniqueInput>
    connect?: Enumerable<BoardCommentWhereUniqueInput>
    update?: Enumerable<BoardCommentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<BoardCommentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<BoardCommentScalarWhereInput>
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

  export type BusinessUserUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BusinessUserCreateWithoutUserInput, BusinessUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutUserInput
    upsert?: BusinessUserUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutUserInput, BusinessUserUncheckedUpdateWithoutUserInput>
  }

  export type BoardArticleUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<BoardArticleCreateWithoutAuthorInput>, Enumerable<BoardArticleUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BoardArticleCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<BoardArticleUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: BoardArticleCreateManyAuthorInputEnvelope
    set?: Enumerable<BoardArticleWhereUniqueInput>
    disconnect?: Enumerable<BoardArticleWhereUniqueInput>
    delete?: Enumerable<BoardArticleWhereUniqueInput>
    connect?: Enumerable<BoardArticleWhereUniqueInput>
    update?: Enumerable<BoardArticleUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<BoardArticleUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<BoardArticleScalarWhereInput>
  }

  export type BoardCommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<BoardCommentCreateWithoutAuthorInput>, Enumerable<BoardCommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BoardCommentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<BoardCommentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: BoardCommentCreateManyAuthorInputEnvelope
    set?: Enumerable<BoardCommentWhereUniqueInput>
    disconnect?: Enumerable<BoardCommentWhereUniqueInput>
    delete?: Enumerable<BoardCommentWhereUniqueInput>
    connect?: Enumerable<BoardCommentWhereUniqueInput>
    update?: Enumerable<BoardCommentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<BoardCommentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<BoardCommentScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutCustomerInput = {
    create?: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    connect?: UserWhereUniqueInput
  }

  export type AuthenticationCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<AuthenticationCreateWithoutCustomerInput>, Enumerable<AuthenticationUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<AuthenticationCreateOrConnectWithoutCustomerInput>
    createMany?: AuthenticationCreateManyCustomerInputEnvelope
    connect?: Enumerable<AuthenticationWhereUniqueInput>
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

  export type AuthenticationUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<AuthenticationCreateWithoutCustomerInput>, Enumerable<AuthenticationUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<AuthenticationCreateOrConnectWithoutCustomerInput>
    createMany?: AuthenticationCreateManyCustomerInputEnvelope
    connect?: Enumerable<AuthenticationWhereUniqueInput>
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

  export type UserUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    upsert?: UserUpsertWithoutCustomerInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCustomerInput, UserUncheckedUpdateWithoutCustomerInput>
  }

  export type AuthenticationUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<AuthenticationCreateWithoutCustomerInput>, Enumerable<AuthenticationUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<AuthenticationCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<AuthenticationUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: AuthenticationCreateManyCustomerInputEnvelope
    set?: Enumerable<AuthenticationWhereUniqueInput>
    disconnect?: Enumerable<AuthenticationWhereUniqueInput>
    delete?: Enumerable<AuthenticationWhereUniqueInput>
    connect?: Enumerable<AuthenticationWhereUniqueInput>
    update?: Enumerable<AuthenticationUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<AuthenticationUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<AuthenticationScalarWhereInput>
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

  export type AuthenticationUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<AuthenticationCreateWithoutCustomerInput>, Enumerable<AuthenticationUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<AuthenticationCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<AuthenticationUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: AuthenticationCreateManyCustomerInputEnvelope
    set?: Enumerable<AuthenticationWhereUniqueInput>
    disconnect?: Enumerable<AuthenticationWhereUniqueInput>
    delete?: Enumerable<AuthenticationWhereUniqueInput>
    connect?: Enumerable<AuthenticationWhereUniqueInput>
    update?: Enumerable<AuthenticationUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<AuthenticationUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<AuthenticationScalarWhereInput>
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

  export type UserCreateNestedOneWithoutBusiness_userInput = {
    create?: XOR<UserCreateWithoutBusiness_userInput, UserUncheckedCreateWithoutBusiness_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusiness_userInput
    connect?: UserWhereUniqueInput
  }

  export type AuthenticationCreateNestedManyWithoutBusiness_userInput = {
    create?: XOR<Enumerable<AuthenticationCreateWithoutBusiness_userInput>, Enumerable<AuthenticationUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<AuthenticationCreateOrConnectWithoutBusiness_userInput>
    createMany?: AuthenticationCreateManyBusiness_userInputEnvelope
    connect?: Enumerable<AuthenticationWhereUniqueInput>
  }

  export type RealEstateAgentCreateNestedOneWithoutBusinessInput = {
    create?: XOR<RealEstateAgentCreateWithoutBusinessInput, RealEstateAgentUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: RealEstateAgentCreateOrConnectWithoutBusinessInput
    connect?: RealEstateAgentWhereUniqueInput
  }

  export type HomeCareCompanyCreateNestedOneWithoutBusinessInput = {
    create?: XOR<HomeCareCompanyCreateWithoutBusinessInput, HomeCareCompanyUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: HomeCareCompanyCreateOrConnectWithoutBusinessInput
    connect?: HomeCareCompanyWhereUniqueInput
  }

  export type BusinessRateCreateNestedManyWithoutRateeInput = {
    create?: XOR<Enumerable<BusinessRateCreateWithoutRateeInput>, Enumerable<BusinessRateUncheckedCreateWithoutRateeInput>>
    connectOrCreate?: Enumerable<BusinessRateCreateOrConnectWithoutRateeInput>
    createMany?: BusinessRateCreateManyRateeInputEnvelope
    connect?: Enumerable<BusinessRateWhereUniqueInput>
  }

  export type BusinessReviewCreateNestedManyWithoutRevieweeInput = {
    create?: XOR<Enumerable<BusinessReviewCreateWithoutRevieweeInput>, Enumerable<BusinessReviewUncheckedCreateWithoutRevieweeInput>>
    connectOrCreate?: Enumerable<BusinessReviewCreateOrConnectWithoutRevieweeInput>
    createMany?: BusinessReviewCreateManyRevieweeInputEnvelope
    connect?: Enumerable<BusinessReviewWhereUniqueInput>
  }

  export type AuthenticationUncheckedCreateNestedManyWithoutBusiness_userInput = {
    create?: XOR<Enumerable<AuthenticationCreateWithoutBusiness_userInput>, Enumerable<AuthenticationUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<AuthenticationCreateOrConnectWithoutBusiness_userInput>
    createMany?: AuthenticationCreateManyBusiness_userInputEnvelope
    connect?: Enumerable<AuthenticationWhereUniqueInput>
  }

  export type RealEstateAgentUncheckedCreateNestedOneWithoutBusinessInput = {
    create?: XOR<RealEstateAgentCreateWithoutBusinessInput, RealEstateAgentUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: RealEstateAgentCreateOrConnectWithoutBusinessInput
    connect?: RealEstateAgentWhereUniqueInput
  }

  export type HomeCareCompanyUncheckedCreateNestedOneWithoutBusinessInput = {
    create?: XOR<HomeCareCompanyCreateWithoutBusinessInput, HomeCareCompanyUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: HomeCareCompanyCreateOrConnectWithoutBusinessInput
    connect?: HomeCareCompanyWhereUniqueInput
  }

  export type BusinessRateUncheckedCreateNestedManyWithoutRateeInput = {
    create?: XOR<Enumerable<BusinessRateCreateWithoutRateeInput>, Enumerable<BusinessRateUncheckedCreateWithoutRateeInput>>
    connectOrCreate?: Enumerable<BusinessRateCreateOrConnectWithoutRateeInput>
    createMany?: BusinessRateCreateManyRateeInputEnvelope
    connect?: Enumerable<BusinessRateWhereUniqueInput>
  }

  export type BusinessReviewUncheckedCreateNestedManyWithoutRevieweeInput = {
    create?: XOR<Enumerable<BusinessReviewCreateWithoutRevieweeInput>, Enumerable<BusinessReviewUncheckedCreateWithoutRevieweeInput>>
    connectOrCreate?: Enumerable<BusinessReviewCreateOrConnectWithoutRevieweeInput>
    createMany?: BusinessReviewCreateManyRevieweeInputEnvelope
    connect?: Enumerable<BusinessReviewWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutBusiness_userNestedInput = {
    create?: XOR<UserCreateWithoutBusiness_userInput, UserUncheckedCreateWithoutBusiness_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusiness_userInput
    upsert?: UserUpsertWithoutBusiness_userInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBusiness_userInput, UserUncheckedUpdateWithoutBusiness_userInput>
  }

  export type AuthenticationUpdateManyWithoutBusiness_userNestedInput = {
    create?: XOR<Enumerable<AuthenticationCreateWithoutBusiness_userInput>, Enumerable<AuthenticationUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<AuthenticationCreateOrConnectWithoutBusiness_userInput>
    upsert?: Enumerable<AuthenticationUpsertWithWhereUniqueWithoutBusiness_userInput>
    createMany?: AuthenticationCreateManyBusiness_userInputEnvelope
    set?: Enumerable<AuthenticationWhereUniqueInput>
    disconnect?: Enumerable<AuthenticationWhereUniqueInput>
    delete?: Enumerable<AuthenticationWhereUniqueInput>
    connect?: Enumerable<AuthenticationWhereUniqueInput>
    update?: Enumerable<AuthenticationUpdateWithWhereUniqueWithoutBusiness_userInput>
    updateMany?: Enumerable<AuthenticationUpdateManyWithWhereWithoutBusiness_userInput>
    deleteMany?: Enumerable<AuthenticationScalarWhereInput>
  }

  export type RealEstateAgentUpdateOneWithoutBusinessNestedInput = {
    create?: XOR<RealEstateAgentCreateWithoutBusinessInput, RealEstateAgentUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: RealEstateAgentCreateOrConnectWithoutBusinessInput
    upsert?: RealEstateAgentUpsertWithoutBusinessInput
    disconnect?: boolean
    delete?: boolean
    connect?: RealEstateAgentWhereUniqueInput
    update?: XOR<RealEstateAgentUpdateWithoutBusinessInput, RealEstateAgentUncheckedUpdateWithoutBusinessInput>
  }

  export type HomeCareCompanyUpdateOneWithoutBusinessNestedInput = {
    create?: XOR<HomeCareCompanyCreateWithoutBusinessInput, HomeCareCompanyUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: HomeCareCompanyCreateOrConnectWithoutBusinessInput
    upsert?: HomeCareCompanyUpsertWithoutBusinessInput
    disconnect?: boolean
    delete?: boolean
    connect?: HomeCareCompanyWhereUniqueInput
    update?: XOR<HomeCareCompanyUpdateWithoutBusinessInput, HomeCareCompanyUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessRateUpdateManyWithoutRateeNestedInput = {
    create?: XOR<Enumerable<BusinessRateCreateWithoutRateeInput>, Enumerable<BusinessRateUncheckedCreateWithoutRateeInput>>
    connectOrCreate?: Enumerable<BusinessRateCreateOrConnectWithoutRateeInput>
    upsert?: Enumerable<BusinessRateUpsertWithWhereUniqueWithoutRateeInput>
    createMany?: BusinessRateCreateManyRateeInputEnvelope
    set?: Enumerable<BusinessRateWhereUniqueInput>
    disconnect?: Enumerable<BusinessRateWhereUniqueInput>
    delete?: Enumerable<BusinessRateWhereUniqueInput>
    connect?: Enumerable<BusinessRateWhereUniqueInput>
    update?: Enumerable<BusinessRateUpdateWithWhereUniqueWithoutRateeInput>
    updateMany?: Enumerable<BusinessRateUpdateManyWithWhereWithoutRateeInput>
    deleteMany?: Enumerable<BusinessRateScalarWhereInput>
  }

  export type BusinessReviewUpdateManyWithoutRevieweeNestedInput = {
    create?: XOR<Enumerable<BusinessReviewCreateWithoutRevieweeInput>, Enumerable<BusinessReviewUncheckedCreateWithoutRevieweeInput>>
    connectOrCreate?: Enumerable<BusinessReviewCreateOrConnectWithoutRevieweeInput>
    upsert?: Enumerable<BusinessReviewUpsertWithWhereUniqueWithoutRevieweeInput>
    createMany?: BusinessReviewCreateManyRevieweeInputEnvelope
    set?: Enumerable<BusinessReviewWhereUniqueInput>
    disconnect?: Enumerable<BusinessReviewWhereUniqueInput>
    delete?: Enumerable<BusinessReviewWhereUniqueInput>
    connect?: Enumerable<BusinessReviewWhereUniqueInput>
    update?: Enumerable<BusinessReviewUpdateWithWhereUniqueWithoutRevieweeInput>
    updateMany?: Enumerable<BusinessReviewUpdateManyWithWhereWithoutRevieweeInput>
    deleteMany?: Enumerable<BusinessReviewScalarWhereInput>
  }

  export type AuthenticationUncheckedUpdateManyWithoutBusiness_userNestedInput = {
    create?: XOR<Enumerable<AuthenticationCreateWithoutBusiness_userInput>, Enumerable<AuthenticationUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<AuthenticationCreateOrConnectWithoutBusiness_userInput>
    upsert?: Enumerable<AuthenticationUpsertWithWhereUniqueWithoutBusiness_userInput>
    createMany?: AuthenticationCreateManyBusiness_userInputEnvelope
    set?: Enumerable<AuthenticationWhereUniqueInput>
    disconnect?: Enumerable<AuthenticationWhereUniqueInput>
    delete?: Enumerable<AuthenticationWhereUniqueInput>
    connect?: Enumerable<AuthenticationWhereUniqueInput>
    update?: Enumerable<AuthenticationUpdateWithWhereUniqueWithoutBusiness_userInput>
    updateMany?: Enumerable<AuthenticationUpdateManyWithWhereWithoutBusiness_userInput>
    deleteMany?: Enumerable<AuthenticationScalarWhereInput>
  }

  export type RealEstateAgentUncheckedUpdateOneWithoutBusinessNestedInput = {
    create?: XOR<RealEstateAgentCreateWithoutBusinessInput, RealEstateAgentUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: RealEstateAgentCreateOrConnectWithoutBusinessInput
    upsert?: RealEstateAgentUpsertWithoutBusinessInput
    disconnect?: boolean
    delete?: boolean
    connect?: RealEstateAgentWhereUniqueInput
    update?: XOR<RealEstateAgentUpdateWithoutBusinessInput, RealEstateAgentUncheckedUpdateWithoutBusinessInput>
  }

  export type HomeCareCompanyUncheckedUpdateOneWithoutBusinessNestedInput = {
    create?: XOR<HomeCareCompanyCreateWithoutBusinessInput, HomeCareCompanyUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: HomeCareCompanyCreateOrConnectWithoutBusinessInput
    upsert?: HomeCareCompanyUpsertWithoutBusinessInput
    disconnect?: boolean
    delete?: boolean
    connect?: HomeCareCompanyWhereUniqueInput
    update?: XOR<HomeCareCompanyUpdateWithoutBusinessInput, HomeCareCompanyUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessRateUncheckedUpdateManyWithoutRateeNestedInput = {
    create?: XOR<Enumerable<BusinessRateCreateWithoutRateeInput>, Enumerable<BusinessRateUncheckedCreateWithoutRateeInput>>
    connectOrCreate?: Enumerable<BusinessRateCreateOrConnectWithoutRateeInput>
    upsert?: Enumerable<BusinessRateUpsertWithWhereUniqueWithoutRateeInput>
    createMany?: BusinessRateCreateManyRateeInputEnvelope
    set?: Enumerable<BusinessRateWhereUniqueInput>
    disconnect?: Enumerable<BusinessRateWhereUniqueInput>
    delete?: Enumerable<BusinessRateWhereUniqueInput>
    connect?: Enumerable<BusinessRateWhereUniqueInput>
    update?: Enumerable<BusinessRateUpdateWithWhereUniqueWithoutRateeInput>
    updateMany?: Enumerable<BusinessRateUpdateManyWithWhereWithoutRateeInput>
    deleteMany?: Enumerable<BusinessRateScalarWhereInput>
  }

  export type BusinessReviewUncheckedUpdateManyWithoutRevieweeNestedInput = {
    create?: XOR<Enumerable<BusinessReviewCreateWithoutRevieweeInput>, Enumerable<BusinessReviewUncheckedCreateWithoutRevieweeInput>>
    connectOrCreate?: Enumerable<BusinessReviewCreateOrConnectWithoutRevieweeInput>
    upsert?: Enumerable<BusinessReviewUpsertWithWhereUniqueWithoutRevieweeInput>
    createMany?: BusinessReviewCreateManyRevieweeInputEnvelope
    set?: Enumerable<BusinessReviewWhereUniqueInput>
    disconnect?: Enumerable<BusinessReviewWhereUniqueInput>
    delete?: Enumerable<BusinessReviewWhereUniqueInput>
    connect?: Enumerable<BusinessReviewWhereUniqueInput>
    update?: Enumerable<BusinessReviewUpdateWithWhereUniqueWithoutRevieweeInput>
    updateMany?: Enumerable<BusinessReviewUpdateManyWithWhereWithoutRevieweeInput>
    deleteMany?: Enumerable<BusinessReviewScalarWhereInput>
  }

  export type BusinessUserCreateNestedOneWithoutReal_estate_agentInput = {
    create?: XOR<BusinessUserCreateWithoutReal_estate_agentInput, BusinessUserUncheckedCreateWithoutReal_estate_agentInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutReal_estate_agentInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type RealEstateSpecializedSubFieldCreateNestedOneWithoutReal_estate_agentsInput = {
    create?: XOR<RealEstateSpecializedSubFieldCreateWithoutReal_estate_agentsInput, RealEstateSpecializedSubFieldUncheckedCreateWithoutReal_estate_agentsInput>
    connectOrCreate?: RealEstateSpecializedSubFieldCreateOrConnectWithoutReal_estate_agentsInput
    connect?: RealEstateSpecializedSubFieldWhereUniqueInput
  }

  export type RealEstatePropertyCreateNestedManyWithoutAgentInput = {
    create?: XOR<Enumerable<RealEstatePropertyCreateWithoutAgentInput>, Enumerable<RealEstatePropertyUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<RealEstatePropertyCreateOrConnectWithoutAgentInput>
    createMany?: RealEstatePropertyCreateManyAgentInputEnvelope
    connect?: Enumerable<RealEstatePropertyWhereUniqueInput>
  }

  export type RealEstatePropertyUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<Enumerable<RealEstatePropertyCreateWithoutAgentInput>, Enumerable<RealEstatePropertyUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<RealEstatePropertyCreateOrConnectWithoutAgentInput>
    createMany?: RealEstatePropertyCreateManyAgentInputEnvelope
    connect?: Enumerable<RealEstatePropertyWhereUniqueInput>
  }

  export type BusinessUserUpdateOneRequiredWithoutReal_estate_agentNestedInput = {
    create?: XOR<BusinessUserCreateWithoutReal_estate_agentInput, BusinessUserUncheckedCreateWithoutReal_estate_agentInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutReal_estate_agentInput
    upsert?: BusinessUserUpsertWithoutReal_estate_agentInput
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutReal_estate_agentInput, BusinessUserUncheckedUpdateWithoutReal_estate_agentInput>
  }

  export type RealEstateSpecializedSubFieldUpdateOneRequiredWithoutReal_estate_agentsNestedInput = {
    create?: XOR<RealEstateSpecializedSubFieldCreateWithoutReal_estate_agentsInput, RealEstateSpecializedSubFieldUncheckedCreateWithoutReal_estate_agentsInput>
    connectOrCreate?: RealEstateSpecializedSubFieldCreateOrConnectWithoutReal_estate_agentsInput
    upsert?: RealEstateSpecializedSubFieldUpsertWithoutReal_estate_agentsInput
    connect?: RealEstateSpecializedSubFieldWhereUniqueInput
    update?: XOR<RealEstateSpecializedSubFieldUpdateWithoutReal_estate_agentsInput, RealEstateSpecializedSubFieldUncheckedUpdateWithoutReal_estate_agentsInput>
  }

  export type RealEstatePropertyUpdateManyWithoutAgentNestedInput = {
    create?: XOR<Enumerable<RealEstatePropertyCreateWithoutAgentInput>, Enumerable<RealEstatePropertyUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<RealEstatePropertyCreateOrConnectWithoutAgentInput>
    upsert?: Enumerable<RealEstatePropertyUpsertWithWhereUniqueWithoutAgentInput>
    createMany?: RealEstatePropertyCreateManyAgentInputEnvelope
    set?: Enumerable<RealEstatePropertyWhereUniqueInput>
    disconnect?: Enumerable<RealEstatePropertyWhereUniqueInput>
    delete?: Enumerable<RealEstatePropertyWhereUniqueInput>
    connect?: Enumerable<RealEstatePropertyWhereUniqueInput>
    update?: Enumerable<RealEstatePropertyUpdateWithWhereUniqueWithoutAgentInput>
    updateMany?: Enumerable<RealEstatePropertyUpdateManyWithWhereWithoutAgentInput>
    deleteMany?: Enumerable<RealEstatePropertyScalarWhereInput>
  }

  export type RealEstatePropertyUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<Enumerable<RealEstatePropertyCreateWithoutAgentInput>, Enumerable<RealEstatePropertyUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<RealEstatePropertyCreateOrConnectWithoutAgentInput>
    upsert?: Enumerable<RealEstatePropertyUpsertWithWhereUniqueWithoutAgentInput>
    createMany?: RealEstatePropertyCreateManyAgentInputEnvelope
    set?: Enumerable<RealEstatePropertyWhereUniqueInput>
    disconnect?: Enumerable<RealEstatePropertyWhereUniqueInput>
    delete?: Enumerable<RealEstatePropertyWhereUniqueInput>
    connect?: Enumerable<RealEstatePropertyWhereUniqueInput>
    update?: Enumerable<RealEstatePropertyUpdateWithWhereUniqueWithoutAgentInput>
    updateMany?: Enumerable<RealEstatePropertyUpdateManyWithWhereWithoutAgentInput>
    deleteMany?: Enumerable<RealEstatePropertyScalarWhereInput>
  }

  export type BusinessUserCreateNestedOneWithoutHome_care_companyInput = {
    create?: XOR<BusinessUserCreateWithoutHome_care_companyInput, BusinessUserUncheckedCreateWithoutHome_care_companyInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutHome_care_companyInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type HomeCareSpecializedSubFieldCreateNestedOneWithoutHome_care_companiesInput = {
    create?: XOR<HomeCareSpecializedSubFieldCreateWithoutHome_care_companiesInput, HomeCareSpecializedSubFieldUncheckedCreateWithoutHome_care_companiesInput>
    connectOrCreate?: HomeCareSpecializedSubFieldCreateOrConnectWithoutHome_care_companiesInput
    connect?: HomeCareSpecializedSubFieldWhereUniqueInput
  }

  export type HomeCareIntroductionImageCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<HomeCareIntroductionImageCreateWithoutCompanyInput>, Enumerable<HomeCareIntroductionImageUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<HomeCareIntroductionImageCreateOrConnectWithoutCompanyInput>
    createMany?: HomeCareIntroductionImageCreateManyCompanyInputEnvelope
    connect?: Enumerable<HomeCareIntroductionImageWhereUniqueInput>
  }

  export type HomeCareIntroductionImageUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<HomeCareIntroductionImageCreateWithoutCompanyInput>, Enumerable<HomeCareIntroductionImageUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<HomeCareIntroductionImageCreateOrConnectWithoutCompanyInput>
    createMany?: HomeCareIntroductionImageCreateManyCompanyInputEnvelope
    connect?: Enumerable<HomeCareIntroductionImageWhereUniqueInput>
  }

  export type BusinessUserUpdateOneRequiredWithoutHome_care_companyNestedInput = {
    create?: XOR<BusinessUserCreateWithoutHome_care_companyInput, BusinessUserUncheckedCreateWithoutHome_care_companyInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutHome_care_companyInput
    upsert?: BusinessUserUpsertWithoutHome_care_companyInput
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutHome_care_companyInput, BusinessUserUncheckedUpdateWithoutHome_care_companyInput>
  }

  export type HomeCareSpecializedSubFieldUpdateOneRequiredWithoutHome_care_companiesNestedInput = {
    create?: XOR<HomeCareSpecializedSubFieldCreateWithoutHome_care_companiesInput, HomeCareSpecializedSubFieldUncheckedCreateWithoutHome_care_companiesInput>
    connectOrCreate?: HomeCareSpecializedSubFieldCreateOrConnectWithoutHome_care_companiesInput
    upsert?: HomeCareSpecializedSubFieldUpsertWithoutHome_care_companiesInput
    connect?: HomeCareSpecializedSubFieldWhereUniqueInput
    update?: XOR<HomeCareSpecializedSubFieldUpdateWithoutHome_care_companiesInput, HomeCareSpecializedSubFieldUncheckedUpdateWithoutHome_care_companiesInput>
  }

  export type HomeCareIntroductionImageUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<HomeCareIntroductionImageCreateWithoutCompanyInput>, Enumerable<HomeCareIntroductionImageUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<HomeCareIntroductionImageCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<HomeCareIntroductionImageUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: HomeCareIntroductionImageCreateManyCompanyInputEnvelope
    set?: Enumerable<HomeCareIntroductionImageWhereUniqueInput>
    disconnect?: Enumerable<HomeCareIntroductionImageWhereUniqueInput>
    delete?: Enumerable<HomeCareIntroductionImageWhereUniqueInput>
    connect?: Enumerable<HomeCareIntroductionImageWhereUniqueInput>
    update?: Enumerable<HomeCareIntroductionImageUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<HomeCareIntroductionImageUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<HomeCareIntroductionImageScalarWhereInput>
  }

  export type HomeCareIntroductionImageUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<HomeCareIntroductionImageCreateWithoutCompanyInput>, Enumerable<HomeCareIntroductionImageUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<HomeCareIntroductionImageCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<HomeCareIntroductionImageUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: HomeCareIntroductionImageCreateManyCompanyInputEnvelope
    set?: Enumerable<HomeCareIntroductionImageWhereUniqueInput>
    disconnect?: Enumerable<HomeCareIntroductionImageWhereUniqueInput>
    delete?: Enumerable<HomeCareIntroductionImageWhereUniqueInput>
    connect?: Enumerable<HomeCareIntroductionImageWhereUniqueInput>
    update?: Enumerable<HomeCareIntroductionImageUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<HomeCareIntroductionImageUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<HomeCareIntroductionImageScalarWhereInput>
  }

  export type HomeCareCompanyCreateNestedOneWithoutIntroduction_imagesInput = {
    create?: XOR<HomeCareCompanyCreateWithoutIntroduction_imagesInput, HomeCareCompanyUncheckedCreateWithoutIntroduction_imagesInput>
    connectOrCreate?: HomeCareCompanyCreateOrConnectWithoutIntroduction_imagesInput
    connect?: HomeCareCompanyWhereUniqueInput
  }

  export type HomeCareCompanyUpdateOneRequiredWithoutIntroduction_imagesNestedInput = {
    create?: XOR<HomeCareCompanyCreateWithoutIntroduction_imagesInput, HomeCareCompanyUncheckedCreateWithoutIntroduction_imagesInput>
    connectOrCreate?: HomeCareCompanyCreateOrConnectWithoutIntroduction_imagesInput
    upsert?: HomeCareCompanyUpsertWithoutIntroduction_imagesInput
    connect?: HomeCareCompanyWhereUniqueInput
    update?: XOR<HomeCareCompanyUpdateWithoutIntroduction_imagesInput, HomeCareCompanyUncheckedUpdateWithoutIntroduction_imagesInput>
  }

  export type RealEstateAgentCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<RealEstateAgentCreateWithoutPropertiesInput, RealEstateAgentUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: RealEstateAgentCreateOrConnectWithoutPropertiesInput
    connect?: RealEstateAgentWhereUniqueInput
  }

  export type RealEstateAgentUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<RealEstateAgentCreateWithoutPropertiesInput, RealEstateAgentUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: RealEstateAgentCreateOrConnectWithoutPropertiesInput
    upsert?: RealEstateAgentUpsertWithoutPropertiesInput
    connect?: RealEstateAgentWhereUniqueInput
    update?: XOR<RealEstateAgentUpdateWithoutPropertiesInput, RealEstateAgentUncheckedUpdateWithoutPropertiesInput>
  }

  export type HomeCareSpecializedSubFieldCreateNestedManyWithoutSuperInput = {
    create?: XOR<Enumerable<HomeCareSpecializedSubFieldCreateWithoutSuperInput>, Enumerable<HomeCareSpecializedSubFieldUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<HomeCareSpecializedSubFieldCreateOrConnectWithoutSuperInput>
    createMany?: HomeCareSpecializedSubFieldCreateManySuperInputEnvelope
    connect?: Enumerable<HomeCareSpecializedSubFieldWhereUniqueInput>
  }

  export type HomeCareSpecializedSubFieldUncheckedCreateNestedManyWithoutSuperInput = {
    create?: XOR<Enumerable<HomeCareSpecializedSubFieldCreateWithoutSuperInput>, Enumerable<HomeCareSpecializedSubFieldUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<HomeCareSpecializedSubFieldCreateOrConnectWithoutSuperInput>
    createMany?: HomeCareSpecializedSubFieldCreateManySuperInputEnvelope
    connect?: Enumerable<HomeCareSpecializedSubFieldWhereUniqueInput>
  }

  export type HomeCareSpecializedSubFieldUpdateManyWithoutSuperNestedInput = {
    create?: XOR<Enumerable<HomeCareSpecializedSubFieldCreateWithoutSuperInput>, Enumerable<HomeCareSpecializedSubFieldUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<HomeCareSpecializedSubFieldCreateOrConnectWithoutSuperInput>
    upsert?: Enumerable<HomeCareSpecializedSubFieldUpsertWithWhereUniqueWithoutSuperInput>
    createMany?: HomeCareSpecializedSubFieldCreateManySuperInputEnvelope
    set?: Enumerable<HomeCareSpecializedSubFieldWhereUniqueInput>
    disconnect?: Enumerable<HomeCareSpecializedSubFieldWhereUniqueInput>
    delete?: Enumerable<HomeCareSpecializedSubFieldWhereUniqueInput>
    connect?: Enumerable<HomeCareSpecializedSubFieldWhereUniqueInput>
    update?: Enumerable<HomeCareSpecializedSubFieldUpdateWithWhereUniqueWithoutSuperInput>
    updateMany?: Enumerable<HomeCareSpecializedSubFieldUpdateManyWithWhereWithoutSuperInput>
    deleteMany?: Enumerable<HomeCareSpecializedSubFieldScalarWhereInput>
  }

  export type HomeCareSpecializedSubFieldUncheckedUpdateManyWithoutSuperNestedInput = {
    create?: XOR<Enumerable<HomeCareSpecializedSubFieldCreateWithoutSuperInput>, Enumerable<HomeCareSpecializedSubFieldUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<HomeCareSpecializedSubFieldCreateOrConnectWithoutSuperInput>
    upsert?: Enumerable<HomeCareSpecializedSubFieldUpsertWithWhereUniqueWithoutSuperInput>
    createMany?: HomeCareSpecializedSubFieldCreateManySuperInputEnvelope
    set?: Enumerable<HomeCareSpecializedSubFieldWhereUniqueInput>
    disconnect?: Enumerable<HomeCareSpecializedSubFieldWhereUniqueInput>
    delete?: Enumerable<HomeCareSpecializedSubFieldWhereUniqueInput>
    connect?: Enumerable<HomeCareSpecializedSubFieldWhereUniqueInput>
    update?: Enumerable<HomeCareSpecializedSubFieldUpdateWithWhereUniqueWithoutSuperInput>
    updateMany?: Enumerable<HomeCareSpecializedSubFieldUpdateManyWithWhereWithoutSuperInput>
    deleteMany?: Enumerable<HomeCareSpecializedSubFieldScalarWhereInput>
  }

  export type HomeCareSpecializedSuperFieldCreateNestedOneWithoutSubInput = {
    create?: XOR<HomeCareSpecializedSuperFieldCreateWithoutSubInput, HomeCareSpecializedSuperFieldUncheckedCreateWithoutSubInput>
    connectOrCreate?: HomeCareSpecializedSuperFieldCreateOrConnectWithoutSubInput
    connect?: HomeCareSpecializedSuperFieldWhereUniqueInput
  }

  export type HomeCareCompanyCreateNestedManyWithoutSpecialized_fieldInput = {
    create?: XOR<Enumerable<HomeCareCompanyCreateWithoutSpecialized_fieldInput>, Enumerable<HomeCareCompanyUncheckedCreateWithoutSpecialized_fieldInput>>
    connectOrCreate?: Enumerable<HomeCareCompanyCreateOrConnectWithoutSpecialized_fieldInput>
    createMany?: HomeCareCompanyCreateManySpecialized_fieldInputEnvelope
    connect?: Enumerable<HomeCareCompanyWhereUniqueInput>
  }

  export type HomeCareCompanyUncheckedCreateNestedManyWithoutSpecialized_fieldInput = {
    create?: XOR<Enumerable<HomeCareCompanyCreateWithoutSpecialized_fieldInput>, Enumerable<HomeCareCompanyUncheckedCreateWithoutSpecialized_fieldInput>>
    connectOrCreate?: Enumerable<HomeCareCompanyCreateOrConnectWithoutSpecialized_fieldInput>
    createMany?: HomeCareCompanyCreateManySpecialized_fieldInputEnvelope
    connect?: Enumerable<HomeCareCompanyWhereUniqueInput>
  }

  export type HomeCareSpecializedSuperFieldUpdateOneRequiredWithoutSubNestedInput = {
    create?: XOR<HomeCareSpecializedSuperFieldCreateWithoutSubInput, HomeCareSpecializedSuperFieldUncheckedCreateWithoutSubInput>
    connectOrCreate?: HomeCareSpecializedSuperFieldCreateOrConnectWithoutSubInput
    upsert?: HomeCareSpecializedSuperFieldUpsertWithoutSubInput
    connect?: HomeCareSpecializedSuperFieldWhereUniqueInput
    update?: XOR<HomeCareSpecializedSuperFieldUpdateWithoutSubInput, HomeCareSpecializedSuperFieldUncheckedUpdateWithoutSubInput>
  }

  export type HomeCareCompanyUpdateManyWithoutSpecialized_fieldNestedInput = {
    create?: XOR<Enumerable<HomeCareCompanyCreateWithoutSpecialized_fieldInput>, Enumerable<HomeCareCompanyUncheckedCreateWithoutSpecialized_fieldInput>>
    connectOrCreate?: Enumerable<HomeCareCompanyCreateOrConnectWithoutSpecialized_fieldInput>
    upsert?: Enumerable<HomeCareCompanyUpsertWithWhereUniqueWithoutSpecialized_fieldInput>
    createMany?: HomeCareCompanyCreateManySpecialized_fieldInputEnvelope
    set?: Enumerable<HomeCareCompanyWhereUniqueInput>
    disconnect?: Enumerable<HomeCareCompanyWhereUniqueInput>
    delete?: Enumerable<HomeCareCompanyWhereUniqueInput>
    connect?: Enumerable<HomeCareCompanyWhereUniqueInput>
    update?: Enumerable<HomeCareCompanyUpdateWithWhereUniqueWithoutSpecialized_fieldInput>
    updateMany?: Enumerable<HomeCareCompanyUpdateManyWithWhereWithoutSpecialized_fieldInput>
    deleteMany?: Enumerable<HomeCareCompanyScalarWhereInput>
  }

  export type HomeCareCompanyUncheckedUpdateManyWithoutSpecialized_fieldNestedInput = {
    create?: XOR<Enumerable<HomeCareCompanyCreateWithoutSpecialized_fieldInput>, Enumerable<HomeCareCompanyUncheckedCreateWithoutSpecialized_fieldInput>>
    connectOrCreate?: Enumerable<HomeCareCompanyCreateOrConnectWithoutSpecialized_fieldInput>
    upsert?: Enumerable<HomeCareCompanyUpsertWithWhereUniqueWithoutSpecialized_fieldInput>
    createMany?: HomeCareCompanyCreateManySpecialized_fieldInputEnvelope
    set?: Enumerable<HomeCareCompanyWhereUniqueInput>
    disconnect?: Enumerable<HomeCareCompanyWhereUniqueInput>
    delete?: Enumerable<HomeCareCompanyWhereUniqueInput>
    connect?: Enumerable<HomeCareCompanyWhereUniqueInput>
    update?: Enumerable<HomeCareCompanyUpdateWithWhereUniqueWithoutSpecialized_fieldInput>
    updateMany?: Enumerable<HomeCareCompanyUpdateManyWithWhereWithoutSpecialized_fieldInput>
    deleteMany?: Enumerable<HomeCareCompanyScalarWhereInput>
  }

  export type RealEstateSpecializedSubFieldCreateNestedManyWithoutSuperInput = {
    create?: XOR<Enumerable<RealEstateSpecializedSubFieldCreateWithoutSuperInput>, Enumerable<RealEstateSpecializedSubFieldUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<RealEstateSpecializedSubFieldCreateOrConnectWithoutSuperInput>
    createMany?: RealEstateSpecializedSubFieldCreateManySuperInputEnvelope
    connect?: Enumerable<RealEstateSpecializedSubFieldWhereUniqueInput>
  }

  export type RealEstateSpecializedSubFieldUncheckedCreateNestedManyWithoutSuperInput = {
    create?: XOR<Enumerable<RealEstateSpecializedSubFieldCreateWithoutSuperInput>, Enumerable<RealEstateSpecializedSubFieldUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<RealEstateSpecializedSubFieldCreateOrConnectWithoutSuperInput>
    createMany?: RealEstateSpecializedSubFieldCreateManySuperInputEnvelope
    connect?: Enumerable<RealEstateSpecializedSubFieldWhereUniqueInput>
  }

  export type RealEstateSpecializedSubFieldUpdateManyWithoutSuperNestedInput = {
    create?: XOR<Enumerable<RealEstateSpecializedSubFieldCreateWithoutSuperInput>, Enumerable<RealEstateSpecializedSubFieldUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<RealEstateSpecializedSubFieldCreateOrConnectWithoutSuperInput>
    upsert?: Enumerable<RealEstateSpecializedSubFieldUpsertWithWhereUniqueWithoutSuperInput>
    createMany?: RealEstateSpecializedSubFieldCreateManySuperInputEnvelope
    set?: Enumerable<RealEstateSpecializedSubFieldWhereUniqueInput>
    disconnect?: Enumerable<RealEstateSpecializedSubFieldWhereUniqueInput>
    delete?: Enumerable<RealEstateSpecializedSubFieldWhereUniqueInput>
    connect?: Enumerable<RealEstateSpecializedSubFieldWhereUniqueInput>
    update?: Enumerable<RealEstateSpecializedSubFieldUpdateWithWhereUniqueWithoutSuperInput>
    updateMany?: Enumerable<RealEstateSpecializedSubFieldUpdateManyWithWhereWithoutSuperInput>
    deleteMany?: Enumerable<RealEstateSpecializedSubFieldScalarWhereInput>
  }

  export type RealEstateSpecializedSubFieldUncheckedUpdateManyWithoutSuperNestedInput = {
    create?: XOR<Enumerable<RealEstateSpecializedSubFieldCreateWithoutSuperInput>, Enumerable<RealEstateSpecializedSubFieldUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<RealEstateSpecializedSubFieldCreateOrConnectWithoutSuperInput>
    upsert?: Enumerable<RealEstateSpecializedSubFieldUpsertWithWhereUniqueWithoutSuperInput>
    createMany?: RealEstateSpecializedSubFieldCreateManySuperInputEnvelope
    set?: Enumerable<RealEstateSpecializedSubFieldWhereUniqueInput>
    disconnect?: Enumerable<RealEstateSpecializedSubFieldWhereUniqueInput>
    delete?: Enumerable<RealEstateSpecializedSubFieldWhereUniqueInput>
    connect?: Enumerable<RealEstateSpecializedSubFieldWhereUniqueInput>
    update?: Enumerable<RealEstateSpecializedSubFieldUpdateWithWhereUniqueWithoutSuperInput>
    updateMany?: Enumerable<RealEstateSpecializedSubFieldUpdateManyWithWhereWithoutSuperInput>
    deleteMany?: Enumerable<RealEstateSpecializedSubFieldScalarWhereInput>
  }

  export type RealEstateSpecializedSuperFieldCreateNestedOneWithoutSubInput = {
    create?: XOR<RealEstateSpecializedSuperFieldCreateWithoutSubInput, RealEstateSpecializedSuperFieldUncheckedCreateWithoutSubInput>
    connectOrCreate?: RealEstateSpecializedSuperFieldCreateOrConnectWithoutSubInput
    connect?: RealEstateSpecializedSuperFieldWhereUniqueInput
  }

  export type RealEstateAgentCreateNestedManyWithoutSpecialized_fieldInput = {
    create?: XOR<Enumerable<RealEstateAgentCreateWithoutSpecialized_fieldInput>, Enumerable<RealEstateAgentUncheckedCreateWithoutSpecialized_fieldInput>>
    connectOrCreate?: Enumerable<RealEstateAgentCreateOrConnectWithoutSpecialized_fieldInput>
    createMany?: RealEstateAgentCreateManySpecialized_fieldInputEnvelope
    connect?: Enumerable<RealEstateAgentWhereUniqueInput>
  }

  export type RealEstateAgentUncheckedCreateNestedManyWithoutSpecialized_fieldInput = {
    create?: XOR<Enumerable<RealEstateAgentCreateWithoutSpecialized_fieldInput>, Enumerable<RealEstateAgentUncheckedCreateWithoutSpecialized_fieldInput>>
    connectOrCreate?: Enumerable<RealEstateAgentCreateOrConnectWithoutSpecialized_fieldInput>
    createMany?: RealEstateAgentCreateManySpecialized_fieldInputEnvelope
    connect?: Enumerable<RealEstateAgentWhereUniqueInput>
  }

  export type RealEstateSpecializedSuperFieldUpdateOneRequiredWithoutSubNestedInput = {
    create?: XOR<RealEstateSpecializedSuperFieldCreateWithoutSubInput, RealEstateSpecializedSuperFieldUncheckedCreateWithoutSubInput>
    connectOrCreate?: RealEstateSpecializedSuperFieldCreateOrConnectWithoutSubInput
    upsert?: RealEstateSpecializedSuperFieldUpsertWithoutSubInput
    connect?: RealEstateSpecializedSuperFieldWhereUniqueInput
    update?: XOR<RealEstateSpecializedSuperFieldUpdateWithoutSubInput, RealEstateSpecializedSuperFieldUncheckedUpdateWithoutSubInput>
  }

  export type RealEstateAgentUpdateManyWithoutSpecialized_fieldNestedInput = {
    create?: XOR<Enumerable<RealEstateAgentCreateWithoutSpecialized_fieldInput>, Enumerable<RealEstateAgentUncheckedCreateWithoutSpecialized_fieldInput>>
    connectOrCreate?: Enumerable<RealEstateAgentCreateOrConnectWithoutSpecialized_fieldInput>
    upsert?: Enumerable<RealEstateAgentUpsertWithWhereUniqueWithoutSpecialized_fieldInput>
    createMany?: RealEstateAgentCreateManySpecialized_fieldInputEnvelope
    set?: Enumerable<RealEstateAgentWhereUniqueInput>
    disconnect?: Enumerable<RealEstateAgentWhereUniqueInput>
    delete?: Enumerable<RealEstateAgentWhereUniqueInput>
    connect?: Enumerable<RealEstateAgentWhereUniqueInput>
    update?: Enumerable<RealEstateAgentUpdateWithWhereUniqueWithoutSpecialized_fieldInput>
    updateMany?: Enumerable<RealEstateAgentUpdateManyWithWhereWithoutSpecialized_fieldInput>
    deleteMany?: Enumerable<RealEstateAgentScalarWhereInput>
  }

  export type RealEstateAgentUncheckedUpdateManyWithoutSpecialized_fieldNestedInput = {
    create?: XOR<Enumerable<RealEstateAgentCreateWithoutSpecialized_fieldInput>, Enumerable<RealEstateAgentUncheckedCreateWithoutSpecialized_fieldInput>>
    connectOrCreate?: Enumerable<RealEstateAgentCreateOrConnectWithoutSpecialized_fieldInput>
    upsert?: Enumerable<RealEstateAgentUpsertWithWhereUniqueWithoutSpecialized_fieldInput>
    createMany?: RealEstateAgentCreateManySpecialized_fieldInputEnvelope
    set?: Enumerable<RealEstateAgentWhereUniqueInput>
    disconnect?: Enumerable<RealEstateAgentWhereUniqueInput>
    delete?: Enumerable<RealEstateAgentWhereUniqueInput>
    connect?: Enumerable<RealEstateAgentWhereUniqueInput>
    update?: Enumerable<RealEstateAgentUpdateWithWhereUniqueWithoutSpecialized_fieldInput>
    updateMany?: Enumerable<RealEstateAgentUpdateManyWithWhereWithoutSpecialized_fieldInput>
    deleteMany?: Enumerable<RealEstateAgentScalarWhereInput>
  }

  export type BusinessUserCreateNestedOneWithoutRatesInput = {
    create?: XOR<BusinessUserCreateWithoutRatesInput, BusinessUserUncheckedCreateWithoutRatesInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutRatesInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutRatesInput = {
    create?: XOR<CustomerCreateWithoutRatesInput, CustomerUncheckedCreateWithoutRatesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRatesInput
    connect?: CustomerWhereUniqueInput
  }

  export type BusinessRateCategoryCreateNestedOneWithoutRatesInput = {
    create?: XOR<BusinessRateCategoryCreateWithoutRatesInput, BusinessRateCategoryUncheckedCreateWithoutRatesInput>
    connectOrCreate?: BusinessRateCategoryCreateOrConnectWithoutRatesInput
    connect?: BusinessRateCategoryWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusinessUserUpdateOneRequiredWithoutRatesNestedInput = {
    create?: XOR<BusinessUserCreateWithoutRatesInput, BusinessUserUncheckedCreateWithoutRatesInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutRatesInput
    upsert?: BusinessUserUpsertWithoutRatesInput
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutRatesInput, BusinessUserUncheckedUpdateWithoutRatesInput>
  }

  export type CustomerUpdateOneRequiredWithoutRatesNestedInput = {
    create?: XOR<CustomerCreateWithoutRatesInput, CustomerUncheckedCreateWithoutRatesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRatesInput
    upsert?: CustomerUpsertWithoutRatesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutRatesInput, CustomerUncheckedUpdateWithoutRatesInput>
  }

  export type BusinessRateCategoryUpdateOneRequiredWithoutRatesNestedInput = {
    create?: XOR<BusinessRateCategoryCreateWithoutRatesInput, BusinessRateCategoryUncheckedCreateWithoutRatesInput>
    connectOrCreate?: BusinessRateCategoryCreateOrConnectWithoutRatesInput
    upsert?: BusinessRateCategoryUpsertWithoutRatesInput
    connect?: BusinessRateCategoryWhereUniqueInput
    update?: XOR<BusinessRateCategoryUpdateWithoutRatesInput, BusinessRateCategoryUncheckedUpdateWithoutRatesInput>
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

  export type BusinessUserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<BusinessUserCreateWithoutReviewsInput, BusinessUserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutReviewsInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutReviewsInput = {
    create?: XOR<CustomerCreateWithoutReviewsInput, CustomerUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutReviewsInput
    connect?: CustomerWhereUniqueInput
  }

  export type BusinessUserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<BusinessUserCreateWithoutReviewsInput, BusinessUserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutReviewsInput
    upsert?: BusinessUserUpsertWithoutReviewsInput
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutReviewsInput, BusinessUserUncheckedUpdateWithoutReviewsInput>
  }

  export type CustomerUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<CustomerCreateWithoutReviewsInput, CustomerUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutReviewsInput
    upsert?: CustomerUpsertWithoutReviewsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutReviewsInput, CustomerUncheckedUpdateWithoutReviewsInput>
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

  export type UserCreateNestedOneWithoutBoard_articlesInput = {
    create?: XOR<UserCreateWithoutBoard_articlesInput, UserUncheckedCreateWithoutBoard_articlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoard_articlesInput
    connect?: UserWhereUniqueInput
  }

  export type BoardCreateNestedOneWithoutArticlesInput = {
    create?: XOR<BoardCreateWithoutArticlesInput, BoardUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: BoardCreateOrConnectWithoutArticlesInput
    connect?: BoardWhereUniqueInput
  }

  export type BoardArticleContentCreateNestedManyWithoutArticleInput = {
    create?: XOR<Enumerable<BoardArticleContentCreateWithoutArticleInput>, Enumerable<BoardArticleContentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<BoardArticleContentCreateOrConnectWithoutArticleInput>
    createMany?: BoardArticleContentCreateManyArticleInputEnvelope
    connect?: Enumerable<BoardArticleContentWhereUniqueInput>
  }

  export type BoardCommentCreateNestedManyWithoutArticleInput = {
    create?: XOR<Enumerable<BoardCommentCreateWithoutArticleInput>, Enumerable<BoardCommentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<BoardCommentCreateOrConnectWithoutArticleInput>
    createMany?: BoardCommentCreateManyArticleInputEnvelope
    connect?: Enumerable<BoardCommentWhereUniqueInput>
  }

  export type BoardArticleContentUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<Enumerable<BoardArticleContentCreateWithoutArticleInput>, Enumerable<BoardArticleContentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<BoardArticleContentCreateOrConnectWithoutArticleInput>
    createMany?: BoardArticleContentCreateManyArticleInputEnvelope
    connect?: Enumerable<BoardArticleContentWhereUniqueInput>
  }

  export type BoardCommentUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<Enumerable<BoardCommentCreateWithoutArticleInput>, Enumerable<BoardCommentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<BoardCommentCreateOrConnectWithoutArticleInput>
    createMany?: BoardCommentCreateManyArticleInputEnvelope
    connect?: Enumerable<BoardCommentWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutBoard_articlesNestedInput = {
    create?: XOR<UserCreateWithoutBoard_articlesInput, UserUncheckedCreateWithoutBoard_articlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoard_articlesInput
    upsert?: UserUpsertWithoutBoard_articlesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBoard_articlesInput, UserUncheckedUpdateWithoutBoard_articlesInput>
  }

  export type BoardUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<BoardCreateWithoutArticlesInput, BoardUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: BoardCreateOrConnectWithoutArticlesInput
    upsert?: BoardUpsertWithoutArticlesInput
    connect?: BoardWhereUniqueInput
    update?: XOR<BoardUpdateWithoutArticlesInput, BoardUncheckedUpdateWithoutArticlesInput>
  }

  export type BoardArticleContentUpdateManyWithoutArticleNestedInput = {
    create?: XOR<Enumerable<BoardArticleContentCreateWithoutArticleInput>, Enumerable<BoardArticleContentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<BoardArticleContentCreateOrConnectWithoutArticleInput>
    upsert?: Enumerable<BoardArticleContentUpsertWithWhereUniqueWithoutArticleInput>
    createMany?: BoardArticleContentCreateManyArticleInputEnvelope
    set?: Enumerable<BoardArticleContentWhereUniqueInput>
    disconnect?: Enumerable<BoardArticleContentWhereUniqueInput>
    delete?: Enumerable<BoardArticleContentWhereUniqueInput>
    connect?: Enumerable<BoardArticleContentWhereUniqueInput>
    update?: Enumerable<BoardArticleContentUpdateWithWhereUniqueWithoutArticleInput>
    updateMany?: Enumerable<BoardArticleContentUpdateManyWithWhereWithoutArticleInput>
    deleteMany?: Enumerable<BoardArticleContentScalarWhereInput>
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

  export type BoardArticleContentUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<Enumerable<BoardArticleContentCreateWithoutArticleInput>, Enumerable<BoardArticleContentUncheckedCreateWithoutArticleInput>>
    connectOrCreate?: Enumerable<BoardArticleContentCreateOrConnectWithoutArticleInput>
    upsert?: Enumerable<BoardArticleContentUpsertWithWhereUniqueWithoutArticleInput>
    createMany?: BoardArticleContentCreateManyArticleInputEnvelope
    set?: Enumerable<BoardArticleContentWhereUniqueInput>
    disconnect?: Enumerable<BoardArticleContentWhereUniqueInput>
    delete?: Enumerable<BoardArticleContentWhereUniqueInput>
    connect?: Enumerable<BoardArticleContentWhereUniqueInput>
    update?: Enumerable<BoardArticleContentUpdateWithWhereUniqueWithoutArticleInput>
    updateMany?: Enumerable<BoardArticleContentUpdateManyWithWhereWithoutArticleInput>
    deleteMany?: Enumerable<BoardArticleContentScalarWhereInput>
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

  export type BoardArticleCreateNestedOneWithoutContentsInput = {
    create?: XOR<BoardArticleCreateWithoutContentsInput, BoardArticleUncheckedCreateWithoutContentsInput>
    connectOrCreate?: BoardArticleCreateOrConnectWithoutContentsInput
    connect?: BoardArticleWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoardArticleUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<BoardArticleCreateWithoutContentsInput, BoardArticleUncheckedCreateWithoutContentsInput>
    connectOrCreate?: BoardArticleCreateOrConnectWithoutContentsInput
    upsert?: BoardArticleUpsertWithoutContentsInput
    connect?: BoardArticleWhereUniqueInput
    update?: XOR<BoardArticleUpdateWithoutContentsInput, BoardArticleUncheckedUpdateWithoutContentsInput>
  }

  export type UserCreateNestedOneWithoutBoard_commentsInput = {
    create?: XOR<UserCreateWithoutBoard_commentsInput, UserUncheckedCreateWithoutBoard_commentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoard_commentsInput
    connect?: UserWhereUniqueInput
  }

  export type BoardArticleCreateNestedOneWithoutCommentsInput = {
    create?: XOR<BoardArticleCreateWithoutCommentsInput, BoardArticleUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BoardArticleCreateOrConnectWithoutCommentsInput
    connect?: BoardArticleWhereUniqueInput
  }

  export type BoardCommentContentCreateNestedManyWithoutCommentInput = {
    create?: XOR<Enumerable<BoardCommentContentCreateWithoutCommentInput>, Enumerable<BoardCommentContentUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<BoardCommentContentCreateOrConnectWithoutCommentInput>
    createMany?: BoardCommentContentCreateManyCommentInputEnvelope
    connect?: Enumerable<BoardCommentContentWhereUniqueInput>
  }

  export type BoardCommentContentUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<Enumerable<BoardCommentContentCreateWithoutCommentInput>, Enumerable<BoardCommentContentUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<BoardCommentContentCreateOrConnectWithoutCommentInput>
    createMany?: BoardCommentContentCreateManyCommentInputEnvelope
    connect?: Enumerable<BoardCommentContentWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutBoard_commentsNestedInput = {
    create?: XOR<UserCreateWithoutBoard_commentsInput, UserUncheckedCreateWithoutBoard_commentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoard_commentsInput
    upsert?: UserUpsertWithoutBoard_commentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBoard_commentsInput, UserUncheckedUpdateWithoutBoard_commentsInput>
  }

  export type BoardArticleUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<BoardArticleCreateWithoutCommentsInput, BoardArticleUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BoardArticleCreateOrConnectWithoutCommentsInput
    upsert?: BoardArticleUpsertWithoutCommentsInput
    connect?: BoardArticleWhereUniqueInput
    update?: XOR<BoardArticleUpdateWithoutCommentsInput, BoardArticleUncheckedUpdateWithoutCommentsInput>
  }

  export type BoardCommentContentUpdateManyWithoutCommentNestedInput = {
    create?: XOR<Enumerable<BoardCommentContentCreateWithoutCommentInput>, Enumerable<BoardCommentContentUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<BoardCommentContentCreateOrConnectWithoutCommentInput>
    upsert?: Enumerable<BoardCommentContentUpsertWithWhereUniqueWithoutCommentInput>
    createMany?: BoardCommentContentCreateManyCommentInputEnvelope
    set?: Enumerable<BoardCommentContentWhereUniqueInput>
    disconnect?: Enumerable<BoardCommentContentWhereUniqueInput>
    delete?: Enumerable<BoardCommentContentWhereUniqueInput>
    connect?: Enumerable<BoardCommentContentWhereUniqueInput>
    update?: Enumerable<BoardCommentContentUpdateWithWhereUniqueWithoutCommentInput>
    updateMany?: Enumerable<BoardCommentContentUpdateManyWithWhereWithoutCommentInput>
    deleteMany?: Enumerable<BoardCommentContentScalarWhereInput>
  }

  export type BoardCommentContentUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<Enumerable<BoardCommentContentCreateWithoutCommentInput>, Enumerable<BoardCommentContentUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<BoardCommentContentCreateOrConnectWithoutCommentInput>
    upsert?: Enumerable<BoardCommentContentUpsertWithWhereUniqueWithoutCommentInput>
    createMany?: BoardCommentContentCreateManyCommentInputEnvelope
    set?: Enumerable<BoardCommentContentWhereUniqueInput>
    disconnect?: Enumerable<BoardCommentContentWhereUniqueInput>
    delete?: Enumerable<BoardCommentContentWhereUniqueInput>
    connect?: Enumerable<BoardCommentContentWhereUniqueInput>
    update?: Enumerable<BoardCommentContentUpdateWithWhereUniqueWithoutCommentInput>
    updateMany?: Enumerable<BoardCommentContentUpdateManyWithWhereWithoutCommentInput>
    deleteMany?: Enumerable<BoardCommentContentScalarWhereInput>
  }

  export type BoardCommentCreateNestedOneWithoutContentsInput = {
    create?: XOR<BoardCommentCreateWithoutContentsInput, BoardCommentUncheckedCreateWithoutContentsInput>
    connectOrCreate?: BoardCommentCreateOrConnectWithoutContentsInput
    connect?: BoardCommentWhereUniqueInput
  }

  export type BoardCommentUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<BoardCommentCreateWithoutContentsInput, BoardCommentUncheckedCreateWithoutContentsInput>
    connectOrCreate?: BoardCommentCreateOrConnectWithoutContentsInput
    upsert?: BoardCommentUpsertWithoutContentsInput
    connect?: BoardCommentWhereUniqueInput
    update?: XOR<BoardCommentUpdateWithoutContentsInput, BoardCommentUncheckedUpdateWithoutContentsInput>
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

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BusinessUserCreateWithoutAuthenticationsInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    user: UserCreateNestedOneWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentCreateNestedOneWithoutBusinessInput
    home_care_company?: HomeCareCompanyCreateNestedOneWithoutBusinessInput
    rates?: BusinessRateCreateNestedManyWithoutRateeInput
    reviews?: BusinessReviewCreateNestedManyWithoutRevieweeInput
  }

  export type BusinessUserUncheckedCreateWithoutAuthenticationsInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    real_estate_agent?: RealEstateAgentUncheckedCreateNestedOneWithoutBusinessInput
    home_care_company?: HomeCareCompanyUncheckedCreateNestedOneWithoutBusinessInput
    rates?: BusinessRateUncheckedCreateNestedManyWithoutRateeInput
    reviews?: BusinessReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type BusinessUserCreateOrConnectWithoutAuthenticationsInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutAuthenticationsInput, BusinessUserUncheckedCreateWithoutAuthenticationsInput>
  }

  export type CustomerCreateWithoutAuthenticationsInput = {
    birth?: string | null
    gender?: string | null
    user: UserCreateNestedOneWithoutCustomerInput
    rates?: BusinessRateCreateNestedManyWithoutRaterInput
    reviews?: BusinessReviewCreateNestedManyWithoutReviewerInput
  }

  export type CustomerUncheckedCreateWithoutAuthenticationsInput = {
    id: string
    birth?: string | null
    gender?: string | null
    rates?: BusinessRateUncheckedCreateNestedManyWithoutRaterInput
    reviews?: BusinessReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type CustomerCreateOrConnectWithoutAuthenticationsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutAuthenticationsInput, CustomerUncheckedCreateWithoutAuthenticationsInput>
  }

  export type BusinessUserUpsertWithoutAuthenticationsInput = {
    update: XOR<BusinessUserUpdateWithoutAuthenticationsInput, BusinessUserUncheckedUpdateWithoutAuthenticationsInput>
    create: XOR<BusinessUserCreateWithoutAuthenticationsInput, BusinessUserUncheckedCreateWithoutAuthenticationsInput>
  }

  export type BusinessUserUpdateWithoutAuthenticationsInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUpdateOneWithoutBusinessNestedInput
    home_care_company?: HomeCareCompanyUpdateOneWithoutBusinessNestedInput
    rates?: BusinessRateUpdateManyWithoutRateeNestedInput
    reviews?: BusinessReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutAuthenticationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    real_estate_agent?: RealEstateAgentUncheckedUpdateOneWithoutBusinessNestedInput
    home_care_company?: HomeCareCompanyUncheckedUpdateOneWithoutBusinessNestedInput
    rates?: BusinessRateUncheckedUpdateManyWithoutRateeNestedInput
    reviews?: BusinessReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type CustomerUpsertWithoutAuthenticationsInput = {
    update: XOR<CustomerUpdateWithoutAuthenticationsInput, CustomerUncheckedUpdateWithoutAuthenticationsInput>
    create: XOR<CustomerCreateWithoutAuthenticationsInput, CustomerUncheckedCreateWithoutAuthenticationsInput>
  }

  export type CustomerUpdateWithoutAuthenticationsInput = {
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    rates?: BusinessRateUpdateManyWithoutRaterNestedInput
    reviews?: BusinessReviewUpdateManyWithoutReviewerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutAuthenticationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    rates?: BusinessRateUncheckedUpdateManyWithoutRaterNestedInput
    reviews?: BusinessReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type CustomerCreateWithoutUserInput = {
    birth?: string | null
    gender?: string | null
    authentications?: AuthenticationCreateNestedManyWithoutCustomerInput
    rates?: BusinessRateCreateNestedManyWithoutRaterInput
    reviews?: BusinessReviewCreateNestedManyWithoutReviewerInput
  }

  export type CustomerUncheckedCreateWithoutUserInput = {
    birth?: string | null
    gender?: string | null
    authentications?: AuthenticationUncheckedCreateNestedManyWithoutCustomerInput
    rates?: BusinessRateUncheckedCreateNestedManyWithoutRaterInput
    reviews?: BusinessReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type CustomerCreateOrConnectWithoutUserInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type BusinessUserCreateWithoutUserInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    authentications?: AuthenticationCreateNestedManyWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentCreateNestedOneWithoutBusinessInput
    home_care_company?: HomeCareCompanyCreateNestedOneWithoutBusinessInput
    rates?: BusinessRateCreateNestedManyWithoutRateeInput
    reviews?: BusinessReviewCreateNestedManyWithoutRevieweeInput
  }

  export type BusinessUserUncheckedCreateWithoutUserInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    authentications?: AuthenticationUncheckedCreateNestedManyWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentUncheckedCreateNestedOneWithoutBusinessInput
    home_care_company?: HomeCareCompanyUncheckedCreateNestedOneWithoutBusinessInput
    rates?: BusinessRateUncheckedCreateNestedManyWithoutRateeInput
    reviews?: BusinessReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type BusinessUserCreateOrConnectWithoutUserInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutUserInput, BusinessUserUncheckedCreateWithoutUserInput>
  }

  export type BoardArticleCreateWithoutAuthorInput = {
    id: string
    title: string
    board: BoardCreateNestedOneWithoutArticlesInput
    contents?: BoardArticleContentCreateNestedManyWithoutArticleInput
    comments?: BoardCommentCreateNestedManyWithoutArticleInput
  }

  export type BoardArticleUncheckedCreateWithoutAuthorInput = {
    id: string
    title: string
    board_id: string
    contents?: BoardArticleContentUncheckedCreateNestedManyWithoutArticleInput
    comments?: BoardCommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type BoardArticleCreateOrConnectWithoutAuthorInput = {
    where: BoardArticleWhereUniqueInput
    create: XOR<BoardArticleCreateWithoutAuthorInput, BoardArticleUncheckedCreateWithoutAuthorInput>
  }

  export type BoardArticleCreateManyAuthorInputEnvelope = {
    data: Enumerable<BoardArticleCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type BoardCommentCreateWithoutAuthorInput = {
    id: string
    article: BoardArticleCreateNestedOneWithoutCommentsInput
    contents?: BoardCommentContentCreateNestedManyWithoutCommentInput
  }

  export type BoardCommentUncheckedCreateWithoutAuthorInput = {
    id: string
    article_id: string
    contents?: BoardCommentContentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type BoardCommentCreateOrConnectWithoutAuthorInput = {
    where: BoardCommentWhereUniqueInput
    create: XOR<BoardCommentCreateWithoutAuthorInput, BoardCommentUncheckedCreateWithoutAuthorInput>
  }

  export type BoardCommentCreateManyAuthorInputEnvelope = {
    data: Enumerable<BoardCommentCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutUserInput = {
    update: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CustomerUpdateWithoutUserInput = {
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    authentications?: AuthenticationUpdateManyWithoutCustomerNestedInput
    rates?: BusinessRateUpdateManyWithoutRaterNestedInput
    reviews?: BusinessReviewUpdateManyWithoutReviewerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutUserInput = {
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    authentications?: AuthenticationUncheckedUpdateManyWithoutCustomerNestedInput
    rates?: BusinessRateUncheckedUpdateManyWithoutRaterNestedInput
    reviews?: BusinessReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type BusinessUserUpsertWithoutUserInput = {
    update: XOR<BusinessUserUpdateWithoutUserInput, BusinessUserUncheckedUpdateWithoutUserInput>
    create: XOR<BusinessUserCreateWithoutUserInput, BusinessUserUncheckedCreateWithoutUserInput>
  }

  export type BusinessUserUpdateWithoutUserInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    authentications?: AuthenticationUpdateManyWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUpdateOneWithoutBusinessNestedInput
    home_care_company?: HomeCareCompanyUpdateOneWithoutBusinessNestedInput
    rates?: BusinessRateUpdateManyWithoutRateeNestedInput
    reviews?: BusinessReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutUserInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    authentications?: AuthenticationUncheckedUpdateManyWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUncheckedUpdateOneWithoutBusinessNestedInput
    home_care_company?: HomeCareCompanyUncheckedUpdateOneWithoutBusinessNestedInput
    rates?: BusinessRateUncheckedUpdateManyWithoutRateeNestedInput
    reviews?: BusinessReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type BoardArticleUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BoardArticleWhereUniqueInput
    update: XOR<BoardArticleUpdateWithoutAuthorInput, BoardArticleUncheckedUpdateWithoutAuthorInput>
    create: XOR<BoardArticleCreateWithoutAuthorInput, BoardArticleUncheckedCreateWithoutAuthorInput>
  }

  export type BoardArticleUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BoardArticleWhereUniqueInput
    data: XOR<BoardArticleUpdateWithoutAuthorInput, BoardArticleUncheckedUpdateWithoutAuthorInput>
  }

  export type BoardArticleUpdateManyWithWhereWithoutAuthorInput = {
    where: BoardArticleScalarWhereInput
    data: XOR<BoardArticleUpdateManyMutationInput, BoardArticleUncheckedUpdateManyWithoutBoard_articlesInput>
  }

  export type BoardArticleScalarWhereInput = {
    AND?: Enumerable<BoardArticleScalarWhereInput>
    OR?: Enumerable<BoardArticleScalarWhereInput>
    NOT?: Enumerable<BoardArticleScalarWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    author_id?: StringFilter | string
    board_id?: StringFilter | string
  }

  export type BoardCommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BoardCommentWhereUniqueInput
    update: XOR<BoardCommentUpdateWithoutAuthorInput, BoardCommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<BoardCommentCreateWithoutAuthorInput, BoardCommentUncheckedCreateWithoutAuthorInput>
  }

  export type BoardCommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BoardCommentWhereUniqueInput
    data: XOR<BoardCommentUpdateWithoutAuthorInput, BoardCommentUncheckedUpdateWithoutAuthorInput>
  }

  export type BoardCommentUpdateManyWithWhereWithoutAuthorInput = {
    where: BoardCommentScalarWhereInput
    data: XOR<BoardCommentUpdateManyMutationInput, BoardCommentUncheckedUpdateManyWithoutBoard_commentsInput>
  }

  export type BoardCommentScalarWhereInput = {
    AND?: Enumerable<BoardCommentScalarWhereInput>
    OR?: Enumerable<BoardCommentScalarWhereInput>
    NOT?: Enumerable<BoardCommentScalarWhereInput>
    id?: StringFilter | string
    author_id?: StringFilter | string
    article_id?: StringFilter | string
  }

  export type UserCreateWithoutCustomerInput = {
    id: string
    name: string
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    address_first?: string | null
    address_second?: string | null
    profile_image?: string | null
    business_user?: BusinessUserCreateNestedOneWithoutUserInput
    board_articles?: BoardArticleCreateNestedManyWithoutAuthorInput
    board_comments?: BoardCommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutCustomerInput = {
    id: string
    name: string
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    address_first?: string | null
    address_second?: string | null
    profile_image?: string | null
    business_user?: BusinessUserUncheckedCreateNestedOneWithoutUserInput
    board_articles?: BoardArticleUncheckedCreateNestedManyWithoutAuthorInput
    board_comments?: BoardCommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
  }

  export type AuthenticationCreateWithoutCustomerInput = {
    id: string
    oauth_sub: string
    oauth_type: string
    business_user?: BusinessUserCreateNestedOneWithoutAuthenticationsInput
  }

  export type AuthenticationUncheckedCreateWithoutCustomerInput = {
    id: string
    oauth_sub: string
    oauth_type: string
    business_user_id?: string | null
  }

  export type AuthenticationCreateOrConnectWithoutCustomerInput = {
    where: AuthenticationWhereUniqueInput
    create: XOR<AuthenticationCreateWithoutCustomerInput, AuthenticationUncheckedCreateWithoutCustomerInput>
  }

  export type AuthenticationCreateManyCustomerInputEnvelope = {
    data: Enumerable<AuthenticationCreateManyCustomerInput>
    skipDuplicates?: boolean
  }

  export type BusinessRateCreateWithoutRaterInput = {
    id: string
    rate: number
    ratee: BusinessUserCreateNestedOneWithoutRatesInput
    category: BusinessRateCategoryCreateNestedOneWithoutRatesInput
  }

  export type BusinessRateUncheckedCreateWithoutRaterInput = {
    id: string
    category_id: string
    ratee_id: string
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
    review: string
    reviewee: BusinessUserCreateNestedOneWithoutReviewsInput
  }

  export type BusinessReviewUncheckedCreateWithoutReviewerInput = {
    id: string
    reviewee_id: string
    review: string
  }

  export type BusinessReviewCreateOrConnectWithoutReviewerInput = {
    where: BusinessReviewWhereUniqueInput
    create: XOR<BusinessReviewCreateWithoutReviewerInput, BusinessReviewUncheckedCreateWithoutReviewerInput>
  }

  export type BusinessReviewCreateManyReviewerInputEnvelope = {
    data: Enumerable<BusinessReviewCreateManyReviewerInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCustomerInput = {
    update: XOR<UserUpdateWithoutCustomerInput, UserUncheckedUpdateWithoutCustomerInput>
    create: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
  }

  export type UserUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    business_user?: BusinessUserUpdateOneWithoutUserNestedInput
    board_articles?: BoardArticleUpdateManyWithoutAuthorNestedInput
    board_comments?: BoardCommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    business_user?: BusinessUserUncheckedUpdateOneWithoutUserNestedInput
    board_articles?: BoardArticleUncheckedUpdateManyWithoutAuthorNestedInput
    board_comments?: BoardCommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthenticationUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AuthenticationWhereUniqueInput
    update: XOR<AuthenticationUpdateWithoutCustomerInput, AuthenticationUncheckedUpdateWithoutCustomerInput>
    create: XOR<AuthenticationCreateWithoutCustomerInput, AuthenticationUncheckedCreateWithoutCustomerInput>
  }

  export type AuthenticationUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AuthenticationWhereUniqueInput
    data: XOR<AuthenticationUpdateWithoutCustomerInput, AuthenticationUncheckedUpdateWithoutCustomerInput>
  }

  export type AuthenticationUpdateManyWithWhereWithoutCustomerInput = {
    where: AuthenticationScalarWhereInput
    data: XOR<AuthenticationUpdateManyMutationInput, AuthenticationUncheckedUpdateManyWithoutAuthenticationsInput>
  }

  export type AuthenticationScalarWhereInput = {
    AND?: Enumerable<AuthenticationScalarWhereInput>
    OR?: Enumerable<AuthenticationScalarWhereInput>
    NOT?: Enumerable<AuthenticationScalarWhereInput>
    id?: StringFilter | string
    oauth_sub?: StringFilter | string
    oauth_type?: StringFilter | string
    business_user_id?: StringNullableFilter | string | null
    customer_id?: StringNullableFilter | string | null
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
    data: XOR<BusinessRateUpdateManyMutationInput, BusinessRateUncheckedUpdateManyWithoutRatesInput>
  }

  export type BusinessRateScalarWhereInput = {
    AND?: Enumerable<BusinessRateScalarWhereInput>
    OR?: Enumerable<BusinessRateScalarWhereInput>
    NOT?: Enumerable<BusinessRateScalarWhereInput>
    id?: StringFilter | string
    category_id?: StringFilter | string
    ratee_id?: StringFilter | string
    rater_id?: StringFilter | string
    rate?: IntFilter | number
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
    data: XOR<BusinessReviewUpdateManyMutationInput, BusinessReviewUncheckedUpdateManyWithoutReviewsInput>
  }

  export type BusinessReviewScalarWhereInput = {
    AND?: Enumerable<BusinessReviewScalarWhereInput>
    OR?: Enumerable<BusinessReviewScalarWhereInput>
    NOT?: Enumerable<BusinessReviewScalarWhereInput>
    id?: StringFilter | string
    reviewee_id?: StringFilter | string
    reviewer_id?: StringFilter | string
    review?: StringFilter | string
  }

  export type UserCreateWithoutBusiness_userInput = {
    id: string
    name: string
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    address_first?: string | null
    address_second?: string | null
    profile_image?: string | null
    customer?: CustomerCreateNestedOneWithoutUserInput
    board_articles?: BoardArticleCreateNestedManyWithoutAuthorInput
    board_comments?: BoardCommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutBusiness_userInput = {
    id: string
    name: string
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    address_first?: string | null
    address_second?: string | null
    profile_image?: string | null
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
    board_articles?: BoardArticleUncheckedCreateNestedManyWithoutAuthorInput
    board_comments?: BoardCommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutBusiness_userInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusiness_userInput, UserUncheckedCreateWithoutBusiness_userInput>
  }

  export type AuthenticationCreateWithoutBusiness_userInput = {
    id: string
    oauth_sub: string
    oauth_type: string
    customer?: CustomerCreateNestedOneWithoutAuthenticationsInput
  }

  export type AuthenticationUncheckedCreateWithoutBusiness_userInput = {
    id: string
    oauth_sub: string
    oauth_type: string
    customer_id?: string | null
  }

  export type AuthenticationCreateOrConnectWithoutBusiness_userInput = {
    where: AuthenticationWhereUniqueInput
    create: XOR<AuthenticationCreateWithoutBusiness_userInput, AuthenticationUncheckedCreateWithoutBusiness_userInput>
  }

  export type AuthenticationCreateManyBusiness_userInputEnvelope = {
    data: Enumerable<AuthenticationCreateManyBusiness_userInput>
    skipDuplicates?: boolean
  }

  export type RealEstateAgentCreateWithoutBusinessInput = {
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    real_estate_phone: string
    licensed_agent_name: string
    specialized_field: RealEstateSpecializedSubFieldCreateNestedOneWithoutReal_estate_agentsInput
    properties?: RealEstatePropertyCreateNestedManyWithoutAgentInput
  }

  export type RealEstateAgentUncheckedCreateWithoutBusinessInput = {
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    real_estate_phone: string
    licensed_agent_name: string
    specialized_field_id: string
    properties?: RealEstatePropertyUncheckedCreateNestedManyWithoutAgentInput
  }

  export type RealEstateAgentCreateOrConnectWithoutBusinessInput = {
    where: RealEstateAgentWhereUniqueInput
    create: XOR<RealEstateAgentCreateWithoutBusinessInput, RealEstateAgentUncheckedCreateWithoutBusinessInput>
  }

  export type HomeCareCompanyCreateWithoutBusinessInput = {
    business_registration_num: string
    specialized_field: HomeCareSpecializedSubFieldCreateNestedOneWithoutHome_care_companiesInput
    introduction_images?: HomeCareIntroductionImageCreateNestedManyWithoutCompanyInput
  }

  export type HomeCareCompanyUncheckedCreateWithoutBusinessInput = {
    business_registration_num: string
    specialized_field_id: string
    introduction_images?: HomeCareIntroductionImageUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type HomeCareCompanyCreateOrConnectWithoutBusinessInput = {
    where: HomeCareCompanyWhereUniqueInput
    create: XOR<HomeCareCompanyCreateWithoutBusinessInput, HomeCareCompanyUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessRateCreateWithoutRateeInput = {
    id: string
    rate: number
    rater: CustomerCreateNestedOneWithoutRatesInput
    category: BusinessRateCategoryCreateNestedOneWithoutRatesInput
  }

  export type BusinessRateUncheckedCreateWithoutRateeInput = {
    id: string
    category_id: string
    rater_id: string
    rate: number
  }

  export type BusinessRateCreateOrConnectWithoutRateeInput = {
    where: BusinessRateWhereUniqueInput
    create: XOR<BusinessRateCreateWithoutRateeInput, BusinessRateUncheckedCreateWithoutRateeInput>
  }

  export type BusinessRateCreateManyRateeInputEnvelope = {
    data: Enumerable<BusinessRateCreateManyRateeInput>
    skipDuplicates?: boolean
  }

  export type BusinessReviewCreateWithoutRevieweeInput = {
    id: string
    review: string
    reviewer: CustomerCreateNestedOneWithoutReviewsInput
  }

  export type BusinessReviewUncheckedCreateWithoutRevieweeInput = {
    id: string
    reviewer_id: string
    review: string
  }

  export type BusinessReviewCreateOrConnectWithoutRevieweeInput = {
    where: BusinessReviewWhereUniqueInput
    create: XOR<BusinessReviewCreateWithoutRevieweeInput, BusinessReviewUncheckedCreateWithoutRevieweeInput>
  }

  export type BusinessReviewCreateManyRevieweeInputEnvelope = {
    data: Enumerable<BusinessReviewCreateManyRevieweeInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBusiness_userInput = {
    update: XOR<UserUpdateWithoutBusiness_userInput, UserUncheckedUpdateWithoutBusiness_userInput>
    create: XOR<UserCreateWithoutBusiness_userInput, UserUncheckedCreateWithoutBusiness_userInput>
  }

  export type UserUpdateWithoutBusiness_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerUpdateOneWithoutUserNestedInput
    board_articles?: BoardArticleUpdateManyWithoutAuthorNestedInput
    board_comments?: BoardCommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutBusiness_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
    board_articles?: BoardArticleUncheckedUpdateManyWithoutAuthorNestedInput
    board_comments?: BoardCommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthenticationUpsertWithWhereUniqueWithoutBusiness_userInput = {
    where: AuthenticationWhereUniqueInput
    update: XOR<AuthenticationUpdateWithoutBusiness_userInput, AuthenticationUncheckedUpdateWithoutBusiness_userInput>
    create: XOR<AuthenticationCreateWithoutBusiness_userInput, AuthenticationUncheckedCreateWithoutBusiness_userInput>
  }

  export type AuthenticationUpdateWithWhereUniqueWithoutBusiness_userInput = {
    where: AuthenticationWhereUniqueInput
    data: XOR<AuthenticationUpdateWithoutBusiness_userInput, AuthenticationUncheckedUpdateWithoutBusiness_userInput>
  }

  export type AuthenticationUpdateManyWithWhereWithoutBusiness_userInput = {
    where: AuthenticationScalarWhereInput
    data: XOR<AuthenticationUpdateManyMutationInput, AuthenticationUncheckedUpdateManyWithoutAuthenticationsInput>
  }

  export type RealEstateAgentUpsertWithoutBusinessInput = {
    update: XOR<RealEstateAgentUpdateWithoutBusinessInput, RealEstateAgentUncheckedUpdateWithoutBusinessInput>
    create: XOR<RealEstateAgentCreateWithoutBusinessInput, RealEstateAgentUncheckedCreateWithoutBusinessInput>
  }

  export type RealEstateAgentUpdateWithoutBusinessInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
    specialized_field?: RealEstateSpecializedSubFieldUpdateOneRequiredWithoutReal_estate_agentsNestedInput
    properties?: RealEstatePropertyUpdateManyWithoutAgentNestedInput
  }

  export type RealEstateAgentUncheckedUpdateWithoutBusinessInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
    specialized_field_id?: StringFieldUpdateOperationsInput | string
    properties?: RealEstatePropertyUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type HomeCareCompanyUpsertWithoutBusinessInput = {
    update: XOR<HomeCareCompanyUpdateWithoutBusinessInput, HomeCareCompanyUncheckedUpdateWithoutBusinessInput>
    create: XOR<HomeCareCompanyCreateWithoutBusinessInput, HomeCareCompanyUncheckedCreateWithoutBusinessInput>
  }

  export type HomeCareCompanyUpdateWithoutBusinessInput = {
    business_registration_num?: StringFieldUpdateOperationsInput | string
    specialized_field?: HomeCareSpecializedSubFieldUpdateOneRequiredWithoutHome_care_companiesNestedInput
    introduction_images?: HomeCareIntroductionImageUpdateManyWithoutCompanyNestedInput
  }

  export type HomeCareCompanyUncheckedUpdateWithoutBusinessInput = {
    business_registration_num?: StringFieldUpdateOperationsInput | string
    specialized_field_id?: StringFieldUpdateOperationsInput | string
    introduction_images?: HomeCareIntroductionImageUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type BusinessRateUpsertWithWhereUniqueWithoutRateeInput = {
    where: BusinessRateWhereUniqueInput
    update: XOR<BusinessRateUpdateWithoutRateeInput, BusinessRateUncheckedUpdateWithoutRateeInput>
    create: XOR<BusinessRateCreateWithoutRateeInput, BusinessRateUncheckedCreateWithoutRateeInput>
  }

  export type BusinessRateUpdateWithWhereUniqueWithoutRateeInput = {
    where: BusinessRateWhereUniqueInput
    data: XOR<BusinessRateUpdateWithoutRateeInput, BusinessRateUncheckedUpdateWithoutRateeInput>
  }

  export type BusinessRateUpdateManyWithWhereWithoutRateeInput = {
    where: BusinessRateScalarWhereInput
    data: XOR<BusinessRateUpdateManyMutationInput, BusinessRateUncheckedUpdateManyWithoutRatesInput>
  }

  export type BusinessReviewUpsertWithWhereUniqueWithoutRevieweeInput = {
    where: BusinessReviewWhereUniqueInput
    update: XOR<BusinessReviewUpdateWithoutRevieweeInput, BusinessReviewUncheckedUpdateWithoutRevieweeInput>
    create: XOR<BusinessReviewCreateWithoutRevieweeInput, BusinessReviewUncheckedCreateWithoutRevieweeInput>
  }

  export type BusinessReviewUpdateWithWhereUniqueWithoutRevieweeInput = {
    where: BusinessReviewWhereUniqueInput
    data: XOR<BusinessReviewUpdateWithoutRevieweeInput, BusinessReviewUncheckedUpdateWithoutRevieweeInput>
  }

  export type BusinessReviewUpdateManyWithWhereWithoutRevieweeInput = {
    where: BusinessReviewScalarWhereInput
    data: XOR<BusinessReviewUpdateManyMutationInput, BusinessReviewUncheckedUpdateManyWithoutReviewsInput>
  }

  export type BusinessUserCreateWithoutReal_estate_agentInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    user: UserCreateNestedOneWithoutBusiness_userInput
    authentications?: AuthenticationCreateNestedManyWithoutBusiness_userInput
    home_care_company?: HomeCareCompanyCreateNestedOneWithoutBusinessInput
    rates?: BusinessRateCreateNestedManyWithoutRateeInput
    reviews?: BusinessReviewCreateNestedManyWithoutRevieweeInput
  }

  export type BusinessUserUncheckedCreateWithoutReal_estate_agentInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    authentications?: AuthenticationUncheckedCreateNestedManyWithoutBusiness_userInput
    home_care_company?: HomeCareCompanyUncheckedCreateNestedOneWithoutBusinessInput
    rates?: BusinessRateUncheckedCreateNestedManyWithoutRateeInput
    reviews?: BusinessReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type BusinessUserCreateOrConnectWithoutReal_estate_agentInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutReal_estate_agentInput, BusinessUserUncheckedCreateWithoutReal_estate_agentInput>
  }

  export type RealEstateSpecializedSubFieldCreateWithoutReal_estate_agentsInput = {
    id: string
    name: string
    super: RealEstateSpecializedSuperFieldCreateNestedOneWithoutSubInput
  }

  export type RealEstateSpecializedSubFieldUncheckedCreateWithoutReal_estate_agentsInput = {
    id: string
    name: string
    super_id: string
  }

  export type RealEstateSpecializedSubFieldCreateOrConnectWithoutReal_estate_agentsInput = {
    where: RealEstateSpecializedSubFieldWhereUniqueInput
    create: XOR<RealEstateSpecializedSubFieldCreateWithoutReal_estate_agentsInput, RealEstateSpecializedSubFieldUncheckedCreateWithoutReal_estate_agentsInput>
  }

  export type RealEstatePropertyCreateWithoutAgentInput = {
    id: string
    name: string
    main_image_url: string
  }

  export type RealEstatePropertyUncheckedCreateWithoutAgentInput = {
    id: string
    name: string
    main_image_url: string
  }

  export type RealEstatePropertyCreateOrConnectWithoutAgentInput = {
    where: RealEstatePropertyWhereUniqueInput
    create: XOR<RealEstatePropertyCreateWithoutAgentInput, RealEstatePropertyUncheckedCreateWithoutAgentInput>
  }

  export type RealEstatePropertyCreateManyAgentInputEnvelope = {
    data: Enumerable<RealEstatePropertyCreateManyAgentInput>
    skipDuplicates?: boolean
  }

  export type BusinessUserUpsertWithoutReal_estate_agentInput = {
    update: XOR<BusinessUserUpdateWithoutReal_estate_agentInput, BusinessUserUncheckedUpdateWithoutReal_estate_agentInput>
    create: XOR<BusinessUserCreateWithoutReal_estate_agentInput, BusinessUserUncheckedCreateWithoutReal_estate_agentInput>
  }

  export type BusinessUserUpdateWithoutReal_estate_agentInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBusiness_userNestedInput
    authentications?: AuthenticationUpdateManyWithoutBusiness_userNestedInput
    home_care_company?: HomeCareCompanyUpdateOneWithoutBusinessNestedInput
    rates?: BusinessRateUpdateManyWithoutRateeNestedInput
    reviews?: BusinessReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutReal_estate_agentInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    authentications?: AuthenticationUncheckedUpdateManyWithoutBusiness_userNestedInput
    home_care_company?: HomeCareCompanyUncheckedUpdateOneWithoutBusinessNestedInput
    rates?: BusinessRateUncheckedUpdateManyWithoutRateeNestedInput
    reviews?: BusinessReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type RealEstateSpecializedSubFieldUpsertWithoutReal_estate_agentsInput = {
    update: XOR<RealEstateSpecializedSubFieldUpdateWithoutReal_estate_agentsInput, RealEstateSpecializedSubFieldUncheckedUpdateWithoutReal_estate_agentsInput>
    create: XOR<RealEstateSpecializedSubFieldCreateWithoutReal_estate_agentsInput, RealEstateSpecializedSubFieldUncheckedCreateWithoutReal_estate_agentsInput>
  }

  export type RealEstateSpecializedSubFieldUpdateWithoutReal_estate_agentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    super?: RealEstateSpecializedSuperFieldUpdateOneRequiredWithoutSubNestedInput
  }

  export type RealEstateSpecializedSubFieldUncheckedUpdateWithoutReal_estate_agentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstatePropertyUpsertWithWhereUniqueWithoutAgentInput = {
    where: RealEstatePropertyWhereUniqueInput
    update: XOR<RealEstatePropertyUpdateWithoutAgentInput, RealEstatePropertyUncheckedUpdateWithoutAgentInput>
    create: XOR<RealEstatePropertyCreateWithoutAgentInput, RealEstatePropertyUncheckedCreateWithoutAgentInput>
  }

  export type RealEstatePropertyUpdateWithWhereUniqueWithoutAgentInput = {
    where: RealEstatePropertyWhereUniqueInput
    data: XOR<RealEstatePropertyUpdateWithoutAgentInput, RealEstatePropertyUncheckedUpdateWithoutAgentInput>
  }

  export type RealEstatePropertyUpdateManyWithWhereWithoutAgentInput = {
    where: RealEstatePropertyScalarWhereInput
    data: XOR<RealEstatePropertyUpdateManyMutationInput, RealEstatePropertyUncheckedUpdateManyWithoutPropertiesInput>
  }

  export type RealEstatePropertyScalarWhereInput = {
    AND?: Enumerable<RealEstatePropertyScalarWhereInput>
    OR?: Enumerable<RealEstatePropertyScalarWhereInput>
    NOT?: Enumerable<RealEstatePropertyScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    main_image_url?: StringFilter | string
    agent_id?: StringFilter | string
  }

  export type BusinessUserCreateWithoutHome_care_companyInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    user: UserCreateNestedOneWithoutBusiness_userInput
    authentications?: AuthenticationCreateNestedManyWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentCreateNestedOneWithoutBusinessInput
    rates?: BusinessRateCreateNestedManyWithoutRateeInput
    reviews?: BusinessReviewCreateNestedManyWithoutRevieweeInput
  }

  export type BusinessUserUncheckedCreateWithoutHome_care_companyInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    authentications?: AuthenticationUncheckedCreateNestedManyWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentUncheckedCreateNestedOneWithoutBusinessInput
    rates?: BusinessRateUncheckedCreateNestedManyWithoutRateeInput
    reviews?: BusinessReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type BusinessUserCreateOrConnectWithoutHome_care_companyInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutHome_care_companyInput, BusinessUserUncheckedCreateWithoutHome_care_companyInput>
  }

  export type HomeCareSpecializedSubFieldCreateWithoutHome_care_companiesInput = {
    id: string
    name: string
    super: HomeCareSpecializedSuperFieldCreateNestedOneWithoutSubInput
  }

  export type HomeCareSpecializedSubFieldUncheckedCreateWithoutHome_care_companiesInput = {
    id: string
    name: string
    super_id: string
  }

  export type HomeCareSpecializedSubFieldCreateOrConnectWithoutHome_care_companiesInput = {
    where: HomeCareSpecializedSubFieldWhereUniqueInput
    create: XOR<HomeCareSpecializedSubFieldCreateWithoutHome_care_companiesInput, HomeCareSpecializedSubFieldUncheckedCreateWithoutHome_care_companiesInput>
  }

  export type HomeCareIntroductionImageCreateWithoutCompanyInput = {
    id: string
    image_url: string
  }

  export type HomeCareIntroductionImageUncheckedCreateWithoutCompanyInput = {
    id: string
    image_url: string
  }

  export type HomeCareIntroductionImageCreateOrConnectWithoutCompanyInput = {
    where: HomeCareIntroductionImageWhereUniqueInput
    create: XOR<HomeCareIntroductionImageCreateWithoutCompanyInput, HomeCareIntroductionImageUncheckedCreateWithoutCompanyInput>
  }

  export type HomeCareIntroductionImageCreateManyCompanyInputEnvelope = {
    data: Enumerable<HomeCareIntroductionImageCreateManyCompanyInput>
    skipDuplicates?: boolean
  }

  export type BusinessUserUpsertWithoutHome_care_companyInput = {
    update: XOR<BusinessUserUpdateWithoutHome_care_companyInput, BusinessUserUncheckedUpdateWithoutHome_care_companyInput>
    create: XOR<BusinessUserCreateWithoutHome_care_companyInput, BusinessUserUncheckedCreateWithoutHome_care_companyInput>
  }

  export type BusinessUserUpdateWithoutHome_care_companyInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBusiness_userNestedInput
    authentications?: AuthenticationUpdateManyWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUpdateOneWithoutBusinessNestedInput
    rates?: BusinessRateUpdateManyWithoutRateeNestedInput
    reviews?: BusinessReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutHome_care_companyInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    authentications?: AuthenticationUncheckedUpdateManyWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUncheckedUpdateOneWithoutBusinessNestedInput
    rates?: BusinessRateUncheckedUpdateManyWithoutRateeNestedInput
    reviews?: BusinessReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type HomeCareSpecializedSubFieldUpsertWithoutHome_care_companiesInput = {
    update: XOR<HomeCareSpecializedSubFieldUpdateWithoutHome_care_companiesInput, HomeCareSpecializedSubFieldUncheckedUpdateWithoutHome_care_companiesInput>
    create: XOR<HomeCareSpecializedSubFieldCreateWithoutHome_care_companiesInput, HomeCareSpecializedSubFieldUncheckedCreateWithoutHome_care_companiesInput>
  }

  export type HomeCareSpecializedSubFieldUpdateWithoutHome_care_companiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    super?: HomeCareSpecializedSuperFieldUpdateOneRequiredWithoutSubNestedInput
  }

  export type HomeCareSpecializedSubFieldUncheckedUpdateWithoutHome_care_companiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareIntroductionImageUpsertWithWhereUniqueWithoutCompanyInput = {
    where: HomeCareIntroductionImageWhereUniqueInput
    update: XOR<HomeCareIntroductionImageUpdateWithoutCompanyInput, HomeCareIntroductionImageUncheckedUpdateWithoutCompanyInput>
    create: XOR<HomeCareIntroductionImageCreateWithoutCompanyInput, HomeCareIntroductionImageUncheckedCreateWithoutCompanyInput>
  }

  export type HomeCareIntroductionImageUpdateWithWhereUniqueWithoutCompanyInput = {
    where: HomeCareIntroductionImageWhereUniqueInput
    data: XOR<HomeCareIntroductionImageUpdateWithoutCompanyInput, HomeCareIntroductionImageUncheckedUpdateWithoutCompanyInput>
  }

  export type HomeCareIntroductionImageUpdateManyWithWhereWithoutCompanyInput = {
    where: HomeCareIntroductionImageScalarWhereInput
    data: XOR<HomeCareIntroductionImageUpdateManyMutationInput, HomeCareIntroductionImageUncheckedUpdateManyWithoutIntroduction_imagesInput>
  }

  export type HomeCareIntroductionImageScalarWhereInput = {
    AND?: Enumerable<HomeCareIntroductionImageScalarWhereInput>
    OR?: Enumerable<HomeCareIntroductionImageScalarWhereInput>
    NOT?: Enumerable<HomeCareIntroductionImageScalarWhereInput>
    id?: StringFilter | string
    image_url?: StringFilter | string
    company_id?: StringFilter | string
  }

  export type HomeCareCompanyCreateWithoutIntroduction_imagesInput = {
    business_registration_num: string
    business: BusinessUserCreateNestedOneWithoutHome_care_companyInput
    specialized_field: HomeCareSpecializedSubFieldCreateNestedOneWithoutHome_care_companiesInput
  }

  export type HomeCareCompanyUncheckedCreateWithoutIntroduction_imagesInput = {
    id: string
    business_registration_num: string
    specialized_field_id: string
  }

  export type HomeCareCompanyCreateOrConnectWithoutIntroduction_imagesInput = {
    where: HomeCareCompanyWhereUniqueInput
    create: XOR<HomeCareCompanyCreateWithoutIntroduction_imagesInput, HomeCareCompanyUncheckedCreateWithoutIntroduction_imagesInput>
  }

  export type HomeCareCompanyUpsertWithoutIntroduction_imagesInput = {
    update: XOR<HomeCareCompanyUpdateWithoutIntroduction_imagesInput, HomeCareCompanyUncheckedUpdateWithoutIntroduction_imagesInput>
    create: XOR<HomeCareCompanyCreateWithoutIntroduction_imagesInput, HomeCareCompanyUncheckedCreateWithoutIntroduction_imagesInput>
  }

  export type HomeCareCompanyUpdateWithoutIntroduction_imagesInput = {
    business_registration_num?: StringFieldUpdateOperationsInput | string
    business?: BusinessUserUpdateOneRequiredWithoutHome_care_companyNestedInput
    specialized_field?: HomeCareSpecializedSubFieldUpdateOneRequiredWithoutHome_care_companiesNestedInput
  }

  export type HomeCareCompanyUncheckedUpdateWithoutIntroduction_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_registration_num?: StringFieldUpdateOperationsInput | string
    specialized_field_id?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateAgentCreateWithoutPropertiesInput = {
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    real_estate_phone: string
    licensed_agent_name: string
    business: BusinessUserCreateNestedOneWithoutReal_estate_agentInput
    specialized_field: RealEstateSpecializedSubFieldCreateNestedOneWithoutReal_estate_agentsInput
  }

  export type RealEstateAgentUncheckedCreateWithoutPropertiesInput = {
    id: string
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    real_estate_phone: string
    licensed_agent_name: string
    specialized_field_id: string
  }

  export type RealEstateAgentCreateOrConnectWithoutPropertiesInput = {
    where: RealEstateAgentWhereUniqueInput
    create: XOR<RealEstateAgentCreateWithoutPropertiesInput, RealEstateAgentUncheckedCreateWithoutPropertiesInput>
  }

  export type RealEstateAgentUpsertWithoutPropertiesInput = {
    update: XOR<RealEstateAgentUpdateWithoutPropertiesInput, RealEstateAgentUncheckedUpdateWithoutPropertiesInput>
    create: XOR<RealEstateAgentCreateWithoutPropertiesInput, RealEstateAgentUncheckedCreateWithoutPropertiesInput>
  }

  export type RealEstateAgentUpdateWithoutPropertiesInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
    business?: BusinessUserUpdateOneRequiredWithoutReal_estate_agentNestedInput
    specialized_field?: RealEstateSpecializedSubFieldUpdateOneRequiredWithoutReal_estate_agentsNestedInput
  }

  export type RealEstateAgentUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
    specialized_field_id?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSpecializedSubFieldCreateWithoutSuperInput = {
    id: string
    name: string
    home_care_companies?: HomeCareCompanyCreateNestedManyWithoutSpecialized_fieldInput
  }

  export type HomeCareSpecializedSubFieldUncheckedCreateWithoutSuperInput = {
    id: string
    name: string
    home_care_companies?: HomeCareCompanyUncheckedCreateNestedManyWithoutSpecialized_fieldInput
  }

  export type HomeCareSpecializedSubFieldCreateOrConnectWithoutSuperInput = {
    where: HomeCareSpecializedSubFieldWhereUniqueInput
    create: XOR<HomeCareSpecializedSubFieldCreateWithoutSuperInput, HomeCareSpecializedSubFieldUncheckedCreateWithoutSuperInput>
  }

  export type HomeCareSpecializedSubFieldCreateManySuperInputEnvelope = {
    data: Enumerable<HomeCareSpecializedSubFieldCreateManySuperInput>
    skipDuplicates?: boolean
  }

  export type HomeCareSpecializedSubFieldUpsertWithWhereUniqueWithoutSuperInput = {
    where: HomeCareSpecializedSubFieldWhereUniqueInput
    update: XOR<HomeCareSpecializedSubFieldUpdateWithoutSuperInput, HomeCareSpecializedSubFieldUncheckedUpdateWithoutSuperInput>
    create: XOR<HomeCareSpecializedSubFieldCreateWithoutSuperInput, HomeCareSpecializedSubFieldUncheckedCreateWithoutSuperInput>
  }

  export type HomeCareSpecializedSubFieldUpdateWithWhereUniqueWithoutSuperInput = {
    where: HomeCareSpecializedSubFieldWhereUniqueInput
    data: XOR<HomeCareSpecializedSubFieldUpdateWithoutSuperInput, HomeCareSpecializedSubFieldUncheckedUpdateWithoutSuperInput>
  }

  export type HomeCareSpecializedSubFieldUpdateManyWithWhereWithoutSuperInput = {
    where: HomeCareSpecializedSubFieldScalarWhereInput
    data: XOR<HomeCareSpecializedSubFieldUpdateManyMutationInput, HomeCareSpecializedSubFieldUncheckedUpdateManyWithoutSubInput>
  }

  export type HomeCareSpecializedSubFieldScalarWhereInput = {
    AND?: Enumerable<HomeCareSpecializedSubFieldScalarWhereInput>
    OR?: Enumerable<HomeCareSpecializedSubFieldScalarWhereInput>
    NOT?: Enumerable<HomeCareSpecializedSubFieldScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    super_id?: StringFilter | string
  }

  export type HomeCareSpecializedSuperFieldCreateWithoutSubInput = {
    id: string
    name: string
  }

  export type HomeCareSpecializedSuperFieldUncheckedCreateWithoutSubInput = {
    id: string
    name: string
  }

  export type HomeCareSpecializedSuperFieldCreateOrConnectWithoutSubInput = {
    where: HomeCareSpecializedSuperFieldWhereUniqueInput
    create: XOR<HomeCareSpecializedSuperFieldCreateWithoutSubInput, HomeCareSpecializedSuperFieldUncheckedCreateWithoutSubInput>
  }

  export type HomeCareCompanyCreateWithoutSpecialized_fieldInput = {
    business_registration_num: string
    business: BusinessUserCreateNestedOneWithoutHome_care_companyInput
    introduction_images?: HomeCareIntroductionImageCreateNestedManyWithoutCompanyInput
  }

  export type HomeCareCompanyUncheckedCreateWithoutSpecialized_fieldInput = {
    id: string
    business_registration_num: string
    introduction_images?: HomeCareIntroductionImageUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type HomeCareCompanyCreateOrConnectWithoutSpecialized_fieldInput = {
    where: HomeCareCompanyWhereUniqueInput
    create: XOR<HomeCareCompanyCreateWithoutSpecialized_fieldInput, HomeCareCompanyUncheckedCreateWithoutSpecialized_fieldInput>
  }

  export type HomeCareCompanyCreateManySpecialized_fieldInputEnvelope = {
    data: Enumerable<HomeCareCompanyCreateManySpecialized_fieldInput>
    skipDuplicates?: boolean
  }

  export type HomeCareSpecializedSuperFieldUpsertWithoutSubInput = {
    update: XOR<HomeCareSpecializedSuperFieldUpdateWithoutSubInput, HomeCareSpecializedSuperFieldUncheckedUpdateWithoutSubInput>
    create: XOR<HomeCareSpecializedSuperFieldCreateWithoutSubInput, HomeCareSpecializedSuperFieldUncheckedCreateWithoutSubInput>
  }

  export type HomeCareSpecializedSuperFieldUpdateWithoutSubInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSpecializedSuperFieldUncheckedUpdateWithoutSubInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareCompanyUpsertWithWhereUniqueWithoutSpecialized_fieldInput = {
    where: HomeCareCompanyWhereUniqueInput
    update: XOR<HomeCareCompanyUpdateWithoutSpecialized_fieldInput, HomeCareCompanyUncheckedUpdateWithoutSpecialized_fieldInput>
    create: XOR<HomeCareCompanyCreateWithoutSpecialized_fieldInput, HomeCareCompanyUncheckedCreateWithoutSpecialized_fieldInput>
  }

  export type HomeCareCompanyUpdateWithWhereUniqueWithoutSpecialized_fieldInput = {
    where: HomeCareCompanyWhereUniqueInput
    data: XOR<HomeCareCompanyUpdateWithoutSpecialized_fieldInput, HomeCareCompanyUncheckedUpdateWithoutSpecialized_fieldInput>
  }

  export type HomeCareCompanyUpdateManyWithWhereWithoutSpecialized_fieldInput = {
    where: HomeCareCompanyScalarWhereInput
    data: XOR<HomeCareCompanyUpdateManyMutationInput, HomeCareCompanyUncheckedUpdateManyWithoutHome_care_companiesInput>
  }

  export type HomeCareCompanyScalarWhereInput = {
    AND?: Enumerable<HomeCareCompanyScalarWhereInput>
    OR?: Enumerable<HomeCareCompanyScalarWhereInput>
    NOT?: Enumerable<HomeCareCompanyScalarWhereInput>
    id?: StringFilter | string
    business_registration_num?: StringFilter | string
    specialized_field_id?: StringFilter | string
  }

  export type RealEstateSpecializedSubFieldCreateWithoutSuperInput = {
    id: string
    name: string
    real_estate_agents?: RealEstateAgentCreateNestedManyWithoutSpecialized_fieldInput
  }

  export type RealEstateSpecializedSubFieldUncheckedCreateWithoutSuperInput = {
    id: string
    name: string
    real_estate_agents?: RealEstateAgentUncheckedCreateNestedManyWithoutSpecialized_fieldInput
  }

  export type RealEstateSpecializedSubFieldCreateOrConnectWithoutSuperInput = {
    where: RealEstateSpecializedSubFieldWhereUniqueInput
    create: XOR<RealEstateSpecializedSubFieldCreateWithoutSuperInput, RealEstateSpecializedSubFieldUncheckedCreateWithoutSuperInput>
  }

  export type RealEstateSpecializedSubFieldCreateManySuperInputEnvelope = {
    data: Enumerable<RealEstateSpecializedSubFieldCreateManySuperInput>
    skipDuplicates?: boolean
  }

  export type RealEstateSpecializedSubFieldUpsertWithWhereUniqueWithoutSuperInput = {
    where: RealEstateSpecializedSubFieldWhereUniqueInput
    update: XOR<RealEstateSpecializedSubFieldUpdateWithoutSuperInput, RealEstateSpecializedSubFieldUncheckedUpdateWithoutSuperInput>
    create: XOR<RealEstateSpecializedSubFieldCreateWithoutSuperInput, RealEstateSpecializedSubFieldUncheckedCreateWithoutSuperInput>
  }

  export type RealEstateSpecializedSubFieldUpdateWithWhereUniqueWithoutSuperInput = {
    where: RealEstateSpecializedSubFieldWhereUniqueInput
    data: XOR<RealEstateSpecializedSubFieldUpdateWithoutSuperInput, RealEstateSpecializedSubFieldUncheckedUpdateWithoutSuperInput>
  }

  export type RealEstateSpecializedSubFieldUpdateManyWithWhereWithoutSuperInput = {
    where: RealEstateSpecializedSubFieldScalarWhereInput
    data: XOR<RealEstateSpecializedSubFieldUpdateManyMutationInput, RealEstateSpecializedSubFieldUncheckedUpdateManyWithoutSubInput>
  }

  export type RealEstateSpecializedSubFieldScalarWhereInput = {
    AND?: Enumerable<RealEstateSpecializedSubFieldScalarWhereInput>
    OR?: Enumerable<RealEstateSpecializedSubFieldScalarWhereInput>
    NOT?: Enumerable<RealEstateSpecializedSubFieldScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    super_id?: StringFilter | string
  }

  export type RealEstateSpecializedSuperFieldCreateWithoutSubInput = {
    id: string
    name: string
  }

  export type RealEstateSpecializedSuperFieldUncheckedCreateWithoutSubInput = {
    id: string
    name: string
  }

  export type RealEstateSpecializedSuperFieldCreateOrConnectWithoutSubInput = {
    where: RealEstateSpecializedSuperFieldWhereUniqueInput
    create: XOR<RealEstateSpecializedSuperFieldCreateWithoutSubInput, RealEstateSpecializedSuperFieldUncheckedCreateWithoutSubInput>
  }

  export type RealEstateAgentCreateWithoutSpecialized_fieldInput = {
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    real_estate_phone: string
    licensed_agent_name: string
    business: BusinessUserCreateNestedOneWithoutReal_estate_agentInput
    properties?: RealEstatePropertyCreateNestedManyWithoutAgentInput
  }

  export type RealEstateAgentUncheckedCreateWithoutSpecialized_fieldInput = {
    id: string
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    real_estate_phone: string
    licensed_agent_name: string
    properties?: RealEstatePropertyUncheckedCreateNestedManyWithoutAgentInput
  }

  export type RealEstateAgentCreateOrConnectWithoutSpecialized_fieldInput = {
    where: RealEstateAgentWhereUniqueInput
    create: XOR<RealEstateAgentCreateWithoutSpecialized_fieldInput, RealEstateAgentUncheckedCreateWithoutSpecialized_fieldInput>
  }

  export type RealEstateAgentCreateManySpecialized_fieldInputEnvelope = {
    data: Enumerable<RealEstateAgentCreateManySpecialized_fieldInput>
    skipDuplicates?: boolean
  }

  export type RealEstateSpecializedSuperFieldUpsertWithoutSubInput = {
    update: XOR<RealEstateSpecializedSuperFieldUpdateWithoutSubInput, RealEstateSpecializedSuperFieldUncheckedUpdateWithoutSubInput>
    create: XOR<RealEstateSpecializedSuperFieldCreateWithoutSubInput, RealEstateSpecializedSuperFieldUncheckedCreateWithoutSubInput>
  }

  export type RealEstateSpecializedSuperFieldUpdateWithoutSubInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSpecializedSuperFieldUncheckedUpdateWithoutSubInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateAgentUpsertWithWhereUniqueWithoutSpecialized_fieldInput = {
    where: RealEstateAgentWhereUniqueInput
    update: XOR<RealEstateAgentUpdateWithoutSpecialized_fieldInput, RealEstateAgentUncheckedUpdateWithoutSpecialized_fieldInput>
    create: XOR<RealEstateAgentCreateWithoutSpecialized_fieldInput, RealEstateAgentUncheckedCreateWithoutSpecialized_fieldInput>
  }

  export type RealEstateAgentUpdateWithWhereUniqueWithoutSpecialized_fieldInput = {
    where: RealEstateAgentWhereUniqueInput
    data: XOR<RealEstateAgentUpdateWithoutSpecialized_fieldInput, RealEstateAgentUncheckedUpdateWithoutSpecialized_fieldInput>
  }

  export type RealEstateAgentUpdateManyWithWhereWithoutSpecialized_fieldInput = {
    where: RealEstateAgentScalarWhereInput
    data: XOR<RealEstateAgentUpdateManyMutationInput, RealEstateAgentUncheckedUpdateManyWithoutReal_estate_agentsInput>
  }

  export type RealEstateAgentScalarWhereInput = {
    AND?: Enumerable<RealEstateAgentScalarWhereInput>
    OR?: Enumerable<RealEstateAgentScalarWhereInput>
    NOT?: Enumerable<RealEstateAgentScalarWhereInput>
    id?: StringFilter | string
    is_licensed?: BoolFilter | boolean
    real_estate_num?: StringFilter | string
    real_estate_name?: StringFilter | string
    real_estate_phone?: StringFilter | string
    licensed_agent_name?: StringFilter | string
    specialized_field_id?: StringFilter | string
  }

  export type BusinessUserCreateWithoutRatesInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    user: UserCreateNestedOneWithoutBusiness_userInput
    authentications?: AuthenticationCreateNestedManyWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentCreateNestedOneWithoutBusinessInput
    home_care_company?: HomeCareCompanyCreateNestedOneWithoutBusinessInput
    reviews?: BusinessReviewCreateNestedManyWithoutRevieweeInput
  }

  export type BusinessUserUncheckedCreateWithoutRatesInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    authentications?: AuthenticationUncheckedCreateNestedManyWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentUncheckedCreateNestedOneWithoutBusinessInput
    home_care_company?: HomeCareCompanyUncheckedCreateNestedOneWithoutBusinessInput
    reviews?: BusinessReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type BusinessUserCreateOrConnectWithoutRatesInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutRatesInput, BusinessUserUncheckedCreateWithoutRatesInput>
  }

  export type CustomerCreateWithoutRatesInput = {
    birth?: string | null
    gender?: string | null
    user: UserCreateNestedOneWithoutCustomerInput
    authentications?: AuthenticationCreateNestedManyWithoutCustomerInput
    reviews?: BusinessReviewCreateNestedManyWithoutReviewerInput
  }

  export type CustomerUncheckedCreateWithoutRatesInput = {
    id: string
    birth?: string | null
    gender?: string | null
    authentications?: AuthenticationUncheckedCreateNestedManyWithoutCustomerInput
    reviews?: BusinessReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type CustomerCreateOrConnectWithoutRatesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutRatesInput, CustomerUncheckedCreateWithoutRatesInput>
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

  export type BusinessUserUpsertWithoutRatesInput = {
    update: XOR<BusinessUserUpdateWithoutRatesInput, BusinessUserUncheckedUpdateWithoutRatesInput>
    create: XOR<BusinessUserCreateWithoutRatesInput, BusinessUserUncheckedCreateWithoutRatesInput>
  }

  export type BusinessUserUpdateWithoutRatesInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBusiness_userNestedInput
    authentications?: AuthenticationUpdateManyWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUpdateOneWithoutBusinessNestedInput
    home_care_company?: HomeCareCompanyUpdateOneWithoutBusinessNestedInput
    reviews?: BusinessReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutRatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    authentications?: AuthenticationUncheckedUpdateManyWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUncheckedUpdateOneWithoutBusinessNestedInput
    home_care_company?: HomeCareCompanyUncheckedUpdateOneWithoutBusinessNestedInput
    reviews?: BusinessReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type CustomerUpsertWithoutRatesInput = {
    update: XOR<CustomerUpdateWithoutRatesInput, CustomerUncheckedUpdateWithoutRatesInput>
    create: XOR<CustomerCreateWithoutRatesInput, CustomerUncheckedCreateWithoutRatesInput>
  }

  export type CustomerUpdateWithoutRatesInput = {
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    authentications?: AuthenticationUpdateManyWithoutCustomerNestedInput
    reviews?: BusinessReviewUpdateManyWithoutReviewerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutRatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    authentications?: AuthenticationUncheckedUpdateManyWithoutCustomerNestedInput
    reviews?: BusinessReviewUncheckedUpdateManyWithoutReviewerNestedInput
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

  export type BusinessRateCreateWithoutCategoryInput = {
    id: string
    rate: number
    ratee: BusinessUserCreateNestedOneWithoutRatesInput
    rater: CustomerCreateNestedOneWithoutRatesInput
  }

  export type BusinessRateUncheckedCreateWithoutCategoryInput = {
    id: string
    ratee_id: string
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

  export type BusinessUserCreateWithoutReviewsInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    user: UserCreateNestedOneWithoutBusiness_userInput
    authentications?: AuthenticationCreateNestedManyWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentCreateNestedOneWithoutBusinessInput
    home_care_company?: HomeCareCompanyCreateNestedOneWithoutBusinessInput
    rates?: BusinessRateCreateNestedManyWithoutRateeInput
  }

  export type BusinessUserUncheckedCreateWithoutReviewsInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    authentications?: AuthenticationUncheckedCreateNestedManyWithoutBusiness_userInput
    real_estate_agent?: RealEstateAgentUncheckedCreateNestedOneWithoutBusinessInput
    home_care_company?: HomeCareCompanyUncheckedCreateNestedOneWithoutBusinessInput
    rates?: BusinessRateUncheckedCreateNestedManyWithoutRateeInput
  }

  export type BusinessUserCreateOrConnectWithoutReviewsInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutReviewsInput, BusinessUserUncheckedCreateWithoutReviewsInput>
  }

  export type CustomerCreateWithoutReviewsInput = {
    birth?: string | null
    gender?: string | null
    user: UserCreateNestedOneWithoutCustomerInput
    authentications?: AuthenticationCreateNestedManyWithoutCustomerInput
    rates?: BusinessRateCreateNestedManyWithoutRaterInput
  }

  export type CustomerUncheckedCreateWithoutReviewsInput = {
    id: string
    birth?: string | null
    gender?: string | null
    authentications?: AuthenticationUncheckedCreateNestedManyWithoutCustomerInput
    rates?: BusinessRateUncheckedCreateNestedManyWithoutRaterInput
  }

  export type CustomerCreateOrConnectWithoutReviewsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutReviewsInput, CustomerUncheckedCreateWithoutReviewsInput>
  }

  export type BusinessUserUpsertWithoutReviewsInput = {
    update: XOR<BusinessUserUpdateWithoutReviewsInput, BusinessUserUncheckedUpdateWithoutReviewsInput>
    create: XOR<BusinessUserCreateWithoutReviewsInput, BusinessUserUncheckedCreateWithoutReviewsInput>
  }

  export type BusinessUserUpdateWithoutReviewsInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBusiness_userNestedInput
    authentications?: AuthenticationUpdateManyWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUpdateOneWithoutBusinessNestedInput
    home_care_company?: HomeCareCompanyUpdateOneWithoutBusinessNestedInput
    rates?: BusinessRateUpdateManyWithoutRateeNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    authentications?: AuthenticationUncheckedUpdateManyWithoutBusiness_userNestedInput
    real_estate_agent?: RealEstateAgentUncheckedUpdateOneWithoutBusinessNestedInput
    home_care_company?: HomeCareCompanyUncheckedUpdateOneWithoutBusinessNestedInput
    rates?: BusinessRateUncheckedUpdateManyWithoutRateeNestedInput
  }

  export type CustomerUpsertWithoutReviewsInput = {
    update: XOR<CustomerUpdateWithoutReviewsInput, CustomerUncheckedUpdateWithoutReviewsInput>
    create: XOR<CustomerCreateWithoutReviewsInput, CustomerUncheckedCreateWithoutReviewsInput>
  }

  export type CustomerUpdateWithoutReviewsInput = {
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    authentications?: AuthenticationUpdateManyWithoutCustomerNestedInput
    rates?: BusinessRateUpdateManyWithoutRaterNestedInput
  }

  export type CustomerUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    authentications?: AuthenticationUncheckedUpdateManyWithoutCustomerNestedInput
    rates?: BusinessRateUncheckedUpdateManyWithoutRaterNestedInput
  }

  export type BoardArticleCreateWithoutBoardInput = {
    id: string
    title: string
    author: UserCreateNestedOneWithoutBoard_articlesInput
    contents?: BoardArticleContentCreateNestedManyWithoutArticleInput
    comments?: BoardCommentCreateNestedManyWithoutArticleInput
  }

  export type BoardArticleUncheckedCreateWithoutBoardInput = {
    id: string
    title: string
    author_id: string
    contents?: BoardArticleContentUncheckedCreateNestedManyWithoutArticleInput
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

  export type UserCreateWithoutBoard_articlesInput = {
    id: string
    name: string
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    address_first?: string | null
    address_second?: string | null
    profile_image?: string | null
    customer?: CustomerCreateNestedOneWithoutUserInput
    business_user?: BusinessUserCreateNestedOneWithoutUserInput
    board_comments?: BoardCommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutBoard_articlesInput = {
    id: string
    name: string
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    address_first?: string | null
    address_second?: string | null
    profile_image?: string | null
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
    business_user?: BusinessUserUncheckedCreateNestedOneWithoutUserInput
    board_comments?: BoardCommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutBoard_articlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoard_articlesInput, UserUncheckedCreateWithoutBoard_articlesInput>
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

  export type BoardArticleContentCreateWithoutArticleInput = {
    id: string
    text: string
    created_at: Date | string
  }

  export type BoardArticleContentUncheckedCreateWithoutArticleInput = {
    id: string
    text: string
    created_at: Date | string
  }

  export type BoardArticleContentCreateOrConnectWithoutArticleInput = {
    where: BoardArticleContentWhereUniqueInput
    create: XOR<BoardArticleContentCreateWithoutArticleInput, BoardArticleContentUncheckedCreateWithoutArticleInput>
  }

  export type BoardArticleContentCreateManyArticleInputEnvelope = {
    data: Enumerable<BoardArticleContentCreateManyArticleInput>
    skipDuplicates?: boolean
  }

  export type BoardCommentCreateWithoutArticleInput = {
    id: string
    author: UserCreateNestedOneWithoutBoard_commentsInput
    contents?: BoardCommentContentCreateNestedManyWithoutCommentInput
  }

  export type BoardCommentUncheckedCreateWithoutArticleInput = {
    id: string
    author_id: string
    contents?: BoardCommentContentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type BoardCommentCreateOrConnectWithoutArticleInput = {
    where: BoardCommentWhereUniqueInput
    create: XOR<BoardCommentCreateWithoutArticleInput, BoardCommentUncheckedCreateWithoutArticleInput>
  }

  export type BoardCommentCreateManyArticleInputEnvelope = {
    data: Enumerable<BoardCommentCreateManyArticleInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBoard_articlesInput = {
    update: XOR<UserUpdateWithoutBoard_articlesInput, UserUncheckedUpdateWithoutBoard_articlesInput>
    create: XOR<UserCreateWithoutBoard_articlesInput, UserUncheckedCreateWithoutBoard_articlesInput>
  }

  export type UserUpdateWithoutBoard_articlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerUpdateOneWithoutUserNestedInput
    business_user?: BusinessUserUpdateOneWithoutUserNestedInput
    board_comments?: BoardCommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutBoard_articlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
    business_user?: BusinessUserUncheckedUpdateOneWithoutUserNestedInput
    board_comments?: BoardCommentUncheckedUpdateManyWithoutAuthorNestedInput
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

  export type BoardArticleContentUpsertWithWhereUniqueWithoutArticleInput = {
    where: BoardArticleContentWhereUniqueInput
    update: XOR<BoardArticleContentUpdateWithoutArticleInput, BoardArticleContentUncheckedUpdateWithoutArticleInput>
    create: XOR<BoardArticleContentCreateWithoutArticleInput, BoardArticleContentUncheckedCreateWithoutArticleInput>
  }

  export type BoardArticleContentUpdateWithWhereUniqueWithoutArticleInput = {
    where: BoardArticleContentWhereUniqueInput
    data: XOR<BoardArticleContentUpdateWithoutArticleInput, BoardArticleContentUncheckedUpdateWithoutArticleInput>
  }

  export type BoardArticleContentUpdateManyWithWhereWithoutArticleInput = {
    where: BoardArticleContentScalarWhereInput
    data: XOR<BoardArticleContentUpdateManyMutationInput, BoardArticleContentUncheckedUpdateManyWithoutContentsInput>
  }

  export type BoardArticleContentScalarWhereInput = {
    AND?: Enumerable<BoardArticleContentScalarWhereInput>
    OR?: Enumerable<BoardArticleContentScalarWhereInput>
    NOT?: Enumerable<BoardArticleContentScalarWhereInput>
    id?: StringFilter | string
    text?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    article_id?: StringFilter | string
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

  export type BoardArticleCreateWithoutContentsInput = {
    id: string
    title: string
    author: UserCreateNestedOneWithoutBoard_articlesInput
    board: BoardCreateNestedOneWithoutArticlesInput
    comments?: BoardCommentCreateNestedManyWithoutArticleInput
  }

  export type BoardArticleUncheckedCreateWithoutContentsInput = {
    id: string
    title: string
    author_id: string
    board_id: string
    comments?: BoardCommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type BoardArticleCreateOrConnectWithoutContentsInput = {
    where: BoardArticleWhereUniqueInput
    create: XOR<BoardArticleCreateWithoutContentsInput, BoardArticleUncheckedCreateWithoutContentsInput>
  }

  export type BoardArticleUpsertWithoutContentsInput = {
    update: XOR<BoardArticleUpdateWithoutContentsInput, BoardArticleUncheckedUpdateWithoutContentsInput>
    create: XOR<BoardArticleCreateWithoutContentsInput, BoardArticleUncheckedCreateWithoutContentsInput>
  }

  export type BoardArticleUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutBoard_articlesNestedInput
    board?: BoardUpdateOneRequiredWithoutArticlesNestedInput
    comments?: BoardCommentUpdateManyWithoutArticleNestedInput
  }

  export type BoardArticleUncheckedUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    board_id?: StringFieldUpdateOperationsInput | string
    comments?: BoardCommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type UserCreateWithoutBoard_commentsInput = {
    id: string
    name: string
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    address_first?: string | null
    address_second?: string | null
    profile_image?: string | null
    customer?: CustomerCreateNestedOneWithoutUserInput
    business_user?: BusinessUserCreateNestedOneWithoutUserInput
    board_articles?: BoardArticleCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutBoard_commentsInput = {
    id: string
    name: string
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    address_first?: string | null
    address_second?: string | null
    profile_image?: string | null
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
    business_user?: BusinessUserUncheckedCreateNestedOneWithoutUserInput
    board_articles?: BoardArticleUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutBoard_commentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoard_commentsInput, UserUncheckedCreateWithoutBoard_commentsInput>
  }

  export type BoardArticleCreateWithoutCommentsInput = {
    id: string
    title: string
    author: UserCreateNestedOneWithoutBoard_articlesInput
    board: BoardCreateNestedOneWithoutArticlesInput
    contents?: BoardArticleContentCreateNestedManyWithoutArticleInput
  }

  export type BoardArticleUncheckedCreateWithoutCommentsInput = {
    id: string
    title: string
    author_id: string
    board_id: string
    contents?: BoardArticleContentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type BoardArticleCreateOrConnectWithoutCommentsInput = {
    where: BoardArticleWhereUniqueInput
    create: XOR<BoardArticleCreateWithoutCommentsInput, BoardArticleUncheckedCreateWithoutCommentsInput>
  }

  export type BoardCommentContentCreateWithoutCommentInput = {
    id: string
    text: string
    created_at: Date | string
  }

  export type BoardCommentContentUncheckedCreateWithoutCommentInput = {
    id: string
    text: string
    created_at: Date | string
  }

  export type BoardCommentContentCreateOrConnectWithoutCommentInput = {
    where: BoardCommentContentWhereUniqueInput
    create: XOR<BoardCommentContentCreateWithoutCommentInput, BoardCommentContentUncheckedCreateWithoutCommentInput>
  }

  export type BoardCommentContentCreateManyCommentInputEnvelope = {
    data: Enumerable<BoardCommentContentCreateManyCommentInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBoard_commentsInput = {
    update: XOR<UserUpdateWithoutBoard_commentsInput, UserUncheckedUpdateWithoutBoard_commentsInput>
    create: XOR<UserCreateWithoutBoard_commentsInput, UserUncheckedCreateWithoutBoard_commentsInput>
  }

  export type UserUpdateWithoutBoard_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerUpdateOneWithoutUserNestedInput
    business_user?: BusinessUserUpdateOneWithoutUserNestedInput
    board_articles?: BoardArticleUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutBoard_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
    business_user?: BusinessUserUncheckedUpdateOneWithoutUserNestedInput
    board_articles?: BoardArticleUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type BoardArticleUpsertWithoutCommentsInput = {
    update: XOR<BoardArticleUpdateWithoutCommentsInput, BoardArticleUncheckedUpdateWithoutCommentsInput>
    create: XOR<BoardArticleCreateWithoutCommentsInput, BoardArticleUncheckedCreateWithoutCommentsInput>
  }

  export type BoardArticleUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutBoard_articlesNestedInput
    board?: BoardUpdateOneRequiredWithoutArticlesNestedInput
    contents?: BoardArticleContentUpdateManyWithoutArticleNestedInput
  }

  export type BoardArticleUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    board_id?: StringFieldUpdateOperationsInput | string
    contents?: BoardArticleContentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type BoardCommentContentUpsertWithWhereUniqueWithoutCommentInput = {
    where: BoardCommentContentWhereUniqueInput
    update: XOR<BoardCommentContentUpdateWithoutCommentInput, BoardCommentContentUncheckedUpdateWithoutCommentInput>
    create: XOR<BoardCommentContentCreateWithoutCommentInput, BoardCommentContentUncheckedCreateWithoutCommentInput>
  }

  export type BoardCommentContentUpdateWithWhereUniqueWithoutCommentInput = {
    where: BoardCommentContentWhereUniqueInput
    data: XOR<BoardCommentContentUpdateWithoutCommentInput, BoardCommentContentUncheckedUpdateWithoutCommentInput>
  }

  export type BoardCommentContentUpdateManyWithWhereWithoutCommentInput = {
    where: BoardCommentContentScalarWhereInput
    data: XOR<BoardCommentContentUpdateManyMutationInput, BoardCommentContentUncheckedUpdateManyWithoutContentsInput>
  }

  export type BoardCommentContentScalarWhereInput = {
    AND?: Enumerable<BoardCommentContentScalarWhereInput>
    OR?: Enumerable<BoardCommentContentScalarWhereInput>
    NOT?: Enumerable<BoardCommentContentScalarWhereInput>
    id?: StringFilter | string
    text?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    comment_id?: StringFilter | string
  }

  export type BoardCommentCreateWithoutContentsInput = {
    id: string
    author: UserCreateNestedOneWithoutBoard_commentsInput
    article: BoardArticleCreateNestedOneWithoutCommentsInput
  }

  export type BoardCommentUncheckedCreateWithoutContentsInput = {
    id: string
    author_id: string
    article_id: string
  }

  export type BoardCommentCreateOrConnectWithoutContentsInput = {
    where: BoardCommentWhereUniqueInput
    create: XOR<BoardCommentCreateWithoutContentsInput, BoardCommentUncheckedCreateWithoutContentsInput>
  }

  export type BoardCommentUpsertWithoutContentsInput = {
    update: XOR<BoardCommentUpdateWithoutContentsInput, BoardCommentUncheckedUpdateWithoutContentsInput>
    create: XOR<BoardCommentCreateWithoutContentsInput, BoardCommentUncheckedCreateWithoutContentsInput>
  }

  export type BoardCommentUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutBoard_commentsNestedInput
    article?: BoardArticleUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type BoardCommentUncheckedUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    article_id?: StringFieldUpdateOperationsInput | string
  }

  export type BoardArticleCreateManyAuthorInput = {
    id: string
    title: string
    board_id: string
  }

  export type BoardCommentCreateManyAuthorInput = {
    id: string
    article_id: string
  }

  export type BoardArticleUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    board?: BoardUpdateOneRequiredWithoutArticlesNestedInput
    contents?: BoardArticleContentUpdateManyWithoutArticleNestedInput
    comments?: BoardCommentUpdateManyWithoutArticleNestedInput
  }

  export type BoardArticleUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    board_id?: StringFieldUpdateOperationsInput | string
    contents?: BoardArticleContentUncheckedUpdateManyWithoutArticleNestedInput
    comments?: BoardCommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type BoardArticleUncheckedUpdateManyWithoutBoard_articlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    board_id?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    article?: BoardArticleUpdateOneRequiredWithoutCommentsNestedInput
    contents?: BoardCommentContentUpdateManyWithoutCommentNestedInput
  }

  export type BoardCommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_id?: StringFieldUpdateOperationsInput | string
    contents?: BoardCommentContentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type BoardCommentUncheckedUpdateManyWithoutBoard_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_id?: StringFieldUpdateOperationsInput | string
  }

  export type AuthenticationCreateManyCustomerInput = {
    id: string
    oauth_sub: string
    oauth_type: string
    business_user_id?: string | null
  }

  export type BusinessRateCreateManyRaterInput = {
    id: string
    category_id: string
    ratee_id: string
    rate: number
  }

  export type BusinessReviewCreateManyReviewerInput = {
    id: string
    reviewee_id: string
    review: string
  }

  export type AuthenticationUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: StringFieldUpdateOperationsInput | string
    business_user?: BusinessUserUpdateOneWithoutAuthenticationsNestedInput
  }

  export type AuthenticationUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: StringFieldUpdateOperationsInput | string
    business_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticationUncheckedUpdateManyWithoutAuthenticationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: StringFieldUpdateOperationsInput | string
    business_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessRateUpdateWithoutRaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    ratee?: BusinessUserUpdateOneRequiredWithoutRatesNestedInput
    category?: BusinessRateCategoryUpdateOneRequiredWithoutRatesNestedInput
  }

  export type BusinessRateUncheckedUpdateWithoutRaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    ratee_id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessRateUncheckedUpdateManyWithoutRatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    ratee_id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessReviewUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    reviewee?: BusinessUserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type BusinessReviewUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewee_id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessReviewUncheckedUpdateManyWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewee_id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
  }

  export type AuthenticationCreateManyBusiness_userInput = {
    id: string
    oauth_sub: string
    oauth_type: string
    customer_id?: string | null
  }

  export type BusinessRateCreateManyRateeInput = {
    id: string
    category_id: string
    rater_id: string
    rate: number
  }

  export type BusinessReviewCreateManyRevieweeInput = {
    id: string
    reviewer_id: string
    review: string
  }

  export type AuthenticationUpdateWithoutBusiness_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneWithoutAuthenticationsNestedInput
  }

  export type AuthenticationUncheckedUpdateWithoutBusiness_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessRateUpdateWithoutRateeInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    rater?: CustomerUpdateOneRequiredWithoutRatesNestedInput
    category?: BusinessRateCategoryUpdateOneRequiredWithoutRatesNestedInput
  }

  export type BusinessRateUncheckedUpdateWithoutRateeInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    rater_id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessReviewUpdateWithoutRevieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    reviewer?: CustomerUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type BusinessReviewUncheckedUpdateWithoutRevieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewer_id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstatePropertyCreateManyAgentInput = {
    id: string
    name: string
    main_image_url: string
  }

  export type RealEstatePropertyUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    main_image_url?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstatePropertyUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    main_image_url?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstatePropertyUncheckedUpdateManyWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    main_image_url?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareIntroductionImageCreateManyCompanyInput = {
    id: string
    image_url: string
  }

  export type HomeCareIntroductionImageUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareIntroductionImageUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareIntroductionImageUncheckedUpdateManyWithoutIntroduction_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareSpecializedSubFieldCreateManySuperInput = {
    id: string
    name: string
  }

  export type HomeCareSpecializedSubFieldUpdateWithoutSuperInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    home_care_companies?: HomeCareCompanyUpdateManyWithoutSpecialized_fieldNestedInput
  }

  export type HomeCareSpecializedSubFieldUncheckedUpdateWithoutSuperInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    home_care_companies?: HomeCareCompanyUncheckedUpdateManyWithoutSpecialized_fieldNestedInput
  }

  export type HomeCareSpecializedSubFieldUncheckedUpdateManyWithoutSubInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HomeCareCompanyCreateManySpecialized_fieldInput = {
    id: string
    business_registration_num: string
  }

  export type HomeCareCompanyUpdateWithoutSpecialized_fieldInput = {
    business_registration_num?: StringFieldUpdateOperationsInput | string
    business?: BusinessUserUpdateOneRequiredWithoutHome_care_companyNestedInput
    introduction_images?: HomeCareIntroductionImageUpdateManyWithoutCompanyNestedInput
  }

  export type HomeCareCompanyUncheckedUpdateWithoutSpecialized_fieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_registration_num?: StringFieldUpdateOperationsInput | string
    introduction_images?: HomeCareIntroductionImageUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type HomeCareCompanyUncheckedUpdateManyWithoutHome_care_companiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_registration_num?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateSpecializedSubFieldCreateManySuperInput = {
    id: string
    name: string
  }

  export type RealEstateSpecializedSubFieldUpdateWithoutSuperInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    real_estate_agents?: RealEstateAgentUpdateManyWithoutSpecialized_fieldNestedInput
  }

  export type RealEstateSpecializedSubFieldUncheckedUpdateWithoutSuperInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    real_estate_agents?: RealEstateAgentUncheckedUpdateManyWithoutSpecialized_fieldNestedInput
  }

  export type RealEstateSpecializedSubFieldUncheckedUpdateManyWithoutSubInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RealEstateAgentCreateManySpecialized_fieldInput = {
    id: string
    is_licensed: boolean
    real_estate_num: string
    real_estate_name: string
    real_estate_phone: string
    licensed_agent_name: string
  }

  export type RealEstateAgentUpdateWithoutSpecialized_fieldInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
    business?: BusinessUserUpdateOneRequiredWithoutReal_estate_agentNestedInput
    properties?: RealEstatePropertyUpdateManyWithoutAgentNestedInput
  }

  export type RealEstateAgentUncheckedUpdateWithoutSpecialized_fieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
    properties?: RealEstatePropertyUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type RealEstateAgentUncheckedUpdateManyWithoutReal_estate_agentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    real_estate_num?: StringFieldUpdateOperationsInput | string
    real_estate_name?: StringFieldUpdateOperationsInput | string
    real_estate_phone?: StringFieldUpdateOperationsInput | string
    licensed_agent_name?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessRateCreateManyCategoryInput = {
    id: string
    ratee_id: string
    rater_id: string
    rate: number
  }

  export type BusinessRateUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
    ratee?: BusinessUserUpdateOneRequiredWithoutRatesNestedInput
    rater?: CustomerUpdateOneRequiredWithoutRatesNestedInput
  }

  export type BusinessRateUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    ratee_id?: StringFieldUpdateOperationsInput | string
    rater_id?: StringFieldUpdateOperationsInput | string
    rate?: IntFieldUpdateOperationsInput | number
  }

  export type BoardArticleCreateManyBoardInput = {
    id: string
    title: string
    author_id: string
  }

  export type BoardArticleUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutBoard_articlesNestedInput
    contents?: BoardArticleContentUpdateManyWithoutArticleNestedInput
    comments?: BoardCommentUpdateManyWithoutArticleNestedInput
  }

  export type BoardArticleUncheckedUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    contents?: BoardArticleContentUncheckedUpdateManyWithoutArticleNestedInput
    comments?: BoardCommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type BoardArticleUncheckedUpdateManyWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
  }

  export type BoardArticleContentCreateManyArticleInput = {
    id: string
    text: string
    created_at: Date | string
  }

  export type BoardCommentCreateManyArticleInput = {
    id: string
    author_id: string
  }

  export type BoardArticleContentUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardArticleContentUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardArticleContentUncheckedUpdateManyWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardCommentUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutBoard_commentsNestedInput
    contents?: BoardCommentContentUpdateManyWithoutCommentNestedInput
  }

  export type BoardCommentUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    contents?: BoardCommentContentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type BoardCommentUncheckedUpdateManyWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCommentContentCreateManyCommentInput = {
    id: string
    text: string
    created_at: Date | string
  }

  export type BoardCommentContentUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardCommentContentUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardCommentContentUncheckedUpdateManyWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
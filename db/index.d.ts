
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
 * Model OauthAccessorModel
 * 
 */
export type OauthAccessorModel = {
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  id: string
  oauth_type: OauthType
  oauth_sub: string
  business_user_id: string
  customer_id: string
  name: string | null
  email: string | null
  phone: string | null
  profile_image_url: string | null
  birth: string | null
  gender: GenderType | null
  address_first: string | null
  address_second: string | null
}

/**
 * Model UserModel
 * 
 */
export type UserModel = {
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  id: string
  name: string
  email: string | null
}

/**
 * Model CustomerModel
 * 
 */
export type CustomerModel = {
  id: string
  birth: string | null
  gender: GenderType | null
  phone: string | null
  address_first: string | null
  address_second: string | null
  profile_image_url: string | null
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
  phone: string
  address_first: string
  address_second: string
  profile_image_url: string
}

/**
 * Model REAgentModel
 * 
 */
export type REAgentModel = {
  id: string
  is_licensed: boolean
  re_num: string
  re_name: string
  re_phone: string
  re_licensed_agent_name: string
}

/**
 * Model HSProviderModel
 * 
 */
export type HSProviderModel = {
  id: string
  business_registration_num: string
}

/**
 * Model BusinessCertificationModel
 * 
 */
export type BusinessCertificationModel = {
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  id: string
  business_user_id: string
  image_url: string
}

/**
 * Model HSIntroductionImageModel
 * 
 */
export type HSIntroductionImageModel = {
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  id: string
  hs_provider_id: string
  image_url: string
}

/**
 * Model UserExpertiseModel
 * 
 */
export type UserExpertiseModel = {
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  id: string
  category_id: string
  business_user_id: string
}

/**
 * Model ExpertSubCategoryModel
 * 
 */
export type ExpertSubCategoryModel = {
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  id: string
  name: string
  super_id: string
}

/**
 * Model ExpertSuperCategoryModel
 * 
 */
export type ExpertSuperCategoryModel = {
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  id: string
  name: string
  business_type: ExpertBusinessType
}

/**
 * Model AgreementModel
 * 
 */
export type AgreementModel = {
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  id: string
  title: string
  content: string
  user_type: AgreementUserType
}

/**
 * Model AgreementAcceptanceModel
 * 
 */
export type AgreementAcceptanceModel = {
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  id: string
  user_id: string
  agreement_id: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const AgreementUserType: {
  all: 'all',
  customer: 'customer',
  business: 'business',
  HS: 'HS',
  RE: 'RE'
};

export type AgreementUserType = (typeof AgreementUserType)[keyof typeof AgreementUserType]


export const ExpertBusinessType: {
  HS: 'HS',
  RE: 'RE'
};

export type ExpertBusinessType = (typeof ExpertBusinessType)[keyof typeof ExpertBusinessType]


export const GenderType: {
  female: 'female',
  male: 'male',
  other: 'other'
};

export type GenderType = (typeof GenderType)[keyof typeof GenderType]


export const OauthType: {
  kakao: 'kakao',
  naver: 'naver'
};

export type OauthType = (typeof OauthType)[keyof typeof OauthType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more OauthAccessorModels
 * const oauthAccessorModels = await prisma.oauthAccessorModel.findMany()
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
   * // Fetch zero or more OauthAccessorModels
   * const oauthAccessorModels = await prisma.oauthAccessorModel.findMany()
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
   * `prisma.oauthAccessorModel`: Exposes CRUD operations for the **OauthAccessorModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OauthAccessorModels
    * const oauthAccessorModels = await prisma.oauthAccessorModel.findMany()
    * ```
    */
  get oauthAccessorModel(): Prisma.OauthAccessorModelDelegate<GlobalReject>;

  /**
   * `prisma.userModel`: Exposes CRUD operations for the **UserModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserModels
    * const userModels = await prisma.userModel.findMany()
    * ```
    */
  get userModel(): Prisma.UserModelDelegate<GlobalReject>;

  /**
   * `prisma.customerModel`: Exposes CRUD operations for the **CustomerModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerModels
    * const customerModels = await prisma.customerModel.findMany()
    * ```
    */
  get customerModel(): Prisma.CustomerModelDelegate<GlobalReject>;

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
   * `prisma.rEAgentModel`: Exposes CRUD operations for the **REAgentModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more REAgentModels
    * const rEAgentModels = await prisma.rEAgentModel.findMany()
    * ```
    */
  get rEAgentModel(): Prisma.REAgentModelDelegate<GlobalReject>;

  /**
   * `prisma.hSProviderModel`: Exposes CRUD operations for the **HSProviderModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HSProviderModels
    * const hSProviderModels = await prisma.hSProviderModel.findMany()
    * ```
    */
  get hSProviderModel(): Prisma.HSProviderModelDelegate<GlobalReject>;

  /**
   * `prisma.businessCertificationModel`: Exposes CRUD operations for the **BusinessCertificationModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessCertificationModels
    * const businessCertificationModels = await prisma.businessCertificationModel.findMany()
    * ```
    */
  get businessCertificationModel(): Prisma.BusinessCertificationModelDelegate<GlobalReject>;

  /**
   * `prisma.hSIntroductionImageModel`: Exposes CRUD operations for the **HSIntroductionImageModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HSIntroductionImageModels
    * const hSIntroductionImageModels = await prisma.hSIntroductionImageModel.findMany()
    * ```
    */
  get hSIntroductionImageModel(): Prisma.HSIntroductionImageModelDelegate<GlobalReject>;

  /**
   * `prisma.userExpertiseModel`: Exposes CRUD operations for the **UserExpertiseModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserExpertiseModels
    * const userExpertiseModels = await prisma.userExpertiseModel.findMany()
    * ```
    */
  get userExpertiseModel(): Prisma.UserExpertiseModelDelegate<GlobalReject>;

  /**
   * `prisma.expertSubCategoryModel`: Exposes CRUD operations for the **ExpertSubCategoryModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpertSubCategoryModels
    * const expertSubCategoryModels = await prisma.expertSubCategoryModel.findMany()
    * ```
    */
  get expertSubCategoryModel(): Prisma.ExpertSubCategoryModelDelegate<GlobalReject>;

  /**
   * `prisma.expertSuperCategoryModel`: Exposes CRUD operations for the **ExpertSuperCategoryModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpertSuperCategoryModels
    * const expertSuperCategoryModels = await prisma.expertSuperCategoryModel.findMany()
    * ```
    */
  get expertSuperCategoryModel(): Prisma.ExpertSuperCategoryModelDelegate<GlobalReject>;

  /**
   * `prisma.agreementModel`: Exposes CRUD operations for the **AgreementModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgreementModels
    * const agreementModels = await prisma.agreementModel.findMany()
    * ```
    */
  get agreementModel(): Prisma.AgreementModelDelegate<GlobalReject>;

  /**
   * `prisma.agreementAcceptanceModel`: Exposes CRUD operations for the **AgreementAcceptanceModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgreementAcceptanceModels
    * const agreementAcceptanceModels = await prisma.agreementAcceptanceModel.findMany()
    * ```
    */
  get agreementAcceptanceModel(): Prisma.AgreementAcceptanceModelDelegate<GlobalReject>;
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
   * Prisma Client JS version: 4.13.0
   * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
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
    OauthAccessorModel: 'OauthAccessorModel',
    UserModel: 'UserModel',
    CustomerModel: 'CustomerModel',
    BusinessUser: 'BusinessUser',
    REAgentModel: 'REAgentModel',
    HSProviderModel: 'HSProviderModel',
    BusinessCertificationModel: 'BusinessCertificationModel',
    HSIntroductionImageModel: 'HSIntroductionImageModel',
    UserExpertiseModel: 'UserExpertiseModel',
    ExpertSubCategoryModel: 'ExpertSubCategoryModel',
    ExpertSuperCategoryModel: 'ExpertSuperCategoryModel',
    AgreementModel: 'AgreementModel',
    AgreementAcceptanceModel: 'AgreementAcceptanceModel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    database?: Datasource
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
   * Count Type UserModelCountOutputType
   */


  export type UserModelCountOutputType = {
    agreement_acceptances: number
  }

  export type UserModelCountOutputTypeSelect = {
    agreement_acceptances?: boolean
  }

  export type UserModelCountOutputTypeGetPayload<S extends boolean | null | undefined | UserModelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserModelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserModelCountOutputTypeArgs)
    ? UserModelCountOutputType 
    : S extends { select: any } & (UserModelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserModelCountOutputType ? UserModelCountOutputType[P] : never
  } 
      : UserModelCountOutputType




  // Custom InputTypes

  /**
   * UserModelCountOutputType without action
   */
  export type UserModelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserModelCountOutputType
     */
    select?: UserModelCountOutputTypeSelect | null
  }



  /**
   * Count Type CustomerModelCountOutputType
   */


  export type CustomerModelCountOutputType = {
    oauth_accessor: number
  }

  export type CustomerModelCountOutputTypeSelect = {
    oauth_accessor?: boolean
  }

  export type CustomerModelCountOutputTypeGetPayload<S extends boolean | null | undefined | CustomerModelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CustomerModelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CustomerModelCountOutputTypeArgs)
    ? CustomerModelCountOutputType 
    : S extends { select: any } & (CustomerModelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CustomerModelCountOutputType ? CustomerModelCountOutputType[P] : never
  } 
      : CustomerModelCountOutputType




  // Custom InputTypes

  /**
   * CustomerModelCountOutputType without action
   */
  export type CustomerModelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CustomerModelCountOutputType
     */
    select?: CustomerModelCountOutputTypeSelect | null
  }



  /**
   * Count Type BusinessUserCountOutputType
   */


  export type BusinessUserCountOutputType = {
    certifications: number
    expertises: number
    oauth_accessor: number
  }

  export type BusinessUserCountOutputTypeSelect = {
    certifications?: boolean
    expertises?: boolean
    oauth_accessor?: boolean
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
   * Count Type HSProviderModelCountOutputType
   */


  export type HSProviderModelCountOutputType = {
    introduction_images: number
  }

  export type HSProviderModelCountOutputTypeSelect = {
    introduction_images?: boolean
  }

  export type HSProviderModelCountOutputTypeGetPayload<S extends boolean | null | undefined | HSProviderModelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HSProviderModelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (HSProviderModelCountOutputTypeArgs)
    ? HSProviderModelCountOutputType 
    : S extends { select: any } & (HSProviderModelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof HSProviderModelCountOutputType ? HSProviderModelCountOutputType[P] : never
  } 
      : HSProviderModelCountOutputType




  // Custom InputTypes

  /**
   * HSProviderModelCountOutputType without action
   */
  export type HSProviderModelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HSProviderModelCountOutputType
     */
    select?: HSProviderModelCountOutputTypeSelect | null
  }



  /**
   * Count Type ExpertSubCategoryModelCountOutputType
   */


  export type ExpertSubCategoryModelCountOutputType = {
    expertises: number
  }

  export type ExpertSubCategoryModelCountOutputTypeSelect = {
    expertises?: boolean
  }

  export type ExpertSubCategoryModelCountOutputTypeGetPayload<S extends boolean | null | undefined | ExpertSubCategoryModelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ExpertSubCategoryModelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ExpertSubCategoryModelCountOutputTypeArgs)
    ? ExpertSubCategoryModelCountOutputType 
    : S extends { select: any } & (ExpertSubCategoryModelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ExpertSubCategoryModelCountOutputType ? ExpertSubCategoryModelCountOutputType[P] : never
  } 
      : ExpertSubCategoryModelCountOutputType




  // Custom InputTypes

  /**
   * ExpertSubCategoryModelCountOutputType without action
   */
  export type ExpertSubCategoryModelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ExpertSubCategoryModelCountOutputType
     */
    select?: ExpertSubCategoryModelCountOutputTypeSelect | null
  }



  /**
   * Count Type ExpertSuperCategoryModelCountOutputType
   */


  export type ExpertSuperCategoryModelCountOutputType = {
    subs: number
  }

  export type ExpertSuperCategoryModelCountOutputTypeSelect = {
    subs?: boolean
  }

  export type ExpertSuperCategoryModelCountOutputTypeGetPayload<S extends boolean | null | undefined | ExpertSuperCategoryModelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ExpertSuperCategoryModelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ExpertSuperCategoryModelCountOutputTypeArgs)
    ? ExpertSuperCategoryModelCountOutputType 
    : S extends { select: any } & (ExpertSuperCategoryModelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ExpertSuperCategoryModelCountOutputType ? ExpertSuperCategoryModelCountOutputType[P] : never
  } 
      : ExpertSuperCategoryModelCountOutputType




  // Custom InputTypes

  /**
   * ExpertSuperCategoryModelCountOutputType without action
   */
  export type ExpertSuperCategoryModelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ExpertSuperCategoryModelCountOutputType
     */
    select?: ExpertSuperCategoryModelCountOutputTypeSelect | null
  }



  /**
   * Count Type AgreementModelCountOutputType
   */


  export type AgreementModelCountOutputType = {
    acceptances: number
  }

  export type AgreementModelCountOutputTypeSelect = {
    acceptances?: boolean
  }

  export type AgreementModelCountOutputTypeGetPayload<S extends boolean | null | undefined | AgreementModelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AgreementModelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AgreementModelCountOutputTypeArgs)
    ? AgreementModelCountOutputType 
    : S extends { select: any } & (AgreementModelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AgreementModelCountOutputType ? AgreementModelCountOutputType[P] : never
  } 
      : AgreementModelCountOutputType




  // Custom InputTypes

  /**
   * AgreementModelCountOutputType without action
   */
  export type AgreementModelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AgreementModelCountOutputType
     */
    select?: AgreementModelCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model OauthAccessorModel
   */


  export type AggregateOauthAccessorModel = {
    _count: OauthAccessorModelCountAggregateOutputType | null
    _min: OauthAccessorModelMinAggregateOutputType | null
    _max: OauthAccessorModelMaxAggregateOutputType | null
  }

  export type OauthAccessorModelMinAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    oauth_type: OauthType | null
    oauth_sub: string | null
    business_user_id: string | null
    customer_id: string | null
    name: string | null
    email: string | null
    phone: string | null
    profile_image_url: string | null
    birth: string | null
    gender: GenderType | null
    address_first: string | null
    address_second: string | null
  }

  export type OauthAccessorModelMaxAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    oauth_type: OauthType | null
    oauth_sub: string | null
    business_user_id: string | null
    customer_id: string | null
    name: string | null
    email: string | null
    phone: string | null
    profile_image_url: string | null
    birth: string | null
    gender: GenderType | null
    address_first: string | null
    address_second: string | null
  }

  export type OauthAccessorModelCountAggregateOutputType = {
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    id: number
    oauth_type: number
    oauth_sub: number
    business_user_id: number
    customer_id: number
    name: number
    email: number
    phone: number
    profile_image_url: number
    birth: number
    gender: number
    address_first: number
    address_second: number
    _all: number
  }


  export type OauthAccessorModelMinAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    oauth_type?: true
    oauth_sub?: true
    business_user_id?: true
    customer_id?: true
    name?: true
    email?: true
    phone?: true
    profile_image_url?: true
    birth?: true
    gender?: true
    address_first?: true
    address_second?: true
  }

  export type OauthAccessorModelMaxAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    oauth_type?: true
    oauth_sub?: true
    business_user_id?: true
    customer_id?: true
    name?: true
    email?: true
    phone?: true
    profile_image_url?: true
    birth?: true
    gender?: true
    address_first?: true
    address_second?: true
  }

  export type OauthAccessorModelCountAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    oauth_type?: true
    oauth_sub?: true
    business_user_id?: true
    customer_id?: true
    name?: true
    email?: true
    phone?: true
    profile_image_url?: true
    birth?: true
    gender?: true
    address_first?: true
    address_second?: true
    _all?: true
  }

  export type OauthAccessorModelAggregateArgs = {
    /**
     * Filter which OauthAccessorModel to aggregate.
     */
    where?: OauthAccessorModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthAccessorModels to fetch.
     */
    orderBy?: Enumerable<OauthAccessorModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OauthAccessorModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthAccessorModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthAccessorModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OauthAccessorModels
    **/
    _count?: true | OauthAccessorModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OauthAccessorModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OauthAccessorModelMaxAggregateInputType
  }

  export type GetOauthAccessorModelAggregateType<T extends OauthAccessorModelAggregateArgs> = {
        [P in keyof T & keyof AggregateOauthAccessorModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOauthAccessorModel[P]>
      : GetScalarType<T[P], AggregateOauthAccessorModel[P]>
  }




  export type OauthAccessorModelGroupByArgs = {
    where?: OauthAccessorModelWhereInput
    orderBy?: Enumerable<OauthAccessorModelOrderByWithAggregationInput>
    by: OauthAccessorModelScalarFieldEnum[]
    having?: OauthAccessorModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OauthAccessorModelCountAggregateInputType | true
    _min?: OauthAccessorModelMinAggregateInputType
    _max?: OauthAccessorModelMaxAggregateInputType
  }


  export type OauthAccessorModelGroupByOutputType = {
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    id: string
    oauth_type: OauthType
    oauth_sub: string
    business_user_id: string
    customer_id: string
    name: string | null
    email: string | null
    phone: string | null
    profile_image_url: string | null
    birth: string | null
    gender: GenderType | null
    address_first: string | null
    address_second: string | null
    _count: OauthAccessorModelCountAggregateOutputType | null
    _min: OauthAccessorModelMinAggregateOutputType | null
    _max: OauthAccessorModelMaxAggregateOutputType | null
  }

  type GetOauthAccessorModelGroupByPayload<T extends OauthAccessorModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OauthAccessorModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OauthAccessorModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OauthAccessorModelGroupByOutputType[P]>
            : GetScalarType<T[P], OauthAccessorModelGroupByOutputType[P]>
        }
      >
    >


  export type OauthAccessorModelSelect = {
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    id?: boolean
    oauth_type?: boolean
    oauth_sub?: boolean
    business_user_id?: boolean
    customer_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    profile_image_url?: boolean
    birth?: boolean
    gender?: boolean
    address_first?: boolean
    address_second?: boolean
    business_user?: boolean | BusinessUserArgs
    customer?: boolean | CustomerModelArgs
  }


  export type OauthAccessorModelInclude = {
    business_user?: boolean | BusinessUserArgs
    customer?: boolean | CustomerModelArgs
  }

  export type OauthAccessorModelGetPayload<S extends boolean | null | undefined | OauthAccessorModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OauthAccessorModel :
    S extends undefined ? never :
    S extends { include: any } & (OauthAccessorModelArgs | OauthAccessorModelFindManyArgs)
    ? OauthAccessorModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'business_user' ? BusinessUserGetPayload<S['include'][P]> :
        P extends 'customer' ? CustomerModelGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (OauthAccessorModelArgs | OauthAccessorModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'business_user' ? BusinessUserGetPayload<S['select'][P]> :
        P extends 'customer' ? CustomerModelGetPayload<S['select'][P]> :  P extends keyof OauthAccessorModel ? OauthAccessorModel[P] : never
  } 
      : OauthAccessorModel


  type OauthAccessorModelCountArgs = 
    Omit<OauthAccessorModelFindManyArgs, 'select' | 'include'> & {
      select?: OauthAccessorModelCountAggregateInputType | true
    }

  export interface OauthAccessorModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one OauthAccessorModel that matches the filter.
     * @param {OauthAccessorModelFindUniqueArgs} args - Arguments to find a OauthAccessorModel
     * @example
     * // Get one OauthAccessorModel
     * const oauthAccessorModel = await prisma.oauthAccessorModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OauthAccessorModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OauthAccessorModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'OauthAccessorModel'> extends True ? Prisma__OauthAccessorModelClient<OauthAccessorModelGetPayload<T>> : Prisma__OauthAccessorModelClient<OauthAccessorModelGetPayload<T> | null, null>

    /**
     * Find one OauthAccessorModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OauthAccessorModelFindUniqueOrThrowArgs} args - Arguments to find a OauthAccessorModel
     * @example
     * // Get one OauthAccessorModel
     * const oauthAccessorModel = await prisma.oauthAccessorModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OauthAccessorModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OauthAccessorModelFindUniqueOrThrowArgs>
    ): Prisma__OauthAccessorModelClient<OauthAccessorModelGetPayload<T>>

    /**
     * Find the first OauthAccessorModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccessorModelFindFirstArgs} args - Arguments to find a OauthAccessorModel
     * @example
     * // Get one OauthAccessorModel
     * const oauthAccessorModel = await prisma.oauthAccessorModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OauthAccessorModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OauthAccessorModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'OauthAccessorModel'> extends True ? Prisma__OauthAccessorModelClient<OauthAccessorModelGetPayload<T>> : Prisma__OauthAccessorModelClient<OauthAccessorModelGetPayload<T> | null, null>

    /**
     * Find the first OauthAccessorModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccessorModelFindFirstOrThrowArgs} args - Arguments to find a OauthAccessorModel
     * @example
     * // Get one OauthAccessorModel
     * const oauthAccessorModel = await prisma.oauthAccessorModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OauthAccessorModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OauthAccessorModelFindFirstOrThrowArgs>
    ): Prisma__OauthAccessorModelClient<OauthAccessorModelGetPayload<T>>

    /**
     * Find zero or more OauthAccessorModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccessorModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OauthAccessorModels
     * const oauthAccessorModels = await prisma.oauthAccessorModel.findMany()
     * 
     * // Get first 10 OauthAccessorModels
     * const oauthAccessorModels = await prisma.oauthAccessorModel.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const oauthAccessorModelWithCreated_atOnly = await prisma.oauthAccessorModel.findMany({ select: { created_at: true } })
     * 
    **/
    findMany<T extends OauthAccessorModelFindManyArgs>(
      args?: SelectSubset<T, OauthAccessorModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<OauthAccessorModelGetPayload<T>>>

    /**
     * Create a OauthAccessorModel.
     * @param {OauthAccessorModelCreateArgs} args - Arguments to create a OauthAccessorModel.
     * @example
     * // Create one OauthAccessorModel
     * const OauthAccessorModel = await prisma.oauthAccessorModel.create({
     *   data: {
     *     // ... data to create a OauthAccessorModel
     *   }
     * })
     * 
    **/
    create<T extends OauthAccessorModelCreateArgs>(
      args: SelectSubset<T, OauthAccessorModelCreateArgs>
    ): Prisma__OauthAccessorModelClient<OauthAccessorModelGetPayload<T>>

    /**
     * Create many OauthAccessorModels.
     *     @param {OauthAccessorModelCreateManyArgs} args - Arguments to create many OauthAccessorModels.
     *     @example
     *     // Create many OauthAccessorModels
     *     const oauthAccessorModel = await prisma.oauthAccessorModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OauthAccessorModelCreateManyArgs>(
      args?: SelectSubset<T, OauthAccessorModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OauthAccessorModel.
     * @param {OauthAccessorModelDeleteArgs} args - Arguments to delete one OauthAccessorModel.
     * @example
     * // Delete one OauthAccessorModel
     * const OauthAccessorModel = await prisma.oauthAccessorModel.delete({
     *   where: {
     *     // ... filter to delete one OauthAccessorModel
     *   }
     * })
     * 
    **/
    delete<T extends OauthAccessorModelDeleteArgs>(
      args: SelectSubset<T, OauthAccessorModelDeleteArgs>
    ): Prisma__OauthAccessorModelClient<OauthAccessorModelGetPayload<T>>

    /**
     * Update one OauthAccessorModel.
     * @param {OauthAccessorModelUpdateArgs} args - Arguments to update one OauthAccessorModel.
     * @example
     * // Update one OauthAccessorModel
     * const oauthAccessorModel = await prisma.oauthAccessorModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OauthAccessorModelUpdateArgs>(
      args: SelectSubset<T, OauthAccessorModelUpdateArgs>
    ): Prisma__OauthAccessorModelClient<OauthAccessorModelGetPayload<T>>

    /**
     * Delete zero or more OauthAccessorModels.
     * @param {OauthAccessorModelDeleteManyArgs} args - Arguments to filter OauthAccessorModels to delete.
     * @example
     * // Delete a few OauthAccessorModels
     * const { count } = await prisma.oauthAccessorModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OauthAccessorModelDeleteManyArgs>(
      args?: SelectSubset<T, OauthAccessorModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OauthAccessorModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccessorModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OauthAccessorModels
     * const oauthAccessorModel = await prisma.oauthAccessorModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OauthAccessorModelUpdateManyArgs>(
      args: SelectSubset<T, OauthAccessorModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OauthAccessorModel.
     * @param {OauthAccessorModelUpsertArgs} args - Arguments to update or create a OauthAccessorModel.
     * @example
     * // Update or create a OauthAccessorModel
     * const oauthAccessorModel = await prisma.oauthAccessorModel.upsert({
     *   create: {
     *     // ... data to create a OauthAccessorModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OauthAccessorModel we want to update
     *   }
     * })
    **/
    upsert<T extends OauthAccessorModelUpsertArgs>(
      args: SelectSubset<T, OauthAccessorModelUpsertArgs>
    ): Prisma__OauthAccessorModelClient<OauthAccessorModelGetPayload<T>>

    /**
     * Count the number of OauthAccessorModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccessorModelCountArgs} args - Arguments to filter OauthAccessorModels to count.
     * @example
     * // Count the number of OauthAccessorModels
     * const count = await prisma.oauthAccessorModel.count({
     *   where: {
     *     // ... the filter for the OauthAccessorModels we want to count
     *   }
     * })
    **/
    count<T extends OauthAccessorModelCountArgs>(
      args?: Subset<T, OauthAccessorModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OauthAccessorModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OauthAccessorModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccessorModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OauthAccessorModelAggregateArgs>(args: Subset<T, OauthAccessorModelAggregateArgs>): Prisma.PrismaPromise<GetOauthAccessorModelAggregateType<T>>

    /**
     * Group by OauthAccessorModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccessorModelGroupByArgs} args - Group by arguments.
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
      T extends OauthAccessorModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OauthAccessorModelGroupByArgs['orderBy'] }
        : { orderBy?: OauthAccessorModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OauthAccessorModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOauthAccessorModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for OauthAccessorModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OauthAccessorModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    customer<T extends CustomerModelArgs= {}>(args?: Subset<T, CustomerModelArgs>): Prisma__CustomerModelClient<CustomerModelGetPayload<T> | Null>;

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
   * OauthAccessorModel base type for findUnique actions
   */
  export type OauthAccessorModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the OauthAccessorModel
     */
    select?: OauthAccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccessorModelInclude | null
    /**
     * Filter, which OauthAccessorModel to fetch.
     */
    where: OauthAccessorModelWhereUniqueInput
  }

  /**
   * OauthAccessorModel findUnique
   */
  export interface OauthAccessorModelFindUniqueArgs extends OauthAccessorModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OauthAccessorModel findUniqueOrThrow
   */
  export type OauthAccessorModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OauthAccessorModel
     */
    select?: OauthAccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccessorModelInclude | null
    /**
     * Filter, which OauthAccessorModel to fetch.
     */
    where: OauthAccessorModelWhereUniqueInput
  }


  /**
   * OauthAccessorModel base type for findFirst actions
   */
  export type OauthAccessorModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the OauthAccessorModel
     */
    select?: OauthAccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccessorModelInclude | null
    /**
     * Filter, which OauthAccessorModel to fetch.
     */
    where?: OauthAccessorModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthAccessorModels to fetch.
     */
    orderBy?: Enumerable<OauthAccessorModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OauthAccessorModels.
     */
    cursor?: OauthAccessorModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthAccessorModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthAccessorModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OauthAccessorModels.
     */
    distinct?: Enumerable<OauthAccessorModelScalarFieldEnum>
  }

  /**
   * OauthAccessorModel findFirst
   */
  export interface OauthAccessorModelFindFirstArgs extends OauthAccessorModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OauthAccessorModel findFirstOrThrow
   */
  export type OauthAccessorModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OauthAccessorModel
     */
    select?: OauthAccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccessorModelInclude | null
    /**
     * Filter, which OauthAccessorModel to fetch.
     */
    where?: OauthAccessorModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthAccessorModels to fetch.
     */
    orderBy?: Enumerable<OauthAccessorModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OauthAccessorModels.
     */
    cursor?: OauthAccessorModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthAccessorModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthAccessorModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OauthAccessorModels.
     */
    distinct?: Enumerable<OauthAccessorModelScalarFieldEnum>
  }


  /**
   * OauthAccessorModel findMany
   */
  export type OauthAccessorModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the OauthAccessorModel
     */
    select?: OauthAccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccessorModelInclude | null
    /**
     * Filter, which OauthAccessorModels to fetch.
     */
    where?: OauthAccessorModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthAccessorModels to fetch.
     */
    orderBy?: Enumerable<OauthAccessorModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OauthAccessorModels.
     */
    cursor?: OauthAccessorModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthAccessorModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthAccessorModels.
     */
    skip?: number
    distinct?: Enumerable<OauthAccessorModelScalarFieldEnum>
  }


  /**
   * OauthAccessorModel create
   */
  export type OauthAccessorModelCreateArgs = {
    /**
     * Select specific fields to fetch from the OauthAccessorModel
     */
    select?: OauthAccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccessorModelInclude | null
    /**
     * The data needed to create a OauthAccessorModel.
     */
    data: XOR<OauthAccessorModelCreateInput, OauthAccessorModelUncheckedCreateInput>
  }


  /**
   * OauthAccessorModel createMany
   */
  export type OauthAccessorModelCreateManyArgs = {
    /**
     * The data used to create many OauthAccessorModels.
     */
    data: Enumerable<OauthAccessorModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * OauthAccessorModel update
   */
  export type OauthAccessorModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the OauthAccessorModel
     */
    select?: OauthAccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccessorModelInclude | null
    /**
     * The data needed to update a OauthAccessorModel.
     */
    data: XOR<OauthAccessorModelUpdateInput, OauthAccessorModelUncheckedUpdateInput>
    /**
     * Choose, which OauthAccessorModel to update.
     */
    where: OauthAccessorModelWhereUniqueInput
  }


  /**
   * OauthAccessorModel updateMany
   */
  export type OauthAccessorModelUpdateManyArgs = {
    /**
     * The data used to update OauthAccessorModels.
     */
    data: XOR<OauthAccessorModelUpdateManyMutationInput, OauthAccessorModelUncheckedUpdateManyInput>
    /**
     * Filter which OauthAccessorModels to update
     */
    where?: OauthAccessorModelWhereInput
  }


  /**
   * OauthAccessorModel upsert
   */
  export type OauthAccessorModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the OauthAccessorModel
     */
    select?: OauthAccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccessorModelInclude | null
    /**
     * The filter to search for the OauthAccessorModel to update in case it exists.
     */
    where: OauthAccessorModelWhereUniqueInput
    /**
     * In case the OauthAccessorModel found by the `where` argument doesn't exist, create a new OauthAccessorModel with this data.
     */
    create: XOR<OauthAccessorModelCreateInput, OauthAccessorModelUncheckedCreateInput>
    /**
     * In case the OauthAccessorModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OauthAccessorModelUpdateInput, OauthAccessorModelUncheckedUpdateInput>
  }


  /**
   * OauthAccessorModel delete
   */
  export type OauthAccessorModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the OauthAccessorModel
     */
    select?: OauthAccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccessorModelInclude | null
    /**
     * Filter which OauthAccessorModel to delete.
     */
    where: OauthAccessorModelWhereUniqueInput
  }


  /**
   * OauthAccessorModel deleteMany
   */
  export type OauthAccessorModelDeleteManyArgs = {
    /**
     * Filter which OauthAccessorModels to delete
     */
    where?: OauthAccessorModelWhereInput
  }


  /**
   * OauthAccessorModel without action
   */
  export type OauthAccessorModelArgs = {
    /**
     * Select specific fields to fetch from the OauthAccessorModel
     */
    select?: OauthAccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccessorModelInclude | null
  }



  /**
   * Model UserModel
   */


  export type AggregateUserModel = {
    _count: UserModelCountAggregateOutputType | null
    _min: UserModelMinAggregateOutputType | null
    _max: UserModelMaxAggregateOutputType | null
  }

  export type UserModelMinAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    name: string | null
    email: string | null
  }

  export type UserModelMaxAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    name: string | null
    email: string | null
  }

  export type UserModelCountAggregateOutputType = {
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    id: number
    name: number
    email: number
    _all: number
  }


  export type UserModelMinAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    name?: true
    email?: true
  }

  export type UserModelMaxAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    name?: true
    email?: true
  }

  export type UserModelCountAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type UserModelAggregateArgs = {
    /**
     * Filter which UserModel to aggregate.
     */
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     */
    orderBy?: Enumerable<UserModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserModels
    **/
    _count?: true | UserModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserModelMaxAggregateInputType
  }

  export type GetUserModelAggregateType<T extends UserModelAggregateArgs> = {
        [P in keyof T & keyof AggregateUserModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserModel[P]>
      : GetScalarType<T[P], AggregateUserModel[P]>
  }




  export type UserModelGroupByArgs = {
    where?: UserModelWhereInput
    orderBy?: Enumerable<UserModelOrderByWithAggregationInput>
    by: UserModelScalarFieldEnum[]
    having?: UserModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserModelCountAggregateInputType | true
    _min?: UserModelMinAggregateInputType
    _max?: UserModelMaxAggregateInputType
  }


  export type UserModelGroupByOutputType = {
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    id: string
    name: string
    email: string | null
    _count: UserModelCountAggregateOutputType | null
    _min: UserModelMinAggregateOutputType | null
    _max: UserModelMaxAggregateOutputType | null
  }

  type GetUserModelGroupByPayload<T extends UserModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserModelGroupByOutputType[P]>
            : GetScalarType<T[P], UserModelGroupByOutputType[P]>
        }
      >
    >


  export type UserModelSelect = {
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    id?: boolean
    name?: boolean
    email?: boolean
    customer?: boolean | CustomerModelArgs
    business_user?: boolean | BusinessUserArgs
    agreement_acceptances?: boolean | UserModel$agreement_acceptancesArgs
    _count?: boolean | UserModelCountOutputTypeArgs
  }


  export type UserModelInclude = {
    customer?: boolean | CustomerModelArgs
    business_user?: boolean | BusinessUserArgs
    agreement_acceptances?: boolean | UserModel$agreement_acceptancesArgs
    _count?: boolean | UserModelCountOutputTypeArgs
  }

  export type UserModelGetPayload<S extends boolean | null | undefined | UserModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserModel :
    S extends undefined ? never :
    S extends { include: any } & (UserModelArgs | UserModelFindManyArgs)
    ? UserModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'customer' ? CustomerModelGetPayload<S['include'][P]> | null :
        P extends 'business_user' ? BusinessUserGetPayload<S['include'][P]> | null :
        P extends 'agreement_acceptances' ? Array < AgreementAcceptanceModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserModelArgs | UserModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'customer' ? CustomerModelGetPayload<S['select'][P]> | null :
        P extends 'business_user' ? BusinessUserGetPayload<S['select'][P]> | null :
        P extends 'agreement_acceptances' ? Array < AgreementAcceptanceModelGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserModelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof UserModel ? UserModel[P] : never
  } 
      : UserModel


  type UserModelCountArgs = 
    Omit<UserModelFindManyArgs, 'select' | 'include'> & {
      select?: UserModelCountAggregateInputType | true
    }

  export interface UserModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserModel that matches the filter.
     * @param {UserModelFindUniqueArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserModel'> extends True ? Prisma__UserModelClient<UserModelGetPayload<T>> : Prisma__UserModelClient<UserModelGetPayload<T> | null, null>

    /**
     * Find one UserModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserModelFindUniqueOrThrowArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserModelFindUniqueOrThrowArgs>
    ): Prisma__UserModelClient<UserModelGetPayload<T>>

    /**
     * Find the first UserModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelFindFirstArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserModel'> extends True ? Prisma__UserModelClient<UserModelGetPayload<T>> : Prisma__UserModelClient<UserModelGetPayload<T> | null, null>

    /**
     * Find the first UserModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelFindFirstOrThrowArgs} args - Arguments to find a UserModel
     * @example
     * // Get one UserModel
     * const userModel = await prisma.userModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserModelFindFirstOrThrowArgs>
    ): Prisma__UserModelClient<UserModelGetPayload<T>>

    /**
     * Find zero or more UserModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserModels
     * const userModels = await prisma.userModel.findMany()
     * 
     * // Get first 10 UserModels
     * const userModels = await prisma.userModel.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const userModelWithCreated_atOnly = await prisma.userModel.findMany({ select: { created_at: true } })
     * 
    **/
    findMany<T extends UserModelFindManyArgs>(
      args?: SelectSubset<T, UserModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserModelGetPayload<T>>>

    /**
     * Create a UserModel.
     * @param {UserModelCreateArgs} args - Arguments to create a UserModel.
     * @example
     * // Create one UserModel
     * const UserModel = await prisma.userModel.create({
     *   data: {
     *     // ... data to create a UserModel
     *   }
     * })
     * 
    **/
    create<T extends UserModelCreateArgs>(
      args: SelectSubset<T, UserModelCreateArgs>
    ): Prisma__UserModelClient<UserModelGetPayload<T>>

    /**
     * Create many UserModels.
     *     @param {UserModelCreateManyArgs} args - Arguments to create many UserModels.
     *     @example
     *     // Create many UserModels
     *     const userModel = await prisma.userModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserModelCreateManyArgs>(
      args?: SelectSubset<T, UserModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserModel.
     * @param {UserModelDeleteArgs} args - Arguments to delete one UserModel.
     * @example
     * // Delete one UserModel
     * const UserModel = await prisma.userModel.delete({
     *   where: {
     *     // ... filter to delete one UserModel
     *   }
     * })
     * 
    **/
    delete<T extends UserModelDeleteArgs>(
      args: SelectSubset<T, UserModelDeleteArgs>
    ): Prisma__UserModelClient<UserModelGetPayload<T>>

    /**
     * Update one UserModel.
     * @param {UserModelUpdateArgs} args - Arguments to update one UserModel.
     * @example
     * // Update one UserModel
     * const userModel = await prisma.userModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserModelUpdateArgs>(
      args: SelectSubset<T, UserModelUpdateArgs>
    ): Prisma__UserModelClient<UserModelGetPayload<T>>

    /**
     * Delete zero or more UserModels.
     * @param {UserModelDeleteManyArgs} args - Arguments to filter UserModels to delete.
     * @example
     * // Delete a few UserModels
     * const { count } = await prisma.userModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserModelDeleteManyArgs>(
      args?: SelectSubset<T, UserModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserModels
     * const userModel = await prisma.userModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserModelUpdateManyArgs>(
      args: SelectSubset<T, UserModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserModel.
     * @param {UserModelUpsertArgs} args - Arguments to update or create a UserModel.
     * @example
     * // Update or create a UserModel
     * const userModel = await prisma.userModel.upsert({
     *   create: {
     *     // ... data to create a UserModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserModel we want to update
     *   }
     * })
    **/
    upsert<T extends UserModelUpsertArgs>(
      args: SelectSubset<T, UserModelUpsertArgs>
    ): Prisma__UserModelClient<UserModelGetPayload<T>>

    /**
     * Count the number of UserModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelCountArgs} args - Arguments to filter UserModels to count.
     * @example
     * // Count the number of UserModels
     * const count = await prisma.userModel.count({
     *   where: {
     *     // ... the filter for the UserModels we want to count
     *   }
     * })
    **/
    count<T extends UserModelCountArgs>(
      args?: Subset<T, UserModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserModelAggregateArgs>(args: Subset<T, UserModelAggregateArgs>): Prisma.PrismaPromise<GetUserModelAggregateType<T>>

    /**
     * Group by UserModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelGroupByArgs} args - Group by arguments.
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
      T extends UserModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserModelGroupByArgs['orderBy'] }
        : { orderBy?: UserModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    customer<T extends CustomerModelArgs= {}>(args?: Subset<T, CustomerModelArgs>): Prisma__CustomerModelClient<CustomerModelGetPayload<T> | Null>;

    business_user<T extends BusinessUserArgs= {}>(args?: Subset<T, BusinessUserArgs>): Prisma__BusinessUserClient<BusinessUserGetPayload<T> | Null>;

    agreement_acceptances<T extends UserModel$agreement_acceptancesArgs= {}>(args?: Subset<T, UserModel$agreement_acceptancesArgs>): Prisma.PrismaPromise<Array<AgreementAcceptanceModelGetPayload<T>>| Null>;

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
   * UserModel base type for findUnique actions
   */
  export type UserModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude | null
    /**
     * Filter, which UserModel to fetch.
     */
    where: UserModelWhereUniqueInput
  }

  /**
   * UserModel findUnique
   */
  export interface UserModelFindUniqueArgs extends UserModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserModel findUniqueOrThrow
   */
  export type UserModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude | null
    /**
     * Filter, which UserModel to fetch.
     */
    where: UserModelWhereUniqueInput
  }


  /**
   * UserModel base type for findFirst actions
   */
  export type UserModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude | null
    /**
     * Filter, which UserModel to fetch.
     */
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     */
    orderBy?: Enumerable<UserModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModels.
     */
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModels.
     */
    distinct?: Enumerable<UserModelScalarFieldEnum>
  }

  /**
   * UserModel findFirst
   */
  export interface UserModelFindFirstArgs extends UserModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserModel findFirstOrThrow
   */
  export type UserModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude | null
    /**
     * Filter, which UserModel to fetch.
     */
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     */
    orderBy?: Enumerable<UserModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModels.
     */
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModels.
     */
    distinct?: Enumerable<UserModelScalarFieldEnum>
  }


  /**
   * UserModel findMany
   */
  export type UserModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude | null
    /**
     * Filter, which UserModels to fetch.
     */
    where?: UserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModels to fetch.
     */
    orderBy?: Enumerable<UserModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserModels.
     */
    cursor?: UserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModels.
     */
    skip?: number
    distinct?: Enumerable<UserModelScalarFieldEnum>
  }


  /**
   * UserModel create
   */
  export type UserModelCreateArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude | null
    /**
     * The data needed to create a UserModel.
     */
    data: XOR<UserModelCreateInput, UserModelUncheckedCreateInput>
  }


  /**
   * UserModel createMany
   */
  export type UserModelCreateManyArgs = {
    /**
     * The data used to create many UserModels.
     */
    data: Enumerable<UserModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserModel update
   */
  export type UserModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude | null
    /**
     * The data needed to update a UserModel.
     */
    data: XOR<UserModelUpdateInput, UserModelUncheckedUpdateInput>
    /**
     * Choose, which UserModel to update.
     */
    where: UserModelWhereUniqueInput
  }


  /**
   * UserModel updateMany
   */
  export type UserModelUpdateManyArgs = {
    /**
     * The data used to update UserModels.
     */
    data: XOR<UserModelUpdateManyMutationInput, UserModelUncheckedUpdateManyInput>
    /**
     * Filter which UserModels to update
     */
    where?: UserModelWhereInput
  }


  /**
   * UserModel upsert
   */
  export type UserModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude | null
    /**
     * The filter to search for the UserModel to update in case it exists.
     */
    where: UserModelWhereUniqueInput
    /**
     * In case the UserModel found by the `where` argument doesn't exist, create a new UserModel with this data.
     */
    create: XOR<UserModelCreateInput, UserModelUncheckedCreateInput>
    /**
     * In case the UserModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserModelUpdateInput, UserModelUncheckedUpdateInput>
  }


  /**
   * UserModel delete
   */
  export type UserModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude | null
    /**
     * Filter which UserModel to delete.
     */
    where: UserModelWhereUniqueInput
  }


  /**
   * UserModel deleteMany
   */
  export type UserModelDeleteManyArgs = {
    /**
     * Filter which UserModels to delete
     */
    where?: UserModelWhereInput
  }


  /**
   * UserModel.agreement_acceptances
   */
  export type UserModel$agreement_acceptancesArgs = {
    /**
     * Select specific fields to fetch from the AgreementAcceptanceModel
     */
    select?: AgreementAcceptanceModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementAcceptanceModelInclude | null
    where?: AgreementAcceptanceModelWhereInput
    orderBy?: Enumerable<AgreementAcceptanceModelOrderByWithRelationInput>
    cursor?: AgreementAcceptanceModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AgreementAcceptanceModelScalarFieldEnum>
  }


  /**
   * UserModel without action
   */
  export type UserModelArgs = {
    /**
     * Select specific fields to fetch from the UserModel
     */
    select?: UserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserModelInclude | null
  }



  /**
   * Model CustomerModel
   */


  export type AggregateCustomerModel = {
    _count: CustomerModelCountAggregateOutputType | null
    _min: CustomerModelMinAggregateOutputType | null
    _max: CustomerModelMaxAggregateOutputType | null
  }

  export type CustomerModelMinAggregateOutputType = {
    id: string | null
    birth: string | null
    gender: GenderType | null
    phone: string | null
    address_first: string | null
    address_second: string | null
    profile_image_url: string | null
  }

  export type CustomerModelMaxAggregateOutputType = {
    id: string | null
    birth: string | null
    gender: GenderType | null
    phone: string | null
    address_first: string | null
    address_second: string | null
    profile_image_url: string | null
  }

  export type CustomerModelCountAggregateOutputType = {
    id: number
    birth: number
    gender: number
    phone: number
    address_first: number
    address_second: number
    profile_image_url: number
    _all: number
  }


  export type CustomerModelMinAggregateInputType = {
    id?: true
    birth?: true
    gender?: true
    phone?: true
    address_first?: true
    address_second?: true
    profile_image_url?: true
  }

  export type CustomerModelMaxAggregateInputType = {
    id?: true
    birth?: true
    gender?: true
    phone?: true
    address_first?: true
    address_second?: true
    profile_image_url?: true
  }

  export type CustomerModelCountAggregateInputType = {
    id?: true
    birth?: true
    gender?: true
    phone?: true
    address_first?: true
    address_second?: true
    profile_image_url?: true
    _all?: true
  }

  export type CustomerModelAggregateArgs = {
    /**
     * Filter which CustomerModel to aggregate.
     */
    where?: CustomerModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerModels to fetch.
     */
    orderBy?: Enumerable<CustomerModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerModels
    **/
    _count?: true | CustomerModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerModelMaxAggregateInputType
  }

  export type GetCustomerModelAggregateType<T extends CustomerModelAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerModel[P]>
      : GetScalarType<T[P], AggregateCustomerModel[P]>
  }




  export type CustomerModelGroupByArgs = {
    where?: CustomerModelWhereInput
    orderBy?: Enumerable<CustomerModelOrderByWithAggregationInput>
    by: CustomerModelScalarFieldEnum[]
    having?: CustomerModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerModelCountAggregateInputType | true
    _min?: CustomerModelMinAggregateInputType
    _max?: CustomerModelMaxAggregateInputType
  }


  export type CustomerModelGroupByOutputType = {
    id: string
    birth: string | null
    gender: GenderType | null
    phone: string | null
    address_first: string | null
    address_second: string | null
    profile_image_url: string | null
    _count: CustomerModelCountAggregateOutputType | null
    _min: CustomerModelMinAggregateOutputType | null
    _max: CustomerModelMaxAggregateOutputType | null
  }

  type GetCustomerModelGroupByPayload<T extends CustomerModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CustomerModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerModelGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerModelGroupByOutputType[P]>
        }
      >
    >


  export type CustomerModelSelect = {
    id?: boolean
    birth?: boolean
    gender?: boolean
    phone?: boolean
    address_first?: boolean
    address_second?: boolean
    profile_image_url?: boolean
    base?: boolean | UserModelArgs
    oauth_accessor?: boolean | CustomerModel$oauth_accessorArgs
    _count?: boolean | CustomerModelCountOutputTypeArgs
  }


  export type CustomerModelInclude = {
    base?: boolean | UserModelArgs
    oauth_accessor?: boolean | CustomerModel$oauth_accessorArgs
    _count?: boolean | CustomerModelCountOutputTypeArgs
  }

  export type CustomerModelGetPayload<S extends boolean | null | undefined | CustomerModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CustomerModel :
    S extends undefined ? never :
    S extends { include: any } & (CustomerModelArgs | CustomerModelFindManyArgs)
    ? CustomerModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'base' ? UserModelGetPayload<S['include'][P]> :
        P extends 'oauth_accessor' ? Array < OauthAccessorModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? CustomerModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CustomerModelArgs | CustomerModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'base' ? UserModelGetPayload<S['select'][P]> :
        P extends 'oauth_accessor' ? Array < OauthAccessorModelGetPayload<S['select'][P]>>  :
        P extends '_count' ? CustomerModelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof CustomerModel ? CustomerModel[P] : never
  } 
      : CustomerModel


  type CustomerModelCountArgs = 
    Omit<CustomerModelFindManyArgs, 'select' | 'include'> & {
      select?: CustomerModelCountAggregateInputType | true
    }

  export interface CustomerModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CustomerModel that matches the filter.
     * @param {CustomerModelFindUniqueArgs} args - Arguments to find a CustomerModel
     * @example
     * // Get one CustomerModel
     * const customerModel = await prisma.customerModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CustomerModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CustomerModel'> extends True ? Prisma__CustomerModelClient<CustomerModelGetPayload<T>> : Prisma__CustomerModelClient<CustomerModelGetPayload<T> | null, null>

    /**
     * Find one CustomerModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerModelFindUniqueOrThrowArgs} args - Arguments to find a CustomerModel
     * @example
     * // Get one CustomerModel
     * const customerModel = await prisma.customerModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CustomerModelFindUniqueOrThrowArgs>
    ): Prisma__CustomerModelClient<CustomerModelGetPayload<T>>

    /**
     * Find the first CustomerModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerModelFindFirstArgs} args - Arguments to find a CustomerModel
     * @example
     * // Get one CustomerModel
     * const customerModel = await prisma.customerModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CustomerModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CustomerModel'> extends True ? Prisma__CustomerModelClient<CustomerModelGetPayload<T>> : Prisma__CustomerModelClient<CustomerModelGetPayload<T> | null, null>

    /**
     * Find the first CustomerModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerModelFindFirstOrThrowArgs} args - Arguments to find a CustomerModel
     * @example
     * // Get one CustomerModel
     * const customerModel = await prisma.customerModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CustomerModelFindFirstOrThrowArgs>
    ): Prisma__CustomerModelClient<CustomerModelGetPayload<T>>

    /**
     * Find zero or more CustomerModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerModels
     * const customerModels = await prisma.customerModel.findMany()
     * 
     * // Get first 10 CustomerModels
     * const customerModels = await prisma.customerModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerModelWithIdOnly = await prisma.customerModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerModelFindManyArgs>(
      args?: SelectSubset<T, CustomerModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<CustomerModelGetPayload<T>>>

    /**
     * Create a CustomerModel.
     * @param {CustomerModelCreateArgs} args - Arguments to create a CustomerModel.
     * @example
     * // Create one CustomerModel
     * const CustomerModel = await prisma.customerModel.create({
     *   data: {
     *     // ... data to create a CustomerModel
     *   }
     * })
     * 
    **/
    create<T extends CustomerModelCreateArgs>(
      args: SelectSubset<T, CustomerModelCreateArgs>
    ): Prisma__CustomerModelClient<CustomerModelGetPayload<T>>

    /**
     * Create many CustomerModels.
     *     @param {CustomerModelCreateManyArgs} args - Arguments to create many CustomerModels.
     *     @example
     *     // Create many CustomerModels
     *     const customerModel = await prisma.customerModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerModelCreateManyArgs>(
      args?: SelectSubset<T, CustomerModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustomerModel.
     * @param {CustomerModelDeleteArgs} args - Arguments to delete one CustomerModel.
     * @example
     * // Delete one CustomerModel
     * const CustomerModel = await prisma.customerModel.delete({
     *   where: {
     *     // ... filter to delete one CustomerModel
     *   }
     * })
     * 
    **/
    delete<T extends CustomerModelDeleteArgs>(
      args: SelectSubset<T, CustomerModelDeleteArgs>
    ): Prisma__CustomerModelClient<CustomerModelGetPayload<T>>

    /**
     * Update one CustomerModel.
     * @param {CustomerModelUpdateArgs} args - Arguments to update one CustomerModel.
     * @example
     * // Update one CustomerModel
     * const customerModel = await prisma.customerModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerModelUpdateArgs>(
      args: SelectSubset<T, CustomerModelUpdateArgs>
    ): Prisma__CustomerModelClient<CustomerModelGetPayload<T>>

    /**
     * Delete zero or more CustomerModels.
     * @param {CustomerModelDeleteManyArgs} args - Arguments to filter CustomerModels to delete.
     * @example
     * // Delete a few CustomerModels
     * const { count } = await prisma.customerModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerModelDeleteManyArgs>(
      args?: SelectSubset<T, CustomerModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerModels
     * const customerModel = await prisma.customerModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerModelUpdateManyArgs>(
      args: SelectSubset<T, CustomerModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerModel.
     * @param {CustomerModelUpsertArgs} args - Arguments to update or create a CustomerModel.
     * @example
     * // Update or create a CustomerModel
     * const customerModel = await prisma.customerModel.upsert({
     *   create: {
     *     // ... data to create a CustomerModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerModel we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerModelUpsertArgs>(
      args: SelectSubset<T, CustomerModelUpsertArgs>
    ): Prisma__CustomerModelClient<CustomerModelGetPayload<T>>

    /**
     * Count the number of CustomerModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerModelCountArgs} args - Arguments to filter CustomerModels to count.
     * @example
     * // Count the number of CustomerModels
     * const count = await prisma.customerModel.count({
     *   where: {
     *     // ... the filter for the CustomerModels we want to count
     *   }
     * })
    **/
    count<T extends CustomerModelCountArgs>(
      args?: Subset<T, CustomerModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerModelAggregateArgs>(args: Subset<T, CustomerModelAggregateArgs>): Prisma.PrismaPromise<GetCustomerModelAggregateType<T>>

    /**
     * Group by CustomerModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerModelGroupByArgs} args - Group by arguments.
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
      T extends CustomerModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerModelGroupByArgs['orderBy'] }
        : { orderBy?: CustomerModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CustomerModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    base<T extends UserModelArgs= {}>(args?: Subset<T, UserModelArgs>): Prisma__UserModelClient<UserModelGetPayload<T> | Null>;

    oauth_accessor<T extends CustomerModel$oauth_accessorArgs= {}>(args?: Subset<T, CustomerModel$oauth_accessorArgs>): Prisma.PrismaPromise<Array<OauthAccessorModelGetPayload<T>>| Null>;

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
   * CustomerModel base type for findUnique actions
   */
  export type CustomerModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CustomerModel
     */
    select?: CustomerModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerModelInclude | null
    /**
     * Filter, which CustomerModel to fetch.
     */
    where: CustomerModelWhereUniqueInput
  }

  /**
   * CustomerModel findUnique
   */
  export interface CustomerModelFindUniqueArgs extends CustomerModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CustomerModel findUniqueOrThrow
   */
  export type CustomerModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CustomerModel
     */
    select?: CustomerModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerModelInclude | null
    /**
     * Filter, which CustomerModel to fetch.
     */
    where: CustomerModelWhereUniqueInput
  }


  /**
   * CustomerModel base type for findFirst actions
   */
  export type CustomerModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CustomerModel
     */
    select?: CustomerModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerModelInclude | null
    /**
     * Filter, which CustomerModel to fetch.
     */
    where?: CustomerModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerModels to fetch.
     */
    orderBy?: Enumerable<CustomerModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerModels.
     */
    cursor?: CustomerModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerModels.
     */
    distinct?: Enumerable<CustomerModelScalarFieldEnum>
  }

  /**
   * CustomerModel findFirst
   */
  export interface CustomerModelFindFirstArgs extends CustomerModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CustomerModel findFirstOrThrow
   */
  export type CustomerModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CustomerModel
     */
    select?: CustomerModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerModelInclude | null
    /**
     * Filter, which CustomerModel to fetch.
     */
    where?: CustomerModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerModels to fetch.
     */
    orderBy?: Enumerable<CustomerModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerModels.
     */
    cursor?: CustomerModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerModels.
     */
    distinct?: Enumerable<CustomerModelScalarFieldEnum>
  }


  /**
   * CustomerModel findMany
   */
  export type CustomerModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the CustomerModel
     */
    select?: CustomerModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerModelInclude | null
    /**
     * Filter, which CustomerModels to fetch.
     */
    where?: CustomerModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerModels to fetch.
     */
    orderBy?: Enumerable<CustomerModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerModels.
     */
    cursor?: CustomerModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerModels.
     */
    skip?: number
    distinct?: Enumerable<CustomerModelScalarFieldEnum>
  }


  /**
   * CustomerModel create
   */
  export type CustomerModelCreateArgs = {
    /**
     * Select specific fields to fetch from the CustomerModel
     */
    select?: CustomerModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerModelInclude | null
    /**
     * The data needed to create a CustomerModel.
     */
    data: XOR<CustomerModelCreateInput, CustomerModelUncheckedCreateInput>
  }


  /**
   * CustomerModel createMany
   */
  export type CustomerModelCreateManyArgs = {
    /**
     * The data used to create many CustomerModels.
     */
    data: Enumerable<CustomerModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CustomerModel update
   */
  export type CustomerModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the CustomerModel
     */
    select?: CustomerModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerModelInclude | null
    /**
     * The data needed to update a CustomerModel.
     */
    data: XOR<CustomerModelUpdateInput, CustomerModelUncheckedUpdateInput>
    /**
     * Choose, which CustomerModel to update.
     */
    where: CustomerModelWhereUniqueInput
  }


  /**
   * CustomerModel updateMany
   */
  export type CustomerModelUpdateManyArgs = {
    /**
     * The data used to update CustomerModels.
     */
    data: XOR<CustomerModelUpdateManyMutationInput, CustomerModelUncheckedUpdateManyInput>
    /**
     * Filter which CustomerModels to update
     */
    where?: CustomerModelWhereInput
  }


  /**
   * CustomerModel upsert
   */
  export type CustomerModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the CustomerModel
     */
    select?: CustomerModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerModelInclude | null
    /**
     * The filter to search for the CustomerModel to update in case it exists.
     */
    where: CustomerModelWhereUniqueInput
    /**
     * In case the CustomerModel found by the `where` argument doesn't exist, create a new CustomerModel with this data.
     */
    create: XOR<CustomerModelCreateInput, CustomerModelUncheckedCreateInput>
    /**
     * In case the CustomerModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerModelUpdateInput, CustomerModelUncheckedUpdateInput>
  }


  /**
   * CustomerModel delete
   */
  export type CustomerModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the CustomerModel
     */
    select?: CustomerModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerModelInclude | null
    /**
     * Filter which CustomerModel to delete.
     */
    where: CustomerModelWhereUniqueInput
  }


  /**
   * CustomerModel deleteMany
   */
  export type CustomerModelDeleteManyArgs = {
    /**
     * Filter which CustomerModels to delete
     */
    where?: CustomerModelWhereInput
  }


  /**
   * CustomerModel.oauth_accessor
   */
  export type CustomerModel$oauth_accessorArgs = {
    /**
     * Select specific fields to fetch from the OauthAccessorModel
     */
    select?: OauthAccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccessorModelInclude | null
    where?: OauthAccessorModelWhereInput
    orderBy?: Enumerable<OauthAccessorModelOrderByWithRelationInput>
    cursor?: OauthAccessorModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OauthAccessorModelScalarFieldEnum>
  }


  /**
   * CustomerModel without action
   */
  export type CustomerModelArgs = {
    /**
     * Select specific fields to fetch from the CustomerModel
     */
    select?: CustomerModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerModelInclude | null
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
    phone: string | null
    address_first: string | null
    address_second: string | null
    profile_image_url: string | null
  }

  export type BusinessUserMaxAggregateOutputType = {
    id: string | null
    is_verified: boolean | null
    introduction_title: string | null
    introduction_content: string | null
    phone: string | null
    address_first: string | null
    address_second: string | null
    profile_image_url: string | null
  }

  export type BusinessUserCountAggregateOutputType = {
    id: number
    is_verified: number
    introduction_title: number
    introduction_content: number
    phone: number
    address_first: number
    address_second: number
    profile_image_url: number
    _all: number
  }


  export type BusinessUserMinAggregateInputType = {
    id?: true
    is_verified?: true
    introduction_title?: true
    introduction_content?: true
    phone?: true
    address_first?: true
    address_second?: true
    profile_image_url?: true
  }

  export type BusinessUserMaxAggregateInputType = {
    id?: true
    is_verified?: true
    introduction_title?: true
    introduction_content?: true
    phone?: true
    address_first?: true
    address_second?: true
    profile_image_url?: true
  }

  export type BusinessUserCountAggregateInputType = {
    id?: true
    is_verified?: true
    introduction_title?: true
    introduction_content?: true
    phone?: true
    address_first?: true
    address_second?: true
    profile_image_url?: true
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
    phone: string
    address_first: string
    address_second: string
    profile_image_url: string
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
    phone?: boolean
    address_first?: boolean
    address_second?: boolean
    profile_image_url?: boolean
    base?: boolean | UserModelArgs
    re_agent?: boolean | REAgentModelArgs
    hs_provider?: boolean | HSProviderModelArgs
    certifications?: boolean | BusinessUser$certificationsArgs
    expertises?: boolean | BusinessUser$expertisesArgs
    oauth_accessor?: boolean | BusinessUser$oauth_accessorArgs
    _count?: boolean | BusinessUserCountOutputTypeArgs
  }


  export type BusinessUserInclude = {
    base?: boolean | UserModelArgs
    re_agent?: boolean | REAgentModelArgs
    hs_provider?: boolean | HSProviderModelArgs
    certifications?: boolean | BusinessUser$certificationsArgs
    expertises?: boolean | BusinessUser$expertisesArgs
    oauth_accessor?: boolean | BusinessUser$oauth_accessorArgs
    _count?: boolean | BusinessUserCountOutputTypeArgs
  }

  export type BusinessUserGetPayload<S extends boolean | null | undefined | BusinessUserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BusinessUser :
    S extends undefined ? never :
    S extends { include: any } & (BusinessUserArgs | BusinessUserFindManyArgs)
    ? BusinessUser  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'base' ? UserModelGetPayload<S['include'][P]> :
        P extends 're_agent' ? REAgentModelGetPayload<S['include'][P]> | null :
        P extends 'hs_provider' ? HSProviderModelGetPayload<S['include'][P]> | null :
        P extends 'certifications' ? Array < BusinessCertificationModelGetPayload<S['include'][P]>>  :
        P extends 'expertises' ? Array < UserExpertiseModelGetPayload<S['include'][P]>>  :
        P extends 'oauth_accessor' ? Array < OauthAccessorModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? BusinessUserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BusinessUserArgs | BusinessUserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'base' ? UserModelGetPayload<S['select'][P]> :
        P extends 're_agent' ? REAgentModelGetPayload<S['select'][P]> | null :
        P extends 'hs_provider' ? HSProviderModelGetPayload<S['select'][P]> | null :
        P extends 'certifications' ? Array < BusinessCertificationModelGetPayload<S['select'][P]>>  :
        P extends 'expertises' ? Array < UserExpertiseModelGetPayload<S['select'][P]>>  :
        P extends 'oauth_accessor' ? Array < OauthAccessorModelGetPayload<S['select'][P]>>  :
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

    base<T extends UserModelArgs= {}>(args?: Subset<T, UserModelArgs>): Prisma__UserModelClient<UserModelGetPayload<T> | Null>;

    re_agent<T extends REAgentModelArgs= {}>(args?: Subset<T, REAgentModelArgs>): Prisma__REAgentModelClient<REAgentModelGetPayload<T> | Null>;

    hs_provider<T extends HSProviderModelArgs= {}>(args?: Subset<T, HSProviderModelArgs>): Prisma__HSProviderModelClient<HSProviderModelGetPayload<T> | Null>;

    certifications<T extends BusinessUser$certificationsArgs= {}>(args?: Subset<T, BusinessUser$certificationsArgs>): Prisma.PrismaPromise<Array<BusinessCertificationModelGetPayload<T>>| Null>;

    expertises<T extends BusinessUser$expertisesArgs= {}>(args?: Subset<T, BusinessUser$expertisesArgs>): Prisma.PrismaPromise<Array<UserExpertiseModelGetPayload<T>>| Null>;

    oauth_accessor<T extends BusinessUser$oauth_accessorArgs= {}>(args?: Subset<T, BusinessUser$oauth_accessorArgs>): Prisma.PrismaPromise<Array<OauthAccessorModelGetPayload<T>>| Null>;

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
   * BusinessUser.certifications
   */
  export type BusinessUser$certificationsArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationModel
     */
    select?: BusinessCertificationModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationModelInclude | null
    where?: BusinessCertificationModelWhereInput
    orderBy?: Enumerable<BusinessCertificationModelOrderByWithRelationInput>
    cursor?: BusinessCertificationModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BusinessCertificationModelScalarFieldEnum>
  }


  /**
   * BusinessUser.expertises
   */
  export type BusinessUser$expertisesArgs = {
    /**
     * Select specific fields to fetch from the UserExpertiseModel
     */
    select?: UserExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExpertiseModelInclude | null
    where?: UserExpertiseModelWhereInput
    orderBy?: Enumerable<UserExpertiseModelOrderByWithRelationInput>
    cursor?: UserExpertiseModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserExpertiseModelScalarFieldEnum>
  }


  /**
   * BusinessUser.oauth_accessor
   */
  export type BusinessUser$oauth_accessorArgs = {
    /**
     * Select specific fields to fetch from the OauthAccessorModel
     */
    select?: OauthAccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OauthAccessorModelInclude | null
    where?: OauthAccessorModelWhereInput
    orderBy?: Enumerable<OauthAccessorModelOrderByWithRelationInput>
    cursor?: OauthAccessorModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OauthAccessorModelScalarFieldEnum>
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
   * Model REAgentModel
   */


  export type AggregateREAgentModel = {
    _count: REAgentModelCountAggregateOutputType | null
    _min: REAgentModelMinAggregateOutputType | null
    _max: REAgentModelMaxAggregateOutputType | null
  }

  export type REAgentModelMinAggregateOutputType = {
    id: string | null
    is_licensed: boolean | null
    re_num: string | null
    re_name: string | null
    re_phone: string | null
    re_licensed_agent_name: string | null
  }

  export type REAgentModelMaxAggregateOutputType = {
    id: string | null
    is_licensed: boolean | null
    re_num: string | null
    re_name: string | null
    re_phone: string | null
    re_licensed_agent_name: string | null
  }

  export type REAgentModelCountAggregateOutputType = {
    id: number
    is_licensed: number
    re_num: number
    re_name: number
    re_phone: number
    re_licensed_agent_name: number
    _all: number
  }


  export type REAgentModelMinAggregateInputType = {
    id?: true
    is_licensed?: true
    re_num?: true
    re_name?: true
    re_phone?: true
    re_licensed_agent_name?: true
  }

  export type REAgentModelMaxAggregateInputType = {
    id?: true
    is_licensed?: true
    re_num?: true
    re_name?: true
    re_phone?: true
    re_licensed_agent_name?: true
  }

  export type REAgentModelCountAggregateInputType = {
    id?: true
    is_licensed?: true
    re_num?: true
    re_name?: true
    re_phone?: true
    re_licensed_agent_name?: true
    _all?: true
  }

  export type REAgentModelAggregateArgs = {
    /**
     * Filter which REAgentModel to aggregate.
     */
    where?: REAgentModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REAgentModels to fetch.
     */
    orderBy?: Enumerable<REAgentModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: REAgentModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REAgentModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REAgentModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned REAgentModels
    **/
    _count?: true | REAgentModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: REAgentModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: REAgentModelMaxAggregateInputType
  }

  export type GetREAgentModelAggregateType<T extends REAgentModelAggregateArgs> = {
        [P in keyof T & keyof AggregateREAgentModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateREAgentModel[P]>
      : GetScalarType<T[P], AggregateREAgentModel[P]>
  }




  export type REAgentModelGroupByArgs = {
    where?: REAgentModelWhereInput
    orderBy?: Enumerable<REAgentModelOrderByWithAggregationInput>
    by: REAgentModelScalarFieldEnum[]
    having?: REAgentModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: REAgentModelCountAggregateInputType | true
    _min?: REAgentModelMinAggregateInputType
    _max?: REAgentModelMaxAggregateInputType
  }


  export type REAgentModelGroupByOutputType = {
    id: string
    is_licensed: boolean
    re_num: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    _count: REAgentModelCountAggregateOutputType | null
    _min: REAgentModelMinAggregateOutputType | null
    _max: REAgentModelMaxAggregateOutputType | null
  }

  type GetREAgentModelGroupByPayload<T extends REAgentModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<REAgentModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof REAgentModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], REAgentModelGroupByOutputType[P]>
            : GetScalarType<T[P], REAgentModelGroupByOutputType[P]>
        }
      >
    >


  export type REAgentModelSelect = {
    id?: boolean
    is_licensed?: boolean
    re_num?: boolean
    re_name?: boolean
    re_phone?: boolean
    re_licensed_agent_name?: boolean
    base?: boolean | BusinessUserArgs
  }


  export type REAgentModelInclude = {
    base?: boolean | BusinessUserArgs
  }

  export type REAgentModelGetPayload<S extends boolean | null | undefined | REAgentModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? REAgentModel :
    S extends undefined ? never :
    S extends { include: any } & (REAgentModelArgs | REAgentModelFindManyArgs)
    ? REAgentModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'base' ? BusinessUserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (REAgentModelArgs | REAgentModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'base' ? BusinessUserGetPayload<S['select'][P]> :  P extends keyof REAgentModel ? REAgentModel[P] : never
  } 
      : REAgentModel


  type REAgentModelCountArgs = 
    Omit<REAgentModelFindManyArgs, 'select' | 'include'> & {
      select?: REAgentModelCountAggregateInputType | true
    }

  export interface REAgentModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one REAgentModel that matches the filter.
     * @param {REAgentModelFindUniqueArgs} args - Arguments to find a REAgentModel
     * @example
     * // Get one REAgentModel
     * const rEAgentModel = await prisma.rEAgentModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends REAgentModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, REAgentModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'REAgentModel'> extends True ? Prisma__REAgentModelClient<REAgentModelGetPayload<T>> : Prisma__REAgentModelClient<REAgentModelGetPayload<T> | null, null>

    /**
     * Find one REAgentModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {REAgentModelFindUniqueOrThrowArgs} args - Arguments to find a REAgentModel
     * @example
     * // Get one REAgentModel
     * const rEAgentModel = await prisma.rEAgentModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends REAgentModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, REAgentModelFindUniqueOrThrowArgs>
    ): Prisma__REAgentModelClient<REAgentModelGetPayload<T>>

    /**
     * Find the first REAgentModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REAgentModelFindFirstArgs} args - Arguments to find a REAgentModel
     * @example
     * // Get one REAgentModel
     * const rEAgentModel = await prisma.rEAgentModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends REAgentModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, REAgentModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'REAgentModel'> extends True ? Prisma__REAgentModelClient<REAgentModelGetPayload<T>> : Prisma__REAgentModelClient<REAgentModelGetPayload<T> | null, null>

    /**
     * Find the first REAgentModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REAgentModelFindFirstOrThrowArgs} args - Arguments to find a REAgentModel
     * @example
     * // Get one REAgentModel
     * const rEAgentModel = await prisma.rEAgentModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends REAgentModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, REAgentModelFindFirstOrThrowArgs>
    ): Prisma__REAgentModelClient<REAgentModelGetPayload<T>>

    /**
     * Find zero or more REAgentModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REAgentModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all REAgentModels
     * const rEAgentModels = await prisma.rEAgentModel.findMany()
     * 
     * // Get first 10 REAgentModels
     * const rEAgentModels = await prisma.rEAgentModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rEAgentModelWithIdOnly = await prisma.rEAgentModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends REAgentModelFindManyArgs>(
      args?: SelectSubset<T, REAgentModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<REAgentModelGetPayload<T>>>

    /**
     * Create a REAgentModel.
     * @param {REAgentModelCreateArgs} args - Arguments to create a REAgentModel.
     * @example
     * // Create one REAgentModel
     * const REAgentModel = await prisma.rEAgentModel.create({
     *   data: {
     *     // ... data to create a REAgentModel
     *   }
     * })
     * 
    **/
    create<T extends REAgentModelCreateArgs>(
      args: SelectSubset<T, REAgentModelCreateArgs>
    ): Prisma__REAgentModelClient<REAgentModelGetPayload<T>>

    /**
     * Create many REAgentModels.
     *     @param {REAgentModelCreateManyArgs} args - Arguments to create many REAgentModels.
     *     @example
     *     // Create many REAgentModels
     *     const rEAgentModel = await prisma.rEAgentModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends REAgentModelCreateManyArgs>(
      args?: SelectSubset<T, REAgentModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a REAgentModel.
     * @param {REAgentModelDeleteArgs} args - Arguments to delete one REAgentModel.
     * @example
     * // Delete one REAgentModel
     * const REAgentModel = await prisma.rEAgentModel.delete({
     *   where: {
     *     // ... filter to delete one REAgentModel
     *   }
     * })
     * 
    **/
    delete<T extends REAgentModelDeleteArgs>(
      args: SelectSubset<T, REAgentModelDeleteArgs>
    ): Prisma__REAgentModelClient<REAgentModelGetPayload<T>>

    /**
     * Update one REAgentModel.
     * @param {REAgentModelUpdateArgs} args - Arguments to update one REAgentModel.
     * @example
     * // Update one REAgentModel
     * const rEAgentModel = await prisma.rEAgentModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends REAgentModelUpdateArgs>(
      args: SelectSubset<T, REAgentModelUpdateArgs>
    ): Prisma__REAgentModelClient<REAgentModelGetPayload<T>>

    /**
     * Delete zero or more REAgentModels.
     * @param {REAgentModelDeleteManyArgs} args - Arguments to filter REAgentModels to delete.
     * @example
     * // Delete a few REAgentModels
     * const { count } = await prisma.rEAgentModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends REAgentModelDeleteManyArgs>(
      args?: SelectSubset<T, REAgentModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more REAgentModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REAgentModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many REAgentModels
     * const rEAgentModel = await prisma.rEAgentModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends REAgentModelUpdateManyArgs>(
      args: SelectSubset<T, REAgentModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one REAgentModel.
     * @param {REAgentModelUpsertArgs} args - Arguments to update or create a REAgentModel.
     * @example
     * // Update or create a REAgentModel
     * const rEAgentModel = await prisma.rEAgentModel.upsert({
     *   create: {
     *     // ... data to create a REAgentModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the REAgentModel we want to update
     *   }
     * })
    **/
    upsert<T extends REAgentModelUpsertArgs>(
      args: SelectSubset<T, REAgentModelUpsertArgs>
    ): Prisma__REAgentModelClient<REAgentModelGetPayload<T>>

    /**
     * Count the number of REAgentModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REAgentModelCountArgs} args - Arguments to filter REAgentModels to count.
     * @example
     * // Count the number of REAgentModels
     * const count = await prisma.rEAgentModel.count({
     *   where: {
     *     // ... the filter for the REAgentModels we want to count
     *   }
     * })
    **/
    count<T extends REAgentModelCountArgs>(
      args?: Subset<T, REAgentModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], REAgentModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a REAgentModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REAgentModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends REAgentModelAggregateArgs>(args: Subset<T, REAgentModelAggregateArgs>): Prisma.PrismaPromise<GetREAgentModelAggregateType<T>>

    /**
     * Group by REAgentModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REAgentModelGroupByArgs} args - Group by arguments.
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
      T extends REAgentModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: REAgentModelGroupByArgs['orderBy'] }
        : { orderBy?: REAgentModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, REAgentModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetREAgentModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for REAgentModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__REAgentModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    base<T extends BusinessUserArgs= {}>(args?: Subset<T, BusinessUserArgs>): Prisma__BusinessUserClient<BusinessUserGetPayload<T> | Null>;

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
   * REAgentModel base type for findUnique actions
   */
  export type REAgentModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude | null
    /**
     * Filter, which REAgentModel to fetch.
     */
    where: REAgentModelWhereUniqueInput
  }

  /**
   * REAgentModel findUnique
   */
  export interface REAgentModelFindUniqueArgs extends REAgentModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * REAgentModel findUniqueOrThrow
   */
  export type REAgentModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude | null
    /**
     * Filter, which REAgentModel to fetch.
     */
    where: REAgentModelWhereUniqueInput
  }


  /**
   * REAgentModel base type for findFirst actions
   */
  export type REAgentModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude | null
    /**
     * Filter, which REAgentModel to fetch.
     */
    where?: REAgentModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REAgentModels to fetch.
     */
    orderBy?: Enumerable<REAgentModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REAgentModels.
     */
    cursor?: REAgentModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REAgentModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REAgentModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REAgentModels.
     */
    distinct?: Enumerable<REAgentModelScalarFieldEnum>
  }

  /**
   * REAgentModel findFirst
   */
  export interface REAgentModelFindFirstArgs extends REAgentModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * REAgentModel findFirstOrThrow
   */
  export type REAgentModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude | null
    /**
     * Filter, which REAgentModel to fetch.
     */
    where?: REAgentModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REAgentModels to fetch.
     */
    orderBy?: Enumerable<REAgentModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REAgentModels.
     */
    cursor?: REAgentModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REAgentModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REAgentModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REAgentModels.
     */
    distinct?: Enumerable<REAgentModelScalarFieldEnum>
  }


  /**
   * REAgentModel findMany
   */
  export type REAgentModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude | null
    /**
     * Filter, which REAgentModels to fetch.
     */
    where?: REAgentModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REAgentModels to fetch.
     */
    orderBy?: Enumerable<REAgentModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing REAgentModels.
     */
    cursor?: REAgentModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REAgentModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REAgentModels.
     */
    skip?: number
    distinct?: Enumerable<REAgentModelScalarFieldEnum>
  }


  /**
   * REAgentModel create
   */
  export type REAgentModelCreateArgs = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude | null
    /**
     * The data needed to create a REAgentModel.
     */
    data: XOR<REAgentModelCreateInput, REAgentModelUncheckedCreateInput>
  }


  /**
   * REAgentModel createMany
   */
  export type REAgentModelCreateManyArgs = {
    /**
     * The data used to create many REAgentModels.
     */
    data: Enumerable<REAgentModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * REAgentModel update
   */
  export type REAgentModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude | null
    /**
     * The data needed to update a REAgentModel.
     */
    data: XOR<REAgentModelUpdateInput, REAgentModelUncheckedUpdateInput>
    /**
     * Choose, which REAgentModel to update.
     */
    where: REAgentModelWhereUniqueInput
  }


  /**
   * REAgentModel updateMany
   */
  export type REAgentModelUpdateManyArgs = {
    /**
     * The data used to update REAgentModels.
     */
    data: XOR<REAgentModelUpdateManyMutationInput, REAgentModelUncheckedUpdateManyInput>
    /**
     * Filter which REAgentModels to update
     */
    where?: REAgentModelWhereInput
  }


  /**
   * REAgentModel upsert
   */
  export type REAgentModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude | null
    /**
     * The filter to search for the REAgentModel to update in case it exists.
     */
    where: REAgentModelWhereUniqueInput
    /**
     * In case the REAgentModel found by the `where` argument doesn't exist, create a new REAgentModel with this data.
     */
    create: XOR<REAgentModelCreateInput, REAgentModelUncheckedCreateInput>
    /**
     * In case the REAgentModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<REAgentModelUpdateInput, REAgentModelUncheckedUpdateInput>
  }


  /**
   * REAgentModel delete
   */
  export type REAgentModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude | null
    /**
     * Filter which REAgentModel to delete.
     */
    where: REAgentModelWhereUniqueInput
  }


  /**
   * REAgentModel deleteMany
   */
  export type REAgentModelDeleteManyArgs = {
    /**
     * Filter which REAgentModels to delete
     */
    where?: REAgentModelWhereInput
  }


  /**
   * REAgentModel without action
   */
  export type REAgentModelArgs = {
    /**
     * Select specific fields to fetch from the REAgentModel
     */
    select?: REAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REAgentModelInclude | null
  }



  /**
   * Model HSProviderModel
   */


  export type AggregateHSProviderModel = {
    _count: HSProviderModelCountAggregateOutputType | null
    _min: HSProviderModelMinAggregateOutputType | null
    _max: HSProviderModelMaxAggregateOutputType | null
  }

  export type HSProviderModelMinAggregateOutputType = {
    id: string | null
    business_registration_num: string | null
  }

  export type HSProviderModelMaxAggregateOutputType = {
    id: string | null
    business_registration_num: string | null
  }

  export type HSProviderModelCountAggregateOutputType = {
    id: number
    business_registration_num: number
    _all: number
  }


  export type HSProviderModelMinAggregateInputType = {
    id?: true
    business_registration_num?: true
  }

  export type HSProviderModelMaxAggregateInputType = {
    id?: true
    business_registration_num?: true
  }

  export type HSProviderModelCountAggregateInputType = {
    id?: true
    business_registration_num?: true
    _all?: true
  }

  export type HSProviderModelAggregateArgs = {
    /**
     * Filter which HSProviderModel to aggregate.
     */
    where?: HSProviderModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSProviderModels to fetch.
     */
    orderBy?: Enumerable<HSProviderModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HSProviderModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSProviderModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSProviderModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HSProviderModels
    **/
    _count?: true | HSProviderModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HSProviderModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HSProviderModelMaxAggregateInputType
  }

  export type GetHSProviderModelAggregateType<T extends HSProviderModelAggregateArgs> = {
        [P in keyof T & keyof AggregateHSProviderModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHSProviderModel[P]>
      : GetScalarType<T[P], AggregateHSProviderModel[P]>
  }




  export type HSProviderModelGroupByArgs = {
    where?: HSProviderModelWhereInput
    orderBy?: Enumerable<HSProviderModelOrderByWithAggregationInput>
    by: HSProviderModelScalarFieldEnum[]
    having?: HSProviderModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HSProviderModelCountAggregateInputType | true
    _min?: HSProviderModelMinAggregateInputType
    _max?: HSProviderModelMaxAggregateInputType
  }


  export type HSProviderModelGroupByOutputType = {
    id: string
    business_registration_num: string
    _count: HSProviderModelCountAggregateOutputType | null
    _min: HSProviderModelMinAggregateOutputType | null
    _max: HSProviderModelMaxAggregateOutputType | null
  }

  type GetHSProviderModelGroupByPayload<T extends HSProviderModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HSProviderModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HSProviderModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HSProviderModelGroupByOutputType[P]>
            : GetScalarType<T[P], HSProviderModelGroupByOutputType[P]>
        }
      >
    >


  export type HSProviderModelSelect = {
    id?: boolean
    business_registration_num?: boolean
    base?: boolean | BusinessUserArgs
    introduction_images?: boolean | HSProviderModel$introduction_imagesArgs
    _count?: boolean | HSProviderModelCountOutputTypeArgs
  }


  export type HSProviderModelInclude = {
    base?: boolean | BusinessUserArgs
    introduction_images?: boolean | HSProviderModel$introduction_imagesArgs
    _count?: boolean | HSProviderModelCountOutputTypeArgs
  }

  export type HSProviderModelGetPayload<S extends boolean | null | undefined | HSProviderModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HSProviderModel :
    S extends undefined ? never :
    S extends { include: any } & (HSProviderModelArgs | HSProviderModelFindManyArgs)
    ? HSProviderModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'base' ? BusinessUserGetPayload<S['include'][P]> :
        P extends 'introduction_images' ? Array < HSIntroductionImageModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? HSProviderModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HSProviderModelArgs | HSProviderModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'base' ? BusinessUserGetPayload<S['select'][P]> :
        P extends 'introduction_images' ? Array < HSIntroductionImageModelGetPayload<S['select'][P]>>  :
        P extends '_count' ? HSProviderModelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof HSProviderModel ? HSProviderModel[P] : never
  } 
      : HSProviderModel


  type HSProviderModelCountArgs = 
    Omit<HSProviderModelFindManyArgs, 'select' | 'include'> & {
      select?: HSProviderModelCountAggregateInputType | true
    }

  export interface HSProviderModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one HSProviderModel that matches the filter.
     * @param {HSProviderModelFindUniqueArgs} args - Arguments to find a HSProviderModel
     * @example
     * // Get one HSProviderModel
     * const hSProviderModel = await prisma.hSProviderModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HSProviderModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HSProviderModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HSProviderModel'> extends True ? Prisma__HSProviderModelClient<HSProviderModelGetPayload<T>> : Prisma__HSProviderModelClient<HSProviderModelGetPayload<T> | null, null>

    /**
     * Find one HSProviderModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HSProviderModelFindUniqueOrThrowArgs} args - Arguments to find a HSProviderModel
     * @example
     * // Get one HSProviderModel
     * const hSProviderModel = await prisma.hSProviderModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HSProviderModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HSProviderModelFindUniqueOrThrowArgs>
    ): Prisma__HSProviderModelClient<HSProviderModelGetPayload<T>>

    /**
     * Find the first HSProviderModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSProviderModelFindFirstArgs} args - Arguments to find a HSProviderModel
     * @example
     * // Get one HSProviderModel
     * const hSProviderModel = await prisma.hSProviderModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HSProviderModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HSProviderModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HSProviderModel'> extends True ? Prisma__HSProviderModelClient<HSProviderModelGetPayload<T>> : Prisma__HSProviderModelClient<HSProviderModelGetPayload<T> | null, null>

    /**
     * Find the first HSProviderModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSProviderModelFindFirstOrThrowArgs} args - Arguments to find a HSProviderModel
     * @example
     * // Get one HSProviderModel
     * const hSProviderModel = await prisma.hSProviderModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HSProviderModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HSProviderModelFindFirstOrThrowArgs>
    ): Prisma__HSProviderModelClient<HSProviderModelGetPayload<T>>

    /**
     * Find zero or more HSProviderModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSProviderModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HSProviderModels
     * const hSProviderModels = await prisma.hSProviderModel.findMany()
     * 
     * // Get first 10 HSProviderModels
     * const hSProviderModels = await prisma.hSProviderModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hSProviderModelWithIdOnly = await prisma.hSProviderModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HSProviderModelFindManyArgs>(
      args?: SelectSubset<T, HSProviderModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<HSProviderModelGetPayload<T>>>

    /**
     * Create a HSProviderModel.
     * @param {HSProviderModelCreateArgs} args - Arguments to create a HSProviderModel.
     * @example
     * // Create one HSProviderModel
     * const HSProviderModel = await prisma.hSProviderModel.create({
     *   data: {
     *     // ... data to create a HSProviderModel
     *   }
     * })
     * 
    **/
    create<T extends HSProviderModelCreateArgs>(
      args: SelectSubset<T, HSProviderModelCreateArgs>
    ): Prisma__HSProviderModelClient<HSProviderModelGetPayload<T>>

    /**
     * Create many HSProviderModels.
     *     @param {HSProviderModelCreateManyArgs} args - Arguments to create many HSProviderModels.
     *     @example
     *     // Create many HSProviderModels
     *     const hSProviderModel = await prisma.hSProviderModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HSProviderModelCreateManyArgs>(
      args?: SelectSubset<T, HSProviderModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HSProviderModel.
     * @param {HSProviderModelDeleteArgs} args - Arguments to delete one HSProviderModel.
     * @example
     * // Delete one HSProviderModel
     * const HSProviderModel = await prisma.hSProviderModel.delete({
     *   where: {
     *     // ... filter to delete one HSProviderModel
     *   }
     * })
     * 
    **/
    delete<T extends HSProviderModelDeleteArgs>(
      args: SelectSubset<T, HSProviderModelDeleteArgs>
    ): Prisma__HSProviderModelClient<HSProviderModelGetPayload<T>>

    /**
     * Update one HSProviderModel.
     * @param {HSProviderModelUpdateArgs} args - Arguments to update one HSProviderModel.
     * @example
     * // Update one HSProviderModel
     * const hSProviderModel = await prisma.hSProviderModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HSProviderModelUpdateArgs>(
      args: SelectSubset<T, HSProviderModelUpdateArgs>
    ): Prisma__HSProviderModelClient<HSProviderModelGetPayload<T>>

    /**
     * Delete zero or more HSProviderModels.
     * @param {HSProviderModelDeleteManyArgs} args - Arguments to filter HSProviderModels to delete.
     * @example
     * // Delete a few HSProviderModels
     * const { count } = await prisma.hSProviderModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HSProviderModelDeleteManyArgs>(
      args?: SelectSubset<T, HSProviderModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HSProviderModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSProviderModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HSProviderModels
     * const hSProviderModel = await prisma.hSProviderModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HSProviderModelUpdateManyArgs>(
      args: SelectSubset<T, HSProviderModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HSProviderModel.
     * @param {HSProviderModelUpsertArgs} args - Arguments to update or create a HSProviderModel.
     * @example
     * // Update or create a HSProviderModel
     * const hSProviderModel = await prisma.hSProviderModel.upsert({
     *   create: {
     *     // ... data to create a HSProviderModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HSProviderModel we want to update
     *   }
     * })
    **/
    upsert<T extends HSProviderModelUpsertArgs>(
      args: SelectSubset<T, HSProviderModelUpsertArgs>
    ): Prisma__HSProviderModelClient<HSProviderModelGetPayload<T>>

    /**
     * Count the number of HSProviderModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSProviderModelCountArgs} args - Arguments to filter HSProviderModels to count.
     * @example
     * // Count the number of HSProviderModels
     * const count = await prisma.hSProviderModel.count({
     *   where: {
     *     // ... the filter for the HSProviderModels we want to count
     *   }
     * })
    **/
    count<T extends HSProviderModelCountArgs>(
      args?: Subset<T, HSProviderModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HSProviderModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HSProviderModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSProviderModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HSProviderModelAggregateArgs>(args: Subset<T, HSProviderModelAggregateArgs>): Prisma.PrismaPromise<GetHSProviderModelAggregateType<T>>

    /**
     * Group by HSProviderModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSProviderModelGroupByArgs} args - Group by arguments.
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
      T extends HSProviderModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HSProviderModelGroupByArgs['orderBy'] }
        : { orderBy?: HSProviderModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HSProviderModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHSProviderModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HSProviderModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HSProviderModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    base<T extends BusinessUserArgs= {}>(args?: Subset<T, BusinessUserArgs>): Prisma__BusinessUserClient<BusinessUserGetPayload<T> | Null>;

    introduction_images<T extends HSProviderModel$introduction_imagesArgs= {}>(args?: Subset<T, HSProviderModel$introduction_imagesArgs>): Prisma.PrismaPromise<Array<HSIntroductionImageModelGetPayload<T>>| Null>;

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
   * HSProviderModel base type for findUnique actions
   */
  export type HSProviderModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude | null
    /**
     * Filter, which HSProviderModel to fetch.
     */
    where: HSProviderModelWhereUniqueInput
  }

  /**
   * HSProviderModel findUnique
   */
  export interface HSProviderModelFindUniqueArgs extends HSProviderModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HSProviderModel findUniqueOrThrow
   */
  export type HSProviderModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude | null
    /**
     * Filter, which HSProviderModel to fetch.
     */
    where: HSProviderModelWhereUniqueInput
  }


  /**
   * HSProviderModel base type for findFirst actions
   */
  export type HSProviderModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude | null
    /**
     * Filter, which HSProviderModel to fetch.
     */
    where?: HSProviderModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSProviderModels to fetch.
     */
    orderBy?: Enumerable<HSProviderModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSProviderModels.
     */
    cursor?: HSProviderModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSProviderModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSProviderModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSProviderModels.
     */
    distinct?: Enumerable<HSProviderModelScalarFieldEnum>
  }

  /**
   * HSProviderModel findFirst
   */
  export interface HSProviderModelFindFirstArgs extends HSProviderModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HSProviderModel findFirstOrThrow
   */
  export type HSProviderModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude | null
    /**
     * Filter, which HSProviderModel to fetch.
     */
    where?: HSProviderModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSProviderModels to fetch.
     */
    orderBy?: Enumerable<HSProviderModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSProviderModels.
     */
    cursor?: HSProviderModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSProviderModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSProviderModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSProviderModels.
     */
    distinct?: Enumerable<HSProviderModelScalarFieldEnum>
  }


  /**
   * HSProviderModel findMany
   */
  export type HSProviderModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude | null
    /**
     * Filter, which HSProviderModels to fetch.
     */
    where?: HSProviderModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSProviderModels to fetch.
     */
    orderBy?: Enumerable<HSProviderModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HSProviderModels.
     */
    cursor?: HSProviderModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSProviderModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSProviderModels.
     */
    skip?: number
    distinct?: Enumerable<HSProviderModelScalarFieldEnum>
  }


  /**
   * HSProviderModel create
   */
  export type HSProviderModelCreateArgs = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude | null
    /**
     * The data needed to create a HSProviderModel.
     */
    data: XOR<HSProviderModelCreateInput, HSProviderModelUncheckedCreateInput>
  }


  /**
   * HSProviderModel createMany
   */
  export type HSProviderModelCreateManyArgs = {
    /**
     * The data used to create many HSProviderModels.
     */
    data: Enumerable<HSProviderModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HSProviderModel update
   */
  export type HSProviderModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude | null
    /**
     * The data needed to update a HSProviderModel.
     */
    data: XOR<HSProviderModelUpdateInput, HSProviderModelUncheckedUpdateInput>
    /**
     * Choose, which HSProviderModel to update.
     */
    where: HSProviderModelWhereUniqueInput
  }


  /**
   * HSProviderModel updateMany
   */
  export type HSProviderModelUpdateManyArgs = {
    /**
     * The data used to update HSProviderModels.
     */
    data: XOR<HSProviderModelUpdateManyMutationInput, HSProviderModelUncheckedUpdateManyInput>
    /**
     * Filter which HSProviderModels to update
     */
    where?: HSProviderModelWhereInput
  }


  /**
   * HSProviderModel upsert
   */
  export type HSProviderModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude | null
    /**
     * The filter to search for the HSProviderModel to update in case it exists.
     */
    where: HSProviderModelWhereUniqueInput
    /**
     * In case the HSProviderModel found by the `where` argument doesn't exist, create a new HSProviderModel with this data.
     */
    create: XOR<HSProviderModelCreateInput, HSProviderModelUncheckedCreateInput>
    /**
     * In case the HSProviderModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HSProviderModelUpdateInput, HSProviderModelUncheckedUpdateInput>
  }


  /**
   * HSProviderModel delete
   */
  export type HSProviderModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude | null
    /**
     * Filter which HSProviderModel to delete.
     */
    where: HSProviderModelWhereUniqueInput
  }


  /**
   * HSProviderModel deleteMany
   */
  export type HSProviderModelDeleteManyArgs = {
    /**
     * Filter which HSProviderModels to delete
     */
    where?: HSProviderModelWhereInput
  }


  /**
   * HSProviderModel.introduction_images
   */
  export type HSProviderModel$introduction_imagesArgs = {
    /**
     * Select specific fields to fetch from the HSIntroductionImageModel
     */
    select?: HSIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSIntroductionImageModelInclude | null
    where?: HSIntroductionImageModelWhereInput
    orderBy?: Enumerable<HSIntroductionImageModelOrderByWithRelationInput>
    cursor?: HSIntroductionImageModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HSIntroductionImageModelScalarFieldEnum>
  }


  /**
   * HSProviderModel without action
   */
  export type HSProviderModelArgs = {
    /**
     * Select specific fields to fetch from the HSProviderModel
     */
    select?: HSProviderModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSProviderModelInclude | null
  }



  /**
   * Model BusinessCertificationModel
   */


  export type AggregateBusinessCertificationModel = {
    _count: BusinessCertificationModelCountAggregateOutputType | null
    _min: BusinessCertificationModelMinAggregateOutputType | null
    _max: BusinessCertificationModelMaxAggregateOutputType | null
  }

  export type BusinessCertificationModelMinAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    business_user_id: string | null
    image_url: string | null
  }

  export type BusinessCertificationModelMaxAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    business_user_id: string | null
    image_url: string | null
  }

  export type BusinessCertificationModelCountAggregateOutputType = {
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    id: number
    business_user_id: number
    image_url: number
    _all: number
  }


  export type BusinessCertificationModelMinAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    business_user_id?: true
    image_url?: true
  }

  export type BusinessCertificationModelMaxAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    business_user_id?: true
    image_url?: true
  }

  export type BusinessCertificationModelCountAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    business_user_id?: true
    image_url?: true
    _all?: true
  }

  export type BusinessCertificationModelAggregateArgs = {
    /**
     * Filter which BusinessCertificationModel to aggregate.
     */
    where?: BusinessCertificationModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCertificationModels to fetch.
     */
    orderBy?: Enumerable<BusinessCertificationModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessCertificationModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCertificationModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCertificationModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessCertificationModels
    **/
    _count?: true | BusinessCertificationModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessCertificationModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessCertificationModelMaxAggregateInputType
  }

  export type GetBusinessCertificationModelAggregateType<T extends BusinessCertificationModelAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessCertificationModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessCertificationModel[P]>
      : GetScalarType<T[P], AggregateBusinessCertificationModel[P]>
  }




  export type BusinessCertificationModelGroupByArgs = {
    where?: BusinessCertificationModelWhereInput
    orderBy?: Enumerable<BusinessCertificationModelOrderByWithAggregationInput>
    by: BusinessCertificationModelScalarFieldEnum[]
    having?: BusinessCertificationModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCertificationModelCountAggregateInputType | true
    _min?: BusinessCertificationModelMinAggregateInputType
    _max?: BusinessCertificationModelMaxAggregateInputType
  }


  export type BusinessCertificationModelGroupByOutputType = {
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    id: string
    business_user_id: string
    image_url: string
    _count: BusinessCertificationModelCountAggregateOutputType | null
    _min: BusinessCertificationModelMinAggregateOutputType | null
    _max: BusinessCertificationModelMaxAggregateOutputType | null
  }

  type GetBusinessCertificationModelGroupByPayload<T extends BusinessCertificationModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BusinessCertificationModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessCertificationModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessCertificationModelGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessCertificationModelGroupByOutputType[P]>
        }
      >
    >


  export type BusinessCertificationModelSelect = {
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    id?: boolean
    business_user_id?: boolean
    image_url?: boolean
    business_user?: boolean | BusinessUserArgs
  }


  export type BusinessCertificationModelInclude = {
    business_user?: boolean | BusinessUserArgs
  }

  export type BusinessCertificationModelGetPayload<S extends boolean | null | undefined | BusinessCertificationModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BusinessCertificationModel :
    S extends undefined ? never :
    S extends { include: any } & (BusinessCertificationModelArgs | BusinessCertificationModelFindManyArgs)
    ? BusinessCertificationModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'business_user' ? BusinessUserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BusinessCertificationModelArgs | BusinessCertificationModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'business_user' ? BusinessUserGetPayload<S['select'][P]> :  P extends keyof BusinessCertificationModel ? BusinessCertificationModel[P] : never
  } 
      : BusinessCertificationModel


  type BusinessCertificationModelCountArgs = 
    Omit<BusinessCertificationModelFindManyArgs, 'select' | 'include'> & {
      select?: BusinessCertificationModelCountAggregateInputType | true
    }

  export interface BusinessCertificationModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BusinessCertificationModel that matches the filter.
     * @param {BusinessCertificationModelFindUniqueArgs} args - Arguments to find a BusinessCertificationModel
     * @example
     * // Get one BusinessCertificationModel
     * const businessCertificationModel = await prisma.businessCertificationModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BusinessCertificationModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BusinessCertificationModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BusinessCertificationModel'> extends True ? Prisma__BusinessCertificationModelClient<BusinessCertificationModelGetPayload<T>> : Prisma__BusinessCertificationModelClient<BusinessCertificationModelGetPayload<T> | null, null>

    /**
     * Find one BusinessCertificationModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BusinessCertificationModelFindUniqueOrThrowArgs} args - Arguments to find a BusinessCertificationModel
     * @example
     * // Get one BusinessCertificationModel
     * const businessCertificationModel = await prisma.businessCertificationModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BusinessCertificationModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BusinessCertificationModelFindUniqueOrThrowArgs>
    ): Prisma__BusinessCertificationModelClient<BusinessCertificationModelGetPayload<T>>

    /**
     * Find the first BusinessCertificationModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCertificationModelFindFirstArgs} args - Arguments to find a BusinessCertificationModel
     * @example
     * // Get one BusinessCertificationModel
     * const businessCertificationModel = await prisma.businessCertificationModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BusinessCertificationModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BusinessCertificationModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BusinessCertificationModel'> extends True ? Prisma__BusinessCertificationModelClient<BusinessCertificationModelGetPayload<T>> : Prisma__BusinessCertificationModelClient<BusinessCertificationModelGetPayload<T> | null, null>

    /**
     * Find the first BusinessCertificationModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCertificationModelFindFirstOrThrowArgs} args - Arguments to find a BusinessCertificationModel
     * @example
     * // Get one BusinessCertificationModel
     * const businessCertificationModel = await prisma.businessCertificationModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BusinessCertificationModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BusinessCertificationModelFindFirstOrThrowArgs>
    ): Prisma__BusinessCertificationModelClient<BusinessCertificationModelGetPayload<T>>

    /**
     * Find zero or more BusinessCertificationModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCertificationModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessCertificationModels
     * const businessCertificationModels = await prisma.businessCertificationModel.findMany()
     * 
     * // Get first 10 BusinessCertificationModels
     * const businessCertificationModels = await prisma.businessCertificationModel.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const businessCertificationModelWithCreated_atOnly = await prisma.businessCertificationModel.findMany({ select: { created_at: true } })
     * 
    **/
    findMany<T extends BusinessCertificationModelFindManyArgs>(
      args?: SelectSubset<T, BusinessCertificationModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<BusinessCertificationModelGetPayload<T>>>

    /**
     * Create a BusinessCertificationModel.
     * @param {BusinessCertificationModelCreateArgs} args - Arguments to create a BusinessCertificationModel.
     * @example
     * // Create one BusinessCertificationModel
     * const BusinessCertificationModel = await prisma.businessCertificationModel.create({
     *   data: {
     *     // ... data to create a BusinessCertificationModel
     *   }
     * })
     * 
    **/
    create<T extends BusinessCertificationModelCreateArgs>(
      args: SelectSubset<T, BusinessCertificationModelCreateArgs>
    ): Prisma__BusinessCertificationModelClient<BusinessCertificationModelGetPayload<T>>

    /**
     * Create many BusinessCertificationModels.
     *     @param {BusinessCertificationModelCreateManyArgs} args - Arguments to create many BusinessCertificationModels.
     *     @example
     *     // Create many BusinessCertificationModels
     *     const businessCertificationModel = await prisma.businessCertificationModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BusinessCertificationModelCreateManyArgs>(
      args?: SelectSubset<T, BusinessCertificationModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BusinessCertificationModel.
     * @param {BusinessCertificationModelDeleteArgs} args - Arguments to delete one BusinessCertificationModel.
     * @example
     * // Delete one BusinessCertificationModel
     * const BusinessCertificationModel = await prisma.businessCertificationModel.delete({
     *   where: {
     *     // ... filter to delete one BusinessCertificationModel
     *   }
     * })
     * 
    **/
    delete<T extends BusinessCertificationModelDeleteArgs>(
      args: SelectSubset<T, BusinessCertificationModelDeleteArgs>
    ): Prisma__BusinessCertificationModelClient<BusinessCertificationModelGetPayload<T>>

    /**
     * Update one BusinessCertificationModel.
     * @param {BusinessCertificationModelUpdateArgs} args - Arguments to update one BusinessCertificationModel.
     * @example
     * // Update one BusinessCertificationModel
     * const businessCertificationModel = await prisma.businessCertificationModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BusinessCertificationModelUpdateArgs>(
      args: SelectSubset<T, BusinessCertificationModelUpdateArgs>
    ): Prisma__BusinessCertificationModelClient<BusinessCertificationModelGetPayload<T>>

    /**
     * Delete zero or more BusinessCertificationModels.
     * @param {BusinessCertificationModelDeleteManyArgs} args - Arguments to filter BusinessCertificationModels to delete.
     * @example
     * // Delete a few BusinessCertificationModels
     * const { count } = await prisma.businessCertificationModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BusinessCertificationModelDeleteManyArgs>(
      args?: SelectSubset<T, BusinessCertificationModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessCertificationModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCertificationModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessCertificationModels
     * const businessCertificationModel = await prisma.businessCertificationModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BusinessCertificationModelUpdateManyArgs>(
      args: SelectSubset<T, BusinessCertificationModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessCertificationModel.
     * @param {BusinessCertificationModelUpsertArgs} args - Arguments to update or create a BusinessCertificationModel.
     * @example
     * // Update or create a BusinessCertificationModel
     * const businessCertificationModel = await prisma.businessCertificationModel.upsert({
     *   create: {
     *     // ... data to create a BusinessCertificationModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessCertificationModel we want to update
     *   }
     * })
    **/
    upsert<T extends BusinessCertificationModelUpsertArgs>(
      args: SelectSubset<T, BusinessCertificationModelUpsertArgs>
    ): Prisma__BusinessCertificationModelClient<BusinessCertificationModelGetPayload<T>>

    /**
     * Count the number of BusinessCertificationModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCertificationModelCountArgs} args - Arguments to filter BusinessCertificationModels to count.
     * @example
     * // Count the number of BusinessCertificationModels
     * const count = await prisma.businessCertificationModel.count({
     *   where: {
     *     // ... the filter for the BusinessCertificationModels we want to count
     *   }
     * })
    **/
    count<T extends BusinessCertificationModelCountArgs>(
      args?: Subset<T, BusinessCertificationModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCertificationModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessCertificationModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCertificationModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessCertificationModelAggregateArgs>(args: Subset<T, BusinessCertificationModelAggregateArgs>): Prisma.PrismaPromise<GetBusinessCertificationModelAggregateType<T>>

    /**
     * Group by BusinessCertificationModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCertificationModelGroupByArgs} args - Group by arguments.
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
      T extends BusinessCertificationModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessCertificationModelGroupByArgs['orderBy'] }
        : { orderBy?: BusinessCertificationModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusinessCertificationModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessCertificationModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessCertificationModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BusinessCertificationModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * BusinessCertificationModel base type for findUnique actions
   */
  export type BusinessCertificationModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BusinessCertificationModel
     */
    select?: BusinessCertificationModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationModelInclude | null
    /**
     * Filter, which BusinessCertificationModel to fetch.
     */
    where: BusinessCertificationModelWhereUniqueInput
  }

  /**
   * BusinessCertificationModel findUnique
   */
  export interface BusinessCertificationModelFindUniqueArgs extends BusinessCertificationModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BusinessCertificationModel findUniqueOrThrow
   */
  export type BusinessCertificationModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationModel
     */
    select?: BusinessCertificationModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationModelInclude | null
    /**
     * Filter, which BusinessCertificationModel to fetch.
     */
    where: BusinessCertificationModelWhereUniqueInput
  }


  /**
   * BusinessCertificationModel base type for findFirst actions
   */
  export type BusinessCertificationModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BusinessCertificationModel
     */
    select?: BusinessCertificationModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationModelInclude | null
    /**
     * Filter, which BusinessCertificationModel to fetch.
     */
    where?: BusinessCertificationModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCertificationModels to fetch.
     */
    orderBy?: Enumerable<BusinessCertificationModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessCertificationModels.
     */
    cursor?: BusinessCertificationModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCertificationModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCertificationModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessCertificationModels.
     */
    distinct?: Enumerable<BusinessCertificationModelScalarFieldEnum>
  }

  /**
   * BusinessCertificationModel findFirst
   */
  export interface BusinessCertificationModelFindFirstArgs extends BusinessCertificationModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BusinessCertificationModel findFirstOrThrow
   */
  export type BusinessCertificationModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationModel
     */
    select?: BusinessCertificationModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationModelInclude | null
    /**
     * Filter, which BusinessCertificationModel to fetch.
     */
    where?: BusinessCertificationModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCertificationModels to fetch.
     */
    orderBy?: Enumerable<BusinessCertificationModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessCertificationModels.
     */
    cursor?: BusinessCertificationModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCertificationModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCertificationModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessCertificationModels.
     */
    distinct?: Enumerable<BusinessCertificationModelScalarFieldEnum>
  }


  /**
   * BusinessCertificationModel findMany
   */
  export type BusinessCertificationModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationModel
     */
    select?: BusinessCertificationModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationModelInclude | null
    /**
     * Filter, which BusinessCertificationModels to fetch.
     */
    where?: BusinessCertificationModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCertificationModels to fetch.
     */
    orderBy?: Enumerable<BusinessCertificationModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessCertificationModels.
     */
    cursor?: BusinessCertificationModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCertificationModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCertificationModels.
     */
    skip?: number
    distinct?: Enumerable<BusinessCertificationModelScalarFieldEnum>
  }


  /**
   * BusinessCertificationModel create
   */
  export type BusinessCertificationModelCreateArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationModel
     */
    select?: BusinessCertificationModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationModelInclude | null
    /**
     * The data needed to create a BusinessCertificationModel.
     */
    data: XOR<BusinessCertificationModelCreateInput, BusinessCertificationModelUncheckedCreateInput>
  }


  /**
   * BusinessCertificationModel createMany
   */
  export type BusinessCertificationModelCreateManyArgs = {
    /**
     * The data used to create many BusinessCertificationModels.
     */
    data: Enumerable<BusinessCertificationModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BusinessCertificationModel update
   */
  export type BusinessCertificationModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationModel
     */
    select?: BusinessCertificationModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationModelInclude | null
    /**
     * The data needed to update a BusinessCertificationModel.
     */
    data: XOR<BusinessCertificationModelUpdateInput, BusinessCertificationModelUncheckedUpdateInput>
    /**
     * Choose, which BusinessCertificationModel to update.
     */
    where: BusinessCertificationModelWhereUniqueInput
  }


  /**
   * BusinessCertificationModel updateMany
   */
  export type BusinessCertificationModelUpdateManyArgs = {
    /**
     * The data used to update BusinessCertificationModels.
     */
    data: XOR<BusinessCertificationModelUpdateManyMutationInput, BusinessCertificationModelUncheckedUpdateManyInput>
    /**
     * Filter which BusinessCertificationModels to update
     */
    where?: BusinessCertificationModelWhereInput
  }


  /**
   * BusinessCertificationModel upsert
   */
  export type BusinessCertificationModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationModel
     */
    select?: BusinessCertificationModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationModelInclude | null
    /**
     * The filter to search for the BusinessCertificationModel to update in case it exists.
     */
    where: BusinessCertificationModelWhereUniqueInput
    /**
     * In case the BusinessCertificationModel found by the `where` argument doesn't exist, create a new BusinessCertificationModel with this data.
     */
    create: XOR<BusinessCertificationModelCreateInput, BusinessCertificationModelUncheckedCreateInput>
    /**
     * In case the BusinessCertificationModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessCertificationModelUpdateInput, BusinessCertificationModelUncheckedUpdateInput>
  }


  /**
   * BusinessCertificationModel delete
   */
  export type BusinessCertificationModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationModel
     */
    select?: BusinessCertificationModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationModelInclude | null
    /**
     * Filter which BusinessCertificationModel to delete.
     */
    where: BusinessCertificationModelWhereUniqueInput
  }


  /**
   * BusinessCertificationModel deleteMany
   */
  export type BusinessCertificationModelDeleteManyArgs = {
    /**
     * Filter which BusinessCertificationModels to delete
     */
    where?: BusinessCertificationModelWhereInput
  }


  /**
   * BusinessCertificationModel without action
   */
  export type BusinessCertificationModelArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationModel
     */
    select?: BusinessCertificationModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationModelInclude | null
  }



  /**
   * Model HSIntroductionImageModel
   */


  export type AggregateHSIntroductionImageModel = {
    _count: HSIntroductionImageModelCountAggregateOutputType | null
    _min: HSIntroductionImageModelMinAggregateOutputType | null
    _max: HSIntroductionImageModelMaxAggregateOutputType | null
  }

  export type HSIntroductionImageModelMinAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    hs_provider_id: string | null
    image_url: string | null
  }

  export type HSIntroductionImageModelMaxAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    hs_provider_id: string | null
    image_url: string | null
  }

  export type HSIntroductionImageModelCountAggregateOutputType = {
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    id: number
    hs_provider_id: number
    image_url: number
    _all: number
  }


  export type HSIntroductionImageModelMinAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    hs_provider_id?: true
    image_url?: true
  }

  export type HSIntroductionImageModelMaxAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    hs_provider_id?: true
    image_url?: true
  }

  export type HSIntroductionImageModelCountAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    hs_provider_id?: true
    image_url?: true
    _all?: true
  }

  export type HSIntroductionImageModelAggregateArgs = {
    /**
     * Filter which HSIntroductionImageModel to aggregate.
     */
    where?: HSIntroductionImageModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSIntroductionImageModels to fetch.
     */
    orderBy?: Enumerable<HSIntroductionImageModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HSIntroductionImageModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSIntroductionImageModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSIntroductionImageModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HSIntroductionImageModels
    **/
    _count?: true | HSIntroductionImageModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HSIntroductionImageModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HSIntroductionImageModelMaxAggregateInputType
  }

  export type GetHSIntroductionImageModelAggregateType<T extends HSIntroductionImageModelAggregateArgs> = {
        [P in keyof T & keyof AggregateHSIntroductionImageModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHSIntroductionImageModel[P]>
      : GetScalarType<T[P], AggregateHSIntroductionImageModel[P]>
  }




  export type HSIntroductionImageModelGroupByArgs = {
    where?: HSIntroductionImageModelWhereInput
    orderBy?: Enumerable<HSIntroductionImageModelOrderByWithAggregationInput>
    by: HSIntroductionImageModelScalarFieldEnum[]
    having?: HSIntroductionImageModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HSIntroductionImageModelCountAggregateInputType | true
    _min?: HSIntroductionImageModelMinAggregateInputType
    _max?: HSIntroductionImageModelMaxAggregateInputType
  }


  export type HSIntroductionImageModelGroupByOutputType = {
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    id: string
    hs_provider_id: string
    image_url: string
    _count: HSIntroductionImageModelCountAggregateOutputType | null
    _min: HSIntroductionImageModelMinAggregateOutputType | null
    _max: HSIntroductionImageModelMaxAggregateOutputType | null
  }

  type GetHSIntroductionImageModelGroupByPayload<T extends HSIntroductionImageModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HSIntroductionImageModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HSIntroductionImageModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HSIntroductionImageModelGroupByOutputType[P]>
            : GetScalarType<T[P], HSIntroductionImageModelGroupByOutputType[P]>
        }
      >
    >


  export type HSIntroductionImageModelSelect = {
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    id?: boolean
    hs_provider_id?: boolean
    image_url?: boolean
    hs_provider?: boolean | HSProviderModelArgs
  }


  export type HSIntroductionImageModelInclude = {
    hs_provider?: boolean | HSProviderModelArgs
  }

  export type HSIntroductionImageModelGetPayload<S extends boolean | null | undefined | HSIntroductionImageModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HSIntroductionImageModel :
    S extends undefined ? never :
    S extends { include: any } & (HSIntroductionImageModelArgs | HSIntroductionImageModelFindManyArgs)
    ? HSIntroductionImageModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'hs_provider' ? HSProviderModelGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HSIntroductionImageModelArgs | HSIntroductionImageModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'hs_provider' ? HSProviderModelGetPayload<S['select'][P]> :  P extends keyof HSIntroductionImageModel ? HSIntroductionImageModel[P] : never
  } 
      : HSIntroductionImageModel


  type HSIntroductionImageModelCountArgs = 
    Omit<HSIntroductionImageModelFindManyArgs, 'select' | 'include'> & {
      select?: HSIntroductionImageModelCountAggregateInputType | true
    }

  export interface HSIntroductionImageModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one HSIntroductionImageModel that matches the filter.
     * @param {HSIntroductionImageModelFindUniqueArgs} args - Arguments to find a HSIntroductionImageModel
     * @example
     * // Get one HSIntroductionImageModel
     * const hSIntroductionImageModel = await prisma.hSIntroductionImageModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HSIntroductionImageModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HSIntroductionImageModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HSIntroductionImageModel'> extends True ? Prisma__HSIntroductionImageModelClient<HSIntroductionImageModelGetPayload<T>> : Prisma__HSIntroductionImageModelClient<HSIntroductionImageModelGetPayload<T> | null, null>

    /**
     * Find one HSIntroductionImageModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HSIntroductionImageModelFindUniqueOrThrowArgs} args - Arguments to find a HSIntroductionImageModel
     * @example
     * // Get one HSIntroductionImageModel
     * const hSIntroductionImageModel = await prisma.hSIntroductionImageModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HSIntroductionImageModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HSIntroductionImageModelFindUniqueOrThrowArgs>
    ): Prisma__HSIntroductionImageModelClient<HSIntroductionImageModelGetPayload<T>>

    /**
     * Find the first HSIntroductionImageModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSIntroductionImageModelFindFirstArgs} args - Arguments to find a HSIntroductionImageModel
     * @example
     * // Get one HSIntroductionImageModel
     * const hSIntroductionImageModel = await prisma.hSIntroductionImageModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HSIntroductionImageModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HSIntroductionImageModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HSIntroductionImageModel'> extends True ? Prisma__HSIntroductionImageModelClient<HSIntroductionImageModelGetPayload<T>> : Prisma__HSIntroductionImageModelClient<HSIntroductionImageModelGetPayload<T> | null, null>

    /**
     * Find the first HSIntroductionImageModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSIntroductionImageModelFindFirstOrThrowArgs} args - Arguments to find a HSIntroductionImageModel
     * @example
     * // Get one HSIntroductionImageModel
     * const hSIntroductionImageModel = await prisma.hSIntroductionImageModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HSIntroductionImageModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HSIntroductionImageModelFindFirstOrThrowArgs>
    ): Prisma__HSIntroductionImageModelClient<HSIntroductionImageModelGetPayload<T>>

    /**
     * Find zero or more HSIntroductionImageModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSIntroductionImageModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HSIntroductionImageModels
     * const hSIntroductionImageModels = await prisma.hSIntroductionImageModel.findMany()
     * 
     * // Get first 10 HSIntroductionImageModels
     * const hSIntroductionImageModels = await prisma.hSIntroductionImageModel.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const hSIntroductionImageModelWithCreated_atOnly = await prisma.hSIntroductionImageModel.findMany({ select: { created_at: true } })
     * 
    **/
    findMany<T extends HSIntroductionImageModelFindManyArgs>(
      args?: SelectSubset<T, HSIntroductionImageModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<HSIntroductionImageModelGetPayload<T>>>

    /**
     * Create a HSIntroductionImageModel.
     * @param {HSIntroductionImageModelCreateArgs} args - Arguments to create a HSIntroductionImageModel.
     * @example
     * // Create one HSIntroductionImageModel
     * const HSIntroductionImageModel = await prisma.hSIntroductionImageModel.create({
     *   data: {
     *     // ... data to create a HSIntroductionImageModel
     *   }
     * })
     * 
    **/
    create<T extends HSIntroductionImageModelCreateArgs>(
      args: SelectSubset<T, HSIntroductionImageModelCreateArgs>
    ): Prisma__HSIntroductionImageModelClient<HSIntroductionImageModelGetPayload<T>>

    /**
     * Create many HSIntroductionImageModels.
     *     @param {HSIntroductionImageModelCreateManyArgs} args - Arguments to create many HSIntroductionImageModels.
     *     @example
     *     // Create many HSIntroductionImageModels
     *     const hSIntroductionImageModel = await prisma.hSIntroductionImageModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HSIntroductionImageModelCreateManyArgs>(
      args?: SelectSubset<T, HSIntroductionImageModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HSIntroductionImageModel.
     * @param {HSIntroductionImageModelDeleteArgs} args - Arguments to delete one HSIntroductionImageModel.
     * @example
     * // Delete one HSIntroductionImageModel
     * const HSIntroductionImageModel = await prisma.hSIntroductionImageModel.delete({
     *   where: {
     *     // ... filter to delete one HSIntroductionImageModel
     *   }
     * })
     * 
    **/
    delete<T extends HSIntroductionImageModelDeleteArgs>(
      args: SelectSubset<T, HSIntroductionImageModelDeleteArgs>
    ): Prisma__HSIntroductionImageModelClient<HSIntroductionImageModelGetPayload<T>>

    /**
     * Update one HSIntroductionImageModel.
     * @param {HSIntroductionImageModelUpdateArgs} args - Arguments to update one HSIntroductionImageModel.
     * @example
     * // Update one HSIntroductionImageModel
     * const hSIntroductionImageModel = await prisma.hSIntroductionImageModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HSIntroductionImageModelUpdateArgs>(
      args: SelectSubset<T, HSIntroductionImageModelUpdateArgs>
    ): Prisma__HSIntroductionImageModelClient<HSIntroductionImageModelGetPayload<T>>

    /**
     * Delete zero or more HSIntroductionImageModels.
     * @param {HSIntroductionImageModelDeleteManyArgs} args - Arguments to filter HSIntroductionImageModels to delete.
     * @example
     * // Delete a few HSIntroductionImageModels
     * const { count } = await prisma.hSIntroductionImageModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HSIntroductionImageModelDeleteManyArgs>(
      args?: SelectSubset<T, HSIntroductionImageModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HSIntroductionImageModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSIntroductionImageModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HSIntroductionImageModels
     * const hSIntroductionImageModel = await prisma.hSIntroductionImageModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HSIntroductionImageModelUpdateManyArgs>(
      args: SelectSubset<T, HSIntroductionImageModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HSIntroductionImageModel.
     * @param {HSIntroductionImageModelUpsertArgs} args - Arguments to update or create a HSIntroductionImageModel.
     * @example
     * // Update or create a HSIntroductionImageModel
     * const hSIntroductionImageModel = await prisma.hSIntroductionImageModel.upsert({
     *   create: {
     *     // ... data to create a HSIntroductionImageModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HSIntroductionImageModel we want to update
     *   }
     * })
    **/
    upsert<T extends HSIntroductionImageModelUpsertArgs>(
      args: SelectSubset<T, HSIntroductionImageModelUpsertArgs>
    ): Prisma__HSIntroductionImageModelClient<HSIntroductionImageModelGetPayload<T>>

    /**
     * Count the number of HSIntroductionImageModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSIntroductionImageModelCountArgs} args - Arguments to filter HSIntroductionImageModels to count.
     * @example
     * // Count the number of HSIntroductionImageModels
     * const count = await prisma.hSIntroductionImageModel.count({
     *   where: {
     *     // ... the filter for the HSIntroductionImageModels we want to count
     *   }
     * })
    **/
    count<T extends HSIntroductionImageModelCountArgs>(
      args?: Subset<T, HSIntroductionImageModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HSIntroductionImageModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HSIntroductionImageModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSIntroductionImageModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HSIntroductionImageModelAggregateArgs>(args: Subset<T, HSIntroductionImageModelAggregateArgs>): Prisma.PrismaPromise<GetHSIntroductionImageModelAggregateType<T>>

    /**
     * Group by HSIntroductionImageModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSIntroductionImageModelGroupByArgs} args - Group by arguments.
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
      T extends HSIntroductionImageModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HSIntroductionImageModelGroupByArgs['orderBy'] }
        : { orderBy?: HSIntroductionImageModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HSIntroductionImageModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHSIntroductionImageModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HSIntroductionImageModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HSIntroductionImageModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    hs_provider<T extends HSProviderModelArgs= {}>(args?: Subset<T, HSProviderModelArgs>): Prisma__HSProviderModelClient<HSProviderModelGetPayload<T> | Null>;

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
   * HSIntroductionImageModel base type for findUnique actions
   */
  export type HSIntroductionImageModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HSIntroductionImageModel
     */
    select?: HSIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSIntroductionImageModelInclude | null
    /**
     * Filter, which HSIntroductionImageModel to fetch.
     */
    where: HSIntroductionImageModelWhereUniqueInput
  }

  /**
   * HSIntroductionImageModel findUnique
   */
  export interface HSIntroductionImageModelFindUniqueArgs extends HSIntroductionImageModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HSIntroductionImageModel findUniqueOrThrow
   */
  export type HSIntroductionImageModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HSIntroductionImageModel
     */
    select?: HSIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSIntroductionImageModelInclude | null
    /**
     * Filter, which HSIntroductionImageModel to fetch.
     */
    where: HSIntroductionImageModelWhereUniqueInput
  }


  /**
   * HSIntroductionImageModel base type for findFirst actions
   */
  export type HSIntroductionImageModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HSIntroductionImageModel
     */
    select?: HSIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSIntroductionImageModelInclude | null
    /**
     * Filter, which HSIntroductionImageModel to fetch.
     */
    where?: HSIntroductionImageModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSIntroductionImageModels to fetch.
     */
    orderBy?: Enumerable<HSIntroductionImageModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSIntroductionImageModels.
     */
    cursor?: HSIntroductionImageModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSIntroductionImageModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSIntroductionImageModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSIntroductionImageModels.
     */
    distinct?: Enumerable<HSIntroductionImageModelScalarFieldEnum>
  }

  /**
   * HSIntroductionImageModel findFirst
   */
  export interface HSIntroductionImageModelFindFirstArgs extends HSIntroductionImageModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HSIntroductionImageModel findFirstOrThrow
   */
  export type HSIntroductionImageModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HSIntroductionImageModel
     */
    select?: HSIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSIntroductionImageModelInclude | null
    /**
     * Filter, which HSIntroductionImageModel to fetch.
     */
    where?: HSIntroductionImageModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSIntroductionImageModels to fetch.
     */
    orderBy?: Enumerable<HSIntroductionImageModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSIntroductionImageModels.
     */
    cursor?: HSIntroductionImageModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSIntroductionImageModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSIntroductionImageModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSIntroductionImageModels.
     */
    distinct?: Enumerable<HSIntroductionImageModelScalarFieldEnum>
  }


  /**
   * HSIntroductionImageModel findMany
   */
  export type HSIntroductionImageModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the HSIntroductionImageModel
     */
    select?: HSIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSIntroductionImageModelInclude | null
    /**
     * Filter, which HSIntroductionImageModels to fetch.
     */
    where?: HSIntroductionImageModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSIntroductionImageModels to fetch.
     */
    orderBy?: Enumerable<HSIntroductionImageModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HSIntroductionImageModels.
     */
    cursor?: HSIntroductionImageModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSIntroductionImageModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSIntroductionImageModels.
     */
    skip?: number
    distinct?: Enumerable<HSIntroductionImageModelScalarFieldEnum>
  }


  /**
   * HSIntroductionImageModel create
   */
  export type HSIntroductionImageModelCreateArgs = {
    /**
     * Select specific fields to fetch from the HSIntroductionImageModel
     */
    select?: HSIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSIntroductionImageModelInclude | null
    /**
     * The data needed to create a HSIntroductionImageModel.
     */
    data: XOR<HSIntroductionImageModelCreateInput, HSIntroductionImageModelUncheckedCreateInput>
  }


  /**
   * HSIntroductionImageModel createMany
   */
  export type HSIntroductionImageModelCreateManyArgs = {
    /**
     * The data used to create many HSIntroductionImageModels.
     */
    data: Enumerable<HSIntroductionImageModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HSIntroductionImageModel update
   */
  export type HSIntroductionImageModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the HSIntroductionImageModel
     */
    select?: HSIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSIntroductionImageModelInclude | null
    /**
     * The data needed to update a HSIntroductionImageModel.
     */
    data: XOR<HSIntroductionImageModelUpdateInput, HSIntroductionImageModelUncheckedUpdateInput>
    /**
     * Choose, which HSIntroductionImageModel to update.
     */
    where: HSIntroductionImageModelWhereUniqueInput
  }


  /**
   * HSIntroductionImageModel updateMany
   */
  export type HSIntroductionImageModelUpdateManyArgs = {
    /**
     * The data used to update HSIntroductionImageModels.
     */
    data: XOR<HSIntroductionImageModelUpdateManyMutationInput, HSIntroductionImageModelUncheckedUpdateManyInput>
    /**
     * Filter which HSIntroductionImageModels to update
     */
    where?: HSIntroductionImageModelWhereInput
  }


  /**
   * HSIntroductionImageModel upsert
   */
  export type HSIntroductionImageModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the HSIntroductionImageModel
     */
    select?: HSIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSIntroductionImageModelInclude | null
    /**
     * The filter to search for the HSIntroductionImageModel to update in case it exists.
     */
    where: HSIntroductionImageModelWhereUniqueInput
    /**
     * In case the HSIntroductionImageModel found by the `where` argument doesn't exist, create a new HSIntroductionImageModel with this data.
     */
    create: XOR<HSIntroductionImageModelCreateInput, HSIntroductionImageModelUncheckedCreateInput>
    /**
     * In case the HSIntroductionImageModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HSIntroductionImageModelUpdateInput, HSIntroductionImageModelUncheckedUpdateInput>
  }


  /**
   * HSIntroductionImageModel delete
   */
  export type HSIntroductionImageModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the HSIntroductionImageModel
     */
    select?: HSIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSIntroductionImageModelInclude | null
    /**
     * Filter which HSIntroductionImageModel to delete.
     */
    where: HSIntroductionImageModelWhereUniqueInput
  }


  /**
   * HSIntroductionImageModel deleteMany
   */
  export type HSIntroductionImageModelDeleteManyArgs = {
    /**
     * Filter which HSIntroductionImageModels to delete
     */
    where?: HSIntroductionImageModelWhereInput
  }


  /**
   * HSIntroductionImageModel without action
   */
  export type HSIntroductionImageModelArgs = {
    /**
     * Select specific fields to fetch from the HSIntroductionImageModel
     */
    select?: HSIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSIntroductionImageModelInclude | null
  }



  /**
   * Model UserExpertiseModel
   */


  export type AggregateUserExpertiseModel = {
    _count: UserExpertiseModelCountAggregateOutputType | null
    _min: UserExpertiseModelMinAggregateOutputType | null
    _max: UserExpertiseModelMaxAggregateOutputType | null
  }

  export type UserExpertiseModelMinAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    category_id: string | null
    business_user_id: string | null
  }

  export type UserExpertiseModelMaxAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    category_id: string | null
    business_user_id: string | null
  }

  export type UserExpertiseModelCountAggregateOutputType = {
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    id: number
    category_id: number
    business_user_id: number
    _all: number
  }


  export type UserExpertiseModelMinAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    category_id?: true
    business_user_id?: true
  }

  export type UserExpertiseModelMaxAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    category_id?: true
    business_user_id?: true
  }

  export type UserExpertiseModelCountAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    category_id?: true
    business_user_id?: true
    _all?: true
  }

  export type UserExpertiseModelAggregateArgs = {
    /**
     * Filter which UserExpertiseModel to aggregate.
     */
    where?: UserExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExpertiseModels to fetch.
     */
    orderBy?: Enumerable<UserExpertiseModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExpertiseModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserExpertiseModels
    **/
    _count?: true | UserExpertiseModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserExpertiseModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserExpertiseModelMaxAggregateInputType
  }

  export type GetUserExpertiseModelAggregateType<T extends UserExpertiseModelAggregateArgs> = {
        [P in keyof T & keyof AggregateUserExpertiseModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserExpertiseModel[P]>
      : GetScalarType<T[P], AggregateUserExpertiseModel[P]>
  }




  export type UserExpertiseModelGroupByArgs = {
    where?: UserExpertiseModelWhereInput
    orderBy?: Enumerable<UserExpertiseModelOrderByWithAggregationInput>
    by: UserExpertiseModelScalarFieldEnum[]
    having?: UserExpertiseModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserExpertiseModelCountAggregateInputType | true
    _min?: UserExpertiseModelMinAggregateInputType
    _max?: UserExpertiseModelMaxAggregateInputType
  }


  export type UserExpertiseModelGroupByOutputType = {
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    id: string
    category_id: string
    business_user_id: string
    _count: UserExpertiseModelCountAggregateOutputType | null
    _min: UserExpertiseModelMinAggregateOutputType | null
    _max: UserExpertiseModelMaxAggregateOutputType | null
  }

  type GetUserExpertiseModelGroupByPayload<T extends UserExpertiseModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserExpertiseModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserExpertiseModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserExpertiseModelGroupByOutputType[P]>
            : GetScalarType<T[P], UserExpertiseModelGroupByOutputType[P]>
        }
      >
    >


  export type UserExpertiseModelSelect = {
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    id?: boolean
    category_id?: boolean
    business_user_id?: boolean
    category?: boolean | ExpertSubCategoryModelArgs
    business_user?: boolean | BusinessUserArgs
  }


  export type UserExpertiseModelInclude = {
    category?: boolean | ExpertSubCategoryModelArgs
    business_user?: boolean | BusinessUserArgs
  }

  export type UserExpertiseModelGetPayload<S extends boolean | null | undefined | UserExpertiseModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserExpertiseModel :
    S extends undefined ? never :
    S extends { include: any } & (UserExpertiseModelArgs | UserExpertiseModelFindManyArgs)
    ? UserExpertiseModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? ExpertSubCategoryModelGetPayload<S['include'][P]> :
        P extends 'business_user' ? BusinessUserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserExpertiseModelArgs | UserExpertiseModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? ExpertSubCategoryModelGetPayload<S['select'][P]> :
        P extends 'business_user' ? BusinessUserGetPayload<S['select'][P]> :  P extends keyof UserExpertiseModel ? UserExpertiseModel[P] : never
  } 
      : UserExpertiseModel


  type UserExpertiseModelCountArgs = 
    Omit<UserExpertiseModelFindManyArgs, 'select' | 'include'> & {
      select?: UserExpertiseModelCountAggregateInputType | true
    }

  export interface UserExpertiseModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserExpertiseModel that matches the filter.
     * @param {UserExpertiseModelFindUniqueArgs} args - Arguments to find a UserExpertiseModel
     * @example
     * // Get one UserExpertiseModel
     * const userExpertiseModel = await prisma.userExpertiseModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserExpertiseModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserExpertiseModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserExpertiseModel'> extends True ? Prisma__UserExpertiseModelClient<UserExpertiseModelGetPayload<T>> : Prisma__UserExpertiseModelClient<UserExpertiseModelGetPayload<T> | null, null>

    /**
     * Find one UserExpertiseModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserExpertiseModelFindUniqueOrThrowArgs} args - Arguments to find a UserExpertiseModel
     * @example
     * // Get one UserExpertiseModel
     * const userExpertiseModel = await prisma.userExpertiseModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserExpertiseModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserExpertiseModelFindUniqueOrThrowArgs>
    ): Prisma__UserExpertiseModelClient<UserExpertiseModelGetPayload<T>>

    /**
     * Find the first UserExpertiseModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExpertiseModelFindFirstArgs} args - Arguments to find a UserExpertiseModel
     * @example
     * // Get one UserExpertiseModel
     * const userExpertiseModel = await prisma.userExpertiseModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserExpertiseModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserExpertiseModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserExpertiseModel'> extends True ? Prisma__UserExpertiseModelClient<UserExpertiseModelGetPayload<T>> : Prisma__UserExpertiseModelClient<UserExpertiseModelGetPayload<T> | null, null>

    /**
     * Find the first UserExpertiseModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExpertiseModelFindFirstOrThrowArgs} args - Arguments to find a UserExpertiseModel
     * @example
     * // Get one UserExpertiseModel
     * const userExpertiseModel = await prisma.userExpertiseModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserExpertiseModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserExpertiseModelFindFirstOrThrowArgs>
    ): Prisma__UserExpertiseModelClient<UserExpertiseModelGetPayload<T>>

    /**
     * Find zero or more UserExpertiseModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExpertiseModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserExpertiseModels
     * const userExpertiseModels = await prisma.userExpertiseModel.findMany()
     * 
     * // Get first 10 UserExpertiseModels
     * const userExpertiseModels = await prisma.userExpertiseModel.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const userExpertiseModelWithCreated_atOnly = await prisma.userExpertiseModel.findMany({ select: { created_at: true } })
     * 
    **/
    findMany<T extends UserExpertiseModelFindManyArgs>(
      args?: SelectSubset<T, UserExpertiseModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserExpertiseModelGetPayload<T>>>

    /**
     * Create a UserExpertiseModel.
     * @param {UserExpertiseModelCreateArgs} args - Arguments to create a UserExpertiseModel.
     * @example
     * // Create one UserExpertiseModel
     * const UserExpertiseModel = await prisma.userExpertiseModel.create({
     *   data: {
     *     // ... data to create a UserExpertiseModel
     *   }
     * })
     * 
    **/
    create<T extends UserExpertiseModelCreateArgs>(
      args: SelectSubset<T, UserExpertiseModelCreateArgs>
    ): Prisma__UserExpertiseModelClient<UserExpertiseModelGetPayload<T>>

    /**
     * Create many UserExpertiseModels.
     *     @param {UserExpertiseModelCreateManyArgs} args - Arguments to create many UserExpertiseModels.
     *     @example
     *     // Create many UserExpertiseModels
     *     const userExpertiseModel = await prisma.userExpertiseModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserExpertiseModelCreateManyArgs>(
      args?: SelectSubset<T, UserExpertiseModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserExpertiseModel.
     * @param {UserExpertiseModelDeleteArgs} args - Arguments to delete one UserExpertiseModel.
     * @example
     * // Delete one UserExpertiseModel
     * const UserExpertiseModel = await prisma.userExpertiseModel.delete({
     *   where: {
     *     // ... filter to delete one UserExpertiseModel
     *   }
     * })
     * 
    **/
    delete<T extends UserExpertiseModelDeleteArgs>(
      args: SelectSubset<T, UserExpertiseModelDeleteArgs>
    ): Prisma__UserExpertiseModelClient<UserExpertiseModelGetPayload<T>>

    /**
     * Update one UserExpertiseModel.
     * @param {UserExpertiseModelUpdateArgs} args - Arguments to update one UserExpertiseModel.
     * @example
     * // Update one UserExpertiseModel
     * const userExpertiseModel = await prisma.userExpertiseModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserExpertiseModelUpdateArgs>(
      args: SelectSubset<T, UserExpertiseModelUpdateArgs>
    ): Prisma__UserExpertiseModelClient<UserExpertiseModelGetPayload<T>>

    /**
     * Delete zero or more UserExpertiseModels.
     * @param {UserExpertiseModelDeleteManyArgs} args - Arguments to filter UserExpertiseModels to delete.
     * @example
     * // Delete a few UserExpertiseModels
     * const { count } = await prisma.userExpertiseModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserExpertiseModelDeleteManyArgs>(
      args?: SelectSubset<T, UserExpertiseModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserExpertiseModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExpertiseModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserExpertiseModels
     * const userExpertiseModel = await prisma.userExpertiseModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserExpertiseModelUpdateManyArgs>(
      args: SelectSubset<T, UserExpertiseModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserExpertiseModel.
     * @param {UserExpertiseModelUpsertArgs} args - Arguments to update or create a UserExpertiseModel.
     * @example
     * // Update or create a UserExpertiseModel
     * const userExpertiseModel = await prisma.userExpertiseModel.upsert({
     *   create: {
     *     // ... data to create a UserExpertiseModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserExpertiseModel we want to update
     *   }
     * })
    **/
    upsert<T extends UserExpertiseModelUpsertArgs>(
      args: SelectSubset<T, UserExpertiseModelUpsertArgs>
    ): Prisma__UserExpertiseModelClient<UserExpertiseModelGetPayload<T>>

    /**
     * Count the number of UserExpertiseModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExpertiseModelCountArgs} args - Arguments to filter UserExpertiseModels to count.
     * @example
     * // Count the number of UserExpertiseModels
     * const count = await prisma.userExpertiseModel.count({
     *   where: {
     *     // ... the filter for the UserExpertiseModels we want to count
     *   }
     * })
    **/
    count<T extends UserExpertiseModelCountArgs>(
      args?: Subset<T, UserExpertiseModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserExpertiseModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserExpertiseModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExpertiseModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserExpertiseModelAggregateArgs>(args: Subset<T, UserExpertiseModelAggregateArgs>): Prisma.PrismaPromise<GetUserExpertiseModelAggregateType<T>>

    /**
     * Group by UserExpertiseModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExpertiseModelGroupByArgs} args - Group by arguments.
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
      T extends UserExpertiseModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserExpertiseModelGroupByArgs['orderBy'] }
        : { orderBy?: UserExpertiseModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserExpertiseModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserExpertiseModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserExpertiseModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserExpertiseModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    category<T extends ExpertSubCategoryModelArgs= {}>(args?: Subset<T, ExpertSubCategoryModelArgs>): Prisma__ExpertSubCategoryModelClient<ExpertSubCategoryModelGetPayload<T> | Null>;

    business_user<T extends BusinessUserArgs= {}>(args?: Subset<T, BusinessUserArgs>): Prisma__BusinessUserClient<BusinessUserGetPayload<T> | Null>;

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
   * UserExpertiseModel base type for findUnique actions
   */
  export type UserExpertiseModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserExpertiseModel
     */
    select?: UserExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExpertiseModelInclude | null
    /**
     * Filter, which UserExpertiseModel to fetch.
     */
    where: UserExpertiseModelWhereUniqueInput
  }

  /**
   * UserExpertiseModel findUnique
   */
  export interface UserExpertiseModelFindUniqueArgs extends UserExpertiseModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserExpertiseModel findUniqueOrThrow
   */
  export type UserExpertiseModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserExpertiseModel
     */
    select?: UserExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExpertiseModelInclude | null
    /**
     * Filter, which UserExpertiseModel to fetch.
     */
    where: UserExpertiseModelWhereUniqueInput
  }


  /**
   * UserExpertiseModel base type for findFirst actions
   */
  export type UserExpertiseModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserExpertiseModel
     */
    select?: UserExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExpertiseModelInclude | null
    /**
     * Filter, which UserExpertiseModel to fetch.
     */
    where?: UserExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExpertiseModels to fetch.
     */
    orderBy?: Enumerable<UserExpertiseModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExpertiseModels.
     */
    cursor?: UserExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExpertiseModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExpertiseModels.
     */
    distinct?: Enumerable<UserExpertiseModelScalarFieldEnum>
  }

  /**
   * UserExpertiseModel findFirst
   */
  export interface UserExpertiseModelFindFirstArgs extends UserExpertiseModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserExpertiseModel findFirstOrThrow
   */
  export type UserExpertiseModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserExpertiseModel
     */
    select?: UserExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExpertiseModelInclude | null
    /**
     * Filter, which UserExpertiseModel to fetch.
     */
    where?: UserExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExpertiseModels to fetch.
     */
    orderBy?: Enumerable<UserExpertiseModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExpertiseModels.
     */
    cursor?: UserExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExpertiseModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExpertiseModels.
     */
    distinct?: Enumerable<UserExpertiseModelScalarFieldEnum>
  }


  /**
   * UserExpertiseModel findMany
   */
  export type UserExpertiseModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserExpertiseModel
     */
    select?: UserExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExpertiseModelInclude | null
    /**
     * Filter, which UserExpertiseModels to fetch.
     */
    where?: UserExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExpertiseModels to fetch.
     */
    orderBy?: Enumerable<UserExpertiseModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserExpertiseModels.
     */
    cursor?: UserExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExpertiseModels.
     */
    skip?: number
    distinct?: Enumerable<UserExpertiseModelScalarFieldEnum>
  }


  /**
   * UserExpertiseModel create
   */
  export type UserExpertiseModelCreateArgs = {
    /**
     * Select specific fields to fetch from the UserExpertiseModel
     */
    select?: UserExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExpertiseModelInclude | null
    /**
     * The data needed to create a UserExpertiseModel.
     */
    data: XOR<UserExpertiseModelCreateInput, UserExpertiseModelUncheckedCreateInput>
  }


  /**
   * UserExpertiseModel createMany
   */
  export type UserExpertiseModelCreateManyArgs = {
    /**
     * The data used to create many UserExpertiseModels.
     */
    data: Enumerable<UserExpertiseModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserExpertiseModel update
   */
  export type UserExpertiseModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserExpertiseModel
     */
    select?: UserExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExpertiseModelInclude | null
    /**
     * The data needed to update a UserExpertiseModel.
     */
    data: XOR<UserExpertiseModelUpdateInput, UserExpertiseModelUncheckedUpdateInput>
    /**
     * Choose, which UserExpertiseModel to update.
     */
    where: UserExpertiseModelWhereUniqueInput
  }


  /**
   * UserExpertiseModel updateMany
   */
  export type UserExpertiseModelUpdateManyArgs = {
    /**
     * The data used to update UserExpertiseModels.
     */
    data: XOR<UserExpertiseModelUpdateManyMutationInput, UserExpertiseModelUncheckedUpdateManyInput>
    /**
     * Filter which UserExpertiseModels to update
     */
    where?: UserExpertiseModelWhereInput
  }


  /**
   * UserExpertiseModel upsert
   */
  export type UserExpertiseModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserExpertiseModel
     */
    select?: UserExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExpertiseModelInclude | null
    /**
     * The filter to search for the UserExpertiseModel to update in case it exists.
     */
    where: UserExpertiseModelWhereUniqueInput
    /**
     * In case the UserExpertiseModel found by the `where` argument doesn't exist, create a new UserExpertiseModel with this data.
     */
    create: XOR<UserExpertiseModelCreateInput, UserExpertiseModelUncheckedCreateInput>
    /**
     * In case the UserExpertiseModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserExpertiseModelUpdateInput, UserExpertiseModelUncheckedUpdateInput>
  }


  /**
   * UserExpertiseModel delete
   */
  export type UserExpertiseModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserExpertiseModel
     */
    select?: UserExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExpertiseModelInclude | null
    /**
     * Filter which UserExpertiseModel to delete.
     */
    where: UserExpertiseModelWhereUniqueInput
  }


  /**
   * UserExpertiseModel deleteMany
   */
  export type UserExpertiseModelDeleteManyArgs = {
    /**
     * Filter which UserExpertiseModels to delete
     */
    where?: UserExpertiseModelWhereInput
  }


  /**
   * UserExpertiseModel without action
   */
  export type UserExpertiseModelArgs = {
    /**
     * Select specific fields to fetch from the UserExpertiseModel
     */
    select?: UserExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExpertiseModelInclude | null
  }



  /**
   * Model ExpertSubCategoryModel
   */


  export type AggregateExpertSubCategoryModel = {
    _count: ExpertSubCategoryModelCountAggregateOutputType | null
    _min: ExpertSubCategoryModelMinAggregateOutputType | null
    _max: ExpertSubCategoryModelMaxAggregateOutputType | null
  }

  export type ExpertSubCategoryModelMinAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    name: string | null
    super_id: string | null
  }

  export type ExpertSubCategoryModelMaxAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    name: string | null
    super_id: string | null
  }

  export type ExpertSubCategoryModelCountAggregateOutputType = {
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    id: number
    name: number
    super_id: number
    _all: number
  }


  export type ExpertSubCategoryModelMinAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    name?: true
    super_id?: true
  }

  export type ExpertSubCategoryModelMaxAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    name?: true
    super_id?: true
  }

  export type ExpertSubCategoryModelCountAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    name?: true
    super_id?: true
    _all?: true
  }

  export type ExpertSubCategoryModelAggregateArgs = {
    /**
     * Filter which ExpertSubCategoryModel to aggregate.
     */
    where?: ExpertSubCategoryModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertSubCategoryModels to fetch.
     */
    orderBy?: Enumerable<ExpertSubCategoryModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpertSubCategoryModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertSubCategoryModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertSubCategoryModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpertSubCategoryModels
    **/
    _count?: true | ExpertSubCategoryModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpertSubCategoryModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpertSubCategoryModelMaxAggregateInputType
  }

  export type GetExpertSubCategoryModelAggregateType<T extends ExpertSubCategoryModelAggregateArgs> = {
        [P in keyof T & keyof AggregateExpertSubCategoryModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpertSubCategoryModel[P]>
      : GetScalarType<T[P], AggregateExpertSubCategoryModel[P]>
  }




  export type ExpertSubCategoryModelGroupByArgs = {
    where?: ExpertSubCategoryModelWhereInput
    orderBy?: Enumerable<ExpertSubCategoryModelOrderByWithAggregationInput>
    by: ExpertSubCategoryModelScalarFieldEnum[]
    having?: ExpertSubCategoryModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpertSubCategoryModelCountAggregateInputType | true
    _min?: ExpertSubCategoryModelMinAggregateInputType
    _max?: ExpertSubCategoryModelMaxAggregateInputType
  }


  export type ExpertSubCategoryModelGroupByOutputType = {
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    id: string
    name: string
    super_id: string
    _count: ExpertSubCategoryModelCountAggregateOutputType | null
    _min: ExpertSubCategoryModelMinAggregateOutputType | null
    _max: ExpertSubCategoryModelMaxAggregateOutputType | null
  }

  type GetExpertSubCategoryModelGroupByPayload<T extends ExpertSubCategoryModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ExpertSubCategoryModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpertSubCategoryModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpertSubCategoryModelGroupByOutputType[P]>
            : GetScalarType<T[P], ExpertSubCategoryModelGroupByOutputType[P]>
        }
      >
    >


  export type ExpertSubCategoryModelSelect = {
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    id?: boolean
    name?: boolean
    super_id?: boolean
    super?: boolean | ExpertSuperCategoryModelArgs
    expertises?: boolean | ExpertSubCategoryModel$expertisesArgs
    _count?: boolean | ExpertSubCategoryModelCountOutputTypeArgs
  }


  export type ExpertSubCategoryModelInclude = {
    super?: boolean | ExpertSuperCategoryModelArgs
    expertises?: boolean | ExpertSubCategoryModel$expertisesArgs
    _count?: boolean | ExpertSubCategoryModelCountOutputTypeArgs
  }

  export type ExpertSubCategoryModelGetPayload<S extends boolean | null | undefined | ExpertSubCategoryModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ExpertSubCategoryModel :
    S extends undefined ? never :
    S extends { include: any } & (ExpertSubCategoryModelArgs | ExpertSubCategoryModelFindManyArgs)
    ? ExpertSubCategoryModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'super' ? ExpertSuperCategoryModelGetPayload<S['include'][P]> :
        P extends 'expertises' ? Array < UserExpertiseModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? ExpertSubCategoryModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ExpertSubCategoryModelArgs | ExpertSubCategoryModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'super' ? ExpertSuperCategoryModelGetPayload<S['select'][P]> :
        P extends 'expertises' ? Array < UserExpertiseModelGetPayload<S['select'][P]>>  :
        P extends '_count' ? ExpertSubCategoryModelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ExpertSubCategoryModel ? ExpertSubCategoryModel[P] : never
  } 
      : ExpertSubCategoryModel


  type ExpertSubCategoryModelCountArgs = 
    Omit<ExpertSubCategoryModelFindManyArgs, 'select' | 'include'> & {
      select?: ExpertSubCategoryModelCountAggregateInputType | true
    }

  export interface ExpertSubCategoryModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ExpertSubCategoryModel that matches the filter.
     * @param {ExpertSubCategoryModelFindUniqueArgs} args - Arguments to find a ExpertSubCategoryModel
     * @example
     * // Get one ExpertSubCategoryModel
     * const expertSubCategoryModel = await prisma.expertSubCategoryModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExpertSubCategoryModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExpertSubCategoryModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ExpertSubCategoryModel'> extends True ? Prisma__ExpertSubCategoryModelClient<ExpertSubCategoryModelGetPayload<T>> : Prisma__ExpertSubCategoryModelClient<ExpertSubCategoryModelGetPayload<T> | null, null>

    /**
     * Find one ExpertSubCategoryModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExpertSubCategoryModelFindUniqueOrThrowArgs} args - Arguments to find a ExpertSubCategoryModel
     * @example
     * // Get one ExpertSubCategoryModel
     * const expertSubCategoryModel = await prisma.expertSubCategoryModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExpertSubCategoryModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ExpertSubCategoryModelFindUniqueOrThrowArgs>
    ): Prisma__ExpertSubCategoryModelClient<ExpertSubCategoryModelGetPayload<T>>

    /**
     * Find the first ExpertSubCategoryModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertSubCategoryModelFindFirstArgs} args - Arguments to find a ExpertSubCategoryModel
     * @example
     * // Get one ExpertSubCategoryModel
     * const expertSubCategoryModel = await prisma.expertSubCategoryModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExpertSubCategoryModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExpertSubCategoryModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ExpertSubCategoryModel'> extends True ? Prisma__ExpertSubCategoryModelClient<ExpertSubCategoryModelGetPayload<T>> : Prisma__ExpertSubCategoryModelClient<ExpertSubCategoryModelGetPayload<T> | null, null>

    /**
     * Find the first ExpertSubCategoryModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertSubCategoryModelFindFirstOrThrowArgs} args - Arguments to find a ExpertSubCategoryModel
     * @example
     * // Get one ExpertSubCategoryModel
     * const expertSubCategoryModel = await prisma.expertSubCategoryModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExpertSubCategoryModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ExpertSubCategoryModelFindFirstOrThrowArgs>
    ): Prisma__ExpertSubCategoryModelClient<ExpertSubCategoryModelGetPayload<T>>

    /**
     * Find zero or more ExpertSubCategoryModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertSubCategoryModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpertSubCategoryModels
     * const expertSubCategoryModels = await prisma.expertSubCategoryModel.findMany()
     * 
     * // Get first 10 ExpertSubCategoryModels
     * const expertSubCategoryModels = await prisma.expertSubCategoryModel.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const expertSubCategoryModelWithCreated_atOnly = await prisma.expertSubCategoryModel.findMany({ select: { created_at: true } })
     * 
    **/
    findMany<T extends ExpertSubCategoryModelFindManyArgs>(
      args?: SelectSubset<T, ExpertSubCategoryModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<ExpertSubCategoryModelGetPayload<T>>>

    /**
     * Create a ExpertSubCategoryModel.
     * @param {ExpertSubCategoryModelCreateArgs} args - Arguments to create a ExpertSubCategoryModel.
     * @example
     * // Create one ExpertSubCategoryModel
     * const ExpertSubCategoryModel = await prisma.expertSubCategoryModel.create({
     *   data: {
     *     // ... data to create a ExpertSubCategoryModel
     *   }
     * })
     * 
    **/
    create<T extends ExpertSubCategoryModelCreateArgs>(
      args: SelectSubset<T, ExpertSubCategoryModelCreateArgs>
    ): Prisma__ExpertSubCategoryModelClient<ExpertSubCategoryModelGetPayload<T>>

    /**
     * Create many ExpertSubCategoryModels.
     *     @param {ExpertSubCategoryModelCreateManyArgs} args - Arguments to create many ExpertSubCategoryModels.
     *     @example
     *     // Create many ExpertSubCategoryModels
     *     const expertSubCategoryModel = await prisma.expertSubCategoryModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExpertSubCategoryModelCreateManyArgs>(
      args?: SelectSubset<T, ExpertSubCategoryModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExpertSubCategoryModel.
     * @param {ExpertSubCategoryModelDeleteArgs} args - Arguments to delete one ExpertSubCategoryModel.
     * @example
     * // Delete one ExpertSubCategoryModel
     * const ExpertSubCategoryModel = await prisma.expertSubCategoryModel.delete({
     *   where: {
     *     // ... filter to delete one ExpertSubCategoryModel
     *   }
     * })
     * 
    **/
    delete<T extends ExpertSubCategoryModelDeleteArgs>(
      args: SelectSubset<T, ExpertSubCategoryModelDeleteArgs>
    ): Prisma__ExpertSubCategoryModelClient<ExpertSubCategoryModelGetPayload<T>>

    /**
     * Update one ExpertSubCategoryModel.
     * @param {ExpertSubCategoryModelUpdateArgs} args - Arguments to update one ExpertSubCategoryModel.
     * @example
     * // Update one ExpertSubCategoryModel
     * const expertSubCategoryModel = await prisma.expertSubCategoryModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExpertSubCategoryModelUpdateArgs>(
      args: SelectSubset<T, ExpertSubCategoryModelUpdateArgs>
    ): Prisma__ExpertSubCategoryModelClient<ExpertSubCategoryModelGetPayload<T>>

    /**
     * Delete zero or more ExpertSubCategoryModels.
     * @param {ExpertSubCategoryModelDeleteManyArgs} args - Arguments to filter ExpertSubCategoryModels to delete.
     * @example
     * // Delete a few ExpertSubCategoryModels
     * const { count } = await prisma.expertSubCategoryModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExpertSubCategoryModelDeleteManyArgs>(
      args?: SelectSubset<T, ExpertSubCategoryModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpertSubCategoryModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertSubCategoryModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpertSubCategoryModels
     * const expertSubCategoryModel = await prisma.expertSubCategoryModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExpertSubCategoryModelUpdateManyArgs>(
      args: SelectSubset<T, ExpertSubCategoryModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExpertSubCategoryModel.
     * @param {ExpertSubCategoryModelUpsertArgs} args - Arguments to update or create a ExpertSubCategoryModel.
     * @example
     * // Update or create a ExpertSubCategoryModel
     * const expertSubCategoryModel = await prisma.expertSubCategoryModel.upsert({
     *   create: {
     *     // ... data to create a ExpertSubCategoryModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpertSubCategoryModel we want to update
     *   }
     * })
    **/
    upsert<T extends ExpertSubCategoryModelUpsertArgs>(
      args: SelectSubset<T, ExpertSubCategoryModelUpsertArgs>
    ): Prisma__ExpertSubCategoryModelClient<ExpertSubCategoryModelGetPayload<T>>

    /**
     * Count the number of ExpertSubCategoryModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertSubCategoryModelCountArgs} args - Arguments to filter ExpertSubCategoryModels to count.
     * @example
     * // Count the number of ExpertSubCategoryModels
     * const count = await prisma.expertSubCategoryModel.count({
     *   where: {
     *     // ... the filter for the ExpertSubCategoryModels we want to count
     *   }
     * })
    **/
    count<T extends ExpertSubCategoryModelCountArgs>(
      args?: Subset<T, ExpertSubCategoryModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpertSubCategoryModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpertSubCategoryModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertSubCategoryModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpertSubCategoryModelAggregateArgs>(args: Subset<T, ExpertSubCategoryModelAggregateArgs>): Prisma.PrismaPromise<GetExpertSubCategoryModelAggregateType<T>>

    /**
     * Group by ExpertSubCategoryModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertSubCategoryModelGroupByArgs} args - Group by arguments.
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
      T extends ExpertSubCategoryModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpertSubCategoryModelGroupByArgs['orderBy'] }
        : { orderBy?: ExpertSubCategoryModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpertSubCategoryModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpertSubCategoryModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpertSubCategoryModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExpertSubCategoryModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    super<T extends ExpertSuperCategoryModelArgs= {}>(args?: Subset<T, ExpertSuperCategoryModelArgs>): Prisma__ExpertSuperCategoryModelClient<ExpertSuperCategoryModelGetPayload<T> | Null>;

    expertises<T extends ExpertSubCategoryModel$expertisesArgs= {}>(args?: Subset<T, ExpertSubCategoryModel$expertisesArgs>): Prisma.PrismaPromise<Array<UserExpertiseModelGetPayload<T>>| Null>;

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
   * ExpertSubCategoryModel base type for findUnique actions
   */
  export type ExpertSubCategoryModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ExpertSubCategoryModel
     */
    select?: ExpertSubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSubCategoryModelInclude | null
    /**
     * Filter, which ExpertSubCategoryModel to fetch.
     */
    where: ExpertSubCategoryModelWhereUniqueInput
  }

  /**
   * ExpertSubCategoryModel findUnique
   */
  export interface ExpertSubCategoryModelFindUniqueArgs extends ExpertSubCategoryModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ExpertSubCategoryModel findUniqueOrThrow
   */
  export type ExpertSubCategoryModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ExpertSubCategoryModel
     */
    select?: ExpertSubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSubCategoryModelInclude | null
    /**
     * Filter, which ExpertSubCategoryModel to fetch.
     */
    where: ExpertSubCategoryModelWhereUniqueInput
  }


  /**
   * ExpertSubCategoryModel base type for findFirst actions
   */
  export type ExpertSubCategoryModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ExpertSubCategoryModel
     */
    select?: ExpertSubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSubCategoryModelInclude | null
    /**
     * Filter, which ExpertSubCategoryModel to fetch.
     */
    where?: ExpertSubCategoryModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertSubCategoryModels to fetch.
     */
    orderBy?: Enumerable<ExpertSubCategoryModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpertSubCategoryModels.
     */
    cursor?: ExpertSubCategoryModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertSubCategoryModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertSubCategoryModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpertSubCategoryModels.
     */
    distinct?: Enumerable<ExpertSubCategoryModelScalarFieldEnum>
  }

  /**
   * ExpertSubCategoryModel findFirst
   */
  export interface ExpertSubCategoryModelFindFirstArgs extends ExpertSubCategoryModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ExpertSubCategoryModel findFirstOrThrow
   */
  export type ExpertSubCategoryModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ExpertSubCategoryModel
     */
    select?: ExpertSubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSubCategoryModelInclude | null
    /**
     * Filter, which ExpertSubCategoryModel to fetch.
     */
    where?: ExpertSubCategoryModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertSubCategoryModels to fetch.
     */
    orderBy?: Enumerable<ExpertSubCategoryModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpertSubCategoryModels.
     */
    cursor?: ExpertSubCategoryModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertSubCategoryModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertSubCategoryModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpertSubCategoryModels.
     */
    distinct?: Enumerable<ExpertSubCategoryModelScalarFieldEnum>
  }


  /**
   * ExpertSubCategoryModel findMany
   */
  export type ExpertSubCategoryModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the ExpertSubCategoryModel
     */
    select?: ExpertSubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSubCategoryModelInclude | null
    /**
     * Filter, which ExpertSubCategoryModels to fetch.
     */
    where?: ExpertSubCategoryModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertSubCategoryModels to fetch.
     */
    orderBy?: Enumerable<ExpertSubCategoryModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpertSubCategoryModels.
     */
    cursor?: ExpertSubCategoryModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertSubCategoryModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertSubCategoryModels.
     */
    skip?: number
    distinct?: Enumerable<ExpertSubCategoryModelScalarFieldEnum>
  }


  /**
   * ExpertSubCategoryModel create
   */
  export type ExpertSubCategoryModelCreateArgs = {
    /**
     * Select specific fields to fetch from the ExpertSubCategoryModel
     */
    select?: ExpertSubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSubCategoryModelInclude | null
    /**
     * The data needed to create a ExpertSubCategoryModel.
     */
    data: XOR<ExpertSubCategoryModelCreateInput, ExpertSubCategoryModelUncheckedCreateInput>
  }


  /**
   * ExpertSubCategoryModel createMany
   */
  export type ExpertSubCategoryModelCreateManyArgs = {
    /**
     * The data used to create many ExpertSubCategoryModels.
     */
    data: Enumerable<ExpertSubCategoryModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ExpertSubCategoryModel update
   */
  export type ExpertSubCategoryModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the ExpertSubCategoryModel
     */
    select?: ExpertSubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSubCategoryModelInclude | null
    /**
     * The data needed to update a ExpertSubCategoryModel.
     */
    data: XOR<ExpertSubCategoryModelUpdateInput, ExpertSubCategoryModelUncheckedUpdateInput>
    /**
     * Choose, which ExpertSubCategoryModel to update.
     */
    where: ExpertSubCategoryModelWhereUniqueInput
  }


  /**
   * ExpertSubCategoryModel updateMany
   */
  export type ExpertSubCategoryModelUpdateManyArgs = {
    /**
     * The data used to update ExpertSubCategoryModels.
     */
    data: XOR<ExpertSubCategoryModelUpdateManyMutationInput, ExpertSubCategoryModelUncheckedUpdateManyInput>
    /**
     * Filter which ExpertSubCategoryModels to update
     */
    where?: ExpertSubCategoryModelWhereInput
  }


  /**
   * ExpertSubCategoryModel upsert
   */
  export type ExpertSubCategoryModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the ExpertSubCategoryModel
     */
    select?: ExpertSubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSubCategoryModelInclude | null
    /**
     * The filter to search for the ExpertSubCategoryModel to update in case it exists.
     */
    where: ExpertSubCategoryModelWhereUniqueInput
    /**
     * In case the ExpertSubCategoryModel found by the `where` argument doesn't exist, create a new ExpertSubCategoryModel with this data.
     */
    create: XOR<ExpertSubCategoryModelCreateInput, ExpertSubCategoryModelUncheckedCreateInput>
    /**
     * In case the ExpertSubCategoryModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpertSubCategoryModelUpdateInput, ExpertSubCategoryModelUncheckedUpdateInput>
  }


  /**
   * ExpertSubCategoryModel delete
   */
  export type ExpertSubCategoryModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the ExpertSubCategoryModel
     */
    select?: ExpertSubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSubCategoryModelInclude | null
    /**
     * Filter which ExpertSubCategoryModel to delete.
     */
    where: ExpertSubCategoryModelWhereUniqueInput
  }


  /**
   * ExpertSubCategoryModel deleteMany
   */
  export type ExpertSubCategoryModelDeleteManyArgs = {
    /**
     * Filter which ExpertSubCategoryModels to delete
     */
    where?: ExpertSubCategoryModelWhereInput
  }


  /**
   * ExpertSubCategoryModel.expertises
   */
  export type ExpertSubCategoryModel$expertisesArgs = {
    /**
     * Select specific fields to fetch from the UserExpertiseModel
     */
    select?: UserExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserExpertiseModelInclude | null
    where?: UserExpertiseModelWhereInput
    orderBy?: Enumerable<UserExpertiseModelOrderByWithRelationInput>
    cursor?: UserExpertiseModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserExpertiseModelScalarFieldEnum>
  }


  /**
   * ExpertSubCategoryModel without action
   */
  export type ExpertSubCategoryModelArgs = {
    /**
     * Select specific fields to fetch from the ExpertSubCategoryModel
     */
    select?: ExpertSubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSubCategoryModelInclude | null
  }



  /**
   * Model ExpertSuperCategoryModel
   */


  export type AggregateExpertSuperCategoryModel = {
    _count: ExpertSuperCategoryModelCountAggregateOutputType | null
    _min: ExpertSuperCategoryModelMinAggregateOutputType | null
    _max: ExpertSuperCategoryModelMaxAggregateOutputType | null
  }

  export type ExpertSuperCategoryModelMinAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    name: string | null
    business_type: ExpertBusinessType | null
  }

  export type ExpertSuperCategoryModelMaxAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    name: string | null
    business_type: ExpertBusinessType | null
  }

  export type ExpertSuperCategoryModelCountAggregateOutputType = {
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    id: number
    name: number
    business_type: number
    _all: number
  }


  export type ExpertSuperCategoryModelMinAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    name?: true
    business_type?: true
  }

  export type ExpertSuperCategoryModelMaxAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    name?: true
    business_type?: true
  }

  export type ExpertSuperCategoryModelCountAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    name?: true
    business_type?: true
    _all?: true
  }

  export type ExpertSuperCategoryModelAggregateArgs = {
    /**
     * Filter which ExpertSuperCategoryModel to aggregate.
     */
    where?: ExpertSuperCategoryModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertSuperCategoryModels to fetch.
     */
    orderBy?: Enumerable<ExpertSuperCategoryModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpertSuperCategoryModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertSuperCategoryModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertSuperCategoryModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpertSuperCategoryModels
    **/
    _count?: true | ExpertSuperCategoryModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpertSuperCategoryModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpertSuperCategoryModelMaxAggregateInputType
  }

  export type GetExpertSuperCategoryModelAggregateType<T extends ExpertSuperCategoryModelAggregateArgs> = {
        [P in keyof T & keyof AggregateExpertSuperCategoryModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpertSuperCategoryModel[P]>
      : GetScalarType<T[P], AggregateExpertSuperCategoryModel[P]>
  }




  export type ExpertSuperCategoryModelGroupByArgs = {
    where?: ExpertSuperCategoryModelWhereInput
    orderBy?: Enumerable<ExpertSuperCategoryModelOrderByWithAggregationInput>
    by: ExpertSuperCategoryModelScalarFieldEnum[]
    having?: ExpertSuperCategoryModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpertSuperCategoryModelCountAggregateInputType | true
    _min?: ExpertSuperCategoryModelMinAggregateInputType
    _max?: ExpertSuperCategoryModelMaxAggregateInputType
  }


  export type ExpertSuperCategoryModelGroupByOutputType = {
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    id: string
    name: string
    business_type: ExpertBusinessType
    _count: ExpertSuperCategoryModelCountAggregateOutputType | null
    _min: ExpertSuperCategoryModelMinAggregateOutputType | null
    _max: ExpertSuperCategoryModelMaxAggregateOutputType | null
  }

  type GetExpertSuperCategoryModelGroupByPayload<T extends ExpertSuperCategoryModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ExpertSuperCategoryModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpertSuperCategoryModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpertSuperCategoryModelGroupByOutputType[P]>
            : GetScalarType<T[P], ExpertSuperCategoryModelGroupByOutputType[P]>
        }
      >
    >


  export type ExpertSuperCategoryModelSelect = {
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    id?: boolean
    name?: boolean
    business_type?: boolean
    subs?: boolean | ExpertSuperCategoryModel$subsArgs
    _count?: boolean | ExpertSuperCategoryModelCountOutputTypeArgs
  }


  export type ExpertSuperCategoryModelInclude = {
    subs?: boolean | ExpertSuperCategoryModel$subsArgs
    _count?: boolean | ExpertSuperCategoryModelCountOutputTypeArgs
  }

  export type ExpertSuperCategoryModelGetPayload<S extends boolean | null | undefined | ExpertSuperCategoryModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ExpertSuperCategoryModel :
    S extends undefined ? never :
    S extends { include: any } & (ExpertSuperCategoryModelArgs | ExpertSuperCategoryModelFindManyArgs)
    ? ExpertSuperCategoryModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'subs' ? Array < ExpertSubCategoryModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? ExpertSuperCategoryModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ExpertSuperCategoryModelArgs | ExpertSuperCategoryModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'subs' ? Array < ExpertSubCategoryModelGetPayload<S['select'][P]>>  :
        P extends '_count' ? ExpertSuperCategoryModelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ExpertSuperCategoryModel ? ExpertSuperCategoryModel[P] : never
  } 
      : ExpertSuperCategoryModel


  type ExpertSuperCategoryModelCountArgs = 
    Omit<ExpertSuperCategoryModelFindManyArgs, 'select' | 'include'> & {
      select?: ExpertSuperCategoryModelCountAggregateInputType | true
    }

  export interface ExpertSuperCategoryModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ExpertSuperCategoryModel that matches the filter.
     * @param {ExpertSuperCategoryModelFindUniqueArgs} args - Arguments to find a ExpertSuperCategoryModel
     * @example
     * // Get one ExpertSuperCategoryModel
     * const expertSuperCategoryModel = await prisma.expertSuperCategoryModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExpertSuperCategoryModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExpertSuperCategoryModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ExpertSuperCategoryModel'> extends True ? Prisma__ExpertSuperCategoryModelClient<ExpertSuperCategoryModelGetPayload<T>> : Prisma__ExpertSuperCategoryModelClient<ExpertSuperCategoryModelGetPayload<T> | null, null>

    /**
     * Find one ExpertSuperCategoryModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExpertSuperCategoryModelFindUniqueOrThrowArgs} args - Arguments to find a ExpertSuperCategoryModel
     * @example
     * // Get one ExpertSuperCategoryModel
     * const expertSuperCategoryModel = await prisma.expertSuperCategoryModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExpertSuperCategoryModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ExpertSuperCategoryModelFindUniqueOrThrowArgs>
    ): Prisma__ExpertSuperCategoryModelClient<ExpertSuperCategoryModelGetPayload<T>>

    /**
     * Find the first ExpertSuperCategoryModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertSuperCategoryModelFindFirstArgs} args - Arguments to find a ExpertSuperCategoryModel
     * @example
     * // Get one ExpertSuperCategoryModel
     * const expertSuperCategoryModel = await prisma.expertSuperCategoryModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExpertSuperCategoryModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExpertSuperCategoryModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ExpertSuperCategoryModel'> extends True ? Prisma__ExpertSuperCategoryModelClient<ExpertSuperCategoryModelGetPayload<T>> : Prisma__ExpertSuperCategoryModelClient<ExpertSuperCategoryModelGetPayload<T> | null, null>

    /**
     * Find the first ExpertSuperCategoryModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertSuperCategoryModelFindFirstOrThrowArgs} args - Arguments to find a ExpertSuperCategoryModel
     * @example
     * // Get one ExpertSuperCategoryModel
     * const expertSuperCategoryModel = await prisma.expertSuperCategoryModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExpertSuperCategoryModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ExpertSuperCategoryModelFindFirstOrThrowArgs>
    ): Prisma__ExpertSuperCategoryModelClient<ExpertSuperCategoryModelGetPayload<T>>

    /**
     * Find zero or more ExpertSuperCategoryModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertSuperCategoryModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpertSuperCategoryModels
     * const expertSuperCategoryModels = await prisma.expertSuperCategoryModel.findMany()
     * 
     * // Get first 10 ExpertSuperCategoryModels
     * const expertSuperCategoryModels = await prisma.expertSuperCategoryModel.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const expertSuperCategoryModelWithCreated_atOnly = await prisma.expertSuperCategoryModel.findMany({ select: { created_at: true } })
     * 
    **/
    findMany<T extends ExpertSuperCategoryModelFindManyArgs>(
      args?: SelectSubset<T, ExpertSuperCategoryModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<ExpertSuperCategoryModelGetPayload<T>>>

    /**
     * Create a ExpertSuperCategoryModel.
     * @param {ExpertSuperCategoryModelCreateArgs} args - Arguments to create a ExpertSuperCategoryModel.
     * @example
     * // Create one ExpertSuperCategoryModel
     * const ExpertSuperCategoryModel = await prisma.expertSuperCategoryModel.create({
     *   data: {
     *     // ... data to create a ExpertSuperCategoryModel
     *   }
     * })
     * 
    **/
    create<T extends ExpertSuperCategoryModelCreateArgs>(
      args: SelectSubset<T, ExpertSuperCategoryModelCreateArgs>
    ): Prisma__ExpertSuperCategoryModelClient<ExpertSuperCategoryModelGetPayload<T>>

    /**
     * Create many ExpertSuperCategoryModels.
     *     @param {ExpertSuperCategoryModelCreateManyArgs} args - Arguments to create many ExpertSuperCategoryModels.
     *     @example
     *     // Create many ExpertSuperCategoryModels
     *     const expertSuperCategoryModel = await prisma.expertSuperCategoryModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExpertSuperCategoryModelCreateManyArgs>(
      args?: SelectSubset<T, ExpertSuperCategoryModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExpertSuperCategoryModel.
     * @param {ExpertSuperCategoryModelDeleteArgs} args - Arguments to delete one ExpertSuperCategoryModel.
     * @example
     * // Delete one ExpertSuperCategoryModel
     * const ExpertSuperCategoryModel = await prisma.expertSuperCategoryModel.delete({
     *   where: {
     *     // ... filter to delete one ExpertSuperCategoryModel
     *   }
     * })
     * 
    **/
    delete<T extends ExpertSuperCategoryModelDeleteArgs>(
      args: SelectSubset<T, ExpertSuperCategoryModelDeleteArgs>
    ): Prisma__ExpertSuperCategoryModelClient<ExpertSuperCategoryModelGetPayload<T>>

    /**
     * Update one ExpertSuperCategoryModel.
     * @param {ExpertSuperCategoryModelUpdateArgs} args - Arguments to update one ExpertSuperCategoryModel.
     * @example
     * // Update one ExpertSuperCategoryModel
     * const expertSuperCategoryModel = await prisma.expertSuperCategoryModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExpertSuperCategoryModelUpdateArgs>(
      args: SelectSubset<T, ExpertSuperCategoryModelUpdateArgs>
    ): Prisma__ExpertSuperCategoryModelClient<ExpertSuperCategoryModelGetPayload<T>>

    /**
     * Delete zero or more ExpertSuperCategoryModels.
     * @param {ExpertSuperCategoryModelDeleteManyArgs} args - Arguments to filter ExpertSuperCategoryModels to delete.
     * @example
     * // Delete a few ExpertSuperCategoryModels
     * const { count } = await prisma.expertSuperCategoryModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExpertSuperCategoryModelDeleteManyArgs>(
      args?: SelectSubset<T, ExpertSuperCategoryModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpertSuperCategoryModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertSuperCategoryModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpertSuperCategoryModels
     * const expertSuperCategoryModel = await prisma.expertSuperCategoryModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExpertSuperCategoryModelUpdateManyArgs>(
      args: SelectSubset<T, ExpertSuperCategoryModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExpertSuperCategoryModel.
     * @param {ExpertSuperCategoryModelUpsertArgs} args - Arguments to update or create a ExpertSuperCategoryModel.
     * @example
     * // Update or create a ExpertSuperCategoryModel
     * const expertSuperCategoryModel = await prisma.expertSuperCategoryModel.upsert({
     *   create: {
     *     // ... data to create a ExpertSuperCategoryModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpertSuperCategoryModel we want to update
     *   }
     * })
    **/
    upsert<T extends ExpertSuperCategoryModelUpsertArgs>(
      args: SelectSubset<T, ExpertSuperCategoryModelUpsertArgs>
    ): Prisma__ExpertSuperCategoryModelClient<ExpertSuperCategoryModelGetPayload<T>>

    /**
     * Count the number of ExpertSuperCategoryModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertSuperCategoryModelCountArgs} args - Arguments to filter ExpertSuperCategoryModels to count.
     * @example
     * // Count the number of ExpertSuperCategoryModels
     * const count = await prisma.expertSuperCategoryModel.count({
     *   where: {
     *     // ... the filter for the ExpertSuperCategoryModels we want to count
     *   }
     * })
    **/
    count<T extends ExpertSuperCategoryModelCountArgs>(
      args?: Subset<T, ExpertSuperCategoryModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpertSuperCategoryModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpertSuperCategoryModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertSuperCategoryModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpertSuperCategoryModelAggregateArgs>(args: Subset<T, ExpertSuperCategoryModelAggregateArgs>): Prisma.PrismaPromise<GetExpertSuperCategoryModelAggregateType<T>>

    /**
     * Group by ExpertSuperCategoryModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertSuperCategoryModelGroupByArgs} args - Group by arguments.
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
      T extends ExpertSuperCategoryModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpertSuperCategoryModelGroupByArgs['orderBy'] }
        : { orderBy?: ExpertSuperCategoryModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpertSuperCategoryModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpertSuperCategoryModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpertSuperCategoryModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExpertSuperCategoryModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    subs<T extends ExpertSuperCategoryModel$subsArgs= {}>(args?: Subset<T, ExpertSuperCategoryModel$subsArgs>): Prisma.PrismaPromise<Array<ExpertSubCategoryModelGetPayload<T>>| Null>;

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
   * ExpertSuperCategoryModel base type for findUnique actions
   */
  export type ExpertSuperCategoryModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ExpertSuperCategoryModel
     */
    select?: ExpertSuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSuperCategoryModelInclude | null
    /**
     * Filter, which ExpertSuperCategoryModel to fetch.
     */
    where: ExpertSuperCategoryModelWhereUniqueInput
  }

  /**
   * ExpertSuperCategoryModel findUnique
   */
  export interface ExpertSuperCategoryModelFindUniqueArgs extends ExpertSuperCategoryModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ExpertSuperCategoryModel findUniqueOrThrow
   */
  export type ExpertSuperCategoryModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ExpertSuperCategoryModel
     */
    select?: ExpertSuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSuperCategoryModelInclude | null
    /**
     * Filter, which ExpertSuperCategoryModel to fetch.
     */
    where: ExpertSuperCategoryModelWhereUniqueInput
  }


  /**
   * ExpertSuperCategoryModel base type for findFirst actions
   */
  export type ExpertSuperCategoryModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ExpertSuperCategoryModel
     */
    select?: ExpertSuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSuperCategoryModelInclude | null
    /**
     * Filter, which ExpertSuperCategoryModel to fetch.
     */
    where?: ExpertSuperCategoryModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertSuperCategoryModels to fetch.
     */
    orderBy?: Enumerable<ExpertSuperCategoryModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpertSuperCategoryModels.
     */
    cursor?: ExpertSuperCategoryModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertSuperCategoryModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertSuperCategoryModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpertSuperCategoryModels.
     */
    distinct?: Enumerable<ExpertSuperCategoryModelScalarFieldEnum>
  }

  /**
   * ExpertSuperCategoryModel findFirst
   */
  export interface ExpertSuperCategoryModelFindFirstArgs extends ExpertSuperCategoryModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ExpertSuperCategoryModel findFirstOrThrow
   */
  export type ExpertSuperCategoryModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ExpertSuperCategoryModel
     */
    select?: ExpertSuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSuperCategoryModelInclude | null
    /**
     * Filter, which ExpertSuperCategoryModel to fetch.
     */
    where?: ExpertSuperCategoryModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertSuperCategoryModels to fetch.
     */
    orderBy?: Enumerable<ExpertSuperCategoryModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpertSuperCategoryModels.
     */
    cursor?: ExpertSuperCategoryModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertSuperCategoryModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertSuperCategoryModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpertSuperCategoryModels.
     */
    distinct?: Enumerable<ExpertSuperCategoryModelScalarFieldEnum>
  }


  /**
   * ExpertSuperCategoryModel findMany
   */
  export type ExpertSuperCategoryModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the ExpertSuperCategoryModel
     */
    select?: ExpertSuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSuperCategoryModelInclude | null
    /**
     * Filter, which ExpertSuperCategoryModels to fetch.
     */
    where?: ExpertSuperCategoryModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertSuperCategoryModels to fetch.
     */
    orderBy?: Enumerable<ExpertSuperCategoryModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpertSuperCategoryModels.
     */
    cursor?: ExpertSuperCategoryModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertSuperCategoryModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertSuperCategoryModels.
     */
    skip?: number
    distinct?: Enumerable<ExpertSuperCategoryModelScalarFieldEnum>
  }


  /**
   * ExpertSuperCategoryModel create
   */
  export type ExpertSuperCategoryModelCreateArgs = {
    /**
     * Select specific fields to fetch from the ExpertSuperCategoryModel
     */
    select?: ExpertSuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSuperCategoryModelInclude | null
    /**
     * The data needed to create a ExpertSuperCategoryModel.
     */
    data: XOR<ExpertSuperCategoryModelCreateInput, ExpertSuperCategoryModelUncheckedCreateInput>
  }


  /**
   * ExpertSuperCategoryModel createMany
   */
  export type ExpertSuperCategoryModelCreateManyArgs = {
    /**
     * The data used to create many ExpertSuperCategoryModels.
     */
    data: Enumerable<ExpertSuperCategoryModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ExpertSuperCategoryModel update
   */
  export type ExpertSuperCategoryModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the ExpertSuperCategoryModel
     */
    select?: ExpertSuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSuperCategoryModelInclude | null
    /**
     * The data needed to update a ExpertSuperCategoryModel.
     */
    data: XOR<ExpertSuperCategoryModelUpdateInput, ExpertSuperCategoryModelUncheckedUpdateInput>
    /**
     * Choose, which ExpertSuperCategoryModel to update.
     */
    where: ExpertSuperCategoryModelWhereUniqueInput
  }


  /**
   * ExpertSuperCategoryModel updateMany
   */
  export type ExpertSuperCategoryModelUpdateManyArgs = {
    /**
     * The data used to update ExpertSuperCategoryModels.
     */
    data: XOR<ExpertSuperCategoryModelUpdateManyMutationInput, ExpertSuperCategoryModelUncheckedUpdateManyInput>
    /**
     * Filter which ExpertSuperCategoryModels to update
     */
    where?: ExpertSuperCategoryModelWhereInput
  }


  /**
   * ExpertSuperCategoryModel upsert
   */
  export type ExpertSuperCategoryModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the ExpertSuperCategoryModel
     */
    select?: ExpertSuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSuperCategoryModelInclude | null
    /**
     * The filter to search for the ExpertSuperCategoryModel to update in case it exists.
     */
    where: ExpertSuperCategoryModelWhereUniqueInput
    /**
     * In case the ExpertSuperCategoryModel found by the `where` argument doesn't exist, create a new ExpertSuperCategoryModel with this data.
     */
    create: XOR<ExpertSuperCategoryModelCreateInput, ExpertSuperCategoryModelUncheckedCreateInput>
    /**
     * In case the ExpertSuperCategoryModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpertSuperCategoryModelUpdateInput, ExpertSuperCategoryModelUncheckedUpdateInput>
  }


  /**
   * ExpertSuperCategoryModel delete
   */
  export type ExpertSuperCategoryModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the ExpertSuperCategoryModel
     */
    select?: ExpertSuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSuperCategoryModelInclude | null
    /**
     * Filter which ExpertSuperCategoryModel to delete.
     */
    where: ExpertSuperCategoryModelWhereUniqueInput
  }


  /**
   * ExpertSuperCategoryModel deleteMany
   */
  export type ExpertSuperCategoryModelDeleteManyArgs = {
    /**
     * Filter which ExpertSuperCategoryModels to delete
     */
    where?: ExpertSuperCategoryModelWhereInput
  }


  /**
   * ExpertSuperCategoryModel.subs
   */
  export type ExpertSuperCategoryModel$subsArgs = {
    /**
     * Select specific fields to fetch from the ExpertSubCategoryModel
     */
    select?: ExpertSubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSubCategoryModelInclude | null
    where?: ExpertSubCategoryModelWhereInput
    orderBy?: Enumerable<ExpertSubCategoryModelOrderByWithRelationInput>
    cursor?: ExpertSubCategoryModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ExpertSubCategoryModelScalarFieldEnum>
  }


  /**
   * ExpertSuperCategoryModel without action
   */
  export type ExpertSuperCategoryModelArgs = {
    /**
     * Select specific fields to fetch from the ExpertSuperCategoryModel
     */
    select?: ExpertSuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpertSuperCategoryModelInclude | null
  }



  /**
   * Model AgreementModel
   */


  export type AggregateAgreementModel = {
    _count: AgreementModelCountAggregateOutputType | null
    _min: AgreementModelMinAggregateOutputType | null
    _max: AgreementModelMaxAggregateOutputType | null
  }

  export type AgreementModelMinAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    title: string | null
    content: string | null
    user_type: AgreementUserType | null
  }

  export type AgreementModelMaxAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    title: string | null
    content: string | null
    user_type: AgreementUserType | null
  }

  export type AgreementModelCountAggregateOutputType = {
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    id: number
    title: number
    content: number
    user_type: number
    _all: number
  }


  export type AgreementModelMinAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    title?: true
    content?: true
    user_type?: true
  }

  export type AgreementModelMaxAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    title?: true
    content?: true
    user_type?: true
  }

  export type AgreementModelCountAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    title?: true
    content?: true
    user_type?: true
    _all?: true
  }

  export type AgreementModelAggregateArgs = {
    /**
     * Filter which AgreementModel to aggregate.
     */
    where?: AgreementModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgreementModels to fetch.
     */
    orderBy?: Enumerable<AgreementModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgreementModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgreementModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgreementModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgreementModels
    **/
    _count?: true | AgreementModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgreementModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgreementModelMaxAggregateInputType
  }

  export type GetAgreementModelAggregateType<T extends AgreementModelAggregateArgs> = {
        [P in keyof T & keyof AggregateAgreementModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgreementModel[P]>
      : GetScalarType<T[P], AggregateAgreementModel[P]>
  }




  export type AgreementModelGroupByArgs = {
    where?: AgreementModelWhereInput
    orderBy?: Enumerable<AgreementModelOrderByWithAggregationInput>
    by: AgreementModelScalarFieldEnum[]
    having?: AgreementModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgreementModelCountAggregateInputType | true
    _min?: AgreementModelMinAggregateInputType
    _max?: AgreementModelMaxAggregateInputType
  }


  export type AgreementModelGroupByOutputType = {
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    id: string
    title: string
    content: string
    user_type: AgreementUserType
    _count: AgreementModelCountAggregateOutputType | null
    _min: AgreementModelMinAggregateOutputType | null
    _max: AgreementModelMaxAggregateOutputType | null
  }

  type GetAgreementModelGroupByPayload<T extends AgreementModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AgreementModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgreementModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgreementModelGroupByOutputType[P]>
            : GetScalarType<T[P], AgreementModelGroupByOutputType[P]>
        }
      >
    >


  export type AgreementModelSelect = {
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    id?: boolean
    title?: boolean
    content?: boolean
    user_type?: boolean
    acceptances?: boolean | AgreementModel$acceptancesArgs
    _count?: boolean | AgreementModelCountOutputTypeArgs
  }


  export type AgreementModelInclude = {
    acceptances?: boolean | AgreementModel$acceptancesArgs
    _count?: boolean | AgreementModelCountOutputTypeArgs
  }

  export type AgreementModelGetPayload<S extends boolean | null | undefined | AgreementModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AgreementModel :
    S extends undefined ? never :
    S extends { include: any } & (AgreementModelArgs | AgreementModelFindManyArgs)
    ? AgreementModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'acceptances' ? Array < AgreementAcceptanceModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? AgreementModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AgreementModelArgs | AgreementModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'acceptances' ? Array < AgreementAcceptanceModelGetPayload<S['select'][P]>>  :
        P extends '_count' ? AgreementModelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof AgreementModel ? AgreementModel[P] : never
  } 
      : AgreementModel


  type AgreementModelCountArgs = 
    Omit<AgreementModelFindManyArgs, 'select' | 'include'> & {
      select?: AgreementModelCountAggregateInputType | true
    }

  export interface AgreementModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one AgreementModel that matches the filter.
     * @param {AgreementModelFindUniqueArgs} args - Arguments to find a AgreementModel
     * @example
     * // Get one AgreementModel
     * const agreementModel = await prisma.agreementModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AgreementModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AgreementModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AgreementModel'> extends True ? Prisma__AgreementModelClient<AgreementModelGetPayload<T>> : Prisma__AgreementModelClient<AgreementModelGetPayload<T> | null, null>

    /**
     * Find one AgreementModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AgreementModelFindUniqueOrThrowArgs} args - Arguments to find a AgreementModel
     * @example
     * // Get one AgreementModel
     * const agreementModel = await prisma.agreementModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AgreementModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AgreementModelFindUniqueOrThrowArgs>
    ): Prisma__AgreementModelClient<AgreementModelGetPayload<T>>

    /**
     * Find the first AgreementModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementModelFindFirstArgs} args - Arguments to find a AgreementModel
     * @example
     * // Get one AgreementModel
     * const agreementModel = await prisma.agreementModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AgreementModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AgreementModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AgreementModel'> extends True ? Prisma__AgreementModelClient<AgreementModelGetPayload<T>> : Prisma__AgreementModelClient<AgreementModelGetPayload<T> | null, null>

    /**
     * Find the first AgreementModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementModelFindFirstOrThrowArgs} args - Arguments to find a AgreementModel
     * @example
     * // Get one AgreementModel
     * const agreementModel = await prisma.agreementModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AgreementModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AgreementModelFindFirstOrThrowArgs>
    ): Prisma__AgreementModelClient<AgreementModelGetPayload<T>>

    /**
     * Find zero or more AgreementModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgreementModels
     * const agreementModels = await prisma.agreementModel.findMany()
     * 
     * // Get first 10 AgreementModels
     * const agreementModels = await prisma.agreementModel.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const agreementModelWithCreated_atOnly = await prisma.agreementModel.findMany({ select: { created_at: true } })
     * 
    **/
    findMany<T extends AgreementModelFindManyArgs>(
      args?: SelectSubset<T, AgreementModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<AgreementModelGetPayload<T>>>

    /**
     * Create a AgreementModel.
     * @param {AgreementModelCreateArgs} args - Arguments to create a AgreementModel.
     * @example
     * // Create one AgreementModel
     * const AgreementModel = await prisma.agreementModel.create({
     *   data: {
     *     // ... data to create a AgreementModel
     *   }
     * })
     * 
    **/
    create<T extends AgreementModelCreateArgs>(
      args: SelectSubset<T, AgreementModelCreateArgs>
    ): Prisma__AgreementModelClient<AgreementModelGetPayload<T>>

    /**
     * Create many AgreementModels.
     *     @param {AgreementModelCreateManyArgs} args - Arguments to create many AgreementModels.
     *     @example
     *     // Create many AgreementModels
     *     const agreementModel = await prisma.agreementModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AgreementModelCreateManyArgs>(
      args?: SelectSubset<T, AgreementModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AgreementModel.
     * @param {AgreementModelDeleteArgs} args - Arguments to delete one AgreementModel.
     * @example
     * // Delete one AgreementModel
     * const AgreementModel = await prisma.agreementModel.delete({
     *   where: {
     *     // ... filter to delete one AgreementModel
     *   }
     * })
     * 
    **/
    delete<T extends AgreementModelDeleteArgs>(
      args: SelectSubset<T, AgreementModelDeleteArgs>
    ): Prisma__AgreementModelClient<AgreementModelGetPayload<T>>

    /**
     * Update one AgreementModel.
     * @param {AgreementModelUpdateArgs} args - Arguments to update one AgreementModel.
     * @example
     * // Update one AgreementModel
     * const agreementModel = await prisma.agreementModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AgreementModelUpdateArgs>(
      args: SelectSubset<T, AgreementModelUpdateArgs>
    ): Prisma__AgreementModelClient<AgreementModelGetPayload<T>>

    /**
     * Delete zero or more AgreementModels.
     * @param {AgreementModelDeleteManyArgs} args - Arguments to filter AgreementModels to delete.
     * @example
     * // Delete a few AgreementModels
     * const { count } = await prisma.agreementModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AgreementModelDeleteManyArgs>(
      args?: SelectSubset<T, AgreementModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgreementModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgreementModels
     * const agreementModel = await prisma.agreementModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AgreementModelUpdateManyArgs>(
      args: SelectSubset<T, AgreementModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AgreementModel.
     * @param {AgreementModelUpsertArgs} args - Arguments to update or create a AgreementModel.
     * @example
     * // Update or create a AgreementModel
     * const agreementModel = await prisma.agreementModel.upsert({
     *   create: {
     *     // ... data to create a AgreementModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgreementModel we want to update
     *   }
     * })
    **/
    upsert<T extends AgreementModelUpsertArgs>(
      args: SelectSubset<T, AgreementModelUpsertArgs>
    ): Prisma__AgreementModelClient<AgreementModelGetPayload<T>>

    /**
     * Count the number of AgreementModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementModelCountArgs} args - Arguments to filter AgreementModels to count.
     * @example
     * // Count the number of AgreementModels
     * const count = await prisma.agreementModel.count({
     *   where: {
     *     // ... the filter for the AgreementModels we want to count
     *   }
     * })
    **/
    count<T extends AgreementModelCountArgs>(
      args?: Subset<T, AgreementModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgreementModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgreementModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgreementModelAggregateArgs>(args: Subset<T, AgreementModelAggregateArgs>): Prisma.PrismaPromise<GetAgreementModelAggregateType<T>>

    /**
     * Group by AgreementModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementModelGroupByArgs} args - Group by arguments.
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
      T extends AgreementModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgreementModelGroupByArgs['orderBy'] }
        : { orderBy?: AgreementModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgreementModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgreementModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AgreementModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AgreementModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    acceptances<T extends AgreementModel$acceptancesArgs= {}>(args?: Subset<T, AgreementModel$acceptancesArgs>): Prisma.PrismaPromise<Array<AgreementAcceptanceModelGetPayload<T>>| Null>;

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
   * AgreementModel base type for findUnique actions
   */
  export type AgreementModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AgreementModel
     */
    select?: AgreementModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementModelInclude | null
    /**
     * Filter, which AgreementModel to fetch.
     */
    where: AgreementModelWhereUniqueInput
  }

  /**
   * AgreementModel findUnique
   */
  export interface AgreementModelFindUniqueArgs extends AgreementModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AgreementModel findUniqueOrThrow
   */
  export type AgreementModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AgreementModel
     */
    select?: AgreementModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementModelInclude | null
    /**
     * Filter, which AgreementModel to fetch.
     */
    where: AgreementModelWhereUniqueInput
  }


  /**
   * AgreementModel base type for findFirst actions
   */
  export type AgreementModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AgreementModel
     */
    select?: AgreementModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementModelInclude | null
    /**
     * Filter, which AgreementModel to fetch.
     */
    where?: AgreementModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgreementModels to fetch.
     */
    orderBy?: Enumerable<AgreementModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgreementModels.
     */
    cursor?: AgreementModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgreementModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgreementModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgreementModels.
     */
    distinct?: Enumerable<AgreementModelScalarFieldEnum>
  }

  /**
   * AgreementModel findFirst
   */
  export interface AgreementModelFindFirstArgs extends AgreementModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AgreementModel findFirstOrThrow
   */
  export type AgreementModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AgreementModel
     */
    select?: AgreementModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementModelInclude | null
    /**
     * Filter, which AgreementModel to fetch.
     */
    where?: AgreementModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgreementModels to fetch.
     */
    orderBy?: Enumerable<AgreementModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgreementModels.
     */
    cursor?: AgreementModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgreementModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgreementModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgreementModels.
     */
    distinct?: Enumerable<AgreementModelScalarFieldEnum>
  }


  /**
   * AgreementModel findMany
   */
  export type AgreementModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the AgreementModel
     */
    select?: AgreementModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementModelInclude | null
    /**
     * Filter, which AgreementModels to fetch.
     */
    where?: AgreementModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgreementModels to fetch.
     */
    orderBy?: Enumerable<AgreementModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgreementModels.
     */
    cursor?: AgreementModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgreementModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgreementModels.
     */
    skip?: number
    distinct?: Enumerable<AgreementModelScalarFieldEnum>
  }


  /**
   * AgreementModel create
   */
  export type AgreementModelCreateArgs = {
    /**
     * Select specific fields to fetch from the AgreementModel
     */
    select?: AgreementModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementModelInclude | null
    /**
     * The data needed to create a AgreementModel.
     */
    data: XOR<AgreementModelCreateInput, AgreementModelUncheckedCreateInput>
  }


  /**
   * AgreementModel createMany
   */
  export type AgreementModelCreateManyArgs = {
    /**
     * The data used to create many AgreementModels.
     */
    data: Enumerable<AgreementModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AgreementModel update
   */
  export type AgreementModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the AgreementModel
     */
    select?: AgreementModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementModelInclude | null
    /**
     * The data needed to update a AgreementModel.
     */
    data: XOR<AgreementModelUpdateInput, AgreementModelUncheckedUpdateInput>
    /**
     * Choose, which AgreementModel to update.
     */
    where: AgreementModelWhereUniqueInput
  }


  /**
   * AgreementModel updateMany
   */
  export type AgreementModelUpdateManyArgs = {
    /**
     * The data used to update AgreementModels.
     */
    data: XOR<AgreementModelUpdateManyMutationInput, AgreementModelUncheckedUpdateManyInput>
    /**
     * Filter which AgreementModels to update
     */
    where?: AgreementModelWhereInput
  }


  /**
   * AgreementModel upsert
   */
  export type AgreementModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the AgreementModel
     */
    select?: AgreementModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementModelInclude | null
    /**
     * The filter to search for the AgreementModel to update in case it exists.
     */
    where: AgreementModelWhereUniqueInput
    /**
     * In case the AgreementModel found by the `where` argument doesn't exist, create a new AgreementModel with this data.
     */
    create: XOR<AgreementModelCreateInput, AgreementModelUncheckedCreateInput>
    /**
     * In case the AgreementModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgreementModelUpdateInput, AgreementModelUncheckedUpdateInput>
  }


  /**
   * AgreementModel delete
   */
  export type AgreementModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the AgreementModel
     */
    select?: AgreementModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementModelInclude | null
    /**
     * Filter which AgreementModel to delete.
     */
    where: AgreementModelWhereUniqueInput
  }


  /**
   * AgreementModel deleteMany
   */
  export type AgreementModelDeleteManyArgs = {
    /**
     * Filter which AgreementModels to delete
     */
    where?: AgreementModelWhereInput
  }


  /**
   * AgreementModel.acceptances
   */
  export type AgreementModel$acceptancesArgs = {
    /**
     * Select specific fields to fetch from the AgreementAcceptanceModel
     */
    select?: AgreementAcceptanceModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementAcceptanceModelInclude | null
    where?: AgreementAcceptanceModelWhereInput
    orderBy?: Enumerable<AgreementAcceptanceModelOrderByWithRelationInput>
    cursor?: AgreementAcceptanceModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AgreementAcceptanceModelScalarFieldEnum>
  }


  /**
   * AgreementModel without action
   */
  export type AgreementModelArgs = {
    /**
     * Select specific fields to fetch from the AgreementModel
     */
    select?: AgreementModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementModelInclude | null
  }



  /**
   * Model AgreementAcceptanceModel
   */


  export type AggregateAgreementAcceptanceModel = {
    _count: AgreementAcceptanceModelCountAggregateOutputType | null
    _min: AgreementAcceptanceModelMinAggregateOutputType | null
    _max: AgreementAcceptanceModelMaxAggregateOutputType | null
  }

  export type AgreementAcceptanceModelMinAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    user_id: string | null
    agreement_id: string | null
  }

  export type AgreementAcceptanceModelMaxAggregateOutputType = {
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    id: string | null
    user_id: string | null
    agreement_id: string | null
  }

  export type AgreementAcceptanceModelCountAggregateOutputType = {
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    id: number
    user_id: number
    agreement_id: number
    _all: number
  }


  export type AgreementAcceptanceModelMinAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    user_id?: true
    agreement_id?: true
  }

  export type AgreementAcceptanceModelMaxAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    user_id?: true
    agreement_id?: true
  }

  export type AgreementAcceptanceModelCountAggregateInputType = {
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    id?: true
    user_id?: true
    agreement_id?: true
    _all?: true
  }

  export type AgreementAcceptanceModelAggregateArgs = {
    /**
     * Filter which AgreementAcceptanceModel to aggregate.
     */
    where?: AgreementAcceptanceModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgreementAcceptanceModels to fetch.
     */
    orderBy?: Enumerable<AgreementAcceptanceModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgreementAcceptanceModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgreementAcceptanceModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgreementAcceptanceModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgreementAcceptanceModels
    **/
    _count?: true | AgreementAcceptanceModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgreementAcceptanceModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgreementAcceptanceModelMaxAggregateInputType
  }

  export type GetAgreementAcceptanceModelAggregateType<T extends AgreementAcceptanceModelAggregateArgs> = {
        [P in keyof T & keyof AggregateAgreementAcceptanceModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgreementAcceptanceModel[P]>
      : GetScalarType<T[P], AggregateAgreementAcceptanceModel[P]>
  }




  export type AgreementAcceptanceModelGroupByArgs = {
    where?: AgreementAcceptanceModelWhereInput
    orderBy?: Enumerable<AgreementAcceptanceModelOrderByWithAggregationInput>
    by: AgreementAcceptanceModelScalarFieldEnum[]
    having?: AgreementAcceptanceModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgreementAcceptanceModelCountAggregateInputType | true
    _min?: AgreementAcceptanceModelMinAggregateInputType
    _max?: AgreementAcceptanceModelMaxAggregateInputType
  }


  export type AgreementAcceptanceModelGroupByOutputType = {
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    id: string
    user_id: string
    agreement_id: string
    _count: AgreementAcceptanceModelCountAggregateOutputType | null
    _min: AgreementAcceptanceModelMinAggregateOutputType | null
    _max: AgreementAcceptanceModelMaxAggregateOutputType | null
  }

  type GetAgreementAcceptanceModelGroupByPayload<T extends AgreementAcceptanceModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AgreementAcceptanceModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgreementAcceptanceModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgreementAcceptanceModelGroupByOutputType[P]>
            : GetScalarType<T[P], AgreementAcceptanceModelGroupByOutputType[P]>
        }
      >
    >


  export type AgreementAcceptanceModelSelect = {
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    id?: boolean
    user_id?: boolean
    agreement_id?: boolean
    user?: boolean | UserModelArgs
    agreement?: boolean | AgreementModelArgs
  }


  export type AgreementAcceptanceModelInclude = {
    user?: boolean | UserModelArgs
    agreement?: boolean | AgreementModelArgs
  }

  export type AgreementAcceptanceModelGetPayload<S extends boolean | null | undefined | AgreementAcceptanceModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AgreementAcceptanceModel :
    S extends undefined ? never :
    S extends { include: any } & (AgreementAcceptanceModelArgs | AgreementAcceptanceModelFindManyArgs)
    ? AgreementAcceptanceModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserModelGetPayload<S['include'][P]> :
        P extends 'agreement' ? AgreementModelGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AgreementAcceptanceModelArgs | AgreementAcceptanceModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserModelGetPayload<S['select'][P]> :
        P extends 'agreement' ? AgreementModelGetPayload<S['select'][P]> :  P extends keyof AgreementAcceptanceModel ? AgreementAcceptanceModel[P] : never
  } 
      : AgreementAcceptanceModel


  type AgreementAcceptanceModelCountArgs = 
    Omit<AgreementAcceptanceModelFindManyArgs, 'select' | 'include'> & {
      select?: AgreementAcceptanceModelCountAggregateInputType | true
    }

  export interface AgreementAcceptanceModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one AgreementAcceptanceModel that matches the filter.
     * @param {AgreementAcceptanceModelFindUniqueArgs} args - Arguments to find a AgreementAcceptanceModel
     * @example
     * // Get one AgreementAcceptanceModel
     * const agreementAcceptanceModel = await prisma.agreementAcceptanceModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AgreementAcceptanceModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AgreementAcceptanceModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AgreementAcceptanceModel'> extends True ? Prisma__AgreementAcceptanceModelClient<AgreementAcceptanceModelGetPayload<T>> : Prisma__AgreementAcceptanceModelClient<AgreementAcceptanceModelGetPayload<T> | null, null>

    /**
     * Find one AgreementAcceptanceModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AgreementAcceptanceModelFindUniqueOrThrowArgs} args - Arguments to find a AgreementAcceptanceModel
     * @example
     * // Get one AgreementAcceptanceModel
     * const agreementAcceptanceModel = await prisma.agreementAcceptanceModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AgreementAcceptanceModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AgreementAcceptanceModelFindUniqueOrThrowArgs>
    ): Prisma__AgreementAcceptanceModelClient<AgreementAcceptanceModelGetPayload<T>>

    /**
     * Find the first AgreementAcceptanceModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementAcceptanceModelFindFirstArgs} args - Arguments to find a AgreementAcceptanceModel
     * @example
     * // Get one AgreementAcceptanceModel
     * const agreementAcceptanceModel = await prisma.agreementAcceptanceModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AgreementAcceptanceModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AgreementAcceptanceModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AgreementAcceptanceModel'> extends True ? Prisma__AgreementAcceptanceModelClient<AgreementAcceptanceModelGetPayload<T>> : Prisma__AgreementAcceptanceModelClient<AgreementAcceptanceModelGetPayload<T> | null, null>

    /**
     * Find the first AgreementAcceptanceModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementAcceptanceModelFindFirstOrThrowArgs} args - Arguments to find a AgreementAcceptanceModel
     * @example
     * // Get one AgreementAcceptanceModel
     * const agreementAcceptanceModel = await prisma.agreementAcceptanceModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AgreementAcceptanceModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AgreementAcceptanceModelFindFirstOrThrowArgs>
    ): Prisma__AgreementAcceptanceModelClient<AgreementAcceptanceModelGetPayload<T>>

    /**
     * Find zero or more AgreementAcceptanceModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementAcceptanceModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgreementAcceptanceModels
     * const agreementAcceptanceModels = await prisma.agreementAcceptanceModel.findMany()
     * 
     * // Get first 10 AgreementAcceptanceModels
     * const agreementAcceptanceModels = await prisma.agreementAcceptanceModel.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const agreementAcceptanceModelWithCreated_atOnly = await prisma.agreementAcceptanceModel.findMany({ select: { created_at: true } })
     * 
    **/
    findMany<T extends AgreementAcceptanceModelFindManyArgs>(
      args?: SelectSubset<T, AgreementAcceptanceModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<AgreementAcceptanceModelGetPayload<T>>>

    /**
     * Create a AgreementAcceptanceModel.
     * @param {AgreementAcceptanceModelCreateArgs} args - Arguments to create a AgreementAcceptanceModel.
     * @example
     * // Create one AgreementAcceptanceModel
     * const AgreementAcceptanceModel = await prisma.agreementAcceptanceModel.create({
     *   data: {
     *     // ... data to create a AgreementAcceptanceModel
     *   }
     * })
     * 
    **/
    create<T extends AgreementAcceptanceModelCreateArgs>(
      args: SelectSubset<T, AgreementAcceptanceModelCreateArgs>
    ): Prisma__AgreementAcceptanceModelClient<AgreementAcceptanceModelGetPayload<T>>

    /**
     * Create many AgreementAcceptanceModels.
     *     @param {AgreementAcceptanceModelCreateManyArgs} args - Arguments to create many AgreementAcceptanceModels.
     *     @example
     *     // Create many AgreementAcceptanceModels
     *     const agreementAcceptanceModel = await prisma.agreementAcceptanceModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AgreementAcceptanceModelCreateManyArgs>(
      args?: SelectSubset<T, AgreementAcceptanceModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AgreementAcceptanceModel.
     * @param {AgreementAcceptanceModelDeleteArgs} args - Arguments to delete one AgreementAcceptanceModel.
     * @example
     * // Delete one AgreementAcceptanceModel
     * const AgreementAcceptanceModel = await prisma.agreementAcceptanceModel.delete({
     *   where: {
     *     // ... filter to delete one AgreementAcceptanceModel
     *   }
     * })
     * 
    **/
    delete<T extends AgreementAcceptanceModelDeleteArgs>(
      args: SelectSubset<T, AgreementAcceptanceModelDeleteArgs>
    ): Prisma__AgreementAcceptanceModelClient<AgreementAcceptanceModelGetPayload<T>>

    /**
     * Update one AgreementAcceptanceModel.
     * @param {AgreementAcceptanceModelUpdateArgs} args - Arguments to update one AgreementAcceptanceModel.
     * @example
     * // Update one AgreementAcceptanceModel
     * const agreementAcceptanceModel = await prisma.agreementAcceptanceModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AgreementAcceptanceModelUpdateArgs>(
      args: SelectSubset<T, AgreementAcceptanceModelUpdateArgs>
    ): Prisma__AgreementAcceptanceModelClient<AgreementAcceptanceModelGetPayload<T>>

    /**
     * Delete zero or more AgreementAcceptanceModels.
     * @param {AgreementAcceptanceModelDeleteManyArgs} args - Arguments to filter AgreementAcceptanceModels to delete.
     * @example
     * // Delete a few AgreementAcceptanceModels
     * const { count } = await prisma.agreementAcceptanceModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AgreementAcceptanceModelDeleteManyArgs>(
      args?: SelectSubset<T, AgreementAcceptanceModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgreementAcceptanceModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementAcceptanceModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgreementAcceptanceModels
     * const agreementAcceptanceModel = await prisma.agreementAcceptanceModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AgreementAcceptanceModelUpdateManyArgs>(
      args: SelectSubset<T, AgreementAcceptanceModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AgreementAcceptanceModel.
     * @param {AgreementAcceptanceModelUpsertArgs} args - Arguments to update or create a AgreementAcceptanceModel.
     * @example
     * // Update or create a AgreementAcceptanceModel
     * const agreementAcceptanceModel = await prisma.agreementAcceptanceModel.upsert({
     *   create: {
     *     // ... data to create a AgreementAcceptanceModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgreementAcceptanceModel we want to update
     *   }
     * })
    **/
    upsert<T extends AgreementAcceptanceModelUpsertArgs>(
      args: SelectSubset<T, AgreementAcceptanceModelUpsertArgs>
    ): Prisma__AgreementAcceptanceModelClient<AgreementAcceptanceModelGetPayload<T>>

    /**
     * Count the number of AgreementAcceptanceModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementAcceptanceModelCountArgs} args - Arguments to filter AgreementAcceptanceModels to count.
     * @example
     * // Count the number of AgreementAcceptanceModels
     * const count = await prisma.agreementAcceptanceModel.count({
     *   where: {
     *     // ... the filter for the AgreementAcceptanceModels we want to count
     *   }
     * })
    **/
    count<T extends AgreementAcceptanceModelCountArgs>(
      args?: Subset<T, AgreementAcceptanceModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgreementAcceptanceModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgreementAcceptanceModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementAcceptanceModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgreementAcceptanceModelAggregateArgs>(args: Subset<T, AgreementAcceptanceModelAggregateArgs>): Prisma.PrismaPromise<GetAgreementAcceptanceModelAggregateType<T>>

    /**
     * Group by AgreementAcceptanceModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementAcceptanceModelGroupByArgs} args - Group by arguments.
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
      T extends AgreementAcceptanceModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgreementAcceptanceModelGroupByArgs['orderBy'] }
        : { orderBy?: AgreementAcceptanceModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgreementAcceptanceModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgreementAcceptanceModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AgreementAcceptanceModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AgreementAcceptanceModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    user<T extends UserModelArgs= {}>(args?: Subset<T, UserModelArgs>): Prisma__UserModelClient<UserModelGetPayload<T> | Null>;

    agreement<T extends AgreementModelArgs= {}>(args?: Subset<T, AgreementModelArgs>): Prisma__AgreementModelClient<AgreementModelGetPayload<T> | Null>;

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
   * AgreementAcceptanceModel base type for findUnique actions
   */
  export type AgreementAcceptanceModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AgreementAcceptanceModel
     */
    select?: AgreementAcceptanceModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementAcceptanceModelInclude | null
    /**
     * Filter, which AgreementAcceptanceModel to fetch.
     */
    where: AgreementAcceptanceModelWhereUniqueInput
  }

  /**
   * AgreementAcceptanceModel findUnique
   */
  export interface AgreementAcceptanceModelFindUniqueArgs extends AgreementAcceptanceModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AgreementAcceptanceModel findUniqueOrThrow
   */
  export type AgreementAcceptanceModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AgreementAcceptanceModel
     */
    select?: AgreementAcceptanceModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementAcceptanceModelInclude | null
    /**
     * Filter, which AgreementAcceptanceModel to fetch.
     */
    where: AgreementAcceptanceModelWhereUniqueInput
  }


  /**
   * AgreementAcceptanceModel base type for findFirst actions
   */
  export type AgreementAcceptanceModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AgreementAcceptanceModel
     */
    select?: AgreementAcceptanceModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementAcceptanceModelInclude | null
    /**
     * Filter, which AgreementAcceptanceModel to fetch.
     */
    where?: AgreementAcceptanceModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgreementAcceptanceModels to fetch.
     */
    orderBy?: Enumerable<AgreementAcceptanceModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgreementAcceptanceModels.
     */
    cursor?: AgreementAcceptanceModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgreementAcceptanceModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgreementAcceptanceModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgreementAcceptanceModels.
     */
    distinct?: Enumerable<AgreementAcceptanceModelScalarFieldEnum>
  }

  /**
   * AgreementAcceptanceModel findFirst
   */
  export interface AgreementAcceptanceModelFindFirstArgs extends AgreementAcceptanceModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AgreementAcceptanceModel findFirstOrThrow
   */
  export type AgreementAcceptanceModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AgreementAcceptanceModel
     */
    select?: AgreementAcceptanceModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementAcceptanceModelInclude | null
    /**
     * Filter, which AgreementAcceptanceModel to fetch.
     */
    where?: AgreementAcceptanceModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgreementAcceptanceModels to fetch.
     */
    orderBy?: Enumerable<AgreementAcceptanceModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgreementAcceptanceModels.
     */
    cursor?: AgreementAcceptanceModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgreementAcceptanceModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgreementAcceptanceModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgreementAcceptanceModels.
     */
    distinct?: Enumerable<AgreementAcceptanceModelScalarFieldEnum>
  }


  /**
   * AgreementAcceptanceModel findMany
   */
  export type AgreementAcceptanceModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the AgreementAcceptanceModel
     */
    select?: AgreementAcceptanceModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementAcceptanceModelInclude | null
    /**
     * Filter, which AgreementAcceptanceModels to fetch.
     */
    where?: AgreementAcceptanceModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgreementAcceptanceModels to fetch.
     */
    orderBy?: Enumerable<AgreementAcceptanceModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgreementAcceptanceModels.
     */
    cursor?: AgreementAcceptanceModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgreementAcceptanceModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgreementAcceptanceModels.
     */
    skip?: number
    distinct?: Enumerable<AgreementAcceptanceModelScalarFieldEnum>
  }


  /**
   * AgreementAcceptanceModel create
   */
  export type AgreementAcceptanceModelCreateArgs = {
    /**
     * Select specific fields to fetch from the AgreementAcceptanceModel
     */
    select?: AgreementAcceptanceModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementAcceptanceModelInclude | null
    /**
     * The data needed to create a AgreementAcceptanceModel.
     */
    data: XOR<AgreementAcceptanceModelCreateInput, AgreementAcceptanceModelUncheckedCreateInput>
  }


  /**
   * AgreementAcceptanceModel createMany
   */
  export type AgreementAcceptanceModelCreateManyArgs = {
    /**
     * The data used to create many AgreementAcceptanceModels.
     */
    data: Enumerable<AgreementAcceptanceModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AgreementAcceptanceModel update
   */
  export type AgreementAcceptanceModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the AgreementAcceptanceModel
     */
    select?: AgreementAcceptanceModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementAcceptanceModelInclude | null
    /**
     * The data needed to update a AgreementAcceptanceModel.
     */
    data: XOR<AgreementAcceptanceModelUpdateInput, AgreementAcceptanceModelUncheckedUpdateInput>
    /**
     * Choose, which AgreementAcceptanceModel to update.
     */
    where: AgreementAcceptanceModelWhereUniqueInput
  }


  /**
   * AgreementAcceptanceModel updateMany
   */
  export type AgreementAcceptanceModelUpdateManyArgs = {
    /**
     * The data used to update AgreementAcceptanceModels.
     */
    data: XOR<AgreementAcceptanceModelUpdateManyMutationInput, AgreementAcceptanceModelUncheckedUpdateManyInput>
    /**
     * Filter which AgreementAcceptanceModels to update
     */
    where?: AgreementAcceptanceModelWhereInput
  }


  /**
   * AgreementAcceptanceModel upsert
   */
  export type AgreementAcceptanceModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the AgreementAcceptanceModel
     */
    select?: AgreementAcceptanceModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementAcceptanceModelInclude | null
    /**
     * The filter to search for the AgreementAcceptanceModel to update in case it exists.
     */
    where: AgreementAcceptanceModelWhereUniqueInput
    /**
     * In case the AgreementAcceptanceModel found by the `where` argument doesn't exist, create a new AgreementAcceptanceModel with this data.
     */
    create: XOR<AgreementAcceptanceModelCreateInput, AgreementAcceptanceModelUncheckedCreateInput>
    /**
     * In case the AgreementAcceptanceModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgreementAcceptanceModelUpdateInput, AgreementAcceptanceModelUncheckedUpdateInput>
  }


  /**
   * AgreementAcceptanceModel delete
   */
  export type AgreementAcceptanceModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the AgreementAcceptanceModel
     */
    select?: AgreementAcceptanceModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementAcceptanceModelInclude | null
    /**
     * Filter which AgreementAcceptanceModel to delete.
     */
    where: AgreementAcceptanceModelWhereUniqueInput
  }


  /**
   * AgreementAcceptanceModel deleteMany
   */
  export type AgreementAcceptanceModelDeleteManyArgs = {
    /**
     * Filter which AgreementAcceptanceModels to delete
     */
    where?: AgreementAcceptanceModelWhereInput
  }


  /**
   * AgreementAcceptanceModel without action
   */
  export type AgreementAcceptanceModelArgs = {
    /**
     * Select specific fields to fetch from the AgreementAcceptanceModel
     */
    select?: AgreementAcceptanceModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgreementAcceptanceModelInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AgreementAcceptanceModelScalarFieldEnum: {
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    id: 'id',
    user_id: 'user_id',
    agreement_id: 'agreement_id'
  };

  export type AgreementAcceptanceModelScalarFieldEnum = (typeof AgreementAcceptanceModelScalarFieldEnum)[keyof typeof AgreementAcceptanceModelScalarFieldEnum]


  export const AgreementModelScalarFieldEnum: {
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    id: 'id',
    title: 'title',
    content: 'content',
    user_type: 'user_type'
  };

  export type AgreementModelScalarFieldEnum = (typeof AgreementModelScalarFieldEnum)[keyof typeof AgreementModelScalarFieldEnum]


  export const BusinessCertificationModelScalarFieldEnum: {
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    id: 'id',
    business_user_id: 'business_user_id',
    image_url: 'image_url'
  };

  export type BusinessCertificationModelScalarFieldEnum = (typeof BusinessCertificationModelScalarFieldEnum)[keyof typeof BusinessCertificationModelScalarFieldEnum]


  export const BusinessUserScalarFieldEnum: {
    id: 'id',
    is_verified: 'is_verified',
    introduction_title: 'introduction_title',
    introduction_content: 'introduction_content',
    phone: 'phone',
    address_first: 'address_first',
    address_second: 'address_second',
    profile_image_url: 'profile_image_url'
  };

  export type BusinessUserScalarFieldEnum = (typeof BusinessUserScalarFieldEnum)[keyof typeof BusinessUserScalarFieldEnum]


  export const CustomerModelScalarFieldEnum: {
    id: 'id',
    birth: 'birth',
    gender: 'gender',
    phone: 'phone',
    address_first: 'address_first',
    address_second: 'address_second',
    profile_image_url: 'profile_image_url'
  };

  export type CustomerModelScalarFieldEnum = (typeof CustomerModelScalarFieldEnum)[keyof typeof CustomerModelScalarFieldEnum]


  export const ExpertSubCategoryModelScalarFieldEnum: {
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    id: 'id',
    name: 'name',
    super_id: 'super_id'
  };

  export type ExpertSubCategoryModelScalarFieldEnum = (typeof ExpertSubCategoryModelScalarFieldEnum)[keyof typeof ExpertSubCategoryModelScalarFieldEnum]


  export const ExpertSuperCategoryModelScalarFieldEnum: {
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    id: 'id',
    name: 'name',
    business_type: 'business_type'
  };

  export type ExpertSuperCategoryModelScalarFieldEnum = (typeof ExpertSuperCategoryModelScalarFieldEnum)[keyof typeof ExpertSuperCategoryModelScalarFieldEnum]


  export const HSIntroductionImageModelScalarFieldEnum: {
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    id: 'id',
    hs_provider_id: 'hs_provider_id',
    image_url: 'image_url'
  };

  export type HSIntroductionImageModelScalarFieldEnum = (typeof HSIntroductionImageModelScalarFieldEnum)[keyof typeof HSIntroductionImageModelScalarFieldEnum]


  export const HSProviderModelScalarFieldEnum: {
    id: 'id',
    business_registration_num: 'business_registration_num'
  };

  export type HSProviderModelScalarFieldEnum = (typeof HSProviderModelScalarFieldEnum)[keyof typeof HSProviderModelScalarFieldEnum]


  export const OauthAccessorModelScalarFieldEnum: {
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    id: 'id',
    oauth_type: 'oauth_type',
    oauth_sub: 'oauth_sub',
    business_user_id: 'business_user_id',
    customer_id: 'customer_id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    profile_image_url: 'profile_image_url',
    birth: 'birth',
    gender: 'gender',
    address_first: 'address_first',
    address_second: 'address_second'
  };

  export type OauthAccessorModelScalarFieldEnum = (typeof OauthAccessorModelScalarFieldEnum)[keyof typeof OauthAccessorModelScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const REAgentModelScalarFieldEnum: {
    id: 'id',
    is_licensed: 'is_licensed',
    re_num: 're_num',
    re_name: 're_name',
    re_phone: 're_phone',
    re_licensed_agent_name: 're_licensed_agent_name'
  };

  export type REAgentModelScalarFieldEnum = (typeof REAgentModelScalarFieldEnum)[keyof typeof REAgentModelScalarFieldEnum]


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


  export const UserExpertiseModelScalarFieldEnum: {
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    id: 'id',
    category_id: 'category_id',
    business_user_id: 'business_user_id'
  };

  export type UserExpertiseModelScalarFieldEnum = (typeof UserExpertiseModelScalarFieldEnum)[keyof typeof UserExpertiseModelScalarFieldEnum]


  export const UserModelScalarFieldEnum: {
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type UserModelScalarFieldEnum = (typeof UserModelScalarFieldEnum)[keyof typeof UserModelScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type OauthAccessorModelWhereInput = {
    AND?: Enumerable<OauthAccessorModelWhereInput>
    OR?: Enumerable<OauthAccessorModelWhereInput>
    NOT?: Enumerable<OauthAccessorModelWhereInput>
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    id?: StringFilter | string
    oauth_type?: EnumOauthTypeFilter | OauthType
    oauth_sub?: StringFilter | string
    business_user_id?: StringFilter | string
    customer_id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    phone?: StringNullableFilter | string | null
    profile_image_url?: StringNullableFilter | string | null
    birth?: StringNullableFilter | string | null
    gender?: EnumGenderTypeNullableFilter | GenderType | null
    address_first?: StringNullableFilter | string | null
    address_second?: StringNullableFilter | string | null
    business_user?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput>
    customer?: XOR<CustomerModelRelationFilter, CustomerModelWhereInput>
  }

  export type OauthAccessorModelOrderByWithRelationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    oauth_type?: SortOrder
    oauth_sub?: SortOrder
    business_user_id?: SortOrder
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    profile_image_url?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    business_user?: BusinessUserOrderByWithRelationInput
    customer?: CustomerModelOrderByWithRelationInput
  }

  export type OauthAccessorModelWhereUniqueInput = {
    id?: string
  }

  export type OauthAccessorModelOrderByWithAggregationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    oauth_type?: SortOrder
    oauth_sub?: SortOrder
    business_user_id?: SortOrder
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    profile_image_url?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    _count?: OauthAccessorModelCountOrderByAggregateInput
    _max?: OauthAccessorModelMaxOrderByAggregateInput
    _min?: OauthAccessorModelMinOrderByAggregateInput
  }

  export type OauthAccessorModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OauthAccessorModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<OauthAccessorModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OauthAccessorModelScalarWhereWithAggregatesInput>
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    id?: StringWithAggregatesFilter | string
    oauth_type?: EnumOauthTypeWithAggregatesFilter | OauthType
    oauth_sub?: StringWithAggregatesFilter | string
    business_user_id?: StringWithAggregatesFilter | string
    customer_id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    phone?: StringNullableWithAggregatesFilter | string | null
    profile_image_url?: StringNullableWithAggregatesFilter | string | null
    birth?: StringNullableWithAggregatesFilter | string | null
    gender?: EnumGenderTypeNullableWithAggregatesFilter | GenderType | null
    address_first?: StringNullableWithAggregatesFilter | string | null
    address_second?: StringNullableWithAggregatesFilter | string | null
  }

  export type UserModelWhereInput = {
    AND?: Enumerable<UserModelWhereInput>
    OR?: Enumerable<UserModelWhereInput>
    NOT?: Enumerable<UserModelWhereInput>
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    id?: StringFilter | string
    name?: StringFilter | string
    email?: StringNullableFilter | string | null
    customer?: XOR<CustomerModelRelationFilter, CustomerModelWhereInput> | null
    business_user?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput> | null
    agreement_acceptances?: AgreementAcceptanceModelListRelationFilter
  }

  export type UserModelOrderByWithRelationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    customer?: CustomerModelOrderByWithRelationInput
    business_user?: BusinessUserOrderByWithRelationInput
    agreement_acceptances?: AgreementAcceptanceModelOrderByRelationAggregateInput
  }

  export type UserModelWhereUniqueInput = {
    id?: string
  }

  export type UserModelOrderByWithAggregationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    _count?: UserModelCountOrderByAggregateInput
    _max?: UserModelMaxOrderByAggregateInput
    _min?: UserModelMinOrderByAggregateInput
  }

  export type UserModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserModelScalarWhereWithAggregatesInput>
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringNullableWithAggregatesFilter | string | null
  }

  export type CustomerModelWhereInput = {
    AND?: Enumerable<CustomerModelWhereInput>
    OR?: Enumerable<CustomerModelWhereInput>
    NOT?: Enumerable<CustomerModelWhereInput>
    id?: StringFilter | string
    birth?: StringNullableFilter | string | null
    gender?: EnumGenderTypeNullableFilter | GenderType | null
    phone?: StringNullableFilter | string | null
    address_first?: StringNullableFilter | string | null
    address_second?: StringNullableFilter | string | null
    profile_image_url?: StringNullableFilter | string | null
    base?: XOR<UserModelRelationFilter, UserModelWhereInput>
    oauth_accessor?: OauthAccessorModelListRelationFilter
  }

  export type CustomerModelOrderByWithRelationInput = {
    id?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image_url?: SortOrder
    base?: UserModelOrderByWithRelationInput
    oauth_accessor?: OauthAccessorModelOrderByRelationAggregateInput
  }

  export type CustomerModelWhereUniqueInput = {
    id?: string
  }

  export type CustomerModelOrderByWithAggregationInput = {
    id?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image_url?: SortOrder
    _count?: CustomerModelCountOrderByAggregateInput
    _max?: CustomerModelMaxOrderByAggregateInput
    _min?: CustomerModelMinOrderByAggregateInput
  }

  export type CustomerModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomerModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomerModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomerModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    birth?: StringNullableWithAggregatesFilter | string | null
    gender?: EnumGenderTypeNullableWithAggregatesFilter | GenderType | null
    phone?: StringNullableWithAggregatesFilter | string | null
    address_first?: StringNullableWithAggregatesFilter | string | null
    address_second?: StringNullableWithAggregatesFilter | string | null
    profile_image_url?: StringNullableWithAggregatesFilter | string | null
  }

  export type BusinessUserWhereInput = {
    AND?: Enumerable<BusinessUserWhereInput>
    OR?: Enumerable<BusinessUserWhereInput>
    NOT?: Enumerable<BusinessUserWhereInput>
    id?: StringFilter | string
    is_verified?: BoolFilter | boolean
    introduction_title?: StringFilter | string
    introduction_content?: StringFilter | string
    phone?: StringFilter | string
    address_first?: StringFilter | string
    address_second?: StringFilter | string
    profile_image_url?: StringFilter | string
    base?: XOR<UserModelRelationFilter, UserModelWhereInput>
    re_agent?: XOR<REAgentModelRelationFilter, REAgentModelWhereInput> | null
    hs_provider?: XOR<HSProviderModelRelationFilter, HSProviderModelWhereInput> | null
    certifications?: BusinessCertificationModelListRelationFilter
    expertises?: UserExpertiseModelListRelationFilter
    oauth_accessor?: OauthAccessorModelListRelationFilter
  }

  export type BusinessUserOrderByWithRelationInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image_url?: SortOrder
    base?: UserModelOrderByWithRelationInput
    re_agent?: REAgentModelOrderByWithRelationInput
    hs_provider?: HSProviderModelOrderByWithRelationInput
    certifications?: BusinessCertificationModelOrderByRelationAggregateInput
    expertises?: UserExpertiseModelOrderByRelationAggregateInput
    oauth_accessor?: OauthAccessorModelOrderByRelationAggregateInput
  }

  export type BusinessUserWhereUniqueInput = {
    id?: string
  }

  export type BusinessUserOrderByWithAggregationInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image_url?: SortOrder
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
    phone?: StringWithAggregatesFilter | string
    address_first?: StringWithAggregatesFilter | string
    address_second?: StringWithAggregatesFilter | string
    profile_image_url?: StringWithAggregatesFilter | string
  }

  export type REAgentModelWhereInput = {
    AND?: Enumerable<REAgentModelWhereInput>
    OR?: Enumerable<REAgentModelWhereInput>
    NOT?: Enumerable<REAgentModelWhereInput>
    id?: StringFilter | string
    is_licensed?: BoolFilter | boolean
    re_num?: StringFilter | string
    re_name?: StringFilter | string
    re_phone?: StringFilter | string
    re_licensed_agent_name?: StringFilter | string
    base?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput>
  }

  export type REAgentModelOrderByWithRelationInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    re_num?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
    base?: BusinessUserOrderByWithRelationInput
  }

  export type REAgentModelWhereUniqueInput = {
    id?: string
  }

  export type REAgentModelOrderByWithAggregationInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    re_num?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
    _count?: REAgentModelCountOrderByAggregateInput
    _max?: REAgentModelMaxOrderByAggregateInput
    _min?: REAgentModelMinOrderByAggregateInput
  }

  export type REAgentModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<REAgentModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<REAgentModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<REAgentModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    is_licensed?: BoolWithAggregatesFilter | boolean
    re_num?: StringWithAggregatesFilter | string
    re_name?: StringWithAggregatesFilter | string
    re_phone?: StringWithAggregatesFilter | string
    re_licensed_agent_name?: StringWithAggregatesFilter | string
  }

  export type HSProviderModelWhereInput = {
    AND?: Enumerable<HSProviderModelWhereInput>
    OR?: Enumerable<HSProviderModelWhereInput>
    NOT?: Enumerable<HSProviderModelWhereInput>
    id?: StringFilter | string
    business_registration_num?: StringFilter | string
    base?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput>
    introduction_images?: HSIntroductionImageModelListRelationFilter
  }

  export type HSProviderModelOrderByWithRelationInput = {
    id?: SortOrder
    business_registration_num?: SortOrder
    base?: BusinessUserOrderByWithRelationInput
    introduction_images?: HSIntroductionImageModelOrderByRelationAggregateInput
  }

  export type HSProviderModelWhereUniqueInput = {
    id?: string
  }

  export type HSProviderModelOrderByWithAggregationInput = {
    id?: SortOrder
    business_registration_num?: SortOrder
    _count?: HSProviderModelCountOrderByAggregateInput
    _max?: HSProviderModelMaxOrderByAggregateInput
    _min?: HSProviderModelMinOrderByAggregateInput
  }

  export type HSProviderModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HSProviderModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<HSProviderModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HSProviderModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    business_registration_num?: StringWithAggregatesFilter | string
  }

  export type BusinessCertificationModelWhereInput = {
    AND?: Enumerable<BusinessCertificationModelWhereInput>
    OR?: Enumerable<BusinessCertificationModelWhereInput>
    NOT?: Enumerable<BusinessCertificationModelWhereInput>
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    id?: StringFilter | string
    business_user_id?: StringFilter | string
    image_url?: StringFilter | string
    business_user?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput>
  }

  export type BusinessCertificationModelOrderByWithRelationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    business_user_id?: SortOrder
    image_url?: SortOrder
    business_user?: BusinessUserOrderByWithRelationInput
  }

  export type BusinessCertificationModelWhereUniqueInput = {
    id?: string
  }

  export type BusinessCertificationModelOrderByWithAggregationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    business_user_id?: SortOrder
    image_url?: SortOrder
    _count?: BusinessCertificationModelCountOrderByAggregateInput
    _max?: BusinessCertificationModelMaxOrderByAggregateInput
    _min?: BusinessCertificationModelMinOrderByAggregateInput
  }

  export type BusinessCertificationModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BusinessCertificationModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<BusinessCertificationModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BusinessCertificationModelScalarWhereWithAggregatesInput>
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    id?: StringWithAggregatesFilter | string
    business_user_id?: StringWithAggregatesFilter | string
    image_url?: StringWithAggregatesFilter | string
  }

  export type HSIntroductionImageModelWhereInput = {
    AND?: Enumerable<HSIntroductionImageModelWhereInput>
    OR?: Enumerable<HSIntroductionImageModelWhereInput>
    NOT?: Enumerable<HSIntroductionImageModelWhereInput>
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    id?: StringFilter | string
    hs_provider_id?: StringFilter | string
    image_url?: StringFilter | string
    hs_provider?: XOR<HSProviderModelRelationFilter, HSProviderModelWhereInput>
  }

  export type HSIntroductionImageModelOrderByWithRelationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    hs_provider_id?: SortOrder
    image_url?: SortOrder
    hs_provider?: HSProviderModelOrderByWithRelationInput
  }

  export type HSIntroductionImageModelWhereUniqueInput = {
    id?: string
  }

  export type HSIntroductionImageModelOrderByWithAggregationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    hs_provider_id?: SortOrder
    image_url?: SortOrder
    _count?: HSIntroductionImageModelCountOrderByAggregateInput
    _max?: HSIntroductionImageModelMaxOrderByAggregateInput
    _min?: HSIntroductionImageModelMinOrderByAggregateInput
  }

  export type HSIntroductionImageModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HSIntroductionImageModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<HSIntroductionImageModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HSIntroductionImageModelScalarWhereWithAggregatesInput>
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    id?: StringWithAggregatesFilter | string
    hs_provider_id?: StringWithAggregatesFilter | string
    image_url?: StringWithAggregatesFilter | string
  }

  export type UserExpertiseModelWhereInput = {
    AND?: Enumerable<UserExpertiseModelWhereInput>
    OR?: Enumerable<UserExpertiseModelWhereInput>
    NOT?: Enumerable<UserExpertiseModelWhereInput>
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    id?: StringFilter | string
    category_id?: StringFilter | string
    business_user_id?: StringFilter | string
    category?: XOR<ExpertSubCategoryModelRelationFilter, ExpertSubCategoryModelWhereInput>
    business_user?: XOR<BusinessUserRelationFilter, BusinessUserWhereInput>
  }

  export type UserExpertiseModelOrderByWithRelationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    category_id?: SortOrder
    business_user_id?: SortOrder
    category?: ExpertSubCategoryModelOrderByWithRelationInput
    business_user?: BusinessUserOrderByWithRelationInput
  }

  export type UserExpertiseModelWhereUniqueInput = {
    id?: string
  }

  export type UserExpertiseModelOrderByWithAggregationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    category_id?: SortOrder
    business_user_id?: SortOrder
    _count?: UserExpertiseModelCountOrderByAggregateInput
    _max?: UserExpertiseModelMaxOrderByAggregateInput
    _min?: UserExpertiseModelMinOrderByAggregateInput
  }

  export type UserExpertiseModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserExpertiseModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserExpertiseModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserExpertiseModelScalarWhereWithAggregatesInput>
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    id?: StringWithAggregatesFilter | string
    category_id?: StringWithAggregatesFilter | string
    business_user_id?: StringWithAggregatesFilter | string
  }

  export type ExpertSubCategoryModelWhereInput = {
    AND?: Enumerable<ExpertSubCategoryModelWhereInput>
    OR?: Enumerable<ExpertSubCategoryModelWhereInput>
    NOT?: Enumerable<ExpertSubCategoryModelWhereInput>
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    id?: StringFilter | string
    name?: StringFilter | string
    super_id?: StringFilter | string
    super?: XOR<ExpertSuperCategoryModelRelationFilter, ExpertSuperCategoryModelWhereInput>
    expertises?: UserExpertiseModelListRelationFilter
  }

  export type ExpertSubCategoryModelOrderByWithRelationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
    super?: ExpertSuperCategoryModelOrderByWithRelationInput
    expertises?: UserExpertiseModelOrderByRelationAggregateInput
  }

  export type ExpertSubCategoryModelWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type ExpertSubCategoryModelOrderByWithAggregationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
    _count?: ExpertSubCategoryModelCountOrderByAggregateInput
    _max?: ExpertSubCategoryModelMaxOrderByAggregateInput
    _min?: ExpertSubCategoryModelMinOrderByAggregateInput
  }

  export type ExpertSubCategoryModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExpertSubCategoryModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExpertSubCategoryModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExpertSubCategoryModelScalarWhereWithAggregatesInput>
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    super_id?: StringWithAggregatesFilter | string
  }

  export type ExpertSuperCategoryModelWhereInput = {
    AND?: Enumerable<ExpertSuperCategoryModelWhereInput>
    OR?: Enumerable<ExpertSuperCategoryModelWhereInput>
    NOT?: Enumerable<ExpertSuperCategoryModelWhereInput>
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    id?: StringFilter | string
    name?: StringFilter | string
    business_type?: EnumExpertBusinessTypeFilter | ExpertBusinessType
    subs?: ExpertSubCategoryModelListRelationFilter
  }

  export type ExpertSuperCategoryModelOrderByWithRelationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    business_type?: SortOrder
    subs?: ExpertSubCategoryModelOrderByRelationAggregateInput
  }

  export type ExpertSuperCategoryModelWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type ExpertSuperCategoryModelOrderByWithAggregationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    business_type?: SortOrder
    _count?: ExpertSuperCategoryModelCountOrderByAggregateInput
    _max?: ExpertSuperCategoryModelMaxOrderByAggregateInput
    _min?: ExpertSuperCategoryModelMinOrderByAggregateInput
  }

  export type ExpertSuperCategoryModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExpertSuperCategoryModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExpertSuperCategoryModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExpertSuperCategoryModelScalarWhereWithAggregatesInput>
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    business_type?: EnumExpertBusinessTypeWithAggregatesFilter | ExpertBusinessType
  }

  export type AgreementModelWhereInput = {
    AND?: Enumerable<AgreementModelWhereInput>
    OR?: Enumerable<AgreementModelWhereInput>
    NOT?: Enumerable<AgreementModelWhereInput>
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    id?: StringFilter | string
    title?: StringFilter | string
    content?: StringFilter | string
    user_type?: EnumAgreementUserTypeFilter | AgreementUserType
    acceptances?: AgreementAcceptanceModelListRelationFilter
  }

  export type AgreementModelOrderByWithRelationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_type?: SortOrder
    acceptances?: AgreementAcceptanceModelOrderByRelationAggregateInput
  }

  export type AgreementModelWhereUniqueInput = {
    id?: string
  }

  export type AgreementModelOrderByWithAggregationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_type?: SortOrder
    _count?: AgreementModelCountOrderByAggregateInput
    _max?: AgreementModelMaxOrderByAggregateInput
    _min?: AgreementModelMinOrderByAggregateInput
  }

  export type AgreementModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AgreementModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<AgreementModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AgreementModelScalarWhereWithAggregatesInput>
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    user_type?: EnumAgreementUserTypeWithAggregatesFilter | AgreementUserType
  }

  export type AgreementAcceptanceModelWhereInput = {
    AND?: Enumerable<AgreementAcceptanceModelWhereInput>
    OR?: Enumerable<AgreementAcceptanceModelWhereInput>
    NOT?: Enumerable<AgreementAcceptanceModelWhereInput>
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    id?: StringFilter | string
    user_id?: StringFilter | string
    agreement_id?: StringFilter | string
    user?: XOR<UserModelRelationFilter, UserModelWhereInput>
    agreement?: XOR<AgreementModelRelationFilter, AgreementModelWhereInput>
  }

  export type AgreementAcceptanceModelOrderByWithRelationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    user_id?: SortOrder
    agreement_id?: SortOrder
    user?: UserModelOrderByWithRelationInput
    agreement?: AgreementModelOrderByWithRelationInput
  }

  export type AgreementAcceptanceModelWhereUniqueInput = {
    id?: string
  }

  export type AgreementAcceptanceModelOrderByWithAggregationInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    user_id?: SortOrder
    agreement_id?: SortOrder
    _count?: AgreementAcceptanceModelCountOrderByAggregateInput
    _max?: AgreementAcceptanceModelMaxOrderByAggregateInput
    _min?: AgreementAcceptanceModelMinOrderByAggregateInput
  }

  export type AgreementAcceptanceModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AgreementAcceptanceModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<AgreementAcceptanceModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AgreementAcceptanceModelScalarWhereWithAggregatesInput>
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    id?: StringWithAggregatesFilter | string
    user_id?: StringWithAggregatesFilter | string
    agreement_id?: StringWithAggregatesFilter | string
  }

  export type OauthAccessorModelCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    oauth_type: OauthType
    oauth_sub: string
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_first?: string | null
    address_second?: string | null
    business_user: BusinessUserCreateNestedOneWithoutOauth_accessorInput
    customer: CustomerModelCreateNestedOneWithoutOauth_accessorInput
  }

  export type OauthAccessorModelUncheckedCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    oauth_type: OauthType
    oauth_sub: string
    business_user_id: string
    customer_id: string
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_first?: string | null
    address_second?: string | null
  }

  export type OauthAccessorModelUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    business_user?: BusinessUserUpdateOneRequiredWithoutOauth_accessorNestedInput
    customer?: CustomerModelUpdateOneRequiredWithoutOauth_accessorNestedInput
  }

  export type OauthAccessorModelUncheckedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    business_user_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OauthAccessorModelCreateManyInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    oauth_type: OauthType
    oauth_sub: string
    business_user_id: string
    customer_id: string
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_first?: string | null
    address_second?: string | null
  }

  export type OauthAccessorModelUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OauthAccessorModelUncheckedUpdateManyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    business_user_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserModelCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    email?: string | null
    customer?: CustomerModelCreateNestedOneWithoutBaseInput
    business_user?: BusinessUserCreateNestedOneWithoutBaseInput
    agreement_acceptances?: AgreementAcceptanceModelCreateNestedManyWithoutUserInput
  }

  export type UserModelUncheckedCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    email?: string | null
    customer?: CustomerModelUncheckedCreateNestedOneWithoutBaseInput
    business_user?: BusinessUserUncheckedCreateNestedOneWithoutBaseInput
    agreement_acceptances?: AgreementAcceptanceModelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserModelUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerModelUpdateOneWithoutBaseNestedInput
    business_user?: BusinessUserUpdateOneWithoutBaseNestedInput
    agreement_acceptances?: AgreementAcceptanceModelUpdateManyWithoutUserNestedInput
  }

  export type UserModelUncheckedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerModelUncheckedUpdateOneWithoutBaseNestedInput
    business_user?: BusinessUserUncheckedUpdateOneWithoutBaseNestedInput
    agreement_acceptances?: AgreementAcceptanceModelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserModelCreateManyInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    email?: string | null
  }

  export type UserModelUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserModelUncheckedUpdateManyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerModelCreateInput = {
    birth?: string | null
    gender?: GenderType | null
    phone?: string | null
    address_first?: string | null
    address_second?: string | null
    profile_image_url?: string | null
    base: UserModelCreateNestedOneWithoutCustomerInput
    oauth_accessor?: OauthAccessorModelCreateNestedManyWithoutCustomerInput
  }

  export type CustomerModelUncheckedCreateInput = {
    id: string
    birth?: string | null
    gender?: GenderType | null
    phone?: string | null
    address_first?: string | null
    address_second?: string | null
    profile_image_url?: string | null
    oauth_accessor?: OauthAccessorModelUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerModelUpdateInput = {
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    base?: UserModelUpdateOneRequiredWithoutCustomerNestedInput
    oauth_accessor?: OauthAccessorModelUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_accessor?: OauthAccessorModelUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerModelCreateManyInput = {
    id: string
    birth?: string | null
    gender?: GenderType | null
    phone?: string | null
    address_first?: string | null
    address_second?: string | null
    profile_image_url?: string | null
  }

  export type CustomerModelUpdateManyMutationInput = {
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessUserCreateInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second: string
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBusiness_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationModelCreateNestedManyWithoutBusiness_userInput
    expertises?: UserExpertiseModelCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserUncheckedCreateInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second: string
    profile_image_url: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationModelUncheckedCreateNestedManyWithoutBusiness_userInput
    expertises?: UserExpertiseModelUncheckedCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserUpdateInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBusiness_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationModelUpdateManyWithoutBusiness_userNestedInput
    expertises?: UserExpertiseModelUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    expertises?: UserExpertiseModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUncheckedUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserCreateManyInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second: string
    profile_image_url: string
  }

  export type BusinessUserUpdateManyMutationInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
  }

  export type REAgentModelCreateInput = {
    is_licensed: boolean
    re_num: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    base: BusinessUserCreateNestedOneWithoutRe_agentInput
  }

  export type REAgentModelUncheckedCreateInput = {
    id: string
    is_licensed: boolean
    re_num: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
  }

  export type REAgentModelUpdateInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_num?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    base?: BusinessUserUpdateOneRequiredWithoutRe_agentNestedInput
  }

  export type REAgentModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_num?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
  }

  export type REAgentModelCreateManyInput = {
    id: string
    is_licensed: boolean
    re_num: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
  }

  export type REAgentModelUpdateManyMutationInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_num?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
  }

  export type REAgentModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_num?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
  }

  export type HSProviderModelCreateInput = {
    business_registration_num: string
    base: BusinessUserCreateNestedOneWithoutHs_providerInput
    introduction_images?: HSIntroductionImageModelCreateNestedManyWithoutHs_providerInput
  }

  export type HSProviderModelUncheckedCreateInput = {
    id: string
    business_registration_num: string
    introduction_images?: HSIntroductionImageModelUncheckedCreateNestedManyWithoutHs_providerInput
  }

  export type HSProviderModelUpdateInput = {
    business_registration_num?: StringFieldUpdateOperationsInput | string
    base?: BusinessUserUpdateOneRequiredWithoutHs_providerNestedInput
    introduction_images?: HSIntroductionImageModelUpdateManyWithoutHs_providerNestedInput
  }

  export type HSProviderModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_registration_num?: StringFieldUpdateOperationsInput | string
    introduction_images?: HSIntroductionImageModelUncheckedUpdateManyWithoutHs_providerNestedInput
  }

  export type HSProviderModelCreateManyInput = {
    id: string
    business_registration_num: string
  }

  export type HSProviderModelUpdateManyMutationInput = {
    business_registration_num?: StringFieldUpdateOperationsInput | string
  }

  export type HSProviderModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_registration_num?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCertificationModelCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    image_url: string
    business_user: BusinessUserCreateNestedOneWithoutCertificationsInput
  }

  export type BusinessCertificationModelUncheckedCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    business_user_id: string
    image_url: string
  }

  export type BusinessCertificationModelUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    business_user?: BusinessUserUpdateOneRequiredWithoutCertificationsNestedInput
  }

  export type BusinessCertificationModelUncheckedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    business_user_id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCertificationModelCreateManyInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    business_user_id: string
    image_url: string
  }

  export type BusinessCertificationModelUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCertificationModelUncheckedUpdateManyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    business_user_id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type HSIntroductionImageModelCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    image_url: string
    hs_provider: HSProviderModelCreateNestedOneWithoutIntroduction_imagesInput
  }

  export type HSIntroductionImageModelUncheckedCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    hs_provider_id: string
    image_url: string
  }

  export type HSIntroductionImageModelUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    hs_provider?: HSProviderModelUpdateOneRequiredWithoutIntroduction_imagesNestedInput
  }

  export type HSIntroductionImageModelUncheckedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    hs_provider_id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type HSIntroductionImageModelCreateManyInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    hs_provider_id: string
    image_url: string
  }

  export type HSIntroductionImageModelUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type HSIntroductionImageModelUncheckedUpdateManyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    hs_provider_id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type UserExpertiseModelCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    category: ExpertSubCategoryModelCreateNestedOneWithoutExpertisesInput
    business_user: BusinessUserCreateNestedOneWithoutExpertisesInput
  }

  export type UserExpertiseModelUncheckedCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    category_id: string
    business_user_id: string
  }

  export type UserExpertiseModelUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    category?: ExpertSubCategoryModelUpdateOneRequiredWithoutExpertisesNestedInput
    business_user?: BusinessUserUpdateOneRequiredWithoutExpertisesNestedInput
  }

  export type UserExpertiseModelUncheckedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    business_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserExpertiseModelCreateManyInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    category_id: string
    business_user_id: string
  }

  export type UserExpertiseModelUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserExpertiseModelUncheckedUpdateManyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    business_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertSubCategoryModelCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    super: ExpertSuperCategoryModelCreateNestedOneWithoutSubsInput
    expertises?: UserExpertiseModelCreateNestedManyWithoutCategoryInput
  }

  export type ExpertSubCategoryModelUncheckedCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    super_id: string
    expertises?: UserExpertiseModelUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ExpertSubCategoryModelUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    super?: ExpertSuperCategoryModelUpdateOneRequiredWithoutSubsNestedInput
    expertises?: UserExpertiseModelUpdateManyWithoutCategoryNestedInput
  }

  export type ExpertSubCategoryModelUncheckedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
    expertises?: UserExpertiseModelUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ExpertSubCategoryModelCreateManyInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    super_id: string
  }

  export type ExpertSubCategoryModelUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertSubCategoryModelUncheckedUpdateManyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertSuperCategoryModelCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    business_type: ExpertBusinessType
    subs?: ExpertSubCategoryModelCreateNestedManyWithoutSuperInput
  }

  export type ExpertSuperCategoryModelUncheckedCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    business_type: ExpertBusinessType
    subs?: ExpertSubCategoryModelUncheckedCreateNestedManyWithoutSuperInput
  }

  export type ExpertSuperCategoryModelUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    business_type?: EnumExpertBusinessTypeFieldUpdateOperationsInput | ExpertBusinessType
    subs?: ExpertSubCategoryModelUpdateManyWithoutSuperNestedInput
  }

  export type ExpertSuperCategoryModelUncheckedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    business_type?: EnumExpertBusinessTypeFieldUpdateOperationsInput | ExpertBusinessType
    subs?: ExpertSubCategoryModelUncheckedUpdateManyWithoutSuperNestedInput
  }

  export type ExpertSuperCategoryModelCreateManyInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    business_type: ExpertBusinessType
  }

  export type ExpertSuperCategoryModelUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    business_type?: EnumExpertBusinessTypeFieldUpdateOperationsInput | ExpertBusinessType
  }

  export type ExpertSuperCategoryModelUncheckedUpdateManyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    business_type?: EnumExpertBusinessTypeFieldUpdateOperationsInput | ExpertBusinessType
  }

  export type AgreementModelCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    title: string
    content: string
    user_type: AgreementUserType
    acceptances?: AgreementAcceptanceModelCreateNestedManyWithoutAgreementInput
  }

  export type AgreementModelUncheckedCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    title: string
    content: string
    user_type: AgreementUserType
    acceptances?: AgreementAcceptanceModelUncheckedCreateNestedManyWithoutAgreementInput
  }

  export type AgreementModelUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_type?: EnumAgreementUserTypeFieldUpdateOperationsInput | AgreementUserType
    acceptances?: AgreementAcceptanceModelUpdateManyWithoutAgreementNestedInput
  }

  export type AgreementModelUncheckedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_type?: EnumAgreementUserTypeFieldUpdateOperationsInput | AgreementUserType
    acceptances?: AgreementAcceptanceModelUncheckedUpdateManyWithoutAgreementNestedInput
  }

  export type AgreementModelCreateManyInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    title: string
    content: string
    user_type: AgreementUserType
  }

  export type AgreementModelUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_type?: EnumAgreementUserTypeFieldUpdateOperationsInput | AgreementUserType
  }

  export type AgreementModelUncheckedUpdateManyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_type?: EnumAgreementUserTypeFieldUpdateOperationsInput | AgreementUserType
  }

  export type AgreementAcceptanceModelCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    user: UserModelCreateNestedOneWithoutAgreement_acceptancesInput
    agreement: AgreementModelCreateNestedOneWithoutAcceptancesInput
  }

  export type AgreementAcceptanceModelUncheckedCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    user_id: string
    agreement_id: string
  }

  export type AgreementAcceptanceModelUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    user?: UserModelUpdateOneRequiredWithoutAgreement_acceptancesNestedInput
    agreement?: AgreementModelUpdateOneRequiredWithoutAcceptancesNestedInput
  }

  export type AgreementAcceptanceModelUncheckedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    agreement_id?: StringFieldUpdateOperationsInput | string
  }

  export type AgreementAcceptanceModelCreateManyInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    user_id: string
    agreement_id: string
  }

  export type AgreementAcceptanceModelUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AgreementAcceptanceModelUncheckedUpdateManyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    agreement_id?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
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

  export type EnumOauthTypeFilter = {
    equals?: OauthType
    in?: Enumerable<OauthType>
    notIn?: Enumerable<OauthType>
    not?: NestedEnumOauthTypeFilter | OauthType
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

  export type EnumGenderTypeNullableFilter = {
    equals?: GenderType | null
    in?: Enumerable<GenderType> | null
    notIn?: Enumerable<GenderType> | null
    not?: NestedEnumGenderTypeNullableFilter | GenderType | null
  }

  export type BusinessUserRelationFilter = {
    is?: BusinessUserWhereInput
    isNot?: BusinessUserWhereInput
  }

  export type CustomerModelRelationFilter = {
    is?: CustomerModelWhereInput
    isNot?: CustomerModelWhereInput
  }

  export type OauthAccessorModelCountOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    oauth_type?: SortOrder
    oauth_sub?: SortOrder
    business_user_id?: SortOrder
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    profile_image_url?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
  }

  export type OauthAccessorModelMaxOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    oauth_type?: SortOrder
    oauth_sub?: SortOrder
    business_user_id?: SortOrder
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    profile_image_url?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
  }

  export type OauthAccessorModelMinOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    oauth_type?: SortOrder
    oauth_sub?: SortOrder
    business_user_id?: SortOrder
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    profile_image_url?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
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

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
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

  export type EnumOauthTypeWithAggregatesFilter = {
    equals?: OauthType
    in?: Enumerable<OauthType>
    notIn?: Enumerable<OauthType>
    not?: NestedEnumOauthTypeWithAggregatesFilter | OauthType
    _count?: NestedIntFilter
    _min?: NestedEnumOauthTypeFilter
    _max?: NestedEnumOauthTypeFilter
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

  export type EnumGenderTypeNullableWithAggregatesFilter = {
    equals?: GenderType | null
    in?: Enumerable<GenderType> | null
    notIn?: Enumerable<GenderType> | null
    not?: NestedEnumGenderTypeNullableWithAggregatesFilter | GenderType | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumGenderTypeNullableFilter
    _max?: NestedEnumGenderTypeNullableFilter
  }

  export type AgreementAcceptanceModelListRelationFilter = {
    every?: AgreementAcceptanceModelWhereInput
    some?: AgreementAcceptanceModelWhereInput
    none?: AgreementAcceptanceModelWhereInput
  }

  export type AgreementAcceptanceModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserModelCountOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserModelMaxOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserModelMinOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserModelRelationFilter = {
    is?: UserModelWhereInput
    isNot?: UserModelWhereInput
  }

  export type OauthAccessorModelListRelationFilter = {
    every?: OauthAccessorModelWhereInput
    some?: OauthAccessorModelWhereInput
    none?: OauthAccessorModelWhereInput
  }

  export type OauthAccessorModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerModelCountOrderByAggregateInput = {
    id?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image_url?: SortOrder
  }

  export type CustomerModelMaxOrderByAggregateInput = {
    id?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image_url?: SortOrder
  }

  export type CustomerModelMinOrderByAggregateInput = {
    id?: SortOrder
    birth?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image_url?: SortOrder
  }

  export type REAgentModelRelationFilter = {
    is?: REAgentModelWhereInput | null
    isNot?: REAgentModelWhereInput | null
  }

  export type HSProviderModelRelationFilter = {
    is?: HSProviderModelWhereInput
    isNot?: HSProviderModelWhereInput
  }

  export type BusinessCertificationModelListRelationFilter = {
    every?: BusinessCertificationModelWhereInput
    some?: BusinessCertificationModelWhereInput
    none?: BusinessCertificationModelWhereInput
  }

  export type UserExpertiseModelListRelationFilter = {
    every?: UserExpertiseModelWhereInput
    some?: UserExpertiseModelWhereInput
    none?: UserExpertiseModelWhereInput
  }

  export type BusinessCertificationModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserExpertiseModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessUserCountOrderByAggregateInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image_url?: SortOrder
  }

  export type BusinessUserMaxOrderByAggregateInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image_url?: SortOrder
  }

  export type BusinessUserMinOrderByAggregateInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image_url?: SortOrder
  }

  export type REAgentModelCountOrderByAggregateInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    re_num?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
  }

  export type REAgentModelMaxOrderByAggregateInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    re_num?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
  }

  export type REAgentModelMinOrderByAggregateInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    re_num?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
  }

  export type HSIntroductionImageModelListRelationFilter = {
    every?: HSIntroductionImageModelWhereInput
    some?: HSIntroductionImageModelWhereInput
    none?: HSIntroductionImageModelWhereInput
  }

  export type HSIntroductionImageModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HSProviderModelCountOrderByAggregateInput = {
    id?: SortOrder
    business_registration_num?: SortOrder
  }

  export type HSProviderModelMaxOrderByAggregateInput = {
    id?: SortOrder
    business_registration_num?: SortOrder
  }

  export type HSProviderModelMinOrderByAggregateInput = {
    id?: SortOrder
    business_registration_num?: SortOrder
  }

  export type BusinessCertificationModelCountOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    business_user_id?: SortOrder
    image_url?: SortOrder
  }

  export type BusinessCertificationModelMaxOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    business_user_id?: SortOrder
    image_url?: SortOrder
  }

  export type BusinessCertificationModelMinOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    business_user_id?: SortOrder
    image_url?: SortOrder
  }

  export type HSIntroductionImageModelCountOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    hs_provider_id?: SortOrder
    image_url?: SortOrder
  }

  export type HSIntroductionImageModelMaxOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    hs_provider_id?: SortOrder
    image_url?: SortOrder
  }

  export type HSIntroductionImageModelMinOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    hs_provider_id?: SortOrder
    image_url?: SortOrder
  }

  export type ExpertSubCategoryModelRelationFilter = {
    is?: ExpertSubCategoryModelWhereInput
    isNot?: ExpertSubCategoryModelWhereInput
  }

  export type UserExpertiseModelCountOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    category_id?: SortOrder
    business_user_id?: SortOrder
  }

  export type UserExpertiseModelMaxOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    category_id?: SortOrder
    business_user_id?: SortOrder
  }

  export type UserExpertiseModelMinOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    category_id?: SortOrder
    business_user_id?: SortOrder
  }

  export type ExpertSuperCategoryModelRelationFilter = {
    is?: ExpertSuperCategoryModelWhereInput
    isNot?: ExpertSuperCategoryModelWhereInput
  }

  export type ExpertSubCategoryModelCountOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
  }

  export type ExpertSubCategoryModelMaxOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
  }

  export type ExpertSubCategoryModelMinOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
  }

  export type EnumExpertBusinessTypeFilter = {
    equals?: ExpertBusinessType
    in?: Enumerable<ExpertBusinessType>
    notIn?: Enumerable<ExpertBusinessType>
    not?: NestedEnumExpertBusinessTypeFilter | ExpertBusinessType
  }

  export type ExpertSubCategoryModelListRelationFilter = {
    every?: ExpertSubCategoryModelWhereInput
    some?: ExpertSubCategoryModelWhereInput
    none?: ExpertSubCategoryModelWhereInput
  }

  export type ExpertSubCategoryModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpertSuperCategoryModelCountOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    business_type?: SortOrder
  }

  export type ExpertSuperCategoryModelMaxOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    business_type?: SortOrder
  }

  export type ExpertSuperCategoryModelMinOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    business_type?: SortOrder
  }

  export type EnumExpertBusinessTypeWithAggregatesFilter = {
    equals?: ExpertBusinessType
    in?: Enumerable<ExpertBusinessType>
    notIn?: Enumerable<ExpertBusinessType>
    not?: NestedEnumExpertBusinessTypeWithAggregatesFilter | ExpertBusinessType
    _count?: NestedIntFilter
    _min?: NestedEnumExpertBusinessTypeFilter
    _max?: NestedEnumExpertBusinessTypeFilter
  }

  export type EnumAgreementUserTypeFilter = {
    equals?: AgreementUserType
    in?: Enumerable<AgreementUserType>
    notIn?: Enumerable<AgreementUserType>
    not?: NestedEnumAgreementUserTypeFilter | AgreementUserType
  }

  export type AgreementModelCountOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_type?: SortOrder
  }

  export type AgreementModelMaxOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_type?: SortOrder
  }

  export type AgreementModelMinOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_type?: SortOrder
  }

  export type EnumAgreementUserTypeWithAggregatesFilter = {
    equals?: AgreementUserType
    in?: Enumerable<AgreementUserType>
    notIn?: Enumerable<AgreementUserType>
    not?: NestedEnumAgreementUserTypeWithAggregatesFilter | AgreementUserType
    _count?: NestedIntFilter
    _min?: NestedEnumAgreementUserTypeFilter
    _max?: NestedEnumAgreementUserTypeFilter
  }

  export type AgreementModelRelationFilter = {
    is?: AgreementModelWhereInput
    isNot?: AgreementModelWhereInput
  }

  export type AgreementAcceptanceModelCountOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    user_id?: SortOrder
    agreement_id?: SortOrder
  }

  export type AgreementAcceptanceModelMaxOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    user_id?: SortOrder
    agreement_id?: SortOrder
  }

  export type AgreementAcceptanceModelMinOrderByAggregateInput = {
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    id?: SortOrder
    user_id?: SortOrder
    agreement_id?: SortOrder
  }

  export type BusinessUserCreateNestedOneWithoutOauth_accessorInput = {
    create?: XOR<BusinessUserCreateWithoutOauth_accessorInput, BusinessUserUncheckedCreateWithoutOauth_accessorInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutOauth_accessorInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type CustomerModelCreateNestedOneWithoutOauth_accessorInput = {
    create?: XOR<CustomerModelCreateWithoutOauth_accessorInput, CustomerModelUncheckedCreateWithoutOauth_accessorInput>
    connectOrCreate?: CustomerModelCreateOrConnectWithoutOauth_accessorInput
    connect?: CustomerModelWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumOauthTypeFieldUpdateOperationsInput = {
    set?: OauthType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumGenderTypeFieldUpdateOperationsInput = {
    set?: GenderType | null
  }

  export type BusinessUserUpdateOneRequiredWithoutOauth_accessorNestedInput = {
    create?: XOR<BusinessUserCreateWithoutOauth_accessorInput, BusinessUserUncheckedCreateWithoutOauth_accessorInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutOauth_accessorInput
    upsert?: BusinessUserUpsertWithoutOauth_accessorInput
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutOauth_accessorInput, BusinessUserUncheckedUpdateWithoutOauth_accessorInput>
  }

  export type CustomerModelUpdateOneRequiredWithoutOauth_accessorNestedInput = {
    create?: XOR<CustomerModelCreateWithoutOauth_accessorInput, CustomerModelUncheckedCreateWithoutOauth_accessorInput>
    connectOrCreate?: CustomerModelCreateOrConnectWithoutOauth_accessorInput
    upsert?: CustomerModelUpsertWithoutOauth_accessorInput
    connect?: CustomerModelWhereUniqueInput
    update?: XOR<CustomerModelUpdateWithoutOauth_accessorInput, CustomerModelUncheckedUpdateWithoutOauth_accessorInput>
  }

  export type CustomerModelCreateNestedOneWithoutBaseInput = {
    create?: XOR<CustomerModelCreateWithoutBaseInput, CustomerModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: CustomerModelCreateOrConnectWithoutBaseInput
    connect?: CustomerModelWhereUniqueInput
  }

  export type BusinessUserCreateNestedOneWithoutBaseInput = {
    create?: XOR<BusinessUserCreateWithoutBaseInput, BusinessUserUncheckedCreateWithoutBaseInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutBaseInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type AgreementAcceptanceModelCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AgreementAcceptanceModelCreateWithoutUserInput>, Enumerable<AgreementAcceptanceModelUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AgreementAcceptanceModelCreateOrConnectWithoutUserInput>
    createMany?: AgreementAcceptanceModelCreateManyUserInputEnvelope
    connect?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
  }

  export type CustomerModelUncheckedCreateNestedOneWithoutBaseInput = {
    create?: XOR<CustomerModelCreateWithoutBaseInput, CustomerModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: CustomerModelCreateOrConnectWithoutBaseInput
    connect?: CustomerModelWhereUniqueInput
  }

  export type BusinessUserUncheckedCreateNestedOneWithoutBaseInput = {
    create?: XOR<BusinessUserCreateWithoutBaseInput, BusinessUserUncheckedCreateWithoutBaseInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutBaseInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type AgreementAcceptanceModelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AgreementAcceptanceModelCreateWithoutUserInput>, Enumerable<AgreementAcceptanceModelUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AgreementAcceptanceModelCreateOrConnectWithoutUserInput>
    createMany?: AgreementAcceptanceModelCreateManyUserInputEnvelope
    connect?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
  }

  export type CustomerModelUpdateOneWithoutBaseNestedInput = {
    create?: XOR<CustomerModelCreateWithoutBaseInput, CustomerModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: CustomerModelCreateOrConnectWithoutBaseInput
    upsert?: CustomerModelUpsertWithoutBaseInput
    disconnect?: boolean
    delete?: boolean
    connect?: CustomerModelWhereUniqueInput
    update?: XOR<CustomerModelUpdateWithoutBaseInput, CustomerModelUncheckedUpdateWithoutBaseInput>
  }

  export type BusinessUserUpdateOneWithoutBaseNestedInput = {
    create?: XOR<BusinessUserCreateWithoutBaseInput, BusinessUserUncheckedCreateWithoutBaseInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutBaseInput
    upsert?: BusinessUserUpsertWithoutBaseInput
    disconnect?: boolean
    delete?: boolean
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutBaseInput, BusinessUserUncheckedUpdateWithoutBaseInput>
  }

  export type AgreementAcceptanceModelUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AgreementAcceptanceModelCreateWithoutUserInput>, Enumerable<AgreementAcceptanceModelUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AgreementAcceptanceModelCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AgreementAcceptanceModelUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AgreementAcceptanceModelCreateManyUserInputEnvelope
    set?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
    disconnect?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
    delete?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
    connect?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
    update?: Enumerable<AgreementAcceptanceModelUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AgreementAcceptanceModelUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AgreementAcceptanceModelScalarWhereInput>
  }

  export type CustomerModelUncheckedUpdateOneWithoutBaseNestedInput = {
    create?: XOR<CustomerModelCreateWithoutBaseInput, CustomerModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: CustomerModelCreateOrConnectWithoutBaseInput
    upsert?: CustomerModelUpsertWithoutBaseInput
    disconnect?: boolean
    delete?: boolean
    connect?: CustomerModelWhereUniqueInput
    update?: XOR<CustomerModelUpdateWithoutBaseInput, CustomerModelUncheckedUpdateWithoutBaseInput>
  }

  export type BusinessUserUncheckedUpdateOneWithoutBaseNestedInput = {
    create?: XOR<BusinessUserCreateWithoutBaseInput, BusinessUserUncheckedCreateWithoutBaseInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutBaseInput
    upsert?: BusinessUserUpsertWithoutBaseInput
    disconnect?: boolean
    delete?: boolean
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutBaseInput, BusinessUserUncheckedUpdateWithoutBaseInput>
  }

  export type AgreementAcceptanceModelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AgreementAcceptanceModelCreateWithoutUserInput>, Enumerable<AgreementAcceptanceModelUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AgreementAcceptanceModelCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AgreementAcceptanceModelUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AgreementAcceptanceModelCreateManyUserInputEnvelope
    set?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
    disconnect?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
    delete?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
    connect?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
    update?: Enumerable<AgreementAcceptanceModelUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AgreementAcceptanceModelUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AgreementAcceptanceModelScalarWhereInput>
  }

  export type UserModelCreateNestedOneWithoutCustomerInput = {
    create?: XOR<UserModelCreateWithoutCustomerInput, UserModelUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutCustomerInput
    connect?: UserModelWhereUniqueInput
  }

  export type OauthAccessorModelCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<OauthAccessorModelCreateWithoutCustomerInput>, Enumerable<OauthAccessorModelUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<OauthAccessorModelCreateOrConnectWithoutCustomerInput>
    createMany?: OauthAccessorModelCreateManyCustomerInputEnvelope
    connect?: Enumerable<OauthAccessorModelWhereUniqueInput>
  }

  export type OauthAccessorModelUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<OauthAccessorModelCreateWithoutCustomerInput>, Enumerable<OauthAccessorModelUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<OauthAccessorModelCreateOrConnectWithoutCustomerInput>
    createMany?: OauthAccessorModelCreateManyCustomerInputEnvelope
    connect?: Enumerable<OauthAccessorModelWhereUniqueInput>
  }

  export type UserModelUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<UserModelCreateWithoutCustomerInput, UserModelUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutCustomerInput
    upsert?: UserModelUpsertWithoutCustomerInput
    connect?: UserModelWhereUniqueInput
    update?: XOR<UserModelUpdateWithoutCustomerInput, UserModelUncheckedUpdateWithoutCustomerInput>
  }

  export type OauthAccessorModelUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<OauthAccessorModelCreateWithoutCustomerInput>, Enumerable<OauthAccessorModelUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<OauthAccessorModelCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<OauthAccessorModelUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: OauthAccessorModelCreateManyCustomerInputEnvelope
    set?: Enumerable<OauthAccessorModelWhereUniqueInput>
    disconnect?: Enumerable<OauthAccessorModelWhereUniqueInput>
    delete?: Enumerable<OauthAccessorModelWhereUniqueInput>
    connect?: Enumerable<OauthAccessorModelWhereUniqueInput>
    update?: Enumerable<OauthAccessorModelUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<OauthAccessorModelUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<OauthAccessorModelScalarWhereInput>
  }

  export type OauthAccessorModelUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<OauthAccessorModelCreateWithoutCustomerInput>, Enumerable<OauthAccessorModelUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<OauthAccessorModelCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<OauthAccessorModelUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: OauthAccessorModelCreateManyCustomerInputEnvelope
    set?: Enumerable<OauthAccessorModelWhereUniqueInput>
    disconnect?: Enumerable<OauthAccessorModelWhereUniqueInput>
    delete?: Enumerable<OauthAccessorModelWhereUniqueInput>
    connect?: Enumerable<OauthAccessorModelWhereUniqueInput>
    update?: Enumerable<OauthAccessorModelUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<OauthAccessorModelUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<OauthAccessorModelScalarWhereInput>
  }

  export type UserModelCreateNestedOneWithoutBusiness_userInput = {
    create?: XOR<UserModelCreateWithoutBusiness_userInput, UserModelUncheckedCreateWithoutBusiness_userInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutBusiness_userInput
    connect?: UserModelWhereUniqueInput
  }

  export type REAgentModelCreateNestedOneWithoutBaseInput = {
    create?: XOR<REAgentModelCreateWithoutBaseInput, REAgentModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: REAgentModelCreateOrConnectWithoutBaseInput
    connect?: REAgentModelWhereUniqueInput
  }

  export type HSProviderModelCreateNestedOneWithoutBaseInput = {
    create?: XOR<HSProviderModelCreateWithoutBaseInput, HSProviderModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: HSProviderModelCreateOrConnectWithoutBaseInput
    connect?: HSProviderModelWhereUniqueInput
  }

  export type BusinessCertificationModelCreateNestedManyWithoutBusiness_userInput = {
    create?: XOR<Enumerable<BusinessCertificationModelCreateWithoutBusiness_userInput>, Enumerable<BusinessCertificationModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<BusinessCertificationModelCreateOrConnectWithoutBusiness_userInput>
    createMany?: BusinessCertificationModelCreateManyBusiness_userInputEnvelope
    connect?: Enumerable<BusinessCertificationModelWhereUniqueInput>
  }

  export type UserExpertiseModelCreateNestedManyWithoutBusiness_userInput = {
    create?: XOR<Enumerable<UserExpertiseModelCreateWithoutBusiness_userInput>, Enumerable<UserExpertiseModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<UserExpertiseModelCreateOrConnectWithoutBusiness_userInput>
    createMany?: UserExpertiseModelCreateManyBusiness_userInputEnvelope
    connect?: Enumerable<UserExpertiseModelWhereUniqueInput>
  }

  export type OauthAccessorModelCreateNestedManyWithoutBusiness_userInput = {
    create?: XOR<Enumerable<OauthAccessorModelCreateWithoutBusiness_userInput>, Enumerable<OauthAccessorModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<OauthAccessorModelCreateOrConnectWithoutBusiness_userInput>
    createMany?: OauthAccessorModelCreateManyBusiness_userInputEnvelope
    connect?: Enumerable<OauthAccessorModelWhereUniqueInput>
  }

  export type REAgentModelUncheckedCreateNestedOneWithoutBaseInput = {
    create?: XOR<REAgentModelCreateWithoutBaseInput, REAgentModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: REAgentModelCreateOrConnectWithoutBaseInput
    connect?: REAgentModelWhereUniqueInput
  }

  export type HSProviderModelUncheckedCreateNestedOneWithoutBaseInput = {
    create?: XOR<HSProviderModelCreateWithoutBaseInput, HSProviderModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: HSProviderModelCreateOrConnectWithoutBaseInput
    connect?: HSProviderModelWhereUniqueInput
  }

  export type BusinessCertificationModelUncheckedCreateNestedManyWithoutBusiness_userInput = {
    create?: XOR<Enumerable<BusinessCertificationModelCreateWithoutBusiness_userInput>, Enumerable<BusinessCertificationModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<BusinessCertificationModelCreateOrConnectWithoutBusiness_userInput>
    createMany?: BusinessCertificationModelCreateManyBusiness_userInputEnvelope
    connect?: Enumerable<BusinessCertificationModelWhereUniqueInput>
  }

  export type UserExpertiseModelUncheckedCreateNestedManyWithoutBusiness_userInput = {
    create?: XOR<Enumerable<UserExpertiseModelCreateWithoutBusiness_userInput>, Enumerable<UserExpertiseModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<UserExpertiseModelCreateOrConnectWithoutBusiness_userInput>
    createMany?: UserExpertiseModelCreateManyBusiness_userInputEnvelope
    connect?: Enumerable<UserExpertiseModelWhereUniqueInput>
  }

  export type OauthAccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput = {
    create?: XOR<Enumerable<OauthAccessorModelCreateWithoutBusiness_userInput>, Enumerable<OauthAccessorModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<OauthAccessorModelCreateOrConnectWithoutBusiness_userInput>
    createMany?: OauthAccessorModelCreateManyBusiness_userInputEnvelope
    connect?: Enumerable<OauthAccessorModelWhereUniqueInput>
  }

  export type UserModelUpdateOneRequiredWithoutBusiness_userNestedInput = {
    create?: XOR<UserModelCreateWithoutBusiness_userInput, UserModelUncheckedCreateWithoutBusiness_userInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutBusiness_userInput
    upsert?: UserModelUpsertWithoutBusiness_userInput
    connect?: UserModelWhereUniqueInput
    update?: XOR<UserModelUpdateWithoutBusiness_userInput, UserModelUncheckedUpdateWithoutBusiness_userInput>
  }

  export type REAgentModelUpdateOneWithoutBaseNestedInput = {
    create?: XOR<REAgentModelCreateWithoutBaseInput, REAgentModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: REAgentModelCreateOrConnectWithoutBaseInput
    upsert?: REAgentModelUpsertWithoutBaseInput
    disconnect?: boolean
    delete?: boolean
    connect?: REAgentModelWhereUniqueInput
    update?: XOR<REAgentModelUpdateWithoutBaseInput, REAgentModelUncheckedUpdateWithoutBaseInput>
  }

  export type HSProviderModelUpdateOneWithoutBaseNestedInput = {
    create?: XOR<HSProviderModelCreateWithoutBaseInput, HSProviderModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: HSProviderModelCreateOrConnectWithoutBaseInput
    upsert?: HSProviderModelUpsertWithoutBaseInput
    disconnect?: boolean
    delete?: boolean
    connect?: HSProviderModelWhereUniqueInput
    update?: XOR<HSProviderModelUpdateWithoutBaseInput, HSProviderModelUncheckedUpdateWithoutBaseInput>
  }

  export type BusinessCertificationModelUpdateManyWithoutBusiness_userNestedInput = {
    create?: XOR<Enumerable<BusinessCertificationModelCreateWithoutBusiness_userInput>, Enumerable<BusinessCertificationModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<BusinessCertificationModelCreateOrConnectWithoutBusiness_userInput>
    upsert?: Enumerable<BusinessCertificationModelUpsertWithWhereUniqueWithoutBusiness_userInput>
    createMany?: BusinessCertificationModelCreateManyBusiness_userInputEnvelope
    set?: Enumerable<BusinessCertificationModelWhereUniqueInput>
    disconnect?: Enumerable<BusinessCertificationModelWhereUniqueInput>
    delete?: Enumerable<BusinessCertificationModelWhereUniqueInput>
    connect?: Enumerable<BusinessCertificationModelWhereUniqueInput>
    update?: Enumerable<BusinessCertificationModelUpdateWithWhereUniqueWithoutBusiness_userInput>
    updateMany?: Enumerable<BusinessCertificationModelUpdateManyWithWhereWithoutBusiness_userInput>
    deleteMany?: Enumerable<BusinessCertificationModelScalarWhereInput>
  }

  export type UserExpertiseModelUpdateManyWithoutBusiness_userNestedInput = {
    create?: XOR<Enumerable<UserExpertiseModelCreateWithoutBusiness_userInput>, Enumerable<UserExpertiseModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<UserExpertiseModelCreateOrConnectWithoutBusiness_userInput>
    upsert?: Enumerable<UserExpertiseModelUpsertWithWhereUniqueWithoutBusiness_userInput>
    createMany?: UserExpertiseModelCreateManyBusiness_userInputEnvelope
    set?: Enumerable<UserExpertiseModelWhereUniqueInput>
    disconnect?: Enumerable<UserExpertiseModelWhereUniqueInput>
    delete?: Enumerable<UserExpertiseModelWhereUniqueInput>
    connect?: Enumerable<UserExpertiseModelWhereUniqueInput>
    update?: Enumerable<UserExpertiseModelUpdateWithWhereUniqueWithoutBusiness_userInput>
    updateMany?: Enumerable<UserExpertiseModelUpdateManyWithWhereWithoutBusiness_userInput>
    deleteMany?: Enumerable<UserExpertiseModelScalarWhereInput>
  }

  export type OauthAccessorModelUpdateManyWithoutBusiness_userNestedInput = {
    create?: XOR<Enumerable<OauthAccessorModelCreateWithoutBusiness_userInput>, Enumerable<OauthAccessorModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<OauthAccessorModelCreateOrConnectWithoutBusiness_userInput>
    upsert?: Enumerable<OauthAccessorModelUpsertWithWhereUniqueWithoutBusiness_userInput>
    createMany?: OauthAccessorModelCreateManyBusiness_userInputEnvelope
    set?: Enumerable<OauthAccessorModelWhereUniqueInput>
    disconnect?: Enumerable<OauthAccessorModelWhereUniqueInput>
    delete?: Enumerable<OauthAccessorModelWhereUniqueInput>
    connect?: Enumerable<OauthAccessorModelWhereUniqueInput>
    update?: Enumerable<OauthAccessorModelUpdateWithWhereUniqueWithoutBusiness_userInput>
    updateMany?: Enumerable<OauthAccessorModelUpdateManyWithWhereWithoutBusiness_userInput>
    deleteMany?: Enumerable<OauthAccessorModelScalarWhereInput>
  }

  export type REAgentModelUncheckedUpdateOneWithoutBaseNestedInput = {
    create?: XOR<REAgentModelCreateWithoutBaseInput, REAgentModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: REAgentModelCreateOrConnectWithoutBaseInput
    upsert?: REAgentModelUpsertWithoutBaseInput
    disconnect?: boolean
    delete?: boolean
    connect?: REAgentModelWhereUniqueInput
    update?: XOR<REAgentModelUpdateWithoutBaseInput, REAgentModelUncheckedUpdateWithoutBaseInput>
  }

  export type HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput = {
    create?: XOR<HSProviderModelCreateWithoutBaseInput, HSProviderModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: HSProviderModelCreateOrConnectWithoutBaseInput
    upsert?: HSProviderModelUpsertWithoutBaseInput
    disconnect?: boolean
    delete?: boolean
    connect?: HSProviderModelWhereUniqueInput
    update?: XOR<HSProviderModelUpdateWithoutBaseInput, HSProviderModelUncheckedUpdateWithoutBaseInput>
  }

  export type BusinessCertificationModelUncheckedUpdateManyWithoutBusiness_userNestedInput = {
    create?: XOR<Enumerable<BusinessCertificationModelCreateWithoutBusiness_userInput>, Enumerable<BusinessCertificationModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<BusinessCertificationModelCreateOrConnectWithoutBusiness_userInput>
    upsert?: Enumerable<BusinessCertificationModelUpsertWithWhereUniqueWithoutBusiness_userInput>
    createMany?: BusinessCertificationModelCreateManyBusiness_userInputEnvelope
    set?: Enumerable<BusinessCertificationModelWhereUniqueInput>
    disconnect?: Enumerable<BusinessCertificationModelWhereUniqueInput>
    delete?: Enumerable<BusinessCertificationModelWhereUniqueInput>
    connect?: Enumerable<BusinessCertificationModelWhereUniqueInput>
    update?: Enumerable<BusinessCertificationModelUpdateWithWhereUniqueWithoutBusiness_userInput>
    updateMany?: Enumerable<BusinessCertificationModelUpdateManyWithWhereWithoutBusiness_userInput>
    deleteMany?: Enumerable<BusinessCertificationModelScalarWhereInput>
  }

  export type UserExpertiseModelUncheckedUpdateManyWithoutBusiness_userNestedInput = {
    create?: XOR<Enumerable<UserExpertiseModelCreateWithoutBusiness_userInput>, Enumerable<UserExpertiseModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<UserExpertiseModelCreateOrConnectWithoutBusiness_userInput>
    upsert?: Enumerable<UserExpertiseModelUpsertWithWhereUniqueWithoutBusiness_userInput>
    createMany?: UserExpertiseModelCreateManyBusiness_userInputEnvelope
    set?: Enumerable<UserExpertiseModelWhereUniqueInput>
    disconnect?: Enumerable<UserExpertiseModelWhereUniqueInput>
    delete?: Enumerable<UserExpertiseModelWhereUniqueInput>
    connect?: Enumerable<UserExpertiseModelWhereUniqueInput>
    update?: Enumerable<UserExpertiseModelUpdateWithWhereUniqueWithoutBusiness_userInput>
    updateMany?: Enumerable<UserExpertiseModelUpdateManyWithWhereWithoutBusiness_userInput>
    deleteMany?: Enumerable<UserExpertiseModelScalarWhereInput>
  }

  export type OauthAccessorModelUncheckedUpdateManyWithoutBusiness_userNestedInput = {
    create?: XOR<Enumerable<OauthAccessorModelCreateWithoutBusiness_userInput>, Enumerable<OauthAccessorModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<OauthAccessorModelCreateOrConnectWithoutBusiness_userInput>
    upsert?: Enumerable<OauthAccessorModelUpsertWithWhereUniqueWithoutBusiness_userInput>
    createMany?: OauthAccessorModelCreateManyBusiness_userInputEnvelope
    set?: Enumerable<OauthAccessorModelWhereUniqueInput>
    disconnect?: Enumerable<OauthAccessorModelWhereUniqueInput>
    delete?: Enumerable<OauthAccessorModelWhereUniqueInput>
    connect?: Enumerable<OauthAccessorModelWhereUniqueInput>
    update?: Enumerable<OauthAccessorModelUpdateWithWhereUniqueWithoutBusiness_userInput>
    updateMany?: Enumerable<OauthAccessorModelUpdateManyWithWhereWithoutBusiness_userInput>
    deleteMany?: Enumerable<OauthAccessorModelScalarWhereInput>
  }

  export type BusinessUserCreateNestedOneWithoutRe_agentInput = {
    create?: XOR<BusinessUserCreateWithoutRe_agentInput, BusinessUserUncheckedCreateWithoutRe_agentInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutRe_agentInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type BusinessUserUpdateOneRequiredWithoutRe_agentNestedInput = {
    create?: XOR<BusinessUserCreateWithoutRe_agentInput, BusinessUserUncheckedCreateWithoutRe_agentInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutRe_agentInput
    upsert?: BusinessUserUpsertWithoutRe_agentInput
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutRe_agentInput, BusinessUserUncheckedUpdateWithoutRe_agentInput>
  }

  export type BusinessUserCreateNestedOneWithoutHs_providerInput = {
    create?: XOR<BusinessUserCreateWithoutHs_providerInput, BusinessUserUncheckedCreateWithoutHs_providerInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutHs_providerInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type HSIntroductionImageModelCreateNestedManyWithoutHs_providerInput = {
    create?: XOR<Enumerable<HSIntroductionImageModelCreateWithoutHs_providerInput>, Enumerable<HSIntroductionImageModelUncheckedCreateWithoutHs_providerInput>>
    connectOrCreate?: Enumerable<HSIntroductionImageModelCreateOrConnectWithoutHs_providerInput>
    createMany?: HSIntroductionImageModelCreateManyHs_providerInputEnvelope
    connect?: Enumerable<HSIntroductionImageModelWhereUniqueInput>
  }

  export type HSIntroductionImageModelUncheckedCreateNestedManyWithoutHs_providerInput = {
    create?: XOR<Enumerable<HSIntroductionImageModelCreateWithoutHs_providerInput>, Enumerable<HSIntroductionImageModelUncheckedCreateWithoutHs_providerInput>>
    connectOrCreate?: Enumerable<HSIntroductionImageModelCreateOrConnectWithoutHs_providerInput>
    createMany?: HSIntroductionImageModelCreateManyHs_providerInputEnvelope
    connect?: Enumerable<HSIntroductionImageModelWhereUniqueInput>
  }

  export type BusinessUserUpdateOneRequiredWithoutHs_providerNestedInput = {
    create?: XOR<BusinessUserCreateWithoutHs_providerInput, BusinessUserUncheckedCreateWithoutHs_providerInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutHs_providerInput
    upsert?: BusinessUserUpsertWithoutHs_providerInput
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutHs_providerInput, BusinessUserUncheckedUpdateWithoutHs_providerInput>
  }

  export type HSIntroductionImageModelUpdateManyWithoutHs_providerNestedInput = {
    create?: XOR<Enumerable<HSIntroductionImageModelCreateWithoutHs_providerInput>, Enumerable<HSIntroductionImageModelUncheckedCreateWithoutHs_providerInput>>
    connectOrCreate?: Enumerable<HSIntroductionImageModelCreateOrConnectWithoutHs_providerInput>
    upsert?: Enumerable<HSIntroductionImageModelUpsertWithWhereUniqueWithoutHs_providerInput>
    createMany?: HSIntroductionImageModelCreateManyHs_providerInputEnvelope
    set?: Enumerable<HSIntroductionImageModelWhereUniqueInput>
    disconnect?: Enumerable<HSIntroductionImageModelWhereUniqueInput>
    delete?: Enumerable<HSIntroductionImageModelWhereUniqueInput>
    connect?: Enumerable<HSIntroductionImageModelWhereUniqueInput>
    update?: Enumerable<HSIntroductionImageModelUpdateWithWhereUniqueWithoutHs_providerInput>
    updateMany?: Enumerable<HSIntroductionImageModelUpdateManyWithWhereWithoutHs_providerInput>
    deleteMany?: Enumerable<HSIntroductionImageModelScalarWhereInput>
  }

  export type HSIntroductionImageModelUncheckedUpdateManyWithoutHs_providerNestedInput = {
    create?: XOR<Enumerable<HSIntroductionImageModelCreateWithoutHs_providerInput>, Enumerable<HSIntroductionImageModelUncheckedCreateWithoutHs_providerInput>>
    connectOrCreate?: Enumerable<HSIntroductionImageModelCreateOrConnectWithoutHs_providerInput>
    upsert?: Enumerable<HSIntroductionImageModelUpsertWithWhereUniqueWithoutHs_providerInput>
    createMany?: HSIntroductionImageModelCreateManyHs_providerInputEnvelope
    set?: Enumerable<HSIntroductionImageModelWhereUniqueInput>
    disconnect?: Enumerable<HSIntroductionImageModelWhereUniqueInput>
    delete?: Enumerable<HSIntroductionImageModelWhereUniqueInput>
    connect?: Enumerable<HSIntroductionImageModelWhereUniqueInput>
    update?: Enumerable<HSIntroductionImageModelUpdateWithWhereUniqueWithoutHs_providerInput>
    updateMany?: Enumerable<HSIntroductionImageModelUpdateManyWithWhereWithoutHs_providerInput>
    deleteMany?: Enumerable<HSIntroductionImageModelScalarWhereInput>
  }

  export type BusinessUserCreateNestedOneWithoutCertificationsInput = {
    create?: XOR<BusinessUserCreateWithoutCertificationsInput, BusinessUserUncheckedCreateWithoutCertificationsInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutCertificationsInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type BusinessUserUpdateOneRequiredWithoutCertificationsNestedInput = {
    create?: XOR<BusinessUserCreateWithoutCertificationsInput, BusinessUserUncheckedCreateWithoutCertificationsInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutCertificationsInput
    upsert?: BusinessUserUpsertWithoutCertificationsInput
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutCertificationsInput, BusinessUserUncheckedUpdateWithoutCertificationsInput>
  }

  export type HSProviderModelCreateNestedOneWithoutIntroduction_imagesInput = {
    create?: XOR<HSProviderModelCreateWithoutIntroduction_imagesInput, HSProviderModelUncheckedCreateWithoutIntroduction_imagesInput>
    connectOrCreate?: HSProviderModelCreateOrConnectWithoutIntroduction_imagesInput
    connect?: HSProviderModelWhereUniqueInput
  }

  export type HSProviderModelUpdateOneRequiredWithoutIntroduction_imagesNestedInput = {
    create?: XOR<HSProviderModelCreateWithoutIntroduction_imagesInput, HSProviderModelUncheckedCreateWithoutIntroduction_imagesInput>
    connectOrCreate?: HSProviderModelCreateOrConnectWithoutIntroduction_imagesInput
    upsert?: HSProviderModelUpsertWithoutIntroduction_imagesInput
    connect?: HSProviderModelWhereUniqueInput
    update?: XOR<HSProviderModelUpdateWithoutIntroduction_imagesInput, HSProviderModelUncheckedUpdateWithoutIntroduction_imagesInput>
  }

  export type ExpertSubCategoryModelCreateNestedOneWithoutExpertisesInput = {
    create?: XOR<ExpertSubCategoryModelCreateWithoutExpertisesInput, ExpertSubCategoryModelUncheckedCreateWithoutExpertisesInput>
    connectOrCreate?: ExpertSubCategoryModelCreateOrConnectWithoutExpertisesInput
    connect?: ExpertSubCategoryModelWhereUniqueInput
  }

  export type BusinessUserCreateNestedOneWithoutExpertisesInput = {
    create?: XOR<BusinessUserCreateWithoutExpertisesInput, BusinessUserUncheckedCreateWithoutExpertisesInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutExpertisesInput
    connect?: BusinessUserWhereUniqueInput
  }

  export type ExpertSubCategoryModelUpdateOneRequiredWithoutExpertisesNestedInput = {
    create?: XOR<ExpertSubCategoryModelCreateWithoutExpertisesInput, ExpertSubCategoryModelUncheckedCreateWithoutExpertisesInput>
    connectOrCreate?: ExpertSubCategoryModelCreateOrConnectWithoutExpertisesInput
    upsert?: ExpertSubCategoryModelUpsertWithoutExpertisesInput
    connect?: ExpertSubCategoryModelWhereUniqueInput
    update?: XOR<ExpertSubCategoryModelUpdateWithoutExpertisesInput, ExpertSubCategoryModelUncheckedUpdateWithoutExpertisesInput>
  }

  export type BusinessUserUpdateOneRequiredWithoutExpertisesNestedInput = {
    create?: XOR<BusinessUserCreateWithoutExpertisesInput, BusinessUserUncheckedCreateWithoutExpertisesInput>
    connectOrCreate?: BusinessUserCreateOrConnectWithoutExpertisesInput
    upsert?: BusinessUserUpsertWithoutExpertisesInput
    connect?: BusinessUserWhereUniqueInput
    update?: XOR<BusinessUserUpdateWithoutExpertisesInput, BusinessUserUncheckedUpdateWithoutExpertisesInput>
  }

  export type ExpertSuperCategoryModelCreateNestedOneWithoutSubsInput = {
    create?: XOR<ExpertSuperCategoryModelCreateWithoutSubsInput, ExpertSuperCategoryModelUncheckedCreateWithoutSubsInput>
    connectOrCreate?: ExpertSuperCategoryModelCreateOrConnectWithoutSubsInput
    connect?: ExpertSuperCategoryModelWhereUniqueInput
  }

  export type UserExpertiseModelCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<UserExpertiseModelCreateWithoutCategoryInput>, Enumerable<UserExpertiseModelUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<UserExpertiseModelCreateOrConnectWithoutCategoryInput>
    createMany?: UserExpertiseModelCreateManyCategoryInputEnvelope
    connect?: Enumerable<UserExpertiseModelWhereUniqueInput>
  }

  export type UserExpertiseModelUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<UserExpertiseModelCreateWithoutCategoryInput>, Enumerable<UserExpertiseModelUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<UserExpertiseModelCreateOrConnectWithoutCategoryInput>
    createMany?: UserExpertiseModelCreateManyCategoryInputEnvelope
    connect?: Enumerable<UserExpertiseModelWhereUniqueInput>
  }

  export type ExpertSuperCategoryModelUpdateOneRequiredWithoutSubsNestedInput = {
    create?: XOR<ExpertSuperCategoryModelCreateWithoutSubsInput, ExpertSuperCategoryModelUncheckedCreateWithoutSubsInput>
    connectOrCreate?: ExpertSuperCategoryModelCreateOrConnectWithoutSubsInput
    upsert?: ExpertSuperCategoryModelUpsertWithoutSubsInput
    connect?: ExpertSuperCategoryModelWhereUniqueInput
    update?: XOR<ExpertSuperCategoryModelUpdateWithoutSubsInput, ExpertSuperCategoryModelUncheckedUpdateWithoutSubsInput>
  }

  export type UserExpertiseModelUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<UserExpertiseModelCreateWithoutCategoryInput>, Enumerable<UserExpertiseModelUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<UserExpertiseModelCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<UserExpertiseModelUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: UserExpertiseModelCreateManyCategoryInputEnvelope
    set?: Enumerable<UserExpertiseModelWhereUniqueInput>
    disconnect?: Enumerable<UserExpertiseModelWhereUniqueInput>
    delete?: Enumerable<UserExpertiseModelWhereUniqueInput>
    connect?: Enumerable<UserExpertiseModelWhereUniqueInput>
    update?: Enumerable<UserExpertiseModelUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<UserExpertiseModelUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<UserExpertiseModelScalarWhereInput>
  }

  export type UserExpertiseModelUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<UserExpertiseModelCreateWithoutCategoryInput>, Enumerable<UserExpertiseModelUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<UserExpertiseModelCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<UserExpertiseModelUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: UserExpertiseModelCreateManyCategoryInputEnvelope
    set?: Enumerable<UserExpertiseModelWhereUniqueInput>
    disconnect?: Enumerable<UserExpertiseModelWhereUniqueInput>
    delete?: Enumerable<UserExpertiseModelWhereUniqueInput>
    connect?: Enumerable<UserExpertiseModelWhereUniqueInput>
    update?: Enumerable<UserExpertiseModelUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<UserExpertiseModelUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<UserExpertiseModelScalarWhereInput>
  }

  export type ExpertSubCategoryModelCreateNestedManyWithoutSuperInput = {
    create?: XOR<Enumerable<ExpertSubCategoryModelCreateWithoutSuperInput>, Enumerable<ExpertSubCategoryModelUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<ExpertSubCategoryModelCreateOrConnectWithoutSuperInput>
    createMany?: ExpertSubCategoryModelCreateManySuperInputEnvelope
    connect?: Enumerable<ExpertSubCategoryModelWhereUniqueInput>
  }

  export type ExpertSubCategoryModelUncheckedCreateNestedManyWithoutSuperInput = {
    create?: XOR<Enumerable<ExpertSubCategoryModelCreateWithoutSuperInput>, Enumerable<ExpertSubCategoryModelUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<ExpertSubCategoryModelCreateOrConnectWithoutSuperInput>
    createMany?: ExpertSubCategoryModelCreateManySuperInputEnvelope
    connect?: Enumerable<ExpertSubCategoryModelWhereUniqueInput>
  }

  export type EnumExpertBusinessTypeFieldUpdateOperationsInput = {
    set?: ExpertBusinessType
  }

  export type ExpertSubCategoryModelUpdateManyWithoutSuperNestedInput = {
    create?: XOR<Enumerable<ExpertSubCategoryModelCreateWithoutSuperInput>, Enumerable<ExpertSubCategoryModelUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<ExpertSubCategoryModelCreateOrConnectWithoutSuperInput>
    upsert?: Enumerable<ExpertSubCategoryModelUpsertWithWhereUniqueWithoutSuperInput>
    createMany?: ExpertSubCategoryModelCreateManySuperInputEnvelope
    set?: Enumerable<ExpertSubCategoryModelWhereUniqueInput>
    disconnect?: Enumerable<ExpertSubCategoryModelWhereUniqueInput>
    delete?: Enumerable<ExpertSubCategoryModelWhereUniqueInput>
    connect?: Enumerable<ExpertSubCategoryModelWhereUniqueInput>
    update?: Enumerable<ExpertSubCategoryModelUpdateWithWhereUniqueWithoutSuperInput>
    updateMany?: Enumerable<ExpertSubCategoryModelUpdateManyWithWhereWithoutSuperInput>
    deleteMany?: Enumerable<ExpertSubCategoryModelScalarWhereInput>
  }

  export type ExpertSubCategoryModelUncheckedUpdateManyWithoutSuperNestedInput = {
    create?: XOR<Enumerable<ExpertSubCategoryModelCreateWithoutSuperInput>, Enumerable<ExpertSubCategoryModelUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<ExpertSubCategoryModelCreateOrConnectWithoutSuperInput>
    upsert?: Enumerable<ExpertSubCategoryModelUpsertWithWhereUniqueWithoutSuperInput>
    createMany?: ExpertSubCategoryModelCreateManySuperInputEnvelope
    set?: Enumerable<ExpertSubCategoryModelWhereUniqueInput>
    disconnect?: Enumerable<ExpertSubCategoryModelWhereUniqueInput>
    delete?: Enumerable<ExpertSubCategoryModelWhereUniqueInput>
    connect?: Enumerable<ExpertSubCategoryModelWhereUniqueInput>
    update?: Enumerable<ExpertSubCategoryModelUpdateWithWhereUniqueWithoutSuperInput>
    updateMany?: Enumerable<ExpertSubCategoryModelUpdateManyWithWhereWithoutSuperInput>
    deleteMany?: Enumerable<ExpertSubCategoryModelScalarWhereInput>
  }

  export type AgreementAcceptanceModelCreateNestedManyWithoutAgreementInput = {
    create?: XOR<Enumerable<AgreementAcceptanceModelCreateWithoutAgreementInput>, Enumerable<AgreementAcceptanceModelUncheckedCreateWithoutAgreementInput>>
    connectOrCreate?: Enumerable<AgreementAcceptanceModelCreateOrConnectWithoutAgreementInput>
    createMany?: AgreementAcceptanceModelCreateManyAgreementInputEnvelope
    connect?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
  }

  export type AgreementAcceptanceModelUncheckedCreateNestedManyWithoutAgreementInput = {
    create?: XOR<Enumerable<AgreementAcceptanceModelCreateWithoutAgreementInput>, Enumerable<AgreementAcceptanceModelUncheckedCreateWithoutAgreementInput>>
    connectOrCreate?: Enumerable<AgreementAcceptanceModelCreateOrConnectWithoutAgreementInput>
    createMany?: AgreementAcceptanceModelCreateManyAgreementInputEnvelope
    connect?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
  }

  export type EnumAgreementUserTypeFieldUpdateOperationsInput = {
    set?: AgreementUserType
  }

  export type AgreementAcceptanceModelUpdateManyWithoutAgreementNestedInput = {
    create?: XOR<Enumerable<AgreementAcceptanceModelCreateWithoutAgreementInput>, Enumerable<AgreementAcceptanceModelUncheckedCreateWithoutAgreementInput>>
    connectOrCreate?: Enumerable<AgreementAcceptanceModelCreateOrConnectWithoutAgreementInput>
    upsert?: Enumerable<AgreementAcceptanceModelUpsertWithWhereUniqueWithoutAgreementInput>
    createMany?: AgreementAcceptanceModelCreateManyAgreementInputEnvelope
    set?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
    disconnect?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
    delete?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
    connect?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
    update?: Enumerable<AgreementAcceptanceModelUpdateWithWhereUniqueWithoutAgreementInput>
    updateMany?: Enumerable<AgreementAcceptanceModelUpdateManyWithWhereWithoutAgreementInput>
    deleteMany?: Enumerable<AgreementAcceptanceModelScalarWhereInput>
  }

  export type AgreementAcceptanceModelUncheckedUpdateManyWithoutAgreementNestedInput = {
    create?: XOR<Enumerable<AgreementAcceptanceModelCreateWithoutAgreementInput>, Enumerable<AgreementAcceptanceModelUncheckedCreateWithoutAgreementInput>>
    connectOrCreate?: Enumerable<AgreementAcceptanceModelCreateOrConnectWithoutAgreementInput>
    upsert?: Enumerable<AgreementAcceptanceModelUpsertWithWhereUniqueWithoutAgreementInput>
    createMany?: AgreementAcceptanceModelCreateManyAgreementInputEnvelope
    set?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
    disconnect?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
    delete?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
    connect?: Enumerable<AgreementAcceptanceModelWhereUniqueInput>
    update?: Enumerable<AgreementAcceptanceModelUpdateWithWhereUniqueWithoutAgreementInput>
    updateMany?: Enumerable<AgreementAcceptanceModelUpdateManyWithWhereWithoutAgreementInput>
    deleteMany?: Enumerable<AgreementAcceptanceModelScalarWhereInput>
  }

  export type UserModelCreateNestedOneWithoutAgreement_acceptancesInput = {
    create?: XOR<UserModelCreateWithoutAgreement_acceptancesInput, UserModelUncheckedCreateWithoutAgreement_acceptancesInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutAgreement_acceptancesInput
    connect?: UserModelWhereUniqueInput
  }

  export type AgreementModelCreateNestedOneWithoutAcceptancesInput = {
    create?: XOR<AgreementModelCreateWithoutAcceptancesInput, AgreementModelUncheckedCreateWithoutAcceptancesInput>
    connectOrCreate?: AgreementModelCreateOrConnectWithoutAcceptancesInput
    connect?: AgreementModelWhereUniqueInput
  }

  export type UserModelUpdateOneRequiredWithoutAgreement_acceptancesNestedInput = {
    create?: XOR<UserModelCreateWithoutAgreement_acceptancesInput, UserModelUncheckedCreateWithoutAgreement_acceptancesInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutAgreement_acceptancesInput
    upsert?: UserModelUpsertWithoutAgreement_acceptancesInput
    connect?: UserModelWhereUniqueInput
    update?: XOR<UserModelUpdateWithoutAgreement_acceptancesInput, UserModelUncheckedUpdateWithoutAgreement_acceptancesInput>
  }

  export type AgreementModelUpdateOneRequiredWithoutAcceptancesNestedInput = {
    create?: XOR<AgreementModelCreateWithoutAcceptancesInput, AgreementModelUncheckedCreateWithoutAcceptancesInput>
    connectOrCreate?: AgreementModelCreateOrConnectWithoutAcceptancesInput
    upsert?: AgreementModelUpsertWithoutAcceptancesInput
    connect?: AgreementModelWhereUniqueInput
    update?: XOR<AgreementModelUpdateWithoutAcceptancesInput, AgreementModelUncheckedUpdateWithoutAcceptancesInput>
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

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
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

  export type NestedEnumOauthTypeFilter = {
    equals?: OauthType
    in?: Enumerable<OauthType>
    notIn?: Enumerable<OauthType>
    not?: NestedEnumOauthTypeFilter | OauthType
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

  export type NestedEnumGenderTypeNullableFilter = {
    equals?: GenderType | null
    in?: Enumerable<GenderType> | null
    notIn?: Enumerable<GenderType> | null
    not?: NestedEnumGenderTypeNullableFilter | GenderType | null
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

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
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

  export type NestedEnumOauthTypeWithAggregatesFilter = {
    equals?: OauthType
    in?: Enumerable<OauthType>
    notIn?: Enumerable<OauthType>
    not?: NestedEnumOauthTypeWithAggregatesFilter | OauthType
    _count?: NestedIntFilter
    _min?: NestedEnumOauthTypeFilter
    _max?: NestedEnumOauthTypeFilter
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

  export type NestedEnumGenderTypeNullableWithAggregatesFilter = {
    equals?: GenderType | null
    in?: Enumerable<GenderType> | null
    notIn?: Enumerable<GenderType> | null
    not?: NestedEnumGenderTypeNullableWithAggregatesFilter | GenderType | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumGenderTypeNullableFilter
    _max?: NestedEnumGenderTypeNullableFilter
  }

  export type NestedEnumExpertBusinessTypeFilter = {
    equals?: ExpertBusinessType
    in?: Enumerable<ExpertBusinessType>
    notIn?: Enumerable<ExpertBusinessType>
    not?: NestedEnumExpertBusinessTypeFilter | ExpertBusinessType
  }

  export type NestedEnumExpertBusinessTypeWithAggregatesFilter = {
    equals?: ExpertBusinessType
    in?: Enumerable<ExpertBusinessType>
    notIn?: Enumerable<ExpertBusinessType>
    not?: NestedEnumExpertBusinessTypeWithAggregatesFilter | ExpertBusinessType
    _count?: NestedIntFilter
    _min?: NestedEnumExpertBusinessTypeFilter
    _max?: NestedEnumExpertBusinessTypeFilter
  }

  export type NestedEnumAgreementUserTypeFilter = {
    equals?: AgreementUserType
    in?: Enumerable<AgreementUserType>
    notIn?: Enumerable<AgreementUserType>
    not?: NestedEnumAgreementUserTypeFilter | AgreementUserType
  }

  export type NestedEnumAgreementUserTypeWithAggregatesFilter = {
    equals?: AgreementUserType
    in?: Enumerable<AgreementUserType>
    notIn?: Enumerable<AgreementUserType>
    not?: NestedEnumAgreementUserTypeWithAggregatesFilter | AgreementUserType
    _count?: NestedIntFilter
    _min?: NestedEnumAgreementUserTypeFilter
    _max?: NestedEnumAgreementUserTypeFilter
  }

  export type BusinessUserCreateWithoutOauth_accessorInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second: string
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBusiness_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationModelCreateNestedManyWithoutBusiness_userInput
    expertises?: UserExpertiseModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserUncheckedCreateWithoutOauth_accessorInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second: string
    profile_image_url: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationModelUncheckedCreateNestedManyWithoutBusiness_userInput
    expertises?: UserExpertiseModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserCreateOrConnectWithoutOauth_accessorInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutOauth_accessorInput, BusinessUserUncheckedCreateWithoutOauth_accessorInput>
  }

  export type CustomerModelCreateWithoutOauth_accessorInput = {
    birth?: string | null
    gender?: GenderType | null
    phone?: string | null
    address_first?: string | null
    address_second?: string | null
    profile_image_url?: string | null
    base: UserModelCreateNestedOneWithoutCustomerInput
  }

  export type CustomerModelUncheckedCreateWithoutOauth_accessorInput = {
    id: string
    birth?: string | null
    gender?: GenderType | null
    phone?: string | null
    address_first?: string | null
    address_second?: string | null
    profile_image_url?: string | null
  }

  export type CustomerModelCreateOrConnectWithoutOauth_accessorInput = {
    where: CustomerModelWhereUniqueInput
    create: XOR<CustomerModelCreateWithoutOauth_accessorInput, CustomerModelUncheckedCreateWithoutOauth_accessorInput>
  }

  export type BusinessUserUpsertWithoutOauth_accessorInput = {
    update: XOR<BusinessUserUpdateWithoutOauth_accessorInput, BusinessUserUncheckedUpdateWithoutOauth_accessorInput>
    create: XOR<BusinessUserCreateWithoutOauth_accessorInput, BusinessUserUncheckedCreateWithoutOauth_accessorInput>
  }

  export type BusinessUserUpdateWithoutOauth_accessorInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBusiness_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationModelUpdateManyWithoutBusiness_userNestedInput
    expertises?: UserExpertiseModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutOauth_accessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    expertises?: UserExpertiseModelUncheckedUpdateManyWithoutBusiness_userNestedInput
  }

  export type CustomerModelUpsertWithoutOauth_accessorInput = {
    update: XOR<CustomerModelUpdateWithoutOauth_accessorInput, CustomerModelUncheckedUpdateWithoutOauth_accessorInput>
    create: XOR<CustomerModelCreateWithoutOauth_accessorInput, CustomerModelUncheckedCreateWithoutOauth_accessorInput>
  }

  export type CustomerModelUpdateWithoutOauth_accessorInput = {
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    base?: UserModelUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type CustomerModelUncheckedUpdateWithoutOauth_accessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerModelCreateWithoutBaseInput = {
    birth?: string | null
    gender?: GenderType | null
    phone?: string | null
    address_first?: string | null
    address_second?: string | null
    profile_image_url?: string | null
    oauth_accessor?: OauthAccessorModelCreateNestedManyWithoutCustomerInput
  }

  export type CustomerModelUncheckedCreateWithoutBaseInput = {
    birth?: string | null
    gender?: GenderType | null
    phone?: string | null
    address_first?: string | null
    address_second?: string | null
    profile_image_url?: string | null
    oauth_accessor?: OauthAccessorModelUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerModelCreateOrConnectWithoutBaseInput = {
    where: CustomerModelWhereUniqueInput
    create: XOR<CustomerModelCreateWithoutBaseInput, CustomerModelUncheckedCreateWithoutBaseInput>
  }

  export type BusinessUserCreateWithoutBaseInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second: string
    profile_image_url: string
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationModelCreateNestedManyWithoutBusiness_userInput
    expertises?: UserExpertiseModelCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserUncheckedCreateWithoutBaseInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second: string
    profile_image_url: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationModelUncheckedCreateNestedManyWithoutBusiness_userInput
    expertises?: UserExpertiseModelUncheckedCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserCreateOrConnectWithoutBaseInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutBaseInput, BusinessUserUncheckedCreateWithoutBaseInput>
  }

  export type AgreementAcceptanceModelCreateWithoutUserInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    agreement: AgreementModelCreateNestedOneWithoutAcceptancesInput
  }

  export type AgreementAcceptanceModelUncheckedCreateWithoutUserInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    agreement_id: string
  }

  export type AgreementAcceptanceModelCreateOrConnectWithoutUserInput = {
    where: AgreementAcceptanceModelWhereUniqueInput
    create: XOR<AgreementAcceptanceModelCreateWithoutUserInput, AgreementAcceptanceModelUncheckedCreateWithoutUserInput>
  }

  export type AgreementAcceptanceModelCreateManyUserInputEnvelope = {
    data: Enumerable<AgreementAcceptanceModelCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CustomerModelUpsertWithoutBaseInput = {
    update: XOR<CustomerModelUpdateWithoutBaseInput, CustomerModelUncheckedUpdateWithoutBaseInput>
    create: XOR<CustomerModelCreateWithoutBaseInput, CustomerModelUncheckedCreateWithoutBaseInput>
  }

  export type CustomerModelUpdateWithoutBaseInput = {
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_accessor?: OauthAccessorModelUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerModelUncheckedUpdateWithoutBaseInput = {
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_accessor?: OauthAccessorModelUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type BusinessUserUpsertWithoutBaseInput = {
    update: XOR<BusinessUserUpdateWithoutBaseInput, BusinessUserUncheckedUpdateWithoutBaseInput>
    create: XOR<BusinessUserCreateWithoutBaseInput, BusinessUserUncheckedCreateWithoutBaseInput>
  }

  export type BusinessUserUpdateWithoutBaseInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationModelUpdateManyWithoutBusiness_userNestedInput
    expertises?: UserExpertiseModelUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutBaseInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    expertises?: UserExpertiseModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUncheckedUpdateManyWithoutBusiness_userNestedInput
  }

  export type AgreementAcceptanceModelUpsertWithWhereUniqueWithoutUserInput = {
    where: AgreementAcceptanceModelWhereUniqueInput
    update: XOR<AgreementAcceptanceModelUpdateWithoutUserInput, AgreementAcceptanceModelUncheckedUpdateWithoutUserInput>
    create: XOR<AgreementAcceptanceModelCreateWithoutUserInput, AgreementAcceptanceModelUncheckedCreateWithoutUserInput>
  }

  export type AgreementAcceptanceModelUpdateWithWhereUniqueWithoutUserInput = {
    where: AgreementAcceptanceModelWhereUniqueInput
    data: XOR<AgreementAcceptanceModelUpdateWithoutUserInput, AgreementAcceptanceModelUncheckedUpdateWithoutUserInput>
  }

  export type AgreementAcceptanceModelUpdateManyWithWhereWithoutUserInput = {
    where: AgreementAcceptanceModelScalarWhereInput
    data: XOR<AgreementAcceptanceModelUpdateManyMutationInput, AgreementAcceptanceModelUncheckedUpdateManyWithoutAgreement_acceptancesInput>
  }

  export type AgreementAcceptanceModelScalarWhereInput = {
    AND?: Enumerable<AgreementAcceptanceModelScalarWhereInput>
    OR?: Enumerable<AgreementAcceptanceModelScalarWhereInput>
    NOT?: Enumerable<AgreementAcceptanceModelScalarWhereInput>
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    id?: StringFilter | string
    user_id?: StringFilter | string
    agreement_id?: StringFilter | string
  }

  export type UserModelCreateWithoutCustomerInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    email?: string | null
    business_user?: BusinessUserCreateNestedOneWithoutBaseInput
    agreement_acceptances?: AgreementAcceptanceModelCreateNestedManyWithoutUserInput
  }

  export type UserModelUncheckedCreateWithoutCustomerInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    email?: string | null
    business_user?: BusinessUserUncheckedCreateNestedOneWithoutBaseInput
    agreement_acceptances?: AgreementAcceptanceModelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserModelCreateOrConnectWithoutCustomerInput = {
    where: UserModelWhereUniqueInput
    create: XOR<UserModelCreateWithoutCustomerInput, UserModelUncheckedCreateWithoutCustomerInput>
  }

  export type OauthAccessorModelCreateWithoutCustomerInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    oauth_type: OauthType
    oauth_sub: string
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_first?: string | null
    address_second?: string | null
    business_user: BusinessUserCreateNestedOneWithoutOauth_accessorInput
  }

  export type OauthAccessorModelUncheckedCreateWithoutCustomerInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    oauth_type: OauthType
    oauth_sub: string
    business_user_id: string
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_first?: string | null
    address_second?: string | null
  }

  export type OauthAccessorModelCreateOrConnectWithoutCustomerInput = {
    where: OauthAccessorModelWhereUniqueInput
    create: XOR<OauthAccessorModelCreateWithoutCustomerInput, OauthAccessorModelUncheckedCreateWithoutCustomerInput>
  }

  export type OauthAccessorModelCreateManyCustomerInputEnvelope = {
    data: Enumerable<OauthAccessorModelCreateManyCustomerInput>
    skipDuplicates?: boolean
  }

  export type UserModelUpsertWithoutCustomerInput = {
    update: XOR<UserModelUpdateWithoutCustomerInput, UserModelUncheckedUpdateWithoutCustomerInput>
    create: XOR<UserModelCreateWithoutCustomerInput, UserModelUncheckedCreateWithoutCustomerInput>
  }

  export type UserModelUpdateWithoutCustomerInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    business_user?: BusinessUserUpdateOneWithoutBaseNestedInput
    agreement_acceptances?: AgreementAcceptanceModelUpdateManyWithoutUserNestedInput
  }

  export type UserModelUncheckedUpdateWithoutCustomerInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    business_user?: BusinessUserUncheckedUpdateOneWithoutBaseNestedInput
    agreement_acceptances?: AgreementAcceptanceModelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OauthAccessorModelUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OauthAccessorModelWhereUniqueInput
    update: XOR<OauthAccessorModelUpdateWithoutCustomerInput, OauthAccessorModelUncheckedUpdateWithoutCustomerInput>
    create: XOR<OauthAccessorModelCreateWithoutCustomerInput, OauthAccessorModelUncheckedCreateWithoutCustomerInput>
  }

  export type OauthAccessorModelUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OauthAccessorModelWhereUniqueInput
    data: XOR<OauthAccessorModelUpdateWithoutCustomerInput, OauthAccessorModelUncheckedUpdateWithoutCustomerInput>
  }

  export type OauthAccessorModelUpdateManyWithWhereWithoutCustomerInput = {
    where: OauthAccessorModelScalarWhereInput
    data: XOR<OauthAccessorModelUpdateManyMutationInput, OauthAccessorModelUncheckedUpdateManyWithoutOauth_accessorInput>
  }

  export type OauthAccessorModelScalarWhereInput = {
    AND?: Enumerable<OauthAccessorModelScalarWhereInput>
    OR?: Enumerable<OauthAccessorModelScalarWhereInput>
    NOT?: Enumerable<OauthAccessorModelScalarWhereInput>
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    id?: StringFilter | string
    oauth_type?: EnumOauthTypeFilter | OauthType
    oauth_sub?: StringFilter | string
    business_user_id?: StringFilter | string
    customer_id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    phone?: StringNullableFilter | string | null
    profile_image_url?: StringNullableFilter | string | null
    birth?: StringNullableFilter | string | null
    gender?: EnumGenderTypeNullableFilter | GenderType | null
    address_first?: StringNullableFilter | string | null
    address_second?: StringNullableFilter | string | null
  }

  export type UserModelCreateWithoutBusiness_userInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    email?: string | null
    customer?: CustomerModelCreateNestedOneWithoutBaseInput
    agreement_acceptances?: AgreementAcceptanceModelCreateNestedManyWithoutUserInput
  }

  export type UserModelUncheckedCreateWithoutBusiness_userInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    email?: string | null
    customer?: CustomerModelUncheckedCreateNestedOneWithoutBaseInput
    agreement_acceptances?: AgreementAcceptanceModelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserModelCreateOrConnectWithoutBusiness_userInput = {
    where: UserModelWhereUniqueInput
    create: XOR<UserModelCreateWithoutBusiness_userInput, UserModelUncheckedCreateWithoutBusiness_userInput>
  }

  export type REAgentModelCreateWithoutBaseInput = {
    is_licensed: boolean
    re_num: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
  }

  export type REAgentModelUncheckedCreateWithoutBaseInput = {
    is_licensed: boolean
    re_num: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
  }

  export type REAgentModelCreateOrConnectWithoutBaseInput = {
    where: REAgentModelWhereUniqueInput
    create: XOR<REAgentModelCreateWithoutBaseInput, REAgentModelUncheckedCreateWithoutBaseInput>
  }

  export type HSProviderModelCreateWithoutBaseInput = {
    business_registration_num: string
    introduction_images?: HSIntroductionImageModelCreateNestedManyWithoutHs_providerInput
  }

  export type HSProviderModelUncheckedCreateWithoutBaseInput = {
    business_registration_num: string
    introduction_images?: HSIntroductionImageModelUncheckedCreateNestedManyWithoutHs_providerInput
  }

  export type HSProviderModelCreateOrConnectWithoutBaseInput = {
    where: HSProviderModelWhereUniqueInput
    create: XOR<HSProviderModelCreateWithoutBaseInput, HSProviderModelUncheckedCreateWithoutBaseInput>
  }

  export type BusinessCertificationModelCreateWithoutBusiness_userInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    image_url: string
  }

  export type BusinessCertificationModelUncheckedCreateWithoutBusiness_userInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    image_url: string
  }

  export type BusinessCertificationModelCreateOrConnectWithoutBusiness_userInput = {
    where: BusinessCertificationModelWhereUniqueInput
    create: XOR<BusinessCertificationModelCreateWithoutBusiness_userInput, BusinessCertificationModelUncheckedCreateWithoutBusiness_userInput>
  }

  export type BusinessCertificationModelCreateManyBusiness_userInputEnvelope = {
    data: Enumerable<BusinessCertificationModelCreateManyBusiness_userInput>
    skipDuplicates?: boolean
  }

  export type UserExpertiseModelCreateWithoutBusiness_userInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    category: ExpertSubCategoryModelCreateNestedOneWithoutExpertisesInput
  }

  export type UserExpertiseModelUncheckedCreateWithoutBusiness_userInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    category_id: string
  }

  export type UserExpertiseModelCreateOrConnectWithoutBusiness_userInput = {
    where: UserExpertiseModelWhereUniqueInput
    create: XOR<UserExpertiseModelCreateWithoutBusiness_userInput, UserExpertiseModelUncheckedCreateWithoutBusiness_userInput>
  }

  export type UserExpertiseModelCreateManyBusiness_userInputEnvelope = {
    data: Enumerable<UserExpertiseModelCreateManyBusiness_userInput>
    skipDuplicates?: boolean
  }

  export type OauthAccessorModelCreateWithoutBusiness_userInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    oauth_type: OauthType
    oauth_sub: string
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_first?: string | null
    address_second?: string | null
    customer: CustomerModelCreateNestedOneWithoutOauth_accessorInput
  }

  export type OauthAccessorModelUncheckedCreateWithoutBusiness_userInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    oauth_type: OauthType
    oauth_sub: string
    customer_id: string
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_first?: string | null
    address_second?: string | null
  }

  export type OauthAccessorModelCreateOrConnectWithoutBusiness_userInput = {
    where: OauthAccessorModelWhereUniqueInput
    create: XOR<OauthAccessorModelCreateWithoutBusiness_userInput, OauthAccessorModelUncheckedCreateWithoutBusiness_userInput>
  }

  export type OauthAccessorModelCreateManyBusiness_userInputEnvelope = {
    data: Enumerable<OauthAccessorModelCreateManyBusiness_userInput>
    skipDuplicates?: boolean
  }

  export type UserModelUpsertWithoutBusiness_userInput = {
    update: XOR<UserModelUpdateWithoutBusiness_userInput, UserModelUncheckedUpdateWithoutBusiness_userInput>
    create: XOR<UserModelCreateWithoutBusiness_userInput, UserModelUncheckedCreateWithoutBusiness_userInput>
  }

  export type UserModelUpdateWithoutBusiness_userInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerModelUpdateOneWithoutBaseNestedInput
    agreement_acceptances?: AgreementAcceptanceModelUpdateManyWithoutUserNestedInput
  }

  export type UserModelUncheckedUpdateWithoutBusiness_userInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerModelUncheckedUpdateOneWithoutBaseNestedInput
    agreement_acceptances?: AgreementAcceptanceModelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type REAgentModelUpsertWithoutBaseInput = {
    update: XOR<REAgentModelUpdateWithoutBaseInput, REAgentModelUncheckedUpdateWithoutBaseInput>
    create: XOR<REAgentModelCreateWithoutBaseInput, REAgentModelUncheckedCreateWithoutBaseInput>
  }

  export type REAgentModelUpdateWithoutBaseInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_num?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
  }

  export type REAgentModelUncheckedUpdateWithoutBaseInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_num?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
  }

  export type HSProviderModelUpsertWithoutBaseInput = {
    update: XOR<HSProviderModelUpdateWithoutBaseInput, HSProviderModelUncheckedUpdateWithoutBaseInput>
    create: XOR<HSProviderModelCreateWithoutBaseInput, HSProviderModelUncheckedCreateWithoutBaseInput>
  }

  export type HSProviderModelUpdateWithoutBaseInput = {
    business_registration_num?: StringFieldUpdateOperationsInput | string
    introduction_images?: HSIntroductionImageModelUpdateManyWithoutHs_providerNestedInput
  }

  export type HSProviderModelUncheckedUpdateWithoutBaseInput = {
    business_registration_num?: StringFieldUpdateOperationsInput | string
    introduction_images?: HSIntroductionImageModelUncheckedUpdateManyWithoutHs_providerNestedInput
  }

  export type BusinessCertificationModelUpsertWithWhereUniqueWithoutBusiness_userInput = {
    where: BusinessCertificationModelWhereUniqueInput
    update: XOR<BusinessCertificationModelUpdateWithoutBusiness_userInput, BusinessCertificationModelUncheckedUpdateWithoutBusiness_userInput>
    create: XOR<BusinessCertificationModelCreateWithoutBusiness_userInput, BusinessCertificationModelUncheckedCreateWithoutBusiness_userInput>
  }

  export type BusinessCertificationModelUpdateWithWhereUniqueWithoutBusiness_userInput = {
    where: BusinessCertificationModelWhereUniqueInput
    data: XOR<BusinessCertificationModelUpdateWithoutBusiness_userInput, BusinessCertificationModelUncheckedUpdateWithoutBusiness_userInput>
  }

  export type BusinessCertificationModelUpdateManyWithWhereWithoutBusiness_userInput = {
    where: BusinessCertificationModelScalarWhereInput
    data: XOR<BusinessCertificationModelUpdateManyMutationInput, BusinessCertificationModelUncheckedUpdateManyWithoutCertificationsInput>
  }

  export type BusinessCertificationModelScalarWhereInput = {
    AND?: Enumerable<BusinessCertificationModelScalarWhereInput>
    OR?: Enumerable<BusinessCertificationModelScalarWhereInput>
    NOT?: Enumerable<BusinessCertificationModelScalarWhereInput>
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    id?: StringFilter | string
    business_user_id?: StringFilter | string
    image_url?: StringFilter | string
  }

  export type UserExpertiseModelUpsertWithWhereUniqueWithoutBusiness_userInput = {
    where: UserExpertiseModelWhereUniqueInput
    update: XOR<UserExpertiseModelUpdateWithoutBusiness_userInput, UserExpertiseModelUncheckedUpdateWithoutBusiness_userInput>
    create: XOR<UserExpertiseModelCreateWithoutBusiness_userInput, UserExpertiseModelUncheckedCreateWithoutBusiness_userInput>
  }

  export type UserExpertiseModelUpdateWithWhereUniqueWithoutBusiness_userInput = {
    where: UserExpertiseModelWhereUniqueInput
    data: XOR<UserExpertiseModelUpdateWithoutBusiness_userInput, UserExpertiseModelUncheckedUpdateWithoutBusiness_userInput>
  }

  export type UserExpertiseModelUpdateManyWithWhereWithoutBusiness_userInput = {
    where: UserExpertiseModelScalarWhereInput
    data: XOR<UserExpertiseModelUpdateManyMutationInput, UserExpertiseModelUncheckedUpdateManyWithoutExpertisesInput>
  }

  export type UserExpertiseModelScalarWhereInput = {
    AND?: Enumerable<UserExpertiseModelScalarWhereInput>
    OR?: Enumerable<UserExpertiseModelScalarWhereInput>
    NOT?: Enumerable<UserExpertiseModelScalarWhereInput>
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    id?: StringFilter | string
    category_id?: StringFilter | string
    business_user_id?: StringFilter | string
  }

  export type OauthAccessorModelUpsertWithWhereUniqueWithoutBusiness_userInput = {
    where: OauthAccessorModelWhereUniqueInput
    update: XOR<OauthAccessorModelUpdateWithoutBusiness_userInput, OauthAccessorModelUncheckedUpdateWithoutBusiness_userInput>
    create: XOR<OauthAccessorModelCreateWithoutBusiness_userInput, OauthAccessorModelUncheckedCreateWithoutBusiness_userInput>
  }

  export type OauthAccessorModelUpdateWithWhereUniqueWithoutBusiness_userInput = {
    where: OauthAccessorModelWhereUniqueInput
    data: XOR<OauthAccessorModelUpdateWithoutBusiness_userInput, OauthAccessorModelUncheckedUpdateWithoutBusiness_userInput>
  }

  export type OauthAccessorModelUpdateManyWithWhereWithoutBusiness_userInput = {
    where: OauthAccessorModelScalarWhereInput
    data: XOR<OauthAccessorModelUpdateManyMutationInput, OauthAccessorModelUncheckedUpdateManyWithoutOauth_accessorInput>
  }

  export type BusinessUserCreateWithoutRe_agentInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second: string
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBusiness_userInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationModelCreateNestedManyWithoutBusiness_userInput
    expertises?: UserExpertiseModelCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserUncheckedCreateWithoutRe_agentInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second: string
    profile_image_url: string
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationModelUncheckedCreateNestedManyWithoutBusiness_userInput
    expertises?: UserExpertiseModelUncheckedCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserCreateOrConnectWithoutRe_agentInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutRe_agentInput, BusinessUserUncheckedCreateWithoutRe_agentInput>
  }

  export type BusinessUserUpsertWithoutRe_agentInput = {
    update: XOR<BusinessUserUpdateWithoutRe_agentInput, BusinessUserUncheckedUpdateWithoutRe_agentInput>
    create: XOR<BusinessUserCreateWithoutRe_agentInput, BusinessUserUncheckedCreateWithoutRe_agentInput>
  }

  export type BusinessUserUpdateWithoutRe_agentInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBusiness_userNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationModelUpdateManyWithoutBusiness_userNestedInput
    expertises?: UserExpertiseModelUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutRe_agentInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    expertises?: UserExpertiseModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUncheckedUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserCreateWithoutHs_providerInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second: string
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBusiness_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationModelCreateNestedManyWithoutBusiness_userInput
    expertises?: UserExpertiseModelCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserUncheckedCreateWithoutHs_providerInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second: string
    profile_image_url: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationModelUncheckedCreateNestedManyWithoutBusiness_userInput
    expertises?: UserExpertiseModelUncheckedCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserCreateOrConnectWithoutHs_providerInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutHs_providerInput, BusinessUserUncheckedCreateWithoutHs_providerInput>
  }

  export type HSIntroductionImageModelCreateWithoutHs_providerInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    image_url: string
  }

  export type HSIntroductionImageModelUncheckedCreateWithoutHs_providerInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    image_url: string
  }

  export type HSIntroductionImageModelCreateOrConnectWithoutHs_providerInput = {
    where: HSIntroductionImageModelWhereUniqueInput
    create: XOR<HSIntroductionImageModelCreateWithoutHs_providerInput, HSIntroductionImageModelUncheckedCreateWithoutHs_providerInput>
  }

  export type HSIntroductionImageModelCreateManyHs_providerInputEnvelope = {
    data: Enumerable<HSIntroductionImageModelCreateManyHs_providerInput>
    skipDuplicates?: boolean
  }

  export type BusinessUserUpsertWithoutHs_providerInput = {
    update: XOR<BusinessUserUpdateWithoutHs_providerInput, BusinessUserUncheckedUpdateWithoutHs_providerInput>
    create: XOR<BusinessUserCreateWithoutHs_providerInput, BusinessUserUncheckedCreateWithoutHs_providerInput>
  }

  export type BusinessUserUpdateWithoutHs_providerInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBusiness_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationModelUpdateManyWithoutBusiness_userNestedInput
    expertises?: UserExpertiseModelUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutHs_providerInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    expertises?: UserExpertiseModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUncheckedUpdateManyWithoutBusiness_userNestedInput
  }

  export type HSIntroductionImageModelUpsertWithWhereUniqueWithoutHs_providerInput = {
    where: HSIntroductionImageModelWhereUniqueInput
    update: XOR<HSIntroductionImageModelUpdateWithoutHs_providerInput, HSIntroductionImageModelUncheckedUpdateWithoutHs_providerInput>
    create: XOR<HSIntroductionImageModelCreateWithoutHs_providerInput, HSIntroductionImageModelUncheckedCreateWithoutHs_providerInput>
  }

  export type HSIntroductionImageModelUpdateWithWhereUniqueWithoutHs_providerInput = {
    where: HSIntroductionImageModelWhereUniqueInput
    data: XOR<HSIntroductionImageModelUpdateWithoutHs_providerInput, HSIntroductionImageModelUncheckedUpdateWithoutHs_providerInput>
  }

  export type HSIntroductionImageModelUpdateManyWithWhereWithoutHs_providerInput = {
    where: HSIntroductionImageModelScalarWhereInput
    data: XOR<HSIntroductionImageModelUpdateManyMutationInput, HSIntroductionImageModelUncheckedUpdateManyWithoutIntroduction_imagesInput>
  }

  export type HSIntroductionImageModelScalarWhereInput = {
    AND?: Enumerable<HSIntroductionImageModelScalarWhereInput>
    OR?: Enumerable<HSIntroductionImageModelScalarWhereInput>
    NOT?: Enumerable<HSIntroductionImageModelScalarWhereInput>
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    id?: StringFilter | string
    hs_provider_id?: StringFilter | string
    image_url?: StringFilter | string
  }

  export type BusinessUserCreateWithoutCertificationsInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second: string
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBusiness_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    expertises?: UserExpertiseModelCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserUncheckedCreateWithoutCertificationsInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second: string
    profile_image_url: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    expertises?: UserExpertiseModelUncheckedCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserCreateOrConnectWithoutCertificationsInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutCertificationsInput, BusinessUserUncheckedCreateWithoutCertificationsInput>
  }

  export type BusinessUserUpsertWithoutCertificationsInput = {
    update: XOR<BusinessUserUpdateWithoutCertificationsInput, BusinessUserUncheckedUpdateWithoutCertificationsInput>
    create: XOR<BusinessUserCreateWithoutCertificationsInput, BusinessUserUncheckedCreateWithoutCertificationsInput>
  }

  export type BusinessUserUpdateWithoutCertificationsInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBusiness_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    expertises?: UserExpertiseModelUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutCertificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    expertises?: UserExpertiseModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUncheckedUpdateManyWithoutBusiness_userNestedInput
  }

  export type HSProviderModelCreateWithoutIntroduction_imagesInput = {
    business_registration_num: string
    base: BusinessUserCreateNestedOneWithoutHs_providerInput
  }

  export type HSProviderModelUncheckedCreateWithoutIntroduction_imagesInput = {
    id: string
    business_registration_num: string
  }

  export type HSProviderModelCreateOrConnectWithoutIntroduction_imagesInput = {
    where: HSProviderModelWhereUniqueInput
    create: XOR<HSProviderModelCreateWithoutIntroduction_imagesInput, HSProviderModelUncheckedCreateWithoutIntroduction_imagesInput>
  }

  export type HSProviderModelUpsertWithoutIntroduction_imagesInput = {
    update: XOR<HSProviderModelUpdateWithoutIntroduction_imagesInput, HSProviderModelUncheckedUpdateWithoutIntroduction_imagesInput>
    create: XOR<HSProviderModelCreateWithoutIntroduction_imagesInput, HSProviderModelUncheckedCreateWithoutIntroduction_imagesInput>
  }

  export type HSProviderModelUpdateWithoutIntroduction_imagesInput = {
    business_registration_num?: StringFieldUpdateOperationsInput | string
    base?: BusinessUserUpdateOneRequiredWithoutHs_providerNestedInput
  }

  export type HSProviderModelUncheckedUpdateWithoutIntroduction_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_registration_num?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertSubCategoryModelCreateWithoutExpertisesInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    super: ExpertSuperCategoryModelCreateNestedOneWithoutSubsInput
  }

  export type ExpertSubCategoryModelUncheckedCreateWithoutExpertisesInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    super_id: string
  }

  export type ExpertSubCategoryModelCreateOrConnectWithoutExpertisesInput = {
    where: ExpertSubCategoryModelWhereUniqueInput
    create: XOR<ExpertSubCategoryModelCreateWithoutExpertisesInput, ExpertSubCategoryModelUncheckedCreateWithoutExpertisesInput>
  }

  export type BusinessUserCreateWithoutExpertisesInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second: string
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBusiness_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationModelCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserUncheckedCreateWithoutExpertisesInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second: string
    profile_image_url: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationModelUncheckedCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserCreateOrConnectWithoutExpertisesInput = {
    where: BusinessUserWhereUniqueInput
    create: XOR<BusinessUserCreateWithoutExpertisesInput, BusinessUserUncheckedCreateWithoutExpertisesInput>
  }

  export type ExpertSubCategoryModelUpsertWithoutExpertisesInput = {
    update: XOR<ExpertSubCategoryModelUpdateWithoutExpertisesInput, ExpertSubCategoryModelUncheckedUpdateWithoutExpertisesInput>
    create: XOR<ExpertSubCategoryModelCreateWithoutExpertisesInput, ExpertSubCategoryModelUncheckedCreateWithoutExpertisesInput>
  }

  export type ExpertSubCategoryModelUpdateWithoutExpertisesInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    super?: ExpertSuperCategoryModelUpdateOneRequiredWithoutSubsNestedInput
  }

  export type ExpertSubCategoryModelUncheckedUpdateWithoutExpertisesInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessUserUpsertWithoutExpertisesInput = {
    update: XOR<BusinessUserUpdateWithoutExpertisesInput, BusinessUserUncheckedUpdateWithoutExpertisesInput>
    create: XOR<BusinessUserCreateWithoutExpertisesInput, BusinessUserUncheckedCreateWithoutExpertisesInput>
  }

  export type BusinessUserUpdateWithoutExpertisesInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBusiness_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationModelUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserUncheckedUpdateWithoutExpertisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUncheckedUpdateManyWithoutBusiness_userNestedInput
  }

  export type ExpertSuperCategoryModelCreateWithoutSubsInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    business_type: ExpertBusinessType
  }

  export type ExpertSuperCategoryModelUncheckedCreateWithoutSubsInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    business_type: ExpertBusinessType
  }

  export type ExpertSuperCategoryModelCreateOrConnectWithoutSubsInput = {
    where: ExpertSuperCategoryModelWhereUniqueInput
    create: XOR<ExpertSuperCategoryModelCreateWithoutSubsInput, ExpertSuperCategoryModelUncheckedCreateWithoutSubsInput>
  }

  export type UserExpertiseModelCreateWithoutCategoryInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    business_user: BusinessUserCreateNestedOneWithoutExpertisesInput
  }

  export type UserExpertiseModelUncheckedCreateWithoutCategoryInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    business_user_id: string
  }

  export type UserExpertiseModelCreateOrConnectWithoutCategoryInput = {
    where: UserExpertiseModelWhereUniqueInput
    create: XOR<UserExpertiseModelCreateWithoutCategoryInput, UserExpertiseModelUncheckedCreateWithoutCategoryInput>
  }

  export type UserExpertiseModelCreateManyCategoryInputEnvelope = {
    data: Enumerable<UserExpertiseModelCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type ExpertSuperCategoryModelUpsertWithoutSubsInput = {
    update: XOR<ExpertSuperCategoryModelUpdateWithoutSubsInput, ExpertSuperCategoryModelUncheckedUpdateWithoutSubsInput>
    create: XOR<ExpertSuperCategoryModelCreateWithoutSubsInput, ExpertSuperCategoryModelUncheckedCreateWithoutSubsInput>
  }

  export type ExpertSuperCategoryModelUpdateWithoutSubsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    business_type?: EnumExpertBusinessTypeFieldUpdateOperationsInput | ExpertBusinessType
  }

  export type ExpertSuperCategoryModelUncheckedUpdateWithoutSubsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    business_type?: EnumExpertBusinessTypeFieldUpdateOperationsInput | ExpertBusinessType
  }

  export type UserExpertiseModelUpsertWithWhereUniqueWithoutCategoryInput = {
    where: UserExpertiseModelWhereUniqueInput
    update: XOR<UserExpertiseModelUpdateWithoutCategoryInput, UserExpertiseModelUncheckedUpdateWithoutCategoryInput>
    create: XOR<UserExpertiseModelCreateWithoutCategoryInput, UserExpertiseModelUncheckedCreateWithoutCategoryInput>
  }

  export type UserExpertiseModelUpdateWithWhereUniqueWithoutCategoryInput = {
    where: UserExpertiseModelWhereUniqueInput
    data: XOR<UserExpertiseModelUpdateWithoutCategoryInput, UserExpertiseModelUncheckedUpdateWithoutCategoryInput>
  }

  export type UserExpertiseModelUpdateManyWithWhereWithoutCategoryInput = {
    where: UserExpertiseModelScalarWhereInput
    data: XOR<UserExpertiseModelUpdateManyMutationInput, UserExpertiseModelUncheckedUpdateManyWithoutExpertisesInput>
  }

  export type ExpertSubCategoryModelCreateWithoutSuperInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    expertises?: UserExpertiseModelCreateNestedManyWithoutCategoryInput
  }

  export type ExpertSubCategoryModelUncheckedCreateWithoutSuperInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    expertises?: UserExpertiseModelUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ExpertSubCategoryModelCreateOrConnectWithoutSuperInput = {
    where: ExpertSubCategoryModelWhereUniqueInput
    create: XOR<ExpertSubCategoryModelCreateWithoutSuperInput, ExpertSubCategoryModelUncheckedCreateWithoutSuperInput>
  }

  export type ExpertSubCategoryModelCreateManySuperInputEnvelope = {
    data: Enumerable<ExpertSubCategoryModelCreateManySuperInput>
    skipDuplicates?: boolean
  }

  export type ExpertSubCategoryModelUpsertWithWhereUniqueWithoutSuperInput = {
    where: ExpertSubCategoryModelWhereUniqueInput
    update: XOR<ExpertSubCategoryModelUpdateWithoutSuperInput, ExpertSubCategoryModelUncheckedUpdateWithoutSuperInput>
    create: XOR<ExpertSubCategoryModelCreateWithoutSuperInput, ExpertSubCategoryModelUncheckedCreateWithoutSuperInput>
  }

  export type ExpertSubCategoryModelUpdateWithWhereUniqueWithoutSuperInput = {
    where: ExpertSubCategoryModelWhereUniqueInput
    data: XOR<ExpertSubCategoryModelUpdateWithoutSuperInput, ExpertSubCategoryModelUncheckedUpdateWithoutSuperInput>
  }

  export type ExpertSubCategoryModelUpdateManyWithWhereWithoutSuperInput = {
    where: ExpertSubCategoryModelScalarWhereInput
    data: XOR<ExpertSubCategoryModelUpdateManyMutationInput, ExpertSubCategoryModelUncheckedUpdateManyWithoutSubsInput>
  }

  export type ExpertSubCategoryModelScalarWhereInput = {
    AND?: Enumerable<ExpertSubCategoryModelScalarWhereInput>
    OR?: Enumerable<ExpertSubCategoryModelScalarWhereInput>
    NOT?: Enumerable<ExpertSubCategoryModelScalarWhereInput>
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    id?: StringFilter | string
    name?: StringFilter | string
    super_id?: StringFilter | string
  }

  export type AgreementAcceptanceModelCreateWithoutAgreementInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    user: UserModelCreateNestedOneWithoutAgreement_acceptancesInput
  }

  export type AgreementAcceptanceModelUncheckedCreateWithoutAgreementInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    user_id: string
  }

  export type AgreementAcceptanceModelCreateOrConnectWithoutAgreementInput = {
    where: AgreementAcceptanceModelWhereUniqueInput
    create: XOR<AgreementAcceptanceModelCreateWithoutAgreementInput, AgreementAcceptanceModelUncheckedCreateWithoutAgreementInput>
  }

  export type AgreementAcceptanceModelCreateManyAgreementInputEnvelope = {
    data: Enumerable<AgreementAcceptanceModelCreateManyAgreementInput>
    skipDuplicates?: boolean
  }

  export type AgreementAcceptanceModelUpsertWithWhereUniqueWithoutAgreementInput = {
    where: AgreementAcceptanceModelWhereUniqueInput
    update: XOR<AgreementAcceptanceModelUpdateWithoutAgreementInput, AgreementAcceptanceModelUncheckedUpdateWithoutAgreementInput>
    create: XOR<AgreementAcceptanceModelCreateWithoutAgreementInput, AgreementAcceptanceModelUncheckedCreateWithoutAgreementInput>
  }

  export type AgreementAcceptanceModelUpdateWithWhereUniqueWithoutAgreementInput = {
    where: AgreementAcceptanceModelWhereUniqueInput
    data: XOR<AgreementAcceptanceModelUpdateWithoutAgreementInput, AgreementAcceptanceModelUncheckedUpdateWithoutAgreementInput>
  }

  export type AgreementAcceptanceModelUpdateManyWithWhereWithoutAgreementInput = {
    where: AgreementAcceptanceModelScalarWhereInput
    data: XOR<AgreementAcceptanceModelUpdateManyMutationInput, AgreementAcceptanceModelUncheckedUpdateManyWithoutAcceptancesInput>
  }

  export type UserModelCreateWithoutAgreement_acceptancesInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    email?: string | null
    customer?: CustomerModelCreateNestedOneWithoutBaseInput
    business_user?: BusinessUserCreateNestedOneWithoutBaseInput
  }

  export type UserModelUncheckedCreateWithoutAgreement_acceptancesInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
    email?: string | null
    customer?: CustomerModelUncheckedCreateNestedOneWithoutBaseInput
    business_user?: BusinessUserUncheckedCreateNestedOneWithoutBaseInput
  }

  export type UserModelCreateOrConnectWithoutAgreement_acceptancesInput = {
    where: UserModelWhereUniqueInput
    create: XOR<UserModelCreateWithoutAgreement_acceptancesInput, UserModelUncheckedCreateWithoutAgreement_acceptancesInput>
  }

  export type AgreementModelCreateWithoutAcceptancesInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    title: string
    content: string
    user_type: AgreementUserType
  }

  export type AgreementModelUncheckedCreateWithoutAcceptancesInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    title: string
    content: string
    user_type: AgreementUserType
  }

  export type AgreementModelCreateOrConnectWithoutAcceptancesInput = {
    where: AgreementModelWhereUniqueInput
    create: XOR<AgreementModelCreateWithoutAcceptancesInput, AgreementModelUncheckedCreateWithoutAcceptancesInput>
  }

  export type UserModelUpsertWithoutAgreement_acceptancesInput = {
    update: XOR<UserModelUpdateWithoutAgreement_acceptancesInput, UserModelUncheckedUpdateWithoutAgreement_acceptancesInput>
    create: XOR<UserModelCreateWithoutAgreement_acceptancesInput, UserModelUncheckedCreateWithoutAgreement_acceptancesInput>
  }

  export type UserModelUpdateWithoutAgreement_acceptancesInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerModelUpdateOneWithoutBaseNestedInput
    business_user?: BusinessUserUpdateOneWithoutBaseNestedInput
  }

  export type UserModelUncheckedUpdateWithoutAgreement_acceptancesInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerModelUncheckedUpdateOneWithoutBaseNestedInput
    business_user?: BusinessUserUncheckedUpdateOneWithoutBaseNestedInput
  }

  export type AgreementModelUpsertWithoutAcceptancesInput = {
    update: XOR<AgreementModelUpdateWithoutAcceptancesInput, AgreementModelUncheckedUpdateWithoutAcceptancesInput>
    create: XOR<AgreementModelCreateWithoutAcceptancesInput, AgreementModelUncheckedCreateWithoutAcceptancesInput>
  }

  export type AgreementModelUpdateWithoutAcceptancesInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_type?: EnumAgreementUserTypeFieldUpdateOperationsInput | AgreementUserType
  }

  export type AgreementModelUncheckedUpdateWithoutAcceptancesInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_type?: EnumAgreementUserTypeFieldUpdateOperationsInput | AgreementUserType
  }

  export type AgreementAcceptanceModelCreateManyUserInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    agreement_id: string
  }

  export type AgreementAcceptanceModelUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    agreement?: AgreementModelUpdateOneRequiredWithoutAcceptancesNestedInput
  }

  export type AgreementAcceptanceModelUncheckedUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    agreement_id?: StringFieldUpdateOperationsInput | string
  }

  export type AgreementAcceptanceModelUncheckedUpdateManyWithoutAgreement_acceptancesInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    agreement_id?: StringFieldUpdateOperationsInput | string
  }

  export type OauthAccessorModelCreateManyCustomerInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    oauth_type: OauthType
    oauth_sub: string
    business_user_id: string
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_first?: string | null
    address_second?: string | null
  }

  export type OauthAccessorModelUpdateWithoutCustomerInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    business_user?: BusinessUserUpdateOneRequiredWithoutOauth_accessorNestedInput
  }

  export type OauthAccessorModelUncheckedUpdateWithoutCustomerInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    business_user_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OauthAccessorModelUncheckedUpdateManyWithoutOauth_accessorInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    business_user_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessCertificationModelCreateManyBusiness_userInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    image_url: string
  }

  export type UserExpertiseModelCreateManyBusiness_userInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    category_id: string
  }

  export type OauthAccessorModelCreateManyBusiness_userInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    oauth_type: OauthType
    oauth_sub: string
    customer_id: string
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_first?: string | null
    address_second?: string | null
  }

  export type BusinessCertificationModelUpdateWithoutBusiness_userInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCertificationModelUncheckedUpdateWithoutBusiness_userInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCertificationModelUncheckedUpdateManyWithoutCertificationsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type UserExpertiseModelUpdateWithoutBusiness_userInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    category?: ExpertSubCategoryModelUpdateOneRequiredWithoutExpertisesNestedInput
  }

  export type UserExpertiseModelUncheckedUpdateWithoutBusiness_userInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserExpertiseModelUncheckedUpdateManyWithoutExpertisesInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
  }

  export type OauthAccessorModelUpdateWithoutBusiness_userInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerModelUpdateOneRequiredWithoutOauth_accessorNestedInput
  }

  export type OauthAccessorModelUncheckedUpdateWithoutBusiness_userInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HSIntroductionImageModelCreateManyHs_providerInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    image_url: string
  }

  export type HSIntroductionImageModelUpdateWithoutHs_providerInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type HSIntroductionImageModelUncheckedUpdateWithoutHs_providerInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type HSIntroductionImageModelUncheckedUpdateManyWithoutIntroduction_imagesInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type UserExpertiseModelCreateManyCategoryInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    business_user_id: string
  }

  export type UserExpertiseModelUpdateWithoutCategoryInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    business_user?: BusinessUserUpdateOneRequiredWithoutExpertisesNestedInput
  }

  export type UserExpertiseModelUncheckedUpdateWithoutCategoryInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    business_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertSubCategoryModelCreateManySuperInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    name: string
  }

  export type ExpertSubCategoryModelUpdateWithoutSuperInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expertises?: UserExpertiseModelUpdateManyWithoutCategoryNestedInput
  }

  export type ExpertSubCategoryModelUncheckedUpdateWithoutSuperInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expertises?: UserExpertiseModelUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ExpertSubCategoryModelUncheckedUpdateManyWithoutSubsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AgreementAcceptanceModelCreateManyAgreementInput = {
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    id: string
    user_id: string
  }

  export type AgreementAcceptanceModelUpdateWithoutAgreementInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    user?: UserModelUpdateOneRequiredWithoutAgreement_acceptancesNestedInput
  }

  export type AgreementAcceptanceModelUncheckedUpdateWithoutAgreementInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type AgreementAcceptanceModelUncheckedUpdateManyWithoutAcceptancesInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
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

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
  id: string
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  oauth_type: OauthType
  oauth_sub: string
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

/**
 * Model UserModel
 * 
 */
export type UserModel = {
  id: string
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
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
 * Model BusinessUserModel
 * 
 */
export type BusinessUserModel = {
  id: string
  is_verified: boolean
  introduction_title: string
  introduction_content: string
  phone: string
  address_first: string
  address_second: string | null
  profile_image_url: string
  super_expertise_id: string
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
 * Model BusinessCertificationImageModel
 * 
 */
export type BusinessCertificationImageModel = {
  id: string
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  business_user_id: string
  url: string
}

/**
 * Model HSIntroductionImageModel
 * 
 */
export type HSIntroductionImageModel = {
  id: string
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  hs_provider_id: string
  url: string
}

/**
 * Model SubExpertiseModel
 * 
 */
export type SubExpertiseModel = {
  id: string
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  sub_category_id: string
  business_user_id: string
}

/**
 * Model ExpertSubCategoryModel
 * 
 */
export type ExpertSubCategoryModel = {
  id: string
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  name: string
  super_id: string
}

/**
 * Model ExpertSuperCategoryModel
 * 
 */
export type ExpertSuperCategoryModel = {
  id: string
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  name: string
  business_type: ExpertBusinessType
}

/**
 * Model AgreementModel
 * 
 */
export type AgreementModel = {
  id: string
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  title: string
  content: string
  user_type: AgreementUserType
}

/**
 * Model AgreementAcceptanceModel
 * 
 */
export type AgreementAcceptanceModel = {
  id: string
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  user_id: string
  agreement_id: string
}

/**
 * Model REProertyModel
 * 
 */
export type REProertyModel = {
  id: string
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  name: string
  main_image_url: string
  agent_id: string
  sub_category_id: string
}

/**
 * Model REPropertySuperCategoryModel
 * 
 */
export type REPropertySuperCategoryModel = {
  id: string
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  name: string
}

/**
 * Model REPropertySubCategoryModel
 * 
 */
export type REPropertySubCategoryModel = {
  id: string
  created_at: Date
  updated_at: Date
  is_deleted: boolean
  deleted_at: Date | null
  name: string
  super_category_id: string
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
   * `prisma.businessUserModel`: Exposes CRUD operations for the **BusinessUserModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessUserModels
    * const businessUserModels = await prisma.businessUserModel.findMany()
    * ```
    */
  get businessUserModel(): Prisma.BusinessUserModelDelegate<GlobalReject>;

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
   * `prisma.businessCertificationImageModel`: Exposes CRUD operations for the **BusinessCertificationImageModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessCertificationImageModels
    * const businessCertificationImageModels = await prisma.businessCertificationImageModel.findMany()
    * ```
    */
  get businessCertificationImageModel(): Prisma.BusinessCertificationImageModelDelegate<GlobalReject>;

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
   * `prisma.subExpertiseModel`: Exposes CRUD operations for the **SubExpertiseModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubExpertiseModels
    * const subExpertiseModels = await prisma.subExpertiseModel.findMany()
    * ```
    */
  get subExpertiseModel(): Prisma.SubExpertiseModelDelegate<GlobalReject>;

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

  /**
   * `prisma.rEProertyModel`: Exposes CRUD operations for the **REProertyModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more REProertyModels
    * const rEProertyModels = await prisma.rEProertyModel.findMany()
    * ```
    */
  get rEProertyModel(): Prisma.REProertyModelDelegate<GlobalReject>;

  /**
   * `prisma.rEPropertySuperCategoryModel`: Exposes CRUD operations for the **REPropertySuperCategoryModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more REPropertySuperCategoryModels
    * const rEPropertySuperCategoryModels = await prisma.rEPropertySuperCategoryModel.findMany()
    * ```
    */
  get rEPropertySuperCategoryModel(): Prisma.REPropertySuperCategoryModelDelegate<GlobalReject>;

  /**
   * `prisma.rEPropertySubCategoryModel`: Exposes CRUD operations for the **REPropertySubCategoryModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more REPropertySubCategoryModels
    * const rEPropertySubCategoryModels = await prisma.rEPropertySubCategoryModel.findMany()
    * ```
    */
  get rEPropertySubCategoryModel(): Prisma.REPropertySubCategoryModelDelegate<GlobalReject>;
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
    BusinessUserModel: 'BusinessUserModel',
    REAgentModel: 'REAgentModel',
    HSProviderModel: 'HSProviderModel',
    BusinessCertificationImageModel: 'BusinessCertificationImageModel',
    HSIntroductionImageModel: 'HSIntroductionImageModel',
    SubExpertiseModel: 'SubExpertiseModel',
    ExpertSubCategoryModel: 'ExpertSubCategoryModel',
    ExpertSuperCategoryModel: 'ExpertSuperCategoryModel',
    AgreementModel: 'AgreementModel',
    AgreementAcceptanceModel: 'AgreementAcceptanceModel',
    REProertyModel: 'REProertyModel',
    REPropertySuperCategoryModel: 'REPropertySuperCategoryModel',
    REPropertySubCategoryModel: 'REPropertySubCategoryModel'
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
   * Count Type BusinessUserModelCountOutputType
   */


  export type BusinessUserModelCountOutputType = {
    certifications: number
    sub_expertises: number
    oauth_accessor: number
  }

  export type BusinessUserModelCountOutputTypeSelect = {
    certifications?: boolean
    sub_expertises?: boolean
    oauth_accessor?: boolean
  }

  export type BusinessUserModelCountOutputTypeGetPayload<S extends boolean | null | undefined | BusinessUserModelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BusinessUserModelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BusinessUserModelCountOutputTypeArgs)
    ? BusinessUserModelCountOutputType 
    : S extends { select: any } & (BusinessUserModelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BusinessUserModelCountOutputType ? BusinessUserModelCountOutputType[P] : never
  } 
      : BusinessUserModelCountOutputType




  // Custom InputTypes

  /**
   * BusinessUserModelCountOutputType without action
   */
  export type BusinessUserModelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BusinessUserModelCountOutputType
     */
    select?: BusinessUserModelCountOutputTypeSelect | null
  }



  /**
   * Count Type REAgentModelCountOutputType
   */


  export type REAgentModelCountOutputType = {
    properties: number
  }

  export type REAgentModelCountOutputTypeSelect = {
    properties?: boolean
  }

  export type REAgentModelCountOutputTypeGetPayload<S extends boolean | null | undefined | REAgentModelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? REAgentModelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (REAgentModelCountOutputTypeArgs)
    ? REAgentModelCountOutputType 
    : S extends { select: any } & (REAgentModelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof REAgentModelCountOutputType ? REAgentModelCountOutputType[P] : never
  } 
      : REAgentModelCountOutputType




  // Custom InputTypes

  /**
   * REAgentModelCountOutputType without action
   */
  export type REAgentModelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the REAgentModelCountOutputType
     */
    select?: REAgentModelCountOutputTypeSelect | null
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
    business_users: number
  }

  export type ExpertSuperCategoryModelCountOutputTypeSelect = {
    subs?: boolean
    business_users?: boolean
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
   * Count Type REPropertySuperCategoryModelCountOutputType
   */


  export type REPropertySuperCategoryModelCountOutputType = {
    sub_categories: number
  }

  export type REPropertySuperCategoryModelCountOutputTypeSelect = {
    sub_categories?: boolean
  }

  export type REPropertySuperCategoryModelCountOutputTypeGetPayload<S extends boolean | null | undefined | REPropertySuperCategoryModelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? REPropertySuperCategoryModelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (REPropertySuperCategoryModelCountOutputTypeArgs)
    ? REPropertySuperCategoryModelCountOutputType 
    : S extends { select: any } & (REPropertySuperCategoryModelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof REPropertySuperCategoryModelCountOutputType ? REPropertySuperCategoryModelCountOutputType[P] : never
  } 
      : REPropertySuperCategoryModelCountOutputType




  // Custom InputTypes

  /**
   * REPropertySuperCategoryModelCountOutputType without action
   */
  export type REPropertySuperCategoryModelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the REPropertySuperCategoryModelCountOutputType
     */
    select?: REPropertySuperCategoryModelCountOutputTypeSelect | null
  }



  /**
   * Count Type REPropertySubCategoryModelCountOutputType
   */


  export type REPropertySubCategoryModelCountOutputType = {
    properties: number
  }

  export type REPropertySubCategoryModelCountOutputTypeSelect = {
    properties?: boolean
  }

  export type REPropertySubCategoryModelCountOutputTypeGetPayload<S extends boolean | null | undefined | REPropertySubCategoryModelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? REPropertySubCategoryModelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (REPropertySubCategoryModelCountOutputTypeArgs)
    ? REPropertySubCategoryModelCountOutputType 
    : S extends { select: any } & (REPropertySubCategoryModelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof REPropertySubCategoryModelCountOutputType ? REPropertySubCategoryModelCountOutputType[P] : never
  } 
      : REPropertySubCategoryModelCountOutputType




  // Custom InputTypes

  /**
   * REPropertySubCategoryModelCountOutputType without action
   */
  export type REPropertySubCategoryModelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the REPropertySubCategoryModelCountOutputType
     */
    select?: REPropertySubCategoryModelCountOutputTypeSelect | null
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
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
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
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
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
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
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
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
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
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
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
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
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
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    oauth_type: OauthType
    oauth_sub: string
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
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
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
    business_user?: boolean | BusinessUserModelArgs
    customer?: boolean | CustomerModelArgs
  }


  export type OauthAccessorModelInclude = {
    business_user?: boolean | BusinessUserModelArgs
    customer?: boolean | CustomerModelArgs
  }

  export type OauthAccessorModelGetPayload<S extends boolean | null | undefined | OauthAccessorModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OauthAccessorModel :
    S extends undefined ? never :
    S extends { include: any } & (OauthAccessorModelArgs | OauthAccessorModelFindManyArgs)
    ? OauthAccessorModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'business_user' ? BusinessUserModelGetPayload<S['include'][P]> | null :
        P extends 'customer' ? CustomerModelGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (OauthAccessorModelArgs | OauthAccessorModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'business_user' ? BusinessUserModelGetPayload<S['select'][P]> | null :
        P extends 'customer' ? CustomerModelGetPayload<S['select'][P]> | null :  P extends keyof OauthAccessorModel ? OauthAccessorModel[P] : never
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
     * // Only select the `id`
     * const oauthAccessorModelWithIdOnly = await prisma.oauthAccessorModel.findMany({ select: { id: true } })
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

    business_user<T extends BusinessUserModelArgs= {}>(args?: Subset<T, BusinessUserModelArgs>): Prisma__BusinessUserModelClient<BusinessUserModelGetPayload<T> | Null>;

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
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
    email: string | null
  }

  export type UserModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
    email: string | null
  }

  export type UserModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    name: number
    email: number
    _all: number
  }


  export type UserModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    email?: true
  }

  export type UserModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    email?: true
  }

  export type UserModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
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
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
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
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    name?: boolean
    email?: boolean
    customer?: boolean | CustomerModelArgs
    business_user?: boolean | BusinessUserModelArgs
    agreement_acceptances?: boolean | UserModel$agreement_acceptancesArgs
    _count?: boolean | UserModelCountOutputTypeArgs
  }


  export type UserModelInclude = {
    customer?: boolean | CustomerModelArgs
    business_user?: boolean | BusinessUserModelArgs
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
        P extends 'business_user' ? BusinessUserModelGetPayload<S['include'][P]> | null :
        P extends 'agreement_acceptances' ? Array < AgreementAcceptanceModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserModelArgs | UserModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'customer' ? CustomerModelGetPayload<S['select'][P]> | null :
        P extends 'business_user' ? BusinessUserModelGetPayload<S['select'][P]> | null :
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
     * // Only select the `id`
     * const userModelWithIdOnly = await prisma.userModel.findMany({ select: { id: true } })
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

    business_user<T extends BusinessUserModelArgs= {}>(args?: Subset<T, BusinessUserModelArgs>): Prisma__BusinessUserModelClient<BusinessUserModelGetPayload<T> | Null>;

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
   * Model BusinessUserModel
   */


  export type AggregateBusinessUserModel = {
    _count: BusinessUserModelCountAggregateOutputType | null
    _min: BusinessUserModelMinAggregateOutputType | null
    _max: BusinessUserModelMaxAggregateOutputType | null
  }

  export type BusinessUserModelMinAggregateOutputType = {
    id: string | null
    is_verified: boolean | null
    introduction_title: string | null
    introduction_content: string | null
    phone: string | null
    address_first: string | null
    address_second: string | null
    profile_image_url: string | null
    super_expertise_id: string | null
  }

  export type BusinessUserModelMaxAggregateOutputType = {
    id: string | null
    is_verified: boolean | null
    introduction_title: string | null
    introduction_content: string | null
    phone: string | null
    address_first: string | null
    address_second: string | null
    profile_image_url: string | null
    super_expertise_id: string | null
  }

  export type BusinessUserModelCountAggregateOutputType = {
    id: number
    is_verified: number
    introduction_title: number
    introduction_content: number
    phone: number
    address_first: number
    address_second: number
    profile_image_url: number
    super_expertise_id: number
    _all: number
  }


  export type BusinessUserModelMinAggregateInputType = {
    id?: true
    is_verified?: true
    introduction_title?: true
    introduction_content?: true
    phone?: true
    address_first?: true
    address_second?: true
    profile_image_url?: true
    super_expertise_id?: true
  }

  export type BusinessUserModelMaxAggregateInputType = {
    id?: true
    is_verified?: true
    introduction_title?: true
    introduction_content?: true
    phone?: true
    address_first?: true
    address_second?: true
    profile_image_url?: true
    super_expertise_id?: true
  }

  export type BusinessUserModelCountAggregateInputType = {
    id?: true
    is_verified?: true
    introduction_title?: true
    introduction_content?: true
    phone?: true
    address_first?: true
    address_second?: true
    profile_image_url?: true
    super_expertise_id?: true
    _all?: true
  }

  export type BusinessUserModelAggregateArgs = {
    /**
     * Filter which BusinessUserModel to aggregate.
     */
    where?: BusinessUserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessUserModels to fetch.
     */
    orderBy?: Enumerable<BusinessUserModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessUserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessUserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessUserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessUserModels
    **/
    _count?: true | BusinessUserModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessUserModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessUserModelMaxAggregateInputType
  }

  export type GetBusinessUserModelAggregateType<T extends BusinessUserModelAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessUserModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessUserModel[P]>
      : GetScalarType<T[P], AggregateBusinessUserModel[P]>
  }




  export type BusinessUserModelGroupByArgs = {
    where?: BusinessUserModelWhereInput
    orderBy?: Enumerable<BusinessUserModelOrderByWithAggregationInput>
    by: BusinessUserModelScalarFieldEnum[]
    having?: BusinessUserModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessUserModelCountAggregateInputType | true
    _min?: BusinessUserModelMinAggregateInputType
    _max?: BusinessUserModelMaxAggregateInputType
  }


  export type BusinessUserModelGroupByOutputType = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second: string | null
    profile_image_url: string
    super_expertise_id: string
    _count: BusinessUserModelCountAggregateOutputType | null
    _min: BusinessUserModelMinAggregateOutputType | null
    _max: BusinessUserModelMaxAggregateOutputType | null
  }

  type GetBusinessUserModelGroupByPayload<T extends BusinessUserModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BusinessUserModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessUserModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessUserModelGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessUserModelGroupByOutputType[P]>
        }
      >
    >


  export type BusinessUserModelSelect = {
    id?: boolean
    is_verified?: boolean
    introduction_title?: boolean
    introduction_content?: boolean
    phone?: boolean
    address_first?: boolean
    address_second?: boolean
    profile_image_url?: boolean
    super_expertise_id?: boolean
    base?: boolean | UserModelArgs
    re_agent?: boolean | REAgentModelArgs
    hs_provider?: boolean | HSProviderModelArgs
    certifications?: boolean | BusinessUserModel$certificationsArgs
    super_expertise?: boolean | ExpertSuperCategoryModelArgs
    sub_expertises?: boolean | BusinessUserModel$sub_expertisesArgs
    oauth_accessor?: boolean | BusinessUserModel$oauth_accessorArgs
    _count?: boolean | BusinessUserModelCountOutputTypeArgs
  }


  export type BusinessUserModelInclude = {
    base?: boolean | UserModelArgs
    re_agent?: boolean | REAgentModelArgs
    hs_provider?: boolean | HSProviderModelArgs
    certifications?: boolean | BusinessUserModel$certificationsArgs
    super_expertise?: boolean | ExpertSuperCategoryModelArgs
    sub_expertises?: boolean | BusinessUserModel$sub_expertisesArgs
    oauth_accessor?: boolean | BusinessUserModel$oauth_accessorArgs
    _count?: boolean | BusinessUserModelCountOutputTypeArgs
  }

  export type BusinessUserModelGetPayload<S extends boolean | null | undefined | BusinessUserModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BusinessUserModel :
    S extends undefined ? never :
    S extends { include: any } & (BusinessUserModelArgs | BusinessUserModelFindManyArgs)
    ? BusinessUserModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'base' ? UserModelGetPayload<S['include'][P]> :
        P extends 're_agent' ? REAgentModelGetPayload<S['include'][P]> | null :
        P extends 'hs_provider' ? HSProviderModelGetPayload<S['include'][P]> | null :
        P extends 'certifications' ? Array < BusinessCertificationImageModelGetPayload<S['include'][P]>>  :
        P extends 'super_expertise' ? ExpertSuperCategoryModelGetPayload<S['include'][P]> :
        P extends 'sub_expertises' ? Array < SubExpertiseModelGetPayload<S['include'][P]>>  :
        P extends 'oauth_accessor' ? Array < OauthAccessorModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? BusinessUserModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BusinessUserModelArgs | BusinessUserModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'base' ? UserModelGetPayload<S['select'][P]> :
        P extends 're_agent' ? REAgentModelGetPayload<S['select'][P]> | null :
        P extends 'hs_provider' ? HSProviderModelGetPayload<S['select'][P]> | null :
        P extends 'certifications' ? Array < BusinessCertificationImageModelGetPayload<S['select'][P]>>  :
        P extends 'super_expertise' ? ExpertSuperCategoryModelGetPayload<S['select'][P]> :
        P extends 'sub_expertises' ? Array < SubExpertiseModelGetPayload<S['select'][P]>>  :
        P extends 'oauth_accessor' ? Array < OauthAccessorModelGetPayload<S['select'][P]>>  :
        P extends '_count' ? BusinessUserModelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof BusinessUserModel ? BusinessUserModel[P] : never
  } 
      : BusinessUserModel


  type BusinessUserModelCountArgs = 
    Omit<BusinessUserModelFindManyArgs, 'select' | 'include'> & {
      select?: BusinessUserModelCountAggregateInputType | true
    }

  export interface BusinessUserModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BusinessUserModel that matches the filter.
     * @param {BusinessUserModelFindUniqueArgs} args - Arguments to find a BusinessUserModel
     * @example
     * // Get one BusinessUserModel
     * const businessUserModel = await prisma.businessUserModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BusinessUserModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BusinessUserModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BusinessUserModel'> extends True ? Prisma__BusinessUserModelClient<BusinessUserModelGetPayload<T>> : Prisma__BusinessUserModelClient<BusinessUserModelGetPayload<T> | null, null>

    /**
     * Find one BusinessUserModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BusinessUserModelFindUniqueOrThrowArgs} args - Arguments to find a BusinessUserModel
     * @example
     * // Get one BusinessUserModel
     * const businessUserModel = await prisma.businessUserModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BusinessUserModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BusinessUserModelFindUniqueOrThrowArgs>
    ): Prisma__BusinessUserModelClient<BusinessUserModelGetPayload<T>>

    /**
     * Find the first BusinessUserModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUserModelFindFirstArgs} args - Arguments to find a BusinessUserModel
     * @example
     * // Get one BusinessUserModel
     * const businessUserModel = await prisma.businessUserModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BusinessUserModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BusinessUserModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BusinessUserModel'> extends True ? Prisma__BusinessUserModelClient<BusinessUserModelGetPayload<T>> : Prisma__BusinessUserModelClient<BusinessUserModelGetPayload<T> | null, null>

    /**
     * Find the first BusinessUserModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUserModelFindFirstOrThrowArgs} args - Arguments to find a BusinessUserModel
     * @example
     * // Get one BusinessUserModel
     * const businessUserModel = await prisma.businessUserModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BusinessUserModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BusinessUserModelFindFirstOrThrowArgs>
    ): Prisma__BusinessUserModelClient<BusinessUserModelGetPayload<T>>

    /**
     * Find zero or more BusinessUserModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUserModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessUserModels
     * const businessUserModels = await prisma.businessUserModel.findMany()
     * 
     * // Get first 10 BusinessUserModels
     * const businessUserModels = await prisma.businessUserModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessUserModelWithIdOnly = await prisma.businessUserModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BusinessUserModelFindManyArgs>(
      args?: SelectSubset<T, BusinessUserModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<BusinessUserModelGetPayload<T>>>

    /**
     * Create a BusinessUserModel.
     * @param {BusinessUserModelCreateArgs} args - Arguments to create a BusinessUserModel.
     * @example
     * // Create one BusinessUserModel
     * const BusinessUserModel = await prisma.businessUserModel.create({
     *   data: {
     *     // ... data to create a BusinessUserModel
     *   }
     * })
     * 
    **/
    create<T extends BusinessUserModelCreateArgs>(
      args: SelectSubset<T, BusinessUserModelCreateArgs>
    ): Prisma__BusinessUserModelClient<BusinessUserModelGetPayload<T>>

    /**
     * Create many BusinessUserModels.
     *     @param {BusinessUserModelCreateManyArgs} args - Arguments to create many BusinessUserModels.
     *     @example
     *     // Create many BusinessUserModels
     *     const businessUserModel = await prisma.businessUserModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BusinessUserModelCreateManyArgs>(
      args?: SelectSubset<T, BusinessUserModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BusinessUserModel.
     * @param {BusinessUserModelDeleteArgs} args - Arguments to delete one BusinessUserModel.
     * @example
     * // Delete one BusinessUserModel
     * const BusinessUserModel = await prisma.businessUserModel.delete({
     *   where: {
     *     // ... filter to delete one BusinessUserModel
     *   }
     * })
     * 
    **/
    delete<T extends BusinessUserModelDeleteArgs>(
      args: SelectSubset<T, BusinessUserModelDeleteArgs>
    ): Prisma__BusinessUserModelClient<BusinessUserModelGetPayload<T>>

    /**
     * Update one BusinessUserModel.
     * @param {BusinessUserModelUpdateArgs} args - Arguments to update one BusinessUserModel.
     * @example
     * // Update one BusinessUserModel
     * const businessUserModel = await prisma.businessUserModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BusinessUserModelUpdateArgs>(
      args: SelectSubset<T, BusinessUserModelUpdateArgs>
    ): Prisma__BusinessUserModelClient<BusinessUserModelGetPayload<T>>

    /**
     * Delete zero or more BusinessUserModels.
     * @param {BusinessUserModelDeleteManyArgs} args - Arguments to filter BusinessUserModels to delete.
     * @example
     * // Delete a few BusinessUserModels
     * const { count } = await prisma.businessUserModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BusinessUserModelDeleteManyArgs>(
      args?: SelectSubset<T, BusinessUserModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessUserModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUserModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessUserModels
     * const businessUserModel = await prisma.businessUserModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BusinessUserModelUpdateManyArgs>(
      args: SelectSubset<T, BusinessUserModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessUserModel.
     * @param {BusinessUserModelUpsertArgs} args - Arguments to update or create a BusinessUserModel.
     * @example
     * // Update or create a BusinessUserModel
     * const businessUserModel = await prisma.businessUserModel.upsert({
     *   create: {
     *     // ... data to create a BusinessUserModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessUserModel we want to update
     *   }
     * })
    **/
    upsert<T extends BusinessUserModelUpsertArgs>(
      args: SelectSubset<T, BusinessUserModelUpsertArgs>
    ): Prisma__BusinessUserModelClient<BusinessUserModelGetPayload<T>>

    /**
     * Count the number of BusinessUserModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUserModelCountArgs} args - Arguments to filter BusinessUserModels to count.
     * @example
     * // Count the number of BusinessUserModels
     * const count = await prisma.businessUserModel.count({
     *   where: {
     *     // ... the filter for the BusinessUserModels we want to count
     *   }
     * })
    **/
    count<T extends BusinessUserModelCountArgs>(
      args?: Subset<T, BusinessUserModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessUserModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessUserModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUserModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessUserModelAggregateArgs>(args: Subset<T, BusinessUserModelAggregateArgs>): Prisma.PrismaPromise<GetBusinessUserModelAggregateType<T>>

    /**
     * Group by BusinessUserModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUserModelGroupByArgs} args - Group by arguments.
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
      T extends BusinessUserModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessUserModelGroupByArgs['orderBy'] }
        : { orderBy?: BusinessUserModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusinessUserModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessUserModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessUserModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BusinessUserModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    certifications<T extends BusinessUserModel$certificationsArgs= {}>(args?: Subset<T, BusinessUserModel$certificationsArgs>): Prisma.PrismaPromise<Array<BusinessCertificationImageModelGetPayload<T>>| Null>;

    super_expertise<T extends ExpertSuperCategoryModelArgs= {}>(args?: Subset<T, ExpertSuperCategoryModelArgs>): Prisma__ExpertSuperCategoryModelClient<ExpertSuperCategoryModelGetPayload<T> | Null>;

    sub_expertises<T extends BusinessUserModel$sub_expertisesArgs= {}>(args?: Subset<T, BusinessUserModel$sub_expertisesArgs>): Prisma.PrismaPromise<Array<SubExpertiseModelGetPayload<T>>| Null>;

    oauth_accessor<T extends BusinessUserModel$oauth_accessorArgs= {}>(args?: Subset<T, BusinessUserModel$oauth_accessorArgs>): Prisma.PrismaPromise<Array<OauthAccessorModelGetPayload<T>>| Null>;

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
   * BusinessUserModel base type for findUnique actions
   */
  export type BusinessUserModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BusinessUserModel
     */
    select?: BusinessUserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserModelInclude | null
    /**
     * Filter, which BusinessUserModel to fetch.
     */
    where: BusinessUserModelWhereUniqueInput
  }

  /**
   * BusinessUserModel findUnique
   */
  export interface BusinessUserModelFindUniqueArgs extends BusinessUserModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BusinessUserModel findUniqueOrThrow
   */
  export type BusinessUserModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BusinessUserModel
     */
    select?: BusinessUserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserModelInclude | null
    /**
     * Filter, which BusinessUserModel to fetch.
     */
    where: BusinessUserModelWhereUniqueInput
  }


  /**
   * BusinessUserModel base type for findFirst actions
   */
  export type BusinessUserModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BusinessUserModel
     */
    select?: BusinessUserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserModelInclude | null
    /**
     * Filter, which BusinessUserModel to fetch.
     */
    where?: BusinessUserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessUserModels to fetch.
     */
    orderBy?: Enumerable<BusinessUserModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessUserModels.
     */
    cursor?: BusinessUserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessUserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessUserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessUserModels.
     */
    distinct?: Enumerable<BusinessUserModelScalarFieldEnum>
  }

  /**
   * BusinessUserModel findFirst
   */
  export interface BusinessUserModelFindFirstArgs extends BusinessUserModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BusinessUserModel findFirstOrThrow
   */
  export type BusinessUserModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BusinessUserModel
     */
    select?: BusinessUserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserModelInclude | null
    /**
     * Filter, which BusinessUserModel to fetch.
     */
    where?: BusinessUserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessUserModels to fetch.
     */
    orderBy?: Enumerable<BusinessUserModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessUserModels.
     */
    cursor?: BusinessUserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessUserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessUserModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessUserModels.
     */
    distinct?: Enumerable<BusinessUserModelScalarFieldEnum>
  }


  /**
   * BusinessUserModel findMany
   */
  export type BusinessUserModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the BusinessUserModel
     */
    select?: BusinessUserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserModelInclude | null
    /**
     * Filter, which BusinessUserModels to fetch.
     */
    where?: BusinessUserModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessUserModels to fetch.
     */
    orderBy?: Enumerable<BusinessUserModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessUserModels.
     */
    cursor?: BusinessUserModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessUserModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessUserModels.
     */
    skip?: number
    distinct?: Enumerable<BusinessUserModelScalarFieldEnum>
  }


  /**
   * BusinessUserModel create
   */
  export type BusinessUserModelCreateArgs = {
    /**
     * Select specific fields to fetch from the BusinessUserModel
     */
    select?: BusinessUserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserModelInclude | null
    /**
     * The data needed to create a BusinessUserModel.
     */
    data: XOR<BusinessUserModelCreateInput, BusinessUserModelUncheckedCreateInput>
  }


  /**
   * BusinessUserModel createMany
   */
  export type BusinessUserModelCreateManyArgs = {
    /**
     * The data used to create many BusinessUserModels.
     */
    data: Enumerable<BusinessUserModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BusinessUserModel update
   */
  export type BusinessUserModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the BusinessUserModel
     */
    select?: BusinessUserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserModelInclude | null
    /**
     * The data needed to update a BusinessUserModel.
     */
    data: XOR<BusinessUserModelUpdateInput, BusinessUserModelUncheckedUpdateInput>
    /**
     * Choose, which BusinessUserModel to update.
     */
    where: BusinessUserModelWhereUniqueInput
  }


  /**
   * BusinessUserModel updateMany
   */
  export type BusinessUserModelUpdateManyArgs = {
    /**
     * The data used to update BusinessUserModels.
     */
    data: XOR<BusinessUserModelUpdateManyMutationInput, BusinessUserModelUncheckedUpdateManyInput>
    /**
     * Filter which BusinessUserModels to update
     */
    where?: BusinessUserModelWhereInput
  }


  /**
   * BusinessUserModel upsert
   */
  export type BusinessUserModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the BusinessUserModel
     */
    select?: BusinessUserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserModelInclude | null
    /**
     * The filter to search for the BusinessUserModel to update in case it exists.
     */
    where: BusinessUserModelWhereUniqueInput
    /**
     * In case the BusinessUserModel found by the `where` argument doesn't exist, create a new BusinessUserModel with this data.
     */
    create: XOR<BusinessUserModelCreateInput, BusinessUserModelUncheckedCreateInput>
    /**
     * In case the BusinessUserModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUserModelUpdateInput, BusinessUserModelUncheckedUpdateInput>
  }


  /**
   * BusinessUserModel delete
   */
  export type BusinessUserModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the BusinessUserModel
     */
    select?: BusinessUserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserModelInclude | null
    /**
     * Filter which BusinessUserModel to delete.
     */
    where: BusinessUserModelWhereUniqueInput
  }


  /**
   * BusinessUserModel deleteMany
   */
  export type BusinessUserModelDeleteManyArgs = {
    /**
     * Filter which BusinessUserModels to delete
     */
    where?: BusinessUserModelWhereInput
  }


  /**
   * BusinessUserModel.certifications
   */
  export type BusinessUserModel$certificationsArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationImageModel
     */
    select?: BusinessCertificationImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationImageModelInclude | null
    where?: BusinessCertificationImageModelWhereInput
    orderBy?: Enumerable<BusinessCertificationImageModelOrderByWithRelationInput>
    cursor?: BusinessCertificationImageModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BusinessCertificationImageModelScalarFieldEnum>
  }


  /**
   * BusinessUserModel.sub_expertises
   */
  export type BusinessUserModel$sub_expertisesArgs = {
    /**
     * Select specific fields to fetch from the SubExpertiseModel
     */
    select?: SubExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubExpertiseModelInclude | null
    where?: SubExpertiseModelWhereInput
    orderBy?: Enumerable<SubExpertiseModelOrderByWithRelationInput>
    cursor?: SubExpertiseModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SubExpertiseModelScalarFieldEnum>
  }


  /**
   * BusinessUserModel.oauth_accessor
   */
  export type BusinessUserModel$oauth_accessorArgs = {
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
   * BusinessUserModel without action
   */
  export type BusinessUserModelArgs = {
    /**
     * Select specific fields to fetch from the BusinessUserModel
     */
    select?: BusinessUserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserModelInclude | null
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
    base?: boolean | BusinessUserModelArgs
    properties?: boolean | REAgentModel$propertiesArgs
    _count?: boolean | REAgentModelCountOutputTypeArgs
  }


  export type REAgentModelInclude = {
    base?: boolean | BusinessUserModelArgs
    properties?: boolean | REAgentModel$propertiesArgs
    _count?: boolean | REAgentModelCountOutputTypeArgs
  }

  export type REAgentModelGetPayload<S extends boolean | null | undefined | REAgentModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? REAgentModel :
    S extends undefined ? never :
    S extends { include: any } & (REAgentModelArgs | REAgentModelFindManyArgs)
    ? REAgentModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'base' ? BusinessUserModelGetPayload<S['include'][P]> :
        P extends 'properties' ? Array < REProertyModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? REAgentModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (REAgentModelArgs | REAgentModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'base' ? BusinessUserModelGetPayload<S['select'][P]> :
        P extends 'properties' ? Array < REProertyModelGetPayload<S['select'][P]>>  :
        P extends '_count' ? REAgentModelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof REAgentModel ? REAgentModel[P] : never
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

    base<T extends BusinessUserModelArgs= {}>(args?: Subset<T, BusinessUserModelArgs>): Prisma__BusinessUserModelClient<BusinessUserModelGetPayload<T> | Null>;

    properties<T extends REAgentModel$propertiesArgs= {}>(args?: Subset<T, REAgentModel$propertiesArgs>): Prisma.PrismaPromise<Array<REProertyModelGetPayload<T>>| Null>;

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
   * REAgentModel.properties
   */
  export type REAgentModel$propertiesArgs = {
    /**
     * Select specific fields to fetch from the REProertyModel
     */
    select?: REProertyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REProertyModelInclude | null
    where?: REProertyModelWhereInput
    orderBy?: Enumerable<REProertyModelOrderByWithRelationInput>
    cursor?: REProertyModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<REProertyModelScalarFieldEnum>
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
    base?: boolean | BusinessUserModelArgs
    introduction_images?: boolean | HSProviderModel$introduction_imagesArgs
    _count?: boolean | HSProviderModelCountOutputTypeArgs
  }


  export type HSProviderModelInclude = {
    base?: boolean | BusinessUserModelArgs
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
        P extends 'base' ? BusinessUserModelGetPayload<S['include'][P]> :
        P extends 'introduction_images' ? Array < HSIntroductionImageModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? HSProviderModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HSProviderModelArgs | HSProviderModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'base' ? BusinessUserModelGetPayload<S['select'][P]> :
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

    base<T extends BusinessUserModelArgs= {}>(args?: Subset<T, BusinessUserModelArgs>): Prisma__BusinessUserModelClient<BusinessUserModelGetPayload<T> | Null>;

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
   * Model BusinessCertificationImageModel
   */


  export type AggregateBusinessCertificationImageModel = {
    _count: BusinessCertificationImageModelCountAggregateOutputType | null
    _min: BusinessCertificationImageModelMinAggregateOutputType | null
    _max: BusinessCertificationImageModelMaxAggregateOutputType | null
  }

  export type BusinessCertificationImageModelMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    business_user_id: string | null
    url: string | null
  }

  export type BusinessCertificationImageModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    business_user_id: string | null
    url: string | null
  }

  export type BusinessCertificationImageModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    business_user_id: number
    url: number
    _all: number
  }


  export type BusinessCertificationImageModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    business_user_id?: true
    url?: true
  }

  export type BusinessCertificationImageModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    business_user_id?: true
    url?: true
  }

  export type BusinessCertificationImageModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    business_user_id?: true
    url?: true
    _all?: true
  }

  export type BusinessCertificationImageModelAggregateArgs = {
    /**
     * Filter which BusinessCertificationImageModel to aggregate.
     */
    where?: BusinessCertificationImageModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCertificationImageModels to fetch.
     */
    orderBy?: Enumerable<BusinessCertificationImageModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessCertificationImageModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCertificationImageModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCertificationImageModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessCertificationImageModels
    **/
    _count?: true | BusinessCertificationImageModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessCertificationImageModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessCertificationImageModelMaxAggregateInputType
  }

  export type GetBusinessCertificationImageModelAggregateType<T extends BusinessCertificationImageModelAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessCertificationImageModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessCertificationImageModel[P]>
      : GetScalarType<T[P], AggregateBusinessCertificationImageModel[P]>
  }




  export type BusinessCertificationImageModelGroupByArgs = {
    where?: BusinessCertificationImageModelWhereInput
    orderBy?: Enumerable<BusinessCertificationImageModelOrderByWithAggregationInput>
    by: BusinessCertificationImageModelScalarFieldEnum[]
    having?: BusinessCertificationImageModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCertificationImageModelCountAggregateInputType | true
    _min?: BusinessCertificationImageModelMinAggregateInputType
    _max?: BusinessCertificationImageModelMaxAggregateInputType
  }


  export type BusinessCertificationImageModelGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    business_user_id: string
    url: string
    _count: BusinessCertificationImageModelCountAggregateOutputType | null
    _min: BusinessCertificationImageModelMinAggregateOutputType | null
    _max: BusinessCertificationImageModelMaxAggregateOutputType | null
  }

  type GetBusinessCertificationImageModelGroupByPayload<T extends BusinessCertificationImageModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BusinessCertificationImageModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessCertificationImageModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessCertificationImageModelGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessCertificationImageModelGroupByOutputType[P]>
        }
      >
    >


  export type BusinessCertificationImageModelSelect = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    business_user_id?: boolean
    url?: boolean
    business_user?: boolean | BusinessUserModelArgs
  }


  export type BusinessCertificationImageModelInclude = {
    business_user?: boolean | BusinessUserModelArgs
  }

  export type BusinessCertificationImageModelGetPayload<S extends boolean | null | undefined | BusinessCertificationImageModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BusinessCertificationImageModel :
    S extends undefined ? never :
    S extends { include: any } & (BusinessCertificationImageModelArgs | BusinessCertificationImageModelFindManyArgs)
    ? BusinessCertificationImageModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'business_user' ? BusinessUserModelGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BusinessCertificationImageModelArgs | BusinessCertificationImageModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'business_user' ? BusinessUserModelGetPayload<S['select'][P]> :  P extends keyof BusinessCertificationImageModel ? BusinessCertificationImageModel[P] : never
  } 
      : BusinessCertificationImageModel


  type BusinessCertificationImageModelCountArgs = 
    Omit<BusinessCertificationImageModelFindManyArgs, 'select' | 'include'> & {
      select?: BusinessCertificationImageModelCountAggregateInputType | true
    }

  export interface BusinessCertificationImageModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BusinessCertificationImageModel that matches the filter.
     * @param {BusinessCertificationImageModelFindUniqueArgs} args - Arguments to find a BusinessCertificationImageModel
     * @example
     * // Get one BusinessCertificationImageModel
     * const businessCertificationImageModel = await prisma.businessCertificationImageModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BusinessCertificationImageModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BusinessCertificationImageModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BusinessCertificationImageModel'> extends True ? Prisma__BusinessCertificationImageModelClient<BusinessCertificationImageModelGetPayload<T>> : Prisma__BusinessCertificationImageModelClient<BusinessCertificationImageModelGetPayload<T> | null, null>

    /**
     * Find one BusinessCertificationImageModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BusinessCertificationImageModelFindUniqueOrThrowArgs} args - Arguments to find a BusinessCertificationImageModel
     * @example
     * // Get one BusinessCertificationImageModel
     * const businessCertificationImageModel = await prisma.businessCertificationImageModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BusinessCertificationImageModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BusinessCertificationImageModelFindUniqueOrThrowArgs>
    ): Prisma__BusinessCertificationImageModelClient<BusinessCertificationImageModelGetPayload<T>>

    /**
     * Find the first BusinessCertificationImageModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCertificationImageModelFindFirstArgs} args - Arguments to find a BusinessCertificationImageModel
     * @example
     * // Get one BusinessCertificationImageModel
     * const businessCertificationImageModel = await prisma.businessCertificationImageModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BusinessCertificationImageModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BusinessCertificationImageModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BusinessCertificationImageModel'> extends True ? Prisma__BusinessCertificationImageModelClient<BusinessCertificationImageModelGetPayload<T>> : Prisma__BusinessCertificationImageModelClient<BusinessCertificationImageModelGetPayload<T> | null, null>

    /**
     * Find the first BusinessCertificationImageModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCertificationImageModelFindFirstOrThrowArgs} args - Arguments to find a BusinessCertificationImageModel
     * @example
     * // Get one BusinessCertificationImageModel
     * const businessCertificationImageModel = await prisma.businessCertificationImageModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BusinessCertificationImageModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BusinessCertificationImageModelFindFirstOrThrowArgs>
    ): Prisma__BusinessCertificationImageModelClient<BusinessCertificationImageModelGetPayload<T>>

    /**
     * Find zero or more BusinessCertificationImageModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCertificationImageModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessCertificationImageModels
     * const businessCertificationImageModels = await prisma.businessCertificationImageModel.findMany()
     * 
     * // Get first 10 BusinessCertificationImageModels
     * const businessCertificationImageModels = await prisma.businessCertificationImageModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessCertificationImageModelWithIdOnly = await prisma.businessCertificationImageModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BusinessCertificationImageModelFindManyArgs>(
      args?: SelectSubset<T, BusinessCertificationImageModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<BusinessCertificationImageModelGetPayload<T>>>

    /**
     * Create a BusinessCertificationImageModel.
     * @param {BusinessCertificationImageModelCreateArgs} args - Arguments to create a BusinessCertificationImageModel.
     * @example
     * // Create one BusinessCertificationImageModel
     * const BusinessCertificationImageModel = await prisma.businessCertificationImageModel.create({
     *   data: {
     *     // ... data to create a BusinessCertificationImageModel
     *   }
     * })
     * 
    **/
    create<T extends BusinessCertificationImageModelCreateArgs>(
      args: SelectSubset<T, BusinessCertificationImageModelCreateArgs>
    ): Prisma__BusinessCertificationImageModelClient<BusinessCertificationImageModelGetPayload<T>>

    /**
     * Create many BusinessCertificationImageModels.
     *     @param {BusinessCertificationImageModelCreateManyArgs} args - Arguments to create many BusinessCertificationImageModels.
     *     @example
     *     // Create many BusinessCertificationImageModels
     *     const businessCertificationImageModel = await prisma.businessCertificationImageModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BusinessCertificationImageModelCreateManyArgs>(
      args?: SelectSubset<T, BusinessCertificationImageModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BusinessCertificationImageModel.
     * @param {BusinessCertificationImageModelDeleteArgs} args - Arguments to delete one BusinessCertificationImageModel.
     * @example
     * // Delete one BusinessCertificationImageModel
     * const BusinessCertificationImageModel = await prisma.businessCertificationImageModel.delete({
     *   where: {
     *     // ... filter to delete one BusinessCertificationImageModel
     *   }
     * })
     * 
    **/
    delete<T extends BusinessCertificationImageModelDeleteArgs>(
      args: SelectSubset<T, BusinessCertificationImageModelDeleteArgs>
    ): Prisma__BusinessCertificationImageModelClient<BusinessCertificationImageModelGetPayload<T>>

    /**
     * Update one BusinessCertificationImageModel.
     * @param {BusinessCertificationImageModelUpdateArgs} args - Arguments to update one BusinessCertificationImageModel.
     * @example
     * // Update one BusinessCertificationImageModel
     * const businessCertificationImageModel = await prisma.businessCertificationImageModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BusinessCertificationImageModelUpdateArgs>(
      args: SelectSubset<T, BusinessCertificationImageModelUpdateArgs>
    ): Prisma__BusinessCertificationImageModelClient<BusinessCertificationImageModelGetPayload<T>>

    /**
     * Delete zero or more BusinessCertificationImageModels.
     * @param {BusinessCertificationImageModelDeleteManyArgs} args - Arguments to filter BusinessCertificationImageModels to delete.
     * @example
     * // Delete a few BusinessCertificationImageModels
     * const { count } = await prisma.businessCertificationImageModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BusinessCertificationImageModelDeleteManyArgs>(
      args?: SelectSubset<T, BusinessCertificationImageModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessCertificationImageModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCertificationImageModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessCertificationImageModels
     * const businessCertificationImageModel = await prisma.businessCertificationImageModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BusinessCertificationImageModelUpdateManyArgs>(
      args: SelectSubset<T, BusinessCertificationImageModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessCertificationImageModel.
     * @param {BusinessCertificationImageModelUpsertArgs} args - Arguments to update or create a BusinessCertificationImageModel.
     * @example
     * // Update or create a BusinessCertificationImageModel
     * const businessCertificationImageModel = await prisma.businessCertificationImageModel.upsert({
     *   create: {
     *     // ... data to create a BusinessCertificationImageModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessCertificationImageModel we want to update
     *   }
     * })
    **/
    upsert<T extends BusinessCertificationImageModelUpsertArgs>(
      args: SelectSubset<T, BusinessCertificationImageModelUpsertArgs>
    ): Prisma__BusinessCertificationImageModelClient<BusinessCertificationImageModelGetPayload<T>>

    /**
     * Count the number of BusinessCertificationImageModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCertificationImageModelCountArgs} args - Arguments to filter BusinessCertificationImageModels to count.
     * @example
     * // Count the number of BusinessCertificationImageModels
     * const count = await prisma.businessCertificationImageModel.count({
     *   where: {
     *     // ... the filter for the BusinessCertificationImageModels we want to count
     *   }
     * })
    **/
    count<T extends BusinessCertificationImageModelCountArgs>(
      args?: Subset<T, BusinessCertificationImageModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCertificationImageModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessCertificationImageModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCertificationImageModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessCertificationImageModelAggregateArgs>(args: Subset<T, BusinessCertificationImageModelAggregateArgs>): Prisma.PrismaPromise<GetBusinessCertificationImageModelAggregateType<T>>

    /**
     * Group by BusinessCertificationImageModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCertificationImageModelGroupByArgs} args - Group by arguments.
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
      T extends BusinessCertificationImageModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessCertificationImageModelGroupByArgs['orderBy'] }
        : { orderBy?: BusinessCertificationImageModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusinessCertificationImageModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessCertificationImageModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessCertificationImageModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BusinessCertificationImageModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    business_user<T extends BusinessUserModelArgs= {}>(args?: Subset<T, BusinessUserModelArgs>): Prisma__BusinessUserModelClient<BusinessUserModelGetPayload<T> | Null>;

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
   * BusinessCertificationImageModel base type for findUnique actions
   */
  export type BusinessCertificationImageModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BusinessCertificationImageModel
     */
    select?: BusinessCertificationImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationImageModelInclude | null
    /**
     * Filter, which BusinessCertificationImageModel to fetch.
     */
    where: BusinessCertificationImageModelWhereUniqueInput
  }

  /**
   * BusinessCertificationImageModel findUnique
   */
  export interface BusinessCertificationImageModelFindUniqueArgs extends BusinessCertificationImageModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BusinessCertificationImageModel findUniqueOrThrow
   */
  export type BusinessCertificationImageModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationImageModel
     */
    select?: BusinessCertificationImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationImageModelInclude | null
    /**
     * Filter, which BusinessCertificationImageModel to fetch.
     */
    where: BusinessCertificationImageModelWhereUniqueInput
  }


  /**
   * BusinessCertificationImageModel base type for findFirst actions
   */
  export type BusinessCertificationImageModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BusinessCertificationImageModel
     */
    select?: BusinessCertificationImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationImageModelInclude | null
    /**
     * Filter, which BusinessCertificationImageModel to fetch.
     */
    where?: BusinessCertificationImageModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCertificationImageModels to fetch.
     */
    orderBy?: Enumerable<BusinessCertificationImageModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessCertificationImageModels.
     */
    cursor?: BusinessCertificationImageModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCertificationImageModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCertificationImageModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessCertificationImageModels.
     */
    distinct?: Enumerable<BusinessCertificationImageModelScalarFieldEnum>
  }

  /**
   * BusinessCertificationImageModel findFirst
   */
  export interface BusinessCertificationImageModelFindFirstArgs extends BusinessCertificationImageModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BusinessCertificationImageModel findFirstOrThrow
   */
  export type BusinessCertificationImageModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationImageModel
     */
    select?: BusinessCertificationImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationImageModelInclude | null
    /**
     * Filter, which BusinessCertificationImageModel to fetch.
     */
    where?: BusinessCertificationImageModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCertificationImageModels to fetch.
     */
    orderBy?: Enumerable<BusinessCertificationImageModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessCertificationImageModels.
     */
    cursor?: BusinessCertificationImageModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCertificationImageModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCertificationImageModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessCertificationImageModels.
     */
    distinct?: Enumerable<BusinessCertificationImageModelScalarFieldEnum>
  }


  /**
   * BusinessCertificationImageModel findMany
   */
  export type BusinessCertificationImageModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationImageModel
     */
    select?: BusinessCertificationImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationImageModelInclude | null
    /**
     * Filter, which BusinessCertificationImageModels to fetch.
     */
    where?: BusinessCertificationImageModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCertificationImageModels to fetch.
     */
    orderBy?: Enumerable<BusinessCertificationImageModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessCertificationImageModels.
     */
    cursor?: BusinessCertificationImageModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCertificationImageModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCertificationImageModels.
     */
    skip?: number
    distinct?: Enumerable<BusinessCertificationImageModelScalarFieldEnum>
  }


  /**
   * BusinessCertificationImageModel create
   */
  export type BusinessCertificationImageModelCreateArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationImageModel
     */
    select?: BusinessCertificationImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationImageModelInclude | null
    /**
     * The data needed to create a BusinessCertificationImageModel.
     */
    data: XOR<BusinessCertificationImageModelCreateInput, BusinessCertificationImageModelUncheckedCreateInput>
  }


  /**
   * BusinessCertificationImageModel createMany
   */
  export type BusinessCertificationImageModelCreateManyArgs = {
    /**
     * The data used to create many BusinessCertificationImageModels.
     */
    data: Enumerable<BusinessCertificationImageModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BusinessCertificationImageModel update
   */
  export type BusinessCertificationImageModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationImageModel
     */
    select?: BusinessCertificationImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationImageModelInclude | null
    /**
     * The data needed to update a BusinessCertificationImageModel.
     */
    data: XOR<BusinessCertificationImageModelUpdateInput, BusinessCertificationImageModelUncheckedUpdateInput>
    /**
     * Choose, which BusinessCertificationImageModel to update.
     */
    where: BusinessCertificationImageModelWhereUniqueInput
  }


  /**
   * BusinessCertificationImageModel updateMany
   */
  export type BusinessCertificationImageModelUpdateManyArgs = {
    /**
     * The data used to update BusinessCertificationImageModels.
     */
    data: XOR<BusinessCertificationImageModelUpdateManyMutationInput, BusinessCertificationImageModelUncheckedUpdateManyInput>
    /**
     * Filter which BusinessCertificationImageModels to update
     */
    where?: BusinessCertificationImageModelWhereInput
  }


  /**
   * BusinessCertificationImageModel upsert
   */
  export type BusinessCertificationImageModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationImageModel
     */
    select?: BusinessCertificationImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationImageModelInclude | null
    /**
     * The filter to search for the BusinessCertificationImageModel to update in case it exists.
     */
    where: BusinessCertificationImageModelWhereUniqueInput
    /**
     * In case the BusinessCertificationImageModel found by the `where` argument doesn't exist, create a new BusinessCertificationImageModel with this data.
     */
    create: XOR<BusinessCertificationImageModelCreateInput, BusinessCertificationImageModelUncheckedCreateInput>
    /**
     * In case the BusinessCertificationImageModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessCertificationImageModelUpdateInput, BusinessCertificationImageModelUncheckedUpdateInput>
  }


  /**
   * BusinessCertificationImageModel delete
   */
  export type BusinessCertificationImageModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationImageModel
     */
    select?: BusinessCertificationImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationImageModelInclude | null
    /**
     * Filter which BusinessCertificationImageModel to delete.
     */
    where: BusinessCertificationImageModelWhereUniqueInput
  }


  /**
   * BusinessCertificationImageModel deleteMany
   */
  export type BusinessCertificationImageModelDeleteManyArgs = {
    /**
     * Filter which BusinessCertificationImageModels to delete
     */
    where?: BusinessCertificationImageModelWhereInput
  }


  /**
   * BusinessCertificationImageModel without action
   */
  export type BusinessCertificationImageModelArgs = {
    /**
     * Select specific fields to fetch from the BusinessCertificationImageModel
     */
    select?: BusinessCertificationImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessCertificationImageModelInclude | null
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
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    hs_provider_id: string | null
    url: string | null
  }

  export type HSIntroductionImageModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    hs_provider_id: string | null
    url: string | null
  }

  export type HSIntroductionImageModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    hs_provider_id: number
    url: number
    _all: number
  }


  export type HSIntroductionImageModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    hs_provider_id?: true
    url?: true
  }

  export type HSIntroductionImageModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    hs_provider_id?: true
    url?: true
  }

  export type HSIntroductionImageModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    hs_provider_id?: true
    url?: true
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
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    hs_provider_id: string
    url: string
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
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    hs_provider_id?: boolean
    url?: boolean
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
     * // Only select the `id`
     * const hSIntroductionImageModelWithIdOnly = await prisma.hSIntroductionImageModel.findMany({ select: { id: true } })
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
   * Model SubExpertiseModel
   */


  export type AggregateSubExpertiseModel = {
    _count: SubExpertiseModelCountAggregateOutputType | null
    _min: SubExpertiseModelMinAggregateOutputType | null
    _max: SubExpertiseModelMaxAggregateOutputType | null
  }

  export type SubExpertiseModelMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    sub_category_id: string | null
    business_user_id: string | null
  }

  export type SubExpertiseModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    sub_category_id: string | null
    business_user_id: string | null
  }

  export type SubExpertiseModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    sub_category_id: number
    business_user_id: number
    _all: number
  }


  export type SubExpertiseModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    sub_category_id?: true
    business_user_id?: true
  }

  export type SubExpertiseModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    sub_category_id?: true
    business_user_id?: true
  }

  export type SubExpertiseModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    sub_category_id?: true
    business_user_id?: true
    _all?: true
  }

  export type SubExpertiseModelAggregateArgs = {
    /**
     * Filter which SubExpertiseModel to aggregate.
     */
    where?: SubExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubExpertiseModels to fetch.
     */
    orderBy?: Enumerable<SubExpertiseModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubExpertiseModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubExpertiseModels
    **/
    _count?: true | SubExpertiseModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubExpertiseModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubExpertiseModelMaxAggregateInputType
  }

  export type GetSubExpertiseModelAggregateType<T extends SubExpertiseModelAggregateArgs> = {
        [P in keyof T & keyof AggregateSubExpertiseModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubExpertiseModel[P]>
      : GetScalarType<T[P], AggregateSubExpertiseModel[P]>
  }




  export type SubExpertiseModelGroupByArgs = {
    where?: SubExpertiseModelWhereInput
    orderBy?: Enumerable<SubExpertiseModelOrderByWithAggregationInput>
    by: SubExpertiseModelScalarFieldEnum[]
    having?: SubExpertiseModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubExpertiseModelCountAggregateInputType | true
    _min?: SubExpertiseModelMinAggregateInputType
    _max?: SubExpertiseModelMaxAggregateInputType
  }


  export type SubExpertiseModelGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    sub_category_id: string
    business_user_id: string
    _count: SubExpertiseModelCountAggregateOutputType | null
    _min: SubExpertiseModelMinAggregateOutputType | null
    _max: SubExpertiseModelMaxAggregateOutputType | null
  }

  type GetSubExpertiseModelGroupByPayload<T extends SubExpertiseModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SubExpertiseModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubExpertiseModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubExpertiseModelGroupByOutputType[P]>
            : GetScalarType<T[P], SubExpertiseModelGroupByOutputType[P]>
        }
      >
    >


  export type SubExpertiseModelSelect = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    sub_category_id?: boolean
    business_user_id?: boolean
    category?: boolean | ExpertSubCategoryModelArgs
    business_user?: boolean | BusinessUserModelArgs
  }


  export type SubExpertiseModelInclude = {
    category?: boolean | ExpertSubCategoryModelArgs
    business_user?: boolean | BusinessUserModelArgs
  }

  export type SubExpertiseModelGetPayload<S extends boolean | null | undefined | SubExpertiseModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SubExpertiseModel :
    S extends undefined ? never :
    S extends { include: any } & (SubExpertiseModelArgs | SubExpertiseModelFindManyArgs)
    ? SubExpertiseModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? ExpertSubCategoryModelGetPayload<S['include'][P]> :
        P extends 'business_user' ? BusinessUserModelGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SubExpertiseModelArgs | SubExpertiseModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? ExpertSubCategoryModelGetPayload<S['select'][P]> :
        P extends 'business_user' ? BusinessUserModelGetPayload<S['select'][P]> :  P extends keyof SubExpertiseModel ? SubExpertiseModel[P] : never
  } 
      : SubExpertiseModel


  type SubExpertiseModelCountArgs = 
    Omit<SubExpertiseModelFindManyArgs, 'select' | 'include'> & {
      select?: SubExpertiseModelCountAggregateInputType | true
    }

  export interface SubExpertiseModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one SubExpertiseModel that matches the filter.
     * @param {SubExpertiseModelFindUniqueArgs} args - Arguments to find a SubExpertiseModel
     * @example
     * // Get one SubExpertiseModel
     * const subExpertiseModel = await prisma.subExpertiseModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubExpertiseModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SubExpertiseModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SubExpertiseModel'> extends True ? Prisma__SubExpertiseModelClient<SubExpertiseModelGetPayload<T>> : Prisma__SubExpertiseModelClient<SubExpertiseModelGetPayload<T> | null, null>

    /**
     * Find one SubExpertiseModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SubExpertiseModelFindUniqueOrThrowArgs} args - Arguments to find a SubExpertiseModel
     * @example
     * // Get one SubExpertiseModel
     * const subExpertiseModel = await prisma.subExpertiseModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubExpertiseModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SubExpertiseModelFindUniqueOrThrowArgs>
    ): Prisma__SubExpertiseModelClient<SubExpertiseModelGetPayload<T>>

    /**
     * Find the first SubExpertiseModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubExpertiseModelFindFirstArgs} args - Arguments to find a SubExpertiseModel
     * @example
     * // Get one SubExpertiseModel
     * const subExpertiseModel = await prisma.subExpertiseModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubExpertiseModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SubExpertiseModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SubExpertiseModel'> extends True ? Prisma__SubExpertiseModelClient<SubExpertiseModelGetPayload<T>> : Prisma__SubExpertiseModelClient<SubExpertiseModelGetPayload<T> | null, null>

    /**
     * Find the first SubExpertiseModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubExpertiseModelFindFirstOrThrowArgs} args - Arguments to find a SubExpertiseModel
     * @example
     * // Get one SubExpertiseModel
     * const subExpertiseModel = await prisma.subExpertiseModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubExpertiseModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SubExpertiseModelFindFirstOrThrowArgs>
    ): Prisma__SubExpertiseModelClient<SubExpertiseModelGetPayload<T>>

    /**
     * Find zero or more SubExpertiseModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubExpertiseModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubExpertiseModels
     * const subExpertiseModels = await prisma.subExpertiseModel.findMany()
     * 
     * // Get first 10 SubExpertiseModels
     * const subExpertiseModels = await prisma.subExpertiseModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subExpertiseModelWithIdOnly = await prisma.subExpertiseModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubExpertiseModelFindManyArgs>(
      args?: SelectSubset<T, SubExpertiseModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<SubExpertiseModelGetPayload<T>>>

    /**
     * Create a SubExpertiseModel.
     * @param {SubExpertiseModelCreateArgs} args - Arguments to create a SubExpertiseModel.
     * @example
     * // Create one SubExpertiseModel
     * const SubExpertiseModel = await prisma.subExpertiseModel.create({
     *   data: {
     *     // ... data to create a SubExpertiseModel
     *   }
     * })
     * 
    **/
    create<T extends SubExpertiseModelCreateArgs>(
      args: SelectSubset<T, SubExpertiseModelCreateArgs>
    ): Prisma__SubExpertiseModelClient<SubExpertiseModelGetPayload<T>>

    /**
     * Create many SubExpertiseModels.
     *     @param {SubExpertiseModelCreateManyArgs} args - Arguments to create many SubExpertiseModels.
     *     @example
     *     // Create many SubExpertiseModels
     *     const subExpertiseModel = await prisma.subExpertiseModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubExpertiseModelCreateManyArgs>(
      args?: SelectSubset<T, SubExpertiseModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubExpertiseModel.
     * @param {SubExpertiseModelDeleteArgs} args - Arguments to delete one SubExpertiseModel.
     * @example
     * // Delete one SubExpertiseModel
     * const SubExpertiseModel = await prisma.subExpertiseModel.delete({
     *   where: {
     *     // ... filter to delete one SubExpertiseModel
     *   }
     * })
     * 
    **/
    delete<T extends SubExpertiseModelDeleteArgs>(
      args: SelectSubset<T, SubExpertiseModelDeleteArgs>
    ): Prisma__SubExpertiseModelClient<SubExpertiseModelGetPayload<T>>

    /**
     * Update one SubExpertiseModel.
     * @param {SubExpertiseModelUpdateArgs} args - Arguments to update one SubExpertiseModel.
     * @example
     * // Update one SubExpertiseModel
     * const subExpertiseModel = await prisma.subExpertiseModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubExpertiseModelUpdateArgs>(
      args: SelectSubset<T, SubExpertiseModelUpdateArgs>
    ): Prisma__SubExpertiseModelClient<SubExpertiseModelGetPayload<T>>

    /**
     * Delete zero or more SubExpertiseModels.
     * @param {SubExpertiseModelDeleteManyArgs} args - Arguments to filter SubExpertiseModels to delete.
     * @example
     * // Delete a few SubExpertiseModels
     * const { count } = await prisma.subExpertiseModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubExpertiseModelDeleteManyArgs>(
      args?: SelectSubset<T, SubExpertiseModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubExpertiseModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubExpertiseModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubExpertiseModels
     * const subExpertiseModel = await prisma.subExpertiseModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubExpertiseModelUpdateManyArgs>(
      args: SelectSubset<T, SubExpertiseModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubExpertiseModel.
     * @param {SubExpertiseModelUpsertArgs} args - Arguments to update or create a SubExpertiseModel.
     * @example
     * // Update or create a SubExpertiseModel
     * const subExpertiseModel = await prisma.subExpertiseModel.upsert({
     *   create: {
     *     // ... data to create a SubExpertiseModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubExpertiseModel we want to update
     *   }
     * })
    **/
    upsert<T extends SubExpertiseModelUpsertArgs>(
      args: SelectSubset<T, SubExpertiseModelUpsertArgs>
    ): Prisma__SubExpertiseModelClient<SubExpertiseModelGetPayload<T>>

    /**
     * Count the number of SubExpertiseModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubExpertiseModelCountArgs} args - Arguments to filter SubExpertiseModels to count.
     * @example
     * // Count the number of SubExpertiseModels
     * const count = await prisma.subExpertiseModel.count({
     *   where: {
     *     // ... the filter for the SubExpertiseModels we want to count
     *   }
     * })
    **/
    count<T extends SubExpertiseModelCountArgs>(
      args?: Subset<T, SubExpertiseModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubExpertiseModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubExpertiseModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubExpertiseModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubExpertiseModelAggregateArgs>(args: Subset<T, SubExpertiseModelAggregateArgs>): Prisma.PrismaPromise<GetSubExpertiseModelAggregateType<T>>

    /**
     * Group by SubExpertiseModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubExpertiseModelGroupByArgs} args - Group by arguments.
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
      T extends SubExpertiseModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubExpertiseModelGroupByArgs['orderBy'] }
        : { orderBy?: SubExpertiseModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubExpertiseModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubExpertiseModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SubExpertiseModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SubExpertiseModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    business_user<T extends BusinessUserModelArgs= {}>(args?: Subset<T, BusinessUserModelArgs>): Prisma__BusinessUserModelClient<BusinessUserModelGetPayload<T> | Null>;

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
   * SubExpertiseModel base type for findUnique actions
   */
  export type SubExpertiseModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SubExpertiseModel
     */
    select?: SubExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubExpertiseModelInclude | null
    /**
     * Filter, which SubExpertiseModel to fetch.
     */
    where: SubExpertiseModelWhereUniqueInput
  }

  /**
   * SubExpertiseModel findUnique
   */
  export interface SubExpertiseModelFindUniqueArgs extends SubExpertiseModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SubExpertiseModel findUniqueOrThrow
   */
  export type SubExpertiseModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SubExpertiseModel
     */
    select?: SubExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubExpertiseModelInclude | null
    /**
     * Filter, which SubExpertiseModel to fetch.
     */
    where: SubExpertiseModelWhereUniqueInput
  }


  /**
   * SubExpertiseModel base type for findFirst actions
   */
  export type SubExpertiseModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SubExpertiseModel
     */
    select?: SubExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubExpertiseModelInclude | null
    /**
     * Filter, which SubExpertiseModel to fetch.
     */
    where?: SubExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubExpertiseModels to fetch.
     */
    orderBy?: Enumerable<SubExpertiseModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubExpertiseModels.
     */
    cursor?: SubExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubExpertiseModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubExpertiseModels.
     */
    distinct?: Enumerable<SubExpertiseModelScalarFieldEnum>
  }

  /**
   * SubExpertiseModel findFirst
   */
  export interface SubExpertiseModelFindFirstArgs extends SubExpertiseModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SubExpertiseModel findFirstOrThrow
   */
  export type SubExpertiseModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SubExpertiseModel
     */
    select?: SubExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubExpertiseModelInclude | null
    /**
     * Filter, which SubExpertiseModel to fetch.
     */
    where?: SubExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubExpertiseModels to fetch.
     */
    orderBy?: Enumerable<SubExpertiseModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubExpertiseModels.
     */
    cursor?: SubExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubExpertiseModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubExpertiseModels.
     */
    distinct?: Enumerable<SubExpertiseModelScalarFieldEnum>
  }


  /**
   * SubExpertiseModel findMany
   */
  export type SubExpertiseModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the SubExpertiseModel
     */
    select?: SubExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubExpertiseModelInclude | null
    /**
     * Filter, which SubExpertiseModels to fetch.
     */
    where?: SubExpertiseModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubExpertiseModels to fetch.
     */
    orderBy?: Enumerable<SubExpertiseModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubExpertiseModels.
     */
    cursor?: SubExpertiseModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubExpertiseModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubExpertiseModels.
     */
    skip?: number
    distinct?: Enumerable<SubExpertiseModelScalarFieldEnum>
  }


  /**
   * SubExpertiseModel create
   */
  export type SubExpertiseModelCreateArgs = {
    /**
     * Select specific fields to fetch from the SubExpertiseModel
     */
    select?: SubExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubExpertiseModelInclude | null
    /**
     * The data needed to create a SubExpertiseModel.
     */
    data: XOR<SubExpertiseModelCreateInput, SubExpertiseModelUncheckedCreateInput>
  }


  /**
   * SubExpertiseModel createMany
   */
  export type SubExpertiseModelCreateManyArgs = {
    /**
     * The data used to create many SubExpertiseModels.
     */
    data: Enumerable<SubExpertiseModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SubExpertiseModel update
   */
  export type SubExpertiseModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the SubExpertiseModel
     */
    select?: SubExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubExpertiseModelInclude | null
    /**
     * The data needed to update a SubExpertiseModel.
     */
    data: XOR<SubExpertiseModelUpdateInput, SubExpertiseModelUncheckedUpdateInput>
    /**
     * Choose, which SubExpertiseModel to update.
     */
    where: SubExpertiseModelWhereUniqueInput
  }


  /**
   * SubExpertiseModel updateMany
   */
  export type SubExpertiseModelUpdateManyArgs = {
    /**
     * The data used to update SubExpertiseModels.
     */
    data: XOR<SubExpertiseModelUpdateManyMutationInput, SubExpertiseModelUncheckedUpdateManyInput>
    /**
     * Filter which SubExpertiseModels to update
     */
    where?: SubExpertiseModelWhereInput
  }


  /**
   * SubExpertiseModel upsert
   */
  export type SubExpertiseModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the SubExpertiseModel
     */
    select?: SubExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubExpertiseModelInclude | null
    /**
     * The filter to search for the SubExpertiseModel to update in case it exists.
     */
    where: SubExpertiseModelWhereUniqueInput
    /**
     * In case the SubExpertiseModel found by the `where` argument doesn't exist, create a new SubExpertiseModel with this data.
     */
    create: XOR<SubExpertiseModelCreateInput, SubExpertiseModelUncheckedCreateInput>
    /**
     * In case the SubExpertiseModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubExpertiseModelUpdateInput, SubExpertiseModelUncheckedUpdateInput>
  }


  /**
   * SubExpertiseModel delete
   */
  export type SubExpertiseModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the SubExpertiseModel
     */
    select?: SubExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubExpertiseModelInclude | null
    /**
     * Filter which SubExpertiseModel to delete.
     */
    where: SubExpertiseModelWhereUniqueInput
  }


  /**
   * SubExpertiseModel deleteMany
   */
  export type SubExpertiseModelDeleteManyArgs = {
    /**
     * Filter which SubExpertiseModels to delete
     */
    where?: SubExpertiseModelWhereInput
  }


  /**
   * SubExpertiseModel without action
   */
  export type SubExpertiseModelArgs = {
    /**
     * Select specific fields to fetch from the SubExpertiseModel
     */
    select?: SubExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubExpertiseModelInclude | null
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
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
    super_id: string | null
  }

  export type ExpertSubCategoryModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
    super_id: string | null
  }

  export type ExpertSubCategoryModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    name: number
    super_id: number
    _all: number
  }


  export type ExpertSubCategoryModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    super_id?: true
  }

  export type ExpertSubCategoryModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    super_id?: true
  }

  export type ExpertSubCategoryModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
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
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
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
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
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
        P extends 'expertises' ? Array < SubExpertiseModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? ExpertSubCategoryModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ExpertSubCategoryModelArgs | ExpertSubCategoryModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'super' ? ExpertSuperCategoryModelGetPayload<S['select'][P]> :
        P extends 'expertises' ? Array < SubExpertiseModelGetPayload<S['select'][P]>>  :
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
     * // Only select the `id`
     * const expertSubCategoryModelWithIdOnly = await prisma.expertSubCategoryModel.findMany({ select: { id: true } })
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

    expertises<T extends ExpertSubCategoryModel$expertisesArgs= {}>(args?: Subset<T, ExpertSubCategoryModel$expertisesArgs>): Prisma.PrismaPromise<Array<SubExpertiseModelGetPayload<T>>| Null>;

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
     * Select specific fields to fetch from the SubExpertiseModel
     */
    select?: SubExpertiseModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubExpertiseModelInclude | null
    where?: SubExpertiseModelWhereInput
    orderBy?: Enumerable<SubExpertiseModelOrderByWithRelationInput>
    cursor?: SubExpertiseModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SubExpertiseModelScalarFieldEnum>
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
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
    business_type: ExpertBusinessType | null
  }

  export type ExpertSuperCategoryModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
    business_type: ExpertBusinessType | null
  }

  export type ExpertSuperCategoryModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    name: number
    business_type: number
    _all: number
  }


  export type ExpertSuperCategoryModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    business_type?: true
  }

  export type ExpertSuperCategoryModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    business_type?: true
  }

  export type ExpertSuperCategoryModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
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
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
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
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    name?: boolean
    business_type?: boolean
    subs?: boolean | ExpertSuperCategoryModel$subsArgs
    business_users?: boolean | ExpertSuperCategoryModel$business_usersArgs
    _count?: boolean | ExpertSuperCategoryModelCountOutputTypeArgs
  }


  export type ExpertSuperCategoryModelInclude = {
    subs?: boolean | ExpertSuperCategoryModel$subsArgs
    business_users?: boolean | ExpertSuperCategoryModel$business_usersArgs
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
        P extends 'business_users' ? Array < BusinessUserModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? ExpertSuperCategoryModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ExpertSuperCategoryModelArgs | ExpertSuperCategoryModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'subs' ? Array < ExpertSubCategoryModelGetPayload<S['select'][P]>>  :
        P extends 'business_users' ? Array < BusinessUserModelGetPayload<S['select'][P]>>  :
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
     * // Only select the `id`
     * const expertSuperCategoryModelWithIdOnly = await prisma.expertSuperCategoryModel.findMany({ select: { id: true } })
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

    business_users<T extends ExpertSuperCategoryModel$business_usersArgs= {}>(args?: Subset<T, ExpertSuperCategoryModel$business_usersArgs>): Prisma.PrismaPromise<Array<BusinessUserModelGetPayload<T>>| Null>;

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
   * ExpertSuperCategoryModel.business_users
   */
  export type ExpertSuperCategoryModel$business_usersArgs = {
    /**
     * Select specific fields to fetch from the BusinessUserModel
     */
    select?: BusinessUserModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusinessUserModelInclude | null
    where?: BusinessUserModelWhereInput
    orderBy?: Enumerable<BusinessUserModelOrderByWithRelationInput>
    cursor?: BusinessUserModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BusinessUserModelScalarFieldEnum>
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
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    title: string | null
    content: string | null
    user_type: AgreementUserType | null
  }

  export type AgreementModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    title: string | null
    content: string | null
    user_type: AgreementUserType | null
  }

  export type AgreementModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    title: number
    content: number
    user_type: number
    _all: number
  }


  export type AgreementModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    title?: true
    content?: true
    user_type?: true
  }

  export type AgreementModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    title?: true
    content?: true
    user_type?: true
  }

  export type AgreementModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
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
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
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
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
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
     * // Only select the `id`
     * const agreementModelWithIdOnly = await prisma.agreementModel.findMany({ select: { id: true } })
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
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    user_id: string | null
    agreement_id: string | null
  }

  export type AgreementAcceptanceModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    user_id: string | null
    agreement_id: string | null
  }

  export type AgreementAcceptanceModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    user_id: number
    agreement_id: number
    _all: number
  }


  export type AgreementAcceptanceModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    user_id?: true
    agreement_id?: true
  }

  export type AgreementAcceptanceModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    user_id?: true
    agreement_id?: true
  }

  export type AgreementAcceptanceModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
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
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
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
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
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
     * // Only select the `id`
     * const agreementAcceptanceModelWithIdOnly = await prisma.agreementAcceptanceModel.findMany({ select: { id: true } })
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
   * Model REProertyModel
   */


  export type AggregateREProertyModel = {
    _count: REProertyModelCountAggregateOutputType | null
    _min: REProertyModelMinAggregateOutputType | null
    _max: REProertyModelMaxAggregateOutputType | null
  }

  export type REProertyModelMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
    main_image_url: string | null
    agent_id: string | null
    sub_category_id: string | null
  }

  export type REProertyModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
    main_image_url: string | null
    agent_id: string | null
    sub_category_id: string | null
  }

  export type REProertyModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    name: number
    main_image_url: number
    agent_id: number
    sub_category_id: number
    _all: number
  }


  export type REProertyModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    main_image_url?: true
    agent_id?: true
    sub_category_id?: true
  }

  export type REProertyModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    main_image_url?: true
    agent_id?: true
    sub_category_id?: true
  }

  export type REProertyModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    main_image_url?: true
    agent_id?: true
    sub_category_id?: true
    _all?: true
  }

  export type REProertyModelAggregateArgs = {
    /**
     * Filter which REProertyModel to aggregate.
     */
    where?: REProertyModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REProertyModels to fetch.
     */
    orderBy?: Enumerable<REProertyModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: REProertyModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REProertyModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REProertyModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned REProertyModels
    **/
    _count?: true | REProertyModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: REProertyModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: REProertyModelMaxAggregateInputType
  }

  export type GetREProertyModelAggregateType<T extends REProertyModelAggregateArgs> = {
        [P in keyof T & keyof AggregateREProertyModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateREProertyModel[P]>
      : GetScalarType<T[P], AggregateREProertyModel[P]>
  }




  export type REProertyModelGroupByArgs = {
    where?: REProertyModelWhereInput
    orderBy?: Enumerable<REProertyModelOrderByWithAggregationInput>
    by: REProertyModelScalarFieldEnum[]
    having?: REProertyModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: REProertyModelCountAggregateInputType | true
    _min?: REProertyModelMinAggregateInputType
    _max?: REProertyModelMaxAggregateInputType
  }


  export type REProertyModelGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    name: string
    main_image_url: string
    agent_id: string
    sub_category_id: string
    _count: REProertyModelCountAggregateOutputType | null
    _min: REProertyModelMinAggregateOutputType | null
    _max: REProertyModelMaxAggregateOutputType | null
  }

  type GetREProertyModelGroupByPayload<T extends REProertyModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<REProertyModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof REProertyModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], REProertyModelGroupByOutputType[P]>
            : GetScalarType<T[P], REProertyModelGroupByOutputType[P]>
        }
      >
    >


  export type REProertyModelSelect = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    name?: boolean
    main_image_url?: boolean
    agent_id?: boolean
    sub_category_id?: boolean
    agent?: boolean | REAgentModelArgs
    sub_category?: boolean | REPropertySubCategoryModelArgs
  }


  export type REProertyModelInclude = {
    agent?: boolean | REAgentModelArgs
    sub_category?: boolean | REPropertySubCategoryModelArgs
  }

  export type REProertyModelGetPayload<S extends boolean | null | undefined | REProertyModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? REProertyModel :
    S extends undefined ? never :
    S extends { include: any } & (REProertyModelArgs | REProertyModelFindManyArgs)
    ? REProertyModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'agent' ? REAgentModelGetPayload<S['include'][P]> :
        P extends 'sub_category' ? REPropertySubCategoryModelGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (REProertyModelArgs | REProertyModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'agent' ? REAgentModelGetPayload<S['select'][P]> :
        P extends 'sub_category' ? REPropertySubCategoryModelGetPayload<S['select'][P]> :  P extends keyof REProertyModel ? REProertyModel[P] : never
  } 
      : REProertyModel


  type REProertyModelCountArgs = 
    Omit<REProertyModelFindManyArgs, 'select' | 'include'> & {
      select?: REProertyModelCountAggregateInputType | true
    }

  export interface REProertyModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one REProertyModel that matches the filter.
     * @param {REProertyModelFindUniqueArgs} args - Arguments to find a REProertyModel
     * @example
     * // Get one REProertyModel
     * const rEProertyModel = await prisma.rEProertyModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends REProertyModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, REProertyModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'REProertyModel'> extends True ? Prisma__REProertyModelClient<REProertyModelGetPayload<T>> : Prisma__REProertyModelClient<REProertyModelGetPayload<T> | null, null>

    /**
     * Find one REProertyModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {REProertyModelFindUniqueOrThrowArgs} args - Arguments to find a REProertyModel
     * @example
     * // Get one REProertyModel
     * const rEProertyModel = await prisma.rEProertyModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends REProertyModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, REProertyModelFindUniqueOrThrowArgs>
    ): Prisma__REProertyModelClient<REProertyModelGetPayload<T>>

    /**
     * Find the first REProertyModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REProertyModelFindFirstArgs} args - Arguments to find a REProertyModel
     * @example
     * // Get one REProertyModel
     * const rEProertyModel = await prisma.rEProertyModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends REProertyModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, REProertyModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'REProertyModel'> extends True ? Prisma__REProertyModelClient<REProertyModelGetPayload<T>> : Prisma__REProertyModelClient<REProertyModelGetPayload<T> | null, null>

    /**
     * Find the first REProertyModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REProertyModelFindFirstOrThrowArgs} args - Arguments to find a REProertyModel
     * @example
     * // Get one REProertyModel
     * const rEProertyModel = await prisma.rEProertyModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends REProertyModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, REProertyModelFindFirstOrThrowArgs>
    ): Prisma__REProertyModelClient<REProertyModelGetPayload<T>>

    /**
     * Find zero or more REProertyModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REProertyModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all REProertyModels
     * const rEProertyModels = await prisma.rEProertyModel.findMany()
     * 
     * // Get first 10 REProertyModels
     * const rEProertyModels = await prisma.rEProertyModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rEProertyModelWithIdOnly = await prisma.rEProertyModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends REProertyModelFindManyArgs>(
      args?: SelectSubset<T, REProertyModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<REProertyModelGetPayload<T>>>

    /**
     * Create a REProertyModel.
     * @param {REProertyModelCreateArgs} args - Arguments to create a REProertyModel.
     * @example
     * // Create one REProertyModel
     * const REProertyModel = await prisma.rEProertyModel.create({
     *   data: {
     *     // ... data to create a REProertyModel
     *   }
     * })
     * 
    **/
    create<T extends REProertyModelCreateArgs>(
      args: SelectSubset<T, REProertyModelCreateArgs>
    ): Prisma__REProertyModelClient<REProertyModelGetPayload<T>>

    /**
     * Create many REProertyModels.
     *     @param {REProertyModelCreateManyArgs} args - Arguments to create many REProertyModels.
     *     @example
     *     // Create many REProertyModels
     *     const rEProertyModel = await prisma.rEProertyModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends REProertyModelCreateManyArgs>(
      args?: SelectSubset<T, REProertyModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a REProertyModel.
     * @param {REProertyModelDeleteArgs} args - Arguments to delete one REProertyModel.
     * @example
     * // Delete one REProertyModel
     * const REProertyModel = await prisma.rEProertyModel.delete({
     *   where: {
     *     // ... filter to delete one REProertyModel
     *   }
     * })
     * 
    **/
    delete<T extends REProertyModelDeleteArgs>(
      args: SelectSubset<T, REProertyModelDeleteArgs>
    ): Prisma__REProertyModelClient<REProertyModelGetPayload<T>>

    /**
     * Update one REProertyModel.
     * @param {REProertyModelUpdateArgs} args - Arguments to update one REProertyModel.
     * @example
     * // Update one REProertyModel
     * const rEProertyModel = await prisma.rEProertyModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends REProertyModelUpdateArgs>(
      args: SelectSubset<T, REProertyModelUpdateArgs>
    ): Prisma__REProertyModelClient<REProertyModelGetPayload<T>>

    /**
     * Delete zero or more REProertyModels.
     * @param {REProertyModelDeleteManyArgs} args - Arguments to filter REProertyModels to delete.
     * @example
     * // Delete a few REProertyModels
     * const { count } = await prisma.rEProertyModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends REProertyModelDeleteManyArgs>(
      args?: SelectSubset<T, REProertyModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more REProertyModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REProertyModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many REProertyModels
     * const rEProertyModel = await prisma.rEProertyModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends REProertyModelUpdateManyArgs>(
      args: SelectSubset<T, REProertyModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one REProertyModel.
     * @param {REProertyModelUpsertArgs} args - Arguments to update or create a REProertyModel.
     * @example
     * // Update or create a REProertyModel
     * const rEProertyModel = await prisma.rEProertyModel.upsert({
     *   create: {
     *     // ... data to create a REProertyModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the REProertyModel we want to update
     *   }
     * })
    **/
    upsert<T extends REProertyModelUpsertArgs>(
      args: SelectSubset<T, REProertyModelUpsertArgs>
    ): Prisma__REProertyModelClient<REProertyModelGetPayload<T>>

    /**
     * Count the number of REProertyModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REProertyModelCountArgs} args - Arguments to filter REProertyModels to count.
     * @example
     * // Count the number of REProertyModels
     * const count = await prisma.rEProertyModel.count({
     *   where: {
     *     // ... the filter for the REProertyModels we want to count
     *   }
     * })
    **/
    count<T extends REProertyModelCountArgs>(
      args?: Subset<T, REProertyModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], REProertyModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a REProertyModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REProertyModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends REProertyModelAggregateArgs>(args: Subset<T, REProertyModelAggregateArgs>): Prisma.PrismaPromise<GetREProertyModelAggregateType<T>>

    /**
     * Group by REProertyModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REProertyModelGroupByArgs} args - Group by arguments.
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
      T extends REProertyModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: REProertyModelGroupByArgs['orderBy'] }
        : { orderBy?: REProertyModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, REProertyModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetREProertyModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for REProertyModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__REProertyModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    agent<T extends REAgentModelArgs= {}>(args?: Subset<T, REAgentModelArgs>): Prisma__REAgentModelClient<REAgentModelGetPayload<T> | Null>;

    sub_category<T extends REPropertySubCategoryModelArgs= {}>(args?: Subset<T, REPropertySubCategoryModelArgs>): Prisma__REPropertySubCategoryModelClient<REPropertySubCategoryModelGetPayload<T> | Null>;

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
   * REProertyModel base type for findUnique actions
   */
  export type REProertyModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the REProertyModel
     */
    select?: REProertyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REProertyModelInclude | null
    /**
     * Filter, which REProertyModel to fetch.
     */
    where: REProertyModelWhereUniqueInput
  }

  /**
   * REProertyModel findUnique
   */
  export interface REProertyModelFindUniqueArgs extends REProertyModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * REProertyModel findUniqueOrThrow
   */
  export type REProertyModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the REProertyModel
     */
    select?: REProertyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REProertyModelInclude | null
    /**
     * Filter, which REProertyModel to fetch.
     */
    where: REProertyModelWhereUniqueInput
  }


  /**
   * REProertyModel base type for findFirst actions
   */
  export type REProertyModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the REProertyModel
     */
    select?: REProertyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REProertyModelInclude | null
    /**
     * Filter, which REProertyModel to fetch.
     */
    where?: REProertyModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REProertyModels to fetch.
     */
    orderBy?: Enumerable<REProertyModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REProertyModels.
     */
    cursor?: REProertyModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REProertyModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REProertyModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REProertyModels.
     */
    distinct?: Enumerable<REProertyModelScalarFieldEnum>
  }

  /**
   * REProertyModel findFirst
   */
  export interface REProertyModelFindFirstArgs extends REProertyModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * REProertyModel findFirstOrThrow
   */
  export type REProertyModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the REProertyModel
     */
    select?: REProertyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REProertyModelInclude | null
    /**
     * Filter, which REProertyModel to fetch.
     */
    where?: REProertyModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REProertyModels to fetch.
     */
    orderBy?: Enumerable<REProertyModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REProertyModels.
     */
    cursor?: REProertyModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REProertyModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REProertyModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REProertyModels.
     */
    distinct?: Enumerable<REProertyModelScalarFieldEnum>
  }


  /**
   * REProertyModel findMany
   */
  export type REProertyModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the REProertyModel
     */
    select?: REProertyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REProertyModelInclude | null
    /**
     * Filter, which REProertyModels to fetch.
     */
    where?: REProertyModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REProertyModels to fetch.
     */
    orderBy?: Enumerable<REProertyModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing REProertyModels.
     */
    cursor?: REProertyModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REProertyModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REProertyModels.
     */
    skip?: number
    distinct?: Enumerable<REProertyModelScalarFieldEnum>
  }


  /**
   * REProertyModel create
   */
  export type REProertyModelCreateArgs = {
    /**
     * Select specific fields to fetch from the REProertyModel
     */
    select?: REProertyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REProertyModelInclude | null
    /**
     * The data needed to create a REProertyModel.
     */
    data: XOR<REProertyModelCreateInput, REProertyModelUncheckedCreateInput>
  }


  /**
   * REProertyModel createMany
   */
  export type REProertyModelCreateManyArgs = {
    /**
     * The data used to create many REProertyModels.
     */
    data: Enumerable<REProertyModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * REProertyModel update
   */
  export type REProertyModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the REProertyModel
     */
    select?: REProertyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REProertyModelInclude | null
    /**
     * The data needed to update a REProertyModel.
     */
    data: XOR<REProertyModelUpdateInput, REProertyModelUncheckedUpdateInput>
    /**
     * Choose, which REProertyModel to update.
     */
    where: REProertyModelWhereUniqueInput
  }


  /**
   * REProertyModel updateMany
   */
  export type REProertyModelUpdateManyArgs = {
    /**
     * The data used to update REProertyModels.
     */
    data: XOR<REProertyModelUpdateManyMutationInput, REProertyModelUncheckedUpdateManyInput>
    /**
     * Filter which REProertyModels to update
     */
    where?: REProertyModelWhereInput
  }


  /**
   * REProertyModel upsert
   */
  export type REProertyModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the REProertyModel
     */
    select?: REProertyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REProertyModelInclude | null
    /**
     * The filter to search for the REProertyModel to update in case it exists.
     */
    where: REProertyModelWhereUniqueInput
    /**
     * In case the REProertyModel found by the `where` argument doesn't exist, create a new REProertyModel with this data.
     */
    create: XOR<REProertyModelCreateInput, REProertyModelUncheckedCreateInput>
    /**
     * In case the REProertyModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<REProertyModelUpdateInput, REProertyModelUncheckedUpdateInput>
  }


  /**
   * REProertyModel delete
   */
  export type REProertyModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the REProertyModel
     */
    select?: REProertyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REProertyModelInclude | null
    /**
     * Filter which REProertyModel to delete.
     */
    where: REProertyModelWhereUniqueInput
  }


  /**
   * REProertyModel deleteMany
   */
  export type REProertyModelDeleteManyArgs = {
    /**
     * Filter which REProertyModels to delete
     */
    where?: REProertyModelWhereInput
  }


  /**
   * REProertyModel without action
   */
  export type REProertyModelArgs = {
    /**
     * Select specific fields to fetch from the REProertyModel
     */
    select?: REProertyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REProertyModelInclude | null
  }



  /**
   * Model REPropertySuperCategoryModel
   */


  export type AggregateREPropertySuperCategoryModel = {
    _count: REPropertySuperCategoryModelCountAggregateOutputType | null
    _min: REPropertySuperCategoryModelMinAggregateOutputType | null
    _max: REPropertySuperCategoryModelMaxAggregateOutputType | null
  }

  export type REPropertySuperCategoryModelMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
  }

  export type REPropertySuperCategoryModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
  }

  export type REPropertySuperCategoryModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    name: number
    _all: number
  }


  export type REPropertySuperCategoryModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
  }

  export type REPropertySuperCategoryModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
  }

  export type REPropertySuperCategoryModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    _all?: true
  }

  export type REPropertySuperCategoryModelAggregateArgs = {
    /**
     * Filter which REPropertySuperCategoryModel to aggregate.
     */
    where?: REPropertySuperCategoryModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REPropertySuperCategoryModels to fetch.
     */
    orderBy?: Enumerable<REPropertySuperCategoryModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: REPropertySuperCategoryModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REPropertySuperCategoryModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REPropertySuperCategoryModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned REPropertySuperCategoryModels
    **/
    _count?: true | REPropertySuperCategoryModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: REPropertySuperCategoryModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: REPropertySuperCategoryModelMaxAggregateInputType
  }

  export type GetREPropertySuperCategoryModelAggregateType<T extends REPropertySuperCategoryModelAggregateArgs> = {
        [P in keyof T & keyof AggregateREPropertySuperCategoryModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateREPropertySuperCategoryModel[P]>
      : GetScalarType<T[P], AggregateREPropertySuperCategoryModel[P]>
  }




  export type REPropertySuperCategoryModelGroupByArgs = {
    where?: REPropertySuperCategoryModelWhereInput
    orderBy?: Enumerable<REPropertySuperCategoryModelOrderByWithAggregationInput>
    by: REPropertySuperCategoryModelScalarFieldEnum[]
    having?: REPropertySuperCategoryModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: REPropertySuperCategoryModelCountAggregateInputType | true
    _min?: REPropertySuperCategoryModelMinAggregateInputType
    _max?: REPropertySuperCategoryModelMaxAggregateInputType
  }


  export type REPropertySuperCategoryModelGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    name: string
    _count: REPropertySuperCategoryModelCountAggregateOutputType | null
    _min: REPropertySuperCategoryModelMinAggregateOutputType | null
    _max: REPropertySuperCategoryModelMaxAggregateOutputType | null
  }

  type GetREPropertySuperCategoryModelGroupByPayload<T extends REPropertySuperCategoryModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<REPropertySuperCategoryModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof REPropertySuperCategoryModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], REPropertySuperCategoryModelGroupByOutputType[P]>
            : GetScalarType<T[P], REPropertySuperCategoryModelGroupByOutputType[P]>
        }
      >
    >


  export type REPropertySuperCategoryModelSelect = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    name?: boolean
    sub_categories?: boolean | REPropertySuperCategoryModel$sub_categoriesArgs
    _count?: boolean | REPropertySuperCategoryModelCountOutputTypeArgs
  }


  export type REPropertySuperCategoryModelInclude = {
    sub_categories?: boolean | REPropertySuperCategoryModel$sub_categoriesArgs
    _count?: boolean | REPropertySuperCategoryModelCountOutputTypeArgs
  }

  export type REPropertySuperCategoryModelGetPayload<S extends boolean | null | undefined | REPropertySuperCategoryModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? REPropertySuperCategoryModel :
    S extends undefined ? never :
    S extends { include: any } & (REPropertySuperCategoryModelArgs | REPropertySuperCategoryModelFindManyArgs)
    ? REPropertySuperCategoryModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'sub_categories' ? Array < REPropertySubCategoryModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? REPropertySuperCategoryModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (REPropertySuperCategoryModelArgs | REPropertySuperCategoryModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'sub_categories' ? Array < REPropertySubCategoryModelGetPayload<S['select'][P]>>  :
        P extends '_count' ? REPropertySuperCategoryModelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof REPropertySuperCategoryModel ? REPropertySuperCategoryModel[P] : never
  } 
      : REPropertySuperCategoryModel


  type REPropertySuperCategoryModelCountArgs = 
    Omit<REPropertySuperCategoryModelFindManyArgs, 'select' | 'include'> & {
      select?: REPropertySuperCategoryModelCountAggregateInputType | true
    }

  export interface REPropertySuperCategoryModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one REPropertySuperCategoryModel that matches the filter.
     * @param {REPropertySuperCategoryModelFindUniqueArgs} args - Arguments to find a REPropertySuperCategoryModel
     * @example
     * // Get one REPropertySuperCategoryModel
     * const rEPropertySuperCategoryModel = await prisma.rEPropertySuperCategoryModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends REPropertySuperCategoryModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, REPropertySuperCategoryModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'REPropertySuperCategoryModel'> extends True ? Prisma__REPropertySuperCategoryModelClient<REPropertySuperCategoryModelGetPayload<T>> : Prisma__REPropertySuperCategoryModelClient<REPropertySuperCategoryModelGetPayload<T> | null, null>

    /**
     * Find one REPropertySuperCategoryModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {REPropertySuperCategoryModelFindUniqueOrThrowArgs} args - Arguments to find a REPropertySuperCategoryModel
     * @example
     * // Get one REPropertySuperCategoryModel
     * const rEPropertySuperCategoryModel = await prisma.rEPropertySuperCategoryModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends REPropertySuperCategoryModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, REPropertySuperCategoryModelFindUniqueOrThrowArgs>
    ): Prisma__REPropertySuperCategoryModelClient<REPropertySuperCategoryModelGetPayload<T>>

    /**
     * Find the first REPropertySuperCategoryModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPropertySuperCategoryModelFindFirstArgs} args - Arguments to find a REPropertySuperCategoryModel
     * @example
     * // Get one REPropertySuperCategoryModel
     * const rEPropertySuperCategoryModel = await prisma.rEPropertySuperCategoryModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends REPropertySuperCategoryModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, REPropertySuperCategoryModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'REPropertySuperCategoryModel'> extends True ? Prisma__REPropertySuperCategoryModelClient<REPropertySuperCategoryModelGetPayload<T>> : Prisma__REPropertySuperCategoryModelClient<REPropertySuperCategoryModelGetPayload<T> | null, null>

    /**
     * Find the first REPropertySuperCategoryModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPropertySuperCategoryModelFindFirstOrThrowArgs} args - Arguments to find a REPropertySuperCategoryModel
     * @example
     * // Get one REPropertySuperCategoryModel
     * const rEPropertySuperCategoryModel = await prisma.rEPropertySuperCategoryModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends REPropertySuperCategoryModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, REPropertySuperCategoryModelFindFirstOrThrowArgs>
    ): Prisma__REPropertySuperCategoryModelClient<REPropertySuperCategoryModelGetPayload<T>>

    /**
     * Find zero or more REPropertySuperCategoryModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPropertySuperCategoryModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all REPropertySuperCategoryModels
     * const rEPropertySuperCategoryModels = await prisma.rEPropertySuperCategoryModel.findMany()
     * 
     * // Get first 10 REPropertySuperCategoryModels
     * const rEPropertySuperCategoryModels = await prisma.rEPropertySuperCategoryModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rEPropertySuperCategoryModelWithIdOnly = await prisma.rEPropertySuperCategoryModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends REPropertySuperCategoryModelFindManyArgs>(
      args?: SelectSubset<T, REPropertySuperCategoryModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<REPropertySuperCategoryModelGetPayload<T>>>

    /**
     * Create a REPropertySuperCategoryModel.
     * @param {REPropertySuperCategoryModelCreateArgs} args - Arguments to create a REPropertySuperCategoryModel.
     * @example
     * // Create one REPropertySuperCategoryModel
     * const REPropertySuperCategoryModel = await prisma.rEPropertySuperCategoryModel.create({
     *   data: {
     *     // ... data to create a REPropertySuperCategoryModel
     *   }
     * })
     * 
    **/
    create<T extends REPropertySuperCategoryModelCreateArgs>(
      args: SelectSubset<T, REPropertySuperCategoryModelCreateArgs>
    ): Prisma__REPropertySuperCategoryModelClient<REPropertySuperCategoryModelGetPayload<T>>

    /**
     * Create many REPropertySuperCategoryModels.
     *     @param {REPropertySuperCategoryModelCreateManyArgs} args - Arguments to create many REPropertySuperCategoryModels.
     *     @example
     *     // Create many REPropertySuperCategoryModels
     *     const rEPropertySuperCategoryModel = await prisma.rEPropertySuperCategoryModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends REPropertySuperCategoryModelCreateManyArgs>(
      args?: SelectSubset<T, REPropertySuperCategoryModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a REPropertySuperCategoryModel.
     * @param {REPropertySuperCategoryModelDeleteArgs} args - Arguments to delete one REPropertySuperCategoryModel.
     * @example
     * // Delete one REPropertySuperCategoryModel
     * const REPropertySuperCategoryModel = await prisma.rEPropertySuperCategoryModel.delete({
     *   where: {
     *     // ... filter to delete one REPropertySuperCategoryModel
     *   }
     * })
     * 
    **/
    delete<T extends REPropertySuperCategoryModelDeleteArgs>(
      args: SelectSubset<T, REPropertySuperCategoryModelDeleteArgs>
    ): Prisma__REPropertySuperCategoryModelClient<REPropertySuperCategoryModelGetPayload<T>>

    /**
     * Update one REPropertySuperCategoryModel.
     * @param {REPropertySuperCategoryModelUpdateArgs} args - Arguments to update one REPropertySuperCategoryModel.
     * @example
     * // Update one REPropertySuperCategoryModel
     * const rEPropertySuperCategoryModel = await prisma.rEPropertySuperCategoryModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends REPropertySuperCategoryModelUpdateArgs>(
      args: SelectSubset<T, REPropertySuperCategoryModelUpdateArgs>
    ): Prisma__REPropertySuperCategoryModelClient<REPropertySuperCategoryModelGetPayload<T>>

    /**
     * Delete zero or more REPropertySuperCategoryModels.
     * @param {REPropertySuperCategoryModelDeleteManyArgs} args - Arguments to filter REPropertySuperCategoryModels to delete.
     * @example
     * // Delete a few REPropertySuperCategoryModels
     * const { count } = await prisma.rEPropertySuperCategoryModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends REPropertySuperCategoryModelDeleteManyArgs>(
      args?: SelectSubset<T, REPropertySuperCategoryModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more REPropertySuperCategoryModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPropertySuperCategoryModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many REPropertySuperCategoryModels
     * const rEPropertySuperCategoryModel = await prisma.rEPropertySuperCategoryModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends REPropertySuperCategoryModelUpdateManyArgs>(
      args: SelectSubset<T, REPropertySuperCategoryModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one REPropertySuperCategoryModel.
     * @param {REPropertySuperCategoryModelUpsertArgs} args - Arguments to update or create a REPropertySuperCategoryModel.
     * @example
     * // Update or create a REPropertySuperCategoryModel
     * const rEPropertySuperCategoryModel = await prisma.rEPropertySuperCategoryModel.upsert({
     *   create: {
     *     // ... data to create a REPropertySuperCategoryModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the REPropertySuperCategoryModel we want to update
     *   }
     * })
    **/
    upsert<T extends REPropertySuperCategoryModelUpsertArgs>(
      args: SelectSubset<T, REPropertySuperCategoryModelUpsertArgs>
    ): Prisma__REPropertySuperCategoryModelClient<REPropertySuperCategoryModelGetPayload<T>>

    /**
     * Count the number of REPropertySuperCategoryModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPropertySuperCategoryModelCountArgs} args - Arguments to filter REPropertySuperCategoryModels to count.
     * @example
     * // Count the number of REPropertySuperCategoryModels
     * const count = await prisma.rEPropertySuperCategoryModel.count({
     *   where: {
     *     // ... the filter for the REPropertySuperCategoryModels we want to count
     *   }
     * })
    **/
    count<T extends REPropertySuperCategoryModelCountArgs>(
      args?: Subset<T, REPropertySuperCategoryModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], REPropertySuperCategoryModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a REPropertySuperCategoryModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPropertySuperCategoryModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends REPropertySuperCategoryModelAggregateArgs>(args: Subset<T, REPropertySuperCategoryModelAggregateArgs>): Prisma.PrismaPromise<GetREPropertySuperCategoryModelAggregateType<T>>

    /**
     * Group by REPropertySuperCategoryModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPropertySuperCategoryModelGroupByArgs} args - Group by arguments.
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
      T extends REPropertySuperCategoryModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: REPropertySuperCategoryModelGroupByArgs['orderBy'] }
        : { orderBy?: REPropertySuperCategoryModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, REPropertySuperCategoryModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetREPropertySuperCategoryModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for REPropertySuperCategoryModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__REPropertySuperCategoryModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    sub_categories<T extends REPropertySuperCategoryModel$sub_categoriesArgs= {}>(args?: Subset<T, REPropertySuperCategoryModel$sub_categoriesArgs>): Prisma.PrismaPromise<Array<REPropertySubCategoryModelGetPayload<T>>| Null>;

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
   * REPropertySuperCategoryModel base type for findUnique actions
   */
  export type REPropertySuperCategoryModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the REPropertySuperCategoryModel
     */
    select?: REPropertySuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySuperCategoryModelInclude | null
    /**
     * Filter, which REPropertySuperCategoryModel to fetch.
     */
    where: REPropertySuperCategoryModelWhereUniqueInput
  }

  /**
   * REPropertySuperCategoryModel findUnique
   */
  export interface REPropertySuperCategoryModelFindUniqueArgs extends REPropertySuperCategoryModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * REPropertySuperCategoryModel findUniqueOrThrow
   */
  export type REPropertySuperCategoryModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the REPropertySuperCategoryModel
     */
    select?: REPropertySuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySuperCategoryModelInclude | null
    /**
     * Filter, which REPropertySuperCategoryModel to fetch.
     */
    where: REPropertySuperCategoryModelWhereUniqueInput
  }


  /**
   * REPropertySuperCategoryModel base type for findFirst actions
   */
  export type REPropertySuperCategoryModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the REPropertySuperCategoryModel
     */
    select?: REPropertySuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySuperCategoryModelInclude | null
    /**
     * Filter, which REPropertySuperCategoryModel to fetch.
     */
    where?: REPropertySuperCategoryModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REPropertySuperCategoryModels to fetch.
     */
    orderBy?: Enumerable<REPropertySuperCategoryModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REPropertySuperCategoryModels.
     */
    cursor?: REPropertySuperCategoryModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REPropertySuperCategoryModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REPropertySuperCategoryModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REPropertySuperCategoryModels.
     */
    distinct?: Enumerable<REPropertySuperCategoryModelScalarFieldEnum>
  }

  /**
   * REPropertySuperCategoryModel findFirst
   */
  export interface REPropertySuperCategoryModelFindFirstArgs extends REPropertySuperCategoryModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * REPropertySuperCategoryModel findFirstOrThrow
   */
  export type REPropertySuperCategoryModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the REPropertySuperCategoryModel
     */
    select?: REPropertySuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySuperCategoryModelInclude | null
    /**
     * Filter, which REPropertySuperCategoryModel to fetch.
     */
    where?: REPropertySuperCategoryModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REPropertySuperCategoryModels to fetch.
     */
    orderBy?: Enumerable<REPropertySuperCategoryModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REPropertySuperCategoryModels.
     */
    cursor?: REPropertySuperCategoryModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REPropertySuperCategoryModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REPropertySuperCategoryModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REPropertySuperCategoryModels.
     */
    distinct?: Enumerable<REPropertySuperCategoryModelScalarFieldEnum>
  }


  /**
   * REPropertySuperCategoryModel findMany
   */
  export type REPropertySuperCategoryModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the REPropertySuperCategoryModel
     */
    select?: REPropertySuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySuperCategoryModelInclude | null
    /**
     * Filter, which REPropertySuperCategoryModels to fetch.
     */
    where?: REPropertySuperCategoryModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REPropertySuperCategoryModels to fetch.
     */
    orderBy?: Enumerable<REPropertySuperCategoryModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing REPropertySuperCategoryModels.
     */
    cursor?: REPropertySuperCategoryModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REPropertySuperCategoryModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REPropertySuperCategoryModels.
     */
    skip?: number
    distinct?: Enumerable<REPropertySuperCategoryModelScalarFieldEnum>
  }


  /**
   * REPropertySuperCategoryModel create
   */
  export type REPropertySuperCategoryModelCreateArgs = {
    /**
     * Select specific fields to fetch from the REPropertySuperCategoryModel
     */
    select?: REPropertySuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySuperCategoryModelInclude | null
    /**
     * The data needed to create a REPropertySuperCategoryModel.
     */
    data: XOR<REPropertySuperCategoryModelCreateInput, REPropertySuperCategoryModelUncheckedCreateInput>
  }


  /**
   * REPropertySuperCategoryModel createMany
   */
  export type REPropertySuperCategoryModelCreateManyArgs = {
    /**
     * The data used to create many REPropertySuperCategoryModels.
     */
    data: Enumerable<REPropertySuperCategoryModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * REPropertySuperCategoryModel update
   */
  export type REPropertySuperCategoryModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the REPropertySuperCategoryModel
     */
    select?: REPropertySuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySuperCategoryModelInclude | null
    /**
     * The data needed to update a REPropertySuperCategoryModel.
     */
    data: XOR<REPropertySuperCategoryModelUpdateInput, REPropertySuperCategoryModelUncheckedUpdateInput>
    /**
     * Choose, which REPropertySuperCategoryModel to update.
     */
    where: REPropertySuperCategoryModelWhereUniqueInput
  }


  /**
   * REPropertySuperCategoryModel updateMany
   */
  export type REPropertySuperCategoryModelUpdateManyArgs = {
    /**
     * The data used to update REPropertySuperCategoryModels.
     */
    data: XOR<REPropertySuperCategoryModelUpdateManyMutationInput, REPropertySuperCategoryModelUncheckedUpdateManyInput>
    /**
     * Filter which REPropertySuperCategoryModels to update
     */
    where?: REPropertySuperCategoryModelWhereInput
  }


  /**
   * REPropertySuperCategoryModel upsert
   */
  export type REPropertySuperCategoryModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the REPropertySuperCategoryModel
     */
    select?: REPropertySuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySuperCategoryModelInclude | null
    /**
     * The filter to search for the REPropertySuperCategoryModel to update in case it exists.
     */
    where: REPropertySuperCategoryModelWhereUniqueInput
    /**
     * In case the REPropertySuperCategoryModel found by the `where` argument doesn't exist, create a new REPropertySuperCategoryModel with this data.
     */
    create: XOR<REPropertySuperCategoryModelCreateInput, REPropertySuperCategoryModelUncheckedCreateInput>
    /**
     * In case the REPropertySuperCategoryModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<REPropertySuperCategoryModelUpdateInput, REPropertySuperCategoryModelUncheckedUpdateInput>
  }


  /**
   * REPropertySuperCategoryModel delete
   */
  export type REPropertySuperCategoryModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the REPropertySuperCategoryModel
     */
    select?: REPropertySuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySuperCategoryModelInclude | null
    /**
     * Filter which REPropertySuperCategoryModel to delete.
     */
    where: REPropertySuperCategoryModelWhereUniqueInput
  }


  /**
   * REPropertySuperCategoryModel deleteMany
   */
  export type REPropertySuperCategoryModelDeleteManyArgs = {
    /**
     * Filter which REPropertySuperCategoryModels to delete
     */
    where?: REPropertySuperCategoryModelWhereInput
  }


  /**
   * REPropertySuperCategoryModel.sub_categories
   */
  export type REPropertySuperCategoryModel$sub_categoriesArgs = {
    /**
     * Select specific fields to fetch from the REPropertySubCategoryModel
     */
    select?: REPropertySubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySubCategoryModelInclude | null
    where?: REPropertySubCategoryModelWhereInput
    orderBy?: Enumerable<REPropertySubCategoryModelOrderByWithRelationInput>
    cursor?: REPropertySubCategoryModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<REPropertySubCategoryModelScalarFieldEnum>
  }


  /**
   * REPropertySuperCategoryModel without action
   */
  export type REPropertySuperCategoryModelArgs = {
    /**
     * Select specific fields to fetch from the REPropertySuperCategoryModel
     */
    select?: REPropertySuperCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySuperCategoryModelInclude | null
  }



  /**
   * Model REPropertySubCategoryModel
   */


  export type AggregateREPropertySubCategoryModel = {
    _count: REPropertySubCategoryModelCountAggregateOutputType | null
    _min: REPropertySubCategoryModelMinAggregateOutputType | null
    _max: REPropertySubCategoryModelMaxAggregateOutputType | null
  }

  export type REPropertySubCategoryModelMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
    super_category_id: string | null
  }

  export type REPropertySubCategoryModelMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
    deleted_at: Date | null
    name: string | null
    super_category_id: string | null
  }

  export type REPropertySubCategoryModelCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    is_deleted: number
    deleted_at: number
    name: number
    super_category_id: number
    _all: number
  }


  export type REPropertySubCategoryModelMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    super_category_id?: true
  }

  export type REPropertySubCategoryModelMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    super_category_id?: true
  }

  export type REPropertySubCategoryModelCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    deleted_at?: true
    name?: true
    super_category_id?: true
    _all?: true
  }

  export type REPropertySubCategoryModelAggregateArgs = {
    /**
     * Filter which REPropertySubCategoryModel to aggregate.
     */
    where?: REPropertySubCategoryModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REPropertySubCategoryModels to fetch.
     */
    orderBy?: Enumerable<REPropertySubCategoryModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: REPropertySubCategoryModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REPropertySubCategoryModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REPropertySubCategoryModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned REPropertySubCategoryModels
    **/
    _count?: true | REPropertySubCategoryModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: REPropertySubCategoryModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: REPropertySubCategoryModelMaxAggregateInputType
  }

  export type GetREPropertySubCategoryModelAggregateType<T extends REPropertySubCategoryModelAggregateArgs> = {
        [P in keyof T & keyof AggregateREPropertySubCategoryModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateREPropertySubCategoryModel[P]>
      : GetScalarType<T[P], AggregateREPropertySubCategoryModel[P]>
  }




  export type REPropertySubCategoryModelGroupByArgs = {
    where?: REPropertySubCategoryModelWhereInput
    orderBy?: Enumerable<REPropertySubCategoryModelOrderByWithAggregationInput>
    by: REPropertySubCategoryModelScalarFieldEnum[]
    having?: REPropertySubCategoryModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: REPropertySubCategoryModelCountAggregateInputType | true
    _min?: REPropertySubCategoryModelMinAggregateInputType
    _max?: REPropertySubCategoryModelMaxAggregateInputType
  }


  export type REPropertySubCategoryModelGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    deleted_at: Date | null
    name: string
    super_category_id: string
    _count: REPropertySubCategoryModelCountAggregateOutputType | null
    _min: REPropertySubCategoryModelMinAggregateOutputType | null
    _max: REPropertySubCategoryModelMaxAggregateOutputType | null
  }

  type GetREPropertySubCategoryModelGroupByPayload<T extends REPropertySubCategoryModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<REPropertySubCategoryModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof REPropertySubCategoryModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], REPropertySubCategoryModelGroupByOutputType[P]>
            : GetScalarType<T[P], REPropertySubCategoryModelGroupByOutputType[P]>
        }
      >
    >


  export type REPropertySubCategoryModelSelect = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    deleted_at?: boolean
    name?: boolean
    super_category_id?: boolean
    super_category?: boolean | REPropertySuperCategoryModelArgs
    properties?: boolean | REPropertySubCategoryModel$propertiesArgs
    _count?: boolean | REPropertySubCategoryModelCountOutputTypeArgs
  }


  export type REPropertySubCategoryModelInclude = {
    super_category?: boolean | REPropertySuperCategoryModelArgs
    properties?: boolean | REPropertySubCategoryModel$propertiesArgs
    _count?: boolean | REPropertySubCategoryModelCountOutputTypeArgs
  }

  export type REPropertySubCategoryModelGetPayload<S extends boolean | null | undefined | REPropertySubCategoryModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? REPropertySubCategoryModel :
    S extends undefined ? never :
    S extends { include: any } & (REPropertySubCategoryModelArgs | REPropertySubCategoryModelFindManyArgs)
    ? REPropertySubCategoryModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'super_category' ? REPropertySuperCategoryModelGetPayload<S['include'][P]> :
        P extends 'properties' ? Array < REProertyModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? REPropertySubCategoryModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (REPropertySubCategoryModelArgs | REPropertySubCategoryModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'super_category' ? REPropertySuperCategoryModelGetPayload<S['select'][P]> :
        P extends 'properties' ? Array < REProertyModelGetPayload<S['select'][P]>>  :
        P extends '_count' ? REPropertySubCategoryModelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof REPropertySubCategoryModel ? REPropertySubCategoryModel[P] : never
  } 
      : REPropertySubCategoryModel


  type REPropertySubCategoryModelCountArgs = 
    Omit<REPropertySubCategoryModelFindManyArgs, 'select' | 'include'> & {
      select?: REPropertySubCategoryModelCountAggregateInputType | true
    }

  export interface REPropertySubCategoryModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one REPropertySubCategoryModel that matches the filter.
     * @param {REPropertySubCategoryModelFindUniqueArgs} args - Arguments to find a REPropertySubCategoryModel
     * @example
     * // Get one REPropertySubCategoryModel
     * const rEPropertySubCategoryModel = await prisma.rEPropertySubCategoryModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends REPropertySubCategoryModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, REPropertySubCategoryModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'REPropertySubCategoryModel'> extends True ? Prisma__REPropertySubCategoryModelClient<REPropertySubCategoryModelGetPayload<T>> : Prisma__REPropertySubCategoryModelClient<REPropertySubCategoryModelGetPayload<T> | null, null>

    /**
     * Find one REPropertySubCategoryModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {REPropertySubCategoryModelFindUniqueOrThrowArgs} args - Arguments to find a REPropertySubCategoryModel
     * @example
     * // Get one REPropertySubCategoryModel
     * const rEPropertySubCategoryModel = await prisma.rEPropertySubCategoryModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends REPropertySubCategoryModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, REPropertySubCategoryModelFindUniqueOrThrowArgs>
    ): Prisma__REPropertySubCategoryModelClient<REPropertySubCategoryModelGetPayload<T>>

    /**
     * Find the first REPropertySubCategoryModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPropertySubCategoryModelFindFirstArgs} args - Arguments to find a REPropertySubCategoryModel
     * @example
     * // Get one REPropertySubCategoryModel
     * const rEPropertySubCategoryModel = await prisma.rEPropertySubCategoryModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends REPropertySubCategoryModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, REPropertySubCategoryModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'REPropertySubCategoryModel'> extends True ? Prisma__REPropertySubCategoryModelClient<REPropertySubCategoryModelGetPayload<T>> : Prisma__REPropertySubCategoryModelClient<REPropertySubCategoryModelGetPayload<T> | null, null>

    /**
     * Find the first REPropertySubCategoryModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPropertySubCategoryModelFindFirstOrThrowArgs} args - Arguments to find a REPropertySubCategoryModel
     * @example
     * // Get one REPropertySubCategoryModel
     * const rEPropertySubCategoryModel = await prisma.rEPropertySubCategoryModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends REPropertySubCategoryModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, REPropertySubCategoryModelFindFirstOrThrowArgs>
    ): Prisma__REPropertySubCategoryModelClient<REPropertySubCategoryModelGetPayload<T>>

    /**
     * Find zero or more REPropertySubCategoryModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPropertySubCategoryModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all REPropertySubCategoryModels
     * const rEPropertySubCategoryModels = await prisma.rEPropertySubCategoryModel.findMany()
     * 
     * // Get first 10 REPropertySubCategoryModels
     * const rEPropertySubCategoryModels = await prisma.rEPropertySubCategoryModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rEPropertySubCategoryModelWithIdOnly = await prisma.rEPropertySubCategoryModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends REPropertySubCategoryModelFindManyArgs>(
      args?: SelectSubset<T, REPropertySubCategoryModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<REPropertySubCategoryModelGetPayload<T>>>

    /**
     * Create a REPropertySubCategoryModel.
     * @param {REPropertySubCategoryModelCreateArgs} args - Arguments to create a REPropertySubCategoryModel.
     * @example
     * // Create one REPropertySubCategoryModel
     * const REPropertySubCategoryModel = await prisma.rEPropertySubCategoryModel.create({
     *   data: {
     *     // ... data to create a REPropertySubCategoryModel
     *   }
     * })
     * 
    **/
    create<T extends REPropertySubCategoryModelCreateArgs>(
      args: SelectSubset<T, REPropertySubCategoryModelCreateArgs>
    ): Prisma__REPropertySubCategoryModelClient<REPropertySubCategoryModelGetPayload<T>>

    /**
     * Create many REPropertySubCategoryModels.
     *     @param {REPropertySubCategoryModelCreateManyArgs} args - Arguments to create many REPropertySubCategoryModels.
     *     @example
     *     // Create many REPropertySubCategoryModels
     *     const rEPropertySubCategoryModel = await prisma.rEPropertySubCategoryModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends REPropertySubCategoryModelCreateManyArgs>(
      args?: SelectSubset<T, REPropertySubCategoryModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a REPropertySubCategoryModel.
     * @param {REPropertySubCategoryModelDeleteArgs} args - Arguments to delete one REPropertySubCategoryModel.
     * @example
     * // Delete one REPropertySubCategoryModel
     * const REPropertySubCategoryModel = await prisma.rEPropertySubCategoryModel.delete({
     *   where: {
     *     // ... filter to delete one REPropertySubCategoryModel
     *   }
     * })
     * 
    **/
    delete<T extends REPropertySubCategoryModelDeleteArgs>(
      args: SelectSubset<T, REPropertySubCategoryModelDeleteArgs>
    ): Prisma__REPropertySubCategoryModelClient<REPropertySubCategoryModelGetPayload<T>>

    /**
     * Update one REPropertySubCategoryModel.
     * @param {REPropertySubCategoryModelUpdateArgs} args - Arguments to update one REPropertySubCategoryModel.
     * @example
     * // Update one REPropertySubCategoryModel
     * const rEPropertySubCategoryModel = await prisma.rEPropertySubCategoryModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends REPropertySubCategoryModelUpdateArgs>(
      args: SelectSubset<T, REPropertySubCategoryModelUpdateArgs>
    ): Prisma__REPropertySubCategoryModelClient<REPropertySubCategoryModelGetPayload<T>>

    /**
     * Delete zero or more REPropertySubCategoryModels.
     * @param {REPropertySubCategoryModelDeleteManyArgs} args - Arguments to filter REPropertySubCategoryModels to delete.
     * @example
     * // Delete a few REPropertySubCategoryModels
     * const { count } = await prisma.rEPropertySubCategoryModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends REPropertySubCategoryModelDeleteManyArgs>(
      args?: SelectSubset<T, REPropertySubCategoryModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more REPropertySubCategoryModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPropertySubCategoryModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many REPropertySubCategoryModels
     * const rEPropertySubCategoryModel = await prisma.rEPropertySubCategoryModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends REPropertySubCategoryModelUpdateManyArgs>(
      args: SelectSubset<T, REPropertySubCategoryModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one REPropertySubCategoryModel.
     * @param {REPropertySubCategoryModelUpsertArgs} args - Arguments to update or create a REPropertySubCategoryModel.
     * @example
     * // Update or create a REPropertySubCategoryModel
     * const rEPropertySubCategoryModel = await prisma.rEPropertySubCategoryModel.upsert({
     *   create: {
     *     // ... data to create a REPropertySubCategoryModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the REPropertySubCategoryModel we want to update
     *   }
     * })
    **/
    upsert<T extends REPropertySubCategoryModelUpsertArgs>(
      args: SelectSubset<T, REPropertySubCategoryModelUpsertArgs>
    ): Prisma__REPropertySubCategoryModelClient<REPropertySubCategoryModelGetPayload<T>>

    /**
     * Count the number of REPropertySubCategoryModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPropertySubCategoryModelCountArgs} args - Arguments to filter REPropertySubCategoryModels to count.
     * @example
     * // Count the number of REPropertySubCategoryModels
     * const count = await prisma.rEPropertySubCategoryModel.count({
     *   where: {
     *     // ... the filter for the REPropertySubCategoryModels we want to count
     *   }
     * })
    **/
    count<T extends REPropertySubCategoryModelCountArgs>(
      args?: Subset<T, REPropertySubCategoryModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], REPropertySubCategoryModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a REPropertySubCategoryModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPropertySubCategoryModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends REPropertySubCategoryModelAggregateArgs>(args: Subset<T, REPropertySubCategoryModelAggregateArgs>): Prisma.PrismaPromise<GetREPropertySubCategoryModelAggregateType<T>>

    /**
     * Group by REPropertySubCategoryModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REPropertySubCategoryModelGroupByArgs} args - Group by arguments.
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
      T extends REPropertySubCategoryModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: REPropertySubCategoryModelGroupByArgs['orderBy'] }
        : { orderBy?: REPropertySubCategoryModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, REPropertySubCategoryModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetREPropertySubCategoryModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for REPropertySubCategoryModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__REPropertySubCategoryModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    super_category<T extends REPropertySuperCategoryModelArgs= {}>(args?: Subset<T, REPropertySuperCategoryModelArgs>): Prisma__REPropertySuperCategoryModelClient<REPropertySuperCategoryModelGetPayload<T> | Null>;

    properties<T extends REPropertySubCategoryModel$propertiesArgs= {}>(args?: Subset<T, REPropertySubCategoryModel$propertiesArgs>): Prisma.PrismaPromise<Array<REProertyModelGetPayload<T>>| Null>;

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
   * REPropertySubCategoryModel base type for findUnique actions
   */
  export type REPropertySubCategoryModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the REPropertySubCategoryModel
     */
    select?: REPropertySubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySubCategoryModelInclude | null
    /**
     * Filter, which REPropertySubCategoryModel to fetch.
     */
    where: REPropertySubCategoryModelWhereUniqueInput
  }

  /**
   * REPropertySubCategoryModel findUnique
   */
  export interface REPropertySubCategoryModelFindUniqueArgs extends REPropertySubCategoryModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * REPropertySubCategoryModel findUniqueOrThrow
   */
  export type REPropertySubCategoryModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the REPropertySubCategoryModel
     */
    select?: REPropertySubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySubCategoryModelInclude | null
    /**
     * Filter, which REPropertySubCategoryModel to fetch.
     */
    where: REPropertySubCategoryModelWhereUniqueInput
  }


  /**
   * REPropertySubCategoryModel base type for findFirst actions
   */
  export type REPropertySubCategoryModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the REPropertySubCategoryModel
     */
    select?: REPropertySubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySubCategoryModelInclude | null
    /**
     * Filter, which REPropertySubCategoryModel to fetch.
     */
    where?: REPropertySubCategoryModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REPropertySubCategoryModels to fetch.
     */
    orderBy?: Enumerable<REPropertySubCategoryModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REPropertySubCategoryModels.
     */
    cursor?: REPropertySubCategoryModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REPropertySubCategoryModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REPropertySubCategoryModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REPropertySubCategoryModels.
     */
    distinct?: Enumerable<REPropertySubCategoryModelScalarFieldEnum>
  }

  /**
   * REPropertySubCategoryModel findFirst
   */
  export interface REPropertySubCategoryModelFindFirstArgs extends REPropertySubCategoryModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * REPropertySubCategoryModel findFirstOrThrow
   */
  export type REPropertySubCategoryModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the REPropertySubCategoryModel
     */
    select?: REPropertySubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySubCategoryModelInclude | null
    /**
     * Filter, which REPropertySubCategoryModel to fetch.
     */
    where?: REPropertySubCategoryModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REPropertySubCategoryModels to fetch.
     */
    orderBy?: Enumerable<REPropertySubCategoryModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REPropertySubCategoryModels.
     */
    cursor?: REPropertySubCategoryModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REPropertySubCategoryModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REPropertySubCategoryModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REPropertySubCategoryModels.
     */
    distinct?: Enumerable<REPropertySubCategoryModelScalarFieldEnum>
  }


  /**
   * REPropertySubCategoryModel findMany
   */
  export type REPropertySubCategoryModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the REPropertySubCategoryModel
     */
    select?: REPropertySubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySubCategoryModelInclude | null
    /**
     * Filter, which REPropertySubCategoryModels to fetch.
     */
    where?: REPropertySubCategoryModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REPropertySubCategoryModels to fetch.
     */
    orderBy?: Enumerable<REPropertySubCategoryModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing REPropertySubCategoryModels.
     */
    cursor?: REPropertySubCategoryModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REPropertySubCategoryModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REPropertySubCategoryModels.
     */
    skip?: number
    distinct?: Enumerable<REPropertySubCategoryModelScalarFieldEnum>
  }


  /**
   * REPropertySubCategoryModel create
   */
  export type REPropertySubCategoryModelCreateArgs = {
    /**
     * Select specific fields to fetch from the REPropertySubCategoryModel
     */
    select?: REPropertySubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySubCategoryModelInclude | null
    /**
     * The data needed to create a REPropertySubCategoryModel.
     */
    data: XOR<REPropertySubCategoryModelCreateInput, REPropertySubCategoryModelUncheckedCreateInput>
  }


  /**
   * REPropertySubCategoryModel createMany
   */
  export type REPropertySubCategoryModelCreateManyArgs = {
    /**
     * The data used to create many REPropertySubCategoryModels.
     */
    data: Enumerable<REPropertySubCategoryModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * REPropertySubCategoryModel update
   */
  export type REPropertySubCategoryModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the REPropertySubCategoryModel
     */
    select?: REPropertySubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySubCategoryModelInclude | null
    /**
     * The data needed to update a REPropertySubCategoryModel.
     */
    data: XOR<REPropertySubCategoryModelUpdateInput, REPropertySubCategoryModelUncheckedUpdateInput>
    /**
     * Choose, which REPropertySubCategoryModel to update.
     */
    where: REPropertySubCategoryModelWhereUniqueInput
  }


  /**
   * REPropertySubCategoryModel updateMany
   */
  export type REPropertySubCategoryModelUpdateManyArgs = {
    /**
     * The data used to update REPropertySubCategoryModels.
     */
    data: XOR<REPropertySubCategoryModelUpdateManyMutationInput, REPropertySubCategoryModelUncheckedUpdateManyInput>
    /**
     * Filter which REPropertySubCategoryModels to update
     */
    where?: REPropertySubCategoryModelWhereInput
  }


  /**
   * REPropertySubCategoryModel upsert
   */
  export type REPropertySubCategoryModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the REPropertySubCategoryModel
     */
    select?: REPropertySubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySubCategoryModelInclude | null
    /**
     * The filter to search for the REPropertySubCategoryModel to update in case it exists.
     */
    where: REPropertySubCategoryModelWhereUniqueInput
    /**
     * In case the REPropertySubCategoryModel found by the `where` argument doesn't exist, create a new REPropertySubCategoryModel with this data.
     */
    create: XOR<REPropertySubCategoryModelCreateInput, REPropertySubCategoryModelUncheckedCreateInput>
    /**
     * In case the REPropertySubCategoryModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<REPropertySubCategoryModelUpdateInput, REPropertySubCategoryModelUncheckedUpdateInput>
  }


  /**
   * REPropertySubCategoryModel delete
   */
  export type REPropertySubCategoryModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the REPropertySubCategoryModel
     */
    select?: REPropertySubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySubCategoryModelInclude | null
    /**
     * Filter which REPropertySubCategoryModel to delete.
     */
    where: REPropertySubCategoryModelWhereUniqueInput
  }


  /**
   * REPropertySubCategoryModel deleteMany
   */
  export type REPropertySubCategoryModelDeleteManyArgs = {
    /**
     * Filter which REPropertySubCategoryModels to delete
     */
    where?: REPropertySubCategoryModelWhereInput
  }


  /**
   * REPropertySubCategoryModel.properties
   */
  export type REPropertySubCategoryModel$propertiesArgs = {
    /**
     * Select specific fields to fetch from the REProertyModel
     */
    select?: REProertyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REProertyModelInclude | null
    where?: REProertyModelWhereInput
    orderBy?: Enumerable<REProertyModelOrderByWithRelationInput>
    cursor?: REProertyModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<REProertyModelScalarFieldEnum>
  }


  /**
   * REPropertySubCategoryModel without action
   */
  export type REPropertySubCategoryModelArgs = {
    /**
     * Select specific fields to fetch from the REPropertySubCategoryModel
     */
    select?: REPropertySubCategoryModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: REPropertySubCategoryModelInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AgreementAcceptanceModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    user_id: 'user_id',
    agreement_id: 'agreement_id'
  };

  export type AgreementAcceptanceModelScalarFieldEnum = (typeof AgreementAcceptanceModelScalarFieldEnum)[keyof typeof AgreementAcceptanceModelScalarFieldEnum]


  export const AgreementModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    title: 'title',
    content: 'content',
    user_type: 'user_type'
  };

  export type AgreementModelScalarFieldEnum = (typeof AgreementModelScalarFieldEnum)[keyof typeof AgreementModelScalarFieldEnum]


  export const BusinessCertificationImageModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    business_user_id: 'business_user_id',
    url: 'url'
  };

  export type BusinessCertificationImageModelScalarFieldEnum = (typeof BusinessCertificationImageModelScalarFieldEnum)[keyof typeof BusinessCertificationImageModelScalarFieldEnum]


  export const BusinessUserModelScalarFieldEnum: {
    id: 'id',
    is_verified: 'is_verified',
    introduction_title: 'introduction_title',
    introduction_content: 'introduction_content',
    phone: 'phone',
    address_first: 'address_first',
    address_second: 'address_second',
    profile_image_url: 'profile_image_url',
    super_expertise_id: 'super_expertise_id'
  };

  export type BusinessUserModelScalarFieldEnum = (typeof BusinessUserModelScalarFieldEnum)[keyof typeof BusinessUserModelScalarFieldEnum]


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
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    name: 'name',
    super_id: 'super_id'
  };

  export type ExpertSubCategoryModelScalarFieldEnum = (typeof ExpertSubCategoryModelScalarFieldEnum)[keyof typeof ExpertSubCategoryModelScalarFieldEnum]


  export const ExpertSuperCategoryModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    name: 'name',
    business_type: 'business_type'
  };

  export type ExpertSuperCategoryModelScalarFieldEnum = (typeof ExpertSuperCategoryModelScalarFieldEnum)[keyof typeof ExpertSuperCategoryModelScalarFieldEnum]


  export const HSIntroductionImageModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    hs_provider_id: 'hs_provider_id',
    url: 'url'
  };

  export type HSIntroductionImageModelScalarFieldEnum = (typeof HSIntroductionImageModelScalarFieldEnum)[keyof typeof HSIntroductionImageModelScalarFieldEnum]


  export const HSProviderModelScalarFieldEnum: {
    id: 'id',
    business_registration_num: 'business_registration_num'
  };

  export type HSProviderModelScalarFieldEnum = (typeof HSProviderModelScalarFieldEnum)[keyof typeof HSProviderModelScalarFieldEnum]


  export const OauthAccessorModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
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


  export const REProertyModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    name: 'name',
    main_image_url: 'main_image_url',
    agent_id: 'agent_id',
    sub_category_id: 'sub_category_id'
  };

  export type REProertyModelScalarFieldEnum = (typeof REProertyModelScalarFieldEnum)[keyof typeof REProertyModelScalarFieldEnum]


  export const REPropertySubCategoryModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    name: 'name',
    super_category_id: 'super_category_id'
  };

  export type REPropertySubCategoryModelScalarFieldEnum = (typeof REPropertySubCategoryModelScalarFieldEnum)[keyof typeof REPropertySubCategoryModelScalarFieldEnum]


  export const REPropertySuperCategoryModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    name: 'name'
  };

  export type REPropertySuperCategoryModelScalarFieldEnum = (typeof REPropertySuperCategoryModelScalarFieldEnum)[keyof typeof REPropertySuperCategoryModelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const SubExpertiseModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
    sub_category_id: 'sub_category_id',
    business_user_id: 'business_user_id'
  };

  export type SubExpertiseModelScalarFieldEnum = (typeof SubExpertiseModelScalarFieldEnum)[keyof typeof SubExpertiseModelScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserModelScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted',
    deleted_at: 'deleted_at',
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
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    oauth_type?: EnumOauthTypeFilter | OauthType
    oauth_sub?: StringFilter | string
    business_user_id?: StringNullableFilter | string | null
    customer_id?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    phone?: StringNullableFilter | string | null
    profile_image_url?: StringNullableFilter | string | null
    birth?: StringNullableFilter | string | null
    gender?: EnumGenderTypeNullableFilter | GenderType | null
    address_first?: StringNullableFilter | string | null
    address_second?: StringNullableFilter | string | null
    business_user?: XOR<BusinessUserModelRelationFilter, BusinessUserModelWhereInput> | null
    customer?: XOR<CustomerModelRelationFilter, CustomerModelWhereInput> | null
  }

  export type OauthAccessorModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
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
    business_user?: BusinessUserModelOrderByWithRelationInput
    customer?: CustomerModelOrderByWithRelationInput
  }

  export type OauthAccessorModelWhereUniqueInput = {
    id?: string
  }

  export type OauthAccessorModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
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
    id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    oauth_type?: EnumOauthTypeWithAggregatesFilter | OauthType
    oauth_sub?: StringWithAggregatesFilter | string
    business_user_id?: StringNullableWithAggregatesFilter | string | null
    customer_id?: StringNullableWithAggregatesFilter | string | null
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
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    name?: StringFilter | string
    email?: StringNullableFilter | string | null
    customer?: XOR<CustomerModelRelationFilter, CustomerModelWhereInput> | null
    business_user?: XOR<BusinessUserModelRelationFilter, BusinessUserModelWhereInput> | null
    agreement_acceptances?: AgreementAcceptanceModelListRelationFilter
  }

  export type UserModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    email?: SortOrder
    customer?: CustomerModelOrderByWithRelationInput
    business_user?: BusinessUserModelOrderByWithRelationInput
    agreement_acceptances?: AgreementAcceptanceModelOrderByRelationAggregateInput
  }

  export type UserModelWhereUniqueInput = {
    id?: string
  }

  export type UserModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
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
    id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
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

  export type BusinessUserModelWhereInput = {
    AND?: Enumerable<BusinessUserModelWhereInput>
    OR?: Enumerable<BusinessUserModelWhereInput>
    NOT?: Enumerable<BusinessUserModelWhereInput>
    id?: StringFilter | string
    is_verified?: BoolFilter | boolean
    introduction_title?: StringFilter | string
    introduction_content?: StringFilter | string
    phone?: StringFilter | string
    address_first?: StringFilter | string
    address_second?: StringNullableFilter | string | null
    profile_image_url?: StringFilter | string
    super_expertise_id?: StringFilter | string
    base?: XOR<UserModelRelationFilter, UserModelWhereInput>
    re_agent?: XOR<REAgentModelRelationFilter, REAgentModelWhereInput> | null
    hs_provider?: XOR<HSProviderModelRelationFilter, HSProviderModelWhereInput> | null
    certifications?: BusinessCertificationImageModelListRelationFilter
    super_expertise?: XOR<ExpertSuperCategoryModelRelationFilter, ExpertSuperCategoryModelWhereInput>
    sub_expertises?: SubExpertiseModelListRelationFilter
    oauth_accessor?: OauthAccessorModelListRelationFilter
  }

  export type BusinessUserModelOrderByWithRelationInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image_url?: SortOrder
    super_expertise_id?: SortOrder
    base?: UserModelOrderByWithRelationInput
    re_agent?: REAgentModelOrderByWithRelationInput
    hs_provider?: HSProviderModelOrderByWithRelationInput
    certifications?: BusinessCertificationImageModelOrderByRelationAggregateInput
    super_expertise?: ExpertSuperCategoryModelOrderByWithRelationInput
    sub_expertises?: SubExpertiseModelOrderByRelationAggregateInput
    oauth_accessor?: OauthAccessorModelOrderByRelationAggregateInput
  }

  export type BusinessUserModelWhereUniqueInput = {
    id?: string
  }

  export type BusinessUserModelOrderByWithAggregationInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image_url?: SortOrder
    super_expertise_id?: SortOrder
    _count?: BusinessUserModelCountOrderByAggregateInput
    _max?: BusinessUserModelMaxOrderByAggregateInput
    _min?: BusinessUserModelMinOrderByAggregateInput
  }

  export type BusinessUserModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BusinessUserModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<BusinessUserModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BusinessUserModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    is_verified?: BoolWithAggregatesFilter | boolean
    introduction_title?: StringWithAggregatesFilter | string
    introduction_content?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    address_first?: StringWithAggregatesFilter | string
    address_second?: StringNullableWithAggregatesFilter | string | null
    profile_image_url?: StringWithAggregatesFilter | string
    super_expertise_id?: StringWithAggregatesFilter | string
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
    base?: XOR<BusinessUserModelRelationFilter, BusinessUserModelWhereInput>
    properties?: REProertyModelListRelationFilter
  }

  export type REAgentModelOrderByWithRelationInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    re_num?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
    base?: BusinessUserModelOrderByWithRelationInput
    properties?: REProertyModelOrderByRelationAggregateInput
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
    base?: XOR<BusinessUserModelRelationFilter, BusinessUserModelWhereInput>
    introduction_images?: HSIntroductionImageModelListRelationFilter
  }

  export type HSProviderModelOrderByWithRelationInput = {
    id?: SortOrder
    business_registration_num?: SortOrder
    base?: BusinessUserModelOrderByWithRelationInput
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

  export type BusinessCertificationImageModelWhereInput = {
    AND?: Enumerable<BusinessCertificationImageModelWhereInput>
    OR?: Enumerable<BusinessCertificationImageModelWhereInput>
    NOT?: Enumerable<BusinessCertificationImageModelWhereInput>
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    business_user_id?: StringFilter | string
    url?: StringFilter | string
    business_user?: XOR<BusinessUserModelRelationFilter, BusinessUserModelWhereInput>
  }

  export type BusinessCertificationImageModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    business_user_id?: SortOrder
    url?: SortOrder
    business_user?: BusinessUserModelOrderByWithRelationInput
  }

  export type BusinessCertificationImageModelWhereUniqueInput = {
    id?: string
  }

  export type BusinessCertificationImageModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    business_user_id?: SortOrder
    url?: SortOrder
    _count?: BusinessCertificationImageModelCountOrderByAggregateInput
    _max?: BusinessCertificationImageModelMaxOrderByAggregateInput
    _min?: BusinessCertificationImageModelMinOrderByAggregateInput
  }

  export type BusinessCertificationImageModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BusinessCertificationImageModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<BusinessCertificationImageModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BusinessCertificationImageModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    business_user_id?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
  }

  export type HSIntroductionImageModelWhereInput = {
    AND?: Enumerable<HSIntroductionImageModelWhereInput>
    OR?: Enumerable<HSIntroductionImageModelWhereInput>
    NOT?: Enumerable<HSIntroductionImageModelWhereInput>
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    hs_provider_id?: StringFilter | string
    url?: StringFilter | string
    hs_provider?: XOR<HSProviderModelRelationFilter, HSProviderModelWhereInput>
  }

  export type HSIntroductionImageModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    hs_provider_id?: SortOrder
    url?: SortOrder
    hs_provider?: HSProviderModelOrderByWithRelationInput
  }

  export type HSIntroductionImageModelWhereUniqueInput = {
    id?: string
  }

  export type HSIntroductionImageModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    hs_provider_id?: SortOrder
    url?: SortOrder
    _count?: HSIntroductionImageModelCountOrderByAggregateInput
    _max?: HSIntroductionImageModelMaxOrderByAggregateInput
    _min?: HSIntroductionImageModelMinOrderByAggregateInput
  }

  export type HSIntroductionImageModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HSIntroductionImageModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<HSIntroductionImageModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HSIntroductionImageModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    hs_provider_id?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
  }

  export type SubExpertiseModelWhereInput = {
    AND?: Enumerable<SubExpertiseModelWhereInput>
    OR?: Enumerable<SubExpertiseModelWhereInput>
    NOT?: Enumerable<SubExpertiseModelWhereInput>
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    sub_category_id?: StringFilter | string
    business_user_id?: StringFilter | string
    category?: XOR<ExpertSubCategoryModelRelationFilter, ExpertSubCategoryModelWhereInput>
    business_user?: XOR<BusinessUserModelRelationFilter, BusinessUserModelWhereInput>
  }

  export type SubExpertiseModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    sub_category_id?: SortOrder
    business_user_id?: SortOrder
    category?: ExpertSubCategoryModelOrderByWithRelationInput
    business_user?: BusinessUserModelOrderByWithRelationInput
  }

  export type SubExpertiseModelWhereUniqueInput = {
    id?: string
    sub_category_id_business_user_id?: SubExpertiseModelSub_category_idBusiness_user_idCompoundUniqueInput
  }

  export type SubExpertiseModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    sub_category_id?: SortOrder
    business_user_id?: SortOrder
    _count?: SubExpertiseModelCountOrderByAggregateInput
    _max?: SubExpertiseModelMaxOrderByAggregateInput
    _min?: SubExpertiseModelMinOrderByAggregateInput
  }

  export type SubExpertiseModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SubExpertiseModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<SubExpertiseModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SubExpertiseModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    sub_category_id?: StringWithAggregatesFilter | string
    business_user_id?: StringWithAggregatesFilter | string
  }

  export type ExpertSubCategoryModelWhereInput = {
    AND?: Enumerable<ExpertSubCategoryModelWhereInput>
    OR?: Enumerable<ExpertSubCategoryModelWhereInput>
    NOT?: Enumerable<ExpertSubCategoryModelWhereInput>
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    name?: StringFilter | string
    super_id?: StringFilter | string
    super?: XOR<ExpertSuperCategoryModelRelationFilter, ExpertSuperCategoryModelWhereInput>
    expertises?: SubExpertiseModelListRelationFilter
  }

  export type ExpertSubCategoryModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
    super?: ExpertSuperCategoryModelOrderByWithRelationInput
    expertises?: SubExpertiseModelOrderByRelationAggregateInput
  }

  export type ExpertSubCategoryModelWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type ExpertSubCategoryModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
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
    id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    name?: StringWithAggregatesFilter | string
    super_id?: StringWithAggregatesFilter | string
  }

  export type ExpertSuperCategoryModelWhereInput = {
    AND?: Enumerable<ExpertSuperCategoryModelWhereInput>
    OR?: Enumerable<ExpertSuperCategoryModelWhereInput>
    NOT?: Enumerable<ExpertSuperCategoryModelWhereInput>
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    name?: StringFilter | string
    business_type?: EnumExpertBusinessTypeFilter | ExpertBusinessType
    subs?: ExpertSubCategoryModelListRelationFilter
    business_users?: BusinessUserModelListRelationFilter
  }

  export type ExpertSuperCategoryModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    business_type?: SortOrder
    subs?: ExpertSubCategoryModelOrderByRelationAggregateInput
    business_users?: BusinessUserModelOrderByRelationAggregateInput
  }

  export type ExpertSuperCategoryModelWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type ExpertSuperCategoryModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
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
    id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    name?: StringWithAggregatesFilter | string
    business_type?: EnumExpertBusinessTypeWithAggregatesFilter | ExpertBusinessType
  }

  export type AgreementModelWhereInput = {
    AND?: Enumerable<AgreementModelWhereInput>
    OR?: Enumerable<AgreementModelWhereInput>
    NOT?: Enumerable<AgreementModelWhereInput>
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    title?: StringFilter | string
    content?: StringFilter | string
    user_type?: EnumAgreementUserTypeFilter | AgreementUserType
    acceptances?: AgreementAcceptanceModelListRelationFilter
  }

  export type AgreementModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_type?: SortOrder
    acceptances?: AgreementAcceptanceModelOrderByRelationAggregateInput
  }

  export type AgreementModelWhereUniqueInput = {
    id?: string
  }

  export type AgreementModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
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
    id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    title?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    user_type?: EnumAgreementUserTypeWithAggregatesFilter | AgreementUserType
  }

  export type AgreementAcceptanceModelWhereInput = {
    AND?: Enumerable<AgreementAcceptanceModelWhereInput>
    OR?: Enumerable<AgreementAcceptanceModelWhereInput>
    NOT?: Enumerable<AgreementAcceptanceModelWhereInput>
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    user_id?: StringFilter | string
    agreement_id?: StringFilter | string
    user?: XOR<UserModelRelationFilter, UserModelWhereInput>
    agreement?: XOR<AgreementModelRelationFilter, AgreementModelWhereInput>
  }

  export type AgreementAcceptanceModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    user_id?: SortOrder
    agreement_id?: SortOrder
    user?: UserModelOrderByWithRelationInput
    agreement?: AgreementModelOrderByWithRelationInput
  }

  export type AgreementAcceptanceModelWhereUniqueInput = {
    id?: string
    user_id_agreement_id?: AgreementAcceptanceModelUser_idAgreement_idCompoundUniqueInput
  }

  export type AgreementAcceptanceModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
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
    id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    user_id?: StringWithAggregatesFilter | string
    agreement_id?: StringWithAggregatesFilter | string
  }

  export type REProertyModelWhereInput = {
    AND?: Enumerable<REProertyModelWhereInput>
    OR?: Enumerable<REProertyModelWhereInput>
    NOT?: Enumerable<REProertyModelWhereInput>
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    name?: StringFilter | string
    main_image_url?: StringFilter | string
    agent_id?: StringFilter | string
    sub_category_id?: StringFilter | string
    agent?: XOR<REAgentModelRelationFilter, REAgentModelWhereInput>
    sub_category?: XOR<REPropertySubCategoryModelRelationFilter, REPropertySubCategoryModelWhereInput>
  }

  export type REProertyModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    main_image_url?: SortOrder
    agent_id?: SortOrder
    sub_category_id?: SortOrder
    agent?: REAgentModelOrderByWithRelationInput
    sub_category?: REPropertySubCategoryModelOrderByWithRelationInput
  }

  export type REProertyModelWhereUniqueInput = {
    id?: string
  }

  export type REProertyModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    main_image_url?: SortOrder
    agent_id?: SortOrder
    sub_category_id?: SortOrder
    _count?: REProertyModelCountOrderByAggregateInput
    _max?: REProertyModelMaxOrderByAggregateInput
    _min?: REProertyModelMinOrderByAggregateInput
  }

  export type REProertyModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<REProertyModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<REProertyModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<REProertyModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    name?: StringWithAggregatesFilter | string
    main_image_url?: StringWithAggregatesFilter | string
    agent_id?: StringWithAggregatesFilter | string
    sub_category_id?: StringWithAggregatesFilter | string
  }

  export type REPropertySuperCategoryModelWhereInput = {
    AND?: Enumerable<REPropertySuperCategoryModelWhereInput>
    OR?: Enumerable<REPropertySuperCategoryModelWhereInput>
    NOT?: Enumerable<REPropertySuperCategoryModelWhereInput>
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    name?: StringFilter | string
    sub_categories?: REPropertySubCategoryModelListRelationFilter
  }

  export type REPropertySuperCategoryModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    sub_categories?: REPropertySubCategoryModelOrderByRelationAggregateInput
  }

  export type REPropertySuperCategoryModelWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type REPropertySuperCategoryModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    _count?: REPropertySuperCategoryModelCountOrderByAggregateInput
    _max?: REPropertySuperCategoryModelMaxOrderByAggregateInput
    _min?: REPropertySuperCategoryModelMinOrderByAggregateInput
  }

  export type REPropertySuperCategoryModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<REPropertySuperCategoryModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<REPropertySuperCategoryModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<REPropertySuperCategoryModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    name?: StringWithAggregatesFilter | string
  }

  export type REPropertySubCategoryModelWhereInput = {
    AND?: Enumerable<REPropertySubCategoryModelWhereInput>
    OR?: Enumerable<REPropertySubCategoryModelWhereInput>
    NOT?: Enumerable<REPropertySubCategoryModelWhereInput>
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    name?: StringFilter | string
    super_category_id?: StringFilter | string
    super_category?: XOR<REPropertySuperCategoryModelRelationFilter, REPropertySuperCategoryModelWhereInput>
    properties?: REProertyModelListRelationFilter
  }

  export type REPropertySubCategoryModelOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    super_category_id?: SortOrder
    super_category?: REPropertySuperCategoryModelOrderByWithRelationInput
    properties?: REProertyModelOrderByRelationAggregateInput
  }

  export type REPropertySubCategoryModelWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type REPropertySubCategoryModelOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    super_category_id?: SortOrder
    _count?: REPropertySubCategoryModelCountOrderByAggregateInput
    _max?: REPropertySubCategoryModelMaxOrderByAggregateInput
    _min?: REPropertySubCategoryModelMinOrderByAggregateInput
  }

  export type REPropertySubCategoryModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<REPropertySubCategoryModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<REPropertySubCategoryModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<REPropertySubCategoryModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    is_deleted?: BoolWithAggregatesFilter | boolean
    deleted_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    name?: StringWithAggregatesFilter | string
    super_category_id?: StringWithAggregatesFilter | string
  }

  export type OauthAccessorModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
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
    business_user?: BusinessUserModelCreateNestedOneWithoutOauth_accessorInput
    customer?: CustomerModelCreateNestedOneWithoutOauth_accessorInput
  }

  export type OauthAccessorModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    oauth_type: OauthType
    oauth_sub: string
    business_user_id?: string | null
    customer_id?: string | null
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
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    business_user?: BusinessUserModelUpdateOneWithoutOauth_accessorNestedInput
    customer?: CustomerModelUpdateOneWithoutOauth_accessorNestedInput
  }

  export type OauthAccessorModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    business_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
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
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    oauth_type: OauthType
    oauth_sub: string
    business_user_id?: string | null
    customer_id?: string | null
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
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    business_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
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
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    email?: string | null
    customer?: CustomerModelCreateNestedOneWithoutBaseInput
    business_user?: BusinessUserModelCreateNestedOneWithoutBaseInput
    agreement_acceptances?: AgreementAcceptanceModelCreateNestedManyWithoutUserInput
  }

  export type UserModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    email?: string | null
    customer?: CustomerModelUncheckedCreateNestedOneWithoutBaseInput
    business_user?: BusinessUserModelUncheckedCreateNestedOneWithoutBaseInput
    agreement_acceptances?: AgreementAcceptanceModelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerModelUpdateOneWithoutBaseNestedInput
    business_user?: BusinessUserModelUpdateOneWithoutBaseNestedInput
    agreement_acceptances?: AgreementAcceptanceModelUpdateManyWithoutUserNestedInput
  }

  export type UserModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerModelUncheckedUpdateOneWithoutBaseNestedInput
    business_user?: BusinessUserModelUncheckedUpdateOneWithoutBaseNestedInput
    agreement_acceptances?: AgreementAcceptanceModelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    email?: string | null
  }

  export type UserModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type BusinessUserModelCreateInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBusiness_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationImageModelCreateNestedManyWithoutBusiness_userInput
    super_expertise: ExpertSuperCategoryModelCreateNestedOneWithoutBusiness_usersInput
    sub_expertises?: SubExpertiseModelCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelUncheckedCreateInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
    super_expertise_id: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationImageModelUncheckedCreateNestedManyWithoutBusiness_userInput
    sub_expertises?: SubExpertiseModelUncheckedCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelUpdateInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBusiness_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationImageModelUpdateManyWithoutBusiness_userNestedInput
    super_expertise?: ExpertSuperCategoryModelUpdateOneRequiredWithoutBusiness_usersNestedInput
    sub_expertises?: SubExpertiseModelUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
    super_expertise_id?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationImageModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    sub_expertises?: SubExpertiseModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUncheckedUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserModelCreateManyInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
    super_expertise_id: string
  }

  export type BusinessUserModelUpdateManyMutationInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessUserModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
    super_expertise_id?: StringFieldUpdateOperationsInput | string
  }

  export type REAgentModelCreateInput = {
    is_licensed: boolean
    re_num: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    base: BusinessUserModelCreateNestedOneWithoutRe_agentInput
    properties?: REProertyModelCreateNestedManyWithoutAgentInput
  }

  export type REAgentModelUncheckedCreateInput = {
    id: string
    is_licensed: boolean
    re_num: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    properties?: REProertyModelUncheckedCreateNestedManyWithoutAgentInput
  }

  export type REAgentModelUpdateInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_num?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    base?: BusinessUserModelUpdateOneRequiredWithoutRe_agentNestedInput
    properties?: REProertyModelUpdateManyWithoutAgentNestedInput
  }

  export type REAgentModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_num?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    properties?: REProertyModelUncheckedUpdateManyWithoutAgentNestedInput
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
    base: BusinessUserModelCreateNestedOneWithoutHs_providerInput
    introduction_images?: HSIntroductionImageModelCreateNestedManyWithoutHs_providerInput
  }

  export type HSProviderModelUncheckedCreateInput = {
    id: string
    business_registration_num: string
    introduction_images?: HSIntroductionImageModelUncheckedCreateNestedManyWithoutHs_providerInput
  }

  export type HSProviderModelUpdateInput = {
    business_registration_num?: StringFieldUpdateOperationsInput | string
    base?: BusinessUserModelUpdateOneRequiredWithoutHs_providerNestedInput
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

  export type BusinessCertificationImageModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    url: string
    business_user: BusinessUserModelCreateNestedOneWithoutCertificationsInput
  }

  export type BusinessCertificationImageModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    business_user_id: string
    url: string
  }

  export type BusinessCertificationImageModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
    business_user?: BusinessUserModelUpdateOneRequiredWithoutCertificationsNestedInput
  }

  export type BusinessCertificationImageModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business_user_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCertificationImageModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    business_user_id: string
    url: string
  }

  export type BusinessCertificationImageModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCertificationImageModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business_user_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type HSIntroductionImageModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    url: string
    hs_provider: HSProviderModelCreateNestedOneWithoutIntroduction_imagesInput
  }

  export type HSIntroductionImageModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    hs_provider_id: string
    url: string
  }

  export type HSIntroductionImageModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
    hs_provider?: HSProviderModelUpdateOneRequiredWithoutIntroduction_imagesNestedInput
  }

  export type HSIntroductionImageModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hs_provider_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type HSIntroductionImageModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    hs_provider_id: string
    url: string
  }

  export type HSIntroductionImageModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
  }

  export type HSIntroductionImageModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hs_provider_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SubExpertiseModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    category: ExpertSubCategoryModelCreateNestedOneWithoutExpertisesInput
    business_user: BusinessUserModelCreateNestedOneWithoutSub_expertisesInput
  }

  export type SubExpertiseModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    sub_category_id: string
    business_user_id: string
  }

  export type SubExpertiseModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: ExpertSubCategoryModelUpdateOneRequiredWithoutExpertisesNestedInput
    business_user?: BusinessUserModelUpdateOneRequiredWithoutSub_expertisesNestedInput
  }

  export type SubExpertiseModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sub_category_id?: StringFieldUpdateOperationsInput | string
    business_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubExpertiseModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    sub_category_id: string
    business_user_id: string
  }

  export type SubExpertiseModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubExpertiseModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sub_category_id?: StringFieldUpdateOperationsInput | string
    business_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertSubCategoryModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    super: ExpertSuperCategoryModelCreateNestedOneWithoutSubsInput
    expertises?: SubExpertiseModelCreateNestedManyWithoutCategoryInput
  }

  export type ExpertSubCategoryModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    super_id: string
    expertises?: SubExpertiseModelUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ExpertSubCategoryModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    super?: ExpertSuperCategoryModelUpdateOneRequiredWithoutSubsNestedInput
    expertises?: SubExpertiseModelUpdateManyWithoutCategoryNestedInput
  }

  export type ExpertSubCategoryModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
    expertises?: SubExpertiseModelUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ExpertSubCategoryModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    super_id: string
  }

  export type ExpertSubCategoryModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertSubCategoryModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertSuperCategoryModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    business_type: ExpertBusinessType
    subs?: ExpertSubCategoryModelCreateNestedManyWithoutSuperInput
    business_users?: BusinessUserModelCreateNestedManyWithoutSuper_expertiseInput
  }

  export type ExpertSuperCategoryModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    business_type: ExpertBusinessType
    subs?: ExpertSubCategoryModelUncheckedCreateNestedManyWithoutSuperInput
    business_users?: BusinessUserModelUncheckedCreateNestedManyWithoutSuper_expertiseInput
  }

  export type ExpertSuperCategoryModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    business_type?: EnumExpertBusinessTypeFieldUpdateOperationsInput | ExpertBusinessType
    subs?: ExpertSubCategoryModelUpdateManyWithoutSuperNestedInput
    business_users?: BusinessUserModelUpdateManyWithoutSuper_expertiseNestedInput
  }

  export type ExpertSuperCategoryModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    business_type?: EnumExpertBusinessTypeFieldUpdateOperationsInput | ExpertBusinessType
    subs?: ExpertSubCategoryModelUncheckedUpdateManyWithoutSuperNestedInput
    business_users?: BusinessUserModelUncheckedUpdateManyWithoutSuper_expertiseNestedInput
  }

  export type ExpertSuperCategoryModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    business_type: ExpertBusinessType
  }

  export type ExpertSuperCategoryModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    business_type?: EnumExpertBusinessTypeFieldUpdateOperationsInput | ExpertBusinessType
  }

  export type ExpertSuperCategoryModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    business_type?: EnumExpertBusinessTypeFieldUpdateOperationsInput | ExpertBusinessType
  }

  export type AgreementModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    title: string
    content: string
    user_type: AgreementUserType
    acceptances?: AgreementAcceptanceModelCreateNestedManyWithoutAgreementInput
  }

  export type AgreementModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    title: string
    content: string
    user_type: AgreementUserType
    acceptances?: AgreementAcceptanceModelUncheckedCreateNestedManyWithoutAgreementInput
  }

  export type AgreementModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_type?: EnumAgreementUserTypeFieldUpdateOperationsInput | AgreementUserType
    acceptances?: AgreementAcceptanceModelUpdateManyWithoutAgreementNestedInput
  }

  export type AgreementModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_type?: EnumAgreementUserTypeFieldUpdateOperationsInput | AgreementUserType
    acceptances?: AgreementAcceptanceModelUncheckedUpdateManyWithoutAgreementNestedInput
  }

  export type AgreementModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    title: string
    content: string
    user_type: AgreementUserType
  }

  export type AgreementModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_type?: EnumAgreementUserTypeFieldUpdateOperationsInput | AgreementUserType
  }

  export type AgreementModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_type?: EnumAgreementUserTypeFieldUpdateOperationsInput | AgreementUserType
  }

  export type AgreementAcceptanceModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    user: UserModelCreateNestedOneWithoutAgreement_acceptancesInput
    agreement: AgreementModelCreateNestedOneWithoutAcceptancesInput
  }

  export type AgreementAcceptanceModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    user_id: string
    agreement_id: string
  }

  export type AgreementAcceptanceModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserModelUpdateOneRequiredWithoutAgreement_acceptancesNestedInput
    agreement?: AgreementModelUpdateOneRequiredWithoutAcceptancesNestedInput
  }

  export type AgreementAcceptanceModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    agreement_id?: StringFieldUpdateOperationsInput | string
  }

  export type AgreementAcceptanceModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    user_id: string
    agreement_id: string
  }

  export type AgreementAcceptanceModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AgreementAcceptanceModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    agreement_id?: StringFieldUpdateOperationsInput | string
  }

  export type REProertyModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    main_image_url: string
    agent: REAgentModelCreateNestedOneWithoutPropertiesInput
    sub_category: REPropertySubCategoryModelCreateNestedOneWithoutPropertiesInput
  }

  export type REProertyModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    main_image_url: string
    agent_id: string
    sub_category_id: string
  }

  export type REProertyModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    main_image_url?: StringFieldUpdateOperationsInput | string
    agent?: REAgentModelUpdateOneRequiredWithoutPropertiesNestedInput
    sub_category?: REPropertySubCategoryModelUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type REProertyModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    main_image_url?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
    sub_category_id?: StringFieldUpdateOperationsInput | string
  }

  export type REProertyModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    main_image_url: string
    agent_id: string
    sub_category_id: string
  }

  export type REProertyModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    main_image_url?: StringFieldUpdateOperationsInput | string
  }

  export type REProertyModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    main_image_url?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
    sub_category_id?: StringFieldUpdateOperationsInput | string
  }

  export type REPropertySuperCategoryModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    sub_categories?: REPropertySubCategoryModelCreateNestedManyWithoutSuper_categoryInput
  }

  export type REPropertySuperCategoryModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    sub_categories?: REPropertySubCategoryModelUncheckedCreateNestedManyWithoutSuper_categoryInput
  }

  export type REPropertySuperCategoryModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    sub_categories?: REPropertySubCategoryModelUpdateManyWithoutSuper_categoryNestedInput
  }

  export type REPropertySuperCategoryModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    sub_categories?: REPropertySubCategoryModelUncheckedUpdateManyWithoutSuper_categoryNestedInput
  }

  export type REPropertySuperCategoryModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
  }

  export type REPropertySuperCategoryModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type REPropertySuperCategoryModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type REPropertySubCategoryModelCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    super_category: REPropertySuperCategoryModelCreateNestedOneWithoutSub_categoriesInput
    properties?: REProertyModelCreateNestedManyWithoutSub_categoryInput
  }

  export type REPropertySubCategoryModelUncheckedCreateInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    super_category_id: string
    properties?: REProertyModelUncheckedCreateNestedManyWithoutSub_categoryInput
  }

  export type REPropertySubCategoryModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    super_category?: REPropertySuperCategoryModelUpdateOneRequiredWithoutSub_categoriesNestedInput
    properties?: REProertyModelUpdateManyWithoutSub_categoryNestedInput
  }

  export type REPropertySubCategoryModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    super_category_id?: StringFieldUpdateOperationsInput | string
    properties?: REProertyModelUncheckedUpdateManyWithoutSub_categoryNestedInput
  }

  export type REPropertySubCategoryModelCreateManyInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    super_category_id: string
  }

  export type REPropertySubCategoryModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type REPropertySubCategoryModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    super_category_id?: StringFieldUpdateOperationsInput | string
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

  export type BusinessUserModelRelationFilter = {
    is?: BusinessUserModelWhereInput
    isNot?: BusinessUserModelWhereInput
  }

  export type CustomerModelRelationFilter = {
    is?: CustomerModelWhereInput | null
    isNot?: CustomerModelWhereInput | null
  }

  export type OauthAccessorModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
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
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
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
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
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
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
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
    is?: REAgentModelWhereInput
    isNot?: REAgentModelWhereInput
  }

  export type HSProviderModelRelationFilter = {
    is?: HSProviderModelWhereInput
    isNot?: HSProviderModelWhereInput
  }

  export type BusinessCertificationImageModelListRelationFilter = {
    every?: BusinessCertificationImageModelWhereInput
    some?: BusinessCertificationImageModelWhereInput
    none?: BusinessCertificationImageModelWhereInput
  }

  export type ExpertSuperCategoryModelRelationFilter = {
    is?: ExpertSuperCategoryModelWhereInput
    isNot?: ExpertSuperCategoryModelWhereInput
  }

  export type SubExpertiseModelListRelationFilter = {
    every?: SubExpertiseModelWhereInput
    some?: SubExpertiseModelWhereInput
    none?: SubExpertiseModelWhereInput
  }

  export type BusinessCertificationImageModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubExpertiseModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessUserModelCountOrderByAggregateInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image_url?: SortOrder
    super_expertise_id?: SortOrder
  }

  export type BusinessUserModelMaxOrderByAggregateInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image_url?: SortOrder
    super_expertise_id?: SortOrder
  }

  export type BusinessUserModelMinOrderByAggregateInput = {
    id?: SortOrder
    is_verified?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    phone?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    profile_image_url?: SortOrder
    super_expertise_id?: SortOrder
  }

  export type REProertyModelListRelationFilter = {
    every?: REProertyModelWhereInput
    some?: REProertyModelWhereInput
    none?: REProertyModelWhereInput
  }

  export type REProertyModelOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type BusinessCertificationImageModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    business_user_id?: SortOrder
    url?: SortOrder
  }

  export type BusinessCertificationImageModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    business_user_id?: SortOrder
    url?: SortOrder
  }

  export type BusinessCertificationImageModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    business_user_id?: SortOrder
    url?: SortOrder
  }

  export type HSIntroductionImageModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    hs_provider_id?: SortOrder
    url?: SortOrder
  }

  export type HSIntroductionImageModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    hs_provider_id?: SortOrder
    url?: SortOrder
  }

  export type HSIntroductionImageModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    hs_provider_id?: SortOrder
    url?: SortOrder
  }

  export type ExpertSubCategoryModelRelationFilter = {
    is?: ExpertSubCategoryModelWhereInput
    isNot?: ExpertSubCategoryModelWhereInput
  }

  export type SubExpertiseModelSub_category_idBusiness_user_idCompoundUniqueInput = {
    sub_category_id: string
    business_user_id: string
  }

  export type SubExpertiseModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    sub_category_id?: SortOrder
    business_user_id?: SortOrder
  }

  export type SubExpertiseModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    sub_category_id?: SortOrder
    business_user_id?: SortOrder
  }

  export type SubExpertiseModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    sub_category_id?: SortOrder
    business_user_id?: SortOrder
  }

  export type ExpertSubCategoryModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
  }

  export type ExpertSubCategoryModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    super_id?: SortOrder
  }

  export type ExpertSubCategoryModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
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

  export type BusinessUserModelListRelationFilter = {
    every?: BusinessUserModelWhereInput
    some?: BusinessUserModelWhereInput
    none?: BusinessUserModelWhereInput
  }

  export type ExpertSubCategoryModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessUserModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpertSuperCategoryModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    business_type?: SortOrder
  }

  export type ExpertSuperCategoryModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    business_type?: SortOrder
  }

  export type ExpertSuperCategoryModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
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
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_type?: SortOrder
  }

  export type AgreementModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_type?: SortOrder
  }

  export type AgreementModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
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

  export type AgreementAcceptanceModelUser_idAgreement_idCompoundUniqueInput = {
    user_id: string
    agreement_id: string
  }

  export type AgreementAcceptanceModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    user_id?: SortOrder
    agreement_id?: SortOrder
  }

  export type AgreementAcceptanceModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    user_id?: SortOrder
    agreement_id?: SortOrder
  }

  export type AgreementAcceptanceModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    user_id?: SortOrder
    agreement_id?: SortOrder
  }

  export type REPropertySubCategoryModelRelationFilter = {
    is?: REPropertySubCategoryModelWhereInput
    isNot?: REPropertySubCategoryModelWhereInput
  }

  export type REProertyModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    main_image_url?: SortOrder
    agent_id?: SortOrder
    sub_category_id?: SortOrder
  }

  export type REProertyModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    main_image_url?: SortOrder
    agent_id?: SortOrder
    sub_category_id?: SortOrder
  }

  export type REProertyModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    main_image_url?: SortOrder
    agent_id?: SortOrder
    sub_category_id?: SortOrder
  }

  export type REPropertySubCategoryModelListRelationFilter = {
    every?: REPropertySubCategoryModelWhereInput
    some?: REPropertySubCategoryModelWhereInput
    none?: REPropertySubCategoryModelWhereInput
  }

  export type REPropertySubCategoryModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type REPropertySuperCategoryModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
  }

  export type REPropertySuperCategoryModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
  }

  export type REPropertySuperCategoryModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
  }

  export type REPropertySuperCategoryModelRelationFilter = {
    is?: REPropertySuperCategoryModelWhereInput
    isNot?: REPropertySuperCategoryModelWhereInput
  }

  export type REPropertySubCategoryModelCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    super_category_id?: SortOrder
  }

  export type REPropertySubCategoryModelMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    super_category_id?: SortOrder
  }

  export type REPropertySubCategoryModelMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    super_category_id?: SortOrder
  }

  export type BusinessUserModelCreateNestedOneWithoutOauth_accessorInput = {
    create?: XOR<BusinessUserModelCreateWithoutOauth_accessorInput, BusinessUserModelUncheckedCreateWithoutOauth_accessorInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutOauth_accessorInput
    connect?: BusinessUserModelWhereUniqueInput
  }

  export type CustomerModelCreateNestedOneWithoutOauth_accessorInput = {
    create?: XOR<CustomerModelCreateWithoutOauth_accessorInput, CustomerModelUncheckedCreateWithoutOauth_accessorInput>
    connectOrCreate?: CustomerModelCreateOrConnectWithoutOauth_accessorInput
    connect?: CustomerModelWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type EnumOauthTypeFieldUpdateOperationsInput = {
    set?: OauthType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumGenderTypeFieldUpdateOperationsInput = {
    set?: GenderType | null
  }

  export type BusinessUserModelUpdateOneWithoutOauth_accessorNestedInput = {
    create?: XOR<BusinessUserModelCreateWithoutOauth_accessorInput, BusinessUserModelUncheckedCreateWithoutOauth_accessorInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutOauth_accessorInput
    upsert?: BusinessUserModelUpsertWithoutOauth_accessorInput
    disconnect?: boolean
    delete?: boolean
    connect?: BusinessUserModelWhereUniqueInput
    update?: XOR<BusinessUserModelUpdateWithoutOauth_accessorInput, BusinessUserModelUncheckedUpdateWithoutOauth_accessorInput>
  }

  export type CustomerModelUpdateOneWithoutOauth_accessorNestedInput = {
    create?: XOR<CustomerModelCreateWithoutOauth_accessorInput, CustomerModelUncheckedCreateWithoutOauth_accessorInput>
    connectOrCreate?: CustomerModelCreateOrConnectWithoutOauth_accessorInput
    upsert?: CustomerModelUpsertWithoutOauth_accessorInput
    disconnect?: boolean
    delete?: boolean
    connect?: CustomerModelWhereUniqueInput
    update?: XOR<CustomerModelUpdateWithoutOauth_accessorInput, CustomerModelUncheckedUpdateWithoutOauth_accessorInput>
  }

  export type CustomerModelCreateNestedOneWithoutBaseInput = {
    create?: XOR<CustomerModelCreateWithoutBaseInput, CustomerModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: CustomerModelCreateOrConnectWithoutBaseInput
    connect?: CustomerModelWhereUniqueInput
  }

  export type BusinessUserModelCreateNestedOneWithoutBaseInput = {
    create?: XOR<BusinessUserModelCreateWithoutBaseInput, BusinessUserModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutBaseInput
    connect?: BusinessUserModelWhereUniqueInput
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

  export type BusinessUserModelUncheckedCreateNestedOneWithoutBaseInput = {
    create?: XOR<BusinessUserModelCreateWithoutBaseInput, BusinessUserModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutBaseInput
    connect?: BusinessUserModelWhereUniqueInput
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

  export type BusinessUserModelUpdateOneWithoutBaseNestedInput = {
    create?: XOR<BusinessUserModelCreateWithoutBaseInput, BusinessUserModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutBaseInput
    upsert?: BusinessUserModelUpsertWithoutBaseInput
    disconnect?: boolean
    delete?: boolean
    connect?: BusinessUserModelWhereUniqueInput
    update?: XOR<BusinessUserModelUpdateWithoutBaseInput, BusinessUserModelUncheckedUpdateWithoutBaseInput>
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

  export type BusinessUserModelUncheckedUpdateOneWithoutBaseNestedInput = {
    create?: XOR<BusinessUserModelCreateWithoutBaseInput, BusinessUserModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutBaseInput
    upsert?: BusinessUserModelUpsertWithoutBaseInput
    disconnect?: boolean
    delete?: boolean
    connect?: BusinessUserModelWhereUniqueInput
    update?: XOR<BusinessUserModelUpdateWithoutBaseInput, BusinessUserModelUncheckedUpdateWithoutBaseInput>
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

  export type BusinessCertificationImageModelCreateNestedManyWithoutBusiness_userInput = {
    create?: XOR<Enumerable<BusinessCertificationImageModelCreateWithoutBusiness_userInput>, Enumerable<BusinessCertificationImageModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<BusinessCertificationImageModelCreateOrConnectWithoutBusiness_userInput>
    createMany?: BusinessCertificationImageModelCreateManyBusiness_userInputEnvelope
    connect?: Enumerable<BusinessCertificationImageModelWhereUniqueInput>
  }

  export type ExpertSuperCategoryModelCreateNestedOneWithoutBusiness_usersInput = {
    create?: XOR<ExpertSuperCategoryModelCreateWithoutBusiness_usersInput, ExpertSuperCategoryModelUncheckedCreateWithoutBusiness_usersInput>
    connectOrCreate?: ExpertSuperCategoryModelCreateOrConnectWithoutBusiness_usersInput
    connect?: ExpertSuperCategoryModelWhereUniqueInput
  }

  export type SubExpertiseModelCreateNestedManyWithoutBusiness_userInput = {
    create?: XOR<Enumerable<SubExpertiseModelCreateWithoutBusiness_userInput>, Enumerable<SubExpertiseModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<SubExpertiseModelCreateOrConnectWithoutBusiness_userInput>
    createMany?: SubExpertiseModelCreateManyBusiness_userInputEnvelope
    connect?: Enumerable<SubExpertiseModelWhereUniqueInput>
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

  export type BusinessCertificationImageModelUncheckedCreateNestedManyWithoutBusiness_userInput = {
    create?: XOR<Enumerable<BusinessCertificationImageModelCreateWithoutBusiness_userInput>, Enumerable<BusinessCertificationImageModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<BusinessCertificationImageModelCreateOrConnectWithoutBusiness_userInput>
    createMany?: BusinessCertificationImageModelCreateManyBusiness_userInputEnvelope
    connect?: Enumerable<BusinessCertificationImageModelWhereUniqueInput>
  }

  export type SubExpertiseModelUncheckedCreateNestedManyWithoutBusiness_userInput = {
    create?: XOR<Enumerable<SubExpertiseModelCreateWithoutBusiness_userInput>, Enumerable<SubExpertiseModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<SubExpertiseModelCreateOrConnectWithoutBusiness_userInput>
    createMany?: SubExpertiseModelCreateManyBusiness_userInputEnvelope
    connect?: Enumerable<SubExpertiseModelWhereUniqueInput>
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

  export type BusinessCertificationImageModelUpdateManyWithoutBusiness_userNestedInput = {
    create?: XOR<Enumerable<BusinessCertificationImageModelCreateWithoutBusiness_userInput>, Enumerable<BusinessCertificationImageModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<BusinessCertificationImageModelCreateOrConnectWithoutBusiness_userInput>
    upsert?: Enumerable<BusinessCertificationImageModelUpsertWithWhereUniqueWithoutBusiness_userInput>
    createMany?: BusinessCertificationImageModelCreateManyBusiness_userInputEnvelope
    set?: Enumerable<BusinessCertificationImageModelWhereUniqueInput>
    disconnect?: Enumerable<BusinessCertificationImageModelWhereUniqueInput>
    delete?: Enumerable<BusinessCertificationImageModelWhereUniqueInput>
    connect?: Enumerable<BusinessCertificationImageModelWhereUniqueInput>
    update?: Enumerable<BusinessCertificationImageModelUpdateWithWhereUniqueWithoutBusiness_userInput>
    updateMany?: Enumerable<BusinessCertificationImageModelUpdateManyWithWhereWithoutBusiness_userInput>
    deleteMany?: Enumerable<BusinessCertificationImageModelScalarWhereInput>
  }

  export type ExpertSuperCategoryModelUpdateOneRequiredWithoutBusiness_usersNestedInput = {
    create?: XOR<ExpertSuperCategoryModelCreateWithoutBusiness_usersInput, ExpertSuperCategoryModelUncheckedCreateWithoutBusiness_usersInput>
    connectOrCreate?: ExpertSuperCategoryModelCreateOrConnectWithoutBusiness_usersInput
    upsert?: ExpertSuperCategoryModelUpsertWithoutBusiness_usersInput
    connect?: ExpertSuperCategoryModelWhereUniqueInput
    update?: XOR<ExpertSuperCategoryModelUpdateWithoutBusiness_usersInput, ExpertSuperCategoryModelUncheckedUpdateWithoutBusiness_usersInput>
  }

  export type SubExpertiseModelUpdateManyWithoutBusiness_userNestedInput = {
    create?: XOR<Enumerable<SubExpertiseModelCreateWithoutBusiness_userInput>, Enumerable<SubExpertiseModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<SubExpertiseModelCreateOrConnectWithoutBusiness_userInput>
    upsert?: Enumerable<SubExpertiseModelUpsertWithWhereUniqueWithoutBusiness_userInput>
    createMany?: SubExpertiseModelCreateManyBusiness_userInputEnvelope
    set?: Enumerable<SubExpertiseModelWhereUniqueInput>
    disconnect?: Enumerable<SubExpertiseModelWhereUniqueInput>
    delete?: Enumerable<SubExpertiseModelWhereUniqueInput>
    connect?: Enumerable<SubExpertiseModelWhereUniqueInput>
    update?: Enumerable<SubExpertiseModelUpdateWithWhereUniqueWithoutBusiness_userInput>
    updateMany?: Enumerable<SubExpertiseModelUpdateManyWithWhereWithoutBusiness_userInput>
    deleteMany?: Enumerable<SubExpertiseModelScalarWhereInput>
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

  export type BusinessCertificationImageModelUncheckedUpdateManyWithoutBusiness_userNestedInput = {
    create?: XOR<Enumerable<BusinessCertificationImageModelCreateWithoutBusiness_userInput>, Enumerable<BusinessCertificationImageModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<BusinessCertificationImageModelCreateOrConnectWithoutBusiness_userInput>
    upsert?: Enumerable<BusinessCertificationImageModelUpsertWithWhereUniqueWithoutBusiness_userInput>
    createMany?: BusinessCertificationImageModelCreateManyBusiness_userInputEnvelope
    set?: Enumerable<BusinessCertificationImageModelWhereUniqueInput>
    disconnect?: Enumerable<BusinessCertificationImageModelWhereUniqueInput>
    delete?: Enumerable<BusinessCertificationImageModelWhereUniqueInput>
    connect?: Enumerable<BusinessCertificationImageModelWhereUniqueInput>
    update?: Enumerable<BusinessCertificationImageModelUpdateWithWhereUniqueWithoutBusiness_userInput>
    updateMany?: Enumerable<BusinessCertificationImageModelUpdateManyWithWhereWithoutBusiness_userInput>
    deleteMany?: Enumerable<BusinessCertificationImageModelScalarWhereInput>
  }

  export type SubExpertiseModelUncheckedUpdateManyWithoutBusiness_userNestedInput = {
    create?: XOR<Enumerable<SubExpertiseModelCreateWithoutBusiness_userInput>, Enumerable<SubExpertiseModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<SubExpertiseModelCreateOrConnectWithoutBusiness_userInput>
    upsert?: Enumerable<SubExpertiseModelUpsertWithWhereUniqueWithoutBusiness_userInput>
    createMany?: SubExpertiseModelCreateManyBusiness_userInputEnvelope
    set?: Enumerable<SubExpertiseModelWhereUniqueInput>
    disconnect?: Enumerable<SubExpertiseModelWhereUniqueInput>
    delete?: Enumerable<SubExpertiseModelWhereUniqueInput>
    connect?: Enumerable<SubExpertiseModelWhereUniqueInput>
    update?: Enumerable<SubExpertiseModelUpdateWithWhereUniqueWithoutBusiness_userInput>
    updateMany?: Enumerable<SubExpertiseModelUpdateManyWithWhereWithoutBusiness_userInput>
    deleteMany?: Enumerable<SubExpertiseModelScalarWhereInput>
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

  export type BusinessUserModelCreateNestedOneWithoutRe_agentInput = {
    create?: XOR<BusinessUserModelCreateWithoutRe_agentInput, BusinessUserModelUncheckedCreateWithoutRe_agentInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutRe_agentInput
    connect?: BusinessUserModelWhereUniqueInput
  }

  export type REProertyModelCreateNestedManyWithoutAgentInput = {
    create?: XOR<Enumerable<REProertyModelCreateWithoutAgentInput>, Enumerable<REProertyModelUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<REProertyModelCreateOrConnectWithoutAgentInput>
    createMany?: REProertyModelCreateManyAgentInputEnvelope
    connect?: Enumerable<REProertyModelWhereUniqueInput>
  }

  export type REProertyModelUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<Enumerable<REProertyModelCreateWithoutAgentInput>, Enumerable<REProertyModelUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<REProertyModelCreateOrConnectWithoutAgentInput>
    createMany?: REProertyModelCreateManyAgentInputEnvelope
    connect?: Enumerable<REProertyModelWhereUniqueInput>
  }

  export type BusinessUserModelUpdateOneRequiredWithoutRe_agentNestedInput = {
    create?: XOR<BusinessUserModelCreateWithoutRe_agentInput, BusinessUserModelUncheckedCreateWithoutRe_agentInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutRe_agentInput
    upsert?: BusinessUserModelUpsertWithoutRe_agentInput
    connect?: BusinessUserModelWhereUniqueInput
    update?: XOR<BusinessUserModelUpdateWithoutRe_agentInput, BusinessUserModelUncheckedUpdateWithoutRe_agentInput>
  }

  export type REProertyModelUpdateManyWithoutAgentNestedInput = {
    create?: XOR<Enumerable<REProertyModelCreateWithoutAgentInput>, Enumerable<REProertyModelUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<REProertyModelCreateOrConnectWithoutAgentInput>
    upsert?: Enumerable<REProertyModelUpsertWithWhereUniqueWithoutAgentInput>
    createMany?: REProertyModelCreateManyAgentInputEnvelope
    set?: Enumerable<REProertyModelWhereUniqueInput>
    disconnect?: Enumerable<REProertyModelWhereUniqueInput>
    delete?: Enumerable<REProertyModelWhereUniqueInput>
    connect?: Enumerable<REProertyModelWhereUniqueInput>
    update?: Enumerable<REProertyModelUpdateWithWhereUniqueWithoutAgentInput>
    updateMany?: Enumerable<REProertyModelUpdateManyWithWhereWithoutAgentInput>
    deleteMany?: Enumerable<REProertyModelScalarWhereInput>
  }

  export type REProertyModelUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<Enumerable<REProertyModelCreateWithoutAgentInput>, Enumerable<REProertyModelUncheckedCreateWithoutAgentInput>>
    connectOrCreate?: Enumerable<REProertyModelCreateOrConnectWithoutAgentInput>
    upsert?: Enumerable<REProertyModelUpsertWithWhereUniqueWithoutAgentInput>
    createMany?: REProertyModelCreateManyAgentInputEnvelope
    set?: Enumerable<REProertyModelWhereUniqueInput>
    disconnect?: Enumerable<REProertyModelWhereUniqueInput>
    delete?: Enumerable<REProertyModelWhereUniqueInput>
    connect?: Enumerable<REProertyModelWhereUniqueInput>
    update?: Enumerable<REProertyModelUpdateWithWhereUniqueWithoutAgentInput>
    updateMany?: Enumerable<REProertyModelUpdateManyWithWhereWithoutAgentInput>
    deleteMany?: Enumerable<REProertyModelScalarWhereInput>
  }

  export type BusinessUserModelCreateNestedOneWithoutHs_providerInput = {
    create?: XOR<BusinessUserModelCreateWithoutHs_providerInput, BusinessUserModelUncheckedCreateWithoutHs_providerInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutHs_providerInput
    connect?: BusinessUserModelWhereUniqueInput
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

  export type BusinessUserModelUpdateOneRequiredWithoutHs_providerNestedInput = {
    create?: XOR<BusinessUserModelCreateWithoutHs_providerInput, BusinessUserModelUncheckedCreateWithoutHs_providerInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutHs_providerInput
    upsert?: BusinessUserModelUpsertWithoutHs_providerInput
    connect?: BusinessUserModelWhereUniqueInput
    update?: XOR<BusinessUserModelUpdateWithoutHs_providerInput, BusinessUserModelUncheckedUpdateWithoutHs_providerInput>
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

  export type BusinessUserModelCreateNestedOneWithoutCertificationsInput = {
    create?: XOR<BusinessUserModelCreateWithoutCertificationsInput, BusinessUserModelUncheckedCreateWithoutCertificationsInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutCertificationsInput
    connect?: BusinessUserModelWhereUniqueInput
  }

  export type BusinessUserModelUpdateOneRequiredWithoutCertificationsNestedInput = {
    create?: XOR<BusinessUserModelCreateWithoutCertificationsInput, BusinessUserModelUncheckedCreateWithoutCertificationsInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutCertificationsInput
    upsert?: BusinessUserModelUpsertWithoutCertificationsInput
    connect?: BusinessUserModelWhereUniqueInput
    update?: XOR<BusinessUserModelUpdateWithoutCertificationsInput, BusinessUserModelUncheckedUpdateWithoutCertificationsInput>
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

  export type BusinessUserModelCreateNestedOneWithoutSub_expertisesInput = {
    create?: XOR<BusinessUserModelCreateWithoutSub_expertisesInput, BusinessUserModelUncheckedCreateWithoutSub_expertisesInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutSub_expertisesInput
    connect?: BusinessUserModelWhereUniqueInput
  }

  export type ExpertSubCategoryModelUpdateOneRequiredWithoutExpertisesNestedInput = {
    create?: XOR<ExpertSubCategoryModelCreateWithoutExpertisesInput, ExpertSubCategoryModelUncheckedCreateWithoutExpertisesInput>
    connectOrCreate?: ExpertSubCategoryModelCreateOrConnectWithoutExpertisesInput
    upsert?: ExpertSubCategoryModelUpsertWithoutExpertisesInput
    connect?: ExpertSubCategoryModelWhereUniqueInput
    update?: XOR<ExpertSubCategoryModelUpdateWithoutExpertisesInput, ExpertSubCategoryModelUncheckedUpdateWithoutExpertisesInput>
  }

  export type BusinessUserModelUpdateOneRequiredWithoutSub_expertisesNestedInput = {
    create?: XOR<BusinessUserModelCreateWithoutSub_expertisesInput, BusinessUserModelUncheckedCreateWithoutSub_expertisesInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutSub_expertisesInput
    upsert?: BusinessUserModelUpsertWithoutSub_expertisesInput
    connect?: BusinessUserModelWhereUniqueInput
    update?: XOR<BusinessUserModelUpdateWithoutSub_expertisesInput, BusinessUserModelUncheckedUpdateWithoutSub_expertisesInput>
  }

  export type ExpertSuperCategoryModelCreateNestedOneWithoutSubsInput = {
    create?: XOR<ExpertSuperCategoryModelCreateWithoutSubsInput, ExpertSuperCategoryModelUncheckedCreateWithoutSubsInput>
    connectOrCreate?: ExpertSuperCategoryModelCreateOrConnectWithoutSubsInput
    connect?: ExpertSuperCategoryModelWhereUniqueInput
  }

  export type SubExpertiseModelCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<SubExpertiseModelCreateWithoutCategoryInput>, Enumerable<SubExpertiseModelUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<SubExpertiseModelCreateOrConnectWithoutCategoryInput>
    createMany?: SubExpertiseModelCreateManyCategoryInputEnvelope
    connect?: Enumerable<SubExpertiseModelWhereUniqueInput>
  }

  export type SubExpertiseModelUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<SubExpertiseModelCreateWithoutCategoryInput>, Enumerable<SubExpertiseModelUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<SubExpertiseModelCreateOrConnectWithoutCategoryInput>
    createMany?: SubExpertiseModelCreateManyCategoryInputEnvelope
    connect?: Enumerable<SubExpertiseModelWhereUniqueInput>
  }

  export type ExpertSuperCategoryModelUpdateOneRequiredWithoutSubsNestedInput = {
    create?: XOR<ExpertSuperCategoryModelCreateWithoutSubsInput, ExpertSuperCategoryModelUncheckedCreateWithoutSubsInput>
    connectOrCreate?: ExpertSuperCategoryModelCreateOrConnectWithoutSubsInput
    upsert?: ExpertSuperCategoryModelUpsertWithoutSubsInput
    connect?: ExpertSuperCategoryModelWhereUniqueInput
    update?: XOR<ExpertSuperCategoryModelUpdateWithoutSubsInput, ExpertSuperCategoryModelUncheckedUpdateWithoutSubsInput>
  }

  export type SubExpertiseModelUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<SubExpertiseModelCreateWithoutCategoryInput>, Enumerable<SubExpertiseModelUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<SubExpertiseModelCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<SubExpertiseModelUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: SubExpertiseModelCreateManyCategoryInputEnvelope
    set?: Enumerable<SubExpertiseModelWhereUniqueInput>
    disconnect?: Enumerable<SubExpertiseModelWhereUniqueInput>
    delete?: Enumerable<SubExpertiseModelWhereUniqueInput>
    connect?: Enumerable<SubExpertiseModelWhereUniqueInput>
    update?: Enumerable<SubExpertiseModelUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<SubExpertiseModelUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<SubExpertiseModelScalarWhereInput>
  }

  export type SubExpertiseModelUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<SubExpertiseModelCreateWithoutCategoryInput>, Enumerable<SubExpertiseModelUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<SubExpertiseModelCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<SubExpertiseModelUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: SubExpertiseModelCreateManyCategoryInputEnvelope
    set?: Enumerable<SubExpertiseModelWhereUniqueInput>
    disconnect?: Enumerable<SubExpertiseModelWhereUniqueInput>
    delete?: Enumerable<SubExpertiseModelWhereUniqueInput>
    connect?: Enumerable<SubExpertiseModelWhereUniqueInput>
    update?: Enumerable<SubExpertiseModelUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<SubExpertiseModelUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<SubExpertiseModelScalarWhereInput>
  }

  export type ExpertSubCategoryModelCreateNestedManyWithoutSuperInput = {
    create?: XOR<Enumerable<ExpertSubCategoryModelCreateWithoutSuperInput>, Enumerable<ExpertSubCategoryModelUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<ExpertSubCategoryModelCreateOrConnectWithoutSuperInput>
    createMany?: ExpertSubCategoryModelCreateManySuperInputEnvelope
    connect?: Enumerable<ExpertSubCategoryModelWhereUniqueInput>
  }

  export type BusinessUserModelCreateNestedManyWithoutSuper_expertiseInput = {
    create?: XOR<Enumerable<BusinessUserModelCreateWithoutSuper_expertiseInput>, Enumerable<BusinessUserModelUncheckedCreateWithoutSuper_expertiseInput>>
    connectOrCreate?: Enumerable<BusinessUserModelCreateOrConnectWithoutSuper_expertiseInput>
    createMany?: BusinessUserModelCreateManySuper_expertiseInputEnvelope
    connect?: Enumerable<BusinessUserModelWhereUniqueInput>
  }

  export type ExpertSubCategoryModelUncheckedCreateNestedManyWithoutSuperInput = {
    create?: XOR<Enumerable<ExpertSubCategoryModelCreateWithoutSuperInput>, Enumerable<ExpertSubCategoryModelUncheckedCreateWithoutSuperInput>>
    connectOrCreate?: Enumerable<ExpertSubCategoryModelCreateOrConnectWithoutSuperInput>
    createMany?: ExpertSubCategoryModelCreateManySuperInputEnvelope
    connect?: Enumerable<ExpertSubCategoryModelWhereUniqueInput>
  }

  export type BusinessUserModelUncheckedCreateNestedManyWithoutSuper_expertiseInput = {
    create?: XOR<Enumerable<BusinessUserModelCreateWithoutSuper_expertiseInput>, Enumerable<BusinessUserModelUncheckedCreateWithoutSuper_expertiseInput>>
    connectOrCreate?: Enumerable<BusinessUserModelCreateOrConnectWithoutSuper_expertiseInput>
    createMany?: BusinessUserModelCreateManySuper_expertiseInputEnvelope
    connect?: Enumerable<BusinessUserModelWhereUniqueInput>
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

  export type BusinessUserModelUpdateManyWithoutSuper_expertiseNestedInput = {
    create?: XOR<Enumerable<BusinessUserModelCreateWithoutSuper_expertiseInput>, Enumerable<BusinessUserModelUncheckedCreateWithoutSuper_expertiseInput>>
    connectOrCreate?: Enumerable<BusinessUserModelCreateOrConnectWithoutSuper_expertiseInput>
    upsert?: Enumerable<BusinessUserModelUpsertWithWhereUniqueWithoutSuper_expertiseInput>
    createMany?: BusinessUserModelCreateManySuper_expertiseInputEnvelope
    set?: Enumerable<BusinessUserModelWhereUniqueInput>
    disconnect?: Enumerable<BusinessUserModelWhereUniqueInput>
    delete?: Enumerable<BusinessUserModelWhereUniqueInput>
    connect?: Enumerable<BusinessUserModelWhereUniqueInput>
    update?: Enumerable<BusinessUserModelUpdateWithWhereUniqueWithoutSuper_expertiseInput>
    updateMany?: Enumerable<BusinessUserModelUpdateManyWithWhereWithoutSuper_expertiseInput>
    deleteMany?: Enumerable<BusinessUserModelScalarWhereInput>
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

  export type BusinessUserModelUncheckedUpdateManyWithoutSuper_expertiseNestedInput = {
    create?: XOR<Enumerable<BusinessUserModelCreateWithoutSuper_expertiseInput>, Enumerable<BusinessUserModelUncheckedCreateWithoutSuper_expertiseInput>>
    connectOrCreate?: Enumerable<BusinessUserModelCreateOrConnectWithoutSuper_expertiseInput>
    upsert?: Enumerable<BusinessUserModelUpsertWithWhereUniqueWithoutSuper_expertiseInput>
    createMany?: BusinessUserModelCreateManySuper_expertiseInputEnvelope
    set?: Enumerable<BusinessUserModelWhereUniqueInput>
    disconnect?: Enumerable<BusinessUserModelWhereUniqueInput>
    delete?: Enumerable<BusinessUserModelWhereUniqueInput>
    connect?: Enumerable<BusinessUserModelWhereUniqueInput>
    update?: Enumerable<BusinessUserModelUpdateWithWhereUniqueWithoutSuper_expertiseInput>
    updateMany?: Enumerable<BusinessUserModelUpdateManyWithWhereWithoutSuper_expertiseInput>
    deleteMany?: Enumerable<BusinessUserModelScalarWhereInput>
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

  export type REAgentModelCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<REAgentModelCreateWithoutPropertiesInput, REAgentModelUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: REAgentModelCreateOrConnectWithoutPropertiesInput
    connect?: REAgentModelWhereUniqueInput
  }

  export type REPropertySubCategoryModelCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<REPropertySubCategoryModelCreateWithoutPropertiesInput, REPropertySubCategoryModelUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: REPropertySubCategoryModelCreateOrConnectWithoutPropertiesInput
    connect?: REPropertySubCategoryModelWhereUniqueInput
  }

  export type REAgentModelUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<REAgentModelCreateWithoutPropertiesInput, REAgentModelUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: REAgentModelCreateOrConnectWithoutPropertiesInput
    upsert?: REAgentModelUpsertWithoutPropertiesInput
    connect?: REAgentModelWhereUniqueInput
    update?: XOR<REAgentModelUpdateWithoutPropertiesInput, REAgentModelUncheckedUpdateWithoutPropertiesInput>
  }

  export type REPropertySubCategoryModelUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<REPropertySubCategoryModelCreateWithoutPropertiesInput, REPropertySubCategoryModelUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: REPropertySubCategoryModelCreateOrConnectWithoutPropertiesInput
    upsert?: REPropertySubCategoryModelUpsertWithoutPropertiesInput
    connect?: REPropertySubCategoryModelWhereUniqueInput
    update?: XOR<REPropertySubCategoryModelUpdateWithoutPropertiesInput, REPropertySubCategoryModelUncheckedUpdateWithoutPropertiesInput>
  }

  export type REPropertySubCategoryModelCreateNestedManyWithoutSuper_categoryInput = {
    create?: XOR<Enumerable<REPropertySubCategoryModelCreateWithoutSuper_categoryInput>, Enumerable<REPropertySubCategoryModelUncheckedCreateWithoutSuper_categoryInput>>
    connectOrCreate?: Enumerable<REPropertySubCategoryModelCreateOrConnectWithoutSuper_categoryInput>
    createMany?: REPropertySubCategoryModelCreateManySuper_categoryInputEnvelope
    connect?: Enumerable<REPropertySubCategoryModelWhereUniqueInput>
  }

  export type REPropertySubCategoryModelUncheckedCreateNestedManyWithoutSuper_categoryInput = {
    create?: XOR<Enumerable<REPropertySubCategoryModelCreateWithoutSuper_categoryInput>, Enumerable<REPropertySubCategoryModelUncheckedCreateWithoutSuper_categoryInput>>
    connectOrCreate?: Enumerable<REPropertySubCategoryModelCreateOrConnectWithoutSuper_categoryInput>
    createMany?: REPropertySubCategoryModelCreateManySuper_categoryInputEnvelope
    connect?: Enumerable<REPropertySubCategoryModelWhereUniqueInput>
  }

  export type REPropertySubCategoryModelUpdateManyWithoutSuper_categoryNestedInput = {
    create?: XOR<Enumerable<REPropertySubCategoryModelCreateWithoutSuper_categoryInput>, Enumerable<REPropertySubCategoryModelUncheckedCreateWithoutSuper_categoryInput>>
    connectOrCreate?: Enumerable<REPropertySubCategoryModelCreateOrConnectWithoutSuper_categoryInput>
    upsert?: Enumerable<REPropertySubCategoryModelUpsertWithWhereUniqueWithoutSuper_categoryInput>
    createMany?: REPropertySubCategoryModelCreateManySuper_categoryInputEnvelope
    set?: Enumerable<REPropertySubCategoryModelWhereUniqueInput>
    disconnect?: Enumerable<REPropertySubCategoryModelWhereUniqueInput>
    delete?: Enumerable<REPropertySubCategoryModelWhereUniqueInput>
    connect?: Enumerable<REPropertySubCategoryModelWhereUniqueInput>
    update?: Enumerable<REPropertySubCategoryModelUpdateWithWhereUniqueWithoutSuper_categoryInput>
    updateMany?: Enumerable<REPropertySubCategoryModelUpdateManyWithWhereWithoutSuper_categoryInput>
    deleteMany?: Enumerable<REPropertySubCategoryModelScalarWhereInput>
  }

  export type REPropertySubCategoryModelUncheckedUpdateManyWithoutSuper_categoryNestedInput = {
    create?: XOR<Enumerable<REPropertySubCategoryModelCreateWithoutSuper_categoryInput>, Enumerable<REPropertySubCategoryModelUncheckedCreateWithoutSuper_categoryInput>>
    connectOrCreate?: Enumerable<REPropertySubCategoryModelCreateOrConnectWithoutSuper_categoryInput>
    upsert?: Enumerable<REPropertySubCategoryModelUpsertWithWhereUniqueWithoutSuper_categoryInput>
    createMany?: REPropertySubCategoryModelCreateManySuper_categoryInputEnvelope
    set?: Enumerable<REPropertySubCategoryModelWhereUniqueInput>
    disconnect?: Enumerable<REPropertySubCategoryModelWhereUniqueInput>
    delete?: Enumerable<REPropertySubCategoryModelWhereUniqueInput>
    connect?: Enumerable<REPropertySubCategoryModelWhereUniqueInput>
    update?: Enumerable<REPropertySubCategoryModelUpdateWithWhereUniqueWithoutSuper_categoryInput>
    updateMany?: Enumerable<REPropertySubCategoryModelUpdateManyWithWhereWithoutSuper_categoryInput>
    deleteMany?: Enumerable<REPropertySubCategoryModelScalarWhereInput>
  }

  export type REPropertySuperCategoryModelCreateNestedOneWithoutSub_categoriesInput = {
    create?: XOR<REPropertySuperCategoryModelCreateWithoutSub_categoriesInput, REPropertySuperCategoryModelUncheckedCreateWithoutSub_categoriesInput>
    connectOrCreate?: REPropertySuperCategoryModelCreateOrConnectWithoutSub_categoriesInput
    connect?: REPropertySuperCategoryModelWhereUniqueInput
  }

  export type REProertyModelCreateNestedManyWithoutSub_categoryInput = {
    create?: XOR<Enumerable<REProertyModelCreateWithoutSub_categoryInput>, Enumerable<REProertyModelUncheckedCreateWithoutSub_categoryInput>>
    connectOrCreate?: Enumerable<REProertyModelCreateOrConnectWithoutSub_categoryInput>
    createMany?: REProertyModelCreateManySub_categoryInputEnvelope
    connect?: Enumerable<REProertyModelWhereUniqueInput>
  }

  export type REProertyModelUncheckedCreateNestedManyWithoutSub_categoryInput = {
    create?: XOR<Enumerable<REProertyModelCreateWithoutSub_categoryInput>, Enumerable<REProertyModelUncheckedCreateWithoutSub_categoryInput>>
    connectOrCreate?: Enumerable<REProertyModelCreateOrConnectWithoutSub_categoryInput>
    createMany?: REProertyModelCreateManySub_categoryInputEnvelope
    connect?: Enumerable<REProertyModelWhereUniqueInput>
  }

  export type REPropertySuperCategoryModelUpdateOneRequiredWithoutSub_categoriesNestedInput = {
    create?: XOR<REPropertySuperCategoryModelCreateWithoutSub_categoriesInput, REPropertySuperCategoryModelUncheckedCreateWithoutSub_categoriesInput>
    connectOrCreate?: REPropertySuperCategoryModelCreateOrConnectWithoutSub_categoriesInput
    upsert?: REPropertySuperCategoryModelUpsertWithoutSub_categoriesInput
    connect?: REPropertySuperCategoryModelWhereUniqueInput
    update?: XOR<REPropertySuperCategoryModelUpdateWithoutSub_categoriesInput, REPropertySuperCategoryModelUncheckedUpdateWithoutSub_categoriesInput>
  }

  export type REProertyModelUpdateManyWithoutSub_categoryNestedInput = {
    create?: XOR<Enumerable<REProertyModelCreateWithoutSub_categoryInput>, Enumerable<REProertyModelUncheckedCreateWithoutSub_categoryInput>>
    connectOrCreate?: Enumerable<REProertyModelCreateOrConnectWithoutSub_categoryInput>
    upsert?: Enumerable<REProertyModelUpsertWithWhereUniqueWithoutSub_categoryInput>
    createMany?: REProertyModelCreateManySub_categoryInputEnvelope
    set?: Enumerable<REProertyModelWhereUniqueInput>
    disconnect?: Enumerable<REProertyModelWhereUniqueInput>
    delete?: Enumerable<REProertyModelWhereUniqueInput>
    connect?: Enumerable<REProertyModelWhereUniqueInput>
    update?: Enumerable<REProertyModelUpdateWithWhereUniqueWithoutSub_categoryInput>
    updateMany?: Enumerable<REProertyModelUpdateManyWithWhereWithoutSub_categoryInput>
    deleteMany?: Enumerable<REProertyModelScalarWhereInput>
  }

  export type REProertyModelUncheckedUpdateManyWithoutSub_categoryNestedInput = {
    create?: XOR<Enumerable<REProertyModelCreateWithoutSub_categoryInput>, Enumerable<REProertyModelUncheckedCreateWithoutSub_categoryInput>>
    connectOrCreate?: Enumerable<REProertyModelCreateOrConnectWithoutSub_categoryInput>
    upsert?: Enumerable<REProertyModelUpsertWithWhereUniqueWithoutSub_categoryInput>
    createMany?: REProertyModelCreateManySub_categoryInputEnvelope
    set?: Enumerable<REProertyModelWhereUniqueInput>
    disconnect?: Enumerable<REProertyModelWhereUniqueInput>
    delete?: Enumerable<REProertyModelWhereUniqueInput>
    connect?: Enumerable<REProertyModelWhereUniqueInput>
    update?: Enumerable<REProertyModelUpdateWithWhereUniqueWithoutSub_categoryInput>
    updateMany?: Enumerable<REProertyModelUpdateManyWithWhereWithoutSub_categoryInput>
    deleteMany?: Enumerable<REProertyModelScalarWhereInput>
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

  export type BusinessUserModelCreateWithoutOauth_accessorInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBusiness_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationImageModelCreateNestedManyWithoutBusiness_userInput
    super_expertise: ExpertSuperCategoryModelCreateNestedOneWithoutBusiness_usersInput
    sub_expertises?: SubExpertiseModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelUncheckedCreateWithoutOauth_accessorInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
    super_expertise_id: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationImageModelUncheckedCreateNestedManyWithoutBusiness_userInput
    sub_expertises?: SubExpertiseModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelCreateOrConnectWithoutOauth_accessorInput = {
    where: BusinessUserModelWhereUniqueInput
    create: XOR<BusinessUserModelCreateWithoutOauth_accessorInput, BusinessUserModelUncheckedCreateWithoutOauth_accessorInput>
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

  export type BusinessUserModelUpsertWithoutOauth_accessorInput = {
    update: XOR<BusinessUserModelUpdateWithoutOauth_accessorInput, BusinessUserModelUncheckedUpdateWithoutOauth_accessorInput>
    create: XOR<BusinessUserModelCreateWithoutOauth_accessorInput, BusinessUserModelUncheckedCreateWithoutOauth_accessorInput>
  }

  export type BusinessUserModelUpdateWithoutOauth_accessorInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBusiness_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationImageModelUpdateManyWithoutBusiness_userNestedInput
    super_expertise?: ExpertSuperCategoryModelUpdateOneRequiredWithoutBusiness_usersNestedInput
    sub_expertises?: SubExpertiseModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserModelUncheckedUpdateWithoutOauth_accessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
    super_expertise_id?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationImageModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    sub_expertises?: SubExpertiseModelUncheckedUpdateManyWithoutBusiness_userNestedInput
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

  export type BusinessUserModelCreateWithoutBaseInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationImageModelCreateNestedManyWithoutBusiness_userInput
    super_expertise: ExpertSuperCategoryModelCreateNestedOneWithoutBusiness_usersInput
    sub_expertises?: SubExpertiseModelCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelUncheckedCreateWithoutBaseInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
    super_expertise_id: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationImageModelUncheckedCreateNestedManyWithoutBusiness_userInput
    sub_expertises?: SubExpertiseModelUncheckedCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelCreateOrConnectWithoutBaseInput = {
    where: BusinessUserModelWhereUniqueInput
    create: XOR<BusinessUserModelCreateWithoutBaseInput, BusinessUserModelUncheckedCreateWithoutBaseInput>
  }

  export type AgreementAcceptanceModelCreateWithoutUserInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    agreement: AgreementModelCreateNestedOneWithoutAcceptancesInput
  }

  export type AgreementAcceptanceModelUncheckedCreateWithoutUserInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
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

  export type BusinessUserModelUpsertWithoutBaseInput = {
    update: XOR<BusinessUserModelUpdateWithoutBaseInput, BusinessUserModelUncheckedUpdateWithoutBaseInput>
    create: XOR<BusinessUserModelCreateWithoutBaseInput, BusinessUserModelUncheckedCreateWithoutBaseInput>
  }

  export type BusinessUserModelUpdateWithoutBaseInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationImageModelUpdateManyWithoutBusiness_userNestedInput
    super_expertise?: ExpertSuperCategoryModelUpdateOneRequiredWithoutBusiness_usersNestedInput
    sub_expertises?: SubExpertiseModelUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserModelUncheckedUpdateWithoutBaseInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
    super_expertise_id?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationImageModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    sub_expertises?: SubExpertiseModelUncheckedUpdateManyWithoutBusiness_userNestedInput
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
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    user_id?: StringFilter | string
    agreement_id?: StringFilter | string
  }

  export type UserModelCreateWithoutCustomerInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    email?: string | null
    business_user?: BusinessUserModelCreateNestedOneWithoutBaseInput
    agreement_acceptances?: AgreementAcceptanceModelCreateNestedManyWithoutUserInput
  }

  export type UserModelUncheckedCreateWithoutCustomerInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    email?: string | null
    business_user?: BusinessUserModelUncheckedCreateNestedOneWithoutBaseInput
    agreement_acceptances?: AgreementAcceptanceModelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserModelCreateOrConnectWithoutCustomerInput = {
    where: UserModelWhereUniqueInput
    create: XOR<UserModelCreateWithoutCustomerInput, UserModelUncheckedCreateWithoutCustomerInput>
  }

  export type OauthAccessorModelCreateWithoutCustomerInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
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
    business_user?: BusinessUserModelCreateNestedOneWithoutOauth_accessorInput
  }

  export type OauthAccessorModelUncheckedCreateWithoutCustomerInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    oauth_type: OauthType
    oauth_sub: string
    business_user_id?: string | null
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
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    business_user?: BusinessUserModelUpdateOneWithoutBaseNestedInput
    agreement_acceptances?: AgreementAcceptanceModelUpdateManyWithoutUserNestedInput
  }

  export type UserModelUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    business_user?: BusinessUserModelUncheckedUpdateOneWithoutBaseNestedInput
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
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    oauth_type?: EnumOauthTypeFilter | OauthType
    oauth_sub?: StringFilter | string
    business_user_id?: StringNullableFilter | string | null
    customer_id?: StringNullableFilter | string | null
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
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    email?: string | null
    customer?: CustomerModelCreateNestedOneWithoutBaseInput
    agreement_acceptances?: AgreementAcceptanceModelCreateNestedManyWithoutUserInput
  }

  export type UserModelUncheckedCreateWithoutBusiness_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
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
    properties?: REProertyModelCreateNestedManyWithoutAgentInput
  }

  export type REAgentModelUncheckedCreateWithoutBaseInput = {
    is_licensed: boolean
    re_num: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    properties?: REProertyModelUncheckedCreateNestedManyWithoutAgentInput
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

  export type BusinessCertificationImageModelCreateWithoutBusiness_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    url: string
  }

  export type BusinessCertificationImageModelUncheckedCreateWithoutBusiness_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    url: string
  }

  export type BusinessCertificationImageModelCreateOrConnectWithoutBusiness_userInput = {
    where: BusinessCertificationImageModelWhereUniqueInput
    create: XOR<BusinessCertificationImageModelCreateWithoutBusiness_userInput, BusinessCertificationImageModelUncheckedCreateWithoutBusiness_userInput>
  }

  export type BusinessCertificationImageModelCreateManyBusiness_userInputEnvelope = {
    data: Enumerable<BusinessCertificationImageModelCreateManyBusiness_userInput>
    skipDuplicates?: boolean
  }

  export type ExpertSuperCategoryModelCreateWithoutBusiness_usersInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    business_type: ExpertBusinessType
    subs?: ExpertSubCategoryModelCreateNestedManyWithoutSuperInput
  }

  export type ExpertSuperCategoryModelUncheckedCreateWithoutBusiness_usersInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    business_type: ExpertBusinessType
    subs?: ExpertSubCategoryModelUncheckedCreateNestedManyWithoutSuperInput
  }

  export type ExpertSuperCategoryModelCreateOrConnectWithoutBusiness_usersInput = {
    where: ExpertSuperCategoryModelWhereUniqueInput
    create: XOR<ExpertSuperCategoryModelCreateWithoutBusiness_usersInput, ExpertSuperCategoryModelUncheckedCreateWithoutBusiness_usersInput>
  }

  export type SubExpertiseModelCreateWithoutBusiness_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    category: ExpertSubCategoryModelCreateNestedOneWithoutExpertisesInput
  }

  export type SubExpertiseModelUncheckedCreateWithoutBusiness_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    sub_category_id: string
  }

  export type SubExpertiseModelCreateOrConnectWithoutBusiness_userInput = {
    where: SubExpertiseModelWhereUniqueInput
    create: XOR<SubExpertiseModelCreateWithoutBusiness_userInput, SubExpertiseModelUncheckedCreateWithoutBusiness_userInput>
  }

  export type SubExpertiseModelCreateManyBusiness_userInputEnvelope = {
    data: Enumerable<SubExpertiseModelCreateManyBusiness_userInput>
    skipDuplicates?: boolean
  }

  export type OauthAccessorModelCreateWithoutBusiness_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
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
    customer?: CustomerModelCreateNestedOneWithoutOauth_accessorInput
  }

  export type OauthAccessorModelUncheckedCreateWithoutBusiness_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    oauth_type: OauthType
    oauth_sub: string
    customer_id?: string | null
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
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerModelUpdateOneWithoutBaseNestedInput
    agreement_acceptances?: AgreementAcceptanceModelUpdateManyWithoutUserNestedInput
  }

  export type UserModelUncheckedUpdateWithoutBusiness_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    properties?: REProertyModelUpdateManyWithoutAgentNestedInput
  }

  export type REAgentModelUncheckedUpdateWithoutBaseInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_num?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    properties?: REProertyModelUncheckedUpdateManyWithoutAgentNestedInput
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

  export type BusinessCertificationImageModelUpsertWithWhereUniqueWithoutBusiness_userInput = {
    where: BusinessCertificationImageModelWhereUniqueInput
    update: XOR<BusinessCertificationImageModelUpdateWithoutBusiness_userInput, BusinessCertificationImageModelUncheckedUpdateWithoutBusiness_userInput>
    create: XOR<BusinessCertificationImageModelCreateWithoutBusiness_userInput, BusinessCertificationImageModelUncheckedCreateWithoutBusiness_userInput>
  }

  export type BusinessCertificationImageModelUpdateWithWhereUniqueWithoutBusiness_userInput = {
    where: BusinessCertificationImageModelWhereUniqueInput
    data: XOR<BusinessCertificationImageModelUpdateWithoutBusiness_userInput, BusinessCertificationImageModelUncheckedUpdateWithoutBusiness_userInput>
  }

  export type BusinessCertificationImageModelUpdateManyWithWhereWithoutBusiness_userInput = {
    where: BusinessCertificationImageModelScalarWhereInput
    data: XOR<BusinessCertificationImageModelUpdateManyMutationInput, BusinessCertificationImageModelUncheckedUpdateManyWithoutCertificationsInput>
  }

  export type BusinessCertificationImageModelScalarWhereInput = {
    AND?: Enumerable<BusinessCertificationImageModelScalarWhereInput>
    OR?: Enumerable<BusinessCertificationImageModelScalarWhereInput>
    NOT?: Enumerable<BusinessCertificationImageModelScalarWhereInput>
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    business_user_id?: StringFilter | string
    url?: StringFilter | string
  }

  export type ExpertSuperCategoryModelUpsertWithoutBusiness_usersInput = {
    update: XOR<ExpertSuperCategoryModelUpdateWithoutBusiness_usersInput, ExpertSuperCategoryModelUncheckedUpdateWithoutBusiness_usersInput>
    create: XOR<ExpertSuperCategoryModelCreateWithoutBusiness_usersInput, ExpertSuperCategoryModelUncheckedCreateWithoutBusiness_usersInput>
  }

  export type ExpertSuperCategoryModelUpdateWithoutBusiness_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    business_type?: EnumExpertBusinessTypeFieldUpdateOperationsInput | ExpertBusinessType
    subs?: ExpertSubCategoryModelUpdateManyWithoutSuperNestedInput
  }

  export type ExpertSuperCategoryModelUncheckedUpdateWithoutBusiness_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    business_type?: EnumExpertBusinessTypeFieldUpdateOperationsInput | ExpertBusinessType
    subs?: ExpertSubCategoryModelUncheckedUpdateManyWithoutSuperNestedInput
  }

  export type SubExpertiseModelUpsertWithWhereUniqueWithoutBusiness_userInput = {
    where: SubExpertiseModelWhereUniqueInput
    update: XOR<SubExpertiseModelUpdateWithoutBusiness_userInput, SubExpertiseModelUncheckedUpdateWithoutBusiness_userInput>
    create: XOR<SubExpertiseModelCreateWithoutBusiness_userInput, SubExpertiseModelUncheckedCreateWithoutBusiness_userInput>
  }

  export type SubExpertiseModelUpdateWithWhereUniqueWithoutBusiness_userInput = {
    where: SubExpertiseModelWhereUniqueInput
    data: XOR<SubExpertiseModelUpdateWithoutBusiness_userInput, SubExpertiseModelUncheckedUpdateWithoutBusiness_userInput>
  }

  export type SubExpertiseModelUpdateManyWithWhereWithoutBusiness_userInput = {
    where: SubExpertiseModelScalarWhereInput
    data: XOR<SubExpertiseModelUpdateManyMutationInput, SubExpertiseModelUncheckedUpdateManyWithoutSub_expertisesInput>
  }

  export type SubExpertiseModelScalarWhereInput = {
    AND?: Enumerable<SubExpertiseModelScalarWhereInput>
    OR?: Enumerable<SubExpertiseModelScalarWhereInput>
    NOT?: Enumerable<SubExpertiseModelScalarWhereInput>
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    sub_category_id?: StringFilter | string
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

  export type BusinessUserModelCreateWithoutRe_agentInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBusiness_userInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationImageModelCreateNestedManyWithoutBusiness_userInput
    super_expertise: ExpertSuperCategoryModelCreateNestedOneWithoutBusiness_usersInput
    sub_expertises?: SubExpertiseModelCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelUncheckedCreateWithoutRe_agentInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
    super_expertise_id: string
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationImageModelUncheckedCreateNestedManyWithoutBusiness_userInput
    sub_expertises?: SubExpertiseModelUncheckedCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelCreateOrConnectWithoutRe_agentInput = {
    where: BusinessUserModelWhereUniqueInput
    create: XOR<BusinessUserModelCreateWithoutRe_agentInput, BusinessUserModelUncheckedCreateWithoutRe_agentInput>
  }

  export type REProertyModelCreateWithoutAgentInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    main_image_url: string
    sub_category: REPropertySubCategoryModelCreateNestedOneWithoutPropertiesInput
  }

  export type REProertyModelUncheckedCreateWithoutAgentInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    main_image_url: string
    sub_category_id: string
  }

  export type REProertyModelCreateOrConnectWithoutAgentInput = {
    where: REProertyModelWhereUniqueInput
    create: XOR<REProertyModelCreateWithoutAgentInput, REProertyModelUncheckedCreateWithoutAgentInput>
  }

  export type REProertyModelCreateManyAgentInputEnvelope = {
    data: Enumerable<REProertyModelCreateManyAgentInput>
    skipDuplicates?: boolean
  }

  export type BusinessUserModelUpsertWithoutRe_agentInput = {
    update: XOR<BusinessUserModelUpdateWithoutRe_agentInput, BusinessUserModelUncheckedUpdateWithoutRe_agentInput>
    create: XOR<BusinessUserModelCreateWithoutRe_agentInput, BusinessUserModelUncheckedCreateWithoutRe_agentInput>
  }

  export type BusinessUserModelUpdateWithoutRe_agentInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBusiness_userNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationImageModelUpdateManyWithoutBusiness_userNestedInput
    super_expertise?: ExpertSuperCategoryModelUpdateOneRequiredWithoutBusiness_usersNestedInput
    sub_expertises?: SubExpertiseModelUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserModelUncheckedUpdateWithoutRe_agentInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
    super_expertise_id?: StringFieldUpdateOperationsInput | string
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationImageModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    sub_expertises?: SubExpertiseModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUncheckedUpdateManyWithoutBusiness_userNestedInput
  }

  export type REProertyModelUpsertWithWhereUniqueWithoutAgentInput = {
    where: REProertyModelWhereUniqueInput
    update: XOR<REProertyModelUpdateWithoutAgentInput, REProertyModelUncheckedUpdateWithoutAgentInput>
    create: XOR<REProertyModelCreateWithoutAgentInput, REProertyModelUncheckedCreateWithoutAgentInput>
  }

  export type REProertyModelUpdateWithWhereUniqueWithoutAgentInput = {
    where: REProertyModelWhereUniqueInput
    data: XOR<REProertyModelUpdateWithoutAgentInput, REProertyModelUncheckedUpdateWithoutAgentInput>
  }

  export type REProertyModelUpdateManyWithWhereWithoutAgentInput = {
    where: REProertyModelScalarWhereInput
    data: XOR<REProertyModelUpdateManyMutationInput, REProertyModelUncheckedUpdateManyWithoutPropertiesInput>
  }

  export type REProertyModelScalarWhereInput = {
    AND?: Enumerable<REProertyModelScalarWhereInput>
    OR?: Enumerable<REProertyModelScalarWhereInput>
    NOT?: Enumerable<REProertyModelScalarWhereInput>
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    name?: StringFilter | string
    main_image_url?: StringFilter | string
    agent_id?: StringFilter | string
    sub_category_id?: StringFilter | string
  }

  export type BusinessUserModelCreateWithoutHs_providerInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBusiness_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationImageModelCreateNestedManyWithoutBusiness_userInput
    super_expertise: ExpertSuperCategoryModelCreateNestedOneWithoutBusiness_usersInput
    sub_expertises?: SubExpertiseModelCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelUncheckedCreateWithoutHs_providerInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
    super_expertise_id: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationImageModelUncheckedCreateNestedManyWithoutBusiness_userInput
    sub_expertises?: SubExpertiseModelUncheckedCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelCreateOrConnectWithoutHs_providerInput = {
    where: BusinessUserModelWhereUniqueInput
    create: XOR<BusinessUserModelCreateWithoutHs_providerInput, BusinessUserModelUncheckedCreateWithoutHs_providerInput>
  }

  export type HSIntroductionImageModelCreateWithoutHs_providerInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    url: string
  }

  export type HSIntroductionImageModelUncheckedCreateWithoutHs_providerInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    url: string
  }

  export type HSIntroductionImageModelCreateOrConnectWithoutHs_providerInput = {
    where: HSIntroductionImageModelWhereUniqueInput
    create: XOR<HSIntroductionImageModelCreateWithoutHs_providerInput, HSIntroductionImageModelUncheckedCreateWithoutHs_providerInput>
  }

  export type HSIntroductionImageModelCreateManyHs_providerInputEnvelope = {
    data: Enumerable<HSIntroductionImageModelCreateManyHs_providerInput>
    skipDuplicates?: boolean
  }

  export type BusinessUserModelUpsertWithoutHs_providerInput = {
    update: XOR<BusinessUserModelUpdateWithoutHs_providerInput, BusinessUserModelUncheckedUpdateWithoutHs_providerInput>
    create: XOR<BusinessUserModelCreateWithoutHs_providerInput, BusinessUserModelUncheckedCreateWithoutHs_providerInput>
  }

  export type BusinessUserModelUpdateWithoutHs_providerInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBusiness_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationImageModelUpdateManyWithoutBusiness_userNestedInput
    super_expertise?: ExpertSuperCategoryModelUpdateOneRequiredWithoutBusiness_usersNestedInput
    sub_expertises?: SubExpertiseModelUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserModelUncheckedUpdateWithoutHs_providerInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
    super_expertise_id?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationImageModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    sub_expertises?: SubExpertiseModelUncheckedUpdateManyWithoutBusiness_userNestedInput
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
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    hs_provider_id?: StringFilter | string
    url?: StringFilter | string
  }

  export type BusinessUserModelCreateWithoutCertificationsInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBusiness_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    super_expertise: ExpertSuperCategoryModelCreateNestedOneWithoutBusiness_usersInput
    sub_expertises?: SubExpertiseModelCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelUncheckedCreateWithoutCertificationsInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
    super_expertise_id: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    sub_expertises?: SubExpertiseModelUncheckedCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelCreateOrConnectWithoutCertificationsInput = {
    where: BusinessUserModelWhereUniqueInput
    create: XOR<BusinessUserModelCreateWithoutCertificationsInput, BusinessUserModelUncheckedCreateWithoutCertificationsInput>
  }

  export type BusinessUserModelUpsertWithoutCertificationsInput = {
    update: XOR<BusinessUserModelUpdateWithoutCertificationsInput, BusinessUserModelUncheckedUpdateWithoutCertificationsInput>
    create: XOR<BusinessUserModelCreateWithoutCertificationsInput, BusinessUserModelUncheckedCreateWithoutCertificationsInput>
  }

  export type BusinessUserModelUpdateWithoutCertificationsInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBusiness_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    super_expertise?: ExpertSuperCategoryModelUpdateOneRequiredWithoutBusiness_usersNestedInput
    sub_expertises?: SubExpertiseModelUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserModelUncheckedUpdateWithoutCertificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
    super_expertise_id?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    sub_expertises?: SubExpertiseModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUncheckedUpdateManyWithoutBusiness_userNestedInput
  }

  export type HSProviderModelCreateWithoutIntroduction_imagesInput = {
    business_registration_num: string
    base: BusinessUserModelCreateNestedOneWithoutHs_providerInput
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
    base?: BusinessUserModelUpdateOneRequiredWithoutHs_providerNestedInput
  }

  export type HSProviderModelUncheckedUpdateWithoutIntroduction_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_registration_num?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertSubCategoryModelCreateWithoutExpertisesInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    super: ExpertSuperCategoryModelCreateNestedOneWithoutSubsInput
  }

  export type ExpertSubCategoryModelUncheckedCreateWithoutExpertisesInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    super_id: string
  }

  export type ExpertSubCategoryModelCreateOrConnectWithoutExpertisesInput = {
    where: ExpertSubCategoryModelWhereUniqueInput
    create: XOR<ExpertSubCategoryModelCreateWithoutExpertisesInput, ExpertSubCategoryModelUncheckedCreateWithoutExpertisesInput>
  }

  export type BusinessUserModelCreateWithoutSub_expertisesInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBusiness_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationImageModelCreateNestedManyWithoutBusiness_userInput
    super_expertise: ExpertSuperCategoryModelCreateNestedOneWithoutBusiness_usersInput
    oauth_accessor?: OauthAccessorModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelUncheckedCreateWithoutSub_expertisesInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
    super_expertise_id: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationImageModelUncheckedCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelCreateOrConnectWithoutSub_expertisesInput = {
    where: BusinessUserModelWhereUniqueInput
    create: XOR<BusinessUserModelCreateWithoutSub_expertisesInput, BusinessUserModelUncheckedCreateWithoutSub_expertisesInput>
  }

  export type ExpertSubCategoryModelUpsertWithoutExpertisesInput = {
    update: XOR<ExpertSubCategoryModelUpdateWithoutExpertisesInput, ExpertSubCategoryModelUncheckedUpdateWithoutExpertisesInput>
    create: XOR<ExpertSubCategoryModelCreateWithoutExpertisesInput, ExpertSubCategoryModelUncheckedCreateWithoutExpertisesInput>
  }

  export type ExpertSubCategoryModelUpdateWithoutExpertisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    super?: ExpertSuperCategoryModelUpdateOneRequiredWithoutSubsNestedInput
  }

  export type ExpertSubCategoryModelUncheckedUpdateWithoutExpertisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    super_id?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessUserModelUpsertWithoutSub_expertisesInput = {
    update: XOR<BusinessUserModelUpdateWithoutSub_expertisesInput, BusinessUserModelUncheckedUpdateWithoutSub_expertisesInput>
    create: XOR<BusinessUserModelCreateWithoutSub_expertisesInput, BusinessUserModelUncheckedCreateWithoutSub_expertisesInput>
  }

  export type BusinessUserModelUpdateWithoutSub_expertisesInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBusiness_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationImageModelUpdateManyWithoutBusiness_userNestedInput
    super_expertise?: ExpertSuperCategoryModelUpdateOneRequiredWithoutBusiness_usersNestedInput
    oauth_accessor?: OauthAccessorModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserModelUncheckedUpdateWithoutSub_expertisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
    super_expertise_id?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationImageModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUncheckedUpdateManyWithoutBusiness_userNestedInput
  }

  export type ExpertSuperCategoryModelCreateWithoutSubsInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    business_type: ExpertBusinessType
    business_users?: BusinessUserModelCreateNestedManyWithoutSuper_expertiseInput
  }

  export type ExpertSuperCategoryModelUncheckedCreateWithoutSubsInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    business_type: ExpertBusinessType
    business_users?: BusinessUserModelUncheckedCreateNestedManyWithoutSuper_expertiseInput
  }

  export type ExpertSuperCategoryModelCreateOrConnectWithoutSubsInput = {
    where: ExpertSuperCategoryModelWhereUniqueInput
    create: XOR<ExpertSuperCategoryModelCreateWithoutSubsInput, ExpertSuperCategoryModelUncheckedCreateWithoutSubsInput>
  }

  export type SubExpertiseModelCreateWithoutCategoryInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    business_user: BusinessUserModelCreateNestedOneWithoutSub_expertisesInput
  }

  export type SubExpertiseModelUncheckedCreateWithoutCategoryInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    business_user_id: string
  }

  export type SubExpertiseModelCreateOrConnectWithoutCategoryInput = {
    where: SubExpertiseModelWhereUniqueInput
    create: XOR<SubExpertiseModelCreateWithoutCategoryInput, SubExpertiseModelUncheckedCreateWithoutCategoryInput>
  }

  export type SubExpertiseModelCreateManyCategoryInputEnvelope = {
    data: Enumerable<SubExpertiseModelCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type ExpertSuperCategoryModelUpsertWithoutSubsInput = {
    update: XOR<ExpertSuperCategoryModelUpdateWithoutSubsInput, ExpertSuperCategoryModelUncheckedUpdateWithoutSubsInput>
    create: XOR<ExpertSuperCategoryModelCreateWithoutSubsInput, ExpertSuperCategoryModelUncheckedCreateWithoutSubsInput>
  }

  export type ExpertSuperCategoryModelUpdateWithoutSubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    business_type?: EnumExpertBusinessTypeFieldUpdateOperationsInput | ExpertBusinessType
    business_users?: BusinessUserModelUpdateManyWithoutSuper_expertiseNestedInput
  }

  export type ExpertSuperCategoryModelUncheckedUpdateWithoutSubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    business_type?: EnumExpertBusinessTypeFieldUpdateOperationsInput | ExpertBusinessType
    business_users?: BusinessUserModelUncheckedUpdateManyWithoutSuper_expertiseNestedInput
  }

  export type SubExpertiseModelUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SubExpertiseModelWhereUniqueInput
    update: XOR<SubExpertiseModelUpdateWithoutCategoryInput, SubExpertiseModelUncheckedUpdateWithoutCategoryInput>
    create: XOR<SubExpertiseModelCreateWithoutCategoryInput, SubExpertiseModelUncheckedCreateWithoutCategoryInput>
  }

  export type SubExpertiseModelUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SubExpertiseModelWhereUniqueInput
    data: XOR<SubExpertiseModelUpdateWithoutCategoryInput, SubExpertiseModelUncheckedUpdateWithoutCategoryInput>
  }

  export type SubExpertiseModelUpdateManyWithWhereWithoutCategoryInput = {
    where: SubExpertiseModelScalarWhereInput
    data: XOR<SubExpertiseModelUpdateManyMutationInput, SubExpertiseModelUncheckedUpdateManyWithoutExpertisesInput>
  }

  export type ExpertSubCategoryModelCreateWithoutSuperInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    expertises?: SubExpertiseModelCreateNestedManyWithoutCategoryInput
  }

  export type ExpertSubCategoryModelUncheckedCreateWithoutSuperInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    expertises?: SubExpertiseModelUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ExpertSubCategoryModelCreateOrConnectWithoutSuperInput = {
    where: ExpertSubCategoryModelWhereUniqueInput
    create: XOR<ExpertSubCategoryModelCreateWithoutSuperInput, ExpertSubCategoryModelUncheckedCreateWithoutSuperInput>
  }

  export type ExpertSubCategoryModelCreateManySuperInputEnvelope = {
    data: Enumerable<ExpertSubCategoryModelCreateManySuperInput>
    skipDuplicates?: boolean
  }

  export type BusinessUserModelCreateWithoutSuper_expertiseInput = {
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
    base: UserModelCreateNestedOneWithoutBusiness_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationImageModelCreateNestedManyWithoutBusiness_userInput
    sub_expertises?: SubExpertiseModelCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelUncheckedCreateWithoutSuper_expertiseInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_provider?: HSProviderModelUncheckedCreateNestedOneWithoutBaseInput
    certifications?: BusinessCertificationImageModelUncheckedCreateNestedManyWithoutBusiness_userInput
    sub_expertises?: SubExpertiseModelUncheckedCreateNestedManyWithoutBusiness_userInput
    oauth_accessor?: OauthAccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelCreateOrConnectWithoutSuper_expertiseInput = {
    where: BusinessUserModelWhereUniqueInput
    create: XOR<BusinessUserModelCreateWithoutSuper_expertiseInput, BusinessUserModelUncheckedCreateWithoutSuper_expertiseInput>
  }

  export type BusinessUserModelCreateManySuper_expertiseInputEnvelope = {
    data: Enumerable<BusinessUserModelCreateManySuper_expertiseInput>
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
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    name?: StringFilter | string
    super_id?: StringFilter | string
  }

  export type BusinessUserModelUpsertWithWhereUniqueWithoutSuper_expertiseInput = {
    where: BusinessUserModelWhereUniqueInput
    update: XOR<BusinessUserModelUpdateWithoutSuper_expertiseInput, BusinessUserModelUncheckedUpdateWithoutSuper_expertiseInput>
    create: XOR<BusinessUserModelCreateWithoutSuper_expertiseInput, BusinessUserModelUncheckedCreateWithoutSuper_expertiseInput>
  }

  export type BusinessUserModelUpdateWithWhereUniqueWithoutSuper_expertiseInput = {
    where: BusinessUserModelWhereUniqueInput
    data: XOR<BusinessUserModelUpdateWithoutSuper_expertiseInput, BusinessUserModelUncheckedUpdateWithoutSuper_expertiseInput>
  }

  export type BusinessUserModelUpdateManyWithWhereWithoutSuper_expertiseInput = {
    where: BusinessUserModelScalarWhereInput
    data: XOR<BusinessUserModelUpdateManyMutationInput, BusinessUserModelUncheckedUpdateManyWithoutBusiness_usersInput>
  }

  export type BusinessUserModelScalarWhereInput = {
    AND?: Enumerable<BusinessUserModelScalarWhereInput>
    OR?: Enumerable<BusinessUserModelScalarWhereInput>
    NOT?: Enumerable<BusinessUserModelScalarWhereInput>
    id?: StringFilter | string
    is_verified?: BoolFilter | boolean
    introduction_title?: StringFilter | string
    introduction_content?: StringFilter | string
    phone?: StringFilter | string
    address_first?: StringFilter | string
    address_second?: StringNullableFilter | string | null
    profile_image_url?: StringFilter | string
    super_expertise_id?: StringFilter | string
  }

  export type AgreementAcceptanceModelCreateWithoutAgreementInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    user: UserModelCreateNestedOneWithoutAgreement_acceptancesInput
  }

  export type AgreementAcceptanceModelUncheckedCreateWithoutAgreementInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
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
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    email?: string | null
    customer?: CustomerModelCreateNestedOneWithoutBaseInput
    business_user?: BusinessUserModelCreateNestedOneWithoutBaseInput
  }

  export type UserModelUncheckedCreateWithoutAgreement_acceptancesInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    email?: string | null
    customer?: CustomerModelUncheckedCreateNestedOneWithoutBaseInput
    business_user?: BusinessUserModelUncheckedCreateNestedOneWithoutBaseInput
  }

  export type UserModelCreateOrConnectWithoutAgreement_acceptancesInput = {
    where: UserModelWhereUniqueInput
    create: XOR<UserModelCreateWithoutAgreement_acceptancesInput, UserModelUncheckedCreateWithoutAgreement_acceptancesInput>
  }

  export type AgreementModelCreateWithoutAcceptancesInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    title: string
    content: string
    user_type: AgreementUserType
  }

  export type AgreementModelUncheckedCreateWithoutAcceptancesInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
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
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerModelUpdateOneWithoutBaseNestedInput
    business_user?: BusinessUserModelUpdateOneWithoutBaseNestedInput
  }

  export type UserModelUncheckedUpdateWithoutAgreement_acceptancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerModelUncheckedUpdateOneWithoutBaseNestedInput
    business_user?: BusinessUserModelUncheckedUpdateOneWithoutBaseNestedInput
  }

  export type AgreementModelUpsertWithoutAcceptancesInput = {
    update: XOR<AgreementModelUpdateWithoutAcceptancesInput, AgreementModelUncheckedUpdateWithoutAcceptancesInput>
    create: XOR<AgreementModelCreateWithoutAcceptancesInput, AgreementModelUncheckedCreateWithoutAcceptancesInput>
  }

  export type AgreementModelUpdateWithoutAcceptancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_type?: EnumAgreementUserTypeFieldUpdateOperationsInput | AgreementUserType
  }

  export type AgreementModelUncheckedUpdateWithoutAcceptancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_type?: EnumAgreementUserTypeFieldUpdateOperationsInput | AgreementUserType
  }

  export type REAgentModelCreateWithoutPropertiesInput = {
    is_licensed: boolean
    re_num: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    base: BusinessUserModelCreateNestedOneWithoutRe_agentInput
  }

  export type REAgentModelUncheckedCreateWithoutPropertiesInput = {
    id: string
    is_licensed: boolean
    re_num: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
  }

  export type REAgentModelCreateOrConnectWithoutPropertiesInput = {
    where: REAgentModelWhereUniqueInput
    create: XOR<REAgentModelCreateWithoutPropertiesInput, REAgentModelUncheckedCreateWithoutPropertiesInput>
  }

  export type REPropertySubCategoryModelCreateWithoutPropertiesInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    super_category: REPropertySuperCategoryModelCreateNestedOneWithoutSub_categoriesInput
  }

  export type REPropertySubCategoryModelUncheckedCreateWithoutPropertiesInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    super_category_id: string
  }

  export type REPropertySubCategoryModelCreateOrConnectWithoutPropertiesInput = {
    where: REPropertySubCategoryModelWhereUniqueInput
    create: XOR<REPropertySubCategoryModelCreateWithoutPropertiesInput, REPropertySubCategoryModelUncheckedCreateWithoutPropertiesInput>
  }

  export type REAgentModelUpsertWithoutPropertiesInput = {
    update: XOR<REAgentModelUpdateWithoutPropertiesInput, REAgentModelUncheckedUpdateWithoutPropertiesInput>
    create: XOR<REAgentModelCreateWithoutPropertiesInput, REAgentModelUncheckedCreateWithoutPropertiesInput>
  }

  export type REAgentModelUpdateWithoutPropertiesInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_num?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    base?: BusinessUserModelUpdateOneRequiredWithoutRe_agentNestedInput
  }

  export type REAgentModelUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_num?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
  }

  export type REPropertySubCategoryModelUpsertWithoutPropertiesInput = {
    update: XOR<REPropertySubCategoryModelUpdateWithoutPropertiesInput, REPropertySubCategoryModelUncheckedUpdateWithoutPropertiesInput>
    create: XOR<REPropertySubCategoryModelCreateWithoutPropertiesInput, REPropertySubCategoryModelUncheckedCreateWithoutPropertiesInput>
  }

  export type REPropertySubCategoryModelUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    super_category?: REPropertySuperCategoryModelUpdateOneRequiredWithoutSub_categoriesNestedInput
  }

  export type REPropertySubCategoryModelUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    super_category_id?: StringFieldUpdateOperationsInput | string
  }

  export type REPropertySubCategoryModelCreateWithoutSuper_categoryInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    properties?: REProertyModelCreateNestedManyWithoutSub_categoryInput
  }

  export type REPropertySubCategoryModelUncheckedCreateWithoutSuper_categoryInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    properties?: REProertyModelUncheckedCreateNestedManyWithoutSub_categoryInput
  }

  export type REPropertySubCategoryModelCreateOrConnectWithoutSuper_categoryInput = {
    where: REPropertySubCategoryModelWhereUniqueInput
    create: XOR<REPropertySubCategoryModelCreateWithoutSuper_categoryInput, REPropertySubCategoryModelUncheckedCreateWithoutSuper_categoryInput>
  }

  export type REPropertySubCategoryModelCreateManySuper_categoryInputEnvelope = {
    data: Enumerable<REPropertySubCategoryModelCreateManySuper_categoryInput>
    skipDuplicates?: boolean
  }

  export type REPropertySubCategoryModelUpsertWithWhereUniqueWithoutSuper_categoryInput = {
    where: REPropertySubCategoryModelWhereUniqueInput
    update: XOR<REPropertySubCategoryModelUpdateWithoutSuper_categoryInput, REPropertySubCategoryModelUncheckedUpdateWithoutSuper_categoryInput>
    create: XOR<REPropertySubCategoryModelCreateWithoutSuper_categoryInput, REPropertySubCategoryModelUncheckedCreateWithoutSuper_categoryInput>
  }

  export type REPropertySubCategoryModelUpdateWithWhereUniqueWithoutSuper_categoryInput = {
    where: REPropertySubCategoryModelWhereUniqueInput
    data: XOR<REPropertySubCategoryModelUpdateWithoutSuper_categoryInput, REPropertySubCategoryModelUncheckedUpdateWithoutSuper_categoryInput>
  }

  export type REPropertySubCategoryModelUpdateManyWithWhereWithoutSuper_categoryInput = {
    where: REPropertySubCategoryModelScalarWhereInput
    data: XOR<REPropertySubCategoryModelUpdateManyMutationInput, REPropertySubCategoryModelUncheckedUpdateManyWithoutSub_categoriesInput>
  }

  export type REPropertySubCategoryModelScalarWhereInput = {
    AND?: Enumerable<REPropertySubCategoryModelScalarWhereInput>
    OR?: Enumerable<REPropertySubCategoryModelScalarWhereInput>
    NOT?: Enumerable<REPropertySubCategoryModelScalarWhereInput>
    id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    is_deleted?: BoolFilter | boolean
    deleted_at?: DateTimeNullableFilter | Date | string | null
    name?: StringFilter | string
    super_category_id?: StringFilter | string
  }

  export type REPropertySuperCategoryModelCreateWithoutSub_categoriesInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
  }

  export type REPropertySuperCategoryModelUncheckedCreateWithoutSub_categoriesInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
  }

  export type REPropertySuperCategoryModelCreateOrConnectWithoutSub_categoriesInput = {
    where: REPropertySuperCategoryModelWhereUniqueInput
    create: XOR<REPropertySuperCategoryModelCreateWithoutSub_categoriesInput, REPropertySuperCategoryModelUncheckedCreateWithoutSub_categoriesInput>
  }

  export type REProertyModelCreateWithoutSub_categoryInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    main_image_url: string
    agent: REAgentModelCreateNestedOneWithoutPropertiesInput
  }

  export type REProertyModelUncheckedCreateWithoutSub_categoryInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    main_image_url: string
    agent_id: string
  }

  export type REProertyModelCreateOrConnectWithoutSub_categoryInput = {
    where: REProertyModelWhereUniqueInput
    create: XOR<REProertyModelCreateWithoutSub_categoryInput, REProertyModelUncheckedCreateWithoutSub_categoryInput>
  }

  export type REProertyModelCreateManySub_categoryInputEnvelope = {
    data: Enumerable<REProertyModelCreateManySub_categoryInput>
    skipDuplicates?: boolean
  }

  export type REPropertySuperCategoryModelUpsertWithoutSub_categoriesInput = {
    update: XOR<REPropertySuperCategoryModelUpdateWithoutSub_categoriesInput, REPropertySuperCategoryModelUncheckedUpdateWithoutSub_categoriesInput>
    create: XOR<REPropertySuperCategoryModelCreateWithoutSub_categoriesInput, REPropertySuperCategoryModelUncheckedCreateWithoutSub_categoriesInput>
  }

  export type REPropertySuperCategoryModelUpdateWithoutSub_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type REPropertySuperCategoryModelUncheckedUpdateWithoutSub_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type REProertyModelUpsertWithWhereUniqueWithoutSub_categoryInput = {
    where: REProertyModelWhereUniqueInput
    update: XOR<REProertyModelUpdateWithoutSub_categoryInput, REProertyModelUncheckedUpdateWithoutSub_categoryInput>
    create: XOR<REProertyModelCreateWithoutSub_categoryInput, REProertyModelUncheckedCreateWithoutSub_categoryInput>
  }

  export type REProertyModelUpdateWithWhereUniqueWithoutSub_categoryInput = {
    where: REProertyModelWhereUniqueInput
    data: XOR<REProertyModelUpdateWithoutSub_categoryInput, REProertyModelUncheckedUpdateWithoutSub_categoryInput>
  }

  export type REProertyModelUpdateManyWithWhereWithoutSub_categoryInput = {
    where: REProertyModelScalarWhereInput
    data: XOR<REProertyModelUpdateManyMutationInput, REProertyModelUncheckedUpdateManyWithoutPropertiesInput>
  }

  export type AgreementAcceptanceModelCreateManyUserInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    agreement_id: string
  }

  export type AgreementAcceptanceModelUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agreement?: AgreementModelUpdateOneRequiredWithoutAcceptancesNestedInput
  }

  export type AgreementAcceptanceModelUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agreement_id?: StringFieldUpdateOperationsInput | string
  }

  export type AgreementAcceptanceModelUncheckedUpdateManyWithoutAgreement_acceptancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agreement_id?: StringFieldUpdateOperationsInput | string
  }

  export type OauthAccessorModelCreateManyCustomerInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    oauth_type: OauthType
    oauth_sub: string
    business_user_id?: string | null
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
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    business_user?: BusinessUserModelUpdateOneWithoutOauth_accessorNestedInput
  }

  export type OauthAccessorModelUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    business_user_id?: NullableStringFieldUpdateOperationsInput | string | null
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
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    business_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessCertificationImageModelCreateManyBusiness_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    url: string
  }

  export type SubExpertiseModelCreateManyBusiness_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    sub_category_id: string
  }

  export type OauthAccessorModelCreateManyBusiness_userInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    oauth_type: OauthType
    oauth_sub: string
    customer_id?: string | null
    name?: string | null
    email?: string | null
    phone?: string | null
    profile_image_url?: string | null
    birth?: string | null
    gender?: GenderType | null
    address_first?: string | null
    address_second?: string | null
  }

  export type BusinessCertificationImageModelUpdateWithoutBusiness_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCertificationImageModelUncheckedUpdateWithoutBusiness_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessCertificationImageModelUncheckedUpdateManyWithoutCertificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SubExpertiseModelUpdateWithoutBusiness_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: ExpertSubCategoryModelUpdateOneRequiredWithoutExpertisesNestedInput
  }

  export type SubExpertiseModelUncheckedUpdateWithoutBusiness_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sub_category_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubExpertiseModelUncheckedUpdateManyWithoutSub_expertisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sub_category_id?: StringFieldUpdateOperationsInput | string
  }

  export type OauthAccessorModelUpdateWithoutBusiness_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    customer?: CustomerModelUpdateOneWithoutOauth_accessorNestedInput
  }

  export type OauthAccessorModelUncheckedUpdateWithoutBusiness_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    oauth_sub?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type REProertyModelCreateManyAgentInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    main_image_url: string
    sub_category_id: string
  }

  export type REProertyModelUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    main_image_url?: StringFieldUpdateOperationsInput | string
    sub_category?: REPropertySubCategoryModelUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type REProertyModelUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    main_image_url?: StringFieldUpdateOperationsInput | string
    sub_category_id?: StringFieldUpdateOperationsInput | string
  }

  export type REProertyModelUncheckedUpdateManyWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    main_image_url?: StringFieldUpdateOperationsInput | string
    sub_category_id?: StringFieldUpdateOperationsInput | string
  }

  export type HSIntroductionImageModelCreateManyHs_providerInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    url: string
  }

  export type HSIntroductionImageModelUpdateWithoutHs_providerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
  }

  export type HSIntroductionImageModelUncheckedUpdateWithoutHs_providerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
  }

  export type HSIntroductionImageModelUncheckedUpdateManyWithoutIntroduction_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SubExpertiseModelCreateManyCategoryInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    business_user_id: string
  }

  export type SubExpertiseModelUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business_user?: BusinessUserModelUpdateOneRequiredWithoutSub_expertisesNestedInput
  }

  export type SubExpertiseModelUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubExpertiseModelUncheckedUpdateManyWithoutExpertisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ExpertSubCategoryModelCreateManySuperInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
  }

  export type BusinessUserModelCreateManySuper_expertiseInput = {
    id: string
    is_verified: boolean
    introduction_title: string
    introduction_content: string
    phone: string
    address_first: string
    address_second?: string | null
    profile_image_url: string
  }

  export type ExpertSubCategoryModelUpdateWithoutSuperInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    expertises?: SubExpertiseModelUpdateManyWithoutCategoryNestedInput
  }

  export type ExpertSubCategoryModelUncheckedUpdateWithoutSuperInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    expertises?: SubExpertiseModelUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ExpertSubCategoryModelUncheckedUpdateManyWithoutSubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessUserModelUpdateWithoutSuper_expertiseInput = {
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBusiness_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationImageModelUpdateManyWithoutBusiness_userNestedInput
    sub_expertises?: SubExpertiseModelUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserModelUncheckedUpdateWithoutSuper_expertiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_provider?: HSProviderModelUncheckedUpdateOneWithoutBaseNestedInput
    certifications?: BusinessCertificationImageModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    sub_expertises?: SubExpertiseModelUncheckedUpdateManyWithoutBusiness_userNestedInput
    oauth_accessor?: OauthAccessorModelUncheckedUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserModelUncheckedUpdateManyWithoutBusiness_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url?: StringFieldUpdateOperationsInput | string
  }

  export type AgreementAcceptanceModelCreateManyAgreementInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    user_id: string
  }

  export type AgreementAcceptanceModelUpdateWithoutAgreementInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserModelUpdateOneRequiredWithoutAgreement_acceptancesNestedInput
  }

  export type AgreementAcceptanceModelUncheckedUpdateWithoutAgreementInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type AgreementAcceptanceModelUncheckedUpdateManyWithoutAcceptancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type REPropertySubCategoryModelCreateManySuper_categoryInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
  }

  export type REPropertySubCategoryModelUpdateWithoutSuper_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    properties?: REProertyModelUpdateManyWithoutSub_categoryNestedInput
  }

  export type REPropertySubCategoryModelUncheckedUpdateWithoutSuper_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    properties?: REProertyModelUncheckedUpdateManyWithoutSub_categoryNestedInput
  }

  export type REPropertySubCategoryModelUncheckedUpdateManyWithoutSub_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type REProertyModelCreateManySub_categoryInput = {
    id: string
    created_at: Date | string
    updated_at: Date | string
    is_deleted: boolean
    deleted_at?: Date | string | null
    name: string
    main_image_url: string
    agent_id: string
  }

  export type REProertyModelUpdateWithoutSub_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    main_image_url?: StringFieldUpdateOperationsInput | string
    agent?: REAgentModelUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type REProertyModelUncheckedUpdateWithoutSub_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    main_image_url?: StringFieldUpdateOperationsInput | string
    agent_id?: StringFieldUpdateOperationsInput | string
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
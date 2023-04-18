
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
 * Model AccessorModel
 * 
 */
export type AccessorModel = {
  id: string
  oauth_sub: string
  oauth_type: OauthType
  customer_id: string | null
  business_user_id: string | null
}

/**
 * Model UserModel
 * 
 */
export type UserModel = {
  created_at: Date
  id: string
  name: string
  phone: string
  email: string | null
  email_verified: boolean
}

/**
 * Model CustomerModel
 * 
 */
export type CustomerModel = {
  id: string
  profile_image_url: string | null
  gender: GenderType | null
  birth: string | null
  address_first: string | null
  address_second: string | null
}

/**
 * Model BusinessUserModel
 * 
 */
export type BusinessUserModel = {
  id: string
  profile_image_url: string
  introduction_title: string
  introduction_content: string
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
  re_address_first: string
  re_address_second: string | null
}

/**
 * Model HSCompanyModel
 * 
 */
export type HSCompanyModel = {
  id: string
  business_num: string
  address_first: string
  address_second: string | null
}

/**
 * Model HSCompanyIntroductionImageModel
 * 
 */
export type HSCompanyIntroductionImageModel = {
  id: string
  url: string
  company_id: string
}

/**
 * Model TempREAgentModel
 * 
 */
export type TempREAgentModel = {
  id: string
  name: string | null
  email: string | null
  email_verified: boolean
  phone: string | null
  phone_verified: boolean
  profile_image_url: string | null
  address_first: string | null
  address_second: string | null
  introduction_title: string | null
  introduction_content: string | null
  is_licensed: boolean | null
  re_num: string | null
  re_name: string | null
  re_phone: string | null
  re_licensed_agent_name: string | null
}

/**
 * Model TempHSCompanyModel
 * 
 */
export type TempHSCompanyModel = {
  id: string
  name: string | null
  email: string | null
  email_verified: boolean
  phone: string | null
  phone_verified: boolean
  profile_image_url: string | null
  address_first: string | null
  address_second: string | null
  introduction_title: string | null
  introduction_content: string | null
  business_num: string | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

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
 * // Fetch zero or more AccessorModels
 * const accessorModels = await prisma.accessorModel.findMany()
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
   * // Fetch zero or more AccessorModels
   * const accessorModels = await prisma.accessorModel.findMany()
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
   * `prisma.accessorModel`: Exposes CRUD operations for the **AccessorModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessorModels
    * const accessorModels = await prisma.accessorModel.findMany()
    * ```
    */
  get accessorModel(): Prisma.AccessorModelDelegate<GlobalReject>;

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
   * `prisma.hSCompanyModel`: Exposes CRUD operations for the **HSCompanyModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HSCompanyModels
    * const hSCompanyModels = await prisma.hSCompanyModel.findMany()
    * ```
    */
  get hSCompanyModel(): Prisma.HSCompanyModelDelegate<GlobalReject>;

  /**
   * `prisma.hSCompanyIntroductionImageModel`: Exposes CRUD operations for the **HSCompanyIntroductionImageModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HSCompanyIntroductionImageModels
    * const hSCompanyIntroductionImageModels = await prisma.hSCompanyIntroductionImageModel.findMany()
    * ```
    */
  get hSCompanyIntroductionImageModel(): Prisma.HSCompanyIntroductionImageModelDelegate<GlobalReject>;

  /**
   * `prisma.tempREAgentModel`: Exposes CRUD operations for the **TempREAgentModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TempREAgentModels
    * const tempREAgentModels = await prisma.tempREAgentModel.findMany()
    * ```
    */
  get tempREAgentModel(): Prisma.TempREAgentModelDelegate<GlobalReject>;

  /**
   * `prisma.tempHSCompanyModel`: Exposes CRUD operations for the **TempHSCompanyModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TempHSCompanyModels
    * const tempHSCompanyModels = await prisma.tempHSCompanyModel.findMany()
    * ```
    */
  get tempHSCompanyModel(): Prisma.TempHSCompanyModelDelegate<GlobalReject>;
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
    AccessorModel: 'AccessorModel',
    UserModel: 'UserModel',
    CustomerModel: 'CustomerModel',
    BusinessUserModel: 'BusinessUserModel',
    REAgentModel: 'REAgentModel',
    HSCompanyModel: 'HSCompanyModel',
    HSCompanyIntroductionImageModel: 'HSCompanyIntroductionImageModel',
    TempREAgentModel: 'TempREAgentModel',
    TempHSCompanyModel: 'TempHSCompanyModel'
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
   * Count Type CustomerModelCountOutputType
   */


  export type CustomerModelCountOutputType = {
    oauth_accessors: number
  }

  export type CustomerModelCountOutputTypeSelect = {
    oauth_accessors?: boolean
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
    oauth_accessors: number
  }

  export type BusinessUserModelCountOutputTypeSelect = {
    oauth_accessors?: boolean
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
   * Count Type HSCompanyModelCountOutputType
   */


  export type HSCompanyModelCountOutputType = {
    introduction_images: number
  }

  export type HSCompanyModelCountOutputTypeSelect = {
    introduction_images?: boolean
  }

  export type HSCompanyModelCountOutputTypeGetPayload<S extends boolean | null | undefined | HSCompanyModelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HSCompanyModelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (HSCompanyModelCountOutputTypeArgs)
    ? HSCompanyModelCountOutputType 
    : S extends { select: any } & (HSCompanyModelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof HSCompanyModelCountOutputType ? HSCompanyModelCountOutputType[P] : never
  } 
      : HSCompanyModelCountOutputType




  // Custom InputTypes

  /**
   * HSCompanyModelCountOutputType without action
   */
  export type HSCompanyModelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyModelCountOutputType
     */
    select?: HSCompanyModelCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model AccessorModel
   */


  export type AggregateAccessorModel = {
    _count: AccessorModelCountAggregateOutputType | null
    _min: AccessorModelMinAggregateOutputType | null
    _max: AccessorModelMaxAggregateOutputType | null
  }

  export type AccessorModelMinAggregateOutputType = {
    id: string | null
    oauth_sub: string | null
    oauth_type: OauthType | null
    customer_id: string | null
    business_user_id: string | null
  }

  export type AccessorModelMaxAggregateOutputType = {
    id: string | null
    oauth_sub: string | null
    oauth_type: OauthType | null
    customer_id: string | null
    business_user_id: string | null
  }

  export type AccessorModelCountAggregateOutputType = {
    id: number
    oauth_sub: number
    oauth_type: number
    customer_id: number
    business_user_id: number
    _all: number
  }


  export type AccessorModelMinAggregateInputType = {
    id?: true
    oauth_sub?: true
    oauth_type?: true
    customer_id?: true
    business_user_id?: true
  }

  export type AccessorModelMaxAggregateInputType = {
    id?: true
    oauth_sub?: true
    oauth_type?: true
    customer_id?: true
    business_user_id?: true
  }

  export type AccessorModelCountAggregateInputType = {
    id?: true
    oauth_sub?: true
    oauth_type?: true
    customer_id?: true
    business_user_id?: true
    _all?: true
  }

  export type AccessorModelAggregateArgs = {
    /**
     * Filter which AccessorModel to aggregate.
     */
    where?: AccessorModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessorModels to fetch.
     */
    orderBy?: Enumerable<AccessorModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessorModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessorModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessorModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessorModels
    **/
    _count?: true | AccessorModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessorModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessorModelMaxAggregateInputType
  }

  export type GetAccessorModelAggregateType<T extends AccessorModelAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessorModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessorModel[P]>
      : GetScalarType<T[P], AggregateAccessorModel[P]>
  }




  export type AccessorModelGroupByArgs = {
    where?: AccessorModelWhereInput
    orderBy?: Enumerable<AccessorModelOrderByWithAggregationInput>
    by: AccessorModelScalarFieldEnum[]
    having?: AccessorModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessorModelCountAggregateInputType | true
    _min?: AccessorModelMinAggregateInputType
    _max?: AccessorModelMaxAggregateInputType
  }


  export type AccessorModelGroupByOutputType = {
    id: string
    oauth_sub: string
    oauth_type: OauthType
    customer_id: string | null
    business_user_id: string | null
    _count: AccessorModelCountAggregateOutputType | null
    _min: AccessorModelMinAggregateOutputType | null
    _max: AccessorModelMaxAggregateOutputType | null
  }

  type GetAccessorModelGroupByPayload<T extends AccessorModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AccessorModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessorModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessorModelGroupByOutputType[P]>
            : GetScalarType<T[P], AccessorModelGroupByOutputType[P]>
        }
      >
    >


  export type AccessorModelSelect = {
    id?: boolean
    oauth_sub?: boolean
    oauth_type?: boolean
    customer_id?: boolean
    business_user_id?: boolean
    customer?: boolean | CustomerModelArgs
    business_user?: boolean | BusinessUserModelArgs
    temp_re_agents?: boolean | TempREAgentModelArgs
    temp_hs_company?: boolean | TempHSCompanyModelArgs
  }


  export type AccessorModelInclude = {
    customer?: boolean | CustomerModelArgs
    business_user?: boolean | BusinessUserModelArgs
    temp_re_agents?: boolean | TempREAgentModelArgs
    temp_hs_company?: boolean | TempHSCompanyModelArgs
  }

  export type AccessorModelGetPayload<S extends boolean | null | undefined | AccessorModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AccessorModel :
    S extends undefined ? never :
    S extends { include: any } & (AccessorModelArgs | AccessorModelFindManyArgs)
    ? AccessorModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'customer' ? CustomerModelGetPayload<S['include'][P]> | null :
        P extends 'business_user' ? BusinessUserModelGetPayload<S['include'][P]> | null :
        P extends 'temp_re_agents' ? TempREAgentModelGetPayload<S['include'][P]> | null :
        P extends 'temp_hs_company' ? TempHSCompanyModelGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (AccessorModelArgs | AccessorModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'customer' ? CustomerModelGetPayload<S['select'][P]> | null :
        P extends 'business_user' ? BusinessUserModelGetPayload<S['select'][P]> | null :
        P extends 'temp_re_agents' ? TempREAgentModelGetPayload<S['select'][P]> | null :
        P extends 'temp_hs_company' ? TempHSCompanyModelGetPayload<S['select'][P]> | null :  P extends keyof AccessorModel ? AccessorModel[P] : never
  } 
      : AccessorModel


  type AccessorModelCountArgs = 
    Omit<AccessorModelFindManyArgs, 'select' | 'include'> & {
      select?: AccessorModelCountAggregateInputType | true
    }

  export interface AccessorModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one AccessorModel that matches the filter.
     * @param {AccessorModelFindUniqueArgs} args - Arguments to find a AccessorModel
     * @example
     * // Get one AccessorModel
     * const accessorModel = await prisma.accessorModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccessorModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccessorModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AccessorModel'> extends True ? Prisma__AccessorModelClient<AccessorModelGetPayload<T>> : Prisma__AccessorModelClient<AccessorModelGetPayload<T> | null, null>

    /**
     * Find one AccessorModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccessorModelFindUniqueOrThrowArgs} args - Arguments to find a AccessorModel
     * @example
     * // Get one AccessorModel
     * const accessorModel = await prisma.accessorModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccessorModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AccessorModelFindUniqueOrThrowArgs>
    ): Prisma__AccessorModelClient<AccessorModelGetPayload<T>>

    /**
     * Find the first AccessorModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessorModelFindFirstArgs} args - Arguments to find a AccessorModel
     * @example
     * // Get one AccessorModel
     * const accessorModel = await prisma.accessorModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccessorModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccessorModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AccessorModel'> extends True ? Prisma__AccessorModelClient<AccessorModelGetPayload<T>> : Prisma__AccessorModelClient<AccessorModelGetPayload<T> | null, null>

    /**
     * Find the first AccessorModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessorModelFindFirstOrThrowArgs} args - Arguments to find a AccessorModel
     * @example
     * // Get one AccessorModel
     * const accessorModel = await prisma.accessorModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccessorModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccessorModelFindFirstOrThrowArgs>
    ): Prisma__AccessorModelClient<AccessorModelGetPayload<T>>

    /**
     * Find zero or more AccessorModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessorModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessorModels
     * const accessorModels = await prisma.accessorModel.findMany()
     * 
     * // Get first 10 AccessorModels
     * const accessorModels = await prisma.accessorModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessorModelWithIdOnly = await prisma.accessorModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccessorModelFindManyArgs>(
      args?: SelectSubset<T, AccessorModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<AccessorModelGetPayload<T>>>

    /**
     * Create a AccessorModel.
     * @param {AccessorModelCreateArgs} args - Arguments to create a AccessorModel.
     * @example
     * // Create one AccessorModel
     * const AccessorModel = await prisma.accessorModel.create({
     *   data: {
     *     // ... data to create a AccessorModel
     *   }
     * })
     * 
    **/
    create<T extends AccessorModelCreateArgs>(
      args: SelectSubset<T, AccessorModelCreateArgs>
    ): Prisma__AccessorModelClient<AccessorModelGetPayload<T>>

    /**
     * Create many AccessorModels.
     *     @param {AccessorModelCreateManyArgs} args - Arguments to create many AccessorModels.
     *     @example
     *     // Create many AccessorModels
     *     const accessorModel = await prisma.accessorModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccessorModelCreateManyArgs>(
      args?: SelectSubset<T, AccessorModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccessorModel.
     * @param {AccessorModelDeleteArgs} args - Arguments to delete one AccessorModel.
     * @example
     * // Delete one AccessorModel
     * const AccessorModel = await prisma.accessorModel.delete({
     *   where: {
     *     // ... filter to delete one AccessorModel
     *   }
     * })
     * 
    **/
    delete<T extends AccessorModelDeleteArgs>(
      args: SelectSubset<T, AccessorModelDeleteArgs>
    ): Prisma__AccessorModelClient<AccessorModelGetPayload<T>>

    /**
     * Update one AccessorModel.
     * @param {AccessorModelUpdateArgs} args - Arguments to update one AccessorModel.
     * @example
     * // Update one AccessorModel
     * const accessorModel = await prisma.accessorModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccessorModelUpdateArgs>(
      args: SelectSubset<T, AccessorModelUpdateArgs>
    ): Prisma__AccessorModelClient<AccessorModelGetPayload<T>>

    /**
     * Delete zero or more AccessorModels.
     * @param {AccessorModelDeleteManyArgs} args - Arguments to filter AccessorModels to delete.
     * @example
     * // Delete a few AccessorModels
     * const { count } = await prisma.accessorModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccessorModelDeleteManyArgs>(
      args?: SelectSubset<T, AccessorModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessorModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessorModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessorModels
     * const accessorModel = await prisma.accessorModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccessorModelUpdateManyArgs>(
      args: SelectSubset<T, AccessorModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccessorModel.
     * @param {AccessorModelUpsertArgs} args - Arguments to update or create a AccessorModel.
     * @example
     * // Update or create a AccessorModel
     * const accessorModel = await prisma.accessorModel.upsert({
     *   create: {
     *     // ... data to create a AccessorModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessorModel we want to update
     *   }
     * })
    **/
    upsert<T extends AccessorModelUpsertArgs>(
      args: SelectSubset<T, AccessorModelUpsertArgs>
    ): Prisma__AccessorModelClient<AccessorModelGetPayload<T>>

    /**
     * Count the number of AccessorModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessorModelCountArgs} args - Arguments to filter AccessorModels to count.
     * @example
     * // Count the number of AccessorModels
     * const count = await prisma.accessorModel.count({
     *   where: {
     *     // ... the filter for the AccessorModels we want to count
     *   }
     * })
    **/
    count<T extends AccessorModelCountArgs>(
      args?: Subset<T, AccessorModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessorModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessorModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessorModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccessorModelAggregateArgs>(args: Subset<T, AccessorModelAggregateArgs>): Prisma.PrismaPromise<GetAccessorModelAggregateType<T>>

    /**
     * Group by AccessorModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessorModelGroupByArgs} args - Group by arguments.
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
      T extends AccessorModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessorModelGroupByArgs['orderBy'] }
        : { orderBy?: AccessorModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccessorModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessorModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessorModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccessorModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    temp_re_agents<T extends TempREAgentModelArgs= {}>(args?: Subset<T, TempREAgentModelArgs>): Prisma__TempREAgentModelClient<TempREAgentModelGetPayload<T> | Null>;

    temp_hs_company<T extends TempHSCompanyModelArgs= {}>(args?: Subset<T, TempHSCompanyModelArgs>): Prisma__TempHSCompanyModelClient<TempHSCompanyModelGetPayload<T> | Null>;

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
   * AccessorModel base type for findUnique actions
   */
  export type AccessorModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AccessorModel
     */
    select?: AccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessorModelInclude | null
    /**
     * Filter, which AccessorModel to fetch.
     */
    where: AccessorModelWhereUniqueInput
  }

  /**
   * AccessorModel findUnique
   */
  export interface AccessorModelFindUniqueArgs extends AccessorModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AccessorModel findUniqueOrThrow
   */
  export type AccessorModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AccessorModel
     */
    select?: AccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessorModelInclude | null
    /**
     * Filter, which AccessorModel to fetch.
     */
    where: AccessorModelWhereUniqueInput
  }


  /**
   * AccessorModel base type for findFirst actions
   */
  export type AccessorModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AccessorModel
     */
    select?: AccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessorModelInclude | null
    /**
     * Filter, which AccessorModel to fetch.
     */
    where?: AccessorModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessorModels to fetch.
     */
    orderBy?: Enumerable<AccessorModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessorModels.
     */
    cursor?: AccessorModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessorModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessorModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessorModels.
     */
    distinct?: Enumerable<AccessorModelScalarFieldEnum>
  }

  /**
   * AccessorModel findFirst
   */
  export interface AccessorModelFindFirstArgs extends AccessorModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AccessorModel findFirstOrThrow
   */
  export type AccessorModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AccessorModel
     */
    select?: AccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessorModelInclude | null
    /**
     * Filter, which AccessorModel to fetch.
     */
    where?: AccessorModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessorModels to fetch.
     */
    orderBy?: Enumerable<AccessorModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessorModels.
     */
    cursor?: AccessorModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessorModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessorModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessorModels.
     */
    distinct?: Enumerable<AccessorModelScalarFieldEnum>
  }


  /**
   * AccessorModel findMany
   */
  export type AccessorModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the AccessorModel
     */
    select?: AccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessorModelInclude | null
    /**
     * Filter, which AccessorModels to fetch.
     */
    where?: AccessorModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessorModels to fetch.
     */
    orderBy?: Enumerable<AccessorModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessorModels.
     */
    cursor?: AccessorModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessorModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessorModels.
     */
    skip?: number
    distinct?: Enumerable<AccessorModelScalarFieldEnum>
  }


  /**
   * AccessorModel create
   */
  export type AccessorModelCreateArgs = {
    /**
     * Select specific fields to fetch from the AccessorModel
     */
    select?: AccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessorModelInclude | null
    /**
     * The data needed to create a AccessorModel.
     */
    data: XOR<AccessorModelCreateInput, AccessorModelUncheckedCreateInput>
  }


  /**
   * AccessorModel createMany
   */
  export type AccessorModelCreateManyArgs = {
    /**
     * The data used to create many AccessorModels.
     */
    data: Enumerable<AccessorModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AccessorModel update
   */
  export type AccessorModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the AccessorModel
     */
    select?: AccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessorModelInclude | null
    /**
     * The data needed to update a AccessorModel.
     */
    data: XOR<AccessorModelUpdateInput, AccessorModelUncheckedUpdateInput>
    /**
     * Choose, which AccessorModel to update.
     */
    where: AccessorModelWhereUniqueInput
  }


  /**
   * AccessorModel updateMany
   */
  export type AccessorModelUpdateManyArgs = {
    /**
     * The data used to update AccessorModels.
     */
    data: XOR<AccessorModelUpdateManyMutationInput, AccessorModelUncheckedUpdateManyInput>
    /**
     * Filter which AccessorModels to update
     */
    where?: AccessorModelWhereInput
  }


  /**
   * AccessorModel upsert
   */
  export type AccessorModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the AccessorModel
     */
    select?: AccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessorModelInclude | null
    /**
     * The filter to search for the AccessorModel to update in case it exists.
     */
    where: AccessorModelWhereUniqueInput
    /**
     * In case the AccessorModel found by the `where` argument doesn't exist, create a new AccessorModel with this data.
     */
    create: XOR<AccessorModelCreateInput, AccessorModelUncheckedCreateInput>
    /**
     * In case the AccessorModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessorModelUpdateInput, AccessorModelUncheckedUpdateInput>
  }


  /**
   * AccessorModel delete
   */
  export type AccessorModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the AccessorModel
     */
    select?: AccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessorModelInclude | null
    /**
     * Filter which AccessorModel to delete.
     */
    where: AccessorModelWhereUniqueInput
  }


  /**
   * AccessorModel deleteMany
   */
  export type AccessorModelDeleteManyArgs = {
    /**
     * Filter which AccessorModels to delete
     */
    where?: AccessorModelWhereInput
  }


  /**
   * AccessorModel without action
   */
  export type AccessorModelArgs = {
    /**
     * Select specific fields to fetch from the AccessorModel
     */
    select?: AccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessorModelInclude | null
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
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    email_verified: boolean | null
  }

  export type UserModelMaxAggregateOutputType = {
    created_at: Date | null
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    email_verified: boolean | null
  }

  export type UserModelCountAggregateOutputType = {
    created_at: number
    id: number
    name: number
    phone: number
    email: number
    email_verified: number
    _all: number
  }


  export type UserModelMinAggregateInputType = {
    created_at?: true
    id?: true
    name?: true
    phone?: true
    email?: true
    email_verified?: true
  }

  export type UserModelMaxAggregateInputType = {
    created_at?: true
    id?: true
    name?: true
    phone?: true
    email?: true
    email_verified?: true
  }

  export type UserModelCountAggregateInputType = {
    created_at?: true
    id?: true
    name?: true
    phone?: true
    email?: true
    email_verified?: true
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
    id: string
    name: string
    phone: string
    email: string | null
    email_verified: boolean
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
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    email_verified?: boolean
    customer?: boolean | CustomerModelArgs
    business_user?: boolean | BusinessUserModelArgs
  }


  export type UserModelInclude = {
    customer?: boolean | CustomerModelArgs
    business_user?: boolean | BusinessUserModelArgs
  }

  export type UserModelGetPayload<S extends boolean | null | undefined | UserModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserModel :
    S extends undefined ? never :
    S extends { include: any } & (UserModelArgs | UserModelFindManyArgs)
    ? UserModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'customer' ? CustomerModelGetPayload<S['include'][P]> | null :
        P extends 'business_user' ? BusinessUserModelGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (UserModelArgs | UserModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'customer' ? CustomerModelGetPayload<S['select'][P]> | null :
        P extends 'business_user' ? BusinessUserModelGetPayload<S['select'][P]> | null :  P extends keyof UserModel ? UserModel[P] : never
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
    profile_image_url: string | null
    gender: GenderType | null
    birth: string | null
    address_first: string | null
    address_second: string | null
  }

  export type CustomerModelMaxAggregateOutputType = {
    id: string | null
    profile_image_url: string | null
    gender: GenderType | null
    birth: string | null
    address_first: string | null
    address_second: string | null
  }

  export type CustomerModelCountAggregateOutputType = {
    id: number
    profile_image_url: number
    gender: number
    birth: number
    address_first: number
    address_second: number
    _all: number
  }


  export type CustomerModelMinAggregateInputType = {
    id?: true
    profile_image_url?: true
    gender?: true
    birth?: true
    address_first?: true
    address_second?: true
  }

  export type CustomerModelMaxAggregateInputType = {
    id?: true
    profile_image_url?: true
    gender?: true
    birth?: true
    address_first?: true
    address_second?: true
  }

  export type CustomerModelCountAggregateInputType = {
    id?: true
    profile_image_url?: true
    gender?: true
    birth?: true
    address_first?: true
    address_second?: true
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
    profile_image_url: string | null
    gender: GenderType | null
    birth: string | null
    address_first: string | null
    address_second: string | null
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
    profile_image_url?: boolean
    gender?: boolean
    birth?: boolean
    address_first?: boolean
    address_second?: boolean
    base?: boolean | UserModelArgs
    oauth_accessors?: boolean | CustomerModel$oauth_accessorsArgs
    _count?: boolean | CustomerModelCountOutputTypeArgs
  }


  export type CustomerModelInclude = {
    base?: boolean | UserModelArgs
    oauth_accessors?: boolean | CustomerModel$oauth_accessorsArgs
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
        P extends 'oauth_accessors' ? Array < AccessorModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? CustomerModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CustomerModelArgs | CustomerModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'base' ? UserModelGetPayload<S['select'][P]> :
        P extends 'oauth_accessors' ? Array < AccessorModelGetPayload<S['select'][P]>>  :
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

    oauth_accessors<T extends CustomerModel$oauth_accessorsArgs= {}>(args?: Subset<T, CustomerModel$oauth_accessorsArgs>): Prisma.PrismaPromise<Array<AccessorModelGetPayload<T>>| Null>;

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
   * CustomerModel.oauth_accessors
   */
  export type CustomerModel$oauth_accessorsArgs = {
    /**
     * Select specific fields to fetch from the AccessorModel
     */
    select?: AccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessorModelInclude | null
    where?: AccessorModelWhereInput
    orderBy?: Enumerable<AccessorModelOrderByWithRelationInput>
    cursor?: AccessorModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AccessorModelScalarFieldEnum>
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
    profile_image_url: string | null
    introduction_title: string | null
    introduction_content: string | null
  }

  export type BusinessUserModelMaxAggregateOutputType = {
    id: string | null
    profile_image_url: string | null
    introduction_title: string | null
    introduction_content: string | null
  }

  export type BusinessUserModelCountAggregateOutputType = {
    id: number
    profile_image_url: number
    introduction_title: number
    introduction_content: number
    _all: number
  }


  export type BusinessUserModelMinAggregateInputType = {
    id?: true
    profile_image_url?: true
    introduction_title?: true
    introduction_content?: true
  }

  export type BusinessUserModelMaxAggregateInputType = {
    id?: true
    profile_image_url?: true
    introduction_title?: true
    introduction_content?: true
  }

  export type BusinessUserModelCountAggregateInputType = {
    id?: true
    profile_image_url?: true
    introduction_title?: true
    introduction_content?: true
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
    profile_image_url: string
    introduction_title: string
    introduction_content: string
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
    profile_image_url?: boolean
    introduction_title?: boolean
    introduction_content?: boolean
    base?: boolean | UserModelArgs
    re_agent?: boolean | REAgentModelArgs
    hs_company?: boolean | HSCompanyModelArgs
    oauth_accessors?: boolean | BusinessUserModel$oauth_accessorsArgs
    _count?: boolean | BusinessUserModelCountOutputTypeArgs
  }


  export type BusinessUserModelInclude = {
    base?: boolean | UserModelArgs
    re_agent?: boolean | REAgentModelArgs
    hs_company?: boolean | HSCompanyModelArgs
    oauth_accessors?: boolean | BusinessUserModel$oauth_accessorsArgs
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
        P extends 'hs_company' ? HSCompanyModelGetPayload<S['include'][P]> | null :
        P extends 'oauth_accessors' ? Array < AccessorModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? BusinessUserModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BusinessUserModelArgs | BusinessUserModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'base' ? UserModelGetPayload<S['select'][P]> :
        P extends 're_agent' ? REAgentModelGetPayload<S['select'][P]> | null :
        P extends 'hs_company' ? HSCompanyModelGetPayload<S['select'][P]> | null :
        P extends 'oauth_accessors' ? Array < AccessorModelGetPayload<S['select'][P]>>  :
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

    hs_company<T extends HSCompanyModelArgs= {}>(args?: Subset<T, HSCompanyModelArgs>): Prisma__HSCompanyModelClient<HSCompanyModelGetPayload<T> | Null>;

    oauth_accessors<T extends BusinessUserModel$oauth_accessorsArgs= {}>(args?: Subset<T, BusinessUserModel$oauth_accessorsArgs>): Prisma.PrismaPromise<Array<AccessorModelGetPayload<T>>| Null>;

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
   * BusinessUserModel.oauth_accessors
   */
  export type BusinessUserModel$oauth_accessorsArgs = {
    /**
     * Select specific fields to fetch from the AccessorModel
     */
    select?: AccessorModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessorModelInclude | null
    where?: AccessorModelWhereInput
    orderBy?: Enumerable<AccessorModelOrderByWithRelationInput>
    cursor?: AccessorModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AccessorModelScalarFieldEnum>
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
    re_address_first: string | null
    re_address_second: string | null
  }

  export type REAgentModelMaxAggregateOutputType = {
    id: string | null
    is_licensed: boolean | null
    re_num: string | null
    re_name: string | null
    re_phone: string | null
    re_licensed_agent_name: string | null
    re_address_first: string | null
    re_address_second: string | null
  }

  export type REAgentModelCountAggregateOutputType = {
    id: number
    is_licensed: number
    re_num: number
    re_name: number
    re_phone: number
    re_licensed_agent_name: number
    re_address_first: number
    re_address_second: number
    _all: number
  }


  export type REAgentModelMinAggregateInputType = {
    id?: true
    is_licensed?: true
    re_num?: true
    re_name?: true
    re_phone?: true
    re_licensed_agent_name?: true
    re_address_first?: true
    re_address_second?: true
  }

  export type REAgentModelMaxAggregateInputType = {
    id?: true
    is_licensed?: true
    re_num?: true
    re_name?: true
    re_phone?: true
    re_licensed_agent_name?: true
    re_address_first?: true
    re_address_second?: true
  }

  export type REAgentModelCountAggregateInputType = {
    id?: true
    is_licensed?: true
    re_num?: true
    re_name?: true
    re_phone?: true
    re_licensed_agent_name?: true
    re_address_first?: true
    re_address_second?: true
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
    re_address_first: string
    re_address_second: string | null
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
    re_address_first?: boolean
    re_address_second?: boolean
    base?: boolean | BusinessUserModelArgs
  }


  export type REAgentModelInclude = {
    base?: boolean | BusinessUserModelArgs
  }

  export type REAgentModelGetPayload<S extends boolean | null | undefined | REAgentModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? REAgentModel :
    S extends undefined ? never :
    S extends { include: any } & (REAgentModelArgs | REAgentModelFindManyArgs)
    ? REAgentModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'base' ? BusinessUserModelGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (REAgentModelArgs | REAgentModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'base' ? BusinessUserModelGetPayload<S['select'][P]> :  P extends keyof REAgentModel ? REAgentModel[P] : never
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
   * Model HSCompanyModel
   */


  export type AggregateHSCompanyModel = {
    _count: HSCompanyModelCountAggregateOutputType | null
    _min: HSCompanyModelMinAggregateOutputType | null
    _max: HSCompanyModelMaxAggregateOutputType | null
  }

  export type HSCompanyModelMinAggregateOutputType = {
    id: string | null
    business_num: string | null
    address_first: string | null
    address_second: string | null
  }

  export type HSCompanyModelMaxAggregateOutputType = {
    id: string | null
    business_num: string | null
    address_first: string | null
    address_second: string | null
  }

  export type HSCompanyModelCountAggregateOutputType = {
    id: number
    business_num: number
    address_first: number
    address_second: number
    _all: number
  }


  export type HSCompanyModelMinAggregateInputType = {
    id?: true
    business_num?: true
    address_first?: true
    address_second?: true
  }

  export type HSCompanyModelMaxAggregateInputType = {
    id?: true
    business_num?: true
    address_first?: true
    address_second?: true
  }

  export type HSCompanyModelCountAggregateInputType = {
    id?: true
    business_num?: true
    address_first?: true
    address_second?: true
    _all?: true
  }

  export type HSCompanyModelAggregateArgs = {
    /**
     * Filter which HSCompanyModel to aggregate.
     */
    where?: HSCompanyModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSCompanyModels to fetch.
     */
    orderBy?: Enumerable<HSCompanyModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HSCompanyModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSCompanyModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSCompanyModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HSCompanyModels
    **/
    _count?: true | HSCompanyModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HSCompanyModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HSCompanyModelMaxAggregateInputType
  }

  export type GetHSCompanyModelAggregateType<T extends HSCompanyModelAggregateArgs> = {
        [P in keyof T & keyof AggregateHSCompanyModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHSCompanyModel[P]>
      : GetScalarType<T[P], AggregateHSCompanyModel[P]>
  }




  export type HSCompanyModelGroupByArgs = {
    where?: HSCompanyModelWhereInput
    orderBy?: Enumerable<HSCompanyModelOrderByWithAggregationInput>
    by: HSCompanyModelScalarFieldEnum[]
    having?: HSCompanyModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HSCompanyModelCountAggregateInputType | true
    _min?: HSCompanyModelMinAggregateInputType
    _max?: HSCompanyModelMaxAggregateInputType
  }


  export type HSCompanyModelGroupByOutputType = {
    id: string
    business_num: string
    address_first: string
    address_second: string | null
    _count: HSCompanyModelCountAggregateOutputType | null
    _min: HSCompanyModelMinAggregateOutputType | null
    _max: HSCompanyModelMaxAggregateOutputType | null
  }

  type GetHSCompanyModelGroupByPayload<T extends HSCompanyModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HSCompanyModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HSCompanyModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HSCompanyModelGroupByOutputType[P]>
            : GetScalarType<T[P], HSCompanyModelGroupByOutputType[P]>
        }
      >
    >


  export type HSCompanyModelSelect = {
    id?: boolean
    business_num?: boolean
    address_first?: boolean
    address_second?: boolean
    base?: boolean | BusinessUserModelArgs
    introduction_images?: boolean | HSCompanyModel$introduction_imagesArgs
    _count?: boolean | HSCompanyModelCountOutputTypeArgs
  }


  export type HSCompanyModelInclude = {
    base?: boolean | BusinessUserModelArgs
    introduction_images?: boolean | HSCompanyModel$introduction_imagesArgs
    _count?: boolean | HSCompanyModelCountOutputTypeArgs
  }

  export type HSCompanyModelGetPayload<S extends boolean | null | undefined | HSCompanyModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HSCompanyModel :
    S extends undefined ? never :
    S extends { include: any } & (HSCompanyModelArgs | HSCompanyModelFindManyArgs)
    ? HSCompanyModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'base' ? BusinessUserModelGetPayload<S['include'][P]> :
        P extends 'introduction_images' ? Array < HSCompanyIntroductionImageModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? HSCompanyModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HSCompanyModelArgs | HSCompanyModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'base' ? BusinessUserModelGetPayload<S['select'][P]> :
        P extends 'introduction_images' ? Array < HSCompanyIntroductionImageModelGetPayload<S['select'][P]>>  :
        P extends '_count' ? HSCompanyModelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof HSCompanyModel ? HSCompanyModel[P] : never
  } 
      : HSCompanyModel


  type HSCompanyModelCountArgs = 
    Omit<HSCompanyModelFindManyArgs, 'select' | 'include'> & {
      select?: HSCompanyModelCountAggregateInputType | true
    }

  export interface HSCompanyModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one HSCompanyModel that matches the filter.
     * @param {HSCompanyModelFindUniqueArgs} args - Arguments to find a HSCompanyModel
     * @example
     * // Get one HSCompanyModel
     * const hSCompanyModel = await prisma.hSCompanyModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HSCompanyModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HSCompanyModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HSCompanyModel'> extends True ? Prisma__HSCompanyModelClient<HSCompanyModelGetPayload<T>> : Prisma__HSCompanyModelClient<HSCompanyModelGetPayload<T> | null, null>

    /**
     * Find one HSCompanyModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HSCompanyModelFindUniqueOrThrowArgs} args - Arguments to find a HSCompanyModel
     * @example
     * // Get one HSCompanyModel
     * const hSCompanyModel = await prisma.hSCompanyModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HSCompanyModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HSCompanyModelFindUniqueOrThrowArgs>
    ): Prisma__HSCompanyModelClient<HSCompanyModelGetPayload<T>>

    /**
     * Find the first HSCompanyModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSCompanyModelFindFirstArgs} args - Arguments to find a HSCompanyModel
     * @example
     * // Get one HSCompanyModel
     * const hSCompanyModel = await prisma.hSCompanyModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HSCompanyModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HSCompanyModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HSCompanyModel'> extends True ? Prisma__HSCompanyModelClient<HSCompanyModelGetPayload<T>> : Prisma__HSCompanyModelClient<HSCompanyModelGetPayload<T> | null, null>

    /**
     * Find the first HSCompanyModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSCompanyModelFindFirstOrThrowArgs} args - Arguments to find a HSCompanyModel
     * @example
     * // Get one HSCompanyModel
     * const hSCompanyModel = await prisma.hSCompanyModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HSCompanyModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HSCompanyModelFindFirstOrThrowArgs>
    ): Prisma__HSCompanyModelClient<HSCompanyModelGetPayload<T>>

    /**
     * Find zero or more HSCompanyModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSCompanyModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HSCompanyModels
     * const hSCompanyModels = await prisma.hSCompanyModel.findMany()
     * 
     * // Get first 10 HSCompanyModels
     * const hSCompanyModels = await prisma.hSCompanyModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hSCompanyModelWithIdOnly = await prisma.hSCompanyModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HSCompanyModelFindManyArgs>(
      args?: SelectSubset<T, HSCompanyModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<HSCompanyModelGetPayload<T>>>

    /**
     * Create a HSCompanyModel.
     * @param {HSCompanyModelCreateArgs} args - Arguments to create a HSCompanyModel.
     * @example
     * // Create one HSCompanyModel
     * const HSCompanyModel = await prisma.hSCompanyModel.create({
     *   data: {
     *     // ... data to create a HSCompanyModel
     *   }
     * })
     * 
    **/
    create<T extends HSCompanyModelCreateArgs>(
      args: SelectSubset<T, HSCompanyModelCreateArgs>
    ): Prisma__HSCompanyModelClient<HSCompanyModelGetPayload<T>>

    /**
     * Create many HSCompanyModels.
     *     @param {HSCompanyModelCreateManyArgs} args - Arguments to create many HSCompanyModels.
     *     @example
     *     // Create many HSCompanyModels
     *     const hSCompanyModel = await prisma.hSCompanyModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HSCompanyModelCreateManyArgs>(
      args?: SelectSubset<T, HSCompanyModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HSCompanyModel.
     * @param {HSCompanyModelDeleteArgs} args - Arguments to delete one HSCompanyModel.
     * @example
     * // Delete one HSCompanyModel
     * const HSCompanyModel = await prisma.hSCompanyModel.delete({
     *   where: {
     *     // ... filter to delete one HSCompanyModel
     *   }
     * })
     * 
    **/
    delete<T extends HSCompanyModelDeleteArgs>(
      args: SelectSubset<T, HSCompanyModelDeleteArgs>
    ): Prisma__HSCompanyModelClient<HSCompanyModelGetPayload<T>>

    /**
     * Update one HSCompanyModel.
     * @param {HSCompanyModelUpdateArgs} args - Arguments to update one HSCompanyModel.
     * @example
     * // Update one HSCompanyModel
     * const hSCompanyModel = await prisma.hSCompanyModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HSCompanyModelUpdateArgs>(
      args: SelectSubset<T, HSCompanyModelUpdateArgs>
    ): Prisma__HSCompanyModelClient<HSCompanyModelGetPayload<T>>

    /**
     * Delete zero or more HSCompanyModels.
     * @param {HSCompanyModelDeleteManyArgs} args - Arguments to filter HSCompanyModels to delete.
     * @example
     * // Delete a few HSCompanyModels
     * const { count } = await prisma.hSCompanyModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HSCompanyModelDeleteManyArgs>(
      args?: SelectSubset<T, HSCompanyModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HSCompanyModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSCompanyModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HSCompanyModels
     * const hSCompanyModel = await prisma.hSCompanyModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HSCompanyModelUpdateManyArgs>(
      args: SelectSubset<T, HSCompanyModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HSCompanyModel.
     * @param {HSCompanyModelUpsertArgs} args - Arguments to update or create a HSCompanyModel.
     * @example
     * // Update or create a HSCompanyModel
     * const hSCompanyModel = await prisma.hSCompanyModel.upsert({
     *   create: {
     *     // ... data to create a HSCompanyModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HSCompanyModel we want to update
     *   }
     * })
    **/
    upsert<T extends HSCompanyModelUpsertArgs>(
      args: SelectSubset<T, HSCompanyModelUpsertArgs>
    ): Prisma__HSCompanyModelClient<HSCompanyModelGetPayload<T>>

    /**
     * Count the number of HSCompanyModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSCompanyModelCountArgs} args - Arguments to filter HSCompanyModels to count.
     * @example
     * // Count the number of HSCompanyModels
     * const count = await prisma.hSCompanyModel.count({
     *   where: {
     *     // ... the filter for the HSCompanyModels we want to count
     *   }
     * })
    **/
    count<T extends HSCompanyModelCountArgs>(
      args?: Subset<T, HSCompanyModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HSCompanyModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HSCompanyModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSCompanyModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HSCompanyModelAggregateArgs>(args: Subset<T, HSCompanyModelAggregateArgs>): Prisma.PrismaPromise<GetHSCompanyModelAggregateType<T>>

    /**
     * Group by HSCompanyModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSCompanyModelGroupByArgs} args - Group by arguments.
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
      T extends HSCompanyModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HSCompanyModelGroupByArgs['orderBy'] }
        : { orderBy?: HSCompanyModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HSCompanyModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHSCompanyModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HSCompanyModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HSCompanyModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    introduction_images<T extends HSCompanyModel$introduction_imagesArgs= {}>(args?: Subset<T, HSCompanyModel$introduction_imagesArgs>): Prisma.PrismaPromise<Array<HSCompanyIntroductionImageModelGetPayload<T>>| Null>;

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
   * HSCompanyModel base type for findUnique actions
   */
  export type HSCompanyModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HSCompanyModel
     */
    select?: HSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyModelInclude | null
    /**
     * Filter, which HSCompanyModel to fetch.
     */
    where: HSCompanyModelWhereUniqueInput
  }

  /**
   * HSCompanyModel findUnique
   */
  export interface HSCompanyModelFindUniqueArgs extends HSCompanyModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HSCompanyModel findUniqueOrThrow
   */
  export type HSCompanyModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyModel
     */
    select?: HSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyModelInclude | null
    /**
     * Filter, which HSCompanyModel to fetch.
     */
    where: HSCompanyModelWhereUniqueInput
  }


  /**
   * HSCompanyModel base type for findFirst actions
   */
  export type HSCompanyModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HSCompanyModel
     */
    select?: HSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyModelInclude | null
    /**
     * Filter, which HSCompanyModel to fetch.
     */
    where?: HSCompanyModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSCompanyModels to fetch.
     */
    orderBy?: Enumerable<HSCompanyModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSCompanyModels.
     */
    cursor?: HSCompanyModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSCompanyModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSCompanyModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSCompanyModels.
     */
    distinct?: Enumerable<HSCompanyModelScalarFieldEnum>
  }

  /**
   * HSCompanyModel findFirst
   */
  export interface HSCompanyModelFindFirstArgs extends HSCompanyModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HSCompanyModel findFirstOrThrow
   */
  export type HSCompanyModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyModel
     */
    select?: HSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyModelInclude | null
    /**
     * Filter, which HSCompanyModel to fetch.
     */
    where?: HSCompanyModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSCompanyModels to fetch.
     */
    orderBy?: Enumerable<HSCompanyModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSCompanyModels.
     */
    cursor?: HSCompanyModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSCompanyModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSCompanyModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSCompanyModels.
     */
    distinct?: Enumerable<HSCompanyModelScalarFieldEnum>
  }


  /**
   * HSCompanyModel findMany
   */
  export type HSCompanyModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyModel
     */
    select?: HSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyModelInclude | null
    /**
     * Filter, which HSCompanyModels to fetch.
     */
    where?: HSCompanyModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSCompanyModels to fetch.
     */
    orderBy?: Enumerable<HSCompanyModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HSCompanyModels.
     */
    cursor?: HSCompanyModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSCompanyModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSCompanyModels.
     */
    skip?: number
    distinct?: Enumerable<HSCompanyModelScalarFieldEnum>
  }


  /**
   * HSCompanyModel create
   */
  export type HSCompanyModelCreateArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyModel
     */
    select?: HSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyModelInclude | null
    /**
     * The data needed to create a HSCompanyModel.
     */
    data: XOR<HSCompanyModelCreateInput, HSCompanyModelUncheckedCreateInput>
  }


  /**
   * HSCompanyModel createMany
   */
  export type HSCompanyModelCreateManyArgs = {
    /**
     * The data used to create many HSCompanyModels.
     */
    data: Enumerable<HSCompanyModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HSCompanyModel update
   */
  export type HSCompanyModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyModel
     */
    select?: HSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyModelInclude | null
    /**
     * The data needed to update a HSCompanyModel.
     */
    data: XOR<HSCompanyModelUpdateInput, HSCompanyModelUncheckedUpdateInput>
    /**
     * Choose, which HSCompanyModel to update.
     */
    where: HSCompanyModelWhereUniqueInput
  }


  /**
   * HSCompanyModel updateMany
   */
  export type HSCompanyModelUpdateManyArgs = {
    /**
     * The data used to update HSCompanyModels.
     */
    data: XOR<HSCompanyModelUpdateManyMutationInput, HSCompanyModelUncheckedUpdateManyInput>
    /**
     * Filter which HSCompanyModels to update
     */
    where?: HSCompanyModelWhereInput
  }


  /**
   * HSCompanyModel upsert
   */
  export type HSCompanyModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyModel
     */
    select?: HSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyModelInclude | null
    /**
     * The filter to search for the HSCompanyModel to update in case it exists.
     */
    where: HSCompanyModelWhereUniqueInput
    /**
     * In case the HSCompanyModel found by the `where` argument doesn't exist, create a new HSCompanyModel with this data.
     */
    create: XOR<HSCompanyModelCreateInput, HSCompanyModelUncheckedCreateInput>
    /**
     * In case the HSCompanyModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HSCompanyModelUpdateInput, HSCompanyModelUncheckedUpdateInput>
  }


  /**
   * HSCompanyModel delete
   */
  export type HSCompanyModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyModel
     */
    select?: HSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyModelInclude | null
    /**
     * Filter which HSCompanyModel to delete.
     */
    where: HSCompanyModelWhereUniqueInput
  }


  /**
   * HSCompanyModel deleteMany
   */
  export type HSCompanyModelDeleteManyArgs = {
    /**
     * Filter which HSCompanyModels to delete
     */
    where?: HSCompanyModelWhereInput
  }


  /**
   * HSCompanyModel.introduction_images
   */
  export type HSCompanyModel$introduction_imagesArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyIntroductionImageModel
     */
    select?: HSCompanyIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyIntroductionImageModelInclude | null
    where?: HSCompanyIntroductionImageModelWhereInput
    orderBy?: Enumerable<HSCompanyIntroductionImageModelOrderByWithRelationInput>
    cursor?: HSCompanyIntroductionImageModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HSCompanyIntroductionImageModelScalarFieldEnum>
  }


  /**
   * HSCompanyModel without action
   */
  export type HSCompanyModelArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyModel
     */
    select?: HSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyModelInclude | null
  }



  /**
   * Model HSCompanyIntroductionImageModel
   */


  export type AggregateHSCompanyIntroductionImageModel = {
    _count: HSCompanyIntroductionImageModelCountAggregateOutputType | null
    _min: HSCompanyIntroductionImageModelMinAggregateOutputType | null
    _max: HSCompanyIntroductionImageModelMaxAggregateOutputType | null
  }

  export type HSCompanyIntroductionImageModelMinAggregateOutputType = {
    id: string | null
    url: string | null
    company_id: string | null
  }

  export type HSCompanyIntroductionImageModelMaxAggregateOutputType = {
    id: string | null
    url: string | null
    company_id: string | null
  }

  export type HSCompanyIntroductionImageModelCountAggregateOutputType = {
    id: number
    url: number
    company_id: number
    _all: number
  }


  export type HSCompanyIntroductionImageModelMinAggregateInputType = {
    id?: true
    url?: true
    company_id?: true
  }

  export type HSCompanyIntroductionImageModelMaxAggregateInputType = {
    id?: true
    url?: true
    company_id?: true
  }

  export type HSCompanyIntroductionImageModelCountAggregateInputType = {
    id?: true
    url?: true
    company_id?: true
    _all?: true
  }

  export type HSCompanyIntroductionImageModelAggregateArgs = {
    /**
     * Filter which HSCompanyIntroductionImageModel to aggregate.
     */
    where?: HSCompanyIntroductionImageModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSCompanyIntroductionImageModels to fetch.
     */
    orderBy?: Enumerable<HSCompanyIntroductionImageModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HSCompanyIntroductionImageModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSCompanyIntroductionImageModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSCompanyIntroductionImageModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HSCompanyIntroductionImageModels
    **/
    _count?: true | HSCompanyIntroductionImageModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HSCompanyIntroductionImageModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HSCompanyIntroductionImageModelMaxAggregateInputType
  }

  export type GetHSCompanyIntroductionImageModelAggregateType<T extends HSCompanyIntroductionImageModelAggregateArgs> = {
        [P in keyof T & keyof AggregateHSCompanyIntroductionImageModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHSCompanyIntroductionImageModel[P]>
      : GetScalarType<T[P], AggregateHSCompanyIntroductionImageModel[P]>
  }




  export type HSCompanyIntroductionImageModelGroupByArgs = {
    where?: HSCompanyIntroductionImageModelWhereInput
    orderBy?: Enumerable<HSCompanyIntroductionImageModelOrderByWithAggregationInput>
    by: HSCompanyIntroductionImageModelScalarFieldEnum[]
    having?: HSCompanyIntroductionImageModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HSCompanyIntroductionImageModelCountAggregateInputType | true
    _min?: HSCompanyIntroductionImageModelMinAggregateInputType
    _max?: HSCompanyIntroductionImageModelMaxAggregateInputType
  }


  export type HSCompanyIntroductionImageModelGroupByOutputType = {
    id: string
    url: string
    company_id: string
    _count: HSCompanyIntroductionImageModelCountAggregateOutputType | null
    _min: HSCompanyIntroductionImageModelMinAggregateOutputType | null
    _max: HSCompanyIntroductionImageModelMaxAggregateOutputType | null
  }

  type GetHSCompanyIntroductionImageModelGroupByPayload<T extends HSCompanyIntroductionImageModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HSCompanyIntroductionImageModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HSCompanyIntroductionImageModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HSCompanyIntroductionImageModelGroupByOutputType[P]>
            : GetScalarType<T[P], HSCompanyIntroductionImageModelGroupByOutputType[P]>
        }
      >
    >


  export type HSCompanyIntroductionImageModelSelect = {
    id?: boolean
    url?: boolean
    company_id?: boolean
    company?: boolean | HSCompanyModelArgs
  }


  export type HSCompanyIntroductionImageModelInclude = {
    company?: boolean | HSCompanyModelArgs
  }

  export type HSCompanyIntroductionImageModelGetPayload<S extends boolean | null | undefined | HSCompanyIntroductionImageModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HSCompanyIntroductionImageModel :
    S extends undefined ? never :
    S extends { include: any } & (HSCompanyIntroductionImageModelArgs | HSCompanyIntroductionImageModelFindManyArgs)
    ? HSCompanyIntroductionImageModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'company' ? HSCompanyModelGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HSCompanyIntroductionImageModelArgs | HSCompanyIntroductionImageModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'company' ? HSCompanyModelGetPayload<S['select'][P]> :  P extends keyof HSCompanyIntroductionImageModel ? HSCompanyIntroductionImageModel[P] : never
  } 
      : HSCompanyIntroductionImageModel


  type HSCompanyIntroductionImageModelCountArgs = 
    Omit<HSCompanyIntroductionImageModelFindManyArgs, 'select' | 'include'> & {
      select?: HSCompanyIntroductionImageModelCountAggregateInputType | true
    }

  export interface HSCompanyIntroductionImageModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one HSCompanyIntroductionImageModel that matches the filter.
     * @param {HSCompanyIntroductionImageModelFindUniqueArgs} args - Arguments to find a HSCompanyIntroductionImageModel
     * @example
     * // Get one HSCompanyIntroductionImageModel
     * const hSCompanyIntroductionImageModel = await prisma.hSCompanyIntroductionImageModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HSCompanyIntroductionImageModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HSCompanyIntroductionImageModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HSCompanyIntroductionImageModel'> extends True ? Prisma__HSCompanyIntroductionImageModelClient<HSCompanyIntroductionImageModelGetPayload<T>> : Prisma__HSCompanyIntroductionImageModelClient<HSCompanyIntroductionImageModelGetPayload<T> | null, null>

    /**
     * Find one HSCompanyIntroductionImageModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HSCompanyIntroductionImageModelFindUniqueOrThrowArgs} args - Arguments to find a HSCompanyIntroductionImageModel
     * @example
     * // Get one HSCompanyIntroductionImageModel
     * const hSCompanyIntroductionImageModel = await prisma.hSCompanyIntroductionImageModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HSCompanyIntroductionImageModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HSCompanyIntroductionImageModelFindUniqueOrThrowArgs>
    ): Prisma__HSCompanyIntroductionImageModelClient<HSCompanyIntroductionImageModelGetPayload<T>>

    /**
     * Find the first HSCompanyIntroductionImageModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSCompanyIntroductionImageModelFindFirstArgs} args - Arguments to find a HSCompanyIntroductionImageModel
     * @example
     * // Get one HSCompanyIntroductionImageModel
     * const hSCompanyIntroductionImageModel = await prisma.hSCompanyIntroductionImageModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HSCompanyIntroductionImageModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HSCompanyIntroductionImageModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HSCompanyIntroductionImageModel'> extends True ? Prisma__HSCompanyIntroductionImageModelClient<HSCompanyIntroductionImageModelGetPayload<T>> : Prisma__HSCompanyIntroductionImageModelClient<HSCompanyIntroductionImageModelGetPayload<T> | null, null>

    /**
     * Find the first HSCompanyIntroductionImageModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSCompanyIntroductionImageModelFindFirstOrThrowArgs} args - Arguments to find a HSCompanyIntroductionImageModel
     * @example
     * // Get one HSCompanyIntroductionImageModel
     * const hSCompanyIntroductionImageModel = await prisma.hSCompanyIntroductionImageModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HSCompanyIntroductionImageModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HSCompanyIntroductionImageModelFindFirstOrThrowArgs>
    ): Prisma__HSCompanyIntroductionImageModelClient<HSCompanyIntroductionImageModelGetPayload<T>>

    /**
     * Find zero or more HSCompanyIntroductionImageModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSCompanyIntroductionImageModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HSCompanyIntroductionImageModels
     * const hSCompanyIntroductionImageModels = await prisma.hSCompanyIntroductionImageModel.findMany()
     * 
     * // Get first 10 HSCompanyIntroductionImageModels
     * const hSCompanyIntroductionImageModels = await prisma.hSCompanyIntroductionImageModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hSCompanyIntroductionImageModelWithIdOnly = await prisma.hSCompanyIntroductionImageModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HSCompanyIntroductionImageModelFindManyArgs>(
      args?: SelectSubset<T, HSCompanyIntroductionImageModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<HSCompanyIntroductionImageModelGetPayload<T>>>

    /**
     * Create a HSCompanyIntroductionImageModel.
     * @param {HSCompanyIntroductionImageModelCreateArgs} args - Arguments to create a HSCompanyIntroductionImageModel.
     * @example
     * // Create one HSCompanyIntroductionImageModel
     * const HSCompanyIntroductionImageModel = await prisma.hSCompanyIntroductionImageModel.create({
     *   data: {
     *     // ... data to create a HSCompanyIntroductionImageModel
     *   }
     * })
     * 
    **/
    create<T extends HSCompanyIntroductionImageModelCreateArgs>(
      args: SelectSubset<T, HSCompanyIntroductionImageModelCreateArgs>
    ): Prisma__HSCompanyIntroductionImageModelClient<HSCompanyIntroductionImageModelGetPayload<T>>

    /**
     * Create many HSCompanyIntroductionImageModels.
     *     @param {HSCompanyIntroductionImageModelCreateManyArgs} args - Arguments to create many HSCompanyIntroductionImageModels.
     *     @example
     *     // Create many HSCompanyIntroductionImageModels
     *     const hSCompanyIntroductionImageModel = await prisma.hSCompanyIntroductionImageModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HSCompanyIntroductionImageModelCreateManyArgs>(
      args?: SelectSubset<T, HSCompanyIntroductionImageModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HSCompanyIntroductionImageModel.
     * @param {HSCompanyIntroductionImageModelDeleteArgs} args - Arguments to delete one HSCompanyIntroductionImageModel.
     * @example
     * // Delete one HSCompanyIntroductionImageModel
     * const HSCompanyIntroductionImageModel = await prisma.hSCompanyIntroductionImageModel.delete({
     *   where: {
     *     // ... filter to delete one HSCompanyIntroductionImageModel
     *   }
     * })
     * 
    **/
    delete<T extends HSCompanyIntroductionImageModelDeleteArgs>(
      args: SelectSubset<T, HSCompanyIntroductionImageModelDeleteArgs>
    ): Prisma__HSCompanyIntroductionImageModelClient<HSCompanyIntroductionImageModelGetPayload<T>>

    /**
     * Update one HSCompanyIntroductionImageModel.
     * @param {HSCompanyIntroductionImageModelUpdateArgs} args - Arguments to update one HSCompanyIntroductionImageModel.
     * @example
     * // Update one HSCompanyIntroductionImageModel
     * const hSCompanyIntroductionImageModel = await prisma.hSCompanyIntroductionImageModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HSCompanyIntroductionImageModelUpdateArgs>(
      args: SelectSubset<T, HSCompanyIntroductionImageModelUpdateArgs>
    ): Prisma__HSCompanyIntroductionImageModelClient<HSCompanyIntroductionImageModelGetPayload<T>>

    /**
     * Delete zero or more HSCompanyIntroductionImageModels.
     * @param {HSCompanyIntroductionImageModelDeleteManyArgs} args - Arguments to filter HSCompanyIntroductionImageModels to delete.
     * @example
     * // Delete a few HSCompanyIntroductionImageModels
     * const { count } = await prisma.hSCompanyIntroductionImageModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HSCompanyIntroductionImageModelDeleteManyArgs>(
      args?: SelectSubset<T, HSCompanyIntroductionImageModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HSCompanyIntroductionImageModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSCompanyIntroductionImageModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HSCompanyIntroductionImageModels
     * const hSCompanyIntroductionImageModel = await prisma.hSCompanyIntroductionImageModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HSCompanyIntroductionImageModelUpdateManyArgs>(
      args: SelectSubset<T, HSCompanyIntroductionImageModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HSCompanyIntroductionImageModel.
     * @param {HSCompanyIntroductionImageModelUpsertArgs} args - Arguments to update or create a HSCompanyIntroductionImageModel.
     * @example
     * // Update or create a HSCompanyIntroductionImageModel
     * const hSCompanyIntroductionImageModel = await prisma.hSCompanyIntroductionImageModel.upsert({
     *   create: {
     *     // ... data to create a HSCompanyIntroductionImageModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HSCompanyIntroductionImageModel we want to update
     *   }
     * })
    **/
    upsert<T extends HSCompanyIntroductionImageModelUpsertArgs>(
      args: SelectSubset<T, HSCompanyIntroductionImageModelUpsertArgs>
    ): Prisma__HSCompanyIntroductionImageModelClient<HSCompanyIntroductionImageModelGetPayload<T>>

    /**
     * Count the number of HSCompanyIntroductionImageModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSCompanyIntroductionImageModelCountArgs} args - Arguments to filter HSCompanyIntroductionImageModels to count.
     * @example
     * // Count the number of HSCompanyIntroductionImageModels
     * const count = await prisma.hSCompanyIntroductionImageModel.count({
     *   where: {
     *     // ... the filter for the HSCompanyIntroductionImageModels we want to count
     *   }
     * })
    **/
    count<T extends HSCompanyIntroductionImageModelCountArgs>(
      args?: Subset<T, HSCompanyIntroductionImageModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HSCompanyIntroductionImageModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HSCompanyIntroductionImageModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSCompanyIntroductionImageModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HSCompanyIntroductionImageModelAggregateArgs>(args: Subset<T, HSCompanyIntroductionImageModelAggregateArgs>): Prisma.PrismaPromise<GetHSCompanyIntroductionImageModelAggregateType<T>>

    /**
     * Group by HSCompanyIntroductionImageModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HSCompanyIntroductionImageModelGroupByArgs} args - Group by arguments.
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
      T extends HSCompanyIntroductionImageModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HSCompanyIntroductionImageModelGroupByArgs['orderBy'] }
        : { orderBy?: HSCompanyIntroductionImageModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HSCompanyIntroductionImageModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHSCompanyIntroductionImageModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HSCompanyIntroductionImageModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HSCompanyIntroductionImageModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    company<T extends HSCompanyModelArgs= {}>(args?: Subset<T, HSCompanyModelArgs>): Prisma__HSCompanyModelClient<HSCompanyModelGetPayload<T> | Null>;

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
   * HSCompanyIntroductionImageModel base type for findUnique actions
   */
  export type HSCompanyIntroductionImageModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HSCompanyIntroductionImageModel
     */
    select?: HSCompanyIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyIntroductionImageModelInclude | null
    /**
     * Filter, which HSCompanyIntroductionImageModel to fetch.
     */
    where: HSCompanyIntroductionImageModelWhereUniqueInput
  }

  /**
   * HSCompanyIntroductionImageModel findUnique
   */
  export interface HSCompanyIntroductionImageModelFindUniqueArgs extends HSCompanyIntroductionImageModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HSCompanyIntroductionImageModel findUniqueOrThrow
   */
  export type HSCompanyIntroductionImageModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyIntroductionImageModel
     */
    select?: HSCompanyIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyIntroductionImageModelInclude | null
    /**
     * Filter, which HSCompanyIntroductionImageModel to fetch.
     */
    where: HSCompanyIntroductionImageModelWhereUniqueInput
  }


  /**
   * HSCompanyIntroductionImageModel base type for findFirst actions
   */
  export type HSCompanyIntroductionImageModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HSCompanyIntroductionImageModel
     */
    select?: HSCompanyIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyIntroductionImageModelInclude | null
    /**
     * Filter, which HSCompanyIntroductionImageModel to fetch.
     */
    where?: HSCompanyIntroductionImageModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSCompanyIntroductionImageModels to fetch.
     */
    orderBy?: Enumerable<HSCompanyIntroductionImageModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSCompanyIntroductionImageModels.
     */
    cursor?: HSCompanyIntroductionImageModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSCompanyIntroductionImageModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSCompanyIntroductionImageModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSCompanyIntroductionImageModels.
     */
    distinct?: Enumerable<HSCompanyIntroductionImageModelScalarFieldEnum>
  }

  /**
   * HSCompanyIntroductionImageModel findFirst
   */
  export interface HSCompanyIntroductionImageModelFindFirstArgs extends HSCompanyIntroductionImageModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HSCompanyIntroductionImageModel findFirstOrThrow
   */
  export type HSCompanyIntroductionImageModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyIntroductionImageModel
     */
    select?: HSCompanyIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyIntroductionImageModelInclude | null
    /**
     * Filter, which HSCompanyIntroductionImageModel to fetch.
     */
    where?: HSCompanyIntroductionImageModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSCompanyIntroductionImageModels to fetch.
     */
    orderBy?: Enumerable<HSCompanyIntroductionImageModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HSCompanyIntroductionImageModels.
     */
    cursor?: HSCompanyIntroductionImageModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSCompanyIntroductionImageModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSCompanyIntroductionImageModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HSCompanyIntroductionImageModels.
     */
    distinct?: Enumerable<HSCompanyIntroductionImageModelScalarFieldEnum>
  }


  /**
   * HSCompanyIntroductionImageModel findMany
   */
  export type HSCompanyIntroductionImageModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyIntroductionImageModel
     */
    select?: HSCompanyIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyIntroductionImageModelInclude | null
    /**
     * Filter, which HSCompanyIntroductionImageModels to fetch.
     */
    where?: HSCompanyIntroductionImageModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HSCompanyIntroductionImageModels to fetch.
     */
    orderBy?: Enumerable<HSCompanyIntroductionImageModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HSCompanyIntroductionImageModels.
     */
    cursor?: HSCompanyIntroductionImageModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HSCompanyIntroductionImageModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HSCompanyIntroductionImageModels.
     */
    skip?: number
    distinct?: Enumerable<HSCompanyIntroductionImageModelScalarFieldEnum>
  }


  /**
   * HSCompanyIntroductionImageModel create
   */
  export type HSCompanyIntroductionImageModelCreateArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyIntroductionImageModel
     */
    select?: HSCompanyIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyIntroductionImageModelInclude | null
    /**
     * The data needed to create a HSCompanyIntroductionImageModel.
     */
    data: XOR<HSCompanyIntroductionImageModelCreateInput, HSCompanyIntroductionImageModelUncheckedCreateInput>
  }


  /**
   * HSCompanyIntroductionImageModel createMany
   */
  export type HSCompanyIntroductionImageModelCreateManyArgs = {
    /**
     * The data used to create many HSCompanyIntroductionImageModels.
     */
    data: Enumerable<HSCompanyIntroductionImageModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HSCompanyIntroductionImageModel update
   */
  export type HSCompanyIntroductionImageModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyIntroductionImageModel
     */
    select?: HSCompanyIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyIntroductionImageModelInclude | null
    /**
     * The data needed to update a HSCompanyIntroductionImageModel.
     */
    data: XOR<HSCompanyIntroductionImageModelUpdateInput, HSCompanyIntroductionImageModelUncheckedUpdateInput>
    /**
     * Choose, which HSCompanyIntroductionImageModel to update.
     */
    where: HSCompanyIntroductionImageModelWhereUniqueInput
  }


  /**
   * HSCompanyIntroductionImageModel updateMany
   */
  export type HSCompanyIntroductionImageModelUpdateManyArgs = {
    /**
     * The data used to update HSCompanyIntroductionImageModels.
     */
    data: XOR<HSCompanyIntroductionImageModelUpdateManyMutationInput, HSCompanyIntroductionImageModelUncheckedUpdateManyInput>
    /**
     * Filter which HSCompanyIntroductionImageModels to update
     */
    where?: HSCompanyIntroductionImageModelWhereInput
  }


  /**
   * HSCompanyIntroductionImageModel upsert
   */
  export type HSCompanyIntroductionImageModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyIntroductionImageModel
     */
    select?: HSCompanyIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyIntroductionImageModelInclude | null
    /**
     * The filter to search for the HSCompanyIntroductionImageModel to update in case it exists.
     */
    where: HSCompanyIntroductionImageModelWhereUniqueInput
    /**
     * In case the HSCompanyIntroductionImageModel found by the `where` argument doesn't exist, create a new HSCompanyIntroductionImageModel with this data.
     */
    create: XOR<HSCompanyIntroductionImageModelCreateInput, HSCompanyIntroductionImageModelUncheckedCreateInput>
    /**
     * In case the HSCompanyIntroductionImageModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HSCompanyIntroductionImageModelUpdateInput, HSCompanyIntroductionImageModelUncheckedUpdateInput>
  }


  /**
   * HSCompanyIntroductionImageModel delete
   */
  export type HSCompanyIntroductionImageModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyIntroductionImageModel
     */
    select?: HSCompanyIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyIntroductionImageModelInclude | null
    /**
     * Filter which HSCompanyIntroductionImageModel to delete.
     */
    where: HSCompanyIntroductionImageModelWhereUniqueInput
  }


  /**
   * HSCompanyIntroductionImageModel deleteMany
   */
  export type HSCompanyIntroductionImageModelDeleteManyArgs = {
    /**
     * Filter which HSCompanyIntroductionImageModels to delete
     */
    where?: HSCompanyIntroductionImageModelWhereInput
  }


  /**
   * HSCompanyIntroductionImageModel without action
   */
  export type HSCompanyIntroductionImageModelArgs = {
    /**
     * Select specific fields to fetch from the HSCompanyIntroductionImageModel
     */
    select?: HSCompanyIntroductionImageModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HSCompanyIntroductionImageModelInclude | null
  }



  /**
   * Model TempREAgentModel
   */


  export type AggregateTempREAgentModel = {
    _count: TempREAgentModelCountAggregateOutputType | null
    _min: TempREAgentModelMinAggregateOutputType | null
    _max: TempREAgentModelMaxAggregateOutputType | null
  }

  export type TempREAgentModelMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    email_verified: boolean | null
    phone: string | null
    phone_verified: boolean | null
    profile_image_url: string | null
    address_first: string | null
    address_second: string | null
    introduction_title: string | null
    introduction_content: string | null
    is_licensed: boolean | null
    re_num: string | null
    re_name: string | null
    re_phone: string | null
    re_licensed_agent_name: string | null
  }

  export type TempREAgentModelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    email_verified: boolean | null
    phone: string | null
    phone_verified: boolean | null
    profile_image_url: string | null
    address_first: string | null
    address_second: string | null
    introduction_title: string | null
    introduction_content: string | null
    is_licensed: boolean | null
    re_num: string | null
    re_name: string | null
    re_phone: string | null
    re_licensed_agent_name: string | null
  }

  export type TempREAgentModelCountAggregateOutputType = {
    id: number
    name: number
    email: number
    email_verified: number
    phone: number
    phone_verified: number
    profile_image_url: number
    address_first: number
    address_second: number
    introduction_title: number
    introduction_content: number
    is_licensed: number
    re_num: number
    re_name: number
    re_phone: number
    re_licensed_agent_name: number
    _all: number
  }


  export type TempREAgentModelMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    phone?: true
    phone_verified?: true
    profile_image_url?: true
    address_first?: true
    address_second?: true
    introduction_title?: true
    introduction_content?: true
    is_licensed?: true
    re_num?: true
    re_name?: true
    re_phone?: true
    re_licensed_agent_name?: true
  }

  export type TempREAgentModelMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    phone?: true
    phone_verified?: true
    profile_image_url?: true
    address_first?: true
    address_second?: true
    introduction_title?: true
    introduction_content?: true
    is_licensed?: true
    re_num?: true
    re_name?: true
    re_phone?: true
    re_licensed_agent_name?: true
  }

  export type TempREAgentModelCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    phone?: true
    phone_verified?: true
    profile_image_url?: true
    address_first?: true
    address_second?: true
    introduction_title?: true
    introduction_content?: true
    is_licensed?: true
    re_num?: true
    re_name?: true
    re_phone?: true
    re_licensed_agent_name?: true
    _all?: true
  }

  export type TempREAgentModelAggregateArgs = {
    /**
     * Filter which TempREAgentModel to aggregate.
     */
    where?: TempREAgentModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempREAgentModels to fetch.
     */
    orderBy?: Enumerable<TempREAgentModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TempREAgentModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempREAgentModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempREAgentModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TempREAgentModels
    **/
    _count?: true | TempREAgentModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TempREAgentModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TempREAgentModelMaxAggregateInputType
  }

  export type GetTempREAgentModelAggregateType<T extends TempREAgentModelAggregateArgs> = {
        [P in keyof T & keyof AggregateTempREAgentModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTempREAgentModel[P]>
      : GetScalarType<T[P], AggregateTempREAgentModel[P]>
  }




  export type TempREAgentModelGroupByArgs = {
    where?: TempREAgentModelWhereInput
    orderBy?: Enumerable<TempREAgentModelOrderByWithAggregationInput>
    by: TempREAgentModelScalarFieldEnum[]
    having?: TempREAgentModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TempREAgentModelCountAggregateInputType | true
    _min?: TempREAgentModelMinAggregateInputType
    _max?: TempREAgentModelMaxAggregateInputType
  }


  export type TempREAgentModelGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    email_verified: boolean
    phone: string | null
    phone_verified: boolean
    profile_image_url: string | null
    address_first: string | null
    address_second: string | null
    introduction_title: string | null
    introduction_content: string | null
    is_licensed: boolean | null
    re_num: string | null
    re_name: string | null
    re_phone: string | null
    re_licensed_agent_name: string | null
    _count: TempREAgentModelCountAggregateOutputType | null
    _min: TempREAgentModelMinAggregateOutputType | null
    _max: TempREAgentModelMaxAggregateOutputType | null
  }

  type GetTempREAgentModelGroupByPayload<T extends TempREAgentModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TempREAgentModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TempREAgentModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TempREAgentModelGroupByOutputType[P]>
            : GetScalarType<T[P], TempREAgentModelGroupByOutputType[P]>
        }
      >
    >


  export type TempREAgentModelSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified?: boolean
    phone?: boolean
    phone_verified?: boolean
    profile_image_url?: boolean
    address_first?: boolean
    address_second?: boolean
    introduction_title?: boolean
    introduction_content?: boolean
    is_licensed?: boolean
    re_num?: boolean
    re_name?: boolean
    re_phone?: boolean
    re_licensed_agent_name?: boolean
    oauth_accessor?: boolean | AccessorModelArgs
  }


  export type TempREAgentModelInclude = {
    oauth_accessor?: boolean | AccessorModelArgs
  }

  export type TempREAgentModelGetPayload<S extends boolean | null | undefined | TempREAgentModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TempREAgentModel :
    S extends undefined ? never :
    S extends { include: any } & (TempREAgentModelArgs | TempREAgentModelFindManyArgs)
    ? TempREAgentModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'oauth_accessor' ? AccessorModelGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TempREAgentModelArgs | TempREAgentModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'oauth_accessor' ? AccessorModelGetPayload<S['select'][P]> :  P extends keyof TempREAgentModel ? TempREAgentModel[P] : never
  } 
      : TempREAgentModel


  type TempREAgentModelCountArgs = 
    Omit<TempREAgentModelFindManyArgs, 'select' | 'include'> & {
      select?: TempREAgentModelCountAggregateInputType | true
    }

  export interface TempREAgentModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TempREAgentModel that matches the filter.
     * @param {TempREAgentModelFindUniqueArgs} args - Arguments to find a TempREAgentModel
     * @example
     * // Get one TempREAgentModel
     * const tempREAgentModel = await prisma.tempREAgentModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TempREAgentModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TempREAgentModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TempREAgentModel'> extends True ? Prisma__TempREAgentModelClient<TempREAgentModelGetPayload<T>> : Prisma__TempREAgentModelClient<TempREAgentModelGetPayload<T> | null, null>

    /**
     * Find one TempREAgentModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TempREAgentModelFindUniqueOrThrowArgs} args - Arguments to find a TempREAgentModel
     * @example
     * // Get one TempREAgentModel
     * const tempREAgentModel = await prisma.tempREAgentModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TempREAgentModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TempREAgentModelFindUniqueOrThrowArgs>
    ): Prisma__TempREAgentModelClient<TempREAgentModelGetPayload<T>>

    /**
     * Find the first TempREAgentModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempREAgentModelFindFirstArgs} args - Arguments to find a TempREAgentModel
     * @example
     * // Get one TempREAgentModel
     * const tempREAgentModel = await prisma.tempREAgentModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TempREAgentModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TempREAgentModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TempREAgentModel'> extends True ? Prisma__TempREAgentModelClient<TempREAgentModelGetPayload<T>> : Prisma__TempREAgentModelClient<TempREAgentModelGetPayload<T> | null, null>

    /**
     * Find the first TempREAgentModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempREAgentModelFindFirstOrThrowArgs} args - Arguments to find a TempREAgentModel
     * @example
     * // Get one TempREAgentModel
     * const tempREAgentModel = await prisma.tempREAgentModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TempREAgentModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TempREAgentModelFindFirstOrThrowArgs>
    ): Prisma__TempREAgentModelClient<TempREAgentModelGetPayload<T>>

    /**
     * Find zero or more TempREAgentModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempREAgentModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TempREAgentModels
     * const tempREAgentModels = await prisma.tempREAgentModel.findMany()
     * 
     * // Get first 10 TempREAgentModels
     * const tempREAgentModels = await prisma.tempREAgentModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tempREAgentModelWithIdOnly = await prisma.tempREAgentModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TempREAgentModelFindManyArgs>(
      args?: SelectSubset<T, TempREAgentModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<TempREAgentModelGetPayload<T>>>

    /**
     * Create a TempREAgentModel.
     * @param {TempREAgentModelCreateArgs} args - Arguments to create a TempREAgentModel.
     * @example
     * // Create one TempREAgentModel
     * const TempREAgentModel = await prisma.tempREAgentModel.create({
     *   data: {
     *     // ... data to create a TempREAgentModel
     *   }
     * })
     * 
    **/
    create<T extends TempREAgentModelCreateArgs>(
      args: SelectSubset<T, TempREAgentModelCreateArgs>
    ): Prisma__TempREAgentModelClient<TempREAgentModelGetPayload<T>>

    /**
     * Create many TempREAgentModels.
     *     @param {TempREAgentModelCreateManyArgs} args - Arguments to create many TempREAgentModels.
     *     @example
     *     // Create many TempREAgentModels
     *     const tempREAgentModel = await prisma.tempREAgentModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TempREAgentModelCreateManyArgs>(
      args?: SelectSubset<T, TempREAgentModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TempREAgentModel.
     * @param {TempREAgentModelDeleteArgs} args - Arguments to delete one TempREAgentModel.
     * @example
     * // Delete one TempREAgentModel
     * const TempREAgentModel = await prisma.tempREAgentModel.delete({
     *   where: {
     *     // ... filter to delete one TempREAgentModel
     *   }
     * })
     * 
    **/
    delete<T extends TempREAgentModelDeleteArgs>(
      args: SelectSubset<T, TempREAgentModelDeleteArgs>
    ): Prisma__TempREAgentModelClient<TempREAgentModelGetPayload<T>>

    /**
     * Update one TempREAgentModel.
     * @param {TempREAgentModelUpdateArgs} args - Arguments to update one TempREAgentModel.
     * @example
     * // Update one TempREAgentModel
     * const tempREAgentModel = await prisma.tempREAgentModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TempREAgentModelUpdateArgs>(
      args: SelectSubset<T, TempREAgentModelUpdateArgs>
    ): Prisma__TempREAgentModelClient<TempREAgentModelGetPayload<T>>

    /**
     * Delete zero or more TempREAgentModels.
     * @param {TempREAgentModelDeleteManyArgs} args - Arguments to filter TempREAgentModels to delete.
     * @example
     * // Delete a few TempREAgentModels
     * const { count } = await prisma.tempREAgentModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TempREAgentModelDeleteManyArgs>(
      args?: SelectSubset<T, TempREAgentModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempREAgentModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempREAgentModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TempREAgentModels
     * const tempREAgentModel = await prisma.tempREAgentModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TempREAgentModelUpdateManyArgs>(
      args: SelectSubset<T, TempREAgentModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TempREAgentModel.
     * @param {TempREAgentModelUpsertArgs} args - Arguments to update or create a TempREAgentModel.
     * @example
     * // Update or create a TempREAgentModel
     * const tempREAgentModel = await prisma.tempREAgentModel.upsert({
     *   create: {
     *     // ... data to create a TempREAgentModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TempREAgentModel we want to update
     *   }
     * })
    **/
    upsert<T extends TempREAgentModelUpsertArgs>(
      args: SelectSubset<T, TempREAgentModelUpsertArgs>
    ): Prisma__TempREAgentModelClient<TempREAgentModelGetPayload<T>>

    /**
     * Count the number of TempREAgentModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempREAgentModelCountArgs} args - Arguments to filter TempREAgentModels to count.
     * @example
     * // Count the number of TempREAgentModels
     * const count = await prisma.tempREAgentModel.count({
     *   where: {
     *     // ... the filter for the TempREAgentModels we want to count
     *   }
     * })
    **/
    count<T extends TempREAgentModelCountArgs>(
      args?: Subset<T, TempREAgentModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TempREAgentModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TempREAgentModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempREAgentModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TempREAgentModelAggregateArgs>(args: Subset<T, TempREAgentModelAggregateArgs>): Prisma.PrismaPromise<GetTempREAgentModelAggregateType<T>>

    /**
     * Group by TempREAgentModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempREAgentModelGroupByArgs} args - Group by arguments.
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
      T extends TempREAgentModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TempREAgentModelGroupByArgs['orderBy'] }
        : { orderBy?: TempREAgentModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TempREAgentModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTempREAgentModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TempREAgentModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TempREAgentModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    oauth_accessor<T extends AccessorModelArgs= {}>(args?: Subset<T, AccessorModelArgs>): Prisma__AccessorModelClient<AccessorModelGetPayload<T> | Null>;

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
   * TempREAgentModel base type for findUnique actions
   */
  export type TempREAgentModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TempREAgentModel
     */
    select?: TempREAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempREAgentModelInclude | null
    /**
     * Filter, which TempREAgentModel to fetch.
     */
    where: TempREAgentModelWhereUniqueInput
  }

  /**
   * TempREAgentModel findUnique
   */
  export interface TempREAgentModelFindUniqueArgs extends TempREAgentModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TempREAgentModel findUniqueOrThrow
   */
  export type TempREAgentModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TempREAgentModel
     */
    select?: TempREAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempREAgentModelInclude | null
    /**
     * Filter, which TempREAgentModel to fetch.
     */
    where: TempREAgentModelWhereUniqueInput
  }


  /**
   * TempREAgentModel base type for findFirst actions
   */
  export type TempREAgentModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TempREAgentModel
     */
    select?: TempREAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempREAgentModelInclude | null
    /**
     * Filter, which TempREAgentModel to fetch.
     */
    where?: TempREAgentModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempREAgentModels to fetch.
     */
    orderBy?: Enumerable<TempREAgentModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempREAgentModels.
     */
    cursor?: TempREAgentModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempREAgentModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempREAgentModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempREAgentModels.
     */
    distinct?: Enumerable<TempREAgentModelScalarFieldEnum>
  }

  /**
   * TempREAgentModel findFirst
   */
  export interface TempREAgentModelFindFirstArgs extends TempREAgentModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TempREAgentModel findFirstOrThrow
   */
  export type TempREAgentModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TempREAgentModel
     */
    select?: TempREAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempREAgentModelInclude | null
    /**
     * Filter, which TempREAgentModel to fetch.
     */
    where?: TempREAgentModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempREAgentModels to fetch.
     */
    orderBy?: Enumerable<TempREAgentModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempREAgentModels.
     */
    cursor?: TempREAgentModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempREAgentModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempREAgentModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempREAgentModels.
     */
    distinct?: Enumerable<TempREAgentModelScalarFieldEnum>
  }


  /**
   * TempREAgentModel findMany
   */
  export type TempREAgentModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the TempREAgentModel
     */
    select?: TempREAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempREAgentModelInclude | null
    /**
     * Filter, which TempREAgentModels to fetch.
     */
    where?: TempREAgentModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempREAgentModels to fetch.
     */
    orderBy?: Enumerable<TempREAgentModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TempREAgentModels.
     */
    cursor?: TempREAgentModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempREAgentModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempREAgentModels.
     */
    skip?: number
    distinct?: Enumerable<TempREAgentModelScalarFieldEnum>
  }


  /**
   * TempREAgentModel create
   */
  export type TempREAgentModelCreateArgs = {
    /**
     * Select specific fields to fetch from the TempREAgentModel
     */
    select?: TempREAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempREAgentModelInclude | null
    /**
     * The data needed to create a TempREAgentModel.
     */
    data: XOR<TempREAgentModelCreateInput, TempREAgentModelUncheckedCreateInput>
  }


  /**
   * TempREAgentModel createMany
   */
  export type TempREAgentModelCreateManyArgs = {
    /**
     * The data used to create many TempREAgentModels.
     */
    data: Enumerable<TempREAgentModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TempREAgentModel update
   */
  export type TempREAgentModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the TempREAgentModel
     */
    select?: TempREAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempREAgentModelInclude | null
    /**
     * The data needed to update a TempREAgentModel.
     */
    data: XOR<TempREAgentModelUpdateInput, TempREAgentModelUncheckedUpdateInput>
    /**
     * Choose, which TempREAgentModel to update.
     */
    where: TempREAgentModelWhereUniqueInput
  }


  /**
   * TempREAgentModel updateMany
   */
  export type TempREAgentModelUpdateManyArgs = {
    /**
     * The data used to update TempREAgentModels.
     */
    data: XOR<TempREAgentModelUpdateManyMutationInput, TempREAgentModelUncheckedUpdateManyInput>
    /**
     * Filter which TempREAgentModels to update
     */
    where?: TempREAgentModelWhereInput
  }


  /**
   * TempREAgentModel upsert
   */
  export type TempREAgentModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the TempREAgentModel
     */
    select?: TempREAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempREAgentModelInclude | null
    /**
     * The filter to search for the TempREAgentModel to update in case it exists.
     */
    where: TempREAgentModelWhereUniqueInput
    /**
     * In case the TempREAgentModel found by the `where` argument doesn't exist, create a new TempREAgentModel with this data.
     */
    create: XOR<TempREAgentModelCreateInput, TempREAgentModelUncheckedCreateInput>
    /**
     * In case the TempREAgentModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TempREAgentModelUpdateInput, TempREAgentModelUncheckedUpdateInput>
  }


  /**
   * TempREAgentModel delete
   */
  export type TempREAgentModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the TempREAgentModel
     */
    select?: TempREAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempREAgentModelInclude | null
    /**
     * Filter which TempREAgentModel to delete.
     */
    where: TempREAgentModelWhereUniqueInput
  }


  /**
   * TempREAgentModel deleteMany
   */
  export type TempREAgentModelDeleteManyArgs = {
    /**
     * Filter which TempREAgentModels to delete
     */
    where?: TempREAgentModelWhereInput
  }


  /**
   * TempREAgentModel without action
   */
  export type TempREAgentModelArgs = {
    /**
     * Select specific fields to fetch from the TempREAgentModel
     */
    select?: TempREAgentModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempREAgentModelInclude | null
  }



  /**
   * Model TempHSCompanyModel
   */


  export type AggregateTempHSCompanyModel = {
    _count: TempHSCompanyModelCountAggregateOutputType | null
    _min: TempHSCompanyModelMinAggregateOutputType | null
    _max: TempHSCompanyModelMaxAggregateOutputType | null
  }

  export type TempHSCompanyModelMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    email_verified: boolean | null
    phone: string | null
    phone_verified: boolean | null
    profile_image_url: string | null
    address_first: string | null
    address_second: string | null
    introduction_title: string | null
    introduction_content: string | null
    business_num: string | null
  }

  export type TempHSCompanyModelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    email_verified: boolean | null
    phone: string | null
    phone_verified: boolean | null
    profile_image_url: string | null
    address_first: string | null
    address_second: string | null
    introduction_title: string | null
    introduction_content: string | null
    business_num: string | null
  }

  export type TempHSCompanyModelCountAggregateOutputType = {
    id: number
    name: number
    email: number
    email_verified: number
    phone: number
    phone_verified: number
    profile_image_url: number
    address_first: number
    address_second: number
    introduction_title: number
    introduction_content: number
    business_num: number
    _all: number
  }


  export type TempHSCompanyModelMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    phone?: true
    phone_verified?: true
    profile_image_url?: true
    address_first?: true
    address_second?: true
    introduction_title?: true
    introduction_content?: true
    business_num?: true
  }

  export type TempHSCompanyModelMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    phone?: true
    phone_verified?: true
    profile_image_url?: true
    address_first?: true
    address_second?: true
    introduction_title?: true
    introduction_content?: true
    business_num?: true
  }

  export type TempHSCompanyModelCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    phone?: true
    phone_verified?: true
    profile_image_url?: true
    address_first?: true
    address_second?: true
    introduction_title?: true
    introduction_content?: true
    business_num?: true
    _all?: true
  }

  export type TempHSCompanyModelAggregateArgs = {
    /**
     * Filter which TempHSCompanyModel to aggregate.
     */
    where?: TempHSCompanyModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempHSCompanyModels to fetch.
     */
    orderBy?: Enumerable<TempHSCompanyModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TempHSCompanyModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempHSCompanyModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempHSCompanyModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TempHSCompanyModels
    **/
    _count?: true | TempHSCompanyModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TempHSCompanyModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TempHSCompanyModelMaxAggregateInputType
  }

  export type GetTempHSCompanyModelAggregateType<T extends TempHSCompanyModelAggregateArgs> = {
        [P in keyof T & keyof AggregateTempHSCompanyModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTempHSCompanyModel[P]>
      : GetScalarType<T[P], AggregateTempHSCompanyModel[P]>
  }




  export type TempHSCompanyModelGroupByArgs = {
    where?: TempHSCompanyModelWhereInput
    orderBy?: Enumerable<TempHSCompanyModelOrderByWithAggregationInput>
    by: TempHSCompanyModelScalarFieldEnum[]
    having?: TempHSCompanyModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TempHSCompanyModelCountAggregateInputType | true
    _min?: TempHSCompanyModelMinAggregateInputType
    _max?: TempHSCompanyModelMaxAggregateInputType
  }


  export type TempHSCompanyModelGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    email_verified: boolean
    phone: string | null
    phone_verified: boolean
    profile_image_url: string | null
    address_first: string | null
    address_second: string | null
    introduction_title: string | null
    introduction_content: string | null
    business_num: string | null
    _count: TempHSCompanyModelCountAggregateOutputType | null
    _min: TempHSCompanyModelMinAggregateOutputType | null
    _max: TempHSCompanyModelMaxAggregateOutputType | null
  }

  type GetTempHSCompanyModelGroupByPayload<T extends TempHSCompanyModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TempHSCompanyModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TempHSCompanyModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TempHSCompanyModelGroupByOutputType[P]>
            : GetScalarType<T[P], TempHSCompanyModelGroupByOutputType[P]>
        }
      >
    >


  export type TempHSCompanyModelSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified?: boolean
    phone?: boolean
    phone_verified?: boolean
    profile_image_url?: boolean
    address_first?: boolean
    address_second?: boolean
    introduction_title?: boolean
    introduction_content?: boolean
    business_num?: boolean
    oauth_accessor?: boolean | AccessorModelArgs
  }


  export type TempHSCompanyModelInclude = {
    oauth_accessor?: boolean | AccessorModelArgs
  }

  export type TempHSCompanyModelGetPayload<S extends boolean | null | undefined | TempHSCompanyModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TempHSCompanyModel :
    S extends undefined ? never :
    S extends { include: any } & (TempHSCompanyModelArgs | TempHSCompanyModelFindManyArgs)
    ? TempHSCompanyModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'oauth_accessor' ? AccessorModelGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TempHSCompanyModelArgs | TempHSCompanyModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'oauth_accessor' ? AccessorModelGetPayload<S['select'][P]> :  P extends keyof TempHSCompanyModel ? TempHSCompanyModel[P] : never
  } 
      : TempHSCompanyModel


  type TempHSCompanyModelCountArgs = 
    Omit<TempHSCompanyModelFindManyArgs, 'select' | 'include'> & {
      select?: TempHSCompanyModelCountAggregateInputType | true
    }

  export interface TempHSCompanyModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TempHSCompanyModel that matches the filter.
     * @param {TempHSCompanyModelFindUniqueArgs} args - Arguments to find a TempHSCompanyModel
     * @example
     * // Get one TempHSCompanyModel
     * const tempHSCompanyModel = await prisma.tempHSCompanyModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TempHSCompanyModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TempHSCompanyModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TempHSCompanyModel'> extends True ? Prisma__TempHSCompanyModelClient<TempHSCompanyModelGetPayload<T>> : Prisma__TempHSCompanyModelClient<TempHSCompanyModelGetPayload<T> | null, null>

    /**
     * Find one TempHSCompanyModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TempHSCompanyModelFindUniqueOrThrowArgs} args - Arguments to find a TempHSCompanyModel
     * @example
     * // Get one TempHSCompanyModel
     * const tempHSCompanyModel = await prisma.tempHSCompanyModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TempHSCompanyModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TempHSCompanyModelFindUniqueOrThrowArgs>
    ): Prisma__TempHSCompanyModelClient<TempHSCompanyModelGetPayload<T>>

    /**
     * Find the first TempHSCompanyModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempHSCompanyModelFindFirstArgs} args - Arguments to find a TempHSCompanyModel
     * @example
     * // Get one TempHSCompanyModel
     * const tempHSCompanyModel = await prisma.tempHSCompanyModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TempHSCompanyModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TempHSCompanyModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TempHSCompanyModel'> extends True ? Prisma__TempHSCompanyModelClient<TempHSCompanyModelGetPayload<T>> : Prisma__TempHSCompanyModelClient<TempHSCompanyModelGetPayload<T> | null, null>

    /**
     * Find the first TempHSCompanyModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempHSCompanyModelFindFirstOrThrowArgs} args - Arguments to find a TempHSCompanyModel
     * @example
     * // Get one TempHSCompanyModel
     * const tempHSCompanyModel = await prisma.tempHSCompanyModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TempHSCompanyModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TempHSCompanyModelFindFirstOrThrowArgs>
    ): Prisma__TempHSCompanyModelClient<TempHSCompanyModelGetPayload<T>>

    /**
     * Find zero or more TempHSCompanyModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempHSCompanyModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TempHSCompanyModels
     * const tempHSCompanyModels = await prisma.tempHSCompanyModel.findMany()
     * 
     * // Get first 10 TempHSCompanyModels
     * const tempHSCompanyModels = await prisma.tempHSCompanyModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tempHSCompanyModelWithIdOnly = await prisma.tempHSCompanyModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TempHSCompanyModelFindManyArgs>(
      args?: SelectSubset<T, TempHSCompanyModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<TempHSCompanyModelGetPayload<T>>>

    /**
     * Create a TempHSCompanyModel.
     * @param {TempHSCompanyModelCreateArgs} args - Arguments to create a TempHSCompanyModel.
     * @example
     * // Create one TempHSCompanyModel
     * const TempHSCompanyModel = await prisma.tempHSCompanyModel.create({
     *   data: {
     *     // ... data to create a TempHSCompanyModel
     *   }
     * })
     * 
    **/
    create<T extends TempHSCompanyModelCreateArgs>(
      args: SelectSubset<T, TempHSCompanyModelCreateArgs>
    ): Prisma__TempHSCompanyModelClient<TempHSCompanyModelGetPayload<T>>

    /**
     * Create many TempHSCompanyModels.
     *     @param {TempHSCompanyModelCreateManyArgs} args - Arguments to create many TempHSCompanyModels.
     *     @example
     *     // Create many TempHSCompanyModels
     *     const tempHSCompanyModel = await prisma.tempHSCompanyModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TempHSCompanyModelCreateManyArgs>(
      args?: SelectSubset<T, TempHSCompanyModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TempHSCompanyModel.
     * @param {TempHSCompanyModelDeleteArgs} args - Arguments to delete one TempHSCompanyModel.
     * @example
     * // Delete one TempHSCompanyModel
     * const TempHSCompanyModel = await prisma.tempHSCompanyModel.delete({
     *   where: {
     *     // ... filter to delete one TempHSCompanyModel
     *   }
     * })
     * 
    **/
    delete<T extends TempHSCompanyModelDeleteArgs>(
      args: SelectSubset<T, TempHSCompanyModelDeleteArgs>
    ): Prisma__TempHSCompanyModelClient<TempHSCompanyModelGetPayload<T>>

    /**
     * Update one TempHSCompanyModel.
     * @param {TempHSCompanyModelUpdateArgs} args - Arguments to update one TempHSCompanyModel.
     * @example
     * // Update one TempHSCompanyModel
     * const tempHSCompanyModel = await prisma.tempHSCompanyModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TempHSCompanyModelUpdateArgs>(
      args: SelectSubset<T, TempHSCompanyModelUpdateArgs>
    ): Prisma__TempHSCompanyModelClient<TempHSCompanyModelGetPayload<T>>

    /**
     * Delete zero or more TempHSCompanyModels.
     * @param {TempHSCompanyModelDeleteManyArgs} args - Arguments to filter TempHSCompanyModels to delete.
     * @example
     * // Delete a few TempHSCompanyModels
     * const { count } = await prisma.tempHSCompanyModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TempHSCompanyModelDeleteManyArgs>(
      args?: SelectSubset<T, TempHSCompanyModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempHSCompanyModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempHSCompanyModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TempHSCompanyModels
     * const tempHSCompanyModel = await prisma.tempHSCompanyModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TempHSCompanyModelUpdateManyArgs>(
      args: SelectSubset<T, TempHSCompanyModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TempHSCompanyModel.
     * @param {TempHSCompanyModelUpsertArgs} args - Arguments to update or create a TempHSCompanyModel.
     * @example
     * // Update or create a TempHSCompanyModel
     * const tempHSCompanyModel = await prisma.tempHSCompanyModel.upsert({
     *   create: {
     *     // ... data to create a TempHSCompanyModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TempHSCompanyModel we want to update
     *   }
     * })
    **/
    upsert<T extends TempHSCompanyModelUpsertArgs>(
      args: SelectSubset<T, TempHSCompanyModelUpsertArgs>
    ): Prisma__TempHSCompanyModelClient<TempHSCompanyModelGetPayload<T>>

    /**
     * Count the number of TempHSCompanyModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempHSCompanyModelCountArgs} args - Arguments to filter TempHSCompanyModels to count.
     * @example
     * // Count the number of TempHSCompanyModels
     * const count = await prisma.tempHSCompanyModel.count({
     *   where: {
     *     // ... the filter for the TempHSCompanyModels we want to count
     *   }
     * })
    **/
    count<T extends TempHSCompanyModelCountArgs>(
      args?: Subset<T, TempHSCompanyModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TempHSCompanyModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TempHSCompanyModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempHSCompanyModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TempHSCompanyModelAggregateArgs>(args: Subset<T, TempHSCompanyModelAggregateArgs>): Prisma.PrismaPromise<GetTempHSCompanyModelAggregateType<T>>

    /**
     * Group by TempHSCompanyModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempHSCompanyModelGroupByArgs} args - Group by arguments.
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
      T extends TempHSCompanyModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TempHSCompanyModelGroupByArgs['orderBy'] }
        : { orderBy?: TempHSCompanyModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TempHSCompanyModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTempHSCompanyModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TempHSCompanyModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TempHSCompanyModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    oauth_accessor<T extends AccessorModelArgs= {}>(args?: Subset<T, AccessorModelArgs>): Prisma__AccessorModelClient<AccessorModelGetPayload<T> | Null>;

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
   * TempHSCompanyModel base type for findUnique actions
   */
  export type TempHSCompanyModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TempHSCompanyModel
     */
    select?: TempHSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempHSCompanyModelInclude | null
    /**
     * Filter, which TempHSCompanyModel to fetch.
     */
    where: TempHSCompanyModelWhereUniqueInput
  }

  /**
   * TempHSCompanyModel findUnique
   */
  export interface TempHSCompanyModelFindUniqueArgs extends TempHSCompanyModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TempHSCompanyModel findUniqueOrThrow
   */
  export type TempHSCompanyModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TempHSCompanyModel
     */
    select?: TempHSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempHSCompanyModelInclude | null
    /**
     * Filter, which TempHSCompanyModel to fetch.
     */
    where: TempHSCompanyModelWhereUniqueInput
  }


  /**
   * TempHSCompanyModel base type for findFirst actions
   */
  export type TempHSCompanyModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TempHSCompanyModel
     */
    select?: TempHSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempHSCompanyModelInclude | null
    /**
     * Filter, which TempHSCompanyModel to fetch.
     */
    where?: TempHSCompanyModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempHSCompanyModels to fetch.
     */
    orderBy?: Enumerable<TempHSCompanyModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempHSCompanyModels.
     */
    cursor?: TempHSCompanyModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempHSCompanyModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempHSCompanyModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempHSCompanyModels.
     */
    distinct?: Enumerable<TempHSCompanyModelScalarFieldEnum>
  }

  /**
   * TempHSCompanyModel findFirst
   */
  export interface TempHSCompanyModelFindFirstArgs extends TempHSCompanyModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TempHSCompanyModel findFirstOrThrow
   */
  export type TempHSCompanyModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TempHSCompanyModel
     */
    select?: TempHSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempHSCompanyModelInclude | null
    /**
     * Filter, which TempHSCompanyModel to fetch.
     */
    where?: TempHSCompanyModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempHSCompanyModels to fetch.
     */
    orderBy?: Enumerable<TempHSCompanyModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempHSCompanyModels.
     */
    cursor?: TempHSCompanyModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempHSCompanyModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempHSCompanyModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempHSCompanyModels.
     */
    distinct?: Enumerable<TempHSCompanyModelScalarFieldEnum>
  }


  /**
   * TempHSCompanyModel findMany
   */
  export type TempHSCompanyModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the TempHSCompanyModel
     */
    select?: TempHSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempHSCompanyModelInclude | null
    /**
     * Filter, which TempHSCompanyModels to fetch.
     */
    where?: TempHSCompanyModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempHSCompanyModels to fetch.
     */
    orderBy?: Enumerable<TempHSCompanyModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TempHSCompanyModels.
     */
    cursor?: TempHSCompanyModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempHSCompanyModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempHSCompanyModels.
     */
    skip?: number
    distinct?: Enumerable<TempHSCompanyModelScalarFieldEnum>
  }


  /**
   * TempHSCompanyModel create
   */
  export type TempHSCompanyModelCreateArgs = {
    /**
     * Select specific fields to fetch from the TempHSCompanyModel
     */
    select?: TempHSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempHSCompanyModelInclude | null
    /**
     * The data needed to create a TempHSCompanyModel.
     */
    data: XOR<TempHSCompanyModelCreateInput, TempHSCompanyModelUncheckedCreateInput>
  }


  /**
   * TempHSCompanyModel createMany
   */
  export type TempHSCompanyModelCreateManyArgs = {
    /**
     * The data used to create many TempHSCompanyModels.
     */
    data: Enumerable<TempHSCompanyModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TempHSCompanyModel update
   */
  export type TempHSCompanyModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the TempHSCompanyModel
     */
    select?: TempHSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempHSCompanyModelInclude | null
    /**
     * The data needed to update a TempHSCompanyModel.
     */
    data: XOR<TempHSCompanyModelUpdateInput, TempHSCompanyModelUncheckedUpdateInput>
    /**
     * Choose, which TempHSCompanyModel to update.
     */
    where: TempHSCompanyModelWhereUniqueInput
  }


  /**
   * TempHSCompanyModel updateMany
   */
  export type TempHSCompanyModelUpdateManyArgs = {
    /**
     * The data used to update TempHSCompanyModels.
     */
    data: XOR<TempHSCompanyModelUpdateManyMutationInput, TempHSCompanyModelUncheckedUpdateManyInput>
    /**
     * Filter which TempHSCompanyModels to update
     */
    where?: TempHSCompanyModelWhereInput
  }


  /**
   * TempHSCompanyModel upsert
   */
  export type TempHSCompanyModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the TempHSCompanyModel
     */
    select?: TempHSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempHSCompanyModelInclude | null
    /**
     * The filter to search for the TempHSCompanyModel to update in case it exists.
     */
    where: TempHSCompanyModelWhereUniqueInput
    /**
     * In case the TempHSCompanyModel found by the `where` argument doesn't exist, create a new TempHSCompanyModel with this data.
     */
    create: XOR<TempHSCompanyModelCreateInput, TempHSCompanyModelUncheckedCreateInput>
    /**
     * In case the TempHSCompanyModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TempHSCompanyModelUpdateInput, TempHSCompanyModelUncheckedUpdateInput>
  }


  /**
   * TempHSCompanyModel delete
   */
  export type TempHSCompanyModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the TempHSCompanyModel
     */
    select?: TempHSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempHSCompanyModelInclude | null
    /**
     * Filter which TempHSCompanyModel to delete.
     */
    where: TempHSCompanyModelWhereUniqueInput
  }


  /**
   * TempHSCompanyModel deleteMany
   */
  export type TempHSCompanyModelDeleteManyArgs = {
    /**
     * Filter which TempHSCompanyModels to delete
     */
    where?: TempHSCompanyModelWhereInput
  }


  /**
   * TempHSCompanyModel without action
   */
  export type TempHSCompanyModelArgs = {
    /**
     * Select specific fields to fetch from the TempHSCompanyModel
     */
    select?: TempHSCompanyModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TempHSCompanyModelInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccessorModelScalarFieldEnum: {
    id: 'id',
    oauth_sub: 'oauth_sub',
    oauth_type: 'oauth_type',
    customer_id: 'customer_id',
    business_user_id: 'business_user_id'
  };

  export type AccessorModelScalarFieldEnum = (typeof AccessorModelScalarFieldEnum)[keyof typeof AccessorModelScalarFieldEnum]


  export const BusinessUserModelScalarFieldEnum: {
    id: 'id',
    profile_image_url: 'profile_image_url',
    introduction_title: 'introduction_title',
    introduction_content: 'introduction_content'
  };

  export type BusinessUserModelScalarFieldEnum = (typeof BusinessUserModelScalarFieldEnum)[keyof typeof BusinessUserModelScalarFieldEnum]


  export const CustomerModelScalarFieldEnum: {
    id: 'id',
    profile_image_url: 'profile_image_url',
    gender: 'gender',
    birth: 'birth',
    address_first: 'address_first',
    address_second: 'address_second'
  };

  export type CustomerModelScalarFieldEnum = (typeof CustomerModelScalarFieldEnum)[keyof typeof CustomerModelScalarFieldEnum]


  export const HSCompanyIntroductionImageModelScalarFieldEnum: {
    id: 'id',
    url: 'url',
    company_id: 'company_id'
  };

  export type HSCompanyIntroductionImageModelScalarFieldEnum = (typeof HSCompanyIntroductionImageModelScalarFieldEnum)[keyof typeof HSCompanyIntroductionImageModelScalarFieldEnum]


  export const HSCompanyModelScalarFieldEnum: {
    id: 'id',
    business_num: 'business_num',
    address_first: 'address_first',
    address_second: 'address_second'
  };

  export type HSCompanyModelScalarFieldEnum = (typeof HSCompanyModelScalarFieldEnum)[keyof typeof HSCompanyModelScalarFieldEnum]


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
    re_licensed_agent_name: 're_licensed_agent_name',
    re_address_first: 're_address_first',
    re_address_second: 're_address_second'
  };

  export type REAgentModelScalarFieldEnum = (typeof REAgentModelScalarFieldEnum)[keyof typeof REAgentModelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TempHSCompanyModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    email_verified: 'email_verified',
    phone: 'phone',
    phone_verified: 'phone_verified',
    profile_image_url: 'profile_image_url',
    address_first: 'address_first',
    address_second: 'address_second',
    introduction_title: 'introduction_title',
    introduction_content: 'introduction_content',
    business_num: 'business_num'
  };

  export type TempHSCompanyModelScalarFieldEnum = (typeof TempHSCompanyModelScalarFieldEnum)[keyof typeof TempHSCompanyModelScalarFieldEnum]


  export const TempREAgentModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    email_verified: 'email_verified',
    phone: 'phone',
    phone_verified: 'phone_verified',
    profile_image_url: 'profile_image_url',
    address_first: 'address_first',
    address_second: 'address_second',
    introduction_title: 'introduction_title',
    introduction_content: 'introduction_content',
    is_licensed: 'is_licensed',
    re_num: 're_num',
    re_name: 're_name',
    re_phone: 're_phone',
    re_licensed_agent_name: 're_licensed_agent_name'
  };

  export type TempREAgentModelScalarFieldEnum = (typeof TempREAgentModelScalarFieldEnum)[keyof typeof TempREAgentModelScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserModelScalarFieldEnum: {
    created_at: 'created_at',
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    email_verified: 'email_verified'
  };

  export type UserModelScalarFieldEnum = (typeof UserModelScalarFieldEnum)[keyof typeof UserModelScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type AccessorModelWhereInput = {
    AND?: Enumerable<AccessorModelWhereInput>
    OR?: Enumerable<AccessorModelWhereInput>
    NOT?: Enumerable<AccessorModelWhereInput>
    id?: StringFilter | string
    oauth_sub?: StringFilter | string
    oauth_type?: EnumOauthTypeFilter | OauthType
    customer_id?: StringNullableFilter | string | null
    business_user_id?: StringNullableFilter | string | null
    customer?: XOR<CustomerModelRelationFilter, CustomerModelWhereInput> | null
    business_user?: XOR<BusinessUserModelRelationFilter, BusinessUserModelWhereInput> | null
    temp_re_agents?: XOR<TempREAgentModelRelationFilter, TempREAgentModelWhereInput> | null
    temp_hs_company?: XOR<TempHSCompanyModelRelationFilter, TempHSCompanyModelWhereInput> | null
  }

  export type AccessorModelOrderByWithRelationInput = {
    id?: SortOrder
    oauth_sub?: SortOrder
    oauth_type?: SortOrder
    customer_id?: SortOrder
    business_user_id?: SortOrder
    customer?: CustomerModelOrderByWithRelationInput
    business_user?: BusinessUserModelOrderByWithRelationInput
    temp_re_agents?: TempREAgentModelOrderByWithRelationInput
    temp_hs_company?: TempHSCompanyModelOrderByWithRelationInput
  }

  export type AccessorModelWhereUniqueInput = {
    id?: string
    oauth_type_oauth_sub?: AccessorModelOauth_typeOauth_subCompoundUniqueInput
  }

  export type AccessorModelOrderByWithAggregationInput = {
    id?: SortOrder
    oauth_sub?: SortOrder
    oauth_type?: SortOrder
    customer_id?: SortOrder
    business_user_id?: SortOrder
    _count?: AccessorModelCountOrderByAggregateInput
    _max?: AccessorModelMaxOrderByAggregateInput
    _min?: AccessorModelMinOrderByAggregateInput
  }

  export type AccessorModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccessorModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccessorModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccessorModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    oauth_sub?: StringWithAggregatesFilter | string
    oauth_type?: EnumOauthTypeWithAggregatesFilter | OauthType
    customer_id?: StringNullableWithAggregatesFilter | string | null
    business_user_id?: StringNullableWithAggregatesFilter | string | null
  }

  export type UserModelWhereInput = {
    AND?: Enumerable<UserModelWhereInput>
    OR?: Enumerable<UserModelWhereInput>
    NOT?: Enumerable<UserModelWhereInput>
    created_at?: DateTimeFilter | Date | string
    id?: StringFilter | string
    name?: StringFilter | string
    phone?: StringFilter | string
    email?: StringNullableFilter | string | null
    email_verified?: BoolFilter | boolean
    customer?: XOR<CustomerModelRelationFilter, CustomerModelWhereInput> | null
    business_user?: XOR<BusinessUserModelRelationFilter, BusinessUserModelWhereInput> | null
  }

  export type UserModelOrderByWithRelationInput = {
    created_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    customer?: CustomerModelOrderByWithRelationInput
    business_user?: BusinessUserModelOrderByWithRelationInput
  }

  export type UserModelWhereUniqueInput = {
    id?: string
  }

  export type UserModelOrderByWithAggregationInput = {
    created_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    _count?: UserModelCountOrderByAggregateInput
    _max?: UserModelMaxOrderByAggregateInput
    _min?: UserModelMinOrderByAggregateInput
  }

  export type UserModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserModelScalarWhereWithAggregatesInput>
    created_at?: DateTimeWithAggregatesFilter | Date | string
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    email?: StringNullableWithAggregatesFilter | string | null
    email_verified?: BoolWithAggregatesFilter | boolean
  }

  export type CustomerModelWhereInput = {
    AND?: Enumerable<CustomerModelWhereInput>
    OR?: Enumerable<CustomerModelWhereInput>
    NOT?: Enumerable<CustomerModelWhereInput>
    id?: StringFilter | string
    profile_image_url?: StringNullableFilter | string | null
    gender?: EnumGenderTypeNullableFilter | GenderType | null
    birth?: StringNullableFilter | string | null
    address_first?: StringNullableFilter | string | null
    address_second?: StringNullableFilter | string | null
    base?: XOR<UserModelRelationFilter, UserModelWhereInput>
    oauth_accessors?: AccessorModelListRelationFilter
  }

  export type CustomerModelOrderByWithRelationInput = {
    id?: SortOrder
    profile_image_url?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    base?: UserModelOrderByWithRelationInput
    oauth_accessors?: AccessorModelOrderByRelationAggregateInput
  }

  export type CustomerModelWhereUniqueInput = {
    id?: string
  }

  export type CustomerModelOrderByWithAggregationInput = {
    id?: SortOrder
    profile_image_url?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    _count?: CustomerModelCountOrderByAggregateInput
    _max?: CustomerModelMaxOrderByAggregateInput
    _min?: CustomerModelMinOrderByAggregateInput
  }

  export type CustomerModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomerModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomerModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomerModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    profile_image_url?: StringNullableWithAggregatesFilter | string | null
    gender?: EnumGenderTypeNullableWithAggregatesFilter | GenderType | null
    birth?: StringNullableWithAggregatesFilter | string | null
    address_first?: StringNullableWithAggregatesFilter | string | null
    address_second?: StringNullableWithAggregatesFilter | string | null
  }

  export type BusinessUserModelWhereInput = {
    AND?: Enumerable<BusinessUserModelWhereInput>
    OR?: Enumerable<BusinessUserModelWhereInput>
    NOT?: Enumerable<BusinessUserModelWhereInput>
    id?: StringFilter | string
    profile_image_url?: StringFilter | string
    introduction_title?: StringFilter | string
    introduction_content?: StringFilter | string
    base?: XOR<UserModelRelationFilter, UserModelWhereInput>
    re_agent?: XOR<REAgentModelRelationFilter, REAgentModelWhereInput> | null
    hs_company?: XOR<HSCompanyModelRelationFilter, HSCompanyModelWhereInput> | null
    oauth_accessors?: AccessorModelListRelationFilter
  }

  export type BusinessUserModelOrderByWithRelationInput = {
    id?: SortOrder
    profile_image_url?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    base?: UserModelOrderByWithRelationInput
    re_agent?: REAgentModelOrderByWithRelationInput
    hs_company?: HSCompanyModelOrderByWithRelationInput
    oauth_accessors?: AccessorModelOrderByRelationAggregateInput
  }

  export type BusinessUserModelWhereUniqueInput = {
    id?: string
  }

  export type BusinessUserModelOrderByWithAggregationInput = {
    id?: SortOrder
    profile_image_url?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    _count?: BusinessUserModelCountOrderByAggregateInput
    _max?: BusinessUserModelMaxOrderByAggregateInput
    _min?: BusinessUserModelMinOrderByAggregateInput
  }

  export type BusinessUserModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BusinessUserModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<BusinessUserModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BusinessUserModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    profile_image_url?: StringWithAggregatesFilter | string
    introduction_title?: StringWithAggregatesFilter | string
    introduction_content?: StringWithAggregatesFilter | string
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
    re_address_first?: StringFilter | string
    re_address_second?: StringNullableFilter | string | null
    base?: XOR<BusinessUserModelRelationFilter, BusinessUserModelWhereInput>
  }

  export type REAgentModelOrderByWithRelationInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    re_num?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
    re_address_first?: SortOrder
    re_address_second?: SortOrder
    base?: BusinessUserModelOrderByWithRelationInput
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
    re_address_first?: SortOrder
    re_address_second?: SortOrder
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
    re_address_first?: StringWithAggregatesFilter | string
    re_address_second?: StringNullableWithAggregatesFilter | string | null
  }

  export type HSCompanyModelWhereInput = {
    AND?: Enumerable<HSCompanyModelWhereInput>
    OR?: Enumerable<HSCompanyModelWhereInput>
    NOT?: Enumerable<HSCompanyModelWhereInput>
    id?: StringFilter | string
    business_num?: StringFilter | string
    address_first?: StringFilter | string
    address_second?: StringNullableFilter | string | null
    base?: XOR<BusinessUserModelRelationFilter, BusinessUserModelWhereInput>
    introduction_images?: HSCompanyIntroductionImageModelListRelationFilter
  }

  export type HSCompanyModelOrderByWithRelationInput = {
    id?: SortOrder
    business_num?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    base?: BusinessUserModelOrderByWithRelationInput
    introduction_images?: HSCompanyIntroductionImageModelOrderByRelationAggregateInput
  }

  export type HSCompanyModelWhereUniqueInput = {
    id?: string
  }

  export type HSCompanyModelOrderByWithAggregationInput = {
    id?: SortOrder
    business_num?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    _count?: HSCompanyModelCountOrderByAggregateInput
    _max?: HSCompanyModelMaxOrderByAggregateInput
    _min?: HSCompanyModelMinOrderByAggregateInput
  }

  export type HSCompanyModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HSCompanyModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<HSCompanyModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HSCompanyModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    business_num?: StringWithAggregatesFilter | string
    address_first?: StringWithAggregatesFilter | string
    address_second?: StringNullableWithAggregatesFilter | string | null
  }

  export type HSCompanyIntroductionImageModelWhereInput = {
    AND?: Enumerable<HSCompanyIntroductionImageModelWhereInput>
    OR?: Enumerable<HSCompanyIntroductionImageModelWhereInput>
    NOT?: Enumerable<HSCompanyIntroductionImageModelWhereInput>
    id?: StringFilter | string
    url?: StringFilter | string
    company_id?: StringFilter | string
    company?: XOR<HSCompanyModelRelationFilter, HSCompanyModelWhereInput>
  }

  export type HSCompanyIntroductionImageModelOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    company_id?: SortOrder
    company?: HSCompanyModelOrderByWithRelationInput
  }

  export type HSCompanyIntroductionImageModelWhereUniqueInput = {
    id?: string
  }

  export type HSCompanyIntroductionImageModelOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    company_id?: SortOrder
    _count?: HSCompanyIntroductionImageModelCountOrderByAggregateInput
    _max?: HSCompanyIntroductionImageModelMaxOrderByAggregateInput
    _min?: HSCompanyIntroductionImageModelMinOrderByAggregateInput
  }

  export type HSCompanyIntroductionImageModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HSCompanyIntroductionImageModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<HSCompanyIntroductionImageModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HSCompanyIntroductionImageModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    company_id?: StringWithAggregatesFilter | string
  }

  export type TempREAgentModelWhereInput = {
    AND?: Enumerable<TempREAgentModelWhereInput>
    OR?: Enumerable<TempREAgentModelWhereInput>
    NOT?: Enumerable<TempREAgentModelWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    email_verified?: BoolFilter | boolean
    phone?: StringNullableFilter | string | null
    phone_verified?: BoolFilter | boolean
    profile_image_url?: StringNullableFilter | string | null
    address_first?: StringNullableFilter | string | null
    address_second?: StringNullableFilter | string | null
    introduction_title?: StringNullableFilter | string | null
    introduction_content?: StringNullableFilter | string | null
    is_licensed?: BoolNullableFilter | boolean | null
    re_num?: StringNullableFilter | string | null
    re_name?: StringNullableFilter | string | null
    re_phone?: StringNullableFilter | string | null
    re_licensed_agent_name?: StringNullableFilter | string | null
    oauth_accessor?: XOR<AccessorModelRelationFilter, AccessorModelWhereInput>
  }

  export type TempREAgentModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    phone_verified?: SortOrder
    profile_image_url?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    is_licensed?: SortOrder
    re_num?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
    oauth_accessor?: AccessorModelOrderByWithRelationInput
  }

  export type TempREAgentModelWhereUniqueInput = {
    id?: string
  }

  export type TempREAgentModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    phone_verified?: SortOrder
    profile_image_url?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    is_licensed?: SortOrder
    re_num?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
    _count?: TempREAgentModelCountOrderByAggregateInput
    _max?: TempREAgentModelMaxOrderByAggregateInput
    _min?: TempREAgentModelMinOrderByAggregateInput
  }

  export type TempREAgentModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TempREAgentModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<TempREAgentModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TempREAgentModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    email_verified?: BoolWithAggregatesFilter | boolean
    phone?: StringNullableWithAggregatesFilter | string | null
    phone_verified?: BoolWithAggregatesFilter | boolean
    profile_image_url?: StringNullableWithAggregatesFilter | string | null
    address_first?: StringNullableWithAggregatesFilter | string | null
    address_second?: StringNullableWithAggregatesFilter | string | null
    introduction_title?: StringNullableWithAggregatesFilter | string | null
    introduction_content?: StringNullableWithAggregatesFilter | string | null
    is_licensed?: BoolNullableWithAggregatesFilter | boolean | null
    re_num?: StringNullableWithAggregatesFilter | string | null
    re_name?: StringNullableWithAggregatesFilter | string | null
    re_phone?: StringNullableWithAggregatesFilter | string | null
    re_licensed_agent_name?: StringNullableWithAggregatesFilter | string | null
  }

  export type TempHSCompanyModelWhereInput = {
    AND?: Enumerable<TempHSCompanyModelWhereInput>
    OR?: Enumerable<TempHSCompanyModelWhereInput>
    NOT?: Enumerable<TempHSCompanyModelWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    email_verified?: BoolFilter | boolean
    phone?: StringNullableFilter | string | null
    phone_verified?: BoolFilter | boolean
    profile_image_url?: StringNullableFilter | string | null
    address_first?: StringNullableFilter | string | null
    address_second?: StringNullableFilter | string | null
    introduction_title?: StringNullableFilter | string | null
    introduction_content?: StringNullableFilter | string | null
    business_num?: StringNullableFilter | string | null
    oauth_accessor?: XOR<AccessorModelRelationFilter, AccessorModelWhereInput>
  }

  export type TempHSCompanyModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    phone_verified?: SortOrder
    profile_image_url?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    business_num?: SortOrder
    oauth_accessor?: AccessorModelOrderByWithRelationInput
  }

  export type TempHSCompanyModelWhereUniqueInput = {
    id?: string
  }

  export type TempHSCompanyModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    phone_verified?: SortOrder
    profile_image_url?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    business_num?: SortOrder
    _count?: TempHSCompanyModelCountOrderByAggregateInput
    _max?: TempHSCompanyModelMaxOrderByAggregateInput
    _min?: TempHSCompanyModelMinOrderByAggregateInput
  }

  export type TempHSCompanyModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TempHSCompanyModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<TempHSCompanyModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TempHSCompanyModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    email_verified?: BoolWithAggregatesFilter | boolean
    phone?: StringNullableWithAggregatesFilter | string | null
    phone_verified?: BoolWithAggregatesFilter | boolean
    profile_image_url?: StringNullableWithAggregatesFilter | string | null
    address_first?: StringNullableWithAggregatesFilter | string | null
    address_second?: StringNullableWithAggregatesFilter | string | null
    introduction_title?: StringNullableWithAggregatesFilter | string | null
    introduction_content?: StringNullableWithAggregatesFilter | string | null
    business_num?: StringNullableWithAggregatesFilter | string | null
  }

  export type AccessorModelCreateInput = {
    id: string
    oauth_sub: string
    oauth_type: OauthType
    customer?: CustomerModelCreateNestedOneWithoutOauth_accessorsInput
    business_user?: BusinessUserModelCreateNestedOneWithoutOauth_accessorsInput
    temp_re_agents?: TempREAgentModelCreateNestedOneWithoutOauth_accessorInput
    temp_hs_company?: TempHSCompanyModelCreateNestedOneWithoutOauth_accessorInput
  }

  export type AccessorModelUncheckedCreateInput = {
    id: string
    oauth_sub: string
    oauth_type: OauthType
    customer_id?: string | null
    business_user_id?: string | null
    temp_re_agents?: TempREAgentModelUncheckedCreateNestedOneWithoutOauth_accessorInput
    temp_hs_company?: TempHSCompanyModelUncheckedCreateNestedOneWithoutOauth_accessorInput
  }

  export type AccessorModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    customer?: CustomerModelUpdateOneWithoutOauth_accessorsNestedInput
    business_user?: BusinessUserModelUpdateOneWithoutOauth_accessorsNestedInput
    temp_re_agents?: TempREAgentModelUpdateOneWithoutOauth_accessorNestedInput
    temp_hs_company?: TempHSCompanyModelUpdateOneWithoutOauth_accessorNestedInput
  }

  export type AccessorModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    business_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    temp_re_agents?: TempREAgentModelUncheckedUpdateOneWithoutOauth_accessorNestedInput
    temp_hs_company?: TempHSCompanyModelUncheckedUpdateOneWithoutOauth_accessorNestedInput
  }

  export type AccessorModelCreateManyInput = {
    id: string
    oauth_sub: string
    oauth_type: OauthType
    customer_id?: string | null
    business_user_id?: string | null
  }

  export type AccessorModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
  }

  export type AccessorModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    business_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserModelCreateInput = {
    created_at: Date | string
    id: string
    name: string
    phone: string
    email?: string | null
    email_verified: boolean
    customer?: CustomerModelCreateNestedOneWithoutBaseInput
    business_user?: BusinessUserModelCreateNestedOneWithoutBaseInput
  }

  export type UserModelUncheckedCreateInput = {
    created_at: Date | string
    id: string
    name: string
    phone: string
    email?: string | null
    email_verified: boolean
    customer?: CustomerModelUncheckedCreateNestedOneWithoutBaseInput
    business_user?: BusinessUserModelUncheckedCreateNestedOneWithoutBaseInput
  }

  export type UserModelUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    customer?: CustomerModelUpdateOneWithoutBaseNestedInput
    business_user?: BusinessUserModelUpdateOneWithoutBaseNestedInput
  }

  export type UserModelUncheckedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    customer?: CustomerModelUncheckedUpdateOneWithoutBaseNestedInput
    business_user?: BusinessUserModelUncheckedUpdateOneWithoutBaseNestedInput
  }

  export type UserModelCreateManyInput = {
    created_at: Date | string
    id: string
    name: string
    phone: string
    email?: string | null
    email_verified: boolean
  }

  export type UserModelUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserModelUncheckedUpdateManyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerModelCreateInput = {
    profile_image_url?: string | null
    gender?: GenderType | null
    birth?: string | null
    address_first?: string | null
    address_second?: string | null
    base: UserModelCreateNestedOneWithoutCustomerInput
    oauth_accessors?: AccessorModelCreateNestedManyWithoutCustomerInput
  }

  export type CustomerModelUncheckedCreateInput = {
    id: string
    profile_image_url?: string | null
    gender?: GenderType | null
    birth?: string | null
    address_first?: string | null
    address_second?: string | null
    oauth_accessors?: AccessorModelUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerModelUpdateInput = {
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    base?: UserModelUpdateOneRequiredWithoutCustomerNestedInput
    oauth_accessors?: AccessorModelUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_accessors?: AccessorModelUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerModelCreateManyInput = {
    id: string
    profile_image_url?: string | null
    gender?: GenderType | null
    birth?: string | null
    address_first?: string | null
    address_second?: string | null
  }

  export type CustomerModelUpdateManyMutationInput = {
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessUserModelCreateInput = {
    profile_image_url: string
    introduction_title: string
    introduction_content: string
    base: UserModelCreateNestedOneWithoutBusiness_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_company?: HSCompanyModelCreateNestedOneWithoutBaseInput
    oauth_accessors?: AccessorModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelUncheckedCreateInput = {
    id: string
    profile_image_url: string
    introduction_title: string
    introduction_content: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_company?: HSCompanyModelUncheckedCreateNestedOneWithoutBaseInput
    oauth_accessors?: AccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelUpdateInput = {
    profile_image_url?: StringFieldUpdateOperationsInput | string
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBusiness_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_company?: HSCompanyModelUpdateOneWithoutBaseNestedInput
    oauth_accessors?: AccessorModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_company?: HSCompanyModelUncheckedUpdateOneWithoutBaseNestedInput
    oauth_accessors?: AccessorModelUncheckedUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserModelCreateManyInput = {
    id: string
    profile_image_url: string
    introduction_title: string
    introduction_content: string
  }

  export type BusinessUserModelUpdateManyMutationInput = {
    profile_image_url?: StringFieldUpdateOperationsInput | string
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessUserModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
  }

  export type REAgentModelCreateInput = {
    is_licensed: boolean
    re_num: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    re_address_first: string
    re_address_second?: string | null
    base: BusinessUserModelCreateNestedOneWithoutRe_agentInput
  }

  export type REAgentModelUncheckedCreateInput = {
    id: string
    is_licensed: boolean
    re_num: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    re_address_first: string
    re_address_second?: string | null
  }

  export type REAgentModelUpdateInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_num?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    re_address_first?: StringFieldUpdateOperationsInput | string
    re_address_second?: NullableStringFieldUpdateOperationsInput | string | null
    base?: BusinessUserModelUpdateOneRequiredWithoutRe_agentNestedInput
  }

  export type REAgentModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_num?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    re_address_first?: StringFieldUpdateOperationsInput | string
    re_address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type REAgentModelCreateManyInput = {
    id: string
    is_licensed: boolean
    re_num: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    re_address_first: string
    re_address_second?: string | null
  }

  export type REAgentModelUpdateManyMutationInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_num?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    re_address_first?: StringFieldUpdateOperationsInput | string
    re_address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type REAgentModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_num?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    re_address_first?: StringFieldUpdateOperationsInput | string
    re_address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HSCompanyModelCreateInput = {
    business_num: string
    address_first: string
    address_second?: string | null
    base: BusinessUserModelCreateNestedOneWithoutHs_companyInput
    introduction_images?: HSCompanyIntroductionImageModelCreateNestedManyWithoutCompanyInput
  }

  export type HSCompanyModelUncheckedCreateInput = {
    id: string
    business_num: string
    address_first: string
    address_second?: string | null
    introduction_images?: HSCompanyIntroductionImageModelUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type HSCompanyModelUpdateInput = {
    business_num?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    base?: BusinessUserModelUpdateOneRequiredWithoutHs_companyNestedInput
    introduction_images?: HSCompanyIntroductionImageModelUpdateManyWithoutCompanyNestedInput
  }

  export type HSCompanyModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_num?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_images?: HSCompanyIntroductionImageModelUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type HSCompanyModelCreateManyInput = {
    id: string
    business_num: string
    address_first: string
    address_second?: string | null
  }

  export type HSCompanyModelUpdateManyMutationInput = {
    business_num?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HSCompanyModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_num?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HSCompanyIntroductionImageModelCreateInput = {
    id: string
    url: string
    company: HSCompanyModelCreateNestedOneWithoutIntroduction_imagesInput
  }

  export type HSCompanyIntroductionImageModelUncheckedCreateInput = {
    id: string
    url: string
    company_id: string
  }

  export type HSCompanyIntroductionImageModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    company?: HSCompanyModelUpdateOneRequiredWithoutIntroduction_imagesNestedInput
  }

  export type HSCompanyIntroductionImageModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type HSCompanyIntroductionImageModelCreateManyInput = {
    id: string
    url: string
    company_id: string
  }

  export type HSCompanyIntroductionImageModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type HSCompanyIntroductionImageModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
  }

  export type TempREAgentModelCreateInput = {
    name?: string | null
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    profile_image_url?: string | null
    address_first?: string | null
    address_second?: string | null
    introduction_title?: string | null
    introduction_content?: string | null
    is_licensed?: boolean | null
    re_num?: string | null
    re_name?: string | null
    re_phone?: string | null
    re_licensed_agent_name?: string | null
    oauth_accessor: AccessorModelCreateNestedOneWithoutTemp_re_agentsInput
  }

  export type TempREAgentModelUncheckedCreateInput = {
    id: string
    name?: string | null
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    profile_image_url?: string | null
    address_first?: string | null
    address_second?: string | null
    introduction_title?: string | null
    introduction_content?: string | null
    is_licensed?: boolean | null
    re_num?: string | null
    re_name?: string | null
    re_phone?: string | null
    re_licensed_agent_name?: string | null
  }

  export type TempREAgentModelUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    is_licensed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    re_num?: NullableStringFieldUpdateOperationsInput | string | null
    re_name?: NullableStringFieldUpdateOperationsInput | string | null
    re_phone?: NullableStringFieldUpdateOperationsInput | string | null
    re_licensed_agent_name?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_accessor?: AccessorModelUpdateOneRequiredWithoutTemp_re_agentsNestedInput
  }

  export type TempREAgentModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    is_licensed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    re_num?: NullableStringFieldUpdateOperationsInput | string | null
    re_name?: NullableStringFieldUpdateOperationsInput | string | null
    re_phone?: NullableStringFieldUpdateOperationsInput | string | null
    re_licensed_agent_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TempREAgentModelCreateManyInput = {
    id: string
    name?: string | null
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    profile_image_url?: string | null
    address_first?: string | null
    address_second?: string | null
    introduction_title?: string | null
    introduction_content?: string | null
    is_licensed?: boolean | null
    re_num?: string | null
    re_name?: string | null
    re_phone?: string | null
    re_licensed_agent_name?: string | null
  }

  export type TempREAgentModelUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    is_licensed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    re_num?: NullableStringFieldUpdateOperationsInput | string | null
    re_name?: NullableStringFieldUpdateOperationsInput | string | null
    re_phone?: NullableStringFieldUpdateOperationsInput | string | null
    re_licensed_agent_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TempREAgentModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    is_licensed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    re_num?: NullableStringFieldUpdateOperationsInput | string | null
    re_name?: NullableStringFieldUpdateOperationsInput | string | null
    re_phone?: NullableStringFieldUpdateOperationsInput | string | null
    re_licensed_agent_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TempHSCompanyModelCreateInput = {
    name?: string | null
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    profile_image_url?: string | null
    address_first?: string | null
    address_second?: string | null
    introduction_title?: string | null
    introduction_content?: string | null
    business_num?: string | null
    oauth_accessor: AccessorModelCreateNestedOneWithoutTemp_hs_companyInput
  }

  export type TempHSCompanyModelUncheckedCreateInput = {
    id: string
    name?: string | null
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    profile_image_url?: string | null
    address_first?: string | null
    address_second?: string | null
    introduction_title?: string | null
    introduction_content?: string | null
    business_num?: string | null
  }

  export type TempHSCompanyModelUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_num?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_accessor?: AccessorModelUpdateOneRequiredWithoutTemp_hs_companyNestedInput
  }

  export type TempHSCompanyModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_num?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TempHSCompanyModelCreateManyInput = {
    id: string
    name?: string | null
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    profile_image_url?: string | null
    address_first?: string | null
    address_second?: string | null
    introduction_title?: string | null
    introduction_content?: string | null
    business_num?: string | null
  }

  export type TempHSCompanyModelUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_num?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TempHSCompanyModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_num?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type CustomerModelRelationFilter = {
    is?: CustomerModelWhereInput | null
    isNot?: CustomerModelWhereInput | null
  }

  export type BusinessUserModelRelationFilter = {
    is?: BusinessUserModelWhereInput
    isNot?: BusinessUserModelWhereInput
  }

  export type TempREAgentModelRelationFilter = {
    is?: TempREAgentModelWhereInput | null
    isNot?: TempREAgentModelWhereInput | null
  }

  export type TempHSCompanyModelRelationFilter = {
    is?: TempHSCompanyModelWhereInput | null
    isNot?: TempHSCompanyModelWhereInput | null
  }

  export type AccessorModelOauth_typeOauth_subCompoundUniqueInput = {
    oauth_type: OauthType
    oauth_sub: string
  }

  export type AccessorModelCountOrderByAggregateInput = {
    id?: SortOrder
    oauth_sub?: SortOrder
    oauth_type?: SortOrder
    customer_id?: SortOrder
    business_user_id?: SortOrder
  }

  export type AccessorModelMaxOrderByAggregateInput = {
    id?: SortOrder
    oauth_sub?: SortOrder
    oauth_type?: SortOrder
    customer_id?: SortOrder
    business_user_id?: SortOrder
  }

  export type AccessorModelMinOrderByAggregateInput = {
    id?: SortOrder
    oauth_sub?: SortOrder
    oauth_type?: SortOrder
    customer_id?: SortOrder
    business_user_id?: SortOrder
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

  export type UserModelCountOrderByAggregateInput = {
    created_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
  }

  export type UserModelMaxOrderByAggregateInput = {
    created_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
  }

  export type UserModelMinOrderByAggregateInput = {
    created_at?: SortOrder
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
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

  export type EnumGenderTypeNullableFilter = {
    equals?: GenderType | null
    in?: Enumerable<GenderType> | null
    notIn?: Enumerable<GenderType> | null
    not?: NestedEnumGenderTypeNullableFilter | GenderType | null
  }

  export type UserModelRelationFilter = {
    is?: UserModelWhereInput
    isNot?: UserModelWhereInput
  }

  export type AccessorModelListRelationFilter = {
    every?: AccessorModelWhereInput
    some?: AccessorModelWhereInput
    none?: AccessorModelWhereInput
  }

  export type AccessorModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerModelCountOrderByAggregateInput = {
    id?: SortOrder
    profile_image_url?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
  }

  export type CustomerModelMaxOrderByAggregateInput = {
    id?: SortOrder
    profile_image_url?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
  }

  export type CustomerModelMinOrderByAggregateInput = {
    id?: SortOrder
    profile_image_url?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
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

  export type REAgentModelRelationFilter = {
    is?: REAgentModelWhereInput | null
    isNot?: REAgentModelWhereInput | null
  }

  export type HSCompanyModelRelationFilter = {
    is?: HSCompanyModelWhereInput
    isNot?: HSCompanyModelWhereInput
  }

  export type BusinessUserModelCountOrderByAggregateInput = {
    id?: SortOrder
    profile_image_url?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
  }

  export type BusinessUserModelMaxOrderByAggregateInput = {
    id?: SortOrder
    profile_image_url?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
  }

  export type BusinessUserModelMinOrderByAggregateInput = {
    id?: SortOrder
    profile_image_url?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
  }

  export type REAgentModelCountOrderByAggregateInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    re_num?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
    re_address_first?: SortOrder
    re_address_second?: SortOrder
  }

  export type REAgentModelMaxOrderByAggregateInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    re_num?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
    re_address_first?: SortOrder
    re_address_second?: SortOrder
  }

  export type REAgentModelMinOrderByAggregateInput = {
    id?: SortOrder
    is_licensed?: SortOrder
    re_num?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
    re_address_first?: SortOrder
    re_address_second?: SortOrder
  }

  export type HSCompanyIntroductionImageModelListRelationFilter = {
    every?: HSCompanyIntroductionImageModelWhereInput
    some?: HSCompanyIntroductionImageModelWhereInput
    none?: HSCompanyIntroductionImageModelWhereInput
  }

  export type HSCompanyIntroductionImageModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HSCompanyModelCountOrderByAggregateInput = {
    id?: SortOrder
    business_num?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
  }

  export type HSCompanyModelMaxOrderByAggregateInput = {
    id?: SortOrder
    business_num?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
  }

  export type HSCompanyModelMinOrderByAggregateInput = {
    id?: SortOrder
    business_num?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
  }

  export type HSCompanyIntroductionImageModelCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    company_id?: SortOrder
  }

  export type HSCompanyIntroductionImageModelMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    company_id?: SortOrder
  }

  export type HSCompanyIntroductionImageModelMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    company_id?: SortOrder
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type AccessorModelRelationFilter = {
    is?: AccessorModelWhereInput
    isNot?: AccessorModelWhereInput
  }

  export type TempREAgentModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    phone_verified?: SortOrder
    profile_image_url?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    is_licensed?: SortOrder
    re_num?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
  }

  export type TempREAgentModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    phone_verified?: SortOrder
    profile_image_url?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    is_licensed?: SortOrder
    re_num?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
  }

  export type TempREAgentModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    phone_verified?: SortOrder
    profile_image_url?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    is_licensed?: SortOrder
    re_num?: SortOrder
    re_name?: SortOrder
    re_phone?: SortOrder
    re_licensed_agent_name?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type TempHSCompanyModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    phone_verified?: SortOrder
    profile_image_url?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    business_num?: SortOrder
  }

  export type TempHSCompanyModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    phone_verified?: SortOrder
    profile_image_url?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    business_num?: SortOrder
  }

  export type TempHSCompanyModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    phone?: SortOrder
    phone_verified?: SortOrder
    profile_image_url?: SortOrder
    address_first?: SortOrder
    address_second?: SortOrder
    introduction_title?: SortOrder
    introduction_content?: SortOrder
    business_num?: SortOrder
  }

  export type CustomerModelCreateNestedOneWithoutOauth_accessorsInput = {
    create?: XOR<CustomerModelCreateWithoutOauth_accessorsInput, CustomerModelUncheckedCreateWithoutOauth_accessorsInput>
    connectOrCreate?: CustomerModelCreateOrConnectWithoutOauth_accessorsInput
    connect?: CustomerModelWhereUniqueInput
  }

  export type BusinessUserModelCreateNestedOneWithoutOauth_accessorsInput = {
    create?: XOR<BusinessUserModelCreateWithoutOauth_accessorsInput, BusinessUserModelUncheckedCreateWithoutOauth_accessorsInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutOauth_accessorsInput
    connect?: BusinessUserModelWhereUniqueInput
  }

  export type TempREAgentModelCreateNestedOneWithoutOauth_accessorInput = {
    create?: XOR<TempREAgentModelCreateWithoutOauth_accessorInput, TempREAgentModelUncheckedCreateWithoutOauth_accessorInput>
    connectOrCreate?: TempREAgentModelCreateOrConnectWithoutOauth_accessorInput
    connect?: TempREAgentModelWhereUniqueInput
  }

  export type TempHSCompanyModelCreateNestedOneWithoutOauth_accessorInput = {
    create?: XOR<TempHSCompanyModelCreateWithoutOauth_accessorInput, TempHSCompanyModelUncheckedCreateWithoutOauth_accessorInput>
    connectOrCreate?: TempHSCompanyModelCreateOrConnectWithoutOauth_accessorInput
    connect?: TempHSCompanyModelWhereUniqueInput
  }

  export type TempREAgentModelUncheckedCreateNestedOneWithoutOauth_accessorInput = {
    create?: XOR<TempREAgentModelCreateWithoutOauth_accessorInput, TempREAgentModelUncheckedCreateWithoutOauth_accessorInput>
    connectOrCreate?: TempREAgentModelCreateOrConnectWithoutOauth_accessorInput
    connect?: TempREAgentModelWhereUniqueInput
  }

  export type TempHSCompanyModelUncheckedCreateNestedOneWithoutOauth_accessorInput = {
    create?: XOR<TempHSCompanyModelCreateWithoutOauth_accessorInput, TempHSCompanyModelUncheckedCreateWithoutOauth_accessorInput>
    connectOrCreate?: TempHSCompanyModelCreateOrConnectWithoutOauth_accessorInput
    connect?: TempHSCompanyModelWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumOauthTypeFieldUpdateOperationsInput = {
    set?: OauthType
  }

  export type CustomerModelUpdateOneWithoutOauth_accessorsNestedInput = {
    create?: XOR<CustomerModelCreateWithoutOauth_accessorsInput, CustomerModelUncheckedCreateWithoutOauth_accessorsInput>
    connectOrCreate?: CustomerModelCreateOrConnectWithoutOauth_accessorsInput
    upsert?: CustomerModelUpsertWithoutOauth_accessorsInput
    disconnect?: boolean
    delete?: boolean
    connect?: CustomerModelWhereUniqueInput
    update?: XOR<CustomerModelUpdateWithoutOauth_accessorsInput, CustomerModelUncheckedUpdateWithoutOauth_accessorsInput>
  }

  export type BusinessUserModelUpdateOneWithoutOauth_accessorsNestedInput = {
    create?: XOR<BusinessUserModelCreateWithoutOauth_accessorsInput, BusinessUserModelUncheckedCreateWithoutOauth_accessorsInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutOauth_accessorsInput
    upsert?: BusinessUserModelUpsertWithoutOauth_accessorsInput
    disconnect?: boolean
    delete?: boolean
    connect?: BusinessUserModelWhereUniqueInput
    update?: XOR<BusinessUserModelUpdateWithoutOauth_accessorsInput, BusinessUserModelUncheckedUpdateWithoutOauth_accessorsInput>
  }

  export type TempREAgentModelUpdateOneWithoutOauth_accessorNestedInput = {
    create?: XOR<TempREAgentModelCreateWithoutOauth_accessorInput, TempREAgentModelUncheckedCreateWithoutOauth_accessorInput>
    connectOrCreate?: TempREAgentModelCreateOrConnectWithoutOauth_accessorInput
    upsert?: TempREAgentModelUpsertWithoutOauth_accessorInput
    disconnect?: boolean
    delete?: boolean
    connect?: TempREAgentModelWhereUniqueInput
    update?: XOR<TempREAgentModelUpdateWithoutOauth_accessorInput, TempREAgentModelUncheckedUpdateWithoutOauth_accessorInput>
  }

  export type TempHSCompanyModelUpdateOneWithoutOauth_accessorNestedInput = {
    create?: XOR<TempHSCompanyModelCreateWithoutOauth_accessorInput, TempHSCompanyModelUncheckedCreateWithoutOauth_accessorInput>
    connectOrCreate?: TempHSCompanyModelCreateOrConnectWithoutOauth_accessorInput
    upsert?: TempHSCompanyModelUpsertWithoutOauth_accessorInput
    disconnect?: boolean
    delete?: boolean
    connect?: TempHSCompanyModelWhereUniqueInput
    update?: XOR<TempHSCompanyModelUpdateWithoutOauth_accessorInput, TempHSCompanyModelUncheckedUpdateWithoutOauth_accessorInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TempREAgentModelUncheckedUpdateOneWithoutOauth_accessorNestedInput = {
    create?: XOR<TempREAgentModelCreateWithoutOauth_accessorInput, TempREAgentModelUncheckedCreateWithoutOauth_accessorInput>
    connectOrCreate?: TempREAgentModelCreateOrConnectWithoutOauth_accessorInput
    upsert?: TempREAgentModelUpsertWithoutOauth_accessorInput
    disconnect?: boolean
    delete?: boolean
    connect?: TempREAgentModelWhereUniqueInput
    update?: XOR<TempREAgentModelUpdateWithoutOauth_accessorInput, TempREAgentModelUncheckedUpdateWithoutOauth_accessorInput>
  }

  export type TempHSCompanyModelUncheckedUpdateOneWithoutOauth_accessorNestedInput = {
    create?: XOR<TempHSCompanyModelCreateWithoutOauth_accessorInput, TempHSCompanyModelUncheckedCreateWithoutOauth_accessorInput>
    connectOrCreate?: TempHSCompanyModelCreateOrConnectWithoutOauth_accessorInput
    upsert?: TempHSCompanyModelUpsertWithoutOauth_accessorInput
    disconnect?: boolean
    delete?: boolean
    connect?: TempHSCompanyModelWhereUniqueInput
    update?: XOR<TempHSCompanyModelUpdateWithoutOauth_accessorInput, TempHSCompanyModelUncheckedUpdateWithoutOauth_accessorInput>
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type UserModelCreateNestedOneWithoutCustomerInput = {
    create?: XOR<UserModelCreateWithoutCustomerInput, UserModelUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutCustomerInput
    connect?: UserModelWhereUniqueInput
  }

  export type AccessorModelCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<AccessorModelCreateWithoutCustomerInput>, Enumerable<AccessorModelUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<AccessorModelCreateOrConnectWithoutCustomerInput>
    createMany?: AccessorModelCreateManyCustomerInputEnvelope
    connect?: Enumerable<AccessorModelWhereUniqueInput>
  }

  export type AccessorModelUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<AccessorModelCreateWithoutCustomerInput>, Enumerable<AccessorModelUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<AccessorModelCreateOrConnectWithoutCustomerInput>
    createMany?: AccessorModelCreateManyCustomerInputEnvelope
    connect?: Enumerable<AccessorModelWhereUniqueInput>
  }

  export type NullableEnumGenderTypeFieldUpdateOperationsInput = {
    set?: GenderType | null
  }

  export type UserModelUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<UserModelCreateWithoutCustomerInput, UserModelUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserModelCreateOrConnectWithoutCustomerInput
    upsert?: UserModelUpsertWithoutCustomerInput
    connect?: UserModelWhereUniqueInput
    update?: XOR<UserModelUpdateWithoutCustomerInput, UserModelUncheckedUpdateWithoutCustomerInput>
  }

  export type AccessorModelUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<AccessorModelCreateWithoutCustomerInput>, Enumerable<AccessorModelUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<AccessorModelCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<AccessorModelUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: AccessorModelCreateManyCustomerInputEnvelope
    set?: Enumerable<AccessorModelWhereUniqueInput>
    disconnect?: Enumerable<AccessorModelWhereUniqueInput>
    delete?: Enumerable<AccessorModelWhereUniqueInput>
    connect?: Enumerable<AccessorModelWhereUniqueInput>
    update?: Enumerable<AccessorModelUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<AccessorModelUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<AccessorModelScalarWhereInput>
  }

  export type AccessorModelUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<AccessorModelCreateWithoutCustomerInput>, Enumerable<AccessorModelUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<AccessorModelCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<AccessorModelUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: AccessorModelCreateManyCustomerInputEnvelope
    set?: Enumerable<AccessorModelWhereUniqueInput>
    disconnect?: Enumerable<AccessorModelWhereUniqueInput>
    delete?: Enumerable<AccessorModelWhereUniqueInput>
    connect?: Enumerable<AccessorModelWhereUniqueInput>
    update?: Enumerable<AccessorModelUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<AccessorModelUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<AccessorModelScalarWhereInput>
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

  export type HSCompanyModelCreateNestedOneWithoutBaseInput = {
    create?: XOR<HSCompanyModelCreateWithoutBaseInput, HSCompanyModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: HSCompanyModelCreateOrConnectWithoutBaseInput
    connect?: HSCompanyModelWhereUniqueInput
  }

  export type AccessorModelCreateNestedManyWithoutBusiness_userInput = {
    create?: XOR<Enumerable<AccessorModelCreateWithoutBusiness_userInput>, Enumerable<AccessorModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<AccessorModelCreateOrConnectWithoutBusiness_userInput>
    createMany?: AccessorModelCreateManyBusiness_userInputEnvelope
    connect?: Enumerable<AccessorModelWhereUniqueInput>
  }

  export type REAgentModelUncheckedCreateNestedOneWithoutBaseInput = {
    create?: XOR<REAgentModelCreateWithoutBaseInput, REAgentModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: REAgentModelCreateOrConnectWithoutBaseInput
    connect?: REAgentModelWhereUniqueInput
  }

  export type HSCompanyModelUncheckedCreateNestedOneWithoutBaseInput = {
    create?: XOR<HSCompanyModelCreateWithoutBaseInput, HSCompanyModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: HSCompanyModelCreateOrConnectWithoutBaseInput
    connect?: HSCompanyModelWhereUniqueInput
  }

  export type AccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput = {
    create?: XOR<Enumerable<AccessorModelCreateWithoutBusiness_userInput>, Enumerable<AccessorModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<AccessorModelCreateOrConnectWithoutBusiness_userInput>
    createMany?: AccessorModelCreateManyBusiness_userInputEnvelope
    connect?: Enumerable<AccessorModelWhereUniqueInput>
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

  export type HSCompanyModelUpdateOneWithoutBaseNestedInput = {
    create?: XOR<HSCompanyModelCreateWithoutBaseInput, HSCompanyModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: HSCompanyModelCreateOrConnectWithoutBaseInput
    upsert?: HSCompanyModelUpsertWithoutBaseInput
    disconnect?: boolean
    delete?: boolean
    connect?: HSCompanyModelWhereUniqueInput
    update?: XOR<HSCompanyModelUpdateWithoutBaseInput, HSCompanyModelUncheckedUpdateWithoutBaseInput>
  }

  export type AccessorModelUpdateManyWithoutBusiness_userNestedInput = {
    create?: XOR<Enumerable<AccessorModelCreateWithoutBusiness_userInput>, Enumerable<AccessorModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<AccessorModelCreateOrConnectWithoutBusiness_userInput>
    upsert?: Enumerable<AccessorModelUpsertWithWhereUniqueWithoutBusiness_userInput>
    createMany?: AccessorModelCreateManyBusiness_userInputEnvelope
    set?: Enumerable<AccessorModelWhereUniqueInput>
    disconnect?: Enumerable<AccessorModelWhereUniqueInput>
    delete?: Enumerable<AccessorModelWhereUniqueInput>
    connect?: Enumerable<AccessorModelWhereUniqueInput>
    update?: Enumerable<AccessorModelUpdateWithWhereUniqueWithoutBusiness_userInput>
    updateMany?: Enumerable<AccessorModelUpdateManyWithWhereWithoutBusiness_userInput>
    deleteMany?: Enumerable<AccessorModelScalarWhereInput>
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

  export type HSCompanyModelUncheckedUpdateOneWithoutBaseNestedInput = {
    create?: XOR<HSCompanyModelCreateWithoutBaseInput, HSCompanyModelUncheckedCreateWithoutBaseInput>
    connectOrCreate?: HSCompanyModelCreateOrConnectWithoutBaseInput
    upsert?: HSCompanyModelUpsertWithoutBaseInput
    disconnect?: boolean
    delete?: boolean
    connect?: HSCompanyModelWhereUniqueInput
    update?: XOR<HSCompanyModelUpdateWithoutBaseInput, HSCompanyModelUncheckedUpdateWithoutBaseInput>
  }

  export type AccessorModelUncheckedUpdateManyWithoutBusiness_userNestedInput = {
    create?: XOR<Enumerable<AccessorModelCreateWithoutBusiness_userInput>, Enumerable<AccessorModelUncheckedCreateWithoutBusiness_userInput>>
    connectOrCreate?: Enumerable<AccessorModelCreateOrConnectWithoutBusiness_userInput>
    upsert?: Enumerable<AccessorModelUpsertWithWhereUniqueWithoutBusiness_userInput>
    createMany?: AccessorModelCreateManyBusiness_userInputEnvelope
    set?: Enumerable<AccessorModelWhereUniqueInput>
    disconnect?: Enumerable<AccessorModelWhereUniqueInput>
    delete?: Enumerable<AccessorModelWhereUniqueInput>
    connect?: Enumerable<AccessorModelWhereUniqueInput>
    update?: Enumerable<AccessorModelUpdateWithWhereUniqueWithoutBusiness_userInput>
    updateMany?: Enumerable<AccessorModelUpdateManyWithWhereWithoutBusiness_userInput>
    deleteMany?: Enumerable<AccessorModelScalarWhereInput>
  }

  export type BusinessUserModelCreateNestedOneWithoutRe_agentInput = {
    create?: XOR<BusinessUserModelCreateWithoutRe_agentInput, BusinessUserModelUncheckedCreateWithoutRe_agentInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutRe_agentInput
    connect?: BusinessUserModelWhereUniqueInput
  }

  export type BusinessUserModelUpdateOneRequiredWithoutRe_agentNestedInput = {
    create?: XOR<BusinessUserModelCreateWithoutRe_agentInput, BusinessUserModelUncheckedCreateWithoutRe_agentInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutRe_agentInput
    upsert?: BusinessUserModelUpsertWithoutRe_agentInput
    connect?: BusinessUserModelWhereUniqueInput
    update?: XOR<BusinessUserModelUpdateWithoutRe_agentInput, BusinessUserModelUncheckedUpdateWithoutRe_agentInput>
  }

  export type BusinessUserModelCreateNestedOneWithoutHs_companyInput = {
    create?: XOR<BusinessUserModelCreateWithoutHs_companyInput, BusinessUserModelUncheckedCreateWithoutHs_companyInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutHs_companyInput
    connect?: BusinessUserModelWhereUniqueInput
  }

  export type HSCompanyIntroductionImageModelCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<HSCompanyIntroductionImageModelCreateWithoutCompanyInput>, Enumerable<HSCompanyIntroductionImageModelUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<HSCompanyIntroductionImageModelCreateOrConnectWithoutCompanyInput>
    createMany?: HSCompanyIntroductionImageModelCreateManyCompanyInputEnvelope
    connect?: Enumerable<HSCompanyIntroductionImageModelWhereUniqueInput>
  }

  export type HSCompanyIntroductionImageModelUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<HSCompanyIntroductionImageModelCreateWithoutCompanyInput>, Enumerable<HSCompanyIntroductionImageModelUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<HSCompanyIntroductionImageModelCreateOrConnectWithoutCompanyInput>
    createMany?: HSCompanyIntroductionImageModelCreateManyCompanyInputEnvelope
    connect?: Enumerable<HSCompanyIntroductionImageModelWhereUniqueInput>
  }

  export type BusinessUserModelUpdateOneRequiredWithoutHs_companyNestedInput = {
    create?: XOR<BusinessUserModelCreateWithoutHs_companyInput, BusinessUserModelUncheckedCreateWithoutHs_companyInput>
    connectOrCreate?: BusinessUserModelCreateOrConnectWithoutHs_companyInput
    upsert?: BusinessUserModelUpsertWithoutHs_companyInput
    connect?: BusinessUserModelWhereUniqueInput
    update?: XOR<BusinessUserModelUpdateWithoutHs_companyInput, BusinessUserModelUncheckedUpdateWithoutHs_companyInput>
  }

  export type HSCompanyIntroductionImageModelUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<HSCompanyIntroductionImageModelCreateWithoutCompanyInput>, Enumerable<HSCompanyIntroductionImageModelUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<HSCompanyIntroductionImageModelCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<HSCompanyIntroductionImageModelUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: HSCompanyIntroductionImageModelCreateManyCompanyInputEnvelope
    set?: Enumerable<HSCompanyIntroductionImageModelWhereUniqueInput>
    disconnect?: Enumerable<HSCompanyIntroductionImageModelWhereUniqueInput>
    delete?: Enumerable<HSCompanyIntroductionImageModelWhereUniqueInput>
    connect?: Enumerable<HSCompanyIntroductionImageModelWhereUniqueInput>
    update?: Enumerable<HSCompanyIntroductionImageModelUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<HSCompanyIntroductionImageModelUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<HSCompanyIntroductionImageModelScalarWhereInput>
  }

  export type HSCompanyIntroductionImageModelUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<HSCompanyIntroductionImageModelCreateWithoutCompanyInput>, Enumerable<HSCompanyIntroductionImageModelUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<HSCompanyIntroductionImageModelCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<HSCompanyIntroductionImageModelUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: HSCompanyIntroductionImageModelCreateManyCompanyInputEnvelope
    set?: Enumerable<HSCompanyIntroductionImageModelWhereUniqueInput>
    disconnect?: Enumerable<HSCompanyIntroductionImageModelWhereUniqueInput>
    delete?: Enumerable<HSCompanyIntroductionImageModelWhereUniqueInput>
    connect?: Enumerable<HSCompanyIntroductionImageModelWhereUniqueInput>
    update?: Enumerable<HSCompanyIntroductionImageModelUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<HSCompanyIntroductionImageModelUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<HSCompanyIntroductionImageModelScalarWhereInput>
  }

  export type HSCompanyModelCreateNestedOneWithoutIntroduction_imagesInput = {
    create?: XOR<HSCompanyModelCreateWithoutIntroduction_imagesInput, HSCompanyModelUncheckedCreateWithoutIntroduction_imagesInput>
    connectOrCreate?: HSCompanyModelCreateOrConnectWithoutIntroduction_imagesInput
    connect?: HSCompanyModelWhereUniqueInput
  }

  export type HSCompanyModelUpdateOneRequiredWithoutIntroduction_imagesNestedInput = {
    create?: XOR<HSCompanyModelCreateWithoutIntroduction_imagesInput, HSCompanyModelUncheckedCreateWithoutIntroduction_imagesInput>
    connectOrCreate?: HSCompanyModelCreateOrConnectWithoutIntroduction_imagesInput
    upsert?: HSCompanyModelUpsertWithoutIntroduction_imagesInput
    connect?: HSCompanyModelWhereUniqueInput
    update?: XOR<HSCompanyModelUpdateWithoutIntroduction_imagesInput, HSCompanyModelUncheckedUpdateWithoutIntroduction_imagesInput>
  }

  export type AccessorModelCreateNestedOneWithoutTemp_re_agentsInput = {
    create?: XOR<AccessorModelCreateWithoutTemp_re_agentsInput, AccessorModelUncheckedCreateWithoutTemp_re_agentsInput>
    connectOrCreate?: AccessorModelCreateOrConnectWithoutTemp_re_agentsInput
    connect?: AccessorModelWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type AccessorModelUpdateOneRequiredWithoutTemp_re_agentsNestedInput = {
    create?: XOR<AccessorModelCreateWithoutTemp_re_agentsInput, AccessorModelUncheckedCreateWithoutTemp_re_agentsInput>
    connectOrCreate?: AccessorModelCreateOrConnectWithoutTemp_re_agentsInput
    upsert?: AccessorModelUpsertWithoutTemp_re_agentsInput
    connect?: AccessorModelWhereUniqueInput
    update?: XOR<AccessorModelUpdateWithoutTemp_re_agentsInput, AccessorModelUncheckedUpdateWithoutTemp_re_agentsInput>
  }

  export type AccessorModelCreateNestedOneWithoutTemp_hs_companyInput = {
    create?: XOR<AccessorModelCreateWithoutTemp_hs_companyInput, AccessorModelUncheckedCreateWithoutTemp_hs_companyInput>
    connectOrCreate?: AccessorModelCreateOrConnectWithoutTemp_hs_companyInput
    connect?: AccessorModelWhereUniqueInput
  }

  export type AccessorModelUpdateOneRequiredWithoutTemp_hs_companyNestedInput = {
    create?: XOR<AccessorModelCreateWithoutTemp_hs_companyInput, AccessorModelUncheckedCreateWithoutTemp_hs_companyInput>
    connectOrCreate?: AccessorModelCreateOrConnectWithoutTemp_hs_companyInput
    upsert?: AccessorModelUpsertWithoutTemp_hs_companyInput
    connect?: AccessorModelWhereUniqueInput
    update?: XOR<AccessorModelUpdateWithoutTemp_hs_companyInput, AccessorModelUncheckedUpdateWithoutTemp_hs_companyInput>
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

  export type NestedEnumGenderTypeNullableFilter = {
    equals?: GenderType | null
    in?: Enumerable<GenderType> | null
    notIn?: Enumerable<GenderType> | null
    not?: NestedEnumGenderTypeNullableFilter | GenderType | null
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

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type CustomerModelCreateWithoutOauth_accessorsInput = {
    profile_image_url?: string | null
    gender?: GenderType | null
    birth?: string | null
    address_first?: string | null
    address_second?: string | null
    base: UserModelCreateNestedOneWithoutCustomerInput
  }

  export type CustomerModelUncheckedCreateWithoutOauth_accessorsInput = {
    id: string
    profile_image_url?: string | null
    gender?: GenderType | null
    birth?: string | null
    address_first?: string | null
    address_second?: string | null
  }

  export type CustomerModelCreateOrConnectWithoutOauth_accessorsInput = {
    where: CustomerModelWhereUniqueInput
    create: XOR<CustomerModelCreateWithoutOauth_accessorsInput, CustomerModelUncheckedCreateWithoutOauth_accessorsInput>
  }

  export type BusinessUserModelCreateWithoutOauth_accessorsInput = {
    profile_image_url: string
    introduction_title: string
    introduction_content: string
    base: UserModelCreateNestedOneWithoutBusiness_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_company?: HSCompanyModelCreateNestedOneWithoutBaseInput
  }

  export type BusinessUserModelUncheckedCreateWithoutOauth_accessorsInput = {
    id: string
    profile_image_url: string
    introduction_title: string
    introduction_content: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_company?: HSCompanyModelUncheckedCreateNestedOneWithoutBaseInput
  }

  export type BusinessUserModelCreateOrConnectWithoutOauth_accessorsInput = {
    where: BusinessUserModelWhereUniqueInput
    create: XOR<BusinessUserModelCreateWithoutOauth_accessorsInput, BusinessUserModelUncheckedCreateWithoutOauth_accessorsInput>
  }

  export type TempREAgentModelCreateWithoutOauth_accessorInput = {
    name?: string | null
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    profile_image_url?: string | null
    address_first?: string | null
    address_second?: string | null
    introduction_title?: string | null
    introduction_content?: string | null
    is_licensed?: boolean | null
    re_num?: string | null
    re_name?: string | null
    re_phone?: string | null
    re_licensed_agent_name?: string | null
  }

  export type TempREAgentModelUncheckedCreateWithoutOauth_accessorInput = {
    name?: string | null
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    profile_image_url?: string | null
    address_first?: string | null
    address_second?: string | null
    introduction_title?: string | null
    introduction_content?: string | null
    is_licensed?: boolean | null
    re_num?: string | null
    re_name?: string | null
    re_phone?: string | null
    re_licensed_agent_name?: string | null
  }

  export type TempREAgentModelCreateOrConnectWithoutOauth_accessorInput = {
    where: TempREAgentModelWhereUniqueInput
    create: XOR<TempREAgentModelCreateWithoutOauth_accessorInput, TempREAgentModelUncheckedCreateWithoutOauth_accessorInput>
  }

  export type TempHSCompanyModelCreateWithoutOauth_accessorInput = {
    name?: string | null
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    profile_image_url?: string | null
    address_first?: string | null
    address_second?: string | null
    introduction_title?: string | null
    introduction_content?: string | null
    business_num?: string | null
  }

  export type TempHSCompanyModelUncheckedCreateWithoutOauth_accessorInput = {
    name?: string | null
    email?: string | null
    email_verified: boolean
    phone?: string | null
    phone_verified: boolean
    profile_image_url?: string | null
    address_first?: string | null
    address_second?: string | null
    introduction_title?: string | null
    introduction_content?: string | null
    business_num?: string | null
  }

  export type TempHSCompanyModelCreateOrConnectWithoutOauth_accessorInput = {
    where: TempHSCompanyModelWhereUniqueInput
    create: XOR<TempHSCompanyModelCreateWithoutOauth_accessorInput, TempHSCompanyModelUncheckedCreateWithoutOauth_accessorInput>
  }

  export type CustomerModelUpsertWithoutOauth_accessorsInput = {
    update: XOR<CustomerModelUpdateWithoutOauth_accessorsInput, CustomerModelUncheckedUpdateWithoutOauth_accessorsInput>
    create: XOR<CustomerModelCreateWithoutOauth_accessorsInput, CustomerModelUncheckedCreateWithoutOauth_accessorsInput>
  }

  export type CustomerModelUpdateWithoutOauth_accessorsInput = {
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    base?: UserModelUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type CustomerModelUncheckedUpdateWithoutOauth_accessorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessUserModelUpsertWithoutOauth_accessorsInput = {
    update: XOR<BusinessUserModelUpdateWithoutOauth_accessorsInput, BusinessUserModelUncheckedUpdateWithoutOauth_accessorsInput>
    create: XOR<BusinessUserModelCreateWithoutOauth_accessorsInput, BusinessUserModelUncheckedCreateWithoutOauth_accessorsInput>
  }

  export type BusinessUserModelUpdateWithoutOauth_accessorsInput = {
    profile_image_url?: StringFieldUpdateOperationsInput | string
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBusiness_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_company?: HSCompanyModelUpdateOneWithoutBaseNestedInput
  }

  export type BusinessUserModelUncheckedUpdateWithoutOauth_accessorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_company?: HSCompanyModelUncheckedUpdateOneWithoutBaseNestedInput
  }

  export type TempREAgentModelUpsertWithoutOauth_accessorInput = {
    update: XOR<TempREAgentModelUpdateWithoutOauth_accessorInput, TempREAgentModelUncheckedUpdateWithoutOauth_accessorInput>
    create: XOR<TempREAgentModelCreateWithoutOauth_accessorInput, TempREAgentModelUncheckedCreateWithoutOauth_accessorInput>
  }

  export type TempREAgentModelUpdateWithoutOauth_accessorInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    is_licensed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    re_num?: NullableStringFieldUpdateOperationsInput | string | null
    re_name?: NullableStringFieldUpdateOperationsInput | string | null
    re_phone?: NullableStringFieldUpdateOperationsInput | string | null
    re_licensed_agent_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TempREAgentModelUncheckedUpdateWithoutOauth_accessorInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    is_licensed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    re_num?: NullableStringFieldUpdateOperationsInput | string | null
    re_name?: NullableStringFieldUpdateOperationsInput | string | null
    re_phone?: NullableStringFieldUpdateOperationsInput | string | null
    re_licensed_agent_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TempHSCompanyModelUpsertWithoutOauth_accessorInput = {
    update: XOR<TempHSCompanyModelUpdateWithoutOauth_accessorInput, TempHSCompanyModelUncheckedUpdateWithoutOauth_accessorInput>
    create: XOR<TempHSCompanyModelCreateWithoutOauth_accessorInput, TempHSCompanyModelUncheckedCreateWithoutOauth_accessorInput>
  }

  export type TempHSCompanyModelUpdateWithoutOauth_accessorInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_num?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TempHSCompanyModelUncheckedUpdateWithoutOauth_accessorInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: BoolFieldUpdateOperationsInput | boolean
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_title?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_content?: NullableStringFieldUpdateOperationsInput | string | null
    business_num?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerModelCreateWithoutBaseInput = {
    profile_image_url?: string | null
    gender?: GenderType | null
    birth?: string | null
    address_first?: string | null
    address_second?: string | null
    oauth_accessors?: AccessorModelCreateNestedManyWithoutCustomerInput
  }

  export type CustomerModelUncheckedCreateWithoutBaseInput = {
    profile_image_url?: string | null
    gender?: GenderType | null
    birth?: string | null
    address_first?: string | null
    address_second?: string | null
    oauth_accessors?: AccessorModelUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerModelCreateOrConnectWithoutBaseInput = {
    where: CustomerModelWhereUniqueInput
    create: XOR<CustomerModelCreateWithoutBaseInput, CustomerModelUncheckedCreateWithoutBaseInput>
  }

  export type BusinessUserModelCreateWithoutBaseInput = {
    profile_image_url: string
    introduction_title: string
    introduction_content: string
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    hs_company?: HSCompanyModelCreateNestedOneWithoutBaseInput
    oauth_accessors?: AccessorModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelUncheckedCreateWithoutBaseInput = {
    profile_image_url: string
    introduction_title: string
    introduction_content: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    hs_company?: HSCompanyModelUncheckedCreateNestedOneWithoutBaseInput
    oauth_accessors?: AccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelCreateOrConnectWithoutBaseInput = {
    where: BusinessUserModelWhereUniqueInput
    create: XOR<BusinessUserModelCreateWithoutBaseInput, BusinessUserModelUncheckedCreateWithoutBaseInput>
  }

  export type CustomerModelUpsertWithoutBaseInput = {
    update: XOR<CustomerModelUpdateWithoutBaseInput, CustomerModelUncheckedUpdateWithoutBaseInput>
    create: XOR<CustomerModelCreateWithoutBaseInput, CustomerModelUncheckedCreateWithoutBaseInput>
  }

  export type CustomerModelUpdateWithoutBaseInput = {
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_accessors?: AccessorModelUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerModelUncheckedUpdateWithoutBaseInput = {
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderTypeFieldUpdateOperationsInput | GenderType | null
    birth?: NullableStringFieldUpdateOperationsInput | string | null
    address_first?: NullableStringFieldUpdateOperationsInput | string | null
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    oauth_accessors?: AccessorModelUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type BusinessUserModelUpsertWithoutBaseInput = {
    update: XOR<BusinessUserModelUpdateWithoutBaseInput, BusinessUserModelUncheckedUpdateWithoutBaseInput>
    create: XOR<BusinessUserModelCreateWithoutBaseInput, BusinessUserModelUncheckedCreateWithoutBaseInput>
  }

  export type BusinessUserModelUpdateWithoutBaseInput = {
    profile_image_url?: StringFieldUpdateOperationsInput | string
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    hs_company?: HSCompanyModelUpdateOneWithoutBaseNestedInput
    oauth_accessors?: AccessorModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserModelUncheckedUpdateWithoutBaseInput = {
    profile_image_url?: StringFieldUpdateOperationsInput | string
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    hs_company?: HSCompanyModelUncheckedUpdateOneWithoutBaseNestedInput
    oauth_accessors?: AccessorModelUncheckedUpdateManyWithoutBusiness_userNestedInput
  }

  export type UserModelCreateWithoutCustomerInput = {
    created_at: Date | string
    id: string
    name: string
    phone: string
    email?: string | null
    email_verified: boolean
    business_user?: BusinessUserModelCreateNestedOneWithoutBaseInput
  }

  export type UserModelUncheckedCreateWithoutCustomerInput = {
    created_at: Date | string
    id: string
    name: string
    phone: string
    email?: string | null
    email_verified: boolean
    business_user?: BusinessUserModelUncheckedCreateNestedOneWithoutBaseInput
  }

  export type UserModelCreateOrConnectWithoutCustomerInput = {
    where: UserModelWhereUniqueInput
    create: XOR<UserModelCreateWithoutCustomerInput, UserModelUncheckedCreateWithoutCustomerInput>
  }

  export type AccessorModelCreateWithoutCustomerInput = {
    id: string
    oauth_sub: string
    oauth_type: OauthType
    business_user?: BusinessUserModelCreateNestedOneWithoutOauth_accessorsInput
    temp_re_agents?: TempREAgentModelCreateNestedOneWithoutOauth_accessorInput
    temp_hs_company?: TempHSCompanyModelCreateNestedOneWithoutOauth_accessorInput
  }

  export type AccessorModelUncheckedCreateWithoutCustomerInput = {
    id: string
    oauth_sub: string
    oauth_type: OauthType
    business_user_id?: string | null
    temp_re_agents?: TempREAgentModelUncheckedCreateNestedOneWithoutOauth_accessorInput
    temp_hs_company?: TempHSCompanyModelUncheckedCreateNestedOneWithoutOauth_accessorInput
  }

  export type AccessorModelCreateOrConnectWithoutCustomerInput = {
    where: AccessorModelWhereUniqueInput
    create: XOR<AccessorModelCreateWithoutCustomerInput, AccessorModelUncheckedCreateWithoutCustomerInput>
  }

  export type AccessorModelCreateManyCustomerInputEnvelope = {
    data: Enumerable<AccessorModelCreateManyCustomerInput>
    skipDuplicates?: boolean
  }

  export type UserModelUpsertWithoutCustomerInput = {
    update: XOR<UserModelUpdateWithoutCustomerInput, UserModelUncheckedUpdateWithoutCustomerInput>
    create: XOR<UserModelCreateWithoutCustomerInput, UserModelUncheckedCreateWithoutCustomerInput>
  }

  export type UserModelUpdateWithoutCustomerInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    business_user?: BusinessUserModelUpdateOneWithoutBaseNestedInput
  }

  export type UserModelUncheckedUpdateWithoutCustomerInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    business_user?: BusinessUserModelUncheckedUpdateOneWithoutBaseNestedInput
  }

  export type AccessorModelUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AccessorModelWhereUniqueInput
    update: XOR<AccessorModelUpdateWithoutCustomerInput, AccessorModelUncheckedUpdateWithoutCustomerInput>
    create: XOR<AccessorModelCreateWithoutCustomerInput, AccessorModelUncheckedCreateWithoutCustomerInput>
  }

  export type AccessorModelUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AccessorModelWhereUniqueInput
    data: XOR<AccessorModelUpdateWithoutCustomerInput, AccessorModelUncheckedUpdateWithoutCustomerInput>
  }

  export type AccessorModelUpdateManyWithWhereWithoutCustomerInput = {
    where: AccessorModelScalarWhereInput
    data: XOR<AccessorModelUpdateManyMutationInput, AccessorModelUncheckedUpdateManyWithoutOauth_accessorsInput>
  }

  export type AccessorModelScalarWhereInput = {
    AND?: Enumerable<AccessorModelScalarWhereInput>
    OR?: Enumerable<AccessorModelScalarWhereInput>
    NOT?: Enumerable<AccessorModelScalarWhereInput>
    id?: StringFilter | string
    oauth_sub?: StringFilter | string
    oauth_type?: EnumOauthTypeFilter | OauthType
    customer_id?: StringNullableFilter | string | null
    business_user_id?: StringNullableFilter | string | null
  }

  export type UserModelCreateWithoutBusiness_userInput = {
    created_at: Date | string
    id: string
    name: string
    phone: string
    email?: string | null
    email_verified: boolean
    customer?: CustomerModelCreateNestedOneWithoutBaseInput
  }

  export type UserModelUncheckedCreateWithoutBusiness_userInput = {
    created_at: Date | string
    id: string
    name: string
    phone: string
    email?: string | null
    email_verified: boolean
    customer?: CustomerModelUncheckedCreateNestedOneWithoutBaseInput
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
    re_address_first: string
    re_address_second?: string | null
  }

  export type REAgentModelUncheckedCreateWithoutBaseInput = {
    is_licensed: boolean
    re_num: string
    re_name: string
    re_phone: string
    re_licensed_agent_name: string
    re_address_first: string
    re_address_second?: string | null
  }

  export type REAgentModelCreateOrConnectWithoutBaseInput = {
    where: REAgentModelWhereUniqueInput
    create: XOR<REAgentModelCreateWithoutBaseInput, REAgentModelUncheckedCreateWithoutBaseInput>
  }

  export type HSCompanyModelCreateWithoutBaseInput = {
    business_num: string
    address_first: string
    address_second?: string | null
    introduction_images?: HSCompanyIntroductionImageModelCreateNestedManyWithoutCompanyInput
  }

  export type HSCompanyModelUncheckedCreateWithoutBaseInput = {
    business_num: string
    address_first: string
    address_second?: string | null
    introduction_images?: HSCompanyIntroductionImageModelUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type HSCompanyModelCreateOrConnectWithoutBaseInput = {
    where: HSCompanyModelWhereUniqueInput
    create: XOR<HSCompanyModelCreateWithoutBaseInput, HSCompanyModelUncheckedCreateWithoutBaseInput>
  }

  export type AccessorModelCreateWithoutBusiness_userInput = {
    id: string
    oauth_sub: string
    oauth_type: OauthType
    customer?: CustomerModelCreateNestedOneWithoutOauth_accessorsInput
    temp_re_agents?: TempREAgentModelCreateNestedOneWithoutOauth_accessorInput
    temp_hs_company?: TempHSCompanyModelCreateNestedOneWithoutOauth_accessorInput
  }

  export type AccessorModelUncheckedCreateWithoutBusiness_userInput = {
    id: string
    oauth_sub: string
    oauth_type: OauthType
    customer_id?: string | null
    temp_re_agents?: TempREAgentModelUncheckedCreateNestedOneWithoutOauth_accessorInput
    temp_hs_company?: TempHSCompanyModelUncheckedCreateNestedOneWithoutOauth_accessorInput
  }

  export type AccessorModelCreateOrConnectWithoutBusiness_userInput = {
    where: AccessorModelWhereUniqueInput
    create: XOR<AccessorModelCreateWithoutBusiness_userInput, AccessorModelUncheckedCreateWithoutBusiness_userInput>
  }

  export type AccessorModelCreateManyBusiness_userInputEnvelope = {
    data: Enumerable<AccessorModelCreateManyBusiness_userInput>
    skipDuplicates?: boolean
  }

  export type UserModelUpsertWithoutBusiness_userInput = {
    update: XOR<UserModelUpdateWithoutBusiness_userInput, UserModelUncheckedUpdateWithoutBusiness_userInput>
    create: XOR<UserModelCreateWithoutBusiness_userInput, UserModelUncheckedCreateWithoutBusiness_userInput>
  }

  export type UserModelUpdateWithoutBusiness_userInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    customer?: CustomerModelUpdateOneWithoutBaseNestedInput
  }

  export type UserModelUncheckedUpdateWithoutBusiness_userInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    customer?: CustomerModelUncheckedUpdateOneWithoutBaseNestedInput
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
    re_address_first?: StringFieldUpdateOperationsInput | string
    re_address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type REAgentModelUncheckedUpdateWithoutBaseInput = {
    is_licensed?: BoolFieldUpdateOperationsInput | boolean
    re_num?: StringFieldUpdateOperationsInput | string
    re_name?: StringFieldUpdateOperationsInput | string
    re_phone?: StringFieldUpdateOperationsInput | string
    re_licensed_agent_name?: StringFieldUpdateOperationsInput | string
    re_address_first?: StringFieldUpdateOperationsInput | string
    re_address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HSCompanyModelUpsertWithoutBaseInput = {
    update: XOR<HSCompanyModelUpdateWithoutBaseInput, HSCompanyModelUncheckedUpdateWithoutBaseInput>
    create: XOR<HSCompanyModelCreateWithoutBaseInput, HSCompanyModelUncheckedCreateWithoutBaseInput>
  }

  export type HSCompanyModelUpdateWithoutBaseInput = {
    business_num?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_images?: HSCompanyIntroductionImageModelUpdateManyWithoutCompanyNestedInput
  }

  export type HSCompanyModelUncheckedUpdateWithoutBaseInput = {
    business_num?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    introduction_images?: HSCompanyIntroductionImageModelUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type AccessorModelUpsertWithWhereUniqueWithoutBusiness_userInput = {
    where: AccessorModelWhereUniqueInput
    update: XOR<AccessorModelUpdateWithoutBusiness_userInput, AccessorModelUncheckedUpdateWithoutBusiness_userInput>
    create: XOR<AccessorModelCreateWithoutBusiness_userInput, AccessorModelUncheckedCreateWithoutBusiness_userInput>
  }

  export type AccessorModelUpdateWithWhereUniqueWithoutBusiness_userInput = {
    where: AccessorModelWhereUniqueInput
    data: XOR<AccessorModelUpdateWithoutBusiness_userInput, AccessorModelUncheckedUpdateWithoutBusiness_userInput>
  }

  export type AccessorModelUpdateManyWithWhereWithoutBusiness_userInput = {
    where: AccessorModelScalarWhereInput
    data: XOR<AccessorModelUpdateManyMutationInput, AccessorModelUncheckedUpdateManyWithoutOauth_accessorsInput>
  }

  export type BusinessUserModelCreateWithoutRe_agentInput = {
    profile_image_url: string
    introduction_title: string
    introduction_content: string
    base: UserModelCreateNestedOneWithoutBusiness_userInput
    hs_company?: HSCompanyModelCreateNestedOneWithoutBaseInput
    oauth_accessors?: AccessorModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelUncheckedCreateWithoutRe_agentInput = {
    id: string
    profile_image_url: string
    introduction_title: string
    introduction_content: string
    hs_company?: HSCompanyModelUncheckedCreateNestedOneWithoutBaseInput
    oauth_accessors?: AccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelCreateOrConnectWithoutRe_agentInput = {
    where: BusinessUserModelWhereUniqueInput
    create: XOR<BusinessUserModelCreateWithoutRe_agentInput, BusinessUserModelUncheckedCreateWithoutRe_agentInput>
  }

  export type BusinessUserModelUpsertWithoutRe_agentInput = {
    update: XOR<BusinessUserModelUpdateWithoutRe_agentInput, BusinessUserModelUncheckedUpdateWithoutRe_agentInput>
    create: XOR<BusinessUserModelCreateWithoutRe_agentInput, BusinessUserModelUncheckedCreateWithoutRe_agentInput>
  }

  export type BusinessUserModelUpdateWithoutRe_agentInput = {
    profile_image_url?: StringFieldUpdateOperationsInput | string
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBusiness_userNestedInput
    hs_company?: HSCompanyModelUpdateOneWithoutBaseNestedInput
    oauth_accessors?: AccessorModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserModelUncheckedUpdateWithoutRe_agentInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    hs_company?: HSCompanyModelUncheckedUpdateOneWithoutBaseNestedInput
    oauth_accessors?: AccessorModelUncheckedUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserModelCreateWithoutHs_companyInput = {
    profile_image_url: string
    introduction_title: string
    introduction_content: string
    base: UserModelCreateNestedOneWithoutBusiness_userInput
    re_agent?: REAgentModelCreateNestedOneWithoutBaseInput
    oauth_accessors?: AccessorModelCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelUncheckedCreateWithoutHs_companyInput = {
    id: string
    profile_image_url: string
    introduction_title: string
    introduction_content: string
    re_agent?: REAgentModelUncheckedCreateNestedOneWithoutBaseInput
    oauth_accessors?: AccessorModelUncheckedCreateNestedManyWithoutBusiness_userInput
  }

  export type BusinessUserModelCreateOrConnectWithoutHs_companyInput = {
    where: BusinessUserModelWhereUniqueInput
    create: XOR<BusinessUserModelCreateWithoutHs_companyInput, BusinessUserModelUncheckedCreateWithoutHs_companyInput>
  }

  export type HSCompanyIntroductionImageModelCreateWithoutCompanyInput = {
    id: string
    url: string
  }

  export type HSCompanyIntroductionImageModelUncheckedCreateWithoutCompanyInput = {
    id: string
    url: string
  }

  export type HSCompanyIntroductionImageModelCreateOrConnectWithoutCompanyInput = {
    where: HSCompanyIntroductionImageModelWhereUniqueInput
    create: XOR<HSCompanyIntroductionImageModelCreateWithoutCompanyInput, HSCompanyIntroductionImageModelUncheckedCreateWithoutCompanyInput>
  }

  export type HSCompanyIntroductionImageModelCreateManyCompanyInputEnvelope = {
    data: Enumerable<HSCompanyIntroductionImageModelCreateManyCompanyInput>
    skipDuplicates?: boolean
  }

  export type BusinessUserModelUpsertWithoutHs_companyInput = {
    update: XOR<BusinessUserModelUpdateWithoutHs_companyInput, BusinessUserModelUncheckedUpdateWithoutHs_companyInput>
    create: XOR<BusinessUserModelCreateWithoutHs_companyInput, BusinessUserModelUncheckedCreateWithoutHs_companyInput>
  }

  export type BusinessUserModelUpdateWithoutHs_companyInput = {
    profile_image_url?: StringFieldUpdateOperationsInput | string
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    base?: UserModelUpdateOneRequiredWithoutBusiness_userNestedInput
    re_agent?: REAgentModelUpdateOneWithoutBaseNestedInput
    oauth_accessors?: AccessorModelUpdateManyWithoutBusiness_userNestedInput
  }

  export type BusinessUserModelUncheckedUpdateWithoutHs_companyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile_image_url?: StringFieldUpdateOperationsInput | string
    introduction_title?: StringFieldUpdateOperationsInput | string
    introduction_content?: StringFieldUpdateOperationsInput | string
    re_agent?: REAgentModelUncheckedUpdateOneWithoutBaseNestedInput
    oauth_accessors?: AccessorModelUncheckedUpdateManyWithoutBusiness_userNestedInput
  }

  export type HSCompanyIntroductionImageModelUpsertWithWhereUniqueWithoutCompanyInput = {
    where: HSCompanyIntroductionImageModelWhereUniqueInput
    update: XOR<HSCompanyIntroductionImageModelUpdateWithoutCompanyInput, HSCompanyIntroductionImageModelUncheckedUpdateWithoutCompanyInput>
    create: XOR<HSCompanyIntroductionImageModelCreateWithoutCompanyInput, HSCompanyIntroductionImageModelUncheckedCreateWithoutCompanyInput>
  }

  export type HSCompanyIntroductionImageModelUpdateWithWhereUniqueWithoutCompanyInput = {
    where: HSCompanyIntroductionImageModelWhereUniqueInput
    data: XOR<HSCompanyIntroductionImageModelUpdateWithoutCompanyInput, HSCompanyIntroductionImageModelUncheckedUpdateWithoutCompanyInput>
  }

  export type HSCompanyIntroductionImageModelUpdateManyWithWhereWithoutCompanyInput = {
    where: HSCompanyIntroductionImageModelScalarWhereInput
    data: XOR<HSCompanyIntroductionImageModelUpdateManyMutationInput, HSCompanyIntroductionImageModelUncheckedUpdateManyWithoutIntroduction_imagesInput>
  }

  export type HSCompanyIntroductionImageModelScalarWhereInput = {
    AND?: Enumerable<HSCompanyIntroductionImageModelScalarWhereInput>
    OR?: Enumerable<HSCompanyIntroductionImageModelScalarWhereInput>
    NOT?: Enumerable<HSCompanyIntroductionImageModelScalarWhereInput>
    id?: StringFilter | string
    url?: StringFilter | string
    company_id?: StringFilter | string
  }

  export type HSCompanyModelCreateWithoutIntroduction_imagesInput = {
    business_num: string
    address_first: string
    address_second?: string | null
    base: BusinessUserModelCreateNestedOneWithoutHs_companyInput
  }

  export type HSCompanyModelUncheckedCreateWithoutIntroduction_imagesInput = {
    id: string
    business_num: string
    address_first: string
    address_second?: string | null
  }

  export type HSCompanyModelCreateOrConnectWithoutIntroduction_imagesInput = {
    where: HSCompanyModelWhereUniqueInput
    create: XOR<HSCompanyModelCreateWithoutIntroduction_imagesInput, HSCompanyModelUncheckedCreateWithoutIntroduction_imagesInput>
  }

  export type HSCompanyModelUpsertWithoutIntroduction_imagesInput = {
    update: XOR<HSCompanyModelUpdateWithoutIntroduction_imagesInput, HSCompanyModelUncheckedUpdateWithoutIntroduction_imagesInput>
    create: XOR<HSCompanyModelCreateWithoutIntroduction_imagesInput, HSCompanyModelUncheckedCreateWithoutIntroduction_imagesInput>
  }

  export type HSCompanyModelUpdateWithoutIntroduction_imagesInput = {
    business_num?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
    base?: BusinessUserModelUpdateOneRequiredWithoutHs_companyNestedInput
  }

  export type HSCompanyModelUncheckedUpdateWithoutIntroduction_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    business_num?: StringFieldUpdateOperationsInput | string
    address_first?: StringFieldUpdateOperationsInput | string
    address_second?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccessorModelCreateWithoutTemp_re_agentsInput = {
    id: string
    oauth_sub: string
    oauth_type: OauthType
    customer?: CustomerModelCreateNestedOneWithoutOauth_accessorsInput
    business_user?: BusinessUserModelCreateNestedOneWithoutOauth_accessorsInput
    temp_hs_company?: TempHSCompanyModelCreateNestedOneWithoutOauth_accessorInput
  }

  export type AccessorModelUncheckedCreateWithoutTemp_re_agentsInput = {
    id: string
    oauth_sub: string
    oauth_type: OauthType
    customer_id?: string | null
    business_user_id?: string | null
    temp_hs_company?: TempHSCompanyModelUncheckedCreateNestedOneWithoutOauth_accessorInput
  }

  export type AccessorModelCreateOrConnectWithoutTemp_re_agentsInput = {
    where: AccessorModelWhereUniqueInput
    create: XOR<AccessorModelCreateWithoutTemp_re_agentsInput, AccessorModelUncheckedCreateWithoutTemp_re_agentsInput>
  }

  export type AccessorModelUpsertWithoutTemp_re_agentsInput = {
    update: XOR<AccessorModelUpdateWithoutTemp_re_agentsInput, AccessorModelUncheckedUpdateWithoutTemp_re_agentsInput>
    create: XOR<AccessorModelCreateWithoutTemp_re_agentsInput, AccessorModelUncheckedCreateWithoutTemp_re_agentsInput>
  }

  export type AccessorModelUpdateWithoutTemp_re_agentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    customer?: CustomerModelUpdateOneWithoutOauth_accessorsNestedInput
    business_user?: BusinessUserModelUpdateOneWithoutOauth_accessorsNestedInput
    temp_hs_company?: TempHSCompanyModelUpdateOneWithoutOauth_accessorNestedInput
  }

  export type AccessorModelUncheckedUpdateWithoutTemp_re_agentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    business_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    temp_hs_company?: TempHSCompanyModelUncheckedUpdateOneWithoutOauth_accessorNestedInput
  }

  export type AccessorModelCreateWithoutTemp_hs_companyInput = {
    id: string
    oauth_sub: string
    oauth_type: OauthType
    customer?: CustomerModelCreateNestedOneWithoutOauth_accessorsInput
    business_user?: BusinessUserModelCreateNestedOneWithoutOauth_accessorsInput
    temp_re_agents?: TempREAgentModelCreateNestedOneWithoutOauth_accessorInput
  }

  export type AccessorModelUncheckedCreateWithoutTemp_hs_companyInput = {
    id: string
    oauth_sub: string
    oauth_type: OauthType
    customer_id?: string | null
    business_user_id?: string | null
    temp_re_agents?: TempREAgentModelUncheckedCreateNestedOneWithoutOauth_accessorInput
  }

  export type AccessorModelCreateOrConnectWithoutTemp_hs_companyInput = {
    where: AccessorModelWhereUniqueInput
    create: XOR<AccessorModelCreateWithoutTemp_hs_companyInput, AccessorModelUncheckedCreateWithoutTemp_hs_companyInput>
  }

  export type AccessorModelUpsertWithoutTemp_hs_companyInput = {
    update: XOR<AccessorModelUpdateWithoutTemp_hs_companyInput, AccessorModelUncheckedUpdateWithoutTemp_hs_companyInput>
    create: XOR<AccessorModelCreateWithoutTemp_hs_companyInput, AccessorModelUncheckedCreateWithoutTemp_hs_companyInput>
  }

  export type AccessorModelUpdateWithoutTemp_hs_companyInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    customer?: CustomerModelUpdateOneWithoutOauth_accessorsNestedInput
    business_user?: BusinessUserModelUpdateOneWithoutOauth_accessorsNestedInput
    temp_re_agents?: TempREAgentModelUpdateOneWithoutOauth_accessorNestedInput
  }

  export type AccessorModelUncheckedUpdateWithoutTemp_hs_companyInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    business_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    temp_re_agents?: TempREAgentModelUncheckedUpdateOneWithoutOauth_accessorNestedInput
  }

  export type AccessorModelCreateManyCustomerInput = {
    id: string
    oauth_sub: string
    oauth_type: OauthType
    business_user_id?: string | null
  }

  export type AccessorModelUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    business_user?: BusinessUserModelUpdateOneWithoutOauth_accessorsNestedInput
    temp_re_agents?: TempREAgentModelUpdateOneWithoutOauth_accessorNestedInput
    temp_hs_company?: TempHSCompanyModelUpdateOneWithoutOauth_accessorNestedInput
  }

  export type AccessorModelUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    business_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    temp_re_agents?: TempREAgentModelUncheckedUpdateOneWithoutOauth_accessorNestedInput
    temp_hs_company?: TempHSCompanyModelUncheckedUpdateOneWithoutOauth_accessorNestedInput
  }

  export type AccessorModelUncheckedUpdateManyWithoutOauth_accessorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    business_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccessorModelCreateManyBusiness_userInput = {
    id: string
    oauth_sub: string
    oauth_type: OauthType
    customer_id?: string | null
  }

  export type AccessorModelUpdateWithoutBusiness_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    customer?: CustomerModelUpdateOneWithoutOauth_accessorsNestedInput
    temp_re_agents?: TempREAgentModelUpdateOneWithoutOauth_accessorNestedInput
    temp_hs_company?: TempHSCompanyModelUpdateOneWithoutOauth_accessorNestedInput
  }

  export type AccessorModelUncheckedUpdateWithoutBusiness_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    oauth_sub?: StringFieldUpdateOperationsInput | string
    oauth_type?: EnumOauthTypeFieldUpdateOperationsInput | OauthType
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    temp_re_agents?: TempREAgentModelUncheckedUpdateOneWithoutOauth_accessorNestedInput
    temp_hs_company?: TempHSCompanyModelUncheckedUpdateOneWithoutOauth_accessorNestedInput
  }

  export type HSCompanyIntroductionImageModelCreateManyCompanyInput = {
    id: string
    url: string
  }

  export type HSCompanyIntroductionImageModelUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type HSCompanyIntroductionImageModelUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type HSCompanyIntroductionImageModelUncheckedUpdateManyWithoutIntroduction_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
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
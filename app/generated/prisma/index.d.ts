
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model Hanshuang
 * 
 */
export type Hanshuang = $Result.DefaultSelection<Prisma.$HanshuangPayload>
/**
 * Model HanshuangScore
 * 
 */
export type HanshuangScore = $Result.DefaultSelection<Prisma.$HanshuangScorePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hanshuang`: Exposes CRUD operations for the **Hanshuang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hanshuangs
    * const hanshuangs = await prisma.hanshuang.findMany()
    * ```
    */
  get hanshuang(): Prisma.HanshuangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hanshuangScore`: Exposes CRUD operations for the **HanshuangScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HanshuangScores
    * const hanshuangScores = await prisma.hanshuangScore.findMany()
    * ```
    */
  get hanshuangScore(): Prisma.HanshuangScoreDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Player: 'Player',
    Game: 'Game',
    Hanshuang: 'Hanshuang',
    HanshuangScore: 'HanshuangScore'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "player" | "game" | "hanshuang" | "hanshuangScore"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      Hanshuang: {
        payload: Prisma.$HanshuangPayload<ExtArgs>
        fields: Prisma.HanshuangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HanshuangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HanshuangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangPayload>
          }
          findFirst: {
            args: Prisma.HanshuangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HanshuangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangPayload>
          }
          findMany: {
            args: Prisma.HanshuangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangPayload>[]
          }
          create: {
            args: Prisma.HanshuangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangPayload>
          }
          createMany: {
            args: Prisma.HanshuangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HanshuangCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangPayload>[]
          }
          delete: {
            args: Prisma.HanshuangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangPayload>
          }
          update: {
            args: Prisma.HanshuangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangPayload>
          }
          deleteMany: {
            args: Prisma.HanshuangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HanshuangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HanshuangUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangPayload>[]
          }
          upsert: {
            args: Prisma.HanshuangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangPayload>
          }
          aggregate: {
            args: Prisma.HanshuangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHanshuang>
          }
          groupBy: {
            args: Prisma.HanshuangGroupByArgs<ExtArgs>
            result: $Utils.Optional<HanshuangGroupByOutputType>[]
          }
          count: {
            args: Prisma.HanshuangCountArgs<ExtArgs>
            result: $Utils.Optional<HanshuangCountAggregateOutputType> | number
          }
        }
      }
      HanshuangScore: {
        payload: Prisma.$HanshuangScorePayload<ExtArgs>
        fields: Prisma.HanshuangScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HanshuangScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HanshuangScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangScorePayload>
          }
          findFirst: {
            args: Prisma.HanshuangScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HanshuangScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangScorePayload>
          }
          findMany: {
            args: Prisma.HanshuangScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangScorePayload>[]
          }
          create: {
            args: Prisma.HanshuangScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangScorePayload>
          }
          createMany: {
            args: Prisma.HanshuangScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HanshuangScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangScorePayload>[]
          }
          delete: {
            args: Prisma.HanshuangScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangScorePayload>
          }
          update: {
            args: Prisma.HanshuangScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangScorePayload>
          }
          deleteMany: {
            args: Prisma.HanshuangScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HanshuangScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HanshuangScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangScorePayload>[]
          }
          upsert: {
            args: Prisma.HanshuangScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HanshuangScorePayload>
          }
          aggregate: {
            args: Prisma.HanshuangScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHanshuangScore>
          }
          groupBy: {
            args: Prisma.HanshuangScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<HanshuangScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.HanshuangScoreCountArgs<ExtArgs>
            result: $Utils.Optional<HanshuangScoreCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    player?: PlayerOmit
    game?: GameOmit
    hanshuang?: HanshuangOmit
    hanshuangScore?: HanshuangScoreOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

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
    players: number
    games: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | UserCountOutputTypeCountPlayersArgs
    games?: boolean | UserCountOutputTypeCountGamesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    scores: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | PlayerCountOutputTypeCountScoresArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HanshuangScoreWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    hanshuangs: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hanshuangs?: boolean | GameCountOutputTypeCountHanshuangsArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountHanshuangsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HanshuangWhereInput
  }


  /**
   * Count Type HanshuangCountOutputType
   */

  export type HanshuangCountOutputType = {
    scores: number
  }

  export type HanshuangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | HanshuangCountOutputTypeCountScoresArgs
  }

  // Custom InputTypes
  /**
   * HanshuangCountOutputType without action
   */
  export type HanshuangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HanshuangCountOutputType
     */
    select?: HanshuangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HanshuangCountOutputType without action
   */
  export type HanshuangCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HanshuangScoreWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    players?: boolean | User$playersArgs<ExtArgs>
    games?: boolean | User$gamesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | User$playersArgs<ExtArgs>
    games?: boolean | User$gamesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      players: Prisma.$PlayerPayload<ExtArgs>[]
      games: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    players<T extends User$playersArgs<ExtArgs> = {}>(args?: Subset<T, User$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    games<T extends User$gamesArgs<ExtArgs> = {}>(args?: Subset<T, User$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.players
   */
  export type User$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    cursor?: PlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * User.games
   */
  export type User$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PlayerSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PlayerSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: number
    name: string
    userId: number
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    scores?: boolean | Player$scoresArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | Player$scoresArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      scores: Prisma.$HanshuangScorePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      userId: number
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
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
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scores<T extends Player$scoresArgs<ExtArgs> = {}>(args?: Subset<T, Player$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HanshuangScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'Int'>
    readonly name: FieldRef<"Player", 'String'>
    readonly userId: FieldRef<"Player", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player.scores
   */
  export type Player$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HanshuangScore
     */
    select?: HanshuangScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HanshuangScore
     */
    omit?: HanshuangScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangScoreInclude<ExtArgs> | null
    where?: HanshuangScoreWhereInput
    orderBy?: HanshuangScoreOrderByWithRelationInput | HanshuangScoreOrderByWithRelationInput[]
    cursor?: HanshuangScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HanshuangScoreScalarFieldEnum | HanshuangScoreScalarFieldEnum[]
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    date: string | null
    userId: number | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    date: string | null
    userId: number | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    date: number
    userId: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    date?: true
    userId?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    date?: true
    userId?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: number
    date: string
    userId: number
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    hanshuangs?: boolean | Game$hanshuangsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    date?: boolean
    userId?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "userId", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hanshuangs?: boolean | Game$hanshuangsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      hanshuangs: Prisma.$HanshuangPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: string
      userId: number
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
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
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hanshuangs<T extends Game$hanshuangsArgs<ExtArgs> = {}>(args?: Subset<T, Game$hanshuangsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HanshuangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'Int'>
    readonly date: FieldRef<"Game", 'String'>
    readonly userId: FieldRef<"Game", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.hanshuangs
   */
  export type Game$hanshuangsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hanshuang
     */
    select?: HanshuangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hanshuang
     */
    omit?: HanshuangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangInclude<ExtArgs> | null
    where?: HanshuangWhereInput
    orderBy?: HanshuangOrderByWithRelationInput | HanshuangOrderByWithRelationInput[]
    cursor?: HanshuangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HanshuangScalarFieldEnum | HanshuangScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model Hanshuang
   */

  export type AggregateHanshuang = {
    _count: HanshuangCountAggregateOutputType | null
    _avg: HanshuangAvgAggregateOutputType | null
    _sum: HanshuangSumAggregateOutputType | null
    _min: HanshuangMinAggregateOutputType | null
    _max: HanshuangMaxAggregateOutputType | null
  }

  export type HanshuangAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
  }

  export type HanshuangSumAggregateOutputType = {
    id: number | null
    gameId: number | null
  }

  export type HanshuangMinAggregateOutputType = {
    id: number | null
    gameId: number | null
    createdAt: Date | null
  }

  export type HanshuangMaxAggregateOutputType = {
    id: number | null
    gameId: number | null
    createdAt: Date | null
  }

  export type HanshuangCountAggregateOutputType = {
    id: number
    gameId: number
    createdAt: number
    _all: number
  }


  export type HanshuangAvgAggregateInputType = {
    id?: true
    gameId?: true
  }

  export type HanshuangSumAggregateInputType = {
    id?: true
    gameId?: true
  }

  export type HanshuangMinAggregateInputType = {
    id?: true
    gameId?: true
    createdAt?: true
  }

  export type HanshuangMaxAggregateInputType = {
    id?: true
    gameId?: true
    createdAt?: true
  }

  export type HanshuangCountAggregateInputType = {
    id?: true
    gameId?: true
    createdAt?: true
    _all?: true
  }

  export type HanshuangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hanshuang to aggregate.
     */
    where?: HanshuangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hanshuangs to fetch.
     */
    orderBy?: HanshuangOrderByWithRelationInput | HanshuangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HanshuangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hanshuangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hanshuangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hanshuangs
    **/
    _count?: true | HanshuangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HanshuangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HanshuangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HanshuangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HanshuangMaxAggregateInputType
  }

  export type GetHanshuangAggregateType<T extends HanshuangAggregateArgs> = {
        [P in keyof T & keyof AggregateHanshuang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHanshuang[P]>
      : GetScalarType<T[P], AggregateHanshuang[P]>
  }




  export type HanshuangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HanshuangWhereInput
    orderBy?: HanshuangOrderByWithAggregationInput | HanshuangOrderByWithAggregationInput[]
    by: HanshuangScalarFieldEnum[] | HanshuangScalarFieldEnum
    having?: HanshuangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HanshuangCountAggregateInputType | true
    _avg?: HanshuangAvgAggregateInputType
    _sum?: HanshuangSumAggregateInputType
    _min?: HanshuangMinAggregateInputType
    _max?: HanshuangMaxAggregateInputType
  }

  export type HanshuangGroupByOutputType = {
    id: number
    gameId: number
    createdAt: Date
    _count: HanshuangCountAggregateOutputType | null
    _avg: HanshuangAvgAggregateOutputType | null
    _sum: HanshuangSumAggregateOutputType | null
    _min: HanshuangMinAggregateOutputType | null
    _max: HanshuangMaxAggregateOutputType | null
  }

  type GetHanshuangGroupByPayload<T extends HanshuangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HanshuangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HanshuangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HanshuangGroupByOutputType[P]>
            : GetScalarType<T[P], HanshuangGroupByOutputType[P]>
        }
      >
    >


  export type HanshuangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    scores?: boolean | Hanshuang$scoresArgs<ExtArgs>
    _count?: boolean | HanshuangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hanshuang"]>

  export type HanshuangSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hanshuang"]>

  export type HanshuangSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hanshuang"]>

  export type HanshuangSelectScalar = {
    id?: boolean
    gameId?: boolean
    createdAt?: boolean
  }

  export type HanshuangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "createdAt", ExtArgs["result"]["hanshuang"]>
  export type HanshuangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    scores?: boolean | Hanshuang$scoresArgs<ExtArgs>
    _count?: boolean | HanshuangCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HanshuangIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type HanshuangIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $HanshuangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hanshuang"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      scores: Prisma.$HanshuangScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gameId: number
      createdAt: Date
    }, ExtArgs["result"]["hanshuang"]>
    composites: {}
  }

  type HanshuangGetPayload<S extends boolean | null | undefined | HanshuangDefaultArgs> = $Result.GetResult<Prisma.$HanshuangPayload, S>

  type HanshuangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HanshuangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HanshuangCountAggregateInputType | true
    }

  export interface HanshuangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hanshuang'], meta: { name: 'Hanshuang' } }
    /**
     * Find zero or one Hanshuang that matches the filter.
     * @param {HanshuangFindUniqueArgs} args - Arguments to find a Hanshuang
     * @example
     * // Get one Hanshuang
     * const hanshuang = await prisma.hanshuang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HanshuangFindUniqueArgs>(args: SelectSubset<T, HanshuangFindUniqueArgs<ExtArgs>>): Prisma__HanshuangClient<$Result.GetResult<Prisma.$HanshuangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hanshuang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HanshuangFindUniqueOrThrowArgs} args - Arguments to find a Hanshuang
     * @example
     * // Get one Hanshuang
     * const hanshuang = await prisma.hanshuang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HanshuangFindUniqueOrThrowArgs>(args: SelectSubset<T, HanshuangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HanshuangClient<$Result.GetResult<Prisma.$HanshuangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hanshuang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HanshuangFindFirstArgs} args - Arguments to find a Hanshuang
     * @example
     * // Get one Hanshuang
     * const hanshuang = await prisma.hanshuang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HanshuangFindFirstArgs>(args?: SelectSubset<T, HanshuangFindFirstArgs<ExtArgs>>): Prisma__HanshuangClient<$Result.GetResult<Prisma.$HanshuangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hanshuang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HanshuangFindFirstOrThrowArgs} args - Arguments to find a Hanshuang
     * @example
     * // Get one Hanshuang
     * const hanshuang = await prisma.hanshuang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HanshuangFindFirstOrThrowArgs>(args?: SelectSubset<T, HanshuangFindFirstOrThrowArgs<ExtArgs>>): Prisma__HanshuangClient<$Result.GetResult<Prisma.$HanshuangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hanshuangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HanshuangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hanshuangs
     * const hanshuangs = await prisma.hanshuang.findMany()
     * 
     * // Get first 10 Hanshuangs
     * const hanshuangs = await prisma.hanshuang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hanshuangWithIdOnly = await prisma.hanshuang.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HanshuangFindManyArgs>(args?: SelectSubset<T, HanshuangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HanshuangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hanshuang.
     * @param {HanshuangCreateArgs} args - Arguments to create a Hanshuang.
     * @example
     * // Create one Hanshuang
     * const Hanshuang = await prisma.hanshuang.create({
     *   data: {
     *     // ... data to create a Hanshuang
     *   }
     * })
     * 
     */
    create<T extends HanshuangCreateArgs>(args: SelectSubset<T, HanshuangCreateArgs<ExtArgs>>): Prisma__HanshuangClient<$Result.GetResult<Prisma.$HanshuangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hanshuangs.
     * @param {HanshuangCreateManyArgs} args - Arguments to create many Hanshuangs.
     * @example
     * // Create many Hanshuangs
     * const hanshuang = await prisma.hanshuang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HanshuangCreateManyArgs>(args?: SelectSubset<T, HanshuangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hanshuangs and returns the data saved in the database.
     * @param {HanshuangCreateManyAndReturnArgs} args - Arguments to create many Hanshuangs.
     * @example
     * // Create many Hanshuangs
     * const hanshuang = await prisma.hanshuang.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hanshuangs and only return the `id`
     * const hanshuangWithIdOnly = await prisma.hanshuang.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HanshuangCreateManyAndReturnArgs>(args?: SelectSubset<T, HanshuangCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HanshuangPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hanshuang.
     * @param {HanshuangDeleteArgs} args - Arguments to delete one Hanshuang.
     * @example
     * // Delete one Hanshuang
     * const Hanshuang = await prisma.hanshuang.delete({
     *   where: {
     *     // ... filter to delete one Hanshuang
     *   }
     * })
     * 
     */
    delete<T extends HanshuangDeleteArgs>(args: SelectSubset<T, HanshuangDeleteArgs<ExtArgs>>): Prisma__HanshuangClient<$Result.GetResult<Prisma.$HanshuangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hanshuang.
     * @param {HanshuangUpdateArgs} args - Arguments to update one Hanshuang.
     * @example
     * // Update one Hanshuang
     * const hanshuang = await prisma.hanshuang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HanshuangUpdateArgs>(args: SelectSubset<T, HanshuangUpdateArgs<ExtArgs>>): Prisma__HanshuangClient<$Result.GetResult<Prisma.$HanshuangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hanshuangs.
     * @param {HanshuangDeleteManyArgs} args - Arguments to filter Hanshuangs to delete.
     * @example
     * // Delete a few Hanshuangs
     * const { count } = await prisma.hanshuang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HanshuangDeleteManyArgs>(args?: SelectSubset<T, HanshuangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hanshuangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HanshuangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hanshuangs
     * const hanshuang = await prisma.hanshuang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HanshuangUpdateManyArgs>(args: SelectSubset<T, HanshuangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hanshuangs and returns the data updated in the database.
     * @param {HanshuangUpdateManyAndReturnArgs} args - Arguments to update many Hanshuangs.
     * @example
     * // Update many Hanshuangs
     * const hanshuang = await prisma.hanshuang.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hanshuangs and only return the `id`
     * const hanshuangWithIdOnly = await prisma.hanshuang.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HanshuangUpdateManyAndReturnArgs>(args: SelectSubset<T, HanshuangUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HanshuangPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hanshuang.
     * @param {HanshuangUpsertArgs} args - Arguments to update or create a Hanshuang.
     * @example
     * // Update or create a Hanshuang
     * const hanshuang = await prisma.hanshuang.upsert({
     *   create: {
     *     // ... data to create a Hanshuang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hanshuang we want to update
     *   }
     * })
     */
    upsert<T extends HanshuangUpsertArgs>(args: SelectSubset<T, HanshuangUpsertArgs<ExtArgs>>): Prisma__HanshuangClient<$Result.GetResult<Prisma.$HanshuangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hanshuangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HanshuangCountArgs} args - Arguments to filter Hanshuangs to count.
     * @example
     * // Count the number of Hanshuangs
     * const count = await prisma.hanshuang.count({
     *   where: {
     *     // ... the filter for the Hanshuangs we want to count
     *   }
     * })
    **/
    count<T extends HanshuangCountArgs>(
      args?: Subset<T, HanshuangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HanshuangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hanshuang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HanshuangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HanshuangAggregateArgs>(args: Subset<T, HanshuangAggregateArgs>): Prisma.PrismaPromise<GetHanshuangAggregateType<T>>

    /**
     * Group by Hanshuang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HanshuangGroupByArgs} args - Group by arguments.
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
      T extends HanshuangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HanshuangGroupByArgs['orderBy'] }
        : { orderBy?: HanshuangGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, HanshuangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHanshuangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hanshuang model
   */
  readonly fields: HanshuangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hanshuang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HanshuangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scores<T extends Hanshuang$scoresArgs<ExtArgs> = {}>(args?: Subset<T, Hanshuang$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HanshuangScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hanshuang model
   */
  interface HanshuangFieldRefs {
    readonly id: FieldRef<"Hanshuang", 'Int'>
    readonly gameId: FieldRef<"Hanshuang", 'Int'>
    readonly createdAt: FieldRef<"Hanshuang", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hanshuang findUnique
   */
  export type HanshuangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hanshuang
     */
    select?: HanshuangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hanshuang
     */
    omit?: HanshuangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangInclude<ExtArgs> | null
    /**
     * Filter, which Hanshuang to fetch.
     */
    where: HanshuangWhereUniqueInput
  }

  /**
   * Hanshuang findUniqueOrThrow
   */
  export type HanshuangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hanshuang
     */
    select?: HanshuangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hanshuang
     */
    omit?: HanshuangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangInclude<ExtArgs> | null
    /**
     * Filter, which Hanshuang to fetch.
     */
    where: HanshuangWhereUniqueInput
  }

  /**
   * Hanshuang findFirst
   */
  export type HanshuangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hanshuang
     */
    select?: HanshuangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hanshuang
     */
    omit?: HanshuangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangInclude<ExtArgs> | null
    /**
     * Filter, which Hanshuang to fetch.
     */
    where?: HanshuangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hanshuangs to fetch.
     */
    orderBy?: HanshuangOrderByWithRelationInput | HanshuangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hanshuangs.
     */
    cursor?: HanshuangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hanshuangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hanshuangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hanshuangs.
     */
    distinct?: HanshuangScalarFieldEnum | HanshuangScalarFieldEnum[]
  }

  /**
   * Hanshuang findFirstOrThrow
   */
  export type HanshuangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hanshuang
     */
    select?: HanshuangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hanshuang
     */
    omit?: HanshuangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangInclude<ExtArgs> | null
    /**
     * Filter, which Hanshuang to fetch.
     */
    where?: HanshuangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hanshuangs to fetch.
     */
    orderBy?: HanshuangOrderByWithRelationInput | HanshuangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hanshuangs.
     */
    cursor?: HanshuangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hanshuangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hanshuangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hanshuangs.
     */
    distinct?: HanshuangScalarFieldEnum | HanshuangScalarFieldEnum[]
  }

  /**
   * Hanshuang findMany
   */
  export type HanshuangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hanshuang
     */
    select?: HanshuangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hanshuang
     */
    omit?: HanshuangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangInclude<ExtArgs> | null
    /**
     * Filter, which Hanshuangs to fetch.
     */
    where?: HanshuangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hanshuangs to fetch.
     */
    orderBy?: HanshuangOrderByWithRelationInput | HanshuangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hanshuangs.
     */
    cursor?: HanshuangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hanshuangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hanshuangs.
     */
    skip?: number
    distinct?: HanshuangScalarFieldEnum | HanshuangScalarFieldEnum[]
  }

  /**
   * Hanshuang create
   */
  export type HanshuangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hanshuang
     */
    select?: HanshuangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hanshuang
     */
    omit?: HanshuangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangInclude<ExtArgs> | null
    /**
     * The data needed to create a Hanshuang.
     */
    data: XOR<HanshuangCreateInput, HanshuangUncheckedCreateInput>
  }

  /**
   * Hanshuang createMany
   */
  export type HanshuangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hanshuangs.
     */
    data: HanshuangCreateManyInput | HanshuangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hanshuang createManyAndReturn
   */
  export type HanshuangCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hanshuang
     */
    select?: HanshuangSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hanshuang
     */
    omit?: HanshuangOmit<ExtArgs> | null
    /**
     * The data used to create many Hanshuangs.
     */
    data: HanshuangCreateManyInput | HanshuangCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hanshuang update
   */
  export type HanshuangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hanshuang
     */
    select?: HanshuangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hanshuang
     */
    omit?: HanshuangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangInclude<ExtArgs> | null
    /**
     * The data needed to update a Hanshuang.
     */
    data: XOR<HanshuangUpdateInput, HanshuangUncheckedUpdateInput>
    /**
     * Choose, which Hanshuang to update.
     */
    where: HanshuangWhereUniqueInput
  }

  /**
   * Hanshuang updateMany
   */
  export type HanshuangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hanshuangs.
     */
    data: XOR<HanshuangUpdateManyMutationInput, HanshuangUncheckedUpdateManyInput>
    /**
     * Filter which Hanshuangs to update
     */
    where?: HanshuangWhereInput
    /**
     * Limit how many Hanshuangs to update.
     */
    limit?: number
  }

  /**
   * Hanshuang updateManyAndReturn
   */
  export type HanshuangUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hanshuang
     */
    select?: HanshuangSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hanshuang
     */
    omit?: HanshuangOmit<ExtArgs> | null
    /**
     * The data used to update Hanshuangs.
     */
    data: XOR<HanshuangUpdateManyMutationInput, HanshuangUncheckedUpdateManyInput>
    /**
     * Filter which Hanshuangs to update
     */
    where?: HanshuangWhereInput
    /**
     * Limit how many Hanshuangs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hanshuang upsert
   */
  export type HanshuangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hanshuang
     */
    select?: HanshuangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hanshuang
     */
    omit?: HanshuangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangInclude<ExtArgs> | null
    /**
     * The filter to search for the Hanshuang to update in case it exists.
     */
    where: HanshuangWhereUniqueInput
    /**
     * In case the Hanshuang found by the `where` argument doesn't exist, create a new Hanshuang with this data.
     */
    create: XOR<HanshuangCreateInput, HanshuangUncheckedCreateInput>
    /**
     * In case the Hanshuang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HanshuangUpdateInput, HanshuangUncheckedUpdateInput>
  }

  /**
   * Hanshuang delete
   */
  export type HanshuangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hanshuang
     */
    select?: HanshuangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hanshuang
     */
    omit?: HanshuangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangInclude<ExtArgs> | null
    /**
     * Filter which Hanshuang to delete.
     */
    where: HanshuangWhereUniqueInput
  }

  /**
   * Hanshuang deleteMany
   */
  export type HanshuangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hanshuangs to delete
     */
    where?: HanshuangWhereInput
    /**
     * Limit how many Hanshuangs to delete.
     */
    limit?: number
  }

  /**
   * Hanshuang.scores
   */
  export type Hanshuang$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HanshuangScore
     */
    select?: HanshuangScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HanshuangScore
     */
    omit?: HanshuangScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangScoreInclude<ExtArgs> | null
    where?: HanshuangScoreWhereInput
    orderBy?: HanshuangScoreOrderByWithRelationInput | HanshuangScoreOrderByWithRelationInput[]
    cursor?: HanshuangScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HanshuangScoreScalarFieldEnum | HanshuangScoreScalarFieldEnum[]
  }

  /**
   * Hanshuang without action
   */
  export type HanshuangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hanshuang
     */
    select?: HanshuangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hanshuang
     */
    omit?: HanshuangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangInclude<ExtArgs> | null
  }


  /**
   * Model HanshuangScore
   */

  export type AggregateHanshuangScore = {
    _count: HanshuangScoreCountAggregateOutputType | null
    _avg: HanshuangScoreAvgAggregateOutputType | null
    _sum: HanshuangScoreSumAggregateOutputType | null
    _min: HanshuangScoreMinAggregateOutputType | null
    _max: HanshuangScoreMaxAggregateOutputType | null
  }

  export type HanshuangScoreAvgAggregateOutputType = {
    id: number | null
    playerId: number | null
    hanshuangId: number | null
    score: number | null
    chip: number | null
  }

  export type HanshuangScoreSumAggregateOutputType = {
    id: number | null
    playerId: number | null
    hanshuangId: number | null
    score: number | null
    chip: number | null
  }

  export type HanshuangScoreMinAggregateOutputType = {
    id: number | null
    playerId: number | null
    hanshuangId: number | null
    score: number | null
    chip: number | null
  }

  export type HanshuangScoreMaxAggregateOutputType = {
    id: number | null
    playerId: number | null
    hanshuangId: number | null
    score: number | null
    chip: number | null
  }

  export type HanshuangScoreCountAggregateOutputType = {
    id: number
    playerId: number
    hanshuangId: number
    score: number
    chip: number
    _all: number
  }


  export type HanshuangScoreAvgAggregateInputType = {
    id?: true
    playerId?: true
    hanshuangId?: true
    score?: true
    chip?: true
  }

  export type HanshuangScoreSumAggregateInputType = {
    id?: true
    playerId?: true
    hanshuangId?: true
    score?: true
    chip?: true
  }

  export type HanshuangScoreMinAggregateInputType = {
    id?: true
    playerId?: true
    hanshuangId?: true
    score?: true
    chip?: true
  }

  export type HanshuangScoreMaxAggregateInputType = {
    id?: true
    playerId?: true
    hanshuangId?: true
    score?: true
    chip?: true
  }

  export type HanshuangScoreCountAggregateInputType = {
    id?: true
    playerId?: true
    hanshuangId?: true
    score?: true
    chip?: true
    _all?: true
  }

  export type HanshuangScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HanshuangScore to aggregate.
     */
    where?: HanshuangScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HanshuangScores to fetch.
     */
    orderBy?: HanshuangScoreOrderByWithRelationInput | HanshuangScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HanshuangScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HanshuangScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HanshuangScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HanshuangScores
    **/
    _count?: true | HanshuangScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HanshuangScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HanshuangScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HanshuangScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HanshuangScoreMaxAggregateInputType
  }

  export type GetHanshuangScoreAggregateType<T extends HanshuangScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateHanshuangScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHanshuangScore[P]>
      : GetScalarType<T[P], AggregateHanshuangScore[P]>
  }




  export type HanshuangScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HanshuangScoreWhereInput
    orderBy?: HanshuangScoreOrderByWithAggregationInput | HanshuangScoreOrderByWithAggregationInput[]
    by: HanshuangScoreScalarFieldEnum[] | HanshuangScoreScalarFieldEnum
    having?: HanshuangScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HanshuangScoreCountAggregateInputType | true
    _avg?: HanshuangScoreAvgAggregateInputType
    _sum?: HanshuangScoreSumAggregateInputType
    _min?: HanshuangScoreMinAggregateInputType
    _max?: HanshuangScoreMaxAggregateInputType
  }

  export type HanshuangScoreGroupByOutputType = {
    id: number
    playerId: number
    hanshuangId: number
    score: number
    chip: number
    _count: HanshuangScoreCountAggregateOutputType | null
    _avg: HanshuangScoreAvgAggregateOutputType | null
    _sum: HanshuangScoreSumAggregateOutputType | null
    _min: HanshuangScoreMinAggregateOutputType | null
    _max: HanshuangScoreMaxAggregateOutputType | null
  }

  type GetHanshuangScoreGroupByPayload<T extends HanshuangScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HanshuangScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HanshuangScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HanshuangScoreGroupByOutputType[P]>
            : GetScalarType<T[P], HanshuangScoreGroupByOutputType[P]>
        }
      >
    >


  export type HanshuangScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    hanshuangId?: boolean
    score?: boolean
    chip?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    hanshuang?: boolean | HanshuangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hanshuangScore"]>

  export type HanshuangScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    hanshuangId?: boolean
    score?: boolean
    chip?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    hanshuang?: boolean | HanshuangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hanshuangScore"]>

  export type HanshuangScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    hanshuangId?: boolean
    score?: boolean
    chip?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    hanshuang?: boolean | HanshuangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hanshuangScore"]>

  export type HanshuangScoreSelectScalar = {
    id?: boolean
    playerId?: boolean
    hanshuangId?: boolean
    score?: boolean
    chip?: boolean
  }

  export type HanshuangScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "hanshuangId" | "score" | "chip", ExtArgs["result"]["hanshuangScore"]>
  export type HanshuangScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    hanshuang?: boolean | HanshuangDefaultArgs<ExtArgs>
  }
  export type HanshuangScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    hanshuang?: boolean | HanshuangDefaultArgs<ExtArgs>
  }
  export type HanshuangScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    hanshuang?: boolean | HanshuangDefaultArgs<ExtArgs>
  }

  export type $HanshuangScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HanshuangScore"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
      hanshuang: Prisma.$HanshuangPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playerId: number
      hanshuangId: number
      score: number
      chip: number
    }, ExtArgs["result"]["hanshuangScore"]>
    composites: {}
  }

  type HanshuangScoreGetPayload<S extends boolean | null | undefined | HanshuangScoreDefaultArgs> = $Result.GetResult<Prisma.$HanshuangScorePayload, S>

  type HanshuangScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HanshuangScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HanshuangScoreCountAggregateInputType | true
    }

  export interface HanshuangScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HanshuangScore'], meta: { name: 'HanshuangScore' } }
    /**
     * Find zero or one HanshuangScore that matches the filter.
     * @param {HanshuangScoreFindUniqueArgs} args - Arguments to find a HanshuangScore
     * @example
     * // Get one HanshuangScore
     * const hanshuangScore = await prisma.hanshuangScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HanshuangScoreFindUniqueArgs>(args: SelectSubset<T, HanshuangScoreFindUniqueArgs<ExtArgs>>): Prisma__HanshuangScoreClient<$Result.GetResult<Prisma.$HanshuangScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HanshuangScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HanshuangScoreFindUniqueOrThrowArgs} args - Arguments to find a HanshuangScore
     * @example
     * // Get one HanshuangScore
     * const hanshuangScore = await prisma.hanshuangScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HanshuangScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, HanshuangScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HanshuangScoreClient<$Result.GetResult<Prisma.$HanshuangScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HanshuangScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HanshuangScoreFindFirstArgs} args - Arguments to find a HanshuangScore
     * @example
     * // Get one HanshuangScore
     * const hanshuangScore = await prisma.hanshuangScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HanshuangScoreFindFirstArgs>(args?: SelectSubset<T, HanshuangScoreFindFirstArgs<ExtArgs>>): Prisma__HanshuangScoreClient<$Result.GetResult<Prisma.$HanshuangScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HanshuangScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HanshuangScoreFindFirstOrThrowArgs} args - Arguments to find a HanshuangScore
     * @example
     * // Get one HanshuangScore
     * const hanshuangScore = await prisma.hanshuangScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HanshuangScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, HanshuangScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__HanshuangScoreClient<$Result.GetResult<Prisma.$HanshuangScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HanshuangScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HanshuangScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HanshuangScores
     * const hanshuangScores = await prisma.hanshuangScore.findMany()
     * 
     * // Get first 10 HanshuangScores
     * const hanshuangScores = await prisma.hanshuangScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hanshuangScoreWithIdOnly = await prisma.hanshuangScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HanshuangScoreFindManyArgs>(args?: SelectSubset<T, HanshuangScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HanshuangScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HanshuangScore.
     * @param {HanshuangScoreCreateArgs} args - Arguments to create a HanshuangScore.
     * @example
     * // Create one HanshuangScore
     * const HanshuangScore = await prisma.hanshuangScore.create({
     *   data: {
     *     // ... data to create a HanshuangScore
     *   }
     * })
     * 
     */
    create<T extends HanshuangScoreCreateArgs>(args: SelectSubset<T, HanshuangScoreCreateArgs<ExtArgs>>): Prisma__HanshuangScoreClient<$Result.GetResult<Prisma.$HanshuangScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HanshuangScores.
     * @param {HanshuangScoreCreateManyArgs} args - Arguments to create many HanshuangScores.
     * @example
     * // Create many HanshuangScores
     * const hanshuangScore = await prisma.hanshuangScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HanshuangScoreCreateManyArgs>(args?: SelectSubset<T, HanshuangScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HanshuangScores and returns the data saved in the database.
     * @param {HanshuangScoreCreateManyAndReturnArgs} args - Arguments to create many HanshuangScores.
     * @example
     * // Create many HanshuangScores
     * const hanshuangScore = await prisma.hanshuangScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HanshuangScores and only return the `id`
     * const hanshuangScoreWithIdOnly = await prisma.hanshuangScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HanshuangScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, HanshuangScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HanshuangScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HanshuangScore.
     * @param {HanshuangScoreDeleteArgs} args - Arguments to delete one HanshuangScore.
     * @example
     * // Delete one HanshuangScore
     * const HanshuangScore = await prisma.hanshuangScore.delete({
     *   where: {
     *     // ... filter to delete one HanshuangScore
     *   }
     * })
     * 
     */
    delete<T extends HanshuangScoreDeleteArgs>(args: SelectSubset<T, HanshuangScoreDeleteArgs<ExtArgs>>): Prisma__HanshuangScoreClient<$Result.GetResult<Prisma.$HanshuangScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HanshuangScore.
     * @param {HanshuangScoreUpdateArgs} args - Arguments to update one HanshuangScore.
     * @example
     * // Update one HanshuangScore
     * const hanshuangScore = await prisma.hanshuangScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HanshuangScoreUpdateArgs>(args: SelectSubset<T, HanshuangScoreUpdateArgs<ExtArgs>>): Prisma__HanshuangScoreClient<$Result.GetResult<Prisma.$HanshuangScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HanshuangScores.
     * @param {HanshuangScoreDeleteManyArgs} args - Arguments to filter HanshuangScores to delete.
     * @example
     * // Delete a few HanshuangScores
     * const { count } = await prisma.hanshuangScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HanshuangScoreDeleteManyArgs>(args?: SelectSubset<T, HanshuangScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HanshuangScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HanshuangScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HanshuangScores
     * const hanshuangScore = await prisma.hanshuangScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HanshuangScoreUpdateManyArgs>(args: SelectSubset<T, HanshuangScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HanshuangScores and returns the data updated in the database.
     * @param {HanshuangScoreUpdateManyAndReturnArgs} args - Arguments to update many HanshuangScores.
     * @example
     * // Update many HanshuangScores
     * const hanshuangScore = await prisma.hanshuangScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HanshuangScores and only return the `id`
     * const hanshuangScoreWithIdOnly = await prisma.hanshuangScore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HanshuangScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, HanshuangScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HanshuangScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HanshuangScore.
     * @param {HanshuangScoreUpsertArgs} args - Arguments to update or create a HanshuangScore.
     * @example
     * // Update or create a HanshuangScore
     * const hanshuangScore = await prisma.hanshuangScore.upsert({
     *   create: {
     *     // ... data to create a HanshuangScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HanshuangScore we want to update
     *   }
     * })
     */
    upsert<T extends HanshuangScoreUpsertArgs>(args: SelectSubset<T, HanshuangScoreUpsertArgs<ExtArgs>>): Prisma__HanshuangScoreClient<$Result.GetResult<Prisma.$HanshuangScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HanshuangScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HanshuangScoreCountArgs} args - Arguments to filter HanshuangScores to count.
     * @example
     * // Count the number of HanshuangScores
     * const count = await prisma.hanshuangScore.count({
     *   where: {
     *     // ... the filter for the HanshuangScores we want to count
     *   }
     * })
    **/
    count<T extends HanshuangScoreCountArgs>(
      args?: Subset<T, HanshuangScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HanshuangScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HanshuangScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HanshuangScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HanshuangScoreAggregateArgs>(args: Subset<T, HanshuangScoreAggregateArgs>): Prisma.PrismaPromise<GetHanshuangScoreAggregateType<T>>

    /**
     * Group by HanshuangScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HanshuangScoreGroupByArgs} args - Group by arguments.
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
      T extends HanshuangScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HanshuangScoreGroupByArgs['orderBy'] }
        : { orderBy?: HanshuangScoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, HanshuangScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHanshuangScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HanshuangScore model
   */
  readonly fields: HanshuangScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HanshuangScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HanshuangScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hanshuang<T extends HanshuangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HanshuangDefaultArgs<ExtArgs>>): Prisma__HanshuangClient<$Result.GetResult<Prisma.$HanshuangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HanshuangScore model
   */
  interface HanshuangScoreFieldRefs {
    readonly id: FieldRef<"HanshuangScore", 'Int'>
    readonly playerId: FieldRef<"HanshuangScore", 'Int'>
    readonly hanshuangId: FieldRef<"HanshuangScore", 'Int'>
    readonly score: FieldRef<"HanshuangScore", 'Int'>
    readonly chip: FieldRef<"HanshuangScore", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * HanshuangScore findUnique
   */
  export type HanshuangScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HanshuangScore
     */
    select?: HanshuangScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HanshuangScore
     */
    omit?: HanshuangScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangScoreInclude<ExtArgs> | null
    /**
     * Filter, which HanshuangScore to fetch.
     */
    where: HanshuangScoreWhereUniqueInput
  }

  /**
   * HanshuangScore findUniqueOrThrow
   */
  export type HanshuangScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HanshuangScore
     */
    select?: HanshuangScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HanshuangScore
     */
    omit?: HanshuangScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangScoreInclude<ExtArgs> | null
    /**
     * Filter, which HanshuangScore to fetch.
     */
    where: HanshuangScoreWhereUniqueInput
  }

  /**
   * HanshuangScore findFirst
   */
  export type HanshuangScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HanshuangScore
     */
    select?: HanshuangScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HanshuangScore
     */
    omit?: HanshuangScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangScoreInclude<ExtArgs> | null
    /**
     * Filter, which HanshuangScore to fetch.
     */
    where?: HanshuangScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HanshuangScores to fetch.
     */
    orderBy?: HanshuangScoreOrderByWithRelationInput | HanshuangScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HanshuangScores.
     */
    cursor?: HanshuangScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HanshuangScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HanshuangScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HanshuangScores.
     */
    distinct?: HanshuangScoreScalarFieldEnum | HanshuangScoreScalarFieldEnum[]
  }

  /**
   * HanshuangScore findFirstOrThrow
   */
  export type HanshuangScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HanshuangScore
     */
    select?: HanshuangScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HanshuangScore
     */
    omit?: HanshuangScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangScoreInclude<ExtArgs> | null
    /**
     * Filter, which HanshuangScore to fetch.
     */
    where?: HanshuangScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HanshuangScores to fetch.
     */
    orderBy?: HanshuangScoreOrderByWithRelationInput | HanshuangScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HanshuangScores.
     */
    cursor?: HanshuangScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HanshuangScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HanshuangScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HanshuangScores.
     */
    distinct?: HanshuangScoreScalarFieldEnum | HanshuangScoreScalarFieldEnum[]
  }

  /**
   * HanshuangScore findMany
   */
  export type HanshuangScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HanshuangScore
     */
    select?: HanshuangScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HanshuangScore
     */
    omit?: HanshuangScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangScoreInclude<ExtArgs> | null
    /**
     * Filter, which HanshuangScores to fetch.
     */
    where?: HanshuangScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HanshuangScores to fetch.
     */
    orderBy?: HanshuangScoreOrderByWithRelationInput | HanshuangScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HanshuangScores.
     */
    cursor?: HanshuangScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HanshuangScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HanshuangScores.
     */
    skip?: number
    distinct?: HanshuangScoreScalarFieldEnum | HanshuangScoreScalarFieldEnum[]
  }

  /**
   * HanshuangScore create
   */
  export type HanshuangScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HanshuangScore
     */
    select?: HanshuangScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HanshuangScore
     */
    omit?: HanshuangScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a HanshuangScore.
     */
    data: XOR<HanshuangScoreCreateInput, HanshuangScoreUncheckedCreateInput>
  }

  /**
   * HanshuangScore createMany
   */
  export type HanshuangScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HanshuangScores.
     */
    data: HanshuangScoreCreateManyInput | HanshuangScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HanshuangScore createManyAndReturn
   */
  export type HanshuangScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HanshuangScore
     */
    select?: HanshuangScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HanshuangScore
     */
    omit?: HanshuangScoreOmit<ExtArgs> | null
    /**
     * The data used to create many HanshuangScores.
     */
    data: HanshuangScoreCreateManyInput | HanshuangScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HanshuangScore update
   */
  export type HanshuangScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HanshuangScore
     */
    select?: HanshuangScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HanshuangScore
     */
    omit?: HanshuangScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a HanshuangScore.
     */
    data: XOR<HanshuangScoreUpdateInput, HanshuangScoreUncheckedUpdateInput>
    /**
     * Choose, which HanshuangScore to update.
     */
    where: HanshuangScoreWhereUniqueInput
  }

  /**
   * HanshuangScore updateMany
   */
  export type HanshuangScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HanshuangScores.
     */
    data: XOR<HanshuangScoreUpdateManyMutationInput, HanshuangScoreUncheckedUpdateManyInput>
    /**
     * Filter which HanshuangScores to update
     */
    where?: HanshuangScoreWhereInput
    /**
     * Limit how many HanshuangScores to update.
     */
    limit?: number
  }

  /**
   * HanshuangScore updateManyAndReturn
   */
  export type HanshuangScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HanshuangScore
     */
    select?: HanshuangScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HanshuangScore
     */
    omit?: HanshuangScoreOmit<ExtArgs> | null
    /**
     * The data used to update HanshuangScores.
     */
    data: XOR<HanshuangScoreUpdateManyMutationInput, HanshuangScoreUncheckedUpdateManyInput>
    /**
     * Filter which HanshuangScores to update
     */
    where?: HanshuangScoreWhereInput
    /**
     * Limit how many HanshuangScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HanshuangScore upsert
   */
  export type HanshuangScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HanshuangScore
     */
    select?: HanshuangScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HanshuangScore
     */
    omit?: HanshuangScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the HanshuangScore to update in case it exists.
     */
    where: HanshuangScoreWhereUniqueInput
    /**
     * In case the HanshuangScore found by the `where` argument doesn't exist, create a new HanshuangScore with this data.
     */
    create: XOR<HanshuangScoreCreateInput, HanshuangScoreUncheckedCreateInput>
    /**
     * In case the HanshuangScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HanshuangScoreUpdateInput, HanshuangScoreUncheckedUpdateInput>
  }

  /**
   * HanshuangScore delete
   */
  export type HanshuangScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HanshuangScore
     */
    select?: HanshuangScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HanshuangScore
     */
    omit?: HanshuangScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangScoreInclude<ExtArgs> | null
    /**
     * Filter which HanshuangScore to delete.
     */
    where: HanshuangScoreWhereUniqueInput
  }

  /**
   * HanshuangScore deleteMany
   */
  export type HanshuangScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HanshuangScores to delete
     */
    where?: HanshuangScoreWhereInput
    /**
     * Limit how many HanshuangScores to delete.
     */
    limit?: number
  }

  /**
   * HanshuangScore without action
   */
  export type HanshuangScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HanshuangScore
     */
    select?: HanshuangScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HanshuangScore
     */
    omit?: HanshuangScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HanshuangScoreInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    date: 'date',
    userId: 'userId'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const HanshuangScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    createdAt: 'createdAt'
  };

  export type HanshuangScalarFieldEnum = (typeof HanshuangScalarFieldEnum)[keyof typeof HanshuangScalarFieldEnum]


  export const HanshuangScoreScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    hanshuangId: 'hanshuangId',
    score: 'score',
    chip: 'chip'
  };

  export type HanshuangScoreScalarFieldEnum = (typeof HanshuangScoreScalarFieldEnum)[keyof typeof HanshuangScoreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    players?: PlayerListRelationFilter
    games?: GameListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    players?: PlayerOrderByRelationAggregateInput
    games?: GameOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    players?: PlayerListRelationFilter
    games?: GameListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: IntFilter<"Player"> | number
    name?: StringFilter<"Player"> | string
    userId?: IntFilter<"Player"> | number
    scores?: HanshuangScoreListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    scores?: HanshuangScoreOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    name?: StringFilter<"Player"> | string
    userId?: IntFilter<"Player"> | number
    scores?: HanshuangScoreListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Player"> | number
    name?: StringWithAggregatesFilter<"Player"> | string
    userId?: IntWithAggregatesFilter<"Player"> | number
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: IntFilter<"Game"> | number
    date?: StringFilter<"Game"> | string
    userId?: IntFilter<"Game"> | number
    hanshuangs?: HanshuangListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    hanshuangs?: HanshuangOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    date?: StringFilter<"Game"> | string
    userId?: IntFilter<"Game"> | number
    hanshuangs?: HanshuangListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Game"> | number
    date?: StringWithAggregatesFilter<"Game"> | string
    userId?: IntWithAggregatesFilter<"Game"> | number
  }

  export type HanshuangWhereInput = {
    AND?: HanshuangWhereInput | HanshuangWhereInput[]
    OR?: HanshuangWhereInput[]
    NOT?: HanshuangWhereInput | HanshuangWhereInput[]
    id?: IntFilter<"Hanshuang"> | number
    gameId?: IntFilter<"Hanshuang"> | number
    createdAt?: DateTimeFilter<"Hanshuang"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    scores?: HanshuangScoreListRelationFilter
  }

  export type HanshuangOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    game?: GameOrderByWithRelationInput
    scores?: HanshuangScoreOrderByRelationAggregateInput
  }

  export type HanshuangWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HanshuangWhereInput | HanshuangWhereInput[]
    OR?: HanshuangWhereInput[]
    NOT?: HanshuangWhereInput | HanshuangWhereInput[]
    gameId?: IntFilter<"Hanshuang"> | number
    createdAt?: DateTimeFilter<"Hanshuang"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    scores?: HanshuangScoreListRelationFilter
  }, "id">

  export type HanshuangOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    _count?: HanshuangCountOrderByAggregateInput
    _avg?: HanshuangAvgOrderByAggregateInput
    _max?: HanshuangMaxOrderByAggregateInput
    _min?: HanshuangMinOrderByAggregateInput
    _sum?: HanshuangSumOrderByAggregateInput
  }

  export type HanshuangScalarWhereWithAggregatesInput = {
    AND?: HanshuangScalarWhereWithAggregatesInput | HanshuangScalarWhereWithAggregatesInput[]
    OR?: HanshuangScalarWhereWithAggregatesInput[]
    NOT?: HanshuangScalarWhereWithAggregatesInput | HanshuangScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hanshuang"> | number
    gameId?: IntWithAggregatesFilter<"Hanshuang"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Hanshuang"> | Date | string
  }

  export type HanshuangScoreWhereInput = {
    AND?: HanshuangScoreWhereInput | HanshuangScoreWhereInput[]
    OR?: HanshuangScoreWhereInput[]
    NOT?: HanshuangScoreWhereInput | HanshuangScoreWhereInput[]
    id?: IntFilter<"HanshuangScore"> | number
    playerId?: IntFilter<"HanshuangScore"> | number
    hanshuangId?: IntFilter<"HanshuangScore"> | number
    score?: IntFilter<"HanshuangScore"> | number
    chip?: IntFilter<"HanshuangScore"> | number
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    hanshuang?: XOR<HanshuangScalarRelationFilter, HanshuangWhereInput>
  }

  export type HanshuangScoreOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    hanshuangId?: SortOrder
    score?: SortOrder
    chip?: SortOrder
    player?: PlayerOrderByWithRelationInput
    hanshuang?: HanshuangOrderByWithRelationInput
  }

  export type HanshuangScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HanshuangScoreWhereInput | HanshuangScoreWhereInput[]
    OR?: HanshuangScoreWhereInput[]
    NOT?: HanshuangScoreWhereInput | HanshuangScoreWhereInput[]
    playerId?: IntFilter<"HanshuangScore"> | number
    hanshuangId?: IntFilter<"HanshuangScore"> | number
    score?: IntFilter<"HanshuangScore"> | number
    chip?: IntFilter<"HanshuangScore"> | number
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    hanshuang?: XOR<HanshuangScalarRelationFilter, HanshuangWhereInput>
  }, "id">

  export type HanshuangScoreOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    hanshuangId?: SortOrder
    score?: SortOrder
    chip?: SortOrder
    _count?: HanshuangScoreCountOrderByAggregateInput
    _avg?: HanshuangScoreAvgOrderByAggregateInput
    _max?: HanshuangScoreMaxOrderByAggregateInput
    _min?: HanshuangScoreMinOrderByAggregateInput
    _sum?: HanshuangScoreSumOrderByAggregateInput
  }

  export type HanshuangScoreScalarWhereWithAggregatesInput = {
    AND?: HanshuangScoreScalarWhereWithAggregatesInput | HanshuangScoreScalarWhereWithAggregatesInput[]
    OR?: HanshuangScoreScalarWhereWithAggregatesInput[]
    NOT?: HanshuangScoreScalarWhereWithAggregatesInput | HanshuangScoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HanshuangScore"> | number
    playerId?: IntWithAggregatesFilter<"HanshuangScore"> | number
    hanshuangId?: IntWithAggregatesFilter<"HanshuangScore"> | number
    score?: IntWithAggregatesFilter<"HanshuangScore"> | number
    chip?: IntWithAggregatesFilter<"HanshuangScore"> | number
  }

  export type UserCreateInput = {
    username: string
    password: string
    players?: PlayerCreateNestedManyWithoutUserInput
    games?: GameCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    players?: PlayerUncheckedCreateNestedManyWithoutUserInput
    games?: GameUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    players?: PlayerUpdateManyWithoutUserNestedInput
    games?: GameUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    players?: PlayerUncheckedUpdateManyWithoutUserNestedInput
    games?: GameUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerCreateInput = {
    name: string
    scores?: HanshuangScoreCreateNestedManyWithoutPlayerInput
    user: UserCreateNestedOneWithoutPlayersInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: number
    name: string
    userId: number
    scores?: HanshuangScoreUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    scores?: HanshuangScoreUpdateManyWithoutPlayerNestedInput
    user?: UserUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    scores?: HanshuangScoreUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: number
    name: string
    userId: number
  }

  export type PlayerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type GameCreateInput = {
    date: string
    hanshuangs?: HanshuangCreateNestedManyWithoutGameInput
    user: UserCreateNestedOneWithoutGamesInput
  }

  export type GameUncheckedCreateInput = {
    id?: number
    date: string
    userId: number
    hanshuangs?: HanshuangUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    hanshuangs?: HanshuangUpdateManyWithoutGameNestedInput
    user?: UserUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    hanshuangs?: HanshuangUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: number
    date: string
    userId: number
  }

  export type GameUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type HanshuangCreateInput = {
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutHanshuangsInput
    scores?: HanshuangScoreCreateNestedManyWithoutHanshuangInput
  }

  export type HanshuangUncheckedCreateInput = {
    id?: number
    gameId: number
    createdAt?: Date | string
    scores?: HanshuangScoreUncheckedCreateNestedManyWithoutHanshuangInput
  }

  export type HanshuangUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutHanshuangsNestedInput
    scores?: HanshuangScoreUpdateManyWithoutHanshuangNestedInput
  }

  export type HanshuangUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: HanshuangScoreUncheckedUpdateManyWithoutHanshuangNestedInput
  }

  export type HanshuangCreateManyInput = {
    id?: number
    gameId: number
    createdAt?: Date | string
  }

  export type HanshuangUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HanshuangUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HanshuangScoreCreateInput = {
    score: number
    chip: number
    player: PlayerCreateNestedOneWithoutScoresInput
    hanshuang: HanshuangCreateNestedOneWithoutScoresInput
  }

  export type HanshuangScoreUncheckedCreateInput = {
    id?: number
    playerId: number
    hanshuangId: number
    score: number
    chip: number
  }

  export type HanshuangScoreUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    chip?: IntFieldUpdateOperationsInput | number
    player?: PlayerUpdateOneRequiredWithoutScoresNestedInput
    hanshuang?: HanshuangUpdateOneRequiredWithoutScoresNestedInput
  }

  export type HanshuangScoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    hanshuangId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    chip?: IntFieldUpdateOperationsInput | number
  }

  export type HanshuangScoreCreateManyInput = {
    id?: number
    playerId: number
    hanshuangId: number
    score: number
    chip: number
  }

  export type HanshuangScoreUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
    chip?: IntFieldUpdateOperationsInput | number
  }

  export type HanshuangScoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    hanshuangId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    chip?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PlayerListRelationFilter = {
    every?: PlayerWhereInput
    some?: PlayerWhereInput
    none?: PlayerWhereInput
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type PlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type HanshuangScoreListRelationFilter = {
    every?: HanshuangScoreWhereInput
    some?: HanshuangScoreWhereInput
    none?: HanshuangScoreWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type HanshuangScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type HanshuangListRelationFilter = {
    every?: HanshuangWhereInput
    some?: HanshuangWhereInput
    none?: HanshuangWhereInput
  }

  export type HanshuangOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type HanshuangCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
  }

  export type HanshuangAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
  }

  export type HanshuangMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
  }

  export type HanshuangMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
  }

  export type HanshuangSumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PlayerScalarRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type HanshuangScalarRelationFilter = {
    is?: HanshuangWhereInput
    isNot?: HanshuangWhereInput
  }

  export type HanshuangScoreCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    hanshuangId?: SortOrder
    score?: SortOrder
    chip?: SortOrder
  }

  export type HanshuangScoreAvgOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    hanshuangId?: SortOrder
    score?: SortOrder
    chip?: SortOrder
  }

  export type HanshuangScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    hanshuangId?: SortOrder
    score?: SortOrder
    chip?: SortOrder
  }

  export type HanshuangScoreMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    hanshuangId?: SortOrder
    score?: SortOrder
    chip?: SortOrder
  }

  export type HanshuangScoreSumOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    hanshuangId?: SortOrder
    score?: SortOrder
    chip?: SortOrder
  }

  export type PlayerCreateNestedManyWithoutUserInput = {
    create?: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput> | PlayerCreateWithoutUserInput[] | PlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutUserInput | PlayerCreateOrConnectWithoutUserInput[]
    createMany?: PlayerCreateManyUserInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type GameCreateNestedManyWithoutUserInput = {
    create?: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput> | GameCreateWithoutUserInput[] | GameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutUserInput | GameCreateOrConnectWithoutUserInput[]
    createMany?: GameCreateManyUserInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type PlayerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput> | PlayerCreateWithoutUserInput[] | PlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutUserInput | PlayerCreateOrConnectWithoutUserInput[]
    createMany?: PlayerCreateManyUserInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput> | GameCreateWithoutUserInput[] | GameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutUserInput | GameCreateOrConnectWithoutUserInput[]
    createMany?: GameCreateManyUserInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PlayerUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput> | PlayerCreateWithoutUserInput[] | PlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutUserInput | PlayerCreateOrConnectWithoutUserInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutUserInput | PlayerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlayerCreateManyUserInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutUserInput | PlayerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutUserInput | PlayerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type GameUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput> | GameCreateWithoutUserInput[] | GameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutUserInput | GameCreateOrConnectWithoutUserInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutUserInput | GameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameCreateManyUserInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutUserInput | GameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameUpdateManyWithWhereWithoutUserInput | GameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlayerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput> | PlayerCreateWithoutUserInput[] | PlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutUserInput | PlayerCreateOrConnectWithoutUserInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutUserInput | PlayerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlayerCreateManyUserInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutUserInput | PlayerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutUserInput | PlayerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput> | GameCreateWithoutUserInput[] | GameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutUserInput | GameCreateOrConnectWithoutUserInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutUserInput | GameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameCreateManyUserInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutUserInput | GameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameUpdateManyWithWhereWithoutUserInput | GameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type HanshuangScoreCreateNestedManyWithoutPlayerInput = {
    create?: XOR<HanshuangScoreCreateWithoutPlayerInput, HanshuangScoreUncheckedCreateWithoutPlayerInput> | HanshuangScoreCreateWithoutPlayerInput[] | HanshuangScoreUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: HanshuangScoreCreateOrConnectWithoutPlayerInput | HanshuangScoreCreateOrConnectWithoutPlayerInput[]
    createMany?: HanshuangScoreCreateManyPlayerInputEnvelope
    connect?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPlayersInput = {
    create?: XOR<UserCreateWithoutPlayersInput, UserUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayersInput
    connect?: UserWhereUniqueInput
  }

  export type HanshuangScoreUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<HanshuangScoreCreateWithoutPlayerInput, HanshuangScoreUncheckedCreateWithoutPlayerInput> | HanshuangScoreCreateWithoutPlayerInput[] | HanshuangScoreUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: HanshuangScoreCreateOrConnectWithoutPlayerInput | HanshuangScoreCreateOrConnectWithoutPlayerInput[]
    createMany?: HanshuangScoreCreateManyPlayerInputEnvelope
    connect?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
  }

  export type HanshuangScoreUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<HanshuangScoreCreateWithoutPlayerInput, HanshuangScoreUncheckedCreateWithoutPlayerInput> | HanshuangScoreCreateWithoutPlayerInput[] | HanshuangScoreUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: HanshuangScoreCreateOrConnectWithoutPlayerInput | HanshuangScoreCreateOrConnectWithoutPlayerInput[]
    upsert?: HanshuangScoreUpsertWithWhereUniqueWithoutPlayerInput | HanshuangScoreUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: HanshuangScoreCreateManyPlayerInputEnvelope
    set?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
    disconnect?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
    delete?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
    connect?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
    update?: HanshuangScoreUpdateWithWhereUniqueWithoutPlayerInput | HanshuangScoreUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: HanshuangScoreUpdateManyWithWhereWithoutPlayerInput | HanshuangScoreUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: HanshuangScoreScalarWhereInput | HanshuangScoreScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<UserCreateWithoutPlayersInput, UserUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayersInput
    upsert?: UserUpsertWithoutPlayersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayersInput, UserUpdateWithoutPlayersInput>, UserUncheckedUpdateWithoutPlayersInput>
  }

  export type HanshuangScoreUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<HanshuangScoreCreateWithoutPlayerInput, HanshuangScoreUncheckedCreateWithoutPlayerInput> | HanshuangScoreCreateWithoutPlayerInput[] | HanshuangScoreUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: HanshuangScoreCreateOrConnectWithoutPlayerInput | HanshuangScoreCreateOrConnectWithoutPlayerInput[]
    upsert?: HanshuangScoreUpsertWithWhereUniqueWithoutPlayerInput | HanshuangScoreUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: HanshuangScoreCreateManyPlayerInputEnvelope
    set?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
    disconnect?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
    delete?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
    connect?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
    update?: HanshuangScoreUpdateWithWhereUniqueWithoutPlayerInput | HanshuangScoreUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: HanshuangScoreUpdateManyWithWhereWithoutPlayerInput | HanshuangScoreUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: HanshuangScoreScalarWhereInput | HanshuangScoreScalarWhereInput[]
  }

  export type HanshuangCreateNestedManyWithoutGameInput = {
    create?: XOR<HanshuangCreateWithoutGameInput, HanshuangUncheckedCreateWithoutGameInput> | HanshuangCreateWithoutGameInput[] | HanshuangUncheckedCreateWithoutGameInput[]
    connectOrCreate?: HanshuangCreateOrConnectWithoutGameInput | HanshuangCreateOrConnectWithoutGameInput[]
    createMany?: HanshuangCreateManyGameInputEnvelope
    connect?: HanshuangWhereUniqueInput | HanshuangWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutGamesInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput
    connect?: UserWhereUniqueInput
  }

  export type HanshuangUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<HanshuangCreateWithoutGameInput, HanshuangUncheckedCreateWithoutGameInput> | HanshuangCreateWithoutGameInput[] | HanshuangUncheckedCreateWithoutGameInput[]
    connectOrCreate?: HanshuangCreateOrConnectWithoutGameInput | HanshuangCreateOrConnectWithoutGameInput[]
    createMany?: HanshuangCreateManyGameInputEnvelope
    connect?: HanshuangWhereUniqueInput | HanshuangWhereUniqueInput[]
  }

  export type HanshuangUpdateManyWithoutGameNestedInput = {
    create?: XOR<HanshuangCreateWithoutGameInput, HanshuangUncheckedCreateWithoutGameInput> | HanshuangCreateWithoutGameInput[] | HanshuangUncheckedCreateWithoutGameInput[]
    connectOrCreate?: HanshuangCreateOrConnectWithoutGameInput | HanshuangCreateOrConnectWithoutGameInput[]
    upsert?: HanshuangUpsertWithWhereUniqueWithoutGameInput | HanshuangUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: HanshuangCreateManyGameInputEnvelope
    set?: HanshuangWhereUniqueInput | HanshuangWhereUniqueInput[]
    disconnect?: HanshuangWhereUniqueInput | HanshuangWhereUniqueInput[]
    delete?: HanshuangWhereUniqueInput | HanshuangWhereUniqueInput[]
    connect?: HanshuangWhereUniqueInput | HanshuangWhereUniqueInput[]
    update?: HanshuangUpdateWithWhereUniqueWithoutGameInput | HanshuangUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: HanshuangUpdateManyWithWhereWithoutGameInput | HanshuangUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: HanshuangScalarWhereInput | HanshuangScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutGamesNestedInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput
    upsert?: UserUpsertWithoutGamesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesInput, UserUpdateWithoutGamesInput>, UserUncheckedUpdateWithoutGamesInput>
  }

  export type HanshuangUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<HanshuangCreateWithoutGameInput, HanshuangUncheckedCreateWithoutGameInput> | HanshuangCreateWithoutGameInput[] | HanshuangUncheckedCreateWithoutGameInput[]
    connectOrCreate?: HanshuangCreateOrConnectWithoutGameInput | HanshuangCreateOrConnectWithoutGameInput[]
    upsert?: HanshuangUpsertWithWhereUniqueWithoutGameInput | HanshuangUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: HanshuangCreateManyGameInputEnvelope
    set?: HanshuangWhereUniqueInput | HanshuangWhereUniqueInput[]
    disconnect?: HanshuangWhereUniqueInput | HanshuangWhereUniqueInput[]
    delete?: HanshuangWhereUniqueInput | HanshuangWhereUniqueInput[]
    connect?: HanshuangWhereUniqueInput | HanshuangWhereUniqueInput[]
    update?: HanshuangUpdateWithWhereUniqueWithoutGameInput | HanshuangUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: HanshuangUpdateManyWithWhereWithoutGameInput | HanshuangUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: HanshuangScalarWhereInput | HanshuangScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutHanshuangsInput = {
    create?: XOR<GameCreateWithoutHanshuangsInput, GameUncheckedCreateWithoutHanshuangsInput>
    connectOrCreate?: GameCreateOrConnectWithoutHanshuangsInput
    connect?: GameWhereUniqueInput
  }

  export type HanshuangScoreCreateNestedManyWithoutHanshuangInput = {
    create?: XOR<HanshuangScoreCreateWithoutHanshuangInput, HanshuangScoreUncheckedCreateWithoutHanshuangInput> | HanshuangScoreCreateWithoutHanshuangInput[] | HanshuangScoreUncheckedCreateWithoutHanshuangInput[]
    connectOrCreate?: HanshuangScoreCreateOrConnectWithoutHanshuangInput | HanshuangScoreCreateOrConnectWithoutHanshuangInput[]
    createMany?: HanshuangScoreCreateManyHanshuangInputEnvelope
    connect?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
  }

  export type HanshuangScoreUncheckedCreateNestedManyWithoutHanshuangInput = {
    create?: XOR<HanshuangScoreCreateWithoutHanshuangInput, HanshuangScoreUncheckedCreateWithoutHanshuangInput> | HanshuangScoreCreateWithoutHanshuangInput[] | HanshuangScoreUncheckedCreateWithoutHanshuangInput[]
    connectOrCreate?: HanshuangScoreCreateOrConnectWithoutHanshuangInput | HanshuangScoreCreateOrConnectWithoutHanshuangInput[]
    createMany?: HanshuangScoreCreateManyHanshuangInputEnvelope
    connect?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GameUpdateOneRequiredWithoutHanshuangsNestedInput = {
    create?: XOR<GameCreateWithoutHanshuangsInput, GameUncheckedCreateWithoutHanshuangsInput>
    connectOrCreate?: GameCreateOrConnectWithoutHanshuangsInput
    upsert?: GameUpsertWithoutHanshuangsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutHanshuangsInput, GameUpdateWithoutHanshuangsInput>, GameUncheckedUpdateWithoutHanshuangsInput>
  }

  export type HanshuangScoreUpdateManyWithoutHanshuangNestedInput = {
    create?: XOR<HanshuangScoreCreateWithoutHanshuangInput, HanshuangScoreUncheckedCreateWithoutHanshuangInput> | HanshuangScoreCreateWithoutHanshuangInput[] | HanshuangScoreUncheckedCreateWithoutHanshuangInput[]
    connectOrCreate?: HanshuangScoreCreateOrConnectWithoutHanshuangInput | HanshuangScoreCreateOrConnectWithoutHanshuangInput[]
    upsert?: HanshuangScoreUpsertWithWhereUniqueWithoutHanshuangInput | HanshuangScoreUpsertWithWhereUniqueWithoutHanshuangInput[]
    createMany?: HanshuangScoreCreateManyHanshuangInputEnvelope
    set?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
    disconnect?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
    delete?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
    connect?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
    update?: HanshuangScoreUpdateWithWhereUniqueWithoutHanshuangInput | HanshuangScoreUpdateWithWhereUniqueWithoutHanshuangInput[]
    updateMany?: HanshuangScoreUpdateManyWithWhereWithoutHanshuangInput | HanshuangScoreUpdateManyWithWhereWithoutHanshuangInput[]
    deleteMany?: HanshuangScoreScalarWhereInput | HanshuangScoreScalarWhereInput[]
  }

  export type HanshuangScoreUncheckedUpdateManyWithoutHanshuangNestedInput = {
    create?: XOR<HanshuangScoreCreateWithoutHanshuangInput, HanshuangScoreUncheckedCreateWithoutHanshuangInput> | HanshuangScoreCreateWithoutHanshuangInput[] | HanshuangScoreUncheckedCreateWithoutHanshuangInput[]
    connectOrCreate?: HanshuangScoreCreateOrConnectWithoutHanshuangInput | HanshuangScoreCreateOrConnectWithoutHanshuangInput[]
    upsert?: HanshuangScoreUpsertWithWhereUniqueWithoutHanshuangInput | HanshuangScoreUpsertWithWhereUniqueWithoutHanshuangInput[]
    createMany?: HanshuangScoreCreateManyHanshuangInputEnvelope
    set?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
    disconnect?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
    delete?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
    connect?: HanshuangScoreWhereUniqueInput | HanshuangScoreWhereUniqueInput[]
    update?: HanshuangScoreUpdateWithWhereUniqueWithoutHanshuangInput | HanshuangScoreUpdateWithWhereUniqueWithoutHanshuangInput[]
    updateMany?: HanshuangScoreUpdateManyWithWhereWithoutHanshuangInput | HanshuangScoreUpdateManyWithWhereWithoutHanshuangInput[]
    deleteMany?: HanshuangScoreScalarWhereInput | HanshuangScoreScalarWhereInput[]
  }

  export type PlayerCreateNestedOneWithoutScoresInput = {
    create?: XOR<PlayerCreateWithoutScoresInput, PlayerUncheckedCreateWithoutScoresInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutScoresInput
    connect?: PlayerWhereUniqueInput
  }

  export type HanshuangCreateNestedOneWithoutScoresInput = {
    create?: XOR<HanshuangCreateWithoutScoresInput, HanshuangUncheckedCreateWithoutScoresInput>
    connectOrCreate?: HanshuangCreateOrConnectWithoutScoresInput
    connect?: HanshuangWhereUniqueInput
  }

  export type PlayerUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<PlayerCreateWithoutScoresInput, PlayerUncheckedCreateWithoutScoresInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutScoresInput
    upsert?: PlayerUpsertWithoutScoresInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutScoresInput, PlayerUpdateWithoutScoresInput>, PlayerUncheckedUpdateWithoutScoresInput>
  }

  export type HanshuangUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<HanshuangCreateWithoutScoresInput, HanshuangUncheckedCreateWithoutScoresInput>
    connectOrCreate?: HanshuangCreateOrConnectWithoutScoresInput
    upsert?: HanshuangUpsertWithoutScoresInput
    connect?: HanshuangWhereUniqueInput
    update?: XOR<XOR<HanshuangUpdateToOneWithWhereWithoutScoresInput, HanshuangUpdateWithoutScoresInput>, HanshuangUncheckedUpdateWithoutScoresInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PlayerCreateWithoutUserInput = {
    name: string
    scores?: HanshuangScoreCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    scores?: HanshuangScoreUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutUserInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput>
  }

  export type PlayerCreateManyUserInputEnvelope = {
    data: PlayerCreateManyUserInput | PlayerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutUserInput = {
    date: string
    hanshuangs?: HanshuangCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutUserInput = {
    id?: number
    date: string
    hanshuangs?: HanshuangUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutUserInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput>
  }

  export type GameCreateManyUserInputEnvelope = {
    data: GameCreateManyUserInput | GameCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlayerUpsertWithWhereUniqueWithoutUserInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutUserInput, PlayerUncheckedUpdateWithoutUserInput>
    create: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutUserInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutUserInput, PlayerUncheckedUpdateWithoutUserInput>
  }

  export type PlayerUpdateManyWithWhereWithoutUserInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutUserInput>
  }

  export type PlayerScalarWhereInput = {
    AND?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    OR?: PlayerScalarWhereInput[]
    NOT?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    id?: IntFilter<"Player"> | number
    name?: StringFilter<"Player"> | string
    userId?: IntFilter<"Player"> | number
  }

  export type GameUpsertWithWhereUniqueWithoutUserInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutUserInput, GameUncheckedUpdateWithoutUserInput>
    create: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput>
  }

  export type GameUpdateWithWhereUniqueWithoutUserInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutUserInput, GameUncheckedUpdateWithoutUserInput>
  }

  export type GameUpdateManyWithWhereWithoutUserInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutUserInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: IntFilter<"Game"> | number
    date?: StringFilter<"Game"> | string
    userId?: IntFilter<"Game"> | number
  }

  export type HanshuangScoreCreateWithoutPlayerInput = {
    score: number
    chip: number
    hanshuang: HanshuangCreateNestedOneWithoutScoresInput
  }

  export type HanshuangScoreUncheckedCreateWithoutPlayerInput = {
    id?: number
    hanshuangId: number
    score: number
    chip: number
  }

  export type HanshuangScoreCreateOrConnectWithoutPlayerInput = {
    where: HanshuangScoreWhereUniqueInput
    create: XOR<HanshuangScoreCreateWithoutPlayerInput, HanshuangScoreUncheckedCreateWithoutPlayerInput>
  }

  export type HanshuangScoreCreateManyPlayerInputEnvelope = {
    data: HanshuangScoreCreateManyPlayerInput | HanshuangScoreCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPlayersInput = {
    username: string
    password: string
    games?: GameCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlayersInput = {
    id?: number
    username: string
    password: string
    games?: GameUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlayersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayersInput, UserUncheckedCreateWithoutPlayersInput>
  }

  export type HanshuangScoreUpsertWithWhereUniqueWithoutPlayerInput = {
    where: HanshuangScoreWhereUniqueInput
    update: XOR<HanshuangScoreUpdateWithoutPlayerInput, HanshuangScoreUncheckedUpdateWithoutPlayerInput>
    create: XOR<HanshuangScoreCreateWithoutPlayerInput, HanshuangScoreUncheckedCreateWithoutPlayerInput>
  }

  export type HanshuangScoreUpdateWithWhereUniqueWithoutPlayerInput = {
    where: HanshuangScoreWhereUniqueInput
    data: XOR<HanshuangScoreUpdateWithoutPlayerInput, HanshuangScoreUncheckedUpdateWithoutPlayerInput>
  }

  export type HanshuangScoreUpdateManyWithWhereWithoutPlayerInput = {
    where: HanshuangScoreScalarWhereInput
    data: XOR<HanshuangScoreUpdateManyMutationInput, HanshuangScoreUncheckedUpdateManyWithoutPlayerInput>
  }

  export type HanshuangScoreScalarWhereInput = {
    AND?: HanshuangScoreScalarWhereInput | HanshuangScoreScalarWhereInput[]
    OR?: HanshuangScoreScalarWhereInput[]
    NOT?: HanshuangScoreScalarWhereInput | HanshuangScoreScalarWhereInput[]
    id?: IntFilter<"HanshuangScore"> | number
    playerId?: IntFilter<"HanshuangScore"> | number
    hanshuangId?: IntFilter<"HanshuangScore"> | number
    score?: IntFilter<"HanshuangScore"> | number
    chip?: IntFilter<"HanshuangScore"> | number
  }

  export type UserUpsertWithoutPlayersInput = {
    update: XOR<UserUpdateWithoutPlayersInput, UserUncheckedUpdateWithoutPlayersInput>
    create: XOR<UserCreateWithoutPlayersInput, UserUncheckedCreateWithoutPlayersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlayersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlayersInput, UserUncheckedUpdateWithoutPlayersInput>
  }

  export type UserUpdateWithoutPlayersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    games?: GameUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    games?: GameUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HanshuangCreateWithoutGameInput = {
    createdAt?: Date | string
    scores?: HanshuangScoreCreateNestedManyWithoutHanshuangInput
  }

  export type HanshuangUncheckedCreateWithoutGameInput = {
    id?: number
    createdAt?: Date | string
    scores?: HanshuangScoreUncheckedCreateNestedManyWithoutHanshuangInput
  }

  export type HanshuangCreateOrConnectWithoutGameInput = {
    where: HanshuangWhereUniqueInput
    create: XOR<HanshuangCreateWithoutGameInput, HanshuangUncheckedCreateWithoutGameInput>
  }

  export type HanshuangCreateManyGameInputEnvelope = {
    data: HanshuangCreateManyGameInput | HanshuangCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutGamesInput = {
    username: string
    password: string
    players?: PlayerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGamesInput = {
    id?: number
    username: string
    password: string
    players?: PlayerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGamesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
  }

  export type HanshuangUpsertWithWhereUniqueWithoutGameInput = {
    where: HanshuangWhereUniqueInput
    update: XOR<HanshuangUpdateWithoutGameInput, HanshuangUncheckedUpdateWithoutGameInput>
    create: XOR<HanshuangCreateWithoutGameInput, HanshuangUncheckedCreateWithoutGameInput>
  }

  export type HanshuangUpdateWithWhereUniqueWithoutGameInput = {
    where: HanshuangWhereUniqueInput
    data: XOR<HanshuangUpdateWithoutGameInput, HanshuangUncheckedUpdateWithoutGameInput>
  }

  export type HanshuangUpdateManyWithWhereWithoutGameInput = {
    where: HanshuangScalarWhereInput
    data: XOR<HanshuangUpdateManyMutationInput, HanshuangUncheckedUpdateManyWithoutGameInput>
  }

  export type HanshuangScalarWhereInput = {
    AND?: HanshuangScalarWhereInput | HanshuangScalarWhereInput[]
    OR?: HanshuangScalarWhereInput[]
    NOT?: HanshuangScalarWhereInput | HanshuangScalarWhereInput[]
    id?: IntFilter<"Hanshuang"> | number
    gameId?: IntFilter<"Hanshuang"> | number
    createdAt?: DateTimeFilter<"Hanshuang"> | Date | string
  }

  export type UserUpsertWithoutGamesInput = {
    update: XOR<UserUpdateWithoutGamesInput, UserUncheckedUpdateWithoutGamesInput>
    create: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesInput, UserUncheckedUpdateWithoutGamesInput>
  }

  export type UserUpdateWithoutGamesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    players?: PlayerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    players?: PlayerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GameCreateWithoutHanshuangsInput = {
    date: string
    user: UserCreateNestedOneWithoutGamesInput
  }

  export type GameUncheckedCreateWithoutHanshuangsInput = {
    id?: number
    date: string
    userId: number
  }

  export type GameCreateOrConnectWithoutHanshuangsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutHanshuangsInput, GameUncheckedCreateWithoutHanshuangsInput>
  }

  export type HanshuangScoreCreateWithoutHanshuangInput = {
    score: number
    chip: number
    player: PlayerCreateNestedOneWithoutScoresInput
  }

  export type HanshuangScoreUncheckedCreateWithoutHanshuangInput = {
    id?: number
    playerId: number
    score: number
    chip: number
  }

  export type HanshuangScoreCreateOrConnectWithoutHanshuangInput = {
    where: HanshuangScoreWhereUniqueInput
    create: XOR<HanshuangScoreCreateWithoutHanshuangInput, HanshuangScoreUncheckedCreateWithoutHanshuangInput>
  }

  export type HanshuangScoreCreateManyHanshuangInputEnvelope = {
    data: HanshuangScoreCreateManyHanshuangInput | HanshuangScoreCreateManyHanshuangInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithoutHanshuangsInput = {
    update: XOR<GameUpdateWithoutHanshuangsInput, GameUncheckedUpdateWithoutHanshuangsInput>
    create: XOR<GameCreateWithoutHanshuangsInput, GameUncheckedCreateWithoutHanshuangsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutHanshuangsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutHanshuangsInput, GameUncheckedUpdateWithoutHanshuangsInput>
  }

  export type GameUpdateWithoutHanshuangsInput = {
    date?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutHanshuangsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type HanshuangScoreUpsertWithWhereUniqueWithoutHanshuangInput = {
    where: HanshuangScoreWhereUniqueInput
    update: XOR<HanshuangScoreUpdateWithoutHanshuangInput, HanshuangScoreUncheckedUpdateWithoutHanshuangInput>
    create: XOR<HanshuangScoreCreateWithoutHanshuangInput, HanshuangScoreUncheckedCreateWithoutHanshuangInput>
  }

  export type HanshuangScoreUpdateWithWhereUniqueWithoutHanshuangInput = {
    where: HanshuangScoreWhereUniqueInput
    data: XOR<HanshuangScoreUpdateWithoutHanshuangInput, HanshuangScoreUncheckedUpdateWithoutHanshuangInput>
  }

  export type HanshuangScoreUpdateManyWithWhereWithoutHanshuangInput = {
    where: HanshuangScoreScalarWhereInput
    data: XOR<HanshuangScoreUpdateManyMutationInput, HanshuangScoreUncheckedUpdateManyWithoutHanshuangInput>
  }

  export type PlayerCreateWithoutScoresInput = {
    name: string
    user: UserCreateNestedOneWithoutPlayersInput
  }

  export type PlayerUncheckedCreateWithoutScoresInput = {
    id?: number
    name: string
    userId: number
  }

  export type PlayerCreateOrConnectWithoutScoresInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutScoresInput, PlayerUncheckedCreateWithoutScoresInput>
  }

  export type HanshuangCreateWithoutScoresInput = {
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutHanshuangsInput
  }

  export type HanshuangUncheckedCreateWithoutScoresInput = {
    id?: number
    gameId: number
    createdAt?: Date | string
  }

  export type HanshuangCreateOrConnectWithoutScoresInput = {
    where: HanshuangWhereUniqueInput
    create: XOR<HanshuangCreateWithoutScoresInput, HanshuangUncheckedCreateWithoutScoresInput>
  }

  export type PlayerUpsertWithoutScoresInput = {
    update: XOR<PlayerUpdateWithoutScoresInput, PlayerUncheckedUpdateWithoutScoresInput>
    create: XOR<PlayerCreateWithoutScoresInput, PlayerUncheckedCreateWithoutScoresInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutScoresInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutScoresInput, PlayerUncheckedUpdateWithoutScoresInput>
  }

  export type PlayerUpdateWithoutScoresInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type PlayerUncheckedUpdateWithoutScoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type HanshuangUpsertWithoutScoresInput = {
    update: XOR<HanshuangUpdateWithoutScoresInput, HanshuangUncheckedUpdateWithoutScoresInput>
    create: XOR<HanshuangCreateWithoutScoresInput, HanshuangUncheckedCreateWithoutScoresInput>
    where?: HanshuangWhereInput
  }

  export type HanshuangUpdateToOneWithWhereWithoutScoresInput = {
    where?: HanshuangWhereInput
    data: XOR<HanshuangUpdateWithoutScoresInput, HanshuangUncheckedUpdateWithoutScoresInput>
  }

  export type HanshuangUpdateWithoutScoresInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutHanshuangsNestedInput
  }

  export type HanshuangUncheckedUpdateWithoutScoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateManyUserInput = {
    id?: number
    name: string
  }

  export type GameCreateManyUserInput = {
    id?: number
    date: string
  }

  export type PlayerUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    scores?: HanshuangScoreUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    scores?: HanshuangScoreUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GameUpdateWithoutUserInput = {
    date?: StringFieldUpdateOperationsInput | string
    hanshuangs?: HanshuangUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    hanshuangs?: HanshuangUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
  }

  export type HanshuangScoreCreateManyPlayerInput = {
    id?: number
    hanshuangId: number
    score: number
    chip: number
  }

  export type HanshuangScoreUpdateWithoutPlayerInput = {
    score?: IntFieldUpdateOperationsInput | number
    chip?: IntFieldUpdateOperationsInput | number
    hanshuang?: HanshuangUpdateOneRequiredWithoutScoresNestedInput
  }

  export type HanshuangScoreUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    hanshuangId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    chip?: IntFieldUpdateOperationsInput | number
  }

  export type HanshuangScoreUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    hanshuangId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    chip?: IntFieldUpdateOperationsInput | number
  }

  export type HanshuangCreateManyGameInput = {
    id?: number
    createdAt?: Date | string
  }

  export type HanshuangUpdateWithoutGameInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: HanshuangScoreUpdateManyWithoutHanshuangNestedInput
  }

  export type HanshuangUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: HanshuangScoreUncheckedUpdateManyWithoutHanshuangNestedInput
  }

  export type HanshuangUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HanshuangScoreCreateManyHanshuangInput = {
    id?: number
    playerId: number
    score: number
    chip: number
  }

  export type HanshuangScoreUpdateWithoutHanshuangInput = {
    score?: IntFieldUpdateOperationsInput | number
    chip?: IntFieldUpdateOperationsInput | number
    player?: PlayerUpdateOneRequiredWithoutScoresNestedInput
  }

  export type HanshuangScoreUncheckedUpdateWithoutHanshuangInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    chip?: IntFieldUpdateOperationsInput | number
  }

  export type HanshuangScoreUncheckedUpdateManyWithoutHanshuangInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    chip?: IntFieldUpdateOperationsInput | number
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
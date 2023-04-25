
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.12.0
 * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
 */
Prisma.prismaVersion = {
  client: "4.12.0",
  engine: "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AccessorModelScalarFieldEnum = makeEnum({
  id: 'id',
  oauth_sub: 'oauth_sub',
  oauth_type: 'oauth_type',
  customer_id: 'customer_id',
  business_user_id: 'business_user_id'
});

exports.Prisma.BusinessUserModelScalarFieldEnum = makeEnum({
  id: 'id',
  profile_image_url: 'profile_image_url',
  introduction_title: 'introduction_title',
  introduction_content: 'introduction_content'
});

exports.Prisma.CustomerModelScalarFieldEnum = makeEnum({
  id: 'id',
  profile_image_url: 'profile_image_url',
  gender: 'gender',
  birth: 'birth',
  address_first: 'address_first',
  address_second: 'address_second'
});

exports.Prisma.HSCompanyIntroductionImageModelScalarFieldEnum = makeEnum({
  id: 'id',
  url: 'url',
  company_id: 'company_id'
});

exports.Prisma.HSCompanyModelScalarFieldEnum = makeEnum({
  id: 'id',
  business_num: 'business_num',
  address_first: 'address_first',
  address_second: 'address_second'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.REAgentModelScalarFieldEnum = makeEnum({
  id: 'id',
  is_licensed: 'is_licensed',
  re_num: 're_num',
  re_name: 're_name',
  re_phone: 're_phone',
  re_licensed_agent_name: 're_licensed_agent_name',
  re_address_first: 're_address_first',
  re_address_second: 're_address_second'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TempHSCompanyModelScalarFieldEnum = makeEnum({
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
});

exports.Prisma.TempREAgentModelScalarFieldEnum = makeEnum({
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
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserModelScalarFieldEnum = makeEnum({
  created_at: 'created_at',
  id: 'id',
  name: 'name',
  phone: 'phone',
  phone_verified: 'phone_verified',
  email: 'email',
  email_verified: 'email_verified'
});
exports.GenderType = makeEnum({
  female: 'female',
  male: 'male',
  other: 'other'
});

exports.OauthType = makeEnum({
  kakao: 'kakao',
  naver: 'naver'
});

exports.Prisma.ModelName = makeEnum({
  AccessorModel: 'AccessorModel',
  UserModel: 'UserModel',
  CustomerModel: 'CustomerModel',
  BusinessUserModel: 'BusinessUserModel',
  REAgentModel: 'REAgentModel',
  HSCompanyModel: 'HSCompanyModel',
  HSCompanyIntroductionImageModel: 'HSCompanyIntroductionImageModel',
  TempREAgentModel: 'TempREAgentModel',
  TempHSCompanyModel: 'TempHSCompanyModel'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)


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

exports.Prisma.BoardArticleScalarFieldEnum = makeEnum({
  id: 'id',
  board_id: 'board_id',
  writer_id: 'writer_id',
  title: 'title',
  content: 'content'
});

exports.Prisma.BoardCommentScalarFieldEnum = makeEnum({
  id: 'id',
  writer_id: 'writer_id',
  article_id: 'article_id',
  content: 'content'
});

exports.Prisma.BoardScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.BusinessItemScalarFieldEnum = makeEnum({
  id: 'id',
  manager_id: 'manager_id',
  name: 'name',
  main_image: 'main_image'
});

exports.Prisma.BusinessRateCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.BusinessRateScalarFieldEnum = makeEnum({
  id: 'id',
  category_id: 'category_id',
  business_id: 'business_id',
  rater_id: 'rater_id',
  rate: 'rate'
});

exports.Prisma.BusinessReviewScalarFieldEnum = makeEnum({
  id: 'id',
  business_id: 'business_id',
  reviewer_id: 'reviewer_id',
  content: 'content'
});

exports.Prisma.BusinessUserScalarFieldEnum = makeEnum({
  id: 'id',
  is_verified: 'is_verified',
  introduction_title: 'introduction_title',
  introduction_content: 'introduction_content'
});

exports.Prisma.CustomerScalarFieldEnum = makeEnum({
  id: 'id',
  birth: 'birth',
  gender: 'gender'
});

exports.Prisma.HomeCareCompanyScalarFieldEnum = makeEnum({
  id: 'id',
  business_registration_num: 'business_registration_num'
});

exports.Prisma.HomeCareSpecializedFieldScalarFieldEnum = makeEnum({
  id: 'id',
  sub_category_id: 'sub_category_id',
  company_id: 'company_id'
});

exports.Prisma.HomeCareSubCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  super_id: 'super_id',
  name: 'name'
});

exports.Prisma.HomeCareSuperCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RealEstateAgentScalarFieldEnum = makeEnum({
  id: 'id',
  is_licensed: 'is_licensed',
  real_estate_num: 'real_estate_num',
  real_estate_name: 'real_estate_name',
  licensed_agent_name: 'licensed_agent_name',
  real_estate_phone: 'real_estate_phone'
});

exports.Prisma.RealEstateSpecializedFieldScalarFieldEnum = makeEnum({
  id: 'id',
  sub_category_id: 'sub_category_id',
  agent_id: 'agent_id'
});

exports.Prisma.RealEstateSubCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  super_id: 'super_id',
  name: 'name'
});

exports.Prisma.RealEstateSuperCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserAuthenticationScalarFieldEnum = makeEnum({
  id: 'id',
  oauth_sub: 'oauth_sub',
  oauth_type: 'oauth_type'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  auth_id: 'auth_id',
  name: 'name',
  email: 'email',
  email_verified: 'email_verified',
  phone: 'phone',
  address_first: 'address_first',
  address_second: 'address_second'
});


exports.Prisma.ModelName = makeEnum({
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

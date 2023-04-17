
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
  business_user_id: 'business_user_id',
  customer_id: 'customer_id'
});

exports.Prisma.BoardArticleContentModelScalarFieldEnum = makeEnum({
  id: 'id',
  text: 'text',
  article_id: 'article_id',
  created_at: 'created_at'
});

exports.Prisma.BoardArticleModelScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  author_id: 'author_id',
  board_id: 'board_id'
});

exports.Prisma.BoardCommentContentModelScalarFieldEnum = makeEnum({
  id: 'id',
  text: 'text',
  comment_id: 'comment_id',
  created_at: 'created_at'
});

exports.Prisma.BoardCommentModelScalarFieldEnum = makeEnum({
  id: 'id',
  author_id: 'author_id',
  article_id: 'article_id'
});

exports.Prisma.BoardModelScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.BusinessCertificationModelScalarFieldEnum = makeEnum({
  id: 'id',
  business_user_id: 'business_user_id',
  image_url: 'image_url'
});

exports.Prisma.BusinessRateCategoryModelScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.BusinessRateModelScalarFieldEnum = makeEnum({
  id: 'id',
  category_id: 'category_id',
  rater_id: 'rater_id',
  ratee_id: 'ratee_id',
  rate: 'rate'
});

exports.Prisma.BusinessReviewModelScalarFieldEnum = makeEnum({
  id: 'id',
  reviewer_id: 'reviewer_id',
  reviewee_id: 'reviewee_id',
  review: 'review'
});

exports.Prisma.BusinessUserModelScalarFieldEnum = makeEnum({
  id: 'id',
  is_verified: 'is_verified',
  introduction_title: 'introduction_title',
  introduction_content: 'introduction_content'
});

exports.Prisma.CustomerModelScalarFieldEnum = makeEnum({
  id: 'id',
  birth: 'birth',
  gender: 'gender'
});

exports.Prisma.HomeCareCompanyModelScalarFieldEnum = makeEnum({
  id: 'id',
  business_registration_num: 'business_registration_num',
  specialized_field_id: 'specialized_field_id'
});

exports.Prisma.HomeCareIntroductionImageModelScalarFieldEnum = makeEnum({
  id: 'id',
  image_url: 'image_url',
  company_id: 'company_id'
});

exports.Prisma.HomeCareSpecializedSubFieldModelScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  super_id: 'super_id'
});

exports.Prisma.HomeCareSpecializedSuperFieldModelScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RealEstateAgentModelScalarFieldEnum = makeEnum({
  id: 'id',
  is_licensed: 'is_licensed',
  real_estate_num: 'real_estate_num',
  real_estate_name: 'real_estate_name',
  real_estate_phone: 'real_estate_phone',
  licensed_agent_name: 'licensed_agent_name',
  specialized_field_id: 'specialized_field_id'
});

exports.Prisma.RealEstatePropertyModelScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  main_image_url: 'main_image_url',
  agent_id: 'agent_id'
});

exports.Prisma.RealEstateSpecializedSubFieldModelScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  super_id: 'super_id'
});

exports.Prisma.RealEstateSpecializedSuperFieldModelScalarFieldEnum = makeEnum({
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

exports.Prisma.UserModelScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  email_verified: 'email_verified',
  phone: 'phone',
  phone_verified: 'phone_verified',
  address_first: 'address_first',
  address_second: 'address_second',
  profile_image_url: 'profile_image_url'
});


exports.Prisma.ModelName = makeEnum({
  RealEstatePropertyModel: 'RealEstatePropertyModel',
  HomeCareSpecializedSuperFieldModel: 'HomeCareSpecializedSuperFieldModel',
  HomeCareSpecializedSubFieldModel: 'HomeCareSpecializedSubFieldModel',
  RealEstateSpecializedSuperFieldModel: 'RealEstateSpecializedSuperFieldModel',
  RealEstateSpecializedSubFieldModel: 'RealEstateSpecializedSubFieldModel',
  BusinessRateModel: 'BusinessRateModel',
  BusinessRateCategoryModel: 'BusinessRateCategoryModel',
  BusinessReviewModel: 'BusinessReviewModel',
  BusinessCertificationModel: 'BusinessCertificationModel',
  AccessorModel: 'AccessorModel',
  UserModel: 'UserModel',
  CustomerModel: 'CustomerModel',
  BusinessUserModel: 'BusinessUserModel',
  RealEstateAgentModel: 'RealEstateAgentModel',
  HomeCareCompanyModel: 'HomeCareCompanyModel',
  HomeCareIntroductionImageModel: 'HomeCareIntroductionImageModel',
  BoardModel: 'BoardModel',
  BoardArticleModel: 'BoardArticleModel',
  BoardArticleContentModel: 'BoardArticleContentModel',
  BoardCommentModel: 'BoardCommentModel',
  BoardCommentContentModel: 'BoardCommentContentModel'
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

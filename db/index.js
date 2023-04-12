
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} = require('./runtime/library')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


  const path = require('path')

const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "db",
    
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"Board\",\"dbName\":\"boards\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"articles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardArticle\",\"relationName\":\"BoardToBoardArticle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BoardArticle\",\"dbName\":\"board_articles\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"board_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"writer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"board\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Board\",\"relationName\":\"BoardToBoardArticle\",\"relationFromFields\":[\"board_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"writer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BoardArticleToUser\",\"relationFromFields\":[\"writer_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardComment\",\"relationName\":\"BoardArticleToBoardComment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BoardComment\",\"dbName\":\"board_comments\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"writer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"article_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"article\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardArticle\",\"relationName\":\"BoardArticleToBoardComment\",\"relationFromFields\":[\"article_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"writer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BoardCommentToUser\",\"relationFromFields\":[\"writer_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BusinessItem\",\"dbName\":\"business_items\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manager_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"main_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manager\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUser\",\"relationName\":\"BusinessItemToBusinessUser\",\"relationFromFields\":[\"manager_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BusinessRateCategory\",\"dbName\":\"business_rate_categories\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessRate\",\"relationName\":\"BusinessRateToBusinessRateCategory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BusinessRate\",\"dbName\":\"business_rate\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rater_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUser\",\"relationName\":\"BusinessRateToBusinessUser\",\"relationFromFields\":[\"business_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessRateCategory\",\"relationName\":\"BusinessRateToBusinessRateCategory\",\"relationFromFields\":[\"category_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rater\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"BusinessRateToCustomer\",\"relationFromFields\":[\"rater_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BusinessReview\",\"dbName\":\"business_reviews\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUser\",\"relationName\":\"BusinessReviewToBusinessUser\",\"relationFromFields\":[\"business_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"BusinessReviewToCustomer\",\"relationFromFields\":[\"reviewer_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"HomeCareSpecializedField\",\"dbName\":\"home_care_specialized_fields\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sub_category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sub_category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareSubCategory\",\"relationName\":\"HomeCareSpecializedFieldToHomeCareSubCategory\",\"relationFromFields\":[\"sub_category_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareCompany\",\"relationName\":\"HomeCareCompanyToHomeCareSpecializedField\",\"relationFromFields\":[\"company_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"sub_category_id\",\"company_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"sub_category_id\",\"company_id\"]}],\"isGenerated\":false},{\"name\":\"HomeCareSuperCategory\",\"dbName\":\"home_care_super_categories\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"home_care_sub_categories\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareSubCategory\",\"relationName\":\"HomeCareSubCategoryToHomeCareSuperCategory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"HomeCareSubCategory\",\"dbName\":\"home_care_sub_categories\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"super_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialized_fields\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareSpecializedField\",\"relationName\":\"HomeCareSpecializedFieldToHomeCareSubCategory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"super\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareSuperCategory\",\"relationName\":\"HomeCareSubCategoryToHomeCareSuperCategory\",\"relationFromFields\":[\"super_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"RealEstateSpecializedField\",\"dbName\":\"real_estate_specialized_fields\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sub_category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateAgent\",\"relationName\":\"RealEstateAgentToRealEstateSpecializedField\",\"relationFromFields\":[\"agent_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"real_estate_sub_category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateSubCategory\",\"relationName\":\"RealEstateSpecializedFieldToRealEstateSubCategory\",\"relationFromFields\":[\"sub_category_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"sub_category_id\",\"agent_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"sub_category_id\",\"agent_id\"]}],\"isGenerated\":false},{\"name\":\"RealEstateSuperCategory\",\"dbName\":\"real_estate_super_categories\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"real_estate_sub_categories\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateSubCategory\",\"relationName\":\"RealEstateSubCategoryToRealEstateSuperCategory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"RealEstateSubCategory\",\"dbName\":\"real_estate_sub_categories\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"super_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"real_estate_specialized_fields\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateSpecializedField\",\"relationName\":\"RealEstateSpecializedFieldToRealEstateSubCategory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"super\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateSuperCategory\",\"relationName\":\"RealEstateSubCategoryToRealEstateSuperCategory\",\"relationFromFields\":[\"super_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"UserAuthentication\",\"dbName\":\"user_authentications\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_sub\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToUserAuthentication\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"User\",\"dbName\":\"users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_first\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_second\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"board_articles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardArticle\",\"relationName\":\"BoardArticleToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"board_comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardComment\",\"relationName\":\"BoardCommentToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUser\",\"relationName\":\"BusinessUserToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"CustomerToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserAuthentication\",\"relationName\":\"UserToUserAuthentication\",\"relationFromFields\":[\"auth_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Customer\",\"dbName\":\"customers\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_rates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessRate\",\"relationName\":\"BusinessRateToCustomer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_reviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessReview\",\"relationName\":\"BusinessReviewToCustomer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CustomerToUser\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BusinessUser\",\"dbName\":\"business_users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessItem\",\"relationName\":\"BusinessItemToBusinessUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_rates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessRate\",\"relationName\":\"BusinessRateToBusinessUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_reviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessReview\",\"relationName\":\"BusinessReviewToBusinessUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BusinessUserToUser\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"home_care_company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareCompany\",\"relationName\":\"BusinessUserToHomeCareCompany\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"real_estate_agent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateAgent\",\"relationName\":\"BusinessUserToRealEstateAgent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"RealEstateAgent\",\"dbName\":\"real_estate_agents\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_licensed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"real_estate_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"real_estate_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licensed_agent_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"real_estate_phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUser\",\"relationName\":\"BusinessUserToRealEstateAgent\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialized_fields\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateSpecializedField\",\"relationName\":\"RealEstateAgentToRealEstateSpecializedField\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"HomeCareCompany\",\"dbName\":\"home_care_companies\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_registration_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUser\",\"relationName\":\"BusinessUserToHomeCareCompany\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialized_fields\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareSpecializedField\",\"relationName\":\"HomeCareCompanyToHomeCareSpecializedField\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"Board\",\"plural\":\"boards\",\"findUnique\":\"findUniqueBoard\",\"findUniqueOrThrow\":\"findUniqueBoardOrThrow\",\"findFirst\":\"findFirstBoard\",\"findFirstOrThrow\":\"findFirstBoardOrThrow\",\"findMany\":\"findManyBoard\",\"create\":\"createOneBoard\",\"createMany\":\"createManyBoard\",\"delete\":\"deleteOneBoard\",\"update\":\"updateOneBoard\",\"deleteMany\":\"deleteManyBoard\",\"updateMany\":\"updateManyBoard\",\"upsert\":\"upsertOneBoard\",\"aggregate\":\"aggregateBoard\",\"groupBy\":\"groupByBoard\"},{\"model\":\"BoardArticle\",\"plural\":\"boardArticles\",\"findUnique\":\"findUniqueBoardArticle\",\"findUniqueOrThrow\":\"findUniqueBoardArticleOrThrow\",\"findFirst\":\"findFirstBoardArticle\",\"findFirstOrThrow\":\"findFirstBoardArticleOrThrow\",\"findMany\":\"findManyBoardArticle\",\"create\":\"createOneBoardArticle\",\"createMany\":\"createManyBoardArticle\",\"delete\":\"deleteOneBoardArticle\",\"update\":\"updateOneBoardArticle\",\"deleteMany\":\"deleteManyBoardArticle\",\"updateMany\":\"updateManyBoardArticle\",\"upsert\":\"upsertOneBoardArticle\",\"aggregate\":\"aggregateBoardArticle\",\"groupBy\":\"groupByBoardArticle\"},{\"model\":\"BoardComment\",\"plural\":\"boardComments\",\"findUnique\":\"findUniqueBoardComment\",\"findUniqueOrThrow\":\"findUniqueBoardCommentOrThrow\",\"findFirst\":\"findFirstBoardComment\",\"findFirstOrThrow\":\"findFirstBoardCommentOrThrow\",\"findMany\":\"findManyBoardComment\",\"create\":\"createOneBoardComment\",\"createMany\":\"createManyBoardComment\",\"delete\":\"deleteOneBoardComment\",\"update\":\"updateOneBoardComment\",\"deleteMany\":\"deleteManyBoardComment\",\"updateMany\":\"updateManyBoardComment\",\"upsert\":\"upsertOneBoardComment\",\"aggregate\":\"aggregateBoardComment\",\"groupBy\":\"groupByBoardComment\"},{\"model\":\"BusinessItem\",\"plural\":\"businessItems\",\"findUnique\":\"findUniqueBusinessItem\",\"findUniqueOrThrow\":\"findUniqueBusinessItemOrThrow\",\"findFirst\":\"findFirstBusinessItem\",\"findFirstOrThrow\":\"findFirstBusinessItemOrThrow\",\"findMany\":\"findManyBusinessItem\",\"create\":\"createOneBusinessItem\",\"createMany\":\"createManyBusinessItem\",\"delete\":\"deleteOneBusinessItem\",\"update\":\"updateOneBusinessItem\",\"deleteMany\":\"deleteManyBusinessItem\",\"updateMany\":\"updateManyBusinessItem\",\"upsert\":\"upsertOneBusinessItem\",\"aggregate\":\"aggregateBusinessItem\",\"groupBy\":\"groupByBusinessItem\"},{\"model\":\"BusinessRateCategory\",\"plural\":\"businessRateCategories\",\"findUnique\":\"findUniqueBusinessRateCategory\",\"findUniqueOrThrow\":\"findUniqueBusinessRateCategoryOrThrow\",\"findFirst\":\"findFirstBusinessRateCategory\",\"findFirstOrThrow\":\"findFirstBusinessRateCategoryOrThrow\",\"findMany\":\"findManyBusinessRateCategory\",\"create\":\"createOneBusinessRateCategory\",\"createMany\":\"createManyBusinessRateCategory\",\"delete\":\"deleteOneBusinessRateCategory\",\"update\":\"updateOneBusinessRateCategory\",\"deleteMany\":\"deleteManyBusinessRateCategory\",\"updateMany\":\"updateManyBusinessRateCategory\",\"upsert\":\"upsertOneBusinessRateCategory\",\"aggregate\":\"aggregateBusinessRateCategory\",\"groupBy\":\"groupByBusinessRateCategory\"},{\"model\":\"BusinessRate\",\"plural\":\"businessRates\",\"findUnique\":\"findUniqueBusinessRate\",\"findUniqueOrThrow\":\"findUniqueBusinessRateOrThrow\",\"findFirst\":\"findFirstBusinessRate\",\"findFirstOrThrow\":\"findFirstBusinessRateOrThrow\",\"findMany\":\"findManyBusinessRate\",\"create\":\"createOneBusinessRate\",\"createMany\":\"createManyBusinessRate\",\"delete\":\"deleteOneBusinessRate\",\"update\":\"updateOneBusinessRate\",\"deleteMany\":\"deleteManyBusinessRate\",\"updateMany\":\"updateManyBusinessRate\",\"upsert\":\"upsertOneBusinessRate\",\"aggregate\":\"aggregateBusinessRate\",\"groupBy\":\"groupByBusinessRate\"},{\"model\":\"BusinessReview\",\"plural\":\"businessReviews\",\"findUnique\":\"findUniqueBusinessReview\",\"findUniqueOrThrow\":\"findUniqueBusinessReviewOrThrow\",\"findFirst\":\"findFirstBusinessReview\",\"findFirstOrThrow\":\"findFirstBusinessReviewOrThrow\",\"findMany\":\"findManyBusinessReview\",\"create\":\"createOneBusinessReview\",\"createMany\":\"createManyBusinessReview\",\"delete\":\"deleteOneBusinessReview\",\"update\":\"updateOneBusinessReview\",\"deleteMany\":\"deleteManyBusinessReview\",\"updateMany\":\"updateManyBusinessReview\",\"upsert\":\"upsertOneBusinessReview\",\"aggregate\":\"aggregateBusinessReview\",\"groupBy\":\"groupByBusinessReview\"},{\"model\":\"HomeCareSpecializedField\",\"plural\":\"homeCareSpecializedFields\",\"findUnique\":\"findUniqueHomeCareSpecializedField\",\"findUniqueOrThrow\":\"findUniqueHomeCareSpecializedFieldOrThrow\",\"findFirst\":\"findFirstHomeCareSpecializedField\",\"findFirstOrThrow\":\"findFirstHomeCareSpecializedFieldOrThrow\",\"findMany\":\"findManyHomeCareSpecializedField\",\"create\":\"createOneHomeCareSpecializedField\",\"createMany\":\"createManyHomeCareSpecializedField\",\"delete\":\"deleteOneHomeCareSpecializedField\",\"update\":\"updateOneHomeCareSpecializedField\",\"deleteMany\":\"deleteManyHomeCareSpecializedField\",\"updateMany\":\"updateManyHomeCareSpecializedField\",\"upsert\":\"upsertOneHomeCareSpecializedField\",\"aggregate\":\"aggregateHomeCareSpecializedField\",\"groupBy\":\"groupByHomeCareSpecializedField\"},{\"model\":\"HomeCareSuperCategory\",\"plural\":\"homeCareSuperCategories\",\"findUnique\":\"findUniqueHomeCareSuperCategory\",\"findUniqueOrThrow\":\"findUniqueHomeCareSuperCategoryOrThrow\",\"findFirst\":\"findFirstHomeCareSuperCategory\",\"findFirstOrThrow\":\"findFirstHomeCareSuperCategoryOrThrow\",\"findMany\":\"findManyHomeCareSuperCategory\",\"create\":\"createOneHomeCareSuperCategory\",\"createMany\":\"createManyHomeCareSuperCategory\",\"delete\":\"deleteOneHomeCareSuperCategory\",\"update\":\"updateOneHomeCareSuperCategory\",\"deleteMany\":\"deleteManyHomeCareSuperCategory\",\"updateMany\":\"updateManyHomeCareSuperCategory\",\"upsert\":\"upsertOneHomeCareSuperCategory\",\"aggregate\":\"aggregateHomeCareSuperCategory\",\"groupBy\":\"groupByHomeCareSuperCategory\"},{\"model\":\"HomeCareSubCategory\",\"plural\":\"homeCareSubCategories\",\"findUnique\":\"findUniqueHomeCareSubCategory\",\"findUniqueOrThrow\":\"findUniqueHomeCareSubCategoryOrThrow\",\"findFirst\":\"findFirstHomeCareSubCategory\",\"findFirstOrThrow\":\"findFirstHomeCareSubCategoryOrThrow\",\"findMany\":\"findManyHomeCareSubCategory\",\"create\":\"createOneHomeCareSubCategory\",\"createMany\":\"createManyHomeCareSubCategory\",\"delete\":\"deleteOneHomeCareSubCategory\",\"update\":\"updateOneHomeCareSubCategory\",\"deleteMany\":\"deleteManyHomeCareSubCategory\",\"updateMany\":\"updateManyHomeCareSubCategory\",\"upsert\":\"upsertOneHomeCareSubCategory\",\"aggregate\":\"aggregateHomeCareSubCategory\",\"groupBy\":\"groupByHomeCareSubCategory\"},{\"model\":\"RealEstateSpecializedField\",\"plural\":\"realEstateSpecializedFields\",\"findUnique\":\"findUniqueRealEstateSpecializedField\",\"findUniqueOrThrow\":\"findUniqueRealEstateSpecializedFieldOrThrow\",\"findFirst\":\"findFirstRealEstateSpecializedField\",\"findFirstOrThrow\":\"findFirstRealEstateSpecializedFieldOrThrow\",\"findMany\":\"findManyRealEstateSpecializedField\",\"create\":\"createOneRealEstateSpecializedField\",\"createMany\":\"createManyRealEstateSpecializedField\",\"delete\":\"deleteOneRealEstateSpecializedField\",\"update\":\"updateOneRealEstateSpecializedField\",\"deleteMany\":\"deleteManyRealEstateSpecializedField\",\"updateMany\":\"updateManyRealEstateSpecializedField\",\"upsert\":\"upsertOneRealEstateSpecializedField\",\"aggregate\":\"aggregateRealEstateSpecializedField\",\"groupBy\":\"groupByRealEstateSpecializedField\"},{\"model\":\"RealEstateSuperCategory\",\"plural\":\"realEstateSuperCategories\",\"findUnique\":\"findUniqueRealEstateSuperCategory\",\"findUniqueOrThrow\":\"findUniqueRealEstateSuperCategoryOrThrow\",\"findFirst\":\"findFirstRealEstateSuperCategory\",\"findFirstOrThrow\":\"findFirstRealEstateSuperCategoryOrThrow\",\"findMany\":\"findManyRealEstateSuperCategory\",\"create\":\"createOneRealEstateSuperCategory\",\"createMany\":\"createManyRealEstateSuperCategory\",\"delete\":\"deleteOneRealEstateSuperCategory\",\"update\":\"updateOneRealEstateSuperCategory\",\"deleteMany\":\"deleteManyRealEstateSuperCategory\",\"updateMany\":\"updateManyRealEstateSuperCategory\",\"upsert\":\"upsertOneRealEstateSuperCategory\",\"aggregate\":\"aggregateRealEstateSuperCategory\",\"groupBy\":\"groupByRealEstateSuperCategory\"},{\"model\":\"RealEstateSubCategory\",\"plural\":\"realEstateSubCategories\",\"findUnique\":\"findUniqueRealEstateSubCategory\",\"findUniqueOrThrow\":\"findUniqueRealEstateSubCategoryOrThrow\",\"findFirst\":\"findFirstRealEstateSubCategory\",\"findFirstOrThrow\":\"findFirstRealEstateSubCategoryOrThrow\",\"findMany\":\"findManyRealEstateSubCategory\",\"create\":\"createOneRealEstateSubCategory\",\"createMany\":\"createManyRealEstateSubCategory\",\"delete\":\"deleteOneRealEstateSubCategory\",\"update\":\"updateOneRealEstateSubCategory\",\"deleteMany\":\"deleteManyRealEstateSubCategory\",\"updateMany\":\"updateManyRealEstateSubCategory\",\"upsert\":\"upsertOneRealEstateSubCategory\",\"aggregate\":\"aggregateRealEstateSubCategory\",\"groupBy\":\"groupByRealEstateSubCategory\"},{\"model\":\"UserAuthentication\",\"plural\":\"userAuthentications\",\"findUnique\":\"findUniqueUserAuthentication\",\"findUniqueOrThrow\":\"findUniqueUserAuthenticationOrThrow\",\"findFirst\":\"findFirstUserAuthentication\",\"findFirstOrThrow\":\"findFirstUserAuthenticationOrThrow\",\"findMany\":\"findManyUserAuthentication\",\"create\":\"createOneUserAuthentication\",\"createMany\":\"createManyUserAuthentication\",\"delete\":\"deleteOneUserAuthentication\",\"update\":\"updateOneUserAuthentication\",\"deleteMany\":\"deleteManyUserAuthentication\",\"updateMany\":\"updateManyUserAuthentication\",\"upsert\":\"upsertOneUserAuthentication\",\"aggregate\":\"aggregateUserAuthentication\",\"groupBy\":\"groupByUserAuthentication\"},{\"model\":\"User\",\"plural\":\"users\",\"findUnique\":\"findUniqueUser\",\"findUniqueOrThrow\":\"findUniqueUserOrThrow\",\"findFirst\":\"findFirstUser\",\"findFirstOrThrow\":\"findFirstUserOrThrow\",\"findMany\":\"findManyUser\",\"create\":\"createOneUser\",\"createMany\":\"createManyUser\",\"delete\":\"deleteOneUser\",\"update\":\"updateOneUser\",\"deleteMany\":\"deleteManyUser\",\"updateMany\":\"updateManyUser\",\"upsert\":\"upsertOneUser\",\"aggregate\":\"aggregateUser\",\"groupBy\":\"groupByUser\"},{\"model\":\"Customer\",\"plural\":\"customers\",\"findUnique\":\"findUniqueCustomer\",\"findUniqueOrThrow\":\"findUniqueCustomerOrThrow\",\"findFirst\":\"findFirstCustomer\",\"findFirstOrThrow\":\"findFirstCustomerOrThrow\",\"findMany\":\"findManyCustomer\",\"create\":\"createOneCustomer\",\"createMany\":\"createManyCustomer\",\"delete\":\"deleteOneCustomer\",\"update\":\"updateOneCustomer\",\"deleteMany\":\"deleteManyCustomer\",\"updateMany\":\"updateManyCustomer\",\"upsert\":\"upsertOneCustomer\",\"aggregate\":\"aggregateCustomer\",\"groupBy\":\"groupByCustomer\"},{\"model\":\"BusinessUser\",\"plural\":\"businessUsers\",\"findUnique\":\"findUniqueBusinessUser\",\"findUniqueOrThrow\":\"findUniqueBusinessUserOrThrow\",\"findFirst\":\"findFirstBusinessUser\",\"findFirstOrThrow\":\"findFirstBusinessUserOrThrow\",\"findMany\":\"findManyBusinessUser\",\"create\":\"createOneBusinessUser\",\"createMany\":\"createManyBusinessUser\",\"delete\":\"deleteOneBusinessUser\",\"update\":\"updateOneBusinessUser\",\"deleteMany\":\"deleteManyBusinessUser\",\"updateMany\":\"updateManyBusinessUser\",\"upsert\":\"upsertOneBusinessUser\",\"aggregate\":\"aggregateBusinessUser\",\"groupBy\":\"groupByBusinessUser\"},{\"model\":\"RealEstateAgent\",\"plural\":\"realEstateAgents\",\"findUnique\":\"findUniqueRealEstateAgent\",\"findUniqueOrThrow\":\"findUniqueRealEstateAgentOrThrow\",\"findFirst\":\"findFirstRealEstateAgent\",\"findFirstOrThrow\":\"findFirstRealEstateAgentOrThrow\",\"findMany\":\"findManyRealEstateAgent\",\"create\":\"createOneRealEstateAgent\",\"createMany\":\"createManyRealEstateAgent\",\"delete\":\"deleteOneRealEstateAgent\",\"update\":\"updateOneRealEstateAgent\",\"deleteMany\":\"deleteManyRealEstateAgent\",\"updateMany\":\"updateManyRealEstateAgent\",\"upsert\":\"upsertOneRealEstateAgent\",\"aggregate\":\"aggregateRealEstateAgent\",\"groupBy\":\"groupByRealEstateAgent\"},{\"model\":\"HomeCareCompany\",\"plural\":\"homeCareCompanies\",\"findUnique\":\"findUniqueHomeCareCompany\",\"findUniqueOrThrow\":\"findUniqueHomeCareCompanyOrThrow\",\"findFirst\":\"findFirstHomeCareCompany\",\"findFirstOrThrow\":\"findFirstHomeCareCompanyOrThrow\",\"findMany\":\"findManyHomeCareCompany\",\"create\":\"createOneHomeCareCompany\",\"createMany\":\"createManyHomeCareCompany\",\"delete\":\"deleteOneHomeCareCompany\",\"update\":\"updateOneHomeCareCompany\",\"deleteMany\":\"deleteManyHomeCareCompany\",\"updateMany\":\"updateManyHomeCareCompany\",\"upsert\":\"upsertOneHomeCareCompany\",\"aggregate\":\"aggregateHomeCareCompany\",\"groupBy\":\"groupByHomeCareCompany\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/rojiwon/industriously/zipzoong-backend/db",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../.env",
    "schemaEnvPath": "../.env"
  },
  "relativePath": "../prisma",
  "clientVersion": "4.12.0",
  "engineVersion": "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": false
}
config.dirname = dirname
config.document = dmmf




const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})


const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-darwin.dylib.node");
path.join(process.cwd(), "db/libquery_engine-darwin.dylib.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "db/schema.prisma")

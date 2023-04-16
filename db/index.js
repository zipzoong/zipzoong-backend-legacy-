
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

exports.Prisma.AuthenticationModelScalarFieldEnum = makeEnum({
  id: 'id',
  oauth_sub: 'oauth_sub',
  oauth_type: 'oauth_type',
  business_user_id: 'business_user_id',
  customer_id: 'customer_id'
});

exports.Prisma.BoardArticleContentModelScalarFieldEnum = makeEnum({
  id: 'id',
  text: 'text',
  created_at: 'created_at',
  article_id: 'article_id'
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
  created_at: 'created_at',
  comment_id: 'comment_id'
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

exports.Prisma.BusinessRateCategoryModelScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.BusinessRateModelScalarFieldEnum = makeEnum({
  id: 'id',
  category_id: 'category_id',
  ratee_id: 'ratee_id',
  rater_id: 'rater_id',
  rate: 'rate'
});

exports.Prisma.BusinessReviewModelScalarFieldEnum = makeEnum({
  id: 'id',
  reviewee_id: 'reviewee_id',
  reviewer_id: 'reviewer_id',
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
  profile_image: 'profile_image'
});


exports.Prisma.ModelName = makeEnum({
  AuthenticationModel: 'AuthenticationModel',
  UserModel: 'UserModel',
  CustomerModel: 'CustomerModel',
  BusinessUserModel: 'BusinessUserModel',
  RealEstateAgentModel: 'RealEstateAgentModel',
  HomeCareCompanyModel: 'HomeCareCompanyModel',
  HomeCareIntroductionImageModel: 'HomeCareIntroductionImageModel',
  RealEstatePropertyModel: 'RealEstatePropertyModel',
  HomeCareSpecializedSuperFieldModel: 'HomeCareSpecializedSuperFieldModel',
  HomeCareSpecializedSubFieldModel: 'HomeCareSpecializedSubFieldModel',
  RealEstateSpecializedSuperFieldModel: 'RealEstateSpecializedSuperFieldModel',
  RealEstateSpecializedSubFieldModel: 'RealEstateSpecializedSubFieldModel',
  BusinessRateModel: 'BusinessRateModel',
  BusinessRateCategoryModel: 'BusinessRateCategoryModel',
  BusinessReviewModel: 'BusinessReviewModel',
  BoardModel: 'BoardModel',
  BoardArticleModel: 'BoardArticleModel',
  BoardArticleContentModel: 'BoardArticleContentModel',
  BoardCommentModel: 'BoardCommentModel',
  BoardCommentContentModel: 'BoardCommentContentModel'
});

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"AuthenticationModel\",\"dbName\":\"authentications\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_sub\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUserModel\",\"relationName\":\"AuthenticationModelToBusinessUserModel\",\"relationFromFields\":[\"business_user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CustomerModel\",\"relationName\":\"AuthenticationModelToCustomerModel\",\"relationFromFields\":[\"customer_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"oauth_sub\",\"oauth_type\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"oauth_sub\",\"oauth_type\"]}],\"isGenerated\":false},{\"name\":\"UserModel\",\"dbName\":\"users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_first\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_second\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CustomerModel\",\"relationName\":\"CustomerModelToUserModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUserModel\",\"relationName\":\"BusinessUserModelToUserModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"board_articles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardArticleModel\",\"relationName\":\"BoardArticleModelToUserModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"board_comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardCommentModel\",\"relationName\":\"BoardCommentModelToUserModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"CustomerModel\",\"dbName\":\"customers\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserModel\",\"relationName\":\"CustomerModelToUserModel\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authentications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AuthenticationModel\",\"relationName\":\"AuthenticationModelToCustomerModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessRateModel\",\"relationName\":\"BusinessRateModelToCustomerModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessReviewModel\",\"relationName\":\"BusinessReviewModelToCustomerModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BusinessUserModel\",\"dbName\":\"business_users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserModel\",\"relationName\":\"BusinessUserModelToUserModel\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authentications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AuthenticationModel\",\"relationName\":\"AuthenticationModelToBusinessUserModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"real_estate_agent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateAgentModel\",\"relationName\":\"BusinessUserModelToRealEstateAgentModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"home_care_company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareCompanyModel\",\"relationName\":\"BusinessUserModelToHomeCareCompanyModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessRateModel\",\"relationName\":\"BusinessRateModelToBusinessUserModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessReviewModel\",\"relationName\":\"BusinessReviewModelToBusinessUserModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"RealEstateAgentModel\",\"dbName\":\"real_estate_agents\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_licensed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"real_estate_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"real_estate_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"real_estate_phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licensed_agent_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialized_field_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUserModel\",\"relationName\":\"BusinessUserModelToRealEstateAgentModel\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialized_field\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateSpecializedSubFieldModel\",\"relationName\":\"RealEstateAgentModelToRealEstateSpecializedSubFieldModel\",\"relationFromFields\":[\"specialized_field_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"properties\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstatePropertyModel\",\"relationName\":\"RealEstateAgentModelToRealEstatePropertyModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"HomeCareCompanyModel\",\"dbName\":\"home_care_companies\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_registration_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialized_field_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUserModel\",\"relationName\":\"BusinessUserModelToHomeCareCompanyModel\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialized_field\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareSpecializedSubFieldModel\",\"relationName\":\"HomeCareCompanyModelToHomeCareSpecializedSubFieldModel\",\"relationFromFields\":[\"specialized_field_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_images\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareIntroductionImageModel\",\"relationName\":\"HomeCareCompanyModelToHomeCareIntroductionImageModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"HomeCareIntroductionImageModel\",\"dbName\":\"home_care_introduction_images\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareCompanyModel\",\"relationName\":\"HomeCareCompanyModelToHomeCareIntroductionImageModel\",\"relationFromFields\":[\"company_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"RealEstatePropertyModel\",\"dbName\":\"real_estate_properties\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"main_image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateAgentModel\",\"relationName\":\"RealEstateAgentModelToRealEstatePropertyModel\",\"relationFromFields\":[\"agent_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"HomeCareSpecializedSuperFieldModel\",\"dbName\":\"home_care_specialized_super_fields\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sub\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareSpecializedSubFieldModel\",\"relationName\":\"HomeCareSpecializedSubFieldModelToHomeCareSpecializedSuperFieldModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"HomeCareSpecializedSubFieldModel\",\"dbName\":\"home_care_specialized_sub_fields\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"super_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"super\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareSpecializedSuperFieldModel\",\"relationName\":\"HomeCareSpecializedSubFieldModelToHomeCareSpecializedSuperFieldModel\",\"relationFromFields\":[\"super_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"home_care_companies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareCompanyModel\",\"relationName\":\"HomeCareCompanyModelToHomeCareSpecializedSubFieldModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"RealEstateSpecializedSuperFieldModel\",\"dbName\":\"real_estate_specialized_super_fields\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sub\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateSpecializedSubFieldModel\",\"relationName\":\"RealEstateSpecializedSubFieldModelToRealEstateSpecializedSuperFieldModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"RealEstateSpecializedSubFieldModel\",\"dbName\":\"real_estate_specialized_sub_fields\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"super_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"super\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateSpecializedSuperFieldModel\",\"relationName\":\"RealEstateSpecializedSubFieldModelToRealEstateSpecializedSuperFieldModel\",\"relationFromFields\":[\"super_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"real_estate_agents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateAgentModel\",\"relationName\":\"RealEstateAgentModelToRealEstateSpecializedSubFieldModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BusinessRateModel\",\"dbName\":\"business_rates\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ratee_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rater_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ratee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUserModel\",\"relationName\":\"BusinessRateModelToBusinessUserModel\",\"relationFromFields\":[\"ratee_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rater\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CustomerModel\",\"relationName\":\"BusinessRateModelToCustomerModel\",\"relationFromFields\":[\"rater_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessRateCategoryModel\",\"relationName\":\"BusinessRateCategoryModelToBusinessRateModel\",\"relationFromFields\":[\"category_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BusinessRateCategoryModel\",\"dbName\":\"business_rate_categories\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessRateModel\",\"relationName\":\"BusinessRateCategoryModelToBusinessRateModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BusinessReviewModel\",\"dbName\":\"business_reviews\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewee_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"review\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUserModel\",\"relationName\":\"BusinessReviewModelToBusinessUserModel\",\"relationFromFields\":[\"reviewee_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CustomerModel\",\"relationName\":\"BusinessReviewModelToCustomerModel\",\"relationFromFields\":[\"reviewer_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BoardModel\",\"dbName\":\"boards\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"articles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardArticleModel\",\"relationName\":\"BoardArticleModelToBoardModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BoardArticleModel\",\"dbName\":\"board_articles\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"board_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserModel\",\"relationName\":\"BoardArticleModelToUserModel\",\"relationFromFields\":[\"author_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"board\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardModel\",\"relationName\":\"BoardArticleModelToBoardModel\",\"relationFromFields\":[\"board_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardArticleContentModel\",\"relationName\":\"BoardArticleContentModelToBoardArticleModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardCommentModel\",\"relationName\":\"BoardArticleModelToBoardCommentModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BoardArticleContentModel\",\"dbName\":\"board_article_contents\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"article_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"article\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardArticleModel\",\"relationName\":\"BoardArticleContentModelToBoardArticleModel\",\"relationFromFields\":[\"article_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BoardCommentModel\",\"dbName\":\"board_comments\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"article_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserModel\",\"relationName\":\"BoardCommentModelToUserModel\",\"relationFromFields\":[\"author_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"article\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardArticleModel\",\"relationName\":\"BoardArticleModelToBoardCommentModel\",\"relationFromFields\":[\"article_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardCommentContentModel\",\"relationName\":\"BoardCommentContentModelToBoardCommentModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BoardCommentContentModel\",\"dbName\":\"board_comment_contents\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardCommentModel\",\"relationName\":\"BoardCommentContentModelToBoardCommentModel\",\"relationFromFields\":[\"comment_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"AuthenticationModel\",\"plural\":\"authenticationModels\",\"findUnique\":\"findUniqueAuthenticationModel\",\"findUniqueOrThrow\":\"findUniqueAuthenticationModelOrThrow\",\"findFirst\":\"findFirstAuthenticationModel\",\"findFirstOrThrow\":\"findFirstAuthenticationModelOrThrow\",\"findMany\":\"findManyAuthenticationModel\",\"create\":\"createOneAuthenticationModel\",\"createMany\":\"createManyAuthenticationModel\",\"delete\":\"deleteOneAuthenticationModel\",\"update\":\"updateOneAuthenticationModel\",\"deleteMany\":\"deleteManyAuthenticationModel\",\"updateMany\":\"updateManyAuthenticationModel\",\"upsert\":\"upsertOneAuthenticationModel\",\"aggregate\":\"aggregateAuthenticationModel\",\"groupBy\":\"groupByAuthenticationModel\"},{\"model\":\"UserModel\",\"plural\":\"userModels\",\"findUnique\":\"findUniqueUserModel\",\"findUniqueOrThrow\":\"findUniqueUserModelOrThrow\",\"findFirst\":\"findFirstUserModel\",\"findFirstOrThrow\":\"findFirstUserModelOrThrow\",\"findMany\":\"findManyUserModel\",\"create\":\"createOneUserModel\",\"createMany\":\"createManyUserModel\",\"delete\":\"deleteOneUserModel\",\"update\":\"updateOneUserModel\",\"deleteMany\":\"deleteManyUserModel\",\"updateMany\":\"updateManyUserModel\",\"upsert\":\"upsertOneUserModel\",\"aggregate\":\"aggregateUserModel\",\"groupBy\":\"groupByUserModel\"},{\"model\":\"CustomerModel\",\"plural\":\"customerModels\",\"findUnique\":\"findUniqueCustomerModel\",\"findUniqueOrThrow\":\"findUniqueCustomerModelOrThrow\",\"findFirst\":\"findFirstCustomerModel\",\"findFirstOrThrow\":\"findFirstCustomerModelOrThrow\",\"findMany\":\"findManyCustomerModel\",\"create\":\"createOneCustomerModel\",\"createMany\":\"createManyCustomerModel\",\"delete\":\"deleteOneCustomerModel\",\"update\":\"updateOneCustomerModel\",\"deleteMany\":\"deleteManyCustomerModel\",\"updateMany\":\"updateManyCustomerModel\",\"upsert\":\"upsertOneCustomerModel\",\"aggregate\":\"aggregateCustomerModel\",\"groupBy\":\"groupByCustomerModel\"},{\"model\":\"BusinessUserModel\",\"plural\":\"businessUserModels\",\"findUnique\":\"findUniqueBusinessUserModel\",\"findUniqueOrThrow\":\"findUniqueBusinessUserModelOrThrow\",\"findFirst\":\"findFirstBusinessUserModel\",\"findFirstOrThrow\":\"findFirstBusinessUserModelOrThrow\",\"findMany\":\"findManyBusinessUserModel\",\"create\":\"createOneBusinessUserModel\",\"createMany\":\"createManyBusinessUserModel\",\"delete\":\"deleteOneBusinessUserModel\",\"update\":\"updateOneBusinessUserModel\",\"deleteMany\":\"deleteManyBusinessUserModel\",\"updateMany\":\"updateManyBusinessUserModel\",\"upsert\":\"upsertOneBusinessUserModel\",\"aggregate\":\"aggregateBusinessUserModel\",\"groupBy\":\"groupByBusinessUserModel\"},{\"model\":\"RealEstateAgentModel\",\"plural\":\"realEstateAgentModels\",\"findUnique\":\"findUniqueRealEstateAgentModel\",\"findUniqueOrThrow\":\"findUniqueRealEstateAgentModelOrThrow\",\"findFirst\":\"findFirstRealEstateAgentModel\",\"findFirstOrThrow\":\"findFirstRealEstateAgentModelOrThrow\",\"findMany\":\"findManyRealEstateAgentModel\",\"create\":\"createOneRealEstateAgentModel\",\"createMany\":\"createManyRealEstateAgentModel\",\"delete\":\"deleteOneRealEstateAgentModel\",\"update\":\"updateOneRealEstateAgentModel\",\"deleteMany\":\"deleteManyRealEstateAgentModel\",\"updateMany\":\"updateManyRealEstateAgentModel\",\"upsert\":\"upsertOneRealEstateAgentModel\",\"aggregate\":\"aggregateRealEstateAgentModel\",\"groupBy\":\"groupByRealEstateAgentModel\"},{\"model\":\"HomeCareCompanyModel\",\"plural\":\"homeCareCompanyModels\",\"findUnique\":\"findUniqueHomeCareCompanyModel\",\"findUniqueOrThrow\":\"findUniqueHomeCareCompanyModelOrThrow\",\"findFirst\":\"findFirstHomeCareCompanyModel\",\"findFirstOrThrow\":\"findFirstHomeCareCompanyModelOrThrow\",\"findMany\":\"findManyHomeCareCompanyModel\",\"create\":\"createOneHomeCareCompanyModel\",\"createMany\":\"createManyHomeCareCompanyModel\",\"delete\":\"deleteOneHomeCareCompanyModel\",\"update\":\"updateOneHomeCareCompanyModel\",\"deleteMany\":\"deleteManyHomeCareCompanyModel\",\"updateMany\":\"updateManyHomeCareCompanyModel\",\"upsert\":\"upsertOneHomeCareCompanyModel\",\"aggregate\":\"aggregateHomeCareCompanyModel\",\"groupBy\":\"groupByHomeCareCompanyModel\"},{\"model\":\"HomeCareIntroductionImageModel\",\"plural\":\"homeCareIntroductionImageModels\",\"findUnique\":\"findUniqueHomeCareIntroductionImageModel\",\"findUniqueOrThrow\":\"findUniqueHomeCareIntroductionImageModelOrThrow\",\"findFirst\":\"findFirstHomeCareIntroductionImageModel\",\"findFirstOrThrow\":\"findFirstHomeCareIntroductionImageModelOrThrow\",\"findMany\":\"findManyHomeCareIntroductionImageModel\",\"create\":\"createOneHomeCareIntroductionImageModel\",\"createMany\":\"createManyHomeCareIntroductionImageModel\",\"delete\":\"deleteOneHomeCareIntroductionImageModel\",\"update\":\"updateOneHomeCareIntroductionImageModel\",\"deleteMany\":\"deleteManyHomeCareIntroductionImageModel\",\"updateMany\":\"updateManyHomeCareIntroductionImageModel\",\"upsert\":\"upsertOneHomeCareIntroductionImageModel\",\"aggregate\":\"aggregateHomeCareIntroductionImageModel\",\"groupBy\":\"groupByHomeCareIntroductionImageModel\"},{\"model\":\"RealEstatePropertyModel\",\"plural\":\"realEstatePropertyModels\",\"findUnique\":\"findUniqueRealEstatePropertyModel\",\"findUniqueOrThrow\":\"findUniqueRealEstatePropertyModelOrThrow\",\"findFirst\":\"findFirstRealEstatePropertyModel\",\"findFirstOrThrow\":\"findFirstRealEstatePropertyModelOrThrow\",\"findMany\":\"findManyRealEstatePropertyModel\",\"create\":\"createOneRealEstatePropertyModel\",\"createMany\":\"createManyRealEstatePropertyModel\",\"delete\":\"deleteOneRealEstatePropertyModel\",\"update\":\"updateOneRealEstatePropertyModel\",\"deleteMany\":\"deleteManyRealEstatePropertyModel\",\"updateMany\":\"updateManyRealEstatePropertyModel\",\"upsert\":\"upsertOneRealEstatePropertyModel\",\"aggregate\":\"aggregateRealEstatePropertyModel\",\"groupBy\":\"groupByRealEstatePropertyModel\"},{\"model\":\"HomeCareSpecializedSuperFieldModel\",\"plural\":\"homeCareSpecializedSuperFieldModels\",\"findUnique\":\"findUniqueHomeCareSpecializedSuperFieldModel\",\"findUniqueOrThrow\":\"findUniqueHomeCareSpecializedSuperFieldModelOrThrow\",\"findFirst\":\"findFirstHomeCareSpecializedSuperFieldModel\",\"findFirstOrThrow\":\"findFirstHomeCareSpecializedSuperFieldModelOrThrow\",\"findMany\":\"findManyHomeCareSpecializedSuperFieldModel\",\"create\":\"createOneHomeCareSpecializedSuperFieldModel\",\"createMany\":\"createManyHomeCareSpecializedSuperFieldModel\",\"delete\":\"deleteOneHomeCareSpecializedSuperFieldModel\",\"update\":\"updateOneHomeCareSpecializedSuperFieldModel\",\"deleteMany\":\"deleteManyHomeCareSpecializedSuperFieldModel\",\"updateMany\":\"updateManyHomeCareSpecializedSuperFieldModel\",\"upsert\":\"upsertOneHomeCareSpecializedSuperFieldModel\",\"aggregate\":\"aggregateHomeCareSpecializedSuperFieldModel\",\"groupBy\":\"groupByHomeCareSpecializedSuperFieldModel\"},{\"model\":\"HomeCareSpecializedSubFieldModel\",\"plural\":\"homeCareSpecializedSubFieldModels\",\"findUnique\":\"findUniqueHomeCareSpecializedSubFieldModel\",\"findUniqueOrThrow\":\"findUniqueHomeCareSpecializedSubFieldModelOrThrow\",\"findFirst\":\"findFirstHomeCareSpecializedSubFieldModel\",\"findFirstOrThrow\":\"findFirstHomeCareSpecializedSubFieldModelOrThrow\",\"findMany\":\"findManyHomeCareSpecializedSubFieldModel\",\"create\":\"createOneHomeCareSpecializedSubFieldModel\",\"createMany\":\"createManyHomeCareSpecializedSubFieldModel\",\"delete\":\"deleteOneHomeCareSpecializedSubFieldModel\",\"update\":\"updateOneHomeCareSpecializedSubFieldModel\",\"deleteMany\":\"deleteManyHomeCareSpecializedSubFieldModel\",\"updateMany\":\"updateManyHomeCareSpecializedSubFieldModel\",\"upsert\":\"upsertOneHomeCareSpecializedSubFieldModel\",\"aggregate\":\"aggregateHomeCareSpecializedSubFieldModel\",\"groupBy\":\"groupByHomeCareSpecializedSubFieldModel\"},{\"model\":\"RealEstateSpecializedSuperFieldModel\",\"plural\":\"realEstateSpecializedSuperFieldModels\",\"findUnique\":\"findUniqueRealEstateSpecializedSuperFieldModel\",\"findUniqueOrThrow\":\"findUniqueRealEstateSpecializedSuperFieldModelOrThrow\",\"findFirst\":\"findFirstRealEstateSpecializedSuperFieldModel\",\"findFirstOrThrow\":\"findFirstRealEstateSpecializedSuperFieldModelOrThrow\",\"findMany\":\"findManyRealEstateSpecializedSuperFieldModel\",\"create\":\"createOneRealEstateSpecializedSuperFieldModel\",\"createMany\":\"createManyRealEstateSpecializedSuperFieldModel\",\"delete\":\"deleteOneRealEstateSpecializedSuperFieldModel\",\"update\":\"updateOneRealEstateSpecializedSuperFieldModel\",\"deleteMany\":\"deleteManyRealEstateSpecializedSuperFieldModel\",\"updateMany\":\"updateManyRealEstateSpecializedSuperFieldModel\",\"upsert\":\"upsertOneRealEstateSpecializedSuperFieldModel\",\"aggregate\":\"aggregateRealEstateSpecializedSuperFieldModel\",\"groupBy\":\"groupByRealEstateSpecializedSuperFieldModel\"},{\"model\":\"RealEstateSpecializedSubFieldModel\",\"plural\":\"realEstateSpecializedSubFieldModels\",\"findUnique\":\"findUniqueRealEstateSpecializedSubFieldModel\",\"findUniqueOrThrow\":\"findUniqueRealEstateSpecializedSubFieldModelOrThrow\",\"findFirst\":\"findFirstRealEstateSpecializedSubFieldModel\",\"findFirstOrThrow\":\"findFirstRealEstateSpecializedSubFieldModelOrThrow\",\"findMany\":\"findManyRealEstateSpecializedSubFieldModel\",\"create\":\"createOneRealEstateSpecializedSubFieldModel\",\"createMany\":\"createManyRealEstateSpecializedSubFieldModel\",\"delete\":\"deleteOneRealEstateSpecializedSubFieldModel\",\"update\":\"updateOneRealEstateSpecializedSubFieldModel\",\"deleteMany\":\"deleteManyRealEstateSpecializedSubFieldModel\",\"updateMany\":\"updateManyRealEstateSpecializedSubFieldModel\",\"upsert\":\"upsertOneRealEstateSpecializedSubFieldModel\",\"aggregate\":\"aggregateRealEstateSpecializedSubFieldModel\",\"groupBy\":\"groupByRealEstateSpecializedSubFieldModel\"},{\"model\":\"BusinessRateModel\",\"plural\":\"businessRateModels\",\"findUnique\":\"findUniqueBusinessRateModel\",\"findUniqueOrThrow\":\"findUniqueBusinessRateModelOrThrow\",\"findFirst\":\"findFirstBusinessRateModel\",\"findFirstOrThrow\":\"findFirstBusinessRateModelOrThrow\",\"findMany\":\"findManyBusinessRateModel\",\"create\":\"createOneBusinessRateModel\",\"createMany\":\"createManyBusinessRateModel\",\"delete\":\"deleteOneBusinessRateModel\",\"update\":\"updateOneBusinessRateModel\",\"deleteMany\":\"deleteManyBusinessRateModel\",\"updateMany\":\"updateManyBusinessRateModel\",\"upsert\":\"upsertOneBusinessRateModel\",\"aggregate\":\"aggregateBusinessRateModel\",\"groupBy\":\"groupByBusinessRateModel\"},{\"model\":\"BusinessRateCategoryModel\",\"plural\":\"businessRateCategoryModels\",\"findUnique\":\"findUniqueBusinessRateCategoryModel\",\"findUniqueOrThrow\":\"findUniqueBusinessRateCategoryModelOrThrow\",\"findFirst\":\"findFirstBusinessRateCategoryModel\",\"findFirstOrThrow\":\"findFirstBusinessRateCategoryModelOrThrow\",\"findMany\":\"findManyBusinessRateCategoryModel\",\"create\":\"createOneBusinessRateCategoryModel\",\"createMany\":\"createManyBusinessRateCategoryModel\",\"delete\":\"deleteOneBusinessRateCategoryModel\",\"update\":\"updateOneBusinessRateCategoryModel\",\"deleteMany\":\"deleteManyBusinessRateCategoryModel\",\"updateMany\":\"updateManyBusinessRateCategoryModel\",\"upsert\":\"upsertOneBusinessRateCategoryModel\",\"aggregate\":\"aggregateBusinessRateCategoryModel\",\"groupBy\":\"groupByBusinessRateCategoryModel\"},{\"model\":\"BusinessReviewModel\",\"plural\":\"businessReviewModels\",\"findUnique\":\"findUniqueBusinessReviewModel\",\"findUniqueOrThrow\":\"findUniqueBusinessReviewModelOrThrow\",\"findFirst\":\"findFirstBusinessReviewModel\",\"findFirstOrThrow\":\"findFirstBusinessReviewModelOrThrow\",\"findMany\":\"findManyBusinessReviewModel\",\"create\":\"createOneBusinessReviewModel\",\"createMany\":\"createManyBusinessReviewModel\",\"delete\":\"deleteOneBusinessReviewModel\",\"update\":\"updateOneBusinessReviewModel\",\"deleteMany\":\"deleteManyBusinessReviewModel\",\"updateMany\":\"updateManyBusinessReviewModel\",\"upsert\":\"upsertOneBusinessReviewModel\",\"aggregate\":\"aggregateBusinessReviewModel\",\"groupBy\":\"groupByBusinessReviewModel\"},{\"model\":\"BoardModel\",\"plural\":\"boardModels\",\"findUnique\":\"findUniqueBoardModel\",\"findUniqueOrThrow\":\"findUniqueBoardModelOrThrow\",\"findFirst\":\"findFirstBoardModel\",\"findFirstOrThrow\":\"findFirstBoardModelOrThrow\",\"findMany\":\"findManyBoardModel\",\"create\":\"createOneBoardModel\",\"createMany\":\"createManyBoardModel\",\"delete\":\"deleteOneBoardModel\",\"update\":\"updateOneBoardModel\",\"deleteMany\":\"deleteManyBoardModel\",\"updateMany\":\"updateManyBoardModel\",\"upsert\":\"upsertOneBoardModel\",\"aggregate\":\"aggregateBoardModel\",\"groupBy\":\"groupByBoardModel\"},{\"model\":\"BoardArticleModel\",\"plural\":\"boardArticleModels\",\"findUnique\":\"findUniqueBoardArticleModel\",\"findUniqueOrThrow\":\"findUniqueBoardArticleModelOrThrow\",\"findFirst\":\"findFirstBoardArticleModel\",\"findFirstOrThrow\":\"findFirstBoardArticleModelOrThrow\",\"findMany\":\"findManyBoardArticleModel\",\"create\":\"createOneBoardArticleModel\",\"createMany\":\"createManyBoardArticleModel\",\"delete\":\"deleteOneBoardArticleModel\",\"update\":\"updateOneBoardArticleModel\",\"deleteMany\":\"deleteManyBoardArticleModel\",\"updateMany\":\"updateManyBoardArticleModel\",\"upsert\":\"upsertOneBoardArticleModel\",\"aggregate\":\"aggregateBoardArticleModel\",\"groupBy\":\"groupByBoardArticleModel\"},{\"model\":\"BoardArticleContentModel\",\"plural\":\"boardArticleContentModels\",\"findUnique\":\"findUniqueBoardArticleContentModel\",\"findUniqueOrThrow\":\"findUniqueBoardArticleContentModelOrThrow\",\"findFirst\":\"findFirstBoardArticleContentModel\",\"findFirstOrThrow\":\"findFirstBoardArticleContentModelOrThrow\",\"findMany\":\"findManyBoardArticleContentModel\",\"create\":\"createOneBoardArticleContentModel\",\"createMany\":\"createManyBoardArticleContentModel\",\"delete\":\"deleteOneBoardArticleContentModel\",\"update\":\"updateOneBoardArticleContentModel\",\"deleteMany\":\"deleteManyBoardArticleContentModel\",\"updateMany\":\"updateManyBoardArticleContentModel\",\"upsert\":\"upsertOneBoardArticleContentModel\",\"aggregate\":\"aggregateBoardArticleContentModel\",\"groupBy\":\"groupByBoardArticleContentModel\"},{\"model\":\"BoardCommentModel\",\"plural\":\"boardCommentModels\",\"findUnique\":\"findUniqueBoardCommentModel\",\"findUniqueOrThrow\":\"findUniqueBoardCommentModelOrThrow\",\"findFirst\":\"findFirstBoardCommentModel\",\"findFirstOrThrow\":\"findFirstBoardCommentModelOrThrow\",\"findMany\":\"findManyBoardCommentModel\",\"create\":\"createOneBoardCommentModel\",\"createMany\":\"createManyBoardCommentModel\",\"delete\":\"deleteOneBoardCommentModel\",\"update\":\"updateOneBoardCommentModel\",\"deleteMany\":\"deleteManyBoardCommentModel\",\"updateMany\":\"updateManyBoardCommentModel\",\"upsert\":\"upsertOneBoardCommentModel\",\"aggregate\":\"aggregateBoardCommentModel\",\"groupBy\":\"groupByBoardCommentModel\"},{\"model\":\"BoardCommentContentModel\",\"plural\":\"boardCommentContentModels\",\"findUnique\":\"findUniqueBoardCommentContentModel\",\"findUniqueOrThrow\":\"findUniqueBoardCommentContentModelOrThrow\",\"findFirst\":\"findFirstBoardCommentContentModel\",\"findFirstOrThrow\":\"findFirstBoardCommentContentModelOrThrow\",\"findMany\":\"findManyBoardCommentContentModel\",\"create\":\"createOneBoardCommentContentModel\",\"createMany\":\"createManyBoardCommentContentModel\",\"delete\":\"deleteOneBoardCommentContentModel\",\"update\":\"updateOneBoardCommentContentModel\",\"deleteMany\":\"deleteManyBoardCommentContentModel\",\"updateMany\":\"updateManyBoardCommentContentModel\",\"upsert\":\"upsertOneBoardCommentContentModel\",\"aggregate\":\"aggregateBoardCommentContentModel\",\"groupBy\":\"groupByBoardCommentContentModel\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
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

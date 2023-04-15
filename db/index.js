
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

exports.Prisma.AuthenticationScalarFieldEnum = makeEnum({
  id: 'id',
  oauth_sub: 'oauth_sub',
  oauth_type: 'oauth_type',
  business_user_id: 'business_user_id',
  customer_id: 'customer_id'
});

exports.Prisma.BoardArticleContentScalarFieldEnum = makeEnum({
  id: 'id',
  text: 'text',
  created_at: 'created_at',
  article_id: 'article_id'
});

exports.Prisma.BoardArticleScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  author_id: 'author_id',
  board_id: 'board_id'
});

exports.Prisma.BoardCommentContentScalarFieldEnum = makeEnum({
  id: 'id',
  text: 'text',
  created_at: 'created_at',
  comment_id: 'comment_id'
});

exports.Prisma.BoardCommentScalarFieldEnum = makeEnum({
  id: 'id',
  author_id: 'author_id',
  article_id: 'article_id'
});

exports.Prisma.BoardScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.BusinessRateCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.BusinessRateScalarFieldEnum = makeEnum({
  id: 'id',
  category_id: 'category_id',
  ratee_id: 'ratee_id',
  rater_id: 'rater_id',
  rate: 'rate'
});

exports.Prisma.BusinessReviewScalarFieldEnum = makeEnum({
  id: 'id',
  reviewee_id: 'reviewee_id',
  reviewer_id: 'reviewer_id',
  review: 'review'
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
  business_registration_num: 'business_registration_num',
  specialized_field_id: 'specialized_field_id'
});

exports.Prisma.HomeCareIntroductionImageScalarFieldEnum = makeEnum({
  id: 'id',
  image_url: 'image_url',
  company_id: 'company_id'
});

exports.Prisma.HomeCareSpecializedSubFieldScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  super_id: 'super_id'
});

exports.Prisma.HomeCareSpecializedSuperFieldScalarFieldEnum = makeEnum({
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
  real_estate_phone: 'real_estate_phone',
  licensed_agent_name: 'licensed_agent_name',
  specialized_field_id: 'specialized_field_id'
});

exports.Prisma.RealEstatePropertyScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  main_image_url: 'main_image_url',
  agent_id: 'agent_id'
});

exports.Prisma.RealEstateSpecializedSubFieldScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  super_id: 'super_id'
});

exports.Prisma.RealEstateSpecializedSuperFieldScalarFieldEnum = makeEnum({
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

exports.Prisma.UserScalarFieldEnum = makeEnum({
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
});

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"Authentication\",\"dbName\":\"authentications\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_sub\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUser\",\"relationName\":\"AuthenticationToBusinessUser\",\"relationFromFields\":[\"business_user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"AuthenticationToCustomer\",\"relationFromFields\":[\"customer_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"oauth_sub\",\"oauth_type\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"oauth_sub\",\"oauth_type\"]}],\"isGenerated\":false},{\"name\":\"User\",\"dbName\":\"users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_first\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_second\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"CustomerToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUser\",\"relationName\":\"BusinessUserToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"board_articles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardArticle\",\"relationName\":\"BoardArticleToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"board_comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardComment\",\"relationName\":\"BoardCommentToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Customer\",\"dbName\":\"customers\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CustomerToUser\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authentications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Authentication\",\"relationName\":\"AuthenticationToCustomer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessRate\",\"relationName\":\"BusinessRateToCustomer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessReview\",\"relationName\":\"BusinessReviewToCustomer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BusinessUser\",\"dbName\":\"business_users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BusinessUserToUser\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authentications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Authentication\",\"relationName\":\"AuthenticationToBusinessUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"real_estate_agent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateAgent\",\"relationName\":\"BusinessUserToRealEstateAgent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"home_care_company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareCompany\",\"relationName\":\"BusinessUserToHomeCareCompany\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessRate\",\"relationName\":\"BusinessRateToBusinessUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessReview\",\"relationName\":\"BusinessReviewToBusinessUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"RealEstateAgent\",\"dbName\":\"real_estate_agents\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_licensed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"real_estate_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"real_estate_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"real_estate_phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licensed_agent_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialized_field_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUser\",\"relationName\":\"BusinessUserToRealEstateAgent\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialized_field\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateSpecializedSubField\",\"relationName\":\"RealEstateAgentToRealEstateSpecializedSubField\",\"relationFromFields\":[\"specialized_field_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"properties\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateProperty\",\"relationName\":\"RealEstateAgentToRealEstateProperty\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"HomeCareCompany\",\"dbName\":\"home_care_companies\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_registration_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialized_field_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUser\",\"relationName\":\"BusinessUserToHomeCareCompany\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialized_field\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareSpecializedSubField\",\"relationName\":\"HomeCareCompanyToHomeCareSpecializedSubField\",\"relationFromFields\":[\"specialized_field_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_images\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareIntroductionImage\",\"relationName\":\"HomeCareCompanyToHomeCareIntroductionImage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"HomeCareIntroductionImage\",\"dbName\":\"home_care_introduction_images\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareCompany\",\"relationName\":\"HomeCareCompanyToHomeCareIntroductionImage\",\"relationFromFields\":[\"company_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"RealEstateProperty\",\"dbName\":\"real_estate_properties\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"main_image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateAgent\",\"relationName\":\"RealEstateAgentToRealEstateProperty\",\"relationFromFields\":[\"agent_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"HomeCareSpecializedSuperField\",\"dbName\":\"home_care_specialized_super_fields\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sub\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareSpecializedSubField\",\"relationName\":\"HomeCareSpecializedSubFieldToHomeCareSpecializedSuperField\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"HomeCareSpecializedSubField\",\"dbName\":\"home_care_specialized_sub_fields\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"super_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"super\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareSpecializedSuperField\",\"relationName\":\"HomeCareSpecializedSubFieldToHomeCareSpecializedSuperField\",\"relationFromFields\":[\"super_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"home_care_companies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HomeCareCompany\",\"relationName\":\"HomeCareCompanyToHomeCareSpecializedSubField\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"RealEstateSpecializedSuperField\",\"dbName\":\"real_estate_specialized_super_fields\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sub\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateSpecializedSubField\",\"relationName\":\"RealEstateSpecializedSubFieldToRealEstateSpecializedSuperField\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"RealEstateSpecializedSubField\",\"dbName\":\"real_estate_specialized_sub_fields\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"super_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"super\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateSpecializedSuperField\",\"relationName\":\"RealEstateSpecializedSubFieldToRealEstateSpecializedSuperField\",\"relationFromFields\":[\"super_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"real_estate_agents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RealEstateAgent\",\"relationName\":\"RealEstateAgentToRealEstateSpecializedSubField\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BusinessRate\",\"dbName\":\"business_rates\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ratee_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rater_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ratee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUser\",\"relationName\":\"BusinessRateToBusinessUser\",\"relationFromFields\":[\"ratee_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rater\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"BusinessRateToCustomer\",\"relationFromFields\":[\"rater_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessRateCategory\",\"relationName\":\"BusinessRateToBusinessRateCategory\",\"relationFromFields\":[\"category_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BusinessRateCategory\",\"dbName\":\"business_rate_categories\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessRate\",\"relationName\":\"BusinessRateToBusinessRateCategory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BusinessReview\",\"dbName\":\"business_reviews\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewee_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"review\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUser\",\"relationName\":\"BusinessReviewToBusinessUser\",\"relationFromFields\":[\"reviewee_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Customer\",\"relationName\":\"BusinessReviewToCustomer\",\"relationFromFields\":[\"reviewer_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Board\",\"dbName\":\"boards\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"articles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardArticle\",\"relationName\":\"BoardToBoardArticle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BoardArticle\",\"dbName\":\"board_articles\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"board_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BoardArticleToUser\",\"relationFromFields\":[\"author_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"board\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Board\",\"relationName\":\"BoardToBoardArticle\",\"relationFromFields\":[\"board_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardArticleContent\",\"relationName\":\"BoardArticleToBoardArticleContent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardComment\",\"relationName\":\"BoardArticleToBoardComment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BoardArticleContent\",\"dbName\":\"board_article_contents\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"article_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"article\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardArticle\",\"relationName\":\"BoardArticleToBoardArticleContent\",\"relationFromFields\":[\"article_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BoardComment\",\"dbName\":\"board_comments\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"article_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BoardCommentToUser\",\"relationFromFields\":[\"author_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"article\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardArticle\",\"relationName\":\"BoardArticleToBoardComment\",\"relationFromFields\":[\"article_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardCommentContent\",\"relationName\":\"BoardCommentToBoardCommentContent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BoardCommentContent\",\"dbName\":\"board_comment_contents\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BoardComment\",\"relationName\":\"BoardCommentToBoardCommentContent\",\"relationFromFields\":[\"comment_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"Authentication\",\"plural\":\"authentications\",\"findUnique\":\"findUniqueAuthentication\",\"findUniqueOrThrow\":\"findUniqueAuthenticationOrThrow\",\"findFirst\":\"findFirstAuthentication\",\"findFirstOrThrow\":\"findFirstAuthenticationOrThrow\",\"findMany\":\"findManyAuthentication\",\"create\":\"createOneAuthentication\",\"createMany\":\"createManyAuthentication\",\"delete\":\"deleteOneAuthentication\",\"update\":\"updateOneAuthentication\",\"deleteMany\":\"deleteManyAuthentication\",\"updateMany\":\"updateManyAuthentication\",\"upsert\":\"upsertOneAuthentication\",\"aggregate\":\"aggregateAuthentication\",\"groupBy\":\"groupByAuthentication\"},{\"model\":\"User\",\"plural\":\"users\",\"findUnique\":\"findUniqueUser\",\"findUniqueOrThrow\":\"findUniqueUserOrThrow\",\"findFirst\":\"findFirstUser\",\"findFirstOrThrow\":\"findFirstUserOrThrow\",\"findMany\":\"findManyUser\",\"create\":\"createOneUser\",\"createMany\":\"createManyUser\",\"delete\":\"deleteOneUser\",\"update\":\"updateOneUser\",\"deleteMany\":\"deleteManyUser\",\"updateMany\":\"updateManyUser\",\"upsert\":\"upsertOneUser\",\"aggregate\":\"aggregateUser\",\"groupBy\":\"groupByUser\"},{\"model\":\"Customer\",\"plural\":\"customers\",\"findUnique\":\"findUniqueCustomer\",\"findUniqueOrThrow\":\"findUniqueCustomerOrThrow\",\"findFirst\":\"findFirstCustomer\",\"findFirstOrThrow\":\"findFirstCustomerOrThrow\",\"findMany\":\"findManyCustomer\",\"create\":\"createOneCustomer\",\"createMany\":\"createManyCustomer\",\"delete\":\"deleteOneCustomer\",\"update\":\"updateOneCustomer\",\"deleteMany\":\"deleteManyCustomer\",\"updateMany\":\"updateManyCustomer\",\"upsert\":\"upsertOneCustomer\",\"aggregate\":\"aggregateCustomer\",\"groupBy\":\"groupByCustomer\"},{\"model\":\"BusinessUser\",\"plural\":\"businessUsers\",\"findUnique\":\"findUniqueBusinessUser\",\"findUniqueOrThrow\":\"findUniqueBusinessUserOrThrow\",\"findFirst\":\"findFirstBusinessUser\",\"findFirstOrThrow\":\"findFirstBusinessUserOrThrow\",\"findMany\":\"findManyBusinessUser\",\"create\":\"createOneBusinessUser\",\"createMany\":\"createManyBusinessUser\",\"delete\":\"deleteOneBusinessUser\",\"update\":\"updateOneBusinessUser\",\"deleteMany\":\"deleteManyBusinessUser\",\"updateMany\":\"updateManyBusinessUser\",\"upsert\":\"upsertOneBusinessUser\",\"aggregate\":\"aggregateBusinessUser\",\"groupBy\":\"groupByBusinessUser\"},{\"model\":\"RealEstateAgent\",\"plural\":\"realEstateAgents\",\"findUnique\":\"findUniqueRealEstateAgent\",\"findUniqueOrThrow\":\"findUniqueRealEstateAgentOrThrow\",\"findFirst\":\"findFirstRealEstateAgent\",\"findFirstOrThrow\":\"findFirstRealEstateAgentOrThrow\",\"findMany\":\"findManyRealEstateAgent\",\"create\":\"createOneRealEstateAgent\",\"createMany\":\"createManyRealEstateAgent\",\"delete\":\"deleteOneRealEstateAgent\",\"update\":\"updateOneRealEstateAgent\",\"deleteMany\":\"deleteManyRealEstateAgent\",\"updateMany\":\"updateManyRealEstateAgent\",\"upsert\":\"upsertOneRealEstateAgent\",\"aggregate\":\"aggregateRealEstateAgent\",\"groupBy\":\"groupByRealEstateAgent\"},{\"model\":\"HomeCareCompany\",\"plural\":\"homeCareCompanies\",\"findUnique\":\"findUniqueHomeCareCompany\",\"findUniqueOrThrow\":\"findUniqueHomeCareCompanyOrThrow\",\"findFirst\":\"findFirstHomeCareCompany\",\"findFirstOrThrow\":\"findFirstHomeCareCompanyOrThrow\",\"findMany\":\"findManyHomeCareCompany\",\"create\":\"createOneHomeCareCompany\",\"createMany\":\"createManyHomeCareCompany\",\"delete\":\"deleteOneHomeCareCompany\",\"update\":\"updateOneHomeCareCompany\",\"deleteMany\":\"deleteManyHomeCareCompany\",\"updateMany\":\"updateManyHomeCareCompany\",\"upsert\":\"upsertOneHomeCareCompany\",\"aggregate\":\"aggregateHomeCareCompany\",\"groupBy\":\"groupByHomeCareCompany\"},{\"model\":\"HomeCareIntroductionImage\",\"plural\":\"homeCareIntroductionImages\",\"findUnique\":\"findUniqueHomeCareIntroductionImage\",\"findUniqueOrThrow\":\"findUniqueHomeCareIntroductionImageOrThrow\",\"findFirst\":\"findFirstHomeCareIntroductionImage\",\"findFirstOrThrow\":\"findFirstHomeCareIntroductionImageOrThrow\",\"findMany\":\"findManyHomeCareIntroductionImage\",\"create\":\"createOneHomeCareIntroductionImage\",\"createMany\":\"createManyHomeCareIntroductionImage\",\"delete\":\"deleteOneHomeCareIntroductionImage\",\"update\":\"updateOneHomeCareIntroductionImage\",\"deleteMany\":\"deleteManyHomeCareIntroductionImage\",\"updateMany\":\"updateManyHomeCareIntroductionImage\",\"upsert\":\"upsertOneHomeCareIntroductionImage\",\"aggregate\":\"aggregateHomeCareIntroductionImage\",\"groupBy\":\"groupByHomeCareIntroductionImage\"},{\"model\":\"RealEstateProperty\",\"plural\":\"realEstateProperties\",\"findUnique\":\"findUniqueRealEstateProperty\",\"findUniqueOrThrow\":\"findUniqueRealEstatePropertyOrThrow\",\"findFirst\":\"findFirstRealEstateProperty\",\"findFirstOrThrow\":\"findFirstRealEstatePropertyOrThrow\",\"findMany\":\"findManyRealEstateProperty\",\"create\":\"createOneRealEstateProperty\",\"createMany\":\"createManyRealEstateProperty\",\"delete\":\"deleteOneRealEstateProperty\",\"update\":\"updateOneRealEstateProperty\",\"deleteMany\":\"deleteManyRealEstateProperty\",\"updateMany\":\"updateManyRealEstateProperty\",\"upsert\":\"upsertOneRealEstateProperty\",\"aggregate\":\"aggregateRealEstateProperty\",\"groupBy\":\"groupByRealEstateProperty\"},{\"model\":\"HomeCareSpecializedSuperField\",\"plural\":\"homeCareSpecializedSuperFields\",\"findUnique\":\"findUniqueHomeCareSpecializedSuperField\",\"findUniqueOrThrow\":\"findUniqueHomeCareSpecializedSuperFieldOrThrow\",\"findFirst\":\"findFirstHomeCareSpecializedSuperField\",\"findFirstOrThrow\":\"findFirstHomeCareSpecializedSuperFieldOrThrow\",\"findMany\":\"findManyHomeCareSpecializedSuperField\",\"create\":\"createOneHomeCareSpecializedSuperField\",\"createMany\":\"createManyHomeCareSpecializedSuperField\",\"delete\":\"deleteOneHomeCareSpecializedSuperField\",\"update\":\"updateOneHomeCareSpecializedSuperField\",\"deleteMany\":\"deleteManyHomeCareSpecializedSuperField\",\"updateMany\":\"updateManyHomeCareSpecializedSuperField\",\"upsert\":\"upsertOneHomeCareSpecializedSuperField\",\"aggregate\":\"aggregateHomeCareSpecializedSuperField\",\"groupBy\":\"groupByHomeCareSpecializedSuperField\"},{\"model\":\"HomeCareSpecializedSubField\",\"plural\":\"homeCareSpecializedSubFields\",\"findUnique\":\"findUniqueHomeCareSpecializedSubField\",\"findUniqueOrThrow\":\"findUniqueHomeCareSpecializedSubFieldOrThrow\",\"findFirst\":\"findFirstHomeCareSpecializedSubField\",\"findFirstOrThrow\":\"findFirstHomeCareSpecializedSubFieldOrThrow\",\"findMany\":\"findManyHomeCareSpecializedSubField\",\"create\":\"createOneHomeCareSpecializedSubField\",\"createMany\":\"createManyHomeCareSpecializedSubField\",\"delete\":\"deleteOneHomeCareSpecializedSubField\",\"update\":\"updateOneHomeCareSpecializedSubField\",\"deleteMany\":\"deleteManyHomeCareSpecializedSubField\",\"updateMany\":\"updateManyHomeCareSpecializedSubField\",\"upsert\":\"upsertOneHomeCareSpecializedSubField\",\"aggregate\":\"aggregateHomeCareSpecializedSubField\",\"groupBy\":\"groupByHomeCareSpecializedSubField\"},{\"model\":\"RealEstateSpecializedSuperField\",\"plural\":\"realEstateSpecializedSuperFields\",\"findUnique\":\"findUniqueRealEstateSpecializedSuperField\",\"findUniqueOrThrow\":\"findUniqueRealEstateSpecializedSuperFieldOrThrow\",\"findFirst\":\"findFirstRealEstateSpecializedSuperField\",\"findFirstOrThrow\":\"findFirstRealEstateSpecializedSuperFieldOrThrow\",\"findMany\":\"findManyRealEstateSpecializedSuperField\",\"create\":\"createOneRealEstateSpecializedSuperField\",\"createMany\":\"createManyRealEstateSpecializedSuperField\",\"delete\":\"deleteOneRealEstateSpecializedSuperField\",\"update\":\"updateOneRealEstateSpecializedSuperField\",\"deleteMany\":\"deleteManyRealEstateSpecializedSuperField\",\"updateMany\":\"updateManyRealEstateSpecializedSuperField\",\"upsert\":\"upsertOneRealEstateSpecializedSuperField\",\"aggregate\":\"aggregateRealEstateSpecializedSuperField\",\"groupBy\":\"groupByRealEstateSpecializedSuperField\"},{\"model\":\"RealEstateSpecializedSubField\",\"plural\":\"realEstateSpecializedSubFields\",\"findUnique\":\"findUniqueRealEstateSpecializedSubField\",\"findUniqueOrThrow\":\"findUniqueRealEstateSpecializedSubFieldOrThrow\",\"findFirst\":\"findFirstRealEstateSpecializedSubField\",\"findFirstOrThrow\":\"findFirstRealEstateSpecializedSubFieldOrThrow\",\"findMany\":\"findManyRealEstateSpecializedSubField\",\"create\":\"createOneRealEstateSpecializedSubField\",\"createMany\":\"createManyRealEstateSpecializedSubField\",\"delete\":\"deleteOneRealEstateSpecializedSubField\",\"update\":\"updateOneRealEstateSpecializedSubField\",\"deleteMany\":\"deleteManyRealEstateSpecializedSubField\",\"updateMany\":\"updateManyRealEstateSpecializedSubField\",\"upsert\":\"upsertOneRealEstateSpecializedSubField\",\"aggregate\":\"aggregateRealEstateSpecializedSubField\",\"groupBy\":\"groupByRealEstateSpecializedSubField\"},{\"model\":\"BusinessRate\",\"plural\":\"businessRates\",\"findUnique\":\"findUniqueBusinessRate\",\"findUniqueOrThrow\":\"findUniqueBusinessRateOrThrow\",\"findFirst\":\"findFirstBusinessRate\",\"findFirstOrThrow\":\"findFirstBusinessRateOrThrow\",\"findMany\":\"findManyBusinessRate\",\"create\":\"createOneBusinessRate\",\"createMany\":\"createManyBusinessRate\",\"delete\":\"deleteOneBusinessRate\",\"update\":\"updateOneBusinessRate\",\"deleteMany\":\"deleteManyBusinessRate\",\"updateMany\":\"updateManyBusinessRate\",\"upsert\":\"upsertOneBusinessRate\",\"aggregate\":\"aggregateBusinessRate\",\"groupBy\":\"groupByBusinessRate\"},{\"model\":\"BusinessRateCategory\",\"plural\":\"businessRateCategories\",\"findUnique\":\"findUniqueBusinessRateCategory\",\"findUniqueOrThrow\":\"findUniqueBusinessRateCategoryOrThrow\",\"findFirst\":\"findFirstBusinessRateCategory\",\"findFirstOrThrow\":\"findFirstBusinessRateCategoryOrThrow\",\"findMany\":\"findManyBusinessRateCategory\",\"create\":\"createOneBusinessRateCategory\",\"createMany\":\"createManyBusinessRateCategory\",\"delete\":\"deleteOneBusinessRateCategory\",\"update\":\"updateOneBusinessRateCategory\",\"deleteMany\":\"deleteManyBusinessRateCategory\",\"updateMany\":\"updateManyBusinessRateCategory\",\"upsert\":\"upsertOneBusinessRateCategory\",\"aggregate\":\"aggregateBusinessRateCategory\",\"groupBy\":\"groupByBusinessRateCategory\"},{\"model\":\"BusinessReview\",\"plural\":\"businessReviews\",\"findUnique\":\"findUniqueBusinessReview\",\"findUniqueOrThrow\":\"findUniqueBusinessReviewOrThrow\",\"findFirst\":\"findFirstBusinessReview\",\"findFirstOrThrow\":\"findFirstBusinessReviewOrThrow\",\"findMany\":\"findManyBusinessReview\",\"create\":\"createOneBusinessReview\",\"createMany\":\"createManyBusinessReview\",\"delete\":\"deleteOneBusinessReview\",\"update\":\"updateOneBusinessReview\",\"deleteMany\":\"deleteManyBusinessReview\",\"updateMany\":\"updateManyBusinessReview\",\"upsert\":\"upsertOneBusinessReview\",\"aggregate\":\"aggregateBusinessReview\",\"groupBy\":\"groupByBusinessReview\"},{\"model\":\"Board\",\"plural\":\"boards\",\"findUnique\":\"findUniqueBoard\",\"findUniqueOrThrow\":\"findUniqueBoardOrThrow\",\"findFirst\":\"findFirstBoard\",\"findFirstOrThrow\":\"findFirstBoardOrThrow\",\"findMany\":\"findManyBoard\",\"create\":\"createOneBoard\",\"createMany\":\"createManyBoard\",\"delete\":\"deleteOneBoard\",\"update\":\"updateOneBoard\",\"deleteMany\":\"deleteManyBoard\",\"updateMany\":\"updateManyBoard\",\"upsert\":\"upsertOneBoard\",\"aggregate\":\"aggregateBoard\",\"groupBy\":\"groupByBoard\"},{\"model\":\"BoardArticle\",\"plural\":\"boardArticles\",\"findUnique\":\"findUniqueBoardArticle\",\"findUniqueOrThrow\":\"findUniqueBoardArticleOrThrow\",\"findFirst\":\"findFirstBoardArticle\",\"findFirstOrThrow\":\"findFirstBoardArticleOrThrow\",\"findMany\":\"findManyBoardArticle\",\"create\":\"createOneBoardArticle\",\"createMany\":\"createManyBoardArticle\",\"delete\":\"deleteOneBoardArticle\",\"update\":\"updateOneBoardArticle\",\"deleteMany\":\"deleteManyBoardArticle\",\"updateMany\":\"updateManyBoardArticle\",\"upsert\":\"upsertOneBoardArticle\",\"aggregate\":\"aggregateBoardArticle\",\"groupBy\":\"groupByBoardArticle\"},{\"model\":\"BoardArticleContent\",\"plural\":\"boardArticleContents\",\"findUnique\":\"findUniqueBoardArticleContent\",\"findUniqueOrThrow\":\"findUniqueBoardArticleContentOrThrow\",\"findFirst\":\"findFirstBoardArticleContent\",\"findFirstOrThrow\":\"findFirstBoardArticleContentOrThrow\",\"findMany\":\"findManyBoardArticleContent\",\"create\":\"createOneBoardArticleContent\",\"createMany\":\"createManyBoardArticleContent\",\"delete\":\"deleteOneBoardArticleContent\",\"update\":\"updateOneBoardArticleContent\",\"deleteMany\":\"deleteManyBoardArticleContent\",\"updateMany\":\"updateManyBoardArticleContent\",\"upsert\":\"upsertOneBoardArticleContent\",\"aggregate\":\"aggregateBoardArticleContent\",\"groupBy\":\"groupByBoardArticleContent\"},{\"model\":\"BoardComment\",\"plural\":\"boardComments\",\"findUnique\":\"findUniqueBoardComment\",\"findUniqueOrThrow\":\"findUniqueBoardCommentOrThrow\",\"findFirst\":\"findFirstBoardComment\",\"findFirstOrThrow\":\"findFirstBoardCommentOrThrow\",\"findMany\":\"findManyBoardComment\",\"create\":\"createOneBoardComment\",\"createMany\":\"createManyBoardComment\",\"delete\":\"deleteOneBoardComment\",\"update\":\"updateOneBoardComment\",\"deleteMany\":\"deleteManyBoardComment\",\"updateMany\":\"updateManyBoardComment\",\"upsert\":\"upsertOneBoardComment\",\"aggregate\":\"aggregateBoardComment\",\"groupBy\":\"groupByBoardComment\"},{\"model\":\"BoardCommentContent\",\"plural\":\"boardCommentContents\",\"findUnique\":\"findUniqueBoardCommentContent\",\"findUniqueOrThrow\":\"findUniqueBoardCommentContentOrThrow\",\"findFirst\":\"findFirstBoardCommentContent\",\"findFirstOrThrow\":\"findFirstBoardCommentContentOrThrow\",\"findMany\":\"findManyBoardCommentContent\",\"create\":\"createOneBoardCommentContent\",\"createMany\":\"createManyBoardCommentContent\",\"delete\":\"deleteOneBoardCommentContent\",\"update\":\"updateOneBoardCommentContent\",\"deleteMany\":\"deleteManyBoardCommentContent\",\"updateMany\":\"updateManyBoardCommentContent\",\"upsert\":\"upsertOneBoardCommentContent\",\"aggregate\":\"aggregateBoardCommentContent\",\"groupBy\":\"groupByBoardCommentContent\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
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

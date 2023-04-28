
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
 * Prisma Client JS version: 4.13.0
 * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
 */
Prisma.prismaVersion = {
  client: "4.13.0",
  engine: "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a"
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

exports.Prisma.AgreementAcceptanceModelScalarFieldEnum = {
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  user_id: 'user_id',
  agreement_id: 'agreement_id'
};

exports.Prisma.AgreementModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  title: 'title',
  content: 'content',
  user_type: 'user_type'
};

exports.Prisma.BusinessCertificationModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  business_user_id: 'business_user_id',
  image_url: 'image_url'
};

exports.Prisma.BusinessUserModelScalarFieldEnum = {
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

exports.Prisma.CustomerModelScalarFieldEnum = {
  id: 'id',
  birth: 'birth',
  gender: 'gender',
  phone: 'phone',
  address_first: 'address_first',
  address_second: 'address_second',
  profile_image_url: 'profile_image_url'
};

exports.Prisma.ExpertSubCategoryModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  name: 'name',
  super_id: 'super_id'
};

exports.Prisma.ExpertSuperCategoryModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  name: 'name',
  business_type: 'business_type'
};

exports.Prisma.HSIntroductionImageModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  hs_provider_id: 'hs_provider_id',
  image_url: 'image_url'
};

exports.Prisma.HSProviderModelScalarFieldEnum = {
  id: 'id',
  business_registration_num: 'business_registration_num'
};

exports.Prisma.OauthAccessorModelScalarFieldEnum = {
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

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.REAgentModelScalarFieldEnum = {
  id: 'id',
  is_licensed: 'is_licensed',
  re_num: 're_num',
  re_name: 're_name',
  re_phone: 're_phone',
  re_licensed_agent_name: 're_licensed_agent_name'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.SubExpertiseModelScalarFieldEnum = {
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  sub_category_id: 'sub_category_id',
  business_user_id: 'business_user_id'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  name: 'name',
  email: 'email'
};
exports.AgreementUserType = {
  all: 'all',
  customer: 'customer',
  business: 'business',
  HS: 'HS',
  RE: 'RE'
};

exports.ExpertBusinessType = {
  HS: 'HS',
  RE: 'RE'
};

exports.GenderType = {
  female: 'female',
  male: 'male',
  other: 'other'
};

exports.OauthType = {
  kakao: 'kakao',
  naver: 'naver'
};

exports.Prisma.ModelName = {
  OauthAccessorModel: 'OauthAccessorModel',
  UserModel: 'UserModel',
  CustomerModel: 'CustomerModel',
  BusinessUserModel: 'BusinessUserModel',
  REAgentModel: 'REAgentModel',
  HSProviderModel: 'HSProviderModel',
  BusinessCertificationModel: 'BusinessCertificationModel',
  HSIntroductionImageModel: 'HSIntroductionImageModel',
  SubExpertiseModel: 'SubExpertiseModel',
  ExpertSubCategoryModel: 'ExpertSubCategoryModel',
  ExpertSuperCategoryModel: 'ExpertSuperCategoryModel',
  AgreementModel: 'AgreementModel',
  AgreementAcceptanceModel: 'AgreementAcceptanceModel'
};

const dmmfString = "{\"datamodel\":{\"enums\":[{\"name\":\"GenderType\",\"values\":[{\"name\":\"female\",\"dbName\":null},{\"name\":\"male\",\"dbName\":null},{\"name\":\"other\",\"dbName\":null}],\"dbName\":null},{\"name\":\"OauthType\",\"values\":[{\"name\":\"kakao\",\"dbName\":null},{\"name\":\"naver\",\"dbName\":null}],\"dbName\":null},{\"name\":\"ExpertBusinessType\",\"values\":[{\"name\":\"HS\",\"dbName\":null},{\"name\":\"RE\",\"dbName\":null}],\"dbName\":null},{\"name\":\"AgreementUserType\",\"values\":[{\"name\":\"all\",\"dbName\":null},{\"name\":\"customer\",\"dbName\":null},{\"name\":\"business\",\"dbName\":null},{\"name\":\"HS\",\"dbName\":null},{\"name\":\"RE\",\"dbName\":null}],\"dbName\":null}],\"models\":[{\"name\":\"OauthAccessorModel\",\"dbName\":\"oauth_accessors\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OauthType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_sub\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile_image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GenderType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_first\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_second\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUserModel\",\"relationName\":\"BusinessUserModelToOauthAccessorModel\",\"relationFromFields\":[\"business_user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CustomerModel\",\"relationName\":\"CustomerModelToOauthAccessorModel\",\"relationFromFields\":[\"customer_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"UserModel\",\"dbName\":\"users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CustomerModel\",\"relationName\":\"CustomerModelToUserModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUserModel\",\"relationName\":\"BusinessUserModelToUserModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agreement_acceptances\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AgreementAcceptanceModel\",\"relationName\":\"AgreementAcceptanceModelToUserModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"CustomerModel\",\"dbName\":\"customers\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GenderType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_first\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_second\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile_image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"base\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserModel\",\"relationName\":\"CustomerModelToUserModel\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_accessor\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OauthAccessorModel\",\"relationName\":\"CustomerModelToOauthAccessorModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BusinessUserModel\",\"dbName\":\"business_users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_first\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_second\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile_image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"super_expertise_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"base\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserModel\",\"relationName\":\"BusinessUserModelToUserModel\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"re_agent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"REAgentModel\",\"relationName\":\"BusinessUserModelToREAgentModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hs_provider\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HSProviderModel\",\"relationName\":\"BusinessUserModelToHSProviderModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"certifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessCertificationModel\",\"relationName\":\"BusinessCertificationModelToBusinessUserModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"super_expertise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExpertSuperCategoryModel\",\"relationName\":\"BusinessUserModelToExpertSuperCategoryModel\",\"relationFromFields\":[\"super_expertise_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sub_expertises\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubExpertiseModel\",\"relationName\":\"BusinessUserModelToSubExpertiseModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_accessor\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OauthAccessorModel\",\"relationName\":\"BusinessUserModelToOauthAccessorModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"REAgentModel\",\"dbName\":\"re_agents\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_licensed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"re_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"re_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"re_phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"re_licensed_agent_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"base\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUserModel\",\"relationName\":\"BusinessUserModelToREAgentModel\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"HSProviderModel\",\"dbName\":\"hs_providers\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_registration_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"base\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUserModel\",\"relationName\":\"BusinessUserModelToHSProviderModel\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_images\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HSIntroductionImageModel\",\"relationName\":\"HSIntroductionImageModelToHSProviderModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BusinessCertificationModel\",\"dbName\":\"business_certifications\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUserModel\",\"relationName\":\"BusinessCertificationModelToBusinessUserModel\",\"relationFromFields\":[\"business_user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"HSIntroductionImageModel\",\"dbName\":\"hs_introduction_images\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hs_provider_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hs_provider\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HSProviderModel\",\"relationName\":\"HSIntroductionImageModelToHSProviderModel\",\"relationFromFields\":[\"hs_provider_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"SubExpertiseModel\",\"dbName\":\"sub_expertises\",\"fields\":[{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sub_category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExpertSubCategoryModel\",\"relationName\":\"ExpertSubCategoryModelToSubExpertiseModel\",\"relationFromFields\":[\"sub_category_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUserModel\",\"relationName\":\"BusinessUserModelToSubExpertiseModel\",\"relationFromFields\":[\"business_user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"sub_category_id\",\"business_user_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ExpertSubCategoryModel\",\"dbName\":\"expert_sub_categories\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"super_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"super\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExpertSuperCategoryModel\",\"relationName\":\"ExpertSubCategoryModelToExpertSuperCategoryModel\",\"relationFromFields\":[\"super_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expertises\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubExpertiseModel\",\"relationName\":\"ExpertSubCategoryModelToSubExpertiseModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ExpertSuperCategoryModel\",\"dbName\":\"expert_super_categories\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExpertBusinessType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExpertSubCategoryModel\",\"relationName\":\"ExpertSubCategoryModelToExpertSuperCategoryModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUserModel\",\"relationName\":\"BusinessUserModelToExpertSuperCategoryModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"AgreementModel\",\"dbName\":\"agreements\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AgreementUserType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acceptances\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AgreementAcceptanceModel\",\"relationName\":\"AgreementAcceptanceModelToAgreementModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"AgreementAcceptanceModel\",\"dbName\":\"agreement_acceptances\",\"fields\":[{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agreement_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserModel\",\"relationName\":\"AgreementAcceptanceModelToUserModel\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agreement\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AgreementModel\",\"relationName\":\"AgreementAcceptanceModelToAgreementModel\",\"relationFromFields\":[\"agreement_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"user_id\",\"agreement_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"OauthAccessorModel\",\"plural\":\"oauthAccessorModels\",\"findUnique\":\"findUniqueOauthAccessorModel\",\"findUniqueOrThrow\":\"findUniqueOauthAccessorModelOrThrow\",\"findFirst\":\"findFirstOauthAccessorModel\",\"findFirstOrThrow\":\"findFirstOauthAccessorModelOrThrow\",\"findMany\":\"findManyOauthAccessorModel\",\"create\":\"createOneOauthAccessorModel\",\"createMany\":\"createManyOauthAccessorModel\",\"delete\":\"deleteOneOauthAccessorModel\",\"update\":\"updateOneOauthAccessorModel\",\"deleteMany\":\"deleteManyOauthAccessorModel\",\"updateMany\":\"updateManyOauthAccessorModel\",\"upsert\":\"upsertOneOauthAccessorModel\",\"aggregate\":\"aggregateOauthAccessorModel\",\"groupBy\":\"groupByOauthAccessorModel\"},{\"model\":\"UserModel\",\"plural\":\"userModels\",\"findUnique\":\"findUniqueUserModel\",\"findUniqueOrThrow\":\"findUniqueUserModelOrThrow\",\"findFirst\":\"findFirstUserModel\",\"findFirstOrThrow\":\"findFirstUserModelOrThrow\",\"findMany\":\"findManyUserModel\",\"create\":\"createOneUserModel\",\"createMany\":\"createManyUserModel\",\"delete\":\"deleteOneUserModel\",\"update\":\"updateOneUserModel\",\"deleteMany\":\"deleteManyUserModel\",\"updateMany\":\"updateManyUserModel\",\"upsert\":\"upsertOneUserModel\",\"aggregate\":\"aggregateUserModel\",\"groupBy\":\"groupByUserModel\"},{\"model\":\"CustomerModel\",\"plural\":\"customerModels\",\"findUnique\":\"findUniqueCustomerModel\",\"findUniqueOrThrow\":\"findUniqueCustomerModelOrThrow\",\"findFirst\":\"findFirstCustomerModel\",\"findFirstOrThrow\":\"findFirstCustomerModelOrThrow\",\"findMany\":\"findManyCustomerModel\",\"create\":\"createOneCustomerModel\",\"createMany\":\"createManyCustomerModel\",\"delete\":\"deleteOneCustomerModel\",\"update\":\"updateOneCustomerModel\",\"deleteMany\":\"deleteManyCustomerModel\",\"updateMany\":\"updateManyCustomerModel\",\"upsert\":\"upsertOneCustomerModel\",\"aggregate\":\"aggregateCustomerModel\",\"groupBy\":\"groupByCustomerModel\"},{\"model\":\"BusinessUserModel\",\"plural\":\"businessUserModels\",\"findUnique\":\"findUniqueBusinessUserModel\",\"findUniqueOrThrow\":\"findUniqueBusinessUserModelOrThrow\",\"findFirst\":\"findFirstBusinessUserModel\",\"findFirstOrThrow\":\"findFirstBusinessUserModelOrThrow\",\"findMany\":\"findManyBusinessUserModel\",\"create\":\"createOneBusinessUserModel\",\"createMany\":\"createManyBusinessUserModel\",\"delete\":\"deleteOneBusinessUserModel\",\"update\":\"updateOneBusinessUserModel\",\"deleteMany\":\"deleteManyBusinessUserModel\",\"updateMany\":\"updateManyBusinessUserModel\",\"upsert\":\"upsertOneBusinessUserModel\",\"aggregate\":\"aggregateBusinessUserModel\",\"groupBy\":\"groupByBusinessUserModel\"},{\"model\":\"REAgentModel\",\"plural\":\"rEAgentModels\",\"findUnique\":\"findUniqueREAgentModel\",\"findUniqueOrThrow\":\"findUniqueREAgentModelOrThrow\",\"findFirst\":\"findFirstREAgentModel\",\"findFirstOrThrow\":\"findFirstREAgentModelOrThrow\",\"findMany\":\"findManyREAgentModel\",\"create\":\"createOneREAgentModel\",\"createMany\":\"createManyREAgentModel\",\"delete\":\"deleteOneREAgentModel\",\"update\":\"updateOneREAgentModel\",\"deleteMany\":\"deleteManyREAgentModel\",\"updateMany\":\"updateManyREAgentModel\",\"upsert\":\"upsertOneREAgentModel\",\"aggregate\":\"aggregateREAgentModel\",\"groupBy\":\"groupByREAgentModel\"},{\"model\":\"HSProviderModel\",\"plural\":\"hSProviderModels\",\"findUnique\":\"findUniqueHSProviderModel\",\"findUniqueOrThrow\":\"findUniqueHSProviderModelOrThrow\",\"findFirst\":\"findFirstHSProviderModel\",\"findFirstOrThrow\":\"findFirstHSProviderModelOrThrow\",\"findMany\":\"findManyHSProviderModel\",\"create\":\"createOneHSProviderModel\",\"createMany\":\"createManyHSProviderModel\",\"delete\":\"deleteOneHSProviderModel\",\"update\":\"updateOneHSProviderModel\",\"deleteMany\":\"deleteManyHSProviderModel\",\"updateMany\":\"updateManyHSProviderModel\",\"upsert\":\"upsertOneHSProviderModel\",\"aggregate\":\"aggregateHSProviderModel\",\"groupBy\":\"groupByHSProviderModel\"},{\"model\":\"BusinessCertificationModel\",\"plural\":\"businessCertificationModels\",\"findUnique\":\"findUniqueBusinessCertificationModel\",\"findUniqueOrThrow\":\"findUniqueBusinessCertificationModelOrThrow\",\"findFirst\":\"findFirstBusinessCertificationModel\",\"findFirstOrThrow\":\"findFirstBusinessCertificationModelOrThrow\",\"findMany\":\"findManyBusinessCertificationModel\",\"create\":\"createOneBusinessCertificationModel\",\"createMany\":\"createManyBusinessCertificationModel\",\"delete\":\"deleteOneBusinessCertificationModel\",\"update\":\"updateOneBusinessCertificationModel\",\"deleteMany\":\"deleteManyBusinessCertificationModel\",\"updateMany\":\"updateManyBusinessCertificationModel\",\"upsert\":\"upsertOneBusinessCertificationModel\",\"aggregate\":\"aggregateBusinessCertificationModel\",\"groupBy\":\"groupByBusinessCertificationModel\"},{\"model\":\"HSIntroductionImageModel\",\"plural\":\"hSIntroductionImageModels\",\"findUnique\":\"findUniqueHSIntroductionImageModel\",\"findUniqueOrThrow\":\"findUniqueHSIntroductionImageModelOrThrow\",\"findFirst\":\"findFirstHSIntroductionImageModel\",\"findFirstOrThrow\":\"findFirstHSIntroductionImageModelOrThrow\",\"findMany\":\"findManyHSIntroductionImageModel\",\"create\":\"createOneHSIntroductionImageModel\",\"createMany\":\"createManyHSIntroductionImageModel\",\"delete\":\"deleteOneHSIntroductionImageModel\",\"update\":\"updateOneHSIntroductionImageModel\",\"deleteMany\":\"deleteManyHSIntroductionImageModel\",\"updateMany\":\"updateManyHSIntroductionImageModel\",\"upsert\":\"upsertOneHSIntroductionImageModel\",\"aggregate\":\"aggregateHSIntroductionImageModel\",\"groupBy\":\"groupByHSIntroductionImageModel\"},{\"model\":\"SubExpertiseModel\",\"plural\":\"subExpertiseModels\",\"findUnique\":\"findUniqueSubExpertiseModel\",\"findUniqueOrThrow\":\"findUniqueSubExpertiseModelOrThrow\",\"findFirst\":\"findFirstSubExpertiseModel\",\"findFirstOrThrow\":\"findFirstSubExpertiseModelOrThrow\",\"findMany\":\"findManySubExpertiseModel\",\"create\":\"createOneSubExpertiseModel\",\"createMany\":\"createManySubExpertiseModel\",\"delete\":\"deleteOneSubExpertiseModel\",\"update\":\"updateOneSubExpertiseModel\",\"deleteMany\":\"deleteManySubExpertiseModel\",\"updateMany\":\"updateManySubExpertiseModel\",\"upsert\":\"upsertOneSubExpertiseModel\",\"aggregate\":\"aggregateSubExpertiseModel\",\"groupBy\":\"groupBySubExpertiseModel\"},{\"model\":\"ExpertSubCategoryModel\",\"plural\":\"expertSubCategoryModels\",\"findUnique\":\"findUniqueExpertSubCategoryModel\",\"findUniqueOrThrow\":\"findUniqueExpertSubCategoryModelOrThrow\",\"findFirst\":\"findFirstExpertSubCategoryModel\",\"findFirstOrThrow\":\"findFirstExpertSubCategoryModelOrThrow\",\"findMany\":\"findManyExpertSubCategoryModel\",\"create\":\"createOneExpertSubCategoryModel\",\"createMany\":\"createManyExpertSubCategoryModel\",\"delete\":\"deleteOneExpertSubCategoryModel\",\"update\":\"updateOneExpertSubCategoryModel\",\"deleteMany\":\"deleteManyExpertSubCategoryModel\",\"updateMany\":\"updateManyExpertSubCategoryModel\",\"upsert\":\"upsertOneExpertSubCategoryModel\",\"aggregate\":\"aggregateExpertSubCategoryModel\",\"groupBy\":\"groupByExpertSubCategoryModel\"},{\"model\":\"ExpertSuperCategoryModel\",\"plural\":\"expertSuperCategoryModels\",\"findUnique\":\"findUniqueExpertSuperCategoryModel\",\"findUniqueOrThrow\":\"findUniqueExpertSuperCategoryModelOrThrow\",\"findFirst\":\"findFirstExpertSuperCategoryModel\",\"findFirstOrThrow\":\"findFirstExpertSuperCategoryModelOrThrow\",\"findMany\":\"findManyExpertSuperCategoryModel\",\"create\":\"createOneExpertSuperCategoryModel\",\"createMany\":\"createManyExpertSuperCategoryModel\",\"delete\":\"deleteOneExpertSuperCategoryModel\",\"update\":\"updateOneExpertSuperCategoryModel\",\"deleteMany\":\"deleteManyExpertSuperCategoryModel\",\"updateMany\":\"updateManyExpertSuperCategoryModel\",\"upsert\":\"upsertOneExpertSuperCategoryModel\",\"aggregate\":\"aggregateExpertSuperCategoryModel\",\"groupBy\":\"groupByExpertSuperCategoryModel\"},{\"model\":\"AgreementModel\",\"plural\":\"agreementModels\",\"findUnique\":\"findUniqueAgreementModel\",\"findUniqueOrThrow\":\"findUniqueAgreementModelOrThrow\",\"findFirst\":\"findFirstAgreementModel\",\"findFirstOrThrow\":\"findFirstAgreementModelOrThrow\",\"findMany\":\"findManyAgreementModel\",\"create\":\"createOneAgreementModel\",\"createMany\":\"createManyAgreementModel\",\"delete\":\"deleteOneAgreementModel\",\"update\":\"updateOneAgreementModel\",\"deleteMany\":\"deleteManyAgreementModel\",\"updateMany\":\"updateManyAgreementModel\",\"upsert\":\"upsertOneAgreementModel\",\"aggregate\":\"aggregateAgreementModel\",\"groupBy\":\"groupByAgreementModel\"},{\"model\":\"AgreementAcceptanceModel\",\"plural\":\"agreementAcceptanceModels\",\"findUnique\":\"findUniqueAgreementAcceptanceModel\",\"findUniqueOrThrow\":\"findUniqueAgreementAcceptanceModelOrThrow\",\"findFirst\":\"findFirstAgreementAcceptanceModel\",\"findFirstOrThrow\":\"findFirstAgreementAcceptanceModelOrThrow\",\"findMany\":\"findManyAgreementAcceptanceModel\",\"create\":\"createOneAgreementAcceptanceModel\",\"createMany\":\"createManyAgreementAcceptanceModel\",\"delete\":\"deleteOneAgreementAcceptanceModel\",\"update\":\"updateOneAgreementAcceptanceModel\",\"deleteMany\":\"deleteManyAgreementAcceptanceModel\",\"updateMany\":\"updateManyAgreementAcceptanceModel\",\"upsert\":\"upsertOneAgreementAcceptanceModel\",\"aggregate\":\"aggregateAgreementAcceptanceModel\",\"groupBy\":\"groupByAgreementAcceptanceModel\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
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
  "clientVersion": "4.13.0",
  "engineVersion": "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a",
  "datasourceNames": [
    "database"
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

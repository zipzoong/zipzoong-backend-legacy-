
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

const dmmfString = "{\"datamodel\":{\"enums\":[{\"name\":\"GenderType\",\"values\":[{\"name\":\"female\",\"dbName\":null},{\"name\":\"male\",\"dbName\":null},{\"name\":\"other\",\"dbName\":null}],\"dbName\":null},{\"name\":\"OauthType\",\"values\":[{\"name\":\"kakao\",\"dbName\":null},{\"name\":\"naver\",\"dbName\":null}],\"dbName\":null}],\"models\":[{\"name\":\"AccessorModel\",\"dbName\":\"oauth_accessors\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_sub\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OauthType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CustomerModel\",\"relationName\":\"AccessorModelToCustomerModel\",\"relationFromFields\":[\"customer_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUserModel\",\"relationName\":\"AccessorModelToBusinessUserModel\",\"relationFromFields\":[\"business_user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"temp_re_agents\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TempREAgentModel\",\"relationName\":\"AccessorModelToTempREAgentModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"temp_hs_company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TempHSCompanyModel\",\"relationName\":\"AccessorModelToTempHSCompanyModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"oauth_type\",\"oauth_sub\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"oauth_type\",\"oauth_sub\"]}],\"isGenerated\":false},{\"name\":\"UserModel\",\"dbName\":\"users\",\"fields\":[{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CustomerModel\",\"relationName\":\"CustomerModelToUserModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUserModel\",\"relationName\":\"BusinessUserModelToUserModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"CustomerModel\",\"dbName\":\"customers\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile_image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GenderType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_first\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_second\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"base\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserModel\",\"relationName\":\"CustomerModelToUserModel\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_accessors\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AccessorModel\",\"relationName\":\"AccessorModelToCustomerModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BusinessUserModel\",\"dbName\":\"business_users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile_image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"base\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserModel\",\"relationName\":\"BusinessUserModelToUserModel\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"re_agent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"REAgentModel\",\"relationName\":\"BusinessUserModelToREAgentModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hs_company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HSCompanyModel\",\"relationName\":\"BusinessUserModelToHSCompanyModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_accessors\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AccessorModel\",\"relationName\":\"AccessorModelToBusinessUserModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"REAgentModel\",\"dbName\":\"re_agents\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_licensed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"re_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"re_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"re_phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"re_licensed_agent_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"re_address_first\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"re_address_second\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"base\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUserModel\",\"relationName\":\"BusinessUserModelToREAgentModel\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"HSCompanyModel\",\"dbName\":\"hs_companies\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_first\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_second\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"base\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BusinessUserModel\",\"relationName\":\"BusinessUserModelToHSCompanyModel\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_images\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HSCompanyIntroductionImageModel\",\"relationName\":\"HSCompanyIntroductionImageModelToHSCompanyModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"HSCompanyIntroductionImageModel\",\"dbName\":\"hs_company_introduction_images\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HSCompanyModel\",\"relationName\":\"HSCompanyIntroductionImageModelToHSCompanyModel\",\"relationFromFields\":[\"company_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TempREAgentModel\",\"dbName\":\"temp_re_agents\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile_image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_first\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_second\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_licensed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"re_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"re_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"re_phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"re_licensed_agent_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_accessor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AccessorModel\",\"relationName\":\"AccessorModelToTempREAgentModel\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TempHSCompanyModel\",\"dbName\":\"temp_hs_companies\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile_image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_first\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_second\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduction_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauth_accessor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AccessorModel\",\"relationName\":\"AccessorModelToTempHSCompanyModel\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"AccessorModel\",\"plural\":\"accessorModels\",\"findUnique\":\"findUniqueAccessorModel\",\"findUniqueOrThrow\":\"findUniqueAccessorModelOrThrow\",\"findFirst\":\"findFirstAccessorModel\",\"findFirstOrThrow\":\"findFirstAccessorModelOrThrow\",\"findMany\":\"findManyAccessorModel\",\"create\":\"createOneAccessorModel\",\"createMany\":\"createManyAccessorModel\",\"delete\":\"deleteOneAccessorModel\",\"update\":\"updateOneAccessorModel\",\"deleteMany\":\"deleteManyAccessorModel\",\"updateMany\":\"updateManyAccessorModel\",\"upsert\":\"upsertOneAccessorModel\",\"aggregate\":\"aggregateAccessorModel\",\"groupBy\":\"groupByAccessorModel\"},{\"model\":\"UserModel\",\"plural\":\"userModels\",\"findUnique\":\"findUniqueUserModel\",\"findUniqueOrThrow\":\"findUniqueUserModelOrThrow\",\"findFirst\":\"findFirstUserModel\",\"findFirstOrThrow\":\"findFirstUserModelOrThrow\",\"findMany\":\"findManyUserModel\",\"create\":\"createOneUserModel\",\"createMany\":\"createManyUserModel\",\"delete\":\"deleteOneUserModel\",\"update\":\"updateOneUserModel\",\"deleteMany\":\"deleteManyUserModel\",\"updateMany\":\"updateManyUserModel\",\"upsert\":\"upsertOneUserModel\",\"aggregate\":\"aggregateUserModel\",\"groupBy\":\"groupByUserModel\"},{\"model\":\"CustomerModel\",\"plural\":\"customerModels\",\"findUnique\":\"findUniqueCustomerModel\",\"findUniqueOrThrow\":\"findUniqueCustomerModelOrThrow\",\"findFirst\":\"findFirstCustomerModel\",\"findFirstOrThrow\":\"findFirstCustomerModelOrThrow\",\"findMany\":\"findManyCustomerModel\",\"create\":\"createOneCustomerModel\",\"createMany\":\"createManyCustomerModel\",\"delete\":\"deleteOneCustomerModel\",\"update\":\"updateOneCustomerModel\",\"deleteMany\":\"deleteManyCustomerModel\",\"updateMany\":\"updateManyCustomerModel\",\"upsert\":\"upsertOneCustomerModel\",\"aggregate\":\"aggregateCustomerModel\",\"groupBy\":\"groupByCustomerModel\"},{\"model\":\"BusinessUserModel\",\"plural\":\"businessUserModels\",\"findUnique\":\"findUniqueBusinessUserModel\",\"findUniqueOrThrow\":\"findUniqueBusinessUserModelOrThrow\",\"findFirst\":\"findFirstBusinessUserModel\",\"findFirstOrThrow\":\"findFirstBusinessUserModelOrThrow\",\"findMany\":\"findManyBusinessUserModel\",\"create\":\"createOneBusinessUserModel\",\"createMany\":\"createManyBusinessUserModel\",\"delete\":\"deleteOneBusinessUserModel\",\"update\":\"updateOneBusinessUserModel\",\"deleteMany\":\"deleteManyBusinessUserModel\",\"updateMany\":\"updateManyBusinessUserModel\",\"upsert\":\"upsertOneBusinessUserModel\",\"aggregate\":\"aggregateBusinessUserModel\",\"groupBy\":\"groupByBusinessUserModel\"},{\"model\":\"REAgentModel\",\"plural\":\"rEAgentModels\",\"findUnique\":\"findUniqueREAgentModel\",\"findUniqueOrThrow\":\"findUniqueREAgentModelOrThrow\",\"findFirst\":\"findFirstREAgentModel\",\"findFirstOrThrow\":\"findFirstREAgentModelOrThrow\",\"findMany\":\"findManyREAgentModel\",\"create\":\"createOneREAgentModel\",\"createMany\":\"createManyREAgentModel\",\"delete\":\"deleteOneREAgentModel\",\"update\":\"updateOneREAgentModel\",\"deleteMany\":\"deleteManyREAgentModel\",\"updateMany\":\"updateManyREAgentModel\",\"upsert\":\"upsertOneREAgentModel\",\"aggregate\":\"aggregateREAgentModel\",\"groupBy\":\"groupByREAgentModel\"},{\"model\":\"HSCompanyModel\",\"plural\":\"hSCompanyModels\",\"findUnique\":\"findUniqueHSCompanyModel\",\"findUniqueOrThrow\":\"findUniqueHSCompanyModelOrThrow\",\"findFirst\":\"findFirstHSCompanyModel\",\"findFirstOrThrow\":\"findFirstHSCompanyModelOrThrow\",\"findMany\":\"findManyHSCompanyModel\",\"create\":\"createOneHSCompanyModel\",\"createMany\":\"createManyHSCompanyModel\",\"delete\":\"deleteOneHSCompanyModel\",\"update\":\"updateOneHSCompanyModel\",\"deleteMany\":\"deleteManyHSCompanyModel\",\"updateMany\":\"updateManyHSCompanyModel\",\"upsert\":\"upsertOneHSCompanyModel\",\"aggregate\":\"aggregateHSCompanyModel\",\"groupBy\":\"groupByHSCompanyModel\"},{\"model\":\"HSCompanyIntroductionImageModel\",\"plural\":\"hSCompanyIntroductionImageModels\",\"findUnique\":\"findUniqueHSCompanyIntroductionImageModel\",\"findUniqueOrThrow\":\"findUniqueHSCompanyIntroductionImageModelOrThrow\",\"findFirst\":\"findFirstHSCompanyIntroductionImageModel\",\"findFirstOrThrow\":\"findFirstHSCompanyIntroductionImageModelOrThrow\",\"findMany\":\"findManyHSCompanyIntroductionImageModel\",\"create\":\"createOneHSCompanyIntroductionImageModel\",\"createMany\":\"createManyHSCompanyIntroductionImageModel\",\"delete\":\"deleteOneHSCompanyIntroductionImageModel\",\"update\":\"updateOneHSCompanyIntroductionImageModel\",\"deleteMany\":\"deleteManyHSCompanyIntroductionImageModel\",\"updateMany\":\"updateManyHSCompanyIntroductionImageModel\",\"upsert\":\"upsertOneHSCompanyIntroductionImageModel\",\"aggregate\":\"aggregateHSCompanyIntroductionImageModel\",\"groupBy\":\"groupByHSCompanyIntroductionImageModel\"},{\"model\":\"TempREAgentModel\",\"plural\":\"tempREAgentModels\",\"findUnique\":\"findUniqueTempREAgentModel\",\"findUniqueOrThrow\":\"findUniqueTempREAgentModelOrThrow\",\"findFirst\":\"findFirstTempREAgentModel\",\"findFirstOrThrow\":\"findFirstTempREAgentModelOrThrow\",\"findMany\":\"findManyTempREAgentModel\",\"create\":\"createOneTempREAgentModel\",\"createMany\":\"createManyTempREAgentModel\",\"delete\":\"deleteOneTempREAgentModel\",\"update\":\"updateOneTempREAgentModel\",\"deleteMany\":\"deleteManyTempREAgentModel\",\"updateMany\":\"updateManyTempREAgentModel\",\"upsert\":\"upsertOneTempREAgentModel\",\"aggregate\":\"aggregateTempREAgentModel\",\"groupBy\":\"groupByTempREAgentModel\"},{\"model\":\"TempHSCompanyModel\",\"plural\":\"tempHSCompanyModels\",\"findUnique\":\"findUniqueTempHSCompanyModel\",\"findUniqueOrThrow\":\"findUniqueTempHSCompanyModelOrThrow\",\"findFirst\":\"findFirstTempHSCompanyModel\",\"findFirstOrThrow\":\"findFirstTempHSCompanyModelOrThrow\",\"findMany\":\"findManyTempHSCompanyModel\",\"create\":\"createOneTempHSCompanyModel\",\"createMany\":\"createManyTempHSCompanyModel\",\"delete\":\"deleteOneTempHSCompanyModel\",\"update\":\"updateOneTempHSCompanyModel\",\"deleteMany\":\"deleteManyTempHSCompanyModel\",\"updateMany\":\"updateManyTempHSCompanyModel\",\"upsert\":\"upsertOneTempHSCompanyModel\",\"aggregate\":\"aggregateTempHSCompanyModel\",\"groupBy\":\"groupByTempHSCompanyModel\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
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


Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.15.0
 * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
 */
Prisma.prismaVersion = {
  client: "4.15.0",
  engine: "8fbc245156db7124f997f4cecdd8d1219e360944"
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

exports.Prisma.AgreementAcceptanceModelScalarFieldEnum = {
  id: 'id',
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
  is_required: 'is_required',
  target_type: 'target_type'
};

exports.Prisma.BusinessCertificationImageModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  business_user_id: 'business_user_id',
  url: 'url'
};

exports.Prisma.BusinessUserModelScalarFieldEnum = {
  id: 'id',
  is_verified: 'is_verified',
  introduction_title: 'introduction_title',
  introduction_content: 'introduction_content',
  phone: 'phone',
  address_first: 'address_first',
  address_second: 'address_second',
  profile_image_url: 'profile_image_url'
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

exports.Prisma.HSExampleImageModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  hs_provider_id: 'hs_provider_id',
  url: 'url',
  is_visible: 'is_visible'
};

exports.Prisma.HSProviderModelScalarFieldEnum = {
  id: 'id',
  business_registration_num: 'business_registration_num'
};

exports.Prisma.OauthAccountModelScalarFieldEnum = {
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

exports.Prisma.PhoneVerificationModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  phone: 'phone',
  code: 'code',
  request_id: 'request_id',
  is_verified: 'is_verified'
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

exports.Prisma.REPropertyCategoryModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  re_property_id: 're_property_id',
  sub_category_id: 'sub_category_id'
};

exports.Prisma.REPropertyMiddleCategoryModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  name: 'name',
  super_category_id: 'super_category_id'
};

exports.Prisma.REPropertyModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  name: 'name',
  main_image_url: 'main_image_url',
  re_agent_id: 're_agent_id',
  is_visible: 'is_visible'
};

exports.Prisma.REPropertySubCategoryModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  name: 'name',
  middle_category_id: 'middle_category_id'
};

exports.Prisma.REPropertySuperCategoryModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  name: 'name'
};

exports.Prisma.ServiceSubCategoryModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  name: 'name',
  super_category_id: 'super_category_id'
};

exports.Prisma.ServiceSuperCategoryModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  name: 'name',
  type: 'type'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.SubExpertiseModelScalarFieldEnum = {
  id: 'id',
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

exports.Prisma.ZipzoongCareConsultationTimeCheckModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  start_time: 'start_time',
  end_time: 'end_time',
  request_id: 'request_id'
};

exports.Prisma.ZipzoongCareRequestModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  care_start_date: 'care_start_date',
  care_end_date: 'care_end_date',
  detail: 'detail',
  status: 'status',
  requester_id: 'requester_id'
};

exports.Prisma.ZipzoongCareServiceCheckModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  service_super_category_id: 'service_super_category_id',
  request_id: 'request_id'
};
exports.AgreementTargetType = {
  all: 'all',
  customer: 'customer',
  business: 'business',
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

exports.ServiceType = {
  HS: 'HS',
  RE: 'RE'
};

exports.ZipzoongCareStatus = {
  pending: 'pending',
  caring: 'caring',
  cared: 'cared',
  cancelled: 'cancelled'
};

exports.Prisma.ModelName = {
  REPropertyModel: 'REPropertyModel',
  REPropertyCategoryModel: 'REPropertyCategoryModel',
  REPropertySubCategoryModel: 'REPropertySubCategoryModel',
  REPropertyMiddleCategoryModel: 'REPropertyMiddleCategoryModel',
  REPropertySuperCategoryModel: 'REPropertySuperCategoryModel',
  AgreementModel: 'AgreementModel',
  AgreementAcceptanceModel: 'AgreementAcceptanceModel',
  ServiceSubCategoryModel: 'ServiceSubCategoryModel',
  ServiceSuperCategoryModel: 'ServiceSuperCategoryModel',
  ZipzoongCareRequestModel: 'ZipzoongCareRequestModel',
  ZipzoongCareServiceCheckModel: 'ZipzoongCareServiceCheckModel',
  ZipzoongCareConsultationTimeCheckModel: 'ZipzoongCareConsultationTimeCheckModel',
  UserModel: 'UserModel',
  CustomerModel: 'CustomerModel',
  BusinessUserModel: 'BusinessUserModel',
  SubExpertiseModel: 'SubExpertiseModel',
  REAgentModel: 'REAgentModel',
  HSProviderModel: 'HSProviderModel',
  BusinessCertificationImageModel: 'BusinessCertificationImageModel',
  HSExampleImageModel: 'HSExampleImageModel',
  OauthAccountModel: 'OauthAccountModel',
  PhoneVerificationModel: 'PhoneVerificationModel'
};

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

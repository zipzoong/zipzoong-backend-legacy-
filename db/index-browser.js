
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.14.0
 * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
 */
Prisma.prismaVersion = {
  client: "4.14.0",
  engine: "d9a4c5988f480fa576d43970d5a23641aa77bc9c"
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

exports.Prisma.ConsultationTimeModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  start_time: 'start_time',
  end_time: 'end_time'
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

exports.Prisma.FocusCareConsultationTimeCheckModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  consultation_time_id: 'consultation_time_id',
  request_id: 'request_id'
};

exports.Prisma.FocusCareRequestModelScalarFieldEnum = {
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

exports.Prisma.FocusCareServiceCheckModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  service_super_category_id: 'service_super_category_id',
  request_id: 'request_id'
};

exports.Prisma.HSIntroductionImageModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  hs_provider_id: 'hs_provider_id',
  url: 'url'
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

exports.Prisma.REProertyModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  name: 'name',
  main_image_url: 'main_image_url',
  re_agent_id: 're_agent_id'
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

exports.Prisma.RateCategoryModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  name: 'name',
  target_type: 'target_type'
};

exports.Prisma.RateModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  score: 'score',
  category_id: 'category_id',
  review_id: 'review_id'
};

exports.Prisma.ReviewModelScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_deleted: 'is_deleted',
  deleted_at: 'deleted_at',
  reviewer_id: 'reviewer_id',
  reviewee_id: 'reviewee_id',
  content: 'content'
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
exports.AgreementTargetType = {
  all: 'all',
  customer: 'customer',
  business: 'business',
  HS: 'HS',
  RE: 'RE'
};

exports.FocusCareStatus = {
  pending: 'pending',
  caring: 'caring',
  cared: 'cared',
  cancelled: 'cancelled'
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

exports.RateTargetType = {
  all: 'all',
  HS: 'HS',
  RE: 'RE'
};

exports.ServiceType = {
  HS: 'HS',
  RE: 'RE'
};

exports.Prisma.ModelName = {
  REProertyModel: 'REProertyModel',
  REPropertyCategoryModel: 'REPropertyCategoryModel',
  REPropertySubCategoryModel: 'REPropertySubCategoryModel',
  REPropertyMiddleCategoryModel: 'REPropertyMiddleCategoryModel',
  REPropertySuperCategoryModel: 'REPropertySuperCategoryModel',
  ReviewModel: 'ReviewModel',
  RateModel: 'RateModel',
  RateCategoryModel: 'RateCategoryModel',
  AgreementModel: 'AgreementModel',
  AgreementAcceptanceModel: 'AgreementAcceptanceModel',
  ConsultationTimeModel: 'ConsultationTimeModel',
  ServiceSubCategoryModel: 'ServiceSubCategoryModel',
  ServiceSuperCategoryModel: 'ServiceSuperCategoryModel',
  FocusCareRequestModel: 'FocusCareRequestModel',
  FocusCareServiceCheckModel: 'FocusCareServiceCheckModel',
  FocusCareConsultationTimeCheckModel: 'FocusCareConsultationTimeCheckModel',
  UserModel: 'UserModel',
  CustomerModel: 'CustomerModel',
  BusinessUserModel: 'BusinessUserModel',
  SubExpertiseModel: 'SubExpertiseModel',
  REAgentModel: 'REAgentModel',
  HSProviderModel: 'HSProviderModel',
  BusinessCertificationImageModel: 'BusinessCertificationImageModel',
  HSIntroductionImageModel: 'HSIntroductionImageModel',
  OauthAccountModel: 'OauthAccountModel'
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

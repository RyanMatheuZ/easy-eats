type TErrors =
  | 'ValidationError'
  | 'ModelValidation'
  | 'RelationExpression'
  | 'UnallowedRelation'
  | 'InvalidGraph'
  | 'UnknownValidationError'
  | 'NotFound'
  | 'UniqueViolation'
  | 'NotNullViolation'
  | 'ForeignKeyViolation'
  | 'CheckViolation'
  | 'InvalidData'
  | 'UnknownDatabaseError';

export default TErrors;

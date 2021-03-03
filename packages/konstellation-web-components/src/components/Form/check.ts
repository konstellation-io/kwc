import moment, { Moment } from 'moment';

import validator from 'validator';

type Check = {
  valid: boolean;
  message: string;
};
const VALID = { valid: true, message: '' } as Check;
function setInvalid(message: string) {
  return {
    message,
    valid: false,
  } as Check;
}

function getValidationError(validations: Check[]): string | boolean {
  let errorMessage: string | boolean = true;

  for (let idx = 0; idx < validations.length; idx++) {
    const validation = validations[idx];

    if (!validation.valid) {
      errorMessage = validation.message;
      break;
    }
  }

  return errorMessage;
}

function isDefined(value: any) {
  return [null, undefined].includes(value)
    ? setInvalid('This field is mandatory')
    : VALID;
}

function isFieldNotEmpty(value: string) {
  return value !== '' ? VALID : setInvalid('This field cannot be empty');
}

function isLengthAllowed(value: string, maxLength: number) {
  return value.length > maxLength
    ? setInvalid(`This field cannot be longer than ${maxLength}`)
    : VALID;
}

function isFieldAnInteger(value: string, positive: boolean = false) {
  const integerValue = parseInt(value);
  const isValid =
    !Number.isNaN(integerValue) && (positive ? integerValue >= 0 : true);

  return isValid
    ? VALID
    : setInvalid(
        `Invalid type, field is not ${positive ? 'a positive' : 'an'} integer`
      );
}

function isGreaterThan(value: number | string, minValue: number) {
  return value >= minValue
    ? VALID
    : setInvalid(`Invalid value, ${value} must be greater than ${minValue}`);
}

function isEmailValid(email: string) {
  return validator.isEmail(email) ? VALID : setInvalid('Invalid email address');
}

function isUrlValid(url: string) {
  return validator.isURL(url, { require_tld: false, require_protocol: true })
    ? VALID
    : setInvalid('Invalid url format');
}

function isDomainValid(value: string) {
  const re = new RegExp(
    /^((?:(?:(?:\w[.\-+]?)*)\w)+)((?:(?:(?:\w[.\-+]?){0,62})\w)+)\.(\w{2,6})$/
  );

  return re.test(value) ? VALID : setInvalid('Invalid domain format');
}

function isFieldNotInList(
  value: string,
  list: string[],
  optional: boolean = false,
  message?: string
) {
  return list.includes(value) || (optional && !value)
    ? VALID
    : setInvalid(message || `Value must be in list: ${list}`);
}

function isFieldAMomentDate(value: Moment, optional: boolean = false) {
  return value instanceof moment || (optional && !value)
    ? VALID
    : setInvalid(`Value is not a Date`);
}

function isItemDuplicated(
  newItem: string,
  items: string[],
  itemName: string = 'item'
) {
  const valid = !items.includes(newItem);
  const msg = valid ? '' : `Duplicated ${itemName}`;
  return { valid, message: msg };
}

function isLowerCase(value: string, msg?: string) {
  return validator.isLowercase(value)
    ? VALID
    : setInvalid(msg || 'Must be lower case');
}

function isUpperCase(value: string, msg?: string) {
  return validator.isUppercase(value)
    ? VALID
    : setInvalid(msg || 'Must be uppercase');
}

function isAlphanumeric(value: string, msg?: string) {
  return validator.isAlphanumeric(value)
    ? VALID
    : setInvalid(msg || 'Must be alphanumeric');
}

function isSlug(value: string, msg?: string) {
  return validator.isSlug(value)
    ? VALID
    : setInvalid(
        msg || 'Must contains a single hyphen between strings, e.g. one-two'
      );
}

function matches(value: string, regexp: RegExp, msg?: string) {
  return validator.matches(value, regexp)
    ? VALID
    : setInvalid(
        msg || 'Does not meets the specified format: ' + regexp.source
      );
}

// TODO: try to export all (*) as CHECK
export const CHECK = {
  getValidationError,
  isDefined,
  isFieldNotEmpty,
  isLengthAllowed,
  isFieldAnInteger,
  isGreaterThan,
  isEmailValid,
  isDomainValid,
  isUrlValid,
  isFieldNotInList,
  isFieldAMomentDate,
  isItemDuplicated,
  isLowerCase,
  isUpperCase,
  isAlphanumeric,
  isSlug,
  matches,
};

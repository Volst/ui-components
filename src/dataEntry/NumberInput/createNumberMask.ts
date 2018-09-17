// Copied from https://github.com/text-mask/text-mask/blob/2745c2576e0cb6569ae8e146eafab2acc8c168cc/addons/src/createNumberMask.js
const dollarSign = '$';
const emptyString = '';
const comma = ',';
const period = '.';
const minus = '-';
const minusRegExp = /-/;
const nonDigitsRegExp = /\D+/g;
const numberType = 'number';
const digitRegExp = /\d/;
const caretTrap = '[]';

export interface NumberMaskOptions {
  prefix?: string;
  suffix?: string;
  includeThousandsSeparator?: boolean;
  thousandsSeparatorSymbol?: string;
  allowDecimal?: boolean;
  decimalSymbol?: string;
  decimalLimit?: number;
  requireDecimal?: boolean;
  allowNegative?: boolean;
  allowLeadingZeroes?: boolean;
  integerLimit?: number;
}

export default function createNumberMask({
  prefix = dollarSign,
  suffix = emptyString,
  includeThousandsSeparator = true,
  thousandsSeparatorSymbol = comma,
  allowDecimal = false,
  decimalSymbol = period,
  decimalLimit = 2,
  requireDecimal = false,
  allowNegative = false,
  allowLeadingZeroes = false,
  integerLimit,
}: NumberMaskOptions = {}) {
  const prefixLength = (prefix && prefix.length) || 0;
  const suffixLength = (suffix && suffix.length) || 0;
  const thousandsSeparatorSymbolLength =
    (thousandsSeparatorSymbol && thousandsSeparatorSymbol.length) || 0;

  function numberMask(rawValue: string = emptyString) {
    const rawValueLength = rawValue.length;

    if (
      rawValue === emptyString ||
      (rawValue[0] === prefix[0] && rawValueLength === 1)
    ) {
      return (prefix as any)
        .split(emptyString)
        .concat([digitRegExp])
        .concat(suffix.split(emptyString));
    } else if (rawValue === decimalSymbol && allowDecimal) {
      return (prefix as any)
        .split(emptyString)
        .concat(['0', decimalSymbol, digitRegExp])
        .concat(suffix.split(emptyString));
    }

    const isNegative = rawValue[0] === minus && allowNegative;
    //If negative remove "-" sign
    if (isNegative) {
      rawValue = rawValue.toString().substr(1);
    }

    const hasPeriod = rawValue.includes(period);
    const shouldReplacePeriod =
      allowDecimal && decimalSymbol === comma && !includeThousandsSeparator;
    if (hasPeriod && shouldReplacePeriod) {
      rawValue = rawValue.toString().replace(period, decimalSymbol);
    }

    const indexOfLastDecimal = rawValue.lastIndexOf(decimalSymbol);
    const hasDecimal = indexOfLastDecimal !== -1;

    let integer;
    let fraction;
    let mask;

    // remove the suffix
    if (rawValue.slice(suffixLength * -1) === suffix) {
      rawValue = rawValue.slice(0, suffixLength * -1);
    }

    if (hasDecimal && (allowDecimal || requireDecimal)) {
      integer = rawValue.slice(
        rawValue.slice(0, prefixLength) === prefix ? prefixLength : 0,
        indexOfLastDecimal
      );

      fraction = rawValue.slice(indexOfLastDecimal + 1, rawValueLength);
      fraction = convertToMask(fraction.replace(nonDigitsRegExp, emptyString));
    } else {
      if (rawValue.slice(0, prefixLength) === prefix) {
        integer = rawValue.slice(prefixLength);
      } else {
        integer = rawValue;
      }
    }

    if (integerLimit && typeof integerLimit === numberType) {
      const thousandsSeparatorRegex =
        thousandsSeparatorSymbol === '.'
          ? '[.]'
          : `${thousandsSeparatorSymbol}`;
      const numberOfThousandSeparators = (
        integer.match(new RegExp(thousandsSeparatorRegex, 'g')) || []
      ).length;

      integer = integer.slice(
        0,
        (integerLimit as any) +
          numberOfThousandSeparators * thousandsSeparatorSymbolLength
      );
    }

    integer = integer.replace(nonDigitsRegExp, emptyString);

    if (!allowLeadingZeroes) {
      integer = integer.replace(/^0+(0$|[^0])/, '$1');
    }

    integer = includeThousandsSeparator
      ? addThousandsSeparator(integer, thousandsSeparatorSymbol)
      : integer;

    mask = convertToMask(integer);

    if ((hasDecimal && allowDecimal) || requireDecimal === true) {
      if (
        !(hasPeriod && shouldReplacePeriod) &&
        rawValue[indexOfLastDecimal - 1] !== decimalSymbol
      ) {
        mask.push(caretTrap);
      }

      mask.push(decimalSymbol, caretTrap);

      if (hasPeriod && shouldReplacePeriod) {
        mask.push(digitRegExp);
      }

      if (fraction) {
        if (typeof decimalLimit === numberType) {
          fraction = fraction.slice(0, decimalLimit);
        }

        mask = mask.concat(fraction);
      }

      if (
        requireDecimal === true &&
        rawValue[indexOfLastDecimal - 1] === decimalSymbol
      ) {
        mask.push(digitRegExp);
      }
    }

    if (prefixLength > 0) {
      mask = prefix.split(emptyString).concat(mask);
    }

    if (isNegative) {
      // If user is entering a negative number, add a mask placeholder spot to attract the caret to it.
      if (mask.length === prefixLength) {
        mask.push(digitRegExp);
      }

      mask = [minusRegExp].concat(mask);
    }

    if (suffix.length > 0) {
      mask = mask.concat(suffix.split(emptyString));
    }

    return mask;
  }

  (numberMask as any).instanceOf = 'createNumberMask';

  return numberMask;
}

function convertToMask(strNumber: string) {
  return strNumber
    .split(emptyString)
    .map(char => (digitRegExp.test(char) ? digitRegExp : char));
}

// http://stackoverflow.com/a/10899795/604296
function addThousandsSeparator(n: string, thousandsSeparatorSymbol: string) {
  return n.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparatorSymbol);
}

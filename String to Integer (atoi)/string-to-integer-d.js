/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = str => {
  str = str.trim();
  if (!str) {
    return 0;
  }
  const parseDigit = s => {
    if (s === '0') {
      return 0;
    }
    if (s === '1') {
      return 1;
    }
    if (s === '2') {
      return 2;
    }
    if (s === '3') {
      return 3;
    }
    if (s === '4') {
      return 4;
    }
    if (s === '5') {
      return 5;
    }
    if (s === '6') {
      return 6;
    }
    if (s === '7') {
      return 7;
    }
    if (s === '8') {
      return 8;
    }
    if (s === '9') {
      return 9;
    }
    return -1;
  }
  let sign = str[0] === '-' ? -1 : 1;
  if (str[0] === '-' || str[0] === '+') {
    str = str.slice(1);
  }
  let length = str.length;
  let result = 0;
  for (let i = 0; i < length; ++i) {
    const digit = parseDigit(str[i])
    if (digit >= 0) {
      result = result * 10 + digit;
    } else {
      break;
    }
  }
  result = result * sign;
  if (sign === -1 && result < -0x80000000) {
    return -0x80000000;
  }
  if (result > 0x7fffffff) {
    return 0x7fffffff;
  }
  return result;
};
/**
 * 64 ms
 * 36.3 MB
 */

module.exports = myAtoi;
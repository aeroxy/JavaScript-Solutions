/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(dividend, divisor) {
  if (divisor === 0) {
    return Infinity;
  }
  if (dividend === 0) {
    return 0;
  }
  const positive = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0);
  const absDividend = Math.abs(dividend);
  const absDivisor = Math.abs(divisor);
  if (absDivisor === 1) {
    return calcResult(positive, absDividend);
  }
  let sum = absDivisor;
  let count = 0;
  while (sum <= absDividend) {
    sum += absDivisor;
    count++;
  }
  return calcResult(positive, count);
};

function calcResult(positive, result) {
  const maxNum = Math.pow(2, 31) - 1;
  const minNum = -Math.pow(2, 31);
  if (positive) {
    return result > maxNum ? maxNum : result;
  } else {
    result = -result;
    return result < minNum ? minNum : result;
  }
}

module.exports = divide;
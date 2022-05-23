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
  let sum = absDivisor;
  let count = 0;
  while (sum <= absDividend) {
    sum += absDivisor;
    count++;
  }
  return positive ? count : -count;
};

module.exports = divide;
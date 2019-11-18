/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  let rev = 0;
  while (x !== 0) {
    const pop = x % 10;
    rev = rev * 10 + pop;
    if (rev >= 2147483648) {
      return 0;
    }
    if (rev < -2147483648) {
      return 0;
    }
    x = parseInt(x.toString().slice(0, -1));
    x = isNaN(x) ? 0 : x;
  }
  return rev;
};
/**
 * 92 ms
 * 36 MB
 */

module.exports = reverse;
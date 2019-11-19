/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  x = x.toString();
  let rev = 0;
  while (x && x !== '-') {
    const remainder = x % 10;
    rev = rev * 10 + remainder;
    if (rev >= 0x80000000 || rev < -0x80000000) {
      return 0;
    }
    x = x.slice(0, -1);
  }
  return rev;
};
/**
 * 72 ms
 * 35.9 MB
 */

module.exports = reverse;
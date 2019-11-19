/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  let rev = 0;
  while (x) {
    rev = rev * 10 + x % 10;
    if (rev >= 0x80000000 || rev < -0x80000000) return 0;
    x = (x / 10) << 0;
  }
  return rev;
};
/**
 * 76 ms
 * 35.7 MB
 */

module.exports = reverse;
/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  let rev = 0;
  let sign = Math.sign(x);
  x = Math.abs(x);
  while (x) {
    let remainder = x % 10;
    rev = rev * 10 + remainder;
    x = Math.floor(x / 10);
  }
  rev *= sign;
  return (rev < 0x80000000 && rev >= -0x80000000) ? rev : 0;
};
/**
 * 76 ms
 * 35.6 MB
 */

module.exports = reverse;
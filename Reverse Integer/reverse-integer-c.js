/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  const sign = Math.sign(x);
  let rev =  parseInt(Math.abs(x).toString().split('').reverse().join(''));
  if (sign === -1) {
    rev *= -1;
    return rev >= -0x80000000 ? rev : 0;
  } else {
    return rev < 0x80000000 ? rev : 0;
  }
};
/**
 * 80 ms
 * 35.9 MB
 */

module.exports = reverse;
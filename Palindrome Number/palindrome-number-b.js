/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  if (x === 0) {
    return true;
  }
  if (x < 0 || x % 10 === 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  let rev = 0;
  while (x > rev) {
    rev = rev * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return x === rev || x === Math.floor(rev / 10);
};
/**
 * 176 ms
 * 44.7 MB
 */

module.exports = isPalindrome;
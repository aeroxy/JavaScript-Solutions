/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  x = x.toString();
  const length = x.length;
  for (let i = 0, j = length - 1; i < length >> 1; ++i) {
    if (x[i] === x[j]) {
      --j;
    } else {
      return false;
    }
  }
  return true;
};
/**
 * 176 ms
 * 46 MB
 */

module.exports = isPalindrome;
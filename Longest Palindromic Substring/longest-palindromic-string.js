/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  if (s.length === 2) {
    if (s[0] === s[1]) {
      return s;
    } else {
      return s[0];
    }
  } else if (s.length === 1) {
    return s;
  }
  let result = '';
  const center = s.length >> 1;
  for (let i = 0; (i < center) && (result.length + i * 2 <= s.length); ++i) {
    for (let a = -1; a < 2; a += 2) {
      for (let j = 0; j < 2; ++j) {
        let left = center + (a * i);
        let right = center + (a * i) + (a * j);
        while (s[left] && s[left] === s[right]) {
          --left;
          ++right;
        }
        if ((right - left - 1) > result.length) {
          result = s.substring(left + 1, right);
        }
      }
    }
  }
  return result;
};
/**
 * 68 ms
 * 35.6 MB
 */

module.exports = longestPalindrome
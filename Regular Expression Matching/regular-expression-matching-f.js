/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  const memo = [];
  const dp = (i, j) => {
    if (!memo[i] || !memo[i][j]) {

    }
  }
  memo[0] = s.length + 1;
  memo[1] = p.length + 1;
  return dp(0, 0, s, p);
};
/**
 * 116 ms
 * 37.4 MB
 */

module.exports = isMatch;
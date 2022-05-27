/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  let left = 0;
  let right = s.length - 1;
  while (s[left] !== '(' && left < right) {
    left++;
  }
  if (left === right) {
    return 0;
  }
  while (s[right] !== ')' && left < right) {
    right--;
  }
  if (s[right] !== ')') {
    return 0;
  }
  let maxlen = 0;
  const dp = new Array(s.length).fill(0);
  for (let i = left + 1; i <= right; i++) {
    if (s.charAt(i) === ')') {
      if (s.charAt(i - 1) === '(') {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else if (i - dp[i - 1] > 0 && s.charAt(i - dp[i - 1] - 1) === '(') {
        dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
      }
      maxlen = Math.max(maxlen, dp[i]);
    }
  }
  return maxlen;
}

module.exports = longestValidParentheses;
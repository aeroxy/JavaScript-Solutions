/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = Array.from(
    { length: s.length + 1 },
    () => false,
  );
  dp[s.length] = true;

  for (let i = s.length - 1; i >= 0; --i) {
    for (let word of wordDict) {
      if (s.slice(i).startsWith(word)) {
        dp[i] = dp[i + word.length];
      }
      if (dp[i]) {
        break;
      }
    }
  }

  return dp[0];
};

module.exports = wordBreak;
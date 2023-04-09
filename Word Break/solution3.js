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
  dp[0] = true;

  for (let i = 1; i <= s.length; ++i) {
    for (let j = 0; j < i; ++j) {
      const word = s.slice(j, i);
      if (wordDict.includes(word) && dp[j]) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};

module.exports = wordBreak;
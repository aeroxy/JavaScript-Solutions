/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const failedStarts = {};
  const dp = (start) => {
    if (start === s.length) {
      return true;
    }
    if (failedStarts[start]) {
      return false;
    }
    for (let i = start; i < s.length; ++i) {
      const string = s.slice(start, i + 1);
      if (wordDict.includes(string) && dp(i + 1)) {
        return true;
      }
    }
    failedStarts[start] = true;
    return false;
  };
  return dp(0);
};

module.exports = wordBreak;
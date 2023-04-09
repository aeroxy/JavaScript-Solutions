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
    const res = [];
    for (let word of wordDict) {
      const end = start + word.length;
      if (s.slice(start, end) === word) {
        res.push( dp(end) );
      }
    }
    if (!res.filter(Boolean).length) {
      failedStarts[start] = true;
      return false;
    } else {
      return true;
    }
  };
  return dp(0);
};

module.exports = wordBreak;
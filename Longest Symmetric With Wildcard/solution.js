/**
 * @param {string} S
 * @return {number}
 */
function solution(S) {
  const results = new Set();

  const backtrack = (i, openLeft = 0, curLen = 0, overRide = '') => {
    for (let j = i; j < S.length; ++j) {
      if (overRide === '<' || S[j] === '<') {
        ++openLeft;
      }
      if ((overRide === '>' || S[j] === '>') && openLeft) {
        --openLeft;
        curLen += 2;
        if (!openLeft) {
          results.add(curLen);
          curLen = 0;
        }
      }

      if (!overRide && S[j] === '?') {
        backtrack(j, openLeft, curLen, '>');
        backtrack(j, openLeft, curLen, '<');
      }

      overRide = '';
    }
    results.add(curLen);
  };

  backtrack(0);

  return Math.max(...results);
}

module.exports = solution;
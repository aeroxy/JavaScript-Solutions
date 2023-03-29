/**
 * @param {string} S
 * @return {number}
 */
function solution(S) {
  S = S.split('');
  const results = new Set();

  const backtrack = (i, openLeft = 0, curLen = 0) => {
    for (let j = i; j < S.length; ++j) {
      if (S[j] === '<') {
        ++openLeft;
      }
      if (S[j] === '>' && openLeft) {
        --openLeft;
        curLen += 2;
        if (!openLeft) {
          results.add(curLen);
          curLen = 0;
        }
      }

      if (S[j] === '?') {
        S[j] = '>';
        backtrack(j, openLeft, curLen);
        S[j] = '<';
        backtrack(j, openLeft, curLen);
        S[j] = '?';
      }
    }
    results.add(curLen);
  };

  backtrack(0);

  return Math.max(...results);
}

module.exports = solution;
/**
 * @param {string} S
 * @return {number}
 */
function solution(S) {
  if (S.length < 2) {
    return 0;
  }

  const results = new Set();

  let i = 0;
  let j = 1;

  while (j < S.length) {
    let x = i;
    let y = j;
    let curLen = 0;
    while (true) {
      if (
        S[x] === '>' || S[y] === '<' ||
        S[x] === undefined || S[y] === undefined
      ) {
        results.add(curLen);
        curLen = 0
        break;
      }
      curLen += 2;
      --x;
      ++y;
    }
    ++i;
    ++j;
  }

  return Math.max(...results);
}

module.exports = solution;
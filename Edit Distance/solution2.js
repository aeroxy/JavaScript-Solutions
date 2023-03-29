/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
  const reduce = (index1, index2, memo = {}) => {
    if (index1 < 0) {
      return index2;
    }
    if (index2 < 0) {
      return index1;
    }
    const memoKey = `${index1},${index2}`;
    if (memo[memoKey]) {
      return memo[memoKey];
    }
    if (word1[index1] === word2[index2]) {
      memo[memoKey] = reduce(index1 - 1, index2 - 1, memo);
      return memo[memoKey];
    }
    const insertOps = reduce(index1, index2 - 1, memo);
    const deleteOps = reduce(index1 - 1, index2, memo);
    const replaceOps = reduce(index1 - 1, index2 - 1, memo);
    memo[memoKey] = Math.min(insertOps, deleteOps, replaceOps) + 1;
    return memo[memoKey];
  }
  
  return reduce(word1.length - 1, word2.length - 1) + 1;
}

module.exports = minDistance;
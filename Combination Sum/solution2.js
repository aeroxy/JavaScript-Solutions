/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  candidates = candidates.sort((a, b) => a - b);
  const result = [];
  /**
   * @param {number} index
   * @param {number[]} numbers
   * @param {number} sum
   * @return {void}
   */
  const backtrack = (index, numbers, sum) => {
    if (sum === target) {
      result.push([...numbers]);
      return;
    }

    for (let i = index; i < candidates.length; ++i) {
      const cur = candidates[i];
      const newSum = sum + cur;
      if (newSum > target) {
        break;
      }
      backtrack(i, [...numbers, cur], newSum);
    }
  }

  backtrack(0, [], 0);

  return result;
};

module.exports = combinationSum;

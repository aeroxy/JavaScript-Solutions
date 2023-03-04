/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  candidates = candidates.sort((a, b) => a - b).filter(d => d <= target);
  const result = [];
  /**
   * @param {number} index
   * @param {number[]} numbers
   * @param {number} sum
   * @return {void}
   */
  const backtrack = (index, numbers, sum) => {
    for (let i = index; i < candidates.length; ++i) {
      const curNum = candidates[i];
      const newSum = sum + curNum;

      if (newSum === target) {
        result.push([...numbers, curNum]);
        break;
      }

      if (newSum > target) {
        break;
      }

      if (i > index && curNum === candidates[i - 1]) {
        continue;
      }

      backtrack(i + 1, [...numbers, curNum], newSum);
    }
  }

  backtrack(0, [], 0);
  return result;
};

module.exports = combinationSum2;

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  candidates = candidates.sort((a, b) => a - b);
  const resultMap = {};
  const result = [];
  /**
   * @param {number} index
   * @param {number[]} numbers
   * @param {number} sum
   * @return {void}
   */
  const backtrack = (index, numbers, sum) => {
    if (index >= candidates.length) {
      return;
    }

    const cur = candidates[index];
    if (cur > target) {
      return;
    }

    const newSum = sum + cur;
    if (newSum === target) {
      numbers.push(cur);
      const numString = numbers.join(',');
      if (!resultMap[numString]) {
        resultMap[numString] = true;
        result.push(numbers);
      }
      return;
    }

    if (newSum > target) {
      if (!numbers.length) {
        return;
      }
      const lastNum = numbers.pop();
      if (cur === lastNum) {
        backtrack(index + 1, [...numbers], sum - lastNum);
      } else {
        backtrack(index, [...numbers], sum - lastNum);
      }
      return;
    }

    backtrack(index, [...numbers, cur], newSum);
    backtrack(index + 1, [...numbers], sum);
  }
  backtrack(0, [], 0);

  return result;
};

module.exports = combinationSum;

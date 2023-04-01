/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const n = nums.length;
  const result = [];
  const numSubsets = Math.pow(2, n);

  for (let i = 0; i < numSubsets; ++i) {
    const subset = [];
    for (let j = 0; j < n; ++j) {
      if ((i & (1 << j)) !== 0) {
        subset.push(nums[j]);
      }
    }
    result.push(subset);
  }
  return result;
}

module.exports = subsets;
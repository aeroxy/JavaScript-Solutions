/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const result = [];
  
  function generateSubset(start, subset) {
    result.push(subset);
    for (let i = start; i < nums.length; ++i) {
      generateSubset(i + 1, subset.concat(nums[i]));
    }
  }
  
  generateSubset(0, []);
  return result;
}

module.exports = subsets;
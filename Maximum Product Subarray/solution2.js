/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let min = max = result = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    const num = nums[i];
    const a = min * num;
    const b = max * num;
    min = Math.min(num, a, b);
    max = Math.max(num, a, b);
    result = Math.max(result, max);
  };
  return result;
};

module.exports = maxProduct;
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let result = [0, 0];
  for (let i = nums.length - 3; i >= 0; --i) {
    const k = i % 2;
    result[k] = Math.max(nums[i + 2] ?? 0, result[k]);
    nums[i] += Math.max(...result);
  }
  return Math.max(...nums.splice(0, 2));
};

module.exports = rob;
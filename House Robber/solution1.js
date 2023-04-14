/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  for (let i = nums.length - 3; i >= 0; --i) {
    nums[i] += Math.max(...nums.slice(i + 2));
  }
  return Math.max(...nums.splice(0, 2));
};

module.exports = rob;
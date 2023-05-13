/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let idx = 0;
  let end = nums.length - 1;

  while (idx < end) {
    if (nums[idx] === 0) {
      nums.splice(idx, 1);
      nums.push(0);
      --end;
    } else {
      ++idx;
    }
  }
};

module.exports = moveZeroes;

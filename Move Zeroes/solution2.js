/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const swap = (x, y) => {
    let tmp = nums[x];
    nums[x] = nums[y];
    nums[y] = tmp;
  };
  let j = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      ++j;
    } else {
      swap(i - j, i);
    }
  }
};

module.exports = moveZeroes;

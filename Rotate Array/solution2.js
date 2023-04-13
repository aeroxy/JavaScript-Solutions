/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const n = nums.length - 1;
  k %= nums.length;

  const reverse = (start, end) => {
    let tmp;
    while (start < end) {
      tmp = nums[start];
      nums[start] = nums[end];
      nums[end] = tmp;
      ++start;
      --end;
    }
  };

  reverse(0, n);
  reverse(0, k - 1);
  reverse(k, n);
};

module.exports = rotate;
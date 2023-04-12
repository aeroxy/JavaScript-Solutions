/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const n = nums.length - 1;
  if (nums[0] > nums[n]) {
    let last = nums[n];
    for (let i = n - 1; i >= 0; --i) {
      const num = nums[i];
      if (num > last) {
        return last;
      } else {
        last = num;
      }
    }
    return nums[n];
  } else {
    let last = nums[0];
    for (let num of nums) {
      if (num >= last) {
        last = num;
      } else {
        return num;
      }
    }
    return nums[0];
  }
};

module.exports = findMin;
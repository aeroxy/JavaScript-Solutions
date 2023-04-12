/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] < nums[end]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return nums[start];
};

module.exports = findMin;
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let last = -Infinity;
  for (let num of nums) {
    if (num > last) {
      last = num;
    } else {
      return num;
    }
  }
  return nums[0];
};

module.exports = findMin;
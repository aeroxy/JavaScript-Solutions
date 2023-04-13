/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 0;
  let result = null;
  for (let num of nums) {
    if (!count) {
      result = num;
    }
    count += result === num ? 1 : -1;
  }
  return result;
};

module.exports = majorityElement;
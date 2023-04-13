/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const hashSet = [];
  const n = nums.length / 2;
  for (let num of nums) {
    hashSet[num] = (hashSet[num] ?? 0) + 1;
    if (hashSet[num] > n) {
      return num;
    }
  }
};

module.exports = majorityElement;
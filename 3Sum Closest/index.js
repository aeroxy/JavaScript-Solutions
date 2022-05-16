/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosestNestedLoops = function(nums, target) {
  let sum = Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const result = nums[i] + nums[j] + nums[k];
        if (Math.abs(result - target) < Math.abs(sum - target)) {
          sum = result;
        }
      }
    }
  }
  return sum;
};

const threeSumClosestTwoPointers = function(nums, target) {
  nums.sort((a, b) => a - b);
  let sum = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let pointer1 = i + 1;
    let pointer2 = nums.length - 1;
    while (pointer1 < pointer2) {
      const result = nums[i] + nums[pointer1] + nums[pointer2];
      if (Math.abs(result - target) < Math.abs(sum - target)) {
        sum = result;
      }
      if (result < target) {
        pointer1++;
      } else {
        pointer2--;
      }
    }
  }
  return sum;
};

module.exports = threeSumClosestTwoPointers;
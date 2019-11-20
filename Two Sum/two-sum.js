/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const comp = {}
  for (let idx = 0; idx < nums.length; ++idx) {
    if (comp[nums[idx]] >= 0) {
      return [ comp[nums[idx]], idx]
    }
    comp[target - nums[idx]] = idx
  }
}
/**
 * 42 ms
 * 34.7 MB
 */

module.exports = twoSum;
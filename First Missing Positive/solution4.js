/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive (nums) {
  nums = nums.filter(num => num > 0);

  nums.forEach((num) => {
    const origNum = Math.abs(num);
    if (origNum <= nums.length && nums[origNum - 1] > 0) {
      nums[origNum - 1] *= -1;
    }
  });

  const maxInt = nums.length + 1;

  for (let i = 0; i < maxInt; ++i) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return maxInt;
}

module.exports = firstMissingPositive;
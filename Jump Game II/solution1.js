/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  if (nums.length === 1) {
    return 0;
  }
  
  const jumps = new Set();
  const target = nums.length - 1;

  const backtrack = (index, steps, times) => {
    for (let i = steps; i > 0; --i) {
      const j = index + i;
      if (j === target) {
        jumps.add(times);
      }
      if (j > target) {
        continue;
      }
      if (j < target) {
        backtrack(j, nums[j], times + 1);
      }
    }
  }

  backtrack(0, nums[0], 1);

  return Math.min(...jumps);
}

module.exports = jump;
/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  if (nums.length === 1) {
    return 0;
  }
  
  let jumps = 1; // start with 1 jump
  let currMax = nums[0]; // maximum index that can be reached with current number of jumps
  let nextMax = nums[0]; // maximum index that can be reached by taking an extra jump

  for (let i = 1; i < nums.length; i++) {
    if (i > currMax) { // need an extra jump to reach this index
      jumps++;
      currMax = nextMax;
    }
    nextMax = Math.max(nextMax, i + nums[i]);
  }

  return jumps;
}

module.exports = jump;
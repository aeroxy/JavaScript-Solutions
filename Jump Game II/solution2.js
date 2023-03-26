/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  let n = nums.length - 1;
  let res = 0;
  let l = r = 0;
  while (r < n) {
    let maxReach = 0;
    for (let i = l; i <= r; ++i) {
      maxReach = Math.max(maxReach, i + nums[i]);
    }
    l = r + 1;
    r = maxReach;
    ++res;
  }
  return res;
}

module.exports = jump;
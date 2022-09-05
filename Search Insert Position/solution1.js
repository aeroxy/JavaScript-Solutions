/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let i = 0;
  const j = nums.length;
  if (target <= nums[i]) {
    return i;
  }
  if (target === nums[j - 1]) {
    return j - 1;
  }
  if (target > nums[j - 1]) {
    return j;
  }
  while (i < j) {
    const thisNum = nums[i];
    if (thisNum >= target) {
      return i;
    } else {
      ++i;
    }
  }
};

module.exports = searchInsert;

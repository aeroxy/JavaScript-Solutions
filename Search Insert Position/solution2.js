/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let i = 0;
  let j = nums.length - 1;
  if (target <= nums[i]) {
    return i;
  }
  if (target === nums[j]) {
    return j;
  }
  if (target > nums[j]) {
    return j + 1;
  }
  while (i <= j) {
    const middle = Math.floor((i + j) / 2);
    const thisNum = nums[middle];
    if (thisNum === target) {
      return middle;
    } else if (thisNum > target) {
      if (nums[middle - 1] < target) {
        return middle;
      }
      j = middle;
    } else {
      const newStart = middle + 1;
      if (nums[newStart] > target) {
        return newStart;
      }
      i = newStart;
    }
  }
};

module.exports = searchInsert;

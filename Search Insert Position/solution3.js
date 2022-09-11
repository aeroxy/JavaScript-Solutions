/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    const middle = Math.floor((i + j) / 2);
    const thisNum = nums[middle];
    if (thisNum === target) {
      return middle;
    } else if (thisNum < target) {
      i = middle + 1;
    } else {
      j = middle;
    }
  }
  if (nums[i] < target) {
    return i + 1;
  } else {
    return i;
  }
};

module.exports = searchInsert;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  let i = 0;
  let j = nums.length - 1;
  let start = -1;
  let end = -1;
  while (i <= j) {
    const middle = Math.floor((i + j) / 2);
    const thisNum = nums[middle];
    if (thisNum === target) {
      start = end = middle;
      while (nums[start - 1] === target) {
        --start;
      }
      while (nums[end + 1] === target) {
        ++end;
      }
      break;
    } else if (thisNum > target) {
      j = middle - 1;
    } else {
      i = middle + 1;
    }
  }
  return [start, end];
};

module.exports = searchRange;

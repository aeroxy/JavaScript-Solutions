/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInRotatedSortedArray(nums, target) {
  const length = nums.length;
  let index = 0;
  let lastNum = -Infinity;
  let rotated = false;
  while (index < length) {
    const thisNum = nums[index];
    if (thisNum === target) {
      return index;
    }
    if (rotated) {
      if (thisNum > target) {
        return -1;
      }
    } else {
      if (thisNum < lastNum) {
        rotated = true;
      } else {
        lastNum = thisNum;
      }
    }
    ++index;
  }
  return -1;
}

module.exports = searchInRotatedSortedArray;
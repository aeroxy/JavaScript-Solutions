/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  const length = nums.length;
  let index = 0;
  let start = -1;
  let end = -1;
  if (length && nums[index] <= target) {
    index = nums.indexOf(target);
    if (index !== -1) {
      start = index;
      end = index;
      ++index;
      while (index < length) {
        const thisNum = nums[index];
        if (target === thisNum) {
          end = index;
        } else if (target < thisNum) {
          break;
        }
        ++index;
      }
    }
  }
  return [start, end];
};

module.exports = searchRange;

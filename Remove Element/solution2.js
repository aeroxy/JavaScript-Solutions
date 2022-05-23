/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  const length = nums.length;
  let pointer = 0;
  for (let index = 0; index < length; index++) {
    if (nums[index] !== val) {
      nums[pointer] = nums[index];
      pointer++;
    }
  }
  return pointer;
};

module.exports = removeElement;
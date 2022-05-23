/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  const filteredNums = nums.filter((num) => num !== val);
  const size = filteredNums.length;
  filteredNums.forEach((value, index) => {
    nums[index] = value;
  });
  return size;
};

module.exports = removeElement;
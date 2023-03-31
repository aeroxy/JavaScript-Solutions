/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  const counts = Array.from({ length: 3 }, () => 0);
  let index = 0;
  for (const num of nums) {
    ++counts[num];
  }
  for (let i = 0; i < nums.length; ++i) {
    if (counts[index]) {
      nums[i] = index;
      --counts[index];
    } else {
      ++index;
      --i;
    }
  }
}

module.exports = sortColors;
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
  const result = [];
  const length = nums.length;
  // [-1, 0, 1, 2, -1, -4]
  for (let idx = 0; idx < length; ++idx) {
    const target = nums[idx];
    const comp = {}
    for (let i = 0; i < idx; ++i) {
      let num = nums[i];
      if (comp[num] !== undefined) {
        result.push([ nums[comp[num]], num, target ]);
        break;
      }
      comp[-1 * (target - num)] = i;
    }
    for (let i = idx + 1; i < length; ++i) {
      let num = nums[i];
      if (comp[num] !== undefined) {
        result.push([ target, nums[comp[num]], num ]);
        break;
      }
      comp[-1 * (target - num)] = i;
    }
  }
  return result;
};

module.exports = threeSum;
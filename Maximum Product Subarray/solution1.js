/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let min = [];
  let max = [];
  nums.forEach((num, i) => {
    if (i === 0) {
      min[i] = num;
      max[i] = num;
    } else {
      const a = min[i - 1] * num;
      const b = max[i - 1] * num;
      min[i] = Math.min(num, a, b);
      max[i] = Math.max(num, a, b);
    }
  });
  return Math.max(...max);
};

module.exports = maxProduct;
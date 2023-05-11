/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  return nums.reduce((acc, _, idx) => {
    acc[idx] = nums.reduce((a, c, i) => {
      if (i === idx) {
        return a;
      }
      return a * c;
    }, 1);
    return acc;
  }, []);
};

module.exports = productExceptSelf;

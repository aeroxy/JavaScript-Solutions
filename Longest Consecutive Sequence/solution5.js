/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  nums = nums.sort((a, b) => (a - b));

  let result = 0;
  let length = 0;
  let last = -Infinity;

  for (let num of nums) {
    if (num === last + 1) {
      ++length;
    } else if (num === last) {
      // pass
    } else {
      result = Math.max(result, length);
      length = 1;
    }
    last = num;
  }

  result = Math.max(result, length);

  return result;
};

module.exports = longestConsecutive;
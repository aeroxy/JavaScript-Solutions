/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const hashSet = new Set(nums);
  let result = 0;

  for (let num of nums) {
    if (!hashSet.has(num + 1)) {
      let length = 0;
      while (hashSet.has(num)) {
        ++length;
        --num;
      }
      result = Math.max(result, length);
    }
  }

  return result;
};

module.exports = longestConsecutive;
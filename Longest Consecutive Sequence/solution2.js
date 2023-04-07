/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const hashMap = {};
  let result = 0;
  for (let num of nums) {
    if (hashMap[num]) {
      continue;
    }
    const left = hashMap[num - 1] || 0;
    const right = hashMap[num + 1] || 0;
    const length = left + right + 1;
    result = Math.max(result, length);
    hashMap[num] = length;
    hashMap[num - left] = length;
    hashMap[num + right] = length;
  }
  return result;
};

module.exports = longestConsecutive;
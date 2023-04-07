/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const hashSet = new Set(nums);
  let result = 0;

  for (let num of nums) {
    if (!hashSet.has(num)) {
      continue;
    }

    hashSet.delete(num);

    let length = 1;
    let left = num - 1;
    let right = num + 1;

    while (hashSet.has(left)) {
      hashSet.delete(left);
      ++length;
      --left;
    }

    while (hashSet.has(right)) {
      hashSet.delete(right);
      ++length;
      ++right;
    }

    result = Math.max(result, length);
  }

  return result;
};

module.exports = longestConsecutive;
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const hashSet = new Set();
  for (let num of nums) {
    if (hashSet.has(num)) {
      hashSet.delete(num);
    } else {
      hashSet.add(num);
    }
  }
  return hashSet.values().next().value;
};

module.exports = singleNumber;
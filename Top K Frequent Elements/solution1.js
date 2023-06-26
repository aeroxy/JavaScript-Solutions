/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const store = {};
  for (let num of nums) {
    store[num] = (store[num] ?? 0) + 1;
  }
  return Object.entries(store).sort((a, b) => b[1] - a[1]).slice(0, k).map(entry => parseInt(entry[0]));
};

module.exports = topKFrequent;

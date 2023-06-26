/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const store = new Map;
  for (let num of nums) {
    store.has(num) ? store.set(num, store.get(num) + 1) : store.set(num, 1);
  }
  return Array.from(store).sort((a, b) => b[1] - a[1]).slice(0, k).map(entry => entry[0]);
};

module.exports = topKFrequent;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  const posBucket = [];
  const negBucket = [];
  for (let num of nums) {
    if (num >= 0) {
      posBucket[num] = (posBucket[num] ?? 0) + 1;
    } else {
      negBucket[-num] = (negBucket[-num] ?? 0) + 1;
    }
  }
  for (let i = posBucket.length - 1; i >= 0; --i) {
    k -= posBucket[i] ?? 0;
    if (k <= 0) {
      return i;
    }
  }
  for (let i = 1; i < negBucket.length; ++i) {
    k -= negBucket[i] ?? 0;
    if (k <= 0) {
      return -i;
    }
  }
}

module.exports = findKthLargest;
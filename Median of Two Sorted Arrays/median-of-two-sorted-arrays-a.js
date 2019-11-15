/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (a1, a2) => {
  const a = a1.concat(a2).sort((a, b) => (a - b));
  const median = (a.length - 1) / 2;
  const remainder = median % 1;
  if (remainder) {
    const m1 = median - remainder;
    const m2 = m1 + 1;
    return (a[m1] + a[m2]) / 2;
  } else {
    return a[median];
  }
};
/**
 * 128 ms
 * 39.5 MB
 */


module.exports = findMedianSortedArrays;
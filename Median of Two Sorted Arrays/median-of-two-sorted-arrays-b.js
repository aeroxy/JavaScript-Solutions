/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (a1, a2) => {
  const a = [];
  for (let i = 0; (i < a1.length || i < a2.length); ++i) {
    if (a1[i] === undefined) {
      a.push(a2[i]);
      continue;
    }
    if (a2[i] === undefined) {
      a.push(a1[i]);
      continue;
    }
    if (a1[i] > a2[i]) {
      a.push(a2[i]);
      a1.unshift(undefined);
    } else {
      a.push(a1[i]);
      a2.unshift(undefined);
    }
  }
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
 * 112 ms
 * 40.5 MB
 */

module.exports = findMedianSortedArrays;
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (a1, a2) => {
  const a = [];
  let a1_shift = 0, a2_shift = 0;
  for (let i = 0; (i < a1.length + a1_shift) || (i < a2.length + a2_shift); ++i) {
    const i1 = i - a1_shift;
    const i2 = i - a2_shift;
    if (a1[i1] === undefined) {
      a.push(a2[i2]);
      continue;
    }
    if (a2[i2] === undefined) {
      a.push(a1[i1]);
      continue;
    }
    if (a1[i1] > a2[i2]) {
      a.push(a2[i2]);
      ++a1_shift;
    } else {
      a.push(a1[i1]);
      ++a2_shift;
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
 * 104 ms
 * 39.5 MB
 */

module.exports = findMedianSortedArrays;
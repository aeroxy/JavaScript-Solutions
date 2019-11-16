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
  const m1 = a.length >> 1;
  const m2 = a.length - 1 >> 1;
  if (m1 === m2) {
    return a[m1];
  } else {
    return (a[m1] + a[m2]) / 2;
  }
};
/**
 * 100 ms
 * 39.1 MB
 */

module.exports = findMedianSortedArrays;
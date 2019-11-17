/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (a1, a2) => {
  if (a1.length > a2.length) {
    return findMedianSortedArrays(a2, a1);
  }
  const partitioner = (i1, i2) => {
    const max1 = i1 === 0 ? Number.NEGATIVE_INFINITY : a1[i1 - 1];
    const max2 = i2 === 0 ? Number.NEGATIVE_INFINITY : a2[i2 - 1];
    const min1 = i1 === a1.length ? Number.POSITIVE_INFINITY : a1[i1];
    const min2 = i2 === a2.length ? Number.POSITIVE_INFINITY : a2[i2];

    if (max1 <= min2 && max2 <= min1) {
      if ((a1.length + a2.length) % 2) {
        return Math.max(max1, max2);
      } else {
        return (Math.max(max1, max2) + Math.min(min1, min2)) / 2;
      }
    } else if (max1 < min2) {
      return partitioner(i1 + 1, i2 - 1);
    } else {
      return partitioner(i1 - 1, i2 + 1);
    }
  };
  const i1 = a1.length >> 1;
  const i2 = (a1.length + a2.length + 1 >> 1) - i1;
  return partitioner(i1, i2);
};
/**
 * 128 ms
 * 39.2 MB
 */

module.exports = findMedianSortedArrays;
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
  let result = 0;
  const length = height.length;
  for (let i = 0; i < length; ++i) {
    for (let j = 1; j < length; ++j) {
      if (i >= j) {
        continue;
      }
      const width = Math.abs(j - i);
      const tall = Math.min(height[i], height[j]);
      const volume = width * tall;
      if (volume > result) {
        result = volume;
      }
    }
  }
  return result;
};
/**
 * 1044 ms
 * 35.7 MB
 */

module.exports = maxArea;
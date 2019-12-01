/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
  let result = 0;
  const length = height.length;
  for (let i = 0; i < length; ++i) {
    for (let j = i + 1; j < length; ++j) {
      const width = j - i;
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
 * 720 ms
 * 35.5 MB
 */

module.exports = maxArea;
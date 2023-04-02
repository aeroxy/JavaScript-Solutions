/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  const tmp = [];
  let result = 0;

  for (let i = 0; i < heights.length; ++i) {
    const height = heights[i];
    tmp[i] = [height, height];
    result = Math.max(result, height);
    for (let j = i + 1; j < heights.length; ++j) {
      if (!heights[j]) {
        break;
      }
      const newHeight = Math.min(tmp[i][0], heights[j]);
      const newSize = newHeight * (j - i + 1);
      result = Math.max(result, newSize);
      tmp[i] = [newHeight, newSize];
    }
  }

  return result;
}

module.exports = largestRectangleArea;
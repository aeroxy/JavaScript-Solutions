/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  const stack = [];
  let result = 0;

  const checkLastStack = (i, height, x) => {
    const lastStack = stack[stack.length - 1];
    if (!lastStack) {
      height && stack.push([x ?? i, height]);
      return;
    }
    const [lastIndex, lastHeight] = lastStack;
    const width = i - lastIndex;
    if (lastHeight <= height) {
      stack.push([x ?? i, height]);
      return;
    }
    result = Math.max(result, lastHeight * width);
    stack.pop();
    checkLastStack(i, height, lastIndex);
  }

  for (let i = 0; i < heights.length; ++i) {
    const height = heights[i];
    checkLastStack(i, height);
  }

  stack.forEach(([lastIndex, lastHeight]) => {
    const width = heights.length - lastIndex;
    result = Math.max(result, lastHeight * width);
  });

  return result;
}

module.exports = largestRectangleArea;
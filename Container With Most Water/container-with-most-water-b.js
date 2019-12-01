/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
  let x = height.shift(), y = height.pop(), result = 0, length = height.length + 1;
  while(length !== 0) {
    let volume;
    if (x < y) {
      volume = x * length;
      x = height.shift();
    } else {
      volume = y * length;
      y = height.pop();
    }
    if (volume > result) {
      result = volume;
    }
    --length;
  }
  return result;
};
/**
 * 56 ms
 * 35.5 MB
 */

module.exports = maxArea;
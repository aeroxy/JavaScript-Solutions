/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
  let left = 0;
  let right = matrix.length - 1;
  while (left < right) {
    let top = left;
    let bottom = right;
    for (let i = 0; i < right - left; ++i) {
      const offSetLeft = left + i;
      const offSetRight = right - i;
      const offSetTop = top + i;
      const offSetBottom = bottom - i;
      const topLeft = matrix[top][offSetLeft];
      matrix[top][offSetLeft] = matrix[offSetBottom][left];
      matrix[offSetBottom][left] = matrix[bottom][offSetRight];
      matrix[bottom][offSetRight] = matrix[offSetTop][right];
      matrix[offSetTop][right] = topLeft;
    }
    ++left;
    --right;
  }
}

module.exports = rotate;
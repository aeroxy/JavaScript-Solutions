/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  let targetRow;
  for (let row = 0; row < matrix.length; ++row) {
    if (matrix[row][0] > target) {
      break;
    }
    if (matrix[row][0] === target) {
      return true;
    }
    if (matrix[row][0] < target) {
      targetRow = row;
    }
  }
  if (targetRow === undefined) {
    return false;
  }
  const lastIndex = matrix[targetRow].length - 1;
  if (matrix[targetRow][lastIndex] < target) {
    return false;
  }
  for (let col = 1; col < matrix[targetRow].length; ++col) {
    if (matrix[targetRow][col] === target) {
      return true;
    }
  }
  return false;
}

module.exports = searchMatrix;
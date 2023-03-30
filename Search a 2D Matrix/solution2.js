/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  let targetRow;
  let left = 0;
  let right = matrix.length - 1;
  while (left <= right) {
    const row = Math.floor((left + right) / 2);
    if (matrix[row][0] === target) {
      return true;
    }
    if (matrix[row][0] < target) {
      targetRow = row;
      left = row + 1;
    } else {
      right = row - 1;
    }
  }

  if (targetRow === undefined) {
    return false;
  }

  const lastIndex = matrix[targetRow].length - 1;
  if (matrix[targetRow][lastIndex] < target) {
    return false;
  }

  left = 0;
  right = lastIndex;
  while (left <= right) {
    const col = Math.floor((left + right) / 2);
    if (matrix[targetRow][col] === target) {
      return true;
    }
    if (matrix[targetRow][col] < target) {
      left = col + 1;
    } else {
      right = col - 1;
    }
  }
  return false;
}

module.exports = searchMatrix;
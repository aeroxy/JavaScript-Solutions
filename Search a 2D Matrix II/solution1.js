/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let row = 0;
  let col = matrix[row].length - 1;
  while (matrix[row]?.[col] !== undefined) {
    if (matrix[row][col] === target) {
      return true;
    }
    if (matrix[row][col] > target) {
      --col;
    } else {
      ++row;
    }
  }
  return false;
};

module.exports = searchMatrix;

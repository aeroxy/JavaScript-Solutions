/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  let firstRowHasZero = false;
  let firstColHasZero = false;
  // check if the first row has a zero
  for (let col = 0; col < matrix[0].length; ++col) {
    if (matrix[0][col] === 0) {
      firstRowHasZero = true;
      break;
    }
  }
  // check if the first column has a zero
  for (let row = 0; row < matrix.length; ++row) {
    if (matrix[row][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }
  // check the rest of the matrix and store the zeros in the first row and column
  for (let row = 1; row < matrix.length; ++row) {
    for (let col = 1; col < matrix[0].length; ++col) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }
  // set zeros in the rows and columns other than the first row and column
  for (let row = 1; row < matrix.length; ++row) {
    for (let col = 1; col < matrix[0].length; ++col) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }
  // set zeros in the first row and column, if necessary
  if (firstRowHasZero) {
    for (let col = 0; col < matrix[0].length; ++col) {
      matrix[0][col] = 0;
    }
  }
  if (firstColHasZero) {
    for (let row = 0; row < matrix.length; ++row) {
      matrix[row][0] = 0;
    }
  }
}

module.exports = setZeroes;
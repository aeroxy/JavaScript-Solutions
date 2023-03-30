/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  const emptyRows = new Set();
  const emptyCols = new Set();
  for (let row = 0; row < matrix.length; ++row) {
    for (let col = 0; col < matrix[0].length; ++col) {
      if (matrix[row][col] === 0) {
        emptyRows.add(row);
        emptyCols.add(col);
      }
    }
  }
  emptyRows.forEach((row) => {
    matrix[row] = Array.from({ length: matrix[row].length }, () => 0);
  });
  emptyCols.forEach((col) => {
    for (let row = 0; row < matrix.length; ++row) {
      matrix[row][col] = 0;
    }
  });
}

module.exports = setZeroes;
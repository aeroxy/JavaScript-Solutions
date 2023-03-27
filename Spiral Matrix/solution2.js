/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) { 
  const m = matrix.length;
  const n = matrix[0].length;
  
  let result = [];
  let rowStart = 0;
  let rowEnd = m - 1;
  let colStart = 0;
  let colEnd = n - 1;
  
  while (rowStart <= rowEnd && colStart <= colEnd) {
    // traverse the top row from left to right
    for (let i = colStart; i <= colEnd; i++) {
      result.push(matrix[rowStart][i]);
    }
    rowStart++;
    
    // traverse the right column from top to bottom
    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;
    
    if (rowStart <= rowEnd) {
      // traverse the bottom row from right to left
      for (let i = colEnd; i >= colStart; i--) {
        result.push(matrix[rowEnd][i]);
      }
      rowEnd--;
    }
    
    if (colStart <= colEnd) {
      // traverse the left column from bottom to top
      for (let i = rowEnd; i >= rowStart; i--) {
        result.push(matrix[i][colStart]);
      }
      colStart++;
    }
  }
  
  return result;
}

module.exports = spiralOrder;
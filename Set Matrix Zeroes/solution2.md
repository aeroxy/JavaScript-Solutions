# Intuition
The problem is to modify the matrix in-place such that if any element of the matrix is zero, then make its entire row and column zero.

# Approach
We can solve this problem using the following approach:

1.  We iterate through the matrix and mark the first cell of a row or column with zero, if any element of the row or column is zero.
2.  We iterate through the matrix again and set the cells to zero if their first cell in the row or column is marked as zero.
3.  Finally, if the first row or the first column contains a zero, we set all cells in the first row or the first column to zero.

# Complexity
- Time complexity: $$O(m*n)$$, where m is the number of rows and n is the number of columns in the matrix. We iterate through the entire matrix twice.
- Space complexity: $$O(1)$$, since we are modifying the matrix in-place and using constant extra space.

# Code
```js
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
```
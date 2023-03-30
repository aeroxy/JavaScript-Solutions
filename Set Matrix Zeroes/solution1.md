# Intuition
The problem is to modify the matrix in-place such that if any element of the matrix is zero, then make its entire row and column zero. We can solve this by first iterating through the matrix and storing the row and column numbers where we find a zero. Then we can iterate through those row and column numbers and make all elements zero in those rows and columns.

# Approach
We can solve this problem using the following approach:

1.  Create two sets, `emptyRows` and `emptyCols`, to store the row and column numbers where we find a zero.
2.  Iterate through the matrix and if we find a zero at index (i, j), add i to `emptyRows` and j to `emptyCols`.
3.  Iterate through the set `emptyRows` and for each row i, make all elements in that row zero.
4.  Iterate through the set `emptyCols` and for each column j, make all elements in that column zero.

# Complexity
- Time complexity: $$O(m*n)$$, where m is the number of rows and n is the number of columns in the matrix. We iterate through the entire matrix once to find the zeros, and then we iterate through the set of rows and columns containing zeros to set their elements to zero.
- Space complexity: $$O(m + n)$$, where m is the number of rows and n is the number of columns in the matrix. We store the row and column numbers containing zeros in two sets, each of size at most m and n respectively.

# Code
```js
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
```
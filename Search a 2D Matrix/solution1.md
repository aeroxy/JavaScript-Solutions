# Intuition

The problem is to find if an element exists in the matrix. As the matrix is sorted, we can use this property to find the element efficiently. One way to approach the problem is to find the row in which the element can exist and then check if the element exists in that row. The element can exist in the row only if the first element of the row is less than or equal to the target. Thus, we can iterate over the rows to find the row where the element can exist, and then iterate over that row to find the element.

# Approach

1.  Initialize targetRow as undefined.
2.  Iterate over each row in the matrix:
    *   If the first element of the row is greater than target, break out of the loop.
    *   If the first element of the row is equal to target, return true.
    *   If the first element of the row is less than target, set targetRow to the current row.
3.  If targetRow is undefined, return false.
4.  Iterate over each element in the targetRow:
    *   If the element is equal to target, return true.
5.  If the element is not found, return false.

# Complexity

- Time complexity: $$O(m+n)$$, where m is the number of rows in the matrix and n is the number of columns in the matrix. We iterate over the rows first and then iterate over the columns in the target row.
- Space complexity: $$O(1)$$. We are not using any extra space.

# Code
```js
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
```
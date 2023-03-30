# Intuition

The problem is to search for a target element in a matrix. As the matrix is sorted, we can use binary search to efficiently search for the element. We can perform binary search on the rows of the matrix to find the row where the target element may exist, and then perform binary search on that row to find the target element.

# Approach

1.  Initialize targetRow as undefined.
2.  Perform binary search on the rows of the matrix:
    *   If the first element of the row is equal to target, return true.
    *   If the first element of the row is less than target, set targetRow to the current row and search the right half of the rows.
    *   If the first element of the row is greater than target, search the left half of the rows.
3.  If targetRow is undefined, return false.
4.  Perform binary search on the targetRow:
    *   If the current element is equal to target, return true.
    *   If the current element is less than target, search the right half of the row.
    *   If the current element is greater than target, search the left half of the row.
5.  If the target element is not found, return false.

# Complexity

*   Time complexity: $$O(log(m)+log(n))$$, where m is the number of rows and n is the number of columns in the matrix. We perform binary search on the rows and columns of the matrix.
*   Space complexity: $$O(1)$$. We are not using any extra space.

# Code
```js
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
```
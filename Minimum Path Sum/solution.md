# Intuition
The problem can be solved using dynamic programming, where the minimum path sum to a cell is the sum of the current cell and the minimum of the right or bottom cell. We can start at the bottom right corner and work our way up to the top left corner, updating the minimum path sum of each cell as we go.

# Approach
- Initialize endRow and endCol to the last row and column respectively.
- Traverse the grid from bottom right to top left.
- For each cell, calculate the minimum path sum by adding the current cell value to the minimum of the right or bottom cell.
- Update the current cell value with the minimum path sum.
- Return the value at the top left corner.

# Complexity
- Time complexity: $$O(m*n)$$, where m is the number of rows and n is the number of columns in the grid. We need to visit each cell exactly once.
- Space complexity: $$O(1)$$, we are modifying the input grid in place.

# Code
```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  const endRow = grid.length - 1;
  const endCol = grid[0].length - 1;

  for (let row = endRow; row >= 0; --row) {
    for (let col = endCol; col >= 0; --col) {
      if (row === endRow && col === endCol) {
        continue;
      }
      const rightVal = grid[row][col + 1] ?? Infinity;
      const bottomVal = grid[row + 1]?.[col] ?? Infinity;
      grid[row][col] += Math.min(rightVal, bottomVal);
    }
  }

  return grid[0][0];
}
```
# Intuition
Given a 2D grid map of '1's (land) and '0's (water), the problem asks to count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. The first approach that comes to mind is using Depth-First Search (DFS) to traverse the grid and find connected components of land. We can achieve this by iterating through each cell in the grid, and if it's a '1', we can perform DFS traversal and increment the islands counter.

# Approach
1.  Initialize the island counter `result` to 0.
2.  Create a helper function `reduceLand` that takes the current row and column as arguments. This function performs a DFS traversal and sets the visited land cells to '0' to mark them as visited.
3.  Iterate through the grid using nested loops (for rows and columns). If the current cell is a '1', increment the `result` counter and call the `reduceLand` function with the current row and column.
4.  Return the `result` as the number of islands.

# Complexity
- Time complexity: $$O(m×n)$$, where m is the number of rows and n is the number of columns in the grid. In the worst case, we have to visit every cell in the grid.
- Space complexity: $$O(m×n)$$, in the worst case, the DFS traversal could end up being as deep as the number of cells in the grid, making the space complexity equal to the size of the grid.

# Code
```js
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let result = 0;
  const reduceLand = (row, col) => {
    if (grid[row]?.[col] === '1') {
      grid[row][col] = '0';
      reduceLand(row - 1, col);
      reduceLand(row + 1, col);
      reduceLand(row, col - 1);
      reduceLand(row, col + 1);
    }
  };
  for (let row = 0; row < grid.length; ++row) {
    for (let col = 0; col < grid[row].length; ++col) {
      if (grid[row][col] === '1') {
        ++result;
        reduceLand(row, col);
      }
    }
  }
  return result;
};
```
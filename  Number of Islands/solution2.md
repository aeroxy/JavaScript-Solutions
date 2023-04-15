# Intuition
The given problem involves counting the number of islands in a 2D grid containing '1's (land) and '0's (water). An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. We can solve this problem by using Breadth-First Search (BFS) to traverse the grid and find connected components of land.

# Approach
1.  Initialize the island counter `result` to 0.
2.  Define the possible directions as an array `directions`.
3.  Create a BFS function `bfs` that takes the current row and column as arguments. This function performs a BFS traversal, with the help of a queue, and sets the visited land cells to '0' to mark them as visited.
4.  Iterate through the grid using nested loops (for rows and columns). If the current cell is a '1', increment the `result` counter and call the `bfs` function with the current row and column.
5.  Return the `result` as the number of islands.

# Complexity
- Time complexity: $$O(m×n)$$ where m is the number of rows and n is the number of columns in the grid. In the worst case, we have to visit every cell in the grid.
- Space complexity: $$O(min(m,n))$$, as the maximum size of the queue can be min(m, n) when the grid is filled diagonally with '1's.

# Code
```js
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let result = 0;
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const queue = [];

  const bfs = (row, col) => {
    queue.push([row, col]);
    grid[row][col] = '0';
    while (queue.length) {
      const [r, c] = queue.shift();
      for (let [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        if (grid[nr]?.[nc] === '1') {
          queue.push([nr, nc]);
          grid[nr][nc] = '0';
        }
      }
    }
  };

  for (let row = 0; row < grid.length; ++row) {
    for (let col = 0; col < grid[row].length; ++col) {
      if (grid[row][col] === '1') {
        ++result;
        bfs(row, col);
      }
    }
  }

  return result;
};
```
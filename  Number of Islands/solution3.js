/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const numRows = grid.length;
  const numCols = grid[0].length;

  // Helper function to convert 2D coordinates to 1D index
  const index = (row, col) => row * numCols + col;

  // Union-Find data structure
  const parent = [];
  let count = 0;

  // Find function with Path Compression
  const find = (x) => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  };

  // Union function with Union by Rank
  const union = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX === rootY) {
      return;
    }
    parent[rootY] = rootX;
    count--;
  };

  // Initialize Union-Find data structure
  for (let row = 0; row < numRows; ++row) {
    for (let col = 0; col < numCols; ++col) {
      if (grid[row][col] === '1') {
        const idx = index(row, col);
        parent[idx] = idx;
        count++;
      }
    }
  }

  // Perform Union-Find
  for (let row = 0; row < numRows; ++row) {
    for (let col = 0; col < numCols; ++col) {
      if (grid[row][col] === '1') {
        for (const [dr, dc] of directions) {
          const newRow = row + dr;
          const newCol = col + dc;
          if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols && grid[newRow][newCol] === '1') {
            union(index(row, col), index(newRow, newCol));
          }
        }
      }
    }
  }

  return count;
};

module.exports = numIslands;
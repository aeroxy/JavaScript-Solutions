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

module.exports = minPathSum;
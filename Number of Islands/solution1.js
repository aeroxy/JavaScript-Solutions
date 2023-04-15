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

module.exports = numIslands;
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

module.exports = numIslands;
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  const lastRow = m - 1;
  const lastCol = n - 1;
  const map = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));

  for (let row = lastRow; row >= 0; --row) {
    for (let col = lastCol; col >= 0; --col) {
      if (row === lastRow && col === lastCol) {
        map[row][col] = 1;
        continue;
      }
      const rightPos = map[row][col + 1] || 0;
      const bottomPos = map[row + 1]?.[col] || 0;
      map[row][col] = rightPos + bottomPos;
    }
  }

  return map[0][0];
}

module.exports = uniquePaths;
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
  const tmp = Array.from(
    { length: word1.length + 1 },
    () => Array.from(
      { length: word2.length + 1 },
      () => 0,
    ),
  );
  const lastRow = word1.length;
  const lastCol = word2.length;
  for (let row = lastRow; row >= 0; --row) {
    for (let col = lastCol; col >= 0; --col) {
      if (row === lastRow && col === lastCol) {
        continue;
      }
      if (row === lastRow) {
        tmp[row][col] = lastCol - col;
        continue;
      }
      if (col === lastCol) {
        tmp[row][col] = lastRow - row;
        continue;
      }
      const diagVal = tmp[row + 1][col + 1];
      if (word1[row] === word2[col]) {
        tmp[row][col] = diagVal;
      } else {
        const rightVal = tmp[row][col + 1];
        const bottomVal = tmp[row + 1][col];
        tmp[row][col] = Math.min(rightVal, diagVal, bottomVal) + 1;
      }
    }
  }

  return tmp[0][0];
}

module.exports = minDistance;
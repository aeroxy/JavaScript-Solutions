/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const store = new Set();
  for (let i = 0; i < board.length; ++i) {
    const row = board[i];
    for (let j = 0; j < row.length; ++j) {
      const numString = row[j];
      if (numString === '.') {
        continue;
      }
      const num = parseInt(numString, 10);
      if (num < 1 || num > 9) {
        return false;
      }
      const rowText = `${numString}r${i}`;
      if (store.has(rowText)) {
        return false;
      }
      store.add(rowText);
      const columnText = `${numString}c${j}`;
      if (store.has(columnText)) {
        return false;
      }
      store.add(columnText);
      const blockText = `${numString}r${Math.floor(i / 3)}c${Math.floor(j / 3)}`;
      if (store.has(blockText)) {
        return false;
      }
      store.add(blockText);
    }
  }
  return true;
}

module.exports = isValidSudoku;

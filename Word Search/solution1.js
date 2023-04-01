/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  const hashSet = new Set();
  const backtrack = (row, col, i) => {
    const hashKey = `${row},${col}`;
    if (hashSet.has(hashKey)) {
      return false;
    }
    if (board[row]?.[col] === word[i]) {
      hashSet.add(hashKey);
      ++i;
      if (word[i] === undefined) {
        return true;
      }
      const up = backtrack(row - 1, col, i);
      const left = backtrack(row, col - 1, i);
      const down = backtrack(row + 1, col, i);
      const right = backtrack(row, col + 1, i);
      if (up || left || down || right) {
        return true;
      } else {
        hashSet.delete(hashKey);
        return false;
      }
    }
    return false;
  };

  for (let row = 0; row < board.length; ++row) {
    for (let col = 0; col < board[row].length; ++col) {
      if (backtrack(row, col, 0)) {
        return true;
      }
      hashSet.clear();
    }
  }

  return false;
}

module.exports = exist;
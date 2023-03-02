/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
  const EMPTY = '.';
  /**
   * @param {number} row
   * @param {number} col
   * @param {character} digit
   * @return {boolean}
   */
  const isValid = (row, col, digit) => {
    for (let i = 0; i < 9; ++i) {
      if (board[row][i] === digit || board[i][col] === digit) {
        return false;
      }
    }
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    const endRow = startRow + 3;
    const endCol = startCol + 3;
    for (let currentRow = startRow; currentRow < endRow; ++currentRow) {
      for (let currentCol = startCol; currentCol < endCol; ++currentCol) {
        if (currentRow === row && currentCol === col) {
          continue;
        }
        if (board[currentRow][currentCol] === digit) {
          return false;
        }
      }
    }
    return true;
  };

  /**
   * @param {number} index
   * @return {boolean}
   */
  const backtrack = (index) => {
    if (index === 81) {
      return true;
    }
    const row = Math.floor(index / 9);
    const col = index % 9;
    if (board[row][col] === EMPTY) {
      for (let i = 1; i <= 9; ++i) {
        const digit = `${i}`;
        if (isValid(row, col, digit)) {
          board[row][col] = digit;
          if (backtrack(index + 1)) {
            return true;
          }
          board[row][col] = EMPTY;
        }
      }
      return false;
    } else {
      return backtrack(index + 1);
    }
  }
  backtrack(0);
}

module.exports = solveSudoku;

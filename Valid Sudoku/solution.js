/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const column = new Array(9).fill(null).map(() => new Map());
  const matrix = new Array(9).fill(null).map(() => new Map());
  for (let i = 0; i < board.length; ++i) {
    const row = board[i];
    const map = new Map();
    for (let j = 0; j < row.length; ++j) {
      const numString = row[j];
      if (numString === '.') {
        continue;
      }
      const num = parseInt(numString, 10);
      if (num < 1 || num > 9) {
        return false;
      }
      if (map.get(numString)) {
        return false;
      }
      map.set(numString, true);
      const columnMap = column[j];
      if (columnMap.get(numString)) {
        return false;
      }
      columnMap.set(numString, true);
      const matrixIndex = (() => {
        if (i < 3) {
          if (j < 3) {
            return 0;
          }
          if (j < 6) {
            return 1;
          }
          return 2;
        }
        if (i < 6) {
          if (j < 3) {
            return 3;
          }
          if (j < 6) {
            return 4;
          }
          return 5;
        }

        if (j < 3) {
          return 6;
        }
        if (j < 6) {
          return 7;
        }
        return 8;
      })();
      const matrixMap = matrix[matrixIndex];
      if (matrixMap.get(numString)) {
        return false;
      }
      matrixMap.set(numString, true);
    }
  }
  return true;
}

module.exports = isValidSudoku;

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
  const EMPTY = '.';
  /**
   * @param {number} i
   * @return {character[]}
   */
  const getRow = (i) => board[i];
  /**
   * @param {number} i
   * @return {character[]}
   */
  const getCol = (i) => board.map((row) => row[i]);
  /**
   * @param {number} i
   * @param {number} j
   * @return {character[]}
   */
  const getSubBox = (i, j) => {
    const rowStart = Math.floor(i / 3) * 3;
    const colStart = Math.floor(j / 3) * 3;
    const subBox = [];
    for (let row = rowStart; row < rowStart + 3; ++row) {
      for (let col = colStart; col < colStart + 3; ++col) {
        subBox.push(board[row][col]);
      }
    }
    return subBox;
  };
  /**
   * @param {number} i
   * @param {number} j
   * @param {string} val
   * @return {boolean}
   */
  const isValid = (i, j, val) => {
    const row = getRow(i);
    const col = getCol(j);
    const subBox = getSubBox(i, j);
    return !row.includes(val) && !col.includes(val) && !subBox.includes(val);
  };
  /**
   * @return {boolean}
   */
  const solve = () => {
    for (let i = 0; i < 9; ++i) {
      for (let j = 0; j < 9; ++j) {
        if (board[i][j] === EMPTY) {
          for (let v = 1; v <= 9; ++v) {
            const val = `${v}`;
            if (isValid(i, j, val)) {
              board[i][j] = val;
              if (solve()) {
                return true;
              }
              board[i][j] = EMPTY;
            }
          }
          return false;
        }
      }
    }
    return true;
  };
  solve();
}

module.exports = solveSudoku;

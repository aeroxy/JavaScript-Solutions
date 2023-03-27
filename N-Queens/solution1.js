/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
  const board = Array.from({ length: n }, () => Array(n).fill('.'));
  const solutions = [];

  const isValidMove = (row, col) => {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }

    return true;
  };

  const backtrack = (row) => {
    if (row === n) {
      const solution = board.map((r) => r.join(''));
      solutions.push(solution);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValidMove(row, col)) {
        board[row][col] = 'Q';
        backtrack(row + 1);
        board[row][col] = '.';
      }
    }
  };

  backtrack(0);
  return solutions;
}

module.exports = solveNQueens;
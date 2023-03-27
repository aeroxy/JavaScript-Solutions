/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
  const colSet = new Set();
  const posDiagSet = new Set();
  const negDiagSet = new Set();
  const result = [];
  const tmp = Array.from({ length: n }, () => Array(n).fill('.'));
  const isValid = (col, posDiag, negDiag) => {
    if (colSet.has(col)) {
      return false;
    }
    if (posDiagSet.has(posDiag)) {
      return false;
    }
    if (negDiagSet.has(negDiag)) {
      return false;
    }
    return true;
  }
  const backtrack = (row) => {
    if (row === n) {
      result.push(tmp.map((arr) => arr.join('')));
      return;
    }
    for (let col = 0; col < n; ++col) {
      const posDiag = col - row;
      const negDiag = col + row;
      if (isValid(col, posDiag, negDiag)) {
        tmp[row][col] = 'Q';
        colSet.add(col);
        posDiagSet.add(posDiag);
        negDiagSet.add(negDiag);
        backtrack(row + 1);
        tmp[row][col] = '.';
        colSet.delete(col);
        posDiagSet.delete(posDiag);
        negDiagSet.delete(negDiag);
      }
    }
  };
  backtrack(0);

  return result;
}

module.exports = solveNQueens;
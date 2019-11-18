/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows < 2 || s.length < numRows) {
    return s;
  }
  const matrix = Array(numRows);
  let zig = 1;
  let count = 0;
  for (let c of s) {
    matrix[count] = (matrix[count] || '').concat(c);
    if (count === 0 && zig === -1 || count === numRows - 1 && zig === 1) {
      zig *= -1;
    }
    count += zig;
  }
  return matrix.join('');
};
/**
 * 88 ms
 * 37.8 MB
 */

module.exports = convert;
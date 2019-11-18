/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  const length = s.length;
  if (numRows < 2 || length < numRows) {
    return s;
  }
  const matrix = Array(numRows);
  let zig = true;
  let count = 0;
  let i = 0;
  for (let i = 0; i < length; ++i) {
    matrix[count] = (matrix[count] || '').concat(s[i]);
    zig ? ++count : --count;
    if (count === numRows - 1 || count === 0) {
      zig = !zig;
    };
  }
  return matrix.join('');
};
/**
 * 88 ms
 * 37.9 MB
 */

module.exports = convert;
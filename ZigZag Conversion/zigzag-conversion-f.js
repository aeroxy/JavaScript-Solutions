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
  const length = 2 * numRows - 2;
  let zig = 1;
  let count = 0;
  for (let i = 0; i < s.length; ++i) {
    const remainder = i % length;
    const idx = remainder < numRows ? remainder : length - remainder;
    matrix[idx] = (matrix[idx] || '').concat(s[i]);
  }
  return matrix.join('');
};
/**
 * 88 ms
 * 38 MB
 */

module.exports = convert;
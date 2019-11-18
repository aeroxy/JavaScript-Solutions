/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  const length = numRows * 2 - 2;
  if (!length || s.length < numRows) {
    return s;
  }
  const matrix = new Array(numRows);
  for (let i = 0; i < numRows; ++i) {
    matrix[i] = [];
  }
  const interval = Math.ceil(s.length / length);
  for (let i = 0; i < interval; ++i) {

    for (let a = 0; a < numRows; ++a) {
      const idx = i * length + a;
      if (idx >= s.length) {
        break;
      }
      matrix[a].push(s[idx]);
    }
    for (let b = numRows; b < length; ++b) {
      const idx = i * length + b;
      if (idx >= s.length) {
        break;
      }
      const y = length - b;
      matrix[y].push(s[idx]);
    }
  }
  return matrix.map(a => a.join('')).join('');
};
/**
 * 96 ms
 * 41.9 MB
 */

module.exports = convert;
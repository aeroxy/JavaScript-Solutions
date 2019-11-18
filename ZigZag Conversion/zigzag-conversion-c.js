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
      const c = s[i * length + a];
      if (!c) {
        break;
      }
      matrix[a].push(c);
    }
    for (let b = numRows; b < length; ++b) {
      const c = s[i * length + b];
      if (!c) {
        break;
      }
      matrix[length - b].push(c);
    }
  }
  return matrix.map(a => a.join('')).join('');
};
/**
 * 92 ms
 * 41.6 MB
 */

module.exports = convert;
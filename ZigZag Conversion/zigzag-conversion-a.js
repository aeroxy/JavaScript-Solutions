/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  const length = numRows * 2 - 2;
  if (!length) {
    return s;
  }
  const matrix = new Array(numRows);
  for (let i = 0; i < numRows; ++i) {
    matrix[i] = [];
  }
  const interval = Math.ceil(s.length / length);
  const gap = length - numRows + 1;
  for (let i = 0; i < interval; ++i) {

    for (let a = 0; a < numRows; ++a) {
      const idx = i * length + a;
      if (idx >= s.length) {
        break;
      }
      matrix[a][i * gap] = s[idx];
    }
    for (let b = numRows; b < length; ++b) {
      const idx = i * length + b;
      if (idx >= s.length) {
        break;
      }
      const y = length - b;
      const x = i * gap + b - numRows + 1;
      matrix[y][x] = s[idx];
    }
  }
  return matrix.map(a => a.join('')).join('');
};
/**
 * 132 ms
 * 50.4 MB
 */

module.exports = convert;
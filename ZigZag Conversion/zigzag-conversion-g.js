/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  const matrix = Array(numRows);
  let zigzag = [];
  const nLength = 2 * numRows - 2;
  for (let i = 0; i < numRows; ++i) {
    zigzag[i] = i;
  }
  for (let i = numRows, j = numRows - 2; i < nLength; ++i) {
    zigzag[i] = zigzag[j];
    --j;
  }
  const sLength = s.length;
  const zLength = zigzag.length;
  matrix.fill('');
  for (let i = 0; i < sLength; ++i) {
    matrix[zigzag[ i % zLength ]] = matrix[zigzag[ i % zLength ]].concat(s[i]);
  }
  return matrix.join('');
};
/**
 * 80 ms
 * 39.4 MB
 */

module.exports = convert;
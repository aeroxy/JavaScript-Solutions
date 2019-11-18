/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  const matrix = Array(numRows);
  let zigzag = [...matrix.keys()];
  zigzag.push(...zigzag.slice(1, -1).reverse());
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
 * 40.1 MB
 */

module.exports = convert;
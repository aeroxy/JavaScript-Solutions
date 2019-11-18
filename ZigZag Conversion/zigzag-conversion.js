/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  const matrix = new Array(numRows);
  for (let i = 0; i < numRows; ++i) {
    matrix[i] = [];
  }
  const zig = () => {};
  const zag = () => {};
  for (let i = 0; i < s.length; ++i) {
    const remainder = i % numRows;
    if (!remainder) {
      ++counter;
    }
    console.log({
      matrix: JSON.stringify(matrix),
      remainder,
      counter,
      counter_remainder: counter % 2,
      i,
      c: s[i]
    })
    if (counter % 2) {
      console.log(`matrix[${numRows - remainder}][${remainder}]`)
      
    } else {
      console.log(`matrix[${remainder}][${counter}]`)
      console.log(matrix[remainder][counter]);
      matrix[remainder][counter] = s[i];
    }
  }
  return matrix.map(a => a.join('')).join('');
};

module.exports = convert;
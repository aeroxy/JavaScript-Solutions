/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = [];

  for (let i = 0; i < numRows; ++i) {
    result[i] = [];
    const x = i - 1;
    for (let j = 0; j <= i; ++j) {
      result[i][j] = (result[x]?.[j - 1] ?? 0) + (result[x]?.[j] ?? 0) || 1;
    }
  }

  return result;
};

module.exports = generate;
/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const result = [];
  if (!n) {
    result.push('');
  }
  for (let i = 0; i < n; ++i) {
    for (let left of generateParenthesis(i)) {
      for (let right of generateParenthesis(n - 1 - i)) {
        result.push(`(${left})${right}`);
      }
    }
  }
  return result;
};

module.exports = generateParenthesis;

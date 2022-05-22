function backtrack(result, current, open, close, max){
  if (current.length === max * 2) {
    result.push(current.join(''));
    return;
  }

  if (open < max) {
    current.push('(');
    backtrack(result, current, open + 1, close, max);
    current.pop();
  }
  if (close < open) {
    current.push(')');
    backtrack(result, current, open, close + 1, max);
    current.pop();
  }
}

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const result = [];
  backtrack(result, [], 0, 0, n);
  return result;
};

module.exports = generateParenthesis;

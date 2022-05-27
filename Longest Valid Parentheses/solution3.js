/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  let maxans = 0;
  const stack = [-1];
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (!stack.length) {
        stack.push(i);
      } else {
        maxans = Math.max(maxans, i - stack[stack.length - 1]);
      }
    }
  }
  return maxans;
}

module.exports = longestValidParentheses;
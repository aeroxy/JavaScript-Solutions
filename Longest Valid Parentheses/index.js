/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  let left = 0;
  let right = s.length - 1;
  while (s[left] !== '(' && left < right) {
    left++;
  }
  if (left === right) {
    return 0;
  }
  while (s[right] !== ')' && left < right) {
    right--;
  }
  if (s[right] !== ')') {
    return 0;
  }
  let maxlen = 0;
  for (let i = left; i < s.length; i++) {
    for (let j = i + 2; j <= s.length; j += 2) {
      const subString = s.substring(i, j);
      const isValidSubString = isValid(subString);
      // console.log(isValidSubString, subString);
      if (isValidSubString) {
        maxlen = Math.max(maxlen, subString.length);
      }
    }
  }
  return maxlen;
};

function isValid(string) {
  let openCount = 0;
  const stringLength = string.length;
  for (let index = 0; index < stringLength; index++) {
    if (string[index] === '(') {
      ++openCount;
    } else if (openCount <= 0) {
      return false;
    } else {
      --openCount;
    }
  }
  return openCount === 0;
}

module.exports = longestValidParentheses;
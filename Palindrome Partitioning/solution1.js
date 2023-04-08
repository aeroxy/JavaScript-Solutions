/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  /**
   * @param {string} string
   * @return {boolean}
   */
  const isPalindrome = (string) => {
    let left = 0;
    let right = string.length - 1;
    while (left < right) {
      if (string.charAt(left) !== string.charAt(right)) {
        return false;
      }
      ++left;
      --right;
    }
    return true;
  };

  const result = [];

  /**
   * @param {number} start
   * @return {boolean}
   */
  const backtrack = (start, path) => {
    if (start === s.length) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < s.length; ++i) {
      const subString = s.substring(start, i + 1);
      if (isPalindrome(subString)) {
        path.push(subString);
        backtrack(i + 1, path);
        path.pop();
      }
    }
  };
  backtrack(0, []);

  return result;
};

module.exports = partition;
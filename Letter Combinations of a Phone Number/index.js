const digitMap = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits, position = 0, string = '', result = []) {
  if (position === digits.length) {
    string && result.push(string);
  } else {
    const letters = digitMap[digits[position]] || [];
    for (let i = 0; i < letters.length; i++) {
      letterCombinations(digits, position + 1, string + letters[i], result);
    }
  }
  return result;
};

module.exports = letterCombinations;
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(string) {
  const openBrackets = [];
  const openBracketSet = new Set(['(', '[', '{']);
  const openBracketMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (let character of string) {
    if (openBracketSet.has(character)) {
      openBrackets.push(character);
    } else {
      const lastOpenBracket = openBrackets.pop();
      const predictedLastClosedBracket = openBracketMap[lastOpenBracket];
      if (predictedLastClosedBracket !== character) {
        return false;
      }
    }
  }
  return openBrackets.length === 0;
};

module.exports = isValid;
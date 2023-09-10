/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];
  let curNum = 0;
  let curStr = '';
  for (const char of s) {
    if (/[0-9]/.test(char)) {
      curNum = curNum * 10 + parseInt(char, 10);
    } else if (char === '[') {
      stack.push([curNum || 1, curStr]);
      curNum = 0;
      curStr = '';
    } else if (char === ']') {
      const [lastNum, lastStr] = stack.pop();
      curStr = `${lastStr}${curStr.repeat(lastNum)}`;
    } else {
      curStr += char;
    }
  }
  return curStr;
};

module.exports = decodeString;

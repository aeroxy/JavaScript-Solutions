/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = num => {
  const str = num.toString();
  const length = str.length;
  const map = [
    ['I', 'V'],
    ['X', 'L'],
    ['C', 'D'],
    ['M']
  ];
  let result = '';
  for (let i = 0; i !== length; ++i) {
    const n = parseInt(str[length - 1 - i]);
    if (n < 4) {
      for (let r = 0; r < n; ++r) {
        result = `${map[i][0]}${result}`;
      }
      continue;
    }
    if (n === 4) {
      result = `${map[i][0]}${map[i][1]}${result}`;
      continue;
    }
    if (n === 5) {
      result = `${map[i][1]}${result}`;
      continue;
    }
    if (n < 9) {
      for (let r = 5; r < n; ++r) {
        result = `${map[i][0]}${result}`;
      }
      result = `${map[i][1]}${result}`;
      continue;
    }
    if (n === 9) {
      result = `${map[i][0]}${map[i + 1][0]}${result}`;
    }
  }
  return result;
};
/**
 * 132 ms
 * 40.9 MB
 */

module.exports = intToRoman;
/**
 * @param {number} num
 * @return {string}
 */
const romanToInt = s => {
  const length = s.length;
  const double = new Map([
    ['CM', 900],
    ['CD', 400],
    ['XC', 90],
    ['XL', 40],
    ['IX', 9],
    ['IV', 4]
  ]);
  const single = new Map([
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
  ]);
  let i = 0, result = 0;
  while (i !== length) {
    let key = `${s[i]}${s[i + 1] || ''}`;
    const doubleValue = double.get(key);
    if (doubleValue) {
      result += doubleValue;
      i += 2;
    } else {
      result += single.get(s[i]);
      i += 1;
    }
  }
  return result;
};
/**
 * 144 ms
 * 43.6 MB
 */

module.exports = romanToInt;
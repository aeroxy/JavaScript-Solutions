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
  let p = '';
  const singleCounter = i => {
    const key = s[i];
    result += single.get(key);
    p = key;
    return i += 1;
  }
  while (i !== length) {
    if (p & 'IXC'.includes(p)) {
      i = singleCounter(i)
    }
    let key = `${s[i]}${s[i + 1]}`;
    const doubleValue = double.get(key);
    if (doubleValue) {
      result += doubleValue;
      p = key;
      i += 2;
    } else {
      i = singleCounter(i);
    }
  }
  return result;
}
/**
 * 148 ms
 * 43.4 MB
 */

module.exports = romanToInt;
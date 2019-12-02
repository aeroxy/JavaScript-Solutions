/**
 * @param {number} num
 * @return {string}
 */
const romanToInt = s => {
  const length = s.length;
  const double = {
    CM: 900,
    CD: 400,
    XC: 90,
    XL: 40,
    IX: 9,
    IV: 4,
  };
  const single = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };
  let i = 0, result = 0;
  while (i !== length) {
    let key = `${s[i]}${s[i + 1] || ''}`;
    if (double[key]) {
      result += double[key];
      i += 2;
    } else {
      result += single[s[i]];
      i += 1;
    }
  }
  return result;
};
/**
 * 156 ms
 * 40.6 MB
 */

module.exports = romanToInt;
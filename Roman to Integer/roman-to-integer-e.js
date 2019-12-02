/**
 * @param {number} num
 * @return {string}
 */
const romanToInt = s => {
  let p = 0, result = 0;
  for (let i = s.length - 1; i >= 0; --i) {
    let val = 0;
    switch(s[i]) {
      case 'I': val = 1; break;
      case 'V': val = 5; break;
      case 'X': val = 10; break;
      case 'L': val = 50; break;
      case 'C': val = 100; break;
      case 'D': val = 500; break;
      case 'M': val = 1000; break;
    }
    result += ((val < p) ? -1 : 1) * val;
    p = val;
  }
  return result;
}
/**
 * 144 ms
 * 39.9 MB
 */

module.exports = romanToInt;
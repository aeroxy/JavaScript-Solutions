/**
 * @param {number} num
 * @return {string}
 */
const romanToInt = s => {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ]);
  let result = 0;
  let p = '';
  for (let c of s) {
    let add = map.get(c);
    if (
      (p === 'I' && 'VX'.includes(c)) ||
      (p === 'X' && 'LC'.includes(c)) ||
      (p === 'C' && 'DM'.includes(c))
    ) {
      add -= map.get(p) * 2;
    }
    result += add;
    p = c;
  }
  return result;
}
/**
 * 148 ms
 * 41.8 MB
 */

module.exports = romanToInt;
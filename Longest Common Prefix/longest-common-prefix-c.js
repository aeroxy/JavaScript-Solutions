/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  let result = '';
  if (strs.length === 0) return result;
  if (strs.length === 1) return strs[0];
  let idx = strs[0].length >> 1;
  let a, b;
  while (true) {
    if (strs[0][idx] === undefined || idx === b) {
      return result;
    }
    let comp = strs[0].substring(0, idx + 1);
    let broke = false;
    for (let str of strs) {
      if (str.indexOf(comp) !== 0) {
        b = a;
        a = idx;
        --idx;
        broke = true;
        break;
      }
    }
    if (!broke) {
      result = comp;
      b = a;
      a = idx;
      ++idx;
    }
  }
};
/**
 * 60 ms
 * 35.7 MB
 */

module.exports = longestCommonPrefix;
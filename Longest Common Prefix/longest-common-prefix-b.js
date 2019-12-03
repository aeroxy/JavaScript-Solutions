/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  let result = '';
  if (!strs.length) return result;
  if (strs.length === 1) return strs[0];
  const length = strs[0].length;
  const last = length - 1;
  const map = new Map();
  const binaryComp = idx => {
    if (!strs[0][idx] || map.get(idx)) {
      return result;
    }
    map.set(idx, true);
    let comp = strs[0].substring(0, idx + 1);
    for (let str of strs) {
      if (str.indexOf(comp) !== 0) {
        if (idx === 0 || result.length === idx) {
          return result;
        }
        return binaryComp(idx - 1);
      }
    }
    if (idx === last) {
      return comp;
    }
    result = comp;
    return binaryComp(idx + 1);
  };
  let idx = length >> 1;
  return binaryComp(idx);
};
/**
 * 48 ms
 * 35.4 MB
 */

module.exports = longestCommonPrefix;
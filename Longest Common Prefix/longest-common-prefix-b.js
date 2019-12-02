/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  let result = '';
  const length = strs[0].length;
  if (!length) return result;
  const binaryComp = idx => {
    let comp = strs[0].substring(0, idx);
    for (let str of strs) {
      if (!(comp in str)) {
        if (idx === 0) {
          return result;
        }
        return binaryComp(idx);
      }
    }
    return binaryComp(idx)
  };
  let idx = length >> 1;

  while (true) {
    let c = strs[0][i];
    for (let str of strs) {
      if (str[i] === undefined || str[i] !== c) {
        return result;
      }
    }
    result = result.concat(c);
    ++i;
  }
  return result;
};
/**
 * 72 ms
 * 35.7 MB
 */

module.exports = longestCommonPrefix;
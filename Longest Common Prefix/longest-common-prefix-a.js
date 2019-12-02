/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  let result = '';
  if (!strs[0]) return result;
  let i = 0;
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
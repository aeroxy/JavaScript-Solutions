/**
 * @param {string} str
 * @return {number}
 */

const lengthOfLongestSubstring = str => {
  let start = 0, result = 0;
  const map = new Map();
  for (let i = 0; i < str.length; ++i) {
    const c = str[i];
    const last = map.get(c);
    if (last >= start) start = last + 1;
    map.set(c, i);
    const count = i - start + 1;
    if (count > result) result = count;
  }
  return result;
};
/**
 * 76 ms
 * 37.3 MB
 */

module.exports = lengthOfLongestSubstring;
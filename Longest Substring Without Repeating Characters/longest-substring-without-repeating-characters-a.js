/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = str => {
  let substr = '', result = 0, count = 0;
  for (let c of str) {
    const idx = substr.lastIndexOf(c);
    if (idx !== -1) {
      substr = substr.substr(idx + 1);
      if (substr !== c) substr += c;
      count = substr.length;
    } else {
      substr += c;
      ++count;
    };
    if (result < count) result = count;
  }
  return result;
};
/**
 * 96 ms
 * 39.7 MB
 */

module.exports = lengthOfLongestSubstring;
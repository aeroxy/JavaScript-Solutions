/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  const needleLength = needle.length;
  if (!needleLength) {
    return 0;
  }
  const maxIndex = haystack.length - needleLength;
  for (let index = 0; index <= maxIndex; index++) {
    if (haystack.substr(index, needleLength) === needle) {
      return index;
    }
  }
  return -1;
};

module.exports = strStr;
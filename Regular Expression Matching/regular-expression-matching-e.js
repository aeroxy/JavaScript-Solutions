/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  if (!p.length) {
    return !s.length;
  }
  const firstMatch = s.length && (p[0] === s[0] || p[0] === '.');
  if (p.length >= 2 && p[1] === '*') {
    return isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p));
  }
  return firstMatch && isMatch(s.substring(1), p.substring(1));
};
/**
 * 116 ms
 * 37.4 MB
 */

module.exports = isMatch;
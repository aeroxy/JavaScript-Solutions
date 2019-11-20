/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => s === (s.match(new RegExp(p)) || [])[0];
/**
 * 76 ms
 * 34.6 MB
 */

module.exports = isMatch;
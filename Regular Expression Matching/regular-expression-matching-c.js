/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => s.length === (s.match(new RegExp(p)) || [{length: -1}])[0].length;
/**
 * 72 ms
 * 34.6 MB
 */

module.exports = isMatch;
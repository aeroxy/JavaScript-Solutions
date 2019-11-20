/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => s.length === (new RegExp(p).exec(s) || [{length: -1}])[0].length;
/**
 * 64 ms
 * 34.8 MB
 */

module.exports = isMatch;
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => s === (new RegExp(p).exec(s) || [])[0];
/**
 * 80 ms
 * 34.5 MB
 */

module.exports = isMatch;
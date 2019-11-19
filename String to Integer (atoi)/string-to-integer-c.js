/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = str => {
  return Math.max(Math.min(parseInt(str) || 0, 0x7fffffff), -0x80000000);
};
/**
 * 72 ms
 * 35.6 MB
 */

module.exports = myAtoi;
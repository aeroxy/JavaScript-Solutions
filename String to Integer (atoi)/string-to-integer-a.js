/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = str => {
  const int = parseInt(str);
  if (isNaN(int)) {
    return 0;
  }
  if (int > 0x7fffffff) {
    return 0x7fffffff;
  }
  if (int < -0x80000000) {
    return -0x80000000;
  }
  return int;
};
/**
 * 80 ms
 * 35.6 MB
 */

module.exports = myAtoi;
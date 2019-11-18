/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  const s = x.toString();
  if (s[0] === '-') {
    const result = parseInt(`-${s.slice(1).split('').reverse().join('')}`);
    return -2147483648 <= result ? result : 0;
  } else {
    const result = parseInt(s.split('').reverse().join(''));
    return 2147483648 > result ? result : 0;
  }
};
/**
 * 72 ms
 * 36.2 MB
 */

module.exports = reverse;
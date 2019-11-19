/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  const s = x.toString();
  if (s[0] === '-') {
    const rev = parseInt(`-${s.slice(1).split('').reverse().join('')}`);
    return -0x80000000 <= rev ? rev : 0;
  } else {
    const rev = parseInt(s.split('').reverse().join(''));
    return 0x80000000 > rev ? rev : 0;
  }
};
/**
 * 72 ms
 * 35.9 MB
 */

module.exports = reverse;
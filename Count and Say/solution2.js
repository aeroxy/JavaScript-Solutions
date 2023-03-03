/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
  if (n === 1) {
    return '1';
  }
  /**
   * @param {string} said
   * @param {number} x
   * @return {string}
   */
  const getWhatItSays = (said, x) => {
    if (x === n) {
      return said;
    }
    let lastDigit = said[0];
    let count = 1;
    let whatItSays = '';
    for (let i = 1; i < said.length; ++i) {
      const currentDigit = said[i];
      if (currentDigit === lastDigit) {
        ++count;
      } else {
        whatItSays += `${count}${lastDigit}`;
        count = 1;
        lastDigit = currentDigit;
      }
    }
    whatItSays += `${count}${lastDigit}`;
    return getWhatItSays(whatItSays, x + 1);
  };
  return getWhatItSays('1', 1);
}

module.exports = countAndSay;

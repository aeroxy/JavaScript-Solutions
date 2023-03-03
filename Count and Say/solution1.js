/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
  if (n === 1) {
    return '1';
  }
  /**
   * @param {string} x
   * @return {string}
   */
  const getWhatItSaid = (x) => {
    let lastDigit = x[0];
    let count = 1;
    if (x.length === 1) {
      return `${count}${lastDigit}`;
    }
    const said = [];
    for (let i = 1; i < x.length; ++i) {
      const currentDigit = x[i];
      if (currentDigit === lastDigit) {
        ++count;
      } else {
        said.push(`${count}${lastDigit}`);
        count = 1;
        lastDigit = currentDigit;
      }
    }
    said.push(`${count}${lastDigit}`);
    return said.join('');
  };
  let whatItUsedToSay = '1';
  for (let i = 2; i <= n; ++i) {
    whatItUsedToSay = getWhatItSaid(whatItUsedToSay);
  }
  return whatItUsedToSay;
}

module.exports = countAndSay;

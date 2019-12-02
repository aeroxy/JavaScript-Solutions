/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = num => {
  const map = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  let result = '';
  for (let val of map) {
    const first = val[0];
    while( (num / first) >> 0 ){
      result += val[1];
      num -= first;
    }
  }
  return result;
};
/**
 * 124 ms
 * 41.7 MB
 */

module.exports = intToRoman;
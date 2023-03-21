/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
  const length1 = num1.length;
  const length2 = num2.length;
  const tmp = new Array(length1 + length2).fill(0);
  for (let i = length1 - 1; i >= 0 ; --i) {
    for (let j = length2 - 1; j >= 0 ; --j) {
      const a = parseInt(num1[i], 10);
      const b = parseInt(num2[j], 10);
      const production = a * b;
      const pos1 = i + j + 1;
      const pos2 = i + j;
      const sum = production + tmp[pos1];
      tmp[pos1] = sum % 10;
      tmp[pos2] += Math.floor(sum / 10);
    }
  }
  const result = [];
  for (const num of tmp) {
    if (result.length === 0 && num === 0) {
      continue;
    }
    result.push(num);
  }

  return result.length ? result.join('') : '0';
}

module.exports = multiply;
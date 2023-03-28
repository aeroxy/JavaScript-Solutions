/**
 * @param {number} i
 * @param {number} j
 * @param {number} k
 * @return {number}
 */
function beautifulDays(i, j, k) {
  let result = 0;

  for (let x = i; x <= j; ++x) {
    const y = x.toString().split('').reverse().join('') - 0;
    const z = x - y;
    if (z % k === 0) {
      ++result
    }
  }

  return result;
}

module.exports = beautifulDays;
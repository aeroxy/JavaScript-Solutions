/**
 * @param {number[]} arr
 * @return {number}
 */
function missingNumber(arr) {
  let sum = 0;
  for (let i = 1; i <= 100; ++i) {
    sum += i;
  }

  for (let num of arr) {
    sum -= num;
  }

  return sum;
}

module.exports = missingNumber;

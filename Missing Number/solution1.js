/**
 * @param {number[]} arr
 * @return {number}
 */
function missingNumber(arr) {
  const map = {};
  for (let i = 1; i <= 100; ++i) {
    map[i] = false;
  }

  for (let num of arr) {
    map[num] = true;
  }

  const result = Object.keys(map).filter((num) => !map[num]);

  return result[0];
}

module.exports = missingNumber;
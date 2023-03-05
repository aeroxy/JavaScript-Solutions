/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive (nums) {
  let maxInt = nums.length + 1;
  const hashMap = nums.reduce((acc, cur) => {
    acc[cur] = true;
    return acc;
  }, {});

  for (let i = 1; i <= maxInt; ++i) {
    if (!hashMap[i]) {
      return i;
    }
  }
}

module.exports = firstMissingPositive;
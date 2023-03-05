/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive (nums) {
  let result = 1;
  nums.sort((a, b) => a - b).forEach(num => {
    if (num === result) {
      result = num + 1;
    }
  });
  return result;
}

module.exports = firstMissingPositive;
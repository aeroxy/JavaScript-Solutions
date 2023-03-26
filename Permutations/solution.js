/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  if (nums.length === 1) {
    return [nums];
  }
  const result = [];
  for (let i = 0; i < nums.length;) {
    const originNum = nums[i];
    const permutations = permute([
      ...nums.slice(0, i),
      ...nums.slice(++i),
    ]);
    for (const permutation of permutations) {
      permutation.push(originNum);
      result.push(permutation);
    }
  }
  return result;
}

module.exports = permute;
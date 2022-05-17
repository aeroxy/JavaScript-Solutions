function twoSum(nums, target, start) {
  const result = [];
  const hashSet = new Set();

  for (let i = start; i < nums.length; ++i) {
    if (result[result.length - 1]?.[1] !== nums[i]) {
      const remain = target - nums[i];
      if (hashSet.has(remain)) {
        result.push([remain, nums[i]]);
      }
    }
    hashSet.add(nums[i]);
  }
                                            
  return result;
}

function kSum(nums, target, start, k) {
  const result = [];
  const numLength = nums.length;
  if (start === numLength) {
    return result;
  }
  const averageValue = target / k;
  if  (nums[start] > averageValue || averageValue > nums[numLength - 1]) {
    return result;
  }
  if (k === 2) {
    return twoSum(nums, target, start);
  }
  for (let i = start; i < numLength; ++i) {
    if (i === start || nums[i - 1] !== nums[i]) {
      for (
        let subset of kSum(
          nums, // original nums array
          target - nums[i], // remain of target
          i + 1, // start index of next kSum
          k - 1, // reduction of k
        )
      ) {
        result.push([nums[i], ...subset]);
      }
    }
  }
  return result;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
  if (nums.length < 4) {
    return [];
  }
  nums.sort((a, b) => a - b);
  return kSum(nums, target, 0, 4);
};

module.exports = fourSum;
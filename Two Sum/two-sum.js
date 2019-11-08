const twoSum = function(nums, target) {
  const comp = {}
  for (let idx = 0; idx < nums.length; ++idx) {
    if (comp[nums[idx]] >= 0) {
      return [ comp[nums[idx]], idx]
    }
    comp[target - nums[idx]] = idx
  }
}
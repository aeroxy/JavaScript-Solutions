/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
  let pointer1 = nums.length - 2;
  let pointer2 = nums.length - 1;
  while (pointer1 >= 0 && nums[pointer1] >= nums[pointer2]) {
    pointer1--;
    pointer2--;
  }
  if (pointer1 >= 0) {
    pointer2 = nums.length - 1;
    while (pointer2 >= 0 && nums[pointer1] >= nums[pointer2]) {
      pointer2--;
    }
    swap(nums, pointer1, pointer2);
  }

  pointer1++;
  pointer2 = nums.length - 1;
  while (pointer1 < pointer2) {
    swap(nums, pointer1, pointer2);
    pointer1++;
    pointer2--;
  }

  return nums;
};

function swap(nums, pointer1, pointer2) {
  nums[pointer1] = nums[pointer1] + nums[pointer2];
  nums[pointer2] = nums[pointer1] - nums[pointer2];
  nums[pointer1] = nums[pointer1] - nums[pointer2];
};

module.exports = nextPermutation;